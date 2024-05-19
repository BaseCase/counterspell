(ns counterspell.core
  (:require [reagent.dom.client :as rdom]))

;; TODO: how many turns should the game be?
(def game-turns 3)

;; TODO: how big should the grid be?
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
  (let [height (* grid-rows (inc game-turns))
        flat-letters (take (* height grid-cols) letters)]
    (->> flat-letters
         (partition height))))

(defn letter-grid []
  ;; TODO: the grid probably wants to be a ratom
  (let [grid (generate-game-grid)]
    [:div.letter-grid
     (for [col grid]
       (let [letters (take grid-rows col)]
         [:div.column
          (for [l letters]
            [:div.letter l])]))]))

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
