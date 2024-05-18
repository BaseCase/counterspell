goog.provide('counterspell.core');
counterspell.core.game_turns = (3);
counterspell.core.grid_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"cols","cols",-1914801295),(4)], null);
counterspell.core.create_letter_generator = (function counterspell$core$create_letter_generator(seed){
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(alphabet);
}));
});
counterspell.core.letters = counterspell.core.create_letter_generator(null);
counterspell.core.generate_game_grid = (function counterspell$core$generate_game_grid(){
var height = ((counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rows","rows",850049680)) : counterspell.core.grid_size.call(null, new cljs.core.Keyword(null,"rows","rows",850049680))) * (counterspell.core.game_turns + (1)));
var width = (counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cols","cols",-1914801295)) : counterspell.core.grid_size.call(null, new cljs.core.Keyword(null,"cols","cols",-1914801295)));
var flat_letters = cljs.core.take.cljs$core$IFn$_invoke$arity$2((height * width),counterspell.core.letters);
var build_starting_maps = (function (letters){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18416_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"visible","visible",-1024216805)],[p1__18416_SHARP_,false]);
}),letters);
});
var set_initial_visible = (function (xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18417_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18417_SHARP_,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rows","rows",850049680)) : counterspell.core.grid_size.call(null, new cljs.core.Keyword(null,"rows","rows",850049680))),xs)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1 ? counterspell.core.grid_size.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rows","rows",850049680)) : counterspell.core.grid_size.call(null, new cljs.core.Keyword(null,"rows","rows",850049680))),xs));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(set_initial_visible,cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_starting_maps,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(height,flat_letters)));
});
counterspell.core.letter_grid = (function counterspell$core$letter_grid(){
var grid = counterspell.core.generate_game_grid();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-grid","div.letter-grid",-1807228585),(function (){var iter__5480__auto__ = (function counterspell$core$letter_grid_$_iter__18418(s__18419){
return (new cljs.core.LazySeq(null,(function (){
var s__18419__$1 = s__18419;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18419__$1);
if(temp__5804__auto__){
var s__18419__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18419__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18419__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18421 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18420 = (0);
while(true){
if((i__18420 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__18420);
cljs.core.chunk_append(b__18421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),(function (){var iter__5480__auto__ = ((function (i__18420,col,c__5478__auto__,size__5479__auto__,b__18421,s__18419__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__18418_$_iter__18422(s__18423){
return (new cljs.core.LazySeq(null,((function (i__18420,col,c__5478__auto__,size__5479__auto__,b__18421,s__18419__$2,temp__5804__auto__,grid){
return (function (){
var s__18423__$1 = s__18423;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18423__$1);
if(temp__5804__auto____$1){
var s__18423__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18423__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__18423__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__18425 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__18424 = (0);
while(true){
if((i__18424 < size__5479__auto____$1)){
var letter = cljs.core._nth(c__5478__auto____$1,i__18424);
cljs.core.chunk_append(b__18425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(letter)], null));

var G__18434 = (i__18424 + (1));
i__18424 = G__18434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18425),counterspell$core$letter_grid_$_iter__18418_$_iter__18422(cljs.core.chunk_rest(s__18423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18425),null);
}
} else {
var letter = cljs.core.first(s__18423__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(letter)], null),counterspell$core$letter_grid_$_iter__18418_$_iter__18422(cljs.core.rest(s__18423__$2)));
}
} else {
return null;
}
break;
}
});})(i__18420,col,c__5478__auto__,size__5479__auto__,b__18421,s__18419__$2,temp__5804__auto__,grid))
,null,null));
});})(i__18420,col,c__5478__auto__,size__5479__auto__,b__18421,s__18419__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visible","visible",-1024216805),col)));
})()], null));

var G__18435 = (i__18420 + (1));
i__18420 = G__18435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18421),counterspell$core$letter_grid_$_iter__18418(cljs.core.chunk_rest(s__18419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18421),null);
}
} else {
var col = cljs.core.first(s__18419__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),(function (){var iter__5480__auto__ = ((function (col,s__18419__$2,temp__5804__auto__,grid){
return (function counterspell$core$letter_grid_$_iter__18418_$_iter__18426(s__18427){
return (new cljs.core.LazySeq(null,(function (){
var s__18427__$1 = s__18427;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18427__$1);
if(temp__5804__auto____$1){
var s__18427__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18427__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18427__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18429 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18428 = (0);
while(true){
if((i__18428 < size__5479__auto__)){
var letter = cljs.core._nth(c__5478__auto__,i__18428);
cljs.core.chunk_append(b__18429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(letter)], null));

var G__18436 = (i__18428 + (1));
i__18428 = G__18436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18429),counterspell$core$letter_grid_$_iter__18418_$_iter__18426(cljs.core.chunk_rest(s__18427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18429),null);
}
} else {
var letter = cljs.core.first(s__18427__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter","div.letter",-2011731941),new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(letter)], null),counterspell$core$letter_grid_$_iter__18418_$_iter__18426(cljs.core.rest(s__18427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(col,s__18419__$2,temp__5804__auto__,grid))
;
return iter__5480__auto__(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visible","visible",-1024216805),col)));
})()], null),counterspell$core$letter_grid_$_iter__18418(cljs.core.rest(s__18419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(grid);
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
