(ns counterspell.core
  (:require [reagent.dom.client :as rdom]))

(defn main []
  [:h1 "meow meow?"])

(defonce root (rdom/create-root (.querySelector js/document "#root")))

(defn
  ^:dev/after-load
  init
  []
  (rdom/render root [main]))
