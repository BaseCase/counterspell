goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19734){
var map__19735 = p__19734;
var map__19735__$1 = cljs.core.__destructure_map(map__19735);
var runtime = map__19735__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_19910 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_19910)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__19736 = runtime;
var G__19737 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_19910);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__19736,G__19737) : shadow.remote.runtime.shared.process.call(null, G__19736,G__19737));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19738,res){
var map__19739 = p__19738;
var map__19739__$1 = cljs.core.__destructure_map(map__19739);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19739__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19739__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19740 = res;
var G__19740__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19740,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19740);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19740__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19740__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19745 = arguments.length;
switch (G__19745) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19748,msg,handlers,timeout_after_ms){
var map__19749 = p__19748;
var map__19749__$1 = cljs.core.__destructure_map(map__19749);
var runtime = map__19749__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19749__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19946 = arguments.length;
var i__5727__auto___19947 = (0);
while(true){
if((i__5727__auto___19947 < len__5726__auto___19946)){
args__5732__auto__.push((arguments[i__5727__auto___19947]));

var G__19948 = (i__5727__auto___19947 + (1));
i__5727__auto___19947 = G__19948;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19764,ev,args){
var map__19765 = p__19764;
var map__19765__$1 = cljs.core.__destructure_map(map__19765);
var runtime = map__19765__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19765__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19766 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19769 = null;
var count__19770 = (0);
var i__19771 = (0);
while(true){
if((i__19771 < count__19770)){
var ext = chunk__19769.cljs$core$IIndexed$_nth$arity$2(null, i__19771);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19954 = seq__19766;
var G__19955 = chunk__19769;
var G__19956 = count__19770;
var G__19957 = (i__19771 + (1));
seq__19766 = G__19954;
chunk__19769 = G__19955;
count__19770 = G__19956;
i__19771 = G__19957;
continue;
} else {
var G__19958 = seq__19766;
var G__19959 = chunk__19769;
var G__19960 = count__19770;
var G__19961 = (i__19771 + (1));
seq__19766 = G__19958;
chunk__19769 = G__19959;
count__19770 = G__19960;
i__19771 = G__19961;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19766);
if(temp__5804__auto__){
var seq__19766__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19766__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19766__$1);
var G__19963 = cljs.core.chunk_rest(seq__19766__$1);
var G__19964 = c__5525__auto__;
var G__19965 = cljs.core.count(c__5525__auto__);
var G__19966 = (0);
seq__19766 = G__19963;
chunk__19769 = G__19964;
count__19770 = G__19965;
i__19771 = G__19966;
continue;
} else {
var ext = cljs.core.first(seq__19766__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19970 = cljs.core.next(seq__19766__$1);
var G__19971 = null;
var G__19972 = (0);
var G__19973 = (0);
seq__19766 = G__19970;
chunk__19769 = G__19971;
count__19770 = G__19972;
i__19771 = G__19973;
continue;
} else {
var G__19978 = cljs.core.next(seq__19766__$1);
var G__19979 = null;
var G__19980 = (0);
var G__19981 = (0);
seq__19766 = G__19978;
chunk__19769 = G__19979;
count__19770 = G__19980;
i__19771 = G__19981;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19758){
var G__19759 = cljs.core.first(seq19758);
var seq19758__$1 = cljs.core.next(seq19758);
var G__19760 = cljs.core.first(seq19758__$1);
var seq19758__$2 = cljs.core.next(seq19758__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19759,G__19760,seq19758__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19777,p__19778){
var map__19779 = p__19777;
var map__19779__$1 = cljs.core.__destructure_map(map__19779);
var runtime = map__19779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19780 = p__19778;
var map__19780__$1 = cljs.core.__destructure_map(map__19780);
var msg = map__19780__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19780__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19781 = cljs.core.deref(state_ref);
var map__19781__$1 = cljs.core.__destructure_map(map__19781);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19789,msg){
var map__19790 = p__19789;
var map__19790__$1 = cljs.core.__destructure_map(map__19790);
var runtime = map__19790__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19790__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19811,key,p__19812){
var map__19813 = p__19811;
var map__19813__$1 = cljs.core.__destructure_map(map__19813);
var state = map__19813__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19814 = p__19812;
var map__19814__$1 = cljs.core.__destructure_map(map__19814);
var spec = map__19814__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19814__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19814__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19816,key,spec){
var map__19817 = p__19816;
var map__19817__$1 = cljs.core.__destructure_map(map__19817);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19817__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19818_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19818_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19819_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19819_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19820_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19820_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19821_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19821_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19822_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19822_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19830,key){
var map__19831 = p__19830;
var map__19831__$1 = cljs.core.__destructure_map(map__19831);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19834,msg){
var map__19835 = p__19834;
var map__19835__$1 = cljs.core.__destructure_map(map__19835);
var runtime = map__19835__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19840,p__19841){
var map__19843 = p__19840;
var map__19843__$1 = cljs.core.__destructure_map(map__19843);
var runtime = map__19843__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19843__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19844 = p__19841;
var map__19844__$1 = cljs.core.__destructure_map(map__19844);
var msg = map__19844__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19844__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19844__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19854 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19856 = null;
var count__19857 = (0);
var i__19858 = (0);
while(true){
if((i__19858 < count__19857)){
var map__19876 = chunk__19856.cljs$core$IIndexed$_nth$arity$2(null, i__19858);
var map__19876__$1 = cljs.core.__destructure_map(map__19876);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19876__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__20087 = seq__19854;
var G__20088 = chunk__19856;
var G__20089 = count__19857;
var G__20090 = (i__19858 + (1));
seq__19854 = G__20087;
chunk__19856 = G__20088;
count__19857 = G__20089;
i__19858 = G__20090;
continue;
} else {
var G__20091 = seq__19854;
var G__20092 = chunk__19856;
var G__20093 = count__19857;
var G__20094 = (i__19858 + (1));
seq__19854 = G__20091;
chunk__19856 = G__20092;
count__19857 = G__20093;
i__19858 = G__20094;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19854);
if(temp__5804__auto__){
var seq__19854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19854__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19854__$1);
var G__20096 = cljs.core.chunk_rest(seq__19854__$1);
var G__20097 = c__5525__auto__;
var G__20098 = cljs.core.count(c__5525__auto__);
var G__20099 = (0);
seq__19854 = G__20096;
chunk__19856 = G__20097;
count__19857 = G__20098;
i__19858 = G__20099;
continue;
} else {
var map__19879 = cljs.core.first(seq__19854__$1);
var map__19879__$1 = cljs.core.__destructure_map(map__19879);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__20103 = cljs.core.next(seq__19854__$1);
var G__20104 = null;
var G__20105 = (0);
var G__20106 = (0);
seq__19854 = G__20103;
chunk__19856 = G__20104;
count__19857 = G__20105;
i__19858 = G__20106;
continue;
} else {
var G__20107 = cljs.core.next(seq__19854__$1);
var G__20108 = null;
var G__20109 = (0);
var G__20110 = (0);
seq__19854 = G__20107;
chunk__19856 = G__20108;
count__19857 = G__20109;
i__19858 = G__20110;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
