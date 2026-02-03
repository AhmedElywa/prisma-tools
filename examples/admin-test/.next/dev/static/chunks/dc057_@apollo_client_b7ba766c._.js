(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The current status of a query’s execution in our system.
 */ __turbopack_context__.s([
    "NetworkStatus",
    ()=>NetworkStatus
]);
var NetworkStatus;
(function(NetworkStatus) {
    /**
     * The query has never been run before and the query is now currently running. A query will still
     * have this network status even if a partial data result was returned from the cache, but a
     * query was dispatched anyway.
     */ NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    /**
     * If `setVariables` was called and a query was fired because of that then the network status
     * will be `setVariables` until the result of that query comes back.
     */ NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    /**
     * Indicates that `fetchMore` was called on this query and that the query created is currently in
     * flight.
     */ NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    /**
     * Similar to the `setVariables` network status. It means that `refetch` was called on a query
     * and the refetch request is currently in flight.
     */ NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    /**
     * Indicates that a polling query is currently in flight. So for example if you are polling a
     * query every 10 seconds then the network status will switch to `poll` every 10 seconds whenever
     * a poll request has been sent but not resolved.
     */ NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    /**
     * No request is in flight for this query, and no errors happened. Everything is OK.
     */ NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    /**
     * No request is in flight for this query, but one or more errors were detected.
     */ NetworkStatus[NetworkStatus["error"] = 8] = "error";
    /**
     * Indicates that a `@defer` query has received at least the first chunk of
     * the result but the full result has not yet been fully streamed to the
     * client.
     */ NetworkStatus[NetworkStatus["streaming"] = 9] = "streaming";
})(NetworkStatus || (NetworkStatus = {})); //# sourceMappingURL=networkStatus.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/environment/index.development.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__DEV__",
    ()=>__DEV__
]);
const __DEV__ = true; //# sourceMappingURL=index.development.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "isNonNullObject",
    ()=>isNonNullObject
]);
function isNonNullObject(obj) {
    return obj !== null && typeof obj === "object";
} //# sourceMappingURL=isNonNullObject.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/deepFreeze.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepFreeze",
    ()=>deepFreeze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/environment/index.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-client] (ecmascript)");
;
;
function deepFreeze(value) {
    const workSet = new Set([
        value
    ]);
    workSet.forEach((obj)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullObject"])(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach((name)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonNullObject"])(obj[name])) workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__DEV__"] && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        } catch (e) {
            // Some types like Uint8Array and Node.js's Buffer cannot be frozen, but
            // they all throw a TypeError when you try, so we re-throw any exceptions
            // that are not TypeErrors, since that would be unexpected.
            if (e instanceof TypeError) return null;
            throw e;
        }
    }
    return obj;
} //# sourceMappingURL=deepFreeze.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maybeDeepFreeze",
    ()=>maybeDeepFreeze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/environment/index.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$deepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/deepFreeze.js [app-client] (ecmascript)");
;
;
function maybeDeepFreeze(obj) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__DEV__"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$deepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepFreeze"])(obj);
    }
    return obj;
} //# sourceMappingURL=maybeDeepFreeze.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* Merges the provided objects shallowly and removes
* all properties with an `undefined` value
*
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "compact",
    ()=>compact
]);
function compact(...objects) {
    const result = {};
    objects.forEach((obj)=>{
        if (!obj) return;
        Reflect.ownKeys(obj).forEach((key)=>{
            const value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
} //# sourceMappingURL=compact.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/mergeOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeOptions",
    ()=>mergeOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/compact.js [app-client] (ecmascript)");
;
function mergeOptions(defaults, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"])(defaults, options, options.variables && {
        variables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"])({
            ...defaults && defaults.variables,
            ...options.variables
        })
    });
} //# sourceMappingURL=mergeOptions.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* Used to set `extensions` on the GraphQL result without exposing it
* unnecessarily. Only use internally!
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "extensionsSymbol",
    ()=>extensionsSymbol,
    "streamInfoSymbol",
    ()=>streamInfoSymbol,
    "variablesUnknownSymbol",
    ()=>variablesUnknownSymbol
]);
const extensionsSymbol = Symbol.for("apollo.result.extensions");
const streamInfoSymbol = Symbol.for("apollo.result.streamInfo");
const variablesUnknownSymbol = Symbol.for("apollo.observableQuery.variablesUnknown"); //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skipToken",
    ()=>skipToken
]);
const skipToken = Symbol.for("apollo.skipToken"); //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepMemo",
    ()=>useDeepMemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useDeepMemo(memoFn, deps) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    // eslint-disable-next-line react-hooks/refs
    if (!ref.current || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(ref.current.deps, deps)) {
        ref.current = {
            value: memoFn(),
            deps
        };
    }
    // eslint-disable-next-line react-hooks/refs
    return ref.current.value;
} //# sourceMappingURL=useDeepMemo.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/internal/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapperSymbol",
    ()=>wrapperSymbol
]);
;
;
const wrapperSymbol = Symbol.for("apollo.hook.wrappers"); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/invariantErrorCodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is used by the error message display website and the
// @apollo/client/includeErrors entry point.
// This file is not meant to be imported manually.
__turbopack_context__.s([
    "devDebug",
    ()=>devDebug,
    "devError",
    ()=>devError,
    "devLog",
    ()=>devLog,
    "devWarn",
    ()=>devWarn,
    "errorCodes",
    ()=>errorCodes
]);
const errorCodes = {
    1: {
        file: "@apollo/client/utilities/internal/checkDocument.js",
        condition: "doc && doc.kind === \"Document\"",
        message: `Expecting a parsed GraphQL document. Perhaps you need to wrap the query \
string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql`
    },
    2: {
        file: "@apollo/client/utilities/internal/checkDocument.js",
        message: `Schema type definitions not allowed in queries. Found: "%s"`
    },
    3: {
        file: "@apollo/client/utilities/internal/checkDocument.js",
        condition: "operations.length <= 1",
        message: `Ambiguous GraphQL document: contains %s operations`
    },
    4: {
        file: "@apollo/client/utilities/internal/checkDocument.js",
        condition: "operations.length == 1 && operations[0].operation === expectedType",
        message: `Running a %s requires a graphql ` + `%s, but a %s was used instead.`
    },
    5: {
        file: "@apollo/client/utilities/internal/checkDocument.js",
        message: '`%s` is a forbidden field alias name in the selection set for field `%s` in %s "%s".'
    },
    6: {
        file: "@apollo/client/utilities/internal/getFragmentDefinition.js",
        condition: "doc.kind === \"Document\"",
        message: `Expecting a parsed GraphQL document. Perhaps you need to wrap the query \
string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql`
    },
    7: {
        file: "@apollo/client/utilities/internal/getFragmentDefinition.js",
        condition: "doc.definitions.length <= 1",
        message: "Fragment must have exactly one definition."
    },
    8: {
        file: "@apollo/client/utilities/internal/getFragmentDefinition.js",
        condition: "fragmentDef.kind === \"FragmentDefinition\"",
        message: "Must be a fragment definition."
    },
    9: {
        file: "@apollo/client/utilities/internal/getFragmentFromSelection.js",
        condition: "fragment",
        message: `No fragment named %s`
    },
    10: {
        file: "@apollo/client/utilities/internal/getFragmentQueryDocument.js",
        message: `Found a %s operation%s. ` + "No operations are allowed when using a fragment as a query. Only fragments are allowed."
    },
    11: {
        file: "@apollo/client/utilities/internal/getFragmentQueryDocument.js",
        condition: "fragments.length === 1",
        message: `Found %s fragments. \`fragmentName\` must be provided when there is not exactly 1 fragment.`
    },
    12: {
        file: "@apollo/client/utilities/internal/getMainDefinition.js",
        message: "Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."
    },
    13: {
        file: "@apollo/client/utilities/internal/getQueryDefinition.js",
        condition: "queryDef && queryDef.operation === \"query\"",
        message: "Must contain a query definition."
    },
    15: {
        file: "@apollo/client/utilities/internal/shouldInclude.js",
        condition: "evaledValue !== void 0",
        message: `Invalid variable referenced in @%s directive.`
    },
    16: {
        file: "@apollo/client/utilities/internal/shouldInclude.js",
        condition: "directiveArguments && directiveArguments.length === 1",
        message: `Incorrect number of arguments for the @%s directive.`
    },
    17: {
        file: "@apollo/client/utilities/internal/shouldInclude.js",
        condition: "ifArgument.name && ifArgument.name.value === \"if\"",
        message: `Invalid argument for the @%s directive.`
    },
    18: {
        file: "@apollo/client/utilities/internal/shouldInclude.js",
        condition: "ifValue &&\n    (ifValue.kind === \"Variable\" || ifValue.kind === \"BooleanValue\")",
        message: `Argument for the @%s directive must be a variable or a boolean value.`
    },
    19: {
        file: "@apollo/client/utilities/internal/valueToObjectRepresentation.js",
        message: `The inline argument "%s" of kind "%s"` + "is not supported. Use variables instead of inline arguments to " + "overcome this limitation."
    },
    20: {
        file: "@apollo/client/utilities/graphql/DocumentTransform.js",
        condition: "Array.isArray(cacheKeys)",
        message: "`getCacheKey` must return an array or undefined"
    },
    21: {
        file: "@apollo/client/testing/core/mocking/mockLink.js",
        condition: "max > min",
        message: "realisticDelay: `min` must be less than `max`"
    },
    22: {
        file: "@apollo/client/testing/core/mocking/mockLink.js",
        condition: "queryWithoutClientOnlyDirectives",
        message: "query is required"
    },
    23: {
        file: "@apollo/client/testing/core/mocking/mockLink.js",
        condition: "serverQuery",
        message: "Cannot mock a client-only query. Mocked responses should contain at least one non-client field."
    },
    24: {
        file: "@apollo/client/testing/core/mocking/mockLink.js",
        condition: "(mock.maxUsageCount ?? 1) > 0",
        message: "Mocked response `maxUsageCount` must be greater than 0. Given %s"
    },
    25: {
        file: "@apollo/client/react/ssr/prerenderStatic.js",
        condition: "renderCount <= maxRerenders",
        message: `Exceeded maximum rerender count of %d.
This either means you have very deep \`useQuery\` waterfalls in your application
and need to increase the \`maxRerender\` option to \`prerenderStatic\`, or that
you have an infinite render loop in your application.`
    },
    26: {
        file: "@apollo/client/react/ssr/prerenderStatic.js",
        condition: "!signal?.aborted",
        message: "The operation was aborted before it could be attempted."
    },
    27: {
        file: "@apollo/client/react/internal/cache/QueryReference.js",
        condition: "!queryRef || QUERY_REFERENCE_SYMBOL in queryRef",
        message: "Expected a QueryRef object, but got something else instead."
    },
    28: {
        file: "@apollo/client/react/hooks/useApolloClient.js",
        condition: "!!client",
        message: 'Could not find "client" in the context or passed in as an option. ' + "Wrap the root component in an <ApolloProvider>, or pass an ApolloClient " + "instance in via options."
    },
    29: {
        file: "@apollo/client/react/hooks/useLazyQuery.js",
        condition: "resultRef.current",
        message: "useLazyQuery: '%s' cannot be called before executing the query."
    },
    30: {
        file: "@apollo/client/react/hooks/useLazyQuery.js",
        condition: "!calledDuringRender()",
        message: "useLazyQuery: 'execute' should not be called during render. To start a query during render, use the 'useQuery' hook."
    },
    31: {
        file: "@apollo/client/react/hooks/useLoadableQuery.js",
        condition: "!calledDuringRender()",
        message: "useLoadableQuery: 'loadQuery' should not be called during render. To start a query during render, use the 'useBackgroundQuery' hook."
    },
    32: {
        file: "@apollo/client/react/hooks/useLoadableQuery.js",
        condition: "internalQueryRef",
        message: "The query has not been loaded. Please load the query."
    },
    33: {
        file: "@apollo/client/react/hooks/useSubscription.js",
        condition: "!optionsRef.current.skip",
        message: "A subscription that is skipped cannot be restarted."
    },
    35: {
        file: "@apollo/client/react/hooks/internal/validateSuspenseHookOptions.js",
        condition: "supportedFetchPolicies.includes(fetchPolicy)",
        message: `The fetch policy \`%s\` is not supported with suspense.`
    },
    37: {
        file: "@apollo/client/react/context/ApolloContext.js",
        condition: "\"createContext\" in React",
        message: "Invoking `getApolloContext` in an environment where `React.createContext` is not available.\n" + "The Apollo Client functionality you are trying to use is only available in React Client Components.\n" + 'Please make sure to add "use client" at the top of your file.\n' + // TODO: change to React documentation once React documentation contains information about Client Components
        "For more information, see https://nextjs.org/docs/getting-started/react-essentials#client-components"
    },
    38: {
        file: "@apollo/client/react/context/ApolloProvider.js",
        condition: "context.client",
        message: "ApolloProvider was not passed a client instance. Make " + 'sure you pass in your client via the "client" prop.'
    },
    39: {
        file: "@apollo/client/masking/maskDefinition.js",
        condition: "fragment",
        message: "Could not find fragment with name '%s'."
    },
    41: {
        file: "@apollo/client/masking/maskFragment.js",
        condition: "fragments.length === 1",
        message: `Found %s fragments. \`fragmentName\` must be provided when there is not exactly 1 fragment.`
    },
    42: {
        file: "@apollo/client/masking/maskFragment.js",
        condition: "!!fragment",
        message: `Could not find fragment with name "%s".`
    },
    43: {
        file: "@apollo/client/masking/maskOperation.js",
        condition: "definition",
        message: "Expected a parsed GraphQL document with a query, mutation, or subscription."
    },
    47: {
        file: "@apollo/client/local-state/LocalState.js",
        condition: "hasDirectives([\"client\"], document)",
        message: "Expected document to contain `@client` fields."
    },
    48: {
        file: "@apollo/client/local-state/LocalState.js",
        condition: "hasDirectives([\"client\"], document)",
        message: "Expected document to contain `@client` fields."
    },
    49: {
        file: "@apollo/client/local-state/LocalState.js",
        condition: "fragment",
        message: "No fragment named %s"
    },
    55: {
        file: "@apollo/client/local-state/LocalState.js",
        message: "Could not resolve __typename on object %o returned from resolver '%s'. '__typename' needs to be returned to properly resolve child fields."
    },
    56: {
        file: "@apollo/client/local-state/LocalState.js",
        condition: "fragment",
        message: `No fragment named %s`
    },
    57: {
        file: "@apollo/client/local-state/LocalState.js",
        condition: "cache.fragmentMatches",
        message: "The configured cache does not support fragment matching which will lead to incorrect results when executing local resolvers. Please use a cache that implements `fragmetMatches`."
    },
    59: {
        file: "@apollo/client/link/persisted-queries/index.js",
        condition: "options &&\n    (typeof options.sha256 === \"function\" ||\n        typeof options.generateHash === \"function\")",
        message: 'Missing/invalid "sha256" or "generateHash" function. Please ' + 'configure one using the "createPersistedQueryLink(options)" options ' + "parameter."
    },
    60: {
        file: "@apollo/client/link/persisted-queries/index.js",
        condition: "forward",
        message: "PersistedQueryLink cannot be the last link in the chain."
    },
    61: {
        file: "@apollo/client/link/http/checkFetcher.js",
        condition: "fetcher || typeof fetch !== \"undefined\"",
        message: `
"fetch" has not been found globally and no fetcher has been \
configured. To fix this, install a fetch package (like \
https://www.npmjs.com/package/cross-fetch), instantiate the \
fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `
    },
    62: {
        file: "@apollo/client/link/http/parseAndCheckHttpResponse.js",
        condition: "response.body && typeof response.body.getReader === \"function\"",
        message: "Unknown type for `response.body`. Please use a `fetch` implementation that is WhatWG-compliant and that uses WhatWG ReadableStreams for `body`."
    },
    65: {
        file: "@apollo/client/link/core/ApolloLink.js",
        message: "request is not implemented"
    },
    66: {
        file: "@apollo/client/incremental/handlers/graphql17Alpha9.js",
        condition: "pending",
        message: "Could not find pending chunk for incremental value. Please file an issue for the Apollo Client team to investigate."
    },
    67: {
        file: "@apollo/client/incremental/handlers/notImplemented.js",
        condition: "!hasDirectives([\"defer\", \"stream\"], request.query)",
        message: "`@defer` and `@stream` are not supported without specifying an incremental handler. Please pass a handler as the `incrementalHandler` option to the `ApolloClient` constructor."
    },
    68: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "options.cache",
        message: "To initialize Apollo Client, you must specify a 'cache' property " + "in the options object. \n" + "For more information, please visit: https://go.apollo.dev/c/docs"
    },
    69: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "options.link",
        message: "To initialize Apollo Client, you must specify a 'link' property " + "in the options object. \n" + "For more information, please visit: https://go.apollo.dev/c/docs"
    },
    70: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "options.fetchPolicy !== \"cache-and-network\"",
        message: "The cache-and-network fetchPolicy does not work with client.query, because " + "client.query can only return a single result. Please use client.watchQuery " + "to receive multiple results from the cache and the network, or consider " + "using a different fetchPolicy, such as cache-first or network-only."
    },
    71: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "options.fetchPolicy !== \"standby\"",
        message: "The standby fetchPolicy does not work with client.query, because " + "standby does not fetch. Consider using a different fetchPolicy, such " + "as cache-first or network-only."
    },
    72: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "options.query",
        message: "query option is required. You must specify your GraphQL document " + "in the query option."
    },
    73: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "options.query.kind === \"Document\"",
        message: 'You must wrap the query string in a "gql" tag.'
    },
    74: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "!options.returnPartialData",
        message: "returnPartialData option only supported on watchQuery."
    },
    75: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "!options.pollInterval",
        message: "pollInterval option only supported on watchQuery."
    },
    76: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "!options.notifyOnNetworkStatusChange",
        message: "notifyOnNetworkStatusChange option only supported on watchQuery."
    },
    77: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "optionsWithDefaults.mutation",
        message: "The `mutation` option is required. Please provide a GraphQL document in the `mutation` option."
    },
    78: {
        file: "@apollo/client/core/ApolloClient.js",
        condition: "optionsWithDefaults.fetchPolicy === \"network-only\" ||\n    optionsWithDefaults.fetchPolicy === \"no-cache\"",
        message: "Mutations only support 'network-only' or 'no-cache' fetch policies. The default 'network-only' behavior automatically writes mutation results to the cache. Passing 'no-cache' skips the cache write."
    },
    80: {
        file: "@apollo/client/core/ObservableQuery.js",
        condition: "fetchPolicy === \"standby\"",
        message: "The `variablesUnknown` option can only be used together with a `standby` fetch policy."
    },
    82: {
        file: "@apollo/client/core/ObservableQuery.js",
        condition: "this.options.fetchPolicy !== \"cache-only\"",
        message: "Cannot execute `fetchMore` for 'cache-only' query '%s'. Please use a different fetch policy."
    },
    83: {
        file: "@apollo/client/core/ObservableQuery.js",
        condition: "updateQuery",
        message: "You must provide an `updateQuery` function when using `fetchMore` with a `no-cache` fetch policy."
    },
    87: {
        file: "@apollo/client/core/QueryManager.js",
        message: "QueryManager stopped while query was in flight"
    },
    88: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "this.localState",
        message: "Mutation '%s' contains `@client` fields with variables provided by `@export` but local state has not been configured."
    },
    89: {
        file: "@apollo/client/core/QueryManager.js",
        message: "Store reset while query was in flight (not completed in link chain)"
    },
    92: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "!this.getDocumentInfo(query).hasClientExports || this.localState",
        message: "Subscription '%s' contains `@client` fields with variables provided by `@export` but local state has not been configured."
    },
    93: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "this.localState",
        message: "%s '%s' contains `@client` fields but local state has not been configured."
    },
    94: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "!hasIncrementalDirective",
        message: "%s '%s' contains `@client` and `@defer` directives. These cannot be used together."
    },
    95: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "this.localState",
        message: "Query '%s' contains `@client` fields with variables provided by `@export` but local state has not been configured."
    },
    97: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "this.localState",
        message: "Query '%s' contains `@client` fields but local state has not been configured."
    },
    98: {
        file: "@apollo/client/core/QueryManager.js",
        condition: "didEmitValue",
        message: "The link chain completed without emitting a value. This is likely unintentional and should be updated to emit a value before completing."
    },
    99: {
        file: "@apollo/client/cache/inmemory/entityStore.js",
        condition: "typeof dataId === \"string\"",
        message: "store.merge expects a string ID"
    },
    102: {
        file: "@apollo/client/cache/inmemory/key-extractor.js",
        condition: "extracted !== void 0",
        message: `Missing field '%s' while extracting keyFields from %s`
    },
    103: {
        file: "@apollo/client/cache/inmemory/policies.js",
        condition: "!old || old === which",
        message: `Cannot change root %s __typename more than once`
    },
    106: {
        file: "@apollo/client/cache/inmemory/policies.js",
        message: "Cannot automatically merge arrays"
    },
    107: {
        file: "@apollo/client/cache/inmemory/readFromStore.js",
        message: `No fragment named %s`
    },
    108: {
        file: "@apollo/client/cache/inmemory/readFromStore.js",
        condition: "!isReference(value)",
        message: `Missing selection set for object of type %s returned for query field %s`
    },
    109: {
        file: "@apollo/client/cache/inmemory/writeToStore.js",
        message: `Could not identify object %s`
    },
    111: {
        file: "@apollo/client/cache/inmemory/writeToStore.js",
        message: `No fragment named %s`
    }
};
const devDebug = {
    79: {
        file: "@apollo/client/core/ApolloClient.js",
        message: `In client.refetchQueries, Promise.all promise rejected with error %o`
    },
    86: {
        file: "@apollo/client/core/ObservableQuery.js",
        message: `Missing cache result fields: %o`
    }
};
const devLog = {};
const devWarn = {
    36: {
        file: "@apollo/client/react/hooks/internal/validateSuspenseHookOptions.js",
        message: "Using `returnPartialData` with a `no-cache` fetch policy has no effect. To read partial data from the cache, consider using an alternate fetch policy."
    },
    40: {
        file: "@apollo/client/masking/maskDefinition.js",
        message: "Accessing unmasked field on %s at path '%s'. This field will not be available when masking is enabled. Please read the field from the fragment instead."
    },
    44: {
        file: "@apollo/client/masking/utils.js",
        message: "@unmask 'mode' argument does not support variables."
    },
    45: {
        file: "@apollo/client/masking/utils.js",
        message: "@unmask 'mode' argument must be of type string."
    },
    46: {
        file: "@apollo/client/masking/utils.js",
        message: "@unmask 'mode' argument does not recognize value '%s'."
    },
    50: {
        file: "@apollo/client/local-state/LocalState.js",
        message: "The '%s' field resolves the value from the cache, for example from a 'read' function, but a 'no-cache' fetch policy was used. The field value has been set to `null`. Either define a local resolver or use a fetch policy that uses the cache to ensure the field is resolved correctly."
    },
    51: {
        file: "@apollo/client/local-state/LocalState.js",
        message: "Could not find a resolver for the '%s' field nor does the cache resolve the field. The field value has been set to `null`. Either define a resolver for the field or ensure the cache can resolve the value, for example, by adding a 'read' function to a field policy in 'InMemoryCache'."
    },
    52: {
        file: "@apollo/client/local-state/LocalState.js",
        message: "The '%s' resolver returned `undefined` instead of a value. This is likely a bug in the resolver. If you didn't mean to return a value, return `null` instead."
    },
    53: {
        file: "@apollo/client/local-state/LocalState.js",
        message: "The '%s' field had no cached value and only forced resolvers were run. The value was set to `null`."
    },
    54: {
        file: "@apollo/client/local-state/LocalState.js",
        message: "The '%s' field on object %o returned `undefined` instead of a value. The parent resolver did not include the property in the returned value and there was no resolver defined for the field."
    },
    58: {
        file: "@apollo/client/link/ws/index.js",
        message: "`WebSocketLink` uses the deprecated and unmaintained `subscriptions-transport-ws` library. This link is no longer maintained and will be removed in a future major version of Apollo Client. We recommend switching to `GraphQLWsLink` which uses the `graphql-ws` library to send GraphQL operations through WebSocket connections (https://the-guild.dev/graphql/ws)."
    },
    63: {
        file: "@apollo/client/link/core/ApolloLink.js",
        message: "[ApolloLink.split]: The test function returned a non-boolean value which could result in subtle bugs (e.g. such as using an `async` function which always returns a truthy value). Got `%o`."
    },
    64: {
        file: "@apollo/client/link/core/ApolloLink.js",
        message: "The terminating link provided to `ApolloLink.execute` called `forward` instead of handling the request. " + "This results in an observable that immediately completes and does not emit a value. " + "Please provide a terminating link that properly handles the request.\n\n" + "If you are using a split link, ensure each branch contains a terminating link that handles the request."
    },
    81: {
        file: "@apollo/client/core/ObservableQuery.js",
        message: `Called refetch(%o) for query %o, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`
    },
    85: {
        file: "@apollo/client/core/ObservableQuery.js",
        message: "Cannot poll on 'cache-only' query '%s' and as such, polling is disabled. Please use a different fetch policy."
    },
    90: {
        file: "@apollo/client/core/QueryManager.js",
        message: `Unknown query named "%s" requested in refetchQueries options.include array`
    },
    91: {
        file: "@apollo/client/core/QueryManager.js",
        message: `Unknown anonymous query requested in refetchQueries options.include array`
    },
    96: {
        file: "@apollo/client/core/QueryManager.js",
        message: '[%s]: Fragments masked by data masking are inaccessible when using fetch policy "no-cache". Please add `@unmask` to each fragment spread to access the data.'
    },
    100: {
        file: "@apollo/client/cache/inmemory/entityStore.js",
        message: "cache.modify: You are trying to write a Reference that is not part of the store: %o\n" + "Please make sure to set the `mergeIntoStore` parameter to `true` when creating a Reference that is not part of the store yet:\n" + "`toReference(object, true)`"
    },
    101: {
        file: "@apollo/client/cache/inmemory/entityStore.js",
        message: "cache.modify: Writing an array with a mix of both References and Objects will not result in the Objects being normalized correctly.\n" + "Please convert the object instance %o to a Reference before writing it to the cache by calling `toReference(object, true)`."
    },
    104: {
        file: "@apollo/client/cache/inmemory/policies.js",
        message: `Inferring subtype %s of supertype %s`
    },
    105: {
        file: "@apollo/client/cache/inmemory/policies.js",
        message: `Undefined 'from' passed to readField with arguments %s`
    },
    112: {
        file: "@apollo/client/cache/inmemory/writeToStore.js",
        message: `Cache data may be lost when replacing the %s field of a %s object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), %sdefine a custom merge function for the %s field, so InMemoryCache can safely merge these objects:

  existing: %o
  incoming: %o

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`
    },
    113: {
        file: "@apollo/client/cache/core/cache.js",
        message: "Could not identify object passed to `from` for '%s' fragment, either because the object is non-normalized or the key fields are missing. If you are masking this object, please ensure the key fields are requested by the parent object."
    }
};
const devError = {
    14: {
        file: "@apollo/client/utilities/internal/removeDirectivesFromDocument.js",
        message: `Could not find operation or fragment`
    },
    34: {
        file: "@apollo/client/react/hooks/useSyncExternalStore.js",
        message: "The result of getSnapshot should be cached to avoid an infinite loop"
    },
    84: {
        file: "@apollo/client/core/ObservableQuery.js",
        message: "Unhandled GraphQL subscription error"
    },
    110: {
        file: "@apollo/client/cache/inmemory/writeToStore.js",
        message: `Missing field '%s' while writing result %o`
    }
};
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maybe",
    ()=>maybe
]);
function maybe(thunk) {
    try {
        return thunk();
    } catch  {}
} //# sourceMappingURL=maybe.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/global.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = // long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>globalThis) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>window) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>self) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>/*TURBOPACK member replacement*/ __turbopack_context__.g) || // improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"].constructor("return this")();
});
 //# sourceMappingURL=global.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/global.js [app-client] (ecmascript) <export default as global>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "global",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/global.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "build",
    ()=>build,
    "version",
    ()=>version
]);
const version = "4.1.2";
const build = "esm"; //# sourceMappingURL=version.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/symbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloErrorMessageHandler",
    ()=>ApolloErrorMessageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/version.js [app-client] (ecmascript)");
;
const ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]); //# sourceMappingURL=symbol.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/setErrorMessageHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setErrorMessageHandler",
    ()=>setErrorMessageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/global.js [app-client] (ecmascript) <export default as global>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/symbol.js [app-client] (ecmascript)");
;
;
function setErrorMessageHandler(handler) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloErrorMessageHandler"]] = handler;
} //# sourceMappingURL=setErrorMessageHandler.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadErrorMessageHandler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadErrorMessageHandler",
    ()=>loadErrorMessageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/global.js [app-client] (ecmascript) <export default as global>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$setErrorMessageHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/setErrorMessageHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/symbol.js [app-client] (ecmascript)");
;
;
;
function loadErrorMessageHandler(...errorCodes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$setErrorMessageHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setErrorMessageHandler"])(handler);
    for (const codes of errorCodes){
        Object.assign(handler, codes);
    }
    return handler;
}
const handler = (message, args)=>{
    if (typeof message === "number") {
        const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloErrorMessageHandler"]][message];
        if (!message || !definition?.message) return;
        message = definition.message;
    }
    return args.reduce((msg, arg)=>msg.replace(/%[sdfo]/, String(arg)), String(message));
}; //# sourceMappingURL=loadErrorMessageHandler.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadDevMessages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadDevMessages",
    ()=>loadDevMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/invariantErrorCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadErrorMessageHandler.js [app-client] (ecmascript)");
;
;
function loadDevMessages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadErrorMessageHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devDebug"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devError"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devLog"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devWarn"]);
} //# sourceMappingURL=loadDevMessages.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadErrorMessages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadErrorMessages",
    ()=>loadErrorMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/invariantErrorCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadErrorMessageHandler.js [app-client] (ecmascript)");
;
;
function loadErrorMessages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadErrorMessageHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorCodes"]);
} //# sourceMappingURL=loadErrorMessages.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/makeUniqueId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeUniqueId",
    ()=>makeUniqueId
]);
const prefixCounts = new Map();
function makeUniqueId(prefix) {
    const count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return `${prefix}:${count}:${Math.random().toString(36).slice(2)}`;
} //# sourceMappingURL=makeUniqueId.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/stringifyForDisplay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringifyForDisplay",
    ()=>stringifyForDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeUniqueId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/makeUniqueId.js [app-client] (ecmascript)");
;
function stringifyForDisplay(value, space = 0) {
    const undefId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeUniqueId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUniqueId"])("stringifyForDisplay");
    return JSON.stringify(value, (_, value)=>{
        return value === void 0 ? undefId : value;
    }, space).split(JSON.stringify(undefId)).join("<undefined>");
} //# sourceMappingURL=stringifyForDisplay.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloErrorMessageHandler",
    ()=>ApolloErrorMessageHandler,
    "InvariantError",
    ()=>InvariantError,
    "invariant",
    ()=>invariant,
    "newInvariantError",
    ()=>newInvariantError,
    "setVerbosity",
    ()=>setVerbosity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/environment/index.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/global.js [app-client] (ecmascript) <export default as global>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/version.js [app-client] (ecmascript)");
// eslint-disable-next-line local-rules/import-from-inside-other-export
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$stringifyForDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/stringifyForDisplay.js [app-client] (ecmascript)");
;
;
;
;
const genericMessage = "Invariant Violation";
class InvariantError extends Error {
    constructor(message = genericMessage){
        super(message);
        this.name = genericMessage;
        Object.setPrototypeOf(this, InvariantError.prototype);
    }
}
const verbosityLevels = [
    "debug",
    "log",
    "warn",
    "error",
    "silent"
];
let verbosityLevel = verbosityLevels.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__DEV__"] ? "log" : "silent");
function invariant(condition, ...args) {
    if (!condition) {
        throw newInvariantError(...args);
    }
}
function wrapConsoleMethod(name) {
    return function(message, ...args) {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            const method = console[name] || console.log;
            if (typeof message === "number") {
                const arg0 = message;
                message = getHandledErrorMsg(arg0);
                if (!message) {
                    message = getFallbackErrorMsg(arg0, args);
                    args = [];
                }
            }
            method(message, ...args);
        }
    };
}
invariant.debug = wrapConsoleMethod("debug");
invariant.log = wrapConsoleMethod("log");
invariant.warn = wrapConsoleMethod("warn");
invariant.error = wrapConsoleMethod("error");
function setVerbosity(level) {
    const old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
function newInvariantError(message, ...optionalParams) {
    return new InvariantError(getHandledErrorMsg(message, optionalParams) || getFallbackErrorMsg(message, optionalParams));
}
const ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]);
function stringify(arg) {
    if (typeof arg == "string") {
        return arg;
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$stringifyForDisplay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyForDisplay"])(arg, 2).slice(0, 1000);
    } catch  {
        return "<non-serializable>";
    }
}
function getHandledErrorMsg(message, messageArgs = []) {
    if (!message) return;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][ApolloErrorMessageHandler] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][ApolloErrorMessageHandler](message, messageArgs.map(stringify));
}
function getFallbackErrorMsg(message, messageArgs = []) {
    if (!message) return;
    if (typeof message === "string") {
        return messageArgs.reduce((msg, arg)=>msg.replace(/%[sdfo]/, stringify(arg)), message);
    }
    return `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"],
        message,
        args: messageArgs.map(stringify)
    }))}`;
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadDevMessages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadDevMessages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/dev/loadErrorMessages.js [app-client] (ecmascript)");
// eslint-disable-next-line local-rules/import-from-export
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.js [app-client] (ecmascript)");
;
;
;
const invariant = (()=>{
    // side effects in an IIFE
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadDevMessages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDevMessages"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadErrorMessages"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"];
})(); //# sourceMappingURL=index.development.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/context/ApolloContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApolloContext",
    ()=>getApolloContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>");
;
;
// To make sure Apollo Client doesn't create more than one React context
// (which can lead to problems like having an Apollo Client instance added
// in one context, then attempting to retrieve it from another different
// context), a single Apollo context is created and tracked in global state.
const contextKey = Symbol.for("__APOLLO_CONTEXT__");
function getApolloContext() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])("createContext" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, 37);
    let context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext[contextKey];
    if (!context) {
        Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext, contextKey, {
            value: context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true
        });
        context.displayName = "ApolloContext";
    }
    return context;
} //# sourceMappingURL=ApolloContext.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/wrapHook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapHook",
    ()=>wrapHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/internal/index.js [app-client] (ecmascript) <locals>");
// direct import to avoid circular dependency
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/context/ApolloContext.js [app-client] (ecmascript)");
;
;
;
function wrapHook(hookName, useHook, clientOrObsQuery) {
    // Priority-wise, the later entries in this array wrap
    // previous entries and could prevent them (and in the end,
    // even the original hook) from running
    const wrapperSources = [
        clientOrObsQuery["queryManager"],
        // if we are a hook (not `preloadQuery`), we are guaranteed to be inside of
        // a React render and can use context
        hookName.startsWith("use") ? // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApolloContext"])()) : undefined
    ];
    let wrapped = useHook;
    for (const source of wrapperSources){
        const wrapper = source?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrapperSymbol"]]?.[hookName];
        if (wrapper) {
            wrapped = wrapper(wrapped);
        }
    }
    return wrapped;
} //# sourceMappingURL=wrapHook.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApolloClient",
    ()=>useApolloClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/context/ApolloContext.js [app-client] (ecmascript)");
;
;
;
function useApolloClient(override) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApolloContext"])());
    const client = override || context.client;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!!client, 28);
    return client;
} //# sourceMappingURL=useApolloClient.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/canUseDOM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-client] (ecmascript)");
;
const canUseDOM = typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>window.document.createElement) === "function"; //# sourceMappingURL=canUseDOM.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncExternalStore",
    ()=>useSyncExternalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/environment/index.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/canUseDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
let didWarnUncachedGetSnapshot = false;
// Prevent webpack from complaining about our feature detection of the
// useSyncExternalStore property of the React namespace, which is expected not
// to exist when using React 17 and earlier, and that's fine.
const uSESKey = "useSyncExternalStore";
const realHook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[uSESKey];
const isReactNative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>navigator.product) == "ReactNative";
const usingJSDOM = // Following advice found in this comment from @domenic (maintainer of jsdom):
// https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
//
// Since we control the version of Jest and jsdom used when running Apollo
// Client tests, and that version is recent enough to include " jsdom/x.y.z"
// at the end of the user agent string, I believe this case is all we need to
// check. Testing for "Node.js" was recommended for backwards compatibility
// with older version of jsdom, but we don't have that problem.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>navigator.userAgent.indexOf("jsdom") >= 0) || false;
// Our tests should all continue to pass if we remove this !usingJSDOM
// condition, thereby allowing useLayoutEffect when using jsdom. Unfortunately,
// if we allow useLayoutEffect, then useSyncExternalStore generates many
// warnings about useLayoutEffect doing nothing on the server. While these
// warnings are harmless, this !usingJSDOM condition seems to be the best way to
// prevent them (i.e. skipping useLayoutEffect when using jsdom).
const canUseLayoutEffect = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] || isReactNative) && !usingJSDOM;
const useSyncExternalStore = realHook || ((subscribe, getSnapshot, getServerSnapshot)=>{
    // Read the current snapshot from the store on every render. Again, this
    // breaks the rules of React, and only works here because of specific
    // implementation details, most importantly that updates are
    // always synchronous.
    const value = getSnapshot();
    if (// DEVIATION: Using __DEV__
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__DEV__"] && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        // DEVIATION: Using invariant.error instead of console.error directly.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(34);
    }
    // Because updates are synchronous, we don't queue them. Instead we force a
    // re-render whenever the subscribed state changes by updating an some
    // arbitrary useState hook. Then, during render, we call getSnapshot to read
    // the current value.
    //
    // Because we don't actually use the state returned by the useState hook, we
    // can save a bit of memory by storing other stuff in that slot.
    //
    // To implement the early bailout, we need to track some things on a mutable
    // object. Usually, we would put that in a useRef hook, but we can stash it in
    // our useState hook instead.
    //
    // To force a re-render, we call forceUpdate({inst}). That works because the
    // new object always fails an equality check.
    const [{ inst }, forceUpdate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        inst: {
            value,
            getSnapshot
        }
    });
    // Track the latest getSnapshot function with a ref. This needs to be updated
    // in the layout phase so we can access it during the tearing check that
    // happens on subscribe.
    if (canUseLayoutEffect) {
        // DEVIATION: We avoid calling useLayoutEffect when !canUseLayoutEffect,
        // which may seem like a conditional hook, but this code ends up behaving
        // unconditionally (one way or the other) because canUseLayoutEffect is
        // constant.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect(()=>{
            Object.assign(inst, {
                value,
                getSnapshot
            });
            // Whenever getSnapshot or subscribe changes, we need to check in the
            // commit phase if there was an interleaved mutation. In concurrent mode
            // this can happen all the time, but even in synchronous mode, an earlier
            // effect may have mutated the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({
                    inst
                });
            }
        // React Hook React.useLayoutEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
    } else {
        Object.assign(inst, {
            value,
            getSnapshot
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(()=>{
        // Check for changes right before subscribing. Subsequent changes will be
        // detected in the subscription handler.
        if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
                inst
            });
        }
        // Subscribe to the store and return a clean-up function.
        return subscribe(function handleStoreChange() {
            // TODO: Because there is no cross-renderer API for batching updates, it's
            // up to the consumer of this library to wrap their subscription event
            // with unstable_batchedUpdates. Should we try to detect when this isn't
            // the case and print a warning in development?
            // The store changed. Check if the snapshot changed since the last time we
            // read from the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({
                    inst
                });
            }
        });
    // React Hook React.useEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        subscribe
    ]);
    return value;
});
function checkIfSnapshotChanged({ value, getSnapshot }) {
    try {
        return value !== getSnapshot();
    } catch  {
        return true;
    }
} //# sourceMappingURL=useSyncExternalStore.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
/**
 * Function parameters in this file try to follow a common order for the sake of
 * readability and consistency. The order is as follows:
 *
 * resultData
 * observable
 * client
 * query
 * options
 * watchQueryOptions
 * makeWatchQueryOptions
 */ /**  */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/scheduler/asap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/mergeOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$wrapHook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/wrapHook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const lastWatchOptions = Symbol();
function useQuery(query, ...[options]) {
    "use no memo";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$wrapHook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapHook"])("useQuery", useQuery_, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(typeof options === "object" ? options.client : undefined))(query, options);
}
function useQuery_(query, options = {}) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(typeof options === "object" ? options.client : undefined);
    const { ssr } = typeof options === "object" ? options : {};
    const watchQueryOptions = useOptions(query, options, client.defaultOptions.watchQuery);
    function createState(previous) {
        const observable = client.watchQuery(watchQueryOptions);
        return {
            client,
            query,
            observable,
            resultData: {
                current: observable.getCurrentResult(),
                // Reuse previousData from previous InternalState (if any) to provide
                // continuity of previousData even if/when the query or client changes.
                previousData: previous?.resultData.current.data,
                variables: observable.variables
            }
        };
    }
    let [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](createState);
    if (client !== state.client || query !== state.query) {
        // If the client or query have changed, we need to create a new InternalState.
        // This will trigger a re-render with the new state, but it will also continue
        // to run the current render function to completion.
        // Since we sometimes trigger some side-effects in the render function, we
        // re-assign `state` to the new state to ensure that those side-effects are
        // triggered with the new state.
        setState(state = createState(state));
    }
    const { observable, resultData } = state;
    useInitialFetchPolicyIfNecessary(watchQueryOptions, observable);
    useResubscribeIfNecessary(resultData, observable, watchQueryOptions);
    const result = useResult(observable, resultData, ssr);
    const obsQueryFields = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useQuery_.useMemo[obsQueryFields]": ()=>({
                refetch: observable.refetch.bind(observable),
                fetchMore: observable.fetchMore.bind(observable),
                updateQuery: observable.updateQuery.bind(observable),
                startPolling: observable.startPolling.bind(observable),
                stopPolling: observable.stopPolling.bind(observable),
                subscribeToMore: observable.subscribeToMore.bind(observable)
            })
    }["useQuery_.useMemo[obsQueryFields]"], [
        observable
    ]);
    const previousData = resultData.previousData;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useQuery_.useMemo": ()=>{
            const { partial, ...rest } = result;
            return {
                ...rest,
                client,
                observable,
                variables: observable.variables,
                previousData,
                ...obsQueryFields
            };
        }
    }["useQuery_.useMemo"], [
        result,
        client,
        observable,
        previousData,
        obsQueryFields
    ]);
}
const fromSkipToken = Symbol();
function useOptions(query, options, defaultOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeepMemo"])({
        "useOptions.useDeepMemo": ()=>{
            if (options === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"]) {
                const opts = {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeOptions"])(defaultOptions, {
                        query,
                        fetchPolicy: "standby"
                    }),
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variablesUnknownSymbol"]]: true
                };
                opts[fromSkipToken] = true;
                return opts;
            }
            const watchQueryOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeOptions"])(defaultOptions, {
                ...options,
                query
            });
            if (options.skip) {
                watchQueryOptions.initialFetchPolicy = options.initialFetchPolicy || options.fetchPolicy;
                watchQueryOptions.fetchPolicy = "standby";
            }
            return watchQueryOptions;
        }
    }["useOptions.useDeepMemo"], [
        query,
        options,
        defaultOptions
    ]);
}
function useInitialFetchPolicyIfNecessary(watchQueryOptions, observable) {
    "use no memo";
    if (!watchQueryOptions.fetchPolicy) {
        watchQueryOptions.fetchPolicy = observable.options.initialFetchPolicy;
    }
}
function useResult(observable, resultData, ssr) {
    "use no memo";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useResult.useSyncExternalStore.useCallback": (handleStoreChange)=>{
            const subscription = observable// We use the asapScheduler here to prevent issues with trying to
            // update in the middle of a render. `reobserve` is kicked off in the
            // middle of a render and because RxJS emits values synchronously,
            // its possible for this `handleStoreChange` to be called in that same
            // render. This allows the render to complete before trying to emit a
            // new value.
            .pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeOn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asapScheduler"])).subscribe({
                "useResult.useSyncExternalStore.useCallback.subscription": (result)=>{
                    const previous = resultData.current;
                    if (// Avoid rerendering if the result is the same
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previous, result) && // Force rerender if the value was emitted because variables
                    // changed, such as when calling `refetch(newVars)` which returns
                    // the same data when `notifyOnNetworkStatusChange` is `false`.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(resultData.variables, observable.variables)) {
                        return;
                    }
                    resultData.variables = observable.variables;
                    if (previous.data && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previous.data, result.data)) {
                        resultData.previousData = previous.data;
                    }
                    resultData.current = result;
                    handleStoreChange();
                }
            }["useResult.useSyncExternalStore.useCallback.subscription"]);
            // Do the "unsubscribe" with a short delay.
            // This way, an existing subscription can be reused without an additional
            // request if "unsubscribe"  and "resubscribe" to the same ObservableQuery
            // happen in very fast succession.
            return ({
                "useResult.useSyncExternalStore.useCallback": ()=>{
                    setTimeout({
                        "useResult.useSyncExternalStore.useCallback": ()=>subscription.unsubscribe()
                    }["useResult.useSyncExternalStore.useCallback"]);
                }
            })["useResult.useSyncExternalStore.useCallback"];
        }
    }["useResult.useSyncExternalStore.useCallback"], [
        observable,
        resultData
    ]), {
        "useResult.useSyncExternalStore": ()=>resultData.current
    }["useResult.useSyncExternalStore"], {
        "useResult.useSyncExternalStore": ()=>ssr === false ? useQuery.ssrDisabledResult : resultData.current
    }["useResult.useSyncExternalStore"]);
}
// this hook is not compatible with any rules of React, and there's no good way to rewrite it.
// it should stay a separate hook that will not be optimized by the compiler
function useResubscribeIfNecessary(/** this hook will mutate properties on `resultData` */ resultData, /** this hook will mutate properties on `observable` */ observable, watchQueryOptions) {
    "use no memo";
    if (observable[lastWatchOptions] && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(observable[lastWatchOptions], watchQueryOptions)) {
        // If skipToken was used to generate options, we won't know the correct
        // initialFetchPolicy until the hook is rerendered with real options, so we
        // set it the next time we get real options
        if (observable[lastWatchOptions][fromSkipToken] && !watchQueryOptions.initialFetchPolicy) {
            watchQueryOptions.initialFetchPolicy = watchQueryOptions.fetchPolicy;
        }
        // Though it might be tempting to postpone this reobserve call to the
        // useEffect block, we need getCurrentResult to return an appropriate
        // loading:true result synchronously (later within the same call to
        // useQuery). Since we already have this.observable here (not true for
        // the very first call to useQuery), we are not initiating any new
        // subscriptions, though it does feel less than ideal that reobserve
        // (potentially) kicks off a network request (for example, when the
        // variables have changed), which is technically a side-effect.
        if (shouldReobserve(observable[lastWatchOptions], watchQueryOptions)) {
            observable.reobserve(watchQueryOptions);
        } else {
            observable.applyOptions(watchQueryOptions);
        }
        // Make sure getCurrentResult returns a fresh ApolloQueryResult<TData>,
        // but save the current data as this.previousData, just like setResult
        // usually does.
        const result = observable.getCurrentResult();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(result.data, resultData.current.data)) {
            resultData.previousData = resultData.current.data || resultData.previousData;
        }
        resultData.current = result;
        resultData.variables = observable.variables;
    }
    observable[lastWatchOptions] = watchQueryOptions;
}
function shouldReobserve(previousOptions, options) {
    return previousOptions.query !== options.query || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previousOptions.variables, options.variables) || previousOptions.fetchPolicy !== options.fetchPolicy && (options.fetchPolicy === "standby" || previousOptions.fetchPolicy === "standby");
}
useQuery.ssrDisabledResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])({
    loading: true,
    data: void 0,
    dataState: "empty",
    error: void 0,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].loading,
    partial: true
}); //# sourceMappingURL=useQuery.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRenderGuard",
    ()=>useRenderGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
let Ctx;
function noop() {}
function useRenderGuard() {
    if (!Ctx) {
        // we want the initialization to be lazy because `createContext` would error on import in a RSC
        Ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useRenderGuard.useCallback": /**
     * @returns true if the hook was called during render
     */ ()=>{
            const orig = console.error;
            try {
                console.error = noop;
                /**
             * `useContext` can be called conditionally during render, so this is safe.
             * (Also, during render we would want to throw as a reaction to this anyways, so it
             * wouldn't even matter if we got the order of hooks mixed up...)
             *
             * They cannot however be called outside of Render, and that's what we're testing here.
             *
             * Different versions of React have different behaviour on an invalid hook call:
             *
             * React 16.8 - 17: throws an error
             * https://github.com/facebook/react/blob/2b93d686e359c7afa299e2ec5cf63160a32a1155/packages/react/src/ReactHooks.js#L18-L26
             *
             * React 18 & 19: `console.error` in development, then `resolveDispatcher` returns `null` and a member access on `null` throws.
             * https://github.com/facebook/react/blob/58e8304483ebfadd02a295339b5e9a989ac98c6e/packages/react/src/ReactHooks.js#L28-L35
             */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext" /* hide this from the linter */ ](Ctx);
                return true;
            } catch (e) {
                return false;
            } finally{
                console.error = orig;
            }
        }
    }["useRenderGuard.useCallback"], []);
} //# sourceMappingURL=useRenderGuard.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/canUseDOM.js [app-client] (ecmascript)");
;
;
const useIsomorphicLayoutEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]; //# sourceMappingURL=useIsomorphicLayoutEffect.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useLazyQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyQuery",
    ()=>useLazyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useRenderGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// The following methods, when called will execute the query, regardless of
// whether the useLazyQuery execute function was called before.
const EAGER_METHODS = [
    "refetch",
    "fetchMore",
    "updateQuery",
    "startPolling",
    "stopPolling",
    "subscribeToMore"
];
function useLazyQuery(query, options) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(options?.client);
    const previousDataRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const resultRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const stableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeepMemo"])({
        "useLazyQuery.useDeepMemo[stableOptions]": ()=>options
    }["useLazyQuery.useDeepMemo[stableOptions]"], [
        options
    ]);
    const calledDuringRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useRenderGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderGuard"])();
    function createObservable() {
        return client.watchQuery({
            ...options,
            query,
            initialFetchPolicy: options?.fetchPolicy,
            fetchPolicy: "standby",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variablesUnknownSymbol"]]: true
        });
    }
    const [currentClient, setCurrentClient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](client);
    const [observable, setObservable] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](createObservable);
    if (currentClient !== client) {
        setCurrentClient(client);
        setObservable(createObservable());
    }
    // TODO: Revisit after we have RxJS in place. We should be able to use
    // observable.getCurrentResult() (or equivalent) to get these values which
    // will hopefully alleviate the need for us to use refs to track these values.
    const updateResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useCallback[updateResult]": (result, forceUpdate)=>{
            const previousData = resultRef.current?.data;
            if (previousData && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previousData, result.data)) {
                previousDataRef.current = previousData;
            }
            resultRef.current = result;
            forceUpdate();
        }
    }["useLazyQuery.useCallback[updateResult]"], []);
    const observableResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useSyncExternalStore[observableResult]": (forceUpdate)=>{
            const subscription = observable.subscribe({
                "useLazyQuery.useSyncExternalStore[observableResult].subscription": (result)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(resultRef.current, result)) {
                        updateResult(result, forceUpdate);
                    }
                }
            }["useLazyQuery.useSyncExternalStore[observableResult].subscription"]);
            return ({
                "useLazyQuery.useSyncExternalStore[observableResult]": ()=>{
                    subscription.unsubscribe();
                }
            })["useLazyQuery.useSyncExternalStore[observableResult]"];
        }
    }["useLazyQuery.useSyncExternalStore[observableResult]"], [
        observable,
        updateResult
    ]), {
        "useLazyQuery.useSyncExternalStore[observableResult]": ()=>resultRef.current || initialResult
    }["useLazyQuery.useSyncExternalStore[observableResult]"], {
        "useLazyQuery.useSyncExternalStore[observableResult]": ()=>initialResult
    }["useLazyQuery.useSyncExternalStore[observableResult]"]);
    // We use useMemo here to make sure the eager methods have a stable identity.
    const eagerMethods = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLazyQuery.useMemo[eagerMethods]": ()=>{
            const eagerMethods = {};
            for (const key of EAGER_METHODS){
                eagerMethods[key] = ({
                    "useLazyQuery.useMemo[eagerMethods]": function(...args) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(resultRef.current, 29, key);
                        // @ts-expect-error this is just to generic to type
                        return observable[key](...args);
                    }
                })["useLazyQuery.useMemo[eagerMethods]"];
            }
            return eagerMethods;
        }
    }["useLazyQuery.useMemo[eagerMethods]"], [
        observable
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLazyQuery.useEffect": ()=>{
            const updatedOptions = {
                query,
                errorPolicy: stableOptions?.errorPolicy,
                refetchWritePolicy: stableOptions?.refetchWritePolicy,
                returnPartialData: stableOptions?.returnPartialData,
                notifyOnNetworkStatusChange: stableOptions?.notifyOnNetworkStatusChange,
                nextFetchPolicy: options?.nextFetchPolicy,
                skipPollAttempt: options?.skipPollAttempt
            };
            // Wait to apply the changed fetch policy until after the execute
            // function has been called. The execute function will handle setting the
            // the fetch policy away from standby for us when called for the first time.
            if (observable.options.fetchPolicy !== "standby" && stableOptions?.fetchPolicy) {
                updatedOptions.fetchPolicy = stableOptions.fetchPolicy;
            }
            observable.applyOptions(updatedOptions);
        }
    }["useLazyQuery.useEffect"], [
        query,
        observable,
        stableOptions,
        // Ensure inline functions don't suffer from stale closures by checking for
        // these deps separately. @wry/equality doesn't compare function identity
        // so `stableOptions` isn't updated when using inline functions.
        options?.nextFetchPolicy,
        options?.skipPollAttempt
    ]);
    const execute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useCallback[execute]": (...args)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!calledDuringRender(), 30);
            const [executeOptions] = args;
            let fetchPolicy = observable.options.fetchPolicy;
            if (fetchPolicy === "standby") {
                fetchPolicy = observable.options.initialFetchPolicy;
            }
            return observable.reobserve({
                fetchPolicy,
                // If `variables` is not given, reset back to empty variables by
                // ensuring the key exists in options
                variables: executeOptions?.variables,
                context: executeOptions?.context ?? {}
            });
        }
    }["useLazyQuery.useCallback[execute]"], [
        observable,
        calledDuringRender
    ]);
    const executeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](execute);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useLazyQuery.useIsomorphicLayoutEffect": ()=>{
            executeRef.current = execute;
        }
    }["useLazyQuery.useIsomorphicLayoutEffect"]);
    const stableExecute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useCallback[stableExecute]": (...args)=>executeRef.current(...args)
    }["useLazyQuery.useCallback[stableExecute]"], []);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLazyQuery.useMemo[result]": ()=>{
            const { partial, ...result } = observableResult;
            return {
                ...eagerMethods,
                ...result,
                client,
                // eslint-disable-next-line react-hooks/refs
                previousData: previousDataRef.current,
                variables: observable.variables,
                observable,
                // eslint-disable-next-line react-hooks/refs
                called: !!resultRef.current
            };
        }
    }["useLazyQuery.useMemo[result]"], [
        client,
        observableResult,
        eagerMethods,
        observable
    ]);
    return [
        stableExecute,
        result
    ];
}
const initialResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])({
    data: undefined,
    dataState: "empty",
    loading: false,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
    partial: true
}); //# sourceMappingURL=useLazyQuery.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/preventUnhandledRejection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preventUnhandledRejection",
    ()=>preventUnhandledRejection
]);
function preventUnhandledRejection(promise) {
    promise.catch(()=>{});
    return promise;
} //# sourceMappingURL=preventUnhandledRejection.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/mergeOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$preventUnhandledRejection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/utilities/internal/preventUnhandledRejection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+b329472984bc1eae/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)");
;
;
;
;
;
function useMutation(mutation, options) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(options?.client);
    const [result, setResult] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>createInitialResult(client)
    }["useMutation.useState"]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        result,
        mutationId: 0,
        isMounted: true,
        client,
        mutation,
        options
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useMutation.useIsomorphicLayoutEffect": ()=>{
            Object.assign(ref.current, {
                client,
                options,
                mutation
            });
        }
    }["useMutation.useIsomorphicLayoutEffect"]);
    const execute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[execute]": (executeOptions = {})=>{
            const { options, mutation } = ref.current;
            const baseOptions = {
                ...options,
                mutation
            };
            const client = executeOptions.client || ref.current.client;
            const context = typeof executeOptions.context === "function" ? executeOptions.context(options?.context) : executeOptions.context;
            if (!ref.current.result.loading && ref.current.isMounted) {
                setResult(ref.current.result = {
                    loading: true,
                    error: undefined,
                    data: undefined,
                    called: true,
                    client
                });
            }
            const mutationId = ++ref.current.mutationId;
            const clientOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeOptions"])(baseOptions, {
                ...executeOptions,
                context
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$b329472984bc1eae$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$preventUnhandledRejection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preventUnhandledRejection"])(client.mutate(clientOptions).then({
                "useMutation.useCallback[execute]": (response)=>{
                    const { data, error } = response;
                    const onError = executeOptions.onError || ref.current.options?.onError;
                    if (error && onError) {
                        onError(error, clientOptions);
                    }
                    if (mutationId === ref.current.mutationId) {
                        const result = {
                            called: true,
                            loading: false,
                            data,
                            error,
                            client
                        };
                        if (ref.current.isMounted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(ref.current.result, result)) {
                            setResult(ref.current.result = result);
                        }
                    }
                    const onCompleted = executeOptions.onCompleted || ref.current.options?.onCompleted;
                    if (!error) {
                        onCompleted?.(response.data, clientOptions);
                    }
                    return response;
                }
            }["useMutation.useCallback[execute]"], {
                "useMutation.useCallback[execute]": (error)=>{
                    if (mutationId === ref.current.mutationId && ref.current.isMounted) {
                        const result = {
                            loading: false,
                            error,
                            data: void 0,
                            called: true,
                            client
                        };
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(ref.current.result, result)) {
                            setResult(ref.current.result = result);
                        }
                    }
                    const onError = executeOptions.onError || ref.current.options?.onError;
                    if (onError) {
                        onError(error, clientOptions);
                    }
                    throw error;
                }
            }["useMutation.useCallback[execute]"]));
        }
    }["useMutation.useCallback[execute]"], []);
    const reset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[reset]": ()=>{
            if (ref.current.isMounted) {
                const result = createInitialResult(ref.current.client);
                Object.assign(ref.current, {
                    mutationId: 0,
                    result
                });
                setResult(result);
            }
        }
    }["useMutation.useCallback[reset]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            const current = ref.current;
            current.isMounted = true;
            return ({
                "useMutation.useEffect": ()=>{
                    current.isMounted = false;
                }
            })["useMutation.useEffect"];
        }
    }["useMutation.useEffect"], []);
    return [
        execute,
        {
            reset,
            ...result
        }
    ];
}
function createInitialResult(client) {
    return {
        data: undefined,
        error: undefined,
        called: false,
        loading: false,
        client
    };
} //# sourceMappingURL=useMutation.js.map
}),
]);

//# sourceMappingURL=dc057_%40apollo_client_b7ba766c._.js.map