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
counterspell.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",402978600),counterspell.core.generate_game_grid(),new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794),cljs.core.PersistentHashSet.EMPTY], null));
counterspell.core.activate_tile = (function counterspell$core$activate_tile(x,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(counterspell.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], 0));
});
counterspell.core.delete_tile = (function counterspell$core$delete_tile(x,y){
return x;
});
counterspell.core.letter_tile = (function counterspell$core$letter_tile(p__21009){
var map__21010 = p__21009;
var map__21010__$1 = cljs.core.__destructure_map(map__21010);
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var activated_QMARK_ = (function (){var G__21013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__21012 = (function (){var fexpr__21014 = cljs.core.deref(counterspell.core.state);
return (fexpr__21014.cljs$core$IFn$_invoke$arity$1 ? fexpr__21014.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)) : fexpr__21014.call(null, new cljs.core.Keyword(null,"active-tiles","active-tiles",1125942794)));
})();
return (fexpr__21012.cljs$core$IFn$_invoke$arity$1 ? fexpr__21012.cljs$core$IFn$_invoke$arity$1(G__21013) : fexpr__21012.call(null, G__21013));
})();
var on_click_letter = (function (evt){
if(cljs.core.truth_(activated_QMARK_)){
return counterspell.core.delete_tile(x,y);
} else {
return counterspell.core.activate_tile(x,y);
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(activated_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_letter], null),letter], null);
});
counterspell.core.letter_grid = (function counterspell$core$letter_grid(){
var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counterspell.core.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-grid","div.letter-grid",-1807228585),(function (){var iter__5480__auto__ = (function counterspell$core$letter_grid_$_iter__21015(s__21016){
return (new cljs.core.LazySeq(null,(function (){
var s__21016__$1 = s__21016;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21016__$1);
if(temp__5804__auto__){
var s__21016__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21016__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21016__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21018 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21017 = (0);
while(true){
if((i__21017 < size__5479__auto__)){
var vec__21019 = cljs.core._nth(c__5478__auto__,i__21017);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,(1),null);
cljs.core.chunk_append(b__21018,(function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (i__21017,letters,vec__21019,x,col,c__5478__auto__,size__5479__auto__,b__21018,s__21016__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__21015_$_iter__21022(s__21023){
return (new cljs.core.LazySeq(null,((function (i__21017,letters,vec__21019,x,col,c__5478__auto__,size__5479__auto__,b__21018,s__21016__$2,temp__5804__auto__,grid){
return (function (){
var s__21023__$1 = s__21023;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21023__$1);
if(temp__5804__auto____$1){
var s__21023__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21023__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__21023__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__21025 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__21024 = (0);
while(true){
if((i__21024 < size__5479__auto____$1)){
var vec__21026 = cljs.core._nth(c__5478__auto____$1,i__21024);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21026,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21026,(1),null);
cljs.core.chunk_append(b__21025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__21045 = (i__21024 + (1));
i__21024 = G__21045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21025),counterspell$core$letter_grid_$_iter__21015_$_iter__21022(cljs.core.chunk_rest(s__21023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21025),null);
}
} else {
var vec__21029 = cljs.core.first(s__21023__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21029,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21029,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__21015_$_iter__21022(cljs.core.rest(s__21023__$2)));
}
} else {
return null;
}
break;
}
});})(i__21017,letters,vec__21019,x,col,c__5478__auto__,size__5479__auto__,b__21018,s__21016__$2,temp__5804__auto__,grid))
,null,null));
});})(i__21017,letters,vec__21019,x,col,c__5478__auto__,size__5479__auto__,b__21018,s__21016__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})());

var G__21046 = (i__21017 + (1));
i__21017 = G__21046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21018),counterspell$core$letter_grid_$_iter__21015(cljs.core.chunk_rest(s__21016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21018),null);
}
} else {
var vec__21032 = cljs.core.first(s__21016__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(1),null);
return cljs.core.cons((function (){var letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2(counterspell.core.grid_rows,col);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),(function (){var iter__5480__auto__ = ((function (letters,vec__21032,x,col,s__21016__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__21015_$_iter__21035(s__21036){
return (new cljs.core.LazySeq(null,(function (){
var s__21036__$1 = s__21036;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21036__$1);
if(temp__5804__auto____$1){
var s__21036__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21036__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21036__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21038 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21037 = (0);
while(true){
if((i__21037 < size__5479__auto__)){
var vec__21039 = cljs.core._nth(c__5478__auto__,i__21037);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21039,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21039,(1),null);
cljs.core.chunk_append(b__21038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null));

var G__21047 = (i__21037 + (1));
i__21037 = G__21047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21038),counterspell$core$letter_grid_$_iter__21015_$_iter__21035(cljs.core.chunk_rest(s__21036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21038),null);
}
} else {
var vec__21042 = cljs.core.first(s__21036__$2);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21042,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21042,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_tile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",-125811450),l,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')], null)], null),counterspell$core$letter_grid_$_iter__21015_$_iter__21035(cljs.core.rest(s__21036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(letters,vec__21032,x,col,s__21016__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(counterspell.core.index(letters));
})()], null);
})(),counterspell$core$letter_grid_$_iter__21015(cljs.core.rest(s__21016__$2)));
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
counterspell.core.main = (function counterspell$core$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counterspell!!!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.letter_grid], null)], null);
});
if((typeof counterspell !== 'undefined') && (typeof counterspell.core !== 'undefined') && (typeof counterspell.core.root !== 'undefined')){
} else {
counterspell.core.root = reagent.dom.client.create_root(document.querySelector("#root"));
}
counterspell.core.init = (function counterspell$core$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(counterspell.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counterspell.core.main], null));
});

//# sourceMappingURL=counterspell.core.js.map
