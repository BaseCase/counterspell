goog.provide('counterspell.core');
counterspell.core.index = (function counterspell$core$index(coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
});
counterspell.core.game_turns = (3);
counterspell.core.grid_rows = (5);
counterspell.core.grid_cols = (4);
counterspell.core.create_letter_generator = (function counterspell$core$create_letter_generator(seed){
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(alphabet);
}));
});
counterspell.core.letters = counterspell.core.create_letter_generator(null);
counterspell.core.generate_game_grid = (function counterspell$core$generate_game_grid(){
var height = (counterspell.core.grid_rows * (counterspell.core.game_turns + (1)));
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(height,cljs.core.take.cljs$core$IFn$_invoke$arity$2((height * counterspell.core.grid_cols),counterspell.core.letters));
});
counterspell.core.possible_game_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tiles-falling","tiles-falling",-4163168),null,new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020),null,new cljs.core.Keyword(null,"playing","playing",70013335),null], null), null);
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.generate_game_grid(),new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),null,new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing","playing",70013335)], null));
/**
 * register a one-time event listener for a given animation, and run function f when it happens
 */
counterspell.core.upon_animation = (function counterspell$core$upon_animation(animation_name,f){
return document.addEventListener("animationend",(function (evt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_name,evt.animationName)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return null;
}
}),({"once": true}));
});
/**
 * register a one-time event listener for a given transition, and run function f when it happens
 */
counterspell.core.upon_transition = (function counterspell$core$upon_transition(property_name,f){
return document.addEventListener("transitionend",(function (evt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_name,evt.propertyName)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return null;
}
}),({"once": true}));
});
counterspell.core.update_grid_after_fall_BANG_ = (function counterspell$core$update_grid_after_fall_BANG_(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start here"], 0));
});
/**
 * just-cleared tiles have finished fading out, so start column gravity animation
 */
counterspell.core.fall_after_fade_BANG_ = (function counterspell$core$fall_after_fade_BANG_(){
var deleted = (function (){var fexpr__22619 = cljs.core.deref(counterspell.core.state);
return (fexpr__22619.cljs$core$IFn$_invoke$arity$1 ? fexpr__22619.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22619.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})();
var deleted_tile_info = (function (){var iter__5480__auto__ = (function counterspell$core$fall_after_fade_BANG__$_iter__22620(s__22621){
return (new cljs.core.LazySeq(null,(function (){
var s__22621__$1 = s__22621;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22621__$1);
if(temp__5804__auto__){
var s__22621__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22621__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22621__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22623 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22622 = (0);
while(true){
if((i__22622 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__22622);
cljs.core.chunk_append(b__22623,(function (){var deleted_in_col = cljs.core.filterv(((function (i__22622,col,c__5478__auto__,size__5479__auto__,b__22623,s__22621__$2,temp__5804__auto__,deleted){
return (function (p1__22618_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,cljs.core.first(p1__22618_SHARP_));
});})(i__22622,col,c__5478__auto__,size__5479__auto__,b__22623,s__22621__$2,temp__5804__auto__,deleted))
,deleted);
var highest_deleted = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,deleted_in_col));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),col,new cljs.core.Keyword(null,"deleted","deleted",-510100639),cljs.core.count(deleted_in_col),new cljs.core.Keyword(null,"top-row-deleted","top-row-deleted",-361266876),highest_deleted], null);
})());

var G__22693 = (i__22622 + (1));
i__22622 = G__22693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22623),counterspell$core$fall_after_fade_BANG__$_iter__22620(cljs.core.chunk_rest(s__22621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22623),null);
}
} else {
var col = cljs.core.first(s__22621__$2);
return cljs.core.cons((function (){var deleted_in_col = cljs.core.filterv(((function (col,s__22621__$2,temp__5804__auto__,deleted){
return (function (p1__22618_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,cljs.core.first(p1__22618_SHARP_));
});})(col,s__22621__$2,temp__5804__auto__,deleted))
,deleted);
var highest_deleted = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,deleted_in_col));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),col,new cljs.core.Keyword(null,"deleted","deleted",-510100639),cljs.core.count(deleted_in_col),new cljs.core.Keyword(null,"top-row-deleted","top-row-deleted",-361266876),highest_deleted], null);
})(),counterspell$core$fall_after_fade_BANG__$_iter__22620(cljs.core.rest(s__22621__$2)));
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counterspell.core.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted-tile-info","deleted-tile-info",-1446120702),deleted_tile_info,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"tiles-falling","tiles-falling",-4163168)], null));

return counterspell.core.upon_transition("transform",counterspell.core.update_grid_after_fall_BANG_);
});
counterspell.core.tile_active_QMARK_ = (function counterspell$core$tile_active_QMARK_(x,y){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),(function (){var fexpr__22624 = cljs.core.deref(counterspell.core.state);
return (fexpr__22624.cljs$core$IFn$_invoke$arity$1 ? fexpr__22624.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22624.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
});
counterspell.core.tiles_to_string = (function counterspell$core$tiles_to_string(tiles,grid){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22625){
var vec__22626 = p__22625;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22626,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22626,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x),y);
}),tiles));
});
counterspell.core.real_word_QMARK_ = (function counterspell$core$real_word_QMARK_(s){
return (counterspell.words.words.cljs$core$IFn$_invoke$arity$1 ? counterspell.words.words.cljs$core$IFn$_invoke$arity$1(s) : counterspell.words.words.call(null, s));
});
counterspell.core.submit_word_BANG_ = (function counterspell$core$submit_word_BANG_(tiles){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
var word = counterspell.core.tiles_to_string(tiles,(s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : s.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)))).toLowerCase();
if(cljs.core.truth_(counterspell.core.real_word_QMARK_(word))){
counterspell.core.upon_animation("deleting",counterspell.core.fall_after_fade_BANG_);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450)) : s.call(null, new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450))),word),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020)], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),word], null)], 0));
}
}));
});
counterspell.core.legal_tiles = (function counterspell$core$legal_tiles(){
var temp__5802__auto__ = cljs.core.last((function (){var fexpr__22629 = cljs.core.deref(counterspell.core.state);
return (fexpr__22629.cljs$core$IFn$_invoke$arity$1 ? fexpr__22629.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22629.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
if(cljs.core.truth_(temp__5802__auto__)){
var tail = temp__5802__auto__;
var vec__22630 = tail;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22630,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22630,(1),null);
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$legal_tiles_$_iter__22633(s__22634){
return (new cljs.core.LazySeq(null,(function (){
var s__22634__$1 = s__22634;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22634__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__22634__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22630,x,y,tail,temp__5802__auto__){
return (function counterspell$core$legal_tiles_$_iter__22633_$_iter__22635(s__22636){
return (new cljs.core.LazySeq(null,((function (s__22634__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22630,x,y,tail,temp__5802__auto__){
return (function (){
var s__22636__$1 = s__22636;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22636__$1);
if(temp__5804__auto____$1){
var s__22636__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22636__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22636__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22638 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22637 = (0);
while(true){
if((i__22637 < size__5479__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__5478__auto__,i__22637);
cljs.core.chunk_append(b__22638,((((cljs.core.not(counterspell.core.tile_active_QMARK_(x_SINGLEQUOTE_,y_SINGLEQUOTE_))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null));

var G__22694 = (i__22637 + (1));
i__22637 = G__22694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22638),counterspell$core$legal_tiles_$_iter__22633_$_iter__22635(cljs.core.chunk_rest(s__22636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22638),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__22636__$2);
return cljs.core.cons(((((cljs.core.not(counterspell.core.tile_active_QMARK_(x_SINGLEQUOTE_,y_SINGLEQUOTE_))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null),counterspell$core$legal_tiles_$_iter__22633_$_iter__22635(cljs.core.rest(s__22636__$2)));
}
} else {
return null;
}
break;
}
});})(s__22634__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22630,x,y,tail,temp__5802__auto__))
,null,null));
});})(s__22634__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22630,x,y,tail,temp__5802__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$legal_tiles_$_iter__22633(cljs.core.rest(s__22634__$1)));
} else {
var G__22695 = cljs.core.rest(s__22634__$1);
s__22634__$1 = G__22695;
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
} else {
return cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$legal_tiles_$_iter__22639(s__22640){
return (new cljs.core.LazySeq(null,(function (){
var s__22640__$1 = s__22640;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22640__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__22640__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__){
return (function counterspell$core$legal_tiles_$_iter__22639_$_iter__22641(s__22642){
return (new cljs.core.LazySeq(null,((function (s__22640__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__){
return (function (){
var s__22642__$1 = s__22642;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22642__$1);
if(temp__5804__auto____$1){
var s__22642__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22642__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22642__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22644 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22643 = (0);
while(true){
if((i__22643 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__22643);
cljs.core.chunk_append(b__22644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__22696 = (i__22643 + (1));
i__22643 = G__22696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22644),counterspell$core$legal_tiles_$_iter__22639_$_iter__22641(cljs.core.chunk_rest(s__22642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22644),null);
}
} else {
var y = cljs.core.first(s__22642__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),counterspell$core$legal_tiles_$_iter__22639_$_iter__22641(cljs.core.rest(s__22642__$2)));
}
} else {
return null;
}
break;
}
});})(s__22640__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__))
,null,null));
});})(s__22640__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_rows)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$legal_tiles_$_iter__22639(cljs.core.rest(s__22640__$1)));
} else {
var G__22697 = cljs.core.rest(s__22640__$1);
s__22640__$1 = G__22697;
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
})());
}
});
counterspell.core.tile_action_at_BANG_ = (function counterspell$core$tile_action_at_BANG_(x,y){

var active_tiles = (function (){var fexpr__22646 = cljs.core.deref(counterspell.core.state);
return (fexpr__22646.cljs$core$IFn$_invoke$arity$1 ? fexpr__22646.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22646.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})();
if(cljs.core.truth_(counterspell.core.tile_active_QMARK_(x,y))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.last(active_tiles))){
return counterspell.core.submit_word_BANG_(active_tiles);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__22645_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22645_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
}),active_tiles)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),null], null)], 0));
}));
}
} else {
if(cljs.core.truth_((function (){var G__22648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__22647 = counterspell.core.legal_tiles();
return (fexpr__22647.cljs$core$IFn$_invoke$arity$1 ? fexpr__22647.cljs$core$IFn$_invoke$arity$1(G__22648) : fexpr__22647.call(null, G__22648));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),null], null)], 0));
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),null], null)], 0));
}));
}
}
});
counterspell.core.tile_fall_distance = (function counterspell$core$tile_fall_distance(x,y){
var for_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__22649 = cljs.core.deref(counterspell.core.state);
return (fexpr__22649.cljs$core$IFn$_invoke$arity$1 ? fexpr__22649.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"deleted-tile-info","deleted-tile-info",-1446120702)) : fexpr__22649.call(null, new cljs.core.Keyword(null,"deleted-tile-info","deleted-tile-info",-1446120702)));
})(),x);
if((y > new cljs.core.Keyword(null,"top-row-deleted","top-row-deleted",-361266876).cljs$core$IFn$_invoke$arity$1(for_col))){
return new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(for_col);
} else {
return null;
}
});
counterspell.core.tile_height_in_pixels = (function counterspell$core$tile_height_in_pixels(){
return document.querySelector(".letter").offsetHeight;
});
counterspell.core.falling_css = (function counterspell$core$falling_css(pixels){
return ["translate3D(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pixels),"px, 0)"].join('');
});
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__22650){
var map__22651 = p__22650;
var map__22651__$1 = cljs.core.__destructure_map(map__22651);
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var activated_QMARK_ = counterspell.core.tile_active_QMARK_(x,y);
var deleting_QMARK_ = (function (){var and__5000__auto__ = activated_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020),(function (){var fexpr__22652 = cljs.core.deref(counterspell.core.state);
return (fexpr__22652.cljs$core$IFn$_invoke$arity$1 ? fexpr__22652.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__22652.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})());
} else {
return and__5000__auto__;
}
})();
var fall_distance = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tiles-falling","tiles-falling",-4163168),(function (){var fexpr__22653 = cljs.core.deref(counterspell.core.state);
return (fexpr__22653.cljs$core$IFn$_invoke$arity$1 ? fexpr__22653.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__22653.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})());
if(and__5000__auto__){
return counterspell.core.tile_fall_distance(x,y);
} else {
return and__5000__auto__;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(activated_QMARK_)?"active":null),(cljs.core.truth_(deleting_QMARK_)?"deleting":null),(cljs.core.truth_(fall_distance)?"falling":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),(function (){var fexpr__22654 = cljs.core.deref(counterspell.core.state);
return (fexpr__22654.cljs$core$IFn$_invoke$arity$1 ? fexpr__22654.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__22654.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})())){
return counterspell.core.tile_action_at_BANG_(x,y);
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(fall_distance)?counterspell.core.falling_css((fall_distance * counterspell.core.tile_height_in_pixels())):"none")], null)], null),letter], null);
});
counterspell.core.letter_grid = (function counterspell$core$letter_grid(){
var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counterspell.core.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-grid","div.letter-grid",-1807228585),(function (){var iter__5480__auto__ = (function counterspell$core$letter_grid_$_iter__22655(s__22656){
return (new cljs.core.LazySeq(null,(function (){
var s__22656__$1 = s__22656;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22656__$1);
if(temp__5804__auto__){
var s__22656__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22656__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22656__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22658 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22657 = (0);
while(true){
if((i__22657 < size__5479__auto__)){
var vec__22659 = cljs.core._nth(c__5478__auto__,i__22657);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22659,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22659,(1),null);
cljs.core.chunk_append(b__22658,(function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (i__22657,letters,vec__22659,x,col,c__5478__auto__,size__5479__auto__,b__22658,s__22656__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__22655_$_iter__22662(s__22663){
return (new cljs.core.LazySeq(null,((function (i__22657,letters,vec__22659,x,col,c__5478__auto__,size__5479__auto__,b__22658,s__22656__$2,temp__5804__auto__,grid){
return (function (){
var s__22663__$1 = s__22663;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22663__$1);
if(temp__5804__auto____$1){
var s__22663__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22663__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__22663__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__22665 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__22664 = (0);
while(true){
if((i__22664 < size__5479__auto____$1)){
var vec__22666 = cljs.core._nth(c__5478__auto____$1,i__22664);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22666,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22666,(1),null);
cljs.core.chunk_append(b__22665,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__22698 = (i__22664 + (1));
i__22664 = G__22698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22665),counterspell$core$letter_grid_$_iter__22655_$_iter__22662(cljs.core.chunk_rest(s__22663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22665),null);
}
} else {
var vec__22669 = cljs.core.first(s__22663__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__22655_$_iter__22662(cljs.core.rest(s__22663__$2)));
}
} else {
return null;
}
break;
}
});})(i__22657,letters,vec__22659,x,col,c__5478__auto__,size__5479__auto__,b__22658,s__22656__$2,temp__5804__auto__,grid))
,null,null));
});})(i__22657,letters,vec__22659,x,col,c__5478__auto__,size__5479__auto__,b__22658,s__22656__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})());

var G__22699 = (i__22657 + (1));
i__22657 = G__22699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22658),counterspell$core$letter_grid_$_iter__22655(cljs.core.chunk_rest(s__22656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22658),null);
}
} else {
var vec__22672 = cljs.core.first(s__22656__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22672,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22672,(1),null);
return cljs.core.cons((function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (letters,vec__22672,x,col,s__22656__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__22655_$_iter__22675(s__22676){
return (new cljs.core.LazySeq(null,(function (){
var s__22676__$1 = s__22676;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22676__$1);
if(temp__5804__auto____$1){
var s__22676__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22676__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22676__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22678 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22677 = (0);
while(true){
if((i__22677 < size__5479__auto__)){
var vec__22679 = cljs.core._nth(c__5478__auto__,i__22677);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22679,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22679,(1),null);
cljs.core.chunk_append(b__22678,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__22700 = (i__22677 + (1));
i__22677 = G__22700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22678),counterspell$core$letter_grid_$_iter__22655_$_iter__22675(cljs.core.chunk_rest(s__22676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22678),null);
}
} else {
var vec__22682 = cljs.core.first(s__22676__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22682,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22682,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__22655_$_iter__22675(cljs.core.rest(s__22676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(letters,vec__22672,x,col,s__22656__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})(),counterspell$core$letter_grid_$_iter__22655(cljs.core.rest(s__22656__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(counterspell.core.index(grid));
})()], null);
});
counterspell.core.building_word = (function counterspell$core$building_word(){
var word = counterspell.core.tiles_to_string((function (){var fexpr__22685 = cljs.core.deref(counterspell.core.state);
return (fexpr__22685.cljs$core$IFn$_invoke$arity$1 ? fexpr__22685.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22685.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})(),(function (){var fexpr__22686 = cljs.core.deref(counterspell.core.state);
return (fexpr__22686.cljs$core$IFn$_invoke$arity$1 ? fexpr__22686.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__22686.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})());
var mistake = (function (){var fexpr__22687 = cljs.core.deref(counterspell.core.state);
return (fexpr__22687.cljs$core$IFn$_invoke$arity$1 ? fexpr__22687.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643)) : fexpr__22687.call(null, new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643)));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.building-word","div.building-word",1932541074),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),word], null),(cljs.core.truth_(mistake)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mistake","p.mistake",1065850794),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mistake)," is not a word!"].join('')], null):null)], null);
});
counterspell.core.submitted_words = (function counterspell$core$submitted_words(){
var words = (function (){var fexpr__22688 = cljs.core.deref(counterspell.core.state);
return (fexpr__22688.cljs$core$IFn$_invoke$arity$1 ? fexpr__22688.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450)) : fexpr__22688.call(null, new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.submitted-word","div.submitted-word",1310571274),(function (){var iter__5480__auto__ = (function counterspell$core$submitted_words_$_iter__22689(s__22690){
return (new cljs.core.LazySeq(null,(function (){
var s__22690__$1 = s__22690;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22690__$1);
if(temp__5804__auto__){
var s__22690__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22690__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22690__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22692 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22691 = (0);
while(true){
if((i__22691 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__22691);
cljs.core.chunk_append(b__22692,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),word], null));

var G__22701 = (i__22691 + (1));
i__22691 = G__22701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22692),counterspell$core$submitted_words_$_iter__22689(cljs.core.chunk_rest(s__22690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22692),null);
}
} else {
var word = cljs.core.first(s__22690__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),word], null),counterspell$core$submitted_words_$_iter__22689(cljs.core.rest(s__22690__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(words);
})()], null);
});
counterspell.core.main = (function counterspell$core$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counterspell!!!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-board","div.game-board",1833032215),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.play-area","div.play-area",-554370006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_grid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.building_word], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scoreboard","div.scoreboard",132387928),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.submitted_words], null)], null)], null)], null);
});
if((typeof counterspell !== 'undefined') && (typeof counterspell.core !== 'undefined') && (typeof counterspell.core.root !== 'undefined')){
} else {
counterspell.core.root = reagent.dom.client.create_root(document.querySelector("#root"));
}
counterspell.core.init = (function counterspell$core$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(counterspell.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.main], null));
});

//# sourceMappingURL=counterspell.core.js.map
