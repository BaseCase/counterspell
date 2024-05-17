goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__25807,p__25808){
var map__25810 = p__25807;
var map__25810__$1 = cljs.core.__destructure_map(map__25810);
var svc = map__25810__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25810__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25810__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25810__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25815 = p__25808;
var map__25815__$1 = cljs.core.__destructure_map(map__25815);
var msg = map__25815__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25815__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25815__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25815__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25815__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__25850,p__25851){
var map__25852 = p__25850;
var map__25852__$1 = cljs.core.__destructure_map(map__25852);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__25853 = p__25851;
var map__25853__$1 = cljs.core.__destructure_map(map__25853);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25853__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__25859,p__25860){
var map__25863 = p__25859;
var map__25863__$1 = cljs.core.__destructure_map(map__25863);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25863__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25863__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25865 = p__25860;
var map__25865__$1 = cljs.core.__destructure_map(map__25865);
var msg = map__25865__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25865__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__25870,tid){
var map__25894 = p__25870;
var map__25894__$1 = cljs.core.__destructure_map(map__25894);
var svc = map__25894__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25894__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__25903 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__25904 = null;
var count__25905 = (0);
var i__25906 = (0);
while(true){
if((i__25906 < count__25905)){
var vec__25916 = chunk__25904.cljs$core$IIndexed$_nth$arity$2(null, i__25906);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25916,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25942 = seq__25903;
var G__25943 = chunk__25904;
var G__25944 = count__25905;
var G__25945 = (i__25906 + (1));
seq__25903 = G__25942;
chunk__25904 = G__25943;
count__25905 = G__25944;
i__25906 = G__25945;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25903);
if(temp__5804__auto__){
var seq__25903__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25903__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__25903__$1);
var G__25949 = cljs.core.chunk_rest(seq__25903__$1);
var G__25950 = c__5525__auto__;
var G__25951 = cljs.core.count(c__5525__auto__);
var G__25952 = (0);
seq__25903 = G__25949;
chunk__25904 = G__25950;
count__25905 = G__25951;
i__25906 = G__25952;
continue;
} else {
var vec__25920 = cljs.core.first(seq__25903__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25920,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25920,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25953 = cljs.core.next(seq__25903__$1);
var G__25954 = null;
var G__25955 = (0);
var G__25956 = (0);
seq__25903 = G__25953;
chunk__25904 = G__25954;
count__25905 = G__25955;
i__25906 = G__25956;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__25899_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__25899_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__25900_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__25900_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__25901_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__25901_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__25902_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__25902_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__25931){
var map__25932 = p__25931;
var map__25932__$1 = cljs.core.__destructure_map(map__25932);
var svc = map__25932__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25932__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25932__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
