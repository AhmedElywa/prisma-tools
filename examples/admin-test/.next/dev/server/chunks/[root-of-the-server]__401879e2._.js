module.exports = [
"[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDeferredPromise",
    ()=>createDeferredPromise,
    "fakePromise",
    ()=>fakePromise,
    "fakeRejectPromise",
    ()=>fakeRejectPromise,
    "handleMaybePromise",
    ()=>handleMaybePromise,
    "isActualPromise",
    ()=>isActualPromise,
    "isPromise",
    ()=>isPromise,
    "iterateAsync",
    ()=>iterateAsync,
    "iterateAsyncVoid",
    ()=>iterateAsync,
    "mapAsyncIterator",
    ()=>mapAsyncIterator,
    "mapMaybePromise",
    ()=>mapMaybePromise,
    "promiseLikeFinally",
    ()=>promiseLikeFinally,
    "unfakePromise",
    ()=>unfakePromise
]);
const kFakePromise = Symbol.for('@whatwg-node/promise-helpers/FakePromise');
function isPromise(value) {
    return value?.then != null;
}
function isActualPromise(value) {
    const maybePromise = value;
    return maybePromise && maybePromise.then && maybePromise.catch && maybePromise.finally;
}
function handleMaybePromise(inputFactory, outputSuccessFactory, outputErrorFactory, finallyFactory) {
    let result$ = fakePromise().then(inputFactory).then(outputSuccessFactory, outputErrorFactory);
    if (finallyFactory) {
        result$ = result$.finally(finallyFactory);
    }
    return unfakePromise(result$);
}
function fakePromise(value) {
    if (value && isActualPromise(value)) {
        return value;
    }
    if (isPromise(value)) {
        return {
            then: (resolve, reject)=>fakePromise(value.then(resolve, reject)),
            catch: (reject)=>fakePromise(value.then((res)=>res, reject)),
            finally: (cb)=>fakePromise(cb ? promiseLikeFinally(value, cb) : value),
            [Symbol.toStringTag]: 'Promise'
        };
    }
    // Write a fake promise to avoid the promise constructor
    // being called with `new Promise` in the browser.
    return {
        then (resolve) {
            if (resolve) {
                try {
                    return fakePromise(resolve(value));
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        catch () {
            return this;
        },
        finally (cb) {
            if (cb) {
                try {
                    return fakePromise(cb()).then(()=>value, ()=>value);
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        [Symbol.toStringTag]: 'Promise',
        __fakePromiseValue: value,
        [kFakePromise]: 'resolved'
    };
}
function createDeferredPromise() {
    if (Promise.withResolvers) {
        return Promise.withResolvers();
    }
    let resolveFn;
    let rejectFn;
    const promise = new Promise(function deferredPromiseExecutor(resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    return {
        promise,
        get resolve () {
            return resolveFn;
        },
        get reject () {
            return rejectFn;
        }
    };
}
;
function iterateAsync(iterable, callback, results) {
    if (iterable?.length === 0) {
        return;
    }
    const iterator = iterable[Symbol.iterator]();
    let index = 0;
    function iterate() {
        const { done: endOfIterator, value } = iterator.next();
        if (endOfIterator) {
            return;
        }
        let endedEarly = false;
        function endEarly() {
            endedEarly = true;
        }
        return handleMaybePromise(function handleCallback() {
            return callback(value, endEarly, index++);
        }, function handleCallbackResult(result) {
            if (result) {
                results?.push(result);
            }
            if (endedEarly) {
                return;
            }
            return iterate();
        });
    }
    return iterate();
}
function fakeRejectPromise(error) {
    return {
        then (_resolve, reject) {
            if (reject) {
                try {
                    return fakePromise(reject(error));
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        catch (reject) {
            if (reject) {
                try {
                    return fakePromise(reject(error));
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        finally (cb) {
            if (cb) {
                try {
                    cb();
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        __fakeRejectError: error,
        [Symbol.toStringTag]: 'Promise',
        [kFakePromise]: 'rejected'
    };
}
function mapMaybePromise(input, onSuccess, onError) {
    return handleMaybePromise(()=>input, onSuccess, onError);
}
function mapAsyncIterator(iterator, onNext, onError, onEnd) {
    if (Symbol.asyncIterator in iterator) {
        iterator = iterator[Symbol.asyncIterator]();
    }
    let $return;
    let abruptClose;
    let onEndWithValue;
    if (onEnd) {
        let onEndWithValueResult /** R in onEndWithValue */ ;
        onEndWithValue = (value)=>{
            onEndWithValueResult ||= handleMaybePromise(onEnd, ()=>value, ()=>value);
            return onEndWithValueResult;
        };
    }
    if (typeof iterator.return === 'function') {
        $return = iterator.return;
        abruptClose = (error)=>{
            const rethrow = ()=>{
                throw error;
            };
            return $return.call(iterator).then(rethrow, rethrow);
        };
    }
    function mapResult(result) {
        if (result.done) {
            return onEndWithValue ? onEndWithValue(result) : result;
        }
        return handleMaybePromise(()=>result.value, (value)=>handleMaybePromise(()=>onNext(value), iteratorResult, abruptClose));
    }
    let mapReject;
    if (onError) {
        let onErrorResult;
        // Capture rejectCallback to ensure it cannot be null.
        const reject = onError;
        mapReject = (error)=>{
            onErrorResult ||= handleMaybePromise(()=>error, (error)=>handleMaybePromise(()=>reject(error), iteratorResult, abruptClose));
            return onErrorResult;
        };
    }
    return {
        next () {
            return iterator.next().then(mapResult, mapReject);
        },
        return () {
            const res$ = $return ? $return.call(iterator).then(mapResult, mapReject) : fakePromise({
                value: undefined,
                done: true
            });
            return onEndWithValue ? res$.then(onEndWithValue) : res$;
        },
        throw (error) {
            if (typeof iterator.throw === 'function') {
                return iterator.throw(error).then(mapResult, mapReject);
            }
            if (abruptClose) {
                return abruptClose(error);
            }
            return fakeRejectPromise(error);
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}
function iteratorResult(value) {
    return {
        value,
        done: false
    };
}
function isFakePromise(value) {
    return value?.[kFakePromise] === 'resolved';
}
function isFakeRejectPromise(value) {
    return value?.[kFakePromise] === 'rejected';
}
function promiseLikeFinally(value, onFinally) {
    if ('finally' in value) {
        return value.finally(onFinally);
    }
    return value.then((res)=>{
        const finallyRes = onFinally();
        return isPromise(finallyRes) ? finallyRes.then(()=>res) : res;
    }, (err)=>{
        const finallyRes = onFinally();
        if (isPromise(finallyRes)) {
            return finallyRes.then(()=>{
                throw err;
            });
        } else {
            throw err;
        }
    });
}
function unfakePromise(promise) {
    if (isFakePromise(promise)) {
        return promise.__fakePromiseValue;
    }
    if (isFakeRejectPromise(promise)) {
        throw promise.__fakeRejectError;
    }
    return promise;
}
}),
"[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPromise = isPromise;
exports.isActualPromise = isActualPromise;
exports.handleMaybePromise = handleMaybePromise;
exports.fakePromise = fakePromise;
exports.createDeferredPromise = createDeferredPromise;
exports.iterateAsync = iterateAsync;
exports.iterateAsyncVoid = iterateAsync;
exports.fakeRejectPromise = fakeRejectPromise;
exports.mapMaybePromise = mapMaybePromise;
exports.mapAsyncIterator = mapAsyncIterator;
exports.promiseLikeFinally = promiseLikeFinally;
exports.unfakePromise = unfakePromise;
const kFakePromise = Symbol.for('@whatwg-node/promise-helpers/FakePromise');
function isPromise(value) {
    return value?.then != null;
}
function isActualPromise(value) {
    const maybePromise = value;
    return maybePromise && maybePromise.then && maybePromise.catch && maybePromise.finally;
}
function handleMaybePromise(inputFactory, outputSuccessFactory, outputErrorFactory, finallyFactory) {
    let result$ = fakePromise().then(inputFactory).then(outputSuccessFactory, outputErrorFactory);
    if (finallyFactory) {
        result$ = result$.finally(finallyFactory);
    }
    return unfakePromise(result$);
}
function fakePromise(value) {
    if (value && isActualPromise(value)) {
        return value;
    }
    if (isPromise(value)) {
        return {
            then: (resolve, reject)=>fakePromise(value.then(resolve, reject)),
            catch: (reject)=>fakePromise(value.then((res)=>res, reject)),
            finally: (cb)=>fakePromise(cb ? promiseLikeFinally(value, cb) : value),
            [Symbol.toStringTag]: 'Promise'
        };
    }
    // Write a fake promise to avoid the promise constructor
    // being called with `new Promise` in the browser.
    return {
        then (resolve) {
            if (resolve) {
                try {
                    return fakePromise(resolve(value));
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        catch () {
            return this;
        },
        finally (cb) {
            if (cb) {
                try {
                    return fakePromise(cb()).then(()=>value, ()=>value);
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        [Symbol.toStringTag]: 'Promise',
        __fakePromiseValue: value,
        [kFakePromise]: 'resolved'
    };
}
function createDeferredPromise() {
    if (Promise.withResolvers) {
        return Promise.withResolvers();
    }
    let resolveFn;
    let rejectFn;
    const promise = new Promise(function deferredPromiseExecutor(resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    return {
        promise,
        get resolve () {
            return resolveFn;
        },
        get reject () {
            return rejectFn;
        }
    };
}
function iterateAsync(iterable, callback, results) {
    if (iterable?.length === 0) {
        return;
    }
    const iterator = iterable[Symbol.iterator]();
    let index = 0;
    function iterate() {
        const { done: endOfIterator, value } = iterator.next();
        if (endOfIterator) {
            return;
        }
        let endedEarly = false;
        function endEarly() {
            endedEarly = true;
        }
        return handleMaybePromise(function handleCallback() {
            return callback(value, endEarly, index++);
        }, function handleCallbackResult(result) {
            if (result) {
                results?.push(result);
            }
            if (endedEarly) {
                return;
            }
            return iterate();
        });
    }
    return iterate();
}
function fakeRejectPromise(error) {
    return {
        then (_resolve, reject) {
            if (reject) {
                try {
                    return fakePromise(reject(error));
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        catch (reject) {
            if (reject) {
                try {
                    return fakePromise(reject(error));
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        finally (cb) {
            if (cb) {
                try {
                    cb();
                } catch (err) {
                    return fakeRejectPromise(err);
                }
            }
            return this;
        },
        __fakeRejectError: error,
        [Symbol.toStringTag]: 'Promise',
        [kFakePromise]: 'rejected'
    };
}
function mapMaybePromise(input, onSuccess, onError) {
    return handleMaybePromise(()=>input, onSuccess, onError);
}
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */ function mapAsyncIterator(iterator, onNext, onError, onEnd) {
    if (Symbol.asyncIterator in iterator) {
        iterator = iterator[Symbol.asyncIterator]();
    }
    let $return;
    let abruptClose;
    let onEndWithValue;
    if (onEnd) {
        let onEndWithValueResult /** R in onEndWithValue */ ;
        onEndWithValue = (value)=>{
            onEndWithValueResult ||= handleMaybePromise(onEnd, ()=>value, ()=>value);
            return onEndWithValueResult;
        };
    }
    if (typeof iterator.return === 'function') {
        $return = iterator.return;
        abruptClose = (error)=>{
            const rethrow = ()=>{
                throw error;
            };
            return $return.call(iterator).then(rethrow, rethrow);
        };
    }
    function mapResult(result) {
        if (result.done) {
            return onEndWithValue ? onEndWithValue(result) : result;
        }
        return handleMaybePromise(()=>result.value, (value)=>handleMaybePromise(()=>onNext(value), iteratorResult, abruptClose));
    }
    let mapReject;
    if (onError) {
        let onErrorResult;
        // Capture rejectCallback to ensure it cannot be null.
        const reject = onError;
        mapReject = (error)=>{
            onErrorResult ||= handleMaybePromise(()=>error, (error)=>handleMaybePromise(()=>reject(error), iteratorResult, abruptClose));
            return onErrorResult;
        };
    }
    return {
        next () {
            return iterator.next().then(mapResult, mapReject);
        },
        return () {
            const res$ = $return ? $return.call(iterator).then(mapResult, mapReject) : fakePromise({
                value: undefined,
                done: true
            });
            return onEndWithValue ? res$.then(onEndWithValue) : res$;
        },
        throw (error) {
            if (typeof iterator.throw === 'function') {
                return iterator.throw(error).then(mapResult, mapReject);
            }
            if (abruptClose) {
                return abruptClose(error);
            }
            return fakeRejectPromise(error);
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}
function iteratorResult(value) {
    return {
        value,
        done: false
    };
}
function isFakePromise(value) {
    return value?.[kFakePromise] === 'resolved';
}
function isFakeRejectPromise(value) {
    return value?.[kFakePromise] === 'rejected';
}
function promiseLikeFinally(value, onFinally) {
    if ('finally' in value) {
        return value.finally(onFinally);
    }
    return value.then((res)=>{
        const finallyRes = onFinally();
        return isPromise(finallyRes) ? finallyRes.then(()=>res) : res;
    }, (err)=>{
        const finallyRes = onFinally();
        if (isPromise(finallyRes)) {
            return finallyRes.then(()=>{
                throw err;
            });
        } else {
            throw err;
        }
    });
}
function unfakePromise(promise) {
    if (isFakePromise(promise)) {
        return promise.__fakePromiseValue;
    }
    if (isFakeRejectPromise(promise)) {
        throw promise.__fakeRejectError;
    }
    return promise;
}
}),
"[project]/node_modules/.bun/@envelop+instrumentation@1.0.0/node_modules/@envelop/instrumentation/esm/instrumentation.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chain",
    ()=>chain,
    "composeInstrumentation",
    ()=>composeInstrumentation,
    "getInstrumentationAndPlugin",
    ()=>getInstrumentationAndPlugin,
    "getInstrumented",
    ()=>getInstrumented
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
function chain(first, next) {
    const merged = {
        ...next,
        ...first
    };
    for (const key of Object.keys(merged)){
        if (key in first && key in next) {
            merged[key] = (payload, wrapped)=>first[key](payload, ()=>next[key](payload, wrapped));
        }
    }
    return merged;
}
function composeInstrumentation(instrumentation) {
    return instrumentation.length > 0 ? instrumentation.reduce(chain) : undefined;
}
function getInstrumentationAndPlugin(plugins) {
    const pluginInstrumentation = [];
    const newPlugins = [];
    for (const { instrumentation, ...plugin } of plugins){
        if (instrumentation) {
            pluginInstrumentation.push(instrumentation);
        }
        newPlugins.push(plugin);
    }
    return {
        pluginInstrumentation,
        plugins: newPlugins
    };
}
const getInstrumented = (payload)=>({
        /**
     * Wraps the `wrapped` function with the given `instrument` wrapper.
     * @returns The wrapped function, or `undefined` if the instrument is `undefined`.
     */ fn (instrument, wrapped) {
            if (!instrument) {
                return wrapped;
            }
            return (...args)=>{
                let result;
                instrument(payload, ()=>{
                    result = wrapped(...args);
                });
                return result;
            };
        },
        /**
     * Wraps the `wrapped` function with the given `instrument` wrapper.
     * @returns The wrapped function, or `undefined` if the instrument is `undefined`.
     */ asyncFn (instrument, wrapped) {
            if (!instrument) {
                return wrapped;
            }
            return (...args)=>{
                let result;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>instrument(payload, ()=>{
                        result = wrapped(...args);
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(result) ? result.then(()=>undefined) : undefined;
                    }), ()=>{
                    return result;
                });
            };
        }
    });
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/document-string-map.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "documentStringMap",
    ()=>documentStringMap,
    "getDocumentString",
    ()=>getDocumentString
]);
const documentStringMap = new WeakMap();
function getDocumentString(document, print) {
    let documentSource = documentStringMap.get(document);
    if (!documentSource && print) {
        documentSource = print(document);
        documentStringMap.set(document, documentSource);
    }
    return documentSource;
}
;
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "envelopIsIntrospectionSymbol",
    ()=>envelopIsIntrospectionSymbol,
    "errorAsyncIterator",
    ()=>errorAsyncIterator,
    "finalAsyncIterator",
    ()=>finalAsyncIterator,
    "handleStreamOrSingleExecutionResult",
    ()=>handleStreamOrSingleExecutionResult,
    "isAsyncIterable",
    ()=>isAsyncIterable,
    "isIntrospectionOperationString",
    ()=>isIntrospectionOperationString,
    "makeExecute",
    ()=>makeExecute,
    "makeSubscribe",
    ()=>makeSubscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
const envelopIsIntrospectionSymbol = Symbol('ENVELOP_IS_INTROSPECTION');
function isIntrospectionOperationString(operation) {
    return (typeof operation === 'string' ? operation : operation.body).indexOf('__schema') !== -1;
}
function getSubscribeArgs(args) {
    return args.length === 1 ? args[0] : {
        schema: args[0],
        document: args[1],
        rootValue: args[2],
        contextValue: args[3],
        variableValues: args[4],
        operationName: args[5],
        fieldResolver: args[6],
        subscribeFieldResolver: args[7]
    };
}
const makeSubscribe = (subscribeFn)=>(...polyArgs)=>subscribeFn(getSubscribeArgs(polyArgs));
;
function getExecuteArgs(args) {
    return args.length === 1 ? args[0] : {
        schema: args[0],
        document: args[1],
        rootValue: args[2],
        contextValue: args[3],
        variableValues: args[4],
        operationName: args[5],
        fieldResolver: args[6],
        typeResolver: args[7]
    };
}
const makeExecute = (executeFn)=>(...polyArgs)=>executeFn(getExecuteArgs(polyArgs));
function isAsyncIterable(maybeAsyncIterable) {
    return typeof maybeAsyncIterable === 'object' && maybeAsyncIterable != null && typeof maybeAsyncIterable[Symbol.asyncIterator] === 'function';
}
function handleStreamOrSingleExecutionResult(payload, fn) {
    if (isAsyncIterable(payload.result)) {
        return {
            onNext: fn
        };
    }
    fn({
        args: payload.args,
        result: payload.result,
        setResult: payload.setResult
    });
    return undefined;
}
function finalAsyncIterator(source, onFinal) {
    let iterator;
    function ensureIterator() {
        if (!iterator) {
            iterator = source[Symbol.asyncIterator]();
        }
        return iterator;
    }
    let isDone = false;
    return {
        [Symbol.asyncIterator] () {
            return this;
        },
        next () {
            return ensureIterator().next().then((result)=>{
                if (result.done && isDone === false) {
                    isDone = true;
                    onFinal();
                }
                return result;
            });
        },
        return () {
            const promise = ensureIterator().return?.();
            if (isDone === false) {
                isDone = true;
                onFinal();
            }
            return promise || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                done: true,
                value: undefined
            });
        },
        throw (error) {
            const promise = ensureIterator().throw?.();
            if (promise) {
                return promise;
            }
            // if the source has no throw method we just re-throw error
            // usually throw is not called anyways
            throw error;
        },
        [Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')] () {
            // This is a no-op, but we need to implement it to ensure that the AsyncGenerator
            // is properly cleaned up when the subscription is disposed.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])();
        }
    };
}
function errorAsyncIterator(source, onError) {
    let iterator;
    function ensureIterator() {
        if (!iterator) {
            iterator = source[Symbol.asyncIterator]();
        }
        return iterator;
    }
    return {
        [Symbol.asyncIterator] () {
            return this;
        },
        next () {
            return ensureIterator().next().catch((error)=>{
                onError(error);
                return {
                    done: true,
                    value: undefined
                };
            });
        },
        return () {
            const promise = ensureIterator().return?.();
            return promise || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                done: true,
                value: undefined
            });
        },
        throw (error) {
            const promise = ensureIterator().throw?.();
            if (promise) {
                return promise;
            }
            // if the source has no throw method we just re-throw error
            // usually throw is not called anyways
            throw error;
        },
        [Symbol.asyncDispose || Symbol.for('Symbol.asyncDispose')] () {
            // This is a no-op, but we need to implement it to ensure that the AsyncGenerator
            // is properly cleaned up when the subscription is disposed.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])();
        }
    };
}
;
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/orchestrator.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEnvelopOrchestrator",
    ()=>createEnvelopOrchestrator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+instrumentation@1.0.0/node_modules/@envelop/instrumentation/esm/instrumentation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$document$2d$string$2d$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/document-string-map.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>");
;
;
;
;
function throwEngineFunctionError(name) {
    throw Error(`No \`${name}\` function found! Register it using "useEngine" plugin.`);
}
function createEnvelopOrchestrator({ plugins }) {
    let schema = null;
    let initDone = false;
    const parse = ()=>throwEngineFunctionError('parse');
    const validate = ()=>throwEngineFunctionError('validate');
    const execute = ()=>throwEngineFunctionError('execute');
    const subscribe = ()=>throwEngineFunctionError('subscribe');
    let instrumentation;
    // Define the initial method for replacing the GraphQL schema, this is needed in order
    // to allow setting the schema from the onPluginInit callback. We also need to make sure
    // here not to call the same plugin that initiated the schema switch.
    const replaceSchema = (newSchema, ignorePluginIndex = -1)=>{
        if (schema === newSchema) {
            return;
        }
        schema = newSchema;
        if (initDone) {
            for (const [i, plugin] of plugins.entries()){
                if (i !== ignorePluginIndex) {
                    plugin.onSchemaChange && plugin.onSchemaChange({
                        schema,
                        replaceSchema: (schemaToSet)=>{
                            replaceSchema(schemaToSet, i);
                        }
                    });
                }
            }
        }
    };
    const contextErrorHandlers = [];
    // Iterate all plugins and trigger onPluginInit
    for(let i = 0; i < plugins.length; i++){
        const plugin = plugins[i];
        const pluginsToAdd = [];
        plugin.onPluginInit?.({
            plugins,
            addPlugin: (newPlugin)=>{
                pluginsToAdd.push(newPlugin);
            },
            setSchema: (modifiedSchema)=>replaceSchema(modifiedSchema, i),
            registerContextErrorHandler: (handler)=>contextErrorHandlers.push(handler)
        });
        pluginsToAdd.length && plugins.splice(i + 1, 0, ...pluginsToAdd);
    }
    // A set of before callbacks defined here in order to allow it to be used later
    const beforeCallbacks = {
        init: [],
        parse: [],
        validate: [],
        subscribe: [],
        execute: [],
        context: []
    };
    for (const { onContextBuilding, onExecute, onParse, onSubscribe, onValidate, onEnveloped, instrumentation: pluginInstrumentation } of plugins){
        onEnveloped && beforeCallbacks.init.push(onEnveloped);
        onContextBuilding && beforeCallbacks.context.push(onContextBuilding);
        onExecute && beforeCallbacks.execute.push(onExecute);
        onParse && beforeCallbacks.parse.push(onParse);
        onSubscribe && beforeCallbacks.subscribe.push(onSubscribe);
        onValidate && beforeCallbacks.validate.push(onValidate);
        if (pluginInstrumentation) {
            instrumentation = instrumentation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chain"])(instrumentation, pluginInstrumentation) : pluginInstrumentation;
        }
    }
    const init = (initialContext)=>{
        for (const [i, onEnveloped] of beforeCallbacks.init.entries()){
            onEnveloped({
                context: initialContext,
                extendContext: (extension)=>{
                    if (!initialContext) {
                        return;
                    }
                    Object.assign(initialContext, extension);
                },
                setSchema: (modifiedSchema)=>replaceSchema(modifiedSchema, i)
            });
        }
    };
    const customParse = beforeCallbacks.parse.length ? (initialContext)=>(source, parseOptions)=>{
            let result = null;
            let parseFn = parse;
            const context = initialContext;
            const afterCalls = [];
            for (const onParse of beforeCallbacks.parse){
                const afterFn = onParse({
                    context,
                    extendContext: (extension)=>{
                        Object.assign(context, extension);
                    },
                    params: {
                        source,
                        options: parseOptions
                    },
                    parseFn,
                    setParseFn: (newFn)=>{
                        parseFn = newFn;
                    },
                    setParsedDocument: (newDoc)=>{
                        result = newDoc;
                    }
                });
                if (afterFn) {
                    afterCalls.push(afterFn);
                }
            }
            if (result === null) {
                try {
                    result = parseFn(source, parseOptions);
                } catch (e) {
                    result = e;
                }
            }
            for (const afterCb of afterCalls){
                afterCb({
                    context,
                    extendContext: (extension)=>{
                        Object.assign(context, extension);
                    },
                    replaceParseResult: (newResult)=>{
                        result = newResult;
                    },
                    result
                });
            }
            if (result === null) {
                throw new Error(`Failed to parse document.`);
            }
            if (result instanceof Error) {
                throw result;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$document$2d$string$2d$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["documentStringMap"].set(result, source.toString());
            return result;
        } : ()=>parse;
    const customValidate = beforeCallbacks.validate.length ? (initialContext)=>(schema, documentAST, rules, typeInfo, validationOptions)=>{
            let actualRules = rules ? [
                ...rules
            ] : undefined;
            let validateFn = validate;
            let result = null;
            const context = initialContext;
            const afterCalls = [];
            for (const onValidate of beforeCallbacks.validate){
                const afterFn = onValidate({
                    context,
                    extendContext: (extension)=>{
                        Object.assign(context, extension);
                    },
                    params: {
                        schema,
                        documentAST,
                        rules: actualRules,
                        typeInfo,
                        options: validationOptions
                    },
                    validateFn,
                    addValidationRule: (rule)=>{
                        if (!actualRules) {
                            actualRules = [];
                        }
                        actualRules.push(rule);
                    },
                    setValidationFn: (newFn)=>{
                        validateFn = newFn;
                    },
                    setResult: (newResults)=>{
                        result = newResults;
                    }
                });
                afterFn && afterCalls.push(afterFn);
            }
            if (!result) {
                result = validateFn(schema, documentAST, actualRules, typeInfo, validationOptions);
            }
            if (!result) {
                return;
            }
            const valid = result.length === 0;
            for (const afterCb of afterCalls){
                afterCb({
                    valid,
                    result,
                    context,
                    extendContext: (extension)=>{
                        Object.assign(context, extension);
                    },
                    setResult: (newResult)=>{
                        result = newResult;
                    }
                });
            }
            return result;
        } : ()=>validate;
    const customContextFactory = beforeCallbacks.context.length ? (initialContext)=>(orchestratorCtx)=>{
            const afterCalls = [];
            // In order to have access to the "last working" context object we keep this outside of the try block:
            const context = initialContext;
            if (orchestratorCtx) {
                Object.assign(context, orchestratorCtx);
            }
            let isBreakingContextBuilding = false;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(beforeCallbacks.context, (onContext, stopEarly)=>onContext({
                        context,
                        extendContext: (extension)=>{
                            Object.assign(context, extension);
                        },
                        breakContextBuilding: ()=>{
                            isBreakingContextBuilding = true;
                            stopEarly();
                        }
                    }), afterCalls), ()=>{
                if (!isBreakingContextBuilding) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(afterCalls, (afterCb)=>afterCb({
                                context,
                                extendContext (extension) {
                                    Object.assign(context, extension);
                                }
                            })), ()=>context);
                }
                return context;
            }, (err)=>{
                let error = err;
                for (const errorCb of contextErrorHandlers){
                    errorCb({
                        context,
                        error,
                        setError: (err)=>{
                            error = err;
                        }
                    });
                }
                throw error;
            });
        } : (initialContext)=>(orchestratorCtx)=>{
            if (orchestratorCtx) {
                Object.assign(initialContext, orchestratorCtx);
            }
            return initialContext;
        };
    const useCustomSubscribe = beforeCallbacks.subscribe.length;
    const customSubscribe = useCustomSubscribe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeSubscribe"])((args)=>{
        let subscribeFn = subscribe;
        const afterCallbacks = [];
        const context = args.contextValue || {};
        let result;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(beforeCallbacks.subscribe, (onSubscribe, endEarly)=>onSubscribe({
                    subscribeFn,
                    setSubscribeFn: (newSubscribeFn)=>{
                        subscribeFn = newSubscribeFn;
                    },
                    context,
                    extendContext: (extension)=>{
                        Object.assign(context, extension);
                    },
                    args: args,
                    setResultAndStopExecution: (stopResult)=>{
                        result = stopResult;
                        endEarly();
                    }
                }), afterCallbacks), ()=>{
            const afterCalls = [];
            const subscribeErrorHandlers = [];
            for (const { onSubscribeResult, onSubscribeError } of afterCallbacks){
                if (onSubscribeResult) {
                    afterCalls.push(onSubscribeResult);
                }
                if (onSubscribeError) {
                    subscribeErrorHandlers.push(onSubscribeError);
                }
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>result || subscribeFn(args), (result)=>{
                const onNextHandler = [];
                const onEndHandler = [];
                for (const afterCb of afterCalls){
                    const hookResult = afterCb({
                        args: args,
                        result,
                        setResult: (newResult)=>{
                            result = newResult;
                        }
                    });
                    if (hookResult) {
                        if (hookResult.onNext) {
                            onNextHandler.push(hookResult.onNext);
                        }
                        if (hookResult.onEnd) {
                            onEndHandler.push(hookResult.onEnd);
                        }
                    }
                }
                if (onNextHandler.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapAsyncIterator"])(result, (result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(onNextHandler, (onNext)=>onNext({
                                    args: args,
                                    result,
                                    setResult: (newResult)=>result = newResult
                                })), ()=>result));
                }
                if (onEndHandler.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["finalAsyncIterator"])(result, ()=>{
                        for (const onEnd of onEndHandler){
                            onEnd();
                        }
                    });
                }
                if (subscribeErrorHandlers.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorAsyncIterator"])(result, (err)=>{
                        let error = err;
                        for (const handler of subscribeErrorHandlers){
                            handler({
                                error,
                                setError: (err)=>{
                                    error = err;
                                }
                            });
                        }
                        throw error;
                    });
                }
                return result;
            });
        });
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeSubscribe"])(subscribe);
    const useCustomExecute = beforeCallbacks.execute.length;
    const customExecute = useCustomExecute ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeExecute"])((args)=>{
        let executeFn = execute;
        let result;
        const afterCalls = [];
        const afterDoneCalls = [];
        const context = args.contextValue || {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(beforeCallbacks.execute, (onExecute, endEarly)=>onExecute({
                    executeFn,
                    setExecuteFn: (newExecuteFn)=>{
                        executeFn = newExecuteFn;
                    },
                    setResultAndStopExecution: (stopResult)=>{
                        result = stopResult;
                        endEarly();
                    },
                    context,
                    extendContext: (extension)=>{
                        if (typeof extension === 'object') {
                            Object.assign(context, extension);
                        } else {
                            throw new Error(`Invalid context extension provided! Expected "object", got: "${JSON.stringify(extension)}" (${typeof extension})`);
                        }
                    },
                    args: args
                }), afterCalls), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>result || executeFn({
                    ...args,
                    contextValue: context
                }), (result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(afterCalls, (afterCb)=>afterCb.onExecuteDone?.({
                            args: args,
                            result,
                            setResult: (newResult)=>{
                                result = newResult;
                            }
                        }), afterDoneCalls), ()=>{
                    const onNextHandler = [];
                    const onEndHandler = [];
                    for (const { onNext, onEnd } of afterDoneCalls){
                        if (onNext) {
                            onNextHandler.push(onNext);
                        }
                        if (onEnd) {
                            onEndHandler.push(onEnd);
                        }
                    }
                    if (onNextHandler.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapAsyncIterator"])(result, (result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsyncVoid"])(onNextHandler, (onNext)=>onNext({
                                        args: args,
                                        result: result,
                                        setResult: (newResult)=>{
                                            result = newResult;
                                        }
                                    })), ()=>result));
                    }
                    if (onEndHandler.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["finalAsyncIterator"])(result, ()=>{
                            for (const onEnd of onEndHandler){
                                onEnd();
                            }
                        });
                    }
                    return result;
                })));
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeExecute"])(execute);
    initDone = true;
    // This is done in order to trigger the first schema available, to allow plugins that needs the schema
    // eagerly to have it.
    if (schema) {
        for (const [i, plugin] of plugins.entries()){
            plugin.onSchemaChange?.({
                schema,
                replaceSchema: (modifiedSchema)=>replaceSchema(modifiedSchema, i)
            });
        }
    }
    return {
        getCurrentSchema () {
            return schema;
        },
        init,
        parse: customParse,
        validate: customValidate,
        execute: customExecute,
        subscribe: customSubscribe,
        contextFactory: customContextFactory,
        instrumentation
    };
}
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/create.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "envelop",
    ()=>envelop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+instrumentation@1.0.0/node_modules/@envelop/instrumentation/esm/instrumentation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$orchestrator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/orchestrator.js [app-route] (ecmascript)");
;
;
function notEmpty(value) {
    return value != null;
}
function envelop(options) {
    const plugins = options.plugins.filter(notEmpty);
    const orchestrator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$orchestrator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEnvelopOrchestrator"])({
        plugins
    });
    const instrumentation = orchestrator.instrumentation;
    const getEnveloped = (context = {})=>{
        const instrumented = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumented"])({
            context
        });
        const typedOrchestrator = orchestrator;
        instrumented.fn(instrumentation?.init, orchestrator.init)(context);
        return {
            parse: instrumented.fn(instrumentation?.parse, typedOrchestrator.parse(context)),
            validate: instrumented.fn(instrumentation?.validate, typedOrchestrator.validate(context)),
            contextFactory: instrumented.fn(instrumentation?.context, typedOrchestrator.contextFactory(context)),
            execute: instrumented.asyncFn(instrumentation?.execute, typedOrchestrator.execute),
            subscribe: instrumented.asyncFn(instrumentation?.subscribe, typedOrchestrator.subscribe),
            schema: typedOrchestrator.getCurrentSchema()
        };
    };
    getEnveloped._plugins = plugins;
    return getEnveloped;
}
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/plugins/use-engine.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEngine",
    ()=>useEngine
]);
const useEngine = (engine)=>{
    return {
        onExecute: ({ setExecuteFn })=>{
            if (engine.execute) {
                setExecuteFn(engine.execute);
            }
        },
        onParse: ({ setParseFn })=>{
            if (engine.parse) {
                setParseFn(engine.parse);
            }
        },
        onValidate: ({ setValidationFn, addValidationRule })=>{
            if (engine.validate) {
                setValidationFn(engine.validate);
            }
            engine.specifiedRules?.map(addValidationRule);
        },
        onSubscribe: ({ setSubscribeFn })=>{
            if (engine.subscribe) {
                setSubscribeFn(engine.subscribe);
            }
        }
    };
};
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/plugins/use-extend-context.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExtendContext",
    ()=>useExtendContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
const useExtendContext = (contextFactory)=>({
        onContextBuilding ({ context, extendContext }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>contextFactory(context), (result)=>extendContext(result));
        }
    });
}),
"[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/plugins/use-masked-errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ERROR_MESSAGE",
    ()=>DEFAULT_ERROR_MESSAGE,
    "createDefaultMaskError",
    ()=>createDefaultMaskError,
    "defaultMaskError",
    ()=>defaultMaskError,
    "isGraphQLError",
    ()=>isGraphQLError,
    "isOriginalGraphQLError",
    ()=>isOriginalGraphQLError,
    "useMaskedErrors",
    ()=>useMaskedErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>");
;
const DEFAULT_ERROR_MESSAGE = 'Unexpected error.';
function isGraphQLError(error) {
    return error instanceof Error && error.name === 'GraphQLError';
}
function isOriginalGraphQLError(error) {
    if (isGraphQLError(error)) {
        if (error.originalError != null) {
            return isOriginalGraphQLError(error.originalError);
        }
        return true;
    }
    return false;
}
function createSerializableGraphQLError(message, originalError, isDev) {
    const error = new Error(message);
    error.name = 'GraphQLError';
    if (isDev) {
        const extensions = originalError instanceof Error ? {
            message: originalError.message,
            stack: originalError.stack
        } : {
            message: String(originalError)
        };
        Object.defineProperty(error, 'extensions', {
            get () {
                return extensions;
            }
        });
    }
    Object.defineProperty(error, 'toJSON', {
        value () {
            return {
                message: error.message,
                extensions: error.extensions
            };
        }
    });
    return error;
}
const createDefaultMaskError = (isDev)=>(error, message)=>{
        if (isOriginalGraphQLError(error)) {
            return error;
        }
        return createSerializableGraphQLError(message, error, isDev);
    };
const isDev = globalThis.process?.env?.NODE_ENV === 'development';
const defaultMaskError = createDefaultMaskError(isDev);
const makeHandleResult = (maskError, message)=>({ result, setResult })=>{
        if (result.errors != null) {
            setResult({
                ...result,
                errors: result.errors.map((error)=>maskError(error, message))
            });
        }
    };
function useMaskedErrors(opts) {
    const maskError = opts?.maskError ?? defaultMaskError;
    const message = opts?.errorMessage || DEFAULT_ERROR_MESSAGE;
    const handleResult = makeHandleResult(maskError, message);
    return {
        onPluginInit (context) {
            context.registerContextErrorHandler(({ error, setError })=>{
                setError(maskError(error, message));
            });
        },
        onExecute () {
            return {
                onExecuteDone (payload) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleStreamOrSingleExecutionResult"])(payload, handleResult);
                }
            };
        },
        onSubscribe () {
            return {
                onSubscribeResult (payload) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleStreamOrSingleExecutionResult"])(payload, handleResult);
                },
                onSubscribeError ({ error, setError }) {
                    setError(maskError(error, message));
                }
            };
        }
    };
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/memoize.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoize1",
    ()=>memoize1,
    "memoize2",
    ()=>memoize2,
    "memoize2of4",
    ()=>memoize2of4,
    "memoize2of5",
    ()=>memoize2of5,
    "memoize3",
    ()=>memoize3,
    "memoize4",
    ()=>memoize4,
    "memoize5",
    ()=>memoize5
]);
function memoize1(fn) {
    const memoize1cache = new WeakMap();
    return function memoized(a1) {
        const cachedValue = memoize1cache.get(a1);
        if (cachedValue === undefined) {
            const newValue = fn(a1);
            memoize1cache.set(a1, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
function memoize2(fn) {
    const memoize2cache = new WeakMap();
    return function memoized(a1, a2) {
        let cache2 = memoize2cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize2cache.set(a1, cache2);
            const newValue = fn(a1, a2);
            cache2.set(a2, newValue);
            return newValue;
        }
        const cachedValue = cache2.get(a2);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2);
            cache2.set(a2, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
function memoize3(fn) {
    const memoize3Cache = new WeakMap();
    return function memoized(a1, a2, a3) {
        let cache2 = memoize3Cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize3Cache.set(a1, cache2);
            const cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const newValue = fn(a1, a2, a3);
            cache3.set(a3, newValue);
            return newValue;
        }
        let cache3 = cache2.get(a2);
        if (!cache3) {
            cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const newValue = fn(a1, a2, a3);
            cache3.set(a3, newValue);
            return newValue;
        }
        const cachedValue = cache3.get(a3);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3);
            cache3.set(a3, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
function memoize4(fn) {
    const memoize4Cache = new WeakMap();
    return function memoized(a1, a2, a3, a4) {
        let cache2 = memoize4Cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize4Cache.set(a1, cache2);
            const cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        let cache3 = cache2.get(a2);
        if (!cache3) {
            cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        const cache4 = cache3.get(a3);
        if (!cache4) {
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        const cachedValue = cache4.get(a4);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4);
            cache4.set(a4, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
function memoize5(fn) {
    const memoize5Cache = new WeakMap();
    return function memoized(a1, a2, a3, a4, a5) {
        let cache2 = memoize5Cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize5Cache.set(a1, cache2);
            const cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        let cache3 = cache2.get(a2);
        if (!cache3) {
            cache3 = new WeakMap();
            cache2.set(a2, cache3);
            const cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        let cache4 = cache3.get(a3);
        if (!cache4) {
            cache4 = new WeakMap();
            cache3.set(a3, cache4);
            const cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        let cache5 = cache4.get(a4);
        if (!cache5) {
            cache5 = new WeakMap();
            cache4.set(a4, cache5);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        const cachedValue = cache5.get(a5);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4, a5);
            cache5.set(a5, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
function memoize2of4(fn) {
    const memoize2of4cache = new WeakMap();
    return function memoized(a1, a2, a3, a4) {
        let cache2 = memoize2of4cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize2of4cache.set(a1, cache2);
            const newValue = fn(a1, a2, a3, a4);
            cache2.set(a2, newValue);
            return newValue;
        }
        const cachedValue = cache2.get(a2);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4);
            cache2.set(a2, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
function memoize2of5(fn) {
    const memoize2of4cache = new WeakMap();
    return function memoized(a1, a2, a3, a4, a5) {
        let cache2 = memoize2of4cache.get(a1);
        if (!cache2) {
            cache2 = new WeakMap();
            memoize2of4cache.set(a1, cache2);
            const newValue = fn(a1, a2, a3, a4, a5);
            cache2.set(a2, newValue);
            return newValue;
        }
        const cachedValue = cache2.get(a2);
        if (cachedValue === undefined) {
            const newValue = fn(a1, a2, a3, a4, a5);
            cache2.set(a2, newValue);
            return newValue;
        }
        return cachedValue;
    };
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/AccumulatorMap.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ES6 Map with additional `add` method to accumulate items.
 */ __turbopack_context__.s([
    "AccumulatorMap",
    ()=>AccumulatorMap
]);
class AccumulatorMap extends Map {
    get [Symbol.toStringTag]() {
        return 'AccumulatorMap';
    }
    add(key, item) {
        const group = this.get(key);
        if (group === undefined) {
            this.set(key, [
                item
            ]);
        } else {
            group.push(item);
        }
    }
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/directives.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraphQLDeferDirective",
    ()=>GraphQLDeferDirective,
    "GraphQLStreamDirective",
    ()=>GraphQLStreamDirective
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$directiveLocation$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/directiveLocation.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/scalars.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$directives$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/directives.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
;
const GraphQLDeferDirective = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$directives$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLDirective"]({
    name: 'defer',
    description: 'Directs the executor to defer this fragment when the `if` argument is true or undefined.',
    locations: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$directiveLocation$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DirectiveLocation"].FRAGMENT_SPREAD,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$directiveLocation$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DirectiveLocation"].INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLBoolean"]),
            description: 'Deferred when true or undefined.',
            defaultValue: true
        },
        label: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLString"],
            description: 'Unique name'
        }
    }
});
const GraphQLStreamDirective = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$directives$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLDirective"]({
    name: 'stream',
    description: 'Directs the executor to stream plural fields when the `if` argument is true or undefined.',
    locations: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$directiveLocation$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DirectiveLocation"].FIELD
    ],
    args: {
        if: {
            type: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLBoolean"]),
            description: 'Stream when true or undefined.',
            defaultValue: true
        },
        label: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLString"],
            description: 'Unique name'
        },
        initialCount: {
            defaultValue: 0,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLInt"],
            description: 'Number of items to return immediately'
        }
    }
});
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/collectFields.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectFields",
    ()=>collectFields,
    "collectSubFields",
    ()=>collectSubFields,
    "doesFragmentConditionMatch",
    ()=>doesFragmentConditionMatch,
    "getDeferValues",
    ()=>getDeferValues,
    "getFieldEntryKey",
    ()=>getFieldEntryKey,
    "shouldIncludeNode",
    ()=>shouldIncludeNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/values.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$directives$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/directives.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$typeFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/typeFromAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$AccumulatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/AccumulatorMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$directives$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/directives.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/memoize.js [app-route] (ecmascript)");
;
;
;
;
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, patches, visitedFragmentNames) {
    for (const selection of selectionSet.selections){
        switch(selection.kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].FIELD:
                {
                    if (!shouldIncludeNode(variableValues, selection)) {
                        continue;
                    }
                    fields.add(getFieldEntryKey(selection), selection);
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].INLINE_FRAGMENT:
                {
                    if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
                        continue;
                    }
                    const defer = getDeferValues(variableValues, selection);
                    if (defer) {
                        const patchFields = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$AccumulatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccumulatorMap"]();
                        collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, patchFields, patches, visitedFragmentNames);
                        patches.push({
                            label: defer.label,
                            fields: patchFields
                        });
                    } else {
                        collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, patches, visitedFragmentNames);
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD:
                {
                    const fragName = selection.name.value;
                    if (!shouldIncludeNode(variableValues, selection)) {
                        continue;
                    }
                    const defer = getDeferValues(variableValues, selection);
                    if (visitedFragmentNames.has(fragName) && !defer) {
                        continue;
                    }
                    const fragment = fragments[fragName];
                    if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
                        continue;
                    }
                    if (!defer) {
                        visitedFragmentNames.add(fragName);
                    }
                    if (defer) {
                        const patchFields = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$AccumulatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccumulatorMap"]();
                        collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, patchFields, patches, visitedFragmentNames);
                        patches.push({
                            label: defer.label,
                            fields: patchFields
                        });
                    } else {
                        collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, patches, visitedFragmentNames);
                    }
                    break;
                }
        }
    }
}
function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
    const fields = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$AccumulatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccumulatorMap"]();
    const patches = [];
    collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, patches, new Set());
    return {
        fields,
        patches
    };
}
function shouldIncludeNode(variableValues, node) {
    const skip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDirectiveValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$directives$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLSkipDirective"], node, variableValues);
    if (skip?.['if'] === true) {
        return false;
    }
    const include = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDirectiveValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$directives$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLIncludeDirective"], node, variableValues);
    if (include?.['if'] === false) {
        return false;
    }
    return true;
}
function doesFragmentConditionMatch(schema, fragment, type) {
    const typeConditionNode = fragment.typeCondition;
    if (!typeConditionNode) {
        return true;
    }
    const conditionalType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$typeFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeFromAST"])(schema, typeConditionNode);
    if (conditionalType === type) {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbstractType"])(conditionalType)) {
        const possibleTypes = schema.getPossibleTypes(conditionalType);
        return possibleTypes.includes(type);
    }
    return false;
}
function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
}
function getDeferValues(variableValues, node) {
    const defer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDirectiveValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$directives$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLDeferDirective"], node, variableValues);
    if (!defer) {
        return;
    }
    if (defer['if'] === false) {
        return;
    }
    return {
        label: typeof defer['label'] === 'string' ? defer['label'] : undefined
    };
}
const collectSubFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize5"])(function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
    const subFieldNodes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$AccumulatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccumulatorMap"]();
    const visitedFragmentNames = new Set();
    const subPatches = [];
    const subFieldsAndPatches = {
        fields: subFieldNodes,
        patches: subPatches
    };
    for (const node of fieldNodes){
        if (node.selectionSet) {
            collectFieldsImpl(schema, fragments, variableValues, returnType, node.selectionSet, subFieldNodes, subPatches, visitedFragmentNames);
        }
    }
    return subFieldsAndPatches;
});
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/Path.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Given a Path and a key, return a new Path containing the new key.
 */ __turbopack_context__.s([
    "addPath",
    ()=>addPath,
    "pathToArray",
    ()=>pathToArray,
    "printPathArray",
    ()=>printPathArray
]);
function addPath(prev, key, typename) {
    return {
        prev,
        key,
        typename
    };
}
function pathToArray(path) {
    const flattened = [];
    let curr = path;
    while(curr){
        flattened.push(curr.key);
        curr = curr.prev;
    }
    return flattened.reverse();
}
function printPathArray(path) {
    return path.map((key)=>typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key).join('');
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGraphQLError",
    ()=>createGraphQLError,
    "getSchemaCoordinate",
    ()=>getSchemaCoordinate,
    "isGraphQLErrorLike",
    ()=>isGraphQLErrorLike,
    "locatedError",
    ()=>locatedError,
    "relocatedError",
    ()=>relocatedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$locatedError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/locatedError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/GraphQLError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$version$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/version.mjs [app-route] (ecmascript)");
;
const possibleGraphQLErrorProperties = [
    'message',
    'locations',
    'path',
    'nodes',
    'source',
    'positions',
    'originalError',
    'name',
    'stack',
    'extensions',
    'coordinate'
];
function isGraphQLErrorLike(error) {
    return error != null && typeof error === 'object' && Object.keys(error).every((key)=>possibleGraphQLErrorProperties.includes(key));
}
function createGraphQLError(message, options) {
    if (options?.originalError && !(options.originalError instanceof Error) && isGraphQLErrorLike(options.originalError)) {
        options.originalError = createGraphQLError(options.originalError.message, options.originalError);
    }
    // To avoid type error on graphql <16, we have to use an any type here
    const Constructor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"];
    const error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$version$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionInfo"].major >= 16 ? new Constructor(message, options) : new Constructor(message, options?.nodes, options?.source, options?.positions, options?.path, options?.originalError, options?.extensions);
    if (options?.coordinate && error.coordinate == null) {
        Object.defineProperties(error, {
            coordinate: {
                value: options.coordinate,
                enumerable: true,
                configurable: true
            }
        });
    }
    return error;
}
function getSchemaCoordinate(error) {
    return error.coordinate;
}
function locatedError(rawError, nodes, path, info) {
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$locatedError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, nodes, path);
    // `graphql` locatedError is only changing path and nodes if it is not already defined
    if (!error.coordinate && info && error.coordinate == null) {
        const coordinate = `${info.parentType.name}.${info.fieldName}`;
        Object.defineProperties(error, {
            coordinate: {
                value: coordinate,
                enumerable: true,
                configurable: true
            }
        });
    }
    return error;
}
function relocatedError(originalError, path, info) {
    return createGraphQLError(originalError.message, {
        nodes: originalError.nodes,
        source: originalError.source,
        positions: originalError.positions,
        path: path == null ? originalError.path : path,
        originalError,
        extensions: originalError.extensions,
        coordinate: info ? `${info.parentType.name}.${info.fieldName}` : undefined
    });
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/jsutils.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "isIterableObject",
    ()=>isIterableObject,
    "isObjectLike",
    ()=>isObjectLike,
    "promiseReduce",
    ()=>promiseReduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
function isIterableObject(value) {
    return value != null && typeof value === 'object' && Symbol.iterator in value;
}
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
;
function promiseReduce(values, callbackFn, initialValue) {
    let accumulator = initialValue;
    for (const value of values){
        accumulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>accumulator, (resolved)=>callbackFn(resolved, value));
    }
    return accumulator;
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/getArgumentValues.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArgumentValues",
    ()=>getArgumentValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/cross-inspect@1.0.1/node_modules/cross-inspect/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/printer.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$valueFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/valueFromAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/jsutils.js [app-route] (ecmascript) <locals>");
;
;
;
;
function getArgumentValues(def, node, variableValues = {}) {
    const coercedValues = {};
    const argumentNodes = node.arguments ?? [];
    const argNodeMap = argumentNodes.reduce((prev, arg)=>({
            ...prev,
            [arg.name.value]: arg
        }), {});
    for (const { name, type: argType, defaultValue } of def.args){
        const argumentNode = argNodeMap[name];
        if (!argumentNode) {
            if (defaultValue !== undefined) {
                coercedValues[name] = defaultValue;
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(argType)) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Argument "${name}" of required type "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(argType)}" ` + 'was not provided.', {
                    nodes: [
                        node
                    ]
                });
            }
            continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].NULL;
        if (valueNode.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasOwnProperty"])(variableValues, variableName)) {
                if (defaultValue !== undefined) {
                    coercedValues[name] = defaultValue;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(argType)) {
                    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Argument "${name}" of required type "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(argType)}" ` + `was provided the variable "$${variableName}" which was not provided a runtime value.`, {
                        nodes: [
                            valueNode
                        ]
                    });
                }
                continue;
            }
            isNull = variableValues[variableName] == null;
        }
        if (isNull && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(argType)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Argument "${name}" of non-null type "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(argType)}" ` + 'must not be null.', {
                nodes: [
                    valueNode
                ]
            });
        }
        const coercedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$valueFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["valueFromAST"])(valueNode, argType, variableValues);
        if (coercedValue === undefined) {
            // Note: ValuesOfCorrectTypeRule validation should catch this before
            // execution. This is a runtime check to ensure execution does not
            // continue with an invalid argument value.
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Argument "${name}" has invalid value ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["print"])(valueNode)}.`, {
                nodes: [
                    valueNode
                ]
            });
        }
        coercedValues[name] = coercedValue;
    }
    return coercedValues;
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/rootTypes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefinedRootType",
    ()=>getDefinedRootType,
    "getRootTypeMap",
    ()=>getRootTypeMap,
    "getRootTypeNames",
    ()=>getRootTypeNames,
    "getRootTypes",
    ()=>getRootTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/memoize.js [app-route] (ecmascript)");
;
;
function getDefinedRootType(schema, operation, nodes) {
    const rootTypeMap = getRootTypeMap(schema);
    const rootType = rootTypeMap.get(operation);
    if (rootType == null) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Schema is not configured to execute ${operation} operation.`, {
            nodes
        });
    }
    return rootType;
}
const getRootTypeNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize1"])(function getRootTypeNames(schema) {
    const rootTypes = getRootTypes(schema);
    return new Set([
        ...rootTypes
    ].map((type)=>type.name));
});
const getRootTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize1"])(function getRootTypes(schema) {
    const rootTypeMap = getRootTypeMap(schema);
    return new Set(rootTypeMap.values());
});
const getRootTypeMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize1"])(function getRootTypeMap(schema) {
    const rootTypeMap = new Map();
    const queryType = schema.getQueryType();
    if (queryType) {
        rootTypeMap.set('query', queryType);
    }
    const mutationType = schema.getMutationType();
    if (mutationType) {
        rootTypeMap.set('mutation', mutationType);
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType) {
        rootTypeMap.set('subscription', subscriptionType);
    }
    return rootTypeMap;
});
}),
"[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/isAsyncIterable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAsyncIterable",
    ()=>isAsyncIterable
]);
function isAsyncIterable(value) {
    return value?.[Symbol.asyncIterator] != null;
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGraphQLError",
    ()=>createGraphQLError,
    "getSchemaCoordinate",
    ()=>getSchemaCoordinate,
    "isGraphQLErrorLike",
    ()=>isGraphQLErrorLike,
    "locatedError",
    ()=>locatedError,
    "relocatedError",
    ()=>relocatedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$locatedError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/locatedError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/GraphQLError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$version$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/version.mjs [app-route] (ecmascript)");
;
const possibleGraphQLErrorProperties = [
    'message',
    'locations',
    'path',
    'nodes',
    'source',
    'positions',
    'originalError',
    'name',
    'stack',
    'extensions',
    'coordinate'
];
function isGraphQLErrorLike(error) {
    return error != null && typeof error === 'object' && Object.keys(error).every((key)=>possibleGraphQLErrorProperties.includes(key));
}
function createGraphQLError(message, options) {
    if (options?.originalError && !(options.originalError instanceof Error) && isGraphQLErrorLike(options.originalError)) {
        options.originalError = createGraphQLError(options.originalError.message, options.originalError);
    }
    // To avoid type error on graphql <16, we have to use an any type here
    const Constructor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"];
    const error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$version$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionInfo"].major >= 16 ? new Constructor(message, options) : new Constructor(message, options?.nodes, options?.source, options?.positions, options?.path, options?.originalError, options?.extensions);
    if (options?.coordinate && error.coordinate == null) {
        Object.defineProperties(error, {
            coordinate: {
                value: options.coordinate,
                enumerable: true,
                configurable: true
            }
        });
    }
    return error;
}
function getSchemaCoordinate(error) {
    return error.coordinate;
}
function locatedError(rawError, nodes, path, info) {
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$locatedError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, nodes, path);
    // `graphql` locatedError is only changing path and nodes if it is not already defined
    if (!error.coordinate && info && error.coordinate == null) {
        const coordinate = `${info.parentType.name}.${info.fieldName}`;
        Object.defineProperties(error, {
            coordinate: {
                value: coordinate,
                enumerable: true,
                configurable: true
            }
        });
    }
    return error;
}
function relocatedError(originalError, path, info) {
    return createGraphQLError(originalError.message, {
        nodes: originalError.nodes,
        source: originalError.source,
        positions: originalError.positions,
        path: path == null ? originalError.path : path,
        originalError,
        extensions: originalError.extensions,
        coordinate: info ? `${info.parentType.name}.${info.fieldName}` : undefined
    });
}
}),
"[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/isAsyncIterable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAsyncIterable",
    ()=>isAsyncIterable
]);
function isAsyncIterable(value) {
    return value?.[Symbol.asyncIterator] != null;
}
}),
"[project]/node_modules/.bun/cross-inspect@1.0.1/node_modules/cross-inspect/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inspect",
    ()=>inspect
]);
// Taken from graphql-js
// https://github.com/graphql/graphql-js/blob/main/src/jsutils/inspect.ts
const MAX_RECURSIVE_DEPTH = 3;
function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatError(value) {
    // eslint-disable-next-line no-constant-condition
    if (value.name = 'GraphQLError') {
        return value.toString();
    }
    return `${value.name}: ${value.message};\n ${value.stack}`;
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
        return 'null';
    }
    if (value instanceof Error) {
        if (value.name === 'AggregateError') {
            return formatError(value) + '\n' + formatArray(value.errors, previouslySeenValues);
        }
        return formatError(value);
    }
    if (previouslySeenValues.includes(value)) {
        return '[Circular]';
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON();
        // check for infinite recursion
        if (jsonValue !== value) {
            return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) {
        return '{}';
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[' + getObjectTag(object) + ']';
    }
    const properties = entries.map(([key, value])=>key + ': ' + formatValue(value, seenValues));
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) {
        return '[]';
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[Array]';
    }
    const len = array.length;
    const items = [];
    for(let i = 0; i < len; ++i){
        items.push(formatValue(array[i], seenValues));
    }
    return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') {
            return name;
        }
    }
    return tag;
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisposableSymbols",
    ()=>DisposableSymbols,
    "patchSymbols",
    ()=>patchSymbols
]);
const DisposableSymbols = {
    get dispose () {
        return Symbol.dispose || Symbol.for('dispose');
    },
    get asyncDispose () {
        return Symbol.asyncDispose || Symbol.for('asyncDispose');
    }
};
function patchSymbols() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we ponyfill these symbols
    Symbol.dispose ||= Symbol.for('dispose');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we ponyfill these symbols
    Symbol.asyncDispose ||= Symbol.for('asyncDispose');
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/SupressedError.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillSuppressedError = void 0;
class PonyfillSuppressedError extends Error {
    error;
    suppressed;
    // eslint-disable-next-line n/handle-callback-err
    constructor(error, suppressed, message){
        super(message);
        this.error = error;
        this.suppressed = suppressed;
        this.name = 'SuppressedError';
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.PonyfillSuppressedError = PonyfillSuppressedError;
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/symbols.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DisposableSymbols = void 0;
exports.patchSymbols = patchSymbols;
exports.DisposableSymbols = {
    get dispose () {
        return Symbol.dispose || Symbol.for('dispose');
    },
    get asyncDispose () {
        return Symbol.asyncDispose || Symbol.for('asyncDispose');
    }
};
function patchSymbols() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we ponyfill these symbols
    Symbol.dispose ||= Symbol.for('dispose');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we ponyfill these symbols
    Symbol.asyncDispose ||= Symbol.for('asyncDispose');
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSyncDisposable = isSyncDisposable;
exports.isAsyncDisposable = isAsyncDisposable;
const symbols_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/symbols.js [app-route] (ecmascript)");
function isSyncDisposable(obj) {
    return obj?.[symbols_js_1.DisposableSymbols.dispose] != null;
}
function isAsyncDisposable(obj) {
    return obj?.[symbols_js_1.DisposableSymbols.asyncDispose] != null;
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/AsyncDisposableStack.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillAsyncDisposableStack = void 0;
const promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
const SupressedError_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/SupressedError.js [app-route] (ecmascript)");
const symbols_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/symbols.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/utils.js [app-route] (ecmascript)");
const SuppressedError = globalThis.SuppressedError || SupressedError_js_1.PonyfillSuppressedError;
class PonyfillAsyncDisposableStack {
    callbacks = [];
    get disposed() {
        return this.callbacks.length === 0;
    }
    use(value) {
        if ((0, utils_js_1.isAsyncDisposable)(value)) {
            this.callbacks.push(()=>value[symbols_js_1.DisposableSymbols.asyncDispose]());
        } else if ((0, utils_js_1.isSyncDisposable)(value)) {
            this.callbacks.push(()=>value[symbols_js_1.DisposableSymbols.dispose]());
        }
        return value;
    }
    adopt(value, onDisposeAsync) {
        if (onDisposeAsync) {
            this.callbacks.push(()=>onDisposeAsync(value));
        }
        return value;
    }
    defer(onDisposeAsync) {
        if (onDisposeAsync) {
            this.callbacks.push(onDisposeAsync);
        }
    }
    move() {
        const stack = new PonyfillAsyncDisposableStack();
        stack.callbacks = this.callbacks;
        this.callbacks = [];
        return stack;
    }
    disposeAsync() {
        return this[symbols_js_1.DisposableSymbols.asyncDispose]();
    }
    _error;
    _iterateCallbacks() {
        const cb = this.callbacks.pop();
        if (cb) {
            return (0, promise_helpers_1.handleMaybePromise)(cb, ()=>this._iterateCallbacks(), (error)=>{
                this._error = this._error ? new SuppressedError(error, this._error) : error;
                return this._iterateCallbacks();
            });
        }
    }
    [symbols_js_1.DisposableSymbols.asyncDispose]() {
        const res$ = this._iterateCallbacks();
        if (res$?.then) {
            return res$.then(()=>{
                if (this._error) {
                    const error = this._error;
                    this._error = undefined;
                    throw error;
                }
            });
        }
        if (this._error) {
            const error = this._error;
            this._error = undefined;
            throw error;
        }
        return undefined;
    }
    [Symbol.toStringTag] = 'AsyncDisposableStack';
}
exports.PonyfillAsyncDisposableStack = PonyfillAsyncDisposableStack;
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/DisposableStack.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillDisposableStack = void 0;
const SupressedError_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/SupressedError.js [app-route] (ecmascript)");
const symbols_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/symbols.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/utils.js [app-route] (ecmascript)");
const SuppressedError = globalThis.SuppressedError || SupressedError_js_1.PonyfillSuppressedError;
class PonyfillDisposableStack {
    callbacks = [];
    get disposed() {
        return this.callbacks.length === 0;
    }
    use(value) {
        if ((0, utils_js_1.isSyncDisposable)(value)) {
            this.callbacks.push(()=>value[symbols_js_1.DisposableSymbols.dispose]());
        }
        return value;
    }
    adopt(value, onDispose) {
        if (onDispose) {
            this.callbacks.push(()=>onDispose(value));
        }
        return value;
    }
    defer(onDispose) {
        if (onDispose) {
            this.callbacks.push(onDispose);
        }
    }
    move() {
        const stack = new PonyfillDisposableStack();
        stack.callbacks = this.callbacks;
        this.callbacks = [];
        return stack;
    }
    dispose() {
        return this[symbols_js_1.DisposableSymbols.dispose]();
    }
    _error;
    _iterateCallbacks() {
        const cb = this.callbacks.pop();
        if (cb) {
            try {
                cb();
            } catch (error) {
                this._error = this._error ? new SuppressedError(error, this._error) : error;
            }
            return this._iterateCallbacks();
        }
    }
    [symbols_js_1.DisposableSymbols.dispose]() {
        this._iterateCallbacks();
        if (this._error) {
            const error = this._error;
            this._error = undefined;
            throw error;
        }
    }
    [Symbol.toStringTag] = 'DisposableStack';
}
exports.PonyfillDisposableStack = PonyfillDisposableStack;
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SuppressedError = exports.AsyncDisposableStack = exports.DisposableStack = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
const AsyncDisposableStack_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/AsyncDisposableStack.js [app-route] (ecmascript)");
const DisposableStack_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/DisposableStack.js [app-route] (ecmascript)");
const SupressedError_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/SupressedError.js [app-route] (ecmascript)");
exports.DisposableStack = globalThis.DisposableStack || DisposableStack_js_1.PonyfillDisposableStack;
exports.AsyncDisposableStack = globalThis.AsyncDisposableStack || AsyncDisposableStack_js_1.PonyfillAsyncDisposableStack;
exports.SuppressedError = globalThis.SuppressedError || SupressedError_js_1.PonyfillSuppressedError;
tslib_1.__exportStar(__turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/symbols.js [app-route] (ecmascript)"), exports);
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/SupressedError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PonyfillSuppressedError",
    ()=>PonyfillSuppressedError
]);
class PonyfillSuppressedError extends Error {
    error;
    suppressed;
    // eslint-disable-next-line n/handle-callback-err
    constructor(error, suppressed, message){
        super(message);
        this.error = error;
        this.suppressed = suppressed;
        this.name = 'SuppressedError';
        Error.captureStackTrace(this, this.constructor);
    }
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAsyncDisposable",
    ()=>isAsyncDisposable,
    "isSyncDisposable",
    ()=>isSyncDisposable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)");
;
function isSyncDisposable(obj) {
    return obj?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].dispose] != null;
}
function isAsyncDisposable(obj) {
    return obj?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose] != null;
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/AsyncDisposableStack.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PonyfillAsyncDisposableStack",
    ()=>PonyfillAsyncDisposableStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$SupressedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/SupressedError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/utils.js [app-route] (ecmascript)");
;
;
;
;
const SuppressedError = globalThis.SuppressedError || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$SupressedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PonyfillSuppressedError"];
class PonyfillAsyncDisposableStack {
    callbacks = [];
    get disposed() {
        return this.callbacks.length === 0;
    }
    use(value) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncDisposable"])(value)) {
            this.callbacks.push(()=>value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose]());
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSyncDisposable"])(value)) {
            this.callbacks.push(()=>value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].dispose]());
        }
        return value;
    }
    adopt(value, onDisposeAsync) {
        if (onDisposeAsync) {
            this.callbacks.push(()=>onDisposeAsync(value));
        }
        return value;
    }
    defer(onDisposeAsync) {
        if (onDisposeAsync) {
            this.callbacks.push(onDisposeAsync);
        }
    }
    move() {
        const stack = new PonyfillAsyncDisposableStack();
        stack.callbacks = this.callbacks;
        this.callbacks = [];
        return stack;
    }
    disposeAsync() {
        return this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose]();
    }
    _error;
    _iterateCallbacks() {
        const cb = this.callbacks.pop();
        if (cb) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(cb, ()=>this._iterateCallbacks(), (error)=>{
                this._error = this._error ? new SuppressedError(error, this._error) : error;
                return this._iterateCallbacks();
            });
        }
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose]() {
        const res$ = this._iterateCallbacks();
        if (res$?.then) {
            return res$.then(()=>{
                if (this._error) {
                    const error = this._error;
                    this._error = undefined;
                    throw error;
                }
            });
        }
        if (this._error) {
            const error = this._error;
            this._error = undefined;
            throw error;
        }
        return undefined;
    }
    [Symbol.toStringTag] = 'AsyncDisposableStack';
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/DisposableStack.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PonyfillDisposableStack",
    ()=>PonyfillDisposableStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$SupressedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/SupressedError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/utils.js [app-route] (ecmascript)");
;
;
;
const SuppressedError = globalThis.SuppressedError || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$SupressedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PonyfillSuppressedError"];
class PonyfillDisposableStack {
    callbacks = [];
    get disposed() {
        return this.callbacks.length === 0;
    }
    use(value) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSyncDisposable"])(value)) {
            this.callbacks.push(()=>value[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].dispose]());
        }
        return value;
    }
    adopt(value, onDispose) {
        if (onDispose) {
            this.callbacks.push(()=>onDispose(value));
        }
        return value;
    }
    defer(onDispose) {
        if (onDispose) {
            this.callbacks.push(onDispose);
        }
    }
    move() {
        const stack = new PonyfillDisposableStack();
        stack.callbacks = this.callbacks;
        this.callbacks = [];
        return stack;
    }
    dispose() {
        return this[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].dispose]();
    }
    _error;
    _iterateCallbacks() {
        const cb = this.callbacks.pop();
        if (cb) {
            try {
                cb();
            } catch (error) {
                this._error = this._error ? new SuppressedError(error, this._error) : error;
            }
            return this._iterateCallbacks();
        }
    }
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].dispose]() {
        this._iterateCallbacks();
        if (this._error) {
            const error = this._error;
            this._error = undefined;
            throw error;
        }
    }
    [Symbol.toStringTag] = 'DisposableStack';
}
}),
"[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncDisposableStack",
    ()=>AsyncDisposableStack,
    "DisposableStack",
    ()=>DisposableStack,
    "SuppressedError",
    ()=>SuppressedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$AsyncDisposableStack$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/AsyncDisposableStack.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$DisposableStack$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/DisposableStack.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$SupressedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/SupressedError.js [app-route] (ecmascript)");
;
;
;
const DisposableStack = globalThis.DisposableStack || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$DisposableStack$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PonyfillDisposableStack"];
const AsyncDisposableStack = globalThis.AsyncDisposableStack || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$AsyncDisposableStack$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PonyfillAsyncDisposableStack"];
const SuppressedError = globalThis.SuppressedError || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$SupressedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PonyfillSuppressedError"];
;
}),
"[project]/node_modules/.bun/@graphql-yoga+logger@2.0.1/node_modules/@graphql-yoga/logger/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLogger",
    ()=>createLogger,
    "debugPrefix",
    ()=>debugPrefix,
    "errorPrefix",
    ()=>errorPrefix,
    "infoPrefix",
    ()=>infoPrefix,
    "warnPrefix",
    ()=>warnPrefix
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable no-console */ const ansiCodes = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m'
};
const warnPrefix = ansiCodes.yellow + 'WARN' + ansiCodes.reset;
const infoPrefix = ansiCodes.cyan + 'INFO' + ansiCodes.reset;
const errorPrefix = ansiCodes.red + 'ERR' + ansiCodes.reset;
const debugPrefix = ansiCodes.magenta + 'DEBUG' + ansiCodes.reset;
const logLevelScores = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
    silent: 4
};
const noop = ()=>{};
const consoleLog = (prefix)=>(...args)=>console.log(prefix, ...args);
const debugLog = console.debug ? (...args)=>console.debug(debugPrefix, ...args) : consoleLog(debugPrefix);
const infoLog = console.info ? (...args)=>console.info(infoPrefix, ...args) : consoleLog(infoPrefix);
const warnLog = console.warn ? (...args)=>console.warn(warnPrefix, ...args) : consoleLog(warnPrefix);
const errorLog = console.error ? (...args)=>console.error(errorPrefix, ...args) : consoleLog(errorPrefix);
const createLogger = (logLevel = globalThis.process?.env['DEBUG'] === '1' ? 'debug' : 'info')=>{
    const score = logLevelScores[logLevel];
    return {
        debug: score > logLevelScores.debug ? noop : debugLog,
        info: score > logLevelScores.info ? noop : infoLog,
        warn: score > logLevelScores.warn ? noop : warnLog,
        error: score > logLevelScores.error ? noop : errorLog
    };
};
}),
"[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/shouldSkipPonyfill.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

function isNextJs() {
    return Object.keys(globalThis).some((key)=>key.startsWith('__NEXT'));
}
module.exports = function shouldSkipPonyfill() {
    if (globalThis.Deno) {
        return true;
    }
    if (globalThis.Bun) {
        return true;
    }
    if (isNextJs()) {
        return true;
    }
    return false;
};
}),
"[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/create-node-ponyfill.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const shouldSkipPonyfill = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/shouldSkipPonyfill.js [app-route] (ecmascript)");
let newNodeFetch;
module.exports = function createNodePonyfill(opts = {}) {
    const ponyfills = {};
    ponyfills.URLPattern = globalThis.URLPattern;
    // We call this previously to patch `Bun`
    if (!ponyfills.URLPattern) {
        const urlPatternModule = __turbopack_context__.r("[project]/node_modules/.bun/urlpattern-polyfill@10.1.0/node_modules/urlpattern-polyfill/index.cjs [app-route] (ecmascript)");
        ponyfills.URLPattern = urlPatternModule.URLPattern;
    }
    if (opts.skipPonyfill || shouldSkipPonyfill()) {
        return {
            fetch: globalThis.fetch,
            Headers: globalThis.Headers,
            Request: globalThis.Request,
            Response: globalThis.Response,
            FormData: globalThis.FormData,
            ReadableStream: globalThis.ReadableStream,
            WritableStream: globalThis.WritableStream,
            TransformStream: globalThis.TransformStream,
            CompressionStream: globalThis.CompressionStream,
            DecompressionStream: globalThis.DecompressionStream,
            TextDecoderStream: globalThis.TextDecoderStream,
            TextEncoderStream: globalThis.TextEncoderStream,
            Blob: globalThis.Blob,
            File: globalThis.File,
            crypto: globalThis.crypto,
            btoa: globalThis.btoa,
            TextEncoder: globalThis.TextEncoder,
            TextDecoder: globalThis.TextDecoder,
            URLPattern: ponyfills.URLPattern,
            URL: globalThis.URL,
            URLSearchParams: globalThis.URLSearchParams
        };
    }
    newNodeFetch ||= __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/index.js [app-route] (ecmascript)");
    ponyfills.fetch = newNodeFetch.fetch;
    ponyfills.Request = newNodeFetch.Request;
    ponyfills.Response = newNodeFetch.Response;
    ponyfills.Headers = newNodeFetch.Headers;
    ponyfills.FormData = newNodeFetch.FormData;
    ponyfills.ReadableStream = newNodeFetch.ReadableStream;
    ponyfills.URL = newNodeFetch.URL;
    ponyfills.URLSearchParams = newNodeFetch.URLSearchParams;
    ponyfills.WritableStream = newNodeFetch.WritableStream;
    ponyfills.TransformStream = newNodeFetch.TransformStream;
    ponyfills.CompressionStream = newNodeFetch.CompressionStream;
    ponyfills.DecompressionStream = newNodeFetch.DecompressionStream;
    ponyfills.TextDecoderStream = newNodeFetch.TextDecoderStream;
    ponyfills.TextEncoderStream = newNodeFetch.TextEncoderStream;
    ponyfills.Blob = newNodeFetch.Blob;
    ponyfills.File = newNodeFetch.File;
    ponyfills.crypto = globalThis.crypto;
    ponyfills.btoa = newNodeFetch.btoa;
    ponyfills.TextEncoder = newNodeFetch.TextEncoder;
    ponyfills.TextDecoder = newNodeFetch.TextDecoder;
    if (opts.formDataLimits) {
        ponyfills.Body = class Body extends newNodeFetch.Body {
            constructor(body, userOpts){
                super(body, {
                    formDataLimits: opts.formDataLimits,
                    ...userOpts
                });
            }
        };
        ponyfills.Request = class Request extends newNodeFetch.Request {
            constructor(input, userOpts){
                super(input, {
                    formDataLimits: opts.formDataLimits,
                    ...userOpts
                });
            }
        };
        ponyfills.Response = class Response extends newNodeFetch.Response {
            constructor(body, userOpts){
                super(body, {
                    formDataLimits: opts.formDataLimits,
                    ...userOpts
                });
            }
        };
    }
    if (!ponyfills.crypto) {
        const cryptoModule = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
        ponyfills.crypto = cryptoModule.webcrypto;
    }
    return ponyfills;
};
}),
"[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/node-ponyfill.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const createNodePonyfill = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/create-node-ponyfill.js [app-route] (ecmascript)");
const shouldSkipPonyfill = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/shouldSkipPonyfill.js [app-route] (ecmascript)");
const ponyfills = createNodePonyfill();
if (!shouldSkipPonyfill()) {
    try {
        const nodelibcurlName = 'node-libcurl';
        globalThis.libcurl = globalThis.libcurl || (()=>{
            const e = new Error("Cannot find module 'node-libcurl'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
    } catch (e) {}
}
module.exports.fetch = ponyfills.fetch;
module.exports.Headers = ponyfills.Headers;
module.exports.Request = ponyfills.Request;
module.exports.Response = ponyfills.Response;
module.exports.FormData = ponyfills.FormData;
module.exports.ReadableStream = ponyfills.ReadableStream;
module.exports.WritableStream = ponyfills.WritableStream;
module.exports.TransformStream = ponyfills.TransformStream;
module.exports.CompressionStream = ponyfills.CompressionStream;
module.exports.DecompressionStream = ponyfills.DecompressionStream;
module.exports.TextDecoderStream = ponyfills.TextDecoderStream;
module.exports.TextEncoderStream = ponyfills.TextEncoderStream;
module.exports.Blob = ponyfills.Blob;
module.exports.File = ponyfills.File;
module.exports.crypto = ponyfills.crypto;
module.exports.btoa = ponyfills.btoa;
module.exports.TextEncoder = ponyfills.TextEncoder;
module.exports.TextDecoder = ponyfills.TextDecoder;
module.exports.URLPattern = ponyfills.URLPattern;
module.exports.URL = ponyfills.URL;
module.exports.URLSearchParams = ponyfills.URLSearchParams;
exports.createFetch = createNodePonyfill;
}),
"[project]/node_modules/.bun/urlpattern-polyfill@10.1.0/node_modules/urlpattern-polyfill/dist/urlpattern.cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var U = Object.defineProperty;
var Re = Object.getOwnPropertyDescriptor;
var Ee = Object.getOwnPropertyNames;
var Oe = Object.prototype.hasOwnProperty;
var a = (e, t)=>U(e, "name", {
        value: t,
        configurable: !0
    });
var ke = (e, t)=>{
    for(var r in t)U(e, r, {
        get: t[r],
        enumerable: !0
    });
}, Te = (e, t, r, n)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of Ee(t))!Oe.call(e, o) && o !== r && U(e, o, {
        get: ()=>t[o],
        enumerable: !(n = Re(t, o)) || n.enumerable
    });
    return e;
};
var Ae = (e)=>Te(U({}, "__esModule", {
        value: !0
    }), e);
var He = {};
ke(He, {
    URLPattern: ()=>M
});
module.exports = Ae(He);
var P = class {
    type = 3;
    name = "";
    prefix = "";
    value = "";
    suffix = "";
    modifier = 3;
    constructor(t, r, n, o, l, f){
        this.type = t, this.name = r, this.prefix = n, this.value = o, this.suffix = l, this.modifier = f;
    }
    hasCustomName() {
        return this.name !== "" && typeof this.name != "number";
    }
};
a(P, "Part");
var ye = /[$_\p{ID_Start}]/u, we = /[$_\u200C\u200D\p{ID_Continue}]/u, F = ".*";
function Ce(e, t) {
    return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
}
a(Ce, "isASCII");
function W(e, t = !1) {
    let r = [], n = 0;
    for(; n < e.length;){
        let o = e[n], l = a(function(f) {
            if (!t) throw new TypeError(f);
            r.push({
                type: "INVALID_CHAR",
                index: n,
                value: e[n++]
            });
        }, "ErrorOrInvalid");
        if (o === "*") {
            r.push({
                type: "ASTERISK",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === "+" || o === "?") {
            r.push({
                type: "OTHER_MODIFIER",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === "\\") {
            r.push({
                type: "ESCAPED_CHAR",
                index: n++,
                value: e[n++]
            });
            continue;
        }
        if (o === "{") {
            r.push({
                type: "OPEN",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === "}") {
            r.push({
                type: "CLOSE",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === ":") {
            let f = "", s = n + 1;
            for(; s < e.length;){
                let i = e.substr(s, 1);
                if (s === n + 1 && ye.test(i) || s !== n + 1 && we.test(i)) {
                    f += e[s++];
                    continue;
                }
                break;
            }
            if (!f) {
                l(`Missing parameter name at ${n}`);
                continue;
            }
            r.push({
                type: "NAME",
                index: n,
                value: f
            }), n = s;
            continue;
        }
        if (o === "(") {
            let f = 1, s = "", i = n + 1, c = !1;
            if (e[i] === "?") {
                l(`Pattern cannot start with "?" at ${i}`);
                continue;
            }
            for(; i < e.length;){
                if (!Ce(e[i], !1)) {
                    l(`Invalid character '${e[i]}' at ${i}.`), c = !0;
                    break;
                }
                if (e[i] === "\\") {
                    s += e[i++] + e[i++];
                    continue;
                }
                if (e[i] === ")") {
                    if (f--, f === 0) {
                        i++;
                        break;
                    }
                } else if (e[i] === "(" && (f++, e[i + 1] !== "?")) {
                    l(`Capturing groups are not allowed at ${i}`), c = !0;
                    break;
                }
                s += e[i++];
            }
            if (c) continue;
            if (f) {
                l(`Unbalanced pattern at ${n}`);
                continue;
            }
            if (!s) {
                l(`Missing pattern at ${n}`);
                continue;
            }
            r.push({
                type: "REGEX",
                index: n,
                value: s
            }), n = i;
            continue;
        }
        r.push({
            type: "CHAR",
            index: n,
            value: e[n++]
        });
    }
    return r.push({
        type: "END",
        index: n,
        value: ""
    }), r;
}
a(W, "lexer");
function _(e, t = {}) {
    let r = W(e);
    t.delimiter ??= "/#?", t.prefixes ??= "./";
    let n = `[^${x(t.delimiter)}]+?`, o = [], l = 0, f = 0, s = "", i = new Set, c = a((u)=>{
        if (f < r.length && r[f].type === u) return r[f++].value;
    }, "tryConsume"), h = a(()=>c("OTHER_MODIFIER") ?? c("ASTERISK"), "tryConsumeModifier"), p = a((u)=>{
        let d = c(u);
        if (d !== void 0) return d;
        let { type: g, index: y } = r[f];
        throw new TypeError(`Unexpected ${g} at ${y}, expected ${u}`);
    }, "mustConsume"), A = a(()=>{
        let u = "", d;
        for(; d = c("CHAR") ?? c("ESCAPED_CHAR");)u += d;
        return u;
    }, "consumeText"), be = a((u)=>u, "DefaultEncodePart"), N = t.encodePart || be, H = "", v = a((u)=>{
        H += u;
    }, "appendToPendingFixedValue"), D = a(()=>{
        H.length && (o.push(new P(3, "", "", N(H), "", 3)), H = "");
    }, "maybeAddPartFromPendingFixedValue"), Z = a((u, d, g, y, B)=>{
        let m = 3;
        switch(B){
            case "?":
                m = 1;
                break;
            case "*":
                m = 0;
                break;
            case "+":
                m = 2;
                break;
        }
        if (!d && !g && m === 3) {
            v(u);
            return;
        }
        if (D(), !d && !g) {
            if (!u) return;
            o.push(new P(3, "", "", N(u), "", m));
            return;
        }
        let S;
        g ? g === "*" ? S = F : S = g : S = n;
        let k = 2;
        S === n ? (k = 1, S = "") : S === F && (k = 0, S = "");
        let E;
        if (d ? E = d : g && (E = l++), i.has(E)) throw new TypeError(`Duplicate name '${E}'.`);
        i.add(E), o.push(new P(k, E, N(u), S, N(y), m));
    }, "addPart");
    for(; f < r.length;){
        let u = c("CHAR"), d = c("NAME"), g = c("REGEX");
        if (!d && !g && (g = c("ASTERISK")), d || g) {
            let m = u ?? "";
            t.prefixes.indexOf(m) === -1 && (v(m), m = ""), D();
            let S = h();
            Z(m, d, g, "", S);
            continue;
        }
        let y = u ?? c("ESCAPED_CHAR");
        if (y) {
            v(y);
            continue;
        }
        if (c("OPEN")) {
            let m = A(), S = c("NAME"), k = c("REGEX");
            !S && !k && (k = c("ASTERISK"));
            let E = A();
            p("CLOSE");
            let Pe = h();
            Z(m, S, k, E, Pe);
            continue;
        }
        D(), p("END");
    }
    return o;
}
a(_, "parse");
function x(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
a(x, "escapeString");
function q(e) {
    return e && e.ignoreCase ? "ui" : "u";
}
a(q, "flags");
function J(e, t, r) {
    return z(_(e, r), t, r);
}
a(J, "stringToRegexp");
function T(e) {
    switch(e){
        case 0:
            return "*";
        case 1:
            return "?";
        case 2:
            return "+";
        case 3:
            return "";
    }
}
a(T, "modifierToString");
function z(e, t, r = {}) {
    r.delimiter ??= "/#?", r.prefixes ??= "./", r.sensitive ??= !1, r.strict ??= !1, r.end ??= !0, r.start ??= !0, r.endsWith = "";
    let n = r.start ? "^" : "";
    for (let s of e){
        if (s.type === 3) {
            s.modifier === 3 ? n += x(s.value) : n += `(?:${x(s.value)})${T(s.modifier)}`;
            continue;
        }
        t && t.push(s.name);
        let i = `[^${x(r.delimiter)}]+?`, c = s.value;
        if (s.type === 1 ? c = i : s.type === 0 && (c = F), !s.prefix.length && !s.suffix.length) {
            s.modifier === 3 || s.modifier === 1 ? n += `(${c})${T(s.modifier)}` : n += `((?:${c})${T(s.modifier)})`;
            continue;
        }
        if (s.modifier === 3 || s.modifier === 1) {
            n += `(?:${x(s.prefix)}(${c})${x(s.suffix)})`, n += T(s.modifier);
            continue;
        }
        n += `(?:${x(s.prefix)}`, n += `((?:${c})(?:`, n += x(s.suffix), n += x(s.prefix), n += `(?:${c}))*)${x(s.suffix)})`, s.modifier === 0 && (n += "?");
    }
    let o = `[${x(r.endsWith)}]|$`, l = `[${x(r.delimiter)}]`;
    if (r.end) return r.strict || (n += `${l}?`), r.endsWith.length ? n += `(?=${o})` : n += "$", new RegExp(n, q(r));
    r.strict || (n += `(?:${l}(?=${o}))?`);
    let f = !1;
    if (e.length) {
        let s = e[e.length - 1];
        s.type === 3 && s.modifier === 3 && (f = r.delimiter.indexOf(s) > -1);
    }
    return f || (n += `(?=${l}|${o})`), new RegExp(n, q(r));
}
a(z, "partsToRegexp");
var b = {
    delimiter: "",
    prefixes: "",
    sensitive: !0,
    strict: !0
}, Q = {
    delimiter: ".",
    prefixes: "",
    sensitive: !0,
    strict: !0
}, ee = {
    delimiter: "/",
    prefixes: "/",
    sensitive: !0,
    strict: !0
};
function te(e, t) {
    return e.length ? e[0] === "/" ? !0 : !t || e.length < 2 ? !1 : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : !1;
}
a(te, "isAbsolutePathname");
function re(e, t) {
    return e.startsWith(t) ? e.substring(t.length, e.length) : e;
}
a(re, "maybeStripPrefix");
function Le(e, t) {
    return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
}
a(Le, "maybeStripSuffix");
function j(e) {
    return !e || e.length < 2 ? !1 : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
}
a(j, "treatAsIPv6Hostname");
var ne = [
    "ftp",
    "file",
    "http",
    "https",
    "ws",
    "wss"
];
function $(e) {
    if (!e) return !0;
    for (let t of ne)if (e.test(t)) return !0;
    return !1;
}
a($, "isSpecialScheme");
function se(e, t) {
    if (e = re(e, "#"), t || e === "") return e;
    let r = new URL("https://example.com");
    return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
}
a(se, "canonicalizeHash");
function ie(e, t) {
    if (e = re(e, "?"), t || e === "") return e;
    let r = new URL("https://example.com");
    return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
}
a(ie, "canonicalizeSearch");
function ae(e, t) {
    return t || e === "" ? e : j(e) ? V(e) : G(e);
}
a(ae, "canonicalizeHostname");
function oe(e, t) {
    if (t || e === "") return e;
    let r = new URL("https://example.com");
    return r.password = e, r.password;
}
a(oe, "canonicalizePassword");
function ce(e, t) {
    if (t || e === "") return e;
    let r = new URL("https://example.com");
    return r.username = e, r.username;
}
a(ce, "canonicalizeUsername");
function le(e, t, r) {
    if (r || e === "") return e;
    if (t && !ne.includes(t)) return new URL(`${t}:${e}`).pathname;
    let n = e[0] == "/";
    return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), e;
}
a(le, "canonicalizePathname");
function fe(e, t, r) {
    return K(t) === e && (e = ""), r || e === "" ? e : Y(e);
}
a(fe, "canonicalizePort");
function he(e, t) {
    return e = Le(e, ":"), t || e === "" ? e : w(e);
}
a(he, "canonicalizeProtocol");
function K(e) {
    switch(e){
        case "ws":
        case "http":
            return "80";
        case "wws":
        case "https":
            return "443";
        case "ftp":
            return "21";
        default:
            return "";
    }
}
a(K, "defaultPortForProtocol");
function w(e) {
    if (e === "") return e;
    if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
    throw new TypeError(`Invalid protocol '${e}'.`);
}
a(w, "protocolEncodeCallback");
function ue(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.username = e, t.username;
}
a(ue, "usernameEncodeCallback");
function de(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.password = e, t.password;
}
a(de, "passwordEncodeCallback");
function G(e) {
    if (e === "") return e;
    if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
    let t = new URL("https://example.com");
    return t.hostname = e, t.hostname;
}
a(G, "hostnameEncodeCallback");
function V(e) {
    if (e === "") return e;
    if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
    return e.toLowerCase();
}
a(V, "ipv6HostnameEncodeCallback");
function Y(e) {
    if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
    throw new TypeError(`Invalid port '${e}'.`);
}
a(Y, "portEncodeCallback");
function pe(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
}
a(pe, "standardURLPathnameEncodeCallback");
function ge(e) {
    return e === "" ? e : new URL(`data:${e}`).pathname;
}
a(ge, "pathURLPathnameEncodeCallback");
function me(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.search = e, t.search.substring(1, t.search.length);
}
a(me, "searchEncodeCallback");
function Se(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.hash = e, t.hash.substring(1, t.hash.length);
}
a(Se, "hashEncodeCallback");
var C = class {
    #i;
    #n = [];
    #t = {};
    #e = 0;
    #s = 1;
    #l = 0;
    #o = 0;
    #d = 0;
    #p = 0;
    #g = !1;
    constructor(t){
        this.#i = t;
    }
    get result() {
        return this.#t;
    }
    parse() {
        for(this.#n = W(this.#i, !0); this.#e < this.#n.length; this.#e += this.#s){
            if (this.#s = 1, this.#n[this.#e].type === "END") {
                if (this.#o === 0) {
                    this.#b(), this.#f() ? this.#r(9, 1) : this.#h() ? this.#r(8, 1) : this.#r(7, 0);
                    continue;
                } else if (this.#o === 2) {
                    this.#u(5);
                    continue;
                }
                this.#r(10, 0);
                break;
            }
            if (this.#d > 0) if (this.#A()) this.#d -= 1;
            else continue;
            if (this.#T()) {
                this.#d += 1;
                continue;
            }
            switch(this.#o){
                case 0:
                    this.#P() && this.#u(1);
                    break;
                case 1:
                    if (this.#P()) {
                        this.#C();
                        let t = 7, r = 1;
                        this.#E() ? (t = 2, r = 3) : this.#g && (t = 2), this.#r(t, r);
                    }
                    break;
                case 2:
                    this.#S() ? this.#u(3) : (this.#x() || this.#h() || this.#f()) && this.#u(5);
                    break;
                case 3:
                    this.#O() ? this.#r(4, 1) : this.#S() && this.#r(5, 1);
                    break;
                case 4:
                    this.#S() && this.#r(5, 1);
                    break;
                case 5:
                    this.#y() ? this.#p += 1 : this.#w() && (this.#p -= 1), this.#k() && !this.#p ? this.#r(6, 1) : this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
                    break;
                case 6:
                    this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
                    break;
                case 7:
                    this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
                    break;
                case 8:
                    this.#f() && this.#r(9, 1);
                    break;
                case 9:
                    break;
                case 10:
                    break;
            }
        }
        this.#t.hostname !== void 0 && this.#t.port === void 0 && (this.#t.port = "");
    }
    #r(t, r) {
        switch(this.#o){
            case 0:
                break;
            case 1:
                this.#t.protocol = this.#c();
                break;
            case 2:
                break;
            case 3:
                this.#t.username = this.#c();
                break;
            case 4:
                this.#t.password = this.#c();
                break;
            case 5:
                this.#t.hostname = this.#c();
                break;
            case 6:
                this.#t.port = this.#c();
                break;
            case 7:
                this.#t.pathname = this.#c();
                break;
            case 8:
                this.#t.search = this.#c();
                break;
            case 9:
                this.#t.hash = this.#c();
                break;
            case 10:
                break;
        }
        this.#o !== 0 && t !== 10 && ([
            1,
            2,
            3,
            4
        ].includes(this.#o) && [
            6,
            7,
            8,
            9
        ].includes(t) && (this.#t.hostname ??= ""), [
            1,
            2,
            3,
            4,
            5,
            6
        ].includes(this.#o) && [
            8,
            9
        ].includes(t) && (this.#t.pathname ??= this.#g ? "/" : ""), [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ].includes(this.#o) && t === 9 && (this.#t.search ??= "")), this.#R(t, r);
    }
    #R(t, r) {
        this.#o = t, this.#l = this.#e + r, this.#e += r, this.#s = 0;
    }
    #b() {
        this.#e = this.#l, this.#s = 0;
    }
    #u(t) {
        this.#b(), this.#o = t;
    }
    #m(t) {
        return t < 0 && (t = this.#n.length - t), t < this.#n.length ? this.#n[t] : this.#n[this.#n.length - 1];
    }
    #a(t, r) {
        let n = this.#m(t);
        return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
    }
    #P() {
        return this.#a(this.#e, ":");
    }
    #E() {
        return this.#a(this.#e + 1, "/") && this.#a(this.#e + 2, "/");
    }
    #S() {
        return this.#a(this.#e, "@");
    }
    #O() {
        return this.#a(this.#e, ":");
    }
    #k() {
        return this.#a(this.#e, ":");
    }
    #x() {
        return this.#a(this.#e, "/");
    }
    #h() {
        if (this.#a(this.#e, "?")) return !0;
        if (this.#n[this.#e].value !== "?") return !1;
        let t = this.#m(this.#e - 1);
        return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
    }
    #f() {
        return this.#a(this.#e, "#");
    }
    #T() {
        return this.#n[this.#e].type == "OPEN";
    }
    #A() {
        return this.#n[this.#e].type == "CLOSE";
    }
    #y() {
        return this.#a(this.#e, "[");
    }
    #w() {
        return this.#a(this.#e, "]");
    }
    #c() {
        let t = this.#n[this.#e], r = this.#m(this.#l).index;
        return this.#i.substring(r, t.index);
    }
    #C() {
        let t = {};
        Object.assign(t, b), t.encodePart = w;
        let r = J(this.#c(), void 0, t);
        this.#g = $(r);
    }
};
a(C, "Parser");
var X = [
    "protocol",
    "username",
    "password",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash"
], O = "*";
function xe(e, t) {
    if (typeof e != "string") throw new TypeError("parameter 1 is not of type 'string'.");
    let r = new URL(e, t);
    return {
        protocol: r.protocol.substring(0, r.protocol.length - 1),
        username: r.username,
        password: r.password,
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname,
        search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0,
        hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0
    };
}
a(xe, "extractValues");
function R(e, t) {
    return t ? I(e) : e;
}
a(R, "processBaseURLString");
function L(e, t, r) {
    let n;
    if (typeof t.baseURL == "string") try {
        n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = R(n.protocol.substring(0, n.protocol.length - 1), r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = R(n.username, r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = R(n.password, r)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = R(n.hostname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = R(n.port, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = R(n.pathname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = R(n.search.substring(1, n.search.length), r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = R(n.hash.substring(1, n.hash.length), r));
    } catch  {
        throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
    }
    if (typeof t.protocol == "string" && (e.protocol = he(t.protocol, r)), typeof t.username == "string" && (e.username = ce(t.username, r)), typeof t.password == "string" && (e.password = oe(t.password, r)), typeof t.hostname == "string" && (e.hostname = ae(t.hostname, r)), typeof t.port == "string" && (e.port = fe(t.port, e.protocol, r)), typeof t.pathname == "string") {
        if (e.pathname = t.pathname, n && !te(e.pathname, r)) {
            let o = n.pathname.lastIndexOf("/");
            o >= 0 && (e.pathname = R(n.pathname.substring(0, o + 1), r) + e.pathname);
        }
        e.pathname = le(e.pathname, e.protocol, r);
    }
    return typeof t.search == "string" && (e.search = ie(t.search, r)), typeof t.hash == "string" && (e.hash = se(t.hash, r)), e;
}
a(L, "applyInit");
function I(e) {
    return e.replace(/([+*?:{}()\\])/g, "\\$1");
}
a(I, "escapePatternString");
function Ie(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
a(Ie, "escapeRegexpString");
function Ne(e, t) {
    t.delimiter ??= "/#?", t.prefixes ??= "./", t.sensitive ??= !1, t.strict ??= !1, t.end ??= !0, t.start ??= !0, t.endsWith = "";
    let r = ".*", n = `[^${Ie(t.delimiter)}]+?`, o = /[$_\u200C\u200D\p{ID_Continue}]/u, l = "";
    for(let f = 0; f < e.length; ++f){
        let s = e[f];
        if (s.type === 3) {
            if (s.modifier === 3) {
                l += I(s.value);
                continue;
            }
            l += `{${I(s.value)}}${T(s.modifier)}`;
            continue;
        }
        let i = s.hasCustomName(), c = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), h = f > 0 ? e[f - 1] : null, p = f < e.length - 1 ? e[f + 1] : null;
        if (!c && i && s.type === 1 && s.modifier === 3 && p && !p.prefix.length && !p.suffix.length) if (p.type === 3) {
            let A = p.value.length > 0 ? p.value[0] : "";
            c = o.test(A);
        } else c = !p.hasCustomName();
        if (!c && !s.prefix.length && h && h.type === 3) {
            let A = h.value[h.value.length - 1];
            c = t.prefixes.includes(A);
        }
        c && (l += "{"), l += I(s.prefix), i && (l += `:${s.name}`), s.type === 2 ? l += `(${s.value})` : s.type === 1 ? i || (l += `(${n})`) : s.type === 0 && (!i && (!h || h.type === 3 || h.modifier !== 3 || c || s.prefix !== "") ? l += "*" : l += `(${r})`), s.type === 1 && i && s.suffix.length && o.test(s.suffix[0]) && (l += "\\"), l += I(s.suffix), c && (l += "}"), s.modifier !== 3 && (l += T(s.modifier));
    }
    return l;
}
a(Ne, "partsToPattern");
var M = class {
    #i;
    #n = {};
    #t = {};
    #e = {};
    #s = {};
    #l = !1;
    constructor(t = {}, r, n){
        try {
            let o;
            if (typeof r == "string" ? o = r : n = r, typeof t == "string") {
                let i = new C(t);
                if (i.parse(), t = i.result, o === void 0 && typeof t.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
                t.baseURL = o;
            } else {
                if (!t || typeof t != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
                if (o) throw new TypeError("parameter 1 is not of type 'string'.");
            }
            typeof n > "u" && (n = {
                ignoreCase: !1
            });
            let l = {
                ignoreCase: n.ignoreCase === !0
            }, f = {
                pathname: O,
                protocol: O,
                username: O,
                password: O,
                hostname: O,
                port: O,
                search: O,
                hash: O
            };
            this.#i = L(f, t, !0), K(this.#i.protocol) === this.#i.port && (this.#i.port = "");
            let s;
            for (s of X){
                if (!(s in this.#i)) continue;
                let i = {}, c = this.#i[s];
                switch(this.#t[s] = [], s){
                    case "protocol":
                        Object.assign(i, b), i.encodePart = w;
                        break;
                    case "username":
                        Object.assign(i, b), i.encodePart = ue;
                        break;
                    case "password":
                        Object.assign(i, b), i.encodePart = de;
                        break;
                    case "hostname":
                        Object.assign(i, Q), j(c) ? i.encodePart = V : i.encodePart = G;
                        break;
                    case "port":
                        Object.assign(i, b), i.encodePart = Y;
                        break;
                    case "pathname":
                        $(this.#n.protocol) ? (Object.assign(i, ee, l), i.encodePart = pe) : (Object.assign(i, b, l), i.encodePart = ge);
                        break;
                    case "search":
                        Object.assign(i, b, l), i.encodePart = me;
                        break;
                    case "hash":
                        Object.assign(i, b, l), i.encodePart = Se;
                        break;
                }
                try {
                    this.#s[s] = _(c, i), this.#n[s] = z(this.#s[s], this.#t[s], i), this.#e[s] = Ne(this.#s[s], i), this.#l = this.#l || this.#s[s].some((h)=>h.type === 2);
                } catch  {
                    throw new TypeError(`invalid ${s} pattern '${this.#i[s]}'.`);
                }
            }
        } catch (o) {
            throw new TypeError(`Failed to construct 'URLPattern': ${o.message}`);
        }
    }
    get [Symbol.toStringTag]() {
        return "URLPattern";
    }
    test(t = {}, r) {
        let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
        };
        if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof t > "u") return !1;
        try {
            typeof t == "object" ? n = L(n, t, !1) : n = L(n, xe(t, r), !1);
        } catch  {
            return !1;
        }
        let o;
        for (o of X)if (!this.#n[o].exec(n[o])) return !1;
        return !0;
    }
    exec(t = {}, r) {
        let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
        };
        if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof t > "u") return;
        try {
            typeof t == "object" ? n = L(n, t, !1) : n = L(n, xe(t, r), !1);
        } catch  {
            return null;
        }
        let o = {};
        r ? o.inputs = [
            t,
            r
        ] : o.inputs = [
            t
        ];
        let l;
        for (l of X){
            let f = this.#n[l].exec(n[l]);
            if (!f) return null;
            let s = {};
            for (let [i, c] of this.#t[l].entries())if (typeof c == "string" || typeof c == "number") {
                let h = f[i + 1];
                s[c] = h;
            }
            o[l] = {
                input: n[l] ?? "",
                groups: s
            };
        }
        return o;
    }
    static compareComponent(t, r, n) {
        let o = a((i, c)=>{
            for (let h of [
                "type",
                "modifier",
                "prefix",
                "value",
                "suffix"
            ]){
                if (i[h] < c[h]) return -1;
                if (i[h] === c[h]) continue;
                return 1;
            }
            return 0;
        }, "comparePart"), l = new P(3, "", "", "", "", 3), f = new P(0, "", "", "", "", 3), s = a((i, c)=>{
            let h = 0;
            for(; h < Math.min(i.length, c.length); ++h){
                let p = o(i[h], c[h]);
                if (p) return p;
            }
            return i.length === c.length ? 0 : o(i[h] ?? l, c[h] ?? l);
        }, "comparePartList");
        return !r.#e[t] && !n.#e[t] ? 0 : r.#e[t] && !n.#e[t] ? s(r.#s[t], [
            f
        ]) : !r.#e[t] && n.#e[t] ? s([
            f
        ], n.#s[t]) : s(r.#s[t], n.#s[t]);
    }
    get protocol() {
        return this.#e.protocol;
    }
    get username() {
        return this.#e.username;
    }
    get password() {
        return this.#e.password;
    }
    get hostname() {
        return this.#e.hostname;
    }
    get port() {
        return this.#e.port;
    }
    get pathname() {
        return this.#e.pathname;
    }
    get search() {
        return this.#e.search;
    }
    get hash() {
        return this.#e.hash;
    }
    get hasRegExpGroups() {
        return this.#l;
    }
};
a(M, "URLPattern");
}),
"[project]/node_modules/.bun/urlpattern-polyfill@10.1.0/node_modules/urlpattern-polyfill/index.cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { URLPattern } = __turbopack_context__.r("[project]/node_modules/.bun/urlpattern-polyfill@10.1.0/node_modules/urlpattern-polyfill/dist/urlpattern.cjs [app-route] (ecmascript)");
module.exports = {
    URLPattern
};
if (!globalThis.URLPattern) {
    globalThis.URLPattern = URLPattern;
}
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright Brian White. All rights reserved.
 *
 * @see https://github.com/mscdex/streamsearch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
 * by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
 */ const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
function SBMH(needle) {
    if (typeof needle === 'string') {
        needle = Buffer.from(needle);
    }
    if (!Buffer.isBuffer(needle)) {
        throw new TypeError('The needle has to be a String or a Buffer.');
    }
    const needleLength = needle.length;
    const needleLastCharIndex = needleLength - 1;
    if (needleLength === 0) {
        throw new Error('The needle cannot be an empty String/Buffer.');
    }
    if (needleLength > 256) {
        throw new Error('The needle cannot have a length bigger than 256.');
    }
    this.maxMatches = Infinity;
    this.matches = 0;
    this._occ = new Uint8Array(256).fill(needleLength); // Initialize occurrence table.
    this._lookbehind_size = 0;
    this._needle = needle;
    this._bufpos = 0;
    this._lookbehind = Buffer.alloc(needleLastCharIndex);
    // Populate occurrence table with analysis of the needle,
    // ignoring last letter.
    for(var i = 0; i < needleLastCharIndex; ++i){
        this._occ[needle[i]] = needleLastCharIndex - i;
    }
}
inherits(SBMH, EventEmitter);
SBMH.prototype.reset = function() {
    this._lookbehind_size = 0;
    this.matches = 0;
    this._bufpos = 0;
};
SBMH.prototype.push = function(chunk, pos) {
    if (!Buffer.isBuffer(chunk)) {
        chunk = Buffer.from(chunk, 'binary');
    }
    const chlen = chunk.length;
    this._bufpos = pos || 0;
    let r;
    while(r !== chlen && this.matches < this.maxMatches){
        r = this._sbmh_feed(chunk);
    }
    return r;
};
SBMH.prototype._sbmh_feed = function(data) {
    const len = data.length;
    const needle = this._needle;
    const needleLength = needle.length;
    const needleLastCharIndex = needleLength - 1;
    const needleLastChar = needle[needleLastCharIndex];
    // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehind_size - 2]
    let pos = -this._lookbehind_size;
    let ch;
    if (pos < 0) {
        // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
        // search with character lookup code that considers both the
        // lookbehind buffer and the current round's haystack data.
        //
        // Loop until
        //   there is a match.
        // or until
        //   we've moved past the position that requires the
        //   lookbehind buffer. In this case we switch to the
        //   optimized loop.
        // or until
        //   the character to look at lies outside the haystack.
        while(pos < 0 && pos <= len - needleLength){
            ch = data[pos + needleLastCharIndex];
            if (ch === needleLastChar && this._sbmh_memcmp(data, pos, needleLastCharIndex)) {
                this._lookbehind_size = 0;
                ++this.matches;
                this.emit('info', true);
                return this._bufpos = pos + needleLength;
            }
            pos += this._occ[ch];
        }
        // No match.
        while(pos < 0 && !this._sbmh_memcmp(data, pos, len - pos)){
            // There's too few data for Boyer-Moore-Horspool to run,
            // so let's use a different algorithm to skip as much as
            // we can.
            // Forward pos until
            //   the trailing part of lookbehind + data
            //   looks like the beginning of the needle
            // or until
            //   pos == 0
            ++pos;
        }
        if (pos >= 0) {
            // Discard lookbehind buffer.
            this.emit('info', false, this._lookbehind, 0, this._lookbehind_size);
            this._lookbehind_size = 0;
        } else {
            // Cut off part of the lookbehind buffer that has
            // been processed and append the entire haystack
            // into it.
            const bytesToCutOff = this._lookbehind_size + pos;
            if (bytesToCutOff > 0) {
                // The cut off data is guaranteed not to contain the needle.
                this.emit('info', false, this._lookbehind, 0, bytesToCutOff);
            }
            this._lookbehind_size -= bytesToCutOff;
            this._lookbehind.copy(this._lookbehind, 0, bytesToCutOff, this._lookbehind_size);
            data.copy(this._lookbehind, this._lookbehind_size);
            this._lookbehind_size += len;
            this._bufpos = len;
            return len;
        }
    }
    // Lookbehind buffer is now empty. We only need to check if the
    // needle is in the haystack.
    pos = data.indexOf(needle, pos + this._bufpos);
    if (pos !== -1) {
        ++this.matches;
        if (pos === 0) {
            this.emit('info', true);
        } else {
            this.emit('info', true, data, this._bufpos, pos);
        }
        return this._bufpos = pos + needleLength;
    }
    pos = len - needleLastCharIndex;
    if (pos < 0) {
        pos = 0;
    }
    // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.
    while(pos !== len && (data[pos] !== needle[0] || Buffer.compare(data.subarray(pos + 1, len), needle.subarray(1, len - pos)) !== 0)){
        ++pos;
    }
    if (pos !== len) {
        data.copy(this._lookbehind, 0, pos, len);
        this._lookbehind_size = len - pos;
    }
    // Everything until pos is guaranteed not to contain needle data.
    if (pos !== 0) {
        this.emit('info', false, data, this._bufpos, pos);
    }
    this._bufpos = len;
    return len;
};
SBMH.prototype._sbmh_lookup_char = function(data, pos) {
    return pos < 0 ? this._lookbehind[this._lookbehind_size + pos] : data[pos];
};
SBMH.prototype._sbmh_memcmp = function(data, pos, len) {
    for(var i = 0; i < len; ++i){
        if (this._sbmh_lookup_char(data, pos + i) !== this._needle[i]) {
            return false;
        }
    }
    return true;
};
module.exports = SBMH;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const ReadableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
function PartStream(opts) {
    ReadableStream.call(this, opts);
}
inherits(PartStream, ReadableStream);
PartStream.prototype._read = function(n) {};
module.exports = PartStream;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function getLimit(limits, name, defaultLimit) {
    if (!limits || limits[name] === undefined || limits[name] === null) {
        return defaultLimit;
    }
    if (typeof limits[name] !== 'number' || isNaN(limits[name])) {
        throw new TypeError('Limit ' + name + ' is not a valid number');
    }
    return limits[name];
};
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const getLimit = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-route] (ecmascript)");
const StreamSearch = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-route] (ecmascript)");
const B_DCRLF = Buffer.from('\r\n\r\n');
const RE_CRLF = /\r\n/g;
const RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/ // eslint-disable-line no-control-regex
;
function HeaderParser(cfg) {
    EventEmitter.call(this);
    cfg = cfg || {};
    const self = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = getLimit(cfg, 'maxHeaderPairs', 2000);
    this.maxHeaderSize = getLimit(cfg, 'maxHeaderSize', 80 * 1024);
    this.buffer = '';
    this.header = {};
    this.finished = false;
    this.ss = new StreamSearch(B_DCRLF);
    this.ss.on('info', function(isMatch, data, start, end) {
        if (data && !self.maxed) {
            if (self.nread + end - start >= self.maxHeaderSize) {
                end = self.maxHeaderSize - self.nread + start;
                self.nread = self.maxHeaderSize;
                self.maxed = true;
            } else {
                self.nread += end - start;
            }
            self.buffer += data.toString('binary', start, end);
        }
        if (isMatch) {
            self._finish();
        }
    });
}
inherits(HeaderParser, EventEmitter);
HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) {
        return r;
    }
};
HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = '';
    this.header = {};
    this.ss.reset();
};
HeaderParser.prototype._finish = function() {
    if (this.buffer) {
        this._parseHeader();
    }
    this.ss.matches = this.ss.maxMatches;
    const header = this.header;
    this.header = {};
    this.buffer = '';
    this.finished = true;
    this.nread = this.npairs = 0;
    this.maxed = false;
    this.emit('header', header);
};
HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) {
        return;
    }
    const lines = this.buffer.split(RE_CRLF);
    const len = lines.length;
    let m, h;
    for(var i = 0; i < len; ++i){
        if (lines[i].length === 0) {
            continue;
        }
        if (lines[i][0] === '\t' || lines[i][0] === ' ') {
            // folded header content
            // RFC2822 says to just remove the CRLF and not the whitespace following
            // it, so we follow the RFC and include the leading whitespace ...
            if (h) {
                this.header[h][this.header[h].length - 1] += lines[i];
                continue;
            }
        }
        const posColon = lines[i].indexOf(':');
        if (posColon === -1 || posColon === 0) {
            return;
        }
        m = RE_HDR.exec(lines[i]);
        h = m[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m[2] || '');
        if (++this.npairs === this.maxHeaderPairs) {
            break;
        }
    }
};
module.exports = HeaderParser;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WritableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const inherits = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)").inherits;
const StreamSearch = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-route] (ecmascript)");
const PartStream = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-route] (ecmascript)");
const HeaderParser = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-route] (ecmascript)");
const DASH = 45;
const B_ONEDASH = Buffer.from('-');
const B_CRLF = Buffer.from('\r\n');
const EMPTY_FN = function() {};
function Dicer(cfg) {
    if (!(this instanceof Dicer)) {
        return new Dicer(cfg);
    }
    WritableStream.call(this, cfg);
    if (!cfg || !cfg.headerFirst && typeof cfg.boundary !== 'string') {
        throw new TypeError('Boundary required');
    }
    if (typeof cfg.boundary === 'string') {
        this.setBoundary(cfg.boundary);
    } else {
        this._bparser = undefined;
    }
    this._headerFirst = cfg.headerFirst;
    this._dashes = 0;
    this._parts = 0;
    this._finished = false;
    this._realFinish = false;
    this._isPreamble = true;
    this._justMatched = false;
    this._firstWrite = true;
    this._inHeader = true;
    this._part = undefined;
    this._cb = undefined;
    this._ignoreData = false;
    this._partOpts = {
        highWaterMark: cfg.partHwm
    };
    this._pause = false;
    const self = this;
    this._hparser = new HeaderParser(cfg);
    this._hparser.on('header', function(header) {
        self._inHeader = false;
        self._part.emit('header', header);
    });
}
inherits(Dicer, WritableStream);
Dicer.prototype.emit = function(ev) {
    if (ev === 'finish' && !this._realFinish) {
        if (!this._finished) {
            const self = this;
            process.nextTick(function() {
                self.emit('error', new Error('Unexpected end of multipart data'));
                if (self._part && !self._ignoreData) {
                    const type = self._isPreamble ? 'Preamble' : 'Part';
                    self._part.emit('error', new Error(type + ' terminated early due to unexpected end of multipart data'));
                    self._part.push(null);
                    process.nextTick(function() {
                        self._realFinish = true;
                        self.emit('finish');
                        self._realFinish = false;
                    });
                    return;
                }
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            });
        }
    } else {
        WritableStream.prototype.emit.apply(this, arguments);
    }
};
Dicer.prototype._write = function(data, encoding, cb) {
    // ignore unexpected data (e.g. extra trailer data after finished)
    if (!this._hparser && !this._bparser) {
        return cb();
    }
    if (this._headerFirst && this._isPreamble) {
        if (!this._part) {
            this._part = new PartStream(this._partOpts);
            if (this.listenerCount('preamble') !== 0) {
                this.emit('preamble', this._part);
            } else {
                this._ignore();
            }
        }
        const r = this._hparser.push(data);
        if (!this._inHeader && r !== undefined && r < data.length) {
            data = data.slice(r);
        } else {
            return cb();
        }
    }
    // allows for "easier" testing
    if (this._firstWrite) {
        this._bparser.push(B_CRLF);
        this._firstWrite = false;
    }
    this._bparser.push(data);
    if (this._pause) {
        this._cb = cb;
    } else {
        cb();
    }
};
Dicer.prototype.reset = function() {
    this._part = undefined;
    this._bparser = undefined;
    this._hparser = undefined;
};
Dicer.prototype.setBoundary = function(boundary) {
    const self = this;
    this._bparser = new StreamSearch('\r\n--' + boundary);
    this._bparser.on('info', function(isMatch, data, start, end) {
        self._oninfo(isMatch, data, start, end);
    });
};
Dicer.prototype._ignore = function() {
    if (this._part && !this._ignoreData) {
        this._ignoreData = true;
        this._part.on('error', EMPTY_FN);
        // we must perform some kind of read on the stream even though we are
        // ignoring the data, otherwise node's Readable stream will not emit 'end'
        // after pushing null to the stream
        this._part.resume();
    }
};
Dicer.prototype._oninfo = function(isMatch, data, start, end) {
    let buf;
    const self = this;
    let i = 0;
    let r;
    let shouldWriteMore = true;
    if (!this._part && this._justMatched && data) {
        while(this._dashes < 2 && start + i < end){
            if (data[start + i] === DASH) {
                ++i;
                ++this._dashes;
            } else {
                if (this._dashes) {
                    buf = B_ONEDASH;
                }
                this._dashes = 0;
                break;
            }
        }
        if (this._dashes === 2) {
            if (start + i < end && this.listenerCount('trailer') !== 0) {
                this.emit('trailer', data.slice(start + i, end));
            }
            this.reset();
            this._finished = true;
            // no more parts will be added
            if (self._parts === 0) {
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            }
        }
        if (this._dashes) {
            return;
        }
    }
    if (this._justMatched) {
        this._justMatched = false;
    }
    if (!this._part) {
        this._part = new PartStream(this._partOpts);
        this._part._read = function(n) {
            self._unpause();
        };
        if (this._isPreamble && this.listenerCount('preamble') !== 0) {
            this.emit('preamble', this._part);
        } else if (this._isPreamble !== true && this.listenerCount('part') !== 0) {
            this.emit('part', this._part);
        } else {
            this._ignore();
        }
        if (!this._isPreamble) {
            this._inHeader = true;
        }
    }
    if (data && start < end && !this._ignoreData) {
        if (this._isPreamble || !this._inHeader) {
            if (buf) {
                shouldWriteMore = this._part.push(buf);
            }
            shouldWriteMore = this._part.push(data.slice(start, end));
            if (!shouldWriteMore) {
                this._pause = true;
            }
        } else if (!this._isPreamble && this._inHeader) {
            if (buf) {
                this._hparser.push(buf);
            }
            r = this._hparser.push(data.slice(start, end));
            if (!this._inHeader && r !== undefined && r < end) {
                this._oninfo(false, data, start + r, end);
            }
        }
    }
    if (isMatch) {
        this._hparser.reset();
        if (this._isPreamble) {
            this._isPreamble = false;
        } else {
            if (start !== end) {
                ++this._parts;
                this._part.on('end', function() {
                    if (--self._parts === 0) {
                        if (self._finished) {
                            self._realFinish = true;
                            self.emit('finish');
                            self._realFinish = false;
                        } else {
                            self._unpause();
                        }
                    }
                });
            }
        }
        this._part.push(null);
        this._part = undefined;
        this._ignoreData = false;
        this._justMatched = true;
        this._dashes = 0;
    }
};
Dicer.prototype._unpause = function() {
    if (!this._pause) {
        return;
    }
    this._pause = false;
    if (this._cb) {
        const cb = this._cb;
        this._cb = undefined;
        cb();
    }
};
module.exports = Dicer;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Node has always utf-8
const utf8Decoder = new TextDecoder('utf-8');
const textDecoders = new Map([
    [
        'utf-8',
        utf8Decoder
    ],
    [
        'utf8',
        utf8Decoder
    ]
]);
function getDecoder(charset) {
    let lc;
    while(true){
        switch(charset){
            case 'utf-8':
            case 'utf8':
                return decoders.utf8;
            case 'latin1':
            case 'ascii':
            case 'us-ascii':
            case 'iso-8859-1':
            case 'iso8859-1':
            case 'iso88591':
            case 'iso_8859-1':
            case 'windows-1252':
            case 'iso_8859-1:1987':
            case 'cp1252':
            case 'x-cp1252':
                return decoders.latin1;
            case 'utf16le':
            case 'utf-16le':
            case 'ucs2':
            case 'ucs-2':
                return decoders.utf16le;
            case 'base64':
                return decoders.base64;
            default:
                if (lc === undefined) {
                    lc = true;
                    charset = charset.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset);
        }
    }
}
const decoders = {
    utf8: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            return data;
        }
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.base64Slice(0, data.length);
    },
    other: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        if (textDecoders.has(/*TURBOPACK member replacement*/ __turbopack_context__.e.toString())) {
            try {
                return textDecoders.get(/*TURBOPACK member replacement*/ __turbopack_context__.e).decode(data);
            } catch  {}
        }
        return typeof data === 'string' ? data : data.toString();
    }
};
function decodeText(text, sourceEncoding, destEncoding) {
    if (text) {
        return getDecoder(destEncoding)(text, sourceEncoding);
    }
    return text;
}
module.exports = decodeText;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable object-property-newline */ const decodeText = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-route] (ecmascript)");
const RE_ENCODED = /%[a-fA-F0-9][a-fA-F0-9]/g;
const EncodedLookup = {
    '%00': '\x00',
    '%01': '\x01',
    '%02': '\x02',
    '%03': '\x03',
    '%04': '\x04',
    '%05': '\x05',
    '%06': '\x06',
    '%07': '\x07',
    '%08': '\x08',
    '%09': '\x09',
    '%0a': '\x0a',
    '%0A': '\x0a',
    '%0b': '\x0b',
    '%0B': '\x0b',
    '%0c': '\x0c',
    '%0C': '\x0c',
    '%0d': '\x0d',
    '%0D': '\x0d',
    '%0e': '\x0e',
    '%0E': '\x0e',
    '%0f': '\x0f',
    '%0F': '\x0f',
    '%10': '\x10',
    '%11': '\x11',
    '%12': '\x12',
    '%13': '\x13',
    '%14': '\x14',
    '%15': '\x15',
    '%16': '\x16',
    '%17': '\x17',
    '%18': '\x18',
    '%19': '\x19',
    '%1a': '\x1a',
    '%1A': '\x1a',
    '%1b': '\x1b',
    '%1B': '\x1b',
    '%1c': '\x1c',
    '%1C': '\x1c',
    '%1d': '\x1d',
    '%1D': '\x1d',
    '%1e': '\x1e',
    '%1E': '\x1e',
    '%1f': '\x1f',
    '%1F': '\x1f',
    '%20': '\x20',
    '%21': '\x21',
    '%22': '\x22',
    '%23': '\x23',
    '%24': '\x24',
    '%25': '\x25',
    '%26': '\x26',
    '%27': '\x27',
    '%28': '\x28',
    '%29': '\x29',
    '%2a': '\x2a',
    '%2A': '\x2a',
    '%2b': '\x2b',
    '%2B': '\x2b',
    '%2c': '\x2c',
    '%2C': '\x2c',
    '%2d': '\x2d',
    '%2D': '\x2d',
    '%2e': '\x2e',
    '%2E': '\x2e',
    '%2f': '\x2f',
    '%2F': '\x2f',
    '%30': '\x30',
    '%31': '\x31',
    '%32': '\x32',
    '%33': '\x33',
    '%34': '\x34',
    '%35': '\x35',
    '%36': '\x36',
    '%37': '\x37',
    '%38': '\x38',
    '%39': '\x39',
    '%3a': '\x3a',
    '%3A': '\x3a',
    '%3b': '\x3b',
    '%3B': '\x3b',
    '%3c': '\x3c',
    '%3C': '\x3c',
    '%3d': '\x3d',
    '%3D': '\x3d',
    '%3e': '\x3e',
    '%3E': '\x3e',
    '%3f': '\x3f',
    '%3F': '\x3f',
    '%40': '\x40',
    '%41': '\x41',
    '%42': '\x42',
    '%43': '\x43',
    '%44': '\x44',
    '%45': '\x45',
    '%46': '\x46',
    '%47': '\x47',
    '%48': '\x48',
    '%49': '\x49',
    '%4a': '\x4a',
    '%4A': '\x4a',
    '%4b': '\x4b',
    '%4B': '\x4b',
    '%4c': '\x4c',
    '%4C': '\x4c',
    '%4d': '\x4d',
    '%4D': '\x4d',
    '%4e': '\x4e',
    '%4E': '\x4e',
    '%4f': '\x4f',
    '%4F': '\x4f',
    '%50': '\x50',
    '%51': '\x51',
    '%52': '\x52',
    '%53': '\x53',
    '%54': '\x54',
    '%55': '\x55',
    '%56': '\x56',
    '%57': '\x57',
    '%58': '\x58',
    '%59': '\x59',
    '%5a': '\x5a',
    '%5A': '\x5a',
    '%5b': '\x5b',
    '%5B': '\x5b',
    '%5c': '\x5c',
    '%5C': '\x5c',
    '%5d': '\x5d',
    '%5D': '\x5d',
    '%5e': '\x5e',
    '%5E': '\x5e',
    '%5f': '\x5f',
    '%5F': '\x5f',
    '%60': '\x60',
    '%61': '\x61',
    '%62': '\x62',
    '%63': '\x63',
    '%64': '\x64',
    '%65': '\x65',
    '%66': '\x66',
    '%67': '\x67',
    '%68': '\x68',
    '%69': '\x69',
    '%6a': '\x6a',
    '%6A': '\x6a',
    '%6b': '\x6b',
    '%6B': '\x6b',
    '%6c': '\x6c',
    '%6C': '\x6c',
    '%6d': '\x6d',
    '%6D': '\x6d',
    '%6e': '\x6e',
    '%6E': '\x6e',
    '%6f': '\x6f',
    '%6F': '\x6f',
    '%70': '\x70',
    '%71': '\x71',
    '%72': '\x72',
    '%73': '\x73',
    '%74': '\x74',
    '%75': '\x75',
    '%76': '\x76',
    '%77': '\x77',
    '%78': '\x78',
    '%79': '\x79',
    '%7a': '\x7a',
    '%7A': '\x7a',
    '%7b': '\x7b',
    '%7B': '\x7b',
    '%7c': '\x7c',
    '%7C': '\x7c',
    '%7d': '\x7d',
    '%7D': '\x7d',
    '%7e': '\x7e',
    '%7E': '\x7e',
    '%7f': '\x7f',
    '%7F': '\x7f',
    '%80': '\x80',
    '%81': '\x81',
    '%82': '\x82',
    '%83': '\x83',
    '%84': '\x84',
    '%85': '\x85',
    '%86': '\x86',
    '%87': '\x87',
    '%88': '\x88',
    '%89': '\x89',
    '%8a': '\x8a',
    '%8A': '\x8a',
    '%8b': '\x8b',
    '%8B': '\x8b',
    '%8c': '\x8c',
    '%8C': '\x8c',
    '%8d': '\x8d',
    '%8D': '\x8d',
    '%8e': '\x8e',
    '%8E': '\x8e',
    '%8f': '\x8f',
    '%8F': '\x8f',
    '%90': '\x90',
    '%91': '\x91',
    '%92': '\x92',
    '%93': '\x93',
    '%94': '\x94',
    '%95': '\x95',
    '%96': '\x96',
    '%97': '\x97',
    '%98': '\x98',
    '%99': '\x99',
    '%9a': '\x9a',
    '%9A': '\x9a',
    '%9b': '\x9b',
    '%9B': '\x9b',
    '%9c': '\x9c',
    '%9C': '\x9c',
    '%9d': '\x9d',
    '%9D': '\x9d',
    '%9e': '\x9e',
    '%9E': '\x9e',
    '%9f': '\x9f',
    '%9F': '\x9f',
    '%a0': '\xa0',
    '%A0': '\xa0',
    '%a1': '\xa1',
    '%A1': '\xa1',
    '%a2': '\xa2',
    '%A2': '\xa2',
    '%a3': '\xa3',
    '%A3': '\xa3',
    '%a4': '\xa4',
    '%A4': '\xa4',
    '%a5': '\xa5',
    '%A5': '\xa5',
    '%a6': '\xa6',
    '%A6': '\xa6',
    '%a7': '\xa7',
    '%A7': '\xa7',
    '%a8': '\xa8',
    '%A8': '\xa8',
    '%a9': '\xa9',
    '%A9': '\xa9',
    '%aa': '\xaa',
    '%Aa': '\xaa',
    '%aA': '\xaa',
    '%AA': '\xaa',
    '%ab': '\xab',
    '%Ab': '\xab',
    '%aB': '\xab',
    '%AB': '\xab',
    '%ac': '\xac',
    '%Ac': '\xac',
    '%aC': '\xac',
    '%AC': '\xac',
    '%ad': '\xad',
    '%Ad': '\xad',
    '%aD': '\xad',
    '%AD': '\xad',
    '%ae': '\xae',
    '%Ae': '\xae',
    '%aE': '\xae',
    '%AE': '\xae',
    '%af': '\xaf',
    '%Af': '\xaf',
    '%aF': '\xaf',
    '%AF': '\xaf',
    '%b0': '\xb0',
    '%B0': '\xb0',
    '%b1': '\xb1',
    '%B1': '\xb1',
    '%b2': '\xb2',
    '%B2': '\xb2',
    '%b3': '\xb3',
    '%B3': '\xb3',
    '%b4': '\xb4',
    '%B4': '\xb4',
    '%b5': '\xb5',
    '%B5': '\xb5',
    '%b6': '\xb6',
    '%B6': '\xb6',
    '%b7': '\xb7',
    '%B7': '\xb7',
    '%b8': '\xb8',
    '%B8': '\xb8',
    '%b9': '\xb9',
    '%B9': '\xb9',
    '%ba': '\xba',
    '%Ba': '\xba',
    '%bA': '\xba',
    '%BA': '\xba',
    '%bb': '\xbb',
    '%Bb': '\xbb',
    '%bB': '\xbb',
    '%BB': '\xbb',
    '%bc': '\xbc',
    '%Bc': '\xbc',
    '%bC': '\xbc',
    '%BC': '\xbc',
    '%bd': '\xbd',
    '%Bd': '\xbd',
    '%bD': '\xbd',
    '%BD': '\xbd',
    '%be': '\xbe',
    '%Be': '\xbe',
    '%bE': '\xbe',
    '%BE': '\xbe',
    '%bf': '\xbf',
    '%Bf': '\xbf',
    '%bF': '\xbf',
    '%BF': '\xbf',
    '%c0': '\xc0',
    '%C0': '\xc0',
    '%c1': '\xc1',
    '%C1': '\xc1',
    '%c2': '\xc2',
    '%C2': '\xc2',
    '%c3': '\xc3',
    '%C3': '\xc3',
    '%c4': '\xc4',
    '%C4': '\xc4',
    '%c5': '\xc5',
    '%C5': '\xc5',
    '%c6': '\xc6',
    '%C6': '\xc6',
    '%c7': '\xc7',
    '%C7': '\xc7',
    '%c8': '\xc8',
    '%C8': '\xc8',
    '%c9': '\xc9',
    '%C9': '\xc9',
    '%ca': '\xca',
    '%Ca': '\xca',
    '%cA': '\xca',
    '%CA': '\xca',
    '%cb': '\xcb',
    '%Cb': '\xcb',
    '%cB': '\xcb',
    '%CB': '\xcb',
    '%cc': '\xcc',
    '%Cc': '\xcc',
    '%cC': '\xcc',
    '%CC': '\xcc',
    '%cd': '\xcd',
    '%Cd': '\xcd',
    '%cD': '\xcd',
    '%CD': '\xcd',
    '%ce': '\xce',
    '%Ce': '\xce',
    '%cE': '\xce',
    '%CE': '\xce',
    '%cf': '\xcf',
    '%Cf': '\xcf',
    '%cF': '\xcf',
    '%CF': '\xcf',
    '%d0': '\xd0',
    '%D0': '\xd0',
    '%d1': '\xd1',
    '%D1': '\xd1',
    '%d2': '\xd2',
    '%D2': '\xd2',
    '%d3': '\xd3',
    '%D3': '\xd3',
    '%d4': '\xd4',
    '%D4': '\xd4',
    '%d5': '\xd5',
    '%D5': '\xd5',
    '%d6': '\xd6',
    '%D6': '\xd6',
    '%d7': '\xd7',
    '%D7': '\xd7',
    '%d8': '\xd8',
    '%D8': '\xd8',
    '%d9': '\xd9',
    '%D9': '\xd9',
    '%da': '\xda',
    '%Da': '\xda',
    '%dA': '\xda',
    '%DA': '\xda',
    '%db': '\xdb',
    '%Db': '\xdb',
    '%dB': '\xdb',
    '%DB': '\xdb',
    '%dc': '\xdc',
    '%Dc': '\xdc',
    '%dC': '\xdc',
    '%DC': '\xdc',
    '%dd': '\xdd',
    '%Dd': '\xdd',
    '%dD': '\xdd',
    '%DD': '\xdd',
    '%de': '\xde',
    '%De': '\xde',
    '%dE': '\xde',
    '%DE': '\xde',
    '%df': '\xdf',
    '%Df': '\xdf',
    '%dF': '\xdf',
    '%DF': '\xdf',
    '%e0': '\xe0',
    '%E0': '\xe0',
    '%e1': '\xe1',
    '%E1': '\xe1',
    '%e2': '\xe2',
    '%E2': '\xe2',
    '%e3': '\xe3',
    '%E3': '\xe3',
    '%e4': '\xe4',
    '%E4': '\xe4',
    '%e5': '\xe5',
    '%E5': '\xe5',
    '%e6': '\xe6',
    '%E6': '\xe6',
    '%e7': '\xe7',
    '%E7': '\xe7',
    '%e8': '\xe8',
    '%E8': '\xe8',
    '%e9': '\xe9',
    '%E9': '\xe9',
    '%ea': '\xea',
    '%Ea': '\xea',
    '%eA': '\xea',
    '%EA': '\xea',
    '%eb': '\xeb',
    '%Eb': '\xeb',
    '%eB': '\xeb',
    '%EB': '\xeb',
    '%ec': '\xec',
    '%Ec': '\xec',
    '%eC': '\xec',
    '%EC': '\xec',
    '%ed': '\xed',
    '%Ed': '\xed',
    '%eD': '\xed',
    '%ED': '\xed',
    '%ee': '\xee',
    '%Ee': '\xee',
    '%eE': '\xee',
    '%EE': '\xee',
    '%ef': '\xef',
    '%Ef': '\xef',
    '%eF': '\xef',
    '%EF': '\xef',
    '%f0': '\xf0',
    '%F0': '\xf0',
    '%f1': '\xf1',
    '%F1': '\xf1',
    '%f2': '\xf2',
    '%F2': '\xf2',
    '%f3': '\xf3',
    '%F3': '\xf3',
    '%f4': '\xf4',
    '%F4': '\xf4',
    '%f5': '\xf5',
    '%F5': '\xf5',
    '%f6': '\xf6',
    '%F6': '\xf6',
    '%f7': '\xf7',
    '%F7': '\xf7',
    '%f8': '\xf8',
    '%F8': '\xf8',
    '%f9': '\xf9',
    '%F9': '\xf9',
    '%fa': '\xfa',
    '%Fa': '\xfa',
    '%fA': '\xfa',
    '%FA': '\xfa',
    '%fb': '\xfb',
    '%Fb': '\xfb',
    '%fB': '\xfb',
    '%FB': '\xfb',
    '%fc': '\xfc',
    '%Fc': '\xfc',
    '%fC': '\xfc',
    '%FC': '\xfc',
    '%fd': '\xfd',
    '%Fd': '\xfd',
    '%fD': '\xfd',
    '%FD': '\xfd',
    '%fe': '\xfe',
    '%Fe': '\xfe',
    '%fE': '\xfe',
    '%FE': '\xfe',
    '%ff': '\xff',
    '%Ff': '\xff',
    '%fF': '\xff',
    '%FF': '\xff'
};
function encodedReplacer(match) {
    return EncodedLookup[match];
}
const STATE_KEY = 0;
const STATE_VALUE = 1;
const STATE_CHARSET = 2;
const STATE_LANG = 3;
function parseParams(str) {
    const res = [];
    let state = STATE_KEY;
    let charset = '';
    let inquote = false;
    let escaping = false;
    let p = 0;
    let tmp = '';
    const len = str.length;
    for(var i = 0; i < len; ++i){
        const char = str[i];
        if (char === '\\' && inquote) {
            if (escaping) {
                escaping = false;
            } else {
                escaping = true;
                continue;
            }
        } else if (char === '"') {
            if (!escaping) {
                if (inquote) {
                    inquote = false;
                    state = STATE_KEY;
                    // Skip any remaining characters until we hit a semicolon or end of string
                    // This ensures we don't include characters after the closing quote
                    while(i + 1 < len && str[i + 1] !== ';'){
                        ++i;
                    }
                } else {
                    inquote = true;
                }
                continue;
            } else {
                escaping = false;
            }
        } else {
            if (escaping && inquote) {
                tmp += '\\';
            }
            escaping = false;
            if ((state === STATE_CHARSET || state === STATE_LANG) && char === "'") {
                if (state === STATE_CHARSET) {
                    state = STATE_LANG;
                    charset = tmp.substring(1);
                } else {
                    state = STATE_VALUE;
                }
                tmp = '';
                continue;
            } else if (state === STATE_KEY && (char === '*' || char === '=') && res.length) {
                state = char === '*' ? STATE_CHARSET : STATE_VALUE;
                res[p] = [
                    tmp,
                    undefined
                ];
                tmp = '';
                continue;
            } else if (!inquote && char === ';') {
                state = STATE_KEY;
                if (charset) {
                    if (tmp.length) {
                        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
                    }
                    charset = '';
                } else if (tmp.length) {
                    tmp = decodeText(tmp, 'binary', 'utf8');
                }
                if (res[p] === undefined) {
                    res[p] = tmp;
                } else {
                    res[p][1] = tmp;
                }
                tmp = '';
                ++p;
                continue;
            } else if (!inquote && (char === ' ' || char === '\t')) {
                continue;
            }
        }
        tmp += char;
    }
    if (charset && tmp.length) {
        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
    } else if (tmp) {
        tmp = decodeText(tmp, 'binary', 'utf8');
    }
    if (res[p] === undefined) {
        if (tmp) {
            res[p] = tmp;
        }
    } else {
        res[p][1] = tmp;
    }
    return res;
}
module.exports = parseParams;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/basename.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function basename(path) {
    if (typeof path !== 'string') {
        return '';
    }
    for(var i = path.length - 1; i >= 0; --i){
        switch(path.charCodeAt(i)){
            case 0x2F:
            case 0x5C:
                path = path.slice(i + 1);
                return path === '..' || path === '.' ? '' : path;
        }
    }
    return path === '..' || path === '.' ? '' : path;
};
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/types/multipart.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TODO:
//  * support 1 nested multipart level
//    (see second multipart example here:
//     http://www.w3.org/TR/html401/interact/forms.html#didx-multipartform-data)
//  * support limits.fieldNameSize
//     -- this will require modifications to utils.parseParams
const { Readable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-route] (ecmascript)");
const parseParams = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-route] (ecmascript)");
const decodeText = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-route] (ecmascript)");
const basename = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/basename.js [app-route] (ecmascript)");
const getLimit = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-route] (ecmascript)");
const RE_BOUNDARY = /^boundary$/i;
const RE_FIELD = /^form-data$/i;
const RE_CHARSET = /^charset$/i;
const RE_FILENAME = /^filename$/i;
const RE_NAME = /^name$/i;
Multipart.detect = /^multipart\/form-data/i;
function Multipart(boy, cfg) {
    let i;
    let len;
    const self = this;
    let boundary;
    const limits = cfg.limits;
    const isPartAFile = cfg.isPartAFile || ((fieldName, contentType, fileName)=>contentType === 'application/octet-stream' || fileName !== undefined);
    const parsedConType = cfg.parsedConType || [];
    const defCharset = cfg.defCharset || 'utf8';
    const preservePath = cfg.preservePath;
    const fileOpts = {
        highWaterMark: cfg.fileHwm
    };
    for(i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_BOUNDARY.test(parsedConType[i][0])) {
            boundary = parsedConType[i][1];
            break;
        }
    }
    function checkFinished() {
        if (nends === 0 && finished && !boy._done) {
            finished = false;
            self.end();
        }
    }
    if (typeof boundary !== 'string') {
        throw new Error('Multipart: Boundary not found');
    }
    const fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    const fileSizeLimit = getLimit(limits, 'fileSize', Infinity);
    const filesLimit = getLimit(limits, 'files', Infinity);
    const fieldsLimit = getLimit(limits, 'fields', Infinity);
    const partsLimit = getLimit(limits, 'parts', Infinity);
    const headerPairsLimit = getLimit(limits, 'headerPairs', 2000);
    const headerSizeLimit = getLimit(limits, 'headerSize', 80 * 1024);
    let nfiles = 0;
    let nfields = 0;
    let nends = 0;
    let curFile;
    let curField;
    let finished = false;
    this._needDrain = false;
    this._pause = false;
    this._cb = undefined;
    this._nparts = 0;
    this._boy = boy;
    const parserCfg = {
        boundary,
        maxHeaderPairs: headerPairsLimit,
        maxHeaderSize: headerSizeLimit,
        partHwm: fileOpts.highWaterMark,
        highWaterMark: cfg.highWaterMark
    };
    this.parser = new Dicer(parserCfg);
    this.parser.on('drain', function() {
        self._needDrain = false;
        if (self._cb && !self._pause) {
            const cb = self._cb;
            self._cb = undefined;
            cb();
        }
    }).on('part', function onPart(part) {
        if (++self._nparts > partsLimit) {
            self.parser.removeListener('part', onPart);
            self.parser.on('part', skipPart);
            boy.hitPartsLimit = true;
            boy.emit('partsLimit');
            return skipPart(part);
        }
        // hack because streams2 _always_ doesn't emit 'end' until nextTick, so let
        // us emit 'end' early since we know the part has ended if we are already
        // seeing the next part
        if (curField) {
            const field = curField;
            field.emit('end');
            field.removeAllListeners('end');
        }
        part.on('header', function(header) {
            let contype;
            let fieldname;
            let parsed;
            let charset;
            let encoding;
            let filename;
            let nsize = 0;
            if (header['content-type']) {
                parsed = parseParams(header['content-type'][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i){
                        if (RE_CHARSET.test(parsed[i][0])) {
                            charset = parsed[i][1].toLowerCase();
                            break;
                        }
                    }
                }
            }
            if (contype === undefined) {
                contype = 'text/plain';
            }
            if (charset === undefined) {
                charset = defCharset;
            }
            if (header['content-disposition']) {
                parsed = parseParams(header['content-disposition'][0]);
                if (!RE_FIELD.test(parsed[0])) {
                    return skipPart(part);
                }
                for(i = 0, len = parsed.length; i < len; ++i){
                    if (RE_NAME.test(parsed[i][0])) {
                        fieldname = parsed[i][1];
                    } else if (RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) {
                            filename = basename(filename);
                        }
                    }
                }
            } else {
                return skipPart(part);
            }
            if (header['content-transfer-encoding']) {
                encoding = header['content-transfer-encoding'][0].toLowerCase();
            } else {
                encoding = '7bit';
            }
            let onData, onEnd;
            if (isPartAFile(fieldname, contype, filename)) {
                // file/binary field
                if (nfiles === filesLimit) {
                    if (!boy.hitFilesLimit) {
                        boy.hitFilesLimit = true;
                        boy.emit('filesLimit');
                    }
                    return skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount('file') === 0) {
                    self.parser._ignore();
                    return;
                }
                ++nends;
                const file = new FileStream(fileOpts);
                curFile = file;
                file.on('end', function() {
                    --nends;
                    self._pause = false;
                    checkFinished();
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                });
                file._read = function(n) {
                    if (!self._pause) {
                        return;
                    }
                    self._pause = false;
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                };
                boy.emit('file', fieldname, file, filename, encoding, contype);
                onData = function(data) {
                    if ((nsize += data.length) > fileSizeLimit) {
                        const extralen = fileSizeLimit - nsize + data.length;
                        if (extralen > 0) {
                            file.push(data.slice(0, extralen));
                        }
                        file.truncated = true;
                        file.bytesRead = fileSizeLimit;
                        part.removeAllListeners('data');
                        file.emit('limit');
                        return;
                    } else if (!file.push(data)) {
                        self._pause = true;
                    }
                    file.bytesRead = nsize;
                };
                onEnd = function() {
                    curFile = undefined;
                    file.push(null);
                };
            } else {
                // non-file field
                if (nfields === fieldsLimit) {
                    if (!boy.hitFieldsLimit) {
                        boy.hitFieldsLimit = true;
                        boy.emit('fieldsLimit');
                    }
                    return skipPart(part);
                }
                ++nfields;
                ++nends;
                let buffer = '';
                let truncated = false;
                curField = part;
                onData = function(data) {
                    if ((nsize += data.length) > fieldSizeLimit) {
                        const extralen = fieldSizeLimit - (nsize - data.length);
                        buffer += data.toString('binary', 0, extralen);
                        truncated = true;
                        part.removeAllListeners('data');
                    } else {
                        buffer += data.toString('binary');
                    }
                };
                onEnd = function() {
                    curField = undefined;
                    if (buffer.length) {
                        buffer = decodeText(buffer, 'binary', charset);
                    }
                    boy.emit('field', fieldname, buffer, false, truncated, encoding, contype);
                    --nends;
                    checkFinished();
                };
            }
            /* As of node@2efe4ab761666 (v0.10.29+/v0.11.14+), busboy had become
         broken. Streams2/streams3 is a huge black box of confusion, but
         somehow overriding the sync state seems to fix things again (and still
         seems to work for previous node versions).
      */ part._readableState.sync = false;
            part.on('data', onData);
            part.on('end', onEnd);
        }).on('error', function(err) {
            if (curFile) {
                curFile.emit('error', err);
            }
        });
    }).on('error', function(err) {
        boy.emit('error', err);
    }).on('finish', function() {
        finished = true;
        checkFinished();
    });
}
Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) {
        cb();
    } else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
Multipart.prototype.end = function() {
    const self = this;
    if (self.parser.writable) {
        self.parser.end();
    } else if (!self._boy._done) {
        process.nextTick(function() {
            self._boy._done = true;
            self._boy.emit('finish');
        });
    }
};
function skipPart(part) {
    part.resume();
}
function FileStream(opts) {
    Readable.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
inherits(FileStream, Readable);
FileStream.prototype._read = function(n) {};
module.exports = Multipart;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const RE_PLUS = /\+/g;
const HEX = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function Decoder() {
    this.buffer = undefined;
}
Decoder.prototype.write = function(str) {
    // Replace '+' with ' ' before decoding
    str = str.replace(RE_PLUS, ' ');
    let res = '';
    let i = 0;
    let p = 0;
    const len = str.length;
    for(; i < len; ++i){
        if (this.buffer !== undefined) {
            if (!HEX[str.charCodeAt(i)]) {
                res += '%' + this.buffer;
                this.buffer = undefined;
                --i; // retry character
            } else {
                this.buffer += str[i];
                ++p;
                if (this.buffer.length === 2) {
                    res += String.fromCharCode(parseInt(this.buffer, 16));
                    this.buffer = undefined;
                }
            }
        } else if (str[i] === '%') {
            if (i > p) {
                res += str.substring(p, i);
                p = i;
            }
            this.buffer = '';
            ++p;
        }
    }
    if (p < len && this.buffer === undefined) {
        res += str.substring(p);
    }
    return res;
};
Decoder.prototype.reset = function() {
    this.buffer = undefined;
};
module.exports = Decoder;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Decoder = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-route] (ecmascript)");
const decodeText = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-route] (ecmascript)");
const getLimit = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-route] (ecmascript)");
const RE_CHARSET = /^charset$/i;
UrlEncoded.detect = /^application\/x-www-form-urlencoded/i;
function UrlEncoded(boy, cfg) {
    const limits = cfg.limits;
    const parsedConType = cfg.parsedConType;
    this.boy = boy;
    this.fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    this.fieldNameSizeLimit = getLimit(limits, 'fieldNameSize', 100);
    this.fieldsLimit = getLimit(limits, 'fields', Infinity);
    let charset;
    for(var i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_CHARSET.test(parsedConType[i][0])) {
            charset = parsedConType[i][1].toLowerCase();
            break;
        }
    }
    if (charset === undefined) {
        charset = cfg.defCharset || 'utf8';
    }
    this.decoder = new Decoder();
    this.charset = charset;
    this._fields = 0;
    this._state = 'key';
    this._checkingBytes = true;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._key = '';
    this._val = '';
    this._keyTrunc = false;
    this._valTrunc = false;
    this._hitLimit = false;
}
UrlEncoded.prototype.write = function(data, cb) {
    if (this._fields === this.fieldsLimit) {
        if (!this.boy.hitFieldsLimit) {
            this.boy.hitFieldsLimit = true;
            this.boy.emit('fieldsLimit');
        }
        return cb();
    }
    let idxeq;
    let idxamp;
    let i;
    let p = 0;
    const len = data.length;
    while(p < len){
        if (this._state === 'key') {
            idxeq = idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x3D /* = */ ) {
                    idxeq = i;
                    break;
                } else if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesKey;
                }
            }
            if (idxeq !== undefined) {
                // key with assignment
                if (idxeq > p) {
                    this._key += this.decoder.write(data.toString('binary', p, idxeq));
                }
                this._state = 'val';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._val = '';
                this._bytesVal = 0;
                this._valTrunc = false;
                this.decoder.reset();
                p = idxeq + 1;
            } else if (idxamp !== undefined) {
                // key with no assignment
                ++this._fields;
                let key;
                const keyTrunc = this._keyTrunc;
                if (idxamp > p) {
                    key = this._key += this.decoder.write(data.toString('binary', p, idxamp));
                } else {
                    key = this._key;
                }
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                if (key.length) {
                    this.boy.emit('field', decodeText(key, 'binary', this.charset), '', keyTrunc, false);
                }
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._key += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if ((this._bytesKey = this._key.length) === this.fieldNameSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._keyTrunc = true;
                }
            } else {
                if (p < len) {
                    this._key += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        } else {
            idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesVal;
                }
            }
            if (idxamp !== undefined) {
                ++this._fields;
                if (idxamp > p) {
                    this._val += this.decoder.write(data.toString('binary', p, idxamp));
                }
                this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
                this._state = 'key';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._val += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if (this._val === '' && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._valTrunc = true;
                }
            } else {
                if (p < len) {
                    this._val += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        }
    }
    cb();
};
UrlEncoded.prototype.end = function() {
    if (this.boy._done) {
        return;
    }
    if (this._state === 'key' && this._key.length > 0) {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), '', this._keyTrunc, false);
    } else if (this._state === 'val') {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
    }
    this.boy._done = true;
    this.boy.emit('finish');
};
module.exports = UrlEncoded;
}),
"[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/main.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WritableStream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const { inherits } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-route] (ecmascript)");
const MultipartParser = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/types/multipart.js [app-route] (ecmascript)");
const UrlencodedParser = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-route] (ecmascript)");
const parseParams = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-route] (ecmascript)");
function Busboy(opts) {
    if (!(this instanceof Busboy)) {
        return new Busboy(opts);
    }
    if (typeof opts !== 'object') {
        throw new TypeError('Busboy expected an options-Object.');
    }
    if (typeof opts.headers !== 'object') {
        throw new TypeError('Busboy expected an options-Object with headers-attribute.');
    }
    if (typeof opts.headers['content-type'] !== 'string') {
        throw new TypeError('Missing Content-Type-header.');
    }
    const { headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    WritableStream.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
inherits(Busboy, WritableStream);
Busboy.prototype.emit = function(ev) {
    if (ev === 'finish') {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) {
            return;
        }
        this._finished = true;
    }
    WritableStream.prototype.emit.apply(this, arguments);
};
Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = parseParams(headers['content-type']);
    const cfg = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: parsed,
        preservePath: this.opts.preservePath
    };
    if (MultipartParser.detect.test(parsed[0])) {
        return new MultipartParser(this, cfg);
    }
    if (UrlencodedParser.detect.test(parsed[0])) {
        return new UrlencodedParser(this, cfg);
    }
    throw new Error('Unsupported Content-Type.');
};
Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module.exports = Busboy;
module.exports.default = Busboy;
module.exports.Busboy = Busboy;
module.exports.Dicer = Dicer;
}),
"[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_ACCEPT_ENCODING = exports.fakePromise = void 0;
exports.getHeadersObj = getHeadersObj;
exports.defaultHeadersSerializer = defaultHeadersSerializer;
exports.isArrayBufferView = isArrayBufferView;
exports.isNodeReadable = isNodeReadable;
exports.isIterable = isIterable;
exports.shouldRedirect = shouldRedirect;
exports.pipeThrough = pipeThrough;
exports.endStream = endStream;
exports.safeWrite = safeWrite;
exports.getSupportedFormats = getSupportedFormats;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
const node_events_1 = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const node_zlib_1 = tslib_1.__importDefault(__turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)"));
function isHeadersInstance(obj) {
    return obj?.forEach != null;
}
function getHeadersObj(headers) {
    if (headers == null || !isHeadersInstance(headers)) {
        return headers;
    }
    // @ts-expect-error - `headersInit` is not a public property
    if (headers.headersInit && !headers._map && !isHeadersInstance(headers.headersInit)) {
        // @ts-expect-error - `headersInit` is not a public property
        return headers.headersInit;
    }
    return Object.fromEntries(headers.entries());
}
function defaultHeadersSerializer(headers, onContentLength) {
    const headerArray = [];
    headers.forEach((value, key)=>{
        if (onContentLength && key === 'content-length') {
            onContentLength(value);
        }
        headerArray.push(`${key}: ${value}`);
    });
    return headerArray;
}
var promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
Object.defineProperty(exports, "fakePromise", {
    enumerable: true,
    get: function() {
        return promise_helpers_1.fakePromise;
    }
});
function isArrayBufferView(obj) {
    return obj != null && obj.buffer != null && obj.byteLength != null && obj.byteOffset != null;
}
function isNodeReadable(obj) {
    return obj != null && obj.pipe != null;
}
function isIterable(value) {
    return value?.[Symbol.iterator] != null;
}
function shouldRedirect(status) {
    return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}
function pipeThrough({ src, dest, signal, onError }) {
    if (onError) {
        // listen for errors on the destination stream if necessary. if the readable
        // stream (src) emits an error, the writable destination (dest) will be
        // destroyed with that error (see below)
        dest.once('error', onError);
    }
    src.once('error', (e)=>{
        // if the readable stream (src) emits an error during pipe, the writable
        // destination (dest) is not closed automatically. that needs to be
        // done manually. the readable stream is closed when error is emitted,
        // so only the writable destination needs to be destroyed
        dest.destroy(e);
    });
    dest.once('close', ()=>{
        // if the writable destination (dest) is closed, the readable stream (src)
        // is not closed automatically. that needs to be done manually
        if (!src.destroyed) {
            src.destroy();
        }
    });
    if (signal) {
        // this is faster than `import('node:signal').addAbortSignal(signal, src)`
        const srcRef = new WeakRef(src);
        const signalRef = new WeakRef(signal);
        function cleanup() {
            signalRef.deref()?.removeEventListener('abort', onAbort);
            srcRef.deref()?.removeListener('end', cleanup);
            srcRef.deref()?.removeListener('error', cleanup);
            srcRef.deref()?.removeListener('close', cleanup);
        }
        function onAbort() {
            srcRef.deref()?.destroy(new AbortError());
            cleanup();
        }
        signal.addEventListener('abort', onAbort, {
            once: true
        });
        // this is faster than `import('node:signal').finished(src, cleanup)`
        src.once('end', cleanup);
        src.once('error', cleanup);
        src.once('close', cleanup);
    }
    src.pipe(dest, {
        end: true
    });
}
function endStream(stream) {
    // Avoid arguments adaptor trampoline https://v8.dev/blog/adaptor-frame
    return stream.end(null, null, null);
}
function safeWrite(chunk, stream) {
    const result = stream.write(chunk);
    if (!result) {
        return (0, node_events_1.once)(stream, 'drain');
    }
}
// https://github.com/nodejs/node/blob/f692878dec6354c0a82241f224906981861bc840/lib/internal/errors.js#L961-L973
class AbortError extends Error {
    constructor(message = 'The operation was aborted', options = undefined){
        super(message, options);
        this.name = 'AbortError';
    }
}
exports.DEFAULT_ACCEPT_ENCODING = getSupportedFormats().join(', ');
function getSupportedFormats() {
    const baseFormats = [
        'gzip',
        'deflate',
        'br'
    ];
    if (!globalThis.process?.versions?.node?.startsWith('2')) {
        baseFormats.push('deflate-raw');
    }
    if (node_zlib_1.default.createZstdCompress != null) {
        baseFormats.push('zstd');
    }
    return baseFormats;
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/ReadableStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillReadableStream = void 0;
const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const node_events_1 = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const node_stream_1 = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const promises_1 = __turbopack_context__.r("[externals]/node:stream/promises [external] (node:stream/promises, cjs)");
const promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
function createController(desiredSize, readable) {
    let chunks = [];
    let _closed = false;
    let flushed = false;
    return {
        desiredSize,
        enqueue (chunk) {
            const buf = typeof chunk === 'string' ? node_buffer_1.Buffer.from(chunk) : chunk;
            if (!flushed) {
                chunks.push(buf);
            } else {
                readable.push(buf);
            }
        },
        close () {
            if (chunks.length > 0) {
                this._flush();
            }
            readable.push(null);
            _closed = true;
        },
        error (error) {
            if (chunks.length > 0) {
                this._flush();
            }
            readable.destroy(error);
        },
        get _closed () {
            return _closed;
        },
        _flush () {
            flushed = true;
            if (chunks.length > 0) {
                const concatenated = chunks.length > 1 ? node_buffer_1.Buffer.concat(chunks) : chunks[0];
                readable.push(concatenated);
                chunks = [];
            }
        }
    };
}
function isNodeReadable(obj) {
    return obj?.read != null;
}
function isReadableStream(obj) {
    return obj?.getReader != null;
}
class PonyfillReadableStream {
    readable;
    constructor(underlyingSource){
        if (underlyingSource instanceof PonyfillReadableStream && underlyingSource.readable != null) {
            this.readable = underlyingSource.readable;
        } else if (isNodeReadable(underlyingSource)) {
            this.readable = underlyingSource;
        } else if (isReadableStream(underlyingSource)) {
            this.readable = node_stream_1.Readable.fromWeb(underlyingSource);
        } else {
            let started = false;
            let ongoing = false;
            const handleStart = (desiredSize)=>{
                if (!started) {
                    const controller = createController(desiredSize, this.readable);
                    started = true;
                    return (0, promise_helpers_1.handleMaybePromise)(()=>underlyingSource?.start?.(controller), ()=>{
                        controller._flush();
                        if (controller._closed) {
                            return false;
                        }
                        return true;
                    });
                }
                return true;
            };
            const readImpl = (desiredSize)=>{
                return (0, promise_helpers_1.handleMaybePromise)(()=>handleStart(desiredSize), (shouldContinue)=>{
                    if (!shouldContinue) {
                        return;
                    }
                    const controller = createController(desiredSize, this.readable);
                    return (0, promise_helpers_1.handleMaybePromise)(()=>underlyingSource?.pull?.(controller), ()=>{
                        controller._flush();
                        ongoing = false;
                    });
                });
            };
            this.readable = new node_stream_1.Readable({
                read (desiredSize) {
                    if (ongoing) {
                        return;
                    }
                    ongoing = true;
                    return readImpl(desiredSize);
                },
                destroy (err, callback) {
                    if (underlyingSource?.cancel) {
                        try {
                            const res$ = underlyingSource.cancel(err);
                            if (res$?.then) {
                                return res$.then(()=>{
                                    callback(null);
                                }, (err)=>{
                                    callback(err);
                                });
                            }
                        } catch (err) {
                            callback(err);
                            return;
                        }
                    }
                    callback(null);
                }
            });
        }
    }
    cancel(reason) {
        this.readable.destroy(reason);
        // @ts-expect-error - we know it is void
        return (0, node_events_1.once)(this.readable, 'close');
    }
    locked = false;
    getReader(_options) {
        const iterator = this.readable[Symbol.asyncIterator]();
        this.locked = true;
        const thisReadable = this.readable;
        return {
            read () {
                return iterator.next();
            },
            releaseLock: ()=>{
                if (iterator.return) {
                    const retResult$ = iterator.return();
                    if (retResult$.then) {
                        retResult$.then(()=>{
                            this.locked = false;
                        });
                        return;
                    }
                }
                this.locked = false;
            },
            cancel: (reason)=>{
                if (iterator.return) {
                    const retResult$ = iterator.return(reason);
                    if (retResult$.then) {
                        return retResult$.then(()=>{
                            this.locked = false;
                        });
                    }
                }
                this.locked = false;
                return (0, utils_js_1.fakePromise)();
            },
            get closed () {
                return Promise.race([
                    (0, node_events_1.once)(thisReadable, 'end'),
                    (0, node_events_1.once)(thisReadable, 'error').then((err)=>Promise.reject(err))
                ]);
            }
        };
    }
    [Symbol.asyncIterator]() {
        const iterator = this.readable[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator] () {
                return this;
            },
            next: ()=>iterator.next(),
            return: ()=>{
                if (!this.readable.destroyed) {
                    this.readable.destroy();
                }
                return iterator.return?.() || (0, utils_js_1.fakePromise)({
                    done: true,
                    value: undefined
                });
            },
            throw: (err)=>{
                if (!this.readable.destroyed) {
                    this.readable.destroy(err);
                }
                return iterator.throw?.(err) || (0, utils_js_1.fakePromise)({
                    done: true,
                    value: undefined
                });
            }
        };
    }
    tee() {
        throw new Error('Not implemented');
    }
    async pipeToWriter(writer) {
        try {
            for await (const chunk of this){
                await writer.write(chunk);
            }
            await writer.close();
        } catch (err) {
            await writer.abort(err);
        }
    }
    pipeTo(destination) {
        if (isPonyfillWritableStream(destination)) {
            return (0, promises_1.pipeline)(this.readable, destination.writable, {
                end: true
            });
        } else {
            const writer = destination.getWriter();
            return this.pipeToWriter(writer);
        }
    }
    pipeThrough({ writable, readable }) {
        this.pipeTo(writable).catch((err)=>{
            this.readable.destroy(err);
        });
        if (isPonyfillReadableStream(readable)) {
            readable.readable.once('error', (err)=>this.readable.destroy(err));
            readable.readable.once('finish', ()=>this.readable.push(null));
            readable.readable.once('close', ()=>this.readable.push(null));
        }
        return readable;
    }
    static [Symbol.hasInstance](instance) {
        return isReadableStream(instance);
    }
    static from(iterable) {
        return new PonyfillReadableStream(node_stream_1.Readable.from(iterable));
    }
    [Symbol.toStringTag] = 'ReadableStream';
}
exports.PonyfillReadableStream = PonyfillReadableStream;
function isPonyfillReadableStream(obj) {
    return obj?.readable != null;
}
function isPonyfillWritableStream(obj) {
    return obj?.writable != null;
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Blob.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillBlob = void 0;
exports.hasBufferMethod = hasBufferMethod;
exports.hasArrayBufferMethod = hasArrayBufferMethod;
exports.hasBytesMethod = hasBytesMethod;
exports.hasTextMethod = hasTextMethod;
exports.hasSizeProperty = hasSizeProperty;
exports.hasStreamMethod = hasStreamMethod;
exports.hasBlobSignature = hasBlobSignature;
exports.isArrayBuffer = isArrayBuffer;
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */ /* eslint-disable @typescript-eslint/ban-ts-comment */ const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const ReadableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/ReadableStream.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
function getBlobPartAsBuffer(blobPart) {
    if (typeof blobPart === 'string') {
        return node_buffer_1.Buffer.from(blobPart);
    } else if (node_buffer_1.Buffer.isBuffer(blobPart)) {
        return blobPart;
    } else if ((0, utils_js_1.isArrayBufferView)(blobPart)) {
        return node_buffer_1.Buffer.from(blobPart.buffer, blobPart.byteOffset, blobPart.byteLength);
    } else {
        return node_buffer_1.Buffer.from(blobPart);
    }
}
function hasBufferMethod(obj) {
    return obj != null && obj.buffer != null && typeof obj.buffer === 'function';
}
function hasArrayBufferMethod(obj) {
    return obj != null && obj.arrayBuffer != null && typeof obj.arrayBuffer === 'function';
}
function hasBytesMethod(obj) {
    return obj != null && obj.bytes != null && typeof obj.bytes === 'function';
}
function hasTextMethod(obj) {
    return obj != null && obj.text != null && typeof obj.text === 'function';
}
function hasSizeProperty(obj) {
    return obj != null && typeof obj.size === 'number';
}
function hasStreamMethod(obj) {
    return obj != null && obj.stream != null && typeof obj.stream === 'function';
}
function hasBlobSignature(obj) {
    return obj != null && obj[Symbol.toStringTag] === 'Blob';
}
function isArrayBuffer(obj) {
    return obj != null && obj.byteLength != null && obj.slice != null;
}
// Will be removed after v14 reaches EOL
// Needed because v14 doesn't have .stream() implemented
class PonyfillBlob {
    blobParts;
    type;
    encoding;
    _size = null;
    constructor(blobParts = [], options){
        this.blobParts = blobParts;
        this.type = options?.type || 'application/octet-stream';
        this.encoding = options?.encoding || 'utf8';
        this._size = options?.size || null;
        if (blobParts.length === 1 && hasBlobSignature(blobParts[0])) {
            return blobParts[0];
        }
    }
    _buffer = null;
    buffer() {
        if (this._buffer) {
            return (0, utils_js_1.fakePromise)(this._buffer);
        }
        if (this.blobParts.length === 1) {
            const blobPart = this.blobParts[0];
            if (hasBufferMethod(blobPart)) {
                return blobPart.buffer().then((buf)=>{
                    this._buffer = buf;
                    return this._buffer;
                });
            }
            if (hasBytesMethod(blobPart)) {
                return blobPart.bytes().then((bytes)=>{
                    this._buffer = node_buffer_1.Buffer.from(bytes);
                    return this._buffer;
                });
            }
            if (hasArrayBufferMethod(blobPart)) {
                return blobPart.arrayBuffer().then((arrayBuf)=>{
                    this._buffer = node_buffer_1.Buffer.from(arrayBuf, undefined, blobPart.size);
                    return this._buffer;
                });
            }
            this._buffer = getBlobPartAsBuffer(blobPart);
            return (0, utils_js_1.fakePromise)(this._buffer);
        }
        const jobs = [];
        const bufferChunks = this.blobParts.map((blobPart, i)=>{
            if (hasBufferMethod(blobPart)) {
                jobs.push(blobPart.buffer().then((buf)=>{
                    bufferChunks[i] = buf;
                }));
                return undefined;
            } else if (hasArrayBufferMethod(blobPart)) {
                jobs.push(blobPart.arrayBuffer().then((arrayBuf)=>{
                    bufferChunks[i] = node_buffer_1.Buffer.from(arrayBuf, undefined, blobPart.size);
                }));
                return undefined;
            } else if (hasBytesMethod(blobPart)) {
                jobs.push(blobPart.bytes().then((bytes)=>{
                    bufferChunks[i] = node_buffer_1.Buffer.from(bytes);
                }));
                return undefined;
            } else {
                return getBlobPartAsBuffer(blobPart);
            }
        });
        if (jobs.length > 0) {
            return Promise.all(jobs).then(()=>node_buffer_1.Buffer.concat(bufferChunks, this._size || undefined));
        }
        return (0, utils_js_1.fakePromise)(node_buffer_1.Buffer.concat(bufferChunks, this._size || undefined));
    }
    arrayBuffer() {
        if (this._buffer) {
            // @ts-ignore - Mismatch between Buffer and ArrayBuffer
            return (0, utils_js_1.fakePromise)(this._buffer);
        }
        if (this.blobParts.length === 1) {
            if (isArrayBuffer(this.blobParts[0])) {
                return (0, utils_js_1.fakePromise)(this.blobParts[0]);
            }
            if (hasArrayBufferMethod(this.blobParts[0])) {
                return this.blobParts[0].arrayBuffer();
            }
        }
        // @ts-ignore - Mismatch between Buffer and ArrayBuffer
        return this.buffer();
    }
    bytes() {
        if (this._buffer) {
            return (0, utils_js_1.fakePromise)(this._buffer);
        }
        if (this.blobParts.length === 1) {
            if (node_buffer_1.Buffer.isBuffer(this.blobParts[0])) {
                this._buffer = this.blobParts[0];
                return (0, utils_js_1.fakePromise)(this._buffer);
            }
            if (this.blobParts[0] instanceof Uint8Array) {
                this._buffer = node_buffer_1.Buffer.from(this.blobParts[0]);
                return (0, utils_js_1.fakePromise)(this._buffer);
            }
            if (hasBytesMethod(this.blobParts[0])) {
                return this.blobParts[0].bytes();
            }
            if (hasBufferMethod(this.blobParts[0])) {
                return this.blobParts[0].buffer();
            }
        }
        return this.buffer();
    }
    _text = null;
    text() {
        if (this._text) {
            return (0, utils_js_1.fakePromise)(this._text);
        }
        if (this.blobParts.length === 1) {
            const blobPart = this.blobParts[0];
            if (typeof blobPart === 'string') {
                this._text = blobPart;
                return (0, utils_js_1.fakePromise)(this._text);
            }
            if (hasTextMethod(blobPart)) {
                return blobPart.text().then((text)=>{
                    this._text = text;
                    return this._text;
                });
            }
            const buf = getBlobPartAsBuffer(blobPart);
            this._text = buf.toString(this.encoding);
            return (0, utils_js_1.fakePromise)(this._text);
        }
        return this.buffer().then((buf)=>{
            this._text = buf.toString(this.encoding);
            return this._text;
        });
    }
    _json = null;
    json() {
        if (this._json) {
            return (0, utils_js_1.fakePromise)(this._json);
        }
        return this.text().then((text)=>{
            this._json = JSON.parse(text);
            return this._json;
        });
    }
    _formData = null;
    formData() {
        if (this._formData) {
            return (0, utils_js_1.fakePromise)(this._formData);
        }
        throw new Error('Not implemented');
    }
    get size() {
        if (this._size == null) {
            this._size = 0;
            for (const blobPart of this.blobParts){
                if (typeof blobPart === 'string') {
                    this._size += node_buffer_1.Buffer.byteLength(blobPart);
                } else if (hasSizeProperty(blobPart)) {
                    this._size += blobPart.size;
                } else if ((0, utils_js_1.isArrayBufferView)(blobPart)) {
                    this._size += blobPart.byteLength;
                }
            }
        }
        return this._size;
    }
    stream() {
        if (this.blobParts.length === 1) {
            const blobPart = this.blobParts[0];
            if (hasStreamMethod(blobPart)) {
                return blobPart.stream();
            }
            const buf = getBlobPartAsBuffer(blobPart);
            return new ReadableStream_js_1.PonyfillReadableStream({
                start: (controller)=>{
                    controller.enqueue(buf);
                    controller.close();
                }
            });
        }
        if (this._buffer != null) {
            return new ReadableStream_js_1.PonyfillReadableStream({
                start: (controller)=>{
                    controller.enqueue(this._buffer);
                    controller.close();
                }
            });
        }
        let blobPartIterator;
        return new ReadableStream_js_1.PonyfillReadableStream({
            start: (controller)=>{
                if (this.blobParts.length === 0) {
                    controller.close();
                    return;
                }
                blobPartIterator = this.blobParts[Symbol.iterator]();
            },
            pull: (controller)=>{
                const { value: blobPart, done } = blobPartIterator.next();
                if (done) {
                    controller.close();
                    return;
                }
                if (blobPart) {
                    if (hasBufferMethod(blobPart)) {
                        return blobPart.buffer().then((buf)=>{
                            controller.enqueue(buf);
                        });
                    }
                    if (hasBytesMethod(blobPart)) {
                        return blobPart.bytes().then((bytes)=>{
                            const buf = node_buffer_1.Buffer.from(bytes);
                            controller.enqueue(buf);
                        });
                    }
                    if (hasArrayBufferMethod(blobPart)) {
                        return blobPart.arrayBuffer().then((arrayBuffer)=>{
                            const buf = node_buffer_1.Buffer.from(arrayBuffer, undefined, blobPart.size);
                            controller.enqueue(buf);
                        });
                    }
                    const buf = getBlobPartAsBuffer(blobPart);
                    controller.enqueue(buf);
                }
            }
        });
    }
    slice() {
        throw new Error('Not implemented');
    }
}
exports.PonyfillBlob = PonyfillBlob;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/File.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillFile = void 0;
const Blob_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Blob.js [app-route] (ecmascript)");
class PonyfillFile extends Blob_js_1.PonyfillBlob {
    name;
    lastModified;
    constructor(fileBits, name, options){
        super(fileBits, options);
        this.name = name;
        this.lastModified = options?.lastModified || Date.now();
    }
    webkitRelativePath = '';
}
exports.PonyfillFile = PonyfillFile;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/IteratorObject.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillIteratorObject = void 0;
const node_util_1 = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const disposablestack_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/cjs/index.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
class PonyfillIteratorObject {
    iterableIterator;
    [Symbol.toStringTag] = 'IteratorObject';
    constructor(iterableIterator, className){
        this.iterableIterator = iterableIterator;
        this[Symbol.toStringTag] = className;
    }
    *map(callbackfn) {
        let index = 0;
        for (const value of this.iterableIterator){
            yield callbackfn(value, index++);
        }
        return undefined;
    }
    *filter(callbackfn) {
        let index = 0;
        for (const value of this.iterableIterator){
            if (callbackfn(value, index++)) {
                yield value;
            }
        }
        return undefined;
    }
    reduce(callbackfn, initialValue) {
        let index = 0;
        let accumulator = initialValue;
        for (const value of this.iterableIterator){
            accumulator = callbackfn(accumulator, value, index++);
        }
        return accumulator;
    }
    forEach(callbackfn) {
        let index = 0;
        for (const value of this.iterableIterator){
            callbackfn(value, index++);
        }
    }
    *take(limit) {
        let index = 0;
        for (const value of this.iterableIterator){
            if (index >= limit) {
                break;
            }
            yield value;
            index++;
        }
        return undefined;
    }
    *drop(count) {
        let index = 0;
        for (const value of this.iterableIterator){
            if (index >= count) {
                yield value;
            }
            index++;
        }
        return undefined;
    }
    *flatMap(callback) {
        let index = 0;
        for (const value of this.iterableIterator){
            const iteratorOrIterable = callback(value, index++);
            if ((0, utils_js_1.isIterable)(iteratorOrIterable)) {
                for (const innerValue of iteratorOrIterable){
                    yield innerValue;
                }
            } else {
                for (const innerValue of {
                    [Symbol.iterator]: ()=>iteratorOrIterable
                }){
                    yield innerValue;
                }
            }
        }
        return undefined;
    }
    some(predicate) {
        let index = 0;
        for (const value of this.iterableIterator){
            if (predicate(value, index++)) {
                return true;
            }
        }
        return false;
    }
    every(predicate) {
        let index = 0;
        for (const value of this.iterableIterator){
            if (!predicate(value, index++)) {
                return false;
            }
        }
        return true;
    }
    find(predicate) {
        let index = 0;
        for (const value of this.iterableIterator){
            if (predicate(value, index++)) {
                return value;
            }
        }
        return undefined;
    }
    toArray() {
        return Array.from(this.iterableIterator);
    }
    [disposablestack_1.DisposableSymbols.dispose]() {
        this.iterableIterator.return?.();
    }
    next(...[value]) {
        return this.iterableIterator.next(value);
    }
    [Symbol.iterator]() {
        return this;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const record = {};
        this.forEach((value, key)=>{
            const inspectedValue = (0, node_util_1.inspect)(value);
            record[key] = inspectedValue.includes(',') ? inspectedValue.split(',').map((el)=>el.trim()) : inspectedValue;
        });
        return `${this[Symbol.toStringTag]} ${(0, node_util_1.inspect)(record)}`;
    }
}
exports.PonyfillIteratorObject = PonyfillIteratorObject;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/FormData.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillFormData = void 0;
exports.getStreamFromFormData = getStreamFromFormData;
const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const IteratorObject_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/IteratorObject.js [app-route] (ecmascript)");
const ReadableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/ReadableStream.js [app-route] (ecmascript)");
class PonyfillFormData {
    map = new Map();
    append(name, value, fileName) {
        let values = this.map.get(name);
        if (!values) {
            values = [];
            this.map.set(name, values);
        }
        const entry = isBlob(value) ? getNormalizedFile(name, value, fileName) : value;
        values.push(entry);
    }
    delete(name) {
        this.map.delete(name);
    }
    get(name) {
        const values = this.map.get(name);
        return values ? values[0] : null;
    }
    getAll(name) {
        return this.map.get(name) || [];
    }
    has(name) {
        return this.map.has(name);
    }
    set(name, value, fileName) {
        const entry = isBlob(value) ? getNormalizedFile(name, value, fileName) : value;
        this.map.set(name, [
            entry
        ]);
    }
    [Symbol.iterator]() {
        return this._entries();
    }
    *_entries() {
        for (const [key, values] of this.map){
            for (const value of values){
                yield [
                    key,
                    value
                ];
            }
        }
    }
    entries() {
        return new IteratorObject_js_1.PonyfillIteratorObject(this._entries(), 'FormDataIterator');
    }
    _keys() {
        return this.map.keys();
    }
    keys() {
        return new IteratorObject_js_1.PonyfillIteratorObject(this._keys(), 'FormDataIterator');
    }
    *_values() {
        for (const values of this.map.values()){
            for (const value of values){
                yield value;
            }
        }
    }
    values() {
        return new IteratorObject_js_1.PonyfillIteratorObject(this._values(), 'FormDataIterator');
    }
    forEach(callback) {
        for (const [key, value] of this){
            callback(value, key, this);
        }
    }
}
exports.PonyfillFormData = PonyfillFormData;
function getStreamFromFormData(formData, boundary = '---') {
    let entriesIterator;
    let sentInitialHeader = false;
    let currentAsyncIterator;
    let hasBefore = false;
    function handleNextEntry(controller) {
        const { done, value } = entriesIterator.next();
        if (done) {
            controller.enqueue(node_buffer_1.Buffer.from(`\r\n--${boundary}--\r\n`));
            return controller.close();
        }
        if (hasBefore) {
            controller.enqueue(node_buffer_1.Buffer.from(`\r\n--${boundary}\r\n`));
        }
        if (value) {
            const [key, blobOrString] = value;
            if (typeof blobOrString === 'string') {
                controller.enqueue(node_buffer_1.Buffer.from(`Content-Disposition: form-data; name="${key}"\r\n\r\n`));
                controller.enqueue(node_buffer_1.Buffer.from(blobOrString));
            } else {
                let filenamePart = '';
                if (blobOrString.name) {
                    filenamePart = `; filename="${blobOrString.name}"`;
                }
                controller.enqueue(node_buffer_1.Buffer.from(`Content-Disposition: form-data; name="${key}"${filenamePart}\r\n`));
                controller.enqueue(node_buffer_1.Buffer.from(`Content-Type: ${blobOrString.type || 'application/octet-stream'}\r\n\r\n`));
                const entryStream = blobOrString.stream();
                // @ts-expect-error - ReadableStream is async iterable
                currentAsyncIterator = entryStream[Symbol.asyncIterator]();
            }
            hasBefore = true;
        }
    }
    return new ReadableStream_js_1.PonyfillReadableStream({
        start: ()=>{
            entriesIterator = formData.entries();
        },
        pull: (controller)=>{
            if (!sentInitialHeader) {
                sentInitialHeader = true;
                return controller.enqueue(node_buffer_1.Buffer.from(`--${boundary}\r\n`));
            }
            if (currentAsyncIterator) {
                return currentAsyncIterator.next().then(({ done, value })=>{
                    if (done) {
                        currentAsyncIterator = undefined;
                    }
                    if (value) {
                        return controller.enqueue(value);
                    } else {
                        return handleNextEntry(controller);
                    }
                });
            }
            return handleNextEntry(controller);
        },
        cancel: (err)=>{
            entriesIterator?.return?.(err);
            currentAsyncIterator?.return?.(err);
        }
    });
}
function getNormalizedFile(name, blob, fileName) {
    Object.defineProperty(blob, 'name', {
        configurable: true,
        enumerable: true,
        value: fileName || blob.name || name
    });
    return blob;
}
function isBlob(value) {
    return value?.arrayBuffer != null;
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Body.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillBody = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */ const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const node_stream_1 = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const busboy_1 = __turbopack_context__.r("[project]/node_modules/.bun/@fastify+busboy@3.2.0/node_modules/@fastify/busboy/lib/main.js [app-route] (ecmascript)");
const promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
const Blob_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Blob.js [app-route] (ecmascript)");
const File_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/File.js [app-route] (ecmascript)");
const FormData_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/FormData.js [app-route] (ecmascript)");
const ReadableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/ReadableStream.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
var BodyInitType;
(function(BodyInitType) {
    BodyInitType["ReadableStream"] = "ReadableStream";
    BodyInitType["Blob"] = "Blob";
    BodyInitType["FormData"] = "FormData";
    BodyInitType["String"] = "String";
    BodyInitType["Readable"] = "Readable";
    BodyInitType["Buffer"] = "Buffer";
    BodyInitType["AsyncIterable"] = "AsyncIterable";
})(BodyInitType || (BodyInitType = {}));
class PonyfillBody {
    bodyInit;
    options;
    bodyUsed = false;
    contentType = null;
    contentLength = null;
    constructor(bodyInit, options = {}){
        this.bodyInit = bodyInit;
        this.options = options;
        const { bodyFactory, contentType, contentLength, bodyType, buffer } = processBodyInit(bodyInit);
        this._bodyFactory = bodyFactory;
        this.contentType = contentType;
        this.contentLength = contentLength;
        this.bodyType = bodyType;
        this._buffer = buffer;
        this._signal = options.signal;
    }
    bodyType;
    _bodyFactory = ()=>null;
    _generatedBody = null;
    _buffer;
    _signal;
    generateBody() {
        if (this._generatedBody?.readable?.destroyed && this._buffer) {
            this._generatedBody.readable = node_stream_1.Readable.from(this._buffer);
        }
        if (this._generatedBody) {
            return this._generatedBody;
        }
        const body = this._bodyFactory();
        this._generatedBody = body;
        return body;
    }
    handleContentLengthHeader(forceSet = false) {
        const contentTypeInHeaders = this.headers.get('content-type');
        if (!contentTypeInHeaders) {
            if (this.contentType) {
                this.headers.set('content-type', this.contentType);
            }
        } else {
            this.contentType = contentTypeInHeaders;
        }
        const contentLengthInHeaders = this.headers.get('content-length');
        if (forceSet && this.bodyInit == null && !contentLengthInHeaders) {
            this.contentLength = 0;
            this.headers.set('content-length', '0');
        }
        if (!contentLengthInHeaders) {
            if (this.contentLength) {
                this.headers.set('content-length', this.contentLength.toString());
            }
        } else {
            this.contentLength = parseInt(contentLengthInHeaders, 10);
        }
    }
    get body() {
        const _body = this.generateBody();
        if (_body != null) {
            const ponyfillReadableStream = _body;
            const readable = _body.readable;
            return new Proxy(_body.readable, {
                get (_, prop) {
                    if (prop in ponyfillReadableStream) {
                        const ponyfillReadableStreamProp = ponyfillReadableStream[prop];
                        if (typeof ponyfillReadableStreamProp === 'function') {
                            return ponyfillReadableStreamProp.bind(ponyfillReadableStream);
                        }
                        return ponyfillReadableStreamProp;
                    }
                    if (prop in readable) {
                        const readableProp = readable[prop];
                        if (typeof readableProp === 'function') {
                            return readableProp.bind(readable);
                        }
                        return readableProp;
                    }
                }
            });
        }
        return null;
    }
    _chunks = null;
    _doCollectChunksFromReadableJob() {
        if (this.bodyType === BodyInitType.AsyncIterable) {
            if (Array.fromAsync) {
                return (0, promise_helpers_1.handleMaybePromise)(()=>Array.fromAsync(this.bodyInit), (chunks)=>{
                    this._chunks = chunks;
                    return this._chunks;
                });
            }
            const iterator = this.bodyInit[Symbol.asyncIterator]();
            const chunks = [];
            const collectValue = ()=>(0, promise_helpers_1.handleMaybePromise)(()=>iterator.next(), ({ value, done })=>{
                    if (value) {
                        chunks.push(value);
                    }
                    if (!done) {
                        return collectValue();
                    }
                    this._chunks = chunks;
                    return this._chunks;
                });
            return collectValue();
        }
        const _body = this.generateBody();
        if (!_body) {
            this._chunks = [];
            return (0, utils_js_1.fakePromise)(this._chunks);
        }
        if (_body.readable.destroyed) {
            return (0, utils_js_1.fakePromise)(this._chunks = []);
        }
        const chunks = [];
        return new Promise((resolve, reject)=>{
            _body.readable.on('data', (chunk)=>{
                chunks.push(chunk);
            });
            _body.readable.once('error', reject);
            _body.readable.once('end', ()=>{
                resolve(this._chunks = chunks);
            });
        });
    }
    _collectChunksFromReadable() {
        if (this._chunks) {
            return (0, utils_js_1.fakePromise)(this._chunks);
        }
        this._chunks ||= this._doCollectChunksFromReadableJob();
        return this._chunks;
    }
    _blob = null;
    blob() {
        if (this._blob) {
            return (0, utils_js_1.fakePromise)(this._blob);
        }
        if (this.bodyType === BodyInitType.String) {
            this._text = this.bodyInit;
            this._blob = new Blob_js_1.PonyfillBlob([
                this._text
            ], {
                type: this.contentType || 'text/plain;charset=UTF-8',
                size: this.contentLength
            });
        }
        if (this.bodyType === BodyInitType.Blob) {
            this._blob = this.bodyInit;
            return (0, utils_js_1.fakePromise)(this._blob);
        }
        if (this._buffer) {
            this._blob = new Blob_js_1.PonyfillBlob([
                this._buffer
            ], {
                type: this.contentType || '',
                size: this.contentLength
            });
            return (0, utils_js_1.fakePromise)(this._blob);
        }
        return (0, utils_js_1.fakePromise)((0, promise_helpers_1.handleMaybePromise)(()=>this._collectChunksFromReadable(), (chunks)=>{
            this._blob = new Blob_js_1.PonyfillBlob(chunks, {
                type: this.contentType || '',
                size: this.contentLength
            });
            return this._blob;
        }));
    }
    _formData = null;
    formData(opts) {
        if (this._formData) {
            return (0, utils_js_1.fakePromise)(this._formData);
        }
        if (this.bodyType === BodyInitType.FormData) {
            this._formData = this.bodyInit;
            return (0, utils_js_1.fakePromise)(this._formData);
        }
        this._formData = new FormData_js_1.PonyfillFormData();
        const _body = this.generateBody();
        if (_body == null) {
            return (0, utils_js_1.fakePromise)(this._formData);
        }
        const formDataLimits = {
            ...this.options.formDataLimits,
            ...opts?.formDataLimits
        };
        return new Promise((resolve, reject)=>{
            const stream = this.body?.readable;
            if (!stream) {
                return reject(new Error('No stream available'));
            }
            // form data file that is currently being processed, it's
            // important to keep track of it in case the stream ends early
            let currFile = null;
            const bb = new busboy_1.Busboy({
                headers: {
                    'content-length': typeof this.contentLength === 'number' ? this.contentLength.toString() : this.contentLength || '',
                    'content-type': this.contentType || ''
                },
                limits: formDataLimits,
                defCharset: 'utf-8'
            });
            if (this._signal) {
                (0, node_stream_1.addAbortSignal)(this._signal, bb);
            }
            let completed = false;
            const complete = (err)=>{
                if (completed) return;
                completed = true;
                stream.unpipe(bb);
                bb.destroy();
                if (currFile) {
                    currFile.destroy();
                    currFile = null;
                }
                if (err) {
                    reject(err);
                } else {
                    // no error occured, this is a successful end/complete/finish
                    resolve(this._formData);
                }
            };
            // we dont need to listen to the stream close event because bb will close or error when necessary
            // stream.on('close', complete);
            // stream can be aborted, for example
            stream.on('error', complete);
            bb.on('field', (name, value, fieldnameTruncated, valueTruncated)=>{
                if (fieldnameTruncated) {
                    return complete(new Error(`Field name size exceeded: ${formDataLimits?.fieldNameSize} bytes`));
                }
                if (valueTruncated) {
                    return complete(new Error(`Field value size exceeded: ${formDataLimits?.fieldSize} bytes`));
                }
                this._formData.set(name, value);
            });
            bb.on('file', (name, fileStream, filename, _transferEncoding, mimeType)=>{
                currFile = fileStream;
                const chunks = [];
                fileStream.on('data', (chunk)=>{
                    chunks.push(chunk);
                });
                fileStream.on('error', complete);
                fileStream.on('limit', ()=>{
                    complete(new Error(`File size limit exceeded: ${formDataLimits?.fileSize} bytes`));
                });
                fileStream.on('close', ()=>{
                    if (fileStream.truncated) {
                        complete(new Error(`File size limit exceeded: ${formDataLimits?.fileSize} bytes`));
                    }
                    currFile = null;
                    const file = new File_js_1.PonyfillFile(chunks, filename, {
                        type: mimeType
                    });
                    this._formData.set(name, file);
                });
            });
            bb.on('fieldsLimit', ()=>{
                complete(new Error(`Fields limit exceeded: ${formDataLimits?.fields}`));
            });
            bb.on('filesLimit', ()=>{
                complete(new Error(`Files limit exceeded: ${formDataLimits?.files}`));
            });
            bb.on('partsLimit', ()=>{
                complete(new Error(`Parts limit exceeded: ${formDataLimits?.parts}`));
            });
            bb.on('end', complete);
            bb.on('finish', complete);
            bb.on('close', complete);
            bb.on('error', complete);
            stream.pipe(bb);
        });
    }
    buffer() {
        if (this._buffer) {
            return (0, utils_js_1.fakePromise)(this._buffer);
        }
        if (this._text) {
            this._buffer = node_buffer_1.Buffer.from(this._text, 'utf-8');
            return (0, utils_js_1.fakePromise)(this._buffer);
        }
        if (this.bodyType === BodyInitType.String) {
            return this.text().then((text)=>{
                this._text = text;
                this._buffer = node_buffer_1.Buffer.from(text, 'utf-8');
                return this._buffer;
            });
        }
        if (this.bodyType === BodyInitType.Blob) {
            if ((0, Blob_js_1.hasBufferMethod)(this.bodyInit)) {
                return this.bodyInit.buffer().then((buf)=>{
                    this._buffer = buf;
                    return this._buffer;
                });
            }
            if ((0, Blob_js_1.hasBytesMethod)(this.bodyInit)) {
                return this.bodyInit.bytes().then((bytes)=>{
                    this._buffer = node_buffer_1.Buffer.from(bytes);
                    return this._buffer;
                });
            }
            if ((0, Blob_js_1.hasArrayBufferMethod)(this.bodyInit)) {
                return this.bodyInit.arrayBuffer().then((buf)=>{
                    this._buffer = node_buffer_1.Buffer.from(buf, undefined, buf.byteLength);
                    return this._buffer;
                });
            }
        }
        return (0, utils_js_1.fakePromise)((0, promise_helpers_1.handleMaybePromise)(()=>this._collectChunksFromReadable(), (chunks)=>{
            if (chunks.length === 1) {
                this._buffer = chunks[0];
                return this._buffer;
            }
            this._buffer = node_buffer_1.Buffer.concat(chunks);
            return this._buffer;
        }));
    }
    bytes() {
        return this.buffer();
    }
    arrayBuffer() {
        // @ts-ignore - Mismatch between Buffer and ArrayBuffer
        return this.buffer();
    }
    _json = null;
    json() {
        if (this._json) {
            return (0, utils_js_1.fakePromise)(this._json);
        }
        return this.text().then((text)=>{
            try {
                this._json = JSON.parse(text);
            } catch (e) {
                if (e instanceof SyntaxError) {
                    e.message += `, "${text}" is not valid JSON`;
                }
                throw e;
            }
            return this._json;
        });
    }
    _text = null;
    text() {
        if (this._text) {
            return (0, utils_js_1.fakePromise)(this._text);
        }
        if (this.bodyType === BodyInitType.String) {
            this._text = this.bodyInit;
            return (0, utils_js_1.fakePromise)(this._text);
        }
        return this.buffer().then((buffer)=>{
            this._text = buffer.toString('utf-8');
            return this._text;
        });
    }
}
exports.PonyfillBody = PonyfillBody;
function processBodyInit(bodyInit) {
    if (bodyInit == null) {
        return {
            bodyFactory: ()=>null,
            contentType: null,
            contentLength: null
        };
    }
    if (typeof bodyInit === 'string') {
        const contentLength = node_buffer_1.Buffer.byteLength(bodyInit);
        return {
            bodyType: BodyInitType.String,
            contentType: 'text/plain;charset=UTF-8',
            contentLength,
            bodyFactory () {
                const readable = node_stream_1.Readable.from(node_buffer_1.Buffer.from(bodyInit, 'utf-8'));
                return new ReadableStream_js_1.PonyfillReadableStream(readable);
            }
        };
    }
    if (node_buffer_1.Buffer.isBuffer(bodyInit)) {
        const buffer = bodyInit;
        return {
            bodyType: BodyInitType.Buffer,
            contentType: null,
            contentLength: bodyInit.length,
            buffer: bodyInit,
            bodyFactory () {
                const readable = node_stream_1.Readable.from(buffer);
                const body = new ReadableStream_js_1.PonyfillReadableStream(readable);
                return body;
            }
        };
    }
    if ((0, utils_js_1.isArrayBufferView)(bodyInit)) {
        const buffer = node_buffer_1.Buffer.from(bodyInit.buffer, bodyInit.byteOffset, bodyInit.byteLength);
        return {
            bodyType: BodyInitType.Buffer,
            contentLength: bodyInit.byteLength,
            contentType: null,
            buffer,
            bodyFactory () {
                const readable = node_stream_1.Readable.from(buffer);
                const body = new ReadableStream_js_1.PonyfillReadableStream(readable);
                return body;
            }
        };
    }
    if (bodyInit instanceof ReadableStream_js_1.PonyfillReadableStream && bodyInit.readable != null) {
        const readableStream = bodyInit;
        return {
            bodyType: BodyInitType.ReadableStream,
            bodyFactory: ()=>readableStream,
            contentType: null,
            contentLength: null
        };
    }
    if (isBlob(bodyInit)) {
        const blob = bodyInit;
        return {
            bodyType: BodyInitType.Blob,
            contentType: bodyInit.type,
            contentLength: bodyInit.size,
            bodyFactory () {
                return blob.stream();
            }
        };
    }
    if (bodyInit instanceof ArrayBuffer) {
        const contentLength = bodyInit.byteLength;
        const buffer = node_buffer_1.Buffer.from(bodyInit, undefined, bodyInit.byteLength);
        return {
            bodyType: BodyInitType.Buffer,
            contentType: null,
            contentLength,
            buffer,
            bodyFactory () {
                const readable = node_stream_1.Readable.from(buffer);
                const body = new ReadableStream_js_1.PonyfillReadableStream(readable);
                return body;
            }
        };
    }
    if (bodyInit instanceof node_stream_1.Readable) {
        return {
            bodyType: BodyInitType.Readable,
            contentType: null,
            contentLength: null,
            bodyFactory () {
                const body = new ReadableStream_js_1.PonyfillReadableStream(bodyInit);
                return body;
            }
        };
    }
    if (isURLSearchParams(bodyInit)) {
        const contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
        return {
            bodyType: BodyInitType.String,
            contentType,
            contentLength: null,
            bodyFactory () {
                const body = new ReadableStream_js_1.PonyfillReadableStream(node_stream_1.Readable.from(bodyInit.toString()));
                return body;
            }
        };
    }
    if (isFormData(bodyInit)) {
        const boundary = Math.random().toString(36).substr(2);
        const contentType = `multipart/form-data; boundary=${boundary}`;
        return {
            bodyType: BodyInitType.FormData,
            contentType,
            contentLength: null,
            bodyFactory () {
                return (0, FormData_js_1.getStreamFromFormData)(bodyInit, boundary);
            }
        };
    }
    if (isReadableStream(bodyInit)) {
        return {
            contentType: null,
            contentLength: null,
            bodyFactory () {
                return new ReadableStream_js_1.PonyfillReadableStream(bodyInit);
            }
        };
    }
    if (bodyInit[Symbol.iterator] || bodyInit[Symbol.asyncIterator]) {
        return {
            contentType: null,
            contentLength: null,
            bodyType: BodyInitType.AsyncIterable,
            bodyFactory () {
                const readable = node_stream_1.Readable.from(bodyInit);
                return new ReadableStream_js_1.PonyfillReadableStream(readable);
            }
        };
    }
    throw new Error('Unknown body type');
}
function isFormData(value) {
    return value?.forEach != null;
}
function isBlob(value) {
    return value?.stream != null && typeof value.stream === 'function';
}
function isURLSearchParams(value) {
    return value?.sort != null;
}
function isReadableStream(value) {
    return value?.getReader != null;
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Headers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillHeaders = void 0;
exports.isHeadersLike = isHeadersLike;
const node_util_1 = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const IteratorObject_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/IteratorObject.js [app-route] (ecmascript)");
function isHeadersLike(headers) {
    return headers?.get && headers?.forEach;
}
class PonyfillHeaders {
    headersInit;
    _map;
    objectNormalizedKeysOfHeadersInit = [];
    objectOriginalKeysOfHeadersInit = [];
    _setCookies;
    constructor(headersInit){
        this.headersInit = headersInit;
    }
    // perf: we don't need to build `this.map` for Requests, as we can access the headers directly
    _get(key) {
        const normalized = key.toLowerCase();
        if (normalized === 'set-cookie' && this._setCookies?.length) {
            return this._setCookies.join(', ');
        }
        // If the map is built, reuse it
        if (this._map) {
            return this._map.get(normalized) || null;
        }
        // If the map is not built, try to get the value from the this.headersInit
        if (this.headersInit == null) {
            return null;
        }
        if (Array.isArray(this.headersInit)) {
            const found = this.headersInit.filter(([headerKey])=>headerKey.toLowerCase() === normalized);
            if (found.length === 0) {
                return null;
            }
            if (found.length === 1) {
                return found[0][1];
            }
            return found.map(([, value])=>value).join(', ');
        } else if (isHeadersLike(this.headersInit)) {
            return this.headersInit.get(normalized);
        } else {
            const initValue = this.headersInit[key] || this.headersInit[normalized];
            if (initValue != null) {
                return initValue;
            }
            if (!this.objectNormalizedKeysOfHeadersInit.length) {
                Object.keys(this.headersInit).forEach((k)=>{
                    this.objectOriginalKeysOfHeadersInit.push(k);
                    this.objectNormalizedKeysOfHeadersInit.push(k.toLowerCase());
                });
            }
            const index = this.objectNormalizedKeysOfHeadersInit.indexOf(normalized);
            if (index === -1) {
                return null;
            }
            const originalKey = this.objectOriginalKeysOfHeadersInit[index];
            return this.headersInit[originalKey];
        }
    }
    // perf: Build the map of headers lazily, only when we need to access all headers or write to it.
    // I could do a getter here, but I'm too lazy to type `getter`.
    getMap() {
        if (!this._map) {
            this._setCookies ||= [];
            if (this.headersInit != null) {
                if (Array.isArray(this.headersInit)) {
                    this._map = new Map();
                    for (const [key, value] of this.headersInit){
                        const normalizedKey = key.toLowerCase();
                        if (normalizedKey === 'set-cookie') {
                            if (Array.isArray(value)) {
                                this._setCookies.push(...value);
                            } else if (value != null) {
                                this._setCookies.push(value);
                            }
                            continue;
                        }
                        this._map.set(normalizedKey, value);
                    }
                } else if (isHeadersLike(this.headersInit)) {
                    this._map = new Map();
                    this.headersInit.forEach((value, key)=>{
                        if (key === 'set-cookie') {
                            this._setCookies ||= [];
                            if (Array.isArray(value)) {
                                this._setCookies.push(...value);
                            } else if (value != null) {
                                this._setCookies.push(value);
                            }
                            return;
                        }
                        this._map.set(key, value);
                    });
                } else {
                    this._map = new Map();
                    for(const initKey in this.headersInit){
                        const initValue = this.headersInit[initKey];
                        if (initValue != null) {
                            const normalizedKey = initKey.toLowerCase();
                            if (normalizedKey === 'set-cookie') {
                                this._setCookies ||= [];
                                if (Array.isArray(initValue)) {
                                    this._setCookies.push(...initValue);
                                    continue;
                                }
                                this._setCookies.push(initValue);
                                continue;
                            }
                            this._map.set(normalizedKey, initValue);
                        }
                    }
                }
            } else {
                this._map = new Map();
            }
        }
        return this._map;
    }
    append(name, value) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            this._setCookies ||= [];
            this._setCookies.push(value);
            return;
        }
        const existingValue = this.getMap().get(key);
        const finalValue = existingValue ? `${existingValue}, ${value}` : value;
        this.getMap().set(key, finalValue);
    }
    get(name) {
        const value = this._get(name);
        if (value == null) {
            return null;
        }
        return value.toString();
    }
    has(name) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            return !!this._setCookies?.length;
        }
        return !!this._get(name); // we might need to check if header exists and not just check if it's not nullable
    }
    set(name, value) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            this._setCookies = [
                value
            ];
            return;
        }
        if (!this._map && this.headersInit != null) {
            if (Array.isArray(this.headersInit)) {
                const found = this.headersInit.find(([headerKey])=>headerKey.toLowerCase() === key);
                if (found) {
                    found[1] = value;
                } else {
                    this.headersInit.push([
                        key,
                        value
                    ]);
                }
                return;
            } else if (isHeadersLike(this.headersInit)) {
                this.headersInit.set(key, value);
                return;
            } else {
                this.headersInit[key] = value;
                return;
            }
        }
        this.getMap().set(key, value);
    }
    delete(name) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            this._setCookies = [];
            return;
        }
        this.getMap().delete(key);
    }
    forEach(callback) {
        this._setCookies?.forEach((setCookie)=>{
            callback(setCookie, 'set-cookie', this);
        });
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    this.headersInit.forEach(([key, value])=>{
                        callback(value, key, this);
                    });
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    this.headersInit.forEach(callback);
                    return;
                }
                Object.entries(this.headersInit).forEach(([key, value])=>{
                    if (value != null) {
                        callback(value, key, this);
                    }
                });
            }
            return;
        }
        this.getMap().forEach((value, key)=>{
            callback(value, key, this);
        });
    }
    *_keys() {
        if (this._setCookies?.length) {
            yield 'set-cookie';
        }
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    yield* this.headersInit.map(([key])=>key)[Symbol.iterator]();
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    yield* this.headersInit.keys();
                    return;
                }
                yield* Object.keys(this.headersInit)[Symbol.iterator]();
                return;
            }
        }
        yield* this.getMap().keys();
    }
    keys() {
        return new IteratorObject_js_1.PonyfillIteratorObject(this._keys(), 'HeadersIterator');
    }
    *_values() {
        if (this._setCookies?.length) {
            yield* this._setCookies;
        }
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    yield* this.headersInit.map(([, value])=>value)[Symbol.iterator]();
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    yield* this.headersInit.values();
                    return;
                }
                yield* Object.values(this.headersInit)[Symbol.iterator]();
                return;
            }
        }
        yield* this.getMap().values();
    }
    values() {
        return new IteratorObject_js_1.PonyfillIteratorObject(this._values(), 'HeadersIterator');
    }
    *_entries() {
        if (this._setCookies?.length) {
            yield* this._setCookies.map((cookie)=>[
                    'set-cookie',
                    cookie
                ]);
        }
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    yield* this.headersInit;
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    yield* this.headersInit.entries();
                    return;
                }
                yield* Object.entries(this.headersInit);
                return;
            }
        }
        yield* this.getMap().entries();
    }
    entries() {
        return new IteratorObject_js_1.PonyfillIteratorObject(this._entries(), 'HeadersIterator');
    }
    getSetCookie() {
        if (!this._setCookies) {
            this.getMap();
        }
        return this._setCookies;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const record = {};
        this.forEach((value, key)=>{
            if (key === 'set-cookie') {
                record['set-cookie'] = this._setCookies || [];
            } else {
                record[key] = value?.includes(',') ? value.split(',').map((el)=>el.trim()) : value;
            }
        });
        return `Headers ${(0, node_util_1.inspect)(record)}`;
    }
}
exports.PonyfillHeaders = PonyfillHeaders;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Response.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillResponse = void 0;
const node_http_1 = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const Body_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Body.js [app-route] (ecmascript)");
const Headers_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Headers.js [app-route] (ecmascript)");
const JSON_CONTENT_TYPE = 'application/json; charset=utf-8';
class PonyfillResponse extends Body_js_1.PonyfillBody {
    headers;
    constructor(body, init){
        super(body || null, init);
        this.headers = init?.headers && (0, Headers_js_1.isHeadersLike)(init.headers) ? init.headers : new Headers_js_1.PonyfillHeaders(init?.headers);
        this.status = init?.status || 200;
        this.statusText = init?.statusText || node_http_1.STATUS_CODES[this.status] || 'OK';
        this.url = init?.url || '';
        this.redirected = init?.redirected || false;
        this.type = init?.type || 'default';
        this.handleContentLengthHeader();
    }
    get ok() {
        return this.status >= 200 && this.status < 300;
    }
    status;
    statusText;
    url;
    redirected;
    type;
    clone() {
        return this;
    }
    static error() {
        return new PonyfillResponse(null, {
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
    static redirect(url, status = 302) {
        if (status < 300 || status > 399) {
            throw new RangeError('Invalid status code');
        }
        return new PonyfillResponse(null, {
            headers: {
                location: url
            },
            status
        });
    }
    static json(data, init) {
        const bodyInit = JSON.stringify(data);
        if (!init) {
            init = {
                headers: {
                    'content-type': JSON_CONTENT_TYPE,
                    'content-length': Buffer.byteLength(bodyInit).toString()
                }
            };
        } else if (!init.headers) {
            init.headers = {
                'content-type': JSON_CONTENT_TYPE,
                'content-length': Buffer.byteLength(bodyInit).toString()
            };
        } else if ((0, Headers_js_1.isHeadersLike)(init.headers)) {
            if (!init.headers.has('content-type')) {
                init.headers.set('content-type', JSON_CONTENT_TYPE);
            }
            if (!init.headers.has('content-length')) {
                init.headers.set('content-length', Buffer.byteLength(bodyInit).toString());
            }
        } else if (Array.isArray(init.headers)) {
            let contentTypeExists = false;
            let contentLengthExists = false;
            for (const [key] of init.headers){
                if (contentLengthExists && contentTypeExists) {
                    break;
                }
                if (!contentTypeExists && key.toLowerCase() === 'content-type') {
                    contentTypeExists = true;
                } else if (!contentLengthExists && key.toLowerCase() === 'content-length') {
                    contentLengthExists = true;
                }
            }
            if (!contentTypeExists) {
                init.headers.push([
                    'content-type',
                    JSON_CONTENT_TYPE
                ]);
            }
            if (!contentLengthExists) {
                init.headers.push([
                    'content-length',
                    Buffer.byteLength(bodyInit).toString()
                ]);
            }
        } else if (typeof init.headers === 'object') {
            if (init.headers?.['content-type'] == null) {
                init.headers['content-type'] = JSON_CONTENT_TYPE;
            }
            if (init.headers?.['content-length'] == null) {
                init.headers['content-length'] = Buffer.byteLength(bodyInit).toString();
            }
        }
        return new PonyfillResponse(bodyInit, init);
    }
    [Symbol.toStringTag] = 'Response';
}
exports.PonyfillResponse = PonyfillResponse;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/fetchCurl.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchCurl = fetchCurl;
const node_stream_1 = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const node_tls_1 = __turbopack_context__.r("[externals]/node:tls [external] (node:tls, cjs)");
const promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
const Response_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Response.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
function fetchCurl(fetchRequest) {
    const { Curl, CurlFeature, CurlPause, CurlProgressFunc } = globalThis['libcurl'];
    const curlHandle = new Curl();
    curlHandle.enable(CurlFeature.NoDataParsing);
    curlHandle.setOpt('URL', fetchRequest.url);
    if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0') {
        curlHandle.setOpt('SSL_VERIFYPEER', false);
    }
    if (process.env.NODE_EXTRA_CA_CERTS) {
        curlHandle.setOpt('CAINFO', process.env.NODE_EXTRA_CA_CERTS);
    } else {
        curlHandle.setOpt('CAINFO_BLOB', node_tls_1.rootCertificates.join('\n'));
    }
    curlHandle.enable(CurlFeature.StreamResponse);
    let signal;
    if (fetchRequest._signal === null) {
        signal = undefined;
    } else if (fetchRequest._signal) {
        signal = fetchRequest._signal;
    }
    curlHandle.setStreamProgressCallback(function() {
        return signal?.aborted ? process.env.DEBUG ? CurlProgressFunc.Continue : 1 : 0;
    });
    if (fetchRequest['bodyType'] === 'String') {
        curlHandle.setOpt('POSTFIELDS', fetchRequest['bodyInit']);
    } else {
        const nodeReadable = fetchRequest.body != null ? (0, utils_js_1.isNodeReadable)(fetchRequest.body) ? fetchRequest.body : node_stream_1.Readable.from(fetchRequest.body) : null;
        if (nodeReadable) {
            curlHandle.setOpt('UPLOAD', true);
            curlHandle.setUploadStream(nodeReadable);
        }
    }
    if (process.env.DEBUG) {
        curlHandle.setOpt('VERBOSE', true);
    }
    curlHandle.setOpt('TRANSFER_ENCODING', false);
    curlHandle.setOpt('HTTP_TRANSFER_DECODING', true);
    curlHandle.setOpt('FOLLOWLOCATION', fetchRequest.redirect === 'follow');
    curlHandle.setOpt('MAXREDIRS', 20);
    curlHandle.setOpt('ACCEPT_ENCODING', '');
    curlHandle.setOpt('CUSTOMREQUEST', fetchRequest.method);
    const headersSerializer = fetchRequest.headersSerializer || utils_js_1.defaultHeadersSerializer;
    let size;
    const curlHeaders = headersSerializer(fetchRequest.headers, (value)=>{
        size = Number(value);
    });
    if (size != null) {
        curlHandle.setOpt('INFILESIZE', size);
    }
    curlHandle.setOpt('HTTPHEADER', curlHeaders);
    curlHandle.enable(CurlFeature.NoHeaderParsing);
    const deferredPromise = (0, promise_helpers_1.createDeferredPromise)();
    let streamResolved;
    function onAbort() {
        if (curlHandle.isOpen) {
            try {
                curlHandle.pause(CurlPause.Recv);
            } catch (e) {
                deferredPromise.reject(e);
            }
        }
    }
    signal?.addEventListener('abort', onAbort, {
        once: true
    });
    curlHandle.once('end', function endListener() {
        try {
            curlHandle.close();
        } catch (e) {
            deferredPromise.reject(e);
        }
        signal?.removeEventListener('abort', onAbort);
    });
    curlHandle.once('error', function errorListener(error) {
        if (streamResolved && !streamResolved.closed && !streamResolved.destroyed) {
            streamResolved.destroy(error);
        } else {
            if (error.message === 'Operation was aborted by an application callback') {
                error.message = 'The operation was aborted.';
            }
            deferredPromise.reject(error);
        }
        try {
            curlHandle.close();
        } catch (e) {
            deferredPromise.reject(e);
        }
    });
    curlHandle.once('stream', function streamListener(stream, status, headersBuf) {
        const outputStream = stream.pipe(new node_stream_1.PassThrough(), {
            end: true
        });
        const headersFlat = headersBuf.toString('utf8').split(/\r?\n|\r/g).filter((headerFilter)=>{
            if (headerFilter && !headerFilter.startsWith('HTTP/')) {
                if (fetchRequest.redirect === 'error' && headerFilter.toLowerCase().includes('location') && (0, utils_js_1.shouldRedirect)(status)) {
                    if (!stream.destroyed) {
                        stream.resume();
                    }
                    outputStream.destroy();
                    deferredPromise.reject(new Error('redirect is not allowed'));
                }
                return true;
            }
            return false;
        });
        const headersInit = headersFlat.map((headerFlat)=>headerFlat.split(/:\s(.+)/).slice(0, 2));
        const ponyfillResponse = new Response_js_1.PonyfillResponse(outputStream, {
            status,
            headers: headersInit,
            url: curlHandle.getInfo(Curl.info.REDIRECT_URL)?.toString() || fetchRequest.url,
            redirected: Number(curlHandle.getInfo(Curl.info.REDIRECT_COUNT)) > 0
        });
        deferredPromise.resolve(ponyfillResponse);
        streamResolved = outputStream;
    });
    setImmediate(()=>{
        curlHandle.perform();
    });
    return deferredPromise.promise;
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URL.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillURL = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
const node_buffer_1 = tslib_1.__importDefault(__turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)"));
const node_crypto_1 = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
const NativeURL = globalThis.URL;
class URL extends NativeURL {
    // This part is only needed to handle `PonyfillBlob` objects
    static blobRegistry = new Map();
    static createObjectURL(blob) {
        const blobUrl = `blob:whatwgnode:${(0, node_crypto_1.randomUUID)()}`;
        this.blobRegistry.set(blobUrl, blob);
        return blobUrl;
    }
    static revokeObjectURL(url) {
        if (!this.blobRegistry.has(url)) {
            NativeURL.revokeObjectURL(url);
        } else {
            this.blobRegistry.delete(url);
        }
    }
    static getBlobFromURL(url) {
        return this.blobRegistry.get(url) || node_buffer_1.default?.resolveObjectURL?.(url);
    }
}
exports.PonyfillURL = URL;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Request.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillRequest = void 0;
const node_http_1 = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const node_https_1 = __turbopack_context__.r("[externals]/node:https [external] (node:https, cjs)");
const Body_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Body.js [app-route] (ecmascript)");
const Headers_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Headers.js [app-route] (ecmascript)");
const URL_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URL.js [app-route] (ecmascript)");
function isRequest(input) {
    return input[Symbol.toStringTag] === 'Request';
}
function isURL(obj) {
    return obj?.href != null;
}
class PonyfillRequest extends Body_js_1.PonyfillBody {
    constructor(input, options){
        let _url;
        let _parsedUrl;
        let bodyInit = null;
        let requestInit;
        if (typeof input === 'string') {
            _url = input;
        } else if (isURL(input)) {
            _parsedUrl = input;
        } else if (isRequest(input)) {
            if (input._parsedUrl) {
                _parsedUrl = input._parsedUrl;
            } else if (input._url) {
                _url = input._url;
            } else {
                _url = input.url;
            }
            bodyInit = input.body;
            requestInit = input;
        }
        if (options != null) {
            bodyInit = options.body || null;
            requestInit = options;
        }
        super(bodyInit, requestInit);
        this._url = _url;
        this._parsedUrl = _parsedUrl;
        this.cache = requestInit?.cache || 'default';
        this.credentials = requestInit?.credentials || 'same-origin';
        this.headers = requestInit?.headers && (0, Headers_js_1.isHeadersLike)(requestInit.headers) ? requestInit.headers : new Headers_js_1.PonyfillHeaders(requestInit?.headers);
        this.integrity = requestInit?.integrity || '';
        this.keepalive = requestInit?.keepalive != null ? requestInit?.keepalive : false;
        this.method = requestInit?.method?.toUpperCase() || 'GET';
        this.mode = requestInit?.mode || 'cors';
        this.redirect = requestInit?.redirect || 'follow';
        this.referrer = requestInit?.referrer || 'about:client';
        this.referrerPolicy = requestInit?.referrerPolicy || 'no-referrer';
        this.headersSerializer = requestInit?.headersSerializer;
        this.duplex = requestInit?.duplex || 'half';
        this.destination = 'document';
        this.priority = 'auto';
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.handleContentLengthHeader(true);
        }
        if (requestInit?.agent != null) {
            const protocol = _parsedUrl?.protocol || _url || this.url;
            if (requestInit.agent === false) {
                this.agent = false;
            } else if (protocol.startsWith('http:') && requestInit.agent instanceof node_http_1.Agent) {
                this.agent = requestInit.agent;
            } else if (protocol.startsWith('https:') && requestInit.agent instanceof node_https_1.Agent) {
                this.agent = requestInit.agent;
            }
        }
    }
    headersSerializer;
    cache;
    credentials;
    destination;
    headers;
    integrity;
    keepalive;
    method;
    mode;
    priority;
    redirect;
    referrer;
    referrerPolicy;
    _url;
    get signal() {
        this._signal ||= new AbortController().signal;
        return this._signal;
    }
    get url() {
        if (this._url == null) {
            if (this._parsedUrl) {
                this._url = this._parsedUrl.toString();
            } else {
                throw new TypeError('Invalid URL');
            }
        }
        return this._url;
    }
    _parsedUrl;
    get parsedUrl() {
        if (this._parsedUrl == null) {
            if (this._url != null) {
                this._parsedUrl = new URL_js_1.PonyfillURL(this._url, 'http://localhost');
            } else {
                throw new TypeError('Invalid URL');
            }
        }
        return this._parsedUrl;
    }
    duplex;
    agent;
    clone() {
        return this;
    }
    [Symbol.toStringTag] = 'Request';
}
exports.PonyfillRequest = PonyfillRequest;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/fetchNodeHttp.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchNodeHttp = fetchNodeHttp;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
const node_http_1 = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const node_https_1 = __turbopack_context__.r("[externals]/node:https [external] (node:https, cjs)");
const node_stream_1 = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const node_zlib_1 = tslib_1.__importDefault(__turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)"));
const promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
const Request_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Request.js [app-route] (ecmascript)");
const Response_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Response.js [app-route] (ecmascript)");
const URL_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URL.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
function getRequestFnForProtocol(url) {
    if (url.startsWith('http:')) {
        return node_http_1.request;
    } else if (url.startsWith('https:')) {
        return node_https_1.request;
    }
    throw new Error(`Unsupported protocol: ${url.split(':')[0] || url}`);
}
function fetchNodeHttp(fetchRequest) {
    return new Promise((resolve, reject)=>{
        try {
            const requestFn = getRequestFnForProtocol(fetchRequest.parsedUrl?.protocol || fetchRequest.url);
            const headersSerializer = fetchRequest.headersSerializer || utils_js_1.getHeadersObj;
            const nodeHeaders = headersSerializer(fetchRequest.headers);
            nodeHeaders['accept-encoding'] ||= utils_js_1.DEFAULT_ACCEPT_ENCODING;
            if (nodeHeaders['user-agent'] == null && nodeHeaders['User-Agent'] == null) {
                nodeHeaders['user-agent'] = 'node';
            }
            let signal;
            if (fetchRequest._signal == null) {
                signal = undefined;
            } else if (fetchRequest._signal) {
                signal = fetchRequest._signal;
            }
            let nodeRequest;
            // If it is our ponyfilled Request, it should have `parsedUrl` which is a `URL` object
            if (fetchRequest.parsedUrl) {
                nodeRequest = requestFn(fetchRequest.parsedUrl, {
                    method: fetchRequest.method,
                    headers: nodeHeaders,
                    signal,
                    agent: fetchRequest.agent
                });
            } else {
                nodeRequest = requestFn(fetchRequest.url, {
                    method: fetchRequest.method,
                    headers: nodeHeaders,
                    signal,
                    agent: fetchRequest.agent
                });
            }
            nodeRequest.once('error', reject);
            nodeRequest.once('response', (nodeResponse)=>{
                let outputStream;
                const contentEncoding = nodeResponse.headers['content-encoding'];
                switch(contentEncoding){
                    case 'x-gzip':
                    case 'gzip':
                        outputStream = node_zlib_1.default.createGunzip();
                        break;
                    case 'x-deflate':
                    case 'deflate':
                        outputStream = node_zlib_1.default.createInflate();
                        break;
                    case 'x-deflate-raw':
                    case 'deflate-raw':
                        outputStream = node_zlib_1.default.createInflateRaw();
                        break;
                    case 'br':
                        outputStream = node_zlib_1.default.createBrotliDecompress();
                        break;
                    case 'zstd':
                        if (node_zlib_1.default.createZstdDecompress != null) {
                            outputStream = node_zlib_1.default.createZstdDecompress();
                        }
                        break;
                }
                if (nodeResponse.headers.location && (0, utils_js_1.shouldRedirect)(nodeResponse.statusCode)) {
                    if (fetchRequest.redirect === 'error') {
                        const redirectError = new Error('Redirects are not allowed');
                        reject(redirectError);
                        nodeResponse.resume();
                        return;
                    }
                    if (fetchRequest.redirect === 'follow') {
                        const redirectedUrl = new URL_js_1.PonyfillURL(nodeResponse.headers.location, fetchRequest.parsedUrl || fetchRequest.url);
                        const redirectResponse$ = fetchNodeHttp(new Request_js_1.PonyfillRequest(redirectedUrl, fetchRequest));
                        resolve(redirectResponse$.then((redirectResponse)=>{
                            redirectResponse.redirected = true;
                            return redirectResponse;
                        }));
                        nodeResponse.resume();
                        return;
                    }
                }
                outputStream ||= new node_stream_1.PassThrough();
                (0, utils_js_1.pipeThrough)({
                    src: nodeResponse,
                    dest: outputStream,
                    signal,
                    onError: (e)=>{
                        if (!nodeResponse.destroyed) {
                            nodeResponse.destroy(e);
                        }
                        if (!outputStream.destroyed) {
                            outputStream.destroy(e);
                        }
                        reject(e);
                    }
                });
                const statusCode = nodeResponse.statusCode || 200;
                let statusText = nodeResponse.statusMessage || node_http_1.STATUS_CODES[statusCode];
                if (statusText == null) {
                    statusText = '';
                }
                const ponyfillResponse = new Response_js_1.PonyfillResponse(outputStream || nodeResponse, {
                    status: statusCode,
                    statusText,
                    headers: nodeResponse.headers,
                    url: fetchRequest.url,
                    signal
                });
                resolve(ponyfillResponse);
            });
            if (fetchRequest['_buffer'] != null) {
                (0, promise_helpers_1.handleMaybePromise)(()=>(0, utils_js_1.safeWrite)(fetchRequest['_buffer'], nodeRequest), ()=>(0, utils_js_1.endStream)(nodeRequest), reject);
            } else if (fetchRequest['bodyType'] === 'String') {
                (0, promise_helpers_1.handleMaybePromise)(()=>(0, utils_js_1.safeWrite)(fetchRequest['bodyInit'], nodeRequest), ()=>(0, utils_js_1.endStream)(nodeRequest), reject);
            } else {
                const nodeReadable = fetchRequest.body != null ? (0, utils_js_1.isNodeReadable)(fetchRequest.body) ? fetchRequest.body : node_stream_1.Readable.from(fetchRequest.body) : null;
                if (nodeReadable) {
                    nodeReadable.pipe(nodeRequest);
                } else {
                    (0, utils_js_1.endStream)(nodeRequest);
                }
            }
        } catch (e) {
            reject(e);
        }
    });
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/fetch.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPonyfill = fetchPonyfill;
const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const node_fs_1 = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
const node_url_1 = __turbopack_context__.r("[externals]/node:url [external] (node:url, cjs)");
const fetchCurl_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/fetchCurl.js [app-route] (ecmascript)");
const fetchNodeHttp_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/fetchNodeHttp.js [app-route] (ecmascript)");
const Request_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Request.js [app-route] (ecmascript)");
const Response_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Response.js [app-route] (ecmascript)");
const URL_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URL.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
const BASE64_SUFFIX = ';base64';
async function getResponseForFile(url) {
    const path = (0, node_url_1.fileURLToPath)(url);
    try {
        await node_fs_1.promises.access(path, node_fs_1.promises.constants.R_OK);
        const stats = await node_fs_1.promises.stat(path, {
            bigint: true
        });
        const readable = (0, node_fs_1.createReadStream)(path);
        return new Response_js_1.PonyfillResponse(readable, {
            status: 200,
            statusText: 'OK',
            headers: {
                'content-type': 'application/octet-stream',
                'last-modified': stats.mtime.toUTCString()
            }
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            return new Response_js_1.PonyfillResponse(null, {
                status: 404,
                statusText: 'Not Found'
            });
        } else if (err.code === 'EACCES') {
            return new Response_js_1.PonyfillResponse(null, {
                status: 403,
                statusText: 'Forbidden'
            });
        }
        throw err;
    }
}
function getResponseForDataUri(url) {
    const [mimeType = 'text/plain', ...datas] = url.substring(5).split(',');
    const data = decodeURIComponent(datas.join(','));
    if (mimeType.endsWith(BASE64_SUFFIX)) {
        const buffer = node_buffer_1.Buffer.from(data, 'base64url');
        const realMimeType = mimeType.slice(0, -BASE64_SUFFIX.length);
        return new Response_js_1.PonyfillResponse(buffer, {
            status: 200,
            statusText: 'OK',
            headers: {
                'content-type': realMimeType
            }
        });
    }
    return new Response_js_1.PonyfillResponse(data, {
        status: 200,
        statusText: 'OK',
        headers: {
            'content-type': mimeType
        }
    });
}
function getResponseForBlob(url) {
    const blob = URL_js_1.PonyfillURL.getBlobFromURL(url);
    if (!blob) {
        throw new TypeError('Invalid Blob URL');
    }
    return new Response_js_1.PonyfillResponse(blob, {
        status: 200,
        headers: {
            'content-type': blob.type,
            'content-length': blob.size.toString()
        }
    });
}
function isURL(obj) {
    return obj != null && obj.href != null;
}
function fetchPonyfill(info, init) {
    if (typeof info === 'string' || isURL(info)) {
        const ponyfillRequest = new Request_js_1.PonyfillRequest(info, init);
        return fetchPonyfill(ponyfillRequest);
    }
    const fetchRequest = info;
    if (fetchRequest.url.startsWith('data:')) {
        const response = getResponseForDataUri(fetchRequest.url);
        return (0, utils_js_1.fakePromise)(response);
    }
    if (fetchRequest.url.startsWith('file:')) {
        const response = getResponseForFile(fetchRequest.url);
        return response;
    }
    if (fetchRequest.url.startsWith('blob:')) {
        const response = getResponseForBlob(fetchRequest.url);
        return (0, utils_js_1.fakePromise)(response);
    }
    if (globalThis.libcurl && !fetchRequest.agent) {
        return (0, fetchCurl_js_1.fetchCurl)(fetchRequest);
    }
    return (0, fetchNodeHttp_js_1.fetchNodeHttp)(fetchRequest);
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TextEncoderDecoder.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillTextDecoder = exports.PonyfillTextEncoder = void 0;
exports.PonyfillBtoa = PonyfillBtoa;
const node_buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
class PonyfillTextEncoder {
    encoding;
    constructor(encoding = 'utf-8'){
        this.encoding = encoding;
    }
    encode(input) {
        return node_buffer_1.Buffer.from(input, this.encoding);
    }
    encodeInto(source, destination) {
        const buffer = this.encode(source);
        const copied = buffer.copy(destination);
        return {
            read: copied,
            written: copied
        };
    }
}
exports.PonyfillTextEncoder = PonyfillTextEncoder;
class PonyfillTextDecoder {
    encoding;
    fatal = false;
    ignoreBOM = false;
    constructor(encoding = 'utf-8', options){
        this.encoding = encoding;
        if (options) {
            this.fatal = options.fatal || false;
            this.ignoreBOM = options.ignoreBOM || false;
        }
    }
    decode(input) {
        if (node_buffer_1.Buffer.isBuffer(input)) {
            return input.toString(this.encoding);
        }
        if ((0, utils_js_1.isArrayBufferView)(input)) {
            return node_buffer_1.Buffer.from(input.buffer, input.byteOffset, input.byteLength).toString(this.encoding);
        }
        return node_buffer_1.Buffer.from(input).toString(this.encoding);
    }
}
exports.PonyfillTextDecoder = PonyfillTextDecoder;
function PonyfillBtoa(input) {
    return node_buffer_1.Buffer.from(input, 'binary').toString('base64');
}
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URLSearchParams.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillURLSearchParams = void 0;
exports.PonyfillURLSearchParams = globalThis.URLSearchParams;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/WritableStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillWritableStream = void 0;
const node_events_1 = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const node_stream_1 = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const promise_helpers_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/cjs/index.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
class PonyfillWritableStream {
    writable;
    constructor(underlyingSink){
        if (underlyingSink instanceof node_stream_1.Writable) {
            this.writable = underlyingSink;
        } else if (underlyingSink) {
            const writable = new node_stream_1.Writable({
                write (chunk, _encoding, callback) {
                    try {
                        const result = underlyingSink.write?.(chunk, controller);
                        if (result instanceof Promise) {
                            result.then(()=>{
                                callback();
                            }, (err)=>{
                                callback(err);
                            });
                        } else {
                            callback();
                        }
                    } catch (err) {
                        callback(err);
                    }
                },
                final (callback) {
                    const result = underlyingSink.close?.();
                    if (result instanceof Promise) {
                        result.then(()=>{
                            callback();
                        }, (err)=>{
                            callback(err);
                        });
                    } else {
                        callback();
                    }
                }
            });
            this.writable = writable;
            const abortCtrl = new AbortController();
            const controller = {
                signal: abortCtrl.signal,
                error (e) {
                    writable.destroy(e);
                }
            };
            writable.once('error', (err)=>abortCtrl.abort(err));
            writable.once('close', ()=>abortCtrl.abort());
        } else {
            this.writable = new node_stream_1.Writable();
        }
    }
    getWriter() {
        const writable = this.writable;
        return {
            get closed () {
                return (0, node_events_1.once)(writable, 'close');
            },
            get desiredSize () {
                return writable.writableLength;
            },
            get ready () {
                return (0, node_events_1.once)(writable, 'drain');
            },
            releaseLock () {
            // no-op
            },
            write (chunk) {
                const promise = (0, utils_js_1.fakePromise)();
                if (chunk == null) {
                    return promise;
                }
                return promise.then(()=>(0, utils_js_1.safeWrite)(chunk, writable));
            },
            close () {
                if (!writable.errored && writable.closed) {
                    return (0, utils_js_1.fakePromise)();
                }
                if (writable.errored) {
                    return (0, promise_helpers_1.fakeRejectPromise)(writable.errored);
                }
                return (0, utils_js_1.fakePromise)().then(()=>(0, utils_js_1.endStream)(writable));
            },
            abort (reason) {
                writable.destroy(reason);
                return (0, node_events_1.once)(writable, 'close');
            }
        };
    }
    close() {
        if (!this.writable.errored && this.writable.closed) {
            return (0, utils_js_1.fakePromise)();
        }
        if (this.writable.errored) {
            return (0, promise_helpers_1.fakeRejectPromise)(this.writable.errored);
        }
        return (0, utils_js_1.fakePromise)().then(()=>(0, utils_js_1.endStream)(this.writable));
    }
    abort(reason) {
        this.writable.destroy(reason);
        return (0, node_events_1.once)(this.writable, 'close');
    }
    locked = false;
}
exports.PonyfillWritableStream = PonyfillWritableStream;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TransformStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillTransformStream = void 0;
const node_stream_1 = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const ReadableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/ReadableStream.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
const WritableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/WritableStream.js [app-route] (ecmascript)");
class PonyfillTransformStream {
    transform;
    writable;
    readable;
    constructor(transformer){
        if (transformer instanceof node_stream_1.Transform) {
            this.transform = transformer;
        } else if (transformer) {
            const controller = {
                enqueue (chunk) {
                    transform.push(chunk);
                },
                error (reason) {
                    transform.destroy(reason);
                },
                terminate () {
                    (0, utils_js_1.endStream)(transform);
                },
                get desiredSize () {
                    return transform.writableLength;
                }
            };
            const transform = new node_stream_1.Transform({
                read () {},
                write (chunk, _encoding, callback) {
                    try {
                        const result = transformer.transform?.(chunk, controller);
                        if (result instanceof Promise) {
                            result.then(()=>{
                                callback();
                            }, (err)=>{
                                callback(err);
                            });
                        } else {
                            callback();
                        }
                    } catch (err) {
                        callback(err);
                    }
                },
                final (callback) {
                    try {
                        const result = transformer.flush?.(controller);
                        if (result instanceof Promise) {
                            result.then(()=>{
                                callback();
                            }, (err)=>{
                                callback(err);
                            });
                        } else {
                            callback();
                        }
                    } catch (err) {
                        callback(err);
                    }
                }
            });
            this.transform = transform;
        } else {
            this.transform = new node_stream_1.Transform();
        }
        this.writable = new WritableStream_js_1.PonyfillWritableStream(this.transform);
        this.readable = new ReadableStream_js_1.PonyfillReadableStream(this.transform);
    }
}
exports.PonyfillTransformStream = PonyfillTransformStream;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/CompressionStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillCompressionStream = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
const node_zlib_1 = tslib_1.__importDefault(__turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)"));
const TransformStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TransformStream.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
class PonyfillCompressionStream extends TransformStream_js_1.PonyfillTransformStream {
    static supportedFormats = (0, utils_js_1.getSupportedFormats)();
    constructor(compressionFormat){
        switch(compressionFormat){
            case 'x-gzip':
            case 'gzip':
                super(node_zlib_1.default.createGzip());
                break;
            case 'x-deflate':
            case 'deflate':
                super(node_zlib_1.default.createDeflate());
                break;
            case 'deflate-raw':
                super(node_zlib_1.default.createDeflateRaw());
                break;
            case 'br':
                super(node_zlib_1.default.createBrotliCompress());
                break;
            case 'zstd':
                super(node_zlib_1.default.createZstdCompress());
                break;
            default:
                throw new Error(`Unsupported compression format: ${compressionFormat}`);
        }
    }
}
exports.PonyfillCompressionStream = PonyfillCompressionStream;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/DecompressionStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillDecompressionStream = void 0;
const tslib_1 = __turbopack_context__.r("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
const node_zlib_1 = tslib_1.__importDefault(__turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)"));
const TransformStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TransformStream.js [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/utils.js [app-route] (ecmascript)");
class PonyfillDecompressionStream extends TransformStream_js_1.PonyfillTransformStream {
    static supportedFormats = (0, utils_js_1.getSupportedFormats)();
    constructor(compressionFormat){
        switch(compressionFormat){
            case 'x-gzip':
            case 'gzip':
                super(node_zlib_1.default.createGunzip());
                break;
            case 'x-deflate':
            case 'deflate':
                super(node_zlib_1.default.createInflate());
                break;
            case 'deflate-raw':
                super(node_zlib_1.default.createInflateRaw());
                break;
            case 'br':
                super(node_zlib_1.default.createBrotliDecompress());
                break;
            case 'zstd':
                super(node_zlib_1.default.createZstdDecompress());
                break;
            default:
                throw new TypeError(`Unsupported compression format: '${compressionFormat}'`);
        }
    }
}
exports.PonyfillDecompressionStream = PonyfillDecompressionStream;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TextEncoderDecoderStream.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PonyfillTextEncoderStream = exports.PonyfillTextDecoderStream = void 0;
const TextEncoderDecoder_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TextEncoderDecoder.js [app-route] (ecmascript)");
const TransformStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TransformStream.js [app-route] (ecmascript)");
class PonyfillTextDecoderStream extends TransformStream_js_1.PonyfillTransformStream {
    textDecoder;
    constructor(encoding, options){
        super({
            transform: (chunk, controller)=>controller.enqueue(this.textDecoder.decode(chunk, {
                    stream: true
                }))
        });
        this.textDecoder = new TextEncoderDecoder_js_1.PonyfillTextDecoder(encoding, options);
    }
    get encoding() {
        return this.textDecoder.encoding;
    }
    get fatal() {
        return this.textDecoder.fatal;
    }
    get ignoreBOM() {
        return this.textDecoder.ignoreBOM;
    }
}
exports.PonyfillTextDecoderStream = PonyfillTextDecoderStream;
class PonyfillTextEncoderStream extends TransformStream_js_1.PonyfillTransformStream {
    textEncoder;
    constructor(encoding){
        super({
            transform: (chunk, controller)=>controller.enqueue(this.textEncoder.encode(chunk))
        });
        this.textEncoder = new TextEncoderDecoder_js_1.PonyfillTextEncoder(encoding);
    }
    get encoding() {
        return this.textEncoder.encoding;
    }
    encode(input) {
        return this.textEncoder.encode(input);
    }
}
exports.PonyfillTextEncoderStream = PonyfillTextEncoderStream;
}),
"[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextEncoderStream = exports.TextDecoderStream = exports.IteratorObject = exports.DecompressionStream = exports.CompressionStream = exports.TransformStream = exports.WritableStream = exports.URLSearchParams = exports.URL = exports.btoa = exports.TextDecoder = exports.TextEncoder = exports.Blob = exports.FormData = exports.File = exports.ReadableStream = exports.Response = exports.Request = exports.Body = exports.Headers = exports.fetch = void 0;
var fetch_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/fetch.js [app-route] (ecmascript)");
Object.defineProperty(exports, "fetch", {
    enumerable: true,
    get: function() {
        return fetch_js_1.fetchPonyfill;
    }
});
var Headers_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Headers.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Headers", {
    enumerable: true,
    get: function() {
        return Headers_js_1.PonyfillHeaders;
    }
});
var Body_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Body.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Body", {
    enumerable: true,
    get: function() {
        return Body_js_1.PonyfillBody;
    }
});
var Request_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Request.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Request", {
    enumerable: true,
    get: function() {
        return Request_js_1.PonyfillRequest;
    }
});
var Response_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Response.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Response", {
    enumerable: true,
    get: function() {
        return Response_js_1.PonyfillResponse;
    }
});
var ReadableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/ReadableStream.js [app-route] (ecmascript)");
Object.defineProperty(exports, "ReadableStream", {
    enumerable: true,
    get: function() {
        return ReadableStream_js_1.PonyfillReadableStream;
    }
});
var File_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/File.js [app-route] (ecmascript)");
Object.defineProperty(exports, "File", {
    enumerable: true,
    get: function() {
        return File_js_1.PonyfillFile;
    }
});
var FormData_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/FormData.js [app-route] (ecmascript)");
Object.defineProperty(exports, "FormData", {
    enumerable: true,
    get: function() {
        return FormData_js_1.PonyfillFormData;
    }
});
var Blob_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/Blob.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Blob", {
    enumerable: true,
    get: function() {
        return Blob_js_1.PonyfillBlob;
    }
});
var TextEncoderDecoder_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TextEncoderDecoder.js [app-route] (ecmascript)");
Object.defineProperty(exports, "TextEncoder", {
    enumerable: true,
    get: function() {
        return TextEncoderDecoder_js_1.PonyfillTextEncoder;
    }
});
Object.defineProperty(exports, "TextDecoder", {
    enumerable: true,
    get: function() {
        return TextEncoderDecoder_js_1.PonyfillTextDecoder;
    }
});
Object.defineProperty(exports, "btoa", {
    enumerable: true,
    get: function() {
        return TextEncoderDecoder_js_1.PonyfillBtoa;
    }
});
var URL_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URL.js [app-route] (ecmascript)");
Object.defineProperty(exports, "URL", {
    enumerable: true,
    get: function() {
        return URL_js_1.PonyfillURL;
    }
});
var URLSearchParams_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/URLSearchParams.js [app-route] (ecmascript)");
Object.defineProperty(exports, "URLSearchParams", {
    enumerable: true,
    get: function() {
        return URLSearchParams_js_1.PonyfillURLSearchParams;
    }
});
var WritableStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/WritableStream.js [app-route] (ecmascript)");
Object.defineProperty(exports, "WritableStream", {
    enumerable: true,
    get: function() {
        return WritableStream_js_1.PonyfillWritableStream;
    }
});
var TransformStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TransformStream.js [app-route] (ecmascript)");
Object.defineProperty(exports, "TransformStream", {
    enumerable: true,
    get: function() {
        return TransformStream_js_1.PonyfillTransformStream;
    }
});
var CompressionStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/CompressionStream.js [app-route] (ecmascript)");
Object.defineProperty(exports, "CompressionStream", {
    enumerable: true,
    get: function() {
        return CompressionStream_js_1.PonyfillCompressionStream;
    }
});
var DecompressionStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/DecompressionStream.js [app-route] (ecmascript)");
Object.defineProperty(exports, "DecompressionStream", {
    enumerable: true,
    get: function() {
        return DecompressionStream_js_1.PonyfillDecompressionStream;
    }
});
var IteratorObject_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/IteratorObject.js [app-route] (ecmascript)");
Object.defineProperty(exports, "IteratorObject", {
    enumerable: true,
    get: function() {
        return IteratorObject_js_1.PonyfillIteratorObject;
    }
});
var TextEncoderDecoderStream_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/@whatwg-node+node-fetch@0.8.5/node_modules/@whatwg-node/node-fetch/cjs/TextEncoderDecoderStream.js [app-route] (ecmascript)");
Object.defineProperty(exports, "TextDecoderStream", {
    enumerable: true,
    get: function() {
        return TextEncoderDecoderStream_js_1.PonyfillTextDecoderStream;
    }
});
Object.defineProperty(exports, "TextEncoderStream", {
    enumerable: true,
    get: function() {
        return TextEncoderDecoderStream_js_1.PonyfillTextEncoderStream;
    }
});
}),
"[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/utils.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completeAssign",
    ()=>completeAssign,
    "createCustomAbortControllerSignal",
    ()=>createCustomAbortControllerSignal,
    "decompressedResponseMap",
    ()=>decompressedResponseMap,
    "ensureDisposableStackRegisteredForTerminateEvents",
    ()=>ensureDisposableStackRegisteredForTerminateEvents,
    "getSupportedEncodings",
    ()=>getSupportedEncodings,
    "handleAbortSignalAndPromiseResponse",
    ()=>handleAbortSignalAndPromiseResponse,
    "handleErrorFromRequestHandler",
    ()=>handleErrorFromRequestHandler,
    "handleResponseDecompression",
    ()=>handleResponseDecompression,
    "isAsyncIterable",
    ()=>isAsyncIterable,
    "isFetchEvent",
    ()=>isFetchEvent,
    "isNodeRequest",
    ()=>isNodeRequest,
    "isReadable",
    ()=>isReadable,
    "isReadableStream",
    ()=>isReadableStream,
    "isRequestInit",
    ()=>isRequestInit,
    "isServerResponse",
    ()=>isServerResponse,
    "isolateObject",
    ()=>isolateObject,
    "normalizeNodeRequest",
    ()=>normalizeNodeRequest,
    "sendNodeResponse",
    ()=>sendNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
;
function isAsyncIterable(body) {
    return body != null && typeof body === 'object' && typeof body[Symbol.asyncIterator] === 'function';
}
function getPort(nodeRequest) {
    if (nodeRequest.socket?.localPort) {
        return nodeRequest.socket?.localPort;
    }
    const hostInHeader = nodeRequest.headers?.[':authority'] || nodeRequest.headers?.host;
    const portInHeader = hostInHeader?.split(':')?.[1];
    if (portInHeader) {
        return portInHeader;
    }
    return 80;
}
function getHostnameWithPort(nodeRequest) {
    if (nodeRequest.headers?.[':authority']) {
        return nodeRequest.headers?.[':authority'];
    }
    if (nodeRequest.headers?.host) {
        return nodeRequest.headers?.host;
    }
    const port = getPort(nodeRequest);
    if (nodeRequest.hostname) {
        return nodeRequest.hostname + ':' + port;
    }
    const localIp = nodeRequest.socket?.localAddress;
    if (localIp && !localIp?.includes('::') && !localIp?.includes('ffff')) {
        return `${localIp}:${port}`;
    }
    return 'localhost';
}
function buildFullUrl(nodeRequest) {
    const hostnameWithPort = getHostnameWithPort(nodeRequest);
    const protocol = nodeRequest.protocol || (nodeRequest.socket?.encrypted ? 'https' : 'http');
    const endpoint = nodeRequest.originalUrl || nodeRequest.url || '/graphql';
    return `${protocol}://${hostnameWithPort}${endpoint}`;
}
function isRequestBody(body) {
    const stringTag = body[Symbol.toStringTag];
    if (typeof body === 'string' || stringTag === 'Uint8Array' || stringTag === 'Blob' || stringTag === 'FormData' || stringTag === 'URLSearchParams' || isAsyncIterable(body)) {
        return true;
    }
    return false;
}
function normalizeNodeRequest(nodeRequest, fetchAPI, nodeResponse, __useCustomAbortCtrl) {
    const rawRequest = nodeRequest.raw || nodeRequest.req || nodeRequest;
    let fullUrl = buildFullUrl(rawRequest);
    if (nodeRequest.query) {
        const url = new fetchAPI.URL(fullUrl);
        for(const key in nodeRequest.query){
            url.searchParams.set(key, nodeRequest.query[key]);
        }
        fullUrl = url.toString();
    }
    let normalizedHeaders = nodeRequest.headers;
    if (nodeRequest.headers?.[':method']) {
        normalizedHeaders = {};
        for(const key in nodeRequest.headers){
            if (!key.startsWith(':')) {
                normalizedHeaders[key] = nodeRequest.headers[key];
            }
        }
    }
    const controller = __useCustomAbortCtrl ? createCustomAbortControllerSignal() : new AbortController();
    if (nodeResponse?.once) {
        const closeEventListener = ()=>{
            if (!controller.signal.aborted) {
                Object.defineProperty(rawRequest, 'aborted', {
                    value: true
                });
                controller.abort(nodeResponse.errored ?? undefined);
            }
        };
        nodeResponse.once('error', closeEventListener);
        nodeResponse.once('close', closeEventListener);
        nodeResponse.once('finish', ()=>{
            nodeResponse.removeListener('close', closeEventListener);
        });
    }
    if (nodeRequest.method === 'GET' || nodeRequest.method === 'HEAD') {
        return new fetchAPI.Request(fullUrl, {
            method: nodeRequest.method,
            headers: normalizedHeaders,
            signal: controller.signal
        });
    }
    /**
     * Some Node server frameworks like Serverless Express sends a dummy object with body but as a Buffer not string
     * so we do those checks to see is there something we can use directly as BodyInit
     * because the presence of body means the request stream is already consumed and,
     * rawRequest cannot be used as BodyInit/ReadableStream by Fetch API in this case.
     */ const maybeParsedBody = nodeRequest.body;
    if (maybeParsedBody != null && Object.keys(maybeParsedBody).length > 0) {
        if (isRequestBody(maybeParsedBody)) {
            return new fetchAPI.Request(fullUrl, {
                method: nodeRequest.method || 'GET',
                headers: normalizedHeaders,
                body: maybeParsedBody,
                signal: controller.signal
            });
        }
        const request = new fetchAPI.Request(fullUrl, {
            method: nodeRequest.method || 'GET',
            headers: normalizedHeaders,
            signal: controller.signal
        });
        if (!request.headers.get('content-type')?.includes('json')) {
            request.headers.set('content-type', 'application/json; charset=utf-8');
        }
        return new Proxy(request, {
            get (_target, prop, receiver) {
                switch(prop){
                    case 'json':
                        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])(maybeParsedBody);
                    case 'text':
                        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])(JSON.stringify(maybeParsedBody));
                    default:
                        {
                            const val = Reflect.get(request, prop, request);
                            if (typeof val === 'function') {
                                return function requestMethodWrapper(...args) {
                                    return val.apply(this === receiver ? request : this, args);
                                };
                            }
                            return val;
                        }
                }
            }
        });
    }
    // perf: instead of spreading the object, we can just pass it as is and it performs better
    return new fetchAPI.Request(fullUrl, {
        method: nodeRequest.method,
        headers: normalizedHeaders,
        signal: controller.signal,
        // @ts-expect-error - AsyncIterable is supported as body
        body: rawRequest,
        duplex: 'half'
    });
}
function isReadable(stream) {
    return stream.read != null;
}
function isNodeRequest(request) {
    return isReadable(request);
}
function isServerResponse(stream) {
    // Check all used functions are defined
    return stream != null && stream.setHeader != null && stream.end != null && stream.once != null && stream.write != null;
}
function isReadableStream(stream) {
    return stream != null && stream.getReader != null;
}
function isFetchEvent(event) {
    return event != null && event.request != null && event.respondWith != null;
}
function configureSocket(rawRequest) {
    rawRequest?.socket?.setTimeout?.(0);
    rawRequest?.socket?.setNoDelay?.(true);
    rawRequest?.socket?.setKeepAlive?.(true);
}
function endResponse(serverResponse) {
    // @ts-expect-error Avoid arguments adaptor trampoline https://v8.dev/blog/adaptor-frame
    serverResponse.end(null, null, null);
}
function sendAsyncIterable(serverResponse, asyncIterable) {
    let closed = false;
    const closeEventListener = ()=>{
        closed = true;
    };
    serverResponse.once('error', closeEventListener);
    serverResponse.once('close', closeEventListener);
    serverResponse.once('finish', ()=>{
        serverResponse.removeListener('close', closeEventListener);
        serverResponse.removeListener('error', closeEventListener);
    });
    const iterator = asyncIterable[Symbol.asyncIterator]();
    return pumpToWritable(()=>iterator.next(), serverResponse, ()=>closed);
}
function endDest(dest) {
    // @ts-expect-error Avoid arguments adaptor trampoline https://v8.dev/blog/adaptor-frame
    dest.end(null, null, null);
}
function pumpToWritable(source, dest, isClosed) {
    const pump = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(source, (sourceResult)=>{
            if (isClosed?.() || sourceResult.done) {
                return endDest(dest);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>safeWrite(sourceResult.value, dest), ()=>isClosed?.() ? endDest(dest) : pump());
        });
    return pump();
}
function safeWrite(chunk, destination) {
    const result = destination.write(chunk);
    if (!result) {
        return new Promise((resolve)=>destination.once('drain', resolve));
    }
}
const isNode1x = globalThis.process?.versions?.node?.startsWith('1');
function sendNodeResponse(fetchResponse, serverResponse, nodeRequest, __useSingleWriteHead) {
    if (serverResponse.closed || serverResponse.destroyed || serverResponse.writableEnded) {
        return;
    }
    if (!fetchResponse) {
        serverResponse.statusCode = 404;
        endResponse(serverResponse);
        return;
    }
    if (__useSingleWriteHead && // @ts-expect-error - headersInit is a private property
    fetchResponse.headers?.headersInit && // @ts-expect-error - headersInit is a private property
    !Array.isArray(fetchResponse.headers.headersInit) && // @ts-expect-error - headersInit is a private property
    !fetchResponse.headers.headersInit.get && // @ts-expect-error - map is a private property
    !fetchResponse.headers._map && // @ts-expect-error - _setCookies is a private property
    !fetchResponse.headers._setCookies?.length) {
        // @ts-expect-error - writeHead accepts headers object
        serverResponse.writeHead(fetchResponse.status, fetchResponse.statusText, // @ts-expect-error - headersInit is a private property
        fetchResponse.headers.headersInit);
    } else {
        // Avoid using `setHeaders` on Node.js 18 as it is broken with multiple headers with the same name
        // @ts-expect-error - setHeaders exist
        if (serverResponse.setHeaders && !isNode1x) {
            // @ts-expect-error - writeHead bad typings
            serverResponse.setHeaders(fetchResponse.headers);
        } else {
            let setCookiesSet = false;
            fetchResponse.headers.forEach((value, key)=>{
                if (key === 'set-cookie') {
                    if (setCookiesSet) {
                        return;
                    }
                    setCookiesSet = true;
                    const setCookies = fetchResponse.headers.getSetCookie?.();
                    if (setCookies) {
                        serverResponse.setHeader('set-cookie', setCookies);
                        return;
                    }
                }
                serverResponse.setHeader(key, value);
            });
        }
        // @ts-expect-error - writeHead bad typings
        serverResponse.writeHead(fetchResponse.status, fetchResponse.statusText);
    }
    // @ts-expect-error - Handle the case where the response is a string
    if (fetchResponse['bodyType'] === 'String') {
        const bodyString = // @ts-expect-error - bodyInit is a private property
        fetchResponse['bodyInit'];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>safeWrite(bodyString, serverResponse), ()=>endResponse(serverResponse));
    }
    // Optimizations for node-fetch
    const bufOfRes = // @ts-expect-error - _buffer is a private property
    fetchResponse._buffer;
    if (bufOfRes) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>safeWrite(bufOfRes, serverResponse), ()=>endResponse(serverResponse));
    }
    // Other fetch implementations
    const fetchBody = fetchResponse.body;
    if (fetchBody == null) {
        endResponse(serverResponse);
        return;
    }
    if (// @ts-expect-error - Uint8Array is a valid body type
    fetchBody[Symbol.toStringTag] === 'Uint8Array') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>safeWrite(fetchBody, serverResponse), ()=>endResponse(serverResponse));
    }
    configureSocket(nodeRequest);
    if (isReadable(fetchBody)) {
        serverResponse.once('close', ()=>{
            fetchBody.destroy();
        });
        fetchBody.pipe(serverResponse, {
            end: true
        });
        return;
    }
    if (isReadableStream(fetchBody)) {
        return sendReadableStream(nodeRequest, serverResponse, fetchBody);
    }
    if (isAsyncIterable(fetchBody)) {
        return sendAsyncIterable(serverResponse, fetchBody);
    }
}
function sendReadableStream(nodeRequest, serverResponse, readableStream) {
    const reader = readableStream.getReader();
    nodeRequest?.once?.('error', (err)=>{
        reader.cancel(err);
    });
    return pumpToWritable(()=>reader.read(), serverResponse);
}
function isRequestInit(val) {
    return val != null && typeof val === 'object' && ('body' in val || 'cache' in val || 'credentials' in val || 'headers' in val || 'integrity' in val || 'keepalive' in val || 'method' in val || 'mode' in val || 'redirect' in val || 'referrer' in val || 'referrerPolicy' in val || 'signal' in val || 'window' in val);
}
function completeAssign(...args) {
    const [target, ...sources] = args.filter((arg)=>arg != null && typeof arg === 'object');
    sources.forEach((source)=>{
        // modified Object.keys to Object.getOwnPropertyNames
        // because Object.keys only returns enumerable properties
        const descriptors = Object.getOwnPropertyNames(source).reduce((descriptors, key)=>{
            const descriptor = Object.getOwnPropertyDescriptor(source, key);
            if (descriptor) {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            }
            return descriptors;
        }, {});
        // By default, Object.assign copies enumerable Symbols, too
        Object.getOwnPropertySymbols(source).forEach((sym)=>{
            const descriptor = Object.getOwnPropertyDescriptor(source, sym);
            if (descriptor?.enumerable) {
                descriptors[sym] = descriptor;
            }
        });
        Object.defineProperties(target, descriptors);
    });
    return target;
}
;
function handleErrorFromRequestHandler(error, ResponseCtor) {
    return new ResponseCtor(error.stack || error.message || error.toString(), {
        status: error.status || 500
    });
}
function isolateObject(originalCtx, waitUntilFn) {
    if (originalCtx == null) {
        if (waitUntilFn == null) {
            return {};
        }
        return {
            waitUntil: waitUntilFn
        };
    }
    return completeAssign(Object.create(originalCtx), {
        waitUntil: waitUntilFn
    }, originalCtx);
}
function handleAbortSignalAndPromiseResponse(response$, abortSignal) {
    if (abortSignal?.aborted) {
        throw abortSignal.reason;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(response$) && abortSignal) {
        const deferred$ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDeferredPromise"])();
        function abortSignalFetchErrorHandler() {
            deferred$.reject(abortSignal.reason);
        }
        abortSignal.addEventListener('abort', abortSignalFetchErrorHandler, {
            once: true
        });
        response$.then(function fetchSuccessHandler(res) {
            deferred$.resolve(res);
        }).catch(function fetchErrorHandler(err) {
            deferred$.reject(err);
        }).finally(()=>{
            abortSignal.removeEventListener('abort', abortSignalFetchErrorHandler);
        });
        return deferred$.promise;
    }
    return response$;
}
const decompressedResponseMap = new WeakMap();
const supportedEncodingsByFetchAPI = new WeakMap();
function getSupportedEncodings(fetchAPI) {
    let supportedEncodings = supportedEncodingsByFetchAPI.get(fetchAPI);
    if (!supportedEncodings) {
        const possibleEncodings = [
            'deflate',
            'gzip',
            'deflate-raw',
            'br',
            'zstd'
        ];
        if (fetchAPI.DecompressionStream?.['supportedFormats']) {
            supportedEncodings = fetchAPI.DecompressionStream['supportedFormats'];
        } else {
            supportedEncodings = possibleEncodings.filter((encoding)=>{
                // deflate-raw is not supported in Node.js >v20
                if (globalThis.process?.version?.startsWith('v2') && fetchAPI.DecompressionStream === globalThis.DecompressionStream && encoding === 'deflate-raw') {
                    return false;
                }
                try {
                    // eslint-disable-next-line no-new
                    new fetchAPI.DecompressionStream(encoding);
                    return true;
                } catch  {
                    return false;
                }
            });
        }
        supportedEncodingsByFetchAPI.set(fetchAPI, supportedEncodings);
    }
    return supportedEncodings;
}
function handleResponseDecompression(response, fetchAPI) {
    const contentEncodingHeader = response?.headers.get('content-encoding');
    if (!contentEncodingHeader || contentEncodingHeader === 'none') {
        return response;
    }
    if (!response?.body) {
        return response;
    }
    let decompressedResponse = decompressedResponseMap.get(response);
    if (!decompressedResponse || decompressedResponse.bodyUsed) {
        let decompressedBody = response.body;
        const contentEncodings = contentEncodingHeader.split(',');
        if (!contentEncodings.every((encoding)=>getSupportedEncodings(fetchAPI).includes(encoding))) {
            return new fetchAPI.Response(`Unsupported 'Content-Encoding': ${contentEncodingHeader}`, {
                status: 415,
                statusText: 'Unsupported Media Type'
            });
        }
        for (const contentEncoding of contentEncodings){
            decompressedBody = decompressedBody.pipeThrough(new fetchAPI.DecompressionStream(contentEncoding));
        }
        decompressedResponse = new fetchAPI.Response(decompressedBody, response);
        decompressedResponseMap.set(response, decompressedResponse);
    }
    return decompressedResponse;
}
const terminateEvents = [
    'SIGINT',
    'exit',
    'SIGTERM'
];
const disposableStacks = new Set();
let eventListenerRegistered = false;
function ensureEventListenerForDisposableStacks() {
    if (eventListenerRegistered) {
        return;
    }
    eventListenerRegistered = true;
    for (const event of terminateEvents){
        globalThis.process.once(event, function terminateHandler() {
            return Promise.allSettled([
                ...disposableStacks
            ].map((stack)=>!stack.disposed && stack.disposeAsync()));
        });
    }
}
function ensureDisposableStackRegisteredForTerminateEvents(disposableStack) {
    if (globalThis.process) {
        ensureEventListenerForDisposableStacks();
        if (!disposableStacks.has(disposableStack)) {
            disposableStacks.add(disposableStack);
            disposableStack.defer(()=>{
                disposableStacks.delete(disposableStack);
            });
        }
    }
}
class CustomAbortControllerSignal extends EventTarget {
    aborted = false;
    _onabort = null;
    _reason;
    constructor(){
        super();
        const nodeEvents = globalThis.process?.getBuiltinModule?.('node:events');
        // @ts-expect-error - We know kMaxEventTargetListeners is available in node:events
        if (nodeEvents?.kMaxEventTargetListeners) {
            // @ts-expect-error - See https://github.com/nodejs/node/pull/55816/files#diff-03bd4f07a1006cb0daaddced702858751b20f5ab7681cb0719c1b1d80d6ca05cR31
            this[nodeEvents.kMaxEventTargetListeners] = 0;
        }
    }
    throwIfAborted() {
        if (this._nativeCtrl?.signal?.throwIfAborted) {
            return this._nativeCtrl.signal.throwIfAborted();
        }
        if (this.aborted) {
            throw this._reason;
        }
    }
    _nativeCtrl;
    ensureNativeCtrl() {
        if (!this._nativeCtrl) {
            const isAborted = this.aborted;
            this._nativeCtrl = new AbortController();
            if (isAborted) {
                this._nativeCtrl.abort(this._reason);
            }
        }
        return this._nativeCtrl;
    }
    abort(reason) {
        if (this._nativeCtrl?.abort) {
            return this._nativeCtrl?.abort(reason);
        }
        this._reason = reason || new DOMException('This operation was aborted', 'AbortError');
        this.aborted = true;
        this.dispatchEvent(new Event('abort'));
    }
    get signal() {
        if (this._nativeCtrl?.signal) {
            return this._nativeCtrl.signal;
        }
        return this;
    }
    get reason() {
        if (this._nativeCtrl?.signal) {
            return this._nativeCtrl.signal.reason;
        }
        return this._reason;
    }
    get onabort() {
        if (this._onabort) {
            return this._onabort;
        }
        return this._onabort;
    }
    set onabort(value) {
        if (this._nativeCtrl?.signal) {
            this._nativeCtrl.signal.onabort = value;
            return;
        }
        if (this._onabort) {
            this.removeEventListener('abort', this._onabort);
        }
        this._onabort = value;
        if (value) {
            this.addEventListener('abort', value);
        }
    }
}
function createCustomAbortControllerSignal() {
    if (globalThis.Bun || globalThis.Deno) {
        return new AbortController();
    }
    return new Proxy(new CustomAbortControllerSignal(), {
        get (target, prop, receiver) {
            if (prop.toString().includes('kDependantSignals')) {
                const nativeCtrl = target.ensureNativeCtrl();
                return Reflect.get(nativeCtrl.signal, prop, nativeCtrl.signal);
            }
            return Reflect.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (prop.toString().includes('kDependantSignals')) {
                const nativeCtrl = target.ensureNativeCtrl();
                return Reflect.set(nativeCtrl.signal, prop, value, nativeCtrl.signal);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        getPrototypeOf () {
            return AbortSignal.prototype;
        }
    });
}
}),
"[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/uwebsockets.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWritableFromUWS",
    ()=>createWritableFromUWS,
    "getRequestFromUWSRequest",
    ()=>getRequestFromUWSRequest,
    "isUWSResponse",
    ()=>isUWSResponse,
    "sendResponseToUwsOpts",
    ()=>sendResponseToUwsOpts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
function isUWSResponse(res) {
    return !!res.onData;
}
function getRequestFromUWSRequest({ req, res, fetchAPI, controller }) {
    const method = req.getMethod();
    let duplex;
    const chunks = [];
    const pushFns = [
        (chunk)=>{
            chunks.push(chunk);
        }
    ];
    const push = (chunk)=>{
        for (const pushFn of pushFns){
            pushFn(chunk);
        }
    };
    let stopped = false;
    const stopFns = [
        ()=>{
            stopped = true;
        }
    ];
    const stop = ()=>{
        for (const stopFn of stopFns){
            stopFn();
        }
    };
    res.onData(function(ab, isLast) {
        push(Buffer.from(Buffer.from(ab, 0, ab.byteLength)));
        if (isLast) {
            stop();
        }
    });
    let getReadableStream;
    if (method !== 'get' && method !== 'head') {
        duplex = 'half';
        controller.signal.addEventListener('abort', ()=>{
            stop();
        }, {
            once: true
        });
        let readableStream;
        getReadableStream = ()=>{
            if (!readableStream) {
                readableStream = new fetchAPI.ReadableStream({
                    start (streamCtrl) {
                        for (const chunk of chunks){
                            streamCtrl.enqueue(chunk);
                        }
                        if (stopped) {
                            streamCtrl.close();
                            return;
                        }
                        pushFns.push((chunk)=>{
                            streamCtrl.enqueue(chunk);
                        });
                        stopFns.push(()=>{
                            if (controller.signal.reason) {
                                streamCtrl.error(controller.signal.reason);
                                return;
                            }
                            if (streamCtrl.desiredSize) {
                                streamCtrl.close();
                            }
                        });
                    }
                });
            }
            return readableStream;
        };
    }
    const headers = new fetchAPI.Headers();
    req.forEach((key, value)=>{
        headers.append(key, value);
    });
    let url = `http://localhost${req.getUrl()}`;
    const query = req.getQuery();
    if (query) {
        url += `?${query}`;
    }
    let buffer;
    function getBody() {
        if (!getReadableStream) {
            return null;
        }
        if (stopped) {
            return getBufferFromChunks();
        }
        return getReadableStream();
    }
    const request = new fetchAPI.Request(url, {
        method,
        headers,
        get body () {
            return getBody();
        },
        signal: controller.signal,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - not in the TS types yet
        duplex
    });
    function getBufferFromChunks() {
        if (!buffer) {
            buffer = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks);
        }
        return buffer;
    }
    function collectBuffer() {
        if (stopped) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])(getBufferFromChunks());
        }
        return new Promise((resolve, reject)=>{
            try {
                stopFns.push(()=>{
                    resolve(getBufferFromChunks());
                });
            } catch (e) {
                reject(e);
            }
        });
    }
    Object.defineProperties(request, {
        body: {
            get () {
                return getBody();
            },
            configurable: true,
            enumerable: true
        },
        json: {
            value () {
                return collectBuffer().then((b)=>b.toString('utf8')).then((t)=>JSON.parse(t));
            },
            configurable: true,
            enumerable: true
        },
        text: {
            value () {
                return collectBuffer().then((b)=>b.toString('utf8'));
            },
            configurable: true,
            enumerable: true
        },
        arrayBuffer: {
            value () {
                return collectBuffer();
            },
            configurable: true,
            enumerable: true
        }
    });
    return request;
}
function createWritableFromUWS(uwsResponse, fetchAPI) {
    return new fetchAPI.WritableStream({
        write (chunk) {
            uwsResponse.cork(()=>{
                uwsResponse.write(chunk);
            });
        },
        close () {
            uwsResponse.cork(()=>{
                uwsResponse.end();
            });
        }
    });
}
function sendResponseToUwsOpts(uwsResponse, fetchResponse, controller, fetchAPI) {
    if (!fetchResponse) {
        uwsResponse.writeStatus('404 Not Found');
        uwsResponse.end();
        return;
    }
    const bufferOfRes = fetchResponse._buffer;
    // @ts-expect-error - Handle the case where the response is a string
    const strBody = fetchResponse['bodyType'] === 'String' ? fetchResponse.bodyInit : undefined;
    if (controller.signal.aborted) {
        return;
    }
    uwsResponse.cork(()=>{
        uwsResponse.writeStatus(`${fetchResponse.status} ${fetchResponse.statusText}`);
        let isSetCookieHandled = false;
        for (const [key, value] of fetchResponse.headers){
            // content-length causes an error with Node.js's fetch
            if (key !== 'content-length') {
                if (key === 'set-cookie') {
                    if (isSetCookieHandled) {
                        continue;
                    }
                    isSetCookieHandled = true;
                    const setCookies = fetchResponse.headers.getSetCookie?.();
                    if (setCookies) {
                        for (const setCookie of setCookies){
                            uwsResponse.writeHeader(key, setCookie);
                        }
                        continue;
                    }
                }
                uwsResponse.writeHeader(key, value);
            }
        }
        if (strBody) {
            uwsResponse.end(strBody);
        } else if (bufferOfRes) {
            uwsResponse.end(bufferOfRes);
        } else if (!fetchResponse.body) {
            uwsResponse.end();
        }
    });
    if (strBody || bufferOfRes || !fetchResponse.body) {
        return;
    }
    controller.signal.addEventListener('abort', ()=>{
        if (!fetchResponse.body?.locked) {
            fetchResponse.body?.cancel(controller.signal.reason);
        }
    }, {
        once: true
    });
    return fetchResponse.body.pipeTo(createWritableFromUWS(uwsResponse, fetchAPI), {
        signal: controller.signal
    }).catch((err)=>{
        if (controller.signal.aborted) {
            return;
        }
        throw err;
    });
}
;
}),
"[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/createServerAdapter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerAdapter",
    ()=>createServerAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+instrumentation@1.0.0/node_modules/@envelop/instrumentation/esm/instrumentation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/node-ponyfill.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$uwebsockets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/uwebsockets.js [app-route] (ecmascript) <locals>");
;
;
;
;
;
;
// Required for envs like nextjs edge runtime
function isRequestAccessible(serverContext) {
    try {
        return !!serverContext?.request;
    } catch  {
        return false;
    }
}
const EMPTY_OBJECT = {};
function createServerAdapter(serverAdapterBaseObject, options) {
    const useSingleWriteHead = options?.__useSingleWriteHead == null ? true : options.__useSingleWriteHead;
    const fetchAPI = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
        ...options?.fetchAPI
    };
    const useCustomAbortCtrl = options?.__useCustomAbortCtrl == null ? fetchAPI.Request !== globalThis.Request : options.__useCustomAbortCtrl;
    const givenHandleRequest = typeof serverAdapterBaseObject === 'function' ? serverAdapterBaseObject : serverAdapterBaseObject.handle;
    const onRequestHooks = [];
    const onResponseHooks = [];
    let instrumentation;
    const waitUntilPromises = new Set();
    let _disposableStack;
    function ensureDisposableStack() {
        if (!_disposableStack) {
            _disposableStack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AsyncDisposableStack"]();
            if (options?.disposeOnProcessTerminate) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureDisposableStackRegisteredForTerminateEvents"])(_disposableStack);
            }
            _disposableStack.defer(()=>{
                if (waitUntilPromises.size > 0) {
                    return Promise.allSettled(waitUntilPromises).then(()=>{
                        waitUntilPromises.clear();
                    }, ()=>{
                        waitUntilPromises.clear();
                    });
                }
            });
        }
        return _disposableStack;
    }
    function waitUntil(maybePromise) {
        // Ensure that the disposable stack is created
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(maybePromise)) {
            ensureDisposableStack();
            waitUntilPromises.add(maybePromise);
            maybePromise.then(()=>{
                waitUntilPromises.delete(maybePromise);
            }, (err)=>{
                console.error(`Unexpected error while waiting: ${err.message || err}`);
                waitUntilPromises.delete(maybePromise);
            });
        }
    }
    if (options?.plugins != null) {
        for (const plugin of options.plugins){
            if (plugin.instrumentation) {
                instrumentation = instrumentation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chain"])(instrumentation, plugin.instrumentation) : plugin.instrumentation;
            }
            if (plugin.onRequest) {
                onRequestHooks.push(plugin.onRequest);
            }
            if (plugin.onResponse) {
                onResponseHooks.push(plugin.onResponse);
            }
            const disposeFn = plugin[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].dispose];
            if (disposeFn) {
                ensureDisposableStack().defer(disposeFn);
            }
            const asyncDisposeFn = plugin[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose];
            if (asyncDisposeFn) {
                ensureDisposableStack().defer(asyncDisposeFn);
            }
            if (plugin.onDispose) {
                ensureDisposableStack().defer(plugin.onDispose);
            }
        }
    }
    let handleRequest = onRequestHooks.length > 0 || onResponseHooks.length > 0 ? function handleRequest(request, serverContext) {
        let requestHandler = givenHandleRequest;
        let response;
        if (onRequestHooks.length === 0) {
            return handleEarlyResponse();
        }
        let url = request['parsedUrl'] || new Proxy(EMPTY_OBJECT, {
            get (_target, prop, _receiver) {
                url = new fetchAPI.URL(request.url, 'http://localhost');
                return Reflect.get(url, prop, url);
            }
        });
        function handleResponse(response) {
            if (onResponseHooks.length === 0) {
                return response;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsyncVoid"])(onResponseHooks, (onResponseHook)=>onResponseHook({
                        request,
                        response,
                        serverContext,
                        setResponse (newResponse) {
                            response = newResponse;
                        },
                        fetchAPI
                    })), ()=>response);
        }
        function handleEarlyResponse() {
            if (!response) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>requestHandler(request, serverContext), handleResponse);
            }
            return handleResponse(response);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsyncVoid"])(onRequestHooks, (onRequestHook, stopEarly)=>onRequestHook({
                    request,
                    setRequest (newRequest) {
                        request = newRequest;
                    },
                    serverContext,
                    fetchAPI,
                    url,
                    requestHandler,
                    setRequestHandler (newRequestHandler) {
                        requestHandler = newRequestHandler;
                    },
                    endResponse (newResponse) {
                        response = newResponse;
                        if (newResponse) {
                            stopEarly();
                        }
                    }
                })), handleEarlyResponse);
    } : givenHandleRequest;
    if (instrumentation?.request) {
        const originalRequestHandler = handleRequest;
        handleRequest = (request, initialContext)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumented"])({
                request
            }).asyncFn(instrumentation.request, originalRequestHandler)(request, initialContext);
        };
    }
    // TODO: Remove this on the next major version
    function handleNodeRequest(nodeRequest, ...ctx) {
        const serverContext = ctx.length > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["completeAssign"])(...ctx) : ctx[0] || {};
        // Ensure `waitUntil` is available in the server context
        if (!serverContext.waitUntil) {
            serverContext.waitUntil = waitUntil;
        }
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeNodeRequest"])(nodeRequest, fetchAPI, undefined, useCustomAbortCtrl);
        return handleRequest(request, serverContext);
    }
    function handleNodeRequestAndResponse(nodeRequest, nodeResponseOrContainer, ...ctx) {
        const nodeResponse = nodeResponseOrContainer.raw || nodeResponseOrContainer;
        const serverContext = ctx.length > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["completeAssign"])(...ctx) : ctx[0] || {};
        // Ensure `waitUntil` is available in the server context
        if (!serverContext.waitUntil) {
            serverContext.waitUntil = waitUntil;
        }
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeNodeRequest"])(nodeRequest, fetchAPI, nodeResponse, useCustomAbortCtrl);
        return handleRequest(request, serverContext);
    }
    function requestListener(nodeRequest, nodeResponse, ...ctx) {
        const defaultServerContext = {
            req: nodeRequest,
            res: nodeResponse,
            waitUntil
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfakePromise"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])().then(()=>handleNodeRequestAndResponse(nodeRequest, nodeResponse, defaultServerContext, ...ctx)).catch((err)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleErrorFromRequestHandler"])(err, fetchAPI.Response)).then((response)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendNodeResponse"])(response, nodeResponse, nodeRequest, useSingleWriteHead)).catch((err)=>console.error(`Unexpected error while handling request: ${err.message || err}`)));
    }
    function handleUWS(res, req, ...ctx) {
        const defaultServerContext = {
            res,
            req,
            waitUntil
        };
        const filteredCtxParts = ctx.filter((partCtx)=>partCtx != null);
        const serverContext = filteredCtxParts.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["completeAssign"])(defaultServerContext, ...ctx) : defaultServerContext;
        const controller = useCustomAbortCtrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createCustomAbortControllerSignal"])() : new AbortController();
        const originalResEnd = res.end.bind(res);
        let resEnded = false;
        res.end = function(data) {
            resEnded = true;
            return originalResEnd(data);
        };
        const originalOnAborted = res.onAborted.bind(res);
        originalOnAborted(function() {
            controller.abort();
        });
        res.onAborted = function(cb) {
            controller.signal.addEventListener('abort', cb, {
                once: true
            });
        };
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$uwebsockets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRequestFromUWSRequest"])({
            req,
            res,
            fetchAPI,
            controller
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>handleRequest(request, serverContext), (response)=>response, (err)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleErrorFromRequestHandler"])(err, fetchAPI.Response)), (response)=>{
            if (!controller.signal.aborted && !resEnded) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$uwebsockets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sendResponseToUwsOpts"])(res, response, controller, fetchAPI), (r)=>r, (err)=>{
                    console.error(`Unexpected error while handling request: ${err.message || err}`);
                });
            }
        });
    }
    function handleEvent(event, ...ctx) {
        if (!event.respondWith || !event.request) {
            throw new TypeError(`Expected FetchEvent, got ${event}`);
        }
        const filteredCtxParts = ctx.filter((partCtx)=>partCtx != null);
        const serverContext = filteredCtxParts.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["completeAssign"])({}, event, ...filteredCtxParts) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isolateObject"])(event);
        const response$ = handleRequest(event.request, serverContext);
        event.respondWith(response$);
    }
    function handleRequestWithWaitUntil(request, ...ctx) {
        const filteredCtxParts = ctx.filter((partCtx)=>partCtx != null);
        const serverContext = filteredCtxParts.length > 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["completeAssign"])({}, ...filteredCtxParts) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isolateObject"])(filteredCtxParts[0], filteredCtxParts[0] == null || filteredCtxParts[0].waitUntil == null ? waitUntil : undefined);
        return handleRequest(request, serverContext);
    }
    const fetchFn = (input, ...maybeCtx)=>{
        if (typeof input === 'string' || 'href' in input) {
            const [initOrCtx, ...restOfCtx] = maybeCtx;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRequestInit"])(initOrCtx)) {
                const request = new fetchAPI.Request(input, initOrCtx);
                const res$ = handleRequestWithWaitUntil(request, ...restOfCtx);
                const signal = initOrCtx.signal;
                if (signal) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleAbortSignalAndPromiseResponse"])(res$, signal);
                }
                return res$;
            }
            const request = new fetchAPI.Request(input);
            return handleRequestWithWaitUntil(request, ...maybeCtx);
        }
        const res$ = handleRequestWithWaitUntil(input, ...maybeCtx);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleAbortSignalAndPromiseResponse"])(res$, input.signal);
    };
    const genericRequestHandler = (input, ...maybeCtx)=>{
        // If it is a Node request
        const [initOrCtxOrRes, ...restOfCtx] = maybeCtx;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNodeRequest"])(input)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isServerResponse"])(initOrCtxOrRes)) {
                throw new TypeError(`Expected ServerResponse, got ${initOrCtxOrRes}`);
            }
            return requestListener(input, initOrCtxOrRes, ...restOfCtx);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$uwebsockets$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isUWSResponse"])(input)) {
            return handleUWS(input, initOrCtxOrRes, ...restOfCtx);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isServerResponse"])(initOrCtxOrRes)) {
            throw new TypeError('Got Node response without Node request');
        }
        // Is input a container object over Request?
        if (isRequestAccessible(input)) {
            // Is it FetchEvent?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFetchEvent"])(input)) {
                return handleEvent(input, ...maybeCtx);
            }
            // In this input is also the context
            return handleRequestWithWaitUntil(input.request, input, ...maybeCtx);
        }
        // Or is it Request itself?
        // Then ctx is present and it is the context
        return fetchFn(input, ...maybeCtx);
    };
    const adapterObj = {
        handleRequest: handleRequestWithWaitUntil,
        fetch: fetchFn,
        handleNodeRequest,
        handleNodeRequestAndResponse,
        requestListener,
        handleEvent,
        handleUWS,
        handle: genericRequestHandler,
        get disposableStack () {
            return ensureDisposableStack();
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose] () {
            if (_disposableStack && !_disposableStack.disposed) {
                return _disposableStack.disposeAsync();
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])();
        },
        dispose () {
            if (_disposableStack && !_disposableStack.disposed) {
                return _disposableStack.disposeAsync();
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])();
        },
        waitUntil
    };
    const serverAdapter = new Proxy(genericRequestHandler, {
        // It should have all the attributes of the handler function and the server instance
        has: (_, prop)=>{
            return prop in adapterObj || prop in genericRequestHandler || serverAdapterBaseObject && prop in serverAdapterBaseObject;
        },
        get: (_, prop)=>{
            // Somehow Deno and Node 24 don't like bound dispose functions
            if (globalThis.Deno || prop === Symbol.asyncDispose || prop === Symbol.dispose) {
                const adapterProp = Reflect.get(adapterObj, prop, adapterObj);
                if (adapterProp) {
                    return adapterProp;
                }
            }
            const adapterProp = adapterObj[prop];
            if (adapterProp) {
                if (adapterProp.bind) {
                    return adapterProp.bind(adapterObj);
                }
                return adapterProp;
            }
            const handleProp = genericRequestHandler[prop];
            if (handleProp) {
                if (handleProp.bind) {
                    return handleProp.bind(genericRequestHandler);
                }
                return handleProp;
            }
            if (serverAdapterBaseObject) {
                const serverAdapterBaseObjectProp = serverAdapterBaseObject[prop];
                if (serverAdapterBaseObjectProp) {
                    if (serverAdapterBaseObjectProp.bind) {
                        return function(...args) {
                            const returnedVal = serverAdapterBaseObject[prop](...args);
                            if (returnedVal === serverAdapterBaseObject) {
                                return serverAdapter;
                            }
                            return returnedVal;
                        };
                    }
                    return serverAdapterBaseObjectProp;
                }
            }
        },
        apply (_, __, args) {
            return genericRequestHandler(...args);
        }
    });
    return serverAdapter;
}
;
}),
"[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/plugins/useCors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCORSHeadersByRequestAndOptions",
    ()=>getCORSHeadersByRequestAndOptions,
    "useCORS",
    ()=>useCORS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
function getCORSHeadersByRequestAndOptions(request, corsOptions) {
    const currentOrigin = request.headers.get('origin');
    if (corsOptions === false || currentOrigin == null) {
        return null;
    }
    const headers = {};
    // If defined origins have '*' or undefined by any means, we should allow all origins
    if (corsOptions.origin == null || corsOptions.origin.length === 0 || corsOptions.origin.includes('*')) {
        headers['Access-Control-Allow-Origin'] = currentOrigin;
        // Vary by origin because there are multiple origins
        headers['Vary'] = 'Origin';
    } else if (typeof corsOptions.origin === 'string') {
        // If there is one specific origin is specified, use it directly
        headers['Access-Control-Allow-Origin'] = corsOptions.origin;
    } else if (Array.isArray(corsOptions.origin)) {
        // If there is only one origin defined in the array, consider it as a single one
        if (corsOptions.origin.length === 1) {
            headers['Access-Control-Allow-Origin'] = corsOptions.origin[0];
        } else if (corsOptions.origin.includes(currentOrigin)) {
            // If origin is available in the headers, use it
            headers['Access-Control-Allow-Origin'] = currentOrigin;
            // Vary by origin because there are multiple origins
            headers['Vary'] = 'Origin';
        } else {
            // There is no origin found in the headers, so we should return null
            headers['Access-Control-Allow-Origin'] = 'null';
        }
    }
    if (corsOptions.methods?.length) {
        headers['Access-Control-Allow-Methods'] = corsOptions.methods.join(', ');
    } else {
        const requestMethod = request.headers.get('access-control-request-method');
        if (requestMethod) {
            headers['Access-Control-Allow-Methods'] = requestMethod;
        }
    }
    if (corsOptions.allowedHeaders?.length) {
        headers['Access-Control-Allow-Headers'] = corsOptions.allowedHeaders.join(', ');
    } else {
        const requestHeaders = request.headers.get('access-control-request-headers');
        if (requestHeaders) {
            headers['Access-Control-Allow-Headers'] = requestHeaders;
            if (headers['Vary']) {
                headers['Vary'] += ', Access-Control-Request-Headers';
            } else {
                headers['Vary'] = 'Access-Control-Request-Headers';
            }
        }
    }
    if (corsOptions.credentials != null) {
        if (corsOptions.credentials === true) {
            headers['Access-Control-Allow-Credentials'] = 'true';
        }
    } else if (headers['Access-Control-Allow-Origin'] !== '*') {
        headers['Access-Control-Allow-Credentials'] = 'true';
    }
    if (corsOptions.exposedHeaders) {
        headers['Access-Control-Expose-Headers'] = corsOptions.exposedHeaders.join(', ');
    }
    if (corsOptions.maxAge) {
        headers['Access-Control-Max-Age'] = corsOptions.maxAge.toString();
    }
    return headers;
}
function getCORSResponseHeaders(request, corsOptionsFactory, serverContext) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>corsOptionsFactory(request, serverContext), (corsOptions)=>getCORSHeadersByRequestAndOptions(request, corsOptions));
}
function useCORS(options) {
    let corsOptionsFactory = ()=>({});
    if (options != null) {
        if (typeof options === 'function') {
            corsOptionsFactory = options;
        } else if (typeof options === 'object') {
            const corsOptions = {
                ...options
            };
            corsOptionsFactory = ()=>corsOptions;
        } else if (options === false) {
            corsOptionsFactory = ()=>false;
        }
    }
    return {
        onRequest ({ request, fetchAPI, endResponse }) {
            if (request.method.toUpperCase() === 'OPTIONS') {
                const response = new fetchAPI.Response(null, {
                    status: 204,
                    // Safari (and potentially other browsers) need content-length 0,
                    // for 204 or they just hang waiting for a body
                    // see: https://github.com/expressjs/cors/blob/master/lib/index.js#L176
                    headers: {
                        'Content-Length': '0'
                    }
                });
                endResponse(response);
            }
        },
        onResponse ({ request, serverContext, response }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>getCORSResponseHeaders(request, corsOptionsFactory, serverContext), (headers)=>{
                if (headers != null) {
                    for(const headerName in headers){
                        response.headers.set(headerName, headers[headerName]);
                    }
                }
            });
        }
    };
}
}),
"[project]/node_modules/.bun/lru-cache@10.4.3/node_modules/lru-cache/dist/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LRUCache",
    ()=>LRUCache
]);
/**
 * @module LRUCache
 */ const perf = typeof performance === 'object' && performance && typeof performance.now === 'function' ? performance : Date;
const warned = new Set();
/* c8 ignore start */ const PROCESS = typeof process === 'object' && !!process ? process : {};
/* c8 ignore start */ const emitWarning = (msg, type, code, fn)=>{
    typeof PROCESS.emitWarning === 'function' ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */ if (typeof AC === 'undefined') {
    //@ts-ignore
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor(){
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted) return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort){
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = ()=>{
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' + 'node 14, load an AbortController polyfill from the ' + '`node-abort-controller` package. A minimal polyfill is ' + 'provided for use by LRUCache.fetch(), but it should not be ' + 'relied upon in other contexts (eg, passing it to other APIs that ' + 'use AbortController/AbortSignal might have undesirable effects). ' + 'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
/* c8 ignore stop */ const shouldWarn = (code)=>!warned.has(code);
const TYPE = Symbol('type');
const isPosInt = (n)=>n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */ // This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max)=>!isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
/* c8 ignore stop */ class ZeroArray extends Array {
    constructor(size){
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls) return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls){
        /* c8 ignore start */ if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */ this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
class LRUCache {
    // options that cannot be changed without disaster
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    #memoMethod;
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */ ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */ ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */ ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */ updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */ updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */ allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */ noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */ noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */ maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */ sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */ noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */ noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */ allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */ allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */ ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */ static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head () {
                return c.#head;
            },
            get tail () {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p)=>c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context)=>c.#backgroundFetch(k, index, options, context),
            moveToTail: (index)=>c.#moveToTail(index),
            indexes: (options)=>c.#indexes(options),
            rindexes: (options)=>c.#rindexes(options),
            isStale: (index)=>c.#isStale(index)
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */ get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */ get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */ get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */ get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */ get fetchMethod() {
        return this.#fetchMethod;
    }
    get memoMethod() {
        return this.#memoMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */ get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */ get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options){
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (memoMethod !== undefined && typeof memoMethod !== 'function') {
            throw new TypeError('memoMethod must be a function if defined');
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== undefined && typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        } else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' + 'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    /**
     * Return the number of ms left in the item's TTL. If item is not in cache,
     * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
     */ getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now())=>{
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(()=>{
                    if (this.#isStale(index)) {
                        this.#delete(this.#keyList[index], 'expire');
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
        };
        this.#updateItemAge = (index)=>{
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index)=>{
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                /* c8 ignore next */ if (!ttl || !start) return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = ()=>{
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(()=>cachedNow = 0, this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
            return n;
        };
        this.getRemainingTTL = (key)=>{
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = (index)=>{
            const s = starts[index];
            const t = ttls[index];
            return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = ()=>{};
    #statusTTL = ()=>{};
    #setItemTTL = ()=>{};
    /* c8 ignore stop */ #isStale = ()=>false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index)=>{
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation)=>{
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                } else {
                    throw new TypeError('invalid size value (must be positive integer). ' + 'When maxSize or maxEntrySize is used, sizeCalculation ' + 'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status)=>{
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while(this.#calculatedSize > maxSize){
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = (_i)=>{};
    #addItemSize = (_i, _s, _st)=>{};
    #requireSize = (_k, _v, size, sizeCalculation)=>{
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#tail; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                } else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#head; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                } else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return index !== undefined && this.#keyMap.get(this.#keyList[index]) === index;
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */ *entries() {
        for (const i of this.#indexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */ *rentries() {
        for (const i of this.#rindexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */ *keys() {
        for (const i of this.#indexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */ *rkeys() {
        for (const i of this.#rindexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */ *values() {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */ *rvalues() {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * A String value that is used in the creation of the default string
     * description of an object. Called by the built-in method
     * `Object.prototype.toString`.
     */ [Symbol.toStringTag] = 'LRUCache';
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
     */ find(fn, getOptions = {}) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from most
     * recently used to least recently used.
     *
     * `fn` is called as `fn(value, key, cache)`.
     *
     * If `thisp` is provided, function will be called in the `this`-context of
     * the provided object, or the cache if no `thisp` object is provided.
     *
     * Does not update age or recenty of use, or iterate over stale values.
     */ forEach(fn, thisp = this) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */ rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */ purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({
            allowStale: true
        })){
            if (this.#isStale(i)) {
                this.#delete(this.#keyList[i], 'expire');
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Get the extended info about a given entry, to get its value, size, and
     * TTL info simultaneously. Returns `undefined` if the key is not present.
     *
     * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
     * serialization, the `start` value is always the current timestamp, and the
     * `ttl` is a calculated remaining time to live (negative if expired).
     *
     * Always returns stale values, if their info is found in the cache, so be
     * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
     * if relevant.
     */ info(key) {
        const i = this.#keyMap.get(key);
        if (i === undefined) return undefined;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === undefined) return undefined;
        const entry = {
            value
        };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to {@link LRLUCache#load}.
     *
     * The `start` fields are calculated relative to a portable `Date.now()`
     * timestamp, even if `performance.now()` is available.
     *
     * Stale entries are always included in the `dump`, even if
     * {@link LRUCache.OptionsBase.allowStale} is false.
     *
     * Note: this returns an actual array, not a generator, so it can be more
     * easily passed around.
     */ dump() {
        const arr = [];
        for (const i of this.#indexes({
            allowStale: true
        })){
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined || key === undefined) continue;
            const entry = {
                value
            };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([
                key,
                entry
            ]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     *
     * The shape of the resulting cache may be different if the same options are
     * not used in both caches.
     *
     * The `start` fields are assumed to be calculated relative to a portable
     * `Date.now()` timestamp, even if `performance.now()` is available.
     */ load(arr) {
        this.clear();
        for (const [key, entry] of arr){
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     *
     * Fields on the {@link LRUCache.SetOptions} options param will override
     * their corresponding values in the constructor options for the scope
     * of this single `set()` operation.
     *
     * If `start` is provided, then that will set the effective start
     * time for the TTL calculation. Note that this must be a previous
     * value of `performance.now()` if supported, or a previous value of
     * `Date.now()` if not.
     *
     * Options object may also include `size`, which will prevent
     * calling the `sizeCalculation` function and just use the specified
     * number if it is a positive integer, and `noDisposeOnSet` which
     * will prevent calling a `dispose` function in the case of
     * overwrites.
     *
     * If the `size` (or return value of `sizeCalculation`) for a given
     * entry is greater than `maxEntrySize`, then the item will not be
     * added to the cache.
     *
     * Will update the recency of the entry.
     *
     * If the value is `undefined`, then this is an alias for
     * `cache.delete(key)`. `undefined` is never stored in the cache.
     */ set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.#delete(k, 'set');
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status) status.set = 'add';
            noUpdateTTL = false;
        } else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                    const { __staleWhileFetching: s } = oldVal;
                    if (s !== undefined && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s, k, 'set');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                s,
                                k,
                                'set'
                            ]);
                        }
                    }
                } else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([
                            oldVal,
                            k,
                            'set'
                        ]);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
                    if (oldValue !== undefined) status.oldValue = oldValue;
                }
            } else if (status) {
                status.set = 'update';
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status) this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */ pop() {
        try {
            while(this.#size){
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                } else if (val !== undefined) {
                    return val;
                }
            }
        } finally{
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while(task = dt?.shift()){
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([
                    v,
                    k,
                    'evict'
                ]);
            }
        }
        this.#removeItemSize(head);
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        } else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Check if a key is in the cache, without updating the recency of
     * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
     * to `true` in either the options or the constructor.
     *
     * Will return `false` if the item is stale, even though it is technically in
     * the cache. The difference can be determined (if it matters) by using a
     * `status` argument, and inspecting the `has` field.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */ has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            } else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        } else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */ peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === undefined || !allowStale && this.#isStale(index)) {
            return;
        }
        const v = this.#valList[index];
        // either stale and allowed, or forcing a refresh of non-stale value
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener('abort', ()=>ac.abort(signal.reason), {
            signal: ac.signal
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context
        };
        const cb = (v, updateCache = false)=>{
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort) options.status.fetchAbortIgnored = true;
                } else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    } else {
                        this.#delete(k, 'fetch');
                    }
                } else {
                    if (options.status) options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er)=>{
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er)=>{
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.#delete(k, 'fetch');
                } else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            } else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej)=>{
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then((v)=>res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener('abort', ()=>{
                if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = (v)=>cb(v, true);
                    }
                }
            });
        };
        if (options.status) options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, {
                ...fetchOpts.options,
                status: undefined
            });
            index = this.#keyMap.get(k);
        } else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod) return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty('__staleWhileFetching') && b.__abortController instanceof AC;
    }
    async fetch(k, fetchOptions = {}) {
        const { // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status) status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status) status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return p.__returned = p;
        } else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale) status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : v.__returned = v;
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status) status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status) this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale) status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
    }
    async forceFetch(k, fetchOptions = {}) {
        const v = await this.fetch(k, fetchOptions);
        if (v === undefined) throw new Error('fetch() returned undefined');
        return v;
    }
    memo(k, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
            throw new Error('no memoMethod provided to constructor');
        }
        const { context, forceRefresh, ...options } = memoOptions;
        const v = this.get(k, options);
        if (!forceRefresh && v !== undefined) return v;
        const vv = memoMethod(k, v, {
            options,
            context
        });
        this.set(k, vv, options);
        return vv;
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */ get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status) this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status) status.get = 'stale';
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.#delete(k, 'expire');
                    }
                    if (status && allowStale) status.returnedStale = true;
                    return allowStale ? value : undefined;
                } else {
                    if (status && allowStale && value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            } else {
                if (status) status.get = 'hit';
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        } else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            } else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     *
     * Returns true if the key was deleted, false otherwise.
     */ delete(k) {
        return this.#delete(k, 'delete');
    }
    #delete(k, reason) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.#clear(reason);
                } else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    } else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, reason);
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                v,
                                k,
                                reason
                            ]);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    } else if (index === this.#head) {
                        this.#head = this.#next[index];
                    } else {
                        const pi = this.#prev[index];
                        this.#next[pi] = this.#next[index];
                        const ni = this.#next[index];
                        this.#prev[ni] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */ clear() {
        return this.#clear('delete');
    }
    #clear(reason) {
        for (const index of this.#rindexes({
            allowStale: true
        })){
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            } else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, reason);
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([
                        v,
                        k,
                        reason
                    ]);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/iterall@1.3.0/node_modules/iterall/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$asyncIterator",
    ()=>$$asyncIterator,
    "$$iterator",
    ()=>$$iterator,
    "createAsyncIterator",
    ()=>createAsyncIterator,
    "createIterator",
    ()=>createIterator,
    "forAwaitEach",
    ()=>forAwaitEach,
    "forEach",
    ()=>forEach,
    "getAsyncIterator",
    ()=>getAsyncIterator,
    "getAsyncIteratorMethod",
    ()=>getAsyncIteratorMethod,
    "getIterator",
    ()=>getIterator,
    "getIteratorMethod",
    ()=>getIteratorMethod,
    "isArrayLike",
    ()=>isArrayLike,
    "isAsyncIterable",
    ()=>isAsyncIterable,
    "isCollection",
    ()=>isCollection,
    "isIterable",
    ()=>isIterable
]);
/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @ignore
 */ /**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterator
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
 */ /**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a
 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterable
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
 */ // In ES2015 environments, Symbol exists
var SYMBOL /*: any */  = typeof Symbol === 'function' ? Symbol : void 0;
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator;
var $$iterator = SYMBOL_ITERATOR || '@@iterator';
function isIterable(obj) {
    return !!getIteratorMethod(obj);
}
function isArrayLike(obj) {
    var length = obj != null && obj.length;
    return typeof length === 'number' && length >= 0 && length % 1 === 0;
}
function isCollection(obj) {
    return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj));
}
function getIterator(iterable) {
    var method = getIteratorMethod(iterable);
    if (method) {
        return method.call(iterable);
    }
}
function getIteratorMethod(iterable) {
    if (iterable != null) {
        var method = SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR] || iterable['@@iterator'];
        if (typeof method === 'function') {
            return method;
        }
    }
}
function createIterator(collection) {
    if (collection != null) {
        var iterator = getIterator(collection);
        if (iterator) {
            return iterator;
        }
        if (isArrayLike(collection)) {
            return new ArrayLikeIterator(collection);
        }
    }
}
// When the object provided to `createIterator` is not Iterable but is
// Array-like, this simple Iterator is created.
function ArrayLikeIterator(obj) {
    this._o = obj;
    this._i = 0;
}
// Note: all Iterators are themselves Iterable.
ArrayLikeIterator.prototype[$$iterator] = function() {
    return this;
};
// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
ArrayLikeIterator.prototype.next = function() {
    if (this._o === void 0 || this._i >= this._o.length) {
        this._o = void 0;
        return {
            value: void 0,
            done: true
        };
    }
    return {
        value: this._o[this._i++],
        done: false
    };
};
function forEach(collection, callback, thisArg) {
    if (collection != null) {
        if (typeof collection.forEach === 'function') {
            return collection.forEach(callback, thisArg);
        }
        var i = 0;
        var iterator = getIterator(collection);
        if (iterator) {
            var step;
            while(!(step = iterator.next()).done){
                callback.call(thisArg, step.value, i++, collection);
                // Infinite Iterators could cause forEach to run forever.
                // After a very large number of iterations, produce an error.
                /* istanbul ignore if */ if (i > 9999999) {
                    throw new TypeError('Near-infinite iteration.');
                }
            }
        } else if (isArrayLike(collection)) {
            for(; i < collection.length; i++){
                if (collection.hasOwnProperty(i)) {
                    callback.call(thisArg, collection[i], i, collection);
                }
            }
        }
    }
}
/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////
/**
 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * an asynchronous iteration behavior, such as what values are looped over in
 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
 * loop or `iterall`'s {@link forAwaitEach} function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterable
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */ /**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the
 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
 *
 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
 * also as a `next()` method, however instead of an IteratorResult,
 * calling this method returns a {@link Promise} for a IteratorResult.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterator
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
 */ // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = SYMBOL && SYMBOL.asyncIterator;
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator';
function isAsyncIterable(obj) {
    return !!getAsyncIteratorMethod(obj);
}
function getAsyncIterator(asyncIterable) {
    var method = getAsyncIteratorMethod(asyncIterable);
    if (method) {
        return method.call(asyncIterable);
    }
}
function getAsyncIteratorMethod(asyncIterable) {
    if (asyncIterable != null) {
        var method = SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR] || asyncIterable['@@asyncIterator'];
        if (typeof method === 'function') {
            return method;
        }
    }
}
function createAsyncIterator(source) {
    if (source != null) {
        var asyncIterator = getAsyncIterator(source);
        if (asyncIterator) {
            return asyncIterator;
        }
        var iterator = createIterator(source);
        if (iterator) {
            return new AsyncFromSyncIterator(iterator);
        }
    }
}
// When the object provided to `createAsyncIterator` is not AsyncIterable but is
// sync Iterable, this simple wrapper is created.
function AsyncFromSyncIterator(iterator) {
    this._i = iterator;
}
// Note: all AsyncIterators are themselves AsyncIterable.
AsyncFromSyncIterator.prototype[$$asyncIterator] = function() {
    return this;
};
// A simple state-machine determines the IteratorResult returned, yielding
// each value in the Array-like object in order of their indicies.
AsyncFromSyncIterator.prototype.next = function(value) {
    return unwrapAsyncFromSync(this._i, 'next', value);
};
AsyncFromSyncIterator.prototype.return = function(value) {
    return this._i.return ? unwrapAsyncFromSync(this._i, 'return', value) : Promise.resolve({
        value: value,
        done: true
    });
};
AsyncFromSyncIterator.prototype.throw = function(value) {
    return this._i.throw ? unwrapAsyncFromSync(this._i, 'throw', value) : Promise.reject(value);
};
function unwrapAsyncFromSync(iterator, fn, value) {
    var step;
    return new Promise(function(resolve) {
        step = iterator[fn](value);
        resolve(step.value);
    }).then(function(value) {
        return {
            value: value,
            done: step.done
        };
    });
}
function forAwaitEach(source, callback, thisArg) {
    var asyncIterator = createAsyncIterator(source);
    if (asyncIterator) {
        var i = 0;
        return new Promise(function(resolve, reject) {
            function next() {
                asyncIterator.next().then(function(step) {
                    if (!step.done) {
                        Promise.resolve(callback.call(thisArg, step.value, i++, source)).then(next).catch(reject);
                    } else {
                        resolve();
                    }
                    // Explicitly return null, silencing bluebird-style warnings.
                    return null;
                }).catch(reject);
                // Explicitly return null, silencing bluebird-style warnings.
                return null;
            }
            next();
        });
    }
}
}),
"[externals]/prettier [external] (prettier, cjs, [project]/node_modules/.bun/prettier@2.8.8/node_modules/prettier)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("prettier-5c40c2f83602a0c9", () => require("prettier-5c40c2f83602a0c9"));

module.exports = mod;
}),
"[project]/node_modules/.bun/ms@2.1.3/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/node_modules/.bun/ms@2.1.3/node_modules/ms/index.js [app-route] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/node_modules/.bun/supports-color@8.1.1/node_modules/supports-color/index.js [app-route] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/browser.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/node.js [app-route] (ecmascript)");
}
}),
"[project]/node_modules/.bun/has-flag@4.0.0/node_modules/has-flag/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/node_modules/.bun/supports-color@8.1.1/node_modules/supports-color/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/node_modules/.bun/has-flag@4.0.0/node_modules/has-flag/index.js [app-route] (ecmascript)");
const { env } = process;
let flagForceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    flagForceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    flagForceColor = 1;
}
function envForceColor() {
    if ('FORCE_COLOR' in env) {
        if (env.FORCE_COLOR === 'true') {
            return 1;
        }
        if (env.FORCE_COLOR === 'false') {
            return 0;
        }
        return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
    const noFlagForceColor = envForceColor();
    if (noFlagForceColor !== undefined) {
        flagForceColor = noFlagForceColor;
    }
    const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
    if (forceColor === 0) {
        return 0;
    }
    if (sniffFlags) {
        if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
            return 3;
        }
        if (hasFlag('color=256')) {
            return 2;
        }
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE',
            'DRONE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = Number.parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream, options = {}) {
    const level = supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options
    });
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel({
        isTTY: tty.isatty(1)
    }),
    stderr: getSupportLevel({
        isTTY: tty.isatty(2)
    })
};
}),
"[project]/node_modules/.bun/graphql-parse-resolve-info@4.14.1+2e36366335d68c76/node_modules/graphql-parse-resolve-info/node8plus/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlias = exports.simplify = exports.parse = exports.simplifyParsedResolveInfoFragmentWithType = exports.parseResolveInfo = exports.getAliasFromResolveInfo = void 0;
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const values_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/values.js [app-route] (ecmascript)");
const debugFactory = __turbopack_context__.r("[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/index.js [app-route] (ecmascript)");
const debug = debugFactory("graphql-parse-resolve-info");
const DEBUG_ENABLED = debug.enabled;
function getArgVal(resolveInfo, argument) {
    if (argument.kind === "Variable") {
        return resolveInfo.variableValues[argument.name.value];
    } else if (argument.kind === "BooleanValue") {
        return argument.value;
    }
}
function argNameIsIf(arg) {
    return arg && arg.name ? arg.name.value === "if" : false;
}
function skipField(resolveInfo, { directives = [] }) {
    let skip = false;
    directives.forEach((directive)=>{
        const directiveName = directive.name.value;
        if (Array.isArray(directive.arguments)) {
            const ifArgumentAst = directive.arguments.find(argNameIsIf);
            if (ifArgumentAst) {
                const argumentValueAst = ifArgumentAst.value;
                if (directiveName === "skip") {
                    skip = skip || getArgVal(resolveInfo, argumentValueAst);
                } else if (directiveName === "include") {
                    skip = skip || !getArgVal(resolveInfo, argumentValueAst);
                }
            }
        }
    });
    return skip;
}
// Originally based on https://github.com/tjmehta/graphql-parse-fields
function getAliasFromResolveInfo(resolveInfo) {
    const asts = // @ts-ignore Property 'fieldASTs' does not exist on type 'GraphQLResolveInfo'.
    resolveInfo.fieldNodes || resolveInfo.fieldASTs;
    for(let i = 0, l = asts.length; i < l; i++){
        const val = asts[i];
        if (val.kind === "Field") {
            const alias = val.alias ? val.alias.value : val.name && val.name.value;
            if (alias) {
                return alias;
            }
        }
    }
    throw new Error("Could not determine alias?!");
}
exports.getAliasFromResolveInfo = getAliasFromResolveInfo;
function parseResolveInfo(resolveInfo, options = {}) {
    const fieldNodes = // @ts-ignore Property 'fieldASTs' does not exist on type 'GraphQLResolveInfo'.
    resolveInfo.fieldNodes || resolveInfo.fieldASTs;
    const { parentType } = resolveInfo;
    if (!fieldNodes) {
        throw new Error("No fieldNodes provided!");
    }
    if (options.keepRoot == null) {
        options.keepRoot = false;
    }
    if (options.deep == null) {
        options.deep = true;
    }
    const tree = fieldTreeFromAST(fieldNodes, resolveInfo, undefined, options, parentType);
    if (!options.keepRoot) {
        const typeKey = firstKey(tree);
        if (!typeKey) {
            return null;
        }
        const fields = tree[typeKey];
        const fieldKey = firstKey(fields);
        if (!fieldKey) {
            return null;
        }
        return fields[fieldKey];
    }
    return tree;
}
exports.parseResolveInfo = parseResolveInfo;
function getFieldFromAST(ast, parentType) {
    if (ast.kind === "Field") {
        const fieldNode = ast;
        const fieldName = fieldNode.name.value;
        if (!(parentType instanceof graphql_1.GraphQLUnionType)) {
            const type = parentType;
            return type.getFields()[fieldName];
        } else {
        // XXX: TODO: Handle GraphQLUnionType
        }
    }
    return undefined;
}
let iNum = 1;
function fieldTreeFromAST(inASTs, resolveInfo, initTree = {}, options = {}, parentType, depth = "") {
    const instance = iNum++;
    if (DEBUG_ENABLED) debug("%s[%d] Entering fieldTreeFromAST with parent type '%s'", depth, instance, parentType);
    const { variableValues } = resolveInfo;
    const fragments = resolveInfo.fragments || {};
    const asts = Array.isArray(inASTs) ? inASTs : [
        inASTs
    ];
    if (!initTree[parentType.name]) {
        initTree[parentType.name] = {};
    }
    const outerDepth = depth;
    return asts.reduce((tree, selectionVal, idx)=>{
        const depth = DEBUG_ENABLED ? `${outerDepth}  ` : null;
        if (DEBUG_ENABLED) debug("%s[%d] Processing AST %d of %d; kind = %s", depth, instance, idx + 1, asts.length, selectionVal.kind);
        if (skipField(resolveInfo, selectionVal)) {
            if (DEBUG_ENABLED) debug("%s[%d] IGNORING due to directive", depth, instance);
        } else if (selectionVal.kind === "Field") {
            const val = selectionVal;
            const name = val.name.value;
            const isReserved = name[0] === "_" && name[1] === "_" && name !== "__id";
            if (isReserved) {
                if (DEBUG_ENABLED) debug("%s[%d] IGNORING because field '%s' is reserved", depth, instance, name);
            } else {
                const alias = val.alias && val.alias.value ? val.alias.value : name;
                if (DEBUG_ENABLED) debug("%s[%d] Field '%s' (alias = '%s')", depth, instance, name, alias);
                const field = getFieldFromAST(val, parentType);
                if (field == null) {
                    return tree;
                }
                const fieldGqlTypeOrUndefined = (0, graphql_1.getNamedType)(field.type);
                if (!fieldGqlTypeOrUndefined) {
                    return tree;
                }
                const fieldGqlType = fieldGqlTypeOrUndefined;
                const args = (0, values_1.getArgumentValues)(field, val, variableValues) || {};
                if (parentType.name && !tree[parentType.name][alias]) {
                    const newTreeRoot = {
                        name,
                        alias,
                        args,
                        fieldsByTypeName: (0, graphql_1.isCompositeType)(fieldGqlType) ? {
                            [fieldGqlType.name]: {}
                        } : {}
                    };
                    tree[parentType.name][alias] = newTreeRoot;
                }
                const selectionSet = val.selectionSet;
                if (selectionSet != null && options.deep && (0, graphql_1.isCompositeType)(fieldGqlType)) {
                    const newParentType = fieldGqlType;
                    if (DEBUG_ENABLED) debug("%s[%d] Recursing into subfields", depth, instance);
                    fieldTreeFromAST(selectionSet.selections, resolveInfo, tree[parentType.name][alias].fieldsByTypeName, options, newParentType, `${depth}  `);
                } else {
                    // No fields to add
                    if (DEBUG_ENABLED) debug("%s[%d] Exiting (no fields to add)", depth, instance);
                }
            }
        } else if (selectionVal.kind === "FragmentSpread" && options.deep) {
            const val = selectionVal;
            const name = val.name && val.name.value;
            if (DEBUG_ENABLED) debug("%s[%d] Fragment spread '%s'", depth, instance, name);
            const fragment = fragments[name];
            assert(fragment, 'unknown fragment "' + name + '"');
            let fragmentType = parentType;
            if (fragment.typeCondition) {
                fragmentType = getType(resolveInfo, fragment.typeCondition);
            }
            if (fragmentType && (0, graphql_1.isCompositeType)(fragmentType)) {
                const newParentType = fragmentType;
                fieldTreeFromAST(fragment.selectionSet.selections, resolveInfo, tree, options, newParentType, `${depth}  `);
            }
        } else if (selectionVal.kind === "InlineFragment" && options.deep) {
            const val = selectionVal;
            const fragment = val;
            let fragmentType = parentType;
            if (fragment.typeCondition) {
                fragmentType = getType(resolveInfo, fragment.typeCondition);
            }
            if (DEBUG_ENABLED) debug("%s[%d] Inline fragment (parent = '%s', type = '%s')", depth, instance, parentType, fragmentType);
            if (fragmentType && (0, graphql_1.isCompositeType)(fragmentType)) {
                const newParentType = fragmentType;
                fieldTreeFromAST(fragment.selectionSet.selections, resolveInfo, tree, options, newParentType, `${depth}  `);
            }
        } else {
            if (DEBUG_ENABLED) debug("%s[%d] IGNORING because kind '%s' not understood", depth, instance, selectionVal.kind);
        }
        // Ref: https://github.com/graphile/postgraphile/pull/342/files#diff-d6702ec9fed755c88b9d70b430fda4d8R148
        return tree;
    }, initTree);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function firstKey(obj) {
    for(const key in obj){
        if (hasOwnProperty.call(obj, key)) {
            return key;
        }
    }
}
function getType(resolveInfo, typeCondition) {
    const { schema } = resolveInfo;
    const { kind, name } = typeCondition;
    if (kind === "NamedType") {
        const typeName = name.value;
        return schema.getType(typeName);
    }
}
function simplifyParsedResolveInfoFragmentWithType(parsedResolveInfoFragment, type) {
    const { fieldsByTypeName } = parsedResolveInfoFragment;
    const fields = {};
    const strippedType = (0, graphql_1.getNamedType)(type);
    if ((0, graphql_1.isCompositeType)(strippedType)) {
        Object.assign(fields, fieldsByTypeName[strippedType.name]);
        if (strippedType instanceof graphql_1.GraphQLObjectType) {
            const objectType = strippedType;
            // GraphQL ensures that the subfields cannot clash, so it's safe to simply overwrite them
            for (const anInterface of objectType.getInterfaces()){
                Object.assign(fields, fieldsByTypeName[anInterface.name]);
            }
        }
    }
    return Object.assign(Object.assign({}, parsedResolveInfoFragment), {
        fields
    });
}
exports.simplifyParsedResolveInfoFragmentWithType = simplifyParsedResolveInfoFragmentWithType;
exports.parse = parseResolveInfo;
exports.simplify = simplifyParsedResolveInfoFragmentWithType;
exports.getAlias = getAliasFromResolveInfo; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/graphql-parse-resolve-info@4.14.1+2e36366335d68c76/node_modules/graphql-parse-resolve-info/build-turbo/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlias = exports.simplify = exports.parse = exports.simplifyParsedResolveInfoFragmentWithType = exports.parseResolveInfo = exports.getAliasFromResolveInfo = void 0;
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const values_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/values.js [app-route] (ecmascript)");
const debugFactory = __turbopack_context__.r("[project]/node_modules/.bun/debug@4.4.3/node_modules/debug/src/index.js [app-route] (ecmascript)");
const debug = debugFactory("graphql-parse-resolve-info");
const DEBUG_ENABLED = debug.enabled;
function getArgVal(resolveInfo, argument) {
    if (argument.kind === "Variable") {
        return resolveInfo.variableValues[argument.name.value];
    } else if (argument.kind === "BooleanValue") {
        return argument.value;
    }
}
function argNameIsIf(arg) {
    return arg && arg.name ? arg.name.value === "if" : false;
}
function skipField(resolveInfo, { directives = [] }) {
    let skip = false;
    directives.forEach((directive)=>{
        const directiveName = directive.name.value;
        if (Array.isArray(directive.arguments)) {
            const ifArgumentAst = directive.arguments.find(argNameIsIf);
            if (ifArgumentAst) {
                const argumentValueAst = ifArgumentAst.value;
                if (directiveName === "skip") {
                    skip = skip || getArgVal(resolveInfo, argumentValueAst);
                } else if (directiveName === "include") {
                    skip = skip || !getArgVal(resolveInfo, argumentValueAst);
                }
            }
        }
    });
    return skip;
}
// Originally based on https://github.com/tjmehta/graphql-parse-fields
function getAliasFromResolveInfo(resolveInfo) {
    const asts = // @ts-ignore Property 'fieldASTs' does not exist on type 'GraphQLResolveInfo'.
    resolveInfo.fieldNodes || resolveInfo.fieldASTs;
    for(let i = 0, l = asts.length; i < l; i++){
        const val = asts[i];
        if (val.kind === "Field") {
            const alias = val.alias ? val.alias.value : val.name && val.name.value;
            if (alias) {
                return alias;
            }
        }
    }
    throw new Error("Could not determine alias?!");
}
exports.getAliasFromResolveInfo = getAliasFromResolveInfo;
function parseResolveInfo(resolveInfo, options = {}) {
    const fieldNodes = // @ts-ignore Property 'fieldASTs' does not exist on type 'GraphQLResolveInfo'.
    resolveInfo.fieldNodes || resolveInfo.fieldASTs;
    const { parentType } = resolveInfo;
    if (!fieldNodes) {
        throw new Error("No fieldNodes provided!");
    }
    if (options.keepRoot == null) {
        options.keepRoot = false;
    }
    if (options.deep == null) {
        options.deep = true;
    }
    const tree = fieldTreeFromAST(fieldNodes, resolveInfo, undefined, options, parentType);
    if (!options.keepRoot) {
        const typeKey = firstKey(tree);
        if (!typeKey) {
            return null;
        }
        const fields = tree[typeKey];
        const fieldKey = firstKey(fields);
        if (!fieldKey) {
            return null;
        }
        return fields[fieldKey];
    }
    return tree;
}
exports.parseResolveInfo = parseResolveInfo;
function getFieldFromAST(ast, parentType) {
    if (ast.kind === "Field") {
        const fieldNode = ast;
        const fieldName = fieldNode.name.value;
        if (!(parentType instanceof graphql_1.GraphQLUnionType)) {
            const type = parentType;
            return type.getFields()[fieldName];
        } else {
        // XXX: TODO: Handle GraphQLUnionType
        }
    }
    return undefined;
}
let iNum = 1;
function fieldTreeFromAST(inASTs, resolveInfo, initTree = {}, options = {}, parentType, depth = "") {
    const instance = iNum++;
    if (DEBUG_ENABLED) debug("%s[%d] Entering fieldTreeFromAST with parent type '%s'", depth, instance, parentType);
    const { variableValues } = resolveInfo;
    const fragments = resolveInfo.fragments || {};
    const asts = Array.isArray(inASTs) ? inASTs : [
        inASTs
    ];
    if (!initTree[parentType.name]) {
        initTree[parentType.name] = {};
    }
    const outerDepth = depth;
    return asts.reduce((tree, selectionVal, idx)=>{
        const depth = DEBUG_ENABLED ? `${outerDepth}  ` : null;
        if (DEBUG_ENABLED) debug("%s[%d] Processing AST %d of %d; kind = %s", depth, instance, idx + 1, asts.length, selectionVal.kind);
        if (skipField(resolveInfo, selectionVal)) {
            if (DEBUG_ENABLED) debug("%s[%d] IGNORING due to directive", depth, instance);
        } else if (selectionVal.kind === "Field") {
            const val = selectionVal;
            const name = val.name.value;
            const isReserved = name[0] === "_" && name[1] === "_" && name !== "__id";
            if (isReserved) {
                if (DEBUG_ENABLED) debug("%s[%d] IGNORING because field '%s' is reserved", depth, instance, name);
            } else {
                const alias = val.alias && val.alias.value ? val.alias.value : name;
                if (DEBUG_ENABLED) debug("%s[%d] Field '%s' (alias = '%s')", depth, instance, name, alias);
                const field = getFieldFromAST(val, parentType);
                if (field == null) {
                    return tree;
                }
                const fieldGqlTypeOrUndefined = (0, graphql_1.getNamedType)(field.type);
                if (!fieldGqlTypeOrUndefined) {
                    return tree;
                }
                const fieldGqlType = fieldGqlTypeOrUndefined;
                const args = (0, values_1.getArgumentValues)(field, val, variableValues) || {};
                if (parentType.name && !tree[parentType.name][alias]) {
                    const newTreeRoot = {
                        name,
                        alias,
                        args,
                        fieldsByTypeName: (0, graphql_1.isCompositeType)(fieldGqlType) ? {
                            [fieldGqlType.name]: {}
                        } : {}
                    };
                    tree[parentType.name][alias] = newTreeRoot;
                }
                const selectionSet = val.selectionSet;
                if (selectionSet != null && options.deep && (0, graphql_1.isCompositeType)(fieldGqlType)) {
                    const newParentType = fieldGqlType;
                    if (DEBUG_ENABLED) debug("%s[%d] Recursing into subfields", depth, instance);
                    fieldTreeFromAST(selectionSet.selections, resolveInfo, tree[parentType.name][alias].fieldsByTypeName, options, newParentType, `${depth}  `);
                } else {
                    // No fields to add
                    if (DEBUG_ENABLED) debug("%s[%d] Exiting (no fields to add)", depth, instance);
                }
            }
        } else if (selectionVal.kind === "FragmentSpread" && options.deep) {
            const val = selectionVal;
            const name = val.name && val.name.value;
            if (DEBUG_ENABLED) debug("%s[%d] Fragment spread '%s'", depth, instance, name);
            const fragment = fragments[name];
            assert(fragment, 'unknown fragment "' + name + '"');
            let fragmentType = parentType;
            if (fragment.typeCondition) {
                fragmentType = getType(resolveInfo, fragment.typeCondition);
            }
            if (fragmentType && (0, graphql_1.isCompositeType)(fragmentType)) {
                const newParentType = fragmentType;
                fieldTreeFromAST(fragment.selectionSet.selections, resolveInfo, tree, options, newParentType, `${depth}  `);
            }
        } else if (selectionVal.kind === "InlineFragment" && options.deep) {
            const val = selectionVal;
            const fragment = val;
            let fragmentType = parentType;
            if (fragment.typeCondition) {
                fragmentType = getType(resolveInfo, fragment.typeCondition);
            }
            if (DEBUG_ENABLED) debug("%s[%d] Inline fragment (parent = '%s', type = '%s')", depth, instance, parentType, fragmentType);
            if (fragmentType && (0, graphql_1.isCompositeType)(fragmentType)) {
                const newParentType = fragmentType;
                fieldTreeFromAST(fragment.selectionSet.selections, resolveInfo, tree, options, newParentType, `${depth}  `);
            }
        } else {
            if (DEBUG_ENABLED) debug("%s[%d] IGNORING because kind '%s' not understood", depth, instance, selectionVal.kind);
        }
        // Ref: https://github.com/graphile/postgraphile/pull/342/files#diff-d6702ec9fed755c88b9d70b430fda4d8R148
        return tree;
    }, initTree);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function firstKey(obj) {
    for(const key in obj){
        if (hasOwnProperty.call(obj, key)) {
            return key;
        }
    }
}
function getType(resolveInfo, typeCondition) {
    const { schema } = resolveInfo;
    const { kind, name } = typeCondition;
    if (kind === "NamedType") {
        const typeName = name.value;
        return schema.getType(typeName);
    }
}
function simplifyParsedResolveInfoFragmentWithType(parsedResolveInfoFragment, type) {
    const { fieldsByTypeName } = parsedResolveInfoFragment;
    const fields = {};
    const strippedType = (0, graphql_1.getNamedType)(type);
    if ((0, graphql_1.isCompositeType)(strippedType)) {
        Object.assign(fields, fieldsByTypeName[strippedType.name]);
        if (strippedType instanceof graphql_1.GraphQLObjectType) {
            const objectType = strippedType;
            // GraphQL ensures that the subfields cannot clash, so it's safe to simply overwrite them
            for (const anInterface of objectType.getInterfaces()){
                Object.assign(fields, fieldsByTypeName[anInterface.name]);
            }
        }
    }
    return {
        ...parsedResolveInfoFragment,
        fields
    };
}
exports.simplifyParsedResolveInfoFragmentWithType = simplifyParsedResolveInfoFragmentWithType;
exports.parse = parseResolveInfo;
exports.simplify = simplifyParsedResolveInfoFragmentWithType;
exports.getAlias = getAliasFromResolveInfo; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/graphql-parse-resolve-info@4.14.1+2e36366335d68c76/node_modules/graphql-parse-resolve-info/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (process.env.GRAPHILE_TURBO === "1") {
    const major = parseInt(process.version.replace(/\..*$/, ""), 10);
    if (major < 12) {
        throw new Error("Turbo mode requires Node v12 or higher");
    }
    module.exports = __turbopack_context__.r("[project]/node_modules/.bun/graphql-parse-resolve-info@4.14.1+2e36366335d68c76/node_modules/graphql-parse-resolve-info/build-turbo/index.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.bun/graphql-parse-resolve-info@4.14.1+2e36366335d68c76/node_modules/graphql-parse-resolve-info/node8plus/index.js [app-route] (ecmascript)");
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/Memory.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Memory",
    ()=>Memory,
    "MemorySync",
    ()=>MemorySync
]);
class Memory {
    #data = null;
    read() {
        return Promise.resolve(this.#data);
    }
    write(obj) {
        this.#data = obj;
        return Promise.resolve();
    }
}
class MemorySync {
    #data = null;
    read() {
        return this.#data || null;
    }
    write(obj) {
        this.#data = obj;
    }
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/core/Low.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Low",
    ()=>Low,
    "LowSync",
    ()=>LowSync
]);
function checkArgs(adapter, defaultData) {
    if (adapter === undefined) throw new Error('lowdb: missing adapter');
    if (defaultData === undefined) throw new Error('lowdb: missing default data');
}
class Low {
    adapter;
    data;
    constructor(adapter, defaultData){
        checkArgs(adapter, defaultData);
        this.adapter = adapter;
        this.data = defaultData;
    }
    async read() {
        const data = await this.adapter.read();
        if (data) this.data = data;
    }
    async write() {
        if (this.data) await this.adapter.write(this.data);
    }
    async update(fn) {
        fn(this.data);
        await this.write();
    }
}
class LowSync {
    adapter;
    data;
    constructor(adapter, defaultData){
        checkArgs(adapter, defaultData);
        this.adapter = adapter;
        this.data = defaultData;
    }
    read() {
        const data = this.adapter.read();
        if (data) this.data = data;
    }
    write() {
        if (this.data) this.adapter.write(this.data);
    }
    update(fn) {
        fn(this.data);
        this.write();
    }
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$Memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/Memory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/core/Low.js [app-route] (ecmascript)");
;
;
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Low",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Low"],
    "LowSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LowSync"],
    "Memory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$Memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Memory"],
    "MemorySync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$Memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MemorySync"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$Memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/Memory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/core/Low.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/TextFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextFile",
    ()=>TextFile,
    "TextFileSync",
    ()=>TextFileSync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$steno$40$4$2e$0$2e$2$2f$node_modules$2f$steno$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/steno@4.0.2/node_modules/steno/lib/index.js [app-route] (ecmascript)");
;
;
;
;
class TextFile {
    #filename;
    #writer;
    constructor(filename){
        this.#filename = filename;
        this.#writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$steno$40$4$2e$0$2e$2$2f$node_modules$2f$steno$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Writer"](filename);
    }
    async read() {
        let data;
        try {
            data = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(this.#filename, 'utf-8');
        } catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        return this.#writer.write(str);
    }
}
class TextFileSync {
    #tempFilename;
    #filename;
    constructor(filename){
        this.#filename = filename;
        const f = filename.toString();
        this.#tempFilename = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(f), `.${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(f)}.tmp`);
    }
    read() {
        let data;
        try {
            data = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readFileSync"])(this.#filename, 'utf-8');
        } catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["writeFileSync"])(this.#tempFilename, str);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["renameSync"])(this.#tempFilename, this.#filename);
    }
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/DataFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataFile",
    ()=>DataFile,
    "DataFileSync",
    ()=>DataFileSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/TextFile.js [app-route] (ecmascript)");
;
class DataFile {
    #adapter;
    #parse;
    #stringify;
    constructor(filename, { parse, stringify }){
        this.#adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TextFile"](filename);
        this.#parse = parse;
        this.#stringify = stringify;
    }
    async read() {
        const data = await this.#adapter.read();
        if (data === null) {
            return null;
        } else {
            return this.#parse(data);
        }
    }
    write(obj) {
        return this.#adapter.write(this.#stringify(obj));
    }
}
class DataFileSync {
    #adapter;
    #parse;
    #stringify;
    constructor(filename, { parse, stringify }){
        this.#adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TextFileSync"](filename);
        this.#parse = parse;
        this.#stringify = stringify;
    }
    read() {
        const data = this.#adapter.read();
        if (data === null) {
            return null;
        } else {
            return this.#parse(data);
        }
    }
    write(obj) {
        this.#adapter.write(this.#stringify(obj));
    }
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/JSONFile.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JSONFile",
    ()=>JSONFile,
    "JSONFileSync",
    ()=>JSONFileSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/DataFile.js [app-route] (ecmascript)");
;
class JSONFile extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataFile"] {
    constructor(filename){
        super(filename, {
            parse: JSON.parse,
            stringify: (data)=>JSON.stringify(data, null, 2)
        });
    }
}
class JSONFileSync extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataFileSync"] {
    constructor(filename){
        super(filename, {
            parse: JSON.parse,
            stringify: (data)=>JSON.stringify(data, null, 2)
        });
    }
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/presets/node.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JSONFilePreset",
    ()=>JSONFilePreset,
    "JSONFileSyncPreset",
    ()=>JSONFileSyncPreset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$Memory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/Memory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/JSONFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/core/Low.js [app-route] (ecmascript)");
;
;
;
async function JSONFilePreset(filename, defaultData) {
    const adapter = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFile"](filename);
    const db = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Low"](adapter, defaultData);
    await db.read();
    return db;
}
function JSONFileSyncPreset(filename, defaultData) {
    const adapter = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFileSync"](filename);
    const db = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LowSync"](adapter, defaultData);
    db.read();
    return db;
}
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/node.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/DataFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/JSONFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/TextFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$presets$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/presets/node.js [app-route] (ecmascript)");
;
;
;
;
}),
"[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/node.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataFile"],
    "DataFileSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DataFileSync"],
    "JSONFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFile"],
    "JSONFilePreset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$presets$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFilePreset"],
    "JSONFileSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFileSync"],
    "JSONFileSyncPreset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$presets$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFileSyncPreset"],
    "TextFile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TextFile"],
    "TextFileSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TextFileSync"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/node.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$DataFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/DataFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/JSONFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$TextFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/TextFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$presets$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/presets/node.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.bun/steno@4.0.2/node_modules/steno/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Writer",
    ()=>Writer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
;
;
;
// Returns a temporary file
// Example: for /some/file will return /some/.file.tmp
function getTempFilename(file) {
    const f = file instanceof URL ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(file) : file.toString();
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["dirname"])(f), `.${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["basename"])(f)}.tmp`);
}
// Retries an asynchronous operation with a delay between retries and a maximum retry count
async function retryAsyncOperation(fn, maxRetries, delayMs) {
    for(let i = 0; i < maxRetries; i++){
        try {
            return await fn();
        } catch (error) {
            if (i < maxRetries - 1) {
                await new Promise((resolve)=>setTimeout(resolve, delayMs));
            } else {
                throw error; // Rethrow the error if max retries reached
            }
        }
    }
}
class Writer {
    #filename;
    #tempFilename;
    #locked = false;
    #prev = null;
    #next = null;
    #nextPromise = null;
    #nextData = null;
    // File is locked, add data for later
    #add(data) {
        // Only keep most recent data
        this.#nextData = data;
        // Create a singleton promise to resolve all next promises once next data is written
        this.#nextPromise ||= new Promise((resolve, reject)=>{
            this.#next = [
                resolve,
                reject
            ];
        });
        // Return a promise that will resolve at the same time as next promise
        return new Promise((resolve, reject)=>{
            this.#nextPromise?.then(resolve).catch(reject);
        });
    }
    // File isn't locked, write data
    async #write(data) {
        // Lock file
        this.#locked = true;
        try {
            // Atomic write
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(this.#tempFilename, data, 'utf-8');
            await retryAsyncOperation(async ()=>{
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["rename"])(this.#tempFilename, this.#filename);
            }, 10, 100);
            // Call resolve
            this.#prev?.[0]();
        } catch (err) {
            // Call reject
            if (err instanceof Error) {
                this.#prev?.[1](err);
            }
            throw err;
        } finally{
            // Unlock file
            this.#locked = false;
            this.#prev = this.#next;
            this.#next = this.#nextPromise = null;
            if (this.#nextData !== null) {
                const nextData = this.#nextData;
                this.#nextData = null;
                await this.write(nextData);
            }
        }
    }
    constructor(filename){
        this.#filename = filename;
        this.#tempFilename = getTempFilename(filename);
    }
    async write(data) {
        return this.#locked ? this.#add(data) : this.#write(data);
    }
}
}),
"[project]/node_modules/.bun/@prisma+client-runtime-utils@7.3.0/node_modules/@prisma/client-runtime-utils/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod2)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod2);
// src/index.ts
var index_exports = {};
__export(index_exports, {
    AnyNull: ()=>AnyNull,
    AnyNullClass: ()=>AnyNullClass,
    DbNull: ()=>DbNull,
    DbNullClass: ()=>DbNullClass,
    Decimal: ()=>Decimal,
    JsonNull: ()=>JsonNull,
    JsonNullClass: ()=>JsonNullClass,
    NullTypes: ()=>NullTypes,
    ObjectEnumValue: ()=>ObjectEnumValue,
    PrismaClientInitializationError: ()=>PrismaClientInitializationError,
    PrismaClientKnownRequestError: ()=>PrismaClientKnownRequestError,
    PrismaClientRustError: ()=>PrismaClientRustError,
    PrismaClientRustPanicError: ()=>PrismaClientRustPanicError,
    PrismaClientUnknownRequestError: ()=>PrismaClientUnknownRequestError,
    PrismaClientValidationError: ()=>PrismaClientValidationError,
    Sql: ()=>Sql,
    empty: ()=>empty,
    hasBatchIndex: ()=>hasBatchIndex,
    isAnyNull: ()=>isAnyNull,
    isDbNull: ()=>isDbNull,
    isJsonNull: ()=>isJsonNull,
    join: ()=>join,
    raw: ()=>raw,
    sql: ()=>sql
});
module.exports = __toCommonJS(index_exports);
// src/errors/ErrorWithBatchIndex.ts
function hasBatchIndex(value) {
    return typeof value["batchRequestIdx"] === "number";
}
// src/errors/setClassName.ts
function setClassName(classObject, name) {
    Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
    });
}
// src/errors/PrismaClientInitializationError.ts
var PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
    clientVersion;
    errorCode;
    retryable;
    constructor(message, clientVersion, errorCode){
        super(message);
        this.name = "PrismaClientInitializationError";
        this.clientVersion = clientVersion;
        this.errorCode = errorCode;
        Error.captureStackTrace(_PrismaClientInitializationError);
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
    }
};
setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");
// src/errors/PrismaClientKnownRequestError.ts
var PrismaClientKnownRequestError = class extends Error {
    code;
    meta;
    clientVersion;
    batchRequestIdx;
    constructor(message, { code, clientVersion, meta, batchRequestIdx }){
        super(message);
        this.name = "PrismaClientKnownRequestError";
        this.code = code;
        this.clientVersion = clientVersion;
        this.meta = meta;
        Object.defineProperty(this, "batchRequestIdx", {
            value: batchRequestIdx,
            enumerable: false,
            writable: true
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
    }
};
setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
// src/errors/log.ts
function getBacktrace(log3) {
    if (log3.fields?.message) {
        let str = log3.fields?.message;
        if (log3.fields?.file) {
            str += ` in ${log3.fields.file}`;
            if (log3.fields?.line) {
                str += `:${log3.fields.line}`;
            }
            if (log3.fields?.column) {
                str += `:${log3.fields.column}`;
            }
        }
        if (log3.fields?.reason) {
            str += `
${log3.fields?.reason}`;
        }
        return str;
    }
    return "Unknown error";
}
function isPanic(err) {
    return err.fields?.message === "PANIC";
}
// src/errors/PrismaClientRustError.ts
var PrismaClientRustError = class extends Error {
    clientVersion;
    _isPanic;
    constructor({ clientVersion, error }){
        const backtrace = getBacktrace(error);
        super(backtrace ?? "Unknown error");
        this._isPanic = isPanic(error);
        this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
    }
    isPanic() {
        return this._isPanic;
    }
};
setClassName(PrismaClientRustError, "PrismaClientRustError");
// src/errors/PrismaClientRustPanicError.ts
var PrismaClientRustPanicError = class extends Error {
    clientVersion;
    constructor(message, clientVersion){
        super(message);
        this.name = "PrismaClientRustPanicError";
        this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
    }
};
setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");
// src/errors/PrismaClientUnknownRequestError.ts
var PrismaClientUnknownRequestError = class extends Error {
    clientVersion;
    batchRequestIdx;
    constructor(message, { clientVersion, batchRequestIdx }){
        super(message);
        this.name = "PrismaClientUnknownRequestError";
        this.clientVersion = clientVersion;
        Object.defineProperty(this, "batchRequestIdx", {
            value: batchRequestIdx,
            writable: true,
            enumerable: false
        });
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
    }
};
setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");
// src/errors/PrismaClientValidationError.ts
var PrismaClientValidationError = class extends Error {
    name = "PrismaClientValidationError";
    clientVersion;
    constructor(message, { clientVersion }){
        super(message);
        this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
    }
};
setClassName(PrismaClientValidationError, "PrismaClientValidationError");
// src/nullTypes.ts
var secret = Symbol();
var representations = /* @__PURE__ */ new WeakMap();
var ObjectEnumValue = class {
    constructor(arg){
        if (arg === secret) {
            representations.set(this, `Prisma.${this._getName()}`);
        } else {
            representations.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
        }
    }
    _getName() {
        return this.constructor.name;
    }
    toString() {
        return representations.get(this);
    }
};
function setClassName2(classObject, name) {
    Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
    });
}
var NullTypesEnumValue = class extends ObjectEnumValue {
    _getNamespace() {
        return "NullTypes";
    }
};
var DbNullClass = class extends NullTypesEnumValue {
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    #_brand_DbNull;
};
setClassName2(DbNullClass, "DbNull");
var JsonNullClass = class extends NullTypesEnumValue {
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    #_brand_JsonNull;
};
setClassName2(JsonNullClass, "JsonNull");
var AnyNullClass = class extends NullTypesEnumValue {
    // Phantom private property to prevent structural type equality
    // eslint-disable-next-line no-unused-private-class-members
    #_brand_AnyNull;
};
setClassName2(AnyNullClass, "AnyNull");
var NullTypes = {
    DbNull: DbNullClass,
    JsonNull: JsonNullClass,
    AnyNull: AnyNullClass
};
var DbNull = new DbNullClass(secret);
var JsonNull = new JsonNullClass(secret);
var AnyNull = new AnyNullClass(secret);
function isDbNull(value) {
    return value === DbNull;
}
function isJsonNull(value) {
    return value === JsonNull;
}
function isAnyNull(value) {
    return value === AnyNull;
}
// ../../node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
    // These values must be integers within the stated ranges (inclusive).
    // Most of these values can be changed at run-time using the `Decimal.config` method.
    // The maximum number of significant digits of the result of a calculation or base conversion.
    // E.g. `Decimal.config({ precision: 20 });`
    precision: 20,
    // 1 to MAX_DIGITS
    // The rounding mode used when rounding to `precision`.
    //
    // ROUND_UP         0 Away from zero.
    // ROUND_DOWN       1 Towards zero.
    // ROUND_CEIL       2 Towards +Infinity.
    // ROUND_FLOOR      3 Towards -Infinity.
    // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    //
    // E.g.
    // `Decimal.rounding = 4;`
    // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
    rounding: 4,
    // 0 to 8
    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP         0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
    // FLOOR      3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN  6 The IEEE 754 remainder function.
    // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
    //
    // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
    // division (9) are commonly used for the modulus operation. The other rounding modes can also
    // be used, but they may not give useful results.
    modulo: 1,
    // 0 to 9
    // The exponent value at and beneath which `toString` returns exponential notation.
    // JavaScript numbers: -7
    toExpNeg: -7,
    // 0 to -EXP_LIMIT
    // The exponent value at and above which `toString` returns exponential notation.
    // JavaScript numbers: 21
    toExpPos: 21,
    // 0 to EXP_LIMIT
    // The minimum exponent value, beneath which underflow to zero occurs.
    // JavaScript numbers: -324  (5e-324)
    minE: -EXP_LIMIT,
    // -1 to -EXP_LIMIT
    // The maximum exponent value, above which overflow to Infinity occurs.
    // JavaScript numbers: 308  (1.7976931348623157e+308)
    maxE: EXP_LIMIT,
    // 1 to EXP_LIMIT
    // Whether to use cryptographically-secure random number generation, if available.
    crypto: false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = {
    toStringTag: tag
};
P.absoluteValue = P.abs = function() {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
};
P.ceil = function() {
    return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
    var k, x = this, Ctor = x.constructor;
    min2 = new Ctor(min2);
    max2 = new Ctor(max2);
    if (!min2.s || !max2.s) return new Ctor(NaN);
    if (min2.gt(max2)) throw Error(invalidArgument + max2);
    k = x.cmp(min2);
    return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
    var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
    if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
    if (xs !== ys) return xs;
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
    xdL = xd.length;
    ydL = yd.length;
    for(i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i){
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.d) return new Ctor(NaN);
    if (!x.d[0]) return new Ctor(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;
    s = x.s * mathpow(x.s * x, 1 / 3);
    if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x.d);
        e = x.e;
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
            n = "5e" + e;
        } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x.s;
    } else {
        r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for(;;){
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x);
        r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
            n = n.slice(sd - 3, sd + 1);
            if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                    finalise(t, e + 1, 0);
                    if (t.times(t).times(t).eq(x)) {
                        r = t;
                        break;
                    }
                }
                sd += 4;
                rep = 1;
            } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    finalise(r, e + 1, 1);
                    m = !r.times(r).times(r).eq(x);
                }
                break;
            }
        }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
    var w, d = this.d, n = NaN;
    if (d) {
        w = d.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w = d[w];
        if (w) for(; w % 10 == 0; w /= 10)n--;
        if (n < 0) n = 0;
    }
    return n;
};
P.dividedBy = P.div = function(y) {
    return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
    var x = this, Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
    return this.cmp(y) === 0;
};
P.floor = function() {
    return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
    return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
    var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 32) {
        k = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k)).toString();
    } else {
        k = 16;
        n = "2.3283064365386962890625e-10";
    }
    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
    var cosh2_x, i = k, d8 = new Ctor(8);
    for(; i--;){
        cosh2_x = x.times(x);
        x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }
    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
    var k, pr, rm, len, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 3) {
        x = taylorSeries(Ctor, 2, x, x, true);
    } else {
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(1 / tinyPow(5, k));
        x = taylorSeries(Ctor, 2, x, x, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for(; k--;){
            sinh2_x = x.times(x);
            x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
    }
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;
    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
    var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
    if (k !== -1) {
        return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
    }
    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).minus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).plus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
    var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();
    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
    Ctor.precision = wpr = xsd - x.e;
    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
    Ctor.precision = pr + 4;
    Ctor.rounding = 1;
    x = x.ln();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(0.5);
};
P.inverseSine = P.asin = function() {
    var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
    if (x.isZero()) return new Ctor(x);
    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (k !== -1) {
        if (k === 0) {
            halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
            halfPi.s = x.s;
            return halfPi;
        }
        return new Ctor(NaN);
    }
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
};
P.inverseTangent = P.atan = function() {
    var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
    if (!x.isFinite()) {
        if (!x.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
            r = getPi(Ctor, pr + 4, rm).times(0.5);
            r.s = x.s;
            return r;
        }
    } else if (x.isZero()) {
        return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x.s;
        return r;
    }
    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;
    k = Math.min(28, wpr / LOG_BASE + 2 | 0);
    for(i = k; i; --i)x = x.div(x.times(x).plus(1).sqrt().plus(1));
    external = false;
    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;
    for(; i !== -1;){
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for(i = j; r.d[i] === t.d[i] && i--;);
    }
    if (k) r = r.times(2 << k - 1);
    external = true;
    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
    return !!this.d;
};
P.isInteger = P.isInt = function() {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
    return !this.s;
};
P.isNegative = P.isNeg = function() {
    return this.s < 0;
};
P.isPositive = P.isPos = function() {
    return this.s > 0;
};
P.isZero = function() {
    return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
    return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
    return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
    var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
    if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
    } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
    }
    d = arg.d;
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }
    if (isBase10) {
        if (d.length > 1) {
            inf = true;
        } else {
            for(k = d[0]; k % 10 === 0;)k /= 10;
            inf = k !== 1;
        }
    }
    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
    r = divide(num, denominator, sd, 1);
    if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
            sd += 10;
            num = naturalLogarithm(arg, sd);
            denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
            r = divide(num, denominator, sd, 1);
            if (!inf) {
                if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
                    r = finalise(r, pr + 1, 0);
                }
                break;
            }
        }while (checkRoundingDigits(r.d, k += 10, rm))
    }
    external = true;
    return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (x.d) y.s = -y.s;
        else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
        return y;
    }
    if (x.s != y.s) {
        y.s = -y.s;
        return x.plus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
    }
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);
    xd = xd.slice();
    k = xe - e;
    if (k) {
        xLTy = k < 0;
        if (xLTy) {
            d = xd;
            k = -k;
            len = yd.length;
        } else {
            d = yd;
            e = xe;
            len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
            k = i;
            d.length = 1;
        }
        d.reverse();
        for(i = k; i--;)d.push(0);
        d.reverse();
    } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for(i = 0; i < len; i++){
            if (xd[i] != yd[i]) {
                xLTy = xd[i] < yd[i];
                break;
            }
        }
        k = 0;
    }
    if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
    }
    len = xd.length;
    for(i = yd.length - len; i > 0; --i)xd[len++] = 0;
    for(i = yd.length; i > k;){
        if (xd[--i] < yd[i]) {
            for(j = i; j && xd[--j] === 0;)xd[j] = BASE - 1;
            --xd[j];
            xd[i] += BASE;
        }
        xd[i] -= yd[i];
    }
    for(; xd[--len] === 0;)xd.pop();
    for(; xd[0] === 0; xd.shift())--e;
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
    var q, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
    if (!y.d || x.d && !x.d[0]) {
        return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }
    external = false;
    if (Ctor.modulo == 9) {
        q = divide(x, y.abs(), 0, 3, 1);
        q.s *= y.s;
    } else {
        q = divide(x, y, 0, Ctor.modulo, 1);
    }
    q = q.times(y);
    external = true;
    return x.minus(q);
};
P.naturalExponential = P.exp = function() {
    return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
    return naturalLogarithm(this);
};
P.negated = P.neg = function() {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
};
P.plus = P.add = function(y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
        return y;
    }
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
        if (!yd[0]) y = new Ctor(x);
        return external ? finalise(y, pr, rm) : y;
    }
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);
    xd = xd.slice();
    i = k - e;
    if (i) {
        if (i < 0) {
            d = xd;
            i = -i;
            len = yd.length;
        } else {
            d = yd;
            e = k;
            len = xd.length;
        }
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
            i = len;
            d.length = 1;
        }
        d.reverse();
        for(; i--;)d.push(0);
        d.reverse();
    }
    len = xd.length;
    i = yd.length;
    if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
    }
    for(carry = 0; i;){
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
    }
    if (carry) {
        xd.unshift(carry);
        ++e;
    }
    for(len = xd.length; xd[--len] == 0;)xd.pop();
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
    var k, x = this;
    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
    if (x.d) {
        k = getPrecision(x.d);
        if (z && x.e + 1 > k) k = x.e + 1;
    } else {
        k = NaN;
    }
    return k;
};
P.round = function() {
    var x = this, Ctor = x.constructor;
    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = sine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
    var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
    if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }
    external = false;
    s = Math.sqrt(+x);
    if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0) n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
            n = "5e" + e;
        } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
    } else {
        r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for(;;){
        t = r;
        r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
            n = n.slice(sd - 3, sd + 1);
            if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                    finalise(t, e + 1, 0);
                    if (t.times(t).eq(x)) {
                        r = t;
                        break;
                    }
                }
                sd += 4;
                rep = 1;
            } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    finalise(r, e + 1, 1);
                    m = !r.times(r).eq(x);
                }
                break;
            }
        }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;
    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
    var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
    y.s *= x.s;
    if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
    }
    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;
    if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
    }
    r = [];
    rL = xdL + ydL;
    for(i = rL; i--;)r.push(0);
    for(i = ydL; --i >= 0;){
        carry = 0;
        for(k = xdL + i; k > i;){
            t = r[k] + yd[i] * xd[k - i - 1] + carry;
            r[k--] = t % BASE | 0;
            carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
    }
    for(; !r[--rL];)r.pop();
    if (carry) ++e;
    else r.shift();
    y.d = r;
    y.e = getBase10Exponent(r, e);
    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
    return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (dp === void 0) return x;
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
    var str, x = this, Ctor = x.constructor;
    if (dp === void 0) {
        str = finiteToString(x, true);
    } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), dp + 1, rm);
        str = finiteToString(x, true, dp + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
    var str, y, x = this, Ctor = x.constructor;
    if (dp === void 0) {
        str = finiteToString(x);
    } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x), dp + x.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
    if (!xd) return new Ctor(x);
    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);
    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
    if (maxD == null) {
        maxD = e > 0 ? d : n1;
    } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
    }
    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;
    for(;;){
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
    }
    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [
        n1,
        d1
    ] : [
        n0,
        d0
    ];
    Ctor.precision = pr;
    external = true;
    return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
    return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (y == null) {
        if (!x.d) return x;
        y = new Ctor(1);
        rm = Ctor.rounding;
    } else {
        y = new Ctor(y);
        if (rm === void 0) {
            rm = Ctor.rounding;
        } else {
            checkInt32(rm, 0, 8);
        }
        if (!x.d) return y.s ? x : y;
        if (!y.d) {
            if (y.s) y.s = x.s;
            return y;
        }
    }
    if (y.d[0]) {
        external = false;
        x = divide(x, y, 0, rm, 1).times(y);
        external = true;
        finalise(x);
    } else {
        y.s = x.s;
        x = y;
    }
    return x;
};
P.toNumber = function() {
    return +this;
};
P.toOctal = function(sd, rm) {
    return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
    var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
    x = new Ctor(x);
    if (x.eq(1)) return x;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (y.eq(1)) return finalise(x, pr, rm);
    e = mathfloor(y.e / LOG_BASE);
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }
    s = x.s;
    if (s < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if ((y.d[e] & 1) == 0) s = 1;
        if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
            x.s = s;
            return x;
        }
    }
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
    external = false;
    Ctor.rounding = x.s = 1;
    k = Math.min(12, (e + "").length);
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
    if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
            e = pr + 10;
            r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
            if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
                r = finalise(r, pr + 1, 0);
            }
        }
    }
    r.s = s;
    external = true;
    Ctor.rounding = rm;
    return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
    var str, x = this, Ctor = x.constructor;
    if (sd === void 0) {
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), sd, rm);
        str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
    var x = this, Ctor = x.constructor;
    if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
    } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
    }
    return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
    return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
    var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
    if (indexOfLastWord > 0) {
        str += w;
        for(i = 1; i < indexOfLastWord; i++){
            ws = d[i] + "";
            k = LOG_BASE - ws.length;
            if (k) str += getZeroString(k);
            str += ws;
        }
        w = d[i];
        ws = w + "";
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
    } else if (w === 0) {
        return "0";
    }
    for(; w % 10 === 0;)w /= 10;
    return str + w;
}
function checkInt32(i, min2, max2) {
    if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
    }
}
function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;
    for(k = d[0]; k >= 10; k /= 10)--i;
    if (--i < 0) {
        i += LOG_BASE;
        di = 0;
    } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
    }
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;
    if (repeating == null) {
        if (i < 3) {
            if (i == 0) rd = rd / 100 | 0;
            else if (i == 1) rd = rd / 10 | 0;
            r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
            r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        }
    } else {
        if (i < 4) {
            if (i == 0) rd = rd / 1e3 | 0;
            else if (i == 1) rd = rd / 100 | 0;
            else if (i == 2) rd = rd / 10 | 0;
            r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
            r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
    }
    return r;
}
function convertBase(str, baseIn, baseOut) {
    var j, arr = [
        0
    ], arrL, i = 0, strL = str.length;
    for(; i < strL;){
        for(arrL = arr.length; arrL--;)arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for(j = 0; j < arr.length; j++){
            if (arr[j] > baseOut - 1) {
                if (arr[j + 1] === void 0) arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
            }
        }
    }
    return arr.reverse();
}
function cosine(Ctor, x) {
    var k, len, y;
    if (x.isZero()) return x;
    len = x.d.length;
    if (len < 32) {
        k = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k)).toString();
    } else {
        k = 16;
        y = "2.3283064365386962890625e-10";
    }
    Ctor.precision += k;
    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
    for(var i = k; i--;){
        var cos2x = x.times(x);
        x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }
    Ctor.precision -= k;
    return x;
}
var divide = /* @__PURE__ */ function() {
    function multiplyInteger(x, k, base) {
        var temp, carry = 0, i = x.length;
        for(x = x.slice(); i--;){
            temp = x[i] * k + carry;
            x[i] = temp % base | 0;
            carry = temp / base | 0;
        }
        if (carry) x.unshift(carry);
        return x;
    }
    function compare(a, b, aL, bL) {
        var i, r;
        if (aL != bL) {
            r = aL > bL ? 1 : -1;
        } else {
            for(i = r = 0; i < aL; i++){
                if (a[i] != b[i]) {
                    r = a[i] > b[i] ? 1 : -1;
                    break;
                }
            }
        }
        return r;
    }
    function subtract(a, b, aL, base) {
        var i = 0;
        for(; aL--;){
            a[aL] -= i;
            i = a[aL] < b[aL] ? 1 : 0;
            a[aL] = i * base + a[aL] - b[aL];
        }
        for(; !a[0] && a.length > 1;)a.shift();
    }
    return function(x, y, pr, rm, dp, base) {
        var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
            return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
            !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
            xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
        }
        if (base) {
            logBase = 1;
            e = x.e - y.e;
        } else {
            base = BASE;
            logBase = LOG_BASE;
            e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for(i = 0; yd[i] == (xd[i] || 0); i++);
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
            sd = pr = Ctor.precision;
            rm = Ctor.rounding;
        } else if (dp) {
            sd = pr + (x.e - y.e) + 1;
        } else {
            sd = pr;
        }
        if (sd < 0) {
            qd.push(1);
            more = true;
        } else {
            sd = sd / logBase + 2 | 0;
            i = 0;
            if (yL == 1) {
                k = 0;
                yd = yd[0];
                sd++;
                for(; (i < xL || k) && sd--; i++){
                    t = k * base + (xd[i] || 0);
                    qd[i] = t / yd | 0;
                    k = t % yd | 0;
                }
                more = k || i < xL;
            } else {
                k = base / (yd[0] + 1) | 0;
                if (k > 1) {
                    yd = multiplyInteger(yd, k, base);
                    xd = multiplyInteger(xd, k, base);
                    yL = yd.length;
                    xL = xd.length;
                }
                xi = yL;
                rem = xd.slice(0, yL);
                remL = rem.length;
                for(; remL < yL;)rem[remL++] = 0;
                yz = yd.slice();
                yz.unshift(0);
                yd0 = yd[0];
                if (yd[1] >= base / 2) ++yd0;
                do {
                    k = 0;
                    cmp = compare(yd, rem, yL, remL);
                    if (cmp < 0) {
                        rem0 = rem[0];
                        if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                        k = rem0 / yd0 | 0;
                        if (k > 1) {
                            if (k >= base) k = base - 1;
                            prod = multiplyInteger(yd, k, base);
                            prodL = prod.length;
                            remL = rem.length;
                            cmp = compare(prod, rem, prodL, remL);
                            if (cmp == 1) {
                                k--;
                                subtract(prod, yL < prodL ? yz : yd, prodL, base);
                            }
                        } else {
                            if (k == 0) cmp = k = 1;
                            prod = yd.slice();
                        }
                        prodL = prod.length;
                        if (prodL < remL) prod.unshift(0);
                        subtract(rem, prod, remL, base);
                        if (cmp == -1) {
                            remL = rem.length;
                            cmp = compare(yd, rem, yL, remL);
                            if (cmp < 1) {
                                k++;
                                subtract(rem, yL < remL ? yz : yd, remL, base);
                            }
                        }
                        remL = rem.length;
                    } else if (cmp === 0) {
                        k++;
                        rem = [
                            0
                        ];
                    }
                    qd[i++] = k;
                    if (cmp && rem[0]) {
                        rem[remL++] = xd[xi] || 0;
                    } else {
                        rem = [
                            xd[xi]
                        ];
                        remL = 1;
                    }
                }while ((xi++ < xL || rem[0] !== void 0) && sd--)
                more = rem[0] !== void 0;
            }
            if (!qd[0]) qd.shift();
        }
        if (logBase == 1) {
            q.e = e;
            inexact = more;
        } else {
            for(i = 1, k = qd[0]; k >= 10; k /= 10)i++;
            q.e = i + e * logBase - 1;
            finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
    };
}();
function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
    out: if (sd != null) {
        xd = x.d;
        if (!xd) return x;
        for(digits = 1, k = xd[0]; k >= 10; k /= 10)digits++;
        i = sd - digits;
        if (i < 0) {
            i += LOG_BASE;
            j = sd;
            w = xd[xdi = 0];
            rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
            xdi = Math.ceil((i + 1) / LOG_BASE);
            k = xd.length;
            if (xdi >= k) {
                if (isTruncated) {
                    for(; k++ <= xdi;)xd.push(0);
                    w = rd = 0;
                    digits = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                } else {
                    break out;
                }
            } else {
                w = k = xd[xdi];
                for(digits = 1; k >= 10; k /= 10)digits++;
                i %= LOG_BASE;
                j = i - LOG_BASE + digits;
                rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
            }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
            xd.length = 0;
            if (roundUp) {
                sd -= x.e + 1;
                xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
                x.e = -sd || 0;
            } else {
                xd[0] = x.e = 0;
            }
            return x;
        }
        if (i == 0) {
            xd.length = xdi;
            k = 1;
            xdi--;
        } else {
            xd.length = xdi + 1;
            k = mathpow(10, LOG_BASE - i);
            xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
            for(;;){
                if (xdi == 0) {
                    for(i = 1, j = xd[0]; j >= 10; j /= 10)i++;
                    j = xd[0] += k;
                    for(k = 1; j >= 10; j /= 10)k++;
                    if (i != k) {
                        x.e++;
                        if (xd[0] == BASE) xd[0] = 1;
                    }
                    break;
                } else {
                    xd[xdi] += k;
                    if (xd[xdi] != BASE) break;
                    xd[xdi--] = 0;
                    k = 1;
                }
            }
        }
        for(i = xd.length; xd[--i] === 0;)xd.pop();
    }
    if (external) {
        if (x.e > Ctor.maxE) {
            x.d = null;
            x.e = NaN;
        } else if (x.e < Ctor.minE) {
            x.e = 0;
            x.d = [
                0
            ];
        }
    }
    return x;
}
function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k, e = x.e, str = digitsToString(x.d), len = str.length;
    if (isExp) {
        if (sd && (k = sd - len) > 0) {
            str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
            str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x.e < 0 ? "e" : "e+") + x.e;
    } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
    } else {
        if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
        if (sd && (k = sd - len) > 0) {
            if (e + 1 === len) str += ".";
            str += getZeroString(k);
        }
    }
    return str;
}
function getBase10Exponent(digits, e) {
    var w = digits[0];
    for(e *= LOG_BASE; w >= 10; w /= 10)e++;
    return e;
}
function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
    var w = digits.length - 1, len = w * LOG_BASE + 1;
    w = digits[w];
    if (w) {
        for(; w % 10 == 0; w /= 10)len--;
        for(w = digits[0]; w >= 10; w /= 10)len++;
    }
    return len;
}
function getZeroString(k) {
    var zs = "";
    for(; k--;)zs += "0";
    return zs;
}
function intPow(Ctor, x, n, pr) {
    var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for(;;){
        if (n % 2) {
            r = r.times(x);
            if (truncate(r.d, k)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
            n = r.d.length - 1;
            if (isTruncated && r.d[n] === 0) ++r.d[n];
            break;
        }
        x = x.times(x);
        truncate(x.d, k);
    }
    external = true;
    return r;
}
function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
    var k, y, x = new Ctor(args[0]), i = 0;
    for(; ++i < args.length;){
        y = new Ctor(args[i]);
        if (!y.s) {
            x = y;
            break;
        }
        k = x.cmp(y);
        if (k === n || k === 0 && x.s === n) {
            x = y;
        }
    }
    return x;
}
function naturalExponential(x, sd) {
    var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    if (!x.d || !x.d[0] || x.e > 17) {
        return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }
    if (sd == null) {
        external = false;
        wpr = pr;
    } else {
        wpr = sd;
    }
    t = new Ctor(0.03125);
    while(x.e > -2){
        x = x.times(t);
        k += 5;
    }
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow2 = sum2 = new Ctor(1);
    Ctor.precision = wpr;
    for(;;){
        pow2 = finalise(pow2.times(x), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
            j = k;
            while(j--)sum2 = finalise(sum2.times(sum2), wpr, 1);
            if (sd == null) {
                if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
                    Ctor.precision = wpr += 10;
                    denominator = pow2 = t = new Ctor(1);
                    i = 0;
                    rep++;
                } else {
                    return finalise(sum2, Ctor.precision = pr, rm, external = true);
                }
            } else {
                Ctor.precision = pr;
                return sum2;
            }
        }
        sum2 = t;
    }
}
function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }
    if (sd == null) {
        external = false;
        wpr = pr;
    } else {
        wpr = sd;
    }
    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);
    if (Math.abs(e = x.e) < 15e14) {
        while(c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3){
            x = x.times(y);
            c = digitsToString(x.d);
            c0 = c.charAt(0);
            n++;
        }
        e = x.e;
        if (c0 > 1) {
            x = new Ctor("0." + c);
            e++;
        } else {
            x = new Ctor(c0 + "." + c.slice(1));
        }
    } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x, pr, rm, external = true) : x;
    }
    x1 = x;
    sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;
    for(;;){
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
            sum2 = sum2.times(2);
            if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
            sum2 = divide(sum2, new Ctor(n), wpr, 1);
            if (sd == null) {
                if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
                    Ctor.precision = wpr += guard;
                    t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
                    x2 = finalise(x.times(x), wpr, 1);
                    denominator = rep = 1;
                } else {
                    return finalise(sum2, Ctor.precision = pr, rm, external = true);
                }
            } else {
                Ctor.precision = pr;
                return sum2;
            }
        }
        sum2 = t;
        denominator += 2;
    }
}
function nonFiniteToString(x) {
    return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
    var e, i, len;
    if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
    if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
    } else if (e < 0) {
        e = str.length;
    }
    for(i = 0; str.charCodeAt(i) === 48; i++);
    for(len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);
    if (str) {
        len -= i;
        x.e = e = e - i - 1;
        x.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
            if (i) x.d.push(+str.slice(0, i));
            for(len -= LOG_BASE; i < len;)x.d.push(+str.slice(i, i += LOG_BASE));
            str = str.slice(i);
            i = LOG_BASE - str.length;
        } else {
            i -= len;
        }
        for(; i--;)str += "0";
        x.d.push(+str);
        if (external) {
            if (x.e > x.constructor.maxE) {
                x.d = null;
                x.e = NaN;
            } else if (x.e < x.constructor.minE) {
                x.e = 0;
                x.d = [
                    0
                ];
            }
        }
    } else {
        x.e = 0;
        x.d = [
            0
        ];
    }
    return x;
}
function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
    if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str)) return parseDecimal(x, str);
    } else if (str === "Infinity" || str === "NaN") {
        if (!+str) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return x;
    }
    if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
    } else if (isBinary.test(str)) {
        base = 2;
    } else if (isOctal.test(str)) {
        base = 8;
    } else {
        throw Error(invalidArgument + str);
    }
    i = str.search(/p/i);
    if (i > 0) {
        p = +str.slice(i + 1);
        str = str.substring(2, i);
    } else {
        str = str.slice(2);
    }
    i = str.indexOf(".");
    isFloat = i >= 0;
    Ctor = x.constructor;
    if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }
    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;
    for(i = xe; xd[i] === 0; --i)xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;
    if (isFloat) x = divide(x, divisor, len * 4);
    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;
    return x;
}
function sine(Ctor, x) {
    var k, len = x.d.length;
    if (len < 3) {
        return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
    }
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);
    var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for(; k--;){
        sin2_x = x.times(x);
        x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }
    return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
    external = false;
    x2 = x.times(x);
    u = new Ctor(y);
    for(;;){
        t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
            for(j = k; t.d[j] === u.d[j] && j--;);
            if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
    }
    external = true;
    t.d.length = k + 1;
    return t;
}
function tinyPow(b, e) {
    var n = b;
    while(--e)n *= b;
    return n;
}
function toLessThanHalfPi(Ctor, x) {
    var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
    x = x.abs();
    if (x.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x;
    }
    t = x.divToInt(pi);
    if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
    } else {
        x = x.minus(t.times(pi));
        if (x.lte(halfPi)) {
            quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
            return x;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
    }
    return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
    if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
    } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
    }
    if (!x.isFinite()) {
        str = nonFiniteToString(x);
    } else {
        str = finiteToString(x);
        i = str.indexOf(".");
        if (isExp) {
            base = 2;
            if (baseOut == 16) {
                sd = sd * 4 - 3;
            } else if (baseOut == 8) {
                sd = sd * 3 - 2;
            }
        } else {
            base = baseOut;
        }
        if (i >= 0) {
            str = str.replace(".", "");
            y = new Ctor(1);
            y.e = str.length - i;
            y.d = convertBase(finiteToString(y), 10, base);
            y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for(; xd[--len] == 0;)xd.pop();
        if (!xd[0]) {
            str = isExp ? "0p+0" : "0";
        } else {
            if (i < 0) {
                e--;
            } else {
                x = new Ctor(x);
                x.d = xd;
                x.e = e;
                x = divide(x, y, sd, rm, 0, base);
                xd = x.d;
                e = x.e;
                roundUp = inexact;
            }
            i = xd[sd];
            k = base / 2;
            roundUp = roundUp || xd[sd + 1] !== void 0;
            roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
            xd.length = sd;
            if (roundUp) {
                for(; ++xd[--sd] > base - 1;){
                    xd[sd] = 0;
                    if (!sd) {
                        ++e;
                        xd.unshift(1);
                    }
                }
            }
            for(len = xd.length; !xd[len - 1]; --len);
            for(i = 0, str = ""; i < len; i++)str += NUMERALS.charAt(xd[i]);
            if (isExp) {
                if (len > 1) {
                    if (baseOut == 16 || baseOut == 8) {
                        i = baseOut == 16 ? 4 : 3;
                        for(--len; len % i; len++)str += "0";
                        xd = convertBase(str, base, baseOut);
                        for(len = xd.length; !xd[len - 1]; --len);
                        for(i = 1, str = "1."; i < len; i++)str += NUMERALS.charAt(xd[i]);
                    } else {
                        str = str.charAt(0) + "." + str.slice(1);
                    }
                }
                str = str + (e < 0 ? "p" : "p+") + e;
            } else if (e < 0) {
                for(; ++e;)str = "0" + str;
                str = "0." + str;
            } else {
                if (++e > len) for(e -= len; e--;)str += "0";
                else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
            }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
    }
    return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
    if (arr.length > len) {
        arr.length = len;
        return true;
    }
}
function abs(x) {
    return new this(x).abs();
}
function acos(x) {
    return new this(x).acos();
}
function acosh(x) {
    return new this(x).acosh();
}
function add(x, y) {
    return new this(x).plus(y);
}
function asin(x) {
    return new this(x).asin();
}
function asinh(x) {
    return new this(x).asinh();
}
function atan(x) {
    return new this(x).atan();
}
function atanh(x) {
    return new this(x).atanh();
}
function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
    if (!y.s || !x.s) {
        r = new this(NaN);
    } else if (!y.d && !x.d) {
        r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
    } else if (!x.d || y.isZero()) {
        r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
    } else if (!y.d || x.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
    } else if (x.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x, wpr, 1));
        x = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
        r = this.atan(divide(y, x, wpr, 1));
    }
    return r;
}
function cbrt(x) {
    return new this(x).cbrt();
}
function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
    return new this(x).clamp(min2, max2);
}
function config(obj) {
    if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
    var i, p, v, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
    ];
    for(i = 0; i < ps.length; i += 3){
        if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
        if ((v = obj[p]) !== void 0) {
            if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
            else throw Error(invalidArgument + p + ": " + v);
        }
    }
    if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
            if (v) {
                if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    this[p] = true;
                } else {
                    throw Error(cryptoUnavailable);
                }
            } else {
                this[p] = false;
            }
        } else {
            throw Error(invalidArgument + p + ": " + v);
        }
    }
    return this;
}
function cos(x) {
    return new this(x).cos();
}
function cosh(x) {
    return new this(x).cosh();
}
function clone(obj) {
    var i, p, ps;
    function Decimal2(v) {
        var e, i2, t, x = this;
        if (!(x instanceof Decimal2)) return new Decimal2(v);
        x.constructor = Decimal2;
        if (isDecimalInstance(v)) {
            x.s = v.s;
            if (external) {
                if (!v.d || v.e > Decimal2.maxE) {
                    x.e = NaN;
                    x.d = null;
                } else if (v.e < Decimal2.minE) {
                    x.e = 0;
                    x.d = [
                        0
                    ];
                } else {
                    x.e = v.e;
                    x.d = v.d.slice();
                }
            } else {
                x.e = v.e;
                x.d = v.d ? v.d.slice() : v.d;
            }
            return;
        }
        t = typeof v;
        if (t === "number") {
            if (v === 0) {
                x.s = 1 / v < 0 ? -1 : 1;
                x.e = 0;
                x.d = [
                    0
                ];
                return;
            }
            if (v < 0) {
                v = -v;
                x.s = -1;
            } else {
                x.s = 1;
            }
            if (v === ~~v && v < 1e7) {
                for(e = 0, i2 = v; i2 >= 10; i2 /= 10)e++;
                if (external) {
                    if (e > Decimal2.maxE) {
                        x.e = NaN;
                        x.d = null;
                    } else if (e < Decimal2.minE) {
                        x.e = 0;
                        x.d = [
                            0
                        ];
                    } else {
                        x.e = e;
                        x.d = [
                            v
                        ];
                    }
                } else {
                    x.e = e;
                    x.d = [
                        v
                    ];
                }
                return;
            }
            if (v * 0 !== 0) {
                if (!v) x.s = NaN;
                x.e = NaN;
                x.d = null;
                return;
            }
            return parseDecimal(x, v.toString());
        }
        if (t === "string") {
            if ((i2 = v.charCodeAt(0)) === 45) {
                v = v.slice(1);
                x.s = -1;
            } else {
                if (i2 === 43) v = v.slice(1);
                x.s = 1;
            }
            return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
        }
        if (t === "bigint") {
            if (v < 0) {
                v = -v;
                x.s = -1;
            } else {
                x.s = 1;
            }
            return parseDecimal(x, v.toString());
        }
        throw Error(invalidArgument + v);
    }
    Decimal2.prototype = P;
    Decimal2.ROUND_UP = 0;
    Decimal2.ROUND_DOWN = 1;
    Decimal2.ROUND_CEIL = 2;
    Decimal2.ROUND_FLOOR = 3;
    Decimal2.ROUND_HALF_UP = 4;
    Decimal2.ROUND_HALF_DOWN = 5;
    Decimal2.ROUND_HALF_EVEN = 6;
    Decimal2.ROUND_HALF_CEIL = 7;
    Decimal2.ROUND_HALF_FLOOR = 8;
    Decimal2.EUCLID = 9;
    Decimal2.config = Decimal2.set = config;
    Decimal2.clone = clone;
    Decimal2.isDecimal = isDecimalInstance;
    Decimal2.abs = abs;
    Decimal2.acos = acos;
    Decimal2.acosh = acosh;
    Decimal2.add = add;
    Decimal2.asin = asin;
    Decimal2.asinh = asinh;
    Decimal2.atan = atan;
    Decimal2.atanh = atanh;
    Decimal2.atan2 = atan2;
    Decimal2.cbrt = cbrt;
    Decimal2.ceil = ceil;
    Decimal2.clamp = clamp;
    Decimal2.cos = cos;
    Decimal2.cosh = cosh;
    Decimal2.div = div;
    Decimal2.exp = exp;
    Decimal2.floor = floor;
    Decimal2.hypot = hypot;
    Decimal2.ln = ln;
    Decimal2.log = log;
    Decimal2.log10 = log10;
    Decimal2.log2 = log2;
    Decimal2.max = max;
    Decimal2.min = min;
    Decimal2.mod = mod;
    Decimal2.mul = mul;
    Decimal2.pow = pow;
    Decimal2.random = random;
    Decimal2.round = round;
    Decimal2.sign = sign;
    Decimal2.sin = sin;
    Decimal2.sinh = sinh;
    Decimal2.sqrt = sqrt;
    Decimal2.sub = sub;
    Decimal2.sum = sum;
    Decimal2.tan = tan;
    Decimal2.tanh = tanh;
    Decimal2.trunc = trunc;
    if (obj === void 0) obj = {};
    if (obj) {
        if (obj.defaults !== true) {
            ps = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto"
            ];
            for(i = 0; i < ps.length;)if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
        }
    }
    Decimal2.config(obj);
    return Decimal2;
}
function div(x, y) {
    return new this(x).div(y);
}
function exp(x) {
    return new this(x).exp();
}
function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
    var i, n, t = new this(0);
    external = false;
    for(i = 0; i < arguments.length;){
        n = new this(arguments[i++]);
        if (!n.d) {
            if (n.s) {
                external = true;
                return new this(1 / 0);
            }
            t = n;
        } else if (t.d) {
            t = t.plus(n.times(n));
        }
    }
    external = true;
    return t.sqrt();
}
function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
    return new this(x).ln();
}
function log(x, y) {
    return new this(x).log(y);
}
function log2(x) {
    return new this(x).log(2);
}
function log10(x) {
    return new this(x).log(10);
}
function max() {
    return maxOrMin(this, arguments, -1);
}
function min() {
    return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
    return new this(x).mod(y);
}
function mul(x, y) {
    return new this(x).mul(y);
}
function pow(x, y) {
    return new this(x).pow(y);
}
function random(sd) {
    var d, e, k, n, i = 0, r = new this(1), rd = [];
    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);
    k = Math.ceil(sd / LOG_BASE);
    if (!this.crypto) {
        for(; i < k;)rd[i++] = Math.random() * 1e7 | 0;
    } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k));
        for(; i < k;){
            n = d[i];
            if (n >= 429e7) {
                d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
            } else {
                rd[i++] = n % 1e7;
            }
        }
    } else if (crypto.randomBytes) {
        d = crypto.randomBytes(k *= 4);
        for(; i < k;){
            n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
            if (n >= 214e7) {
                crypto.randomBytes(4).copy(d, i);
            } else {
                rd.push(n % 1e7);
                i += 4;
            }
        }
        i = k / 4;
    } else {
        throw Error(cryptoUnavailable);
    }
    k = rd[--i];
    sd %= LOG_BASE;
    if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
    }
    for(; rd[i] === 0; i--)rd.pop();
    if (i < 0) {
        e = 0;
        rd = [
            0
        ];
    } else {
        e = -1;
        for(; rd[0] === 0; e -= LOG_BASE)rd.shift();
        for(k = 1, n = rd[0]; n >= 10; n /= 10)k++;
        if (k < LOG_BASE) e -= LOG_BASE - k;
    }
    r.e = e;
    r.d = rd;
    return r;
}
function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
    x = new this(x);
    return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
    return new this(x).sin();
}
function sinh(x) {
    return new this(x).sinh();
}
function sqrt(x) {
    return new this(x).sqrt();
}
function sub(x, y) {
    return new this(x).sub(y);
}
function sum() {
    var i = 0, args = arguments, x = new this(args[i]);
    external = false;
    for(; x.s && ++i < args.length;)x = x.plus(args[i]);
    external = true;
    return finalise(x, this.precision, this.rounding);
}
function tan(x) {
    return new this(x).tan();
}
function tanh(x) {
    return new this(x).tanh();
}
function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
// ../../node_modules/.pnpm/sql-template-tag@5.2.1/node_modules/sql-template-tag/dist/index.js
var Sql = class _Sql {
    constructor(rawStrings, rawValues){
        if (rawStrings.length - 1 !== rawValues.length) {
            if (rawStrings.length === 0) {
                throw new TypeError("Expected at least 1 string");
            }
            throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
        }
        const valuesLength = rawValues.reduce((len, value)=>len + (value instanceof _Sql ? value.values.length : 1), 0);
        this.values = new Array(valuesLength);
        this.strings = new Array(valuesLength + 1);
        this.strings[0] = rawStrings[0];
        let i = 0, pos = 0;
        while(i < rawValues.length){
            const child = rawValues[i++];
            const rawString = rawStrings[i];
            if (child instanceof _Sql) {
                this.strings[pos] += child.strings[0];
                let childIndex = 0;
                while(childIndex < child.values.length){
                    this.values[pos++] = child.values[childIndex++];
                    this.strings[pos] = child.strings[childIndex];
                }
                this.strings[pos] += rawString;
            } else {
                this.values[pos++] = child;
                this.strings[pos] = rawString;
            }
        }
    }
    get sql() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while(i < len)value += `?${this.strings[i++]}`;
        return value;
    }
    get statement() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while(i < len)value += `:${i}${this.strings[i++]}`;
        return value;
    }
    get text() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while(i < len)value += `$${i}${this.strings[i++]}`;
        return value;
    }
    inspect() {
        return {
            sql: this.sql,
            statement: this.statement,
            text: this.text,
            values: this.values
        };
    }
};
function join(values, separator = ",", prefix = "", suffix = "") {
    if (values.length === 0) {
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    }
    return new Sql([
        prefix,
        ...Array(values.length - 1).fill(separator),
        suffix
    ], values);
}
function raw(value) {
    return new Sql([
        value
    ], []);
}
var empty = raw("");
function sql(strings, ...values) {
    return new Sql(strings, values);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AnyNull,
    AnyNullClass,
    DbNull,
    DbNullClass,
    Decimal,
    JsonNull,
    JsonNullClass,
    NullTypes,
    ObjectEnumValue,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Sql,
    empty,
    hasBatchIndex,
    isAnyNull,
    isDbNull,
    isJsonNull,
    join,
    raw,
    sql
}); /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/ 
}),
"[externals]/@libsql/client [external] (@libsql/client, esm_import, [project]/node_modules/.bun/@libsql+client@0.8.1/node_modules/@libsql/client)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@libsql/client-6c9beb43792741da");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/.bun/@prisma+debug@7.3.0/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/node_modules/.bun/@prisma+driver-adapter-utils@7.3.0/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
// src/debug.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$debug$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@prisma+debug@7.3.0/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$debug$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    return {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/node_modules/.bun/async-mutex@0.5.0/node_modules/async-mutex/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "E_ALREADY_LOCKED",
    ()=>E_ALREADY_LOCKED,
    "E_CANCELED",
    ()=>E_CANCELED,
    "E_TIMEOUT",
    ()=>E_TIMEOUT,
    "Mutex",
    ()=>Mutex,
    "Semaphore",
    ()=>Semaphore,
    "tryAcquire",
    ()=>tryAcquire,
    "withTimeout",
    ()=>withTimeout
]);
const E_TIMEOUT = new Error('timeout while waiting for mutex to become available');
const E_ALREADY_LOCKED = new Error('mutex already locked');
const E_CANCELED = new Error('request for lock canceled');
var __awaiter$2 = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Semaphore {
    constructor(_value, _cancelError = E_CANCELED){
        this._value = _value;
        this._cancelError = _cancelError;
        this._queue = [];
        this._weightedWaiters = [];
    }
    acquire(weight = 1, priority = 0) {
        if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
        return new Promise((resolve, reject)=>{
            const task = {
                resolve,
                reject,
                weight,
                priority
            };
            const i = findIndexFromEnd(this._queue, (other)=>priority <= other.priority);
            if (i === -1 && weight <= this._value) {
                // Needs immediate dispatch, skip the queue
                this._dispatchItem(task);
            } else {
                this._queue.splice(i + 1, 0, task);
            }
        });
    }
    runExclusive(callback_1) {
        return __awaiter$2(this, arguments, void 0, function*(callback, weight = 1, priority = 0) {
            const [value, release] = yield this.acquire(weight, priority);
            try {
                return yield callback(value);
            } finally{
                release();
            }
        });
    }
    waitForUnlock(weight = 1, priority = 0) {
        if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
        if (this._couldLockImmediately(weight, priority)) {
            return Promise.resolve();
        } else {
            return new Promise((resolve)=>{
                if (!this._weightedWaiters[weight - 1]) this._weightedWaiters[weight - 1] = [];
                insertSorted(this._weightedWaiters[weight - 1], {
                    resolve,
                    priority
                });
            });
        }
    }
    isLocked() {
        return this._value <= 0;
    }
    getValue() {
        return this._value;
    }
    setValue(value) {
        this._value = value;
        this._dispatchQueue();
    }
    release(weight = 1) {
        if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
        this._value += weight;
        this._dispatchQueue();
    }
    cancel() {
        this._queue.forEach((entry)=>entry.reject(this._cancelError));
        this._queue = [];
    }
    _dispatchQueue() {
        this._drainUnlockWaiters();
        while(this._queue.length > 0 && this._queue[0].weight <= this._value){
            this._dispatchItem(this._queue.shift());
            this._drainUnlockWaiters();
        }
    }
    _dispatchItem(item) {
        const previousValue = this._value;
        this._value -= item.weight;
        item.resolve([
            previousValue,
            this._newReleaser(item.weight)
        ]);
    }
    _newReleaser(weight) {
        let called = false;
        return ()=>{
            if (called) return;
            called = true;
            this.release(weight);
        };
    }
    _drainUnlockWaiters() {
        if (this._queue.length === 0) {
            for(let weight = this._value; weight > 0; weight--){
                const waiters = this._weightedWaiters[weight - 1];
                if (!waiters) continue;
                waiters.forEach((waiter)=>waiter.resolve());
                this._weightedWaiters[weight - 1] = [];
            }
        } else {
            const queuedPriority = this._queue[0].priority;
            for(let weight = this._value; weight > 0; weight--){
                const waiters = this._weightedWaiters[weight - 1];
                if (!waiters) continue;
                const i = waiters.findIndex((waiter)=>waiter.priority <= queuedPriority);
                (i === -1 ? waiters : waiters.splice(0, i)).forEach((waiter)=>waiter.resolve());
            }
        }
    }
    _couldLockImmediately(weight, priority) {
        return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
    }
}
function insertSorted(a, v) {
    const i = findIndexFromEnd(a, (other)=>v.priority <= other.priority);
    a.splice(i + 1, 0, v);
}
function findIndexFromEnd(a, predicate) {
    for(let i = a.length - 1; i >= 0; i--){
        if (predicate(a[i])) {
            return i;
        }
    }
    return -1;
}
var __awaiter$1 = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Mutex {
    constructor(cancelError){
        this._semaphore = new Semaphore(1, cancelError);
    }
    acquire() {
        return __awaiter$1(this, arguments, void 0, function*(priority = 0) {
            const [, releaser] = yield this._semaphore.acquire(1, priority);
            return releaser;
        });
    }
    runExclusive(callback, priority = 0) {
        return this._semaphore.runExclusive(()=>callback(), 1, priority);
    }
    isLocked() {
        return this._semaphore.isLocked();
    }
    waitForUnlock(priority = 0) {
        return this._semaphore.waitForUnlock(1, priority);
    }
    release() {
        if (this._semaphore.isLocked()) this._semaphore.release();
    }
    cancel() {
        return this._semaphore.cancel();
    }
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function withTimeout(sync, timeout, timeoutError = E_TIMEOUT) {
    return {
        acquire: (weightOrPriority, priority)=>{
            let weight;
            if (isSemaphore(sync)) {
                weight = weightOrPriority;
            } else {
                weight = undefined;
                priority = weightOrPriority;
            }
            if (weight !== undefined && weight <= 0) {
                throw new Error(`invalid weight ${weight}: must be positive`);
            }
            return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                    let isTimeout = false;
                    const handle = setTimeout(()=>{
                        isTimeout = true;
                        reject(timeoutError);
                    }, timeout);
                    try {
                        const ticket = yield isSemaphore(sync) ? sync.acquire(weight, priority) : sync.acquire(priority);
                        if (isTimeout) {
                            const release = Array.isArray(ticket) ? ticket[1] : ticket;
                            release();
                        } else {
                            clearTimeout(handle);
                            resolve(ticket);
                        }
                    } catch (e) {
                        if (!isTimeout) {
                            clearTimeout(handle);
                            reject(e);
                        }
                    }
                }));
        },
        runExclusive (callback, weight, priority) {
            return __awaiter(this, void 0, void 0, function*() {
                let release = ()=>undefined;
                try {
                    const ticket = yield this.acquire(weight, priority);
                    if (Array.isArray(ticket)) {
                        release = ticket[1];
                        return yield callback(ticket[0]);
                    } else {
                        release = ticket;
                        return yield callback();
                    }
                } finally{
                    release();
                }
            });
        },
        release (weight) {
            sync.release(weight);
        },
        cancel () {
            return sync.cancel();
        },
        waitForUnlock: (weightOrPriority, priority)=>{
            let weight;
            if (isSemaphore(sync)) {
                weight = weightOrPriority;
            } else {
                weight = undefined;
                priority = weightOrPriority;
            }
            if (weight !== undefined && weight <= 0) {
                throw new Error(`invalid weight ${weight}: must be positive`);
            }
            return new Promise((resolve, reject)=>{
                const handle = setTimeout(()=>reject(timeoutError), timeout);
                (isSemaphore(sync) ? sync.waitForUnlock(weight, priority) : sync.waitForUnlock(priority)).then(()=>{
                    clearTimeout(handle);
                    resolve();
                });
            });
        },
        isLocked: ()=>sync.isLocked(),
        getValue: ()=>sync.getValue(),
        setValue: (value)=>sync.setValue(value)
    };
}
function isSemaphore(sync) {
    return sync.getValue !== undefined;
}
// eslint-disable-next-lisne @typescript-eslint/explicit-module-boundary-types
function tryAcquire(sync, alreadyAcquiredError = E_ALREADY_LOCKED) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return withTimeout(sync, 0, alreadyAcquiredError);
}
;
}),
"[project]/node_modules/.bun/@prisma+adapter-libsql@7.3.0/node_modules/@prisma/adapter-libsql/dist/index-node.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "PrismaLibSql",
    ()=>PrismaLibSqlAdapterFactory
]);
// src/libsql-node.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$bun$2f40$libsql$2b$client$40$0$2e$8$2e$1$2f$node_modules$2f40$libsql$2f$client$29$__ = __turbopack_context__.i("[externals]/@libsql/client [external] (@libsql/client, esm_import, [project]/node_modules/.bun/@libsql+client@0.8.1/node_modules/@libsql/client)");
// src/libsql.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$debug$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@prisma+debug@7.3.0/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@prisma+driver-adapter-utils@7.3.0/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$async$2d$mutex$40$0$2e$5$2e$0$2f$node_modules$2f$async$2d$mutex$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/async-mutex@0.5.0/node_modules/async-mutex/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$bun$2f40$libsql$2b$client$40$0$2e$8$2e$1$2f$node_modules$2f40$libsql$2f$client$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$bun$2f40$libsql$2b$client$40$0$2e$8$2e$1$2f$node_modules$2f40$libsql$2f$client$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// package.json
var name = "@prisma/adapter-libsql";
;
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$debug$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:libsql:conversion");
function mapDeclType(declType) {
    switch(declType.toUpperCase()){
        case "":
            return null;
        case "DECIMAL":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case "FLOAT":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case "DOUBLE":
        case "DOUBLE PRECISION":
        case "NUMERIC":
        case "REAL":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case "TINYINT":
        case "SMALLINT":
        case "MEDIUMINT":
        case "INT":
        case "INTEGER":
        case "SERIAL":
        case "INT2":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case "BIGINT":
        case "UNSIGNED BIG INT":
        case "INT8":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case "DATETIME":
        case "TIMESTAMP":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case "TIME":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case "DATE":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case "TEXT":
        case "CLOB":
        case "CHARACTER":
        case "VARCHAR":
        case "VARYING CHARACTER":
        case "NCHAR":
        case "NATIVE CHARACTER":
        case "NVARCHAR":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case "BLOB":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case "BOOLEAN":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case "JSONB":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        default:
            debug("unknown decltype:", declType);
            return null;
    }
}
function mapDeclaredColumnTypes(columnTypes) {
    const emptyIndices = /* @__PURE__ */ new Set();
    const result = columnTypes.map((typeName, index)=>{
        const mappedType = mapDeclType(typeName);
        if (mappedType === null) {
            emptyIndices.add(index);
        }
        return mappedType;
    });
    return [
        result,
        emptyIndices
    ];
}
function getColumnTypes(declaredTypes, rows) {
    const [columnTypes, emptyIndices] = mapDeclaredColumnTypes(declaredTypes);
    if (emptyIndices.size === 0) {
        return columnTypes;
    }
    columnLoop: for (const columnIndex of emptyIndices){
        for(let rowIndex = 0; rowIndex < rows.length; rowIndex++){
            const candidateValue = rows[rowIndex][columnIndex];
            if (candidateValue !== null) {
                columnTypes[columnIndex] = inferColumnType(candidateValue);
                continue columnLoop;
            }
        }
        columnTypes[columnIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
    }
    return columnTypes;
}
function inferColumnType(value) {
    switch(typeof value){
        case "string":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case "bigint":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case "boolean":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case "number":
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UnknownNumber;
        case "object":
            return inferObjectType(value);
        default:
            throw new UnexpectedTypeError(value);
    }
}
function inferObjectType(value) {
    if (value instanceof ArrayBuffer) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
    }
    throw new UnexpectedTypeError(value);
}
var UnexpectedTypeError = class extends Error {
    name = "UnexpectedTypeError";
    constructor(value){
        const type = typeof value;
        const repr = type === "object" ? JSON.stringify(value) : String(value);
        super(`unexpected value of type ${type}: ${repr}`);
    }
};
function mapRow(row, columnTypes) {
    const result = [];
    for(let i = 0; i < row.length; i++){
        const value = row[i];
        if (value instanceof ArrayBuffer) {
            result[i] = new Uint8Array(value);
            continue;
        }
        if (typeof value === "number" && (columnTypes[i] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32 || columnTypes[i] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64) && !Number.isInteger(value)) {
            result[i] = Math.trunc(value);
            continue;
        }
        if ([
            "number",
            "bigint"
        ].includes(typeof value) && columnTypes[i] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime) {
            result[i] = new Date(Number(value)).toISOString();
            continue;
        }
        if (typeof value === "bigint") {
            result[i] = value.toString();
            continue;
        }
        result[i] = value;
    }
    return result;
}
function mapArg(arg, argType, options) {
    if (arg === null) {
        return null;
    }
    if (typeof arg === "string" && argType.scalarType === "bigint") {
        return BigInt(arg);
    }
    if (typeof arg === "string" && argType.scalarType === "decimal") {
        return Number.parseFloat(arg);
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        const format = options?.timestampFormat ?? "iso8601";
        switch(format){
            case "unixepoch-ms":
                return arg.getTime();
            case "iso8601":
                return arg.toISOString().replace("Z", "+00:00");
            default:
                throw new Error(`Unknown timestamp format: ${format}`);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return Buffer.from(arg, "base64");
    }
    return arg;
}
// src/errors.ts
var SQLITE_BUSY = 5;
var PRIMARY_ERROR_CODE_MASK = 255;
function convertDriverError(error) {
    if (isDriverError(error)) {
        return {
            originalCode: error.rawCode?.toString(),
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    const rawCode = error.rawCode ?? error.cause?.["rawCode"] ?? 1;
    switch(rawCode){
        case 2067:
        case 1555:
            {
                const fields = error.message.split("constraint failed: ").at(1)?.split(", ").map((field)=>field.split(".").pop());
                return {
                    kind: "UniqueConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case 1299:
            {
                const fields = error.message.split("constraint failed: ").at(1)?.split(", ").map((field)=>field.split(".").pop());
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case 787:
        case 1811:
            return {
                kind: "ForeignKeyConstraintViolation",
                constraint: {
                    foreignKey: {}
                }
            };
        default:
            if (rawCode && (rawCode & PRIMARY_ERROR_CODE_MASK) === SQLITE_BUSY) {
                return {
                    kind: "SocketTimeout"
                };
            } else if (error.message.startsWith("no such table")) {
                return {
                    kind: "TableDoesNotExist",
                    table: error.message.split(": ").at(1)
                };
            } else if (error.message.startsWith("no such column")) {
                return {
                    kind: "ColumnNotFound",
                    column: error.message.split(": ").at(1)
                };
            } else if (error.message.includes("has no column named ")) {
                return {
                    kind: "ColumnNotFound",
                    column: error.message.split("has no column named ").at(1)
                };
            }
            return {
                kind: "sqlite",
                extendedCode: rawCode,
                message: error.message
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && (typeof error.rawCode === "number" || error.rawCode === void 0);
}
// src/libsql.ts
var debug2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$debug$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:libsql");
var LOCK_TAG = Symbol();
var LibSqlQueryable = class {
    constructor(client, adapterOptions){
        this.client = client;
        this.adapterOptions = adapterOptions;
    }
    provider = "sqlite";
    adapterName = name;
    [LOCK_TAG] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$async$2d$mutex$40$0$2e$5$2e$0$2f$node_modules$2f$async$2d$mutex$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Mutex"]();
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug2(`${tag} %O`, query);
        const { columns, rows, columnTypes: declaredColumnTypes } = await this.performIO(query);
        const columnTypes = getColumnTypes(declaredColumnTypes, rows);
        return {
            columnNames: columns,
            columnTypes,
            rows: rows.map((row)=>mapRow(row, columnTypes))
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug2(`${tag} %O`, query);
        return (await this.performIO(query)).rowsAffected ?? 0;
    }
    /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */ async performIO(query) {
        const release = await this[LOCK_TAG].acquire();
        try {
            const result = await this.client.execute({
                sql: query.sql,
                args: query.args.map((arg, i)=>mapArg(arg, query.argTypes[i], this.adapterOptions))
            });
            return result;
        } catch (e) {
            this.onError(e);
        } finally{
            release();
        }
    }
    onError(error) {
        debug2("Error in performIO: %O", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(error));
    }
};
var LibSqlTransaction = class extends LibSqlQueryable {
    constructor(client, options, adapterOptions, unlockParent){
        super(client, adapterOptions);
        this.options = options;
        this.#unlockParent = unlockParent;
    }
    #unlockParent;
    async commit() {
        debug2(`[js::commit]`);
        try {
            await this.client.commit();
        } finally{
            this.#unlockParent();
        }
    }
    async rollback() {
        debug2(`[js::rollback]`);
        try {
            await this.client.rollback();
        } catch (error) {
            debug2("error in rollback:", error);
        } finally{
            this.#unlockParent();
        }
    }
};
var PrismaLibSqlAdapter = class extends LibSqlQueryable {
    constructor(client, adapterOptions){
        super(client, adapterOptions);
    }
    async executeScript(script) {
        const release = await this[LOCK_TAG].acquire();
        try {
            await this.client.executeMultiple(script);
        } catch (e) {
            this.onError(e);
        } finally{
            release();
        }
    }
    async startTransaction(isolationLevel) {
        if (isolationLevel && isolationLevel !== "SERIALIZABLE") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$driver$2d$adapter$2d$utils$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                kind: "InvalidIsolationLevel",
                level: isolationLevel
            });
        }
        const options = {
            usePhantomQuery: true
        };
        const tag = "[js::startTransaction]";
        debug2("%s options: %O", tag, options);
        const release = await this[LOCK_TAG].acquire();
        try {
            const tx = await this.client.transaction("deferred");
            return new LibSqlTransaction(tx, options, this.adapterOptions, release);
        } catch (e) {
            release();
            this.onError(e);
        }
    }
    dispose() {
        this.client.close();
        return Promise.resolve();
    }
};
var PrismaLibSqlAdapterFactoryBase = class {
    provider = "sqlite";
    adapterName = name;
    #config;
    #options;
    constructor(config, options){
        this.#config = config;
        this.#options = options;
    }
    connect() {
        return Promise.resolve(new PrismaLibSqlAdapter(this.createClient(this.#config), this.#options));
    }
    connectToShadowDb() {
        return Promise.resolve(new PrismaLibSqlAdapter(this.createClient({
            ...this.#config,
            url: ":memory:"
        }), this.#options));
    }
};
// src/libsql-node.ts
var PrismaLibSqlAdapterFactory = class extends PrismaLibSqlAdapterFactoryBase {
    createClient(config) {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$bun$2f40$libsql$2b$client$40$0$2e$8$2e$1$2f$node_modules$2f40$libsql$2f$client$29$__["createClient"])(config);
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__401879e2._.js.map