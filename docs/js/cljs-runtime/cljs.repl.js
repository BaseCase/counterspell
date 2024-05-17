goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24067){
var map__24071 = p__24067;
var map__24071__$1 = cljs.core.__destructure_map(map__24071);
var m = map__24071__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24071__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24076_24478 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24077_24479 = null;
var count__24078_24480 = (0);
var i__24079_24481 = (0);
while(true){
if((i__24079_24481 < count__24078_24480)){
var f_24483 = chunk__24077_24479.cljs$core$IIndexed$_nth$arity$2(null, i__24079_24481);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24483], 0));


var G__24485 = seq__24076_24478;
var G__24486 = chunk__24077_24479;
var G__24487 = count__24078_24480;
var G__24488 = (i__24079_24481 + (1));
seq__24076_24478 = G__24485;
chunk__24077_24479 = G__24486;
count__24078_24480 = G__24487;
i__24079_24481 = G__24488;
continue;
} else {
var temp__5804__auto___24490 = cljs.core.seq(seq__24076_24478);
if(temp__5804__auto___24490){
var seq__24076_24491__$1 = temp__5804__auto___24490;
if(cljs.core.chunked_seq_QMARK_(seq__24076_24491__$1)){
var c__5525__auto___24492 = cljs.core.chunk_first(seq__24076_24491__$1);
var G__24493 = cljs.core.chunk_rest(seq__24076_24491__$1);
var G__24494 = c__5525__auto___24492;
var G__24495 = cljs.core.count(c__5525__auto___24492);
var G__24496 = (0);
seq__24076_24478 = G__24493;
chunk__24077_24479 = G__24494;
count__24078_24480 = G__24495;
i__24079_24481 = G__24496;
continue;
} else {
var f_24498 = cljs.core.first(seq__24076_24491__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24498], 0));


var G__24500 = cljs.core.next(seq__24076_24491__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24504 = (0);
seq__24076_24478 = G__24500;
chunk__24077_24479 = G__24501;
count__24078_24480 = G__24502;
i__24079_24481 = G__24504;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24507 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24507], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24507)))?cljs.core.second(arglists_24507):arglists_24507)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24100_24513 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24101_24514 = null;
var count__24102_24515 = (0);
var i__24103_24516 = (0);
while(true){
if((i__24103_24516 < count__24102_24515)){
var vec__24126_24518 = chunk__24101_24514.cljs$core$IIndexed$_nth$arity$2(null, i__24103_24516);
var name_24519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24126_24518,(0),null);
var map__24129_24520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24126_24518,(1),null);
var map__24129_24521__$1 = cljs.core.__destructure_map(map__24129_24520);
var doc_24522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24129_24521__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24129_24521__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24519], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24523], 0));

if(cljs.core.truth_(doc_24522)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24522], 0));
} else {
}


var G__24534 = seq__24100_24513;
var G__24535 = chunk__24101_24514;
var G__24536 = count__24102_24515;
var G__24538 = (i__24103_24516 + (1));
seq__24100_24513 = G__24534;
chunk__24101_24514 = G__24535;
count__24102_24515 = G__24536;
i__24103_24516 = G__24538;
continue;
} else {
var temp__5804__auto___24544 = cljs.core.seq(seq__24100_24513);
if(temp__5804__auto___24544){
var seq__24100_24546__$1 = temp__5804__auto___24544;
if(cljs.core.chunked_seq_QMARK_(seq__24100_24546__$1)){
var c__5525__auto___24547 = cljs.core.chunk_first(seq__24100_24546__$1);
var G__24552 = cljs.core.chunk_rest(seq__24100_24546__$1);
var G__24553 = c__5525__auto___24547;
var G__24554 = cljs.core.count(c__5525__auto___24547);
var G__24555 = (0);
seq__24100_24513 = G__24552;
chunk__24101_24514 = G__24553;
count__24102_24515 = G__24554;
i__24103_24516 = G__24555;
continue;
} else {
var vec__24134_24558 = cljs.core.first(seq__24100_24546__$1);
var name_24559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134_24558,(0),null);
var map__24137_24560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134_24558,(1),null);
var map__24137_24561__$1 = cljs.core.__destructure_map(map__24137_24560);
var doc_24562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24137_24561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24137_24561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24559], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24563], 0));

if(cljs.core.truth_(doc_24562)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24562], 0));
} else {
}


var G__24576 = cljs.core.next(seq__24100_24546__$1);
var G__24577 = null;
var G__24578 = (0);
var G__24579 = (0);
seq__24100_24513 = G__24576;
chunk__24101_24514 = G__24577;
count__24102_24515 = G__24578;
i__24103_24516 = G__24579;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24143 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24144 = null;
var count__24145 = (0);
var i__24146 = (0);
while(true){
if((i__24146 < count__24145)){
var role = chunk__24144.cljs$core$IIndexed$_nth$arity$2(null, i__24146);
var temp__5804__auto___24588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24588__$1)){
var spec_24589 = temp__5804__auto___24588__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24589)], 0));
} else {
}


var G__24592 = seq__24143;
var G__24593 = chunk__24144;
var G__24594 = count__24145;
var G__24595 = (i__24146 + (1));
seq__24143 = G__24592;
chunk__24144 = G__24593;
count__24145 = G__24594;
i__24146 = G__24595;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24143);
if(temp__5804__auto____$1){
var seq__24143__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24143__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24143__$1);
var G__24608 = cljs.core.chunk_rest(seq__24143__$1);
var G__24609 = c__5525__auto__;
var G__24610 = cljs.core.count(c__5525__auto__);
var G__24611 = (0);
seq__24143 = G__24608;
chunk__24144 = G__24609;
count__24145 = G__24610;
i__24146 = G__24611;
continue;
} else {
var role = cljs.core.first(seq__24143__$1);
var temp__5804__auto___24617__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24617__$2)){
var spec_24619 = temp__5804__auto___24617__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24619)], 0));
} else {
}


var G__24625 = cljs.core.next(seq__24143__$1);
var G__24626 = null;
var G__24627 = (0);
var G__24628 = (0);
seq__24143 = G__24625;
chunk__24144 = G__24626;
count__24145 = G__24627;
i__24146 = G__24628;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24194 = datafied_throwable;
var map__24194__$1 = cljs.core.__destructure_map(map__24194);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24194__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24194__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24194__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24195 = cljs.core.last(via);
var map__24195__$1 = cljs.core.__destructure_map(map__24195);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24195__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24195__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24195__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24196 = data;
var map__24196__$1 = cljs.core.__destructure_map(map__24196);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24197 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24197__$1 = cljs.core.__destructure_map(map__24197);
var top_data = map__24197__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24197__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24209 = phase;
var G__24209__$1 = (((G__24209 instanceof cljs.core.Keyword))?G__24209.fqn:null);
switch (G__24209__$1) {
case "read-source":
var map__24211 = data;
var map__24211__$1 = cljs.core.__destructure_map(map__24211);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24211__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24211__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24212 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24212__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24212,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24212);
var G__24212__$2 = (cljs.core.truth_((function (){var fexpr__24215 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24215.cljs$core$IFn$_invoke$arity$1 ? fexpr__24215.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24215.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24212__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24212__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24212__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24212__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24217 = top_data;
var G__24217__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24217,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24217);
var G__24217__$2 = (cljs.core.truth_((function (){var fexpr__24231 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24231.cljs$core$IFn$_invoke$arity$1 ? fexpr__24231.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24231.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24217__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24217__$1);
var G__24217__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24217__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24217__$2);
var G__24217__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24217__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24217__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24217__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24217__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24234 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24234,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24234,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24234,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24234,(3),null);
var G__24238 = top_data;
var G__24238__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24238,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24238);
var G__24238__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24238__$1);
var G__24238__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24238__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24238__$2);
var G__24238__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24238__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24238__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24238__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24238__$4;
}

break;
case "execution":
var vec__24259 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24259,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24186_SHARP_){
var or__5002__auto__ = (p1__24186_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__24269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24269.cljs$core$IFn$_invoke$arity$1 ? fexpr__24269.cljs$core$IFn$_invoke$arity$1(p1__24186_SHARP_) : fexpr__24269.call(null, p1__24186_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__24273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24273__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24273,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24273);
var G__24273__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24273__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24273__$1);
var G__24273__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24273__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24273__$2);
var G__24273__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24273__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24273__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24273__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24273__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24209__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24329){
var map__24330 = p__24329;
var map__24330__$1 = cljs.core.__destructure_map(map__24330);
var triage_data = map__24330__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24330__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24362 = phase;
var G__24362__$1 = (((G__24362 instanceof cljs.core.Keyword))?G__24362.fqn:null);
switch (G__24362__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24368 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24369 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24370 = loc;
var G__24371 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24386_24707 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24387_24708 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24388_24709 = true;
var _STAR_print_fn_STAR__temp_val__24389_24710 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24388_24709);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24389_24710);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24307_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24307_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24387_24708);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24386_24707);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24368,G__24369,G__24370,G__24371) : format.call(null, G__24368,G__24369,G__24370,G__24371));

break;
case "macroexpansion":
var G__24404 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24405 = cause_type;
var G__24406 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24407 = loc;
var G__24408 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24404,G__24405,G__24406,G__24407,G__24408) : format.call(null, G__24404,G__24405,G__24406,G__24407,G__24408));

break;
case "compile-syntax-check":
var G__24409 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24411 = cause_type;
var G__24414 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24415 = loc;
var G__24416 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24409,G__24411,G__24414,G__24415,G__24416) : format.call(null, G__24409,G__24411,G__24414,G__24415,G__24416));

break;
case "compilation":
var G__24418 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24419 = cause_type;
var G__24420 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24421 = loc;
var G__24422 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24418,G__24419,G__24420,G__24421,G__24422) : format.call(null, G__24418,G__24419,G__24420,G__24421,G__24422));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24423 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24424 = symbol;
var G__24425 = loc;
var G__24426 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24429_24732 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24430_24733 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24431_24734 = true;
var _STAR_print_fn_STAR__temp_val__24432_24735 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24431_24734);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24432_24735);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24325_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24325_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24430_24733);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24429_24732);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24423,G__24424,G__24425,G__24426) : format.call(null, G__24423,G__24424,G__24425,G__24426));
} else {
var G__24443 = "Execution error%s at %s(%s).\n%s\n";
var G__24444 = cause_type;
var G__24445 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24446 = loc;
var G__24447 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24443,G__24444,G__24445,G__24446,G__24447) : format.call(null, G__24443,G__24444,G__24445,G__24446,G__24447));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24362__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
