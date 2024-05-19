(ns counterspell.core
  (:require [reagent.dom.client :as rdom]
            [reagent.core :as r]))

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
  (let [height (* grid-rows (inc game-turns))
        flat-letters (take (* height grid-cols) letters)]
    (->> flat-letters
         (partition height))))


(def state (r/atom {:grid (generate-game-grid)
                    :active-tiles #{}}))
(defn activate-tile [x y]
  (swap! state update-in [:active-tiles] conj [x y]))

;;
;; ui components
;;
(defn letter-tile [{:keys [letter x y]}]
  (let [on-click-letter (fn [evt]
                          (activate-tile x y))
        activated? ((@state :active-tiles) [x y])]
    [:div.letter {:class (when activated? "active")
                  :on-click on-click-letter}
     letter]))

(defn letter-grid []
  ;; TODO: the grid probably wants to be a ratom
  (let [grid (:grid @state)]
    [:div.letter-grid
     (for [[x col] (index grid)]
       (let [letters (take grid-rows col)]
         [:div.column {:key x}
          (for [[y l] (index letters)]
            [letter-tile {:letter l :x x :y y
                          :key (str l x y)}])]))]))

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
