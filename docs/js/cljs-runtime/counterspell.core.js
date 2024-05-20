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
var flat_letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2((height * counterspell.core.grid_cols),counterspell.core.letters);
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(height,flat_letters);
});
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.generate_game_grid(),new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"last-submitted-word","last-submitted-word",-1280616518),null], null));
counterspell.core.tile_active_QMARK_ = (function counterspell$core$tile_active_QMARK_(x,y){
return cljs.core.some((function (p1__21547_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21547_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),(function (){var fexpr__21548 = cljs.core.deref(counterspell.core.state);
return (fexpr__21548.cljs$core$IFn$_invoke$arity$1 ? fexpr__21548.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__21548.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
});
counterspell.core.tiles_to_string = (function counterspell$core$tiles_to_string(tiles,grid){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21549){
var vec__21550 = p__21549;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21550,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21550,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x),y);
}),tiles));
});
counterspell.core.submit_word_BANG_ = (function counterspell$core$submit_word_BANG_(tiles){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
var word = counterspell.core.tiles_to_string(tiles,(s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : s.call(null, new cljs.core.Keyword(null,"grid","grid",402978600))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"last-submitted-word","last-submitted-word",-1280616518),word),new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentVector.EMPTY);
}));
});
counterspell.core.legal_tiles = (function counterspell$core$legal_tiles(){
var tail = cljs.core.last((function (){var fexpr__21553 = cljs.core.deref(counterspell.core.state);
return (fexpr__21553.cljs$core$IFn$_invoke$arity$1 ? fexpr__21553.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__21553.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
if(cljs.core.truth_(tail)){
var vec__21554 = tail;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21554,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21554,(1),null);
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$legal_tiles_$_iter__21557(s__21558){
return (new cljs.core.LazySeq(null,(function (){
var s__21558__$1 = s__21558;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21558__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__21558__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__21554,x,y,tail){
return (function counterspell$core$legal_tiles_$_iter__21557_$_iter__21559(s__21560){
return (new cljs.core.LazySeq(null,((function (s__21558__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__21554,x,y,tail){
return (function (){
var s__21560__$1 = s__21560;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21560__$1);
if(temp__5804__auto____$1){
var s__21560__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21560__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21560__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21562 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21561 = (0);
while(true){
if((i__21561 < size__5479__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__5478__auto__,i__21561);
cljs.core.chunk_append(b__21562,((((cljs.core.not(counterspell.core.tile_active_QMARK_(x_SINGLEQUOTE_,y_SINGLEQUOTE_))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null));

var G__21613 = (i__21561 + (1));
i__21561 = G__21613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21562),counterspell$core$legal_tiles_$_iter__21557_$_iter__21559(cljs.core.chunk_rest(s__21560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21562),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__21560__$2);
return cljs.core.cons(((((cljs.core.not(counterspell.core.tile_active_QMARK_(x_SINGLEQUOTE_,y_SINGLEQUOTE_))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null),counterspell$core$legal_tiles_$_iter__21557_$_iter__21559(cljs.core.rest(s__21560__$2)));
}
} else {
return null;
}
break;
}
});})(s__21558__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__21554,x,y,tail))
,null,null));
});})(s__21558__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__21554,x,y,tail))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$legal_tiles_$_iter__21557(cljs.core.rest(s__21558__$1)));
} else {
var G__21614 = cljs.core.rest(s__21558__$1);
s__21558__$1 = G__21614;
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
return cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$legal_tiles_$_iter__21563(s__21564){
return (new cljs.core.LazySeq(null,(function (){
var s__21564__$1 = s__21564;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21564__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__21564__$1,x,xs__6360__auto__,temp__5804__auto__,tail){
return (function counterspell$core$legal_tiles_$_iter__21563_$_iter__21565(s__21566){
return (new cljs.core.LazySeq(null,((function (s__21564__$1,x,xs__6360__auto__,temp__5804__auto__,tail){
return (function (){
var s__21566__$1 = s__21566;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21566__$1);
if(temp__5804__auto____$1){
var s__21566__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21566__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21566__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21568 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21567 = (0);
while(true){
if((i__21567 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__21567);
cljs.core.chunk_append(b__21568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__21615 = (i__21567 + (1));
i__21567 = G__21615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21568),counterspell$core$legal_tiles_$_iter__21563_$_iter__21565(cljs.core.chunk_rest(s__21566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21568),null);
}
} else {
var y = cljs.core.first(s__21566__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),counterspell$core$legal_tiles_$_iter__21563_$_iter__21565(cljs.core.rest(s__21566__$2)));
}
} else {
return null;
}
break;
}
});})(s__21564__$1,x,xs__6360__auto__,temp__5804__auto__,tail))
,null,null));
});})(s__21564__$1,x,xs__6360__auto__,temp__5804__auto__,tail))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_rows)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$legal_tiles_$_iter__21563(cljs.core.rest(s__21564__$1)));
} else {
var G__21616 = cljs.core.rest(s__21564__$1);
s__21564__$1 = G__21616;
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

var active_tiles = (function (){var fexpr__21574 = cljs.core.deref(counterspell.core.state);
return (fexpr__21574.cljs$core$IFn$_invoke$arity$1 ? fexpr__21574.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__21574.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})();
if(cljs.core.truth_(counterspell.core.tile_active_QMARK_(x,y))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.last(active_tiles))){
return counterspell.core.submit_word_BANG_(active_tiles);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__21571_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21571_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
}),active_tiles)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
}
} else {
if(cljs.core.truth_((function (){var G__21576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__21575 = counterspell.core.legal_tiles();
return (fexpr__21575.cljs$core$IFn$_invoke$arity$1 ? fexpr__21575.cljs$core$IFn$_invoke$arity$1(G__21576) : fexpr__21575.call(null, G__21576));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counterspell.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentVector.EMPTY);
}
}
});
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__21577){
var map__21578 = p__21577;
var map__21578__$1 = cljs.core.__destructure_map(map__21578);
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21578__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21578__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21578__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var activated_QMARK_ = counterspell.core.tile_active_QMARK_(x,y);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(activated_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return counterspell.core.tile_action_at_BANG_(x,y);
})], null),letter], null);
});
counterspell.core.letter_grid = (function counterspell$core$letter_grid(){
var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counterspell.core.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-grid","div.letter-grid",-1807228585),(function (){var iter__5480__auto__ = (function counterspell$core$letter_grid_$_iter__21579(s__21580){
return (new cljs.core.LazySeq(null,(function (){
var s__21580__$1 = s__21580;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21580__$1);
if(temp__5804__auto__){
var s__21580__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21580__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21580__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21582 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21581 = (0);
while(true){
if((i__21581 < size__5479__auto__)){
var vec__21583 = cljs.core._nth(c__5478__auto__,i__21581);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,(1),null);
cljs.core.chunk_append(b__21582,(function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (i__21581,letters,vec__21583,x,col,c__5478__auto__,size__5479__auto__,b__21582,s__21580__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__21579_$_iter__21586(s__21587){
return (new cljs.core.LazySeq(null,((function (i__21581,letters,vec__21583,x,col,c__5478__auto__,size__5479__auto__,b__21582,s__21580__$2,temp__5804__auto__,grid){
return (function (){
var s__21587__$1 = s__21587;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21587__$1);
if(temp__5804__auto____$1){
var s__21587__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21587__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__21587__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__21589 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__21588 = (0);
while(true){
if((i__21588 < size__5479__auto____$1)){
var vec__21590 = cljs.core._nth(c__5478__auto____$1,i__21588);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21590,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21590,(1),null);
cljs.core.chunk_append(b__21589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__21617 = (i__21588 + (1));
i__21588 = G__21617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21589),counterspell$core$letter_grid_$_iter__21579_$_iter__21586(cljs.core.chunk_rest(s__21587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21589),null);
}
} else {
var vec__21593 = cljs.core.first(s__21587__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21593,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21593,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__21579_$_iter__21586(cljs.core.rest(s__21587__$2)));
}
} else {
return null;
}
break;
}
});})(i__21581,letters,vec__21583,x,col,c__5478__auto__,size__5479__auto__,b__21582,s__21580__$2,temp__5804__auto__,grid))
,null,null));
});})(i__21581,letters,vec__21583,x,col,c__5478__auto__,size__5479__auto__,b__21582,s__21580__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})());

var G__21618 = (i__21581 + (1));
i__21581 = G__21618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21582),counterspell$core$letter_grid_$_iter__21579(cljs.core.chunk_rest(s__21580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21582),null);
}
} else {
var vec__21596 = cljs.core.first(s__21580__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21596,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21596,(1),null);
return cljs.core.cons((function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (letters,vec__21596,x,col,s__21580__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__21579_$_iter__21599(s__21600){
return (new cljs.core.LazySeq(null,(function (){
var s__21600__$1 = s__21600;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21600__$1);
if(temp__5804__auto____$1){
var s__21600__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21600__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21600__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21602 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21601 = (0);
while(true){
if((i__21601 < size__5479__auto__)){
var vec__21603 = cljs.core._nth(c__5478__auto__,i__21601);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21603,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21603,(1),null);
cljs.core.chunk_append(b__21602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__21619 = (i__21601 + (1));
i__21601 = G__21619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21602),counterspell$core$letter_grid_$_iter__21579_$_iter__21599(cljs.core.chunk_rest(s__21600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21602),null);
}
} else {
var vec__21606 = cljs.core.first(s__21600__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21606,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21606,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__21579_$_iter__21599(cljs.core.rest(s__21600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(letters,vec__21596,x,col,s__21580__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})(),counterspell$core$letter_grid_$_iter__21579(cljs.core.rest(s__21580__$2)));
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
var word = counterspell.core.tiles_to_string((function (){var fexpr__21609 = cljs.core.deref(counterspell.core.state);
return (fexpr__21609.cljs$core$IFn$_invoke$arity$1 ? fexpr__21609.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__21609.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})(),(function (){var fexpr__21610 = cljs.core.deref(counterspell.core.state);
return (fexpr__21610.cljs$core$IFn$_invoke$arity$1 ? fexpr__21610.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__21610.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.building-word","div.building-word",1932541074),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),word], null)], null);
});
counterspell.core.submitted_words = (function counterspell$core$submitted_words(){
var word = (function (){var fexpr__21611 = cljs.core.deref(counterspell.core.state);
return (fexpr__21611.cljs$core$IFn$_invoke$arity$1 ? fexpr__21611.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last-submitted-word","last-submitted-word",-1280616518)) : fexpr__21611.call(null, new cljs.core.Keyword(null,"last-submitted-word","last-submitted-word",-1280616518)));
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.empty_QMARK_((function (){var fexpr__21612 = cljs.core.deref(counterspell.core.state);
return (fexpr__21612.cljs$core$IFn$_invoke$arity$1 ? fexpr__21612.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__21612.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
if(and__5000__auto__){
return word;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.submitted-word","div.submitted-word",1310571274),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)," is a word!"].join('')], null)], null);
} else {
return null;
}
});
counterspell.core.main = (function counterspell$core$main(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counterspell!!!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_grid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.building_word], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.submitted_words], null)], null);
});
if((typeof counterspell !== 'undefined') && (typeof counterspell.core !== 'undefined') && (typeof counterspell.core.root !== 'undefined')){
} else {
counterspell.core.root = reagent.dom.client.create_root(document.querySelector("#root"));
}
counterspell.core.init = (function counterspell$core$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(counterspell.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.main], null));
});

//# sourceMappingURL=counterspell.core.js.map
