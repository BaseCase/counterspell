goog.provide('counterspell.core');
counterspell.core.with_index = (function counterspell$core$with_index(coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
});
counterspell.core.tiles_to_string = (function counterspell$core$tiles_to_string(tiles){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter","letter",-125811450),tiles));
});
counterspell.core.game_turns = (3);
counterspell.core.grid_rows = (10);
counterspell.core.grid_cols = (8);
counterspell.core.tile_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
counterspell.core.game_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),null,new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908),null,new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411),null,new cljs.core.Keyword(null,"scoring","scoring",-454135688),null], null), null);
counterspell.core.neighbors = (function counterspell$core$neighbors(p__27386){
var vec__27387 = p__27386;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27387,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27387,(1),null);
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$neighbors_$_iter__27390(s__27391){
return (new cljs.core.LazySeq(null,(function (){
var s__27391__$1 = s__27391;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27391__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__27391__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__27387,x,y){
return (function counterspell$core$neighbors_$_iter__27390_$_iter__27392(s__27393){
return (new cljs.core.LazySeq(null,((function (s__27391__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__27387,x,y){
return (function (){
var s__27393__$1 = s__27393;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27393__$1);
if(temp__5804__auto____$1){
var s__27393__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27393__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27393__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27395 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27394 = (0);
while(true){
if((i__27394 < size__5479__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__5478__auto__,i__27394);
cljs.core.chunk_append(b__27395,(((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null));

var G__27476 = (i__27394 + (1));
i__27394 = G__27476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27395),counterspell$core$neighbors_$_iter__27390_$_iter__27392(cljs.core.chunk_rest(s__27393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27395),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__27393__$2);
return cljs.core.cons((((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null))))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null),counterspell$core$neighbors_$_iter__27390_$_iter__27392(cljs.core.rest(s__27393__$2)));
}
} else {
return null;
}
break;
}
});})(s__27391__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__27387,x,y))
,null,null));
});})(s__27391__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__27387,x,y))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$neighbors_$_iter__27390(cljs.core.rest(s__27391__$1)));
} else {
var G__27477 = cljs.core.rest(s__27391__$1);
s__27391__$1 = G__27477;
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
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(alphabet);
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
var full_grid_27478 = counterspell.core.generate_game_grid(null);
var starters_27479 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27396_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,p1__27396_SHARP_));
}),full_grid_27478);
var reserve_27480 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27397_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,p1__27397_SHARP_));
}),full_grid_27478);
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"grid","grid",402978600),starters_27479,new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438),reserve_27480,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),false,new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.PersistentVector.EMPTY], null));
counterspell.core.is_selected_QMARK_ = (function counterspell$core$is_selected_QMARK_(p__27399){
var map__27400 = p__27399;
var map__27400__$1 = cljs.core.__destructure_map(map__27400);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27400__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27400__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.some((function (p1__27398_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(p1__27398_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27398_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : p1__27398_SHARP_.call(null, new cljs.core.Keyword(null,"x","x",2099068185))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(p1__27398_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27398_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : p1__27398_SHARP_.call(null, new cljs.core.Keyword(null,"y","y",-1757859776))))));
}),(function (){var fexpr__27401 = cljs.core.deref(counterspell.core.state);
return (fexpr__27401.cljs$core$IFn$_invoke$arity$1 ? fexpr__27401.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__27401.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
});
counterspell.core.is_legal_selection_QMARK_ = (function counterspell$core$is_legal_selection_QMARK_(x,y){
var temp__5802__auto__ = cljs.core.last((function (){var fexpr__27402 = cljs.core.deref(counterspell.core.state);
return (fexpr__27402.cljs$core$IFn$_invoke$arity$1 ? fexpr__27402.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__27402.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
if(cljs.core.truth_(temp__5802__auto__)){
var tail = temp__5802__auto__;
var G__27404 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__27403 = counterspell.core.neighbors(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tail.cljs$core$IFn$_invoke$arity$1 ? tail.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : tail.call(null, new cljs.core.Keyword(null,"x","x",2099068185))),(tail.cljs$core$IFn$_invoke$arity$1 ? tail.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : tail.call(null, new cljs.core.Keyword(null,"y","y",-1757859776)))], null));
return (fexpr__27403.cljs$core$IFn$_invoke$arity$1 ? fexpr__27403.cljs$core$IFn$_invoke$arity$1(G__27404) : fexpr__27403.call(null, G__27404));
} else {
return true;
}
});
counterspell.core.remove_selected_spaces_from_grid = (function counterspell$core$remove_selected_spaces_from_grid(grid,selected){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__27405){
var vec__27406 = p__27405;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__27409){
var vec__27410 = p__27409;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410,(1),null);
var G__27413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__27413) : selected.call(null, G__27413));
}),counterspell.core.with_index(col)));
}),counterspell.core.with_index(grid));
});
counterspell.core.add_tiles_from_reserve = (function counterspell$core$add_tiles_from_reserve(grid,reserve,removed){
var by_col = cljs.core.group_by(cljs.core.first,removed);
var iter__5480__auto__ = (function counterspell$core$add_tiles_from_reserve_$_iter__27415(s__27416){
return (new cljs.core.LazySeq(null,(function (){
var s__27416__$1 = s__27416;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27416__$1);
if(temp__5804__auto__){
var s__27416__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27416__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27416__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27418 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27417 = (0);
while(true){
if((i__27417 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__27417);
cljs.core.chunk_append(b__27418,(function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x);
var needed = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
var extras = cljs.core.take.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__27417,col,needed,extras,x,c__5478__auto__,size__5479__auto__,b__27418,s__27416__$2,temp__5804__auto__,by_col){
return (function (p1__27414_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27414_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992));
});})(i__27417,col,needed,extras,x,c__5478__auto__,size__5479__auto__,b__27418,s__27416__$2,temp__5804__auto__,by_col))
,extras)));
})());

var G__27481 = (i__27417 + (1));
i__27417 = G__27481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27418),counterspell$core$add_tiles_from_reserve_$_iter__27415(cljs.core.chunk_rest(s__27416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27418),null);
}
} else {
var x = cljs.core.first(s__27416__$2);
return cljs.core.cons((function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x);
var needed = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
var extras = cljs.core.take.cljs$core$IFn$_invoke$arity$2(needed,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (col,needed,extras,x,s__27416__$2,temp__5804__auto__,by_col){
return (function (p1__27414_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27414_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992));
});})(col,needed,extras,x,s__27416__$2,temp__5804__auto__,by_col))
,extras)));
})(),counterspell$core$add_tiles_from_reserve_$_iter__27415(cljs.core.rest(s__27416__$2)));
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
counterspell.core.remove_tiles_from_reserve = (function counterspell$core$remove_tiles_from_reserve(reserve,removed){
var by_col = cljs.core.group_by(cljs.core.first,removed);
var iter__5480__auto__ = (function counterspell$core$remove_tiles_from_reserve_$_iter__27419(s__27420){
return (new cljs.core.LazySeq(null,(function (){
var s__27420__$1 = s__27420;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27420__$1);
if(temp__5804__auto__){
var s__27420__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27420__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27420__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27422 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27421 = (0);
while(true){
if((i__27421 < size__5479__auto__)){
var x = cljs.core._nth(c__5478__auto__,i__27421);
cljs.core.chunk_append(b__27422,(function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x);
var used = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(used,col);
})());

var G__27482 = (i__27421 + (1));
i__27421 = G__27482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27422),counterspell$core$remove_tiles_from_reserve_$_iter__27419(cljs.core.chunk_rest(s__27420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27422),null);
}
} else {
var x = cljs.core.first(s__27420__$2);
return cljs.core.cons((function (){var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reserve,x);
var used = cljs.core.count((by_col.cljs$core$IFn$_invoke$arity$1 ? by_col.cljs$core$IFn$_invoke$arity$1(x) : by_col.call(null, x)));
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(used,col);
})(),counterspell$core$remove_tiles_from_reserve_$_iter__27419(cljs.core.rest(s__27420__$2)));
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
counterspell.core.after_advancing_turn_BANG_ = (function counterspell$core$after_advancing_turn_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["donk"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(counterspell.core.game_turns,cljs.core.count((function (){var fexpr__27424 = cljs.core.deref(counterspell.core.state);
return (fexpr__27424.cljs$core$IFn$_invoke$arity$1 ? fexpr__27424.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"found-words","found-words",1852804480)) : fexpr__27424.call(null, new cljs.core.Keyword(null,"found-words","found-words",1852804480)));
})()))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"scoring","scoring",-454135688));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025)),new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__27423_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27423_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328));
})),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : old.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)))));
}));
}
});
counterspell.core.after_submitting_word_BANG_ = (function counterspell$core$after_submitting_word_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
var gone = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27425_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__27425_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27425_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : p1__27425_SHARP_.call(null, new cljs.core.Keyword(null,"x","x",2099068185))),(p1__27425_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27425_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : p1__27425_SHARP_.call(null, new cljs.core.Keyword(null,"y","y",-1757859776)))],null));
}),(function (){var fexpr__27426 = cljs.core.deref(counterspell.core.state);
return (fexpr__27426.cljs$core$IFn$_invoke$arity$1 ? fexpr__27426.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__27426.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.add_tiles_from_reserve(counterspell.core.remove_selected_spaces_from_grid((old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : old.call(null, new cljs.core.Keyword(null,"grid","grid",402978600))),gone),(old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438)) : old.call(null, new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438))),gone)),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411)),new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"reserve-grid","reserve-grid",-177401438),counterspell.core.remove_tiles_from_reserve,gone);
}));

return setTimeout(counterspell.core.after_advancing_turn_BANG_,(600));
});
counterspell.core.submit_word_BANG_ = (function counterspell$core$submit_word_BANG_(){
var maybe_word = counterspell.core.tiles_to_string((function (){var fexpr__27427 = cljs.core.deref(counterspell.core.state);
return (fexpr__27427.cljs$core$IFn$_invoke$arity$1 ? fexpr__27427.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__27427.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()).toLowerCase();
if(cljs.core.truth_((counterspell.words.words.cljs$core$IFn$_invoke$arity$1 ? counterspell.words.words.cljs$core$IFn$_invoke$arity$1(maybe_word) : counterspell.words.words.call(null, maybe_word)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(old,new cljs.core.Keyword(null,"found-words","found-words",1852804480),cljs.core.conj,maybe_word),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908));
}));

return setTimeout(counterspell.core.after_submitting_word_BANG_,(470));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584),true);
}
});
counterspell.core.tile_action_BANG_ = (function counterspell$core$tile_action_BANG_(p__27429){
var map__27430 = p__27429;
var map__27430__$1 = cljs.core.__destructure_map(map__27430);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27430__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27430__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27430__$1,new cljs.core.Keyword(null,"tile","tile",758132866));
var selected_grid_space = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"letter","letter",-125811450),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : tile.call(null, new cljs.core.Keyword(null,"letter","letter",-125811450)))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selecting-tiles","selecting-tiles",540158025),(function (){var fexpr__27431 = cljs.core.deref(counterspell.core.state);
return (fexpr__27431.cljs$core$IFn$_invoke$arity$1 ? fexpr__27431.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__27431.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})())){
if(cljs.core.truth_(counterspell.core.is_selected_QMARK_(selected_grid_space))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_grid_space,cljs.core.last((function (){var fexpr__27432 = cljs.core.deref(counterspell.core.state);
return (fexpr__27432.cljs$core$IFn$_invoke$arity$1 ? fexpr__27432.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__27432.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})()))){
return counterspell.core.submit_word_BANG_();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (old){
var new_selected = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27428_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27428_SHARP_,selected_grid_space)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counterspell!!!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment","comment",532206069),"the letter grid",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),(function (){var iter__5480__auto__ = (function counterspell$core$main_$_iter__27433(s__27434){
return (new cljs.core.LazySeq(null,(function (){
var s__27434__$1 = s__27434;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27434__$1);
if(temp__5804__auto__){
var s__27434__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27434__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27434__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27436 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27435 = (0);
while(true){
if((i__27435 < size__5479__auto__)){
var vec__27437 = cljs.core._nth(c__5478__auto__,i__27435);
var grid_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(1),null);
cljs.core.chunk_append(b__27436,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"one column of tiles",new cljs.core.Keyword(null,"key","key",-1516042587),grid_x,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__5480__auto__ = ((function (i__27435,vec__27437,grid_x,col,c__5478__auto__,size__5479__auto__,b__27436,s__27434__$2,temp__5804__auto__){
return (function counterspell$core$main_$_iter__27433_$_iter__27440(s__27441){
return (new cljs.core.LazySeq(null,((function (i__27435,vec__27437,grid_x,col,c__5478__auto__,size__5479__auto__,b__27436,s__27434__$2,temp__5804__auto__){
return (function (){
var s__27441__$1 = s__27441;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27441__$1);
if(temp__5804__auto____$1){
var s__27441__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27441__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__27441__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__27443 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__27442 = (0);
while(true){
if((i__27442 < size__5479__auto____$1)){
var vec__27444 = cljs.core._nth(c__5478__auto____$1,i__27442);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27444,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27444,(1),null);
cljs.core.chunk_append(b__27443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null));

var G__27483 = (i__27442 + (1));
i__27442 = G__27483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27443),counterspell$core$main_$_iter__27433_$_iter__27440(cljs.core.chunk_rest(s__27441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27443),null);
}
} else {
var vec__27447 = cljs.core.first(s__27441__$2);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27447,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27447,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null),counterspell$core$main_$_iter__27433_$_iter__27440(cljs.core.rest(s__27441__$2)));
}
} else {
return null;
}
break;
}
});})(i__27435,vec__27437,grid_x,col,c__5478__auto__,size__5479__auto__,b__27436,s__27434__$2,temp__5804__auto__))
,null,null));
});})(i__27435,vec__27437,grid_x,col,c__5478__auto__,size__5479__auto__,b__27436,s__27434__$2,temp__5804__auto__))
;
return iter__5480__auto__(counterspell.core.with_index(col));
})()], null));

var G__27484 = (i__27435 + (1));
i__27435 = G__27484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27436),counterspell$core$main_$_iter__27433(cljs.core.chunk_rest(s__27434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27436),null);
}
} else {
var vec__27450 = cljs.core.first(s__27434__$2);
var grid_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27450,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27450,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"one column of tiles",new cljs.core.Keyword(null,"key","key",-1516042587),grid_x,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__5480__auto__ = ((function (vec__27450,grid_x,col,s__27434__$2,temp__5804__auto__){
return (function counterspell$core$main_$_iter__27433_$_iter__27453(s__27454){
return (new cljs.core.LazySeq(null,(function (){
var s__27454__$1 = s__27454;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27454__$1);
if(temp__5804__auto____$1){
var s__27454__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27454__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27454__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27456 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27455 = (0);
while(true){
if((i__27455 < size__5479__auto__)){
var vec__27457 = cljs.core._nth(c__5478__auto__,i__27455);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457,(1),null);
cljs.core.chunk_append(b__27456,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null));

var G__27485 = (i__27455 + (1));
i__27455 = G__27485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27456),counterspell$core$main_$_iter__27433_$_iter__27453(cljs.core.chunk_rest(s__27454__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27456),null);
}
} else {
var vec__27460 = cljs.core.first(s__27454__$2);
var grid_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622),grid_x,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474),grid_y], null)], null),counterspell$core$main_$_iter__27433_$_iter__27453(cljs.core.rest(s__27454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27450,grid_x,col,s__27434__$2,temp__5804__auto__))
;
return iter__5480__auto__(counterspell.core.with_index(col));
})()], null),counterspell$core$main_$_iter__27433(cljs.core.rest(s__27434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(counterspell.core.with_index((function (){var fexpr__27463 = cljs.core.deref(counterspell.core.state);
return (fexpr__27463.cljs$core$IFn$_invoke$arity$1 ? fexpr__27463.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__27463.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})()));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.word_in_progress], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.found_words], null)], null)], null);
});
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__27464){
var map__27465 = p__27464;
var map__27465__$1 = cljs.core.__destructure_map(map__27465);
var tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465__$1,new cljs.core.Keyword(null,"tile","tile",758132866));
var grid_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465__$1,new cljs.core.Keyword(null,"grid-x","grid-x",1935903622));
var grid_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27465__$1,new cljs.core.Keyword(null,"grid-y","grid-y",1140315474));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comment","comment",532206069),"a single letter tile",new cljs.core.Keyword(null,"class","class",-2030961996),"letter-tile",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(cljs.core.truth_(counterspell.core.is_selected_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y], null)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fbb",new cljs.core.Keyword(null,"animation","animation",-1248293244),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submitting-word","submitting-word",412196908),(function (){var fexpr__27466 = cljs.core.deref(counterspell.core.state);
return (fexpr__27466.cljs$core$IFn$_invoke$arity$1 ? fexpr__27466.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__27466.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?"fade-out forwards 0.5s":null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"falling-in","falling-in",-1540328992),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099)) : tile.call(null, new cljs.core.Keyword(null,"state","state",-1988618099))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advancing-turn","advancing-turn",-1752107411),(function (){var fexpr__27467 = cljs.core.deref(counterspell.core.state);
return (fexpr__27467.cljs$core$IFn$_invoke$arity$1 ? fexpr__27467.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__27467.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),"0.5s forwards fall-in"], null):null)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return counterspell.core.tile_action_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),grid_x,new cljs.core.Keyword(null,"y","y",-1757859776),grid_y,new cljs.core.Keyword(null,"tile","tile",758132866),tile], null));
})], null),(tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter","letter",-125811450)) : tile.call(null, new cljs.core.Keyword(null,"letter","letter",-125811450)))], null);
});
counterspell.core.word_in_progress = (function counterspell$core$word_in_progress(){
var maybe_word = counterspell.core.tiles_to_string((function (){var fexpr__27468 = cljs.core.deref(counterspell.core.state);
return (fexpr__27468.cljs$core$IFn$_invoke$arity$1 ? fexpr__27468.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)) : fexpr__27468.call(null, new cljs.core.Keyword(null,"selected-grid-spaces","selected-grid-spaces",-449077992)));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),"the currently-being-spelled word",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__27469 = cljs.core.deref(counterspell.core.state);
return (fexpr__27469.cljs$core$IFn$_invoke$arity$1 ? fexpr__27469.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584)) : fexpr__27469.call(null, new cljs.core.Keyword(null,"bad-guess?","bad-guess?",-1757402584)));
})())?"naughty":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),maybe_word], null)], null);
});
counterspell.core.found_words = (function counterspell$core$found_words(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Found words:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function counterspell$core$found_words_$_iter__27470(s__27471){
return (new cljs.core.LazySeq(null,(function (){
var s__27471__$1 = s__27471;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27471__$1);
if(temp__5804__auto__){
var s__27471__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27471__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__27471__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__27473 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__27472 = (0);
while(true){
if((i__27472 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__27472);
cljs.core.chunk_append(b__27473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),word], null));

var G__27486 = (i__27472 + (1));
i__27472 = G__27486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27473),counterspell$core$found_words_$_iter__27470(cljs.core.chunk_rest(s__27471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27473),null);
}
} else {
var word = cljs.core.first(s__27471__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),word], null),counterspell$core$found_words_$_iter__27470(cljs.core.rest(s__27471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__((function (){var fexpr__27474 = cljs.core.deref(counterspell.core.state);
return (fexpr__27474.cljs$core$IFn$_invoke$arity$1 ? fexpr__27474.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"found-words","found-words",1852804480)) : fexpr__27474.call(null, new cljs.core.Keyword(null,"found-words","found-words",1852804480)));
})());
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scoring","scoring",-454135688),(function (){var fexpr__27475 = cljs.core.deref(counterspell.core.state);
return (fexpr__27475.cljs$core$IFn$_invoke$arity$1 ? fexpr__27475.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__27475.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})()))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Final score:"], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"good job"], null);
})()
:null)], null);
});
if((typeof counterspell !== 'undefined') && (typeof counterspell.core !== 'undefined') && (typeof counterspell.core.root !== 'undefined')){
} else {
counterspell.core.root = reagent.dom.client.create_root(document.querySelector("#root"));
}
counterspell.core.init = (function counterspell$core$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(counterspell.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.main], null));
});

//# sourceMappingURL=counterspell.core.js.map
