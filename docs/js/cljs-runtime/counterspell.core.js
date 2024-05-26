goog.provide('counterspell.core');
var module$vendor$jsrand=shadow.js.require("module$vendor$jsrand", {});
counterspell.core.with_index = (function counterspell$core$with_index(coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
});
counterspell.core.tiles_to_string = (function counterspell$core$tiles_to_string(tiles){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter","letter",-125811450),tiles));
});
counterspell.core.letter_at = (function counterspell$core$letter_at(grid,x,y){
return new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
counterspell.core.letter_values = cljs.core.PersistentHashMap.fromArrays(["d","n","z","w","s","f","e","q","p","j","x","v","a","t","i","k","b","r","y","g","l","u","h","m","o","c"],[(2),(1),(10),(4),(1),(4),(1),(10),(3),(8),(8),(4),(1),(1),(1),(5),(3),(1),(4),(2),(1),(1),(4),(3),(1),(3)]);
counterspell.core.score_word = (function counterspell$core$score_word(word){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(counterspell.core.letter_values,word));
});
counterspell.core.game_turns = (3);
counterspell.core.grid_rows = (7);
counterspell.core.grid_cols = (6);
counterspell.core.tile_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
counterspell.core.game_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),null,new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908),null,new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411),null,new cljs.core.Keyword(null,"scoring","scoring",-454135688),null], null), null);
counterspell.core.neighbors = (function counterspell$core$neighbors(p__24893){
var vec__24894 = p__24893;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24894,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24894,(1),null);
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$neighbors_$_iter__24897(s__24898){
return (new cljs.core.LazySeq(null,(function (){
var s__24898__$1 = s__24898;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24898__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__24898__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__24894,x,y){
return (function counterspell$core$neighbors_$_iter__24897_$_iter__24899(s__24900){
return (new cljs.core.LazySeq(null,((function (s__24898__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__24894,x,y){
return (function (){
var s__24900__$1 = s__24900;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24900__$1);
if(temp__5804__auto____$1){
var s__24900__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24900__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24900__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24902 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24901 = (0);
while(true){
if((i__24901 < size__5479__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__5478__auto__,i__24901);
cljs.core.chunk_append(b__24902,(((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null));

var G__25009 = (i__24901 + (1));
i__24901 = G__25009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24902),counterspell$core$neighbors_$_iter__24897_$_iter__24899(cljs.core.chunk_rest(s__24900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24902),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__24900__$2);
return cljs.core.cons((((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null),counterspell$core$neighbors_$_iter__24897_$_iter__24899(cljs.core.rest(s__24900__$2)));
}
} else {
return null;
}
break;
}
});})(s__24898__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__24894,x,y))
,null,null));
});})(s__24898__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__24894,x,y))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$neighbors_$_iter__24897(cljs.core.rest(s__24898__$1)));
} else {
var G__25010 = cljs.core.rest(s__24898__$1);
s__24898__$1 = G__25010;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((x - (1)),((2) + x)));
})()),null);
});
counterspell.core.random_letter_generator = (function counterspell$core$random_letter_generator(seed){
var alphabet = cljs.core.clj__GT_js("abcdefghijklmnopqrstuvwxyz");
var generator = (new module$vendor$jsrand(seed));
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return generator.choice(alphabet);
}));
});
counterspell.core.generate_game_grid = (function counterspell$core$generate_game_grid(random_seed){
var height = (counterspell.core.grid_rows * (counterspell.core.game_turns + (1)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (letters){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (letter){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"letter","letter",-125811450),letter,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
}),letters);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(height,cljs.core.take.cljs$core$IFn$_invoke$arity$2((height * counterspell.core.grid_cols),counterspell.core.random_letter_generator(random_seed))));
});
counterspell.core.init_game = (function counterspell$core$init_game(random_seed){
var full_grid = counterspell.core.generate_game_grid(random_seed);
var starters = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24903_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,p1__24903_SHARP_));
}),full_grid);
var reserve = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24904_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,p1__24904_SHARP_));
}),full_grid);
return (
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"grid","grid",402978600),starters,new cljs.core.Keyword(null,"random-seed","random-seed",-225383512),random_seed,new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438),reserve,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),false,new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentVector.EMPTY], null)))
;
});
counterspell.core.is_selected_QMARK_ = (function counterspell$core$is_selected_QMARK_(p__24906){
var map__24907 = p__24906;
var map__24907__$1 = cljs.core.__destructure_map(map__24907);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24907__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24907__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.some((function (p1__24905_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(p1__24905_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24905_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : p1__24905_SHARP_.call(null, new cljs.core.Keyword(null,"x","x",2099068185))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(p1__24905_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24905_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : p1__24905_SHARP_.call(null, new cljs.core.Keyword(null,"y","y",-1757859776))))));
}),(function (){var fexpr__24908 = cljs.core.deref(counterspell.core.state);
return (fexpr__24908.cljs$core$IFn$_invoke$arity$1 ? fexpr__24908.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__24908.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
});
counterspell.core.is_legal_selection_QMARK_ = (function counterspell$core$is_legal_selection_QMARK_(x,y){
var temp__5802__auto__ = cljs.core.last((function (){var fexpr__24909 = cljs.core.deref(counterspell.core.state);
return (fexpr__24909.cljs$core$IFn$_invoke$arity$1 ? fexpr__24909.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__24909.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
if(cljs.core.truth_(temp__5802__auto__)){
var tail = temp__5802__auto__;
var G__24911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__24910 = counterspell.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tail.cljs$core$IFn$_invoke$arity$1 ? tail.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : tail.call(null, new cljs.core.Keyword(null,"x","x",2099068185))),(tail.cljs$core$IFn$_invoke$arity$1 ? tail.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : tail.call(null, new cljs.core.Keyword(null,"y","y",-1757859776)))], null));
return (fexpr__24910.cljs$core$IFn$_invoke$arity$1 ? fexpr__24910.cljs$core$IFn$_invoke$arity$1(G__24911) : fexpr__24910.call(null, G__24911));
} else {
return true;
}
});
counterspell.core.remove_selected_spaces_from_grid = (function counterspell$core$remove_selected_spaces_from_grid(grid,selected){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__24912){
var vec__24913 = p__24912;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24913,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24913,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24916){
var vec__24917 = p__24916;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24917,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24917,(1),null);
var G__24920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__24920) : selected.call(null, G__24920));
}),counterspell.core.with_index(col)));
}),counterspell.core.with_index(grid));
});
counterspell.core.add_tiles_from_reserve = (function counterspell$core$add_tiles_from_reserve(grid,reserve,removed){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var by_col = cljs.core.group_by(cljs.core.first,removed);
var iter__5480__auto__ = (function counterspell$core$add_tiles_from_reserve_$_iter__24922(s__24923){
return (new cljs.core.LazySeq(null,(function (){
var s__24923__$1 = s__24923;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24923__$1);
if(temp__5804__auto__){
var s__24923__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24923__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24923__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24925 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24924 = (0);
while(true){
if((i__24924 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__24924);
cljs.core.chunk_append(b__24925,(function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x);
var needed = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
var extras = cljs.core.take.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__24924,col,needed,extras,x,c__5478__auto__,size__5479__auto__,b__24925,s__24923__$2,temp__5804__auto__,by_col){
return (function (p1__24921_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24921_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992));
});})(i__24924,col,needed,extras,x,c__5478__auto__,size__5479__auto__,b__24925,s__24923__$2,temp__5804__auto__,by_col))
,extras)));
})());

var G__25011 = (i__24924 + (1));
i__24924 = G__25011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24925),counterspell$core$add_tiles_from_reserve_$_iter__24922(cljs.core.chunk_rest(s__24923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24925),null);
}
} else {
var x = cljs.core.first(s__24923__$2);
return cljs.core.cons((function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x);
var needed = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
var extras = cljs.core.take.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (col,needed,extras,x,s__24923__$2,temp__5804__auto__,by_col){
return (function (p1__24921_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24921_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992));
});})(col,needed,extras,x,s__24923__$2,temp__5804__auto__,by_col))
,extras)));
})(),counterspell$core$add_tiles_from_reserve_$_iter__24922(cljs.core.rest(s__24923__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_cols));
})());
});
counterspell.core.remove_tiles_from_reserve = (function counterspell$core$remove_tiles_from_reserve(reserve,removed){
var by_col = cljs.core.group_by(cljs.core.first,removed);
var iter__5480__auto__ = (function counterspell$core$remove_tiles_from_reserve_$_iter__24926(s__24927){
return (new cljs.core.LazySeq(null,(function (){
var s__24927__$1 = s__24927;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24927__$1);
if(temp__5804__auto__){
var s__24927__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24927__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24927__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24929 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24928 = (0);
while(true){
if((i__24928 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__24928);
cljs.core.chunk_append(b__24929,(function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x);
var used = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(used,col);
})());

var G__25012 = (i__24928 + (1));
i__24928 = G__25012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24929),counterspell$core$remove_tiles_from_reserve_$_iter__24926(cljs.core.chunk_rest(s__24927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24929),null);
}
} else {
var x = cljs.core.first(s__24927__$2);
return cljs.core.cons((function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x);
var used = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(used,col);
})(),counterspell$core$remove_tiles_from_reserve_$_iter__24926(cljs.core.rest(s__24927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_cols));
});
counterspell.core.words_by_first_letter = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24930){
var vec__24931 = p__24930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24931,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),cljs.core.group_by(cljs.core.first,counterspell.words.words)));
counterspell.core.path_to_word = (function counterspell$core$path_to_word(path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24934_SHARP_){
return counterspell.core.letter_at((function (){var fexpr__24935 = cljs.core.deref(counterspell.core.state);
return (fexpr__24935.cljs$core$IFn$_invoke$arity$1 ? fexpr__24935.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__24935.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})(),(p1__24934_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24934_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__24934_SHARP_.call(null, (0))),(p1__24934_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24934_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__24934_SHARP_.call(null, (1))));
}),path));
});
counterspell.core.words_reachable_from = (function counterspell$core$words_reachable_from(x,y){
var words = (function (){var G__24938 = new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__24939 = cljs.core.deref(counterspell.core.state);
return (fexpr__24939.cljs$core$IFn$_invoke$arity$1 ? fexpr__24939.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__24939.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
return (counterspell.core.words_by_first_letter.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.words_by_first_letter.cljs$core$IFn$_invoke$arity$1(G__24938) : counterspell.core.words_by_first_letter.call(null, G__24938));
})();
var words_vec = cljs.core.vec(words);
var to_check = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], null);
var found_words = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(to_check)){
return found_words;
} else {
var path = cljs.core.last(to_check);
var word_so_far = counterspell.core.path_to_word(path);
var partial_word_re = cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word_so_far)].join(''));
var is_full_word_QMARK_ = (words.cljs$core$IFn$_invoke$arity$1 ? words.cljs$core$IFn$_invoke$arity$1(word_so_far) : words.call(null, word_so_far));
var is_partial_word_QMARK_ = cljs.core.some(((function (to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,words,words_vec){
return (function (p1__24936_SHARP_){
return cljs.core.re_find(partial_word_re,p1__24936_SHARP_);
});})(to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,words,words_vec))
,words_vec);
var unchecked_neighbors = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,counterspell.core.neighbors(cljs.core.last(path)),path);
var potential_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,is_partial_word_QMARK_,unchecked_neighbors,words,words_vec){
return (function (p1__24937_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__24937_SHARP_);
});})(to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,is_partial_word_QMARK_,unchecked_neighbors,words,words_vec))
,unchecked_neighbors);
var G__25013 = (cljs.core.truth_(is_partial_word_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.pop(to_check),potential_paths):cljs.core.pop(to_check));
var G__25014 = (cljs.core.truth_(is_full_word_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_words,path):found_words);
to_check = G__25013;
found_words = G__25014;
continue;
}
break;
}
});
counterspell.core.run_scoring_BANG_ = (function counterspell$core$run_scoring_BANG_(){
var longest_paths_from_each_tile = (function (){var iter__5480__auto__ = (function counterspell$core$run_scoring_BANG__$_iter__24941(s__24942){
return (new cljs.core.LazySeq(null,(function (){
var s__24942__$1 = s__24942;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24942__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__24942__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function counterspell$core$run_scoring_BANG__$_iter__24941_$_iter__24943(s__24944){
return (new cljs.core.LazySeq(null,((function (s__24942__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__24944__$1 = s__24944;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24944__$1);
if(temp__5804__auto____$1){
var s__24944__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24944__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24944__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24946 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24945 = (0);
while(true){
if((i__24945 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__24945);
cljs.core.chunk_append(b__24946,cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,counterspell.core.words_reachable_from(x,y))));

var G__25015 = (i__24945 + (1));
i__24945 = G__25015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24946),counterspell$core$run_scoring_BANG__$_iter__24941_$_iter__24943(cljs.core.chunk_rest(s__24944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24946),null);
}
} else {
var y = cljs.core.first(s__24944__$2);
return cljs.core.cons(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,counterspell.core.words_reachable_from(x,y))),counterspell$core$run_scoring_BANG__$_iter__24941_$_iter__24943(cljs.core.rest(s__24944__$2)));
}
} else {
return null;
}
break;
}
});})(s__24942__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__24942__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_rows)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$run_scoring_BANG__$_iter__24941(cljs.core.rest(s__24942__$1)));
} else {
var G__25016 = cljs.core.rest(s__24942__$1);
s__24942__$1 = G__25016;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_cols));
})();
var longest_words_with_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24940_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[counterspell.core.path_to_word(p1__24940_SHARP_),p1__24940_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,longest_paths_from_each_tile));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891),longest_words_with_paths,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"done","done",-889844188)], 0));
});
counterspell.core.after_advancing_turn_BANG_ = (function counterspell$core$after_advancing_turn_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counterspell.core.game_turns,cljs.core.count((function (){var fexpr__24948 = cljs.core.deref(counterspell.core.state);
return (fexpr__24948.cljs$core$IFn$_invoke$arity$1 ? fexpr__24948.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"found-words","found-words",1852804480)) : fexpr__24948.call(null, new cljs.core.Keyword(null,"found-words","found-words",1852804480)));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"scoring","scoring",-454135688));

return setTimeout(counterspell.core.run_scoring_BANG_,(1000));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025)),new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__24947_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24947_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328));
})),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : old.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)))));
}));
}
});
counterspell.core.after_submitting_word_BANG_ = (function counterspell$core$after_submitting_word_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
var gone = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24949_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__24949_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24949_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : p1__24949_SHARP_.call(null, new cljs.core.Keyword(null,"x","x",2099068185))),(p1__24949_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24949_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : p1__24949_SHARP_.call(null, new cljs.core.Keyword(null,"y","y",-1757859776)))],null));
}),(function (){var fexpr__24950 = cljs.core.deref(counterspell.core.state);
return (fexpr__24950.cljs$core$IFn$_invoke$arity$1 ? fexpr__24950.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__24950.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.add_tiles_from_reserve(counterspell.core.remove_selected_spaces_from_grid((old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : old.call(null, new cljs.core.Keyword(null,"grid","grid",402978600))),gone),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438)) : old.call(null, new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438))),gone)),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411)),new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438),counterspell.core.remove_tiles_from_reserve,gone);
}));

return setTimeout(counterspell.core.after_advancing_turn_BANG_,(600));
});
counterspell.core.submit_word_BANG_ = (function counterspell$core$submit_word_BANG_(){
var maybe_word = counterspell.core.tiles_to_string((function (){var fexpr__24951 = cljs.core.deref(counterspell.core.state);
return (fexpr__24951.cljs$core$IFn$_invoke$arity$1 ? fexpr__24951.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__24951.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
if(cljs.core.truth_((counterspell.words.words.cljs$core$IFn$_invoke$arity$1 ? counterspell.words.words.cljs$core$IFn$_invoke$arity$1(maybe_word) : counterspell.words.words.call(null, maybe_word)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(old,new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.conj,maybe_word),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908));
}));

return setTimeout(counterspell.core.after_submitting_word_BANG_,(470));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),true);
}
});
counterspell.core.tile_action_BANG_ = (function counterspell$core$tile_action_BANG_(p__24953){
var map__24954 = p__24953;
var map__24954__$1 = cljs.core.__destructure_map(map__24954);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,new cljs.core.Keyword(null,"tile","tile",758132866));
var selected_grid_space = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"letter","letter",-125811450),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : tile.call(null, new cljs.core.Keyword(null,"letter","letter",-125811450)))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),(function (){var fexpr__24955 = cljs.core.deref(counterspell.core.state);
return (fexpr__24955.cljs$core$IFn$_invoke$arity$1 ? fexpr__24955.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__24955.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})())){
if(cljs.core.truth_(counterspell.core.is_selected_QMARK_(selected_grid_space))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_grid_space,cljs.core.last((function (){var fexpr__24956 = cljs.core.deref(counterspell.core.state);
return (fexpr__24956.cljs$core$IFn$_invoke$arity$1 ? fexpr__24956.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__24956.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()))){
return counterspell.core.submit_word_BANG_();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
var new_selected = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__24952_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__24952_SHARP_,selected_grid_space)));
}),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : old.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992))))),selected_grid_space);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old,new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),new_selected,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),false], 0));
}));
}
} else {
if(cljs.core.truth_(counterspell.core.is_legal_selection_QMARK_(x,y))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old,new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : old.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992))),selected_grid_space),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),false], 0));
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),false], 0));
}
}
} else {
return null;
}
});
counterspell.core.main = (function counterspell$core$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counterspell!!!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),["(seed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__24958 = cljs.core.deref(counterspell.core.state);
return (fexpr__24958.cljs$core$IFn$_invoke$arity$1 ? fexpr__24958.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"random-seed","random-seed",-225383512)) : fexpr__24958.call(null, new cljs.core.Keyword(null,"random-seed","random-seed",-225383512)));
})()),")"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment","comment",532206069),"the letter grid",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(function (){var iter__5480__auto__ = (function counterspell$core$main_$_iter__24959(s__24960){
return (new cljs.core.LazySeq(null,(function (){
var s__24960__$1 = s__24960;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24960__$1);
if(temp__5804__auto__){
var s__24960__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24960__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24960__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24962 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24961 = (0);
while(true){
if((i__24961 < size__5479__auto__)){
var vec__24963 = cljs.core._nth(c__5478__auto__,i__24961);
var grid_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24963,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24963,(1),null);
cljs.core.chunk_append(b__24962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"one column of tiles",new cljs.core.Keyword(null,"key","key",-1516042587),grid_x,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__5480__auto__ = ((function (i__24961,vec__24963,grid_x,col,c__5478__auto__,size__5479__auto__,b__24962,s__24960__$2,temp__5804__auto__){
return (function counterspell$core$main_$_iter__24959_$_iter__24966(s__24967){
return (new cljs.core.LazySeq(null,((function (i__24961,vec__24963,grid_x,col,c__5478__auto__,size__5479__auto__,b__24962,s__24960__$2,temp__5804__auto__){
return (function (){
var s__24967__$1 = s__24967;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24967__$1);
if(temp__5804__auto____$1){
var s__24967__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24967__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__24967__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__24969 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__24968 = (0);
while(true){
if((i__24968 < size__5479__auto____$1)){
var vec__24970 = cljs.core._nth(c__5478__auto____$1,i__24968);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24970,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24970,(1),null);
cljs.core.chunk_append(b__24969,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null));

var G__25017 = (i__24968 + (1));
i__24968 = G__25017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24969),counterspell$core$main_$_iter__24959_$_iter__24966(cljs.core.chunk_rest(s__24967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24969),null);
}
} else {
var vec__24973 = cljs.core.first(s__24967__$2);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24973,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24973,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null),counterspell$core$main_$_iter__24959_$_iter__24966(cljs.core.rest(s__24967__$2)));
}
} else {
return null;
}
break;
}
});})(i__24961,vec__24963,grid_x,col,c__5478__auto__,size__5479__auto__,b__24962,s__24960__$2,temp__5804__auto__))
,null,null));
});})(i__24961,vec__24963,grid_x,col,c__5478__auto__,size__5479__auto__,b__24962,s__24960__$2,temp__5804__auto__))
;
return iter__5480__auto__(counterspell.core.with_index(col));
})()], null));

var G__25018 = (i__24961 + (1));
i__24961 = G__25018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24962),counterspell$core$main_$_iter__24959(cljs.core.chunk_rest(s__24960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24962),null);
}
} else {
var vec__24976 = cljs.core.first(s__24960__$2);
var grid_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24976,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24976,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"one column of tiles",new cljs.core.Keyword(null,"key","key",-1516042587),grid_x,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__5480__auto__ = ((function (vec__24976,grid_x,col,s__24960__$2,temp__5804__auto__){
return (function counterspell$core$main_$_iter__24959_$_iter__24979(s__24980){
return (new cljs.core.LazySeq(null,(function (){
var s__24980__$1 = s__24980;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24980__$1);
if(temp__5804__auto____$1){
var s__24980__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24980__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24980__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24982 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24981 = (0);
while(true){
if((i__24981 < size__5479__auto__)){
var vec__24983 = cljs.core._nth(c__5478__auto__,i__24981);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(1),null);
cljs.core.chunk_append(b__24982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null));

var G__25019 = (i__24981 + (1));
i__24981 = G__25019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24982),counterspell$core$main_$_iter__24959_$_iter__24979(cljs.core.chunk_rest(s__24980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24982),null);
}
} else {
var vec__24986 = cljs.core.first(s__24980__$2);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24986,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24986,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null),counterspell$core$main_$_iter__24959_$_iter__24979(cljs.core.rest(s__24980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__24976,grid_x,col,s__24960__$2,temp__5804__auto__))
;
return iter__5480__auto__(counterspell.core.with_index(col));
})()], null),counterspell$core$main_$_iter__24959(cljs.core.rest(s__24960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(counterspell.core.with_index((function (){var fexpr__24989 = cljs.core.deref(counterspell.core.state);
return (fexpr__24989.cljs$core$IFn$_invoke$arity$1 ? fexpr__24989.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__24989.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})()));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.word_in_progress], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.found_words], null)], null)], null);
});
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__24990){
var map__24991 = p__24990;
var map__24991__$1 = cljs.core.__destructure_map(map__24991);
var tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"tile","tile",758132866));
var grid_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622));
var grid_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comment","comment",532206069),"a single letter tile",new cljs.core.Keyword(null,"class","class",-2030961996),"letter-tile",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(cljs.core.truth_(counterspell.core.is_selected_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y], null)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fbb",new cljs.core.Keyword(null,"animation","animation",-1248293244),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908),(function (){var fexpr__24992 = cljs.core.deref(counterspell.core.state);
return (fexpr__24992.cljs$core$IFn$_invoke$arity$1 ? fexpr__24992.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__24992.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?"fade-out forwards 0.5s":null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099)) : tile.call(null, new cljs.core.Keyword(null,"state","state",-1988618099))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411),(function (){var fexpr__24993 = cljs.core.deref(counterspell.core.state);
return (fexpr__24993.cljs$core$IFn$_invoke$arity$1 ? fexpr__24993.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__24993.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),"0.5s forwards fall-in"], null):null)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return counterspell.core.tile_action_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile], null));
})], null),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : tile.call(null, new cljs.core.Keyword(null,"letter","letter",-125811450))).toUpperCase()], null);
});
counterspell.core.word_in_progress = (function counterspell$core$word_in_progress(){
var maybe_word = counterspell.core.tiles_to_string((function (){var fexpr__24994 = cljs.core.deref(counterspell.core.state);
return (fexpr__24994.cljs$core$IFn$_invoke$arity$1 ? fexpr__24994.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__24994.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"the currently-being-spelled word",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__24995 = cljs.core.deref(counterspell.core.state);
return (fexpr__24995.cljs$core$IFn$_invoke$arity$1 ? fexpr__24995.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584)) : fexpr__24995.call(null, new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584)));
})())?"naughty":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),maybe_word], null)], null);
});
counterspell.core.found_words = (function counterspell$core$found_words(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Found words:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function counterspell$core$found_words_$_iter__24996(s__24997){
return (new cljs.core.LazySeq(null,(function (){
var s__24997__$1 = s__24997;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24997__$1);
if(temp__5804__auto__){
var s__24997__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24997__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__24997__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__24999 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__24998 = (0);
while(true){
if((i__24998 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__24998);
cljs.core.chunk_append(b__24999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),word], null));

var G__25020 = (i__24998 + (1));
i__24998 = G__25020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24999),counterspell$core$found_words_$_iter__24996(cljs.core.chunk_rest(s__24997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24999),null);
}
} else {
var word = cljs.core.first(s__24997__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),word], null),counterspell$core$found_words_$_iter__24996(cljs.core.rest(s__24997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__((function (){var fexpr__25000 = cljs.core.deref(counterspell.core.state);
return (fexpr__25000.cljs$core$IFn$_invoke$arity$1 ? fexpr__25000.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"found-words","found-words",1852804480)) : fexpr__25000.call(null, new cljs.core.Keyword(null,"found-words","found-words",1852804480)));
})());
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scoring","scoring",-454135688),(function (){var fexpr__25001 = cljs.core.deref(counterspell.core.state);
return (fexpr__25001.cljs$core$IFn$_invoke$arity$1 ? fexpr__25001.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__25001.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Scoring. This is a little slow, stand by..."], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),(function (){var fexpr__25002 = cljs.core.deref(counterspell.core.state);
return (fexpr__25002.cljs$core$IFn$_invoke$arity$1 ? fexpr__25002.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__25002.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Words remaining on board:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function counterspell$core$found_words_$_iter__25003(s__25004){
return (new cljs.core.LazySeq(null,(function (){
var s__25004__$1 = s__25004;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25004__$1);
if(temp__5804__auto__){
var s__25004__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25004__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__25004__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__25006 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__25005 = (0);
while(true){
if((i__25005 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__25005);
cljs.core.chunk_append(b__25006,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),counterspell.core.score_word(word)], null)], null));

var G__25021 = (i__25005 + (1));
i__25005 = G__25021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25006),counterspell$core$found_words_$_iter__25003(cljs.core.chunk_rest(s__25004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25006),null);
}
} else {
var word = cljs.core.first(s__25004__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),counterspell.core.score_word(word)], null)], null),counterspell$core$found_words_$_iter__25003(cljs.core.rest(s__25004__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var fexpr__25007 = cljs.core.deref(counterspell.core.state);
return (fexpr__25007.cljs$core$IFn$_invoke$arity$1 ? fexpr__25007.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)) : fexpr__25007.call(null, new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Final score (lower is better)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(counterspell.core.score_word,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var fexpr__25008 = cljs.core.deref(counterspell.core.state);
return (fexpr__25008.cljs$core$IFn$_invoke$arity$1 ? fexpr__25008.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)) : fexpr__25008.call(null, new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)));
})())))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return location.reload();
})], null),"Try this board again"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(location.hash = "");

return location.reload();
})], null),"Try a new random board"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('')], null),"Copy this link to challenge someone else to the same board."], null)], null)], null):null)], null);
});
if((typeof counterspell !== 'undefined') && (typeof counterspell.core !== 'undefined') && (typeof counterspell.core.root !== 'undefined')){
} else {
counterspell.core.root = reagent.dom.client.create_root(document.querySelector("#root"));
}
counterspell.core.init = (function counterspell$core$init(){
var url_seed = cljs.core.parse_long(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),location.hash)));
var seed = (function (){var or__5002__auto__ = url_seed;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.rand_int((10000));
}
})();
(location.hash = seed);

counterspell.core.init_game(seed);

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(counterspell.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.main], null));
});

//# sourceMappingURL=counterspell.core.js.map
