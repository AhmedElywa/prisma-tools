module.exports = [
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/coerceError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coerceError",
    ()=>coerceError
]);
function coerceError(error) {
    if (error instanceof Error) {
        return error;
    }
    if (typeof error === 'object' && error != null) {
        if ('message' in error && typeof error.message === 'string') {
            let errorOptions;
            if ('cause' in error) {
                errorOptions = {
                    cause: error.cause
                };
            }
            const coercedError = new Error(error.message, errorOptions);
            if ('stack' in error && typeof error.stack === 'string') {
                coercedError.stack = error.stack;
            }
            if ('name' in error && typeof error.name === 'string') {
                coercedError.name = error.name;
            }
            return coercedError;
        }
    }
    return new Error(String(error));
}
}),
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/flattenAsyncIterable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenAsyncIterable",
    ()=>flattenAsyncIterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)");
;
function flattenAsyncIterable(iterable) {
    // You might think this whole function could be replaced with
    //
    //    async function* flattenAsyncIterable(iterable) {
    //      for await (const subIterator of iterable) {
    //        yield* subIterator;
    //      }
    //    }
    //
    // but calling `.return()` on the iterator it returns won't interrupt the `for await`.
    const topIterator = iterable[Symbol.asyncIterator]();
    let currentNestedIterator;
    let waitForCurrentNestedIterator;
    let done = false;
    async function next() {
        if (done) {
            return {
                value: undefined,
                done: true
            };
        }
        try {
            if (!currentNestedIterator) {
                // Somebody else is getting it already.
                if (waitForCurrentNestedIterator) {
                    await waitForCurrentNestedIterator;
                    return await next();
                }
                // Nobody else is getting it. We should!
                let resolve;
                waitForCurrentNestedIterator = new Promise((r)=>{
                    resolve = r;
                });
                const topIteratorResult = await topIterator.next();
                if (topIteratorResult.done) {
                    // Given that done only ever transitions from false to true,
                    // require-atomic-updates is being unnecessarily cautious.
                    done = true;
                    return await next();
                }
                // eslint is making a reasonable point here, but we've explicitly protected
                // ourself from the race condition by ensuring that only the single call
                // that assigns to waitForCurrentNestedIterator is allowed to assign to
                // currentNestedIterator or waitForCurrentNestedIterator.
                currentNestedIterator = topIteratorResult.value[Symbol.asyncIterator]();
                waitForCurrentNestedIterator = undefined;
                resolve();
                return await next();
            }
            const rememberCurrentNestedIterator = currentNestedIterator;
            const nestedIteratorResult = await currentNestedIterator.next();
            if (!nestedIteratorResult.done) {
                return nestedIteratorResult;
            }
            // The nested iterator is done. If it's still the current one, make it not
            // current. (If it's not the current one, somebody else has made us move on.)
            if (currentNestedIterator === rememberCurrentNestedIterator) {
                currentNestedIterator = undefined;
            }
            return await next();
        } catch (err) {
            done = true;
            throw err;
        }
    }
    return {
        next,
        async return () {
            done = true;
            await Promise.all([
                currentNestedIterator?.return?.(),
                topIterator.return?.()
            ]);
            return {
                value: undefined,
                done: true
            };
        },
        async throw (error) {
            done = true;
            await Promise.all([
                currentNestedIterator?.throw?.(error),
                topIterator.throw?.(error)
            ]);
            /* c8 ignore next */ throw error;
        },
        [Symbol.asyncIterator] () {
            return this;
        },
        async [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose] () {
            done = true;
            await Promise.all([
                currentNestedIterator?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose]?.(),
                topIterator?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose]?.()
            ]);
        }
    };
}
}),
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/invariant.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant
]);
function invariant(condition, message) {
    if (!condition) {
        throw new Error(message != null ? message : 'Unexpected invariant triggered.');
    }
}
}),
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/promiseForObject.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "promiseForObject",
    ()=>promiseForObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
function promiseForObject(object, signal, signalPromise) {
    signal?.throwIfAborted();
    const resolvedObject = Object.create(null);
    const promises = [];
    for(const key in object){
        const valueSet$ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>object[key], (resolvedValue)=>{
            resolvedObject[key] = resolvedValue;
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(valueSet$)) {
            promises.push(valueSet$);
        }
    }
    if (!promises.length) {
        return resolvedObject;
    }
    const promiseAll = promises.length === 1 ? promises[0] : Promise.all(promises);
    if (signalPromise) {
        return Promise.race([
            signalPromise,
            promiseAll
        ]).then(()=>resolvedObject);
    }
    return promiseAll.then(()=>resolvedObject);
}
}),
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/values.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariableValues",
    ()=>getVariableValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$coerceInputValue$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/coerceInputValue.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/printer.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$typeFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/typeFromAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$valueFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/valueFromAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/jsutils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/cross-inspect@1.0.1/node_modules/cross-inspect/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/Path.js [app-route] (ecmascript)");
;
;
function getVariableValues(schema, varDefNodes, inputs, options) {
    const errors = [];
    const maxErrors = options?.maxErrors;
    try {
        const coerced = coerceVariableValues(schema, varDefNodes, inputs, (error)=>{
            if (maxErrors != null && errors.length >= maxErrors) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Too many errors processing variables, error limit reached. Execution aborted.');
            }
            errors.push(error);
        });
        if (errors.length === 0) {
            return {
                coerced
            };
        }
    } catch (error) {
        errors.push(error);
    }
    return {
        errors
    };
}
function coerceVariableValues(schema, varDefNodes, inputs, onError) {
    const coercedValues = {};
    for (const varDefNode of varDefNodes){
        const varName = varDefNode.variable.name.value;
        const varType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$typeFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeFromAST"])(schema, varDefNode.type);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInputType"])(varType)) {
            // Must use input types for variables. This should be caught during
            // validation, however is checked again here for safety.
            const varTypeStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["print"])(varDefNode.type);
            onError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`, {
                nodes: varDefNode.type
            }));
            continue;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasOwnProperty"])(inputs, varName)) {
            if (varDefNode.defaultValue) {
                coercedValues[varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$valueFromAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["valueFromAST"])(varDefNode.defaultValue, varType);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(varType)) {
                const varTypeStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(varType);
                onError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Variable "$${varName}" of required type "${varTypeStr}" was not provided.`, {
                    nodes: varDefNode
                }));
            }
            continue;
        }
        const value = inputs[varName];
        if (value === null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(varType)) {
            const varTypeStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(varType);
            onError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`, {
                nodes: varDefNode
            }));
            continue;
        }
        coercedValues[varName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$coerceInputValue$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceInputValue"])(value, varType, (path, invalidValue, error)=>{
            let prefix = `Variable "$${varName}" got invalid value ` + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(invalidValue);
            if (path.length > 0) {
                prefix += ` at "${varName}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printPathArray"])(path)}"`;
            }
            onError((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(prefix + '; ' + error.message, {
                nodes: varDefNode,
                originalError: error
            }));
        });
    }
    return coercedValues;
}
}),
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/execute.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CRITICAL_ERROR",
    ()=>CRITICAL_ERROR,
    "assertValidExecutionArguments",
    ()=>assertValidExecutionArguments,
    "buildExecutionContext",
    ()=>buildExecutionContext,
    "buildResolveInfo",
    ()=>buildResolveInfo,
    "defaultFieldResolver",
    ()=>defaultFieldResolver,
    "defaultTypeResolver",
    ()=>defaultTypeResolver,
    "execute",
    ()=>execute,
    "executeSync",
    ()=>executeSync,
    "flattenIncrementalResults",
    ()=>flattenIncrementalResults,
    "getFieldDef",
    ()=>getFieldDef,
    "getFragmentsFromDocument",
    ()=>getFragmentsFromDocument,
    "isIncrementalResult",
    ()=>isIncrementalResult,
    "isIncrementalResults",
    ()=>isIncrementalResults,
    "subscribe",
    ()=>subscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$validate$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/validate.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/values.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/GraphQLError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/introspection.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$version$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/version.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$collectFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/collectFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/Path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$getArgumentValues$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/getArgumentValues.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$rootTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/rootTypes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$directives$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/directives.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/cross-inspect@1.0.1/node_modules/cross-inspect/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$isAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/isAsyncIterable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/jsutils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/memoize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+disposablestack@0.0.6/node_modules/@whatwg-node/disposablestack/esm/symbols.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/coerceError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$flattenAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/flattenAsyncIterable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$invariant$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/invariant.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$promiseForObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/promiseForObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$values$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/values.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */ const collectSubfields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize3"])((exeContext, returnType, fieldNodes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$collectFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectSubFields"])(exeContext.schema, exeContext.fragments, exeContext.variableValues, returnType, fieldNodes));
function execute(args) {
    // If a valid execution context cannot be created due to incorrect arguments,
    // a "Response" with only errors is returned.
    const exeContext = buildExecutionContext(args);
    // Return early errors if execution context failed.
    if (!('schema' in exeContext)) {
        return {
            errors: exeContext.map((e)=>{
                Object.defineProperty(e, 'extensions', {
                    value: {
                        ...e.extensions,
                        http: {
                            ...e.extensions?.['http'] || {},
                            status: 400
                        }
                    }
                });
                return e;
            })
        };
    }
    return executeImpl(exeContext);
}
function executeImpl(exeContext) {
    exeContext.signal?.throwIfAborted();
    // Return a Promise that will eventually resolve to the data described by
    // The "Response" section of the GraphQL specification.
    //
    // If errors are encountered while executing a GraphQL field, only that
    // field and its descendants will be omitted, and sibling fields will still
    // be executed. An execution which encounters errors will still result in a
    // resolved Promise.
    //
    // Errors from sub-fields of a NonNull type may propagate to the top level,
    // at which point we still log the error and null the parent field, which
    // in this case is the entire response.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>executeOperation(exeContext), (data)=>{
        const initialResult = buildResponse(data, exeContext.errors);
        if (exeContext.subsequentPayloads.size > 0) {
            return {
                initialResult: {
                    ...initialResult,
                    hasNext: true
                },
                subsequentResults: yieldSubsequentPayloads(exeContext)
            };
        }
        return initialResult;
    }, (error)=>{
        exeContext.signal?.throwIfAborted();
        if (error.errors) {
            exeContext.errors.push(...error.errors);
        } else {
            exeContext.errors.push(error);
        }
        return buildResponse(null, exeContext.errors);
    });
}
function executeSync(args) {
    const result = execute(args);
    // Assert that the execution was synchronous.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(result) || 'initialResult' in result) {
        throw new Error('GraphQL execution failed to complete synchronously.');
    }
    return result;
}
/**
 * Given a completed execution context and data, build the `{ errors, data }`
 * response defined by the "Response" section of the GraphQL specification.
 */ function buildResponse(data, errors) {
    return errors.length === 0 ? {
        data
    } : {
        errors,
        data
    };
}
function assertValidExecutionArguments(schema, document, rawVariableValues) {
    console.assert(!!document, 'Must provide document.');
    // If the schema used for execution is invalid, throw an error.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$validate$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidSchema"])(schema);
    // Variables, if provided, must be an object.
    console.assert(rawVariableValues == null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isObjectLike"])(rawVariableValues), 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
const getFragmentsFromDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize1"])(function getFragmentsFromDocument(document) {
    const fragments = Object.create(null);
    for (const definition of document.definitions){
        if (definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION) {
            fragments[definition.name.value] = definition;
        }
    }
    return fragments;
});
function buildExecutionContext(args) {
    const { schema, document, rootValue, contextValue, variableValues: rawVariableValues, operationName, fieldResolver, typeResolver, subscribeFieldResolver, signal, schemaCoordinateInErrors } = args;
    signal?.throwIfAborted();
    // If the schema used for execution is invalid, throw an error.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$validate$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidSchema"])(schema);
    const fragments = getFragmentsFromDocument(document);
    let operation;
    for (const definition of document.definitions){
        switch(definition.kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION:
                if (operationName == null) {
                    if (operation !== undefined) {
                        return [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Must provide operation name if query contains multiple operations.', {
                                extensions: {
                                    code: 'OPERATION_RESOLUTION_FAILURE'
                                }
                            })
                        ];
                    }
                    operation = definition;
                } else if (definition.name?.value === operationName) {
                    operation = definition;
                }
                break;
            default:
        }
    }
    if (operation == null) {
        if (operationName != null) {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Unknown operation named "${operationName}".`, {
                    extensions: {
                        code: 'OPERATION_RESOLUTION_FAILURE'
                    }
                })
            ];
        }
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Must provide an operation.', {
                extensions: {
                    code: 'OPERATION_RESOLUTION_FAILURE'
                }
            })
        ];
    }
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ const variableDefinitions = operation.variableDefinitions ?? [];
    const coercedVariableValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$values$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getVariableValues"])(schema, variableDefinitions, rawVariableValues ?? {}, {
        maxErrors: 50
    });
    if (coercedVariableValues.errors) {
        return coercedVariableValues.errors;
    }
    signal?.throwIfAborted();
    let onSignalAbort;
    let signalPromise;
    if (signal) {
        const listeners = new Set();
        const signalDeferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDeferredPromise"])();
        signalPromise = signalDeferred.promise;
        const sharedListener = ()=>{
            signalDeferred.reject(signal.reason);
            signal.removeEventListener('abort', sharedListener);
        };
        signal.addEventListener('abort', sharedListener, {
            once: true
        });
        signalPromise.catch(()=>{
            for (const listener of listeners){
                listener();
            }
            listeners.clear();
        });
        onSignalAbort = (handler)=>{
            listeners.add(handler);
        };
    }
    return {
        schema,
        fragments,
        rootValue,
        contextValue,
        operation,
        variableValues: coercedVariableValues.coerced,
        fieldResolver: fieldResolver ?? defaultFieldResolver,
        typeResolver: typeResolver ?? defaultTypeResolver,
        subscribeFieldResolver: subscribeFieldResolver ?? defaultFieldResolver,
        subsequentPayloads: new Set(),
        errors: [],
        signal,
        onSignalAbort,
        signalPromise,
        schemaCoordinateInErrors
    };
}
function buildPerEventExecutionContext(exeContext, payload) {
    return {
        ...exeContext,
        rootValue: payload,
        subsequentPayloads: new Set(),
        errors: []
    };
}
/**
 * Implements the "Executing operations" section of the spec.
 */ function executeOperation(exeContext) {
    const { operation, schema, fragments, variableValues, rootValue } = exeContext;
    const rootType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$rootTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefinedRootType"])(schema, operation.operation, [
        operation
    ]);
    if (rootType == null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Schema is not configured to execute ${operation.operation} operation.`, {
            nodes: operation
        });
    }
    const { fields: rootFields, patches } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$collectFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectFields"])(schema, fragments, variableValues, rootType, operation.selectionSet);
    const path = undefined;
    let result;
    if (operation.operation === 'mutation') {
        result = executeFieldsSerially(exeContext, rootType, rootValue, path, rootFields);
    } else {
        result = executeFields(exeContext, rootType, rootValue, path, rootFields);
    }
    for (const patch of patches){
        const { label, fields: patchFields } = patch;
        executeDeferredFragment(exeContext, rootType, rootValue, patchFields, label, path);
    }
    return result;
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that must be executed serially.
 */ function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["promiseReduce"])(fields, (results, [responseName, fieldNodes])=>{
        const fieldPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPath"])(path, responseName, parentType.name);
        exeContext.signal?.throwIfAborted();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath), (result)=>{
            if (result === undefined) {
                return results;
            }
            results[responseName] = result;
            return results;
        });
    }, Object.create(null));
}
/**
 * Implements the "Executing selection sets" section of the spec
 * for fields that may be executed in parallel.
 */ function executeFields(exeContext, parentType, sourceValue, path, fields, asyncPayloadRecord) {
    const results = Object.create(null);
    let containsPromise = false;
    try {
        for (const [responseName, fieldNodes] of fields){
            exeContext.signal?.throwIfAborted();
            const fieldPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPath"])(path, responseName, parentType.name);
            const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath, asyncPayloadRecord);
            if (result !== undefined) {
                results[responseName] = result;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(result)) {
                    containsPromise = true;
                }
            }
        }
    } catch (error) {
        if (error !== exeContext.signal?.reason && containsPromise) {
            // Ensure that any promises returned by other fields are handled, as they may also reject.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$promiseForObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promiseForObject"])(results, exeContext.signal), ()=>{
                throw error;
            }, ()=>{
                throw error;
            });
        }
        throw error;
    }
    // If there are no promises, we can just return the object
    if (!containsPromise) {
        return results;
    }
    // Otherwise, results is a map from field name to the result of resolving that
    // field, which is possibly a promise. Return a promise that will return this
    // same map, but with any promises replaced with the values they resolved to.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$promiseForObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promiseForObject"])(results, exeContext.signal, exeContext.signalPromise);
}
/**
 * Implements the "Executing fields" section of the spec
 * In particular, this function figures out the value that the field returns by
 * calling its resolve function, then calls completeValue to complete promises,
 * serialize scalars, or execute the sub-selection-set for objects.
 */ function executeField(exeContext, parentType, source, fieldNodes, path, asyncPayloadRecord) {
    const errors = asyncPayloadRecord?.errors ?? exeContext.errors;
    const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);
    if (!fieldDef) {
        return;
    }
    const returnType = fieldDef.type;
    const resolveFn = fieldDef.resolve ?? exeContext.fieldResolver;
    const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);
    // Get the resolve function, regardless of if its result is normal or abrupt (error).
    try {
        exeContext.signal?.throwIfAborted();
        // Build a JS object of arguments from the field.arguments AST, using the
        // variables scope to fulfill any variable references.
        // TODO: find a way to memoize, in case this field is within a List type.
        const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$getArgumentValues$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArgumentValues"])(fieldDef, fieldNodes[0], exeContext.variableValues);
        // The resolve function's optional third argument is a context value that
        // is provided to every resolve function within an execution. It is commonly
        // used to represent an authenticated user, or request-specific caches.
        const contextValue = exeContext.contextValue;
        const result = resolveFn(source, args, contextValue, info);
        let completed;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(result)) {
            completed = result.then((resolved)=>completeValue(exeContext, returnType, fieldNodes, info, path, resolved, asyncPayloadRecord));
        } else {
            completed = completeValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(completed)) {
            // Note: we don't rely on a `catch` method, but we do expect "thenable"
            // to take a second callback for the error case.
            return completed.then(undefined, (rawError)=>{
                if (rawError instanceof AggregateError) {
                    let result;
                    for (let rawErrorItem of rawError.errors){
                        rawErrorItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawErrorItem);
                        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawErrorItem, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(path), exeContext.schemaCoordinateInErrors && info);
                        result = handleFieldError(error, returnType, errors);
                        filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
                    }
                    return result;
                }
                rawError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(path), exeContext.schemaCoordinateInErrors && info);
                const handledError = handleFieldError(error, returnType, errors);
                filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
                return handledError;
            });
        }
        return completed;
    } catch (rawError) {
        if (rawError instanceof AggregateError) {
            let result;
            for (let rawErrorItem of rawError.errors){
                rawErrorItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawErrorItem);
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawErrorItem, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(path), exeContext.schemaCoordinateInErrors && info);
                result = handleFieldError(error, returnType, errors);
                filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
            }
            return result;
        }
        const coercedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(coercedError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(path), exeContext.schemaCoordinateInErrors && info);
        const handledError = handleFieldError(error, returnType, errors);
        filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
        return handledError;
    }
}
function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
    // The resolve function's optional fourth argument is a collection of
    // information about the current execution state.
    return {
        fieldName: fieldDef.name,
        fieldNodes,
        returnType: fieldDef.type,
        parentType,
        path,
        schema: exeContext.schema,
        fragments: exeContext.fragments,
        rootValue: exeContext.rootValue,
        operation: exeContext.operation,
        variableValues: exeContext.variableValues,
        signal: exeContext.signal
    };
}
const CRITICAL_ERROR = 'CRITICAL_ERROR';
function handleFieldError(error, returnType, errors) {
    // If the field type is non-nullable, then it is resolved without any
    // protection from errors, however it still properly locates the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(returnType)) {
        throw error;
    }
    if (error.extensions?.[CRITICAL_ERROR]) {
        throw error;
    }
    // Otherwise, error protection is applied, logging the error and resolving
    // a null value for this field if one is encountered.
    errors.push(error);
    return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Value Completion" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by executing all sub-selections.
 */ function completeValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord) {
    // If result is an Error, throw a located error.
    if (result instanceof Error) {
        throw result;
    }
    // If field type is NonNull, complete for inner type, and throw field error
    // if result is null.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(returnType)) {
        const completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result, asyncPayloadRecord);
        if (completed === null) {
            throw new Error(`Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`);
        }
        return completed;
    }
    // If result value is null or undefined then return null.
    if (result == null) {
        return null;
    }
    // If field type is List, complete each item in the list with the inner type
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isListType"])(returnType)) {
        return completeListValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord);
    }
    // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
    // returning null if serialization is not possible.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLeafType"])(returnType)) {
        return completeLeafValue(returnType, result);
    }
    // If field type is an abstract type, Interface or Union, determine the
    // runtime Object type and complete for that type.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbstractType"])(returnType)) {
        return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord);
    }
    // If field type is Object, execute and complete all sub-selections.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(returnType)) {
        return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord);
    }
    /* c8 ignore next 6 */ // Not reachable, all possible output types have been considered.
    console.assert(false, 'Cannot complete value of unexpected output type: ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(returnType));
}
/**
 * Returns an object containing the `@stream` arguments if a field should be
 * streamed based on the experimental flag, stream directive present and
 * not disabled by the "if" argument.
 */ function getStreamValues(exeContext, fieldNodes, path) {
    // do not stream inner lists of multi-dimensional lists
    if (typeof path.key === 'number') {
        return;
    }
    // validation only allows equivalent streams on multiple fields, so it is
    // safe to only check the first fieldNode for the stream directive
    const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$values$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDirectiveValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$directives$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLStreamDirective"], fieldNodes[0], exeContext.variableValues);
    if (!stream) {
        return;
    }
    if (stream.if === false) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$invariant$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invariant"])(typeof stream['initialCount'] === 'number', 'initialCount must be a number');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$invariant$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invariant"])(stream['initialCount'] >= 0, 'initialCount must be a positive integer');
    return {
        initialCount: stream['initialCount'],
        label: typeof stream['label'] === 'string' ? stream['label'] : undefined
    };
}
/**
 * Complete a async iterator value by completing the result and calling
 * recursively until all the results are completed.
 */ async function completeAsyncIteratorValue(exeContext, itemType, fieldNodes, info, path, iterator, asyncPayloadRecord) {
    exeContext.signal?.throwIfAborted();
    if (iterator.return) {
        exeContext.onSignalAbort?.(()=>{
            iterator.return?.();
        });
    }
    const errors = asyncPayloadRecord?.errors ?? exeContext.errors;
    const stream = getStreamValues(exeContext, fieldNodes, path);
    let containsPromise = false;
    const completedResults = [];
    let index = 0;
    while(true){
        if (stream && typeof stream.initialCount === 'number' && index >= stream.initialCount) {
            executeStreamIterator(index, iterator, exeContext, fieldNodes, info, itemType, path, stream.label, asyncPayloadRecord);
            break;
        }
        const itemPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPath"])(path, index, undefined);
        let iteration;
        try {
            iteration = await iterator.next();
            if (iteration.done) {
                break;
            }
        } catch (rawError) {
            const coercedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(coercedError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
            completedResults.push(handleFieldError(error, itemType, errors));
            break;
        }
        if (completeListItemValue(iteration.value, completedResults, errors, exeContext, itemType, fieldNodes, info, itemPath, asyncPayloadRecord)) {
            containsPromise = true;
        }
        index += 1;
    }
    return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */ function completeListValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord) {
    const itemType = returnType.ofType;
    const errors = asyncPayloadRecord?.errors ?? exeContext.errors;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$isAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result)) {
        const iterator = result[Symbol.asyncIterator]();
        return completeAsyncIteratorValue(exeContext, itemType, fieldNodes, info, path, iterator, asyncPayloadRecord);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isIterableObject"])(result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`);
    }
    const stream = getStreamValues(exeContext, fieldNodes, path);
    // This is specified as a simple map, however we're optimizing the path
    // where the list contains no Promises by avoiding creating another Promise.
    let containsPromise = false;
    let previousAsyncPayloadRecord = asyncPayloadRecord;
    const completedResults = [];
    let index = 0;
    for (const item of result){
        // No need to modify the info object containing the path,
        // since from here on it is not ever accessed by resolver functions.
        const itemPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPath"])(path, index, undefined);
        if (stream && typeof stream.initialCount === 'number' && index >= stream.initialCount) {
            previousAsyncPayloadRecord = executeStreamField(path, itemPath, item, exeContext, fieldNodes, info, itemType, stream.label, previousAsyncPayloadRecord);
            index++;
            continue;
        }
        if (completeListItemValue(item, completedResults, errors, exeContext, itemType, fieldNodes, info, itemPath, asyncPayloadRecord)) {
            containsPromise = true;
        }
        index++;
    }
    return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a list item value by adding it to the completed results.
 *
 * Returns true if the value is a Promise.
 */ function completeListItemValue(item, completedResults, errors, exeContext, itemType, fieldNodes, info, itemPath, asyncPayloadRecord) {
    try {
        let completedItem;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(item)) {
            completedItem = item.then((resolved)=>completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved, asyncPayloadRecord));
        } else {
            completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item, asyncPayloadRecord);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(completedItem)) {
            // Note: we don't rely on a `catch` method, but we do expect "thenable"
            // to take a second callback for the error case.
            completedResults.push(completedItem.then(undefined, (rawError)=>{
                rawError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
                const handledError = handleFieldError(error, itemType, errors);
                filterSubsequentPayloads(exeContext, itemPath, asyncPayloadRecord);
                return handledError;
            }));
            return true;
        }
        completedResults.push(completedItem);
    } catch (rawError) {
        const coercedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(coercedError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
        const handledError = handleFieldError(error, itemType, errors);
        filterSubsequentPayloads(exeContext, itemPath, asyncPayloadRecord);
        completedResults.push(handledError);
    }
    return false;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */ function completeLeafValue(returnType, result) {
    let serializedResult;
    // Note: We transform GraphQLError to Error in order to be consistent with
    // how non-null checks work later on.
    // See https://github.com/kamilkisiela/graphql-hive/pull/2299
    // See https://github.com/n1ru4l/envelop/issues/1808
    try {
        serializedResult = returnType.serialize(result);
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"]) {
            throw new Error(err.message);
        }
        throw err;
    }
    if (serializedResult == null) {
        throw new Error(`Expected \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(returnType)}.serialize(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(result)})\` to ` + `return non-nullable value, returned: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(serializedResult)}`);
    }
    return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */ function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord) {
    const resolveTypeFn = returnType.resolveType ?? exeContext.typeResolver;
    const contextValue = exeContext.contextValue;
    const runtimeType = resolveTypeFn(result, contextValue, info, returnType);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(runtimeType)) {
        return runtimeType.then((resolvedRuntimeType)=>completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result, asyncPayloadRecord));
    }
    return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result, asyncPayloadRecord);
}
function ensureValidRuntimeType(runtimeTypeName, exeContext, returnType, fieldNodes, info, result) {
    if (runtimeTypeName == null) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, {
            nodes: fieldNodes
        });
    }
    // releases before 16.0.0 supported returning `GraphQLObjectType` from `resolveType`
    // TODO: remove in 17.0.0 release
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(runtimeTypeName)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$version$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionInfo"].major >= 16) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.');
        }
        runtimeTypeName = runtimeTypeName.name;
    }
    if (typeof runtimeTypeName !== 'string') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with ` + `value ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(result)}, received "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(runtimeTypeName)}".`);
    }
    const runtimeType = exeContext.schema.getType(runtimeTypeName);
    if (runtimeType == null) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`, {
            nodes: fieldNodes
        });
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(runtimeType)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`, {
            nodes: fieldNodes
        });
    }
    if (!exeContext.schema.isSubType(returnType, runtimeType)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`, {
            nodes: fieldNodes
        });
    }
    return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */ function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result, asyncPayloadRecord) {
    // If there is an isTypeOf predicate function, call it with the
    // current result. If isTypeOf returns false, then raise an error rather
    // than continuing execution.
    if (returnType.isTypeOf) {
        const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(isTypeOf)) {
            return isTypeOf.then((resolvedIsTypeOf)=>{
                if (!resolvedIsTypeOf) {
                    throw invalidReturnTypeError(returnType, result, fieldNodes);
                }
                return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result, asyncPayloadRecord);
            });
        }
        if (!isTypeOf) {
            throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
    }
    return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result, asyncPayloadRecord);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Expected value of type "${returnType.name}" but got: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(result)}.`, {
        nodes: fieldNodes
    });
}
function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result, asyncPayloadRecord) {
    // Collect sub-fields to execute to complete this value.
    const { fields: subFieldNodes, patches: subPatches } = collectSubfields(exeContext, returnType, fieldNodes);
    const subFields = executeFields(exeContext, returnType, result, path, subFieldNodes, asyncPayloadRecord);
    for (const subPatch of subPatches){
        const { label, fields: subPatchFieldNodes } = subPatch;
        executeDeferredFragment(exeContext, returnType, result, subPatchFieldNodes, label, path, asyncPayloadRecord);
    }
    return subFields;
}
const defaultTypeResolver = function(value, contextValue, info, abstractType) {
    // First, look for `__typename`.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isObjectLike"])(value) && typeof value['__typename'] === 'string') {
        return value['__typename'];
    }
    // Otherwise, test each possible type.
    const possibleTypes = info.schema.getPossibleTypes(abstractType);
    const promisedIsTypeOfResults = [];
    for(let i = 0; i < possibleTypes.length; i++){
        const type = possibleTypes[i];
        if (type.isTypeOf) {
            const isTypeOfResult = type.isTypeOf(value, contextValue, info);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(isTypeOfResult)) {
                promisedIsTypeOfResults[i] = isTypeOfResult;
            } else if (isTypeOfResult) {
                return type.name;
            }
        }
    }
    if (promisedIsTypeOfResults.length) {
        return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults)=>{
            for(let i = 0; i < isTypeOfResults.length; i++){
                if (isTypeOfResults[i]) {
                    return possibleTypes[i].name;
                }
            }
        });
    }
};
const defaultFieldResolver = function(source, args, contextValue, info) {
    // ensure source is a value for which property access is acceptable.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$jsutils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isObjectLike"])(source) || typeof source === 'function') {
        const property = source[info.fieldName];
        if (typeof property === 'function') {
            return source[info.fieldName](args, contextValue, info);
        }
        return property;
    }
};
function subscribe(args) {
    // If a valid execution context cannot be created due to incorrect arguments,
    // a "Response" with only errors is returned.
    const exeContext = buildExecutionContext(args);
    // Return early errors if execution context failed.
    if (!('schema' in exeContext)) {
        for (const error of exeContext){
            // @ts-expect-error - We are intentionally modifying the errors
            const extensions = error.extensions ||= {};
            const httpExtensions = extensions['http'] ||= {};
            httpExtensions.status = 400;
            error.extensions['code'] = 'BAD_USER_INPUT';
        }
        return {
            errors: exeContext
        };
    }
    const resultOrStream = createSourceEventStreamImpl(exeContext);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(resultOrStream)) {
        return resultOrStream.then((resolvedResultOrStream)=>mapSourceToResponse(exeContext, resolvedResultOrStream));
    }
    return mapSourceToResponse(exeContext, resultOrStream);
}
function isIncrementalResults(results) {
    return results?.initialResult;
}
function flattenIncrementalResults(incrementalResults) {
    const subsequentIterator = incrementalResults.subsequentResults;
    let initialResultSent = false;
    let done = false;
    return {
        [Symbol.asyncIterator] () {
            return this;
        },
        next () {
            if (done) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                    value: undefined,
                    done
                });
            }
            if (initialResultSent) {
                return subsequentIterator.next();
            }
            initialResultSent = true;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                value: incrementalResults.initialResult,
                done
            });
        },
        return () {
            done = true;
            return subsequentIterator.return();
        },
        throw (error) {
            done = true;
            return subsequentIterator.throw(error);
        },
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose] () {
            done = true;
            return subsequentIterator?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose]?.();
        }
    };
}
async function* ensureAsyncIterable(someExecutionResult) {
    if ('initialResult' in someExecutionResult) {
        yield* flattenIncrementalResults(someExecutionResult);
    } else {
        yield someExecutionResult;
    }
}
function mapSourceToResponse(exeContext, resultOrStream) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$isAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(resultOrStream)) {
        return resultOrStream;
    }
    // For each payload yielded from a subscription, map it over the normal
    // GraphQL `execute` function, with `payload` as the rootValue.
    // This implements the "MapSourceToResponseEvent" algorithm described in
    // the GraphQL specification. The `execute` function provides the
    // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
    // "ExecuteQuery" algorithm, for which `execute` is also used.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$flattenAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenAsyncIterable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapAsyncIterator"])(resultOrStream, (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>executeImpl(buildPerEventExecutionContext(exeContext, payload)), ensureAsyncIterable), (error)=>{
        if (error instanceof AggregateError) {
            throw new AggregateError(error.errors.map((e)=>wrapError(e, exeContext.operation)), error.message);
        }
        throw wrapError(error, exeContext.operation);
    }));
}
function wrapError(error, operation) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(error.message, {
        originalError: error,
        nodes: [
            operation
        ]
    });
}
function createSourceEventStreamImpl(exeContext) {
    try {
        const eventStream = executeSubscription(exeContext);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(eventStream)) {
            return eventStream.then(undefined, (error)=>({
                    errors: [
                        error
                    ]
                }));
        }
        return eventStream;
    } catch (error) {
        return {
            errors: [
                error
            ]
        };
    }
}
function executeSubscription(exeContext) {
    const { schema, fragments, operation, variableValues, rootValue } = exeContext;
    const rootType = schema.getSubscriptionType();
    if (rootType == null) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Schema is not configured to execute subscription operation.', {
            nodes: operation
        });
    }
    const { fields: rootFields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$collectFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectFields"])(schema, fragments, variableValues, rootType, operation.selectionSet);
    const [responseName, fieldNodes] = [
        ...rootFields.entries()
    ][0];
    const fieldName = fieldNodes[0].name.value;
    const fieldDef = getFieldDef(schema, rootType, fieldNodes[0]);
    if (!fieldDef) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`The subscription field "${fieldName}" is not defined.`, {
            nodes: fieldNodes
        });
    }
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPath"])(undefined, responseName, rootType.name);
    const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, rootType, path);
    try {
        // Implements the "ResolveFieldEventStream" algorithm from GraphQL specification.
        // It differs from "ResolveFieldValue" due to providing a different `resolveFn`.
        // Build a JS object of arguments from the field.arguments AST, using the
        // variables scope to fulfill any variable references.
        const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$getArgumentValues$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArgumentValues"])(fieldDef, fieldNodes[0], variableValues);
        // The resolve function's optional third argument is a context value that
        // is provided to every resolve function within an execution. It is commonly
        // used to represent an authenticated user, or request-specific caches.
        const contextValue = exeContext.contextValue;
        // Call the `subscribe()` resolver or the default resolver to produce an
        // AsyncIterable yielding raw payloads.
        const resolveFn = fieldDef.subscribe ?? exeContext.subscribeFieldResolver;
        const result = resolveFn(rootValue, args, contextValue, info);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(result)) {
            return result.then((result)=>assertEventStream(result, exeContext.signal, exeContext.onSignalAbort)).then(undefined, (error)=>{
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(error, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(path), exeContext.schemaCoordinateInErrors && info);
            });
        }
        return assertEventStream(result, exeContext.signal, exeContext.onSignalAbort);
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(error, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(path), exeContext.schemaCoordinateInErrors && info);
    }
}
function assertEventStream(result, signal, onSignalAbort) {
    signal?.throwIfAborted();
    if (result instanceof Error) {
        throw result;
    }
    // Assert field returned an event stream, otherwise yield an error.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$isAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Subscription field must return Async Iterable. ' + `Received: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$cross$2d$inspect$40$1$2e$0$2e$1$2f$node_modules$2f$cross$2d$inspect$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inspect"])(result)}.`);
    }
    if (onSignalAbort) {
        return {
            [Symbol.asyncIterator] () {
                const asyncIterator = result[Symbol.asyncIterator]();
                if (asyncIterator.return) {
                    onSignalAbort?.(()=>{
                        asyncIterator.return?.();
                    });
                }
                return asyncIterator;
            }
        };
    }
    return result;
}
function executeDeferredFragment(exeContext, parentType, sourceValue, fields, label, path, parentContext) {
    const asyncPayloadRecord = new DeferredFragmentRecord({
        label,
        path,
        parentContext,
        exeContext
    });
    let promiseOrData;
    try {
        promiseOrData = executeFields(exeContext, parentType, sourceValue, path, fields, asyncPayloadRecord);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(promiseOrData)) {
            promiseOrData = promiseOrData.then(null, (e)=>{
                asyncPayloadRecord.errors.push(e);
                return null;
            });
        }
    } catch (e) {
        asyncPayloadRecord.errors.push(e);
        promiseOrData = null;
    }
    asyncPayloadRecord.addData(promiseOrData);
}
function executeStreamField(path, itemPath, item, exeContext, fieldNodes, info, itemType, label, parentContext) {
    const asyncPayloadRecord = new StreamRecord({
        label,
        path: itemPath,
        parentContext,
        exeContext
    });
    let completedItem;
    try {
        try {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(item)) {
                completedItem = item.then((resolved)=>completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved, asyncPayloadRecord));
            } else {
                completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item, asyncPayloadRecord);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(completedItem)) {
                // Note: we don't rely on a `catch` method, but we do expect "thenable"
                // to take a second callback for the error case.
                completedItem = completedItem.then(undefined, (rawError)=>{
                    rawError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
                    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
                    const handledError = handleFieldError(error, itemType, asyncPayloadRecord.errors);
                    filterSubsequentPayloads(exeContext, itemPath, asyncPayloadRecord);
                    return handledError;
                });
            }
        } catch (rawError) {
            const coercedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(coercedError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
            completedItem = handleFieldError(error, itemType, asyncPayloadRecord.errors);
            filterSubsequentPayloads(exeContext, itemPath, asyncPayloadRecord);
        }
    } catch (error) {
        asyncPayloadRecord.errors.push(error);
        filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
        asyncPayloadRecord.addItems(null);
        return asyncPayloadRecord;
    }
    let completedItems;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(completedItem)) {
        completedItems = completedItem.then((value)=>[
                value
            ], (error)=>{
            asyncPayloadRecord.errors.push(error);
            filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
            return null;
        });
    } else {
        completedItems = [
            completedItem
        ];
    }
    asyncPayloadRecord.addItems(completedItems);
    return asyncPayloadRecord;
}
async function executeStreamIteratorItem(iterator, exeContext, fieldNodes, info, itemType, asyncPayloadRecord, itemPath) {
    let item;
    try {
        const { value, done } = await iterator.next();
        if (done) {
            asyncPayloadRecord.setIsCompletedIterator();
            return {
                done,
                value: undefined
            };
        }
        item = value;
    } catch (rawError) {
        const coercedError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$coerceError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerceError"])(rawError);
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(coercedError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
        const value = handleFieldError(error, itemType, asyncPayloadRecord.errors);
        // don't continue if iterator throws
        return {
            done: true,
            value
        };
    }
    let completedItem;
    try {
        completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item, asyncPayloadRecord);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(completedItem)) {
            completedItem = completedItem.then(undefined, (rawError)=>{
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
                const handledError = handleFieldError(error, itemType, asyncPayloadRecord.errors);
                filterSubsequentPayloads(exeContext, itemPath, asyncPayloadRecord);
                return handledError;
            });
        }
        return {
            done: false,
            value: completedItem
        };
    } catch (rawError) {
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["locatedError"])(rawError, fieldNodes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(itemPath), exeContext.schemaCoordinateInErrors && info);
        const value = handleFieldError(error, itemType, asyncPayloadRecord.errors);
        filterSubsequentPayloads(exeContext, itemPath, asyncPayloadRecord);
        return {
            done: false,
            value
        };
    }
}
async function executeStreamIterator(initialIndex, iterator, exeContext, fieldNodes, info, itemType, path, label, parentContext) {
    let index = initialIndex;
    let previousAsyncPayloadRecord = parentContext ?? undefined;
    while(true){
        const itemPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPath"])(path, index, undefined);
        const asyncPayloadRecord = new StreamRecord({
            label,
            path: itemPath,
            parentContext: previousAsyncPayloadRecord,
            iterator,
            exeContext
        });
        let iteration;
        try {
            iteration = await executeStreamIteratorItem(iterator, exeContext, fieldNodes, info, itemType, asyncPayloadRecord, itemPath);
        } catch (error) {
            asyncPayloadRecord.errors.push(error);
            filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
            asyncPayloadRecord.addItems(null);
            // entire stream has errored and bubbled upwards
            if (iterator?.return) {
                iterator.return().catch(()=>{
                // ignore errors
                });
            }
            return;
        }
        const { done, value: completedItem } = iteration;
        let completedItems;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(completedItem)) {
            completedItems = completedItem.then((value)=>[
                    value
                ], (error)=>{
                asyncPayloadRecord.errors.push(error);
                filterSubsequentPayloads(exeContext, path, asyncPayloadRecord);
                return null;
            });
        } else {
            completedItems = [
                completedItem
            ];
        }
        asyncPayloadRecord.addItems(completedItems);
        if (done) {
            break;
        }
        previousAsyncPayloadRecord = asyncPayloadRecord;
        index++;
    }
}
function filterSubsequentPayloads(exeContext, nullPath, currentAsyncRecord) {
    const nullPathArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(nullPath);
    exeContext.subsequentPayloads.forEach((asyncRecord)=>{
        if (asyncRecord === currentAsyncRecord) {
            // don't remove payload from where error originates
            return;
        }
        for(let i = 0; i < nullPathArray.length; i++){
            if (asyncRecord.path[i] !== nullPathArray[i]) {
                // asyncRecord points to a path unaffected by this payload
                return;
            }
        }
        // asyncRecord path points to nulled error field
        if (isStreamPayload(asyncRecord) && asyncRecord.iterator?.return) {
            asyncRecord.iterator.return().catch(()=>{
            // ignore error
            });
        }
        exeContext.subsequentPayloads.delete(asyncRecord);
    });
}
function getCompletedIncrementalResults(exeContext) {
    const incrementalResults = [];
    for (const asyncPayloadRecord of exeContext.subsequentPayloads){
        const incrementalResult = {};
        if (!asyncPayloadRecord.isCompleted) {
            continue;
        }
        exeContext.subsequentPayloads.delete(asyncPayloadRecord);
        if (isStreamPayload(asyncPayloadRecord)) {
            const items = asyncPayloadRecord.items;
            if (asyncPayloadRecord.isCompletedIterator) {
                continue;
            }
            incrementalResult.items = items;
        } else {
            const data = asyncPayloadRecord.data;
            incrementalResult.data = data ?? null;
        }
        incrementalResult.path = asyncPayloadRecord.path;
        if (asyncPayloadRecord.label) {
            incrementalResult.label = asyncPayloadRecord.label;
        }
        if (asyncPayloadRecord.errors.length > 0) {
            incrementalResult.errors = asyncPayloadRecord.errors;
        }
        incrementalResults.push(incrementalResult);
    }
    return incrementalResults;
}
function yieldSubsequentPayloads(exeContext) {
    let isDone = false;
    async function next() {
        if (isDone) {
            return {
                value: undefined,
                done: true
            };
        }
        const subSequentPayloadPromises = Array.from(exeContext.subsequentPayloads).map((record)=>record.promise);
        if (exeContext.signalPromise) {
            await Promise.race([
                exeContext.signalPromise,
                ...subSequentPayloadPromises
            ]);
        } else {
            await Promise.race(subSequentPayloadPromises);
        }
        if (isDone) {
            // a different call to next has exhausted all payloads
            return {
                value: undefined,
                done: true
            };
        }
        const incremental = getCompletedIncrementalResults(exeContext);
        const hasNext = exeContext.subsequentPayloads.size > 0;
        if (!incremental.length && hasNext) {
            return next();
        }
        if (!hasNext) {
            isDone = true;
        }
        return {
            value: incremental.length ? {
                incremental,
                hasNext
            } : {
                hasNext
            },
            done: false
        };
    }
    function returnStreamIterators() {
        const promises = [];
        exeContext.subsequentPayloads.forEach((asyncPayloadRecord)=>{
            if (isStreamPayload(asyncPayloadRecord) && asyncPayloadRecord.iterator?.return) {
                promises.push(asyncPayloadRecord.iterator.return());
            }
        });
        return Promise.all(promises);
    }
    return {
        [Symbol.asyncIterator] () {
            return this;
        },
        next,
        async return () {
            await returnStreamIterators();
            isDone = true;
            return {
                value: undefined,
                done: true
            };
        },
        async throw (error) {
            await returnStreamIterators();
            isDone = true;
            throw error;
        },
        async [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$disposablestack$40$0$2e$0$2e$6$2f$node_modules$2f40$whatwg$2d$node$2f$disposablestack$2f$esm$2f$symbols$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DisposableSymbols"].asyncDispose] () {
            await returnStreamIterators();
            isDone = true;
        }
    };
}
class DeferredFragmentRecord {
    type;
    errors;
    label;
    path;
    promise;
    data;
    parentContext;
    isCompleted;
    _exeContext;
    _resolve;
    constructor(opts){
        this.type = 'defer';
        this.label = opts.label;
        this.path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(opts.path);
        this.parentContext = opts.parentContext;
        this.errors = [];
        this._exeContext = opts.exeContext;
        this._exeContext.subsequentPayloads.add(this);
        this.isCompleted = false;
        this.data = null;
        this.promise = new Promise((resolve)=>{
            this._resolve = (MaybePromise)=>{
                resolve(MaybePromise);
            };
        }).then((data)=>{
            this.data = data;
            this.isCompleted = true;
        });
    }
    addData(data) {
        const parentData = this.parentContext?.promise;
        if (parentData) {
            this._resolve?.(parentData.then(()=>data));
            return;
        }
        this._resolve?.(data);
    }
}
class StreamRecord {
    type;
    errors;
    label;
    path;
    items;
    promise;
    parentContext;
    iterator;
    isCompletedIterator;
    isCompleted;
    _exeContext;
    _resolve;
    constructor(opts){
        this.type = 'stream';
        this.items = null;
        this.label = opts.label;
        this.path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$Path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(opts.path);
        this.parentContext = opts.parentContext;
        this.iterator = opts.iterator;
        this.errors = [];
        this._exeContext = opts.exeContext;
        this._exeContext.subsequentPayloads.add(this);
        this.isCompleted = false;
        this.items = null;
        this.promise = new Promise((resolve)=>{
            this._resolve = (MaybePromise)=>{
                resolve(MaybePromise);
            };
        }).then((items)=>{
            this.items = items;
            this.isCompleted = true;
        });
    }
    addItems(items) {
        const parentData = this.parentContext?.promise;
        if (parentData) {
            this._resolve?.(parentData.then(()=>items));
            return;
        }
        this._resolve?.(items);
    }
    setIsCompletedIterator() {
        this.isCompletedIterator = true;
    }
}
function isStreamPayload(asyncPayload) {
    return asyncPayload.type === 'stream';
}
function getFieldDef(schema, parentType, fieldNode) {
    const fieldName = fieldNode.name.value;
    if (fieldName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaMetaFieldDef"];
    } else if (fieldName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeMetaFieldDef"];
    } else if (fieldName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeNameMetaFieldDef"].name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$introspection$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeNameMetaFieldDef"];
    }
    return parentType.getFields()[fieldName];
}
function isIncrementalResult(result) {
    return 'incremental' in result;
}
}),
"[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/normalizedExecutor.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executorFromSchema",
    ()=>executorFromSchema,
    "normalizedExecutor",
    ()=>normalizedExecutor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$getOperationAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/getOperationAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@11.0.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/memoize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/execute.js [app-route] (ecmascript)");
;
;
;
;
function normalizedExecutor(args) {
    const operationAST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$getOperationAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOperationAST"])(args.document, args.operationName);
    if (operationAST == null) {
        throw new Error('Must provide an operation.');
    }
    if (operationAST.operation === 'subscription') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscribe"])(args);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"])(args), (result)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIncrementalResults"])(result)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenIncrementalResults"])(result);
        }
        return result;
    });
}
const executorFromSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$11$2e$0$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$memoize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memoize1"])(function executorFromSchema(schema) {
    return function schemaExecutor(request) {
        return normalizedExecutor({
            schema,
            document: request.document,
            variableValues: request.variables,
            operationName: request.operationName,
            rootValue: request.rootValue,
            contextValue: request.context,
            signal: request.signal || request.info?.signal,
            schemaCoordinateInErrors: request.schemaCoordinateInErrors
        });
    };
});
}),
];

//# sourceMappingURL=fc13a_%40graphql-tools_executor_esm_execution_93f8a2b7._.js.map