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
counterspell.core.grid_rows = (6);
counterspell.core.grid_cols = (5);
counterspell.core.tile_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
counterspell.core.game_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),null,new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908),null,new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411),null,new cljs.core.Keyword(null,"scoring","scoring",-454135688),null], null), null);
counterspell.core.neighbors = (function counterspell$core$neighbors(p__31686){
var vec__31687 = p__31686;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31687,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31687,(1),null);
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$neighbors_$_iter__31690(s__31691){
return (new cljs.core.LazySeq(null,(function (){
var s__31691__$1 = s__31691;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31691__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__31691__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__31687,x,y){
return (function counterspell$core$neighbors_$_iter__31690_$_iter__31692(s__31693){
return (new cljs.core.LazySeq(null,((function (s__31691__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__31687,x,y){
return (function (){
var s__31693__$1 = s__31693;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31693__$1);
if(temp__5804__auto____$1){
var s__31693__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31693__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31693__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31695 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31694 = (0);
while(true){
if((i__31694 < size__5479__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__5478__auto__,i__31694);
cljs.core.chunk_append(b__31695,(((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null));

var G__31802 = (i__31694 + (1));
i__31694 = G__31802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31695),counterspell$core$neighbors_$_iter__31690_$_iter__31692(cljs.core.chunk_rest(s__31693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31695),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__31693__$2);
return cljs.core.cons((((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null),counterspell$core$neighbors_$_iter__31690_$_iter__31692(cljs.core.rest(s__31693__$2)));
}
} else {
return null;
}
break;
}
});})(s__31691__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__31687,x,y))
,null,null));
});})(s__31691__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__31687,x,y))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$neighbors_$_iter__31690(cljs.core.rest(s__31691__$1)));
} else {
var G__31803 = cljs.core.rest(s__31691__$1);
s__31691__$1 = G__31803;
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
var starters = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31696_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,p1__31696_SHARP_));
}),full_grid);
var reserve = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31697_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,p1__31697_SHARP_));
}),full_grid);
return (
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"grid","grid",402978600),starters,new cljs.core.Keyword(null,"random-seed","random-seed",-225383512),random_seed,new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438),reserve,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),false,new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentVector.EMPTY], null)))
;
});
counterspell.core.is_selected_QMARK_ = (function counterspell$core$is_selected_QMARK_(p__31699){
var map__31700 = p__31699;
var map__31700__$1 = cljs.core.__destructure_map(map__31700);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31700__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31700__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.some((function (p1__31698_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(p1__31698_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31698_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : p1__31698_SHARP_.call(null, new cljs.core.Keyword(null,"x","x",2099068185))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(p1__31698_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31698_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : p1__31698_SHARP_.call(null, new cljs.core.Keyword(null,"y","y",-1757859776))))));
}),(function (){var fexpr__31701 = cljs.core.deref(counterspell.core.state);
return (fexpr__31701.cljs$core$IFn$_invoke$arity$1 ? fexpr__31701.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__31701.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
});
counterspell.core.is_legal_selection_QMARK_ = (function counterspell$core$is_legal_selection_QMARK_(x,y){
var temp__5802__auto__ = cljs.core.last((function (){var fexpr__31702 = cljs.core.deref(counterspell.core.state);
return (fexpr__31702.cljs$core$IFn$_invoke$arity$1 ? fexpr__31702.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__31702.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
if(cljs.core.truth_(temp__5802__auto__)){
var tail = temp__5802__auto__;
var G__31704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__31703 = counterspell.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tail.cljs$core$IFn$_invoke$arity$1 ? tail.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : tail.call(null, new cljs.core.Keyword(null,"x","x",2099068185))),(tail.cljs$core$IFn$_invoke$arity$1 ? tail.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : tail.call(null, new cljs.core.Keyword(null,"y","y",-1757859776)))], null));
return (fexpr__31703.cljs$core$IFn$_invoke$arity$1 ? fexpr__31703.cljs$core$IFn$_invoke$arity$1(G__31704) : fexpr__31703.call(null, G__31704));
} else {
return true;
}
});
counterspell.core.remove_selected_spaces_from_grid = (function counterspell$core$remove_selected_spaces_from_grid(grid,selected){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__31705){
var vec__31706 = p__31705;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31706,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31706,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__31709){
var vec__31710 = p__31709;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31710,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31710,(1),null);
var G__31713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__31713) : selected.call(null, G__31713));
}),counterspell.core.with_index(col)));
}),counterspell.core.with_index(grid));
});
counterspell.core.add_tiles_from_reserve = (function counterspell$core$add_tiles_from_reserve(grid,reserve,removed){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var by_col = cljs.core.group_by(cljs.core.first,removed);
var iter__5480__auto__ = (function counterspell$core$add_tiles_from_reserve_$_iter__31715(s__31716){
return (new cljs.core.LazySeq(null,(function (){
var s__31716__$1 = s__31716;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31716__$1);
if(temp__5804__auto__){
var s__31716__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31716__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31716__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31718 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31717 = (0);
while(true){
if((i__31717 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__31717);
cljs.core.chunk_append(b__31718,(function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x);
var needed = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
var extras = cljs.core.take.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__31717,col,needed,extras,x,c__5478__auto__,size__5479__auto__,b__31718,s__31716__$2,temp__5804__auto__,by_col){
return (function (p1__31714_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31714_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992));
});})(i__31717,col,needed,extras,x,c__5478__auto__,size__5479__auto__,b__31718,s__31716__$2,temp__5804__auto__,by_col))
,extras)));
})());

var G__31804 = (i__31717 + (1));
i__31717 = G__31804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31718),counterspell$core$add_tiles_from_reserve_$_iter__31715(cljs.core.chunk_rest(s__31716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31718),null);
}
} else {
var x = cljs.core.first(s__31716__$2);
return cljs.core.cons((function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x);
var needed = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
var extras = cljs.core.take.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (col,needed,extras,x,s__31716__$2,temp__5804__auto__,by_col){
return (function (p1__31714_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31714_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992));
});})(col,needed,extras,x,s__31716__$2,temp__5804__auto__,by_col))
,extras)));
})(),counterspell$core$add_tiles_from_reserve_$_iter__31715(cljs.core.rest(s__31716__$2)));
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
var iter__5480__auto__ = (function counterspell$core$remove_tiles_from_reserve_$_iter__31719(s__31720){
return (new cljs.core.LazySeq(null,(function (){
var s__31720__$1 = s__31720;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31720__$1);
if(temp__5804__auto__){
var s__31720__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31720__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31720__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31722 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31721 = (0);
while(true){
if((i__31721 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__31721);
cljs.core.chunk_append(b__31722,(function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x);
var used = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(used,col);
})());

var G__31805 = (i__31721 + (1));
i__31721 = G__31805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31722),counterspell$core$remove_tiles_from_reserve_$_iter__31719(cljs.core.chunk_rest(s__31720__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31722),null);
}
} else {
var x = cljs.core.first(s__31720__$2);
return cljs.core.cons((function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x);
var used = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(used,col);
})(),counterspell$core$remove_tiles_from_reserve_$_iter__31719(cljs.core.rest(s__31720__$2)));
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
counterspell.core.words_by_first_letter = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31723){
var vec__31724 = p__31723;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31724,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),cljs.core.group_by(cljs.core.first,counterspell.words.words)));
counterspell.core.path_to_word = (function counterspell$core$path_to_word(path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31727_SHARP_){
return counterspell.core.letter_at((function (){var fexpr__31728 = cljs.core.deref(counterspell.core.state);
return (fexpr__31728.cljs$core$IFn$_invoke$arity$1 ? fexpr__31728.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__31728.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})(),(p1__31727_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31727_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__31727_SHARP_.call(null, (0))),(p1__31727_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31727_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__31727_SHARP_.call(null, (1))));
}),path));
});
counterspell.core.words_reachable_from = (function counterspell$core$words_reachable_from(x,y){
var words = (function (){var G__31731 = new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__31732 = cljs.core.deref(counterspell.core.state);
return (fexpr__31732.cljs$core$IFn$_invoke$arity$1 ? fexpr__31732.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__31732.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
return (counterspell.core.words_by_first_letter.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.words_by_first_letter.cljs$core$IFn$_invoke$arity$1(G__31731) : counterspell.core.words_by_first_letter.call(null, G__31731));
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
return (function (p1__31729_SHARP_){
return cljs.core.re_find(partial_word_re,p1__31729_SHARP_);
});})(to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,words,words_vec))
,words_vec);
var unchecked_neighbors = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,counterspell.core.neighbors(cljs.core.last(path)),path);
var potential_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,is_partial_word_QMARK_,unchecked_neighbors,words,words_vec){
return (function (p1__31730_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__31730_SHARP_);
});})(to_check,found_words,path,word_so_far,partial_word_re,is_full_word_QMARK_,is_partial_word_QMARK_,unchecked_neighbors,words,words_vec))
,unchecked_neighbors);
var G__31806 = (cljs.core.truth_(is_partial_word_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.pop(to_check),potential_paths):cljs.core.pop(to_check));
var G__31807 = (cljs.core.truth_(is_full_word_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_words,path):found_words);
to_check = G__31806;
found_words = G__31807;
continue;
}
break;
}
});
counterspell.core.run_scoring_BANG_ = (function counterspell$core$run_scoring_BANG_(){
var longest_paths_from_each_tile = (function (){var iter__5480__auto__ = (function counterspell$core$run_scoring_BANG__$_iter__31734(s__31735){
return (new cljs.core.LazySeq(null,(function (){
var s__31735__$1 = s__31735;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31735__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__31735__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function counterspell$core$run_scoring_BANG__$_iter__31734_$_iter__31736(s__31737){
return (new cljs.core.LazySeq(null,((function (s__31735__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__31737__$1 = s__31737;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31737__$1);
if(temp__5804__auto____$1){
var s__31737__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31737__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31737__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31739 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31738 = (0);
while(true){
if((i__31738 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__31738);
cljs.core.chunk_append(b__31739,cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,counterspell.core.words_reachable_from(x,y))));

var G__31808 = (i__31738 + (1));
i__31738 = G__31808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31739),counterspell$core$run_scoring_BANG__$_iter__31734_$_iter__31736(cljs.core.chunk_rest(s__31737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31739),null);
}
} else {
var y = cljs.core.first(s__31737__$2);
return cljs.core.cons(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._GT_,counterspell.core.words_reachable_from(x,y))),counterspell$core$run_scoring_BANG__$_iter__31734_$_iter__31736(cljs.core.rest(s__31737__$2)));
}
} else {
return null;
}
break;
}
});})(s__31735__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__31735__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_rows)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$run_scoring_BANG__$_iter__31734(cljs.core.rest(s__31735__$1)));
} else {
var G__31809 = cljs.core.rest(s__31735__$1);
s__31735__$1 = G__31809;
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
var longest_words_with_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31733_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[counterspell.core.path_to_word(p1__31733_SHARP_),p1__31733_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,longest_paths_from_each_tile));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891),longest_words_with_paths,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"done","done",-889844188)], 0));
});
counterspell.core.after_advancing_turn_BANG_ = (function counterspell$core$after_advancing_turn_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counterspell.core.game_turns,cljs.core.count((function (){var fexpr__31741 = cljs.core.deref(counterspell.core.state);
return (fexpr__31741.cljs$core$IFn$_invoke$arity$1 ? fexpr__31741.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"found-words","found-words",1852804480)) : fexpr__31741.call(null, new cljs.core.Keyword(null,"found-words","found-words",1852804480)));
})()))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"scoring","scoring",-454135688));

return setTimeout(counterspell.core.run_scoring_BANG_,(1000));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025)),new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__31740_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31740_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328));
})),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : old.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)))));
}));
}
});
counterspell.core.after_submitting_word_BANG_ = (function counterspell$core$after_submitting_word_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
var gone = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31742_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__31742_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31742_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : p1__31742_SHARP_.call(null, new cljs.core.Keyword(null,"x","x",2099068185))),(p1__31742_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31742_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : p1__31742_SHARP_.call(null, new cljs.core.Keyword(null,"y","y",-1757859776)))],null));
}),(function (){var fexpr__31743 = cljs.core.deref(counterspell.core.state);
return (fexpr__31743.cljs$core$IFn$_invoke$arity$1 ? fexpr__31743.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__31743.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.add_tiles_from_reserve(counterspell.core.remove_selected_spaces_from_grid((old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : old.call(null, new cljs.core.Keyword(null,"grid","grid",402978600))),gone),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438)) : old.call(null, new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438))),gone)),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411)),new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438),counterspell.core.remove_tiles_from_reserve,gone);
}));

return setTimeout(counterspell.core.after_advancing_turn_BANG_,(600));
});
counterspell.core.submit_word_BANG_ = (function counterspell$core$submit_word_BANG_(){
var maybe_word = counterspell.core.tiles_to_string((function (){var fexpr__31744 = cljs.core.deref(counterspell.core.state);
return (fexpr__31744.cljs$core$IFn$_invoke$arity$1 ? fexpr__31744.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__31744.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
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
counterspell.core.tile_action_BANG_ = (function counterspell$core$tile_action_BANG_(p__31746){
var map__31747 = p__31746;
var map__31747__$1 = cljs.core.__destructure_map(map__31747);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31747__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31747__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31747__$1,new cljs.core.Keyword(null,"tile","tile",758132866));
var selected_grid_space = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"letter","letter",-125811450),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : tile.call(null, new cljs.core.Keyword(null,"letter","letter",-125811450)))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),(function (){var fexpr__31748 = cljs.core.deref(counterspell.core.state);
return (fexpr__31748.cljs$core$IFn$_invoke$arity$1 ? fexpr__31748.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__31748.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})())){
if(cljs.core.truth_(counterspell.core.is_selected_QMARK_(selected_grid_space))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_grid_space,cljs.core.last((function (){var fexpr__31749 = cljs.core.deref(counterspell.core.state);
return (fexpr__31749.cljs$core$IFn$_invoke$arity$1 ? fexpr__31749.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__31749.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()))){
return counterspell.core.submit_word_BANG_();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
var new_selected = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__31745_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31745_SHARP_,selected_grid_space)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment","comment",532206069),"header bar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background","background",-863952629),"rgb(62, 62, 62)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.06rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.7rem 1rem",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"Counterspell"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fancy-font",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(location.hash = "");

return location.reload();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),"Try a different board"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://itch.io/jam/spring-lisp-game-jam-2024",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Made for Spring Lisp Game Jam 2024"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://basecase.itch.io/counterspell",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"itch.io Page"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#777"], null)], null),["(seed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__31751 = cljs.core.deref(counterspell.core.state);
return (fexpr__31751.cljs$core$IFn$_invoke$arity$1 ? fexpr__31751.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"random-seed","random-seed",-225383512)) : fexpr__31751.call(null, new cljs.core.Keyword(null,"random-seed","random-seed",-225383512)));
})()),")"].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"2rem"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.instructions], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment","comment",532206069),"the letter grid",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"5px"], null)], null),(function (){var iter__5480__auto__ = (function counterspell$core$main_$_iter__31752(s__31753){
return (new cljs.core.LazySeq(null,(function (){
var s__31753__$1 = s__31753;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31753__$1);
if(temp__5804__auto__){
var s__31753__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31753__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31753__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31755 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31754 = (0);
while(true){
if((i__31754 < size__5479__auto__)){
var vec__31756 = cljs.core._nth(c__5478__auto__,i__31754);
var grid_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31756,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31756,(1),null);
cljs.core.chunk_append(b__31755,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"one column of tiles",new cljs.core.Keyword(null,"key","key",-1516042587),grid_x,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"5px"], null)], null),(function (){var iter__5480__auto__ = ((function (i__31754,vec__31756,grid_x,col,c__5478__auto__,size__5479__auto__,b__31755,s__31753__$2,temp__5804__auto__){
return (function counterspell$core$main_$_iter__31752_$_iter__31759(s__31760){
return (new cljs.core.LazySeq(null,((function (i__31754,vec__31756,grid_x,col,c__5478__auto__,size__5479__auto__,b__31755,s__31753__$2,temp__5804__auto__){
return (function (){
var s__31760__$1 = s__31760;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31760__$1);
if(temp__5804__auto____$1){
var s__31760__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31760__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__31760__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__31762 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__31761 = (0);
while(true){
if((i__31761 < size__5479__auto____$1)){
var vec__31763 = cljs.core._nth(c__5478__auto____$1,i__31761);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31763,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31763,(1),null);
cljs.core.chunk_append(b__31762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null));

var G__31810 = (i__31761 + (1));
i__31761 = G__31810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31762),counterspell$core$main_$_iter__31752_$_iter__31759(cljs.core.chunk_rest(s__31760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31762),null);
}
} else {
var vec__31766 = cljs.core.first(s__31760__$2);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31766,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31766,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null),counterspell$core$main_$_iter__31752_$_iter__31759(cljs.core.rest(s__31760__$2)));
}
} else {
return null;
}
break;
}
});})(i__31754,vec__31756,grid_x,col,c__5478__auto__,size__5479__auto__,b__31755,s__31753__$2,temp__5804__auto__))
,null,null));
});})(i__31754,vec__31756,grid_x,col,c__5478__auto__,size__5479__auto__,b__31755,s__31753__$2,temp__5804__auto__))
;
return iter__5480__auto__(counterspell.core.with_index(col));
})()], null));

var G__31811 = (i__31754 + (1));
i__31754 = G__31811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31755),counterspell$core$main_$_iter__31752(cljs.core.chunk_rest(s__31753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31755),null);
}
} else {
var vec__31769 = cljs.core.first(s__31753__$2);
var grid_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31769,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31769,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"one column of tiles",new cljs.core.Keyword(null,"key","key",-1516042587),grid_x,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"5px"], null)], null),(function (){var iter__5480__auto__ = ((function (vec__31769,grid_x,col,s__31753__$2,temp__5804__auto__){
return (function counterspell$core$main_$_iter__31752_$_iter__31772(s__31773){
return (new cljs.core.LazySeq(null,(function (){
var s__31773__$1 = s__31773;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31773__$1);
if(temp__5804__auto____$1){
var s__31773__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31773__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31773__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31775 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31774 = (0);
while(true){
if((i__31774 < size__5479__auto__)){
var vec__31776 = cljs.core._nth(c__5478__auto__,i__31774);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31776,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31776,(1),null);
cljs.core.chunk_append(b__31775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null));

var G__31812 = (i__31774 + (1));
i__31774 = G__31812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31775),counterspell$core$main_$_iter__31752_$_iter__31772(cljs.core.chunk_rest(s__31773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31775),null);
}
} else {
var vec__31779 = cljs.core.first(s__31773__$2);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31779,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31779,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null),counterspell$core$main_$_iter__31752_$_iter__31772(cljs.core.rest(s__31773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__31769,grid_x,col,s__31753__$2,temp__5804__auto__))
;
return iter__5480__auto__(counterspell.core.with_index(col));
})()], null),counterspell$core$main_$_iter__31752(cljs.core.rest(s__31753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(counterspell.core.with_index((function (){var fexpr__31782 = cljs.core.deref(counterspell.core.state);
return (fexpr__31782.cljs$core$IFn$_invoke$arity$1 ? fexpr__31782.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__31782.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})()));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.word_in_progress], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.found_words], null)], null)], null);
});
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__31783){
var map__31784 = p__31783;
var map__31784__$1 = cljs.core.__destructure_map(map__31784);
var tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31784__$1,new cljs.core.Keyword(null,"tile","tile",758132866));
var grid_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31784__$1,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622));
var grid_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31784__$1,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comment","comment",532206069),"a single letter tile",new cljs.core.Keyword(null,"class","class",-2030961996),"letter-tile fancy-font",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1.2rem",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgba(0, 0, 0, 0.3) 0px 2px 1px 0px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null),(cljs.core.truth_(counterspell.core.is_selected_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y], null)))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgb(0, 86, 196)",new cljs.core.Keyword(null,"background","background",-863952629),"rgb(171, 208, 255)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"animation","animation",-1248293244),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908),(function (){var fexpr__31785 = cljs.core.deref(counterspell.core.state);
return (fexpr__31785.cljs$core$IFn$_invoke$arity$1 ? fexpr__31785.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__31785.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?"fade-out forwards 0.5s":null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #555"], null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099)) : tile.call(null, new cljs.core.Keyword(null,"state","state",-1988618099))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411),(function (){var fexpr__31786 = cljs.core.deref(counterspell.core.state);
return (fexpr__31786.cljs$core$IFn$_invoke$arity$1 ? fexpr__31786.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__31786.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),"0.5s forwards fall-in"], null):null)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return counterspell.core.tile_action_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile], null));
})], null),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : tile.call(null, new cljs.core.Keyword(null,"letter","letter",-125811450))).toUpperCase()], null);
});
counterspell.core.word_in_progress = (function counterspell$core$word_in_progress(){
var maybe_word = counterspell.core.tiles_to_string((function (){var fexpr__31787 = cljs.core.deref(counterspell.core.state);
return (fexpr__31787.cljs$core$IFn$_invoke$arity$1 ? fexpr__31787.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__31787.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"the currently-being-spelled word",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(900)], null),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fancy-font",(cljs.core.truth_((function (){var fexpr__31788 = cljs.core.deref(counterspell.core.state);
return (fexpr__31788.cljs$core$IFn$_invoke$arity$1 ? fexpr__31788.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584)) : fexpr__31788.call(null, new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584)));
})())?"naughty":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),maybe_word.toUpperCase()], null)], null);
});
counterspell.core.found_words = (function counterspell$core$found_words(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font"], null),"Found words:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function counterspell$core$found_words_$_iter__31789(s__31790){
return (new cljs.core.LazySeq(null,(function (){
var s__31790__$1 = s__31790;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31790__$1);
if(temp__5804__auto__){
var s__31790__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31790__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31790__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31792 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31791 = (0);
while(true){
if((i__31791 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__31791);
cljs.core.chunk_append(b__31792,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fancy-font"], null),word], null));

var G__31813 = (i__31791 + (1));
i__31791 = G__31813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31792),counterspell$core$found_words_$_iter__31789(cljs.core.chunk_rest(s__31790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31792),null);
}
} else {
var word = cljs.core.first(s__31790__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fancy-font"], null),word], null),counterspell$core$found_words_$_iter__31789(cljs.core.rest(s__31790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__((function (){var fexpr__31793 = cljs.core.deref(counterspell.core.state);
return (fexpr__31793.cljs$core$IFn$_invoke$arity$1 ? fexpr__31793.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"found-words","found-words",1852804480)) : fexpr__31793.call(null, new cljs.core.Keyword(null,"found-words","found-words",1852804480)));
})());
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scoring","scoring",-454135688),(function (){var fexpr__31794 = cljs.core.deref(counterspell.core.state);
return (fexpr__31794.cljs$core$IFn$_invoke$arity$1 ? fexpr__31794.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__31794.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font"], null),"Scoring. Stand by..."], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),(function (){var fexpr__31795 = cljs.core.deref(counterspell.core.state);
return (fexpr__31795.cljs$core$IFn$_invoke$arity$1 ? fexpr__31795.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__31795.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font"], null),"Words remaining on board:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function counterspell$core$found_words_$_iter__31796(s__31797){
return (new cljs.core.LazySeq(null,(function (){
var s__31797__$1 = s__31797;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31797__$1);
if(temp__5804__auto__){
var s__31797__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31797__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31797__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31799 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31798 = (0);
while(true){
if((i__31798 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__31798);
cljs.core.chunk_append(b__31799,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fancy-font"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),counterspell.core.score_word(word)], null)], null));

var G__31814 = (i__31798 + (1));
i__31798 = G__31814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31799),counterspell$core$found_words_$_iter__31796(cljs.core.chunk_rest(s__31797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31799),null);
}
} else {
var word = cljs.core.first(s__31797__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fancy-font"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),counterspell.core.score_word(word)], null)], null),counterspell$core$found_words_$_iter__31796(cljs.core.rest(s__31797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var fexpr__31800 = cljs.core.deref(counterspell.core.state);
return (fexpr__31800.cljs$core$IFn$_invoke$arity$1 ? fexpr__31800.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)) : fexpr__31800.call(null, new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font"], null),"Final score (lower is better)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fancy-font",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"28px",new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(counterspell.core.score_word,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var fexpr__31801 = cljs.core.deref(counterspell.core.state);
return (fexpr__31801.cljs$core$IFn$_invoke$arity$1 ? fexpr__31801.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)) : fexpr__31801.call(null, new cljs.core.Keyword(null,"remaining-words","remaining-words",1702494891)));
})())))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return location.reload();
})], null),"Try this board again"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(location.hash = "");

return location.reload();
})], null),"Try a new random board"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('')], null),"Copy this link to challenge someone else to the same board."], null)], null)], null):null)], null);
});
counterspell.core.instructions = (function counterspell$core$instructions(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"width","width",-384071477),"21rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #ccc"], null)], null),"How to play"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"other-font",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0 0 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"The goal of Counterspell is to get the lowest score possible."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"You have 3 turns to find words on the board and clear them."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Words are spelled by making a path of adjacent (orthogonal and diagonal) tiles."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Tiles will fall to fill in cleared board spaces."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Score is calculated at the end of the game based on words remaining on the board."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Boards are randomly generated, based on seeds. Replay the same seed and it will be the same board."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Try to beat your own score or challenge a friend!"], null)], null)], null);
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
