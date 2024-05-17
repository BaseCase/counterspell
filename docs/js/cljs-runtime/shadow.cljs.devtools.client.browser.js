goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27023 = arguments.length;
var i__5727__auto___27024 = (0);
while(true){
if((i__5727__auto___27024 < len__5726__auto___27023)){
args__5732__auto__.push((arguments[i__5727__auto___27024]));

var G__27025 = (i__5727__auto___27024 + (1));
i__5727__auto___27024 = G__27025;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq26738){
var G__26739 = cljs.core.first(seq26738);
var seq26738__$1 = cljs.core.next(seq26738);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26739,seq26738__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__26745 = cljs.core.seq(sources);
var chunk__26746 = null;
var count__26747 = (0);
var i__26748 = (0);
while(true){
if((i__26748 < count__26747)){
var map__26754 = chunk__26746.cljs$core$IIndexed$_nth$arity$2(null, i__26748);
var map__26754__$1 = cljs.core.__destructure_map(map__26754);
var src = map__26754__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e26756){var e_27026 = e26756;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27026);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27026.message)].join('')));
}

var G__27027 = seq__26745;
var G__27028 = chunk__26746;
var G__27029 = count__26747;
var G__27030 = (i__26748 + (1));
seq__26745 = G__27027;
chunk__26746 = G__27028;
count__26747 = G__27029;
i__26748 = G__27030;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26745);
if(temp__5804__auto__){
var seq__26745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26745__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26745__$1);
var G__27031 = cljs.core.chunk_rest(seq__26745__$1);
var G__27032 = c__5525__auto__;
var G__27033 = cljs.core.count(c__5525__auto__);
var G__27034 = (0);
seq__26745 = G__27031;
chunk__26746 = G__27032;
count__26747 = G__27033;
i__26748 = G__27034;
continue;
} else {
var map__26757 = cljs.core.first(seq__26745__$1);
var map__26757__$1 = cljs.core.__destructure_map(map__26757);
var src = map__26757__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e26758){var e_27035 = e26758;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27035);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27035.message)].join('')));
}

var G__27036 = cljs.core.next(seq__26745__$1);
var G__27037 = null;
var G__27038 = (0);
var G__27039 = (0);
seq__26745 = G__27036;
chunk__26746 = G__27037;
count__26747 = G__27038;
i__26748 = G__27039;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__26759 = cljs.core.seq(js_requires);
var chunk__26760 = null;
var count__26761 = (0);
var i__26762 = (0);
while(true){
if((i__26762 < count__26761)){
var js_ns = chunk__26760.cljs$core$IIndexed$_nth$arity$2(null, i__26762);
var require_str_27040 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27040);


var G__27041 = seq__26759;
var G__27042 = chunk__26760;
var G__27043 = count__26761;
var G__27044 = (i__26762 + (1));
seq__26759 = G__27041;
chunk__26760 = G__27042;
count__26761 = G__27043;
i__26762 = G__27044;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26759);
if(temp__5804__auto__){
var seq__26759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26759__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26759__$1);
var G__27045 = cljs.core.chunk_rest(seq__26759__$1);
var G__27046 = c__5525__auto__;
var G__27047 = cljs.core.count(c__5525__auto__);
var G__27048 = (0);
seq__26759 = G__27045;
chunk__26760 = G__27046;
count__26761 = G__27047;
i__26762 = G__27048;
continue;
} else {
var js_ns = cljs.core.first(seq__26759__$1);
var require_str_27049 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27049);


var G__27050 = cljs.core.next(seq__26759__$1);
var G__27051 = null;
var G__27052 = (0);
var G__27053 = (0);
seq__26759 = G__27050;
chunk__26760 = G__27051;
count__26761 = G__27052;
i__26762 = G__27053;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__26764){
var map__26765 = p__26764;
var map__26765__$1 = cljs.core.__destructure_map(map__26765);
var msg = map__26765__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26765__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26765__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26766(s__26767){
return (new cljs.core.LazySeq(null,(function (){
var s__26767__$1 = s__26767;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26767__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__26772 = cljs.core.first(xs__6360__auto__);
var map__26772__$1 = cljs.core.__destructure_map(map__26772);
var src = map__26772__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26772__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26772__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__26767__$1,map__26772,map__26772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26765,map__26765__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26766_$_iter__26768(s__26769){
return (new cljs.core.LazySeq(null,((function (s__26767__$1,map__26772,map__26772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26765,map__26765__$1,msg,info,reload_info){
return (function (){
var s__26769__$1 = s__26769;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__26769__$1);
if(temp__5804__auto____$1){
var s__26769__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26769__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__26769__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__26771 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__26770 = (0);
while(true){
if((i__26770 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__26770);
cljs.core.chunk_append(b__26771,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__27054 = (i__26770 + (1));
i__26770 = G__27054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26771),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26766_$_iter__26768(cljs.core.chunk_rest(s__26769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26771),null);
}
} else {
var warning = cljs.core.first(s__26769__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26766_$_iter__26768(cljs.core.rest(s__26769__$2)));
}
} else {
return null;
}
break;
}
});})(s__26767__$1,map__26772,map__26772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26765,map__26765__$1,msg,info,reload_info))
,null,null));
});})(s__26767__$1,map__26772,map__26772__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26765,map__26765__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26766(cljs.core.rest(s__26767__$1)));
} else {
var G__27055 = cljs.core.rest(s__26767__$1);
s__26767__$1 = G__27055;
continue;
}
} else {
var G__27056 = cljs.core.rest(s__26767__$1);
s__26767__$1 = G__27056;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__26773_27057 = cljs.core.seq(warnings);
var chunk__26774_27058 = null;
var count__26775_27059 = (0);
var i__26776_27060 = (0);
while(true){
if((i__26776_27060 < count__26775_27059)){
var map__26779_27061 = chunk__26774_27058.cljs$core$IIndexed$_nth$arity$2(null, i__26776_27060);
var map__26779_27062__$1 = cljs.core.__destructure_map(map__26779_27061);
var w_27063 = map__26779_27062__$1;
var msg_27064__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779_27062__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779_27062__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779_27062__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779_27062__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27067)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27065),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27066),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27064__$1)].join(''));


var G__27068 = seq__26773_27057;
var G__27069 = chunk__26774_27058;
var G__27070 = count__26775_27059;
var G__27071 = (i__26776_27060 + (1));
seq__26773_27057 = G__27068;
chunk__26774_27058 = G__27069;
count__26775_27059 = G__27070;
i__26776_27060 = G__27071;
continue;
} else {
var temp__5804__auto___27072 = cljs.core.seq(seq__26773_27057);
if(temp__5804__auto___27072){
var seq__26773_27073__$1 = temp__5804__auto___27072;
if(cljs.core.chunked_seq_QMARK_(seq__26773_27073__$1)){
var c__5525__auto___27074 = cljs.core.chunk_first(seq__26773_27073__$1);
var G__27075 = cljs.core.chunk_rest(seq__26773_27073__$1);
var G__27076 = c__5525__auto___27074;
var G__27077 = cljs.core.count(c__5525__auto___27074);
var G__27078 = (0);
seq__26773_27057 = G__27075;
chunk__26774_27058 = G__27076;
count__26775_27059 = G__27077;
i__26776_27060 = G__27078;
continue;
} else {
var map__26780_27079 = cljs.core.first(seq__26773_27073__$1);
var map__26780_27080__$1 = cljs.core.__destructure_map(map__26780_27079);
var w_27081 = map__26780_27080__$1;
var msg_27082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_27080__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_27080__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_27080__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_27080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27085)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27083),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27084),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27082__$1)].join(''));


var G__27086 = cljs.core.next(seq__26773_27073__$1);
var G__27087 = null;
var G__27088 = (0);
var G__27089 = (0);
seq__26773_27057 = G__27086;
chunk__26774_27058 = G__27087;
count__26775_27059 = G__27088;
i__26776_27060 = G__27089;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__26763_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__26763_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__26781){
var map__26782 = p__26781;
var map__26782__$1 = cljs.core.__destructure_map(map__26782);
var msg = map__26782__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26783 = cljs.core.seq(updates);
var chunk__26785 = null;
var count__26786 = (0);
var i__26787 = (0);
while(true){
if((i__26787 < count__26786)){
var path = chunk__26785.cljs$core$IIndexed$_nth$arity$2(null, i__26787);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26897_27090 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26901_27091 = null;
var count__26902_27092 = (0);
var i__26903_27093 = (0);
while(true){
if((i__26903_27093 < count__26902_27092)){
var node_27094 = chunk__26901_27091.cljs$core$IIndexed$_nth$arity$2(null, i__26903_27093);
if(cljs.core.not(node_27094.shadow$old)){
var path_match_27095 = shadow.cljs.devtools.client.browser.match_paths(node_27094.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27095)){
var new_link_27096 = (function (){var G__26929 = node_27094.cloneNode(true);
G__26929.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27095),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26929;
})();
(node_27094.shadow$old = true);

(new_link_27096.onload = ((function (seq__26897_27090,chunk__26901_27091,count__26902_27092,i__26903_27093,seq__26783,chunk__26785,count__26786,i__26787,new_link_27096,path_match_27095,node_27094,path,map__26782,map__26782__$1,msg,updates,reload_info){
return (function (e){
var seq__26930_27097 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26932_27098 = null;
var count__26933_27099 = (0);
var i__26934_27100 = (0);
while(true){
if((i__26934_27100 < count__26933_27099)){
var map__26938_27101 = chunk__26932_27098.cljs$core$IIndexed$_nth$arity$2(null, i__26934_27100);
var map__26938_27102__$1 = cljs.core.__destructure_map(map__26938_27101);
var task_27103 = map__26938_27102__$1;
var fn_str_27104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938_27102__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938_27102__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27106 = goog.getObjectByName(fn_str_27104,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27105)].join(''));

(fn_obj_27106.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27106.cljs$core$IFn$_invoke$arity$2(path,new_link_27096) : fn_obj_27106.call(null, path,new_link_27096));


var G__27107 = seq__26930_27097;
var G__27108 = chunk__26932_27098;
var G__27109 = count__26933_27099;
var G__27110 = (i__26934_27100 + (1));
seq__26930_27097 = G__27107;
chunk__26932_27098 = G__27108;
count__26933_27099 = G__27109;
i__26934_27100 = G__27110;
continue;
} else {
var temp__5804__auto___27111 = cljs.core.seq(seq__26930_27097);
if(temp__5804__auto___27111){
var seq__26930_27112__$1 = temp__5804__auto___27111;
if(cljs.core.chunked_seq_QMARK_(seq__26930_27112__$1)){
var c__5525__auto___27113 = cljs.core.chunk_first(seq__26930_27112__$1);
var G__27114 = cljs.core.chunk_rest(seq__26930_27112__$1);
var G__27115 = c__5525__auto___27113;
var G__27116 = cljs.core.count(c__5525__auto___27113);
var G__27117 = (0);
seq__26930_27097 = G__27114;
chunk__26932_27098 = G__27115;
count__26933_27099 = G__27116;
i__26934_27100 = G__27117;
continue;
} else {
var map__26939_27118 = cljs.core.first(seq__26930_27112__$1);
var map__26939_27119__$1 = cljs.core.__destructure_map(map__26939_27118);
var task_27120 = map__26939_27119__$1;
var fn_str_27121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26939_27119__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26939_27119__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27123 = goog.getObjectByName(fn_str_27121,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27122)].join(''));

(fn_obj_27123.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27123.cljs$core$IFn$_invoke$arity$2(path,new_link_27096) : fn_obj_27123.call(null, path,new_link_27096));


var G__27124 = cljs.core.next(seq__26930_27112__$1);
var G__27125 = null;
var G__27126 = (0);
var G__27127 = (0);
seq__26930_27097 = G__27124;
chunk__26932_27098 = G__27125;
count__26933_27099 = G__27126;
i__26934_27100 = G__27127;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27094);
});})(seq__26897_27090,chunk__26901_27091,count__26902_27092,i__26903_27093,seq__26783,chunk__26785,count__26786,i__26787,new_link_27096,path_match_27095,node_27094,path,map__26782,map__26782__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27095], 0));

goog.dom.insertSiblingAfter(new_link_27096,node_27094);


var G__27128 = seq__26897_27090;
var G__27129 = chunk__26901_27091;
var G__27130 = count__26902_27092;
var G__27131 = (i__26903_27093 + (1));
seq__26897_27090 = G__27128;
chunk__26901_27091 = G__27129;
count__26902_27092 = G__27130;
i__26903_27093 = G__27131;
continue;
} else {
var G__27132 = seq__26897_27090;
var G__27133 = chunk__26901_27091;
var G__27134 = count__26902_27092;
var G__27135 = (i__26903_27093 + (1));
seq__26897_27090 = G__27132;
chunk__26901_27091 = G__27133;
count__26902_27092 = G__27134;
i__26903_27093 = G__27135;
continue;
}
} else {
var G__27136 = seq__26897_27090;
var G__27137 = chunk__26901_27091;
var G__27138 = count__26902_27092;
var G__27139 = (i__26903_27093 + (1));
seq__26897_27090 = G__27136;
chunk__26901_27091 = G__27137;
count__26902_27092 = G__27138;
i__26903_27093 = G__27139;
continue;
}
} else {
var temp__5804__auto___27140 = cljs.core.seq(seq__26897_27090);
if(temp__5804__auto___27140){
var seq__26897_27141__$1 = temp__5804__auto___27140;
if(cljs.core.chunked_seq_QMARK_(seq__26897_27141__$1)){
var c__5525__auto___27142 = cljs.core.chunk_first(seq__26897_27141__$1);
var G__27143 = cljs.core.chunk_rest(seq__26897_27141__$1);
var G__27144 = c__5525__auto___27142;
var G__27145 = cljs.core.count(c__5525__auto___27142);
var G__27146 = (0);
seq__26897_27090 = G__27143;
chunk__26901_27091 = G__27144;
count__26902_27092 = G__27145;
i__26903_27093 = G__27146;
continue;
} else {
var node_27147 = cljs.core.first(seq__26897_27141__$1);
if(cljs.core.not(node_27147.shadow$old)){
var path_match_27148 = shadow.cljs.devtools.client.browser.match_paths(node_27147.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27148)){
var new_link_27149 = (function (){var G__26940 = node_27147.cloneNode(true);
G__26940.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27148),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26940;
})();
(node_27147.shadow$old = true);

(new_link_27149.onload = ((function (seq__26897_27090,chunk__26901_27091,count__26902_27092,i__26903_27093,seq__26783,chunk__26785,count__26786,i__26787,new_link_27149,path_match_27148,node_27147,seq__26897_27141__$1,temp__5804__auto___27140,path,map__26782,map__26782__$1,msg,updates,reload_info){
return (function (e){
var seq__26941_27150 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26943_27151 = null;
var count__26944_27152 = (0);
var i__26945_27153 = (0);
while(true){
if((i__26945_27153 < count__26944_27152)){
var map__26949_27154 = chunk__26943_27151.cljs$core$IIndexed$_nth$arity$2(null, i__26945_27153);
var map__26949_27155__$1 = cljs.core.__destructure_map(map__26949_27154);
var task_27156 = map__26949_27155__$1;
var fn_str_27157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949_27155__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26949_27155__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27159 = goog.getObjectByName(fn_str_27157,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27158)].join(''));

(fn_obj_27159.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27159.cljs$core$IFn$_invoke$arity$2(path,new_link_27149) : fn_obj_27159.call(null, path,new_link_27149));


var G__27160 = seq__26941_27150;
var G__27161 = chunk__26943_27151;
var G__27162 = count__26944_27152;
var G__27163 = (i__26945_27153 + (1));
seq__26941_27150 = G__27160;
chunk__26943_27151 = G__27161;
count__26944_27152 = G__27162;
i__26945_27153 = G__27163;
continue;
} else {
var temp__5804__auto___27164__$1 = cljs.core.seq(seq__26941_27150);
if(temp__5804__auto___27164__$1){
var seq__26941_27165__$1 = temp__5804__auto___27164__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26941_27165__$1)){
var c__5525__auto___27166 = cljs.core.chunk_first(seq__26941_27165__$1);
var G__27167 = cljs.core.chunk_rest(seq__26941_27165__$1);
var G__27168 = c__5525__auto___27166;
var G__27169 = cljs.core.count(c__5525__auto___27166);
var G__27170 = (0);
seq__26941_27150 = G__27167;
chunk__26943_27151 = G__27168;
count__26944_27152 = G__27169;
i__26945_27153 = G__27170;
continue;
} else {
var map__26950_27171 = cljs.core.first(seq__26941_27165__$1);
var map__26950_27172__$1 = cljs.core.__destructure_map(map__26950_27171);
var task_27173 = map__26950_27172__$1;
var fn_str_27174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950_27172__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950_27172__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27176 = goog.getObjectByName(fn_str_27174,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27175)].join(''));

(fn_obj_27176.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27176.cljs$core$IFn$_invoke$arity$2(path,new_link_27149) : fn_obj_27176.call(null, path,new_link_27149));


var G__27177 = cljs.core.next(seq__26941_27165__$1);
var G__27178 = null;
var G__27179 = (0);
var G__27180 = (0);
seq__26941_27150 = G__27177;
chunk__26943_27151 = G__27178;
count__26944_27152 = G__27179;
i__26945_27153 = G__27180;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27147);
});})(seq__26897_27090,chunk__26901_27091,count__26902_27092,i__26903_27093,seq__26783,chunk__26785,count__26786,i__26787,new_link_27149,path_match_27148,node_27147,seq__26897_27141__$1,temp__5804__auto___27140,path,map__26782,map__26782__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27148], 0));

goog.dom.insertSiblingAfter(new_link_27149,node_27147);


var G__27181 = cljs.core.next(seq__26897_27141__$1);
var G__27182 = null;
var G__27183 = (0);
var G__27184 = (0);
seq__26897_27090 = G__27181;
chunk__26901_27091 = G__27182;
count__26902_27092 = G__27183;
i__26903_27093 = G__27184;
continue;
} else {
var G__27185 = cljs.core.next(seq__26897_27141__$1);
var G__27186 = null;
var G__27187 = (0);
var G__27188 = (0);
seq__26897_27090 = G__27185;
chunk__26901_27091 = G__27186;
count__26902_27092 = G__27187;
i__26903_27093 = G__27188;
continue;
}
} else {
var G__27189 = cljs.core.next(seq__26897_27141__$1);
var G__27190 = null;
var G__27191 = (0);
var G__27192 = (0);
seq__26897_27090 = G__27189;
chunk__26901_27091 = G__27190;
count__26902_27092 = G__27191;
i__26903_27093 = G__27192;
continue;
}
}
} else {
}
}
break;
}


var G__27193 = seq__26783;
var G__27194 = chunk__26785;
var G__27195 = count__26786;
var G__27196 = (i__26787 + (1));
seq__26783 = G__27193;
chunk__26785 = G__27194;
count__26786 = G__27195;
i__26787 = G__27196;
continue;
} else {
var G__27197 = seq__26783;
var G__27198 = chunk__26785;
var G__27199 = count__26786;
var G__27200 = (i__26787 + (1));
seq__26783 = G__27197;
chunk__26785 = G__27198;
count__26786 = G__27199;
i__26787 = G__27200;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26783);
if(temp__5804__auto__){
var seq__26783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26783__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26783__$1);
var G__27201 = cljs.core.chunk_rest(seq__26783__$1);
var G__27202 = c__5525__auto__;
var G__27203 = cljs.core.count(c__5525__auto__);
var G__27204 = (0);
seq__26783 = G__27201;
chunk__26785 = G__27202;
count__26786 = G__27203;
i__26787 = G__27204;
continue;
} else {
var path = cljs.core.first(seq__26783__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26951_27205 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26955_27206 = null;
var count__26956_27207 = (0);
var i__26957_27208 = (0);
while(true){
if((i__26957_27208 < count__26956_27207)){
var node_27209 = chunk__26955_27206.cljs$core$IIndexed$_nth$arity$2(null, i__26957_27208);
if(cljs.core.not(node_27209.shadow$old)){
var path_match_27210 = shadow.cljs.devtools.client.browser.match_paths(node_27209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27210)){
var new_link_27211 = (function (){var G__26983 = node_27209.cloneNode(true);
G__26983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26983;
})();
(node_27209.shadow$old = true);

(new_link_27211.onload = ((function (seq__26951_27205,chunk__26955_27206,count__26956_27207,i__26957_27208,seq__26783,chunk__26785,count__26786,i__26787,new_link_27211,path_match_27210,node_27209,path,seq__26783__$1,temp__5804__auto__,map__26782,map__26782__$1,msg,updates,reload_info){
return (function (e){
var seq__26984_27212 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26986_27213 = null;
var count__26987_27214 = (0);
var i__26988_27215 = (0);
while(true){
if((i__26988_27215 < count__26987_27214)){
var map__26992_27216 = chunk__26986_27213.cljs$core$IIndexed$_nth$arity$2(null, i__26988_27215);
var map__26992_27217__$1 = cljs.core.__destructure_map(map__26992_27216);
var task_27218 = map__26992_27217__$1;
var fn_str_27219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26992_27217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26992_27217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27221 = goog.getObjectByName(fn_str_27219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27220)].join(''));

(fn_obj_27221.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27221.cljs$core$IFn$_invoke$arity$2(path,new_link_27211) : fn_obj_27221.call(null, path,new_link_27211));


var G__27222 = seq__26984_27212;
var G__27223 = chunk__26986_27213;
var G__27224 = count__26987_27214;
var G__27225 = (i__26988_27215 + (1));
seq__26984_27212 = G__27222;
chunk__26986_27213 = G__27223;
count__26987_27214 = G__27224;
i__26988_27215 = G__27225;
continue;
} else {
var temp__5804__auto___27226__$1 = cljs.core.seq(seq__26984_27212);
if(temp__5804__auto___27226__$1){
var seq__26984_27227__$1 = temp__5804__auto___27226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26984_27227__$1)){
var c__5525__auto___27228 = cljs.core.chunk_first(seq__26984_27227__$1);
var G__27229 = cljs.core.chunk_rest(seq__26984_27227__$1);
var G__27230 = c__5525__auto___27228;
var G__27231 = cljs.core.count(c__5525__auto___27228);
var G__27232 = (0);
seq__26984_27212 = G__27229;
chunk__26986_27213 = G__27230;
count__26987_27214 = G__27231;
i__26988_27215 = G__27232;
continue;
} else {
var map__26993_27233 = cljs.core.first(seq__26984_27227__$1);
var map__26993_27234__$1 = cljs.core.__destructure_map(map__26993_27233);
var task_27235 = map__26993_27234__$1;
var fn_str_27236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26993_27234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26993_27234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27238 = goog.getObjectByName(fn_str_27236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27237)].join(''));

(fn_obj_27238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27238.cljs$core$IFn$_invoke$arity$2(path,new_link_27211) : fn_obj_27238.call(null, path,new_link_27211));


var G__27239 = cljs.core.next(seq__26984_27227__$1);
var G__27240 = null;
var G__27241 = (0);
var G__27242 = (0);
seq__26984_27212 = G__27239;
chunk__26986_27213 = G__27240;
count__26987_27214 = G__27241;
i__26988_27215 = G__27242;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27209);
});})(seq__26951_27205,chunk__26955_27206,count__26956_27207,i__26957_27208,seq__26783,chunk__26785,count__26786,i__26787,new_link_27211,path_match_27210,node_27209,path,seq__26783__$1,temp__5804__auto__,map__26782,map__26782__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27210], 0));

goog.dom.insertSiblingAfter(new_link_27211,node_27209);


var G__27243 = seq__26951_27205;
var G__27244 = chunk__26955_27206;
var G__27245 = count__26956_27207;
var G__27246 = (i__26957_27208 + (1));
seq__26951_27205 = G__27243;
chunk__26955_27206 = G__27244;
count__26956_27207 = G__27245;
i__26957_27208 = G__27246;
continue;
} else {
var G__27247 = seq__26951_27205;
var G__27248 = chunk__26955_27206;
var G__27249 = count__26956_27207;
var G__27250 = (i__26957_27208 + (1));
seq__26951_27205 = G__27247;
chunk__26955_27206 = G__27248;
count__26956_27207 = G__27249;
i__26957_27208 = G__27250;
continue;
}
} else {
var G__27251 = seq__26951_27205;
var G__27252 = chunk__26955_27206;
var G__27253 = count__26956_27207;
var G__27254 = (i__26957_27208 + (1));
seq__26951_27205 = G__27251;
chunk__26955_27206 = G__27252;
count__26956_27207 = G__27253;
i__26957_27208 = G__27254;
continue;
}
} else {
var temp__5804__auto___27255__$1 = cljs.core.seq(seq__26951_27205);
if(temp__5804__auto___27255__$1){
var seq__26951_27256__$1 = temp__5804__auto___27255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26951_27256__$1)){
var c__5525__auto___27257 = cljs.core.chunk_first(seq__26951_27256__$1);
var G__27258 = cljs.core.chunk_rest(seq__26951_27256__$1);
var G__27259 = c__5525__auto___27257;
var G__27260 = cljs.core.count(c__5525__auto___27257);
var G__27261 = (0);
seq__26951_27205 = G__27258;
chunk__26955_27206 = G__27259;
count__26956_27207 = G__27260;
i__26957_27208 = G__27261;
continue;
} else {
var node_27262 = cljs.core.first(seq__26951_27256__$1);
if(cljs.core.not(node_27262.shadow$old)){
var path_match_27263 = shadow.cljs.devtools.client.browser.match_paths(node_27262.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27263)){
var new_link_27264 = (function (){var G__26994 = node_27262.cloneNode(true);
G__26994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27263),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26994;
})();
(node_27262.shadow$old = true);

(new_link_27264.onload = ((function (seq__26951_27205,chunk__26955_27206,count__26956_27207,i__26957_27208,seq__26783,chunk__26785,count__26786,i__26787,new_link_27264,path_match_27263,node_27262,seq__26951_27256__$1,temp__5804__auto___27255__$1,path,seq__26783__$1,temp__5804__auto__,map__26782,map__26782__$1,msg,updates,reload_info){
return (function (e){
var seq__26995_27265 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26997_27266 = null;
var count__26998_27267 = (0);
var i__26999_27268 = (0);
while(true){
if((i__26999_27268 < count__26998_27267)){
var map__27003_27269 = chunk__26997_27266.cljs$core$IIndexed$_nth$arity$2(null, i__26999_27268);
var map__27003_27270__$1 = cljs.core.__destructure_map(map__27003_27269);
var task_27271 = map__27003_27270__$1;
var fn_str_27272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003_27270__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27003_27270__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27274 = goog.getObjectByName(fn_str_27272,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27273)].join(''));

(fn_obj_27274.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27274.cljs$core$IFn$_invoke$arity$2(path,new_link_27264) : fn_obj_27274.call(null, path,new_link_27264));


var G__27275 = seq__26995_27265;
var G__27276 = chunk__26997_27266;
var G__27277 = count__26998_27267;
var G__27278 = (i__26999_27268 + (1));
seq__26995_27265 = G__27275;
chunk__26997_27266 = G__27276;
count__26998_27267 = G__27277;
i__26999_27268 = G__27278;
continue;
} else {
var temp__5804__auto___27279__$2 = cljs.core.seq(seq__26995_27265);
if(temp__5804__auto___27279__$2){
var seq__26995_27280__$1 = temp__5804__auto___27279__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26995_27280__$1)){
var c__5525__auto___27281 = cljs.core.chunk_first(seq__26995_27280__$1);
var G__27282 = cljs.core.chunk_rest(seq__26995_27280__$1);
var G__27283 = c__5525__auto___27281;
var G__27284 = cljs.core.count(c__5525__auto___27281);
var G__27285 = (0);
seq__26995_27265 = G__27282;
chunk__26997_27266 = G__27283;
count__26998_27267 = G__27284;
i__26999_27268 = G__27285;
continue;
} else {
var map__27004_27286 = cljs.core.first(seq__26995_27280__$1);
var map__27004_27287__$1 = cljs.core.__destructure_map(map__27004_27286);
var task_27288 = map__27004_27287__$1;
var fn_str_27289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004_27287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27004_27287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27291 = goog.getObjectByName(fn_str_27289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27290)].join(''));

(fn_obj_27291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27291.cljs$core$IFn$_invoke$arity$2(path,new_link_27264) : fn_obj_27291.call(null, path,new_link_27264));


var G__27292 = cljs.core.next(seq__26995_27280__$1);
var G__27293 = null;
var G__27294 = (0);
var G__27295 = (0);
seq__26995_27265 = G__27292;
chunk__26997_27266 = G__27293;
count__26998_27267 = G__27294;
i__26999_27268 = G__27295;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27262);
});})(seq__26951_27205,chunk__26955_27206,count__26956_27207,i__26957_27208,seq__26783,chunk__26785,count__26786,i__26787,new_link_27264,path_match_27263,node_27262,seq__26951_27256__$1,temp__5804__auto___27255__$1,path,seq__26783__$1,temp__5804__auto__,map__26782,map__26782__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27263], 0));

goog.dom.insertSiblingAfter(new_link_27264,node_27262);


var G__27296 = cljs.core.next(seq__26951_27256__$1);
var G__27297 = null;
var G__27298 = (0);
var G__27299 = (0);
seq__26951_27205 = G__27296;
chunk__26955_27206 = G__27297;
count__26956_27207 = G__27298;
i__26957_27208 = G__27299;
continue;
} else {
var G__27300 = cljs.core.next(seq__26951_27256__$1);
var G__27301 = null;
var G__27302 = (0);
var G__27303 = (0);
seq__26951_27205 = G__27300;
chunk__26955_27206 = G__27301;
count__26956_27207 = G__27302;
i__26957_27208 = G__27303;
continue;
}
} else {
var G__27304 = cljs.core.next(seq__26951_27256__$1);
var G__27305 = null;
var G__27306 = (0);
var G__27307 = (0);
seq__26951_27205 = G__27304;
chunk__26955_27206 = G__27305;
count__26956_27207 = G__27306;
i__26957_27208 = G__27307;
continue;
}
}
} else {
}
}
break;
}


var G__27308 = cljs.core.next(seq__26783__$1);
var G__27309 = null;
var G__27310 = (0);
var G__27311 = (0);
seq__26783 = G__27308;
chunk__26785 = G__27309;
count__26786 = G__27310;
i__26787 = G__27311;
continue;
} else {
var G__27312 = cljs.core.next(seq__26783__$1);
var G__27313 = null;
var G__27314 = (0);
var G__27315 = (0);
seq__26783 = G__27312;
chunk__26785 = G__27313;
count__26786 = G__27314;
i__26787 = G__27315;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__27005){
var map__27006 = p__27005;
var map__27006__$1 = cljs.core.__destructure_map(map__27006);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27006__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__27007,done,error){
var map__27008 = p__27007;
var map__27008__$1 = cljs.core.__destructure_map(map__27008);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27008__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__27009,done,error){
var map__27010 = p__27009;
var map__27010__$1 = cljs.core.__destructure_map(map__27010);
var msg = map__27010__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27010__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__27011){
var map__27012 = p__27011;
var map__27012__$1 = cljs.core.__destructure_map(map__27012);
var src = map__27012__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__27013 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__27013) : done.call(null, G__27013));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__27014){
var map__27015 = p__27014;
var map__27015__$1 = cljs.core.__destructure_map(map__27015);
var msg__$1 = map__27015__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e27016){var ex = e27016;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__27017){
var map__27018 = p__27017;
var map__27018__$1 = cljs.core.__destructure_map(map__27018);
var env = map__27018__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27018__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__27019){
var map__27020 = p__27019;
var map__27020__$1 = cljs.core.__destructure_map(map__27020);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27020__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27020__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__27021){
var map__27022 = p__27021;
var map__27022__$1 = cljs.core.__destructure_map(map__27022);
var svc = map__27022__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27022__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
