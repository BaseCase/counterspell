goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_24785 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_24785(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_24789 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_24789(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__23119 = coll;
var G__23120 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__23119,G__23120) : shadow.dom.lazy_native_coll_seq.call(null, G__23119,G__23120));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__23166 = arguments.length;
switch (G__23166) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__23181 = arguments.length;
switch (G__23181) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__23201 = arguments.length;
switch (G__23201) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__23215 = arguments.length;
switch (G__23215) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__23232 = arguments.length;
switch (G__23232) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__23264 = arguments.length;
switch (G__23264) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e23282){if((e23282 instanceof Object)){
var e = e23282;
return console.log("didnt support attachEvent",el,e);
} else {
throw e23282;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__23294 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__23295 = null;
var count__23296 = (0);
var i__23297 = (0);
while(true){
if((i__23297 < count__23296)){
var el = chunk__23295.cljs$core$IIndexed$_nth$arity$2(null, i__23297);
var handler_24847__$1 = ((function (seq__23294,chunk__23295,count__23296,i__23297,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__23294,chunk__23295,count__23296,i__23297,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24847__$1);


var G__24849 = seq__23294;
var G__24850 = chunk__23295;
var G__24851 = count__23296;
var G__24852 = (i__23297 + (1));
seq__23294 = G__24849;
chunk__23295 = G__24850;
count__23296 = G__24851;
i__23297 = G__24852;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23294);
if(temp__5804__auto__){
var seq__23294__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23294__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23294__$1);
var G__24854 = cljs.core.chunk_rest(seq__23294__$1);
var G__24855 = c__5525__auto__;
var G__24856 = cljs.core.count(c__5525__auto__);
var G__24857 = (0);
seq__23294 = G__24854;
chunk__23295 = G__24855;
count__23296 = G__24856;
i__23297 = G__24857;
continue;
} else {
var el = cljs.core.first(seq__23294__$1);
var handler_24859__$1 = ((function (seq__23294,chunk__23295,count__23296,i__23297,el,seq__23294__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__23294,chunk__23295,count__23296,i__23297,el,seq__23294__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24859__$1);


var G__24870 = cljs.core.next(seq__23294__$1);
var G__24871 = null;
var G__24872 = (0);
var G__24873 = (0);
seq__23294 = G__24870;
chunk__23295 = G__24871;
count__23296 = G__24872;
i__23297 = G__24873;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__23333 = arguments.length;
switch (G__23333) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__23343 = cljs.core.seq(events);
var chunk__23344 = null;
var count__23345 = (0);
var i__23346 = (0);
while(true){
if((i__23346 < count__23345)){
var vec__23366 = chunk__23344.cljs$core$IIndexed$_nth$arity$2(null, i__23346);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24886 = seq__23343;
var G__24887 = chunk__23344;
var G__24888 = count__23345;
var G__24889 = (i__23346 + (1));
seq__23343 = G__24886;
chunk__23344 = G__24887;
count__23345 = G__24888;
i__23346 = G__24889;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23343);
if(temp__5804__auto__){
var seq__23343__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23343__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23343__$1);
var G__24892 = cljs.core.chunk_rest(seq__23343__$1);
var G__24893 = c__5525__auto__;
var G__24894 = cljs.core.count(c__5525__auto__);
var G__24895 = (0);
seq__23343 = G__24892;
chunk__23344 = G__24893;
count__23345 = G__24894;
i__23346 = G__24895;
continue;
} else {
var vec__23373 = cljs.core.first(seq__23343__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23373,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24898 = cljs.core.next(seq__23343__$1);
var G__24899 = null;
var G__24900 = (0);
var G__24901 = (0);
seq__23343 = G__24898;
chunk__23344 = G__24899;
count__23345 = G__24900;
i__23346 = G__24901;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__23388 = cljs.core.seq(styles);
var chunk__23389 = null;
var count__23390 = (0);
var i__23391 = (0);
while(true){
if((i__23391 < count__23390)){
var vec__23422 = chunk__23389.cljs$core$IIndexed$_nth$arity$2(null, i__23391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23422,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24905 = seq__23388;
var G__24906 = chunk__23389;
var G__24907 = count__23390;
var G__24908 = (i__23391 + (1));
seq__23388 = G__24905;
chunk__23389 = G__24906;
count__23390 = G__24907;
i__23391 = G__24908;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23388);
if(temp__5804__auto__){
var seq__23388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23388__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23388__$1);
var G__24909 = cljs.core.chunk_rest(seq__23388__$1);
var G__24910 = c__5525__auto__;
var G__24911 = cljs.core.count(c__5525__auto__);
var G__24912 = (0);
seq__23388 = G__24909;
chunk__23389 = G__24910;
count__23390 = G__24911;
i__23391 = G__24912;
continue;
} else {
var vec__23434 = cljs.core.first(seq__23388__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23434,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24915 = cljs.core.next(seq__23388__$1);
var G__24916 = null;
var G__24917 = (0);
var G__24918 = (0);
seq__23388 = G__24915;
chunk__23389 = G__24916;
count__23390 = G__24917;
i__23391 = G__24918;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__23448_24922 = key;
var G__23448_24923__$1 = (((G__23448_24922 instanceof cljs.core.Keyword))?G__23448_24922.fqn:null);
switch (G__23448_24923__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_24930 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_24930,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_24930,"aria-");
}
})())){
el.setAttribute(ks_24930,value);
} else {
(el[ks_24930] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__23508){
var map__23509 = p__23508;
var map__23509__$1 = cljs.core.__destructure_map(map__23509);
var props = map__23509__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23509__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__23512 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23512,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23512,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23512,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__23517 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__23517,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__23517;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__23527 = arguments.length;
switch (G__23527) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__23541){
var vec__23543 = p__23541;
var seq__23544 = cljs.core.seq(vec__23543);
var first__23545 = cljs.core.first(seq__23544);
var seq__23544__$1 = cljs.core.next(seq__23544);
var nn = first__23545;
var first__23545__$1 = cljs.core.first(seq__23544__$1);
var seq__23544__$2 = cljs.core.next(seq__23544__$1);
var np = first__23545__$1;
var nc = seq__23544__$2;
var node = vec__23543;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23553 = nn;
var G__23554 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23553,G__23554) : create_fn.call(null, G__23553,G__23554));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23556 = nn;
var G__23557 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23556,G__23557) : create_fn.call(null, G__23556,G__23557));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__23558 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(1),null);
var seq__23561_24952 = cljs.core.seq(node_children);
var chunk__23562_24953 = null;
var count__23563_24954 = (0);
var i__23564_24955 = (0);
while(true){
if((i__23564_24955 < count__23563_24954)){
var child_struct_24956 = chunk__23562_24953.cljs$core$IIndexed$_nth$arity$2(null, i__23564_24955);
var children_24957 = shadow.dom.dom_node(child_struct_24956);
if(cljs.core.seq_QMARK_(children_24957)){
var seq__23612_24958 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24957));
var chunk__23615_24959 = null;
var count__23616_24960 = (0);
var i__23617_24961 = (0);
while(true){
if((i__23617_24961 < count__23616_24960)){
var child_24962 = chunk__23615_24959.cljs$core$IIndexed$_nth$arity$2(null, i__23617_24961);
if(cljs.core.truth_(child_24962)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24962);


var G__24963 = seq__23612_24958;
var G__24964 = chunk__23615_24959;
var G__24965 = count__23616_24960;
var G__24966 = (i__23617_24961 + (1));
seq__23612_24958 = G__24963;
chunk__23615_24959 = G__24964;
count__23616_24960 = G__24965;
i__23617_24961 = G__24966;
continue;
} else {
var G__24967 = seq__23612_24958;
var G__24968 = chunk__23615_24959;
var G__24969 = count__23616_24960;
var G__24970 = (i__23617_24961 + (1));
seq__23612_24958 = G__24967;
chunk__23615_24959 = G__24968;
count__23616_24960 = G__24969;
i__23617_24961 = G__24970;
continue;
}
} else {
var temp__5804__auto___24971 = cljs.core.seq(seq__23612_24958);
if(temp__5804__auto___24971){
var seq__23612_24972__$1 = temp__5804__auto___24971;
if(cljs.core.chunked_seq_QMARK_(seq__23612_24972__$1)){
var c__5525__auto___24973 = cljs.core.chunk_first(seq__23612_24972__$1);
var G__24975 = cljs.core.chunk_rest(seq__23612_24972__$1);
var G__24976 = c__5525__auto___24973;
var G__24977 = cljs.core.count(c__5525__auto___24973);
var G__24978 = (0);
seq__23612_24958 = G__24975;
chunk__23615_24959 = G__24976;
count__23616_24960 = G__24977;
i__23617_24961 = G__24978;
continue;
} else {
var child_24980 = cljs.core.first(seq__23612_24972__$1);
if(cljs.core.truth_(child_24980)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24980);


var G__24981 = cljs.core.next(seq__23612_24972__$1);
var G__24982 = null;
var G__24983 = (0);
var G__24984 = (0);
seq__23612_24958 = G__24981;
chunk__23615_24959 = G__24982;
count__23616_24960 = G__24983;
i__23617_24961 = G__24984;
continue;
} else {
var G__24985 = cljs.core.next(seq__23612_24972__$1);
var G__24986 = null;
var G__24987 = (0);
var G__24988 = (0);
seq__23612_24958 = G__24985;
chunk__23615_24959 = G__24986;
count__23616_24960 = G__24987;
i__23617_24961 = G__24988;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24957);
}


var G__24989 = seq__23561_24952;
var G__24990 = chunk__23562_24953;
var G__24991 = count__23563_24954;
var G__24992 = (i__23564_24955 + (1));
seq__23561_24952 = G__24989;
chunk__23562_24953 = G__24990;
count__23563_24954 = G__24991;
i__23564_24955 = G__24992;
continue;
} else {
var temp__5804__auto___24993 = cljs.core.seq(seq__23561_24952);
if(temp__5804__auto___24993){
var seq__23561_24994__$1 = temp__5804__auto___24993;
if(cljs.core.chunked_seq_QMARK_(seq__23561_24994__$1)){
var c__5525__auto___24996 = cljs.core.chunk_first(seq__23561_24994__$1);
var G__24997 = cljs.core.chunk_rest(seq__23561_24994__$1);
var G__24998 = c__5525__auto___24996;
var G__24999 = cljs.core.count(c__5525__auto___24996);
var G__25000 = (0);
seq__23561_24952 = G__24997;
chunk__23562_24953 = G__24998;
count__23563_24954 = G__24999;
i__23564_24955 = G__25000;
continue;
} else {
var child_struct_25001 = cljs.core.first(seq__23561_24994__$1);
var children_25003 = shadow.dom.dom_node(child_struct_25001);
if(cljs.core.seq_QMARK_(children_25003)){
var seq__23628_25004 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_25003));
var chunk__23630_25005 = null;
var count__23631_25006 = (0);
var i__23632_25007 = (0);
while(true){
if((i__23632_25007 < count__23631_25006)){
var child_25009 = chunk__23630_25005.cljs$core$IIndexed$_nth$arity$2(null, i__23632_25007);
if(cljs.core.truth_(child_25009)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_25009);


var G__25014 = seq__23628_25004;
var G__25015 = chunk__23630_25005;
var G__25016 = count__23631_25006;
var G__25017 = (i__23632_25007 + (1));
seq__23628_25004 = G__25014;
chunk__23630_25005 = G__25015;
count__23631_25006 = G__25016;
i__23632_25007 = G__25017;
continue;
} else {
var G__25018 = seq__23628_25004;
var G__25019 = chunk__23630_25005;
var G__25020 = count__23631_25006;
var G__25021 = (i__23632_25007 + (1));
seq__23628_25004 = G__25018;
chunk__23630_25005 = G__25019;
count__23631_25006 = G__25020;
i__23632_25007 = G__25021;
continue;
}
} else {
var temp__5804__auto___25022__$1 = cljs.core.seq(seq__23628_25004);
if(temp__5804__auto___25022__$1){
var seq__23628_25023__$1 = temp__5804__auto___25022__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23628_25023__$1)){
var c__5525__auto___25024 = cljs.core.chunk_first(seq__23628_25023__$1);
var G__25026 = cljs.core.chunk_rest(seq__23628_25023__$1);
var G__25027 = c__5525__auto___25024;
var G__25028 = cljs.core.count(c__5525__auto___25024);
var G__25029 = (0);
seq__23628_25004 = G__25026;
chunk__23630_25005 = G__25027;
count__23631_25006 = G__25028;
i__23632_25007 = G__25029;
continue;
} else {
var child_25030 = cljs.core.first(seq__23628_25023__$1);
if(cljs.core.truth_(child_25030)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_25030);


var G__25035 = cljs.core.next(seq__23628_25023__$1);
var G__25036 = null;
var G__25037 = (0);
var G__25038 = (0);
seq__23628_25004 = G__25035;
chunk__23630_25005 = G__25036;
count__23631_25006 = G__25037;
i__23632_25007 = G__25038;
continue;
} else {
var G__25039 = cljs.core.next(seq__23628_25023__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__23628_25004 = G__25039;
chunk__23630_25005 = G__25040;
count__23631_25006 = G__25041;
i__23632_25007 = G__25042;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_25003);
}


var G__25043 = cljs.core.next(seq__23561_24994__$1);
var G__25044 = null;
var G__25045 = (0);
var G__25046 = (0);
seq__23561_24952 = G__25043;
chunk__23562_24953 = G__25044;
count__23563_24954 = G__25045;
i__23564_24955 = G__25046;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__23662 = cljs.core.seq(node);
var chunk__23663 = null;
var count__23664 = (0);
var i__23665 = (0);
while(true){
if((i__23665 < count__23664)){
var n = chunk__23663.cljs$core$IIndexed$_nth$arity$2(null, i__23665);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__25047 = seq__23662;
var G__25048 = chunk__23663;
var G__25049 = count__23664;
var G__25050 = (i__23665 + (1));
seq__23662 = G__25047;
chunk__23663 = G__25048;
count__23664 = G__25049;
i__23665 = G__25050;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23662);
if(temp__5804__auto__){
var seq__23662__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23662__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23662__$1);
var G__25051 = cljs.core.chunk_rest(seq__23662__$1);
var G__25052 = c__5525__auto__;
var G__25053 = cljs.core.count(c__5525__auto__);
var G__25054 = (0);
seq__23662 = G__25051;
chunk__23663 = G__25052;
count__23664 = G__25053;
i__23665 = G__25054;
continue;
} else {
var n = cljs.core.first(seq__23662__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__25055 = cljs.core.next(seq__23662__$1);
var G__25071 = null;
var G__25072 = (0);
var G__25073 = (0);
seq__23662 = G__25055;
chunk__23663 = G__25071;
count__23664 = G__25072;
i__23665 = G__25073;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__23689 = arguments.length;
switch (G__23689) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__23706 = arguments.length;
switch (G__23706) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__23733 = arguments.length;
switch (G__23733) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25095 = arguments.length;
var i__5727__auto___25096 = (0);
while(true){
if((i__5727__auto___25096 < len__5726__auto___25095)){
args__5732__auto__.push((arguments[i__5727__auto___25096]));

var G__25097 = (i__5727__auto___25096 + (1));
i__5727__auto___25096 = G__25097;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__23775_25099 = cljs.core.seq(nodes);
var chunk__23776_25100 = null;
var count__23777_25101 = (0);
var i__23778_25102 = (0);
while(true){
if((i__23778_25102 < count__23777_25101)){
var node_25103 = chunk__23776_25100.cljs$core$IIndexed$_nth$arity$2(null, i__23778_25102);
fragment.appendChild(shadow.dom._to_dom(node_25103));


var G__25104 = seq__23775_25099;
var G__25105 = chunk__23776_25100;
var G__25106 = count__23777_25101;
var G__25107 = (i__23778_25102 + (1));
seq__23775_25099 = G__25104;
chunk__23776_25100 = G__25105;
count__23777_25101 = G__25106;
i__23778_25102 = G__25107;
continue;
} else {
var temp__5804__auto___25108 = cljs.core.seq(seq__23775_25099);
if(temp__5804__auto___25108){
var seq__23775_25109__$1 = temp__5804__auto___25108;
if(cljs.core.chunked_seq_QMARK_(seq__23775_25109__$1)){
var c__5525__auto___25110 = cljs.core.chunk_first(seq__23775_25109__$1);
var G__25111 = cljs.core.chunk_rest(seq__23775_25109__$1);
var G__25112 = c__5525__auto___25110;
var G__25113 = cljs.core.count(c__5525__auto___25110);
var G__25114 = (0);
seq__23775_25099 = G__25111;
chunk__23776_25100 = G__25112;
count__23777_25101 = G__25113;
i__23778_25102 = G__25114;
continue;
} else {
var node_25115 = cljs.core.first(seq__23775_25109__$1);
fragment.appendChild(shadow.dom._to_dom(node_25115));


var G__25116 = cljs.core.next(seq__23775_25109__$1);
var G__25117 = null;
var G__25118 = (0);
var G__25119 = (0);
seq__23775_25099 = G__25116;
chunk__23776_25100 = G__25117;
count__23777_25101 = G__25118;
i__23778_25102 = G__25119;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq23767){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23767));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__23814_25120 = cljs.core.seq(scripts);
var chunk__23819_25121 = null;
var count__23820_25122 = (0);
var i__23821_25123 = (0);
while(true){
if((i__23821_25123 < count__23820_25122)){
var vec__23842_25124 = chunk__23819_25121.cljs$core$IIndexed$_nth$arity$2(null, i__23821_25123);
var script_tag_25125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23842_25124,(0),null);
var script_body_25126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23842_25124,(1),null);
eval(script_body_25126);


var G__25127 = seq__23814_25120;
var G__25128 = chunk__23819_25121;
var G__25129 = count__23820_25122;
var G__25130 = (i__23821_25123 + (1));
seq__23814_25120 = G__25127;
chunk__23819_25121 = G__25128;
count__23820_25122 = G__25129;
i__23821_25123 = G__25130;
continue;
} else {
var temp__5804__auto___25134 = cljs.core.seq(seq__23814_25120);
if(temp__5804__auto___25134){
var seq__23814_25135__$1 = temp__5804__auto___25134;
if(cljs.core.chunked_seq_QMARK_(seq__23814_25135__$1)){
var c__5525__auto___25136 = cljs.core.chunk_first(seq__23814_25135__$1);
var G__25137 = cljs.core.chunk_rest(seq__23814_25135__$1);
var G__25138 = c__5525__auto___25136;
var G__25139 = cljs.core.count(c__5525__auto___25136);
var G__25140 = (0);
seq__23814_25120 = G__25137;
chunk__23819_25121 = G__25138;
count__23820_25122 = G__25139;
i__23821_25123 = G__25140;
continue;
} else {
var vec__23864_25141 = cljs.core.first(seq__23814_25135__$1);
var script_tag_25142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23864_25141,(0),null);
var script_body_25143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23864_25141,(1),null);
eval(script_body_25143);


var G__25144 = cljs.core.next(seq__23814_25135__$1);
var G__25145 = null;
var G__25146 = (0);
var G__25147 = (0);
seq__23814_25120 = G__25144;
chunk__23819_25121 = G__25145;
count__23820_25122 = G__25146;
i__23821_25123 = G__25147;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__23885){
var vec__23886 = p__23885;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23886,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23886,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__23901 = arguments.length;
switch (G__23901) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__23937 = cljs.core.seq(style_keys);
var chunk__23938 = null;
var count__23939 = (0);
var i__23940 = (0);
while(true){
if((i__23940 < count__23939)){
var it = chunk__23938.cljs$core$IIndexed$_nth$arity$2(null, i__23940);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__25154 = seq__23937;
var G__25155 = chunk__23938;
var G__25156 = count__23939;
var G__25157 = (i__23940 + (1));
seq__23937 = G__25154;
chunk__23938 = G__25155;
count__23939 = G__25156;
i__23940 = G__25157;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23937);
if(temp__5804__auto__){
var seq__23937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23937__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23937__$1);
var G__25162 = cljs.core.chunk_rest(seq__23937__$1);
var G__25163 = c__5525__auto__;
var G__25164 = cljs.core.count(c__5525__auto__);
var G__25165 = (0);
seq__23937 = G__25162;
chunk__23938 = G__25163;
count__23939 = G__25164;
i__23940 = G__25165;
continue;
} else {
var it = cljs.core.first(seq__23937__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__25166 = cljs.core.next(seq__23937__$1);
var G__25167 = null;
var G__25168 = (0);
var G__25169 = (0);
seq__23937 = G__25166;
chunk__23938 = G__25167;
count__23939 = G__25168;
i__23940 = G__25169;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k23962,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__23978 = k23962;
var G__23978__$1 = (((G__23978 instanceof cljs.core.Keyword))?G__23978.fqn:null);
switch (G__23978__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23962,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__23988){
var vec__23989 = p__23988;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23989,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23989,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23961){
var self__ = this;
var G__23961__$1 = this;
return (new cljs.core.RecordIter((0),G__23961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23963,other23964){
var self__ = this;
var this23963__$1 = this;
return (((!((other23964 == null)))) && ((((this23963__$1.constructor === other23964.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23963__$1.x,other23964.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23963__$1.y,other23964.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23963__$1.__extmap,other23964.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k23962){
var self__ = this;
var this__5307__auto____$1 = this;
var G__24012 = k23962;
var G__24012__$1 = (((G__24012 instanceof cljs.core.Keyword))?G__24012.fqn:null);
switch (G__24012__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23962);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__23961){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__24019 = cljs.core.keyword_identical_QMARK_;
var expr__24020 = k__5309__auto__;
if(cljs.core.truth_((pred__24019.cljs$core$IFn$_invoke$arity$2 ? pred__24019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__24020) : pred__24019.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__24020)))){
return (new shadow.dom.Coordinate(G__23961,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24019.cljs$core$IFn$_invoke$arity$2 ? pred__24019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__24020) : pred__24019.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__24020)))){
return (new shadow.dom.Coordinate(self__.x,G__23961,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__23961),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__23961){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__23961,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__23968){
var extmap__5342__auto__ = (function (){var G__24038 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23968,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__23968)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24038);
} else {
return G__24038;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__23968),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__23968),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k24050,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__24065 = k24050;
var G__24065__$1 = (((G__24065 instanceof cljs.core.Keyword))?G__24065.fqn:null);
switch (G__24065__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24050,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__24068){
var vec__24070 = p__24068;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24049){
var self__ = this;
var G__24049__$1 = this;
return (new cljs.core.RecordIter((0),G__24049__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24051,other24052){
var self__ = this;
var this24051__$1 = this;
return (((!((other24052 == null)))) && ((((this24051__$1.constructor === other24052.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24051__$1.w,other24052.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24051__$1.h,other24052.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24051__$1.__extmap,other24052.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k24050){
var self__ = this;
var this__5307__auto____$1 = this;
var G__24110 = k24050;
var G__24110__$1 = (((G__24110 instanceof cljs.core.Keyword))?G__24110.fqn:null);
switch (G__24110__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24050);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__24049){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__24112 = cljs.core.keyword_identical_QMARK_;
var expr__24113 = k__5309__auto__;
if(cljs.core.truth_((pred__24112.cljs$core$IFn$_invoke$arity$2 ? pred__24112.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__24113) : pred__24112.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__24113)))){
return (new shadow.dom.Size(G__24049,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24112.cljs$core$IFn$_invoke$arity$2 ? pred__24112.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__24113) : pred__24112.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__24113)))){
return (new shadow.dom.Size(self__.w,G__24049,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__24049),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__24049){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__24049,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__24055){
var extmap__5342__auto__ = (function (){var G__24139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24055,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__24055)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24139);
} else {
return G__24139;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__24055),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__24055),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__25218 = (i + (1));
var G__25219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__25218;
ret = G__25219;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24179){
var vec__24181 = p__24179;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24181,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__24206 = arguments.length;
switch (G__24206) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__25232 = ps;
var G__25233 = (i + (1));
el__$1 = G__25232;
i = G__25233;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__24347 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24347,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__24364_25247 = cljs.core.seq(props);
var chunk__24365_25248 = null;
var count__24366_25249 = (0);
var i__24367_25250 = (0);
while(true){
if((i__24367_25250 < count__24366_25249)){
var vec__24433_25251 = chunk__24365_25248.cljs$core$IIndexed$_nth$arity$2(null, i__24367_25250);
var k_25252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433_25251,(0),null);
var v_25253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433_25251,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_25252);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_25252),v_25253);


var G__25254 = seq__24364_25247;
var G__25255 = chunk__24365_25248;
var G__25256 = count__24366_25249;
var G__25257 = (i__24367_25250 + (1));
seq__24364_25247 = G__25254;
chunk__24365_25248 = G__25255;
count__24366_25249 = G__25256;
i__24367_25250 = G__25257;
continue;
} else {
var temp__5804__auto___25258 = cljs.core.seq(seq__24364_25247);
if(temp__5804__auto___25258){
var seq__24364_25259__$1 = temp__5804__auto___25258;
if(cljs.core.chunked_seq_QMARK_(seq__24364_25259__$1)){
var c__5525__auto___25260 = cljs.core.chunk_first(seq__24364_25259__$1);
var G__25261 = cljs.core.chunk_rest(seq__24364_25259__$1);
var G__25262 = c__5525__auto___25260;
var G__25263 = cljs.core.count(c__5525__auto___25260);
var G__25264 = (0);
seq__24364_25247 = G__25261;
chunk__24365_25248 = G__25262;
count__24366_25249 = G__25263;
i__24367_25250 = G__25264;
continue;
} else {
var vec__24440_25265 = cljs.core.first(seq__24364_25259__$1);
var k_25266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440_25265,(0),null);
var v_25267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440_25265,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_25266);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_25266),v_25267);


var G__25268 = cljs.core.next(seq__24364_25259__$1);
var G__25269 = null;
var G__25270 = (0);
var G__25271 = (0);
seq__24364_25247 = G__25268;
chunk__24365_25248 = G__25269;
count__24366_25249 = G__25270;
i__24367_25250 = G__25271;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__24459 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24459,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24459,(1),null);
var seq__24462_25274 = cljs.core.seq(node_children);
var chunk__24464_25275 = null;
var count__24465_25276 = (0);
var i__24466_25277 = (0);
while(true){
if((i__24466_25277 < count__24465_25276)){
var child_struct_25279 = chunk__24464_25275.cljs$core$IIndexed$_nth$arity$2(null, i__24466_25277);
if((!((child_struct_25279 == null)))){
if(typeof child_struct_25279 === 'string'){
var text_25280 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_25280),child_struct_25279].join(''));
} else {
var children_25281 = shadow.dom.svg_node(child_struct_25279);
if(cljs.core.seq_QMARK_(children_25281)){
var seq__24630_25282 = cljs.core.seq(children_25281);
var chunk__24632_25283 = null;
var count__24633_25284 = (0);
var i__24634_25285 = (0);
while(true){
if((i__24634_25285 < count__24633_25284)){
var child_25286 = chunk__24632_25283.cljs$core$IIndexed$_nth$arity$2(null, i__24634_25285);
if(cljs.core.truth_(child_25286)){
node.appendChild(child_25286);


var G__25287 = seq__24630_25282;
var G__25288 = chunk__24632_25283;
var G__25289 = count__24633_25284;
var G__25290 = (i__24634_25285 + (1));
seq__24630_25282 = G__25287;
chunk__24632_25283 = G__25288;
count__24633_25284 = G__25289;
i__24634_25285 = G__25290;
continue;
} else {
var G__25291 = seq__24630_25282;
var G__25292 = chunk__24632_25283;
var G__25293 = count__24633_25284;
var G__25294 = (i__24634_25285 + (1));
seq__24630_25282 = G__25291;
chunk__24632_25283 = G__25292;
count__24633_25284 = G__25293;
i__24634_25285 = G__25294;
continue;
}
} else {
var temp__5804__auto___25295 = cljs.core.seq(seq__24630_25282);
if(temp__5804__auto___25295){
var seq__24630_25296__$1 = temp__5804__auto___25295;
if(cljs.core.chunked_seq_QMARK_(seq__24630_25296__$1)){
var c__5525__auto___25297 = cljs.core.chunk_first(seq__24630_25296__$1);
var G__25298 = cljs.core.chunk_rest(seq__24630_25296__$1);
var G__25299 = c__5525__auto___25297;
var G__25300 = cljs.core.count(c__5525__auto___25297);
var G__25301 = (0);
seq__24630_25282 = G__25298;
chunk__24632_25283 = G__25299;
count__24633_25284 = G__25300;
i__24634_25285 = G__25301;
continue;
} else {
var child_25302 = cljs.core.first(seq__24630_25296__$1);
if(cljs.core.truth_(child_25302)){
node.appendChild(child_25302);


var G__25306 = cljs.core.next(seq__24630_25296__$1);
var G__25308 = null;
var G__25309 = (0);
var G__25310 = (0);
seq__24630_25282 = G__25306;
chunk__24632_25283 = G__25308;
count__24633_25284 = G__25309;
i__24634_25285 = G__25310;
continue;
} else {
var G__25312 = cljs.core.next(seq__24630_25296__$1);
var G__25313 = null;
var G__25314 = (0);
var G__25315 = (0);
seq__24630_25282 = G__25312;
chunk__24632_25283 = G__25313;
count__24633_25284 = G__25314;
i__24634_25285 = G__25315;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_25281);
}
}


var G__25317 = seq__24462_25274;
var G__25318 = chunk__24464_25275;
var G__25319 = count__24465_25276;
var G__25320 = (i__24466_25277 + (1));
seq__24462_25274 = G__25317;
chunk__24464_25275 = G__25318;
count__24465_25276 = G__25319;
i__24466_25277 = G__25320;
continue;
} else {
var G__25321 = seq__24462_25274;
var G__25322 = chunk__24464_25275;
var G__25323 = count__24465_25276;
var G__25324 = (i__24466_25277 + (1));
seq__24462_25274 = G__25321;
chunk__24464_25275 = G__25322;
count__24465_25276 = G__25323;
i__24466_25277 = G__25324;
continue;
}
} else {
var temp__5804__auto___25325 = cljs.core.seq(seq__24462_25274);
if(temp__5804__auto___25325){
var seq__24462_25327__$1 = temp__5804__auto___25325;
if(cljs.core.chunked_seq_QMARK_(seq__24462_25327__$1)){
var c__5525__auto___25328 = cljs.core.chunk_first(seq__24462_25327__$1);
var G__25329 = cljs.core.chunk_rest(seq__24462_25327__$1);
var G__25330 = c__5525__auto___25328;
var G__25331 = cljs.core.count(c__5525__auto___25328);
var G__25332 = (0);
seq__24462_25274 = G__25329;
chunk__24464_25275 = G__25330;
count__24465_25276 = G__25331;
i__24466_25277 = G__25332;
continue;
} else {
var child_struct_25333 = cljs.core.first(seq__24462_25327__$1);
if((!((child_struct_25333 == null)))){
if(typeof child_struct_25333 === 'string'){
var text_25335 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_25335),child_struct_25333].join(''));
} else {
var children_25337 = shadow.dom.svg_node(child_struct_25333);
if(cljs.core.seq_QMARK_(children_25337)){
var seq__24663_25338 = cljs.core.seq(children_25337);
var chunk__24665_25339 = null;
var count__24666_25340 = (0);
var i__24667_25341 = (0);
while(true){
if((i__24667_25341 < count__24666_25340)){
var child_25342 = chunk__24665_25339.cljs$core$IIndexed$_nth$arity$2(null, i__24667_25341);
if(cljs.core.truth_(child_25342)){
node.appendChild(child_25342);


var G__25343 = seq__24663_25338;
var G__25344 = chunk__24665_25339;
var G__25345 = count__24666_25340;
var G__25346 = (i__24667_25341 + (1));
seq__24663_25338 = G__25343;
chunk__24665_25339 = G__25344;
count__24666_25340 = G__25345;
i__24667_25341 = G__25346;
continue;
} else {
var G__25347 = seq__24663_25338;
var G__25348 = chunk__24665_25339;
var G__25349 = count__24666_25340;
var G__25350 = (i__24667_25341 + (1));
seq__24663_25338 = G__25347;
chunk__24665_25339 = G__25348;
count__24666_25340 = G__25349;
i__24667_25341 = G__25350;
continue;
}
} else {
var temp__5804__auto___25351__$1 = cljs.core.seq(seq__24663_25338);
if(temp__5804__auto___25351__$1){
var seq__24663_25352__$1 = temp__5804__auto___25351__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24663_25352__$1)){
var c__5525__auto___25353 = cljs.core.chunk_first(seq__24663_25352__$1);
var G__25354 = cljs.core.chunk_rest(seq__24663_25352__$1);
var G__25355 = c__5525__auto___25353;
var G__25356 = cljs.core.count(c__5525__auto___25353);
var G__25357 = (0);
seq__24663_25338 = G__25354;
chunk__24665_25339 = G__25355;
count__24666_25340 = G__25356;
i__24667_25341 = G__25357;
continue;
} else {
var child_25361 = cljs.core.first(seq__24663_25352__$1);
if(cljs.core.truth_(child_25361)){
node.appendChild(child_25361);


var G__25362 = cljs.core.next(seq__24663_25352__$1);
var G__25363 = null;
var G__25364 = (0);
var G__25365 = (0);
seq__24663_25338 = G__25362;
chunk__24665_25339 = G__25363;
count__24666_25340 = G__25364;
i__24667_25341 = G__25365;
continue;
} else {
var G__25366 = cljs.core.next(seq__24663_25352__$1);
var G__25367 = null;
var G__25368 = (0);
var G__25369 = (0);
seq__24663_25338 = G__25366;
chunk__24665_25339 = G__25367;
count__24666_25340 = G__25368;
i__24667_25341 = G__25369;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_25337);
}
}


var G__25370 = cljs.core.next(seq__24462_25327__$1);
var G__25371 = null;
var G__25372 = (0);
var G__25373 = (0);
seq__24462_25274 = G__25370;
chunk__24464_25275 = G__25371;
count__24465_25276 = G__25372;
i__24466_25277 = G__25373;
continue;
} else {
var G__25374 = cljs.core.next(seq__24462_25327__$1);
var G__25375 = null;
var G__25376 = (0);
var G__25377 = (0);
seq__24462_25274 = G__25374;
chunk__24464_25275 = G__25375;
count__24465_25276 = G__25376;
i__24466_25277 = G__25377;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___25382 = arguments.length;
var i__5727__auto___25383 = (0);
while(true){
if((i__5727__auto___25383 < len__5726__auto___25382)){
args__5732__auto__.push((arguments[i__5727__auto___25383]));

var G__25384 = (i__5727__auto___25383 + (1));
i__5727__auto___25383 = G__25384;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq24703){
var G__24704 = cljs.core.first(seq24703);
var seq24703__$1 = cljs.core.next(seq24703);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24704,seq24703__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__24724 = arguments.length;
switch (G__24724) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__19589__auto___25396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_24751){
var state_val_24752 = (state_24751[(1)]);
if((state_val_24752 === (1))){
var state_24751__$1 = state_24751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24751__$1,(2),once_or_cleanup);
} else {
if((state_val_24752 === (2))){
var inst_24746 = (state_24751[(2)]);
var inst_24748 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_24751__$1 = (function (){var statearr_24756 = state_24751;
(statearr_24756[(7)] = inst_24746);

return statearr_24756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24751__$1,inst_24748);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__19298__auto__ = null;
var shadow$dom$state_machine__19298__auto____0 = (function (){
var statearr_24758 = [null,null,null,null,null,null,null,null];
(statearr_24758[(0)] = shadow$dom$state_machine__19298__auto__);

(statearr_24758[(1)] = (1));

return statearr_24758;
});
var shadow$dom$state_machine__19298__auto____1 = (function (state_24751){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_24751);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e24761){var ex__19301__auto__ = e24761;
var statearr_24763_25402 = state_24751;
(statearr_24763_25402[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_24751[(4)]))){
var statearr_24768_25406 = state_24751;
(statearr_24768_25406[(1)] = cljs.core.first((state_24751[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25410 = state_24751;
state_24751 = G__25410;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
shadow$dom$state_machine__19298__auto__ = function(state_24751){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__19298__auto____0.call(this);
case 1:
return shadow$dom$state_machine__19298__auto____1.call(this,state_24751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__19298__auto____0;
shadow$dom$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__19298__auto____1;
return shadow$dom$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_24770 = f__19590__auto__();
(statearr_24770[(6)] = c__19589__auto___25396);

return statearr_24770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
