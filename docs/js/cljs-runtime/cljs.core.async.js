goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19731 = (function (f,blockable,meta19732){
this.f = f;
this.blockable = blockable;
this.meta19732 = meta19732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19733,meta19732__$1){
var self__ = this;
var _19733__$1 = this;
return (new cljs.core.async.t_cljs$core$async19731(self__.f,self__.blockable,meta19732__$1));
}));

(cljs.core.async.t_cljs$core$async19731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19733){
var self__ = this;
var _19733__$1 = this;
return self__.meta19732;
}));

(cljs.core.async.t_cljs$core$async19731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async19731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async19731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19732","meta19732",1014560668,null)], null);
}));

(cljs.core.async.t_cljs$core$async19731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19731");

(cljs.core.async.t_cljs$core$async19731.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19731.
 */
cljs.core.async.__GT_t_cljs$core$async19731 = (function cljs$core$async$__GT_t_cljs$core$async19731(f,blockable,meta19732){
return (new cljs.core.async.t_cljs$core$async19731(f,blockable,meta19732));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__19729 = arguments.length;
switch (G__19729) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async19731(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__19747 = arguments.length;
switch (G__19747) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__19761 = arguments.length;
switch (G__19761) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__19775 = arguments.length;
switch (G__19775) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_23098 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23098) : fn1.call(null, val_23098));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23098) : fn1.call(null, val_23098));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__19805 = arguments.length;
switch (G__19805) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___23115 = n;
var x_23116 = (0);
while(true){
if((x_23116 < n__5593__auto___23115)){
(a[x_23116] = x_23116);

var G__23117 = (x_23116 + (1));
x_23116 = G__23117;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19827 = (function (flag,meta19828){
this.flag = flag;
this.meta19828 = meta19828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19829,meta19828__$1){
var self__ = this;
var _19829__$1 = this;
return (new cljs.core.async.t_cljs$core$async19827(self__.flag,meta19828__$1));
}));

(cljs.core.async.t_cljs$core$async19827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19829){
var self__ = this;
var _19829__$1 = this;
return self__.meta19828;
}));

(cljs.core.async.t_cljs$core$async19827.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19827.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async19827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19828","meta19828",-1512688931,null)], null);
}));

(cljs.core.async.t_cljs$core$async19827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19827");

(cljs.core.async.t_cljs$core$async19827.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19827.
 */
cljs.core.async.__GT_t_cljs$core$async19827 = (function cljs$core$async$__GT_t_cljs$core$async19827(flag,meta19828){
return (new cljs.core.async.t_cljs$core$async19827(flag,meta19828));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async19827(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19836 = (function (flag,cb,meta19837){
this.flag = flag;
this.cb = cb;
this.meta19837 = meta19837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19838,meta19837__$1){
var self__ = this;
var _19838__$1 = this;
return (new cljs.core.async.t_cljs$core$async19836(self__.flag,self__.cb,meta19837__$1));
}));

(cljs.core.async.t_cljs$core$async19836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19838){
var self__ = this;
var _19838__$1 = this;
return self__.meta19837;
}));

(cljs.core.async.t_cljs$core$async19836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async19836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19837","meta19837",-1222759226,null)], null);
}));

(cljs.core.async.t_cljs$core$async19836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19836");

(cljs.core.async.t_cljs$core$async19836.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19836.
 */
cljs.core.async.__GT_t_cljs$core$async19836 = (function cljs$core$async$__GT_t_cljs$core$async19836(flag,cb,meta19837){
return (new cljs.core.async.t_cljs$core$async19836(flag,cb,meta19837));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async19836(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19868_SHARP_){
var G__19877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19868_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19877) : fret.call(null, G__19877));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19869_SHARP_){
var G__19878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19869_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19878) : fret.call(null, G__19878));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23130 = (i + (1));
i = G__23130;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23156 = arguments.length;
var i__5727__auto___23157 = (0);
while(true){
if((i__5727__auto___23157 < len__5726__auto___23156)){
args__5732__auto__.push((arguments[i__5727__auto___23157]));

var G__23158 = (i__5727__auto___23157 + (1));
i__5727__auto___23157 = G__23158;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19906){
var map__19907 = p__19906;
var map__19907__$1 = cljs.core.__destructure_map(map__19907);
var opts = map__19907__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19897){
var G__19902 = cljs.core.first(seq19897);
var seq19897__$1 = cljs.core.next(seq19897);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19902,seq19897__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__19944 = arguments.length;
switch (G__19944) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19589__auto___23177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20070){
var state_val_20071 = (state_20070[(1)]);
if((state_val_20071 === (7))){
var inst_20056 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20077_23178 = state_20070__$1;
(statearr_20077_23178[(2)] = inst_20056);

(statearr_20077_23178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (1))){
var state_20070__$1 = state_20070;
var statearr_20079_23180 = state_20070__$1;
(statearr_20079_23180[(2)] = null);

(statearr_20079_23180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (4))){
var inst_20027 = (state_20070[(7)]);
var inst_20027__$1 = (state_20070[(2)]);
var inst_20031 = (inst_20027__$1 == null);
var state_20070__$1 = (function (){var statearr_20083 = state_20070;
(statearr_20083[(7)] = inst_20027__$1);

return statearr_20083;
})();
if(cljs.core.truth_(inst_20031)){
var statearr_20084_23183 = state_20070__$1;
(statearr_20084_23183[(1)] = (5));

} else {
var statearr_20085_23184 = state_20070__$1;
(statearr_20085_23184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (13))){
var state_20070__$1 = state_20070;
var statearr_20086_23185 = state_20070__$1;
(statearr_20086_23185[(2)] = null);

(statearr_20086_23185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (6))){
var inst_20027 = (state_20070[(7)]);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20070__$1,(11),to,inst_20027);
} else {
if((state_val_20071 === (3))){
var inst_20060 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20070__$1,inst_20060);
} else {
if((state_val_20071 === (12))){
var state_20070__$1 = state_20070;
var statearr_20137_23187 = state_20070__$1;
(statearr_20137_23187[(2)] = null);

(statearr_20137_23187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (2))){
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20070__$1,(4),from);
} else {
if((state_val_20071 === (11))){
var inst_20047 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
if(cljs.core.truth_(inst_20047)){
var statearr_20142_23200 = state_20070__$1;
(statearr_20142_23200[(1)] = (12));

} else {
var statearr_20143_23202 = state_20070__$1;
(statearr_20143_23202[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (9))){
var state_20070__$1 = state_20070;
var statearr_20144_23203 = state_20070__$1;
(statearr_20144_23203[(2)] = null);

(statearr_20144_23203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (5))){
var state_20070__$1 = state_20070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20145_23209 = state_20070__$1;
(statearr_20145_23209[(1)] = (8));

} else {
var statearr_20146_23210 = state_20070__$1;
(statearr_20146_23210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (14))){
var inst_20054 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20148_23211 = state_20070__$1;
(statearr_20148_23211[(2)] = inst_20054);

(statearr_20148_23211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (10))){
var inst_20044 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20152_23212 = state_20070__$1;
(statearr_20152_23212[(2)] = inst_20044);

(statearr_20152_23212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (8))){
var inst_20034 = cljs.core.async.close_BANG_(to);
var state_20070__$1 = state_20070;
var statearr_20154_23214 = state_20070__$1;
(statearr_20154_23214[(2)] = inst_20034);

(statearr_20154_23214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_20155 = [null,null,null,null,null,null,null,null];
(statearr_20155[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_20155[(1)] = (1));

return statearr_20155;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_20070){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20070);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20157){var ex__19301__auto__ = e20157;
var statearr_20158_23220 = state_20070;
(statearr_20158_23220[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20070[(4)]))){
var statearr_20159_23221 = state_20070;
(statearr_20159_23221[(1)] = cljs.core.first((state_20070[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23223 = state_20070;
state_20070 = G__23223;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_20070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_20070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20164 = f__19590__auto__();
(statearr_20164[(6)] = c__19589__auto___23177);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__20183){
var vec__20186 = p__20183;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20186,(1),null);
var job = vec__20186;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__19589__auto___23236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20197){
var state_val_20198 = (state_20197[(1)]);
if((state_val_20198 === (1))){
var state_20197__$1 = state_20197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20197__$1,(2),res,v);
} else {
if((state_val_20198 === (2))){
var inst_20193 = (state_20197[(2)]);
var inst_20194 = cljs.core.async.close_BANG_(res);
var state_20197__$1 = (function (){var statearr_20203 = state_20197;
(statearr_20203[(7)] = inst_20193);

return statearr_20203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20197__$1,inst_20194);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0 = (function (){
var statearr_20207 = [null,null,null,null,null,null,null,null];
(statearr_20207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__);

(statearr_20207[(1)] = (1));

return statearr_20207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1 = (function (state_20197){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20197);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20210){var ex__19301__auto__ = e20210;
var statearr_20211_23252 = state_20197;
(statearr_20211_23252[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20197[(4)]))){
var statearr_20212_23253 = state_20197;
(statearr_20212_23253[(1)] = cljs.core.first((state_20197[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23260 = state_20197;
state_20197 = G__23260;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = function(state_20197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1.call(this,state_20197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20213 = f__19590__auto__();
(statearr_20213[(6)] = c__19589__auto___23236);

return statearr_20213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__20215){
var vec__20216 = p__20215;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20216,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20216,(1),null);
var job = vec__20216;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___23265 = n;
var __23272 = (0);
while(true){
if((__23272 < n__5593__auto___23265)){
var G__20223_23273 = type;
var G__20223_23274__$1 = (((G__20223_23273 instanceof cljs.core.Keyword))?G__20223_23273.fqn:null);
switch (G__20223_23274__$1) {
case "compute":
var c__19589__auto___23276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23272,c__19589__auto___23276,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async){
return (function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = ((function (__23272,c__19589__auto___23276,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async){
return (function (state_20239){
var state_val_20240 = (state_20239[(1)]);
if((state_val_20240 === (1))){
var state_20239__$1 = state_20239;
var statearr_20242_23277 = state_20239__$1;
(statearr_20242_23277[(2)] = null);

(statearr_20242_23277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (2))){
var state_20239__$1 = state_20239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20239__$1,(4),jobs);
} else {
if((state_val_20240 === (3))){
var inst_20237 = (state_20239[(2)]);
var state_20239__$1 = state_20239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20239__$1,inst_20237);
} else {
if((state_val_20240 === (4))){
var inst_20228 = (state_20239[(2)]);
var inst_20229 = process__$1(inst_20228);
var state_20239__$1 = state_20239;
if(cljs.core.truth_(inst_20229)){
var statearr_20244_23278 = state_20239__$1;
(statearr_20244_23278[(1)] = (5));

} else {
var statearr_20245_23279 = state_20239__$1;
(statearr_20245_23279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (5))){
var state_20239__$1 = state_20239;
var statearr_20246_23280 = state_20239__$1;
(statearr_20246_23280[(2)] = null);

(statearr_20246_23280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (6))){
var state_20239__$1 = state_20239;
var statearr_20247_23281 = state_20239__$1;
(statearr_20247_23281[(2)] = null);

(statearr_20247_23281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20240 === (7))){
var inst_20235 = (state_20239[(2)]);
var state_20239__$1 = state_20239;
var statearr_20248_23283 = state_20239__$1;
(statearr_20248_23283[(2)] = inst_20235);

(statearr_20248_23283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23272,c__19589__auto___23276,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async))
;
return ((function (__23272,switch__19297__auto__,c__19589__auto___23276,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0 = (function (){
var statearr_20258 = [null,null,null,null,null,null,null];
(statearr_20258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__);

(statearr_20258[(1)] = (1));

return statearr_20258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1 = (function (state_20239){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20239);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20265){var ex__19301__auto__ = e20265;
var statearr_20266_23288 = state_20239;
(statearr_20266_23288[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20239[(4)]))){
var statearr_20272_23289 = state_20239;
(statearr_20272_23289[(1)] = cljs.core.first((state_20239[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23290 = state_20239;
state_20239 = G__23290;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = function(state_20239){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1.call(this,state_20239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__;
})()
;})(__23272,switch__19297__auto__,c__19589__auto___23276,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async))
})();
var state__19591__auto__ = (function (){var statearr_20279 = f__19590__auto__();
(statearr_20279[(6)] = c__19589__auto___23276);

return statearr_20279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
});})(__23272,c__19589__auto___23276,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async))
);


break;
case "async":
var c__19589__auto___23291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23272,c__19589__auto___23291,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async){
return (function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = ((function (__23272,c__19589__auto___23291,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async){
return (function (state_20301){
var state_val_20302 = (state_20301[(1)]);
if((state_val_20302 === (1))){
var state_20301__$1 = state_20301;
var statearr_20303_23298 = state_20301__$1;
(statearr_20303_23298[(2)] = null);

(statearr_20303_23298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (2))){
var state_20301__$1 = state_20301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20301__$1,(4),jobs);
} else {
if((state_val_20302 === (3))){
var inst_20299 = (state_20301[(2)]);
var state_20301__$1 = state_20301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20301__$1,inst_20299);
} else {
if((state_val_20302 === (4))){
var inst_20289 = (state_20301[(2)]);
var inst_20291 = async(inst_20289);
var state_20301__$1 = state_20301;
if(cljs.core.truth_(inst_20291)){
var statearr_20305_23299 = state_20301__$1;
(statearr_20305_23299[(1)] = (5));

} else {
var statearr_20306_23300 = state_20301__$1;
(statearr_20306_23300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (5))){
var state_20301__$1 = state_20301;
var statearr_20307_23301 = state_20301__$1;
(statearr_20307_23301[(2)] = null);

(statearr_20307_23301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (6))){
var state_20301__$1 = state_20301;
var statearr_20308_23304 = state_20301__$1;
(statearr_20308_23304[(2)] = null);

(statearr_20308_23304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (7))){
var inst_20297 = (state_20301[(2)]);
var state_20301__$1 = state_20301;
var statearr_20309_23312 = state_20301__$1;
(statearr_20309_23312[(2)] = inst_20297);

(statearr_20309_23312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23272,c__19589__auto___23291,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async))
;
return ((function (__23272,switch__19297__auto__,c__19589__auto___23291,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0 = (function (){
var statearr_20310 = [null,null,null,null,null,null,null];
(statearr_20310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__);

(statearr_20310[(1)] = (1));

return statearr_20310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1 = (function (state_20301){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20301);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20311){var ex__19301__auto__ = e20311;
var statearr_20312_23315 = state_20301;
(statearr_20312_23315[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20301[(4)]))){
var statearr_20314_23317 = state_20301;
(statearr_20314_23317[(1)] = cljs.core.first((state_20301[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23321 = state_20301;
state_20301 = G__23321;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = function(state_20301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1.call(this,state_20301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__;
})()
;})(__23272,switch__19297__auto__,c__19589__auto___23291,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async))
})();
var state__19591__auto__ = (function (){var statearr_20317 = f__19590__auto__();
(statearr_20317[(6)] = c__19589__auto___23291);

return statearr_20317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
});})(__23272,c__19589__auto___23291,G__20223_23273,G__20223_23274__$1,n__5593__auto___23265,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20223_23274__$1)].join('')));

}

var G__23323 = (__23272 + (1));
__23272 = G__23323;
continue;
} else {
}
break;
}

var c__19589__auto___23324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20344){
var state_val_20348 = (state_20344[(1)]);
if((state_val_20348 === (7))){
var inst_20340 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
var statearr_20353_23328 = state_20344__$1;
(statearr_20353_23328[(2)] = inst_20340);

(statearr_20353_23328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (1))){
var state_20344__$1 = state_20344;
var statearr_20354_23329 = state_20344__$1;
(statearr_20354_23329[(2)] = null);

(statearr_20354_23329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (4))){
var inst_20323 = (state_20344[(7)]);
var inst_20323__$1 = (state_20344[(2)]);
var inst_20325 = (inst_20323__$1 == null);
var state_20344__$1 = (function (){var statearr_20361 = state_20344;
(statearr_20361[(7)] = inst_20323__$1);

return statearr_20361;
})();
if(cljs.core.truth_(inst_20325)){
var statearr_20363_23330 = state_20344__$1;
(statearr_20363_23330[(1)] = (5));

} else {
var statearr_20364_23331 = state_20344__$1;
(statearr_20364_23331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (6))){
var inst_20323 = (state_20344[(7)]);
var inst_20329 = (state_20344[(8)]);
var inst_20329__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20332 = [inst_20323,inst_20329__$1];
var inst_20333 = (new cljs.core.PersistentVector(null,2,(5),inst_20331,inst_20332,null));
var state_20344__$1 = (function (){var statearr_20369 = state_20344;
(statearr_20369[(8)] = inst_20329__$1);

return statearr_20369;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20344__$1,(8),jobs,inst_20333);
} else {
if((state_val_20348 === (3))){
var inst_20342 = (state_20344[(2)]);
var state_20344__$1 = state_20344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20344__$1,inst_20342);
} else {
if((state_val_20348 === (2))){
var state_20344__$1 = state_20344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20344__$1,(4),from);
} else {
if((state_val_20348 === (9))){
var inst_20337 = (state_20344[(2)]);
var state_20344__$1 = (function (){var statearr_20373 = state_20344;
(statearr_20373[(9)] = inst_20337);

return statearr_20373;
})();
var statearr_20374_23335 = state_20344__$1;
(statearr_20374_23335[(2)] = null);

(statearr_20374_23335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (5))){
var inst_20327 = cljs.core.async.close_BANG_(jobs);
var state_20344__$1 = state_20344;
var statearr_20375_23338 = state_20344__$1;
(statearr_20375_23338[(2)] = inst_20327);

(statearr_20375_23338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20348 === (8))){
var inst_20329 = (state_20344[(8)]);
var inst_20335 = (state_20344[(2)]);
var state_20344__$1 = (function (){var statearr_20376 = state_20344;
(statearr_20376[(10)] = inst_20335);

return statearr_20376;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20344__$1,(9),results,inst_20329);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0 = (function (){
var statearr_20381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__);

(statearr_20381[(1)] = (1));

return statearr_20381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1 = (function (state_20344){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20344);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20382){var ex__19301__auto__ = e20382;
var statearr_20383_23340 = state_20344;
(statearr_20383_23340[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20344[(4)]))){
var statearr_20384_23341 = state_20344;
(statearr_20384_23341[(1)] = cljs.core.first((state_20344[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23342 = state_20344;
state_20344 = G__23342;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = function(state_20344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1.call(this,state_20344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20389 = f__19590__auto__();
(statearr_20389[(6)] = c__19589__auto___23324);

return statearr_20389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


var c__19589__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20444){
var state_val_20445 = (state_20444[(1)]);
if((state_val_20445 === (7))){
var inst_20440 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20454_23347 = state_20444__$1;
(statearr_20454_23347[(2)] = inst_20440);

(statearr_20454_23347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (20))){
var state_20444__$1 = state_20444;
var statearr_20457_23358 = state_20444__$1;
(statearr_20457_23358[(2)] = null);

(statearr_20457_23358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (1))){
var state_20444__$1 = state_20444;
var statearr_20459_23359 = state_20444__$1;
(statearr_20459_23359[(2)] = null);

(statearr_20459_23359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (4))){
var inst_20392 = (state_20444[(7)]);
var inst_20392__$1 = (state_20444[(2)]);
var inst_20393 = (inst_20392__$1 == null);
var state_20444__$1 = (function (){var statearr_20466 = state_20444;
(statearr_20466[(7)] = inst_20392__$1);

return statearr_20466;
})();
if(cljs.core.truth_(inst_20393)){
var statearr_20468_23363 = state_20444__$1;
(statearr_20468_23363[(1)] = (5));

} else {
var statearr_20469_23364 = state_20444__$1;
(statearr_20469_23364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (15))){
var inst_20418 = (state_20444[(8)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20444__$1,(18),to,inst_20418);
} else {
if((state_val_20445 === (21))){
var inst_20435 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20470_23370 = state_20444__$1;
(statearr_20470_23370[(2)] = inst_20435);

(statearr_20470_23370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (13))){
var inst_20437 = (state_20444[(2)]);
var state_20444__$1 = (function (){var statearr_20476 = state_20444;
(statearr_20476[(9)] = inst_20437);

return statearr_20476;
})();
var statearr_20477_23372 = state_20444__$1;
(statearr_20477_23372[(2)] = null);

(statearr_20477_23372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (6))){
var inst_20392 = (state_20444[(7)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20444__$1,(11),inst_20392);
} else {
if((state_val_20445 === (17))){
var inst_20430 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
if(cljs.core.truth_(inst_20430)){
var statearr_20478_23376 = state_20444__$1;
(statearr_20478_23376[(1)] = (19));

} else {
var statearr_20479_23383 = state_20444__$1;
(statearr_20479_23383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (3))){
var inst_20442 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20444__$1,inst_20442);
} else {
if((state_val_20445 === (12))){
var inst_20408 = (state_20444[(10)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20444__$1,(14),inst_20408);
} else {
if((state_val_20445 === (2))){
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20444__$1,(4),results);
} else {
if((state_val_20445 === (19))){
var state_20444__$1 = state_20444;
var statearr_20484_23387 = state_20444__$1;
(statearr_20484_23387[(2)] = null);

(statearr_20484_23387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (11))){
var inst_20408 = (state_20444[(2)]);
var state_20444__$1 = (function (){var statearr_20490 = state_20444;
(statearr_20490[(10)] = inst_20408);

return statearr_20490;
})();
var statearr_20491_23393 = state_20444__$1;
(statearr_20491_23393[(2)] = null);

(statearr_20491_23393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (9))){
var state_20444__$1 = state_20444;
var statearr_20495_23401 = state_20444__$1;
(statearr_20495_23401[(2)] = null);

(statearr_20495_23401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (5))){
var state_20444__$1 = state_20444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20496_23405 = state_20444__$1;
(statearr_20496_23405[(1)] = (8));

} else {
var statearr_20497_23406 = state_20444__$1;
(statearr_20497_23406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (14))){
var inst_20420 = (state_20444[(11)]);
var inst_20418 = (state_20444[(8)]);
var inst_20418__$1 = (state_20444[(2)]);
var inst_20419 = (inst_20418__$1 == null);
var inst_20420__$1 = cljs.core.not(inst_20419);
var state_20444__$1 = (function (){var statearr_20498 = state_20444;
(statearr_20498[(11)] = inst_20420__$1);

(statearr_20498[(8)] = inst_20418__$1);

return statearr_20498;
})();
if(inst_20420__$1){
var statearr_20499_23410 = state_20444__$1;
(statearr_20499_23410[(1)] = (15));

} else {
var statearr_20502_23411 = state_20444__$1;
(statearr_20502_23411[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (16))){
var inst_20420 = (state_20444[(11)]);
var state_20444__$1 = state_20444;
var statearr_20503_23418 = state_20444__$1;
(statearr_20503_23418[(2)] = inst_20420);

(statearr_20503_23418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (10))){
var inst_20399 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20507_23425 = state_20444__$1;
(statearr_20507_23425[(2)] = inst_20399);

(statearr_20507_23425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (18))){
var inst_20427 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20508_23433 = state_20444__$1;
(statearr_20508_23433[(2)] = inst_20427);

(statearr_20508_23433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (8))){
var inst_20396 = cljs.core.async.close_BANG_(to);
var state_20444__$1 = state_20444;
var statearr_20510_23437 = state_20444__$1;
(statearr_20510_23437[(2)] = inst_20396);

(statearr_20510_23437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0 = (function (){
var statearr_20514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__);

(statearr_20514[(1)] = (1));

return statearr_20514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1 = (function (state_20444){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20444);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20517){var ex__19301__auto__ = e20517;
var statearr_20518_23441 = state_20444;
(statearr_20518_23441[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20444[(4)]))){
var statearr_20519_23443 = state_20444;
(statearr_20519_23443[(1)] = cljs.core.first((state_20444[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23445 = state_20444;
state_20444 = G__23445;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__ = function(state_20444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1.call(this,state_20444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19298__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20524 = f__19590__auto__();
(statearr_20524[(6)] = c__19589__auto__);

return statearr_20524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

return c__19589__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__20532 = arguments.length;
switch (G__20532) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__20543 = arguments.length;
switch (G__20543) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__20560 = arguments.length;
switch (G__20560) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__19589__auto___23473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20599){
var state_val_20600 = (state_20599[(1)]);
if((state_val_20600 === (7))){
var inst_20594 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20606_23475 = state_20599__$1;
(statearr_20606_23475[(2)] = inst_20594);

(statearr_20606_23475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (1))){
var state_20599__$1 = state_20599;
var statearr_20613_23476 = state_20599__$1;
(statearr_20613_23476[(2)] = null);

(statearr_20613_23476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (4))){
var inst_20571 = (state_20599[(7)]);
var inst_20571__$1 = (state_20599[(2)]);
var inst_20573 = (inst_20571__$1 == null);
var state_20599__$1 = (function (){var statearr_20616 = state_20599;
(statearr_20616[(7)] = inst_20571__$1);

return statearr_20616;
})();
if(cljs.core.truth_(inst_20573)){
var statearr_20617_23477 = state_20599__$1;
(statearr_20617_23477[(1)] = (5));

} else {
var statearr_20618_23478 = state_20599__$1;
(statearr_20618_23478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (13))){
var state_20599__$1 = state_20599;
var statearr_20620_23479 = state_20599__$1;
(statearr_20620_23479[(2)] = null);

(statearr_20620_23479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (6))){
var inst_20571 = (state_20599[(7)]);
var inst_20579 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20571) : p.call(null, inst_20571));
var state_20599__$1 = state_20599;
if(cljs.core.truth_(inst_20579)){
var statearr_20625_23481 = state_20599__$1;
(statearr_20625_23481[(1)] = (9));

} else {
var statearr_20626_23482 = state_20599__$1;
(statearr_20626_23482[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (3))){
var inst_20596 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20599__$1,inst_20596);
} else {
if((state_val_20600 === (12))){
var state_20599__$1 = state_20599;
var statearr_20629_23483 = state_20599__$1;
(statearr_20629_23483[(2)] = null);

(statearr_20629_23483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (2))){
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20599__$1,(4),ch);
} else {
if((state_val_20600 === (11))){
var inst_20571 = (state_20599[(7)]);
var inst_20585 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20599__$1,(8),inst_20585,inst_20571);
} else {
if((state_val_20600 === (9))){
var state_20599__$1 = state_20599;
var statearr_20635_23485 = state_20599__$1;
(statearr_20635_23485[(2)] = tc);

(statearr_20635_23485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (5))){
var inst_20576 = cljs.core.async.close_BANG_(tc);
var inst_20577 = cljs.core.async.close_BANG_(fc);
var state_20599__$1 = (function (){var statearr_20638 = state_20599;
(statearr_20638[(8)] = inst_20576);

return statearr_20638;
})();
var statearr_20643_23486 = state_20599__$1;
(statearr_20643_23486[(2)] = inst_20577);

(statearr_20643_23486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (14))){
var inst_20592 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
var statearr_20646_23495 = state_20599__$1;
(statearr_20646_23495[(2)] = inst_20592);

(statearr_20646_23495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (10))){
var state_20599__$1 = state_20599;
var statearr_20648_23505 = state_20599__$1;
(statearr_20648_23505[(2)] = fc);

(statearr_20648_23505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20600 === (8))){
var inst_20587 = (state_20599[(2)]);
var state_20599__$1 = state_20599;
if(cljs.core.truth_(inst_20587)){
var statearr_20650_23506 = state_20599__$1;
(statearr_20650_23506[(1)] = (12));

} else {
var statearr_20651_23507 = state_20599__$1;
(statearr_20651_23507[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_20653 = [null,null,null,null,null,null,null,null,null];
(statearr_20653[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_20653[(1)] = (1));

return statearr_20653;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_20599){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20599);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20654){var ex__19301__auto__ = e20654;
var statearr_20656_23510 = state_20599;
(statearr_20656_23510[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20599[(4)]))){
var statearr_20658_23511 = state_20599;
(statearr_20658_23511[(1)] = cljs.core.first((state_20599[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23515 = state_20599;
state_20599 = G__23515;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_20599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_20599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20661 = f__19590__auto__();
(statearr_20661[(6)] = c__19589__auto___23473);

return statearr_20661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19589__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20693){
var state_val_20694 = (state_20693[(1)]);
if((state_val_20694 === (7))){
var inst_20689 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20698_23519 = state_20693__$1;
(statearr_20698_23519[(2)] = inst_20689);

(statearr_20698_23519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (1))){
var inst_20665 = init;
var inst_20666 = inst_20665;
var state_20693__$1 = (function (){var statearr_20699 = state_20693;
(statearr_20699[(7)] = inst_20666);

return statearr_20699;
})();
var statearr_20700_23520 = state_20693__$1;
(statearr_20700_23520[(2)] = null);

(statearr_20700_23520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (4))){
var inst_20673 = (state_20693[(8)]);
var inst_20673__$1 = (state_20693[(2)]);
var inst_20676 = (inst_20673__$1 == null);
var state_20693__$1 = (function (){var statearr_20702 = state_20693;
(statearr_20702[(8)] = inst_20673__$1);

return statearr_20702;
})();
if(cljs.core.truth_(inst_20676)){
var statearr_20703_23526 = state_20693__$1;
(statearr_20703_23526[(1)] = (5));

} else {
var statearr_20706_23528 = state_20693__$1;
(statearr_20706_23528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (6))){
var inst_20673 = (state_20693[(8)]);
var inst_20679 = (state_20693[(9)]);
var inst_20666 = (state_20693[(7)]);
var inst_20679__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20666,inst_20673) : f.call(null, inst_20666,inst_20673));
var inst_20680 = cljs.core.reduced_QMARK_(inst_20679__$1);
var state_20693__$1 = (function (){var statearr_20710 = state_20693;
(statearr_20710[(9)] = inst_20679__$1);

return statearr_20710;
})();
if(inst_20680){
var statearr_20711_23529 = state_20693__$1;
(statearr_20711_23529[(1)] = (8));

} else {
var statearr_20712_23530 = state_20693__$1;
(statearr_20712_23530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (3))){
var inst_20691 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20693__$1,inst_20691);
} else {
if((state_val_20694 === (2))){
var state_20693__$1 = state_20693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20693__$1,(4),ch);
} else {
if((state_val_20694 === (9))){
var inst_20679 = (state_20693[(9)]);
var inst_20666 = inst_20679;
var state_20693__$1 = (function (){var statearr_20714 = state_20693;
(statearr_20714[(7)] = inst_20666);

return statearr_20714;
})();
var statearr_20715_23531 = state_20693__$1;
(statearr_20715_23531[(2)] = null);

(statearr_20715_23531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (5))){
var inst_20666 = (state_20693[(7)]);
var state_20693__$1 = state_20693;
var statearr_20720_23532 = state_20693__$1;
(statearr_20720_23532[(2)] = inst_20666);

(statearr_20720_23532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (10))){
var inst_20687 = (state_20693[(2)]);
var state_20693__$1 = state_20693;
var statearr_20725_23533 = state_20693__$1;
(statearr_20725_23533[(2)] = inst_20687);

(statearr_20725_23533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20694 === (8))){
var inst_20679 = (state_20693[(9)]);
var inst_20683 = cljs.core.deref(inst_20679);
var state_20693__$1 = state_20693;
var statearr_20735_23542 = state_20693__$1;
(statearr_20735_23542[(2)] = inst_20683);

(statearr_20735_23542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__19298__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19298__auto____0 = (function (){
var statearr_20736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20736[(0)] = cljs$core$async$reduce_$_state_machine__19298__auto__);

(statearr_20736[(1)] = (1));

return statearr_20736;
});
var cljs$core$async$reduce_$_state_machine__19298__auto____1 = (function (state_20693){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20693);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20737){var ex__19301__auto__ = e20737;
var statearr_20738_23551 = state_20693;
(statearr_20738_23551[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20693[(4)]))){
var statearr_20739_23552 = state_20693;
(statearr_20739_23552[(1)] = cljs.core.first((state_20693[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23555 = state_20693;
state_20693 = G__23555;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19298__auto__ = function(state_20693){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19298__auto____1.call(this,state_20693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19298__auto____0;
cljs$core$async$reduce_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19298__auto____1;
return cljs$core$async$reduce_$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20741 = f__19590__auto__();
(statearr_20741[(6)] = c__19589__auto__);

return statearr_20741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

return c__19589__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__19589__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20751){
var state_val_20752 = (state_20751[(1)]);
if((state_val_20752 === (1))){
var inst_20746 = cljs.core.async.reduce(f__$1,init,ch);
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20751__$1,(2),inst_20746);
} else {
if((state_val_20752 === (2))){
var inst_20748 = (state_20751[(2)]);
var inst_20749 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_20748) : f__$1.call(null, inst_20748));
var state_20751__$1 = state_20751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20751__$1,inst_20749);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__19298__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19298__auto____0 = (function (){
var statearr_20753 = [null,null,null,null,null,null,null];
(statearr_20753[(0)] = cljs$core$async$transduce_$_state_machine__19298__auto__);

(statearr_20753[(1)] = (1));

return statearr_20753;
});
var cljs$core$async$transduce_$_state_machine__19298__auto____1 = (function (state_20751){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20751);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20756){var ex__19301__auto__ = e20756;
var statearr_20759_23565 = state_20751;
(statearr_20759_23565[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20751[(4)]))){
var statearr_20761_23566 = state_20751;
(statearr_20761_23566[(1)] = cljs.core.first((state_20751[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23568 = state_20751;
state_20751 = G__23568;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19298__auto__ = function(state_20751){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19298__auto____1.call(this,state_20751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19298__auto____0;
cljs$core$async$transduce_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19298__auto____1;
return cljs$core$async$transduce_$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20762 = f__19590__auto__();
(statearr_20762[(6)] = c__19589__auto__);

return statearr_20762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

return c__19589__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__20768 = arguments.length;
switch (G__20768) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19589__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_20794){
var state_val_20795 = (state_20794[(1)]);
if((state_val_20795 === (7))){
var inst_20776 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
var statearr_20798_23581 = state_20794__$1;
(statearr_20798_23581[(2)] = inst_20776);

(statearr_20798_23581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (1))){
var inst_20770 = cljs.core.seq(coll);
var inst_20771 = inst_20770;
var state_20794__$1 = (function (){var statearr_20799 = state_20794;
(statearr_20799[(7)] = inst_20771);

return statearr_20799;
})();
var statearr_20800_23583 = state_20794__$1;
(statearr_20800_23583[(2)] = null);

(statearr_20800_23583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (4))){
var inst_20771 = (state_20794[(7)]);
var inst_20774 = cljs.core.first(inst_20771);
var state_20794__$1 = state_20794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20794__$1,(7),ch,inst_20774);
} else {
if((state_val_20795 === (13))){
var inst_20788 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
var statearr_20805_23585 = state_20794__$1;
(statearr_20805_23585[(2)] = inst_20788);

(statearr_20805_23585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (6))){
var inst_20779 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
if(cljs.core.truth_(inst_20779)){
var statearr_20808_23586 = state_20794__$1;
(statearr_20808_23586[(1)] = (8));

} else {
var statearr_20809_23587 = state_20794__$1;
(statearr_20809_23587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (3))){
var inst_20792 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20794__$1,inst_20792);
} else {
if((state_val_20795 === (12))){
var state_20794__$1 = state_20794;
var statearr_20810_23597 = state_20794__$1;
(statearr_20810_23597[(2)] = null);

(statearr_20810_23597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (2))){
var inst_20771 = (state_20794[(7)]);
var state_20794__$1 = state_20794;
if(cljs.core.truth_(inst_20771)){
var statearr_20811_23598 = state_20794__$1;
(statearr_20811_23598[(1)] = (4));

} else {
var statearr_20812_23599 = state_20794__$1;
(statearr_20812_23599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (11))){
var inst_20785 = cljs.core.async.close_BANG_(ch);
var state_20794__$1 = state_20794;
var statearr_20816_23602 = state_20794__$1;
(statearr_20816_23602[(2)] = inst_20785);

(statearr_20816_23602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (9))){
var state_20794__$1 = state_20794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20818_23603 = state_20794__$1;
(statearr_20818_23603[(1)] = (11));

} else {
var statearr_20819_23604 = state_20794__$1;
(statearr_20819_23604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (5))){
var inst_20771 = (state_20794[(7)]);
var state_20794__$1 = state_20794;
var statearr_20820_23605 = state_20794__$1;
(statearr_20820_23605[(2)] = inst_20771);

(statearr_20820_23605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (10))){
var inst_20790 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
var statearr_20823_23606 = state_20794__$1;
(statearr_20823_23606[(2)] = inst_20790);

(statearr_20823_23606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (8))){
var inst_20771 = (state_20794[(7)]);
var inst_20781 = cljs.core.next(inst_20771);
var inst_20771__$1 = inst_20781;
var state_20794__$1 = (function (){var statearr_20827 = state_20794;
(statearr_20827[(7)] = inst_20771__$1);

return statearr_20827;
})();
var statearr_20828_23610 = state_20794__$1;
(statearr_20828_23610[(2)] = null);

(statearr_20828_23610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_20833 = [null,null,null,null,null,null,null,null];
(statearr_20833[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_20833[(1)] = (1));

return statearr_20833;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_20794){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_20794);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e20836){var ex__19301__auto__ = e20836;
var statearr_20838_23611 = state_20794;
(statearr_20838_23611[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_20794[(4)]))){
var statearr_20839_23614 = state_20794;
(statearr_20839_23614[(1)] = cljs.core.first((state_20794[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23622 = state_20794;
state_20794 = G__23622;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_20794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_20794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_20840 = f__19590__auto__();
(statearr_20840[(6)] = c__19589__auto__);

return statearr_20840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

return c__19589__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__20848 = arguments.length;
switch (G__20848) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23626 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23626(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23627 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23627(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23636 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23636(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23637 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23637(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20886 = (function (ch,cs,meta20887){
this.ch = ch;
this.cs = cs;
this.meta20887 = meta20887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20888,meta20887__$1){
var self__ = this;
var _20888__$1 = this;
return (new cljs.core.async.t_cljs$core$async20886(self__.ch,self__.cs,meta20887__$1));
}));

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20888){
var self__ = this;
var _20888__$1 = this;
return self__.meta20887;
}));

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async20886.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async20886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20887","meta20887",-647493574,null)], null);
}));

(cljs.core.async.t_cljs$core$async20886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20886");

(cljs.core.async.t_cljs$core$async20886.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20886.
 */
cljs.core.async.__GT_t_cljs$core$async20886 = (function cljs$core$async$__GT_t_cljs$core$async20886(ch,cs,meta20887){
return (new cljs.core.async.t_cljs$core$async20886(ch,cs,meta20887));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async20886(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__19589__auto___23652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_21088){
var state_val_21089 = (state_21088[(1)]);
if((state_val_21089 === (7))){
var inst_21084 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21091_23654 = state_21088__$1;
(statearr_21091_23654[(2)] = inst_21084);

(statearr_21091_23654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (20))){
var inst_20980 = (state_21088[(7)]);
var inst_20994 = cljs.core.first(inst_20980);
var inst_20995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20994,(0),null);
var inst_20996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20994,(1),null);
var state_21088__$1 = (function (){var statearr_21092 = state_21088;
(statearr_21092[(8)] = inst_20995);

return statearr_21092;
})();
if(cljs.core.truth_(inst_20996)){
var statearr_21093_23656 = state_21088__$1;
(statearr_21093_23656[(1)] = (22));

} else {
var statearr_21094_23657 = state_21088__$1;
(statearr_21094_23657[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (27))){
var inst_21033 = (state_21088[(9)]);
var inst_21028 = (state_21088[(10)]);
var inst_21026 = (state_21088[(11)]);
var inst_20909 = (state_21088[(12)]);
var inst_21033__$1 = cljs.core._nth(inst_21026,inst_21028);
var inst_21034 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21033__$1,inst_20909,done);
var state_21088__$1 = (function (){var statearr_21097 = state_21088;
(statearr_21097[(9)] = inst_21033__$1);

return statearr_21097;
})();
if(cljs.core.truth_(inst_21034)){
var statearr_21098_23659 = state_21088__$1;
(statearr_21098_23659[(1)] = (30));

} else {
var statearr_21099_23660 = state_21088__$1;
(statearr_21099_23660[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (1))){
var state_21088__$1 = state_21088;
var statearr_21100_23661 = state_21088__$1;
(statearr_21100_23661[(2)] = null);

(statearr_21100_23661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (24))){
var inst_20980 = (state_21088[(7)]);
var inst_21001 = (state_21088[(2)]);
var inst_21002 = cljs.core.next(inst_20980);
var inst_20921 = inst_21002;
var inst_20922 = null;
var inst_20923 = (0);
var inst_20924 = (0);
var state_21088__$1 = (function (){var statearr_21102 = state_21088;
(statearr_21102[(13)] = inst_20924);

(statearr_21102[(14)] = inst_21001);

(statearr_21102[(15)] = inst_20923);

(statearr_21102[(16)] = inst_20921);

(statearr_21102[(17)] = inst_20922);

return statearr_21102;
})();
var statearr_21103_23667 = state_21088__$1;
(statearr_21103_23667[(2)] = null);

(statearr_21103_23667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (39))){
var state_21088__$1 = state_21088;
var statearr_21113_23668 = state_21088__$1;
(statearr_21113_23668[(2)] = null);

(statearr_21113_23668[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (4))){
var inst_20909 = (state_21088[(12)]);
var inst_20909__$1 = (state_21088[(2)]);
var inst_20911 = (inst_20909__$1 == null);
var state_21088__$1 = (function (){var statearr_21114 = state_21088;
(statearr_21114[(12)] = inst_20909__$1);

return statearr_21114;
})();
if(cljs.core.truth_(inst_20911)){
var statearr_21116_23673 = state_21088__$1;
(statearr_21116_23673[(1)] = (5));

} else {
var statearr_21117_23674 = state_21088__$1;
(statearr_21117_23674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (15))){
var inst_20924 = (state_21088[(13)]);
var inst_20923 = (state_21088[(15)]);
var inst_20921 = (state_21088[(16)]);
var inst_20922 = (state_21088[(17)]);
var inst_20975 = (state_21088[(2)]);
var inst_20976 = (inst_20924 + (1));
var tmp21108 = inst_20923;
var tmp21109 = inst_20921;
var tmp21110 = inst_20922;
var inst_20921__$1 = tmp21109;
var inst_20922__$1 = tmp21110;
var inst_20923__$1 = tmp21108;
var inst_20924__$1 = inst_20976;
var state_21088__$1 = (function (){var statearr_21118 = state_21088;
(statearr_21118[(13)] = inst_20924__$1);

(statearr_21118[(15)] = inst_20923__$1);

(statearr_21118[(16)] = inst_20921__$1);

(statearr_21118[(17)] = inst_20922__$1);

(statearr_21118[(18)] = inst_20975);

return statearr_21118;
})();
var statearr_21119_23675 = state_21088__$1;
(statearr_21119_23675[(2)] = null);

(statearr_21119_23675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (21))){
var inst_21005 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21123_23676 = state_21088__$1;
(statearr_21123_23676[(2)] = inst_21005);

(statearr_21123_23676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (31))){
var inst_21033 = (state_21088[(9)]);
var inst_21037 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_21033);
var state_21088__$1 = state_21088;
var statearr_21125_23677 = state_21088__$1;
(statearr_21125_23677[(2)] = inst_21037);

(statearr_21125_23677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (32))){
var inst_21028 = (state_21088[(10)]);
var inst_21026 = (state_21088[(11)]);
var inst_21025 = (state_21088[(19)]);
var inst_21027 = (state_21088[(20)]);
var inst_21039 = (state_21088[(2)]);
var inst_21041 = (inst_21028 + (1));
var tmp21120 = inst_21026;
var tmp21121 = inst_21025;
var tmp21122 = inst_21027;
var inst_21025__$1 = tmp21121;
var inst_21026__$1 = tmp21120;
var inst_21027__$1 = tmp21122;
var inst_21028__$1 = inst_21041;
var state_21088__$1 = (function (){var statearr_21130 = state_21088;
(statearr_21130[(10)] = inst_21028__$1);

(statearr_21130[(21)] = inst_21039);

(statearr_21130[(11)] = inst_21026__$1);

(statearr_21130[(19)] = inst_21025__$1);

(statearr_21130[(20)] = inst_21027__$1);

return statearr_21130;
})();
var statearr_21133_23691 = state_21088__$1;
(statearr_21133_23691[(2)] = null);

(statearr_21133_23691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (40))){
var inst_21057 = (state_21088[(22)]);
var inst_21061 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_21057);
var state_21088__$1 = state_21088;
var statearr_21134_23697 = state_21088__$1;
(statearr_21134_23697[(2)] = inst_21061);

(statearr_21134_23697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (33))){
var inst_21046 = (state_21088[(23)]);
var inst_21048 = cljs.core.chunked_seq_QMARK_(inst_21046);
var state_21088__$1 = state_21088;
if(inst_21048){
var statearr_21135_23698 = state_21088__$1;
(statearr_21135_23698[(1)] = (36));

} else {
var statearr_21136_23699 = state_21088__$1;
(statearr_21136_23699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (13))){
var inst_20969 = (state_21088[(24)]);
var inst_20972 = cljs.core.async.close_BANG_(inst_20969);
var state_21088__$1 = state_21088;
var statearr_21141_23701 = state_21088__$1;
(statearr_21141_23701[(2)] = inst_20972);

(statearr_21141_23701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (22))){
var inst_20995 = (state_21088[(8)]);
var inst_20998 = cljs.core.async.close_BANG_(inst_20995);
var state_21088__$1 = state_21088;
var statearr_21144_23703 = state_21088__$1;
(statearr_21144_23703[(2)] = inst_20998);

(statearr_21144_23703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (36))){
var inst_21046 = (state_21088[(23)]);
var inst_21050 = cljs.core.chunk_first(inst_21046);
var inst_21053 = cljs.core.chunk_rest(inst_21046);
var inst_21054 = cljs.core.count(inst_21050);
var inst_21025 = inst_21053;
var inst_21026 = inst_21050;
var inst_21027 = inst_21054;
var inst_21028 = (0);
var state_21088__$1 = (function (){var statearr_21145 = state_21088;
(statearr_21145[(10)] = inst_21028);

(statearr_21145[(11)] = inst_21026);

(statearr_21145[(19)] = inst_21025);

(statearr_21145[(20)] = inst_21027);

return statearr_21145;
})();
var statearr_21147_23708 = state_21088__$1;
(statearr_21147_23708[(2)] = null);

(statearr_21147_23708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (41))){
var inst_21046 = (state_21088[(23)]);
var inst_21063 = (state_21088[(2)]);
var inst_21064 = cljs.core.next(inst_21046);
var inst_21025 = inst_21064;
var inst_21026 = null;
var inst_21027 = (0);
var inst_21028 = (0);
var state_21088__$1 = (function (){var statearr_21149 = state_21088;
(statearr_21149[(10)] = inst_21028);

(statearr_21149[(11)] = inst_21026);

(statearr_21149[(19)] = inst_21025);

(statearr_21149[(25)] = inst_21063);

(statearr_21149[(20)] = inst_21027);

return statearr_21149;
})();
var statearr_21150_23710 = state_21088__$1;
(statearr_21150_23710[(2)] = null);

(statearr_21150_23710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (43))){
var state_21088__$1 = state_21088;
var statearr_21152_23712 = state_21088__$1;
(statearr_21152_23712[(2)] = null);

(statearr_21152_23712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (29))){
var inst_21072 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21160_23713 = state_21088__$1;
(statearr_21160_23713[(2)] = inst_21072);

(statearr_21160_23713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (44))){
var inst_21081 = (state_21088[(2)]);
var state_21088__$1 = (function (){var statearr_21161 = state_21088;
(statearr_21161[(26)] = inst_21081);

return statearr_21161;
})();
var statearr_21164_23714 = state_21088__$1;
(statearr_21164_23714[(2)] = null);

(statearr_21164_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (6))){
var inst_21017 = (state_21088[(27)]);
var inst_21016 = cljs.core.deref(cs);
var inst_21017__$1 = cljs.core.keys(inst_21016);
var inst_21018 = cljs.core.count(inst_21017__$1);
var inst_21019 = cljs.core.reset_BANG_(dctr,inst_21018);
var inst_21024 = cljs.core.seq(inst_21017__$1);
var inst_21025 = inst_21024;
var inst_21026 = null;
var inst_21027 = (0);
var inst_21028 = (0);
var state_21088__$1 = (function (){var statearr_21165 = state_21088;
(statearr_21165[(10)] = inst_21028);

(statearr_21165[(11)] = inst_21026);

(statearr_21165[(19)] = inst_21025);

(statearr_21165[(27)] = inst_21017__$1);

(statearr_21165[(20)] = inst_21027);

(statearr_21165[(28)] = inst_21019);

return statearr_21165;
})();
var statearr_21166_23718 = state_21088__$1;
(statearr_21166_23718[(2)] = null);

(statearr_21166_23718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (28))){
var inst_21025 = (state_21088[(19)]);
var inst_21046 = (state_21088[(23)]);
var inst_21046__$1 = cljs.core.seq(inst_21025);
var state_21088__$1 = (function (){var statearr_21167 = state_21088;
(statearr_21167[(23)] = inst_21046__$1);

return statearr_21167;
})();
if(inst_21046__$1){
var statearr_21168_23722 = state_21088__$1;
(statearr_21168_23722[(1)] = (33));

} else {
var statearr_21169_23725 = state_21088__$1;
(statearr_21169_23725[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (25))){
var inst_21028 = (state_21088[(10)]);
var inst_21027 = (state_21088[(20)]);
var inst_21030 = (inst_21028 < inst_21027);
var inst_21031 = inst_21030;
var state_21088__$1 = state_21088;
if(cljs.core.truth_(inst_21031)){
var statearr_21173_23726 = state_21088__$1;
(statearr_21173_23726[(1)] = (27));

} else {
var statearr_21174_23728 = state_21088__$1;
(statearr_21174_23728[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (34))){
var state_21088__$1 = state_21088;
var statearr_21176_23730 = state_21088__$1;
(statearr_21176_23730[(2)] = null);

(statearr_21176_23730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (17))){
var state_21088__$1 = state_21088;
var statearr_21177_23732 = state_21088__$1;
(statearr_21177_23732[(2)] = null);

(statearr_21177_23732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (3))){
var inst_21086 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21088__$1,inst_21086);
} else {
if((state_val_21089 === (12))){
var inst_21010 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21182_23735 = state_21088__$1;
(statearr_21182_23735[(2)] = inst_21010);

(statearr_21182_23735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (2))){
var state_21088__$1 = state_21088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21088__$1,(4),ch);
} else {
if((state_val_21089 === (23))){
var state_21088__$1 = state_21088;
var statearr_21184_23736 = state_21088__$1;
(statearr_21184_23736[(2)] = null);

(statearr_21184_23736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (35))){
var inst_21070 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21185_23739 = state_21088__$1;
(statearr_21185_23739[(2)] = inst_21070);

(statearr_21185_23739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (19))){
var inst_20980 = (state_21088[(7)]);
var inst_20984 = cljs.core.chunk_first(inst_20980);
var inst_20985 = cljs.core.chunk_rest(inst_20980);
var inst_20986 = cljs.core.count(inst_20984);
var inst_20921 = inst_20985;
var inst_20922 = inst_20984;
var inst_20923 = inst_20986;
var inst_20924 = (0);
var state_21088__$1 = (function (){var statearr_21189 = state_21088;
(statearr_21189[(13)] = inst_20924);

(statearr_21189[(15)] = inst_20923);

(statearr_21189[(16)] = inst_20921);

(statearr_21189[(17)] = inst_20922);

return statearr_21189;
})();
var statearr_21194_23743 = state_21088__$1;
(statearr_21194_23743[(2)] = null);

(statearr_21194_23743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (11))){
var inst_20921 = (state_21088[(16)]);
var inst_20980 = (state_21088[(7)]);
var inst_20980__$1 = cljs.core.seq(inst_20921);
var state_21088__$1 = (function (){var statearr_21198 = state_21088;
(statearr_21198[(7)] = inst_20980__$1);

return statearr_21198;
})();
if(inst_20980__$1){
var statearr_21201_23745 = state_21088__$1;
(statearr_21201_23745[(1)] = (16));

} else {
var statearr_21203_23746 = state_21088__$1;
(statearr_21203_23746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (9))){
var inst_21012 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21205_23747 = state_21088__$1;
(statearr_21205_23747[(2)] = inst_21012);

(statearr_21205_23747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (5))){
var inst_20919 = cljs.core.deref(cs);
var inst_20920 = cljs.core.seq(inst_20919);
var inst_20921 = inst_20920;
var inst_20922 = null;
var inst_20923 = (0);
var inst_20924 = (0);
var state_21088__$1 = (function (){var statearr_21206 = state_21088;
(statearr_21206[(13)] = inst_20924);

(statearr_21206[(15)] = inst_20923);

(statearr_21206[(16)] = inst_20921);

(statearr_21206[(17)] = inst_20922);

return statearr_21206;
})();
var statearr_21208_23751 = state_21088__$1;
(statearr_21208_23751[(2)] = null);

(statearr_21208_23751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (14))){
var state_21088__$1 = state_21088;
var statearr_21210_23754 = state_21088__$1;
(statearr_21210_23754[(2)] = null);

(statearr_21210_23754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (45))){
var inst_21078 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21215_23755 = state_21088__$1;
(statearr_21215_23755[(2)] = inst_21078);

(statearr_21215_23755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (26))){
var inst_21017 = (state_21088[(27)]);
var inst_21074 = (state_21088[(2)]);
var inst_21075 = cljs.core.seq(inst_21017);
var state_21088__$1 = (function (){var statearr_21216 = state_21088;
(statearr_21216[(29)] = inst_21074);

return statearr_21216;
})();
if(inst_21075){
var statearr_21218_23757 = state_21088__$1;
(statearr_21218_23757[(1)] = (42));

} else {
var statearr_21220_23758 = state_21088__$1;
(statearr_21220_23758[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (16))){
var inst_20980 = (state_21088[(7)]);
var inst_20982 = cljs.core.chunked_seq_QMARK_(inst_20980);
var state_21088__$1 = state_21088;
if(inst_20982){
var statearr_21223_23759 = state_21088__$1;
(statearr_21223_23759[(1)] = (19));

} else {
var statearr_21225_23761 = state_21088__$1;
(statearr_21225_23761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (38))){
var inst_21067 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21228_23764 = state_21088__$1;
(statearr_21228_23764[(2)] = inst_21067);

(statearr_21228_23764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (30))){
var state_21088__$1 = state_21088;
var statearr_21229_23766 = state_21088__$1;
(statearr_21229_23766[(2)] = null);

(statearr_21229_23766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (10))){
var inst_20924 = (state_21088[(13)]);
var inst_20922 = (state_21088[(17)]);
var inst_20967 = cljs.core._nth(inst_20922,inst_20924);
var inst_20969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20967,(0),null);
var inst_20970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20967,(1),null);
var state_21088__$1 = (function (){var statearr_21232 = state_21088;
(statearr_21232[(24)] = inst_20969);

return statearr_21232;
})();
if(cljs.core.truth_(inst_20970)){
var statearr_21233_23768 = state_21088__$1;
(statearr_21233_23768[(1)] = (13));

} else {
var statearr_21234_23769 = state_21088__$1;
(statearr_21234_23769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (18))){
var inst_21008 = (state_21088[(2)]);
var state_21088__$1 = state_21088;
var statearr_21238_23770 = state_21088__$1;
(statearr_21238_23770[(2)] = inst_21008);

(statearr_21238_23770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (42))){
var state_21088__$1 = state_21088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21088__$1,(45),dchan);
} else {
if((state_val_21089 === (37))){
var inst_21046 = (state_21088[(23)]);
var inst_20909 = (state_21088[(12)]);
var inst_21057 = (state_21088[(22)]);
var inst_21057__$1 = cljs.core.first(inst_21046);
var inst_21058 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21057__$1,inst_20909,done);
var state_21088__$1 = (function (){var statearr_21243 = state_21088;
(statearr_21243[(22)] = inst_21057__$1);

return statearr_21243;
})();
if(cljs.core.truth_(inst_21058)){
var statearr_21244_23771 = state_21088__$1;
(statearr_21244_23771[(1)] = (39));

} else {
var statearr_21245_23772 = state_21088__$1;
(statearr_21245_23772[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21089 === (8))){
var inst_20924 = (state_21088[(13)]);
var inst_20923 = (state_21088[(15)]);
var inst_20926 = (inst_20924 < inst_20923);
var inst_20927 = inst_20926;
var state_21088__$1 = state_21088;
if(cljs.core.truth_(inst_20927)){
var statearr_21250_23773 = state_21088__$1;
(statearr_21250_23773[(1)] = (10));

} else {
var statearr_21257_23774 = state_21088__$1;
(statearr_21257_23774[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__19298__auto__ = null;
var cljs$core$async$mult_$_state_machine__19298__auto____0 = (function (){
var statearr_21260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21260[(0)] = cljs$core$async$mult_$_state_machine__19298__auto__);

(statearr_21260[(1)] = (1));

return statearr_21260;
});
var cljs$core$async$mult_$_state_machine__19298__auto____1 = (function (state_21088){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_21088);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e21261){var ex__19301__auto__ = e21261;
var statearr_21262_23779 = state_21088;
(statearr_21262_23779[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_21088[(4)]))){
var statearr_21264_23780 = state_21088;
(statearr_21264_23780[(1)] = cljs.core.first((state_21088[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23781 = state_21088;
state_21088 = G__23781;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19298__auto__ = function(state_21088){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19298__auto____1.call(this,state_21088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19298__auto____0;
cljs$core$async$mult_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19298__auto____1;
return cljs$core$async$mult_$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_21271 = f__19590__auto__();
(statearr_21271[(6)] = c__19589__auto___23652);

return statearr_21271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21275 = arguments.length;
switch (G__21275) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23794 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23794(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23801 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23801(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23809 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23809(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23826 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23826(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23833 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23833(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23837 = arguments.length;
var i__5727__auto___23838 = (0);
while(true){
if((i__5727__auto___23838 < len__5726__auto___23837)){
args__5732__auto__.push((arguments[i__5727__auto___23838]));

var G__23845 = (i__5727__auto___23838 + (1));
i__5727__auto___23838 = G__23845;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21345){
var map__21346 = p__21345;
var map__21346__$1 = cljs.core.__destructure_map(map__21346);
var opts = map__21346__$1;
var statearr_21347_23852 = state;
(statearr_21347_23852[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_21350_23856 = state;
(statearr_21350_23856[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_21353_23863 = state;
(statearr_21353_23863[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21331){
var G__21332 = cljs.core.first(seq21331);
var seq21331__$1 = cljs.core.next(seq21331);
var G__21333 = cljs.core.first(seq21331__$1);
var seq21331__$2 = cljs.core.next(seq21331__$1);
var G__21334 = cljs.core.first(seq21331__$2);
var seq21331__$3 = cljs.core.next(seq21331__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21332,G__21333,G__21334,seq21331__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21395 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21396){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21396 = meta21396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21397,meta21396__$1){
var self__ = this;
var _21397__$1 = this;
return (new cljs.core.async.t_cljs$core$async21395(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21396__$1));
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21397){
var self__ = this;
var _21397__$1 = this;
return self__.meta21396;
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async21395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async21395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21396","meta21396",423376033,null)], null);
}));

(cljs.core.async.t_cljs$core$async21395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21395");

(cljs.core.async.t_cljs$core$async21395.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21395.
 */
cljs.core.async.__GT_t_cljs$core$async21395 = (function cljs$core$async$__GT_t_cljs$core$async21395(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21396){
return (new cljs.core.async.t_cljs$core$async21395(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21396));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async21395(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__19589__auto___23914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_21505){
var state_val_21506 = (state_21505[(1)]);
if((state_val_21506 === (7))){
var inst_21457 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
if(cljs.core.truth_(inst_21457)){
var statearr_21513_23916 = state_21505__$1;
(statearr_21513_23916[(1)] = (8));

} else {
var statearr_21514_23917 = state_21505__$1;
(statearr_21514_23917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (20))){
var inst_21446 = (state_21505[(7)]);
var state_21505__$1 = state_21505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21505__$1,(23),out,inst_21446);
} else {
if((state_val_21506 === (1))){
var inst_21429 = calc_state();
var inst_21430 = cljs.core.__destructure_map(inst_21429);
var inst_21431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21430,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21430,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21430,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21434 = inst_21429;
var state_21505__$1 = (function (){var statearr_21517 = state_21505;
(statearr_21517[(8)] = inst_21431);

(statearr_21517[(9)] = inst_21433);

(statearr_21517[(10)] = inst_21434);

(statearr_21517[(11)] = inst_21432);

return statearr_21517;
})();
var statearr_21520_23921 = state_21505__$1;
(statearr_21520_23921[(2)] = null);

(statearr_21520_23921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (24))){
var inst_21437 = (state_21505[(12)]);
var inst_21434 = inst_21437;
var state_21505__$1 = (function (){var statearr_21525 = state_21505;
(statearr_21525[(10)] = inst_21434);

return statearr_21525;
})();
var statearr_21527_23925 = state_21505__$1;
(statearr_21527_23925[(2)] = null);

(statearr_21527_23925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (4))){
var inst_21446 = (state_21505[(7)]);
var inst_21451 = (state_21505[(13)]);
var inst_21445 = (state_21505[(2)]);
var inst_21446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21445,(0),null);
var inst_21448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21445,(1),null);
var inst_21451__$1 = (inst_21446__$1 == null);
var state_21505__$1 = (function (){var statearr_21532 = state_21505;
(statearr_21532[(7)] = inst_21446__$1);

(statearr_21532[(14)] = inst_21448);

(statearr_21532[(13)] = inst_21451__$1);

return statearr_21532;
})();
if(cljs.core.truth_(inst_21451__$1)){
var statearr_21533_23929 = state_21505__$1;
(statearr_21533_23929[(1)] = (5));

} else {
var statearr_21534_23930 = state_21505__$1;
(statearr_21534_23930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (15))){
var inst_21438 = (state_21505[(15)]);
var inst_21472 = (state_21505[(16)]);
var inst_21472__$1 = cljs.core.empty_QMARK_(inst_21438);
var state_21505__$1 = (function (){var statearr_21536 = state_21505;
(statearr_21536[(16)] = inst_21472__$1);

return statearr_21536;
})();
if(inst_21472__$1){
var statearr_21538_23933 = state_21505__$1;
(statearr_21538_23933[(1)] = (17));

} else {
var statearr_21540_23935 = state_21505__$1;
(statearr_21540_23935[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (21))){
var inst_21437 = (state_21505[(12)]);
var inst_21434 = inst_21437;
var state_21505__$1 = (function (){var statearr_21542 = state_21505;
(statearr_21542[(10)] = inst_21434);

return statearr_21542;
})();
var statearr_21543_23936 = state_21505__$1;
(statearr_21543_23936[(2)] = null);

(statearr_21543_23936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (13))){
var inst_21465 = (state_21505[(2)]);
var inst_21466 = calc_state();
var inst_21434 = inst_21466;
var state_21505__$1 = (function (){var statearr_21545 = state_21505;
(statearr_21545[(17)] = inst_21465);

(statearr_21545[(10)] = inst_21434);

return statearr_21545;
})();
var statearr_21547_23941 = state_21505__$1;
(statearr_21547_23941[(2)] = null);

(statearr_21547_23941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (22))){
var inst_21499 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
var statearr_21555_23944 = state_21505__$1;
(statearr_21555_23944[(2)] = inst_21499);

(statearr_21555_23944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (6))){
var inst_21448 = (state_21505[(14)]);
var inst_21455 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21448,change);
var state_21505__$1 = state_21505;
var statearr_21557_23947 = state_21505__$1;
(statearr_21557_23947[(2)] = inst_21455);

(statearr_21557_23947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (25))){
var state_21505__$1 = state_21505;
var statearr_21558_23949 = state_21505__$1;
(statearr_21558_23949[(2)] = null);

(statearr_21558_23949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (17))){
var inst_21439 = (state_21505[(18)]);
var inst_21448 = (state_21505[(14)]);
var inst_21476 = (inst_21439.cljs$core$IFn$_invoke$arity$1 ? inst_21439.cljs$core$IFn$_invoke$arity$1(inst_21448) : inst_21439.call(null, inst_21448));
var inst_21477 = cljs.core.not(inst_21476);
var state_21505__$1 = state_21505;
var statearr_21566_23950 = state_21505__$1;
(statearr_21566_23950[(2)] = inst_21477);

(statearr_21566_23950[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (3))){
var inst_21503 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21505__$1,inst_21503);
} else {
if((state_val_21506 === (12))){
var state_21505__$1 = state_21505;
var statearr_21569_23954 = state_21505__$1;
(statearr_21569_23954[(2)] = null);

(statearr_21569_23954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (2))){
var inst_21434 = (state_21505[(10)]);
var inst_21437 = (state_21505[(12)]);
var inst_21437__$1 = cljs.core.__destructure_map(inst_21434);
var inst_21438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21437__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21437__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21437__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21505__$1 = (function (){var statearr_21572 = state_21505;
(statearr_21572[(18)] = inst_21439);

(statearr_21572[(12)] = inst_21437__$1);

(statearr_21572[(15)] = inst_21438);

return statearr_21572;
})();
return cljs.core.async.ioc_alts_BANG_(state_21505__$1,(4),inst_21440);
} else {
if((state_val_21506 === (23))){
var inst_21488 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
if(cljs.core.truth_(inst_21488)){
var statearr_21575_23957 = state_21505__$1;
(statearr_21575_23957[(1)] = (24));

} else {
var statearr_21576_23958 = state_21505__$1;
(statearr_21576_23958[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (19))){
var inst_21480 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
var statearr_21577_23960 = state_21505__$1;
(statearr_21577_23960[(2)] = inst_21480);

(statearr_21577_23960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (11))){
var inst_21448 = (state_21505[(14)]);
var inst_21462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21448);
var state_21505__$1 = state_21505;
var statearr_21584_23965 = state_21505__$1;
(statearr_21584_23965[(2)] = inst_21462);

(statearr_21584_23965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (9))){
var inst_21469 = (state_21505[(19)]);
var inst_21448 = (state_21505[(14)]);
var inst_21438 = (state_21505[(15)]);
var inst_21469__$1 = (inst_21438.cljs$core$IFn$_invoke$arity$1 ? inst_21438.cljs$core$IFn$_invoke$arity$1(inst_21448) : inst_21438.call(null, inst_21448));
var state_21505__$1 = (function (){var statearr_21594 = state_21505;
(statearr_21594[(19)] = inst_21469__$1);

return statearr_21594;
})();
if(cljs.core.truth_(inst_21469__$1)){
var statearr_21596_23969 = state_21505__$1;
(statearr_21596_23969[(1)] = (14));

} else {
var statearr_21598_23971 = state_21505__$1;
(statearr_21598_23971[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (5))){
var inst_21451 = (state_21505[(13)]);
var state_21505__$1 = state_21505;
var statearr_21600_23975 = state_21505__$1;
(statearr_21600_23975[(2)] = inst_21451);

(statearr_21600_23975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (14))){
var inst_21469 = (state_21505[(19)]);
var state_21505__$1 = state_21505;
var statearr_21601_23976 = state_21505__$1;
(statearr_21601_23976[(2)] = inst_21469);

(statearr_21601_23976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (26))){
var inst_21493 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
var statearr_21603_23977 = state_21505__$1;
(statearr_21603_23977[(2)] = inst_21493);

(statearr_21603_23977[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (16))){
var inst_21482 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
if(cljs.core.truth_(inst_21482)){
var statearr_21604_23979 = state_21505__$1;
(statearr_21604_23979[(1)] = (20));

} else {
var statearr_21607_23980 = state_21505__$1;
(statearr_21607_23980[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (10))){
var inst_21501 = (state_21505[(2)]);
var state_21505__$1 = state_21505;
var statearr_21609_23981 = state_21505__$1;
(statearr_21609_23981[(2)] = inst_21501);

(statearr_21609_23981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (18))){
var inst_21472 = (state_21505[(16)]);
var state_21505__$1 = state_21505;
var statearr_21614_23982 = state_21505__$1;
(statearr_21614_23982[(2)] = inst_21472);

(statearr_21614_23982[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21506 === (8))){
var inst_21446 = (state_21505[(7)]);
var inst_21460 = (inst_21446 == null);
var state_21505__$1 = state_21505;
if(cljs.core.truth_(inst_21460)){
var statearr_21616_23983 = state_21505__$1;
(statearr_21616_23983[(1)] = (11));

} else {
var statearr_21620_23984 = state_21505__$1;
(statearr_21620_23984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__19298__auto__ = null;
var cljs$core$async$mix_$_state_machine__19298__auto____0 = (function (){
var statearr_21625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21625[(0)] = cljs$core$async$mix_$_state_machine__19298__auto__);

(statearr_21625[(1)] = (1));

return statearr_21625;
});
var cljs$core$async$mix_$_state_machine__19298__auto____1 = (function (state_21505){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_21505);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e21629){var ex__19301__auto__ = e21629;
var statearr_21631_23995 = state_21505;
(statearr_21631_23995[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_21505[(4)]))){
var statearr_21633_23999 = state_21505;
(statearr_21633_23999[(1)] = cljs.core.first((state_21505[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24000 = state_21505;
state_21505 = G__24000;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19298__auto__ = function(state_21505){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19298__auto____1.call(this,state_21505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19298__auto____0;
cljs$core$async$mix_$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19298__auto____1;
return cljs$core$async$mix_$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_21640 = f__19590__auto__();
(statearr_21640[(6)] = c__19589__auto___23914);

return statearr_21640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_24004 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_24004(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24005 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_24005(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24006 = (function() {
var G__24007 = null;
var G__24007__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__24007__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__24007 = function(p,v){
switch(arguments.length){
case 1:
return G__24007__1.call(this,p);
case 2:
return G__24007__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24007.cljs$core$IFn$_invoke$arity$1 = G__24007__1;
G__24007.cljs$core$IFn$_invoke$arity$2 = G__24007__2;
return G__24007;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21704 = arguments.length;
switch (G__21704) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24006(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24006(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21722 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21723){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21723 = meta21723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21724,meta21723__$1){
var self__ = this;
var _21724__$1 = this;
return (new cljs.core.async.t_cljs$core$async21722(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21723__$1));
}));

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21724){
var self__ = this;
var _21724__$1 = this;
return self__.meta21723;
}));

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21722.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21723","meta21723",-32117028,null)], null);
}));

(cljs.core.async.t_cljs$core$async21722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21722");

(cljs.core.async.t_cljs$core$async21722.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async21722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21722.
 */
cljs.core.async.__GT_t_cljs$core$async21722 = (function cljs$core$async$__GT_t_cljs$core$async21722(ch,topic_fn,buf_fn,mults,ensure_mult,meta21723){
return (new cljs.core.async.t_cljs$core$async21722(ch,topic_fn,buf_fn,mults,ensure_mult,meta21723));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21719 = arguments.length;
switch (G__21719) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__21714_SHARP_){
if(cljs.core.truth_((p1__21714_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21714_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21714_SHARP_.call(null, topic)))){
return p1__21714_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21714_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async21722(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__19589__auto___24027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_21851){
var state_val_21852 = (state_21851[(1)]);
if((state_val_21852 === (7))){
var inst_21847 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
var statearr_21853_24028 = state_21851__$1;
(statearr_21853_24028[(2)] = inst_21847);

(statearr_21853_24028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (20))){
var state_21851__$1 = state_21851;
var statearr_21855_24029 = state_21851__$1;
(statearr_21855_24029[(2)] = null);

(statearr_21855_24029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (1))){
var state_21851__$1 = state_21851;
var statearr_21857_24030 = state_21851__$1;
(statearr_21857_24030[(2)] = null);

(statearr_21857_24030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (24))){
var inst_21830 = (state_21851[(7)]);
var inst_21839 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21830);
var state_21851__$1 = state_21851;
var statearr_21858_24035 = state_21851__$1;
(statearr_21858_24035[(2)] = inst_21839);

(statearr_21858_24035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (4))){
var inst_21777 = (state_21851[(8)]);
var inst_21777__$1 = (state_21851[(2)]);
var inst_21781 = (inst_21777__$1 == null);
var state_21851__$1 = (function (){var statearr_21859 = state_21851;
(statearr_21859[(8)] = inst_21777__$1);

return statearr_21859;
})();
if(cljs.core.truth_(inst_21781)){
var statearr_21860_24036 = state_21851__$1;
(statearr_21860_24036[(1)] = (5));

} else {
var statearr_21862_24037 = state_21851__$1;
(statearr_21862_24037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (15))){
var inst_21824 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
var statearr_21863_24039 = state_21851__$1;
(statearr_21863_24039[(2)] = inst_21824);

(statearr_21863_24039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (21))){
var inst_21844 = (state_21851[(2)]);
var state_21851__$1 = (function (){var statearr_21865 = state_21851;
(statearr_21865[(9)] = inst_21844);

return statearr_21865;
})();
var statearr_21867_24040 = state_21851__$1;
(statearr_21867_24040[(2)] = null);

(statearr_21867_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (13))){
var inst_21805 = (state_21851[(10)]);
var inst_21807 = cljs.core.chunked_seq_QMARK_(inst_21805);
var state_21851__$1 = state_21851;
if(inst_21807){
var statearr_21870_24041 = state_21851__$1;
(statearr_21870_24041[(1)] = (16));

} else {
var statearr_21871_24042 = state_21851__$1;
(statearr_21871_24042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (22))){
var inst_21836 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
if(cljs.core.truth_(inst_21836)){
var statearr_21874_24043 = state_21851__$1;
(statearr_21874_24043[(1)] = (23));

} else {
var statearr_21875_24044 = state_21851__$1;
(statearr_21875_24044[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (6))){
var inst_21777 = (state_21851[(8)]);
var inst_21832 = (state_21851[(11)]);
var inst_21830 = (state_21851[(7)]);
var inst_21830__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21777) : topic_fn.call(null, inst_21777));
var inst_21831 = cljs.core.deref(mults);
var inst_21832__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21831,inst_21830__$1);
var state_21851__$1 = (function (){var statearr_21882 = state_21851;
(statearr_21882[(11)] = inst_21832__$1);

(statearr_21882[(7)] = inst_21830__$1);

return statearr_21882;
})();
if(cljs.core.truth_(inst_21832__$1)){
var statearr_21883_24045 = state_21851__$1;
(statearr_21883_24045[(1)] = (19));

} else {
var statearr_21884_24046 = state_21851__$1;
(statearr_21884_24046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (25))){
var inst_21841 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
var statearr_21885_24047 = state_21851__$1;
(statearr_21885_24047[(2)] = inst_21841);

(statearr_21885_24047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (17))){
var inst_21805 = (state_21851[(10)]);
var inst_21815 = cljs.core.first(inst_21805);
var inst_21816 = cljs.core.async.muxch_STAR_(inst_21815);
var inst_21817 = cljs.core.async.close_BANG_(inst_21816);
var inst_21818 = cljs.core.next(inst_21805);
var inst_21791 = inst_21818;
var inst_21792 = null;
var inst_21793 = (0);
var inst_21794 = (0);
var state_21851__$1 = (function (){var statearr_21886 = state_21851;
(statearr_21886[(12)] = inst_21794);

(statearr_21886[(13)] = inst_21793);

(statearr_21886[(14)] = inst_21791);

(statearr_21886[(15)] = inst_21817);

(statearr_21886[(16)] = inst_21792);

return statearr_21886;
})();
var statearr_21887_24048 = state_21851__$1;
(statearr_21887_24048[(2)] = null);

(statearr_21887_24048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (3))){
var inst_21849 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21851__$1,inst_21849);
} else {
if((state_val_21852 === (12))){
var inst_21826 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
var statearr_21889_24053 = state_21851__$1;
(statearr_21889_24053[(2)] = inst_21826);

(statearr_21889_24053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (2))){
var state_21851__$1 = state_21851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21851__$1,(4),ch);
} else {
if((state_val_21852 === (23))){
var state_21851__$1 = state_21851;
var statearr_21890_24054 = state_21851__$1;
(statearr_21890_24054[(2)] = null);

(statearr_21890_24054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (19))){
var inst_21777 = (state_21851[(8)]);
var inst_21832 = (state_21851[(11)]);
var inst_21834 = cljs.core.async.muxch_STAR_(inst_21832);
var state_21851__$1 = state_21851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21851__$1,(22),inst_21834,inst_21777);
} else {
if((state_val_21852 === (11))){
var inst_21791 = (state_21851[(14)]);
var inst_21805 = (state_21851[(10)]);
var inst_21805__$1 = cljs.core.seq(inst_21791);
var state_21851__$1 = (function (){var statearr_21891 = state_21851;
(statearr_21891[(10)] = inst_21805__$1);

return statearr_21891;
})();
if(inst_21805__$1){
var statearr_21892_24059 = state_21851__$1;
(statearr_21892_24059[(1)] = (13));

} else {
var statearr_21893_24060 = state_21851__$1;
(statearr_21893_24060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (9))){
var inst_21828 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
var statearr_21894_24061 = state_21851__$1;
(statearr_21894_24061[(2)] = inst_21828);

(statearr_21894_24061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (5))){
var inst_21787 = cljs.core.deref(mults);
var inst_21788 = cljs.core.vals(inst_21787);
var inst_21789 = cljs.core.seq(inst_21788);
var inst_21791 = inst_21789;
var inst_21792 = null;
var inst_21793 = (0);
var inst_21794 = (0);
var state_21851__$1 = (function (){var statearr_21897 = state_21851;
(statearr_21897[(12)] = inst_21794);

(statearr_21897[(13)] = inst_21793);

(statearr_21897[(14)] = inst_21791);

(statearr_21897[(16)] = inst_21792);

return statearr_21897;
})();
var statearr_21898_24066 = state_21851__$1;
(statearr_21898_24066[(2)] = null);

(statearr_21898_24066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (14))){
var state_21851__$1 = state_21851;
var statearr_21902_24069 = state_21851__$1;
(statearr_21902_24069[(2)] = null);

(statearr_21902_24069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (16))){
var inst_21805 = (state_21851[(10)]);
var inst_21809 = cljs.core.chunk_first(inst_21805);
var inst_21810 = cljs.core.chunk_rest(inst_21805);
var inst_21811 = cljs.core.count(inst_21809);
var inst_21791 = inst_21810;
var inst_21792 = inst_21809;
var inst_21793 = inst_21811;
var inst_21794 = (0);
var state_21851__$1 = (function (){var statearr_21903 = state_21851;
(statearr_21903[(12)] = inst_21794);

(statearr_21903[(13)] = inst_21793);

(statearr_21903[(14)] = inst_21791);

(statearr_21903[(16)] = inst_21792);

return statearr_21903;
})();
var statearr_21905_24075 = state_21851__$1;
(statearr_21905_24075[(2)] = null);

(statearr_21905_24075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (10))){
var inst_21794 = (state_21851[(12)]);
var inst_21793 = (state_21851[(13)]);
var inst_21791 = (state_21851[(14)]);
var inst_21792 = (state_21851[(16)]);
var inst_21799 = cljs.core._nth(inst_21792,inst_21794);
var inst_21800 = cljs.core.async.muxch_STAR_(inst_21799);
var inst_21801 = cljs.core.async.close_BANG_(inst_21800);
var inst_21802 = (inst_21794 + (1));
var tmp21899 = inst_21793;
var tmp21900 = inst_21791;
var tmp21901 = inst_21792;
var inst_21791__$1 = tmp21900;
var inst_21792__$1 = tmp21901;
var inst_21793__$1 = tmp21899;
var inst_21794__$1 = inst_21802;
var state_21851__$1 = (function (){var statearr_21906 = state_21851;
(statearr_21906[(12)] = inst_21794__$1);

(statearr_21906[(13)] = inst_21793__$1);

(statearr_21906[(14)] = inst_21791__$1);

(statearr_21906[(17)] = inst_21801);

(statearr_21906[(16)] = inst_21792__$1);

return statearr_21906;
})();
var statearr_21908_24081 = state_21851__$1;
(statearr_21908_24081[(2)] = null);

(statearr_21908_24081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (18))){
var inst_21821 = (state_21851[(2)]);
var state_21851__$1 = state_21851;
var statearr_21910_24086 = state_21851__$1;
(statearr_21910_24086[(2)] = inst_21821);

(statearr_21910_24086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21852 === (8))){
var inst_21794 = (state_21851[(12)]);
var inst_21793 = (state_21851[(13)]);
var inst_21796 = (inst_21794 < inst_21793);
var inst_21797 = inst_21796;
var state_21851__$1 = state_21851;
if(cljs.core.truth_(inst_21797)){
var statearr_21911_24088 = state_21851__$1;
(statearr_21911_24088[(1)] = (10));

} else {
var statearr_21912_24089 = state_21851__$1;
(statearr_21912_24089[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_21918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21918[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_21918[(1)] = (1));

return statearr_21918;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_21851){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_21851);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e21919){var ex__19301__auto__ = e21919;
var statearr_21920_24090 = state_21851;
(statearr_21920_24090[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_21851[(4)]))){
var statearr_21921_24092 = state_21851;
(statearr_21921_24092[(1)] = cljs.core.first((state_21851[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24093 = state_21851;
state_21851 = G__24093;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_21851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_21851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_21922 = f__19590__auto__();
(statearr_21922[(6)] = c__19589__auto___24027);

return statearr_21922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__21929 = arguments.length;
switch (G__21929) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__21931 = arguments.length;
switch (G__21931) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__21947 = arguments.length;
switch (G__21947) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__19589__auto___24120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22010){
var state_val_22011 = (state_22010[(1)]);
if((state_val_22011 === (7))){
var state_22010__$1 = state_22010;
var statearr_22023_24122 = state_22010__$1;
(statearr_22023_24122[(2)] = null);

(statearr_22023_24122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (1))){
var state_22010__$1 = state_22010;
var statearr_22025_24130 = state_22010__$1;
(statearr_22025_24130[(2)] = null);

(statearr_22025_24130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (4))){
var inst_21962 = (state_22010[(7)]);
var inst_21963 = (state_22010[(8)]);
var inst_21965 = (inst_21963 < inst_21962);
var state_22010__$1 = state_22010;
if(cljs.core.truth_(inst_21965)){
var statearr_22027_24131 = state_22010__$1;
(statearr_22027_24131[(1)] = (6));

} else {
var statearr_22028_24132 = state_22010__$1;
(statearr_22028_24132[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (15))){
var inst_21995 = (state_22010[(9)]);
var inst_22001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_21995);
var state_22010__$1 = state_22010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22010__$1,(17),out,inst_22001);
} else {
if((state_val_22011 === (13))){
var inst_21995 = (state_22010[(9)]);
var inst_21995__$1 = (state_22010[(2)]);
var inst_21996 = cljs.core.some(cljs.core.nil_QMARK_,inst_21995__$1);
var state_22010__$1 = (function (){var statearr_22037 = state_22010;
(statearr_22037[(9)] = inst_21995__$1);

return statearr_22037;
})();
if(cljs.core.truth_(inst_21996)){
var statearr_22041_24133 = state_22010__$1;
(statearr_22041_24133[(1)] = (14));

} else {
var statearr_22042_24138 = state_22010__$1;
(statearr_22042_24138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (6))){
var state_22010__$1 = state_22010;
var statearr_22043_24140 = state_22010__$1;
(statearr_22043_24140[(2)] = null);

(statearr_22043_24140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (17))){
var inst_22003 = (state_22010[(2)]);
var state_22010__$1 = (function (){var statearr_22075 = state_22010;
(statearr_22075[(10)] = inst_22003);

return statearr_22075;
})();
var statearr_22076_24141 = state_22010__$1;
(statearr_22076_24141[(2)] = null);

(statearr_22076_24141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (3))){
var inst_22008 = (state_22010[(2)]);
var state_22010__$1 = state_22010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22010__$1,inst_22008);
} else {
if((state_val_22011 === (12))){
var _ = (function (){var statearr_22077 = state_22010;
(statearr_22077[(4)] = cljs.core.rest((state_22010[(4)])));

return statearr_22077;
})();
var state_22010__$1 = state_22010;
var ex22070 = (state_22010__$1[(2)]);
var statearr_22078_24142 = state_22010__$1;
(statearr_22078_24142[(5)] = ex22070);


if((ex22070 instanceof Object)){
var statearr_22079_24147 = state_22010__$1;
(statearr_22079_24147[(1)] = (11));

(statearr_22079_24147[(5)] = null);

} else {
throw ex22070;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (2))){
var inst_21961 = cljs.core.reset_BANG_(dctr,cnt);
var inst_21962 = cnt;
var inst_21963 = (0);
var state_22010__$1 = (function (){var statearr_22092 = state_22010;
(statearr_22092[(7)] = inst_21962);

(statearr_22092[(11)] = inst_21961);

(statearr_22092[(8)] = inst_21963);

return statearr_22092;
})();
var statearr_22093_24150 = state_22010__$1;
(statearr_22093_24150[(2)] = null);

(statearr_22093_24150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (11))){
var inst_21974 = (state_22010[(2)]);
var inst_21975 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22010__$1 = (function (){var statearr_22097 = state_22010;
(statearr_22097[(12)] = inst_21974);

return statearr_22097;
})();
var statearr_22099_24151 = state_22010__$1;
(statearr_22099_24151[(2)] = inst_21975);

(statearr_22099_24151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (9))){
var inst_21963 = (state_22010[(8)]);
var _ = (function (){var statearr_22101 = state_22010;
(statearr_22101[(4)] = cljs.core.cons((12),(state_22010[(4)])));

return statearr_22101;
})();
var inst_21981 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_21963) : chs__$1.call(null, inst_21963));
var inst_21982 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_21963) : done.call(null, inst_21963));
var inst_21983 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_21981,inst_21982);
var ___$1 = (function (){var statearr_22102 = state_22010;
(statearr_22102[(4)] = cljs.core.rest((state_22010[(4)])));

return statearr_22102;
})();
var state_22010__$1 = state_22010;
var statearr_22103_24158 = state_22010__$1;
(statearr_22103_24158[(2)] = inst_21983);

(statearr_22103_24158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (5))){
var inst_21993 = (state_22010[(2)]);
var state_22010__$1 = (function (){var statearr_22106 = state_22010;
(statearr_22106[(13)] = inst_21993);

return statearr_22106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22010__$1,(13),dchan);
} else {
if((state_val_22011 === (14))){
var inst_21998 = cljs.core.async.close_BANG_(out);
var state_22010__$1 = state_22010;
var statearr_22107_24162 = state_22010__$1;
(statearr_22107_24162[(2)] = inst_21998);

(statearr_22107_24162[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (16))){
var inst_22006 = (state_22010[(2)]);
var state_22010__$1 = state_22010;
var statearr_22110_24163 = state_22010__$1;
(statearr_22110_24163[(2)] = inst_22006);

(statearr_22110_24163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (10))){
var inst_21963 = (state_22010[(8)]);
var inst_21986 = (state_22010[(2)]);
var inst_21987 = (inst_21963 + (1));
var inst_21963__$1 = inst_21987;
var state_22010__$1 = (function (){var statearr_22111 = state_22010;
(statearr_22111[(14)] = inst_21986);

(statearr_22111[(8)] = inst_21963__$1);

return statearr_22111;
})();
var statearr_22113_24164 = state_22010__$1;
(statearr_22113_24164[(2)] = null);

(statearr_22113_24164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22011 === (8))){
var inst_21991 = (state_22010[(2)]);
var state_22010__$1 = state_22010;
var statearr_22142_24166 = state_22010__$1;
(statearr_22142_24166[(2)] = inst_21991);

(statearr_22142_24166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22143[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22143[(1)] = (1));

return statearr_22143;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22010){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22010);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22144){var ex__19301__auto__ = e22144;
var statearr_22145_24172 = state_22010;
(statearr_22145_24172[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22010[(4)]))){
var statearr_22146_24173 = state_22010;
(statearr_22146_24173[(1)] = cljs.core.first((state_22010[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24178 = state_22010;
state_22010 = G__24178;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22148 = f__19590__auto__();
(statearr_22148[(6)] = c__19589__auto___24120);

return statearr_22148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22155 = arguments.length;
switch (G__22155) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19589__auto___24193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22197){
var state_val_22198 = (state_22197[(1)]);
if((state_val_22198 === (7))){
var inst_22173 = (state_22197[(7)]);
var inst_22172 = (state_22197[(8)]);
var inst_22172__$1 = (state_22197[(2)]);
var inst_22173__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22172__$1,(0),null);
var inst_22174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22172__$1,(1),null);
var inst_22176 = (inst_22173__$1 == null);
var state_22197__$1 = (function (){var statearr_22207 = state_22197;
(statearr_22207[(7)] = inst_22173__$1);

(statearr_22207[(9)] = inst_22174);

(statearr_22207[(8)] = inst_22172__$1);

return statearr_22207;
})();
if(cljs.core.truth_(inst_22176)){
var statearr_22208_24205 = state_22197__$1;
(statearr_22208_24205[(1)] = (8));

} else {
var statearr_22209_24207 = state_22197__$1;
(statearr_22209_24207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (1))){
var inst_22159 = cljs.core.vec(chs);
var inst_22160 = inst_22159;
var state_22197__$1 = (function (){var statearr_22210 = state_22197;
(statearr_22210[(10)] = inst_22160);

return statearr_22210;
})();
var statearr_22211_24208 = state_22197__$1;
(statearr_22211_24208[(2)] = null);

(statearr_22211_24208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (4))){
var inst_22160 = (state_22197[(10)]);
var state_22197__$1 = state_22197;
return cljs.core.async.ioc_alts_BANG_(state_22197__$1,(7),inst_22160);
} else {
if((state_val_22198 === (6))){
var inst_22193 = (state_22197[(2)]);
var state_22197__$1 = state_22197;
var statearr_22212_24210 = state_22197__$1;
(statearr_22212_24210[(2)] = inst_22193);

(statearr_22212_24210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (3))){
var inst_22195 = (state_22197[(2)]);
var state_22197__$1 = state_22197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22197__$1,inst_22195);
} else {
if((state_val_22198 === (2))){
var inst_22160 = (state_22197[(10)]);
var inst_22165 = cljs.core.count(inst_22160);
var inst_22166 = (inst_22165 > (0));
var state_22197__$1 = state_22197;
if(cljs.core.truth_(inst_22166)){
var statearr_22220_24213 = state_22197__$1;
(statearr_22220_24213[(1)] = (4));

} else {
var statearr_22221_24214 = state_22197__$1;
(statearr_22221_24214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (11))){
var inst_22160 = (state_22197[(10)]);
var inst_22186 = (state_22197[(2)]);
var tmp22213 = inst_22160;
var inst_22160__$1 = tmp22213;
var state_22197__$1 = (function (){var statearr_22224 = state_22197;
(statearr_22224[(10)] = inst_22160__$1);

(statearr_22224[(11)] = inst_22186);

return statearr_22224;
})();
var statearr_22225_24230 = state_22197__$1;
(statearr_22225_24230[(2)] = null);

(statearr_22225_24230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (9))){
var inst_22173 = (state_22197[(7)]);
var state_22197__$1 = state_22197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22197__$1,(11),out,inst_22173);
} else {
if((state_val_22198 === (5))){
var inst_22191 = cljs.core.async.close_BANG_(out);
var state_22197__$1 = state_22197;
var statearr_22227_24233 = state_22197__$1;
(statearr_22227_24233[(2)] = inst_22191);

(statearr_22227_24233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (10))){
var inst_22189 = (state_22197[(2)]);
var state_22197__$1 = state_22197;
var statearr_22229_24237 = state_22197__$1;
(statearr_22229_24237[(2)] = inst_22189);

(statearr_22229_24237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22198 === (8))){
var inst_22160 = (state_22197[(10)]);
var inst_22173 = (state_22197[(7)]);
var inst_22174 = (state_22197[(9)]);
var inst_22172 = (state_22197[(8)]);
var inst_22179 = (function (){var cs = inst_22160;
var vec__22168 = inst_22172;
var v = inst_22173;
var c = inst_22174;
return (function (p1__22149_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22149_SHARP_);
});
})();
var inst_22180 = cljs.core.filterv(inst_22179,inst_22160);
var inst_22160__$1 = inst_22180;
var state_22197__$1 = (function (){var statearr_22236 = state_22197;
(statearr_22236[(10)] = inst_22160__$1);

return statearr_22236;
})();
var statearr_22239_24258 = state_22197__$1;
(statearr_22239_24258[(2)] = null);

(statearr_22239_24258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22244[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22244[(1)] = (1));

return statearr_22244;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22197){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22197);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22245){var ex__19301__auto__ = e22245;
var statearr_22246_24262 = state_22197;
(statearr_22246_24262[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22197[(4)]))){
var statearr_22247_24263 = state_22197;
(statearr_22247_24263[(1)] = cljs.core.first((state_22197[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24264 = state_22197;
state_22197 = G__24264;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22248 = f__19590__auto__();
(statearr_22248[(6)] = c__19589__auto___24193);

return statearr_22248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22250 = arguments.length;
switch (G__22250) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19589__auto___24277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22284){
var state_val_22285 = (state_22284[(1)]);
if((state_val_22285 === (7))){
var inst_22262 = (state_22284[(7)]);
var inst_22262__$1 = (state_22284[(2)]);
var inst_22264 = (inst_22262__$1 == null);
var inst_22265 = cljs.core.not(inst_22264);
var state_22284__$1 = (function (){var statearr_22295 = state_22284;
(statearr_22295[(7)] = inst_22262__$1);

return statearr_22295;
})();
if(inst_22265){
var statearr_22300_24292 = state_22284__$1;
(statearr_22300_24292[(1)] = (8));

} else {
var statearr_22301_24293 = state_22284__$1;
(statearr_22301_24293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (1))){
var inst_22256 = (0);
var state_22284__$1 = (function (){var statearr_22302 = state_22284;
(statearr_22302[(8)] = inst_22256);

return statearr_22302;
})();
var statearr_22303_24294 = state_22284__$1;
(statearr_22303_24294[(2)] = null);

(statearr_22303_24294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (4))){
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22284__$1,(7),ch);
} else {
if((state_val_22285 === (6))){
var inst_22278 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22304_24305 = state_22284__$1;
(statearr_22304_24305[(2)] = inst_22278);

(statearr_22304_24305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (3))){
var inst_22280 = (state_22284[(2)]);
var inst_22281 = cljs.core.async.close_BANG_(out);
var state_22284__$1 = (function (){var statearr_22306 = state_22284;
(statearr_22306[(9)] = inst_22280);

return statearr_22306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22284__$1,inst_22281);
} else {
if((state_val_22285 === (2))){
var inst_22256 = (state_22284[(8)]);
var inst_22258 = (inst_22256 < n);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22258)){
var statearr_22308_24326 = state_22284__$1;
(statearr_22308_24326[(1)] = (4));

} else {
var statearr_22312_24327 = state_22284__$1;
(statearr_22312_24327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (11))){
var inst_22256 = (state_22284[(8)]);
var inst_22270 = (state_22284[(2)]);
var inst_22271 = (inst_22256 + (1));
var inst_22256__$1 = inst_22271;
var state_22284__$1 = (function (){var statearr_22313 = state_22284;
(statearr_22313[(8)] = inst_22256__$1);

(statearr_22313[(10)] = inst_22270);

return statearr_22313;
})();
var statearr_22314_24331 = state_22284__$1;
(statearr_22314_24331[(2)] = null);

(statearr_22314_24331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (9))){
var state_22284__$1 = state_22284;
var statearr_22319_24333 = state_22284__$1;
(statearr_22319_24333[(2)] = null);

(statearr_22319_24333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (5))){
var state_22284__$1 = state_22284;
var statearr_22320_24338 = state_22284__$1;
(statearr_22320_24338[(2)] = null);

(statearr_22320_24338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (10))){
var inst_22275 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22321_24342 = state_22284__$1;
(statearr_22321_24342[(2)] = inst_22275);

(statearr_22321_24342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (8))){
var inst_22262 = (state_22284[(7)]);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22284__$1,(11),out,inst_22262);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22322[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22322[(1)] = (1));

return statearr_22322;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22284){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22284);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22323){var ex__19301__auto__ = e22323;
var statearr_22324_24351 = state_22284;
(statearr_22324_24351[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22284[(4)]))){
var statearr_22325_24357 = state_22284;
(statearr_22325_24357[(1)] = cljs.core.first((state_22284[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24363 = state_22284;
state_22284 = G__24363;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22327 = f__19590__auto__();
(statearr_22327[(6)] = c__19589__auto___24277);

return statearr_22327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22345 = (function (f,ch,meta22338,_,fn1,meta22346){
this.f = f;
this.ch = ch;
this.meta22338 = meta22338;
this._ = _;
this.fn1 = fn1;
this.meta22346 = meta22346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22347,meta22346__$1){
var self__ = this;
var _22347__$1 = this;
return (new cljs.core.async.t_cljs$core$async22345(self__.f,self__.ch,self__.meta22338,self__._,self__.fn1,meta22346__$1));
}));

(cljs.core.async.t_cljs$core$async22345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22347){
var self__ = this;
var _22347__$1 = this;
return self__.meta22346;
}));

(cljs.core.async.t_cljs$core$async22345.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22331_SHARP_){
var G__22348 = (((p1__22331_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22331_SHARP_) : self__.f.call(null, p1__22331_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22348) : f1.call(null, G__22348));
});
}));

(cljs.core.async.t_cljs$core$async22345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22338","meta22338",1623060976,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22337","cljs.core.async/t_cljs$core$async22337",29218283,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22346","meta22346",881324827,null)], null);
}));

(cljs.core.async.t_cljs$core$async22345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22345");

(cljs.core.async.t_cljs$core$async22345.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22345.
 */
cljs.core.async.__GT_t_cljs$core$async22345 = (function cljs$core$async$__GT_t_cljs$core$async22345(f,ch,meta22338,_,fn1,meta22346){
return (new cljs.core.async.t_cljs$core$async22345(f,ch,meta22338,_,fn1,meta22346));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22337 = (function (f,ch,meta22338){
this.f = f;
this.ch = ch;
this.meta22338 = meta22338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22339,meta22338__$1){
var self__ = this;
var _22339__$1 = this;
return (new cljs.core.async.t_cljs$core$async22337(self__.f,self__.ch,meta22338__$1));
}));

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22339){
var self__ = this;
var _22339__$1 = this;
return self__.meta22338;
}));

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async22345(self__.f,self__.ch,self__.meta22338,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22353 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22353) : self__.f.call(null, G__22353));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22338","meta22338",1623060976,null)], null);
}));

(cljs.core.async.t_cljs$core$async22337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22337");

(cljs.core.async.t_cljs$core$async22337.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22337.
 */
cljs.core.async.__GT_t_cljs$core$async22337 = (function cljs$core$async$__GT_t_cljs$core$async22337(f,ch,meta22338){
return (new cljs.core.async.t_cljs$core$async22337(f,ch,meta22338));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22337(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22363 = (function (f,ch,meta22364){
this.f = f;
this.ch = ch;
this.meta22364 = meta22364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22365,meta22364__$1){
var self__ = this;
var _22365__$1 = this;
return (new cljs.core.async.t_cljs$core$async22363(self__.f,self__.ch,meta22364__$1));
}));

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22365){
var self__ = this;
var _22365__$1 = this;
return self__.meta22364;
}));

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22364","meta22364",420958948,null)], null);
}));

(cljs.core.async.t_cljs$core$async22363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22363");

(cljs.core.async.t_cljs$core$async22363.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22363.
 */
cljs.core.async.__GT_t_cljs$core$async22363 = (function cljs$core$async$__GT_t_cljs$core$async22363(f,ch,meta22364){
return (new cljs.core.async.t_cljs$core$async22363(f,ch,meta22364));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22379 = (function (p,ch,meta22380){
this.p = p;
this.ch = ch;
this.meta22380 = meta22380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22381,meta22380__$1){
var self__ = this;
var _22381__$1 = this;
return (new cljs.core.async.t_cljs$core$async22379(self__.p,self__.ch,meta22380__$1));
}));

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22381){
var self__ = this;
var _22381__$1 = this;
return self__.meta22380;
}));

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22380","meta22380",-268124767,null)], null);
}));

(cljs.core.async.t_cljs$core$async22379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22379");

(cljs.core.async.t_cljs$core$async22379.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async22379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22379.
 */
cljs.core.async.__GT_t_cljs$core$async22379 = (function cljs$core$async$__GT_t_cljs$core$async22379(p,ch,meta22380){
return (new cljs.core.async.t_cljs$core$async22379(p,ch,meta22380));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async22379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22385 = arguments.length;
switch (G__22385) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19589__auto___24468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22411){
var state_val_22412 = (state_22411[(1)]);
if((state_val_22412 === (7))){
var inst_22407 = (state_22411[(2)]);
var state_22411__$1 = state_22411;
var statearr_22415_24470 = state_22411__$1;
(statearr_22415_24470[(2)] = inst_22407);

(statearr_22415_24470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (1))){
var state_22411__$1 = state_22411;
var statearr_22416_24473 = state_22411__$1;
(statearr_22416_24473[(2)] = null);

(statearr_22416_24473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (4))){
var inst_22393 = (state_22411[(7)]);
var inst_22393__$1 = (state_22411[(2)]);
var inst_22394 = (inst_22393__$1 == null);
var state_22411__$1 = (function (){var statearr_22417 = state_22411;
(statearr_22417[(7)] = inst_22393__$1);

return statearr_22417;
})();
if(cljs.core.truth_(inst_22394)){
var statearr_22419_24484 = state_22411__$1;
(statearr_22419_24484[(1)] = (5));

} else {
var statearr_22420_24489 = state_22411__$1;
(statearr_22420_24489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (6))){
var inst_22393 = (state_22411[(7)]);
var inst_22398 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22393) : p.call(null, inst_22393));
var state_22411__$1 = state_22411;
if(cljs.core.truth_(inst_22398)){
var statearr_22421_24497 = state_22411__$1;
(statearr_22421_24497[(1)] = (8));

} else {
var statearr_22422_24499 = state_22411__$1;
(statearr_22422_24499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (3))){
var inst_22409 = (state_22411[(2)]);
var state_22411__$1 = state_22411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22411__$1,inst_22409);
} else {
if((state_val_22412 === (2))){
var state_22411__$1 = state_22411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22411__$1,(4),ch);
} else {
if((state_val_22412 === (11))){
var inst_22401 = (state_22411[(2)]);
var state_22411__$1 = state_22411;
var statearr_22424_24509 = state_22411__$1;
(statearr_22424_24509[(2)] = inst_22401);

(statearr_22424_24509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (9))){
var state_22411__$1 = state_22411;
var statearr_22425_24510 = state_22411__$1;
(statearr_22425_24510[(2)] = null);

(statearr_22425_24510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (5))){
var inst_22396 = cljs.core.async.close_BANG_(out);
var state_22411__$1 = state_22411;
var statearr_22426_24511 = state_22411__$1;
(statearr_22426_24511[(2)] = inst_22396);

(statearr_22426_24511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (10))){
var inst_22404 = (state_22411[(2)]);
var state_22411__$1 = (function (){var statearr_22431 = state_22411;
(statearr_22431[(8)] = inst_22404);

return statearr_22431;
})();
var statearr_22436_24512 = state_22411__$1;
(statearr_22436_24512[(2)] = null);

(statearr_22436_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22412 === (8))){
var inst_22393 = (state_22411[(7)]);
var state_22411__$1 = state_22411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22411__$1,(11),out,inst_22393);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22451 = [null,null,null,null,null,null,null,null,null];
(statearr_22451[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22451[(1)] = (1));

return statearr_22451;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22411){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22411);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22455){var ex__19301__auto__ = e22455;
var statearr_22456_24542 = state_22411;
(statearr_22456_24542[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22411[(4)]))){
var statearr_22457_24545 = state_22411;
(statearr_22457_24545[(1)] = cljs.core.first((state_22411[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24556 = state_22411;
state_22411 = G__24556;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22462 = f__19590__auto__();
(statearr_22462[(6)] = c__19589__auto___24468);

return statearr_22462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22467 = arguments.length;
switch (G__22467) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19589__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22535){
var state_val_22536 = (state_22535[(1)]);
if((state_val_22536 === (7))){
var inst_22531 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22554_24591 = state_22535__$1;
(statearr_22554_24591[(2)] = inst_22531);

(statearr_22554_24591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (20))){
var inst_22501 = (state_22535[(7)]);
var inst_22512 = (state_22535[(2)]);
var inst_22513 = cljs.core.next(inst_22501);
var inst_22483 = inst_22513;
var inst_22484 = null;
var inst_22485 = (0);
var inst_22486 = (0);
var state_22535__$1 = (function (){var statearr_22563 = state_22535;
(statearr_22563[(8)] = inst_22512);

(statearr_22563[(9)] = inst_22483);

(statearr_22563[(10)] = inst_22485);

(statearr_22563[(11)] = inst_22486);

(statearr_22563[(12)] = inst_22484);

return statearr_22563;
})();
var statearr_22566_24620 = state_22535__$1;
(statearr_22566_24620[(2)] = null);

(statearr_22566_24620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (1))){
var state_22535__$1 = state_22535;
var statearr_22567_24629 = state_22535__$1;
(statearr_22567_24629[(2)] = null);

(statearr_22567_24629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (4))){
var inst_22472 = (state_22535[(13)]);
var inst_22472__$1 = (state_22535[(2)]);
var inst_22473 = (inst_22472__$1 == null);
var state_22535__$1 = (function (){var statearr_22569 = state_22535;
(statearr_22569[(13)] = inst_22472__$1);

return statearr_22569;
})();
if(cljs.core.truth_(inst_22473)){
var statearr_22570_24640 = state_22535__$1;
(statearr_22570_24640[(1)] = (5));

} else {
var statearr_22579_24641 = state_22535__$1;
(statearr_22579_24641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (15))){
var state_22535__$1 = state_22535;
var statearr_22589_24643 = state_22535__$1;
(statearr_22589_24643[(2)] = null);

(statearr_22589_24643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (21))){
var state_22535__$1 = state_22535;
var statearr_22590_24644 = state_22535__$1;
(statearr_22590_24644[(2)] = null);

(statearr_22590_24644[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (13))){
var inst_22483 = (state_22535[(9)]);
var inst_22485 = (state_22535[(10)]);
var inst_22486 = (state_22535[(11)]);
var inst_22484 = (state_22535[(12)]);
var inst_22497 = (state_22535[(2)]);
var inst_22498 = (inst_22486 + (1));
var tmp22586 = inst_22483;
var tmp22587 = inst_22485;
var tmp22588 = inst_22484;
var inst_22483__$1 = tmp22586;
var inst_22484__$1 = tmp22588;
var inst_22485__$1 = tmp22587;
var inst_22486__$1 = inst_22498;
var state_22535__$1 = (function (){var statearr_22599 = state_22535;
(statearr_22599[(9)] = inst_22483__$1);

(statearr_22599[(14)] = inst_22497);

(statearr_22599[(10)] = inst_22485__$1);

(statearr_22599[(11)] = inst_22486__$1);

(statearr_22599[(12)] = inst_22484__$1);

return statearr_22599;
})();
var statearr_22600_24651 = state_22535__$1;
(statearr_22600_24651[(2)] = null);

(statearr_22600_24651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (22))){
var state_22535__$1 = state_22535;
var statearr_22601_24655 = state_22535__$1;
(statearr_22601_24655[(2)] = null);

(statearr_22601_24655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (6))){
var inst_22472 = (state_22535[(13)]);
var inst_22481 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22472) : f.call(null, inst_22472));
var inst_22482 = cljs.core.seq(inst_22481);
var inst_22483 = inst_22482;
var inst_22484 = null;
var inst_22485 = (0);
var inst_22486 = (0);
var state_22535__$1 = (function (){var statearr_22603 = state_22535;
(statearr_22603[(9)] = inst_22483);

(statearr_22603[(10)] = inst_22485);

(statearr_22603[(11)] = inst_22486);

(statearr_22603[(12)] = inst_22484);

return statearr_22603;
})();
var statearr_22606_24657 = state_22535__$1;
(statearr_22606_24657[(2)] = null);

(statearr_22606_24657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (17))){
var inst_22501 = (state_22535[(7)]);
var inst_22505 = cljs.core.chunk_first(inst_22501);
var inst_22506 = cljs.core.chunk_rest(inst_22501);
var inst_22507 = cljs.core.count(inst_22505);
var inst_22483 = inst_22506;
var inst_22484 = inst_22505;
var inst_22485 = inst_22507;
var inst_22486 = (0);
var state_22535__$1 = (function (){var statearr_22607 = state_22535;
(statearr_22607[(9)] = inst_22483);

(statearr_22607[(10)] = inst_22485);

(statearr_22607[(11)] = inst_22486);

(statearr_22607[(12)] = inst_22484);

return statearr_22607;
})();
var statearr_22608_24669 = state_22535__$1;
(statearr_22608_24669[(2)] = null);

(statearr_22608_24669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (3))){
var inst_22533 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22535__$1,inst_22533);
} else {
if((state_val_22536 === (12))){
var inst_22521 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22613_24670 = state_22535__$1;
(statearr_22613_24670[(2)] = inst_22521);

(statearr_22613_24670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (2))){
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22535__$1,(4),in$);
} else {
if((state_val_22536 === (23))){
var inst_22529 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22614_24671 = state_22535__$1;
(statearr_22614_24671[(2)] = inst_22529);

(statearr_22614_24671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (19))){
var inst_22516 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22616_24672 = state_22535__$1;
(statearr_22616_24672[(2)] = inst_22516);

(statearr_22616_24672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (11))){
var inst_22483 = (state_22535[(9)]);
var inst_22501 = (state_22535[(7)]);
var inst_22501__$1 = cljs.core.seq(inst_22483);
var state_22535__$1 = (function (){var statearr_22617 = state_22535;
(statearr_22617[(7)] = inst_22501__$1);

return statearr_22617;
})();
if(inst_22501__$1){
var statearr_22618_24673 = state_22535__$1;
(statearr_22618_24673[(1)] = (14));

} else {
var statearr_22619_24674 = state_22535__$1;
(statearr_22619_24674[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (9))){
var inst_22523 = (state_22535[(2)]);
var inst_22524 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22535__$1 = (function (){var statearr_22623 = state_22535;
(statearr_22623[(15)] = inst_22523);

return statearr_22623;
})();
if(cljs.core.truth_(inst_22524)){
var statearr_22624_24675 = state_22535__$1;
(statearr_22624_24675[(1)] = (21));

} else {
var statearr_22627_24676 = state_22535__$1;
(statearr_22627_24676[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (5))){
var inst_22475 = cljs.core.async.close_BANG_(out);
var state_22535__$1 = state_22535;
var statearr_22628_24682 = state_22535__$1;
(statearr_22628_24682[(2)] = inst_22475);

(statearr_22628_24682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (14))){
var inst_22501 = (state_22535[(7)]);
var inst_22503 = cljs.core.chunked_seq_QMARK_(inst_22501);
var state_22535__$1 = state_22535;
if(inst_22503){
var statearr_22630_24683 = state_22535__$1;
(statearr_22630_24683[(1)] = (17));

} else {
var statearr_22632_24686 = state_22535__$1;
(statearr_22632_24686[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (16))){
var inst_22519 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22633_24688 = state_22535__$1;
(statearr_22633_24688[(2)] = inst_22519);

(statearr_22633_24688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (10))){
var inst_22486 = (state_22535[(11)]);
var inst_22484 = (state_22535[(12)]);
var inst_22495 = cljs.core._nth(inst_22484,inst_22486);
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22535__$1,(13),out,inst_22495);
} else {
if((state_val_22536 === (18))){
var inst_22501 = (state_22535[(7)]);
var inst_22510 = cljs.core.first(inst_22501);
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22535__$1,(20),out,inst_22510);
} else {
if((state_val_22536 === (8))){
var inst_22485 = (state_22535[(10)]);
var inst_22486 = (state_22535[(11)]);
var inst_22489 = (inst_22486 < inst_22485);
var inst_22490 = inst_22489;
var state_22535__$1 = state_22535;
if(cljs.core.truth_(inst_22490)){
var statearr_22634_24693 = state_22535__$1;
(statearr_22634_24693[(1)] = (10));

} else {
var statearr_22635_24694 = state_22535__$1;
(statearr_22635_24694[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19298__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19298__auto____0 = (function (){
var statearr_22636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19298__auto__);

(statearr_22636[(1)] = (1));

return statearr_22636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19298__auto____1 = (function (state_22535){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22535);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22637){var ex__19301__auto__ = e22637;
var statearr_22638_24696 = state_22535;
(statearr_22638_24696[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22535[(4)]))){
var statearr_22639_24698 = state_22535;
(statearr_22639_24698[(1)] = cljs.core.first((state_22535[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24699 = state_22535;
state_22535 = G__24699;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19298__auto__ = function(state_22535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19298__auto____1.call(this,state_22535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19298__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19298__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22640 = f__19590__auto__();
(statearr_22640[(6)] = c__19589__auto__);

return statearr_22640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));

return c__19589__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22642 = arguments.length;
switch (G__22642) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22644 = arguments.length;
switch (G__22644) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22649 = arguments.length;
switch (G__22649) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19589__auto___24722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var inst_22679 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22686_24725 = state_22684__$1;
(statearr_22686_24725[(2)] = inst_22679);

(statearr_22686_24725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (1))){
var inst_22661 = null;
var state_22684__$1 = (function (){var statearr_22687 = state_22684;
(statearr_22687[(7)] = inst_22661);

return statearr_22687;
})();
var statearr_22688_24727 = state_22684__$1;
(statearr_22688_24727[(2)] = null);

(statearr_22688_24727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (4))){
var inst_22664 = (state_22684[(8)]);
var inst_22664__$1 = (state_22684[(2)]);
var inst_22665 = (inst_22664__$1 == null);
var inst_22666 = cljs.core.not(inst_22665);
var state_22684__$1 = (function (){var statearr_22690 = state_22684;
(statearr_22690[(8)] = inst_22664__$1);

return statearr_22690;
})();
if(inst_22666){
var statearr_22694_24736 = state_22684__$1;
(statearr_22694_24736[(1)] = (5));

} else {
var statearr_22695_24738 = state_22684__$1;
(statearr_22695_24738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (6))){
var state_22684__$1 = state_22684;
var statearr_22696_24739 = state_22684__$1;
(statearr_22696_24739[(2)] = null);

(statearr_22696_24739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (3))){
var inst_22681 = (state_22684[(2)]);
var inst_22682 = cljs.core.async.close_BANG_(out);
var state_22684__$1 = (function (){var statearr_22698 = state_22684;
(statearr_22698[(9)] = inst_22681);

return statearr_22698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (2))){
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22684__$1,(4),ch);
} else {
if((state_val_22685 === (11))){
var inst_22664 = (state_22684[(8)]);
var inst_22673 = (state_22684[(2)]);
var inst_22661 = inst_22664;
var state_22684__$1 = (function (){var statearr_22701 = state_22684;
(statearr_22701[(7)] = inst_22661);

(statearr_22701[(10)] = inst_22673);

return statearr_22701;
})();
var statearr_22702_24743 = state_22684__$1;
(statearr_22702_24743[(2)] = null);

(statearr_22702_24743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (9))){
var inst_22664 = (state_22684[(8)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22684__$1,(11),out,inst_22664);
} else {
if((state_val_22685 === (5))){
var inst_22661 = (state_22684[(7)]);
var inst_22664 = (state_22684[(8)]);
var inst_22668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22664,inst_22661);
var state_22684__$1 = state_22684;
if(inst_22668){
var statearr_22704_24744 = state_22684__$1;
(statearr_22704_24744[(1)] = (8));

} else {
var statearr_22705_24747 = state_22684__$1;
(statearr_22705_24747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (10))){
var inst_22676 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22707_24753 = state_22684__$1;
(statearr_22707_24753[(2)] = inst_22676);

(statearr_22707_24753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (8))){
var inst_22661 = (state_22684[(7)]);
var tmp22703 = inst_22661;
var inst_22661__$1 = tmp22703;
var state_22684__$1 = (function (){var statearr_22708 = state_22684;
(statearr_22708[(7)] = inst_22661__$1);

return statearr_22708;
})();
var statearr_22709_24754 = state_22684__$1;
(statearr_22709_24754[(2)] = null);

(statearr_22709_24754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22711[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22711[(1)] = (1));

return statearr_22711;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22684){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22684);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22712){var ex__19301__auto__ = e22712;
var statearr_22713_24757 = state_22684;
(statearr_22713_24757[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22684[(4)]))){
var statearr_22714_24759 = state_22684;
(statearr_22714_24759[(1)] = cljs.core.first((state_22684[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24762 = state_22684;
state_22684 = G__24762;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22716 = f__19590__auto__();
(statearr_22716[(6)] = c__19589__auto___24722);

return statearr_22716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22721 = arguments.length;
switch (G__22721) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19589__auto___24772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22765){
var state_val_22766 = (state_22765[(1)]);
if((state_val_22766 === (7))){
var inst_22761 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
var statearr_22767_24773 = state_22765__$1;
(statearr_22767_24773[(2)] = inst_22761);

(statearr_22767_24773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (1))){
var inst_22725 = (new Array(n));
var inst_22726 = inst_22725;
var inst_22727 = (0);
var state_22765__$1 = (function (){var statearr_22768 = state_22765;
(statearr_22768[(7)] = inst_22726);

(statearr_22768[(8)] = inst_22727);

return statearr_22768;
})();
var statearr_22769_24774 = state_22765__$1;
(statearr_22769_24774[(2)] = null);

(statearr_22769_24774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (4))){
var inst_22733 = (state_22765[(9)]);
var inst_22733__$1 = (state_22765[(2)]);
var inst_22734 = (inst_22733__$1 == null);
var inst_22735 = cljs.core.not(inst_22734);
var state_22765__$1 = (function (){var statearr_22770 = state_22765;
(statearr_22770[(9)] = inst_22733__$1);

return statearr_22770;
})();
if(inst_22735){
var statearr_22771_24775 = state_22765__$1;
(statearr_22771_24775[(1)] = (5));

} else {
var statearr_22772_24776 = state_22765__$1;
(statearr_22772_24776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (15))){
var inst_22755 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
var statearr_22776_24778 = state_22765__$1;
(statearr_22776_24778[(2)] = inst_22755);

(statearr_22776_24778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (13))){
var state_22765__$1 = state_22765;
var statearr_22780_24779 = state_22765__$1;
(statearr_22780_24779[(2)] = null);

(statearr_22780_24779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (6))){
var inst_22727 = (state_22765[(8)]);
var inst_22751 = (inst_22727 > (0));
var state_22765__$1 = state_22765;
if(cljs.core.truth_(inst_22751)){
var statearr_22781_24781 = state_22765__$1;
(statearr_22781_24781[(1)] = (12));

} else {
var statearr_22782_24782 = state_22765__$1;
(statearr_22782_24782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (3))){
var inst_22763 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22765__$1,inst_22763);
} else {
if((state_val_22766 === (12))){
var inst_22726 = (state_22765[(7)]);
var inst_22753 = cljs.core.vec(inst_22726);
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22765__$1,(15),out,inst_22753);
} else {
if((state_val_22766 === (2))){
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22765__$1,(4),ch);
} else {
if((state_val_22766 === (11))){
var inst_22745 = (state_22765[(2)]);
var inst_22746 = (new Array(n));
var inst_22726 = inst_22746;
var inst_22727 = (0);
var state_22765__$1 = (function (){var statearr_22783 = state_22765;
(statearr_22783[(7)] = inst_22726);

(statearr_22783[(10)] = inst_22745);

(statearr_22783[(8)] = inst_22727);

return statearr_22783;
})();
var statearr_22784_24784 = state_22765__$1;
(statearr_22784_24784[(2)] = null);

(statearr_22784_24784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (9))){
var inst_22726 = (state_22765[(7)]);
var inst_22743 = cljs.core.vec(inst_22726);
var state_22765__$1 = state_22765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22765__$1,(11),out,inst_22743);
} else {
if((state_val_22766 === (5))){
var inst_22726 = (state_22765[(7)]);
var inst_22727 = (state_22765[(8)]);
var inst_22738 = (state_22765[(11)]);
var inst_22733 = (state_22765[(9)]);
var inst_22737 = (inst_22726[inst_22727] = inst_22733);
var inst_22738__$1 = (inst_22727 + (1));
var inst_22739 = (inst_22738__$1 < n);
var state_22765__$1 = (function (){var statearr_22792 = state_22765;
(statearr_22792[(11)] = inst_22738__$1);

(statearr_22792[(12)] = inst_22737);

return statearr_22792;
})();
if(cljs.core.truth_(inst_22739)){
var statearr_22793_24787 = state_22765__$1;
(statearr_22793_24787[(1)] = (8));

} else {
var statearr_22797_24788 = state_22765__$1;
(statearr_22797_24788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (14))){
var inst_22758 = (state_22765[(2)]);
var inst_22759 = cljs.core.async.close_BANG_(out);
var state_22765__$1 = (function (){var statearr_22799 = state_22765;
(statearr_22799[(13)] = inst_22758);

return statearr_22799;
})();
var statearr_22800_24790 = state_22765__$1;
(statearr_22800_24790[(2)] = inst_22759);

(statearr_22800_24790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (10))){
var inst_22749 = (state_22765[(2)]);
var state_22765__$1 = state_22765;
var statearr_22808_24792 = state_22765__$1;
(statearr_22808_24792[(2)] = inst_22749);

(statearr_22808_24792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22766 === (8))){
var inst_22726 = (state_22765[(7)]);
var inst_22738 = (state_22765[(11)]);
var tmp22798 = inst_22726;
var inst_22726__$1 = tmp22798;
var inst_22727 = inst_22738;
var state_22765__$1 = (function (){var statearr_22813 = state_22765;
(statearr_22813[(7)] = inst_22726__$1);

(statearr_22813[(8)] = inst_22727);

return statearr_22813;
})();
var statearr_22818_24794 = state_22765__$1;
(statearr_22818_24794[(2)] = null);

(statearr_22818_24794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22819[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22819[(1)] = (1));

return statearr_22819;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22765){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22765);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22825){var ex__19301__auto__ = e22825;
var statearr_22828_24797 = state_22765;
(statearr_22828_24797[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22765[(4)]))){
var statearr_22829_24798 = state_22765;
(statearr_22829_24798[(1)] = cljs.core.first((state_22765[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24805 = state_22765;
state_22765 = G__24805;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_22838 = f__19590__auto__();
(statearr_22838[(6)] = c__19589__auto___24772);

return statearr_22838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22853 = arguments.length;
switch (G__22853) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__19589__auto___24814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__19590__auto__ = (function (){var switch__19297__auto__ = (function (state_22920){
var state_val_22921 = (state_22920[(1)]);
if((state_val_22921 === (7))){
var inst_22916 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
var statearr_22936_24817 = state_22920__$1;
(statearr_22936_24817[(2)] = inst_22916);

(statearr_22936_24817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (1))){
var inst_22875 = [];
var inst_22876 = inst_22875;
var inst_22877 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22920__$1 = (function (){var statearr_22937 = state_22920;
(statearr_22937[(7)] = inst_22877);

(statearr_22937[(8)] = inst_22876);

return statearr_22937;
})();
var statearr_22938_24819 = state_22920__$1;
(statearr_22938_24819[(2)] = null);

(statearr_22938_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (4))){
var inst_22880 = (state_22920[(9)]);
var inst_22880__$1 = (state_22920[(2)]);
var inst_22882 = (inst_22880__$1 == null);
var inst_22883 = cljs.core.not(inst_22882);
var state_22920__$1 = (function (){var statearr_22941 = state_22920;
(statearr_22941[(9)] = inst_22880__$1);

return statearr_22941;
})();
if(inst_22883){
var statearr_22943_24824 = state_22920__$1;
(statearr_22943_24824[(1)] = (5));

} else {
var statearr_22944_24826 = state_22920__$1;
(statearr_22944_24826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (15))){
var inst_22876 = (state_22920[(8)]);
var inst_22908 = cljs.core.vec(inst_22876);
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22920__$1,(18),out,inst_22908);
} else {
if((state_val_22921 === (13))){
var inst_22903 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
var statearr_22947_24832 = state_22920__$1;
(statearr_22947_24832[(2)] = inst_22903);

(statearr_22947_24832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (6))){
var inst_22876 = (state_22920[(8)]);
var inst_22905 = inst_22876.length;
var inst_22906 = (inst_22905 > (0));
var state_22920__$1 = state_22920;
if(cljs.core.truth_(inst_22906)){
var statearr_22950_24836 = state_22920__$1;
(statearr_22950_24836[(1)] = (15));

} else {
var statearr_22951_24838 = state_22920__$1;
(statearr_22951_24838[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (17))){
var inst_22913 = (state_22920[(2)]);
var inst_22914 = cljs.core.async.close_BANG_(out);
var state_22920__$1 = (function (){var statearr_22953 = state_22920;
(statearr_22953[(10)] = inst_22913);

return statearr_22953;
})();
var statearr_22954_24841 = state_22920__$1;
(statearr_22954_24841[(2)] = inst_22914);

(statearr_22954_24841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (3))){
var inst_22918 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22920__$1,inst_22918);
} else {
if((state_val_22921 === (12))){
var inst_22876 = (state_22920[(8)]);
var inst_22896 = cljs.core.vec(inst_22876);
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22920__$1,(14),out,inst_22896);
} else {
if((state_val_22921 === (2))){
var state_22920__$1 = state_22920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22920__$1,(4),ch);
} else {
if((state_val_22921 === (11))){
var inst_22885 = (state_22920[(11)]);
var inst_22880 = (state_22920[(9)]);
var inst_22876 = (state_22920[(8)]);
var inst_22893 = inst_22876.push(inst_22880);
var tmp22955 = inst_22876;
var inst_22876__$1 = tmp22955;
var inst_22877 = inst_22885;
var state_22920__$1 = (function (){var statearr_22962 = state_22920;
(statearr_22962[(12)] = inst_22893);

(statearr_22962[(7)] = inst_22877);

(statearr_22962[(8)] = inst_22876__$1);

return statearr_22962;
})();
var statearr_22963_24844 = state_22920__$1;
(statearr_22963_24844[(2)] = null);

(statearr_22963_24844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (9))){
var inst_22877 = (state_22920[(7)]);
var inst_22889 = cljs.core.keyword_identical_QMARK_(inst_22877,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_22920__$1 = state_22920;
var statearr_22965_24846 = state_22920__$1;
(statearr_22965_24846[(2)] = inst_22889);

(statearr_22965_24846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (5))){
var inst_22885 = (state_22920[(11)]);
var inst_22877 = (state_22920[(7)]);
var inst_22880 = (state_22920[(9)]);
var inst_22886 = (state_22920[(13)]);
var inst_22885__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22880) : f.call(null, inst_22880));
var inst_22886__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22885__$1,inst_22877);
var state_22920__$1 = (function (){var statearr_22969 = state_22920;
(statearr_22969[(11)] = inst_22885__$1);

(statearr_22969[(13)] = inst_22886__$1);

return statearr_22969;
})();
if(inst_22886__$1){
var statearr_22970_24853 = state_22920__$1;
(statearr_22970_24853[(1)] = (8));

} else {
var statearr_22973_24858 = state_22920__$1;
(statearr_22973_24858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (14))){
var inst_22885 = (state_22920[(11)]);
var inst_22880 = (state_22920[(9)]);
var inst_22898 = (state_22920[(2)]);
var inst_22899 = [];
var inst_22900 = inst_22899.push(inst_22880);
var inst_22876 = inst_22899;
var inst_22877 = inst_22885;
var state_22920__$1 = (function (){var statearr_22976 = state_22920;
(statearr_22976[(14)] = inst_22900);

(statearr_22976[(7)] = inst_22877);

(statearr_22976[(8)] = inst_22876);

(statearr_22976[(15)] = inst_22898);

return statearr_22976;
})();
var statearr_22978_24874 = state_22920__$1;
(statearr_22978_24874[(2)] = null);

(statearr_22978_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (16))){
var state_22920__$1 = state_22920;
var statearr_22983_24876 = state_22920__$1;
(statearr_22983_24876[(2)] = null);

(statearr_22983_24876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (10))){
var inst_22891 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
if(cljs.core.truth_(inst_22891)){
var statearr_22984_24878 = state_22920__$1;
(statearr_22984_24878[(1)] = (11));

} else {
var statearr_22985_24883 = state_22920__$1;
(statearr_22985_24883[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (18))){
var inst_22910 = (state_22920[(2)]);
var state_22920__$1 = state_22920;
var statearr_22987_24884 = state_22920__$1;
(statearr_22987_24884[(2)] = inst_22910);

(statearr_22987_24884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22921 === (8))){
var inst_22886 = (state_22920[(13)]);
var state_22920__$1 = state_22920;
var statearr_22988_24885 = state_22920__$1;
(statearr_22988_24885[(2)] = inst_22886);

(statearr_22988_24885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__19298__auto__ = null;
var cljs$core$async$state_machine__19298__auto____0 = (function (){
var statearr_22993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22993[(0)] = cljs$core$async$state_machine__19298__auto__);

(statearr_22993[(1)] = (1));

return statearr_22993;
});
var cljs$core$async$state_machine__19298__auto____1 = (function (state_22920){
while(true){
var ret_value__19299__auto__ = (function (){try{while(true){
var result__19300__auto__ = switch__19297__auto__(state_22920);
if(cljs.core.keyword_identical_QMARK_(result__19300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19300__auto__;
}
break;
}
}catch (e22995){var ex__19301__auto__ = e22995;
var statearr_22996_24897 = state_22920;
(statearr_22996_24897[(2)] = ex__19301__auto__);


if(cljs.core.seq((state_22920[(4)]))){
var statearr_23007_24902 = state_22920;
(statearr_23007_24902[(1)] = cljs.core.first((state_22920[(4)])));

} else {
throw ex__19301__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24904 = state_22920;
state_22920 = G__24904;
continue;
} else {
return ret_value__19299__auto__;
}
break;
}
});
cljs$core$async$state_machine__19298__auto__ = function(state_22920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19298__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19298__auto____1.call(this,state_22920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19298__auto____0;
cljs$core$async$state_machine__19298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19298__auto____1;
return cljs$core$async$state_machine__19298__auto__;
})()
})();
var state__19591__auto__ = (function (){var statearr_23008 = f__19590__auto__();
(statearr_23008[(6)] = c__19589__auto___24814);

return statearr_23008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19591__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
