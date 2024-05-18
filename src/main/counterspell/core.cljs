(ns counterspell.core
  (:require [reagent.dom.client :as rdom]))

;; TODO: how many turns should the game be?
(def game-turns 3)

;; TODO: how big should the grid be?
(def grid-size {:rows 5 :cols 4})

;; TODO: figure out how to get seeds working
(defn create-letter-generator [seed]
  (let [alphabet "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    (repeatedly #(rand-nth alphabet))))

(def letters (create-letter-generator nil))


;; Gives us columns as a list of lists of maps.
;; We'll render the columns bottom to top; that is, first item is lowest of the screen.
;; TODO: could this function be less terrible?
(defn generate-game-grid []
  (let [height (* (grid-size :rows) (inc game-turns))
        width (grid-size :cols)
        flat-letters (take (* height width) letters)
        build-starting-maps (fn [letters]
                              (map #(hash-map :letter % :visible false) letters))
        set-initial-visible (fn [xs]
                              (concat
                               (map #(assoc % :visible true) (take (grid-size :rows) xs))
                               (drop (grid-size :rows) xs)))]

    (->> flat-letters
         (partition height)
         (map build-starting-maps)
         (map set-initial-visible))))


(defn letter-grid []
  ;; TODO: the grid probably wants to be a ratom
  (let [grid (generate-game-grid)]
    [:div.letter-grid
     (for [col grid]
       [:div.column
        (for [letter (->> col (filter :visible) reverse)]
          [:div.letter (:letter letter)])])]))

(defn main []
  [:div
   [:h1 "Counterspell!!!"]
   [letter-grid]])

(defonce root (rdom/create-root (.querySelector js/document "#root")))

(defn
  ^:dev/after-load
  init
  []
  (rdom/render root [main]))
