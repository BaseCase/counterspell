(ns counterspell.core
  (:require [reagent.dom.client :as rdom]
            [reagent.core :as r]
            [counterspell.core.words :refer [words]]))


(defn index [coll] (map-indexed vector coll))



;; TODO: how many turns should the game be?
;; TODO: how big should the grid be?
(def game-turns 3)
(def grid-rows 5)
(def grid-cols 4)

;; TODO: figure out how to get seeds working
(defn create-letter-generator [seed]
  (let [alphabet "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    (repeatedly #(rand-nth alphabet))))

(def letters (create-letter-generator nil))

;; Gives us columns as a list of lists of letters
;; We'll render the columns bottom to top; that is, first item is lowest of the screen.
(defn generate-game-grid []
  (let [height (* grid-rows (inc game-turns))]
    (->> letters
         (take (* height grid-cols))
         (partition height))))

(def possible-game-states #{:playing :tiles-deleting})

(def state (r/atom {:grid (generate-game-grid)
                    :active-tiles []
                    :not-a-real-word nil
                    :submitted-words []
                    :game-state :playing}))


(defn tile-active? [x y]
  (some #{[x y]} (@state :active-tiles)))

(defn tiles-to-string [tiles grid]
  (apply str (map (fn [[x y]]
                    (nth (nth grid x) y))
                  tiles)))

(defn real-word? [s]
  (words s))

(defn submit-word! [tiles]
  (swap! state (fn [s]
                 (let [word (.toLowerCase (tiles-to-string tiles (s :grid)))]
                   (if (real-word? word)
                     (merge s {:submitted-words (conj (s :submitted-words) word)
                               :game-state :tiles-deleting})
                     (merge s {:not-a-real-word word}))))))

(defn legal-tiles []
  (if-let [tail (last (@state :active-tiles))]
    ;; if we have an active selection, legal tiles are any inactive tiles adjacent to the tail
    (let [[x y] tail]
      (-> (for [x' (range (dec x) (+ 2 x))
                y' (range (dec y) (+ 2 y))]
            (when (and (not (tile-active? x' y'))
                       (<= 0 x')
                       (<= 0 y')
                       (< x' grid-cols)
                       (< y' grid-rows))
              [x' y']))
          set
          (disj nil)))
    ;; if there is no selection, any tile is a legal move
    (-> (for [x (range grid-cols)
              y (range grid-rows)]
          [x y])
        set)))

(defn tile-action-at! [x y]
  "takes coords of a clicked tile and figures out what to do with it: update active selection and maybe submit a word."
  (let [active-tiles (@state :active-tiles)]
    (if (tile-active? x y)
      (if (= [x y] (last active-tiles))
        ;; if you click the last tile twice, submit it as a word
        (submit-word! active-tiles)
        ;; if you click the active chain somewhere in its middle, deselect anything past that
        (swap! state (fn [s]
                       (merge s {:active-tiles (conj (->> active-tiles
                                                          (take-while #(not (= % [x y])))
                                                          (into []))
                                                     [x y])
                                 :not-a-real-word nil}))))
      (if ((legal-tiles) [x y])
        ;; if this tile is inactive and valid, activate it!
        (swap! state (fn [s]
                       (merge s {:active-tiles (conj active-tiles [x y])
                                 :not-a-real-word nil})))
        ;; if you click an invalid inactive tile, reset the selection
        (swap! state (fn [s]
                       (merge s {:active-tiles []
                                 :not-a-real-word nil})))))))

;;
;; ui components
;;
(defn letter-tile [{:keys [letter x y]}]
  (let [activated? (tile-active? x y)
        deleting? (and activated? (= :tiles-deleting (@state :game-state)))]
    [:div.letter {:class [(when activated? "active") (when deleting? "deleting")]
                  :on-click #(when (not (= :tiles-deleting (@state :game-state)))
                               (tile-action-at! x y))}
     letter]))


(defn letter-grid []
  (let [grid (:grid @state)]
    [:div.letter-grid
     (for [[x col] (index grid)]
       (let [letters (take grid-rows col)]
         [:div.column {:key x}
          (for [[y l] (index letters)]
            [letter-tile {:letter l :x x :y y
                          :key (str l x y)}])]))]))

(defn building-word []
  (let [word (tiles-to-string (@state :active-tiles) (@state :grid))
        mistake (@state :not-a-real-word)]
    [:div.building-word
     [:h3 word]
     (when mistake
       [:p.mistake (str mistake " is not a word!")])]))

(defn submitted-words []
  (let [words (@state :submitted-words)]
    [:div.submitted-word
     (for [word words]
       [:h4 word])]))

(defn main []
  [:div
   [:h1 "Counterspell!!!"]
   [:div.game-board
    [:div.play-area
     [letter-grid]
     [building-word]]
    [:div.scoreboard
     [submitted-words]]]])

(defonce root (rdom/create-root (.querySelector js/document "#root")))

(defn
  ^:dev/after-load
  init
  []
  (rdom/render root [main]))
