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
counterspell.core.possible_game_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020),null,new cljs.core.Keyword(null,"playing","playing",70013335),null], null), null);
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.generate_game_grid(),new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),null,new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing","playing",70013335)], null));
counterspell.core.tile_active_QMARK_ = (function counterspell$core$tile_active_QMARK_(x,y){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),(function (){var fexpr__22468 = cljs.core.deref(counterspell.core.state);
return (fexpr__22468.cljs$core$IFn$_invoke$arity$1 ? fexpr__22468.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22468.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
});
counterspell.core.tiles_to_string = (function counterspell$core$tiles_to_string(tiles,grid){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22469){
var vec__22470 = p__22469;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22470,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22470,(1),null);
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,x),y);
}),tiles));
});
counterspell.core.real_word_QMARK_ = (function counterspell$core$real_word_QMARK_(s){
return (counterspell.core.words.words.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.words.words.cljs$core$IFn$_invoke$arity$1(s) : counterspell.core.words.words.call(null, s));
});
counterspell.core.submit_word_BANG_ = (function counterspell$core$submit_word_BANG_(tiles){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
var word = counterspell.core.tiles_to_string(tiles,(s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : s.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)))).toLowerCase();
if(cljs.core.truth_(counterspell.core.real_word_QMARK_(word))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450)) : s.call(null, new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450))),word),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020)], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),word], null)], 0));
}
}));
});
counterspell.core.legal_tiles = (function counterspell$core$legal_tiles(){
var temp__5802__auto__ = cljs.core.last((function (){var fexpr__22473 = cljs.core.deref(counterspell.core.state);
return (fexpr__22473.cljs$core$IFn$_invoke$arity$1 ? fexpr__22473.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22473.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})());
if(cljs.core.truth_(temp__5802__auto__)){
var tail = temp__5802__auto__;
var vec__22474 = tail;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22474,(1),null);
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$legal_tiles_$_iter__22477(s__22478){
return (new cljs.core.LazySeq(null,(function (){
var s__22478__$1 = s__22478;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22478__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__22478__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22474,x,y,tail,temp__5802__auto__){
return (function counterspell$core$legal_tiles_$_iter__22477_$_iter__22479(s__22480){
return (new cljs.core.LazySeq(null,((function (s__22478__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22474,x,y,tail,temp__5802__auto__){
return (function (){
var s__22480__$1 = s__22480;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22480__$1);
if(temp__5804__auto____$1){
var s__22480__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22480__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22480__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22482 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22481 = (0);
while(true){
if((i__22481 < size__5479__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__5478__auto__,i__22481);
cljs.core.chunk_append(b__22482,((((cljs.core.not(counterspell.core.tile_active_QMARK_(x_SINGLEQUOTE_,y_SINGLEQUOTE_))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null));

var G__22535 = (i__22481 + (1));
i__22481 = G__22535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22482),counterspell$core$legal_tiles_$_iter__22477_$_iter__22479(cljs.core.chunk_rest(s__22480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22482),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__22480__$2);
return cljs.core.cons(((((cljs.core.not(counterspell.core.tile_active_QMARK_(x_SINGLEQUOTE_,y_SINGLEQUOTE_))) && (((((0) <= x_SINGLEQUOTE_)) && (((((0) <= y_SINGLEQUOTE_)) && ((((x_SINGLEQUOTE_ < counterspell.core.grid_cols)) && ((y_SINGLEQUOTE_ < counterspell.core.grid_rows))))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_], null):null),counterspell$core$legal_tiles_$_iter__22477_$_iter__22479(cljs.core.rest(s__22480__$2)));
}
} else {
return null;
}
break;
}
});})(s__22478__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22474,x,y,tail,temp__5802__auto__))
,null,null));
});})(s__22478__$1,x_SINGLEQUOTE_,xs__6360__auto__,temp__5804__auto__,vec__22474,x,y,tail,temp__5802__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((y - (1)),((2) + y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$legal_tiles_$_iter__22477(cljs.core.rest(s__22478__$1)));
} else {
var G__22536 = cljs.core.rest(s__22478__$1);
s__22478__$1 = G__22536;
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
return cljs.core.set((function (){var iter__5480__auto__ = (function counterspell$core$legal_tiles_$_iter__22483(s__22484){
return (new cljs.core.LazySeq(null,(function (){
var s__22484__$1 = s__22484;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22484__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__22484__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__){
return (function counterspell$core$legal_tiles_$_iter__22483_$_iter__22485(s__22486){
return (new cljs.core.LazySeq(null,((function (s__22484__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__){
return (function (){
var s__22486__$1 = s__22486;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22486__$1);
if(temp__5804__auto____$1){
var s__22486__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22486__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22486__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22488 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22487 = (0);
while(true){
if((i__22487 < size__5479__auto__)){
var y = cljs.core._nth(c__5478__auto__,i__22487);
cljs.core.chunk_append(b__22488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__22537 = (i__22487 + (1));
i__22487 = G__22537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22488),counterspell$core$legal_tiles_$_iter__22483_$_iter__22485(cljs.core.chunk_rest(s__22486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22488),null);
}
} else {
var y = cljs.core.first(s__22486__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),counterspell$core$legal_tiles_$_iter__22483_$_iter__22485(cljs.core.rest(s__22486__$2)));
}
} else {
return null;
}
break;
}
});})(s__22484__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__))
,null,null));
});})(s__22484__$1,x,xs__6360__auto__,temp__5804__auto__,temp__5802__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(counterspell.core.grid_rows)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,counterspell$core$legal_tiles_$_iter__22483(cljs.core.rest(s__22484__$1)));
} else {
var G__22538 = cljs.core.rest(s__22484__$1);
s__22484__$1 = G__22538;
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

var active_tiles = (function (){var fexpr__22490 = cljs.core.deref(counterspell.core.state);
return (fexpr__22490.cljs$core$IFn$_invoke$arity$1 ? fexpr__22490.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22490.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})();
if(cljs.core.truth_(counterspell.core.tile_active_QMARK_(x,y))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.last(active_tiles))){
return counterspell.core.submit_word_BANG_(active_tiles);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counterspell.core.state,(function (s){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__22489_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22489_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));
}),active_tiles)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643),null], null)], 0));
}));
}
} else {
if(cljs.core.truth_((function (){var G__22492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__22491 = counterspell.core.legal_tiles();
return (fexpr__22491.cljs$core$IFn$_invoke$arity$1 ? fexpr__22491.cljs$core$IFn$_invoke$arity$1(G__22492) : fexpr__22491.call(null, G__22492));
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
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__22493){
var map__22494 = p__22493;
var map__22494__$1 = cljs.core.__destructure_map(map__22494);
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22494__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var activated_QMARK_ = counterspell.core.tile_active_QMARK_(x,y);
var deleting_QMARK_ = (function (){var and__5000__auto__ = activated_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020),(function (){var fexpr__22495 = cljs.core.deref(counterspell.core.state);
return (fexpr__22495.cljs$core$IFn$_invoke$arity$1 ? fexpr__22495.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__22495.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})());
} else {
return and__5000__auto__;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(activated_QMARK_)?"active":null),(cljs.core.truth_(deleting_QMARK_)?"deleting":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tiles-deleting","tiles-deleting",492615020),(function (){var fexpr__22496 = cljs.core.deref(counterspell.core.state);
return (fexpr__22496.cljs$core$IFn$_invoke$arity$1 ? fexpr__22496.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-state","game-state",935682735)) : fexpr__22496.call(null, new cljs.core.Keyword(null,"game-state","game-state",935682735)));
})())))){
return counterspell.core.tile_action_at_BANG_(x,y);
} else {
return null;
}
})], null),letter], null);
});
counterspell.core.letter_grid = (function counterspell$core$letter_grid(){
var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counterspell.core.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-grid","div.letter-grid",-1807228585),(function (){var iter__5480__auto__ = (function counterspell$core$letter_grid_$_iter__22497(s__22498){
return (new cljs.core.LazySeq(null,(function (){
var s__22498__$1 = s__22498;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22498__$1);
if(temp__5804__auto__){
var s__22498__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22498__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22498__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22500 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22499 = (0);
while(true){
if((i__22499 < size__5479__auto__)){
var vec__22501 = cljs.core._nth(c__5478__auto__,i__22499);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22501,(1),null);
cljs.core.chunk_append(b__22500,(function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (i__22499,letters,vec__22501,x,col,c__5478__auto__,size__5479__auto__,b__22500,s__22498__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__22497_$_iter__22504(s__22505){
return (new cljs.core.LazySeq(null,((function (i__22499,letters,vec__22501,x,col,c__5478__auto__,size__5479__auto__,b__22500,s__22498__$2,temp__5804__auto__,grid){
return (function (){
var s__22505__$1 = s__22505;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22505__$1);
if(temp__5804__auto____$1){
var s__22505__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22505__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__22505__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__22507 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__22506 = (0);
while(true){
if((i__22506 < size__5479__auto____$1)){
var vec__22508 = cljs.core._nth(c__5478__auto____$1,i__22506);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(1),null);
cljs.core.chunk_append(b__22507,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__22539 = (i__22506 + (1));
i__22506 = G__22539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22507),counterspell$core$letter_grid_$_iter__22497_$_iter__22504(cljs.core.chunk_rest(s__22505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22507),null);
}
} else {
var vec__22511 = cljs.core.first(s__22505__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22511,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__22497_$_iter__22504(cljs.core.rest(s__22505__$2)));
}
} else {
return null;
}
break;
}
});})(i__22499,letters,vec__22501,x,col,c__5478__auto__,size__5479__auto__,b__22500,s__22498__$2,temp__5804__auto__,grid))
,null,null));
});})(i__22499,letters,vec__22501,x,col,c__5478__auto__,size__5479__auto__,b__22500,s__22498__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})());

var G__22540 = (i__22499 + (1));
i__22499 = G__22540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22500),counterspell$core$letter_grid_$_iter__22497(cljs.core.chunk_rest(s__22498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22500),null);
}
} else {
var vec__22514 = cljs.core.first(s__22498__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22514,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22514,(1),null);
return cljs.core.cons((function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (letters,vec__22514,x,col,s__22498__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__22497_$_iter__22517(s__22518){
return (new cljs.core.LazySeq(null,(function (){
var s__22518__$1 = s__22518;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22518__$1);
if(temp__5804__auto____$1){
var s__22518__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22518__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22518__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22520 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22519 = (0);
while(true){
if((i__22519 < size__5479__auto__)){
var vec__22521 = cljs.core._nth(c__5478__auto__,i__22519);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521,(1),null);
cljs.core.chunk_append(b__22520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__22541 = (i__22519 + (1));
i__22519 = G__22541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22520),counterspell$core$letter_grid_$_iter__22497_$_iter__22517(cljs.core.chunk_rest(s__22518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22520),null);
}
} else {
var vec__22524 = cljs.core.first(s__22518__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22524,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__22497_$_iter__22517(cljs.core.rest(s__22518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(letters,vec__22514,x,col,s__22498__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})(),counterspell$core$letter_grid_$_iter__22497(cljs.core.rest(s__22498__$2)));
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
var word = counterspell.core.tiles_to_string((function (){var fexpr__22527 = cljs.core.deref(counterspell.core.state);
return (fexpr__22527.cljs$core$IFn$_invoke$arity$1 ? fexpr__22527.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__22527.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})(),(function (){var fexpr__22528 = cljs.core.deref(counterspell.core.state);
return (fexpr__22528.cljs$core$IFn$_invoke$arity$1 ? fexpr__22528.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grid","grid",402978600)) : fexpr__22528.call(null, new cljs.core.Keyword(null,"grid","grid",402978600)));
})());
var mistake = (function (){var fexpr__22529 = cljs.core.deref(counterspell.core.state);
return (fexpr__22529.cljs$core$IFn$_invoke$arity$1 ? fexpr__22529.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643)) : fexpr__22529.call(null, new cljs.core.Keyword(null,"not-a-real-word","not-a-real-word",-1242393643)));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.building-word","div.building-word",1932541074),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),word], null),(cljs.core.truth_(mistake)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mistake","p.mistake",1065850794),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mistake)," is not a word!"].join('')], null):null)], null);
});
counterspell.core.submitted_words = (function counterspell$core$submitted_words(){
var words = (function (){var fexpr__22530 = cljs.core.deref(counterspell.core.state);
return (fexpr__22530.cljs$core$IFn$_invoke$arity$1 ? fexpr__22530.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450)) : fexpr__22530.call(null, new cljs.core.Keyword(null,"submitted-words","submitted-words",188782450)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.submitted-word","div.submitted-word",1310571274),(function (){var iter__5480__auto__ = (function counterspell$core$submitted_words_$_iter__22531(s__22532){
return (new cljs.core.LazySeq(null,(function (){
var s__22532__$1 = s__22532;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22532__$1);
if(temp__5804__auto__){
var s__22532__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22532__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22532__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22534 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22533 = (0);
while(true){
if((i__22533 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__22533);
cljs.core.chunk_append(b__22534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),word], null));

var G__22542 = (i__22533 + (1));
i__22533 = G__22542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22534),counterspell$core$submitted_words_$_iter__22531(cljs.core.chunk_rest(s__22532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22534),null);
}
} else {
var word = cljs.core.first(s__22532__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),word], null),counterspell$core$submitted_words_$_iter__22531(cljs.core.rest(s__22532__$2)));
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
