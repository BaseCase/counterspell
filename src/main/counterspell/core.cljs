(ns counterspell.core
  (:require [reagent.dom.client :as rdom]
            [reagent.core :as r]
            [counterspell.words :refer [words]]))

;;
;; generic helpers
;;
(defn with-index [coll] (map-indexed vector coll))
(defn tiles-to-string [tiles] (apply str (map :letter tiles)))



;;
;; initial game data
;;
(def game-turns 3)
;; TODO: how big should the grid be?
(def grid-rows 7)
(def grid-cols 6)

(def tile-states #{:default})
(def game-states #{:selecting-tiles :submitting-word})


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


;; TODO: get seeds working for replayability/shareability
(defn random-letter-generator [seed]
  (let [alphabet "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    (repeatedly #(rand-nth alphabet))))


(defn generate-game-grid [random-seed]
  (let [height (* grid-rows (inc game-turns))]
    (->> (random-letter-generator random-seed)
         (take (* height grid-cols))
         (partition height)
         (mapv (fn [letters]
                 (mapv (fn [letter]
                         {:letter letter
                          :state :default}) letters))))))

(let [full-grid (generate-game-grid nil)
      starters (mapv #(into [] (take grid-rows %)) full-grid)
      reserve (mapv #(into [] (drop grid-rows %)) full-grid)]
  (def state (r/atom {:grid starters
                      :reserve-grid reserve
                      :game-state :selecting-tiles
                      :selected-grid-spaces []
                      :bad-guess? false
                      :found-words []})))


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


;; NOTE: this should be called only on a setTimeout, as a next step action after word submit
(defn after-submitting-word! []
  (swap! state (fn [old]
                 (let [gone (into #{} (map #(vector (% :x) (% :y)) (@state :selected-grid-spaces)))]
                   (-> old
                       (assoc :grid (mapv (fn [[x col]]
                                            (mapv second
                                                  (remove (fn [[y tile]]
                                                            (gone [x y]))
                                                          (with-index col))))
                                          (with-index (old :grid))))
                       (assoc :game-state :selecting-tiles)
                       (assoc :selected-grid-spaces []))))))



(defn submit-word! []
  (let [maybe-word (.toLowerCase (tiles-to-string (@state :selected-grid-spaces)))]
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


(defn main []
  [:div
   [:h1 "Counterspell!!!"]
   [:div {:style {:display "flex"
                  :flex-direction "row"}}
    [:div
     [:div {:comment "the letter grid"
            :style {:display "flex"}}
      (for [[grid-x col] (with-index (@state :grid))]
        [:div {:comment "one column of tiles"
               :key grid-x
               :style {:background "blue"
                       :display "flex"
                       :flex-direction "column-reverse"
                       :align-items "center"}}
         (for [[grid-y tile] (with-index col)]
           [letter-tile {:key grid-y
                         :tile tile
                         :grid-x grid-x
                         :grid-y grid-y}])])]
     [word-in-progress]]
    [found-words]]])


(defn letter-tile [{:keys [tile grid-x grid-y]}]
  [:div {:comment "a single letter tile"
         :class "letter-tile"
         :style (merge {:padding "1rem"
                        :width "100%"}
                       (if (is-selected? {:x grid-x :y grid-y})
                         {:border "1px solid red"
                          :background-color "#fbb"
                          :animation (when (= :submitting-word (@state :game-state))
                                       "fade-out forwards 0.5s")}
                         {:border "1px solid black"}))
         :on-click #(tile-action! {:x grid-x :y grid-y :tile tile})}
   (tile :letter)])


(defn word-in-progress []
  (let [maybe-word (tiles-to-string (@state :selected-grid-spaces))]
    [:div {:comment "the currently-being-spelled word"
           :style {:padding "1rem"
                   :font-size "200%"}
           :class (when (@state :bad-guess?) "naughty")}
     [:h2 maybe-word]]))


(defn found-words []
  [:div {:style {:margin-left "1rem"}}
   [:h2 "Found words:"]
   [:ul
    (for [word (@state :found-words)]
      [:li word])]])


(defonce root (rdom/create-root (.querySelector js/document "#root")))

(defn
  ^:dev/after-load
  init
  []
  (rdom/render root [main]))
