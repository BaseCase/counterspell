(ns counterspell.core
  (:require [reagent.dom.client :as rdom]
            [reagent.core :as r]
            [counterspell.words :refer [words]]
            ["/vendor/jsrand" :as jsrand]))

;;
;; generic helpers
;;
(defn with-index [coll] (map-indexed vector coll))
(defn tiles-to-string [tiles] (apply str (map :letter tiles)))
(defn letter-at [grid x y] (:letter (get-in grid [x y])))

(def letter-values
  {"a" 1
   "b" 3
   "c" 3
   "d" 2
   "e" 1
   "f" 4
   "g" 2
   "h" 4
   "i" 1
   "j" 8
   "k" 5
   "l" 1
   "m" 3
   "n" 1
   "o" 1
   "p" 3
   "q" 10
   "r" 1
   "s" 1
   "t" 1
   "u" 1
   "v" 4
   "w" 4
   "x" 8
   "y" 4
   "z" 10})

(defn score-word [word]
  (->> word
       (map letter-values)
       (apply +)))


;;
;; initial game data
;;
(def game-turns 3)
;; TODO: how big should the grid be?
(def grid-rows 6)
(def grid-cols 5)

(def tile-states #{:default :falling-in})
(def game-states #{:selecting-tiles :submitting-word :advancing-turn :scoring})


(defn neighbors [[x y]]
  (->
   (for [x' (range (dec x) (+ 2 x))
         y' (range (dec y) (+ 2 y))]
     (when (and (not (= [x y] [x' y']))
                (<= 0 x')
                (<= 0 y')
                (< x' grid-cols)
                (< y' grid-rows))
       [x' y']))
   set
   (disj nil)))


(defn random-letter-generator [seed]
  (let [alphabet (clj->js "abcdefghijklmnopqrstuvwxyz")
        generator (new jsrand seed)]
    (repeatedly #(.choice generator alphabet))))


(defn generate-game-grid [random-seed]
  (let [height (* grid-rows (inc game-turns))]
    (->> (random-letter-generator random-seed)
         (take (* height grid-cols))
         (partition height)
         (mapv (fn [letters]
                 (mapv (fn [letter]
                         {:letter letter
                          :state :default}) letters))))))


(defn init-game [random-seed]
  (let [full-grid (generate-game-grid random-seed)
        starters (mapv #(into [] (take grid-rows %)) full-grid)
        reserve (mapv #(into [] (drop grid-rows %)) full-grid)]
    (def state (r/atom {:grid starters
                        :random-seed random-seed
                        :reserve-grid reserve
                        :game-state :selecting-tiles
                        :selected-grid-spaces []
                        :bad-guess? false
                        :remaining-words []
                        :found-words []}))))


;;
;; game actions
;;
(defn is-selected? [{:keys [x y]}]
  (some #(and (= x (% :x)) (= y (% :y))) (@state :selected-grid-spaces)))


(defn is-legal-selection? [x y]
  ;; NOTE: this currently assumes the space in question is deselected, because that's handled
  ;;       further up the chain in tile-action! need to backfill that rule if this function
  ;;       is to be used in any other context.
  (if-let [tail (last (@state :selected-grid-spaces))]
    ((neighbors [(tail :x) (tail :y)]) [x y])

    ;; any space is legal if there are no current selections
    true))


(defn remove-selected-spaces-from-grid [grid selected]
  (mapv (fn [[x col]]
          (mapv second
                (remove (fn [[y tile]]
                          (selected [x y]))
                        (with-index col))))
        (with-index grid)))


(defn add-tiles-from-reserve [grid reserve removed]
  (into []
        (let [by-col (group-by first removed)]
          (for [x (range grid-cols)]
            (let [col (nth grid x)
                  needed (count (by-col x))
                  extras (take needed (nth reserve x))]
              (into []
                    (concat col
                            (map #(assoc % :state :falling-in) extras))))))))

(defn remove-tiles-from-reserve [reserve removed]
  (let [by-col (group-by first removed)]
    (for [x (range grid-cols)]
      (let [col (nth reserve x)
            used (count (by-col x))]
        (drop used col)))))



;;
;; scoring
;;

(def words-by-first-letter
  (->> words
       (group-by first)
       (map (fn [[k v]] [k (set v)]))
       (into {})))

(defn path-to-word [path]
  (apply str (map #(letter-at (@state :grid) (% 0) (% 1)) path)))


;; 0. push our starting point onto the to-check queue
;; while the queue is not empty:
;;   1. pop a path from the to-check queue
;;   2. is our path to this point a full word?
;;      2a. if yes, push that into our "found words paths" set. continue on regardless.
;;   3. is our path to this point a partial word?
;;      3a. if no, continue on to next entry of queue
;;      3b. if yes:
;;        4. look at all neighbors of path's tail
;;        5. subtract neighbors that are in our path already
;;        6. put these possible paths on our list of paths to check
;; finally, return the longest guy in the "found words paths" list
(defn words-reachable-from [x y]
  (let [words (words-by-first-letter (:letter (get-in (@state :grid) [x y])))
        words-vec (vec words)]
    (loop [to-check [[[x y]]]  ;; a queue (vector) of vectors of grid points, each one representing a path through the grid
           found-words []]
      (if (empty? to-check)
        found-words
        (let [path (last to-check)
              word-so-far (path-to-word path)
              partial-word-re (re-pattern (str "^" word-so-far))
              is-full-word? (words word-so-far)
              is-partial-word? (some #(re-find partial-word-re %) words-vec)
              unchecked-neighbors (apply disj (neighbors (last path)) path)
              potential-paths (mapv #(conj path %) unchecked-neighbors)]
          (recur (if is-partial-word?
                   (apply conj (pop to-check) potential-paths)     ;; keep searching down this path if it might be a word
                   (pop to-check))                                 ;; if not, abandon this path and go back to the rest
                 (if is-full-word?
                   (conj found-words path)
                   found-words)))))))


(defn run-scoring! []
  (let [longest-paths-from-each-tile (for [x (range grid-cols)
                                           y (range grid-rows)]
                                       (->> (words-reachable-from x y)
                                            (sort-by count >)
                                            first))
        longest-words-with-paths (->> longest-paths-from-each-tile
                                      (remove nil?)
                                      (map #(vector (path-to-word %) %)))]
    (swap! state assoc
           :remaining-words longest-words-with-paths
           :game-state :done)))



  ;; NOTE: this should be called only on a setTimeout, as a next step action after post-word-submit grid update
(defn after-advancing-turn! []
  (if (= game-turns (count (@state :found-words)))
    (do
      (swap! state assoc :game-state :scoring)
      (js/setTimeout run-scoring! 1000))

    (swap! state (fn [old]
                   (-> old
                       (assoc :game-state :selecting-tiles)
                       (assoc :grid (mapv (partial mapv #(assoc % :state :default)) (old :grid))))))))



;; NOTE: this should be called only on a setTimeout, as a next step action after word submit
(defn after-submitting-word! []
  (do
    (swap! state (fn [old]
                   (let [gone (into #{} (map #(vector (% :x) (% :y)) (@state :selected-grid-spaces)))]
                     (-> old
                         (assoc :grid (-> (old :grid)
                                          (remove-selected-spaces-from-grid gone)
                                          (add-tiles-from-reserve (old :reserve-grid) gone)))
                         (assoc :game-state :advancing-turn)
                         (assoc :selected-grid-spaces [])
                         (update :reserve-grid remove-tiles-from-reserve gone)))))
    (js/setTimeout after-advancing-turn! 600)))



(defn submit-word! []
  (let [maybe-word (tiles-to-string (@state :selected-grid-spaces))]
    (if (words maybe-word)
      (do
        (swap! state (fn [old]
                       (-> old
                           (update :found-words conj maybe-word)
                           (assoc :game-state :submitting-word))))
        (js/setTimeout after-submitting-word! 470))

      (swap! state assoc :bad-guess? true))))


(defn tile-action! [{:keys [x y tile]}]
  (let [selected-grid-space {:x x :y y :letter (tile :letter)}]
    (when (= :selecting-tiles (@state :game-state))
      (if (is-selected? selected-grid-space)
        (if (= selected-grid-space (last (@state :selected-grid-spaces)))

          ;; if you click the last selected tile again, submit the word
          (submit-word!)

          ;; if you click a selected tile in the middle of the chain, revert selection to it
          (swap! state (fn [old]
                         (let [new-selected (conj (->> (old :selected-grid-spaces)
                                                       (take-while #(not (= % selected-grid-space)))
                                                       (into []))
                                                  selected-grid-space)]
                           (assoc old :selected-grid-spaces new-selected
                                  :bad-guess? false)))))

        (if (is-legal-selection? x y)

          ;; if you click an unselected tile, select it if it's a valid selection!
          (swap! state (fn [old]
                         (assoc old
                                :selected-grid-spaces
                                (conj (old :selected-grid-spaces) selected-grid-space)
                                :bad-guess? false)))

          ;; if you click an unselected tile that's *not* a valid selection, deselect all!
          (swap! state assoc :selected-grid-spaces [] :bad-guess? false))))))


;;
;; UI components
;;

(declare letter-tile)
(declare word-in-progress)
(declare found-words)
(declare instructions)


(defn main []
  [:div
   [:div {:comment "header bar"
          :style {:width "100%"
                  :background "rgb(62, 62, 62)"
                  :display "flex"
                  :align-items "baseline"
                  :justify-content "space-between"}}
    [:h1 {:class "other-font"
          :style {:font-size "20px"
                  :letter-spacing "0.06rem"
                  :padding "0.7rem 1rem"
                  :color "white"}}
     "Counterspell"]
    [:div {:class "fancy-font"
           :style {:display "flex"
                   :gap "2rem"}}
     [:a {:href "#"
          :on-click #(do (set! js/location.hash "")
                         (.reload js/location))
          :style {:color "yellow"
                  :font-size "16px"}}
      "Try a different board"]
     [:a {:href "https://itch.io/jam/spring-lisp-game-jam-2024"
          :target "_blank"
          :style {:color "white"
                  :font-size "14px"}}
      "Made for Spring Lisp Game Jam 2024"]
     [:a {:href "https://basecase.itch.io/counterspell"
          :target "_blank"
          :style {:color "white"
                  :font-size "14px"}}
      "itch.io Page"]]]
   [:h6 {:style {:color "#777"}} (str "(seed: " (@state :random-seed) ")")]
   [:div {:style {:display "flex"
                  :flex-direction "row"
                  :gap "1rem"
                  :padding-top "2rem"}}
    [instructions]
    [:div
     [:div {:comment "the letter grid"
            :style {:display "flex"
                    :gap "5px"}}
      (for [[grid-x col] (with-index (@state :grid))]
        [:div {:comment "one column of tiles"
               :key grid-x
               :style {:display "flex"
                       :flex-direction "column-reverse"
                       :align-items "center"
                       :gap "5px"}}
         (for [[grid-y tile] (with-index col)]
           [letter-tile {:key grid-y
                         :tile tile
                         :grid-x grid-x
                         :grid-y grid-y}])])]
     [word-in-progress]]
    [found-words]]])


(defn letter-tile [{:keys [tile grid-x grid-y]}]
  [:div {:comment "a single letter tile"
         :class "letter-tile fancy-font"
         :style (merge {:padding "1.2rem"
                        :width "100%"
                        :font-size "24px"
                        :box-shadow "rgba(0, 0, 0, 0.3) 0px 2px 1px 0px"
                        :border-radius "4px"}
                       (if (is-selected? {:x grid-x :y grid-y})
                         {:border "1px solid rgb(0, 86, 196)"
                          :background "rgb(171, 208, 255)"
                          :box-shadow "none"
                          :animation (when (= :submitting-word (@state :game-state))
                                       "fade-out forwards 0.5s")}
                         {:border "1px solid #555"})
                       (when (and (= :falling-in (tile :state))
                                  (= :advancing-turn (@state :game-state)))
                         {:animation "0.5s forwards fall-in"}))
         :on-click #(tile-action! {:x grid-x :y grid-y :tile tile})}
   (.toUpperCase (tile :letter))])


(defn word-in-progress []
  (let [maybe-word (tiles-to-string (@state :selected-grid-spaces))]
    [:div {:comment "the currently-being-spelled word"
           :style {:padding "1rem"
                   :font-size "200%"
                   :font-weight 900}
           :class ["fancy-font" (when (@state :bad-guess?) "naughty")]}
     [:h2 (.toUpperCase maybe-word)]]))


(defn found-words []
  [:div {:style {:margin-left "1rem"}}
   [:h2 {:class "other-font"} "Found words:"]
   [:ul
    (for [word (@state :found-words)]
      [:li {:class "fancy-font"} word])]
   (when (= :scoring (@state :game-state))
     [:<>
      [:hr]
      [:h2 {:class "other-font"} "Scoring. Stand by..."]])
   (when (= :done (@state :game-state))
     [:<>
      [:hr]
      [:h2 {:class "other-font"} "Words remaining on board:"]
      [:table
       [:tbody
        (for [word (map first (@state :remaining-words))]
          [:tr {:class "fancy-font"}
           [:td word]
           [:td (score-word word)]])]]
      [:hr]
      [:h2 {:class "other-font"} "Final score (lower is better)"]
      [:h3 {:class "fancy-font"
            :style {:font-size "28px"
                    :color "blue"}} (->> (@state :remaining-words) (map first) (map score-word) (apply +))]
      [:div
       [:a {:href "#"
            :on-click #(.reload js/location)} "Try this board again"]]
      [:div
       [:a {:href "#"
            :on-click #(do (set! js/location.hash "")
                           (.reload js/location))} "Try a new random board"]]
      [:div
       [:a {:href (str (.-origin js/location) (.-pathname js/location) (.-hash js/location))}
        "Copy this link to challenge someone else to the same board."]]])])

(defn instructions []
  [:div {:style {:padding "0 2rem"
                 :width "21rem"}}
   [:h2 {:class "other-font"
         :style {:border-bottom "1px solid #ccc"}} "How to play"]
   [:ul {:class "other-font"
         :style {:padding "1rem 0 0 0"
                 :font-size "14px"}}
    [:li "The goal of Counterspell is to get the lowest score possible."]
    [:li "You have 3 turns to find words on the board and clear them."]
    [:li "Words are spelled by making a path of adjacent (orthogonal and diagonal) tiles."]
    [:li "Tiles will fall to fill in cleared board spaces."]
    [:li "Score is calculated at the end of the game based on words remaining on the board."]
    [:li "Boards are randomly generated, based on seeds. Replay the same seed and it will be the same board."]
    [:li "Try to beat your own score or challenge a friend!"]]])


(defonce root (rdom/create-root (.querySelector js/document "#root")))

(defn
  ^:dev/after-load
  init
  []
  (let [url-seed (->> (.-hash js/location)
                      (drop 1)
                      (apply str)
                      (parse-long))
        seed (or url-seed (rand-int 10000))]
    (set! js/location.hash seed)
    (init-game seed)
    (rdom/render root [main])))
