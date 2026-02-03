module.exports = [
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/invariantErrorCodes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = // long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(()=>globalThis) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(()=>window) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(()=>self) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(()=>/*TURBOPACK member replacement*/ __turbopack_context__.g) || // improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(function() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"].constructor("return this")();
});
 //# sourceMappingURL=global.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript) <export default as global>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "global",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/symbol.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloErrorMessageHandler",
    ()=>ApolloErrorMessageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/version.js [app-ssr] (ecmascript)");
;
const ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]); //# sourceMappingURL=symbol.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/setErrorMessageHandler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setErrorMessageHandler",
    ()=>setErrorMessageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript) <export default as global>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/symbol.js [app-ssr] (ecmascript)");
;
;
function setErrorMessageHandler(handler) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloErrorMessageHandler"]] = handler;
} //# sourceMappingURL=setErrorMessageHandler.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadErrorMessageHandler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadErrorMessageHandler",
    ()=>loadErrorMessageHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript) <export default as global>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$setErrorMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/setErrorMessageHandler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/symbol.js [app-ssr] (ecmascript)");
;
;
;
function loadErrorMessageHandler(...errorCodes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$setErrorMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setErrorMessageHandler"])(handler);
    for (const codes of errorCodes){
        Object.assign(handler, codes);
    }
    return handler;
}
const handler = (message, args)=>{
    if (typeof message === "number") {
        const definition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloErrorMessageHandler"]][message];
        if (!message || !definition?.message) return;
        message = definition.message;
    }
    return args.reduce((msg, arg)=>msg.replace(/%[sdfo]/, String(arg)), String(message));
}; //# sourceMappingURL=loadErrorMessageHandler.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadDevMessages.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadDevMessages",
    ()=>loadDevMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/invariantErrorCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadErrorMessageHandler.js [app-ssr] (ecmascript)");
;
;
function loadDevMessages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadErrorMessageHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devDebug"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devError"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devLog"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devWarn"]);
} //# sourceMappingURL=loadDevMessages.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadErrorMessages.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadErrorMessages",
    ()=>loadErrorMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/invariantErrorCodes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadErrorMessageHandler.js [app-ssr] (ecmascript)");
;
;
function loadErrorMessages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessageHandler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadErrorMessageHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$invariantErrorCodes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["errorCodes"]);
} //# sourceMappingURL=loadErrorMessages.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__DEV__",
    ()=>__DEV__
]);
const __DEV__ = true; //# sourceMappingURL=index.development.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeUniqueId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/stringifyForDisplay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringifyForDisplay",
    ()=>stringifyForDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeUniqueId.js [app-ssr] (ecmascript)");
;
function stringifyForDisplay(value, space = 0) {
    const undefId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeUniqueId"])("stringifyForDisplay");
    return JSON.stringify(value, (_, value)=>{
        return value === void 0 ? undefId : value;
    }, space).split(JSON.stringify(undefId)).join("<undefined>");
} //# sourceMappingURL=stringifyForDisplay.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript) <export default as global>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/version.js [app-ssr] (ecmascript)");
// eslint-disable-next-line local-rules/import-from-inside-other-export
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$stringifyForDisplay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/stringifyForDisplay.js [app-ssr] (ecmascript)");
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
let verbosityLevel = verbosityLevels.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? "log" : "silent");
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
const ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]);
function stringify(arg) {
    if (typeof arg == "string") {
        return arg;
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$stringifyForDisplay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyForDisplay"])(arg, 2).slice(0, 1000);
    } catch  {
        return "<non-serializable>";
    }
}
function getHandledErrorMsg(message, messageArgs = []) {
    if (!message) return;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][ApolloErrorMessageHandler] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][ApolloErrorMessageHandler](message, messageArgs.map(stringify));
}
function getFallbackErrorMsg(message, messageArgs = []) {
    if (!message) return;
    if (typeof message === "string") {
        return messageArgs.reduce((msg, arg)=>msg.replace(/%[sdfo]/, stringify(arg)), message);
    }
    return `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
        message,
        args: messageArgs.map(stringify)
    }))}`;
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadDevMessages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadDevMessages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/dev/loadErrorMessages.js [app-ssr] (ecmascript)");
// eslint-disable-next-line local-rules/import-from-export
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
;
;
;
const invariant = (()=>{
    // side effects in an IIFE
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadDevMessages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadDevMessages"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$dev$2f$loadErrorMessages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadErrorMessages"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"];
})(); //# sourceMappingURL=index.development.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/react/context/ApolloContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApolloContext",
    ()=>getApolloContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
// To make sure Apollo Client doesn't create more than one React context
// (which can lead to problems like having an Apollo Client instance added
// in one context, then attempting to retrieve it from another different
// context), a single Apollo context is created and tracked in global state.
const contextKey = Symbol.for("__APOLLO_CONTEXT__");
function getApolloContext() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])("createContext" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, 37);
    let context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext[contextKey];
    if (!context) {
        Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext, contextKey, {
            value: context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true
        });
        context.displayName = "ApolloContext";
    }
    return context;
} //# sourceMappingURL=ApolloContext.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/react/context/ApolloProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloProvider",
    ()=>ApolloProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/react/context/ApolloContext.js [app-ssr] (ecmascript)");
;
;
;
const ApolloProvider = ({ client, children })=>{
    const ApolloContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApolloContext"])();
    const parentContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](ApolloContext);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return {
            ...parentContext,
            client: client || parentContext.client
        };
    }, [
        parentContext,
        client
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(context.client, 38);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ApolloContext.Provider, {
        value: context
    }, children);
}; //# sourceMappingURL=ApolloProvider.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/hasDirectives.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasDirectives",
    ()=>hasDirectives
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
;
function hasDirectives(names, root, all) {
    const nameSet = new Set(names);
    const uniqueCount = nameSet.size;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(root, {
        Directive (node) {
            if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BREAK"];
            }
        }
    });
    // If we found all the names, nameSet will be empty. If we only care about
    // finding some of them, the < condition is sufficient.
    return all ? !nameSet.size : nameSet.size < uniqueCount;
} //# sourceMappingURL=hasDirectives.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/incremental/handlers/notImplemented.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotImplementedHandler",
    ()=>NotImplementedHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/hasDirectives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
class NotImplementedHandler {
    isIncrementalResult(_) {
        return false;
    }
    prepareRequest(request) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
            "defer",
            "stream"
        ], request.query), 67);
        return request;
    }
    extractErrors() {}
    // This code path can never be reached, so we won't implement it.
    startRequest = undefined;
} //# sourceMappingURL=notImplemented.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cacheSizes",
    ()=>cacheSizes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/global.js [app-ssr] (ecmascript) <export default as global>");
;
const cacheSizeSymbol = Symbol.for("apollo.cacheSize");
const cacheSizes = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__global$3e$__["global"][cacheSizeSymbol]
}; //# sourceMappingURL=sizes.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationName.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "getOperationName",
    ()=>getOperationName
]);
function getOperationName(doc, fallback) {
    return doc.definitions.find((definition)=>definition.kind === "OperationDefinition" && !!definition.name)?.name.value ?? fallback;
} //# sourceMappingURL=getOperationName.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/caches.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoCleanedStrongCache",
    ()=>AutoCleanedStrongCache,
    "AutoCleanedWeakCache",
    ()=>AutoCleanedWeakCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+caches@1.0.1/node_modules/@wry/caches/lib/strong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+caches@1.0.1/node_modules/@wry/caches/lib/weak.js [app-ssr] (ecmascript)");
;
const scheduledCleanup = new WeakSet();
function schedule(cache) {
    if (cache.size <= (cache.max || -1)) {
        return;
    }
    if (!scheduledCleanup.has(cache)) {
        scheduledCleanup.add(cache);
        setTimeout(()=>{
            cache.clean();
            scheduledCleanup.delete(cache);
        }, 100);
    }
}
const AutoCleanedWeakCache = function(max, dispose) {
    /*
    Some builds of `WeakCache` are function prototypes, some are classes.
    This library still builds with an ES5 target, so we can't extend the
    real classes.
    Instead, we have to use this workaround until we switch to a newer build
    target.
    */ const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeakCache"](max, dispose);
    cache.set = function(key, value) {
        const ret = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeakCache"].prototype.set.call(this, key, value);
        schedule(this);
        return ret;
    };
    return cache;
};
const AutoCleanedStrongCache = function(max, dispose) {
    /*
    Some builds of `StrongCache` are function prototypes, some are classes.
    This library still builds with an ES5 target, so we can't extend the
    real classes.
    Instead, we have to use this workaround until we switch to a newer build
    target.
    */ const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StrongCache"](max, dispose);
    cache.set = function(key, value) {
        const ret = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StrongCache"].prototype.set.call(this, key, value);
        schedule(this);
        return ret;
    };
    return cache;
}; //# sourceMappingURL=caches.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/memoize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoize",
    ()=>memoize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+trie@0.5.0/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/caches.js [app-ssr] (ecmascript)");
;
;
function memoize(fn, { max, makeCacheKey = (args)=>args }) {
    const keys = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"](true);
    const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoCleanedWeakCache"](max);
    return (...args)=>{
        const cacheKey = keys.lookupArray(makeCacheKey(args));
        const cached = cache.get(cacheKey);
        if (cached) {
            if (cached.error) {
                throw cached.error;
            }
            return cached.result;
        }
        const entry = cache.set(cacheKey, {});
        try {
            return entry.result = fn(...args);
        } catch (error) {
            entry.error = error;
            throw error;
        }
    };
} //# sourceMappingURL=memoize.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkDocument",
    ()=>checkDocument
]);
// Checks the document for errors and throws an exception if there is an error.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/memoize.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const checkDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])((doc, expectedType)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(doc && doc.kind === "Document", 1);
    const operations = doc.definitions.filter((d)=>d.kind === "OperationDefinition");
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
        doc.definitions.forEach((definition)=>{
            if (definition.kind !== "OperationDefinition" && definition.kind !== "FragmentDefinition") {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(2, definition.kind);
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(operations.length <= 1, 3, operations.length);
    }
    if (expectedType) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(operations.length == 1 && operations[0].operation === expectedType, 4, expectedType, expectedType, operations[0].operation);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(doc, {
        Field (field, _, __, path) {
            if (field.alias && (field.alias.value === "__typename" || field.alias.value.startsWith("__ac_")) && field.alias.value !== field.name.value) {
                // not using `invariant` so path calculation only happens in error case
                let current = doc, fieldPath = [];
                for (const key of path){
                    current = current[key];
                    if (current.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD) {
                        fieldPath.push(current.alias?.value || current.name.value);
                    }
                }
                fieldPath.splice(-1, 1, field.name.value);
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(5, field.alias.value, fieldPath.join("."), operations[0].operation, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(doc, "(anonymous)"));
            }
        }
    });
}, {
    max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["checkDocument"] || 2000 /* defaultCacheSizes["checkDocument"] */ 
}); //# sourceMappingURL=checkDocument.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOperationDefinition",
    ()=>getOperationDefinition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)");
;
function getOperationDefinition(doc) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(doc);
    return doc.definitions.filter((definition)=>definition.kind === "OperationDefinition")[0];
} //# sourceMappingURL=getOperationDefinition.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/utils/createOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOperation",
    ()=>createOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationName.js [app-ssr] (ecmascript)");
;
function createOperation(request, { client }) {
    const operation = {
        query: request.query,
        variables: request.variables || {},
        extensions: request.extensions || {},
        operationName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(request.query),
        operationType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(request.query).operation
    };
    let context = {
        ...request.context
    };
    const setContext = (next)=>{
        if (typeof next === "function") {
            context = {
                ...context,
                ...next(getContext())
            };
        } else {
            context = {
                ...context,
                ...next
            };
        }
    };
    const getContext = ()=>Object.freeze({
            ...context
        });
    Object.defineProperty(operation, "setContext", {
        enumerable: false,
        value: setContext
    });
    Object.defineProperty(operation, "getContext", {
        enumerable: false,
        value: getContext
    });
    Object.defineProperty(operation, "client", {
        enumerable: false,
        value: client
    });
    return operation;
} //# sourceMappingURL=createOperation.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloLink",
    ()=>ApolloLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$utils$2f$createOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/utils/createOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
;
;
;
;
class ApolloLink {
    /**
     * Creates a link that completes immediately and does not emit a result.
     *
     * @example
     *
     * ```ts
     * const link = ApolloLink.empty();
     * ```
     */ static empty() {
        return new ApolloLink(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY"]);
    }
    /**
     * Composes multiple links into a single composed link that executes each
     * provided link in serial order.
     *
     * @example
     *
     * ```ts
     * import { from, HttpLink, ApolloLink } from "@apollo/client";
     * import { RetryLink } from "@apollo/client/link/retry";
     * import MyAuthLink from "../auth";
     *
     * const link = ApolloLink.from([
     *   new RetryLink(),
     *   new MyAuthLink(),
     *   new HttpLink({ uri: "http://localhost:4000/graphql" }),
     * ]);
     * ```
     *
     * @param links - An array of `ApolloLink` instances or request handlers that
     * are executed in serial order.
     */ static from(links) {
        if (links.length === 0) return ApolloLink.empty();
        const [first, ...rest] = links;
        return first.concat(...rest);
    }
    /**
     * Creates a link that conditionally routes a request to different links.
     *
     * @example
     *
     * ```ts
     * import { ApolloLink, HttpLink } from "@apollo/client";
     *
     * const link = ApolloLink.split(
     *   (operation) => operation.getContext().version === 1,
     *   new HttpLink({ uri: "http://localhost:4000/v1/graphql" }),
     *   new HttpLink({ uri: "http://localhost:4000/v2/graphql" })
     * );
     * ```
     *
     * @param test - A predicate function that receives the current `operation`
     * and returns a boolean indicating which link to execute. Returning `true`
     * executes the `left` link. Returning `false` executes the `right` link.
     *
     * @param left - The link that executes when the `test` function returns
     * `true`.
     *
     * @param right - The link that executes when the `test` function returns
     * `false`. If the `right` link is not provided, the request is forwarded to
     * the next link in the chain.
     */ static split(test, left, right = new ApolloLink((op, forward)=>forward(op))) {
        const link = new ApolloLink((operation, forward)=>{
            const result = test(operation);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                if (typeof result !== "boolean") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(63, result);
                }
            }
            return result ? left.request(operation, forward) : right.request(operation, forward);
        });
        return Object.assign(link, {
            left,
            right
        });
    }
    /**
     * Executes a GraphQL request against a link. The `execute` function begins
     * the request by calling the request handler of the link.
     *
     * @example
     *
     * ```ts
     * const observable = ApolloLink.execute(link, { query, variables }, { client });
     *
     * observable.subscribe({
     *   next(value) {
     *     console.log("Received", value);
     *   },
     *   error(error) {
     *     console.error("Oops got error", error);
     *   },
     *   complete() {
     *     console.log("Request complete");
     *   },
     * });
     * ```
     *
     * @param link - The `ApolloLink` instance to execute the request.
     *
     * @param request - The GraphQL request details, such as the `query` and
     * `variables`.
     *
     * @param context - The execution context for the request, such as the
     * `client` making the request.
     */ static execute(link, request, context) {
        return link.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$utils$2f$createOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createOperation"])(request, context), ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(64);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY"];
        });
    }
    /**
     * Combines multiple links into a single composed link.
     *
     * @example
     *
     * ```ts
     * const link = ApolloLink.concat(firstLink, secondLink, thirdLink);
     * ```
     *
     * @param links - The links to concatenate into a single link. Each link will
     * execute in serial order.
     *
     * @deprecated Use `ApolloLink.from` instead. `ApolloLink.concat` will be
     * removed in a future major version.
     */ static concat(...links) {
        return ApolloLink.from(links);
    }
    constructor(request){
        if (request) this.request = request;
    }
    /**
     * Concatenates a link that conditionally routes a request to different links.
     *
     * @example
     *
     * ```ts
     * import { ApolloLink, HttpLink } from "@apollo/client";
     *
     * const previousLink = new ApolloLink((operation, forward) => {
     *   // Handle the request
     *
     *   return forward(operation);
     * });
     *
     * const link = previousLink.split(
     *   (operation) => operation.getContext().version === 1,
     *   new HttpLink({ uri: "http://localhost:4000/v1/graphql" }),
     *   new HttpLink({ uri: "http://localhost:4000/v2/graphql" })
     * );
     * ```
     *
     * @param test - A predicate function that receives the current `operation`
     * and returns a boolean indicating which link to execute. Returning `true`
     * executes the `left` link. Returning `false` executes the `right` link.
     *
     * @param left - The link that executes when the `test` function returns
     * `true`.
     *
     * @param right - The link that executes when the `test` function returns
     * `false`. If the `right` link is not provided, the request is forwarded to
     * the next link in the chain.
     */ split(test, left, right) {
        return this.concat(ApolloLink.split(test, left, right));
    }
    /**
     * Combines the link with other links into a single composed link.
     *
     * @example
     *
     * ```ts
     * import { ApolloLink, HttpLink } from "@apollo/client";
     *
     * const previousLink = new ApolloLink((operation, forward) => {
     *   // Handle the request
     *
     *   return forward(operation);
     * });
     *
     * const link = previousLink.concat(
     *   link1,
     *   link2,
     *   new HttpLink({ uri: "http://localhost:4000/graphql" })
     * );
     * ```
     */ concat(...links) {
        if (links.length === 0) {
            return this;
        }
        return links.reduce(this.combine.bind(this), this);
    }
    combine(left, right) {
        const link = new ApolloLink((operation, forward)=>{
            return left.request(operation, (op)=>right.request(op, forward));
        });
        return Object.assign(link, {
            left,
            right
        });
    }
    /**
     * Runs the request handler for the provided operation.
     *
     * > [!NOTE]
     * > This is called by the `ApolloLink.execute` function for you and should
     * > not be called directly. Prefer using `ApolloLink.execute` to make the
     * > request instead.
     */ request(operation, forward) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(65);
    }
    /**
    * @internal
    * Used to iterate through all links that are concatenations or `split` links.
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ left;
    /**
    * @internal
    * Used to iterate through all links that are concatenations or `split` links.
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ right;
} //# sourceMappingURL=ApolloLink.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/execute.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "execute",
    ()=>execute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)");
;
const execute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"].execute; //# sourceMappingURL=execute.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/DocumentTransform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentTransform",
    ()=>DocumentTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+caches@1.0.1/node_modules/@wry/caches/lib/weak.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+trie@0.5.0/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function identity(document) {
    return document;
}
class DocumentTransform {
    transform;
    cached;
    resultCache = new WeakSet();
    // This default implementation of getCacheKey can be overridden by providing
    // options.getCacheKey to the DocumentTransform constructor. In general, a
    // getCacheKey function may either return an array of keys (often including
    // the document) to be used as a cache key, or undefined to indicate the
    // transform for this document should not be cached.
    getCacheKey(document) {
        return [
            document
        ];
    }
    /**
     * Creates a DocumentTransform that returns the input document unchanged.
     *
     * @returns The input document
     */ static identity() {
        // No need to cache this transform since it just returns the document
        // unchanged. This should save a bit of memory that would otherwise be
        // needed to populate the `documentCache` of this transform.
        return new DocumentTransform(identity, {
            cache: false
        });
    }
    /**
     * Creates a DocumentTransform that conditionally applies one of two transforms.
     *
     * @param predicate - Function that determines which transform to apply
     * @param left - Transform to apply when `predicate` returns `true`
     * @param right - Transform to apply when `predicate` returns `false`. If not provided, it defaults to `DocumentTransform.identity()`.
     * @returns A DocumentTransform that conditionally applies a document transform based on the predicate
     *
     * @example
     *
     * ```ts
     * import { isQueryOperation } from "@apollo/client/utilities";
     *
     * const conditionalTransform = DocumentTransform.split(
     *   (document) => isQueryOperation(document),
     *   queryTransform,
     *   mutationTransform
     * );
     * ```
     */ static split(predicate, left, right = DocumentTransform.identity()) {
        return Object.assign(new DocumentTransform((document)=>{
            const documentTransform = predicate(document) ? left : right;
            return documentTransform.transformDocument(document);
        }, // Reasonably assume both `left` and `right` transforms handle their own caching
        {
            cache: false
        }), {
            left,
            right
        });
    }
    constructor(transform, options = {}){
        this.transform = transform;
        if (options.getCacheKey) {
            // Override default `getCacheKey` function, which returns [document].
            this.getCacheKey = options.getCacheKey;
        }
        this.cached = options.cache !== false;
        this.resetCache();
    }
    /**
     * Resets the internal cache of this transform, if it is cached.
     */ resetCache() {
        if (this.cached) {
            const stableCacheKeys = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"]();
            this.performWork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrap"])(DocumentTransform.prototype.performWork.bind(this), {
                makeCacheKey: (document)=>{
                    const cacheKeys = this.getCacheKey(document);
                    if (cacheKeys) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(Array.isArray(cacheKeys), 20);
                        return stableCacheKeys.lookupArray(cacheKeys);
                    }
                },
                max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["documentTransform.cache"],
                cache: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeakCache"]
            });
        }
    }
    performWork(document) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(document);
        return this.transform(document);
    }
    /**
     * Transforms a GraphQL document using the configured transform function.
     *
     * @remarks
     *
     * Note that `transformDocument` caches the transformed document. Calling
     * `transformDocument` again with the already-transformed document will
     * immediately return it.
     *
     * @param document - The GraphQL document to transform
     * @returns The transformed document
     *
     * @example
     *
     * ```ts
     * const document = gql`
     *   # ...
     * `;
     *
     * const documentTransform = new DocumentTransform(transformFn);
     * const transformedDocument = documentTransform.transformDocument(document);
     * ```
     */ transformDocument(document) {
        // If a user passes an already transformed result back to this function,
        // immediately return it.
        if (this.resultCache.has(document)) {
            return document;
        }
        const transformedDocument = this.performWork(document);
        this.resultCache.add(transformedDocument);
        return transformedDocument;
    }
    /**
     * Combines this document transform with another document transform. The
     * returned document transform first applies the current document transform,
     * then applies the other document transform.
     *
     * @param otherTransform - The transform to apply after this one
     * @returns A new DocumentTransform that applies both transforms in sequence
     *
     * @example
     *
     * ```ts
     * const combinedTransform = addTypenameTransform.concat(
     *   removeDirectivesTransform
     * );
     * ```
     */ concat(otherTransform) {
        return Object.assign(new DocumentTransform((document)=>{
            return otherTransform.transformDocument(this.transformDocument(document));
        }, // Reasonably assume both transforms handle their own caching
        {
            cache: false
        }), {
            left: this,
            right: otherTransform
        });
    }
    /**
    * @internal
    * Used to iterate through all transforms that are concatenations or `split` links.
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ left;
    /**
    * @internal
    * Used to iterate through all transforms that are concatenations or `split` links.
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ right;
} //# sourceMappingURL=DocumentTransform.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMemoryInternals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApolloCacheMemoryInternals",
    ()=>getApolloCacheMemoryInternals,
    "getApolloClientMemoryInternals",
    ()=>getApolloClientMemoryInternals,
    "getInMemoryCacheMemoryInternals",
    ()=>getInMemoryCacheMemoryInternals,
    "registerGlobalCache",
    ()=>registerGlobalCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
;
;
const globalCaches = {};
function registerGlobalCache(name, getSize) {
    globalCaches[name] = getSize;
}
const getApolloClientMemoryInternals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? _getApolloClientMemoryInternals : undefined;
const getInMemoryCacheMemoryInternals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? _getInMemoryCacheMemoryInternals : undefined;
const getApolloCacheMemoryInternals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? _getApolloCacheMemoryInternals : undefined;
function getCurrentCacheSizes() {
    // `defaultCacheSizes` is a `const enum` that will be inlined during build, so we have to reconstruct it's shape here
    const defaults = {
        canonicalStringify: 1000 /* defaultCacheSizes["canonicalStringify"] */ ,
        checkDocument: 2000 /* defaultCacheSizes["checkDocument"] */ ,
        print: 2000 /* defaultCacheSizes["print"] */ ,
        "documentTransform.cache": 2000 /* defaultCacheSizes["documentTransform.cache"] */ ,
        "queryManager.getDocumentInfo": 2000 /* defaultCacheSizes["queryManager.getDocumentInfo"] */ ,
        "PersistedQueryLink.persistedQueryHashes": 2000 /* defaultCacheSizes["PersistedQueryLink.persistedQueryHashes"] */ ,
        "fragmentRegistry.transform": 2000 /* defaultCacheSizes["fragmentRegistry.transform"] */ ,
        "fragmentRegistry.lookup": 1000 /* defaultCacheSizes["fragmentRegistry.lookup"] */ ,
        "fragmentRegistry.findFragmentSpreads": 4000 /* defaultCacheSizes["fragmentRegistry.findFragmentSpreads"] */ ,
        "cache.fragmentQueryDocuments": 1000 /* defaultCacheSizes["cache.fragmentQueryDocuments"] */ ,
        "removeTypenameFromVariables.getVariableDefinitions": 2000 /* defaultCacheSizes["removeTypenameFromVariables.getVariableDefinitions"] */ ,
        "inMemoryCache.maybeBroadcastWatch": 5000 /* defaultCacheSizes["inMemoryCache.maybeBroadcastWatch"] */ ,
        "inMemoryCache.executeSelectionSet": 50000 /* defaultCacheSizes["inMemoryCache.executeSelectionSet"] */ ,
        "inMemoryCache.executeSubSelectedArray": 10000 /* defaultCacheSizes["inMemoryCache.executeSubSelectedArray"] */ 
    };
    return Object.fromEntries(Object.entries(defaults).map(([k, v])=>[
            k,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"][k] || v
        ]));
}
function _getApolloClientMemoryInternals() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) throw new Error("only supported in development mode");
    return {
        limits: getCurrentCacheSizes(),
        sizes: {
            print: globalCaches.print?.(),
            canonicalStringify: globalCaches.canonicalStringify?.(),
            links: linkInfo(this.link),
            queryManager: {
                getDocumentInfo: this["queryManager"]["transformCache"].size,
                documentTransforms: transformInfo(this["queryManager"].documentTransform)
            },
            ...this.cache.getMemoryInternals?.()
        }
    };
}
function _getApolloCacheMemoryInternals() {
    return {
        cache: {
            fragmentQueryDocuments: getWrapperInformation(this["getFragmentDoc"])
        }
    };
}
function _getInMemoryCacheMemoryInternals() {
    const fragments = this.config.fragments;
    return {
        ..._getApolloCacheMemoryInternals.apply(this),
        addTypenameDocumentTransform: transformInfo(this["addTypenameTransform"]),
        inMemoryCache: {
            executeSelectionSet: getWrapperInformation(this["storeReader"]["executeSelectionSet"]),
            executeSubSelectedArray: getWrapperInformation(this["storeReader"]["executeSubSelectedArray"]),
            maybeBroadcastWatch: getWrapperInformation(this["maybeBroadcastWatch"])
        },
        fragmentRegistry: {
            findFragmentSpreads: getWrapperInformation(fragments?.findFragmentSpreads),
            lookup: getWrapperInformation(fragments?.lookup),
            transform: getWrapperInformation(fragments?.transform)
        }
    };
}
function isWrapper(f) {
    return !!f && "dirtyKey" in f;
}
function getWrapperInformation(f) {
    return isWrapper(f) ? f.size : undefined;
}
function isDefined(value) {
    return value != null;
}
function transformInfo(transform) {
    return recurseTransformInfo(transform).map((cache)=>({
            cache
        }));
}
function recurseTransformInfo(transform) {
    return transform ? [
        getWrapperInformation(transform?.["performWork"]),
        ...recurseTransformInfo(transform?.["left"]),
        ...recurseTransformInfo(transform?.["right"])
    ].filter(isDefined) : [];
}
function linkInfo(link) {
    return link ? [
        link?.getMemoryInternals?.(),
        ...linkInfo(link?.left),
        ...linkInfo(link?.right)
    ].filter(isDefined) : [];
} //# sourceMappingURL=getMemoryInternals.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mapObservableFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapObservableFragmentMemoized",
    ()=>mapObservableFragmentMemoized
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/memoize.js [app-ssr] (ecmascript)");
;
;
function mapObservableFragment(observable, mapFn) {
    let currentResult;
    let stableMappedResult;
    function toMapped(result) {
        if (result !== currentResult) {
            currentResult = result;
            stableMappedResult = mapFn(currentResult);
        }
        return stableMappedResult;
    }
    return Object.assign(observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(toMapped), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shareReplay"])({
        bufferSize: 1,
        refCount: true
    })), {
        getCurrentResult: ()=>toMapped(observable.getCurrentResult())
    });
}
const mapObservableFragmentMemoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoize"])(function mapObservableFragmentMemoized(observable, /**
 * used together with `observable` as memoization key, `mapFn` is explicitly not used as memoization key
 */ _cacheKey, mapFn) {
    return mapObservableFragment(observable, mapFn);
}, {
    max: 1,
    makeCacheKey: (args)=>args.slice(0, 2)
}); //# sourceMappingURL=mapObservableFragment.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mergeOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeOptions",
    ()=>mergeOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)");
;
function mergeOptions(defaults, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(defaults, options, options.variables && {
        variables: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])({
            ...defaults && defaults.variables,
            ...options.variables
        })
    });
} //# sourceMappingURL=mergeOptions.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/removeFragmentSpreads.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeMaskedFragmentSpreads",
    ()=>removeMaskedFragmentSpreads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
;
function removeMaskedFragmentSpreads(document) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(document, {
        FragmentSpread (node) {
            if (!node.directives?.some(({ name })=>name.value === "unmask")) {
                return null;
            }
        }
    });
} //# sourceMappingURL=removeFragmentSpreads.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canonicalStringify",
    ()=>canonicalStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/caches.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMemoryInternals.js [app-ssr] (ecmascript)");
;
;
;
;
const canonicalStringify = Object.assign(function canonicalStringify(value) {
    return JSON.stringify(value, stableObjectReplacer);
}, {
    reset () {
        // Clearing the sortingMap will reclaim all cached memory, without
        // affecting the logical results of canonicalStringify, but potentially
        // sacrificing performance until the cache is refilled.
        sortingMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoCleanedStrongCache"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"].canonicalStringify || 1000 /* defaultCacheSizes.canonicalStringify */ );
    }
});
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerGlobalCache"])("canonicalStringify", ()=>sortingMap.size);
}
// Values are JSON-serialized arrays of object keys (in any order), and values
// are sorted arrays of the same keys.
let sortingMap;
canonicalStringify.reset();
// The JSON.stringify function takes an optional second argument called a
// replacer function. This function is called for each key-value pair in the
// object being stringified, and its return value is used instead of the
// original value. If the replacer function returns a new value, that value is
// stringified as JSON instead of the original value of the property.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
function stableObjectReplacer(key, value) {
    if (value && typeof value === "object") {
        const proto = Object.getPrototypeOf(value);
        // We don't want to mess with objects that are not "plain" objects, which
        // means their prototype is either Object.prototype or null. This check also
        // prevents needlessly rearranging the indices of arrays.
        if (proto === Object.prototype || proto === null) {
            const keys = Object.keys(value);
            // If keys is already sorted, let JSON.stringify serialize the original
            // value instead of creating a new object with keys in the same order.
            if (keys.every(everyKeyInOrder)) return value;
            const unsortedKey = JSON.stringify(keys);
            let sortedKeys = sortingMap.get(unsortedKey);
            if (!sortedKeys) {
                keys.sort();
                const sortedKey = JSON.stringify(keys);
                // Checking for sortedKey in the sortingMap allows us to share the same
                // sorted array reference for all permutations of the same set of keys.
                sortedKeys = sortingMap.get(sortedKey) || keys;
                sortingMap.set(unsortedKey, sortedKeys);
                sortingMap.set(sortedKey, sortedKeys);
            }
            const sortedObject = Object.create(proto);
            // Reassigning the keys in sorted order will cause JSON.stringify to
            // serialize them in sorted order.
            sortedKeys.forEach((key)=>{
                sortedObject[key] = value[key];
            });
            return sortedObject;
        }
    }
    return value;
}
// Since everything that happens in stableObjectReplacer benefits from being as
// efficient as possible, we use a static function as the callback for
// keys.every in order to test if the provided keys are already sorted without
// allocating extra memory for a callback.
function everyKeyInOrder(key, i, keys) {
    return i === 0 || keys[i - 1] <= key;
} //# sourceMappingURL=canonicalStringify.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brand",
    ()=>brand,
    "isBranded",
    ()=>isBranded
]);
function isBranded(error, name) {
    return typeof error === "object" && error !== null && error[Symbol.for("apollo.error")] === name;
}
function brand(error) {
    Object.defineProperty(error, Symbol.for("apollo.error"), {
        value: error.name,
        enumerable: false,
        writable: false,
        configurable: false
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/CombinedGraphQLErrors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CombinedGraphQLErrors",
    ()=>CombinedGraphQLErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/utils.js [app-ssr] (ecmascript)");
;
function defaultFormatMessage(errors) {
    return errors// Handle non-spec-compliant servers: See #1185
    .filter((e)=>e).map((e)=>e.message || "Error message not found.").join("\n");
}
class CombinedGraphQLErrors extends Error {
    /**
    * A method that determines whether an error is a `CombinedGraphQLErrors`
    * object. This method enables TypeScript to narrow the error type.
    * 
    * @example
    * 
    * ```ts
    * if (CombinedGraphQLErrors.is(error)) {
    *   // TypeScript now knows `error` is a `CombinedGraphQLErrors` object
    *   console.log(error.errors);
    * }
    * ```
    */ static is(error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBranded"])(error, "CombinedGraphQLErrors");
    }
    /**
    * A function that formats the error message used for the error's `message`
    * property. Override this method to provide your own formatting.
    * 
    * @remarks
    * 
    * The `formatMessage` function is called by the `CombinedGraphQLErrors`
    * constructor to provide a formatted message as the `message` property of the
    * `CombinedGraphQLErrors` object. Follow the ["Providing a custom message
    * formatter"](https://www.apollographql.com/docs/react/api/errors/CombinedGraphQLErrors#providing-a-custom-message-formatter) guide to learn how to modify the message format.
    * 
    * @param errors - The array of GraphQL errors returned from the server in
    * the `errors` field of the response.
    * @param options - Additional context that could be useful when formatting
    * the message.
    */ static formatMessage = defaultFormatMessage;
    /**
    * The raw list of GraphQL errors returned by the `errors` field in the GraphQL response.
    */ errors;
    /**
    * Partial data returned in the `data` field of the GraphQL response.
    */ data;
    /**
    * Extensions returned by the `extensions` field in the GraphQL response.
    */ extensions;
    constructor(result, errors = result.errors || []){
        super(CombinedGraphQLErrors.formatMessage(errors, {
            result,
            defaultFormatMessage
        }));
        this.errors = errors;
        this.data = result.data;
        this.extensions = result.extensions;
        this.name = "CombinedGraphQLErrors";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"])(this);
        Object.setPrototypeOf(this, CombinedGraphQLErrors.prototype);
    }
} //# sourceMappingURL=CombinedGraphQLErrors.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/CombinedProtocolErrors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CombinedProtocolErrors",
    ()=>CombinedProtocolErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/utils.js [app-ssr] (ecmascript)");
;
function defaultFormatMessage(errors) {
    return errors.map((e)=>e.message || "Error message not found.").join("\n");
}
class CombinedProtocolErrors extends Error {
    /**
     * A method that determines whether an error is a `CombinedProtocolErrors`
     * object. This method enables TypeScript to narrow the error type.
     *
     * @example
     *
     * ```ts
     * if (CombinedProtocolErrors.is(error)) {
     *   // TypeScript now knows `error` is a CombinedProtocolErrors object
     *   console.log(error.errors);
     * }
     * ```
     */ static is(error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBranded"])(error, "CombinedProtocolErrors");
    }
    /**
    * A function that formats the error message used for the error's `message`
    * property. Override this method to provide your own formatting.
    * 
    * @remarks
    * 
    * The `formatMessage` function is called by the `CombinedProtocolErrors`
    * constructor to provide a formatted message as the `message` property of the
    * `CombinedProtocolErrors` object. Follow the ["Providing a custom message
    * formatter"](https://www.apollographql.com/docs/react/api/errors/CombinedProtocolErrors#providing-a-custom-message-formatter) guide to learn how to modify the message format.
    * 
    * @param errors - The array of GraphQL errors returned from the server in the
    * `errors` field of the response.
    * @param options - Additional context that could be useful when formatting
    * the message.
    */ static formatMessage = defaultFormatMessage;
    /**
    * The raw list of errors returned by the top-level `errors` field in the
    * multipart HTTP subscription response.
    */ errors;
    constructor(protocolErrors){
        super(CombinedProtocolErrors.formatMessage(protocolErrors, {
            defaultFormatMessage
        }));
        this.name = "CombinedProtocolErrors";
        this.errors = protocolErrors;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"])(this);
        Object.setPrototypeOf(this, CombinedProtocolErrors.prototype);
    }
} //# sourceMappingURL=CombinedProtocolErrors.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/isErrorLike.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isErrorLike",
    ()=>isErrorLike
]);
function isErrorLike(error) {
    return error !== null && typeof error === "object" && typeof error.message === "string" && typeof error.name === "string" && (typeof error.stack === "string" || typeof error.stack === "undefined");
} //# sourceMappingURL=isErrorLike.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/UnconventionalError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnconventionalError",
    ()=>UnconventionalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/utils.js [app-ssr] (ecmascript)");
;
class UnconventionalError extends Error {
    /**
     * A method that determines whether an error is an `UnconventionalError`
     * object. This method enables TypeScript to narrow the error type.
     *
     * @example
     *
     * ```ts
     * if (UnconventionalError.is(error)) {
     *   // TypeScript now knows `error` is a UnconventionalError object
     *   console.log("What caused this?", error.cause);
     * }
     * ```
     */ static is(error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBranded"])(error, "UnconventionalError");
    }
    constructor(errorType){
        super("An error of unexpected shape occurred.", {
            cause: errorType
        });
        this.name = "UnconventionalError";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"])(this);
        Object.setPrototypeOf(this, UnconventionalError.prototype);
    }
} //# sourceMappingURL=UnconventionalError.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROTOCOL_ERRORS_SYMBOL",
    ()=>PROTOCOL_ERRORS_SYMBOL,
    "graphQLResultHasProtocolErrors",
    ()=>graphQLResultHasProtocolErrors,
    "toErrorLike",
    ()=>toErrorLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedProtocolErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/CombinedProtocolErrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$isErrorLike$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/isErrorLike.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$UnconventionalError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/UnconventionalError.js [app-ssr] (ecmascript)");
;
;
;
const PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result) {
    if ("extensions" in result) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedProtocolErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedProtocolErrors"].is(result.extensions[PROTOCOL_ERRORS_SYMBOL]);
    }
    return false;
}
function toErrorLike(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$isErrorLike$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErrorLike"])(error)) {
        return error;
    }
    if (typeof error === "string") {
        return new Error(error, {
            cause: error
        });
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$UnconventionalError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnconventionalError"](error);
}
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/LinkError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkError",
    ()=>LinkError,
    "registerLinkError",
    ()=>registerLinkError
]);
const registry = new WeakSet();
function registerLinkError(error) {
    registry.add(error);
}
const LinkError = {
    /**
     * A method that determines whether an error originated from the link chain.
     * `is` does not provide any type narrowing.
     *
     * @example
     *
     * ```ts
     * if (LinkError.is(error)) {
     *   // The error originated from the link chain
     *   console.log("Got network error:", error.message);
     * }
     * ```
     */ is: (error)=>registry.has(error)
}; //# sourceMappingURL=LinkError.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/createFragmentMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* Utility function that takes a list of fragment definitions and makes a hash out of them
* that maps the name of the fragment to the fragment definition.
*
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "createFragmentMap",
    ()=>createFragmentMap
]);
function createFragmentMap(fragments = []) {
    const symTable = {};
    fragments.forEach((fragment)=>{
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
} //# sourceMappingURL=createFragmentMap.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinitions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "getFragmentDefinitions",
    ()=>getFragmentDefinitions
]);
function getFragmentDefinitions(doc) {
    return doc.definitions.filter((definition)=>definition.kind === "FragmentDefinition");
} //# sourceMappingURL=getFragmentDefinitions.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/deepFreeze.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepFreeze",
    ()=>deepFreeze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
;
;
function deepFreeze(value) {
    const workSet = new Set([
        value
    ]);
    workSet.forEach((obj)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach((name)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(obj[name])) workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && !Object.isFrozen(obj)) {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maybeDeepFreeze",
    ()=>maybeDeepFreeze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$deepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/deepFreeze.js [app-ssr] (ecmascript)");
;
;
function maybeDeepFreeze(obj) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$deepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deepFreeze"])(obj);
    }
    return obj;
} //# sourceMappingURL=maybeDeepFreeze.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/resultKeyNameFromField.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "resultKeyNameFromField",
    ()=>resultKeyNameFromField
]);
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
} //# sourceMappingURL=resultKeyNameFromField.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disableWarningsSlot",
    ()=>disableWarningsSlot,
    "getFragmentMaskMode",
    ()=>getFragmentMaskMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$context$40$0$2e$7$2e$4$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+context@0.7.4/node_modules/@wry/context/lib/slot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
const disableWarningsSlot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$context$40$0$2e$7$2e$4$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"]();
function getFragmentMaskMode(fragment) {
    const directive = fragment.directives?.find(({ name })=>name.value === "unmask");
    if (!directive) {
        return "mask";
    }
    const modeArg = directive.arguments?.find(({ name })=>name.value === "mode");
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
        if (modeArg) {
            if (modeArg.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].VARIABLE) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(44);
            } else if (modeArg.value.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].STRING) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(45);
            } else if (modeArg.value.value !== "migrate") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(46, modeArg.value.value);
            }
        }
    }
    if (modeArg && "value" in modeArg.value && modeArg.value.value === "migrate") {
        return "migrate";
    }
    return "unmask";
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskDefinition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maskDefinition",
    ()=>maskDefinition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/resultKeyNameFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function maskDefinition(data, selectionSet, context) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableWarningsSlot"].withValue(true, ()=>{
        const masked = maskSelectionSet(data, selectionSet, context, false);
        if (Object.isFrozen(data)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])(masked);
        }
        return masked;
    });
}
function getMutableTarget(data, mutableTargets) {
    if (mutableTargets.has(data)) {
        return mutableTargets.get(data);
    }
    const mutableTarget = Array.isArray(data) ? [] : {};
    mutableTargets.set(data, mutableTarget);
    return mutableTarget;
}
function maskSelectionSet(data, selectionSet, context, migration, path) {
    const { knownChanged } = context;
    const memo = getMutableTarget(data, context.mutableTargets);
    if (Array.isArray(data)) {
        for (const [index, item] of Array.from(data.entries())){
            if (item === null) {
                memo[index] = null;
                continue;
            }
            const masked = maskSelectionSet(item, selectionSet, context, migration, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? `${path || ""}[${index}]` : void 0);
            if (knownChanged.has(masked)) {
                knownChanged.add(memo);
            }
            memo[index] = masked;
        }
        return knownChanged.has(memo) ? memo : data;
    }
    for (const selection of selectionSet.selections){
        let value;
        // we later want to add accessor warnings to the final result
        // so we need a new object to add the accessor warning to
        if (migration) {
            knownChanged.add(memo);
        }
        if (selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD) {
            const keyName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(selection);
            const childSelectionSet = selection.selectionSet;
            value = memo[keyName] || data[keyName];
            if (value === void 0) {
                continue;
            }
            if (childSelectionSet && value !== null) {
                const masked = maskSelectionSet(data[keyName], childSelectionSet, context, migration, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? `${path || ""}.${keyName}` : void 0);
                if (knownChanged.has(masked)) {
                    value = masked;
                }
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                memo[keyName] = value;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                if (migration && keyName !== "__typename" && // either the field is not present in the memo object
                // or it has a `get` descriptor, not a `value` descriptor
                // => it is a warning accessor and we can overwrite it
                // with another accessor
                !Object.getOwnPropertyDescriptor(memo, keyName)?.value) {
                    Object.defineProperty(memo, keyName, getAccessorWarningDescriptor(keyName, value, path || "", context.operationName, context.operationType));
                } else {
                    delete memo[keyName];
                    memo[keyName] = value;
                }
            }
        }
        if (selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INLINE_FRAGMENT && (!selection.typeCondition || context.cache.fragmentMatches(selection, data.__typename))) {
            value = maskSelectionSet(data, selection.selectionSet, context, migration, path);
        }
        if (selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD) {
            const fragmentName = selection.name.value;
            const fragment = context.fragmentMap[fragmentName] || (context.fragmentMap[fragmentName] = context.cache.lookupFragment(fragmentName));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fragment, 39, fragmentName);
            const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentMaskMode"])(selection);
            if (mode !== "mask") {
                value = maskSelectionSet(data, fragment.selectionSet, context, mode === "migrate", path);
            }
        }
        if (knownChanged.has(value)) {
            knownChanged.add(memo);
        }
    }
    if ("__typename" in data && !("__typename" in memo)) {
        memo.__typename = data.__typename;
    }
    // This check prevents cases where masked fields may accidentally be
    // returned as part of this object when the fragment also selects
    // additional fields from the same child selection.
    if (Object.keys(memo).length !== Object.keys(data).length) {
        knownChanged.add(memo);
    }
    return knownChanged.has(memo) ? memo : data;
}
function getAccessorWarningDescriptor(fieldName, value, path, operationName, operationType) {
    let getValue = ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableWarningsSlot"].getValue()) {
            return value;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(40, operationName ? `${operationType} '${operationName}'` : `anonymous ${operationType}`, `${path}.${fieldName}`.replace(/^\./, ""));
        getValue = ()=>value;
        return value;
    };
    return {
        get () {
            return getValue();
        },
        set (newValue) {
            getValue = ()=>newValue;
        },
        enumerable: true,
        configurable: true
    };
} //# sourceMappingURL=maskDefinition.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maskFragment",
    ()=>maskFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/createFragmentMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskDefinition.js [app-ssr] (ecmascript)");
;
;
;
;
;
function maskFragment(data, document, cache, fragmentName) {
    const fragments = document.definitions.filter((node)=>node.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION);
    if (typeof fragmentName === "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fragments.length === 1, 41, fragments.length);
        fragmentName = fragments[0].name.value;
    }
    const fragment = fragments.find((fragment)=>fragment.name.value === fragmentName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!!fragment, 42, fragmentName);
    if (data == null) {
        // Maintain the original `null` or `undefined` value
        return data;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(data, {})) {
        // Return early and skip the masking algorithm if we don't have any data
        // yet. This can happen when cache.diff returns an empty object which is
        // used from watchFragment.
        return data;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maskDefinition"])(data, fragment.selectionSet, {
        operationType: "fragment",
        operationName: fragment.name.value,
        fragmentMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFragmentMap"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinitions"])(document)),
        cache,
        mutableTargets: new WeakMap(),
        knownChanged: new WeakSet()
    });
} //# sourceMappingURL=maskFragment.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskOperation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maskOperation",
    ()=>maskOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/createFragmentMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskDefinition.js [app-ssr] (ecmascript)");
;
;
;
function maskOperation(data, document, cache) {
    const definition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(document);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(definition, 43);
    if (data == null) {
        // Maintain the original `null` or `undefined` value
        return data;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maskDefinition"])(data, definition.selectionSet, {
        operationType: definition.operation,
        operationName: definition.name?.value,
        fragmentMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFragmentMap"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinitions"])(document)),
        cache,
        mutableTargets: new WeakMap(),
        knownChanged: new WeakSet()
    });
} //# sourceMappingURL=maskOperation.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/isNetworkRequestSettled.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns true if the network request is in ready or error state according to a given network
 * status.
 */ __turbopack_context__.s([
    "isNetworkRequestSettled",
    ()=>isNetworkRequestSettled
]);
function isNetworkRequestSettled(networkStatus) {
    return networkStatus === 7 || networkStatus === 8;
} //# sourceMappingURL=isNetworkRequestSettled.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/isNetworkRequestInFlight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNetworkRequestInFlight",
    ()=>isNetworkRequestInFlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestSettled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/isNetworkRequestSettled.js [app-ssr] (ecmascript)");
;
function isNetworkRequestInFlight(networkStatus) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestSettled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNetworkRequestSettled"])(networkStatus);
} //# sourceMappingURL=isNetworkRequestInFlight.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/print.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "print",
    ()=>print
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/printer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/caches.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMemoryInternals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
;
;
;
;
let printCache;
const print = Object.assign((ast)=>{
    let result = printCache.get(ast);
    if (!result) {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"])(ast);
        printCache.set(ast, result);
    }
    return result;
}, {
    reset () {
        printCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoCleanedWeakCache"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"].print || 2000 /* defaultCacheSizes.print */ );
    }
});
print.reset();
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerGlobalCache"])("print", ()=>printCache ? printCache.size : 0);
} //# sourceMappingURL=print.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/filterMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterMap",
    ()=>filterMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
;
function filterMap(fn, makeContext = ()=>undefined) {
    return (source)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((subscriber)=>{
            let context = makeContext();
            return source.subscribe({
                next (value) {
                    let result;
                    try {
                        result = fn(value, context);
                    } catch (e) {
                        subscriber.error(e);
                    }
                    if (result === undefined) {
                        return;
                    }
                    subscriber.next(result);
                },
                error (err) {
                    subscriber.error(err);
                },
                complete () {
                    subscriber.complete();
                }
            });
        });
} //# sourceMappingURL=filterMap.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/valueToObjectRepresentation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "valueToObjectRepresentation",
    ()=>valueToObjectRepresentation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
;
;
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].INT || value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FLOAT) {
        argObj[name.value] = Number(value.value);
    } else if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].BOOLEAN || value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].STRING) {
        argObj[name.value] = value.value;
    } else if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OBJECT) {
        const nestedArgObj = {};
        value.fields.map((obj)=>valueToObjectRepresentation(nestedArgObj, obj.name, obj.value, variables));
        argObj[name.value] = nestedArgObj;
    } else if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].VARIABLE) {
        const variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    } else if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].LIST) {
        argObj[name.value] = value.values.map((listValue)=>{
            const nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    } else if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].ENUM) {
        argObj[name.value] = value.value;
    } else if (value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NULL) {
        argObj[name.value] = null;
    } else {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(19, name.value, value.kind);
    }
} //# sourceMappingURL=valueToObjectRepresentation.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getDefaultValues.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultValues",
    ()=>getDefaultValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/valueToObjectRepresentation.js [app-ssr] (ecmascript)");
;
function getDefaultValues(definition) {
    const defaultValues = {};
    const defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach((def)=>{
            if (def.defaultValue) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valueToObjectRepresentation"])(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
} //# sourceMappingURL=getDefaultValues.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/graphQLResultHasError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "graphQLResultHasError",
    ()=>graphQLResultHasError
]);
function graphQLResultHasError(result) {
    return !!result.errors?.length;
} //# sourceMappingURL=graphQLResultHasError.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/hasForcedResolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasForcedResolvers",
    ()=>hasForcedResolvers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
;
function hasForcedResolvers(document) {
    let forceResolvers = false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(document, {
        Directive: {
            enter (node) {
                if (node.name.value === "client" && node.arguments) {
                    forceResolvers = node.arguments.some((arg)=>arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true);
                    if (forceResolvers) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BREAK"];
                    }
                }
            }
        }
    });
    return forceResolvers;
} //# sourceMappingURL=hasForcedResolvers.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isDocumentNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDocumentNode",
    ()=>isDocumentNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
;
function isDocumentNode(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(value) && value.kind === "Document" && Array.isArray(value.definitions);
} //# sourceMappingURL=isDocumentNode.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFragmentDefinition",
    ()=>getFragmentDefinition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
function getFragmentDefinition(doc) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(doc.kind === "Document", 6);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(doc.definitions.length <= 1, 7);
    const fragmentDef = doc.definitions[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fragmentDef.kind === "FragmentDefinition", 8);
    return fragmentDef;
} //# sourceMappingURL=getFragmentDefinition.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* A version of Array.isArray that works better with readonly arrays.
*
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "isArray",
    ()=>isArray
]);
const isArray = Array.isArray; //# sourceMappingURL=isArray.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonEmptyArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "isNonEmptyArray",
    ()=>isNonEmptyArray
]);
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
} //# sourceMappingURL=isNonEmptyArray.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/removeDirectivesFromDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeDirectivesFromDocument",
    ()=>removeDirectivesFromDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/createFragmentMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonEmptyArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonEmptyArray.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function removeDirectivesFromDocument(directives, doc) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(doc);
    // Passing empty strings to makeInUseGetterFunction means we handle anonymous
    // operations as if their names were "". Anonymous fragment definitions are
    // not supposed to be possible, but the same default naming strategy seems
    // appropriate for that case as well.
    const getInUseByOperationName = makeInUseGetterFunction("");
    const getInUseByFragmentName = makeInUseGetterFunction("");
    const getInUse = (ancestors)=>{
        for(let p = 0, ancestor; p < ancestors.length && (ancestor = ancestors[p]); ++p){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(ancestor)) continue;
            if (ancestor.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION) {
                // If an operation is anonymous, we use the empty string as its key.
                return getInUseByOperationName(ancestor.name && ancestor.name.value);
            }
            if (ancestor.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION) {
                return getInUseByFragmentName(ancestor.name.value);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(14);
        return null;
    };
    let operationCount = 0;
    for(let i = doc.definitions.length - 1; i >= 0; --i){
        if (doc.definitions[i].kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION) {
            ++operationCount;
        }
    }
    const directiveMatcher = getDirectiveMatcher(directives);
    const shouldRemoveField = (nodeDirectives)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonEmptyArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(nodeDirectives) && nodeDirectives.map(directiveMatcher).some((config)=>config && config.remove);
    const originalFragmentDefsByPath = new Map();
    // Any time the first traversal of the document below makes a change like
    // removing a fragment (by returning null), this variable should be set to
    // true. Once it becomes true, it should never be set to false again. If this
    // variable remains false throughout the traversal, then we can return the
    // original doc immediately without any modifications.
    let firstVisitMadeChanges = false;
    const fieldOrInlineFragmentVisitor = {
        enter (node) {
            if (shouldRemoveField(node.directives)) {
                firstVisitMadeChanges = true;
                return null;
            }
        }
    };
    const docWithoutDirectiveSubtrees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(doc, {
        // These two AST node types share the same implementation, defined above.
        Field: fieldOrInlineFragmentVisitor,
        InlineFragment: fieldOrInlineFragmentVisitor,
        VariableDefinition: {
            enter () {
                // VariableDefinition nodes do not count as variables in use, though
                // they do contain Variable nodes that might be visited below. To avoid
                // counting variable declarations as usages, we skip visiting the
                // contents of this VariableDefinition node by returning false.
                return false;
            }
        },
        Variable: {
            enter (node, _key, _parent, _path, ancestors) {
                const inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.variables.add(node.name.value);
                }
            }
        },
        FragmentSpread: {
            enter (node, _key, _parent, _path, ancestors) {
                if (shouldRemoveField(node.directives)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
                const inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.fragmentSpreads.add(node.name.value);
                }
            // We might like to remove this FragmentSpread by returning null here if
            // the corresponding FragmentDefinition node is also going to be removed
            // by the logic below, but we can't control the relative order of those
            // events, so we have to postpone the removal of dangling FragmentSpread
            // nodes until after the current visit of the document has finished.
            }
        },
        FragmentDefinition: {
            enter (node, _key, _parent, path) {
                originalFragmentDefsByPath.set(JSON.stringify(path), node);
            },
            leave (node, _key, _parent, path) {
                const originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
                if (node === originalNode) {
                    // If the FragmentNode received by this leave function is identical to
                    // the one received by the corresponding enter function (above), then
                    // the visitor must not have made any changes within this
                    // FragmentDefinition node. This fragment definition may still be
                    // removed if there are no ...spread references to it, but it won't be
                    // removed just because it has only a __typename field.
                    return node;
                }
                if (// This logic applies only if the document contains one or more
                // operations, since removing all fragments from a document containing
                // only fragments makes the document useless.
                operationCount > 0 && node.selectionSet.selections.every((selection)=>selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD && selection.name.value === "__typename")) {
                    // This is a somewhat opinionated choice: if a FragmentDefinition ends
                    // up having no fields other than __typename, we remove the whole
                    // fragment definition, and later prune ...spread references to it.
                    getInUseByFragmentName(node.name.value).removed = true;
                    firstVisitMadeChanges = true;
                    return null;
                }
            }
        },
        Directive: {
            leave (node) {
                // If a matching directive is found, remove the directive itself. Note
                // that this does not remove the target (field, argument, etc) of the
                // directive, but only the directive itself.
                if (directiveMatcher(node)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
            }
        }
    });
    if (!firstVisitMadeChanges) {
        // If our first pass did not change anything about the document, then there
        // is no cleanup we need to do, and we can return the original doc.
        return doc;
    }
    // Utility for making sure inUse.transitiveVars is recursively populated.
    // Because this logic assumes inUse.fragmentSpreads has been completely
    // populated and inUse.removed has been set if appropriate,
    // populateTransitiveVars must be called after that information has been
    // collected by the first traversal of the document.
    const populateTransitiveVars = (inUse)=>{
        if (!inUse.transitiveVars) {
            inUse.transitiveVars = new Set(inUse.variables);
            if (!inUse.removed) {
                inUse.fragmentSpreads.forEach((childFragmentName)=>{
                    populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach((varName)=>{
                        inUse.transitiveVars.add(varName);
                    });
                });
            }
        }
        return inUse;
    };
    // Since we've been keeping track of fragment spreads used by particular
    // operations and fragment definitions, we now need to compute the set of all
    // spreads used (transitively) by any operations in the document.
    const allFragmentNamesUsed = new Set();
    docWithoutDirectiveSubtrees.definitions.forEach((def)=>{
        if (def.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION) {
            populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach((childFragmentName)=>{
                allFragmentNamesUsed.add(childFragmentName);
            });
        } else if (def.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
        // definitions count as usages of their own fragment names. This heuristic
        // prevents accidentally removing all fragment definitions from the
        // document just because it contains no operations that use the fragments.
        operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
            allFragmentNamesUsed.add(def.name.value);
        }
    });
    // Now that we have added all fragment spreads used by operations to the
    // allFragmentNamesUsed set, we can complete the set by transitively adding
    // all fragment spreads used by those fragments, and so on.
    allFragmentNamesUsed.forEach((fragmentName)=>{
        // Once all the childFragmentName strings added here have been seen already,
        // the top-level allFragmentNamesUsed.forEach loop will terminate.
        populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach((childFragmentName)=>{
            allFragmentNamesUsed.add(childFragmentName);
        });
    });
    const fragmentWillBeRemoved = (fragmentName)=>!!// A fragment definition will be removed if there are no spreads that refer
        // to it, or the fragment was explicitly removed because it had no fields
        // other than __typename.
        (!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
    const enterVisitor = {
        enter (node) {
            if (fragmentWillBeRemoved(node.name.value)) {
                return null;
            }
        }
    };
    return nullIfDocIsEmpty((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(docWithoutDirectiveSubtrees, {
        // If the fragment is going to be removed, then leaving any dangling
        // FragmentSpread nodes with the same name would be a mistake.
        FragmentSpread: enterVisitor,
        // This is where the fragment definition is actually removed.
        FragmentDefinition: enterVisitor,
        OperationDefinition: {
            leave (node) {
                // Upon leaving each operation in the depth-first AST traversal, prune
                // any variables that are declared by the operation but unused within.
                if (node.variableDefinitions) {
                    const usedVariableNames = populateTransitiveVars(// If an operation is anonymous, we use the empty string as its key.
                    getInUseByOperationName(node.name && node.name.value)).transitiveVars;
                    // According to the GraphQL spec, all variables declared by an
                    // operation must either be used by that operation or used by some
                    // fragment included transitively into that operation:
                    // https://spec.graphql.org/draft/#sec-All-Variables-Used
                    //
                    // To stay on the right side of this validation rule, if/when we
                    // remove the last $var references from an operation or its fragments,
                    // we must also remove the corresponding $var declaration from the
                    // enclosing operation. This pruning applies only to operations and
                    // not fragment definitions, at the moment. Fragments may be able to
                    // declare variables eventually, but today they can only consume them.
                    if (usedVariableNames.size < node.variableDefinitions.length) {
                        return {
                            ...node,
                            variableDefinitions: node.variableDefinitions.filter((varDef)=>usedVariableNames.has(varDef.variable.name.value))
                        };
                    }
                }
            }
        }
    }));
}
function makeInUseGetterFunction(defaultKey) {
    const map = new Map();
    return function inUseGetterFunction(key = defaultKey) {
        let inUse = map.get(key);
        if (!inUse) {
            map.set(key, inUse = {
                // Variable and fragment spread names used directly within this
                // operation or fragment definition, as identified by key. These sets
                // will be populated during the first traversal of the document in
                // removeDirectivesFromDocument below.
                variables: new Set(),
                fragmentSpreads: new Set()
            });
        }
        return inUse;
    };
}
function getDirectiveMatcher(configs) {
    const names = new Map();
    const tests = new Map();
    configs.forEach((directive)=>{
        if (directive) {
            if (directive.name) {
                names.set(directive.name, directive);
            } else if (directive.test) {
                tests.set(directive.test, directive);
            }
        }
    });
    return (directive)=>{
        let config = names.get(directive.name.value);
        if (!config && tests.size) {
            tests.forEach((testConfig, test)=>{
                if (test(directive)) {
                    config = testConfig;
                }
            });
        }
        return config;
    };
}
function isEmpty(op, fragmentMap) {
    return !op || op.selectionSet.selections.every((selection)=>selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap));
}
function nullIfDocIsEmpty(doc) {
    return isEmpty((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(doc) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinition"])(doc), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFragmentMap"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinitions"])(doc))) ? null : doc;
} //# sourceMappingURL=removeDirectivesFromDocument.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/toQueryResult.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "toQueryResult",
    ()=>toQueryResult
]);
function toQueryResult(value) {
    const result = {
        data: value.data
    };
    if (value.error) {
        result.error = value.error;
    }
    return result;
} //# sourceMappingURL=toQueryResult.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/networkStatus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentFromSelection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFragmentFromSelection",
    ()=>getFragmentFromSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
function getFragmentFromSelection(selection, fragmentMap) {
    switch(selection.kind){
        case "InlineFragment":
            return selection;
        case "FragmentSpread":
            {
                const fragmentName = selection.name.value;
                if (typeof fragmentMap === "function") {
                    return fragmentMap(fragmentName);
                }
                const fragment = fragmentMap && fragmentMap[fragmentName];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fragment, 9, fragmentName);
                return fragment || null;
            }
        default:
            return null;
    }
} //# sourceMappingURL=getFragmentFromSelection.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMainDefinition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMainDefinition",
    ()=>getMainDefinition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)");
;
;
function getMainDefinition(queryDoc) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(queryDoc);
    let fragmentDefinition;
    for (let definition of queryDoc.definitions){
        if (definition.kind === "OperationDefinition") {
            return definition;
        }
        if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
            // we do this because we want to allow multiple fragment definitions
            // to precede an operation definition.
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(12);
} //# sourceMappingURL=getMainDefinition.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isField.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "isField",
    ()=>isField
]);
function isField(selection) {
    return selection.kind === "Field";
} //# sourceMappingURL=isField.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/shouldInclude.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shouldInclude",
    ()=>shouldInclude
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
function shouldInclude({ directives }, variables) {
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(({ directive, ifArgument })=>{
        let evaledValue = false;
        if (ifArgument.value.kind === "Variable") {
            evaledValue = variables && variables[ifArgument.value.name.value];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(evaledValue !== void 0, 15, directive.name.value);
        } else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === "skip" ? !evaledValue : evaledValue;
    });
}
function isInclusionDirective({ name: { value } }) {
    return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
    const result = [];
    if (directives && directives.length) {
        directives.forEach((directive)=>{
            if (!isInclusionDirective(directive)) return;
            const directiveArguments = directive.arguments;
            const directiveName = directive.name.value;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(directiveArguments && directiveArguments.length === 1, 16, directiveName);
            const ifArgument = directiveArguments[0];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(ifArgument.name && ifArgument.name.value === "if", 17, directiveName);
            const ifValue = ifArgument.value;
            // means it has to be a variable value if this is a valid @skip or @include directive
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 18, directiveName);
            result.push({
                directive,
                ifArgument
            });
        });
    }
    return result;
} //# sourceMappingURL=shouldInclude.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/equalByQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "equalByQuery",
    ()=>equalByQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/createFragmentMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentFromSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMainDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMainDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/resultKeyNameFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/shouldInclude.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function equalByQuery(query, { data: aData, ...aRest }, { data: bData, ...bRest }, variables) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(aRest, bRest) && equalBySelectionSet((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMainDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMainDefinition"])(query).selectionSet, aData, bData, {
        fragmentMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFragmentMap"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinitions"])(query)),
        variables
    });
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
    if (aResult === bResult) {
        return true;
    }
    const seenSelections = new Set();
    // Returning true from this Array.prototype.every callback function skips the
    // current field/subtree. Returning false aborts the entire traversal
    // immediately, causing equalBySelectionSet to return false.
    return selectionSet.selections.every((selection)=>{
        // Avoid re-processing the same selection at the same level of recursion, in
        // case the same field gets included via multiple indirect fragment spreads.
        if (seenSelections.has(selection)) return true;
        seenSelections.add(selection);
        // Ignore @skip(if: true) and @include(if: false) fields.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldInclude"])(selection, context.variables)) return true;
        // If the field or (named) fragment spread has a @nonreactive directive on
        // it, we don't care if it's different, so we pretend it's the same.
        if (selectionHasNonreactiveDirective(selection)) return true;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(selection)) {
            const resultKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(selection);
            const aResultChild = aResult && aResult[resultKey];
            const bResultChild = bResult && bResult[resultKey];
            const childSelectionSet = selection.selectionSet;
            if (!childSelectionSet) {
                // These are scalar values, so we can compare them with deep equal
                // without redoing the main recursive work.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(aResultChild, bResultChild);
            }
            const aChildIsArray = Array.isArray(aResultChild);
            const bChildIsArray = Array.isArray(bResultChild);
            if (aChildIsArray !== bChildIsArray) return false;
            if (aChildIsArray && bChildIsArray) {
                const length = aResultChild.length;
                if (bResultChild.length !== length) {
                    return false;
                }
                for(let i = 0; i < length; ++i){
                    if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
                        return false;
                    }
                }
                return true;
            }
            return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
        } else {
            const fragment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentFromSelection"])(selection, context.fragmentMap);
            if (fragment) {
                // The fragment might === selection if it's an inline fragment, but
                // could be !== if it's a named fragment ...spread.
                if (selectionHasNonreactiveDirective(fragment)) return true;
                return equalBySelectionSet(fragment.selectionSet, // Notice that we reuse the same aResult and bResult values here,
                // since the fragment ...spread does not specify a field name, but
                // consists of multiple fields (within the fragment's selection set)
                // that should be applied to the current result value(s).
                aResult, bResult, context);
            }
        }
    });
}
function selectionHasNonreactiveDirective(selection) {
    return !!selection.directives && selection.directives.some(directiveIsNonreactive);
}
function directiveIsNonreactive(dir) {
    return dir.name.value === "nonreactive";
} //# sourceMappingURL=equalByQuery.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getQueryDefinition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQueryDefinition",
    ()=>getQueryDefinition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
;
;
function getQueryDefinition(doc) {
    const queryDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(doc);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(queryDef && queryDef.operation === "query", 13);
    return queryDef;
} //# sourceMappingURL=getQueryDefinition.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/preventUnhandledRejection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/ObservableQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObservableQuery",
    ()=>ObservableQuery,
    "logMissingFieldErrors",
    ()=>logMissingFieldErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestInFlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/isNetworkRequestInFlight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestSettled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/isNetworkRequestSettled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$equalByQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/equalByQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$filterMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/filterMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getQueryDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getQueryDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$preventUnhandledRejection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/preventUnhandledRejection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/toQueryResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/networkStatus.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const { assign, hasOwnProperty } = Object;
const uninitialized = {
    loading: true,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading,
    data: undefined,
    dataState: "empty",
    partial: true
};
const empty = {
    loading: false,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
    data: undefined,
    dataState: "empty",
    partial: true
};
class ObservableQuery {
    options;
    queryName;
    variablesUnknown = false;
    /**
    * @internal will be read and written from `QueryInfo`
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ _lastWrite;
    // The `query` computed property will always reflect the document transformed
    // by the last run query. `this.options.query` will always reflect the raw
    // untransformed query to ensure document transforms with runtime conditionals
    // are run on the original document.
    get query() {
        return this.lastQuery;
    }
    /**
     * An object containing the variables that were provided for the query.
     */ get variables() {
        return this.options.variables;
    }
    unsubscribeFromCache;
    input;
    subject;
    isTornDown;
    queryManager;
    subscriptions = new Set();
    /**
     * If an `ObservableQuery` is created with a `network-only` fetch policy,
     * it should actually start receiving cache updates, but not before it has
     * received the first result from the network.
     */ waitForNetworkResult;
    lastQuery;
    linkSubscription;
    pollingInfo;
    get networkStatus() {
        return this.subject.getValue().result.networkStatus;
    }
    get cache() {
        return this.queryManager.cache;
    }
    constructor({ queryManager, options, transformedQuery = queryManager.transform(options.query) }){
        this.queryManager = queryManager;
        // active state
        this.waitForNetworkResult = options.fetchPolicy === "network-only";
        this.isTornDown = false;
        this.subscribeToMore = this.subscribeToMore.bind(this);
        this.maskResult = this.maskResult.bind(this);
        const { watchQuery: { fetchPolicy: defaultFetchPolicy = "cache-first" } = {} } = queryManager.defaultOptions;
        const { fetchPolicy = defaultFetchPolicy, // Make sure we don't store "standby" as the initialFetchPolicy.
        initialFetchPolicy = fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy } = options;
        if (options[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variablesUnknownSymbol"]]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fetchPolicy === "standby", 80);
            this.variablesUnknown = true;
        }
        this.lastQuery = transformedQuery;
        this.options = {
            ...options,
            // Remember the initial options.fetchPolicy so we can revert back to this
            // policy when variables change. This information can also be specified
            // (or overridden) by providing options.initialFetchPolicy explicitly.
            initialFetchPolicy,
            // This ensures this.options.fetchPolicy always has a string value, in
            // case options.fetchPolicy was not provided.
            fetchPolicy,
            variables: this.getVariablesWithDefaults(options.variables)
        };
        this.initializeObservablesQueue();
        this["@@observable"] = ()=>this;
        if (Symbol.observable) {
            this[Symbol.observable] = ()=>this;
        }
        const opDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(this.query);
        this.queryName = opDef && opDef.name && opDef.name.value;
    }
    initializeObservablesQueue() {
        this.subject = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BehaviorSubject"]({
            query: this.query,
            variables: this.variables,
            result: uninitialized,
            meta: {}
        });
        const observable = this.subject.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tap"])({
            subscribe: ()=>{
                if (!this.subject.observed) {
                    this.reobserve();
                    // TODO: See if we can rework updatePolling to better handle this.
                    // reobserve calls updatePolling but this `subscribe` callback is
                    // called before the subject is subscribed to so `updatePolling`
                    // can't accurately detect if there is an active subscription.
                    // Calling it again here ensures that it can detect if it can poll
                    setTimeout(()=>this.updatePolling());
                }
            },
            unsubscribe: ()=>{
                if (!this.subject.observed) {
                    this.tearDownQuery();
                }
            }
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$filterMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterMap"])(({ query, variables, result: current, meta }, context)=>{
            const { shouldEmit } = meta;
            if (current === uninitialized) {
                // reset internal state after `ObservableQuery.reset()`
                context.previous = undefined;
                context.previousVariables = undefined;
            }
            if (this.options.fetchPolicy === "standby" || shouldEmit === 2 /* EmitBehavior.never */ ) return;
            if (shouldEmit === 1 /* EmitBehavior.force */ ) return emit();
            const { previous, previousVariables } = context;
            if (previous) {
                const documentInfo = this.queryManager.getDocumentInfo(query);
                const dataMasking = this.queryManager.dataMasking;
                const maskedQuery = dataMasking ? documentInfo.nonReactiveQuery : query;
                const resultIsEqual = dataMasking || documentInfo.hasNonreactiveDirective ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$equalByQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equalByQuery"])(maskedQuery, previous, current, variables) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(previous, current);
                if (resultIsEqual && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(previousVariables, variables)) {
                    return;
                }
            }
            if (shouldEmit === 3 /* EmitBehavior.networkStatusChange */  && (!this.options.notifyOnNetworkStatusChange || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(previous, current))) {
                return;
            }
            return emit();
            //TURBOPACK unreachable
            ;
            function emit() {
                context.previous = current;
                context.previousVariables = variables;
                return current;
            }
        }, ()=>({})));
        this.pipe = observable.pipe.bind(observable);
        this.subscribe = observable.subscribe.bind(observable);
        this.input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subject"]();
        // we want to feed many streams into `this.subject`, but none of them should
        // be able to close `this.input`
        this.input.complete = ()=>{};
        this.input.pipe(this.operator).subscribe(this.subject);
    }
    // We can't use Observable['subscribe'] here as the type as it conflicts with
    // the ability to infer T from Subscribable<T>. This limits the surface area
    // to the non-deprecated signature which works properly with type inference.
    /**
     * Subscribes to the `ObservableQuery`.
     * @param observerOrNext - Either an RxJS `Observer` with some or all callback methods,
     * or the `next` handler that is called for each value emitted from the subscribed Observable.
     * @returns A subscription reference to the registered handlers.
     */ subscribe;
    /**
     * Used to stitch together functional operators into a chain.
     *
     * @example
     *
     * ```ts
     * import { filter, map } from 'rxjs';
     *
     * observableQuery
     *   .pipe(
     *     filter(...),
     *     map(...),
     *   )
     *   .subscribe(x => console.log(x));
     * ```
     *
     * @returns The Observable result of all the operators having been called
     * in the order they were passed in.
     */ pipe;
    [Symbol.observable];
    ["@@observable"];
    /**
    * @internal
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ getCacheDiff({ optimistic = true } = {}) {
        return this.cache.diff({
            query: this.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic
        });
    }
    getInitialResult(initialFetchPolicy) {
        let fetchPolicy = initialFetchPolicy || this.options.fetchPolicy;
        if (this.queryManager.prioritizeCacheValues && (fetchPolicy === "network-only" || fetchPolicy === "cache-and-network")) {
            fetchPolicy = "cache-first";
        }
        const cacheResult = ()=>{
            const diff = this.getCacheDiff();
            // TODO: queryInfo.getDiff should handle this since cache.diff returns a
            // null when returnPartialData is false
            const data = this.options.returnPartialData || diff.complete ? diff.result ?? undefined : undefined;
            return this.maskResult({
                data,
                dataState: diff.complete ? "complete" : data === undefined ? "empty" : "partial",
                loading: !diff.complete,
                networkStatus: diff.complete ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading,
                partial: !diff.complete
            });
        };
        switch(fetchPolicy){
            case "cache-only":
                {
                    return {
                        ...cacheResult(),
                        loading: false,
                        networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready
                    };
                }
            case "cache-first":
                return cacheResult();
            case "cache-and-network":
                return {
                    ...cacheResult(),
                    loading: true,
                    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading
                };
            case "standby":
                return empty;
            default:
                return uninitialized;
        }
    }
    resubscribeCache() {
        const { variables, fetchPolicy } = this.options;
        const query = this.query;
        const shouldUnsubscribe = fetchPolicy === "standby" || fetchPolicy === "no-cache" || this.waitForNetworkResult;
        const shouldResubscribe = !isEqualQuery({
            query,
            variables
        }, this.unsubscribeFromCache) && !this.waitForNetworkResult;
        if (shouldUnsubscribe || shouldResubscribe) {
            this.unsubscribeFromCache?.();
        }
        if (shouldUnsubscribe || !shouldResubscribe) {
            return;
        }
        const watch = {
            query,
            variables,
            optimistic: true,
            watcher: this,
            callback: (diff)=>{
                const info = this.queryManager.getDocumentInfo(query);
                if (info.hasClientExports || info.hasForcedResolvers) {
                    // If this is not set to something different than `diff`, we will
                    // not be notified about future cache changes with an equal `diff`.
                    // That would be the case if we are working with client-only fields
                    // that are forced or with `exports` fields that might change, causing
                    // local resolvers to return a new result.
                    // This is based on an implementation detail of `InMemoryCache`, which
                    // is not optimal - but the only alternative to this would be to
                    // resubscribe to the cache asynchonouly, which would bear the risk of
                    // missing further synchronous updates.
                    watch.lastDiff = undefined;
                }
                if (watch.lastOwnDiff === diff) {
                    // skip cache updates that were caused by our own writes
                    return;
                }
                const { result: previousResult } = this.subject.getValue();
                if (!diff.complete && // If we are trying to deliver an incomplete cache result, we avoid
                // reporting it if the query has errored, otherwise we let the broadcast try
                // and repair the partial result by refetching the query. This check avoids
                // a situation where a query that errors and another succeeds with
                // overlapping data does not report the partial data result to the errored
                // query.
                //
                // See https://github.com/apollographql/apollo-client/issues/11400 for more
                // information on this issue.
                (previousResult.error || // Prevent to schedule a notify directly after the `ObservableQuery`
                // has been `reset` (which will set the `previousResult` to `uninitialized` or `empty`)
                // as in those cases, `resetCache` will manually call `refetch` with more intentional timing.
                previousResult === uninitialized || previousResult === empty)) {
                    return;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(previousResult.data, diff.result)) {
                    this.scheduleNotify();
                }
            }
        };
        const cancelWatch = this.cache.watch(watch);
        this.unsubscribeFromCache = Object.assign(()=>{
            this.unsubscribeFromCache = undefined;
            cancelWatch();
        }, {
            query,
            variables
        });
    }
    stableLastResult;
    getCurrentResult() {
        const { result: current } = this.subject.getValue();
        let value = current.networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error || // if we have observers, we are watching the cache and
        // this.subject.getValue() will always be up to date
        this.hasObservers() || // if we are using a `no-cache` fetch policy in which case this
        // `ObservableQuery` cannot have been updated from the outside - in
        // that case, we prefer to keep the current value
        this.options.fetchPolicy === "no-cache" ? current : this.getInitialResult();
        if (value === uninitialized) {
            value = this.getInitialResult();
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(this.stableLastResult, value)) {
            this.stableLastResult = value;
        }
        return this.stableLastResult;
    }
    /**
     * Update the variables of this observable query, and fetch the new results.
     * This method should be preferred over `setVariables` in most use cases.
     *
     * Returns a `ResultPromise` with an additional `.retain()` method. Calling
     * `.retain()` keeps the network operation running even if the `ObservableQuery`
     * no longer requires the result.
     *
     * Note: `refetch()` guarantees that a value will be emitted from the
     * observable, even if the result is deep equal to the previous value.
     *
     * @param variables - The new set of variables. If there are missing variables,
     * the previous values of those variables will be used.
     */ refetch(variables) {
        const { fetchPolicy } = this.options;
        const reobserveOptions = {
            // Always disable polling for refetches.
            pollInterval: 0
        };
        // Unless the provided fetchPolicy always consults the network
        // (no-cache, network-only, or cache-and-network), override it with
        // network-only to force the refetch for this fetchQuery call.
        if (fetchPolicy === "no-cache") {
            reobserveOptions.fetchPolicy = "no-cache";
        } else {
            reobserveOptions.fetchPolicy = "network-only";
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && variables && hasOwnProperty.call(variables, "variables")) {
            const queryDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getQueryDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQueryDefinition"])(this.query);
            const vars = queryDef.variableDefinitions;
            if (!vars || !vars.some((v)=>v.variable.name.value === "variables")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(81, variables, queryDef.name?.value || queryDef);
            }
        }
        if (variables && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(this.variables, variables)) {
            // Update the existing options with new variables
            reobserveOptions.variables = this.options.variables = this.getVariablesWithDefaults({
                ...this.variables,
                ...variables
            });
        }
        this._lastWrite = undefined;
        return this._reobserve(reobserveOptions, {
            newNetworkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].refetch
        });
    }
    fetchMore({ query, variables, context, errorPolicy, updateQuery }) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(this.options.fetchPolicy !== "cache-only", 82, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(this.query, "(anonymous)"));
        const combinedOptions = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(this.options, {
                errorPolicy: "none"
            }, {
                query,
                context,
                errorPolicy
            }),
            variables: query ? variables : {
                ...this.variables,
                ...variables
            },
            // The fetchMore request goes immediately to the network and does
            // not automatically write its result to the cache (hence no-cache
            // instead of network-only), because we allow the caller of
            // fetchMore to provide an updateQuery callback that determines how
            // the data gets written to the cache.
            fetchPolicy: "no-cache",
            notifyOnNetworkStatusChange: this.options.notifyOnNetworkStatusChange
        };
        combinedOptions.query = this.transformDocument(combinedOptions.query);
        // If a temporary query is passed to `fetchMore`, we don't want to store
        // it as the last query result since it may be an optimized query for
        // pagination. We will however run the transforms on the original document
        // as well as the document passed in `fetchMoreOptions` to ensure the cache
        // uses the most up-to-date document which may rely on runtime conditionals.
        this.lastQuery = query ? this.transformDocument(this.options.query) : combinedOptions.query;
        let wasUpdated = false;
        const isCached = this.options.fetchPolicy !== "no-cache";
        if (!isCached) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(updateQuery, 83);
        }
        const { finalize, pushNotification } = this.pushOperation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].fetchMore);
        pushNotification({
            source: "newNetworkStatus",
            kind: "N",
            value: {}
        }, {
            shouldEmit: 3 /* EmitBehavior.networkStatusChange */ 
        });
        const { promise, operator } = getTrackingOperatorPromise();
        const { observable } = this.queryManager.fetchObservableWithInfo(combinedOptions, {
            networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].fetchMore,
            exposeExtensions: true
        });
        const subscription = observable.pipe(operator, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])((notification)=>notification.kind === "N" && notification.source === "network")).subscribe({
            next: (notification)=>{
                wasUpdated = false;
                const fetchMoreResult = notification.value;
                const extensions = fetchMoreResult[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extensionsSymbol"]];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestSettled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNetworkRequestSettled"])(notification.value.networkStatus)) {
                    finalize();
                }
                if (isCached) {
                    // Separately getting a diff here before the batch - `onWatchUpdated` might be
                    // called with an `undefined` `lastDiff` on the watcher if the cache was just subscribed to.
                    const lastDiff = this.getCacheDiff();
                    // Performing this cache update inside a cache.batch transaction ensures
                    // any affected cache.watch watchers are notified at most once about any
                    // updates. Most watchers will be using the QueryInfo class, which
                    // responds to notifications by calling reobserveCacheFirst to deliver
                    // fetchMore cache results back to this ObservableQuery.
                    this.cache.batch({
                        update: (cache)=>{
                            if (updateQuery) {
                                cache.updateQuery({
                                    query: this.query,
                                    variables: this.variables,
                                    returnPartialData: true,
                                    optimistic: false,
                                    extensions
                                }, (previous)=>updateQuery(previous, {
                                        fetchMoreResult: fetchMoreResult.data,
                                        variables: combinedOptions.variables
                                    }));
                            } else {
                                // If we're using a field policy instead of updateQuery, the only
                                // thing we need to do is write the new data to the cache using
                                // combinedOptions.variables (instead of this.variables, which is
                                // what this.updateQuery uses, because it works by abusing the
                                // original field value, keyed by the original variables).
                                cache.writeQuery({
                                    query: combinedOptions.query,
                                    variables: combinedOptions.variables,
                                    data: fetchMoreResult.data,
                                    extensions
                                });
                            }
                        },
                        onWatchUpdated: (watch, diff)=>{
                            if (watch.watcher === this && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(diff.result, lastDiff.result)) {
                                wasUpdated = true;
                                const lastResult = this.getCurrentResult();
                                // Let the cache watch from resubscribeCache handle the final
                                // result
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestInFlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNetworkRequestInFlight"])(fetchMoreResult.networkStatus)) {
                                    pushNotification({
                                        kind: "N",
                                        source: "network",
                                        value: {
                                            ...lastResult,
                                            networkStatus: fetchMoreResult.networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready : fetchMoreResult.networkStatus,
                                            // will be overwritten anyways, just here for types sake
                                            loading: false,
                                            data: diff.result,
                                            dataState: fetchMoreResult.dataState === "streaming" ? "streaming" : "complete"
                                        }
                                    });
                                }
                            }
                        }
                    });
                } else {
                    // There is a possibility `lastResult` may not be set when
                    // `fetchMore` is called which would cause this to crash. This should
                    // only happen if we haven't previously reported a result. We don't
                    // quite know what the right behavior should be here since this block
                    // of code runs after the fetch result has executed on the network.
                    // We plan to let it crash in the meantime.
                    //
                    // If we get bug reports due to the `data` property access on
                    // undefined, this should give us a real-world scenario that we can
                    // use to test against and determine the right behavior. If we do end
                    // up changing this behavior, this may require, for example, an
                    // adjustment to the types on `updateQuery` since that function
                    // expects that the first argument always contains previous result
                    // data, but not `undefined`.
                    const lastResult = this.getCurrentResult();
                    const data = updateQuery(lastResult.data, {
                        fetchMoreResult: fetchMoreResult.data,
                        variables: combinedOptions.variables
                    });
                    pushNotification({
                        kind: "N",
                        value: {
                            ...lastResult,
                            networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
                            // will be overwritten anyways, just here for types sake
                            loading: false,
                            data: data,
                            dataState: lastResult.dataState === "streaming" ? "streaming" : "complete"
                        },
                        source: "network"
                    });
                }
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$preventUnhandledRejection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preventUnhandledRejection"])(promise.then((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryResult"])(this.maskResult(result))).finally(()=>{
            subscription.unsubscribe();
            finalize();
            if (isCached && !wasUpdated) {
                const lastResult = this.getCurrentResult();
                if (lastResult.dataState === "streaming") {
                    pushNotification({
                        kind: "N",
                        source: "network",
                        value: {
                            ...lastResult,
                            dataState: "complete",
                            networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready
                        }
                    });
                } else {
                    pushNotification({
                        kind: "N",
                        source: "newNetworkStatus",
                        value: {}
                    }, {
                        shouldEmit: 1 /* EmitBehavior.force */ 
                    });
                }
            }
        }));
    }
    // XXX the subscription variables are separate from the query variables.
    // if you want to update subscription variables, right now you have to do that separately,
    // and you can only do it by stopping the subscription and then subscribing again with new variables.
    /**
     * A function that enables you to execute a [subscription](https://www.apollographql.com/docs/react/data/subscriptions/), usually to subscribe to specific fields that were included in the query.
     *
     * This function returns _another_ function that you can call to terminate the subscription.
     */ subscribeToMore(options) {
        const subscription = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context
        }).subscribe({
            next: (subscriptionData)=>{
                const { updateQuery, onError } = options;
                const { error } = subscriptionData;
                if (error) {
                    if (onError) {
                        onError(error);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(84, error);
                    }
                    return;
                }
                if (updateQuery) {
                    this.updateQuery((previous, updateOptions)=>updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            ...updateOptions
                        }));
                }
            }
        });
        this.subscriptions.add(subscription);
        return ()=>{
            if (this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    }
    /**
    * @internal
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ applyOptions(newOptions) {
        const mergedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(this.options, newOptions || {});
        assign(this.options, mergedOptions);
        this.updatePolling();
    }
    /**
     * Update the variables of this observable query, and fetch the new results
     * if they've changed. Most users should prefer `refetch` instead of
     * `setVariables` in order to to be properly notified of results even when
     * they come from the cache.
     *
     * Note: `setVariables()` guarantees that a value will be emitted from the
     * observable, even if the result is deeply equal to the previous value.
     *
     * Note: the promise will resolve with the last emitted result
     * when either the variables match the current variables or there
     * are no subscribers to the query.
     *
     * @param variables - The new set of variables. If there are missing variables,
     * the previous values of those variables will be used.
     */ async setVariables(variables) {
        variables = this.getVariablesWithDefaults(variables);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(this.variables, variables)) {
            // If we have no observers, then we don't actually want to make a network
            // request. As soon as someone observes the query, the request will kick
            // off. For now, we just store any changes. (See #1077)
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryResult"])(this.getCurrentResult());
        }
        this.options.variables = variables;
        // See comment above
        if (!this.hasObservers()) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryResult"])(this.getCurrentResult());
        }
        return this._reobserve({
            // Reset options.fetchPolicy to its original value.
            fetchPolicy: this.options.initialFetchPolicy,
            variables
        }, {
            newNetworkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].setVariables
        });
    }
    /**
     * A function that enables you to update the query's cached result without executing a followup GraphQL operation.
     *
     * See [using updateQuery and updateFragment](https://www.apollographql.com/docs/react/caching/cache-interaction/#using-updatequery-and-updatefragment) for additional information.
     */ updateQuery(mapFn) {
        const { queryManager } = this;
        const { result, complete } = this.getCacheDiff({
            optimistic: false
        });
        const newResult = mapFn(result, {
            variables: this.variables,
            complete: !!complete,
            previousData: result
        });
        if (newResult) {
            this.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables
            });
            queryManager.broadcastQueries();
        }
    }
    /**
     * A function that instructs the query to begin re-executing at a specified interval (in milliseconds).
     */ startPolling(pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    }
    /**
     * A function that instructs the query to stop polling after a previous call to `startPolling`.
     */ stopPolling() {
        this.options.pollInterval = 0;
        this.updatePolling();
    }
    // Update options.fetchPolicy according to options.nextFetchPolicy.
    applyNextFetchPolicy(reason, // It's possible to use this method to apply options.nextFetchPolicy to
    // options.fetchPolicy even if options !== this.options, though that happens
    // most often when the options are temporary, used for only one request and
    // then thrown away, so nextFetchPolicy may not end up mattering.
    options) {
        if (options.nextFetchPolicy) {
            const { fetchPolicy = "cache-first", initialFetchPolicy = fetchPolicy } = options;
            if (fetchPolicy === "standby") {
            // Do nothing, leaving options.fetchPolicy unchanged.
            } else if (typeof options.nextFetchPolicy === "function") {
                // When someone chooses "cache-and-network" or "network-only" as their
                // initial FetchPolicy, they often do not want future cache updates to
                // trigger unconditional network requests, which is what repeatedly
                // applying the "cache-and-network" or "network-only" policies would
                // seem to imply. Instead, when the cache reports an update after the
                // initial network request, it may be desirable for subsequent network
                // requests to be triggered only if the cache result is incomplete. To
                // that end, the options.nextFetchPolicy option provides an easy way to
                // update options.fetchPolicy after the initial network request, without
                // having to call observableQuery.reobserve.
                options.fetchPolicy = options.nextFetchPolicy.call(options, fetchPolicy, {
                    reason,
                    options,
                    observable: this,
                    initialFetchPolicy
                });
            } else if (reason === "variables-changed") {
                options.fetchPolicy = initialFetchPolicy;
            } else {
                options.fetchPolicy = options.nextFetchPolicy;
            }
        }
        return options.fetchPolicy;
    }
    fetch(options, networkStatus, fetchQuery, operator) {
        // TODO Make sure we update the networkStatus (and infer fetchVariables)
        // before actually committing to the fetch.
        const initialFetchPolicy = this.options.fetchPolicy;
        options.context ??= {};
        let synchronouslyEmitted = false;
        const onCacheHit = ()=>{
            synchronouslyEmitted = true;
        };
        const fetchQueryOperator = // hook with `subscribe` and we care for "directly before and after subscription"
        (source)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((subscriber)=>{
                try {
                    return source.subscribe({
                        next (value) {
                            synchronouslyEmitted = true;
                            subscriber.next(value);
                        },
                        error: (error)=>subscriber.error(error),
                        complete: ()=>subscriber.complete()
                    });
                } finally{
                    if (!synchronouslyEmitted) {
                        operation.override = networkStatus;
                        this.input.next({
                            kind: "N",
                            source: "newNetworkStatus",
                            value: {
                                resetError: true
                            },
                            query,
                            variables,
                            meta: {
                                shouldEmit: 3 /* EmitBehavior.networkStatusChange */ ,
                                /*
                             * The moment this notification is emitted, `nextFetchPolicy`
                             * might already have switched from a `network-only` to a
                             * `cache-something` policy, so we want to ensure that the
                             * loading state emit doesn't accidentally read from the cache
                             * in those cases.
                             */ fetchPolicy: initialFetchPolicy
                            }
                        });
                    }
                }
            });
        let { observable, fromLink } = this.queryManager.fetchObservableWithInfo(options, {
            networkStatus,
            query: fetchQuery,
            onCacheHit,
            fetchQueryOperator,
            observableQuery: this
        });
        // track query and variables from the start of the operation
        const { query, variables } = this;
        const operation = {
            abort: ()=>{
                subscription.unsubscribe();
            },
            query,
            variables
        };
        this.activeOperations.add(operation);
        let forceFirstValueEmit = networkStatus == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].refetch || networkStatus == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].setVariables;
        observable = observable.pipe(operator, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["share"])());
        const subscription = observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tap"])({
            next: (notification)=>{
                if (notification.source === "newNetworkStatus" || notification.kind === "N" && notification.value.loading) {
                    operation.override = networkStatus;
                } else {
                    delete operation.override;
                }
            },
            finalize: ()=>this.activeOperations.delete(operation)
        })).subscribe({
            next: (value)=>{
                const meta = {};
                if (forceFirstValueEmit && value.kind === "N" && "loading" in value.value && !value.value.loading) {
                    forceFirstValueEmit = false;
                    meta.shouldEmit = 1 /* EmitBehavior.force */ ;
                }
                this.input.next({
                    ...value,
                    query,
                    variables,
                    meta
                });
            }
        });
        return {
            fromLink,
            subscription,
            observable
        };
    }
    // Turns polling on or off based on this.options.pollInterval.
    didWarnCacheOnlyPolling = false;
    updatePolling() {
        // Avoid polling in SSR mode
        if (this.queryManager.ssrMode) {
            return;
        }
        const { pollingInfo, options: { fetchPolicy, pollInterval } } = this;
        if (!pollInterval || !this.hasObservers() || fetchPolicy === "cache-only") {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                if (!this.didWarnCacheOnlyPolling && pollInterval && fetchPolicy === "cache-only") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(85, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(this.query, "(anonymous)"));
                    this.didWarnCacheOnlyPolling = true;
                }
            }
            this.cancelPolling();
            return;
        }
        if (pollingInfo?.interval === pollInterval) {
            return;
        }
        const info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        const maybeFetch = ()=>{
            if (this.pollingInfo) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestInFlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNetworkRequestInFlight"])(this.networkStatus) && !this.options.skipPollAttempt?.()) {
                    this._reobserve({
                        // Most fetchPolicy options don't make sense to use in a polling context, as
                        // users wouldn't want to be polling the cache directly. However, network-only and
                        // no-cache are both useful for when the user wants to control whether or not the
                        // polled results are written to the cache.
                        fetchPolicy: this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
                    }, {
                        newNetworkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].poll
                    }).then(poll, poll);
                } else {
                    poll();
                }
            }
        };
        const poll = ()=>{
            const info = this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    }
    // This differs from stopPolling in that it does not set pollInterval to 0
    cancelPolling() {
        if (this.pollingInfo) {
            clearTimeout(this.pollingInfo.timeout);
            delete this.pollingInfo;
        }
    }
    /**
     * Reevaluate the query, optionally against new options. New options will be
     * merged with the current options when given.
     *
     * Note: `variables` can be reset back to their defaults (typically empty) by calling `reobserve` with
     * `variables: undefined`.
     */ reobserve(newOptions) {
        return this._reobserve(newOptions);
    }
    _reobserve(newOptions, internalOptions) {
        this.isTornDown = false;
        let { newNetworkStatus } = internalOptions || {};
        this.queryManager.obsQueries.add(this);
        const useDisposableObservable = // Refetching uses a disposable Observable to allow refetches using different
        // options, without permanently altering the options of the
        // original ObservableQuery.
        newNetworkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].refetch || // Polling uses a disposable Observable so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        newNetworkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].poll;
        // Save the old variables, since Object.assign may modify them below.
        const oldVariables = this.variables;
        const oldFetchPolicy = this.options.fetchPolicy;
        const mergedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(this.options, newOptions || {});
        // This request will hit the network, so even if there are no variables,
        // we now know that's intentional. (see #12996)
        // Even if that happens only once, we want `variablesUnknown` to stay false permanently.
        this.variablesUnknown &&= mergedOptions.fetchPolicy === "standby";
        const options = useDisposableObservable ? // Disposable Observable fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        mergedOptions : assign(this.options, mergedOptions);
        // Don't update options.query with the transformed query to avoid
        // overwriting this.options.query when we aren't using a disposable concast.
        // We want to ensure we can re-run the custom document transforms the next
        // time a request is made against the original query.
        const query = this.transformDocument(options.query);
        this.lastQuery = query;
        // Reevaluate variables to allow resetting variables with variables: undefined,
        // otherwise `compact` will ignore the `variables` key in `newOptions`. We
        // do this after we run the query transform to ensure we get default
        // variables from the transformed query.
        //
        // Note: updating options.variables may mutate this.options.variables
        // in the case of a non-disposable query. This is intentional.
        if (newOptions && "variables" in newOptions) {
            options.variables = this.getVariablesWithDefaults(newOptions.variables);
        }
        if (!useDisposableObservable) {
            // We can skip calling updatePolling if we're not changing this.options.
            this.updatePolling();
            // Reset options.fetchPolicy to its original value when variables change,
            // unless a new fetchPolicy was provided by newOptions.
            if (newOptions && newOptions.variables && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(newOptions.variables, oldVariables) && // Don't mess with the fetchPolicy if it's currently "standby".
            options.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
            // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
            (options.fetchPolicy === oldFetchPolicy || // A `nextFetchPolicy` function has even higher priority, though,
            // so in that case `applyNextFetchPolicy` must be called.
            typeof options.nextFetchPolicy === "function")) {
                // This might mutate options.fetchPolicy
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].setVariables;
                }
            }
        }
        const oldNetworkStatus = this.networkStatus;
        if (!newNetworkStatus) {
            newNetworkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading;
            if (oldNetworkStatus !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading && newOptions?.variables && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(newOptions.variables, oldVariables)) {
                newNetworkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].setVariables;
            }
            // QueryManager does not emit any values for standby fetch policies so we
            // want ensure that the networkStatus remains ready.
            if (options.fetchPolicy === "standby") {
                newNetworkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready;
            }
        }
        if (options.fetchPolicy === "standby") {
            this.cancelPolling();
        }
        this.resubscribeCache();
        const { promise, operator: promiseOperator } = getTrackingOperatorPromise(// This default value should only be used when using a `fetchPolicy` of
        // `standby` since that fetch policy completes without emitting a
        // result. Since we are converting this to a QueryResult type, we
        // omit the extra fields from ApolloQueryResult in the default value.
        options.fetchPolicy === "standby" ? {
            data: undefined
        } : undefined);
        const { subscription, observable, fromLink } = this.fetch(options, newNetworkStatus, query, promiseOperator);
        if (!useDisposableObservable && (fromLink || !this.linkSubscription)) {
            if (this.linkSubscription) {
                this.linkSubscription.unsubscribe();
            }
            this.linkSubscription = subscription;
        }
        const ret = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$preventUnhandledRejection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preventUnhandledRejection"])(promise.then((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryResult"])(this.maskResult(result))).finally(()=>{
            if (!this.hasObservers() && this.activeOperations.size === 0) {
                // If `reobserve` was called on a query without any observers,
                // the teardown logic would never be called, so we need to
                // call it here to ensure the query is properly torn down.
                this.tearDownQuery();
            }
        })), {
            retain: ()=>{
                const subscription = observable.subscribe({});
                const unsubscribe = ()=>subscription.unsubscribe();
                promise.then(unsubscribe, unsubscribe);
                return ret;
            }
        });
        return ret;
    }
    hasObservers() {
        return this.subject.observed;
    }
    /**
     * Tears down the `ObservableQuery` and stops all active operations by sending a `complete` notification.
     */ stop() {
        this.subject.complete();
        this.initializeObservablesQueue();
        this.tearDownQuery();
    }
    tearDownQuery() {
        if (this.isTornDown) return;
        this.resetNotifications();
        this.unsubscribeFromCache?.();
        if (this.linkSubscription) {
            this.linkSubscription.unsubscribe();
            delete this.linkSubscription;
        }
        this.stopPolling();
        // stop all active GraphQL subscriptions
        this.subscriptions.forEach((sub)=>sub.unsubscribe());
        this.subscriptions.clear();
        this.queryManager.obsQueries.delete(this);
        this.isTornDown = true;
        this.abortActiveOperations();
        this._lastWrite = undefined;
    }
    transformDocument(document) {
        return this.queryManager.transform(document);
    }
    maskResult(result) {
        const masked = this.queryManager.maskOperation({
            document: this.query,
            data: result.data,
            fetchPolicy: this.options.fetchPolicy,
            cause: this
        });
        // Maintain object identity as much as possible
        return masked === result.data ? result : {
            ...result,
            data: masked
        };
    }
    dirty = false;
    notifyTimeout;
    /**
    * @internal
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ resetNotifications() {
        if (this.notifyTimeout) {
            clearTimeout(this.notifyTimeout);
            this.notifyTimeout = void 0;
        }
        this.dirty = false;
    }
    /**
    * @internal
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ scheduleNotify() {
        if (this.dirty) return;
        this.dirty = true;
        if (!this.notifyTimeout) {
            this.notifyTimeout = setTimeout(()=>this.notify(true), 0);
        }
    }
    /**
    * @internal
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ notify(scheduled = false) {
        if (!scheduled) {
            // For queries with client exports or forced resolvers, we don't want to
            // synchronously reobserve the cache on broadcast,
            // but actually wait for the `scheduleNotify` timeout triggered by the
            // `cache.watch` callback from `resubscribeCache`.
            const info = this.queryManager.getDocumentInfo(this.query);
            if (info.hasClientExports || info.hasForcedResolvers) {
                return;
            }
        }
        const { dirty } = this;
        this.resetNotifications();
        if (dirty && (this.options.fetchPolicy === "cache-only" || this.options.fetchPolicy === "cache-and-network" || !this.activeOperations.size)) {
            const diff = this.getCacheDiff();
            if (// `fromOptimisticTransaction` is not available through the `cache.diff`
            // code path, so we need to check it this way
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(diff.result, this.getCacheDiff({
                optimistic: false
            }).result)) {
                //If this diff did not come from an optimistic transaction
                // make the ObservableQuery "reobserve" the latest data
                // using a temporary fetch policy of "cache-first", so complete cache
                // results have a chance to be delivered without triggering additional
                // network requests, even when options.fetchPolicy is "network-only"
                // or "cache-and-network". All other fetch policies are preserved by
                // this method, and are handled by calling oq.reobserve(). If this
                // reobservation is spurious, distinctUntilChanged still has a
                // chance to catch it before delivery to ObservableQuery subscribers.
                this.reobserveCacheFirst();
            } else {
                // If this diff came from an optimistic transaction, deliver the
                // current cache data to the ObservableQuery, but don't perform a
                // reobservation, since oq.reobserveCacheFirst might make a network
                // request, and we never want to trigger network requests in the
                // middle of optimistic updates.
                this.input.next({
                    kind: "N",
                    value: {
                        data: diff.result,
                        dataState: diff.complete ? "complete" : diff.result ? "partial" : "empty",
                        networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
                        loading: false,
                        error: undefined,
                        partial: !diff.complete
                    },
                    source: "cache",
                    query: this.query,
                    variables: this.variables,
                    meta: {}
                });
            }
        }
    }
    activeOperations = new Set();
    pushOperation(networkStatus) {
        let aborted = false;
        // track query and variables from the start of the operation
        const { query, variables } = this;
        const finalize = ()=>{
            this.activeOperations.delete(operation);
        };
        const operation = {
            override: networkStatus,
            abort: ()=>{
                aborted = true;
                finalize();
            },
            query,
            variables
        };
        this.activeOperations.add(operation);
        return {
            finalize,
            pushNotification: (notification, additionalMeta)=>{
                if (!aborted) {
                    this.input.next({
                        ...notification,
                        query,
                        variables,
                        meta: {
                            ...additionalMeta
                        }
                    });
                }
            }
        };
    }
    calculateNetworkStatus(baseNetworkStatus) {
        if (baseNetworkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].streaming) {
            return baseNetworkStatus;
        }
        // in the future, this could be more complex logic, e.g. "refetch" and
        // "fetchMore" having priority over "polling" or "loading" network statuses
        // as for now we just take the "latest" operation that is still active,
        // as that lines up best with previous behavior[]
        const operation = Array.from(this.activeOperations.values()).reverse().find((operation)=>isEqualQuery(operation, this) && operation.override !== undefined);
        return operation?.override ?? baseNetworkStatus;
    }
    abortActiveOperations() {
        this.activeOperations.forEach((operation)=>operation.abort());
    }
    /**
    * @internal
    * Called from `clearStore`.
    *
    * - resets the query to its initial state
    * - cancels all active operations and their subscriptions
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ reset() {
        // exception for cache-only queries - we reset them into a "ready" state
        // as we won't trigger a refetch for them
        const resetToEmpty = this.options.fetchPolicy === "cache-only";
        this.setResult(resetToEmpty ? empty : uninitialized, {
            shouldEmit: resetToEmpty ? 1 /* EmitBehavior.force */  : 2 /* EmitBehavior.never */ 
        });
        this.abortActiveOperations();
    }
    /**
    * @internal
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ setResult(result, additionalMeta) {
        this.input.next({
            source: "setResult",
            kind: "N",
            value: result,
            query: this.query,
            variables: this.variables,
            meta: {
                ...additionalMeta
            }
        });
    }
    operator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$filterMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterMap"])((notification)=>{
        const { query, variables, meta } = notification;
        if (notification.source === "setResult") {
            return {
                query,
                variables,
                result: notification.value,
                meta
            };
        }
        if (notification.kind === "C" || !isEqualQuery(notification, this)) {
            return;
        }
        let result;
        const previous = this.subject.getValue();
        if (notification.source === "cache") {
            result = notification.value;
            if (result.networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready && result.partial && (!this.options.returnPartialData || previous.result.networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error) && this.options.fetchPolicy !== "cache-only") {
                return;
            }
        } else if (notification.source === "network") {
            if (this.waitForNetworkResult) {
                this.waitForNetworkResult = false;
                this.resubscribeCache();
            }
            result = notification.kind === "E" ? {
                ...isEqualQuery(previous, notification) ? previous.result : {
                    data: undefined,
                    dataState: "empty",
                    partial: true
                },
                error: notification.error,
                networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error,
                loading: false
            } : notification.value;
            if (notification.kind === "E" && result.dataState === "streaming") {
                result.dataState = "complete";
            }
            if (result.error) {
                meta.shouldEmit = 1 /* EmitBehavior.force */ ;
            }
        } else if (notification.source === "newNetworkStatus") {
            const baseResult = isEqualQuery(previous, notification) ? previous.result : this.getInitialResult(meta.fetchPolicy);
            const { resetError } = notification.value;
            const error = resetError ? undefined : baseResult.error;
            const networkStatus = error ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready;
            result = {
                ...baseResult,
                error,
                networkStatus
            };
        }
        // every code path until here should have either returned or set a result,
        // but typescript needs a little help
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(result);
        // normalize result shape
        if (!result.error) delete result.error;
        result.networkStatus = this.calculateNetworkStatus(result.networkStatus);
        result.loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestInFlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNetworkRequestInFlight"])(result.networkStatus);
        result = this.maskResult(result);
        return {
            query,
            variables,
            result,
            meta
        };
    });
    // Reobserve with fetchPolicy effectively set to "cache-first", triggering
    // delivery of any new data from the cache, possibly falling back to the network
    // if any cache data are missing. This allows _complete_ cache results to be
    // delivered without also kicking off unnecessary network requests when
    // this.options.fetchPolicy is "cache-and-network" or "network-only". When
    // this.options.fetchPolicy is any other policy ("cache-first", "cache-only",
    // "standby", or "no-cache"), we call this.reobserve() as usual.
    reobserveCacheFirst() {
        const { fetchPolicy, nextFetchPolicy } = this.options;
        if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
            this.reobserve({
                fetchPolicy: "cache-first",
                // Use a temporary nextFetchPolicy function that replaces itself with the
                // previous nextFetchPolicy value and returns the original fetchPolicy.
                nextFetchPolicy (currentFetchPolicy, context) {
                    // Replace this nextFetchPolicy function in the options object with the
                    // original this.options.nextFetchPolicy value.
                    this.nextFetchPolicy = nextFetchPolicy;
                    // If the original nextFetchPolicy value was a function, give it a
                    // chance to decide what happens here.
                    if (typeof this.nextFetchPolicy === "function") {
                        return this.nextFetchPolicy(currentFetchPolicy, context);
                    }
                    // Otherwise go back to the original this.options.fetchPolicy.
                    return fetchPolicy;
                }
            });
        } else {
            this.reobserve();
        }
    }
    getVariablesWithDefaults(variables) {
        return this.queryManager.getVariables(this.query, variables);
    }
}
function logMissingFieldErrors(missing) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && missing) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].debug(86, missing);
    }
}
function isEqualQuery(a, b) {
    return !!(a && b && a.query === b.query && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(a.variables, b.variables));
}
function getTrackingOperatorPromise(defaultValue) {
    let lastValue = defaultValue, resolve, reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    const operator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tap"])({
        next (value) {
            if (value.kind === "E") {
                return reject(value.error);
            }
            if (value.kind === "N" && value.source !== "newNetworkStatus" && !value.value.loading) {
                lastValue = value.value;
            }
        },
        finalize: ()=>{
            if (lastValue) {
                resolve(lastValue);
            } else {
                const message = "The operation was aborted.";
                const name = "AbortError";
                reject(typeof DOMException !== "undefined" ? new DOMException(message, name) : Object.assign(new Error(message), {
                    name
                }));
            }
        }
    });
    return {
        promise,
        operator
    };
} //# sourceMappingURL=ObservableQuery.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/QueryInfo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryInfo",
    ()=>QueryInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/graphQLResultHasError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
;
const IGNORE = {};
const destructiveMethodCounts = new WeakMap();
function wrapDestructiveCacheMethod(cache, methodName) {
    const original = cache[methodName];
    if (typeof original === "function") {
        // @ts-expect-error this is just too generic to be typed correctly
        cache[methodName] = function() {
            destructiveMethodCounts.set(cache, // The %1e15 allows the count to wrap around to 0 safely every
            // quadrillion evictions, so there's no risk of overflow. To be
            // clear, this is more of a pedantic principle than something
            // that matters in any conceivable practical scenario.
            (destructiveMethodCounts.get(cache) + 1) % 1e15);
            // @ts-expect-error this is just too generic to be typed correctly
            return original.apply(this, arguments);
        };
    }
}
const queryInfoIds = new WeakMap();
class QueryInfo {
    // TODO remove soon - this should be able to be handled by cancelling old operations before starting new ones
    lastRequestId = 1;
    cache;
    queryManager;
    id;
    observableQuery;
    incremental;
    constructor(queryManager, observableQuery){
        const cache = this.cache = queryManager.cache;
        const id = (queryInfoIds.get(queryManager) || 0) + 1;
        queryInfoIds.set(queryManager, id);
        this.id = id + "";
        this.observableQuery = observableQuery;
        this.queryManager = queryManager;
        // Track how often cache.evict is called, since we want eviction to
        // override the feud-stopping logic in the markQueryResult method, by
        // causing shouldWrite to return true. Wrapping the cache.evict method
        // is a bit of a hack, but it saves us from having to make eviction
        // counting an official part of the ApolloCache API.
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    /**
    * @internal
    * For feud-preventing behaviour, `lastWrite` should be shared by all `QueryInfo` instances of an `ObservableQuery`.
    * In the case of a standalone `QueryInfo`, we will keep a local version.
    * 
    * @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
    */ _lastWrite;
    get lastWrite() {
        return (this.observableQuery || this)._lastWrite;
    }
    set lastWrite(value) {
        (this.observableQuery || this)._lastWrite = value;
    }
    resetLastWrite() {
        this.lastWrite = void 0;
    }
    shouldWrite(result, variables) {
        const { lastWrite } = this;
        return !(lastWrite && // If cache.evict has been called since the last time we wrote this
        // data into the cache, there's a chance writing this result into
        // the cache will repair what was evicted.
        lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(variables, lastWrite.variables) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(result.data, lastWrite.result.data) && // We have to compare these values because its possible the final chunk
        // emitted in the incremental result is just `hasNext: false`. This
        // ensures we trigger a cache write when we get `isLastChunk: true`.
        result.extensions?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]] === lastWrite.result.extensions?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]]);
    }
    get hasNext() {
        return this.incremental ? this.incremental.hasNext : false;
    }
    maybeHandleIncrementalResult(cacheData, incoming, query) {
        const { incrementalHandler } = this.queryManager;
        if (incrementalHandler.isIncrementalResult(incoming)) {
            this.incremental ||= incrementalHandler.startRequest({
                query
            });
            return this.incremental.handle(cacheData, incoming);
        }
        return incoming;
    }
    markQueryResult(incoming, { document: query, variables, errorPolicy, cacheWriteBehavior }) {
        const diffOptions = {
            query,
            variables,
            returnPartialData: true,
            optimistic: true
        };
        // Cancel the pending notify timeout (if it exists) to prevent extraneous network
        // requests. To allow future notify timeouts, diff and dirty are reset as well.
        this.observableQuery?.["resetNotifications"]();
        const skipCache = cacheWriteBehavior === 0 /* CacheWriteBehavior.FORBID */ ;
        const lastDiff = skipCache ? undefined : this.cache.diff(diffOptions);
        let result = this.maybeHandleIncrementalResult(lastDiff?.result, incoming, query);
        if (skipCache) {
            return result;
        }
        if (shouldWriteResult(result, errorPolicy)) {
            // Using a transaction here so we have a chance to read the result
            // back from the cache before the watch callback fires as a result
            // of writeQuery, so we can store the new diff quietly and ignore
            // it when we receive it redundantly from the watch callback.
            this.cache.batch({
                onWatchUpdated: (// all additional options on ObservableQuery.CacheWatchOptions are
                // optional so we can use the type here
                watch, diff)=>{
                    if (watch.watcher === this.observableQuery) {
                        // see comment on `lastOwnDiff` for explanation
                        watch.lastOwnDiff = diff;
                    }
                },
                update: (cache)=>{
                    if (this.shouldWrite(result, variables)) {
                        cache.writeQuery({
                            query,
                            data: result.data,
                            variables,
                            overwrite: cacheWriteBehavior === 1 /* CacheWriteBehavior.OVERWRITE */ ,
                            extensions: result.extensions
                        });
                        this.lastWrite = {
                            result,
                            variables,
                            dmCount: destructiveMethodCounts.get(this.cache)
                        };
                    } else {
                        // If result is the same as the last result we received from
                        // the network (and the variables match too), avoid writing
                        // result into the cache again. The wisdom of skipping this
                        // cache write is far from obvious, since any cache write
                        // could be the one that puts the cache back into a desired
                        // state, fixing corruption or missing data. However, if we
                        // always write every network result into the cache, we enable
                        // feuds between queries competing to update the same data in
                        // incompatible ways, which can lead to an endless cycle of
                        // cache broadcasts and useless network requests. As with any
                        // feud, eventually one side must step back from the brink,
                        // letting the other side(s) have the last word(s). There may
                        // be other points where we could break this cycle, such as
                        // silencing the broadcast for cache.writeQuery (not a good
                        // idea, since it just delays the feud a bit) or somehow
                        // avoiding the network request that just happened (also bad,
                        // because the server could return useful new data). All
                        // options considered, skipping this cache write seems to be
                        // the least damaging place to break the cycle, because it
                        // reflects the intuition that we recently wrote this exact
                        // result into the cache, so the cache *should* already/still
                        // contain this data. If some other query has clobbered that
                        // data in the meantime, that's too bad, but there will be no
                        // winners if every query blindly reverts to its own version
                        // of the data. This approach also gives the network a chance
                        // to return new data, which will be written into the cache as
                        // usual, notifying only those queries that are directly
                        // affected by the cache updates, as usual. In the future, an
                        // even more sophisticated cache could perhaps prevent or
                        // mitigate the clobbering somehow, but that would make this
                        // particular cache write even less important, and thus
                        // skipping it would be even safer than it is today.
                        if (lastDiff && lastDiff.complete) {
                            // Reuse data from the last good (complete) diff that we
                            // received, when possible.
                            result = {
                                ...result,
                                data: lastDiff.result
                            };
                            return;
                        }
                    // If the previous this.diff was incomplete, fall through to
                    // re-reading the latest data with cache.diff, below.
                    }
                    const diff = cache.diff(diffOptions);
                    // If we're allowed to write to the cache, and we can read a
                    // complete result from the cache, update result.data to be the
                    // result from the cache, rather than the raw network result.
                    // Set without setDiff to avoid triggering a notify call, since
                    // we have other ways of notifying for this result.
                    if (diff.complete) {
                        result = {
                            ...result,
                            data: diff.result
                        };
                    }
                }
            });
        } else {
            this.lastWrite = void 0;
        }
        return result;
    }
    markMutationResult(incoming, mutation, cache = this.cache) {
        const cacheWrites = [];
        const skipCache = mutation.cacheWriteBehavior === 0 /* CacheWriteBehavior.FORBID */ ;
        let result = this.maybeHandleIncrementalResult(skipCache ? undefined : cache.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.queryManager.getDocumentInfo(mutation.document).asQuery,
            variables: mutation.variables,
            optimistic: false,
            returnPartialData: true
        }).result, incoming, mutation.document);
        if (mutation.errorPolicy === "ignore") {
            result = {
                ...result,
                errors: []
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphQLResultHasError"])(result) && mutation.errorPolicy === "none") {
            return Promise.resolve(result);
        }
        const getResultWithDataState = ()=>({
                ...result,
                dataState: this.hasNext ? "streaming" : "complete"
            });
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: "ROOT_MUTATION",
                query: mutation.document,
                variables: mutation.variables,
                extensions: result.extensions
            });
            const { updateQueries } = mutation;
            if (updateQueries) {
                this.queryManager.getObservableQueries("all").forEach((observableQuery)=>{
                    const queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !Object.hasOwnProperty.call(updateQueries, queryName)) {
                        return;
                    }
                    const updater = updateQueries[queryName];
                    const { query: document, variables } = observableQuery;
                    // Read the current query result from the store.
                    const { result: currentQueryResult, complete } = observableQuery.getCacheDiff({
                        optimistic: false
                    });
                    if (complete && currentQueryResult) {
                        // Run our reducer using the current query result and the mutation result.
                        const nextQueryResult = updater(currentQueryResult, {
                            mutationResult: getResultWithDataState(),
                            queryName: document && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(document) || void 0,
                            queryVariables: variables
                        });
                        // Write the modified result back into the store if we got a new result.
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: "ROOT_QUERY",
                                query: document,
                                variables
                            });
                        }
                    }
                });
            }
        }
        let refetchQueries = mutation.refetchQueries;
        if (typeof refetchQueries === "function") {
            refetchQueries = refetchQueries(getResultWithDataState());
        }
        if (cacheWrites.length > 0 || (refetchQueries || "").length > 0 || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
            const results = [];
            this.queryManager.refetchQueries({
                updateCache: (cache)=>{
                    if (!skipCache) {
                        cacheWrites.forEach((write)=>cache.write(write));
                    }
                    // If the mutation has some writes associated with it then we need to
                    // apply those writes to the store by running this reducer again with
                    // a write action.
                    const { update } = mutation;
                    // Determine whether result is a SingleExecutionResult,
                    // or the final ExecutionPatchResult.
                    if (update) {
                        if (!skipCache) {
                            // Re-read the ROOT_MUTATION data we just wrote into the cache
                            // (the first cache.write call in the cacheWrites.forEach loop
                            // above), so field read functions have a chance to run for
                            // fields within mutation result objects.
                            const diff = cache.diff({
                                id: "ROOT_MUTATION",
                                // The cache complains if passed a mutation where it expects a
                                // query, so we transform mutations and subscriptions to queries
                                // (only once, thanks to this.transformCache).
                                query: this.queryManager.getDocumentInfo(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true
                            });
                            if (diff.complete) {
                                result = {
                                    ...result,
                                    data: diff.result
                                };
                            }
                        }
                        // If we've received the whole response, call the update function.
                        if (!this.hasNext) {
                            update(cache, result, {
                                context: mutation.context,
                                variables: mutation.variables
                            });
                        }
                    }
                    // TODO Do this with cache.evict({ id: 'ROOT_MUTATION' }) but make it
                    // shallow to allow rolling back optimistic evictions.
                    if (!skipCache && !mutation.keepRootFields && !this.hasNext) {
                        cache.modify({
                            id: "ROOT_MUTATION",
                            fields (value, { fieldName, DELETE }) {
                                return fieldName === "__typename" ? value : DELETE;
                            }
                        });
                    }
                },
                include: refetchQueries,
                // Write the final mutation.result to the root layer of the cache.
                optimistic: false,
                // Remove the corresponding optimistic layer at the same time as we
                // write the final non-optimistic result.
                removeOptimistic: mutation.removeOptimistic,
                // Let the caller of client.mutate optionally determine the refetching
                // behavior for watched queries after the mutation.update function runs.
                // If no onQueryUpdated function was provided for this mutation, pass
                // null instead of undefined to disable the default refetching behavior.
                onQueryUpdated: mutation.onQueryUpdated || null
            }).forEach((result)=>results.push(result));
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                // Returning a promise here makes the mutation await that promise, so we
                // include results in that promise's work if awaitRefetchQueries or an
                // onQueryUpdated function was specified.
                return Promise.all(results).then(()=>result);
            }
        }
        return Promise.resolve(result);
    }
    markMutationOptimistic(optimisticResponse, mutation) {
        const data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables, {
            IGNORE
        }) : optimisticResponse;
        if (data === IGNORE) {
            return false;
        }
        this.cache.recordOptimisticTransaction((cache)=>{
            try {
                this.markMutationResult({
                    data
                }, mutation, cache);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(error);
            }
        }, this.id);
        return true;
    }
    markSubscriptionResult(result, { document, variables, errorPolicy, cacheWriteBehavior }) {
        if (cacheWriteBehavior !== 0 /* CacheWriteBehavior.FORBID */ ) {
            if (shouldWriteResult(result, errorPolicy)) {
                this.cache.write({
                    query: document,
                    result: result.data,
                    dataId: "ROOT_SUBSCRIPTION",
                    variables: variables,
                    extensions: result.extensions
                });
            }
            this.queryManager.broadcastQueries();
        }
    }
}
function shouldWriteResult(result, errorPolicy = "none") {
    const ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
    let writeWithErrors = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphQLResultHasError"])(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
} //# sourceMappingURL=QueryInfo.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/QueryManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryManager",
    ()=>QueryManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+trie@0.5.0/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/ast.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/CombinedGraphQLErrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$LinkError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/LinkError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/execute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/maskOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/DocumentTransform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestInFlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/isNetworkRequestInFlight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/print.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/caches.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$filterMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/filterMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getDefaultValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/graphQLResultHasError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/hasDirectives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasForcedResolvers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/hasForcedResolvers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isDocumentNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isDocumentNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeUniqueId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$removeDirectivesFromDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/removeDirectivesFromDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/toQueryResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/networkStatus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/ObservableQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$QueryInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/QueryInfo.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
class QueryManager {
    defaultOptions;
    client;
    /**
     * The options that were passed to the ApolloClient constructor.
     */ clientOptions;
    assumeImmutableResults;
    documentTransform;
    ssrMode;
    defaultContext;
    dataMasking;
    incrementalHandler;
    localState;
    queryDeduplication;
    /**
     * Whether to prioritize cache values over network results when
     * `fetchObservableWithInfo` is called.
     * This will essentially turn a `"network-only"` or `"cache-and-network"`
     * fetchPolicy into a `"cache-first"` fetchPolicy, but without influencing
     * the `fetchPolicy` of the `ObservableQuery`.
     *
     * This can e.g. be used to prioritize the cache during the first render after
     * SSR.
     */ prioritizeCacheValues = false;
    onBroadcast;
    mutationStore;
    /**
     * All ObservableQueries that currently have at least one subscriber.
     */ obsQueries = new Set();
    // Maps from queryInfo.id strings to Promise rejection functions for
    // currently active queries and fetches.
    // Use protected instead of private field so
    // @apollo/experimental-nextjs-app-support can access type info.
    fetchCancelFns = new Map();
    constructor(options){
        const defaultDocumentTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentTransform"]((document)=>this.cache.transformDocument(document), // Allow the apollo cache to manage its own transform caches
        {
            cache: false
        });
        this.client = options.client;
        this.defaultOptions = options.defaultOptions;
        this.queryDeduplication = options.queryDeduplication;
        this.clientOptions = options.clientOptions;
        this.ssrMode = options.ssrMode;
        this.assumeImmutableResults = options.assumeImmutableResults;
        this.dataMasking = options.dataMasking;
        this.localState = options.localState;
        this.incrementalHandler = options.incrementalHandler;
        const documentTransform = options.documentTransform;
        this.documentTransform = documentTransform ? defaultDocumentTransform.concat(documentTransform)// The custom document transform may add new fragment spreads or new
        // field selections, so we want to give the cache a chance to run
        // again. For example, the InMemoryCache adds __typename to field
        // selections and fragments from the fragment registry.
        .concat(defaultDocumentTransform) : defaultDocumentTransform;
        this.defaultContext = options.defaultContext || {};
        if (this.onBroadcast = options.onBroadcast) {
            this.mutationStore = {};
        }
    }
    get link() {
        return this.client.link;
    }
    get cache() {
        return this.client.cache;
    }
    /**
     * Call this method to terminate any active query processes, making it safe
     * to dispose of this QueryManager instance.
     */ stop() {
        this.obsQueries.forEach((oq)=>oq.stop());
        this.cancelPendingFetches((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(87));
    }
    cancelPendingFetches(error) {
        this.fetchCancelFns.forEach((cancel)=>cancel(error));
        this.fetchCancelFns.clear();
    }
    async mutate({ mutation, variables, optimisticResponse, updateQueries, refetchQueries = [], awaitRefetchQueries = false, update: updateWithProxyFn, onQueryUpdated, fetchPolicy, errorPolicy, keepRootFields, context }) {
        const queryInfo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$QueryInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryInfo"](this);
        mutation = this.cache.transformForLink(this.transform(mutation));
        const { hasClientExports } = this.getDocumentInfo(mutation);
        variables = this.getVariables(mutation, variables);
        if (hasClientExports) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(this.localState, 88, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(mutation, "(anonymous)"));
            }
            variables = await this.localState.getExportedVariables({
                client: this.client,
                document: mutation,
                variables,
                context
            });
        }
        const mutationStoreValue = this.mutationStore && (this.mutationStore[queryInfo.id] = {
            mutation,
            variables,
            loading: true,
            error: null
        });
        const isOptimistic = optimisticResponse && queryInfo.markMutationOptimistic(optimisticResponse, {
            document: mutation,
            variables,
            cacheWriteBehavior: fetchPolicy === "no-cache" ? 0 /* CacheWriteBehavior.FORBID */  : 2 /* CacheWriteBehavior.MERGE */ ,
            errorPolicy,
            context,
            updateQueries,
            update: updateWithProxyFn,
            keepRootFields
        });
        this.broadcastQueries();
        return new Promise((resolve, reject)=>{
            const cause = {};
            return this.getObservableFromLink(mutation, {
                ...context,
                optimisticResponse: isOptimistic ? optimisticResponse : void 0
            }, variables, fetchPolicy, {}, false).observable.pipe(validateDidEmitValue(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeMap"])((result)=>{
                const storeResult = {
                    ...result
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(queryInfo.markMutationResult(storeResult, {
                    document: mutation,
                    variables,
                    cacheWriteBehavior: fetchPolicy === "no-cache" ? 0 /* CacheWriteBehavior.FORBID */  : 2 /* CacheWriteBehavior.MERGE */ ,
                    errorPolicy,
                    context,
                    update: updateWithProxyFn,
                    updateQueries,
                    awaitRefetchQueries,
                    refetchQueries,
                    removeOptimistic: isOptimistic ? queryInfo.id : void 0,
                    onQueryUpdated,
                    keepRootFields
                }));
            })).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])((storeResult)=>{
                const hasErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphQLResultHasError"])(storeResult);
                if (hasErrors && errorPolicy === "none") {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedGraphQLErrors"](removeStreamDetailsFromExtensions(storeResult));
                }
                if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = null;
                }
                return storeResult;
            })).subscribe({
                next: (storeResult)=>{
                    this.broadcastQueries();
                    // Since mutations might receive multiple payloads from the
                    // ApolloLink chain (e.g. when used with @defer),
                    // we resolve with a SingleExecutionResult or after the final
                    // ExecutionPatchResult has arrived and we have assembled the
                    // multipart response into a single result.
                    if (!queryInfo.hasNext) {
                        const result = {
                            data: this.maskOperation({
                                document: mutation,
                                data: storeResult.data,
                                fetchPolicy,
                                cause
                            })
                        };
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphQLResultHasError"])(storeResult)) {
                            result.error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedGraphQLErrors"](storeResult);
                        }
                        if (Object.keys(storeResult.extensions || {}).length) {
                            result.extensions = storeResult.extensions;
                        }
                        resolve(result);
                    }
                },
                error: (error)=>{
                    if (mutationStoreValue) {
                        mutationStoreValue.loading = false;
                        mutationStoreValue.error = error;
                    }
                    if (isOptimistic) {
                        this.cache.removeOptimistic(queryInfo.id);
                    }
                    this.broadcastQueries();
                    if (errorPolicy === "ignore") {
                        return resolve({
                            data: undefined
                        });
                    }
                    if (errorPolicy === "all") {
                        return resolve({
                            data: undefined,
                            error
                        });
                    }
                    reject(error);
                }
            });
        });
    }
    fetchQuery(options, networkStatus) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(options.query, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].QUERY);
        // do the rest asynchronously to keep the same rejection timing as
        // checks further in `.mutate`
        return (async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lastValueFrom"])(this.fetchObservableWithInfo(options, {
                networkStatus
            }).observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$filterMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterMap"])((value)=>{
                switch(value.kind){
                    case "E":
                        throw value.error;
                    case "N":
                        {
                            if (value.source !== "newNetworkStatus") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$toQueryResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toQueryResult"])(value.value);
                        }
                }
            })), {
                // This default is needed when a `standby` fetch policy is used to avoid
                // an EmptyError from rejecting this promise.
                defaultValue: {
                    data: undefined
                }
            }))();
    }
    transform(document) {
        return this.documentTransform.transformDocument(document);
    }
    transformCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoCleanedWeakCache"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["queryManager.getDocumentInfo"] || 2000 /* defaultCacheSizes["queryManager.getDocumentInfo"] */ );
    getDocumentInfo(document) {
        const { transformCache } = this;
        if (!transformCache.has(document)) {
            const operationDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(document);
            const cacheEntry = {
                // TODO These three calls (hasClientExports, shouldForceResolvers, and
                // usesNonreactiveDirective) are performing independent full traversals
                // of the transformed document. We should consider merging these
                // traversals into a single pass in the future, though the work is
                // cached after the first time.
                hasClientExports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
                    "client",
                    "export"
                ], document, true),
                hasForcedResolvers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasForcedResolvers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasForcedResolvers"])(document),
                hasNonreactiveDirective: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
                    "nonreactive"
                ], document),
                hasIncrementalDirective: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
                    "defer"
                ], document),
                nonReactiveQuery: addNonReactiveToNamedFragments(document),
                clientQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
                    "client"
                ], document) ? document : null,
                serverQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$removeDirectivesFromDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDirectivesFromDocument"])([
                    {
                        name: "client",
                        remove: true
                    },
                    {
                        name: "connection"
                    },
                    {
                        name: "nonreactive"
                    },
                    {
                        name: "unmask"
                    }
                ], document),
                operationType: operationDefinition?.operation,
                defaultVars: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultValues"])(operationDefinition),
                // Transform any mutation or subscription operations to query operations
                // so we can read/write them from/to the cache.
                asQuery: {
                    ...document,
                    definitions: document.definitions.map((def)=>{
                        if (def.kind === "OperationDefinition" && def.operation !== "query") {
                            return {
                                ...def,
                                operation: "query"
                            };
                        }
                        return def;
                    })
                }
            };
            transformCache.set(document, cacheEntry);
        }
        const entry = transformCache.get(document);
        if (entry.violation) {
            throw entry.violation;
        }
        return entry;
    }
    getVariables(document, variables) {
        const defaultVars = this.getDocumentInfo(document).defaultVars;
        const varsWithDefaults = Object.entries(variables ?? {}).map(([key, value])=>[
                key,
                value === undefined ? defaultVars[key] : value
            ]);
        return {
            ...defaultVars,
            ...Object.fromEntries(varsWithDefaults)
        };
    }
    watchQuery(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(options.query, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].QUERY);
        const query = this.transform(options.query);
        // assign variable default values if supplied
        // NOTE: We don't modify options.query here with the transformed query to
        // ensure observable.options.query is set to the raw untransformed query.
        options = {
            ...options,
            variables: this.getVariables(query, options.variables)
        };
        if (typeof options.notifyOnNetworkStatusChange === "undefined") {
            options.notifyOnNetworkStatusChange = true;
        }
        const observable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObservableQuery"]({
            queryManager: this,
            options,
            transformedQuery: query
        });
        return observable;
    }
    query(options) {
        const query = this.transform(options.query);
        return this.fetchQuery({
            ...options,
            query
        }).then((value)=>({
                ...value,
                data: this.maskOperation({
                    document: query,
                    data: value?.data,
                    fetchPolicy: options.fetchPolicy
                })
            }));
    }
    requestIdCounter = 1;
    generateRequestId() {
        return this.requestIdCounter++;
    }
    clearStore(options = {
        discardWatches: true
    }) {
        // Before we have sent the reset action to the store, we can no longer
        // rely on the results returned by in-flight requests since these may
        // depend on values that previously existed in the data portion of the
        // store. So, we cancel the promises and observers that we have issued
        // so far and not yet resolved (in the case of queries).
        this.cancelPendingFetches((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(89));
        this.obsQueries.forEach((observableQuery)=>{
            // Set loading to true so listeners don't trigger unless they want
            // results with partial data.
            observableQuery.reset();
        });
        if (this.mutationStore) {
            this.mutationStore = {};
        }
        // begin removing data from the store
        return this.cache.reset(options);
    }
    getObservableQueries(include = "active") {
        const queries = new Set();
        const queryNames = new Map();
        const queryNamesAndQueryStrings = new Map();
        const legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach((desc)=>{
                if (typeof desc === "string") {
                    queryNames.set(desc, desc);
                    queryNamesAndQueryStrings.set(desc, false);
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isDocumentNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDocumentNode"])(desc)) {
                    const queryString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"])(this.transform(desc));
                    queryNames.set(queryString, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(desc));
                    queryNamesAndQueryStrings.set(queryString, false);
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.obsQueries.forEach((oq)=>{
            const document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"])(this.transform(oq.options.query));
            if (include === "all") {
                queries.add(oq);
                return;
            }
            const { queryName, options: { fetchPolicy } } = oq;
            if (include === "active" && fetchPolicy === "standby") {
                return;
            }
            if (include === "active" || queryName && queryNamesAndQueryStrings.has(queryName) || document && queryNamesAndQueryStrings.has(document)) {
                queries.add(oq);
                if (queryName) queryNamesAndQueryStrings.set(queryName, true);
                if (document) queryNamesAndQueryStrings.set(document, true);
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach((options)=>{
                const oq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObservableQuery"]({
                    queryManager: this,
                    options: {
                        ...options,
                        fetchPolicy: "network-only"
                    }
                });
                queries.add(oq);
            });
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && queryNamesAndQueryStrings.size) {
            queryNamesAndQueryStrings.forEach((included, nameOrQueryString)=>{
                if (!included) {
                    const queryName = queryNames.get(nameOrQueryString);
                    if (queryName) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(90, queryName);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(91);
                    }
                }
            });
        }
        return queries;
    }
    refetchObservableQueries(includeStandby = false) {
        const observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach((observableQuery)=>{
            const { fetchPolicy } = observableQuery.options;
            if ((includeStandby || fetchPolicy !== "standby") && fetchPolicy !== "cache-only") {
                observableQueryPromises.push(observableQuery.refetch());
            }
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    }
    startGraphQLSubscription(options) {
        let { query, variables } = options;
        const { fetchPolicy = "cache-first", errorPolicy = "none", context = {}, extensions = {} } = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(query, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].SUBSCRIPTION);
        query = this.transform(query);
        variables = this.getVariables(query, variables);
        let restart;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!this.getDocumentInfo(query).hasClientExports || this.localState, 92, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(query, "(anonymous)"));
        }
        const observable = (this.getDocumentInfo(query).hasClientExports ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(this.localState.getExportedVariables({
            client: this.client,
            document: query,
            variables,
            context
        })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])(variables)).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeMap"])((variables)=>{
            const { observable, restart: res } = this.getObservableFromLink(query, context, variables, fetchPolicy, extensions);
            const queryInfo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$QueryInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryInfo"](this);
            restart = res;
            return observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])((rawResult)=>{
                queryInfo.markSubscriptionResult(rawResult, {
                    document: query,
                    variables,
                    errorPolicy,
                    cacheWriteBehavior: fetchPolicy === "no-cache" ? 0 /* CacheWriteBehavior.FORBID */  : 2 /* CacheWriteBehavior.MERGE */ 
                });
                const result = {
                    data: rawResult.data ?? undefined
                };
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphQLResultHasError"])(rawResult)) {
                    result.error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedGraphQLErrors"](rawResult);
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["graphQLResultHasProtocolErrors"])(rawResult)) {
                    result.error = rawResult.extensions[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROTOCOL_ERRORS_SYMBOL"]];
                    // Don't emit protocol errors added by HttpLink
                    delete rawResult.extensions[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROTOCOL_ERRORS_SYMBOL"]];
                }
                if (rawResult.extensions && Object.keys(rawResult.extensions).length) {
                    result.extensions = rawResult.extensions;
                }
                if (result.error && errorPolicy === "none") {
                    result.data = undefined;
                }
                if (errorPolicy === "ignore") {
                    delete result.error;
                }
                return result;
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catchError"])((error)=>{
                if (errorPolicy === "ignore") {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])({
                        data: undefined
                    });
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])({
                    data: undefined,
                    error
                });
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])((result)=>!!(result.data || result.error)));
        }));
        return Object.assign(observable, {
            restart: ()=>restart?.()
        });
    }
    broadcastQueries() {
        if (this.onBroadcast) this.onBroadcast();
        this.obsQueries.forEach((observableQuery)=>observableQuery.notify());
    }
    // Use protected instead of private field so
    // @apollo/experimental-nextjs-app-support can access type info.
    inFlightLinkObservables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"](false);
    getObservableFromLink(query, context, variables, fetchPolicy, extensions, // Prefer context.queryDeduplication if specified.
    deduplication = context?.queryDeduplication ?? this.queryDeduplication) {
        let entry = {};
        const { serverQuery, clientQuery, operationType, hasIncrementalDirective } = this.getDocumentInfo(query);
        const operationName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(query);
        const executeContext = {
            client: this.client
        };
        if (serverQuery) {
            const { inFlightLinkObservables, link } = this;
            try {
                const operation = this.incrementalHandler.prepareRequest({
                    query: serverQuery,
                    variables,
                    context: {
                        ...this.defaultContext,
                        ...context,
                        queryDeduplication: deduplication
                    },
                    extensions
                });
                context = operation.context;
                function withRestart(source) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
                        function subscribe() {
                            return source.subscribe({
                                next: observer.next.bind(observer),
                                complete: observer.complete.bind(observer),
                                error: observer.error.bind(observer)
                            });
                        }
                        let subscription = subscribe();
                        entry.restart ||= ()=>{
                            subscription.unsubscribe();
                            subscription = subscribe();
                        };
                        return ()=>{
                            subscription.unsubscribe();
                            entry.restart = undefined;
                        };
                    });
                }
                if (deduplication) {
                    const printedServerQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"])(serverQuery);
                    const varJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"])(variables);
                    entry = inFlightLinkObservables.lookup(printedServerQuery, varJson);
                    if (!entry.observable) {
                        entry.observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(link, operation, executeContext).pipe(withRestart, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalize"])(()=>{
                            if (inFlightLinkObservables.peek(printedServerQuery, varJson) === entry) {
                                inFlightLinkObservables.remove(printedServerQuery, varJson);
                            }
                        }), // We don't want to replay the last emitted value for
                        // subscriptions and instead opt to wait to receive updates until
                        // the subscription emits new values.
                        operationType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].SUBSCRIPTION ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["share"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shareReplay"])({
                            refCount: true
                        }));
                    }
                } else {
                    entry.observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(link, operation, executeContext).pipe(withRestart);
                }
            } catch (error) {
                entry.observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(()=>error);
            }
        } else {
            entry.observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])({
                data: {}
            });
        }
        if (clientQuery) {
            const { operation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(query);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(this.localState, 93, operation[0].toUpperCase() + operation.slice(1), operationName ?? "(anonymous)");
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!hasIncrementalDirective, 94, operation[0].toUpperCase() + operation.slice(1), operationName ?? "(anonymous)");
            entry.observable = entry.observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeMap"])((result)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(this.localState.execute({
                    client: this.client,
                    document: clientQuery,
                    remoteResult: result,
                    context,
                    variables,
                    fetchPolicy
                }));
            }));
        }
        return {
            restart: ()=>entry.restart?.(),
            observable: entry.observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catchError"])((error)=>{
                error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toErrorLike"])(error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$LinkError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerLinkError"])(error);
                throw error;
            }))
        };
    }
    getResultsFromLink(options, { queryInfo, cacheWriteBehavior, observableQuery, exposeExtensions }) {
        const requestId = queryInfo.lastRequestId = this.generateRequestId();
        const { errorPolicy } = options;
        // Performing transformForLink here gives this.cache a chance to fill in
        // missing fragment definitions (for example) before sending this document
        // through the link chain.
        const linkDocument = this.cache.transformForLink(options.query);
        return this.getObservableFromLink(linkDocument, options.context, options.variables, options.fetchPolicy).observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])((incoming)=>{
            // Use linkDocument rather than queryInfo.document so the
            // operation/fragments used to write the result are the same as the
            // ones used to obtain it from the link.
            const result = queryInfo.markQueryResult(incoming, {
                ...options,
                document: linkDocument,
                cacheWriteBehavior
            });
            const hasErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$graphQLResultHasError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphQLResultHasError"])(result);
            if (hasErrors && errorPolicy === "none") {
                queryInfo.resetLastWrite();
                observableQuery?.["resetNotifications"]();
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedGraphQLErrors"](removeStreamDetailsFromExtensions(result));
            }
            const aqr = {
                data: result.data,
                ...queryInfo.hasNext ? {
                    loading: true,
                    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].streaming,
                    dataState: "streaming",
                    partial: true
                } : {
                    dataState: result.data ? "complete" : "empty",
                    loading: false,
                    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
                    partial: !result.data
                }
            };
            if (exposeExtensions && "extensions" in result) {
                aqr[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extensionsSymbol"]] = result.extensions;
            }
            // In the case we start multiple network requests simultaneously, we
            // want to ensure we properly set `data` if we're reporting on an old
            // result which will not be caught by the conditional above that ends up
            // throwing the markError result.
            if (hasErrors) {
                if (errorPolicy === "none") {
                    aqr.data = void 0;
                    aqr.dataState = "empty";
                }
                if (errorPolicy !== "ignore") {
                    aqr.error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedGraphQLErrors"](removeStreamDetailsFromExtensions(result));
                    if (aqr.dataState !== "streaming") {
                        aqr.networkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error;
                    }
                }
            }
            return aqr;
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["catchError"])((error)=>{
            // Avoid storing errors from older interrupted queries.
            if (requestId >= queryInfo.lastRequestId && errorPolicy === "none") {
                queryInfo.resetLastWrite();
                observableQuery?.["resetNotifications"]();
                throw error;
            }
            const aqr = {
                data: undefined,
                dataState: "empty",
                loading: false,
                networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
                partial: true
            };
            if (errorPolicy !== "ignore") {
                aqr.error = error;
                aqr.networkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].error;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])(aqr);
        }));
    }
    fetchObservableWithInfo(options, { // The initial networkStatus for this fetch, most often
    // NetworkStatus.loading, but also possibly fetchMore, poll, refetch,
    // or setVariables.
    networkStatus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading, query = options.query, fetchQueryOperator = (x)=>x, onCacheHit = ()=>{}, observableQuery, exposeExtensions }) {
        const variables = this.getVariables(query, options.variables);
        const defaults = this.defaultOptions.watchQuery;
        let { fetchPolicy = defaults && defaults.fetchPolicy || "cache-first", errorPolicy = defaults && defaults.errorPolicy || "none", returnPartialData = false, notifyOnNetworkStatusChange = true, context = {} } = options;
        if (this.prioritizeCacheValues && (fetchPolicy === "network-only" || fetchPolicy === "cache-and-network")) {
            fetchPolicy = "cache-first";
        }
        const normalized = Object.assign({}, options, {
            query,
            variables,
            fetchPolicy,
            errorPolicy,
            returnPartialData,
            notifyOnNetworkStatusChange,
            context
        });
        const queryInfo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$QueryInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryInfo"](this, observableQuery);
        const fromVariables = (variables)=>{
            // Since normalized is always a fresh copy of options, it's safe to
            // modify its properties here, rather than creating yet another new
            // WatchQueryOptions object.
            normalized.variables = variables;
            const cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 /* CacheWriteBehavior.FORBID */  : networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].refetch && normalized.refetchWritePolicy !== "merge" ? 1 /* CacheWriteBehavior.OVERWRITE */  : 2 /* CacheWriteBehavior.MERGE */ ;
            const observableWithInfo = this.fetchQueryByPolicy(normalized, {
                queryInfo,
                cacheWriteBehavior,
                onCacheHit,
                observableQuery,
                exposeExtensions
            });
            observableWithInfo.observable = observableWithInfo.observable.pipe(fetchQueryOperator);
            if (// If we're in standby, postpone advancing options.fetchPolicy using
            // applyNextFetchPolicy.
            normalized.fetchPolicy !== "standby") {
                observableQuery?.["applyNextFetchPolicy"]("after-fetch", options);
            }
            return observableWithInfo;
        };
        // This cancel function needs to be set before the concast is created,
        // in case concast creation synchronously cancels the request.
        const cleanupCancelFn = ()=>{
            this.fetchCancelFns.delete(queryInfo.id);
        };
        this.fetchCancelFns.set(queryInfo.id, (error)=>{
            fetchCancelSubject.next({
                kind: "E",
                error,
                source: "network"
            });
        });
        const fetchCancelSubject = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subject"]();
        let observable, containsDataFromLink;
        // If the query has @export(as: ...) directives, then we need to
        // process those directives asynchronously. When there are no
        // @export directives (the common case), we deliberately avoid
        // wrapping the result of this.fetchQueryByPolicy in a Promise,
        // since the timing of result delivery is (unfortunately) important
        // for backwards compatibility. TODO This code could be simpler if
        // we deprecated and removed LocalState.
        if (this.getDocumentInfo(normalized.query).hasClientExports) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(this.localState, 95, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(normalized.query, "(anonymous)"));
            }
            observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(this.localState.getExportedVariables({
                client: this.client,
                document: normalized.query,
                variables: normalized.variables,
                context: normalized.context
            })).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeMap"])((variables)=>fromVariables(variables).observable));
            // there is just no way we can synchronously get the *right* value here,
            // so we will assume `true`, which is the behaviour before the bug fix in
            // #10597. This means that bug is not fixed in that case, and is probably
            // un-fixable with reasonable effort for the edge case of @export as
            // directives.
            containsDataFromLink = true;
        } else {
            const sourcesWithInfo = fromVariables(normalized.variables);
            containsDataFromLink = sourcesWithInfo.fromLink;
            observable = sourcesWithInfo.observable;
        }
        return {
            // Merge `observable` with `fetchCancelSubject`, in a way that completing or
            // erroring either of them will complete the merged obserable.
            observable: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
                observer.add(cleanupCancelFn);
                observable.subscribe(observer);
                fetchCancelSubject.subscribe(observer);
            }).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["share"])()),
            fromLink: containsDataFromLink
        };
    }
    refetchQueries({ updateCache, include, optimistic = false, removeOptimistic = optimistic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeUniqueId"])("refetchQueries") : void 0, onQueryUpdated }) {
        const includedQueriesByOq = new Map();
        if (include) {
            this.getObservableQueries(include).forEach((oq)=>{
                if (oq.options.fetchPolicy === "cache-only" || oq["variablesUnknown"]) {
                    return;
                }
                const current = oq.getCurrentResult();
                includedQueriesByOq.set(oq, {
                    oq,
                    lastDiff: {
                        result: current?.data,
                        complete: !current?.partial
                    }
                });
            });
        }
        const results = new Map();
        if (updateCache) {
            const handled = new Set();
            this.cache.batch({
                update: updateCache,
                // Since you can perform any combination of cache reads and/or writes in
                // the cache.batch update function, its optimistic option can be either
                // a boolean or a string, representing three distinct modes of
                // operation:
                //
                // * false: read/write only the root layer
                // * true: read/write the topmost layer
                // * string: read/write a fresh optimistic layer with that ID string
                //
                // When typeof optimistic === "string", a new optimistic layer will be
                // temporarily created within cache.batch with that string as its ID. If
                // we then pass that same string as the removeOptimistic option, we can
                // make cache.batch immediately remove the optimistic layer after
                // running the updateCache function, triggering only one broadcast.
                //
                // However, the refetchQueries method accepts only true or false for its
                // optimistic option (not string). We interpret true to mean a temporary
                // optimistic layer should be created, to allow efficiently rolling back
                // the effect of the updateCache function, which involves passing a
                // string instead of true as the optimistic option to cache.batch, when
                // refetchQueries receives optimistic: true.
                //
                // In other words, we are deliberately not supporting the use case of
                // writing to an *existing* optimistic layer (using the refetchQueries
                // updateCache function), since that would potentially interfere with
                // other optimistic updates in progress. Instead, you can read/write
                // only the root layer by passing optimistic: false to refetchQueries,
                // or you can read/write a brand new optimistic layer that will be
                // automatically removed by passing optimistic: true.
                optimistic: optimistic && removeOptimistic || false,
                // The removeOptimistic option can also be provided by itself, even if
                // optimistic === false, to remove some previously-added optimistic
                // layer safely and efficiently, like we do in markMutationResult.
                //
                // If an explicit removeOptimistic string is provided with optimistic:
                // true, the removeOptimistic string will determine the ID of the
                // temporary optimistic layer, in case that ever matters.
                removeOptimistic,
                onWatchUpdated (watch, diff, lastDiff) {
                    const oq = watch.watcher;
                    if (oq instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObservableQuery"] && !handled.has(oq)) {
                        handled.add(oq);
                        if (onQueryUpdated) {
                            // Since we're about to handle this query now, remove it from
                            // includedQueriesById, in case it was added earlier because of
                            // options.include.
                            includedQueriesByOq.delete(oq);
                            let result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                // The onQueryUpdated function requested the default refetching
                                // behavior by returning true.
                                result = oq.refetch().retain();
                            }
                            // Record the result in the results Map, as long as onQueryUpdated
                            // did not return false to skip/ignore this result.
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            // Allow the default cache broadcast to happen, except when
                            // onQueryUpdated returns false.
                            return result;
                        }
                        if (onQueryUpdated !== null && oq.options.fetchPolicy !== "cache-only") {
                            // If we don't have an onQueryUpdated function, and onQueryUpdated
                            // was not disabled by passing null, make sure this query is
                            // "included" like any other options.include-specified query.
                            includedQueriesByOq.set(oq, {
                                oq,
                                lastDiff,
                                diff
                            });
                        }
                    }
                }
            });
        }
        if (includedQueriesByOq.size) {
            includedQueriesByOq.forEach(({ oq, lastDiff, diff })=>{
                let result;
                // If onQueryUpdated is provided, we want to use it for all included
                // queries, even the QueryOptions ones.
                if (onQueryUpdated) {
                    if (!diff) {
                        diff = oq.getCacheDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                // Otherwise, we fall back to refetching.
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch().retain();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
            });
        }
        if (removeOptimistic) {
            // In case no updateCache callback was provided (so cache.batch was not
            // called above, and thus did not already remove the optimistic layer),
            // remove it here. Since this is a no-op when the layer has already been
            // removed, we do it even if we called cache.batch above, since it's
            // possible this.cache is an instance of some ApolloCache subclass other
            // than InMemoryCache, and does not fully support the removeOptimistic
            // option for cache.batch.
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    }
    noCacheWarningsByCause = new WeakSet();
    maskOperation(options) {
        const { document, data } = options;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            const { fetchPolicy, cause = {} } = options;
            const operationType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(document)?.operation;
            if (this.dataMasking && fetchPolicy === "no-cache" && !isFullyUnmaskedOperation(document) && !this.noCacheWarningsByCause.has(cause)) {
                this.noCacheWarningsByCause.add(cause);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(96, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(document, `Unnamed ${operationType ?? "operation"}`));
            }
        }
        return this.dataMasking ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maskOperation"])(data, document, this.cache) : data;
    }
    maskFragment(options) {
        const { data, fragment, fragmentName } = options;
        return this.dataMasking ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$maskFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maskFragment"])(data, fragment, this.cache, fragmentName) : data;
    }
    fetchQueryByPolicy({ query, variables, fetchPolicy, errorPolicy, returnPartialData, context }, { cacheWriteBehavior, onCacheHit, queryInfo, observableQuery, exposeExtensions }) {
        const readCache = ()=>this.cache.diff({
                query,
                variables,
                returnPartialData: true,
                optimistic: true
            });
        const resultsFromCache = (diff, networkStatus)=>{
            const data = diff.result;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && !returnPartialData && data !== null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logMissingFieldErrors"])(diff.missing);
            }
            const toResult = (data)=>{
                // TODO: Eventually we should move this handling into
                // queryInfo.getDiff() directly. Since getDiff is updated to return null
                // on returnPartialData: false, we should take advantage of that instead
                // of having to patch it elsewhere.
                if (!diff.complete && !returnPartialData) {
                    data = undefined;
                }
                return {
                    // TODO: Handle partial data
                    data: data,
                    dataState: diff.complete ? "complete" : data ? "partial" : "empty",
                    loading: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestInFlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNetworkRequestInFlight"])(networkStatus),
                    networkStatus,
                    partial: !diff.complete
                };
            };
            const fromData = (data)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["of"])({
                    kind: "N",
                    value: toResult(data),
                    source: "cache"
                });
            };
            if (// Don't attempt to run forced resolvers if we have incomplete cache
            // data and partial isn't allowed since this result would get set to
            // `undefined` anyways in `toResult`.
            (diff.complete || returnPartialData) && this.getDocumentInfo(query).hasForcedResolvers) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(this.localState, 97, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationName"])(query, "(anonymous)"));
                }
                onCacheHit();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(this.localState.execute({
                    client: this.client,
                    document: query,
                    remoteResult: data ? {
                        data
                    } : undefined,
                    context,
                    variables,
                    onlyRunForcedResolvers: true,
                    returnPartialData: true,
                    fetchPolicy
                }).then((resolved)=>({
                        kind: "N",
                        value: toResult(resolved.data || void 0),
                        source: "cache"
                    })));
            }
            // Resolves https://github.com/apollographql/apollo-client/issues/10317.
            // If errorPolicy is 'none' and notifyOnNetworkStatusChange is true,
            // data was incorrectly returned from the cache on refetch:
            // if diff.missing exists, we should not return cache data.
            if (errorPolicy === "none" && networkStatus === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].refetch && diff.missing) {
                return fromData(void 0);
            }
            return fromData(data || undefined);
        };
        const resultsFromLink = ()=>this.getResultsFromLink({
                query,
                variables,
                context,
                fetchPolicy,
                errorPolicy
            }, {
                cacheWriteBehavior,
                queryInfo,
                observableQuery,
                exposeExtensions
            }).pipe(validateDidEmitValue(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["materialize"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])((result)=>({
                    ...result,
                    source: "network"
                })));
        switch(fetchPolicy){
            default:
            case "cache-first":
                {
                    const diff = readCache();
                    if (diff.complete) {
                        return {
                            fromLink: false,
                            observable: resultsFromCache(diff, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready)
                        };
                    }
                    if (returnPartialData) {
                        return {
                            fromLink: true,
                            observable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(resultsFromCache(diff, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading), resultsFromLink())
                        };
                    }
                    return {
                        fromLink: true,
                        observable: resultsFromLink()
                    };
                }
            case "cache-and-network":
                {
                    const diff = readCache();
                    if (diff.complete || returnPartialData) {
                        return {
                            fromLink: true,
                            observable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(resultsFromCache(diff, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].loading), resultsFromLink())
                        };
                    }
                    return {
                        fromLink: true,
                        observable: resultsFromLink()
                    };
                }
            case "cache-only":
                return {
                    fromLink: false,
                    observable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(resultsFromCache(readCache(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkStatus"].ready))
                };
            case "network-only":
                return {
                    fromLink: true,
                    observable: resultsFromLink()
                };
            case "no-cache":
                return {
                    fromLink: true,
                    observable: resultsFromLink()
                };
            case "standby":
                return {
                    fromLink: false,
                    observable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY"]
                };
        }
    }
}
function validateDidEmitValue() {
    let didEmitValue = false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tap"])({
        next () {
            didEmitValue = true;
        },
        complete () {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(didEmitValue, 98);
        }
    });
}
function isFullyUnmaskedOperation(document) {
    let isUnmasked = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(document, {
        FragmentSpread: (node)=>{
            isUnmasked = !!node.directives && node.directives.some((directive)=>directive.name.value === "unmask");
            if (!isUnmasked) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BREAK"];
            }
        }
    });
    return isUnmasked;
}
function addNonReactiveToNamedFragments(document) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(document, {
        FragmentSpread: (node)=>{
            // Do not add `@nonreactive` if the fragment is marked with `@unmask`
            // since we want to react to changes in this fragment.
            if (node.directives?.some((directive)=>directive.name.value === "unmask")) {
                return;
            }
            return {
                ...node,
                directives: [
                    ...node.directives || [],
                    {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].DIRECTIVE,
                        name: {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NAME,
                            value: "nonreactive"
                        }
                    }
                ]
            };
        }
    });
}
function removeStreamDetailsFromExtensions(original) {
    if (original.extensions?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]] == null) {
        return original;
    }
    const { extensions: { [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]]: _, ...extensions }, ...result } = original;
    if (Object.keys(extensions).length > 0) {
        result.extensions = extensions;
    }
    return result;
} //# sourceMappingURL=QueryManager.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/ApolloClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloClient",
    ()=>ApolloClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/ast.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$incremental$2f$handlers$2f$notImplemented$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/incremental/handlers/notImplemented.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/execute.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/DocumentTransform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/checkDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMemoryInternals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mapObservableFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mapObservableFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mergeOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$removeFragmentSpreads$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/removeFragmentSpreads.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$QueryManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/core/QueryManager.js [app-ssr] (ecmascript)");
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
let hasSuggestedDevtools = false;
class ApolloClient {
    link;
    cache;
    /**
     * @deprecated `disableNetworkFetches` has been renamed to `prioritizeCacheValues`.
     */ disableNetworkFetches;
    set prioritizeCacheValues(value) {
        this.queryManager.prioritizeCacheValues = value;
    }
    /**
     * Whether to prioritize cache values over network results when `query` or `watchQuery` is called.
     * This will essentially turn a `"network-only"` or `"cache-and-network"` fetchPolicy into a `"cache-first"` fetchPolicy,
     * but without influencing the `fetchPolicy` of the created `ObservableQuery` long-term.
     *
     * This can e.g. be used to prioritize the cache during the first render after SSR.
     */ get prioritizeCacheValues() {
        return this.queryManager.prioritizeCacheValues;
    }
    version;
    queryDeduplication;
    defaultOptions;
    devtoolsConfig;
    queryManager;
    devToolsHookCb;
    resetStoreCallbacks = [];
    clearStoreCallbacks = [];
    /**
     * Constructs an instance of `ApolloClient`.
     *
     * @example
     *
     * ```js
     * import { ApolloClient, InMemoryCache } from "@apollo/client";
     *
     * const cache = new InMemoryCache();
     *
     * const client = new ApolloClient({
     *   // Provide required constructor fields
     *   cache: cache,
     *   uri: "http://localhost:4000/",
     *
     *   // Provide some optional constructor fields
     *   name: "react-web-client",
     *   version: "1.3",
     *   queryDeduplication: false,
     *   defaultOptions: {
     *     watchQuery: {
     *       fetchPolicy: "cache-and-network",
     *     },
     *   },
     * });
     * ```
     */ constructor(options){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(options.cache, 68);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(options.link, 69);
        }
        const { cache, documentTransform, ssrMode = false, ssrForceFetchDelay = 0, queryDeduplication = true, defaultOptions, defaultContext, assumeImmutableResults = cache.assumeImmutableResults, localState, devtools, dataMasking, link, incrementalHandler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$incremental$2f$handlers$2f$notImplemented$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedHandler"](), experiments = [] } = options;
        this.link = link;
        this.cache = cache;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.devtoolsConfig = {
            ...devtools,
            enabled: devtools?.enabled ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]
        };
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.watchFragment = this.watchFragment.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.refetchObservableQueries = this.refetchObservableQueries.bind(this);
        this.version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"];
        this.queryManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$core$2f$QueryManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryManager"]({
            client: this,
            defaultOptions: this.defaultOptions,
            defaultContext,
            documentTransform,
            queryDeduplication,
            ssrMode,
            dataMasking: !!dataMasking,
            clientOptions: options,
            incrementalHandler,
            assumeImmutableResults,
            onBroadcast: this.devtoolsConfig.enabled ? ()=>{
                if (this.devToolsHookCb) {
                    this.devToolsHookCb();
                }
            } : void 0,
            localState
        });
        this.prioritizeCacheValues = ssrMode || ssrForceFetchDelay > 0;
        if (ssrForceFetchDelay) {
            setTimeout(()=>{
                this.prioritizeCacheValues = false;
            }, ssrForceFetchDelay);
        }
        if (this.devtoolsConfig.enabled) this.connectToDevTools();
        experiments.forEach((experiment)=>experiment.call(this, options));
    }
    connectToDevTools() {
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const windowWithDevTools = undefined;
        const devtoolsSymbol = undefined;
    }
    /**
     * The `DocumentTransform` used to modify GraphQL documents before a request
     * is made. If a custom `DocumentTransform` is not provided, this will be the
     * default document transform.
     */ get documentTransform() {
        return this.queryManager.documentTransform;
    }
    /**
     * The configured `LocalState` instance used to enable the use of `@client`
     * fields.
     */ get localState() {
        return this.queryManager.localState;
    }
    set localState(localState) {
        this.queryManager.localState = localState;
    }
    /**
     * Call this method to terminate any active client processes, making it safe
     * to dispose of this `ApolloClient` instance.
     *
     * This method performs aggressive cleanup to prevent memory leaks:
     *
     * - Unsubscribes all active `ObservableQuery` instances by emitting a `completed` event
     * - Rejects all currently running queries with "QueryManager stopped while query was in flight"
     * - Removes all queryRefs from the suspense cache
     */ stop() {
        this.queryManager.stop();
    }
    /**
     * This watches the cache store of the query according to the options specified and
     * returns an `ObservableQuery`. We can subscribe to this `ObservableQuery` and
     * receive updated results through an observer when the cache store changes.
     *
     * Note that this method is not an implementation of GraphQL subscriptions. Rather,
     * it uses Apollo's store in order to reactively deliver updates to your query results.
     *
     * For example, suppose you call watchQuery on a GraphQL query that fetches a person's
     * first and last name and this person has a particular object identifier, provided by
     * `cache.identify`. Later, a different query fetches that same person's
     * first and last name and the first name has now changed. Then, any observers associated
     * with the results of the first query will be updated with a new result object.
     *
     * Note that if the cache does not change, the subscriber will _not_ be notified.
     *
     * See [here](https://medium.com/apollo-stack/the-concepts-of-graphql-bc68bd819be3#.3mb0cbcmc) for
     * a description of store reactivity.
     */ watchQuery(options) {
        if (this.defaultOptions.watchQuery) {
            options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeOptions"])(this.defaultOptions.watchQuery, options);
        }
        return this.queryManager.watchQuery(options);
    }
    /**
     * This resolves a single query according to the options specified and
     * returns a `Promise` which is either resolved with the resulting data
     * or rejected with an error.
     *
     * @param options - An object of type `QueryOptions` that allows us to
     * describe how this query should be treated e.g. whether it should hit the
     * server at all or just resolve from the cache, etc.
     */ query(options) {
        if (this.defaultOptions.query) {
            options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeOptions"])(this.defaultOptions.query, options);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(options.fetchPolicy !== "cache-and-network", 70);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(options.fetchPolicy !== "standby", 71);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(options.query, 72);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(options.query.kind === "Document", 73);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!options.returnPartialData, 74);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!options.pollInterval, 75);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!options.notifyOnNetworkStatusChange, 76);
        }
        return this.queryManager.query(options);
    }
    /**
     * This resolves a single mutation according to the options specified and returns a
     * Promise which is either resolved with the resulting data or rejected with an
     * error. In some cases both `data` and `errors` might be undefined, for example
     * when `errorPolicy` is set to `'ignore'`.
     *
     * It takes options as an object with the following keys and values:
     */ mutate(options) {
        const optionsWithDefaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeOptions"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])({
            fetchPolicy: "network-only",
            errorPolicy: "none"
        }, this.defaultOptions.mutate), options);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(optionsWithDefaults.mutation, 77);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(optionsWithDefaults.fetchPolicy === "network-only" || optionsWithDefaults.fetchPolicy === "no-cache", 78);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$checkDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDocument"])(optionsWithDefaults.mutation, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$ast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperationTypeNode"].MUTATION);
        return this.queryManager.mutate(optionsWithDefaults);
    }
    /**
     * This subscribes to a graphql subscription according to the options specified and returns an
     * `Observable` which either emits received data or an error.
     */ subscribe(options) {
        const cause = {};
        const observable = this.queryManager.startGraphQLSubscription(options);
        const mapped = observable.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])((result)=>({
                ...result,
                data: this.queryManager.maskOperation({
                    document: options.query,
                    data: result.data,
                    fetchPolicy: options.fetchPolicy,
                    cause
                })
            })));
        return Object.assign(mapped, {
            restart: observable.restart
        });
    }
    readQuery(options, optimistic = false) {
        return this.cache.readQuery({
            ...options,
            query: this.transform(options.query)
        }, optimistic);
    }
    watchFragment(options) {
        const dataMasking = this.queryManager.dataMasking;
        const observable = this.cache.watchFragment({
            ...options,
            fragment: this.transform(options.fragment, dataMasking)
        });
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mapObservableFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObservableFragmentMemoized"])(observable, Symbol.for("apollo.transform.dev.mask"), (result)=>({
                    ...result,
                    // The transform will remove fragment spreads from the fragment
                    // document when dataMasking is enabled. The `mask` function
                    // remains to apply warnings to fragments marked as
                    // `@unmask(mode: "migrate")`. Since these warnings are only applied
                    // in dev, we can skip the masking algorithm entirely for production.
                    data: this.queryManager.maskFragment({
                        ...options,
                        data: result.data
                    })
                }));
        }
        return observable;
    }
    readFragment(options, optimistic = false) {
        return this.cache.readFragment({
            ...options,
            fragment: this.transform(options.fragment)
        }, optimistic);
    }
    /**
     * Writes some data in the shape of the provided GraphQL query directly to
     * the store. This method will start at the root query. To start at a
     * specific id returned by `cache.identify` then use `writeFragment`.
     */ writeQuery(options) {
        const ref = this.cache.writeQuery(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    }
    /**
     * Writes some data in the shape of the provided GraphQL fragment directly to
     * the store. This method will write to a GraphQL fragment from any arbitrary
     * id that is currently cached, unlike `writeQuery` which will only write
     * from the root query.
     *
     * You must pass in a GraphQL document with a single fragment or a document
     * with multiple fragments that represent what you are writing. If you pass
     * in a document with multiple fragments then you must also specify a
     * `fragmentName`.
     */ writeFragment(options) {
        const ref = this.cache.writeFragment(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    }
    __actionHookForDevTools(cb) {
        this.devToolsHookCb = cb;
    }
    __requestRaw(request) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(this.link, request, {
            client: this
        });
    }
    /**
     * Resets your entire store by clearing out your cache and then re-executing
     * all of your active queries. This makes it so that you may guarantee that
     * there is no data left in your store from a time before you called this
     * method.
     *
     * `resetStore()` is useful when your user just logged out. You’ve removed the
     * user session, and you now want to make sure that any references to data you
     * might have fetched while the user session was active is gone.
     *
     * It is important to remember that `resetStore()` _will_ refetch any active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     */ resetStore() {
        return Promise.resolve().then(()=>this.queryManager.clearStore({
                discardWatches: false
            })).then(()=>Promise.all(this.resetStoreCallbacks.map((fn)=>fn()))).then(()=>this.refetchObservableQueries());
    }
    /**
     * Remove all data from the store. Unlike `resetStore`, `clearStore` will
     * not refetch any active queries.
     */ clearStore() {
        return Promise.resolve().then(()=>this.queryManager.clearStore({
                discardWatches: true
            })).then(()=>Promise.all(this.clearStoreCallbacks.map((fn)=>fn())));
    }
    /**
     * Allows callbacks to be registered that are executed when the store is
     * reset. `onResetStore` returns an unsubscribe function that can be used
     * to remove registered callbacks.
     */ onResetStore(cb) {
        this.resetStoreCallbacks.push(cb);
        return ()=>{
            this.resetStoreCallbacks = this.resetStoreCallbacks.filter((c)=>c !== cb);
        };
    }
    /**
     * Allows callbacks to be registered that are executed when the store is
     * cleared. `onClearStore` returns an unsubscribe function that can be used
     * to remove registered callbacks.
     */ onClearStore(cb) {
        this.clearStoreCallbacks.push(cb);
        return ()=>{
            this.clearStoreCallbacks = this.clearStoreCallbacks.filter((c)=>c !== cb);
        };
    }
    /**
     * Refetches all of your active queries.
     *
     * `reFetchObservableQueries()` is useful if you want to bring the client back to proper state in case of a network outage
     *
     * It is important to remember that `reFetchObservableQueries()` _will_ refetch any active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     * Takes optional parameter `includeStandby` which will include queries in standby-mode when refetching.
     *
     * Note: `cache-only` queries are not refetched by this function.
     *
     * @deprecated Please use `refetchObservableQueries` instead.
     */ reFetchObservableQueries;
    /**
     * Refetches all of your active queries.
     *
     * `refetchObservableQueries()` is useful if you want to bring the client back to proper state in case of a network outage
     *
     * It is important to remember that `refetchObservableQueries()` _will_ refetch any active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     * Takes optional parameter `includeStandby` which will include queries in standby-mode when refetching.
     *
     * Note: `cache-only` queries are not refetched by this function.
     */ refetchObservableQueries(includeStandby) {
        return this.queryManager.refetchObservableQueries(includeStandby);
    }
    /**
     * Refetches specified active queries. Similar to "refetchObservableQueries()" but with a specific list of queries.
     *
     * `refetchQueries()` is useful for use cases to imperatively refresh a selection of queries.
     *
     * It is important to remember that `refetchQueries()` _will_ refetch specified active
     * queries. This means that any components that might be mounted will execute
     * their queries again using your network interface. If you do not want to
     * re-execute any queries then you should make sure to stop watching any
     * active queries.
     */ refetchQueries(options) {
        const map = this.queryManager.refetchQueries(options);
        const queries = [];
        const results = [];
        map.forEach((result, obsQuery)=>{
            queries.push(obsQuery);
            results.push(result);
        });
        const result = Promise.all(results);
        // In case you need the raw results immediately, without awaiting
        // Promise.all(results):
        result.queries = queries;
        result.results = results;
        // If you decide to ignore the result Promise because you're using
        // result.queries and result.results instead, you shouldn't have to worry
        // about preventing uncaught rejections for the Promise.all result.
        result.catch((error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].debug(79, error);
        });
        return result;
    }
    /**
     * Get all currently active `ObservableQuery` objects, in a `Set`.
     *
     * An "active" query is one that has observers and a `fetchPolicy` other than
     * "standby" or "cache-only".
     *
     * You can include all `ObservableQuery` objects (including the inactive ones)
     * by passing "all" instead of "active", or you can include just a subset of
     * active queries by passing an array of query names or DocumentNode objects.
     *
     * Note: This method only returns queries that have active subscribers. Queries
     * without subscribers are not tracked by the client.
     */ getObservableQueries(include = "active") {
        return this.queryManager.getObservableQueries(include);
    }
    /**
     * Exposes the cache's complete state, in a serializable format for later restoration.
     *
     * @remarks
     *
     * This can be useful for debugging in order to inspect the full state of the
     * cache.
     *
     * @param optimistic - Determines whether the result contains data from the
     * optimistic layer
     */ extract(optimistic) {
        return this.cache.extract(optimistic);
    }
    /**
     * Replaces existing state in the cache (if any) with the values expressed by
     * `serializedState`.
     *
     * Called when hydrating a cache (server side rendering, or offline storage),
     * and also (potentially) during hot reloads.
     */ restore(serializedState) {
        return this.cache.restore(serializedState);
    }
    /**
     * Define a new ApolloLink (or link chain) that Apollo Client will use.
     */ setLink(newLink) {
        this.link = newLink;
    }
    get defaultContext() {
        return this.queryManager.defaultContext;
    }
    maskedFragmentTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentTransform"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$removeFragmentSpreads$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeMaskedFragmentSpreads"]);
    transform(document, dataMasking = false) {
        const transformed = this.queryManager.transform(document);
        return dataMasking ? this.maskedFragmentTransform.transformDocument(transformed) : transformed;
    }
}
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
    ApolloClient.prototype.getMemoryInternals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApolloClientMemoryInternals"];
} //# sourceMappingURL=ApolloClient.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTypenameToDocument",
    ()=>addTypenameToDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
;
const TYPENAME_FIELD = {
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD,
    name: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].NAME,
        value: "__typename"
    }
};
const addTypenameToDocument = Object.assign(function(doc) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(doc, {
        SelectionSet: {
            enter (node, _key, parent) {
                // Don't add __typename to OperationDefinitions.
                if (parent && parent.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].OPERATION_DEFINITION) {
                    return;
                }
                // No changes if no selections.
                const { selections } = node;
                if (!selections) {
                    return;
                }
                // If selections already have a __typename, or are part of an
                // introspection query, do nothing.
                const skip = selections.some((selection)=>{
                    return selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
                });
                if (skip) {
                    return;
                }
                // If this SelectionSet is @export-ed as an input variable, it should
                // not have a __typename field (see issue #4691).
                const field = parent;
                if (field.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FIELD && field.directives && field.directives.some((d)=>d.name.value === "export")) {
                    return;
                }
                // Create and return a new SelectionSet with a __typename Field.
                return {
                    ...node,
                    selections: [
                        ...selections,
                        TYPENAME_FIELD
                    ]
                };
            }
        }
    });
}, {
    added (field) {
        return field === TYPENAME_FIELD;
    }
}); //# sourceMappingURL=transform.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Determines if a given object is a reference object.
 *
 * @param obj - The object to check if its a reference object
 *
 * @example
 *
 * ```ts
 * import { isReference } from "@apollo/client/utilities";
 *
 * isReference({ __ref: "User:1" }); // true
 * isReference({ __typename: "User", id: 1 }); // false
 * ```
 */ __turbopack_context__.s([
    "isReference",
    ()=>isReference
]);
function isReference(obj) {
    return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
} //# sourceMappingURL=storeUtils.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/bindCacheKey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindCacheKey",
    ()=>bindCacheKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
;
function bindCacheKey(...prebound) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultMakeCacheKey"].bind(null, ...prebound);
} //# sourceMappingURL=bindCacheKey.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/combineLatestBatched.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineLatestBatched",
    ()=>combineLatestBatched
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
;
function combineLatestBatched(observables) {
    if (observables.length === 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMPTY"];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
        const { length } = observables;
        // Keeps track of current values for each observable
        const values = new Array(length);
        // Used to batch an update each item in the array that share an observable
        // so that they can be emitted together.
        const indexesByObservable = new Map();
        observables.forEach((source, idx)=>{
            if (!indexesByObservable.has(source)) {
                indexesByObservable.set(source, new Set());
            }
            indexesByObservable.get(source).add(idx);
        });
        // Track the number of active subscriptions so we know when to complete this
        // observable
        let active = indexesByObservable.size;
        // Track how many observables are left to emit their first value
        let remainingFirstValues = indexesByObservable.size;
        let currentBatch;
        // Subscribe to each unique observable instead of the raw source array of
        // observables since we want at most 1-subscription per unique observable.
        // This ensures an update can write to multiple indexes before emitting the
        // result.
        indexesByObservable.forEach((indexes, source)=>{
            let hasFirstValue = false;
            const subscription = source.subscribe({
                next: (value)=>{
                    indexes.forEach((idx)=>values[idx] = value);
                    if (!hasFirstValue) {
                        hasFirstValue = true;
                        remainingFirstValues--;
                    }
                    if (!remainingFirstValues) {
                        currentBatch ||= new Set(observables.filter((obs)=>obs.dirty));
                        currentBatch.delete(source);
                        if (!currentBatch.size) {
                            observer.next(values.slice());
                            currentBatch = undefined;
                        }
                    }
                },
                complete: ()=>{
                    active--;
                    if (!active) {
                        observer.complete();
                    }
                },
                error: observer.error.bind(observer)
            });
            observer.add(subscription);
        });
    });
} //# sourceMappingURL=combineLatestBatched.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentQueryDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFragmentQueryDocument",
    ()=>getFragmentQueryDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
;
function getFragmentQueryDocument(document, fragmentName) {
    let actualFragmentName = fragmentName;
    // Build an array of all our fragment definitions that will be used for
    // validations. We also do some validations on the other definitions in the
    // document while building this list.
    const fragments = [];
    document.definitions.forEach((definition)=>{
        // Throw an error if we encounter an operation definition because we will
        // define our own operation definition later on.
        if (definition.kind === "OperationDefinition") {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(10, definition.operation, definition.name ? ` named '${definition.name.value}'` : "");
        }
        // Add our definition to the fragments array if it is a fragment
        // definition.
        if (definition.kind === "FragmentDefinition") {
            fragments.push(definition);
        }
    });
    // If the user did not give us a fragment name then let us try to get a
    // name from a single fragment in the definition.
    if (typeof actualFragmentName === "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fragments.length === 1, 11, fragments.length);
        actualFragmentName = fragments[0].name.value;
    }
    // Generate a query document with an operation that simply spreads the
    // fragment inside of it.
    const query = {
        ...document,
        definitions: [
            {
                kind: "OperationDefinition",
                // OperationTypeNode is an enum
                operation: "query",
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: actualFragmentName
                            }
                        }
                    ]
                }
            },
            ...document.definitions
        ]
    };
    return query;
} //# sourceMappingURL=getFragmentQueryDocument.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/core/cache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloCache",
    ()=>ApolloCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+caches@1.0.1/node_modules/@wry/caches/lib/weak.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+trie@0.5.0/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$bindCacheKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/bindCacheKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$combineLatestBatched$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/combineLatestBatched.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$equalByQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/equalByQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMemoryInternals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentQueryDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentQueryDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mapObservableFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mapObservableFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
class ApolloCache {
    assumeImmutableResults = false;
    // Function used to lookup a fragment when a fragment definition is not part
    // of the GraphQL document. This is useful for caches, such as InMemoryCache,
    // that register fragments ahead of time so they can be referenced by name.
    lookupFragment(fragmentName) {
        return null;
    }
    // Transactional API
    /**
     * Executes multiple cache operations as a single batch, ensuring that
     * watchers are only notified once after all operations complete. This is
     * useful for improving performance when making multiple cache updates, as it
     * prevents unnecessary re-renders or query refetches between individual
     * operations.
     *
     * The `batch` method supports both optimistic and non-optimistic updates, and
     * provides fine-grained control over which cache layer receives the updates
     * and when watchers are notified.
     *
     * For usage instructions, see [Interacting with cached data: `cache.batch`](https://www.apollographql.com/docs/react/caching/cache-interaction#using-cachebatch).
     *
     * @example
     *
     * ```js
     * cache.batch({
     *   update(cache) {
     *     cache.writeQuery({
     *       query: GET_TODOS,
     *       data: { todos: updatedTodos },
     *     });
     *     cache.evict({ id: "Todo:123" });
     *   },
     * });
     * ```
     *
     * @example
     *
     * ```js
     * // Optimistic update with a custom layer ID
     * cache.batch({
     *   optimistic: "add-todo-optimistic",
     *   update(cache) {
     *     cache.modify({
     *       fields: {
     *         todos(existing = []) {
     *           return [...existing, newTodoRef];
     *         },
     *       },
     *     });
     *   },
     * });
     * ```
     *
     * @returns The return value of the `update` function.
     */ batch(options) {
        const optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
        let updateResult;
        this.performTransaction(()=>updateResult = options.update(this), optimisticId);
        return updateResult;
    }
    recordOptimisticTransaction(transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    }
    // Optional API
    // Called once per input document, allowing the cache to make static changes
    // to the query, such as adding __typename fields.
    transformDocument(document) {
        return document;
    }
    // Called before each ApolloLink request, allowing the cache to make dynamic
    // changes to the query, such as filling in missing fragment definitions.
    transformForLink(document) {
        return document;
    }
    identify(object) {
        return;
    }
    gc() {
        return [];
    }
    modify(options) {
        return false;
    }
    readQuery(options, optimistic = !!options.optimistic) {
        return this.read({
            ...options,
            rootId: options.id || "ROOT_QUERY",
            optimistic
        });
    }
    fragmentWatches = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"](true);
    /**
    * Watches the cache store of the fragment according to the options specified
    * and returns an `Observable`. We can subscribe to this
    * `Observable` and receive updated results through an
    * observer when the cache store changes.
    * 
    * You must pass in a GraphQL document with a single fragment or a document
    * with multiple fragments that represent what you are reading. If you pass
    * in a document with multiple fragments then you must also specify a
    * `fragmentName`.
    * 
    * @since 3.10.0
    * @param options - An object of type `WatchFragmentOptions` that allows
    * the cache to identify the fragment and optionally specify whether to react
    * to optimistic updates.
    */ watchFragment(options) {
        const { fragment, fragmentName, from } = options;
        const query = this.getFragmentDoc(fragment, fragmentName);
        const fromArray = Array.isArray(from) ? from : [
            from
        ];
        const ids = fromArray.map((value)=>{
            // While our TypeScript types do not allow for `undefined` as a valid
            // `from`, its possible `useFragment` gives us an `undefined` since it
            // calls` cache.identify` and provides that value to `from`. We are
            // adding this fix here however to ensure those using plain JavaScript
            // and using `cache.identify` themselves will avoid seeing the obscure
            // warning.
            const id = value == null ? value : this.toCacheId(value);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                const actualFragmentName = fragmentName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinition"])(fragment).name.value;
                if (id === undefined) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(113, actualFragmentName);
                }
            }
            return id;
        });
        if (!Array.isArray(from)) {
            const observable = this.watchSingleFragment(ids[0], query, options);
            // Unfortunately we forgot to allow for `null` on watchFragment in 4.0
            // when `from` is a single record. As such, we need to fallback to {}
            // when diff.result is null to maintain backwards compatibility. We
            // should plan to change this in v5. We do however support `null` if
            // `from` is explicitly `null`.
            //
            // NOTE: Using `from` with an array will maintain `null` properly
            // without the need for a similar fallback since watchFragment with
            // arrays is new functionality in v4.1.
            return from === null ? observable : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mapObservableFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObservableFragmentMemoized"])(observable, Symbol.for("apollo.transform.individualResult"), (result)=>({
                    ...result,
                    data: result.data ?? {}
                }));
        }
        let currentResult;
        function toResult(results) {
            const result = results.reduce((memo, result, idx)=>{
                memo.data.push(result.data);
                memo.complete &&= result.complete;
                memo.dataState = memo.complete ? "complete" : "partial";
                if (result.missing) {
                    memo.missing ||= {};
                    memo.missing[idx] = result.missing;
                }
                return memo;
            }, {
                data: [],
                dataState: "complete",
                complete: true
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(currentResult, result)) {
                currentResult = result;
            }
            return currentResult;
        }
        if (ids.length === 0) {
            return emptyArrayObservable;
        }
        let subscribed = false;
        const observables = ids.map((id)=>this.watchSingleFragment(id, query, options));
        const observable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$combineLatestBatched$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineLatestBatched"])(observables).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(toResult), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tap"])({
            subscribe: ()=>subscribed = true,
            unsubscribe: ()=>subscribed = false
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shareReplay"])({
            bufferSize: 1,
            refCount: true
        }));
        return Object.assign(observable, {
            getCurrentResult: ()=>{
                if (subscribed && currentResult) {
                    return currentResult;
                }
                const results = observables.map((observable)=>observable.getCurrentResult());
                return toResult(results);
            }
        });
    }
    /**
     * Can be overridden by subclasses to delay calling the provided callback
     * until after all broadcasts have been completed - e.g. in a cache scenario
     * where many watchers are notified in parallel.
     */ onAfterBroadcast = (cb)=>cb();
    watchSingleFragment(id, fragmentQuery, options) {
        if (id === null) {
            return nullObservable;
        }
        const { optimistic = true, variables } = options;
        const cacheKey = [
            fragmentQuery,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"])({
                id,
                optimistic,
                variables
            })
        ];
        const cacheEntry = this.fragmentWatches.lookupArray(cacheKey);
        if (!cacheEntry.observable) {
            let subscribed = false;
            let currentResult;
            function getNewestResult(diff) {
                const data = diff.result;
                if (!currentResult || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$equalByQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equalByQuery"])(fragmentQuery, {
                    data: currentResult.data
                }, {
                    data
                }, options.variables)) {
                    currentResult = {
                        data,
                        dataState: diff.complete ? "complete" : "partial",
                        complete: diff.complete
                    };
                    if (diff.missing) {
                        currentResult.missing = diff.missing.missing;
                    }
                }
                return currentResult;
            }
            const observable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
                subscribed = true;
                const cleanup = this.watch({
                    variables,
                    returnPartialData: true,
                    id,
                    query: fragmentQuery,
                    optimistic,
                    immediate: true,
                    callback: (diff)=>{
                        observable.dirty = true;
                        this.onAfterBroadcast(()=>{
                            observer.next(getNewestResult(diff));
                            observable.dirty = false;
                        });
                    }
                });
                return ()=>{
                    subscribed = false;
                    cleanup();
                    this.fragmentWatches.removeArray(cacheKey);
                };
            }).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distinctUntilChanged"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["share"])({
                connector: ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplaySubject"](1),
                // debounce so a synchronous unsubscribe+resubscribe doesn't tear down the watch and create a new one
                resetOnRefCountZero: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timer"])(0)
            }));
            cacheEntry.observable = Object.assign(observable, {
                dirty: false,
                getCurrentResult: ()=>{
                    if (subscribed && currentResult) {
                        return currentResult;
                    }
                    return getNewestResult(this.diff({
                        id,
                        query: fragmentQuery,
                        returnPartialData: true,
                        optimistic,
                        variables
                    }));
                }
            });
        }
        return cacheEntry.observable;
    }
    // Make sure we compute the same (===) fragment query document every
    // time we receive the same fragment in readFragment.
    getFragmentDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentQueryDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentQueryDocument"], {
        max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["cache.fragmentQueryDocuments"] || 1000 /* defaultCacheSizes["cache.fragmentQueryDocuments"] */ ,
        cache: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$caches$40$1$2e$0$2e$1$2f$node_modules$2f40$wry$2f$caches$2f$lib$2f$weak$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeakCache"],
        makeCacheKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$bindCacheKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bindCacheKey"])(this)
    });
    readFragment(options, optimistic = !!options.optimistic) {
        const id = options.from !== undefined ? this.toCacheId(options.from) : options.id;
        return this.read({
            ...options,
            query: this.getFragmentDoc(options.fragment, options.fragmentName),
            rootId: id,
            optimistic
        });
    }
    writeQuery({ id, data, ...options }) {
        return this.write(Object.assign(options, {
            dataId: id || "ROOT_QUERY",
            result: data
        }));
    }
    writeFragment({ data, fragment, fragmentName, ...options }) {
        const id = options.from !== undefined ? this.toCacheId(options.from) : options.id;
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data
        }));
    }
    updateQuery(options, update) {
        return this.batch({
            update (cache) {
                const value = cache.readQuery(options);
                const data = update(value);
                if (data === void 0 || data === null) return value;
                cache.writeQuery({
                    ...options,
                    data
                });
                return data;
            }
        });
    }
    updateFragment(options, update) {
        return this.batch({
            update (cache) {
                const value = cache.readFragment(options);
                const data = update(value);
                if (data === void 0 || data === null) return value;
                cache.writeFragment({
                    ...options,
                    data
                });
                return data;
            }
        });
    }
    toCacheId(from) {
        return typeof from === "string" ? from : this.identify(from);
    }
}
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
    ApolloCache.prototype.getMemoryInternals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApolloCacheMemoryInternals"];
}
const nullResult = Object.freeze({
    data: null,
    dataState: "complete",
    complete: true
});
const nullObservable = Object.assign(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
    observer.next(nullResult);
}), {
    dirty: false,
    getCurrentResult: ()=>nullResult
});
const emptyArrayResult = Object.freeze({
    data: [],
    dataState: "complete",
    complete: true
});
const emptyArrayObservable = Object.assign(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
    observer.next(emptyArrayResult);
}), {
    getCurrentResult: ()=>emptyArrayResult
}); //# sourceMappingURL=cache.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/DeepMerger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeepMerger",
    ()=>DeepMerger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
;
const { hasOwnProperty } = Object.prototype;
const defaultReconciler = function(target, source, property) {
    return this.merge(target[property], source[property]);
};
const objForKey = (key)=>{
    return isNaN(+key) ? {} : [];
};
class DeepMerger {
    options;
    reconciler;
    constructor(options = {}){
        this.options = options;
        this.reconciler = options.reconciler || defaultReconciler;
    }
    merge(target, source, mergeOptions = {}) {
        const atPath = mergeOptions.atPath;
        if (atPath?.length) {
            const [head, ...tail] = atPath;
            if (target === undefined) {
                target = objForKey(head);
            }
            let nestedTarget = target[head];
            if (nestedTarget === undefined && tail.length) {
                nestedTarget = objForKey(tail[0]);
            }
            const nestedSource = this.merge(nestedTarget, source, {
                ...mergeOptions,
                atPath: tail
            });
            if (nestedTarget !== nestedSource) {
                target = this.shallowCopyForMerge(target);
                target[head] = nestedSource;
            }
            return target;
        }
        if (Array.isArray(target) && Array.isArray(source) && this.options.arrayMerge === "truncate" && target.length > source.length) {
            target = target.slice(0, source.length);
            this.pastCopies.add(target);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(source) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(target)) {
            Object.keys(source).forEach((sourceKey)=>{
                if (hasOwnProperty.call(target, sourceKey)) {
                    const targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        const result = this.reconciler(target, source, sourceKey);
                        // A well-implemented reconciler may return targetValue to indicate
                        // the merge changed nothing about the structure of the target.
                        if (result !== targetValue) {
                            target = this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                } else {
                    // If there is no collision, the target can safely share memory with
                    // the source, and the recursion can terminate here.
                    target = this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        // If source (or target) is not an object, let source replace target.
        return source;
    }
    isObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"];
    pastCopies = new Set();
    shallowCopyForMerge(value) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                } else {
                    value = {
                        __proto__: Object.getPrototypeOf(value),
                        ...value
                    };
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    }
} //# sourceMappingURL=DeepMerger.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeReference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
* @internal
* 
* @deprecated This is an internal API and should not be used directly. This can be removed or changed at any time.
*/ __turbopack_context__.s([
    "makeReference",
    ()=>makeReference
]);
function makeReference(id) {
    return {
        __ref: String(id)
    };
} //# sourceMappingURL=makeReference.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeOrFieldNameRegExp",
    ()=>TypeOrFieldNameRegExp,
    "defaultDataIdFromObject",
    ()=>defaultDataIdFromObject,
    "extractFragmentContext",
    ()=>extractFragmentContext,
    "fieldNameFromStoreName",
    ()=>fieldNameFromStoreName,
    "getTypenameFromStoreObject",
    ()=>getTypenameFromStoreObject,
    "hasOwn",
    ()=>hasOwn,
    "makeProcessedFieldsMerger",
    ()=>makeProcessedFieldsMerger,
    "normalizeConfig",
    ()=>normalizeConfig,
    "selectionSetMatchesResult",
    ()=>selectionSetMatchesResult,
    "storeValueIsStoreObject",
    ()=>storeValueIsStoreObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/createFragmentMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/DeepMerger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/resultKeyNameFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/shouldInclude.js [app-ssr] (ecmascript)");
;
;
const { hasOwnProperty: hasOwn } = Object.prototype;
function defaultDataIdFromObject({ __typename, id, _id }, context) {
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject = id != null ? {
                id
            } : _id != null ? {
                _id
            } : void 0;
        }
        // If there is no object.id, fall back to object._id.
        if (id == null && _id != null) {
            id = _id;
        }
        if (id != null) {
            return `${__typename}:${typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id)}`;
        }
    }
}
const defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    resultCaching: true
};
function normalizeConfig(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(defaultConfig, config);
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
const TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    const match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(result)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(result) ? result.every((item)=>selectionSetMatchesResult(selectionSet, item, variables)) : selectionSet.selections.every((field)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(field) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldInclude"])(field, variables)) {
                const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(field);
                return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
            }
            // If the selection has been skipped with @skip(true) or
            // @include(false), it should not count against the matching. If
            // the selection is not a field, it must be a fragment (inline or
            // named). We will determine if selectionSetMatchesResult for that
            // fragment when we get to it, so for now we return true.
            return true;
        });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(value);
}
function makeProcessedFieldsMerger() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepMerger"]();
}
function extractFragmentContext(document, fragments) {
    // FragmentMap consisting only of fragments defined directly in document, not
    // including other fragments registered in the FragmentRegistry.
    const fragmentMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$createFragmentMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFragmentMap"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentDefinitions"])(document));
    return {
        fragmentMap,
        lookupFragment (name) {
            let def = fragmentMap[name];
            if (!def && fragments) {
                def = fragments.lookup(name);
            }
            return def || null;
        }
    };
} //# sourceMappingURL=helpers.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/entityStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityStore",
    ()=>EntityStore,
    "maybeDependOnExistenceOfEntity",
    ()=>maybeDependOnExistenceOfEntity,
    "supportsResultCaching",
    ()=>supportsResultCaching
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+trie@0.5.0/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$dep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/dep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/DeepMerger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeReference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const DELETE = {};
const delModifier = ()=>DELETE;
const INVALIDATE = {};
class EntityStore {
    policies;
    group;
    data = {};
    constructor(policies, group){
        this.policies = policies;
        this.group = group;
    }
    // Although the EntityStore class is abstract, it contains concrete
    // implementations of the various NormalizedCache interface methods that
    // are inherited by the Root and Layer subclasses.
    toObject() {
        return {
            ...this.data
        };
    }
    has(dataId) {
        return this.lookup(dataId, true) !== void 0;
    }
    get(dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.data, dataId)) {
            const storeObject = this.data[dataId];
            if (storeObject && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    }
    lookup(dataId, dependOnExistence) {
        // The has method (above) calls lookup with dependOnExistence = true, so
        // that it can later be invalidated when we add or remove a StoreObject for
        // this dataId. Any consumer who cares about the contents of the StoreObject
        // should not rely on this dependency, since the contents could change
        // without the object being added or removed.
        if (dependOnExistence) this.group.depend(dataId, "__exists");
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return {};
        }
    }
    merge(older, newer) {
        let dataId;
        // Convert unexpected references to ID strings.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(older)) older = older.__ref;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(newer)) newer = newer.__ref;
        const existing = typeof older === "string" ? this.lookup(dataId = older) : older;
        const incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
        // If newer was a string ID, but that ID was not defined in this store,
        // then there are no fields to be merged, so we're done.
        if (!incoming) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(typeof dataId === "string", 99);
        const merged = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepMerger"]({
            reconciler: storeObjectReconciler
        }).merge(existing, incoming);
        // Even if merged === existing, existing may have come from a lower
        // layer, so we always need to set this.data[dataId] on this level.
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                const fieldsToDirty = {};
                // If we added a new StoreObject where there was previously none, dirty
                // anything that depended on the existence of this dataId, such as the
                // EntityStore#has method.
                if (!existing) fieldsToDirty.__exists = 1;
                // Now invalidate dependents who called getFieldValue for any fields
                // that are changing as a result of this merge.
                Object.keys(incoming).forEach((storeFieldName)=>{
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        // Always dirty the full storeFieldName, which may include
                        // serialized arguments following the fieldName prefix.
                        fieldsToDirty[storeFieldName] = 1;
                        // Also dirty fieldNameFromStoreName(storeFieldName) if it's
                        // different from storeFieldName and this field does not have
                        // keyArgs configured, because that means the cache can't make
                        // any assumptions about how field values with the same field
                        // name but different arguments might be interrelated, so it
                        // must err on the side of invalidating all field values that
                        // share the same short fieldName, regardless of arguments.
                        const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName);
                        if (fieldName !== storeFieldName && !this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty[fieldName] = 1;
                        }
                        // If merged[storeFieldName] has become undefined, and this is the
                        // Root layer, actually delete the property from the merged object,
                        // which is guaranteed to have been created fresh in this method.
                        if (merged[storeFieldName] === void 0 && !(this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty.__typename && !(existing && existing.__typename) && // Since we return default root __typename strings
                // automatically from store.get, we don't need to dirty the
                // ROOT_QUERY.__typename field if merged.__typename is equal
                // to the default string (usually "Query").
                this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty.__typename;
                }
                Object.keys(fieldsToDirty).forEach((fieldName)=>this.group.dirty(dataId, fieldName));
            }
        }
    }
    modify(dataId, fields, exact) {
        const storeObject = this.lookup(dataId);
        if (storeObject) {
            const changedFields = {};
            let needToMerge = false;
            let allDeleted = true;
            const sharedDetails = {
                DELETE,
                INVALIDATE,
                isReference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"],
                toReference: this.toReference,
                canRead: this.canRead,
                readField: (fieldNameOrOptions, from)=>this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                        fieldName: fieldNameOrOptions,
                        from: from || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeReference"])(dataId)
                    } : fieldNameOrOptions, {
                        store: this
                    })
            };
            Object.keys(storeObject).forEach((storeFieldName)=>{
                const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName);
                let fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0) return;
                const modify = typeof fields === "function" ? fields : fields[storeFieldName] || (exact ? undefined : fields[fieldName]);
                if (modify) {
                    let newValue = modify === delModifier ? DELETE : modify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])(fieldValue), {
                        ...sharedDetails,
                        fieldName,
                        storeFieldName,
                        storage: this.getStorage(dataId, storeFieldName)
                    });
                    if (newValue === INVALIDATE) {
                        this.group.dirty(dataId, storeFieldName);
                    } else {
                        if (newValue === DELETE) newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields[storeFieldName] = newValue;
                            needToMerge = true;
                            fieldValue = newValue;
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                                const checkReference = (ref)=>{
                                    if (this.lookup(ref.__ref) === undefined) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(100, ref);
                                        return true;
                                    }
                                };
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(newValue)) {
                                    checkReference(newValue);
                                } else if (Array.isArray(newValue)) {
                                    // Warn about writing "mixed" arrays of Reference and non-Reference objects
                                    let seenReference = false;
                                    let someNonReference;
                                    for (const value of newValue){
                                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(value)) {
                                            seenReference = true;
                                            if (checkReference(value)) break;
                                        } else {
                                            // Do not warn on primitive values, since those could never be represented
                                            // by a reference. This is a valid (albeit uncommon) use case.
                                            if (typeof value === "object" && !!value) {
                                                const [id] = this.policies.identify(value);
                                                // check if object could even be referenced, otherwise we are not interested in it for this warning
                                                if (id) {
                                                    someNonReference = value;
                                                }
                                            }
                                        }
                                        if (seenReference && someNonReference !== undefined) {
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(101, someNonReference);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted = false;
                }
            });
            if (needToMerge) {
                this.merge(dataId, changedFields);
                if (allDeleted) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    } else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    }
    // If called with only one argument, removes the entire entity
    // identified by dataId. If called with a fieldName as well, removes all
    // fields of that entity whose names match fieldName according to the
    // fieldNameFromStoreName helper function. If called with a fieldName
    // and variables, removes all fields of that entity whose names match fieldName
    // and whose arguments when cached exactly match the variables passed.
    delete(dataId, fieldName, args) {
        const storeObject = this.lookup(dataId);
        if (storeObject) {
            const typename = this.getFieldValue(storeObject, "__typename");
            const storeFieldName = fieldName && args ? this.policies.getStoreFieldName({
                typename,
                fieldName,
                args
            }) : fieldName;
            return this.modify(dataId, storeFieldName ? {
                [storeFieldName]: delModifier
            } : delModifier, !!args);
        }
        return false;
    }
    evict(options, limit) {
        let evicted = false;
        if (options.id) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            // Always invalidate the field to trigger rereading of watched
            // queries, even if no cache data was modified by the eviction,
            // because queries may depend on computed fields with custom read
            // functions, whose values are not stored in the EntityStore.
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    }
    clear() {
        this.replace(null);
    }
    extract() {
        const obj = this.toObject();
        const extraRootIds = [];
        this.getRootIdSet().forEach((id)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = {
                extraRootIds: extraRootIds.sort()
            };
        }
        return obj;
    }
    replace(newData) {
        Object.keys(this.data).forEach((dataId)=>{
            if (!(newData && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(newData, dataId))) {
                this.delete(dataId);
            }
        });
        if (newData) {
            const { __META, ...rest } = newData;
            Object.keys(rest).forEach((dataId)=>{
                this.merge(dataId, rest[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    }
    // Maps root entity IDs to the number of times they have been retained, minus
    // the number of times they have been released. Retained entities keep other
    // entities they reference (even indirectly) from being garbage collected.
    rootIds = {};
    retain(rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    }
    release(rootId) {
        if (this.rootIds[rootId] > 0) {
            const count = --this.rootIds[rootId];
            if (!count) delete this.rootIds[rootId];
            return count;
        }
        return 0;
    }
    // Return a Set<string> of all the ID strings that have been retained by
    // this layer/root *and* any layers/roots beneath it.
    getRootIdSet(ids = new Set()) {
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        } else {
            // Official singleton IDs like ROOT_QUERY and ROOT_MUTATION are
            // always considered roots for garbage collection, regardless of
            // their retainment counts in this.rootIds.
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    }
    // The goal of garbage collection is to remove IDs from the Root layer of the
    // store that are no longer reachable starting from any IDs that have been
    // explicitly retained (see retain and release, above). Returns an array of
    // dataId strings that were removed from the store.
    gc() {
        const ids = this.getRootIdSet();
        const snapshot = this.toObject();
        ids.forEach((id)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(snapshot, id)) {
                // Because we are iterating over an ECMAScript Set, the IDs we add here
                // will be visited in later iterations of the forEach loop only if they
                // were not previously contained by the Set.
                Object.keys(this.findChildRefIds(id)).forEach(ids.add, ids);
                // By removing IDs from the snapshot object here, we protect them from
                // getting removed from the root store layer below.
                delete snapshot[id];
            }
        });
        const idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            let root = this;
            while(root instanceof Layer)root = root.parent;
            idsToRemove.forEach((id)=>root.delete(id));
        }
        return idsToRemove;
    }
    // Lazily tracks { __ref: <dataId> } strings contained by this.data[dataId].
    refs = {};
    findChildRefIds(dataId) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.refs, dataId)) {
            const found = this.refs[dataId] = {};
            const root = this.data[dataId];
            if (!root) return found;
            const workSet = new Set([
                root
            ]);
            // Within the store, only arrays and objects can contain child entity
            // references, so we can prune the traversal using this predicate:
            workSet.forEach((obj)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(obj)) {
                    found[obj.__ref] = true;
                // In rare cases, a { __ref } Reference object may have other fields.
                // This often indicates a mismerging of References with StoreObjects,
                // but garbage collection should not be fooled by a stray __ref
                // property in a StoreObject (ignoring all the other fields just
                // because the StoreObject looks like a Reference). To avoid this
                // premature termination of findChildRefIds recursion, we fall through
                // to the code below, which will handle any other properties of obj.
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(obj)) {
                    Object.keys(obj).forEach((key)=>{
                        const child = obj[key];
                        // No need to add primitive values to the workSet, since they cannot
                        // contain reference objects.
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(child)) {
                            workSet.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    }
    makeCacheKey() {
        return this.group.keyMaker.lookupArray(arguments);
    }
    // Bound function that can be passed around to provide easy access to fields
    // of Reference objects as well as ordinary objects.
    getFieldValue = (objectOrReference, storeFieldName)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objectOrReference) ? this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    // Returns true for non-normalized StoreObjects and non-dangling
    // References, indicating that readField(name, objOrRef) has a chance of
    // working. Useful for filtering out dangling references from lists.
    canRead = (objOrRef)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objOrRef) ? this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    // Bound function that converts an id or an object with a __typename and
    // primary key fields to a Reference object. If called with a Reference object,
    // that same Reference object is returned. Pass true for mergeIntoStore to persist
    // an object into the store.
    toReference = (objOrIdOrRef, mergeIntoStore)=>{
        if (typeof objOrIdOrRef === "string") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeReference"])(objOrIdOrRef);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objOrIdOrRef)) {
            return objOrIdOrRef;
        }
        const [id] = this.policies.identify(objOrIdOrRef);
        if (id) {
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeReference"])(id);
            if (mergeIntoStore) {
                this.merge(id, objOrIdOrRef);
            }
            return ref;
        }
    };
    get supportsResultCaching() {
        return this.group.caching;
    }
}
// A single CacheGroup represents a set of one or more EntityStore objects,
// typically the Root store in a CacheGroup by itself, and all active Layer
// stores in a group together. A single EntityStore object belongs to only
// one CacheGroup, store.group. The CacheGroup is responsible for tracking
// dependencies, so store.group is helpful for generating unique keys for
// cached results that need to be invalidated when/if those dependencies
// change. If we used the EntityStore objects themselves as cache keys (that
// is, store rather than store.group), the cache would become unnecessarily
// fragmented by all the different Layer objects. Instead, the CacheGroup
// approach allows all optimistic Layer objects in the same linked list to
// belong to one CacheGroup, with the non-optimistic Root object belonging
// to another CacheGroup, allowing resultCaching dependencies to be tracked
// separately for optimistic and non-optimistic entity data.
class CacheGroup {
    caching;
    parent;
    d = null;
    // Used by the EntityStore#makeCacheKey method to compute cache keys
    // specific to this CacheGroup.
    keyMaker;
    constructor(caching, parent = null){
        this.caching = caching;
        this.parent = parent;
        this.resetCaching();
    }
    resetCaching() {
        this.d = this.caching ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$dep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dep"])() : null;
        this.keyMaker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"]();
    }
    depend(dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName);
            if (fieldName !== storeFieldName) {
                // Fields with arguments that contribute extra identifying
                // information to the fieldName (thus forming the storeFieldName)
                // depend not only on the full storeFieldName but also on the
                // short fieldName, so the field can be invalidated using either
                // level of specificity.
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    }
    dirty(dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), // When storeFieldName === "__exists", that means the entity identified
            // by dataId has either disappeared from the cache or was newly added,
            // so the result caching system would do well to "forget everything it
            // knows" about that object. To achieve that kind of invalidation, we
            // not only dirty the associated result cache entry, but also remove it
            // completely from the dependency graph. For the optimism implementation
            // details, see https://github.com/benjamn/optimism/pull/195.
            storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    }
}
function makeDepKey(dataId, storeFieldName) {
    // Since field names cannot have '#' characters in them, this method
    // of joining the field name and the ID should be unambiguous, and much
    // cheaper than JSON.stringify([dataId, fieldName]).
    return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        // We use this pseudo-field __exists elsewhere in the EntityStore code to
        // represent changes in the existence of the entity object identified by
        // entityId. This dependency gets reliably dirtied whenever an object with
        // this ID is deleted (or newly created) within this group, so any result
        // cache entries (for example, StoreReader#executeSelectionSet results) that
        // depend on __exists for this entityId will get dirtied as well, leading to
        // the eventual recomputation (instead of reuse) of those result objects the
        // next time someone reads them from the cache.
        store.group.depend(entityId, "__exists");
    }
}
class Root extends EntityStore {
    constructor({ policies, resultCaching = true, seed }){
        super(policies, new CacheGroup(resultCaching));
        if (seed) this.replace(seed);
    }
    stump = new Stump(this);
    addLayer(layerId, replay) {
        // Adding an optimistic Layer on top of the Root actually adds the Layer
        // on top of the Stump, so the Stump always comes between the Root and
        // any Layer objects that we've added.
        return this.stump.addLayer(layerId, replay);
    }
    removeLayer() {
        // Never remove the root layer.
        return this;
    }
    storageTrie = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"]();
    getStorage() {
        return this.storageTrie.lookupArray(arguments);
    }
}
EntityStore.Root = Root;
// Not exported, since all Layer instances are created by the addLayer method
// of the EntityStore.Root class.
class Layer extends EntityStore {
    id;
    parent;
    replay;
    group;
    constructor(id, parent, replay, group){
        super(parent.policies, group);
        this.id = id;
        this.parent = parent;
        this.replay = replay;
        this.group = group;
        replay(this);
    }
    addLayer(layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    }
    removeLayer(layerId) {
        // Remove all instances of the given id, not just the first one.
        const parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                // Dirty every ID we're removing. Technically we might be able to avoid
                // dirtying fields that have values in higher layers, but we don't have
                // easy access to higher layers here, and we're about to recreate those
                // layers anyway (see parent.addLayer below).
                Object.keys(this.data).forEach((dataId)=>{
                    const ownStoreObject = this.data[dataId];
                    const parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        // The StoreObject identified by dataId was defined in this layer
                        // but will be undefined in the parent layer, so we can delete the
                        // whole entity using this.delete(dataId). Since we're about to
                        // throw this layer away, the only goal of this deletion is to dirty
                        // the removed fields.
                        this.delete(dataId);
                    } else if (!ownStoreObject) {
                        // This layer had an entry for dataId but it was undefined, which
                        // means the entity was deleted in this layer, and it's about to
                        // become undeleted when we remove this layer, so we need to dirty
                        // all fields that are about to be reexposed.
                        this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach((storeFieldName)=>{
                            this.group.dirty(dataId, storeFieldName);
                        });
                    } else if (ownStoreObject !== parentStoreObject) {
                        // If ownStoreObject is not exactly the same as parentStoreObject,
                        // dirty any fields whose values will change as a result of this
                        // removal.
                        Object.keys(ownStoreObject).forEach((storeFieldName)=>{
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        // No changes are necessary if the parent chain remains identical.
        if (parent === this.parent) return this;
        // Recreate this layer on top of the new parent.
        return parent.addLayer(this.id, this.replay);
    }
    toObject() {
        return {
            ...this.parent.toObject(),
            ...this.data
        };
    }
    findChildRefIds(dataId) {
        const fromParent = this.parent.findChildRefIds(dataId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.data, dataId) ? {
            ...fromParent,
            ...super.findChildRefIds(dataId)
        } : fromParent;
    }
    getStorage(...args) {
        let p = this.parent;
        while(p.parent)p = p.parent;
        return p.getStorage(...args);
    }
}
// Represents a Layer permanently installed just above the Root, which allows
// reading optimistically (and registering optimistic dependencies) even when
// no optimistic layers are currently active. The stump.group CacheGroup object
// is shared by any/all Layer objects added on top of the Stump.
class Stump extends Layer {
    constructor(root){
        super("EntityStore.Stump", root, ()=>{}, new CacheGroup(root.group.caching, root.group));
    }
    removeLayer() {
        // Never remove the Stump layer.
        return this;
    }
    merge(older, newer) {
        // We never want to write any data into the Stump, so we forward any merge
        // calls to the Root instead. Another option here would be to throw an
        // exception, but the toReference(object, true) function can sometimes
        // trigger Stump writes (which used to be Root writes, before the Stump
        // concept was introduced).
        return this.parent.merge(older, newer);
    }
}
function storeObjectReconciler(existingObject, incomingObject, property) {
    const existingValue = existingObject[property];
    const incomingValue = incomingObject[property];
    // Wherever there is a key collision, prefer the incoming value, unless
    // it is deeply equal to the existing value. It's worth checking deep
    // equality here (even though blindly returning incoming would be
    // logically correct) because preserving the referential identity of
    // existing data can prevent needless rereading and rerendering.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    // When result caching is disabled, store.depend will be null.
    return !!(store && store.supportsResultCaching);
} //# sourceMappingURL=entityStore.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/argumentsObjectFromField.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "argumentsObjectFromField",
    ()=>argumentsObjectFromField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/valueToObjectRepresentation.js [app-ssr] (ecmascript)");
;
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        const argObj = {};
        field.arguments.forEach(({ name, value })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valueToObjectRepresentation"])(argObj, name, value, variables));
        return argObj;
    }
    return null;
} //# sourceMappingURL=argumentsObjectFromField.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getStoreKeyName.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStoreKeyName",
    ()=>getStoreKeyName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)");
;
const KNOWN_DIRECTIVES = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export",
    "nonreactive",
    "stream"
];
// Default stable JSON.stringify implementation used by getStoreKeyName. Can be
// updated/replaced with something better by calling
// getStoreKeyName.setStringify(newStringifyFunction).
let storeKeyNameStringify = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"];
const getStoreKeyName = Object.assign(function(fieldName, args, directives) {
    if (args && directives && directives["connection"] && directives["connection"]["key"]) {
        if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
            const filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
            filterKeys.sort();
            const filteredArgs = {};
            filterKeys.forEach((key)=>{
                filteredArgs[key] = args[key];
            });
            const stringifiedArgs = storeKeyNameStringify(filteredArgs);
            if (stringifiedArgs !== "{}") {
                return `${directives["connection"]["key"]}(${stringifiedArgs})`;
            }
        }
        return directives["connection"]["key"];
    }
    let completeFieldName = fieldName;
    if (args) {
        // We can't use `JSON.stringify` here since it's non-deterministic,
        // and can lead to different store key names being created even though
        // the `args` object used during creation has the same properties/values.
        const stringifiedArgs = storeKeyNameStringify(args);
        if (stringifiedArgs !== "{}") {
            completeFieldName += `(${stringifiedArgs})`;
        }
    }
    if (directives) {
        Object.keys(directives).forEach((key)=>{
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += `@${key}(${storeKeyNameStringify(directives[key])})`;
            } else {
                completeFieldName += `@${key}`;
            }
        });
    }
    return completeFieldName;
}, {
    setStringify (s) {
        const previous = storeKeyNameStringify;
        storeKeyNameStringify = s;
        return previous;
    }
}); //# sourceMappingURL=getStoreKeyName.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/storeKeyNameFromField.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storeKeyNameFromField",
    ()=>storeKeyNameFromField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getStoreKeyName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getStoreKeyName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/valueToObjectRepresentation.js [app-ssr] (ecmascript)");
;
;
function storeKeyNameFromField(field, variables) {
    let directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach((directive)=>{
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(({ name, value })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valueToObjectRepresentation"])(directivesObj[directive.name.value], name, value, variables));
            }
        });
    }
    let argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(({ name, value })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$valueToObjectRepresentation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valueToObjectRepresentation"])(argObj, name, value, variables));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getStoreKeyName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoreKeyName"])(field.name.value, argObj, directivesObj);
} //# sourceMappingURL=storeKeyNameFromField.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/key-extractor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectSpecifierPaths",
    ()=>collectSpecifierPaths,
    "extractKeyPath",
    ()=>extractKeyPath,
    "getSpecifierPaths",
    ()=>getSpecifierPaths,
    "keyArgsFnFromSpecifier",
    ()=>keyArgsFnFromSpecifier,
    "keyFieldsFnFromSpecifier",
    ()=>keyFieldsFnFromSpecifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$argumentsObjectFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/argumentsObjectFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/DeepMerger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonEmptyArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonEmptyArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)");
;
;
;
// Mapping from JSON-encoded KeySpecifier strings to associated information.
const specifierInfoCache = {};
function lookupSpecifierInfo(spec) {
    // It's safe to encode KeySpecifier arrays with JSON.stringify, since they're
    // just arrays of strings or nested KeySpecifier arrays, and the order of the
    // array elements is important (and suitably preserved by JSON.stringify).
    const cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = {});
}
function keyFieldsFnFromSpecifier(specifier) {
    const info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = (object, context)=>{
        const extract = (from, key)=>context.readField(key, from);
        const keyObject = context.keyObject = collectSpecifierPaths(specifier, (schemaKeyPath)=>{
            let extracted = extractKeyPath(context.storeObject, schemaKeyPath, // Using context.readField to extract paths from context.storeObject
            // allows the extraction to see through Reference objects and respect
            // custom read functions.
            extract);
            if (extracted === void 0 && object !== context.storeObject && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(object, schemaKeyPath[0])) {
                // If context.storeObject fails to provide a value for the requested
                // path, fall back to the raw result object, if it has a top-level key
                // matching the first key in the path (schemaKeyPath[0]). This allows
                // key fields included in the written data to be saved in the cache
                // even if they are not selected explicitly in context.selectionSet.
                // Not being mentioned by context.selectionSet is convenient here,
                // since it means these extra fields cannot be affected by field
                // aliasing, which is why we can use extractKey instead of
                // context.readField for this extraction.
                extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(extracted !== void 0, 102, schemaKeyPath.join("."), object);
            return extracted;
        });
        return `${context.typename}:${JSON.stringify(keyObject)}`;
    });
}
function keyArgsFnFromSpecifier(specifier) {
    const info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = (args, { field, variables, fieldName })=>{
        const collected = collectSpecifierPaths(specifier, (keyPath)=>{
            const firstKey = keyPath[0];
            const firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonEmptyArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(field.directives)) {
                    const directiveName = firstKey.slice(1);
                    // If the directive appears multiple times, only the first
                    // occurrence's arguments will be used. TODO Allow repetition?
                    // TODO Cache this work somehow, a la aliasMap?
                    const d = field.directives.find((d)=>d.name.value === directiveName);
                    // Fortunately argumentsObjectFromField works for DirectiveNode!
                    const directiveArgs = d && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$argumentsObjectFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argumentsObjectFromField"])(d, variables);
                    // For directives without arguments (d defined, but directiveArgs ===
                    // null), the presence or absence of the directive still counts as
                    // part of the field key, so we return null in those cases. If no
                    // directive with this name was found for this field (d undefined and
                    // thus directiveArgs undefined), we return undefined, which causes
                    // this value to be omitted from the key object returned by
                    // collectSpecifierPaths.
                    return directiveArgs && extractKeyPath(directiveArgs, // If keyPath.length === 1, this code calls extractKeyPath with an
                    // empty path, which works because it uses directiveArgs as the
                    // extracted value.
                    keyPath.slice(1));
                }
                // If the key started with @ but there was no corresponding directive,
                // we want to omit this value from the key object, not fall through to
                // treating @whatever as a normal argument name.
                return;
            }
            if (firstChar === "$") {
                const variableName = firstKey.slice(1);
                if (variables && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(variables, variableName)) {
                    const varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                // If the key started with $ but there was no corresponding variable, we
                // want to omit this value from the key object, not fall through to
                // treating $whatever as a normal argument name.
                return;
            }
            if (args) {
                return extractKeyPath(args, keyPath);
            }
        });
        const suffix = JSON.stringify(collected);
        // If no arguments were passed to this field, and it didn't have any other
        // field key contributions from directives or variables, hide the empty
        // :{} suffix from the field key. However, a field passed no arguments can
        // still end up with a non-empty :{...} suffix if its key configuration
        // refers to directives or variables.
        if (args || suffix !== "{}") {
            fieldName += ":" + suffix;
        }
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    // For each path specified by specifier, invoke the extractor, and repeatedly
    // merge the results together, with appropriate ancestor context.
    const merger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepMerger"]();
    return getSpecifierPaths(specifier).reduce((collected, path)=>{
        let toMerge = extractor(path);
        if (toMerge !== void 0) {
            // This path is not expected to contain array indexes, so the toMerge
            // reconstruction will not contain arrays. TODO Fix this?
            for(let i = path.length - 1; i >= 0; --i){
                toMerge = {
                    [path[i]]: toMerge
                };
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, {});
}
function getSpecifierPaths(spec) {
    const info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        const paths = info.paths = [];
        const currentPath = [];
        spec.forEach((s, i)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(s)) {
                getSpecifierPaths(s).forEach((p)=>paths.push(currentPath.concat(p)));
                currentPath.length = 0;
            } else {
                currentPath.push(s);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(spec[i + 1])) {
                    paths.push(currentPath.slice(0));
                    currentPath.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    // For each key in path, extract the corresponding child property from obj,
    // flattening arrays if encountered (uncommon for keyFields and keyArgs, but
    // possible). The final result of path.reduce is normalized so unexpected leaf
    // objects have their keys safely sorted. That final result is difficult to
    // type as anything other than any. You're welcome to try to improve the
    // return type, but keep in mind extractKeyPath is not a public function
    // (exported only for testing), so the effort may not be worthwhile unless the
    // limited set of actual callers (see above) pass arguments that TypeScript
    // can statically type. If we know only that path is some array of strings
    // (and not, say, a specific tuple of statically known strings), any (or
    // possibly unknown) is the honest answer.
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(obj) ? obj.map((child)=>reducer(child, key)) : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    // Usually the extracted value will be a scalar value, since most primary
    // key fields are scalar, but just in case we get an object or an array, we
    // need to do some normalization of the order of (nested) keys.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(value)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), (path)=>extractKeyPath(value, path));
    }
    return value;
} //# sourceMappingURL=key-extractor.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/reactiveVars.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cacheSlot",
    ()=>cacheSlot,
    "forgetCache",
    ()=>forgetCache,
    "makeVar",
    ()=>makeVar,
    "recallCache",
    ()=>recallCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$dep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/dep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$context$40$0$2e$7$2e$4$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+context@0.7.4/node_modules/@wry/context/lib/slot.js [app-ssr] (ecmascript)");
;
const cacheSlot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$context$40$0$2e$7$2e$4$2f$node_modules$2f40$wry$2f$context$2f$lib$2f$slot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"]();
const cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    let info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set(),
            dep: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$dep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dep"])()
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach((rv)=>rv.forgetCache(cache));
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach((rv)=>rv.attachCache(cache));
}
function makeVar(value) {
    const caches = new Set();
    const listeners = new Set();
    const rv = function(newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach((cache)=>{
                    // Invalidate any fields with custom read functions that
                    // consumed this variable, so query results involving those
                    // fields will be recomputed the next time we read them.
                    getCacheInfo(cache).dep.dirty(rv);
                    // Broadcast changes to any caches that have previously read
                    // from this variable.
                    broadcast(cache);
                });
                // Finally, notify any listeners added via rv.onNextChange.
                const oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach((listener)=>listener(value));
            }
        } else {
            // When reading from the variable, obtain the current cache from
            // context via cacheSlot. This isn't entirely foolproof, but it's
            // the same system that powers varDep.
            const cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = (listener)=>{
        listeners.add(listener);
        return ()=>{
            listeners.delete(listener);
        };
    };
    const attach = rv.attachCache = (cache)=>{
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = (cache)=>caches.delete(cache);
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
} //# sourceMappingURL=reactiveVars.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/policies.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Policies",
    ()=>Policies,
    "defaultStreamFieldMergeFn",
    ()=>defaultStreamFieldMergeFn,
    "normalizeReadFieldOptions",
    ()=>normalizeReadFieldOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/masking/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$argumentsObjectFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/argumentsObjectFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getStoreKeyName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getStoreKeyName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$storeKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/storeKeyNameFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$stringifyForDisplay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/stringifyForDisplay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$key$2d$extractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/key-extractor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/reactiveVars.js [app-ssr] (ecmascript)");
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
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args : spec.field ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$argumentsObjectFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argumentsObjectFromField"])(spec.field, spec.variables) : null;
}
const nullKeyFieldsFn = ()=>void 0;
const simpleKeyArgsFn = (_args, context)=>context.fieldName;
// These merge functions can be selected by specifying merge:true or
// merge:false in a field policy.
const mergeTrueFn = (existing, incoming, { mergeObjects })=>mergeObjects(existing, incoming);
const mergeFalseFn = (_, incoming)=>incoming;
const defaultStreamFieldMergeFn = (existing, incoming, { streamFieldInfo, existingData })=>{
    if (!existing && !existingData) {
        return incoming;
    }
    const results = [];
    const previous = existing ?? existingData;
    const length = streamFieldInfo?.isLastChunk ? incoming.length : Math.max(previous.length, incoming.length);
    for(let i = 0; i < length; i++){
        results[i] = incoming[i] === undefined ? previous[i] : incoming[i];
    }
    return results;
};
class Policies {
    config;
    typePolicies = {};
    toBeAdded = {};
    // Map from subtype names to sets of supertype names. Note that this
    // representation inverts the structure of possibleTypes (whose keys are
    // supertypes and whose values are arrays of subtypes) because it tends
    // to be much more efficient to search upwards than downwards.
    supertypeMap = new Map();
    // Any fuzzy subtypes specified by possibleTypes will be converted to
    // RegExp objects and recorded here. Every key of this map can also be
    // found in supertypeMap. In many cases this Map will be empty, which
    // means no fuzzy subtype checking will happen in fragmentMatches.
    fuzzySubtypes = new Map();
    cache;
    rootIdsByTypename = {};
    rootTypenamesById = {};
    usingPossibleTypes = false;
    constructor(config){
        this.config = config;
        this.config = {
            dataIdFromObject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDataIdFromObject"],
            ...config
        };
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    identify(object, partialContext) {
        const policies = this;
        const typename = partialContext && (partialContext.typename || partialContext.storeObject?.__typename) || object.__typename;
        // It should be possible to write root Query fields with writeFragment,
        // using { __typename: "Query", ... } as the data, but it does not make
        // sense to allow the same identification behavior for the Mutation and
        // Subscription types, since application code should never be writing
        // directly to (or reading directly from) those root objects.
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return [
                "ROOT_QUERY"
            ];
        }
        // Default context.storeObject to object if not otherwise provided.
        const storeObject = partialContext && partialContext.storeObject || object;
        const context = {
            ...partialContext,
            typename,
            storeObject,
            readField: partialContext && partialContext.readField || ((...args)=>{
                const options = normalizeReadFieldOptions(args, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables
                });
            })
        };
        let id;
        const policy = typename && this.getTypePolicy(typename);
        let keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$masking$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableWarningsSlot"].withValue(true, ()=>{
            while(keyFn){
                const specifierOrId = keyFn({
                    ...object,
                    ...storeObject
                }, context);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(specifierOrId)) {
                    keyFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$key$2d$extractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyFieldsFnFromSpecifier"])(specifierOrId);
                } else {
                    id = specifierOrId;
                    break;
                }
            }
        });
        id = id ? String(id) : void 0;
        return context.keyObject ? [
            id,
            context.keyObject
        ] : [
            id
        ];
    }
    addTypePolicies(typePolicies) {
        Object.keys(typePolicies).forEach((typename)=>{
            const { queryType, mutationType, subscriptionType, ...incoming } = typePolicies[typename];
            // Though {query,mutation,subscription}Type configurations are rare,
            // it's important to call setRootTypename as early as possible,
            // since these configurations should apply consistently for the
            // entire lifetime of the cache. Also, since only one __typename can
            // qualify as one of these root types, these three properties cannot
            // be inherited, unlike the rest of the incoming properties. That
            // restriction is convenient, because the purpose of this.toBeAdded
            // is to delay the processing of type/field policies until the first
            // time they're used, allowing policies to be added in any order as
            // long as all relevant policies (including policies for supertypes)
            // have been added by the time a given policy is used for the first
            // time. In other words, since inheritance doesn't matter for these
            // properties, there's also no need to delay their processing using
            // the this.toBeAdded queue.
            if (queryType) this.setRootTypename("Query", typename);
            if (mutationType) this.setRootTypename("Mutation", typename);
            if (subscriptionType) this.setRootTypename("Subscription", typename);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.toBeAdded, typename)) {
                this.toBeAdded[typename].push(incoming);
            } else {
                this.toBeAdded[typename] = [
                    incoming
                ];
            }
        });
    }
    updateTypePolicy(typename, incoming, existingFieldPolicies) {
        const existing = this.getTypePolicy(typename);
        const { keyFields, fields } = incoming;
        function setMerge(existing, merge) {
            existing.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing.merge;
        }
        // Type policies can define merge functions, as an alternative to
        // using field policies to merge child objects.
        setMerge(existing, incoming.merge);
        existing.keyFn = // Pass false to disable normalization for this typename.
        keyFields === false ? nullKeyFieldsFn : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(keyFields) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$key$2d$extractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyFieldsFnFromSpecifier"])(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach((fieldName)=>{
                let existing = existingFieldPolicies[fieldName];
                // Field policy inheritance is atomic/shallow: you can't inherit a
                // field policy and then override just its read function, since read
                // and merge functions often need to cooperate, so changing only one
                // of them would be a recipe for inconsistency.
                // So here we avoid merging an inherited field policy with an updated one.
                if (!existing || existing?.typename !== typename) {
                    existing = existingFieldPolicies[fieldName] = {
                        typename
                    };
                }
                const incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                } else {
                    const { keyArgs, read, merge } = incoming;
                    existing.keyFn = // Pass false to disable argument-based differentiation of
                    // field identities.
                    keyArgs === false ? simpleKeyArgsFn : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(keyArgs) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$key$2d$extractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyArgsFnFromSpecifier"])(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    // If we have both a read and a merge function, assume
                    // keyArgs:false, because read and merge together can take
                    // responsibility for interpreting arguments in and out. This
                    // default assumption can always be overridden by specifying
                    // keyArgs explicitly in the FieldPolicy.
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    }
    setRootTypename(which, typename = which) {
        const rootId = "ROOT_" + which.toUpperCase();
        const old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!old || old === which, 103, which);
            // First, delete any old __typename associated with this rootId from
            // rootIdsByTypename.
            if (old) delete this.rootIdsByTypename[old];
            // Now make this the only __typename that maps to this rootId.
            this.rootIdsByTypename[typename] = rootId;
            // Finally, update the __typename associated with this rootId.
            this.rootTypenamesById[rootId] = typename;
        }
    }
    addPossibleTypes(possibleTypes) {
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach((supertype)=>{
            // Make sure all types have an entry in this.supertypeMap, even if
            // their supertype set is empty, so we can return false immediately
            // from policies.fragmentMatches for unknown supertypes.
            this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach((subtype)=>{
                this.getSupertypeSet(subtype, true).add(supertype);
                const match = subtype.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeOrFieldNameRegExp"]);
                if (!match || match[0] !== subtype) {
                    // TODO Don't interpret just any invalid typename as a RegExp.
                    this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    }
    getTypePolicy(typename) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(this.typePolicies, typename)) {
            const policy = this.typePolicies[typename] = {};
            policy.fields = {};
            // When the TypePolicy for typename is first accessed, instead of
            // starting with an empty policy object, inherit any properties or
            // fields from the type policies of the supertypes of typename.
            //
            // Any properties or fields defined explicitly within the TypePolicy
            // for typename will take precedence, and if there are multiple
            // supertypes, the properties of policies whose types were added
            // later via addPossibleTypes will take precedence over those of
            // earlier supertypes. TODO Perhaps we should warn about these
            // conflicts in development, and recommend defining the property
            // explicitly in the subtype policy?
            //
            // Field policy inheritance is atomic/shallow: you can't inherit a
            // field policy and then override just its read function, since read
            // and merge functions often need to cooperate, so changing only one
            // of them would be a recipe for inconsistency.
            //
            // Once the TypePolicy for typename has been accessed, its properties can
            // still be updated directly using addTypePolicies, but future changes to
            // inherited supertype policies will not be reflected in this subtype
            // policy, because this code runs at most once per typename.
            let supertypes = this.supertypeMap.get(typename);
            if (!supertypes && this.fuzzySubtypes.size) {
                // To make the inheritance logic work for unknown typename strings that
                // may have fuzzy supertypes, we give this typename an empty supertype
                // set and then populate it with any fuzzy supertypes that match.
                supertypes = this.getSupertypeSet(typename, true);
                // This only works for typenames that are directly matched by a fuzzy
                // supertype. What if there is an intermediate chain of supertypes?
                // While possible, that situation can only be solved effectively by
                // specifying the intermediate relationships via possibleTypes, manually
                // and in a non-fuzzy way.
                this.fuzzySubtypes.forEach((regExp, fuzzy)=>{
                    if (regExp.test(typename)) {
                        // The fuzzy parameter is just the original string version of regExp
                        // (not a valid __typename string), but we can look up the
                        // associated supertype(s) in this.supertypeMap.
                        const fuzzySupertypes = this.supertypeMap.get(fuzzy);
                        if (fuzzySupertypes) {
                            fuzzySupertypes.forEach((supertype)=>supertypes.add(supertype));
                        }
                    }
                });
            }
            if (supertypes && supertypes.size) {
                supertypes.forEach((supertype)=>{
                    const { fields, ...rest } = this.getTypePolicy(supertype);
                    Object.assign(policy, rest);
                    Object.assign(policy.fields, fields);
                });
            }
        }
        const inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            // Merge the pending policies into this.typePolicies, in the order they
            // were originally passed to addTypePolicy.
            inbox.splice(0).forEach((policy)=>{
                this.updateTypePolicy(typename, policy, this.typePolicies[typename].fields);
            });
        }
        return this.typePolicies[typename];
    }
    getFieldPolicy(typename, fieldName) {
        if (typename) {
            return this.getTypePolicy(typename).fields[fieldName];
        }
    }
    getSupertypeSet(subtype, createIfMissing) {
        let supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    }
    fragmentMatches(fragment, typename, result, variables) {
        if (!fragment.typeCondition) return true;
        // If the fragment has a type condition but the object we're matching
        // against does not have a __typename, the fragment cannot match.
        if (!typename) return false;
        const supertype = fragment.typeCondition.name.value;
        // Common case: fragment type condition and __typename are the same.
        if (typename === supertype) return true;
        if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
            const typenameSupertypeSet = this.getSupertypeSet(typename, true);
            const workQueue = [
                typenameSupertypeSet
            ];
            const maybeEnqueue = (subtype)=>{
                const supertypeSet = this.getSupertypeSet(subtype, false);
                if (supertypeSet && supertypeSet.size && workQueue.indexOf(supertypeSet) < 0) {
                    workQueue.push(supertypeSet);
                }
            };
            // We need to check fuzzy subtypes only if we encountered fuzzy
            // subtype strings in addPossibleTypes, and only while writing to
            // the cache, since that's when selectionSetMatchesResult gives a
            // strong signal of fragment matching. The StoreReader class calls
            // policies.fragmentMatches without passing a result object, so
            // needToCheckFuzzySubtypes is always false while reading.
            let needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            let checkingFuzzySubtypes = false;
            // It's important to keep evaluating workQueue.length each time through
            // the loop, because the queue can grow while we're iterating over it.
            for(let i = 0; i < workQueue.length; ++i){
                const supertypeSet = workQueue[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(104, typename, supertype);
                        }
                        // Record positive results for faster future lookup.
                        // Unfortunately, we cannot safely cache negative results,
                        // because new possibleTypes data could always be added to the
                        // Policies class.
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue);
                if (needToCheckFuzzySubtypes && // Start checking fuzzy subtypes only after exhausting all
                // non-fuzzy subtypes (after the final iteration of the loop).
                i === workQueue.length - 1 && // We could wait to compare fragment.selectionSet to result
                // after we verify the supertype, but this check is often less
                // expensive than that search, and we will have to do the
                // comparison anyway whenever we find a potential match.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectionSetMatchesResult"])(fragment.selectionSet, result, variables)) {
                    // We don't always need to check fuzzy subtypes (if no result
                    // was provided, or !this.fuzzySubtypes.size), but, when we do,
                    // we only want to check them once.
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    // If we find any fuzzy subtypes that match typename, extend the
                    // workQueue to search through the supertypes of those fuzzy
                    // subtypes. Otherwise the for-loop will terminate and we'll
                    // return false below.
                    this.fuzzySubtypes.forEach((regExp, fuzzyString)=>{
                        const match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    }
    hasKeyArgs(typename, fieldName) {
        const policy = this.getFieldPolicy(typename, fieldName);
        return !!(policy && policy.keyFn);
    }
    getStoreFieldName(fieldSpec) {
        const { typename, fieldName } = fieldSpec;
        const policy = this.getFieldPolicy(typename, fieldName);
        let storeFieldName;
        let keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            const context = {
                typename,
                fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables
            };
            const args = argsFromFieldSpecifier(fieldSpec);
            while(keyFn){
                const specifierOrString = keyFn(args, context);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(specifierOrString)) {
                    keyFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$key$2d$extractor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyArgsFnFromSpecifier"])(specifierOrString);
                } else {
                    // If the custom keyFn returns a falsy value, fall back to
                    // fieldName instead.
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$storeKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeKeyNameFromField"])(fieldSpec.field, fieldSpec.variables) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getStoreKeyName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoreKeyName"])(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        // Returning false from a keyArgs function is like configuring
        // keyArgs: false, but more dynamic.
        if (storeFieldName === false) {
            return fieldName;
        }
        // Make sure custom field names start with the actual field.name.value
        // of the field, so we can always figure out which properties of a
        // StoreObject correspond to which original field names.
        return fieldName === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    }
    readField(options, context) {
        const objectOrReference = options.from;
        if (!objectOrReference) return;
        const nameOrField = options.field || options.fieldName;
        if (!nameOrField) return;
        if (options.typename === void 0) {
            const typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename) options.typename = typename;
        }
        const storeFieldName = this.getStoreFieldName(options);
        const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName);
        const existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        const policy = this.getFieldPolicy(options.typename, fieldName);
        const read = policy && policy.read;
        if (read) {
            const readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
            // Call read(existing, readOptions) with cacheSlot holding this.cache.
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSlot"].withValue(this.cache, read, [
                existing,
                readOptions
            ]);
        }
        return existing;
    }
    getReadFunction(typename, fieldName) {
        const policy = this.getFieldPolicy(typename, fieldName);
        return policy && policy.read;
    }
    getMergeFunction(parentTypename, fieldName, childTypename) {
        let policy = this.getFieldPolicy(parentTypename, fieldName);
        let merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    }
    runMergeFunction(existing, incoming, { field, typename, merge, path }, context, storage) {
        // Preserve the value in case `context.overwrite` is set.
        const existingData = existing;
        if (merge === mergeTrueFn) {
            // Instead of going to the trouble of creating a full
            // FieldFunctionOptions object and calling mergeTrueFn, we can
            // simply call mergeObjects, as mergeTrueFn would.
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            // Likewise for mergeFalseFn, whose implementation is even simpler.
            return incoming;
        }
        // If cache.writeQuery or cache.writeFragment was called with
        // options.overwrite set to true, we still call merge functions, but
        // the existing data is always undefined, so the merge function will
        // not attempt to combine the incoming data with the existing data.
        if (context.overwrite) {
            existing = void 0;
        }
        const streamInfo = context.extensions?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]]?.deref()?.peekArray(path);
        if (streamInfo) {
            const { current, previous } = streamInfo;
            if (previous && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(previous.incoming, incoming) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(previous.streamFieldInfo, current)) {
                return previous.result;
            }
        }
        const result = merge(existing, incoming, makeMergeFieldFunctionOptions(this, // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0, {
            typename,
            fieldName: field.name.value,
            field,
            variables: context.variables,
            path
        }, context, storage || {}, existingData));
        if (streamInfo) {
            streamInfo.previous = {
                incoming,
                streamFieldInfo: streamInfo.current,
                result
            };
        }
        return result;
    }
}
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    const storeFieldName = policies.getStoreFieldName(fieldSpec);
    const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName);
    const variables = fieldSpec.variables || context.variables;
    const { toReference, canRead } = context.store;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName,
        storeFieldName,
        variables,
        isReference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"],
        toReference,
        storage,
        cache: policies.cache,
        canRead,
        readField (...args) {
            return policies.readField(normalizeReadFieldOptions(args, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store)
    };
}
function makeMergeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage, existingData) {
    const options = {
        ...makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage),
        extensions: context.extensions,
        existingData
    };
    const extensions = context.extensions;
    if (extensions && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"] in extensions) {
        const { [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]]: streamInfo, ...otherExtensions } = extensions;
        const streamFieldInfo = streamInfo?.deref()?.peekArray(fieldSpec.path);
        if (streamFieldInfo) {
            options.streamFieldInfo = streamFieldInfo.current;
        }
        // If the only key in `extensions` was the stream details key, we didn't
        // receive any remote extensions, so we reset extensions back to undefined
        options.extensions = Object.keys(otherExtensions).length === 0 ? undefined : otherExtensions;
    }
    return options;
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    const { 0: fieldNameOrOptions, 1: from, length: argc } = readFieldArgs;
    let options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            // Default to objectOrReference only when no second argument was
            // passed for the from parameter, not when undefined is explicitly
            // passed as the second argument.
            from: argc > 1 ? from : objectOrReference
        };
    } else {
        options = {
            ...fieldNameOrOptions
        };
        // Default to objectOrReference only when fieldNameOrOptions.from is
        // actually omitted, rather than just undefined.
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && options.from === void 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(105, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$stringifyForDisplay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyForDisplay"])(Array.from(readFieldArgs)));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(existing) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(incoming)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(106);
        }
        // These dynamic checks are necessary because the parameters of a
        // custom merge function can easily have the any type, so the type
        // system cannot always enforce the StoreObject | Reference parameter
        // types of options.mergeObjects.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(existing) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(incoming)) {
            const eType = store.getFieldValue(existing, "__typename");
            const iType = store.getFieldValue(incoming, "__typename");
            const typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(existing) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeValueIsStoreObject"])(incoming)) {
                // Update the normalized EntityStore for the entity identified by
                // existing.__ref, preferring/overwriting any fields contributed by the
                // newer incoming StoreObject.
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeValueIsStoreObject"])(existing) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(incoming)) {
                // Update the normalized EntityStore for the entity identified by
                // incoming.__ref, taking fields from the older existing object only if
                // those fields are not already present in the newer StoreObject
                // identified by incoming.__ref.
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeValueIsStoreObject"])(existing) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeValueIsStoreObject"])(incoming)) {
                return {
                    ...existing,
                    ...incoming
                };
            }
        }
        return incoming;
    };
} //# sourceMappingURL=policies.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mergeDeepArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeDeepArray",
    ()=>mergeDeepArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/DeepMerger.js [app-ssr] (ecmascript)");
;
function mergeDeepArray(sources) {
    let target = sources[0] || {};
    const count = sources.length;
    if (count > 1) {
        const merger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepMerger"]();
        for(let i = 1; i < count; ++i){
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
} //# sourceMappingURL=mergeDeepArray.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/core/types/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MissingFieldError",
    ()=>MissingFieldError
]);
class MissingFieldError extends Error {
    message;
    path;
    query;
    variables;
    constructor(message, path, query, variables){
        // 'Error' breaks prototype chain here
        super(message);
        this.message = message;
        this.path = path;
        this.query = query;
        this.variables = variables;
        this.name = "MissingFieldError";
        if (Array.isArray(this.path)) {
            this.missing = this.message;
            for(let i = this.path.length - 1; i >= 0; --i){
                this.missing = {
                    [this.path[i]]: this.missing
                };
            }
        } else {
            this.missing = this.path;
        }
        // We're not using `Object.setPrototypeOf` here as it isn't fully supported
        // on Android (see issue #3236).
        this.__proto__ = MissingFieldError.prototype;
    }
    missing;
} //# sourceMappingURL=common.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/readFromStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreReader",
    ()=>StoreReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/DeepMerger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getDefaultValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentFromSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMainDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMainDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getQueryDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getQueryDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeReference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeDeepArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/mergeDeepArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/resultKeyNameFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/shouldInclude.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$types$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/core/types/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/entityStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context
    ];
}
class StoreReader {
    // cached version of executeSelectionSet
    executeSelectionSet;
    // cached version of executeSubSelectedArray
    executeSubSelectedArray;
    config;
    knownResults = new WeakMap();
    constructor(config){
        this.config = config;
        // memoized functions in this class will be "garbage-collected"
        // by recreating the whole `StoreReader` in
        // `InMemoryCache.resetResultsCache`
        // (triggered from `InMemoryCache.gc` with `resetResultCache: true`)
        this.executeSelectionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrap"])((options)=>{
            const peekArgs = execSelectionSetKeyArgs(options);
            const other = this.executeSelectionSet.peek(...peekArgs);
            if (other) {
                // If we previously read this result with canonization enabled, we can
                // return that canonized result as-is.
                return other;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeDependOnExistenceOfEntity"])(options.context.store, options.enclosingRef.__ref);
            // Finally, if we didn't find any useful previous results, run the real
            // execSelectionSetImpl method with the given options.
            return this.execSelectionSetImpl(options);
        }, {
            max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["inMemoryCache.executeSelectionSet"] || 50000 /* defaultCacheSizes["inMemoryCache.executeSelectionSet"] */ ,
            keyArgs: execSelectionSetKeyArgs,
            // Note that the parameters of makeCacheKey are determined by the
            // array returned by keyArgs.
            makeCacheKey (selectionSet, parent, context) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsResultCaching"])(context.store)) {
                    return context.store.makeCacheKey(selectionSet, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(parent) ? parent.__ref : parent, context.varString);
                }
            }
        });
        this.executeSubSelectedArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrap"])((options)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeDependOnExistenceOfEntity"])(options.context.store, options.enclosingRef.__ref);
            return this.execSubSelectedArrayImpl(options);
        }, {
            max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["inMemoryCache.executeSubSelectedArray"] || 10000 /* defaultCacheSizes["inMemoryCache.executeSubSelectedArray"] */ ,
            makeCacheKey ({ field, array, context }) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsResultCaching"])(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    /**
     * Given a store and a query, return as much of the result as possible and
     * identify if any data was missing from the store.
     */ diffQueryAgainstStore({ store, query, rootId = "ROOT_QUERY", variables, returnPartialData = true }) {
        const policies = this.config.cache.policies;
        variables = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultValues"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getQueryDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getQueryDefinition"])(query)),
            ...variables
        };
        const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeReference"])(rootId);
        const execResult = this.executeSelectionSet({
            selectionSet: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMainDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMainDefinition"])(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store,
                query,
                policies,
                variables,
                varString: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"])(variables),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFragmentContext"])(query, this.config.fragments)
            }
        });
        let missing;
        if (execResult.missing) {
            missing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$types$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MissingFieldError"](firstMissing(execResult.missing), execResult.missing, query, variables);
        }
        const complete = !missing;
        const { result } = execResult;
        return {
            result: complete ? result : returnPartialData ? Object.keys(result).length === 0 ? null : result : null,
            complete,
            missing
        };
    }
    isFresh(result, parent, selectionSet, context) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsResultCaching"])(context.store) && this.knownResults.get(result) === selectionSet) {
            const latest = this.executeSelectionSet.peek(selectionSet, parent, context);
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    }
    // Uncached version of executeSelectionSet.
    execSelectionSetImpl({ selectionSet, objectOrReference, enclosingRef, context }) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
            return {
                result: {},
                missing: `Dangling reference to missing ${objectOrReference.__ref} object`
            };
        }
        const { variables, policies, store } = context;
        const typename = store.getFieldValue(objectOrReference, "__typename");
        const objectsToMerge = [];
        let missing;
        const missingMerger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepMerger"]();
        if (typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
            // Ensure we always include a default value for the __typename
            // field, if we have one. Note that this field can be overridden by other
            // merged objects.
            objectsToMerge.push({
                __typename: typename
            });
        }
        function handleMissing(result, resultName) {
            if (result.missing) {
                missing = missingMerger.merge(missing, {
                    [resultName]: result.missing
                });
            }
            return result.result;
        }
        const workSet = new Set(selectionSet.selections);
        workSet.forEach((selection)=>{
            // Omit fields with directives @skip(if: <truthy value>) or
            // @include(if: <falsy value>).
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldInclude"])(selection, variables)) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(selection)) {
                let fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference
                }, context);
                const resultName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(selection);
                if (fieldValue === void 0) {
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTypenameToDocument"].added(selection)) {
                        missing = missingMerger.merge(missing, {
                            [resultName]: `Can't find field '${selection.name.value}' on ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)}`
                        });
                    }
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(fieldValue)) {
                    if (fieldValue.length > 0) {
                        fieldValue = handleMissing(this.executeSubSelectedArray({
                            field: selection,
                            array: fieldValue,
                            enclosingRef,
                            context
                        }), resultName);
                    }
                } else if (!selection.selectionSet) {
                // do nothing
                } else if (fieldValue != null) {
                    // In this case, because we know the field has a selection set,
                    // it must be trying to query a GraphQLObjectType, which is why
                    // fieldValue must be != null.
                    fieldValue = handleMissing(this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(fieldValue) ? fieldValue : enclosingRef,
                        context
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push({
                        [resultName]: fieldValue
                    });
                }
            } else {
                const fragment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentFromSelection"])(selection, context.lookupFragment);
                if (!fragment && selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD) {
                    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(107, selection.name.value);
                }
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeDeepArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDeepArray"])(objectsToMerge);
        const finalResult = {
            result,
            missing
        };
        const frozen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])(finalResult);
        // Store this result with its selection set so that we can quickly
        // recognize it again in the StoreReader#isFresh method.
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    }
    // Uncached version of executeSubSelectedArray.
    execSubSelectedArrayImpl({ field, array, enclosingRef, context }) {
        let missing;
        let missingMerger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$DeepMerger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepMerger"]();
        function handleMissing(childResult, i) {
            if (childResult.missing) {
                missing = missingMerger.merge(missing, {
                    [i]: childResult.missing
                });
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter((item)=>item === undefined || context.store.canRead(item));
        }
        array = array.map((item, i)=>{
            // null value in array
            if (item === null) {
                return null;
            }
            // This is a nested array, recurse
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(item)) {
                return handleMissing(this.executeSubSelectedArray({
                    field,
                    array: item,
                    enclosingRef,
                    context
                }), i);
            }
            // This is an object, run the selection set on it
            if (field.selectionSet) {
                return handleMissing(this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(item) ? item : enclosingRef,
                    context
                }), i);
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: array,
            missing
        };
    }
}
function firstMissing(tree) {
    try {
        JSON.stringify(tree, (_, value)=>{
            if (typeof value === "string") throw value;
            return value;
        });
    } catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        const workSet = new Set([
            fieldValue
        ]);
        workSet.forEach((value)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(value)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(value), 108, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypenameFromStoreObject"])(store, value), field.name.value);
                Object.values(value).forEach(workSet.add, workSet);
            }
        });
    }
} //# sourceMappingURL=readFromStore.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/cloneDeep.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneDeep",
    ()=>cloneDeep
]);
const { toString } = Object.prototype;
function cloneDeep(value) {
    return __cloneDeep(value);
}
function __cloneDeep(val, seen) {
    switch(toString.call(val)){
        case "[object Array]":
            {
                seen = seen || new Map();
                if (seen.has(val)) return seen.get(val);
                const copy = val.slice(0);
                seen.set(val, copy);
                copy.forEach(function(child, i) {
                    copy[i] = __cloneDeep(child, seen);
                });
                return copy;
            }
        case "[object Object]":
            {
                seen = seen || new Map();
                if (seen.has(val)) return seen.get(val);
                // High fidelity polyfills of Object.create and Object.getPrototypeOf are
                // possible in all JS environments, so we will assume they exist/work.
                const copy = Object.create(Object.getPrototypeOf(val));
                seen.set(val, copy);
                Object.keys(val).forEach((key)=>{
                    copy[key] = __cloneDeep(val[key], seen);
                });
                return copy;
            }
        default:
            return val;
    }
} //# sourceMappingURL=cloneDeep.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/writeToStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreWriter",
    ()=>StoreWriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+trie@0.5.0/node_modules/@wry/trie/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/kinds.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$argumentsObjectFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/argumentsObjectFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/cloneDeep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getDefaultValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getFragmentFromSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/hasDirectives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonEmptyArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonEmptyArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/makeReference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/resultKeyNameFromField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/shouldInclude.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$policies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/policies.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Since there are only four possible combinations of context.clientOnly and
// context.deferred values, we should need at most four "flavors" of any given
// WriteContext. To avoid creating multiple copies of the same context, we cache
// the contexts in the context.flavors Map (shared by all flavors) according to
// their clientOnly and deferred values (always in that order).
function getContextFlavor(context, clientOnly, deferred) {
    const key = `${clientOnly}${deferred}`;
    let flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : {
            ...context,
            clientOnly,
            deferred
        });
    }
    return flavored;
}
class StoreWriter {
    cache;
    reader;
    fragments;
    constructor(cache, reader, fragments){
        this.cache = cache;
        this.reader = reader;
        this.fragments = fragments;
    }
    writeToStore(store, { query, result, dataId, variables, overwrite, extensions }) {
        const operationDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(query);
        const merger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeProcessedFieldsMerger"])();
        variables = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultValues"])(operationDefinition),
            ...variables
        };
        const context = {
            store,
            written: {},
            merge (existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"])(variables),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractFragmentContext"])(query, this.fragments),
            overwrite: !!overwrite,
            incomingById: new Map(),
            clientOnly: false,
            deferred: false,
            flavors: new Map(),
            extensions
        };
        const ref = this.processSelectionSet({
            result: result || {},
            dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: {
                map: new Map()
            },
            context,
            path: []
        });
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(ref)) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(109, result);
        }
        // So far, the store has not been modified, so now it's time to process
        // context.incomingById and merge those incoming fields into context.store.
        context.incomingById.forEach(({ storeObject, mergeTree, fieldNodeSet }, dataId)=>{
            const entityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeReference"])(dataId);
            if (mergeTree && mergeTree.map.size) {
                const applied = this.applyMerges(mergeTree, entityRef, storeObject, context);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(applied)) {
                    // Assume References returned by applyMerges have already been merged
                    // into the store. See makeMergeObjectsFunction in policies.ts for an
                    // example of how this can happen.
                    return;
                }
                // Otherwise, applyMerges returned a StoreObject, whose fields we should
                // merge into the store (see store.merge statement below).
                storeObject = applied;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && !context.overwrite) {
                const fieldsWithSelectionSets = {};
                fieldNodeSet.forEach((field)=>{
                    if (field.selectionSet) {
                        fieldsWithSelectionSets[field.name.value] = true;
                    }
                });
                const hasSelectionSet = (storeFieldName)=>fieldsWithSelectionSets[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName)] === true;
                const hasMergeFunction = (storeFieldName)=>{
                    const childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach((storeFieldName)=>{
                    // If a merge function was defined for this field, trust that it
                    // did the right thing about (not) clobbering data. If the field
                    // has no selection set, it's a scalar field, so it doesn't need
                    // a merge function (even if it's an object, like JSON data).
                    if (hasSelectionSet(storeFieldName) && !hasMergeFunction(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        // Any IDs written explicitly to the cache will be retained as
        // reachable root IDs for garbage collection purposes. Although this
        // logic includes root IDs like ROOT_QUERY and ROOT_MUTATION, their
        // retainment counts are effectively ignored because cache.gc() always
        // includes them in its root ID set.
        store.retain(ref.__ref);
        return ref;
    }
    processSelectionSet({ dataId, result, selectionSet, context, // This object allows processSelectionSet to report useful information
    // to its callers without explicitly returning that information.
    mergeTree, path: currentPath }) {
        const { policies } = this.cache;
        // This variable will be repeatedly updated using context.merge to
        // accumulate all fields that need to be written into the store.
        let incoming = {};
        // If typename was not passed in, infer it. Note that typename is
        // always passed in for tricky-to-infer cases such as "Query" for
        // ROOT_QUERY.
        const typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        // This readField function will be passed as context.readField in the
        // KeyFieldsContext object created within policies.identify (called below).
        // In addition to reading from the existing context.store (thanks to the
        // policies.readField(options, context) line at the very bottom), this
        // version of readField can read from Reference objects that are currently
        // pending in context.incomingById, which is important whenever keyFields
        // need to be extracted from a child object that processSelectionSet has
        // turned into a Reference.
        const readField = (...args)=>{
            const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$policies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeReadFieldOptions"])(args, incoming, context.variables);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(options.from)) {
                const info = context.incomingById.get(options.from.__ref);
                if (info) {
                    const result = policies.readField({
                        ...options,
                        from: info.storeObject
                    }, context);
                    if (result !== void 0) {
                        return result;
                    }
                }
            }
            return policies.readField(options, context);
        };
        const fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        context, typename).forEach((context, field)=>{
            const resultFieldKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(field);
            const value = result[resultFieldKey];
            const path = [
                ...currentPath,
                field.name.value
            ];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                const storeFieldName = policies.getStoreFieldName({
                    typename,
                    fieldName: field.name.value,
                    field,
                    variables: context.variables
                });
                const childTree = getChildMergeTree(mergeTree, storeFieldName);
                let incomingValue = this.processFieldValue(value, field, // Reset context.clientOnly and context.deferred to their default
                // values before processing nested selection sets.
                field.selectionSet ? getContextFlavor(context, false, false) : context, childTree, path);
                // To determine if this field holds a child object with a merge function
                // defined in its type policy (see PR #7070), we need to figure out the
                // child object's __typename.
                let childTypename;
                // The field's value can be an object that has a __typename only if the
                // field has a selection set. Otherwise incomingValue is scalar.
                if (field.selectionSet && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(incomingValue) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeValueIsStoreObject"])(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                const merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        // TODO Check compatibility against any existing childTree.field?
                        field,
                        typename,
                        merge,
                        path
                    };
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$hasDirectives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDirectives"])([
                    "stream"
                ], field) && Array.isArray(incomingValue) && context.extensions?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streamInfoSymbol"]]) {
                    childTree.info = {
                        field,
                        typename,
                        merge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$policies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultStreamFieldMergeFn"],
                        path
                    };
                } else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, {
                    [storeFieldName]: incomingValue
                });
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && !context.clientOnly && !context.deferred && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTypenameToDocument"].added(field) && // If the field has a read function, it may be a synthetic field or
            // provide a default value, so its absence from the written data should
            // not be cause for alarm.
            !policies.getReadFunction(typename, field.name.value)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(110, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(field), result);
            }
        });
        // Identify the result object, even if dataId was already provided,
        // since we always need keyObject below.
        try {
            const [id, keyObject] = policies.identify(result, {
                typename,
                selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField
            });
            // If dataId was not provided, fall back to the id just generated by
            // policies.identify.
            dataId = dataId || id;
            // Write any key fields that were used during identification, even if
            // they were not mentioned in the original query.
            if (keyObject) {
                // TODO Reverse the order of the arguments?
                incoming = context.merge(incoming, keyObject);
            }
        } catch (e) {
            // If dataId was provided, tolerate failure of policies.identify.
            if (!dataId) throw e;
        }
        if ("string" === typeof dataId) {
            const dataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$makeReference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeReference"])(dataId);
            // Avoid processing the same entity object using the same selection
            // set more than once. We use an array instead of a Set since most
            // entity IDs will be written using only one selection set, so the
            // size of this array is likely to be very small, meaning indexOf is
            // likely to be faster than Set.prototype.has.
            const sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0) return dataRef;
            sets.push(selectionSet);
            // If we're about to write a result object into the store, but we
            // happen to know that the exact same (===) result object would be
            // returned if we were to reread the result with the same inputs,
            // then we can skip the rest of the processSelectionSet work for
            // this object, and immediately return a Reference to it.
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            const previous = context.incomingById.get(dataId);
            if (previous) {
                previous.storeObject = context.merge(previous.storeObject, incoming);
                previous.mergeTree = mergeMergeTrees(previous.mergeTree, mergeTree);
                fieldNodeSet.forEach((field)=>previous.fieldNodeSet.add(field));
            } else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    // Save a reference to mergeTree only if it is not empty, because
                    // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
                    // reused for entirely different parts of the result tree.
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet
                });
            }
            return dataRef;
        }
        return incoming;
    }
    processFieldValue(value, field, context, mergeTree, path) {
        if (!field.selectionSet || value === null) {
            // In development, we need to clone scalar values so that they can be
            // safely frozen with maybeDeepFreeze in readFromStore.ts. In production,
            // it's cheaper to store the scalar values directly in the cache.
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneDeep"])(value) : value;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(value)) {
            return value.map((item, i)=>{
                const value = this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i), [
                    ...path,
                    i
                ]);
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context,
            mergeTree,
            path
        });
    }
    // Implements https://spec.graphql.org/draft/#sec-Field-Collection, but with
    // some additions for tracking @client and @defer directives.
    flattenFields(selectionSet, result, context, typename = getTypenameFromResult(result, selectionSet, context.fragmentMap)) {
        const fieldMap = new Map();
        const { policies } = this.cache;
        const limitingTrie = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$trie$40$0$2e$5$2e$0$2f$node_modules$2f40$wry$2f$trie$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trie"](false); // No need for WeakMap, since limitingTrie does not escape.
        (function flatten(selectionSet, inheritedContext) {
            const visitedNode = limitingTrie.lookup(selectionSet, // Because we take inheritedClientOnly and inheritedDeferred into
            // consideration here (in addition to selectionSet), it's possible for
            // the same selection set to be flattened more than once, if it appears
            // in the query with different @client and/or @directive configurations.
            inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited) return;
            visitedNode.visited = true;
            selectionSet.selections.forEach((selection)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$shouldInclude$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldInclude"])(selection, context.variables)) return;
                let { clientOnly, deferred } = inheritedContext;
                if (// Since the presence of @client or @defer on this field can only
                // cause clientOnly or deferred to become true, we can skip the
                // forEach loop if both clientOnly and deferred are already true.
                !(clientOnly && deferred) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonEmptyArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(selection.directives)) {
                    selection.directives.forEach((dir)=>{
                        const name = dir.name.value;
                        if (name === "client") clientOnly = true;
                        if (name === "defer") {
                            const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$argumentsObjectFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argumentsObjectFromField"])(dir, context.variables);
                            // The @defer directive takes an optional args.if boolean
                            // argument, similar to @include(if: boolean). Note that
                            // @defer(if: false) does not make context.deferred false, but
                            // instead behaves as if there was no @defer directive.
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                        // TODO In the future, we may want to record args.label using
                        // context.deferred, if a label is specified.
                        }
                    });
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(selection)) {
                    const existing = fieldMap.get(selection);
                    if (existing) {
                        // If this field has been visited along another recursive path
                        // before, the final context should have clientOnly or deferred set
                        // to true only if *all* paths have the directive (hence the &&).
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                } else {
                    const fragment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentFromSelection"])(selection, context.lookupFragment);
                    if (!fragment && selection.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$kinds$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Kind"].FRAGMENT_SPREAD) {
                        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newInvariantError"])(111, selection.name.value);
                    }
                    if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    }
    applyMerges(mergeTree, existing, incoming, context, getStorageArgs) {
        if (mergeTree.map.size && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(incoming)) {
            const e = // Items in the same position in different arrays are not
            // necessarily related to each other, so when incoming is an array
            // we process its elements as if there was no existing data.
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(incoming) && // Likewise, existing must be either a Reference or a StoreObject
            // in order for its fields to be safe to merge with the fields of
            // the incoming object.
            ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(existing) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeValueIsStoreObject"])(existing)) ? existing : void 0;
            // This narrowing is implied by mergeTree.map.size > 0 and
            // !isReference(incoming), though TypeScript understandably cannot
            // hope to infer this type.
            const i = incoming;
            // The options.storage objects provided to read and merge functions
            // are derived from the identity of the parent object plus a
            // sequence of storeFieldName strings/numbers identifying the nested
            // field name path of each field value to be merged.
            if (e && !getStorageArgs) {
                getStorageArgs = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(e) ? e.__ref : e
                ];
            }
            // It's possible that applying merge functions to this subtree will
            // not change the incoming data, so this variable tracks the fields
            // that did change, so we can create a new incoming object when (and
            // only when) at least one incoming field has changed. We use a Map
            // to preserve the type of numeric keys.
            let changedFields;
            const getValue = (from, name)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach((childTree, storeFieldName)=>{
                const eVal = getValue(e, storeFieldName);
                const iVal = getValue(i, storeFieldName);
                // If we have no incoming data, leave any existing data untouched.
                if (void 0 === iVal) return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                const aVal = this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields = changedFields || new Map();
                    changedFields.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields) {
                // Shallow clone i so we can add changed fields to it.
                incoming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(i) ? i.slice(0) : {
                    ...i
                };
                changedFields.forEach((value, name)=>{
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && context.store.getStorage(...getStorageArgs));
        }
        return incoming;
    }
}
const emptyMergeTreePool = [];
function getChildMergeTree({ map }, name) {
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || {
            map: new Map()
        });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right)) return left;
    if (!left || mergeTreeIsEmpty(left)) return right;
    const info = left.info && right.info ? {
        ...left.info,
        ...right.info
    } : left.info || right.info;
    const needToMergeMaps = left.map.size && right.map.size;
    const map = needToMergeMaps ? new Map() : left.map.size ? left.map : right.map;
    const merged = {
        info,
        map
    };
    if (needToMergeMaps) {
        const remainingRightKeys = new Set(right.map.keys());
        left.map.forEach((leftTree, key)=>{
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys.delete(key);
        });
        remainingRightKeys.forEach((key)=>{
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree({ map }, name) {
    const childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
const warnings = new Set();
// Note that this function is unused in production, and thus should be
// pruned by any well-configured minifier.
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    const getChild = (objOrRef)=>{
        const child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    const existing = getChild(existingRef);
    if (!existing) return;
    const incoming = getChild(incomingObj);
    if (!incoming) return;
    // It's always safe to replace a reference, since it refers to data
    // safely stored elsewhere.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(existing)) return;
    // If the values are structurally equivalent, we do not need to worry
    // about incoming replacing existing.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(existing, incoming)) return;
    // If we're replacing every key of the existing object, then the
    // existing data would be overwritten even if the objects were
    // normalized, so warning would not be helpful here.
    if (Object.keys(existing).every((key)=>store.getFieldValue(incoming, key) !== void 0)) {
        return;
    }
    const parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
    const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldNameFromStoreName"])(storeFieldName);
    const typeDotName = `${parentType}.${fieldName}`;
    // Avoid warning more than once for the same type and field name.
    if (warnings.has(typeDotName)) return;
    warnings.add(typeDotName);
    const childTypenames = [];
    // Arrays do not have __typename fields, and always need a custom merge
    // function, even if their elements are normalized entities.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(existing) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(incoming)) {
        [
            existing,
            incoming
        ].forEach((child)=>{
            const typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" && !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(112, fieldName, parentType, childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", typeDotName, Array.isArray(existing) ? [
        ...existing
    ] : {
        ...existing
    }, Array.isArray(incoming) ? [
        ...incoming
    ] : {
        ...incoming
    });
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    let fragments;
    for (const selection of selectionSet.selections){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isField"])(selection)) {
            if (selection.name.value === "__typename") {
                return result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$resultKeyNameFromField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resultKeyNameFromField"])(selection)];
            }
        } else if (fragments) {
            fragments.push(selection);
        } else {
            fragments = [
                selection
            ];
        }
    }
    if (typeof result.__typename === "string") {
        return result.__typename;
    }
    if (fragments) {
        for (const selection of fragments){
            const typename = getTypenameFromResult(result, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getFragmentFromSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFragmentFromSelection"])(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === "string") {
                return typename;
            }
        }
    }
} //# sourceMappingURL=writeToStore.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InMemoryCache",
    ()=>InMemoryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@wry+equality@0.5.7/node_modules/@wry/equality/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/optimism@0.18.1/node_modules/optimism/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/caching/sizes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/canonicalStringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/DocumentTransform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/print.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getMemoryInternals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/core/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/entityStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$policies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/policies.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/reactiveVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$readFromStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/readFromStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$writeToStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/cache/inmemory/writeToStore.js [app-ssr] (ecmascript)");
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
;
;
;
class InMemoryCache extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloCache"] {
    data;
    optimisticData;
    config;
    watches = new Set();
    storeReader;
    storeWriter;
    addTypenameTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentTransform"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTypenameToDocument"]);
    maybeBroadcastWatch;
    // Override the default value, since InMemoryCache result objects are frozen
    // in development and expected to remain logically immutable in production.
    assumeImmutableResults = true;
    // Dynamically imported code can augment existing typePolicies or
    // possibleTypes by calling cache.policies.addTypePolicies or
    // cache.policies.addPossibletypes.
    policies;
    makeVar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeVar"];
    constructor(config = {}){
        super();
        this.config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeConfig"])(config);
        this.policies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$policies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Policies"]({
            cache: this,
            dataIdFromObject: this.config.dataIdFromObject,
            possibleTypes: this.config.possibleTypes,
            typePolicies: this.config.typePolicies
        });
        this.init();
    }
    init() {
        // Passing { resultCaching: false } in the InMemoryCache constructor options
        // will completely disable dependency tracking, which will improve memory
        // usage but worsen the performance of repeated reads.
        const rootStore = this.data = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EntityStore"].Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching
        });
        // When no optimistic writes are currently active, cache.optimisticData ===
        // cache.data, so there are no additional layers on top of the actual data.
        // When an optimistic update happens, this.optimisticData will become a
        // linked list of EntityStore Layer objects that terminates with the
        // original this.data cache object.
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    }
    resetResultCache() {
        const { fragments } = this.config;
        this.addTypenameTransform.resetCache();
        fragments?.resetCaches();
        // The StoreWriter is mostly stateless and so doesn't really need to be
        // reset, but it does need to have its writer.storeReader reference updated,
        // so it's simpler to update this.storeWriter as well.
        this.storeWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$writeToStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoreWriter"](this, this.storeReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$readFromStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoreReader"]({
            cache: this,
            fragments
        }), fragments);
        this.maybeBroadcastWatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$optimism$40$0$2e$18$2e$1$2f$node_modules$2f$optimism$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrap"])((c, options)=>{
            return this.broadcastWatch(c, options);
        }, {
            max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$caching$2f$sizes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheSizes"]["inMemoryCache.maybeBroadcastWatch"] || 5000 /* defaultCacheSizes["inMemoryCache.maybeBroadcastWatch"] */ ,
            makeCacheKey: (c)=>{
                // Return a cache key (thus enabling result caching) only if we're
                // currently using a data store that can track cache dependencies.
                const store = c.optimistic ? this.optimisticData : this.data;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$entityStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportsResultCaching"])(store)) {
                    const { optimistic, id, variables } = c;
                    return store.makeCacheKey(c.query, // Different watches can have the same query, optimistic
                    // status, rootId, and variables, but if their callbacks are
                    // different, the (identical) result needs to be delivered to
                    // each distinct callback. The easiest way to achieve that
                    // separation is to include c.callback in the cache key for
                    // maybeBroadcastWatch calls. See issue #5733.
                    c.callback, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"])({
                        optimistic,
                        id,
                        variables
                    }));
                }
            }
        });
        // Since we have thrown away all the cached functions that depend on the
        // CacheGroup dependencies maintained by EntityStore, we should also reset
        // all CacheGroup dependency information.
        new Set([
            this.data.group,
            this.optimisticData.group
        ]).forEach((group)=>group.resetCaching());
    }
    restore(data) {
        this.init();
        // Since calling this.init() discards/replaces the entire StoreReader, along
        // with the result caches it maintains, this.data.replace(data) won't have
        // to bother deleting the old data.
        if (data) this.data.replace(data);
        return this;
    }
    extract(optimistic = false) {
        return (optimistic ? this.optimisticData : this.data).extract();
    }
    read(options) {
        const { // Since read returns data or null, without any additional metadata
        // about whether/where there might have been missing fields, the
        // default behavior cannot be returnPartialData = true (like it is
        // for the diff method), since defaulting to true would violate the
        // integrity of the T in the return type. However, partial data may
        // be useful in some cases, so returnPartialData:true may be
        // specified explicitly.
        returnPartialData = false } = options;
        return this.storeReader.diffQueryAgainstStore({
            ...options,
            store: options.optimistic ? this.optimisticData : this.data,
            config: this.config,
            returnPartialData
        }).result;
    }
    write(options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        } finally{
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    }
    modify(options) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(options, "id") && !options.id) {
            // To my knowledge, TypeScript does not currently provide a way to
            // enforce that an optional property?:type must *not* be undefined
            // when present. That ability would be useful here, because we want
            // options.id to default to ROOT_QUERY only when no options.id was
            // provided. If the caller attempts to pass options.id with a
            // falsy/undefined value (perhaps because cache.identify failed), we
            // should not assume the goal was to modify the ROOT_QUERY object.
            // We could throw, but it seems natural to return false to indicate
            // that nothing was modified.
            return false;
        }
        const store = options.optimistic ? this.optimisticData : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields, false);
        } finally{
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    }
    diff(options) {
        return this.storeReader.diffQueryAgainstStore({
            ...options,
            store: options.optimistic ? this.optimisticData : this.data,
            rootId: options.id || "ROOT_QUERY",
            config: this.config
        });
    }
    watch(watch) {
        if (!this.watches.size) {
            // In case we previously called forgetCache(this) because
            // this.watches became empty (see below), reattach this cache to any
            // reactive variables on which it previously depended. It might seem
            // paradoxical that we're able to recall something we supposedly
            // forgot, but the point of calling forgetCache(this) is to silence
            // useless broadcasts while this.watches is empty, and to allow the
            // cache to be garbage collected. If, however, we manage to call
            // recallCache(this) here, this cache object must not have been
            // garbage collected yet, and should resume receiving updates from
            // reactive variables, now that it has a watcher to notify.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recallCache"])(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return ()=>{
            // Once we remove the last watch from this.watches, cache.broadcastWatches
            // no longer does anything, so we preemptively tell the reactive variable
            // system to exclude this cache from future broadcasts.
            if (this.watches.delete(watch) && !this.watches.size) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forgetCache"])(this);
            }
            // Remove this watch from the LRU cache managed by the
            // maybeBroadcastWatch OptimisticWrapperFunction, to prevent memory
            // leaks involving the closure of watch.callback.
            this.maybeBroadcastWatch.forget(watch);
        };
    }
    gc(options) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"].reset();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"].reset();
        const ids = this.optimisticData.gc();
        if (options && !this.txCount && options.resetResultCache) {
            this.resetResultCache();
        }
        return ids;
    }
    // Call this method to ensure the given root ID remains in the cache after
    // garbage collection, along with its transitive child entities. Note that
    // the cache automatically retains all directly written entities. By default,
    // the retainment persists after optimistic updates are removed. Pass true
    // for the optimistic argument if you would prefer for the retainment to be
    // discarded when the top-most optimistic layer is removed. Returns the
    // resulting (non-negative) retainment count.
    retain(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    }
    // Call this method to undo the effect of the retain method, above. Once the
    // retainment count falls to zero, the given ID will no longer be preserved
    // during garbage collection, though it may still be preserved by other safe
    // entities that refer to it. Returns the resulting (non-negative) retainment
    // count, in case that's useful.
    release(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    }
    // Returns the canonical ID for a given StoreObject, obeying typePolicies
    // and keyFields (and dataIdFromObject, if you still use that). At minimum,
    // the object must contain a __typename and any primary key fields required
    // to identify entities of that type. If you pass a query result object, be
    // sure that none of the primary key fields have been renamed by aliasing.
    // If you pass a Reference object, its __ref ID string will be returned.
    identify(object) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReference"])(object)) return object.__ref;
        try {
            return this.policies.identify(object)[0];
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].warn(e);
        }
    }
    evict(options) {
        if (!options.id) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOwn"].call(options, "id")) {
                // See comment in modify method about why we return false when
                // options.id exists but is falsy/undefined.
                return false;
            }
            options = {
                ...options,
                id: "ROOT_QUERY"
            };
        }
        try {
            // It's unlikely that the eviction will end up invoking any other
            // cache update operations while it's running, but {in,de}crementing
            // this.txCount still seems like a good idea, for uniformity with
            // the other update methods.
            ++this.txCount;
            // Pass this.data as a limit on the depth of the eviction, so evictions
            // during optimistic updates (when this.data is temporarily set equal to
            // this.optimisticData) do not escape their optimistic Layer.
            return this.optimisticData.evict(options, this.data);
        } finally{
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    }
    reset(options) {
        this.init();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canonicalStringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalStringify"].reset();
        if (options && options.discardWatches) {
            // Similar to what happens in the unsubscribe function returned by
            // cache.watch, applied to all current watches.
            this.watches.forEach((watch)=>this.maybeBroadcastWatch.forget(watch));
            this.watches.clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forgetCache"])(this);
        } else {
            // Calling this.init() above unblocks all maybeBroadcastWatch caching, so
            // this.broadcastWatches() triggers a broadcast to every current watcher
            // (letting them know their data is now missing). This default behavior is
            // convenient because it means the watches do not have to be manually
            // reestablished after resetting the cache. To prevent this broadcast and
            // cancel all watches, pass true for options.discardWatches.
            this.broadcastWatches();
        }
        return Promise.resolve();
    }
    removeOptimistic(idToRemove) {
        const newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    }
    txCount = 0;
    /**
    * Executes multiple cache operations as a single batch, ensuring that
    * watchers are only notified once after all operations complete. This is
    * useful for improving performance when making multiple cache updates, as it
    * prevents unnecessary re-renders or query refetches between individual
    * operations.
    * 
    * The `batch` method supports both optimistic and non-optimistic updates, and
    * provides fine-grained control over which cache layer receives the updates
    * and when watchers are notified.
    * 
    * For usage instructions, see [Interacting with cached data: `cache.batch`](https://www.apollographql.com/docs/react/caching/cache-interaction#using-cachebatch).
    * 
    * @example
    * 
    * ```js
    * cache.batch({
    *   update(cache) {
    *     cache.writeQuery({
    *       query: GET_TODOS,
    *       data: { todos: updatedTodos },
    *     });
    *     cache.evict({ id: "Todo:123" });
    *   },
    * });
    * ```
    * 
    * @example
    * 
    * ```js
    * // Optimistic update with a custom layer ID
    * cache.batch({
    *   optimistic: "add-todo-optimistic",
    *   update(cache) {
    *     cache.modify({
    *       fields: {
    *         todos(existing = []) {
    *           return [...existing, newTodoRef];
    *         },
    *       },
    *     });
    *   },
    * });
    * ```
    * 
    * @returns The return value of the `update` function.
    */ batch(options) {
        const { update, optimistic = true, removeOptimistic, onWatchUpdated } = options;
        let updateResult;
        const perform = (layer)=>{
            const { data, optimisticData } = this;
            ++this.txCount;
            if (layer) {
                this.data = this.optimisticData = layer;
            }
            try {
                return updateResult = update(this);
            } finally{
                --this.txCount;
                this.data = data;
                this.optimisticData = optimisticData;
            }
        };
        const alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            // If an options.onWatchUpdated callback is provided, we want to call it
            // with only the Cache.WatchOptions objects affected by options.update,
            // but there might be dirty watchers already waiting to be broadcast that
            // have nothing to do with the update. To prevent including those watchers
            // in the post-update broadcast, we perform this initial broadcast to
            // collect the dirty watchers, so we can re-dirty them later, after the
            // post-update broadcast, allowing them to receive their pending
            // broadcasts the next time broadcastWatches is called, just as they would
            // if we never called cache.batch.
            this.broadcastWatches({
                ...options,
                onWatchUpdated (watch) {
                    alreadyDirty.add(watch);
                    return false;
                }
            });
        }
        if (typeof optimistic === "string") {
            // Note that there can be multiple layers with the same optimistic ID.
            // When removeOptimistic(id) is called for that id, all matching layers
            // will be removed, and the remaining layers will be reapplied.
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        } else if (optimistic === false) {
            // Ensure both this.data and this.optimisticData refer to the root
            // (non-optimistic) layer of the cache during the update. Note that
            // this.data could be a Layer if we are currently executing an optimistic
            // update function, but otherwise will always be an EntityStore.Root
            // instance.
            perform(this.data);
        } else {
            // Otherwise, leave this.data and this.optimisticData unchanged and run
            // the update with broadcast batching.
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        // Note: if this.txCount > 0, then alreadyDirty.size === 0, so this code
        // takes the else branch and calls this.broadcastWatches(options), which
        // does nothing when this.txCount > 0.
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches({
                ...options,
                onWatchUpdated (watch, diff) {
                    const result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        // Since onWatchUpdated did not return false, this diff is
                        // about to be broadcast to watch.callback, so we don't need
                        // to re-dirty it with the other alreadyDirty watches below.
                        alreadyDirty.delete(watch);
                    }
                    return result;
                }
            });
            // Silently re-dirty any watches that were already dirty before the update
            // was performed, and were not broadcast just now.
            if (alreadyDirty.size) {
                alreadyDirty.forEach((watch)=>this.maybeBroadcastWatch.dirty(watch));
            }
        } else {
            // If alreadyDirty is empty or we don't have an onWatchUpdated
            // function, we don't need to go to the trouble of wrapping
            // options.onWatchUpdated.
            this.broadcastWatches(options);
        }
        return updateResult;
    }
    performTransaction(update, optimisticId) {
        return this.batch({
            update,
            optimistic: optimisticId || optimisticId !== null
        });
    }
    transformDocument(document) {
        return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(document));
    }
    fragmentMatches(fragment, typename) {
        return this.policies.fragmentMatches(fragment, typename);
    }
    lookupFragment(fragmentName) {
        return this.config.fragments?.lookup(fragmentName) || null;
    }
    resolvesClientField(typename, fieldName) {
        return !!this.policies.getReadFunction(typename, fieldName);
    }
    broadcastWatches(options) {
        if (!this.txCount) {
            const prevOnAfter = this.onAfterBroadcast;
            const callbacks = new Set();
            this.onAfterBroadcast = (cb)=>{
                callbacks.add(cb);
            };
            try {
                this.watches.forEach((c)=>this.maybeBroadcastWatch(c, options));
                callbacks.forEach((cb)=>cb());
            } finally{
                this.onAfterBroadcast = prevOnAfter;
            }
        }
    }
    addFragmentsToDocument(document) {
        const { fragments } = this.config;
        return fragments ? fragments.transform(document) : document;
    }
    // This method is wrapped by maybeBroadcastWatch, which is called by
    // broadcastWatches, so that we compute and broadcast results only when
    // the data that would be broadcast might have changed. It would be
    // simpler to check for changes after recomputing a result but before
    // broadcasting it, but this wrapping approach allows us to skip both
    // the recomputation and the broadcast, in most cases.
    broadcastWatch(c, options) {
        const { lastDiff } = c;
        // Both WatchOptions and DiffOptions extend ReadOptions, and DiffOptions
        // currently requires no additional properties, so we can use c (a
        // WatchOptions object) as DiffOptions, without having to allocate a new
        // object, and without having to enumerate the relevant properties (query,
        // variables, etc.) explicitly. There will be some additional properties
        // (lastDiff, callback, etc.), but cache.diff ignores them.
        const diff = this.diff(c);
        if (options) {
            if (c.optimistic && typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                // Returning false from the onWatchUpdated callback will prevent
                // calling c.callback(diff) for this watcher.
                return;
            }
        }
        if (!lastDiff || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$wry$2b$equality$40$0$2e$5$2e$7$2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"])(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    }
}
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
    InMemoryCache.prototype.getMemoryInternals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getMemoryInternals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInMemoryCacheMemoryInternals"];
} //# sourceMappingURL=inMemoryCache.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/client-awareness/ClientAwarenessLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientAwarenessLink",
    ()=>ClientAwarenessLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)");
;
;
class ClientAwarenessLink extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    constructor(options = {}){
        super((operation, forward)=>{
            const client = operation.client;
            const clientOptions = client["queryManager"].clientOptions;
            const context = operation.getContext();
            {
                const { name, version, transport = "headers" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])({}, clientOptions.clientAwareness, options.clientAwareness, context.clientAwareness);
                if (transport === "headers") {
                    operation.setContext(({ headers })=>{
                        return {
                            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(// setting these first so that they can be overridden by user-provided headers
                            {
                                "apollographql-client-name": name,
                                "apollographql-client-version": version
                            }, headers)
                        };
                    });
                }
            }
            {
                const { transport = "extensions" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])({}, clientOptions.enhancedClientAwareness, options.enhancedClientAwareness);
                if (transport === "extensions") {
                    operation.extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(// setting these first so that it can be overridden by user-provided extensions
                    {
                        clientLibrary: {
                            name: "@apollo/client",
                            version: client.version
                        }
                    }, operation.extensions);
                }
                if (transport === "headers") {
                    operation.setContext(({ headers })=>{
                        return {
                            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])(// setting these first so that they can be overridden by user-provided headers
                            {
                                "apollographql-library-name": "@apollo/client",
                                "apollographql-library-version": client.version
                            }, headers)
                        };
                    });
                }
            }
            return forward(operation);
        });
    }
} //# sourceMappingURL=ClientAwarenessLink.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/utils/filterOperationVariables.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterOperationVariables",
    ()=>filterOperationVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/visitor.mjs [app-ssr] (ecmascript)");
;
function filterOperationVariables(variables, query) {
    const result = {
        ...variables
    };
    const unusedNames = new Set(Object.keys(variables));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$visitor$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"])(query, {
        Variable (node, _key, parent) {
            // A variable type definition at the top level of a query is not
            // enough to silence server-side errors about the variable being
            // unused, so variable definitions do not count as usage.
            // https://spec.graphql.org/draft/#sec-All-Variables-Used
            if (parent && parent.kind !== "VariableDefinition") {
                unusedNames.delete(node.name.value);
            }
        }
    });
    unusedNames.forEach((name)=>{
        delete result[name];
    });
    return result;
} //# sourceMappingURL=filterOperationVariables.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/operations.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMutationOperation",
    ()=>isMutationOperation,
    "isQueryOperation",
    ()=>isQueryOperation,
    "isSubscriptionOperation",
    ()=>isSubscriptionOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/getOperationDefinition.js [app-ssr] (ecmascript)");
;
function isOperation(document, operation) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$getOperationDefinition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOperationDefinition"])(document)?.operation === operation;
}
function isMutationOperation(document) {
    return isOperation(document, "mutation");
}
function isQueryOperation(document) {
    return isOperation(document, "query");
}
function isSubscriptionOperation(document) {
    return isOperation(document, "subscription");
} //# sourceMappingURL=operations.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/checkFetcher.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkFetcher",
    ()=>checkFetcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
const checkFetcher = (fetcher)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(fetcher || typeof fetch !== "undefined", 61);
}; //# sourceMappingURL=checkFetcher.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/ServerError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerError",
    ()=>ServerError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/utils.js [app-ssr] (ecmascript)");
;
class ServerError extends Error {
    /**
     * A method that determines whether an error is a `ServerError` object. This
     * method enables TypeScript to narrow the error type.
     *
     * @example
     *
     * ```ts
     * if (ServerError.is(error)) {
     *   // TypeScript now knows `error` is a ServerError object
     *   console.log(error.errors);
     * }
     * ```
     */ static is(error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBranded"])(error, "ServerError");
    }
    /**
    * The raw [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object provided by the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
    */ response;
    /**
    * The status code returned by the server in the response. This is provided as
    * a shortcut for `response.status`.
    */ statusCode;
    /**
    * The raw response body text.
    */ bodyText;
    constructor(message, options){
        super(message);
        this.name = "ServerError";
        this.response = options.response;
        this.statusCode = options.response.status;
        this.bodyText = options.bodyText;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"])(this);
        Object.setPrototypeOf(this, ServerError.prototype);
    }
} //# sourceMappingURL=ServerError.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/ServerParseError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServerParseError",
    ()=>ServerParseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/utils.js [app-ssr] (ecmascript)");
;
class ServerParseError extends Error {
    /**
     * A method that determines whether an error is a `ServerParseError`
     * object. This method enables TypeScript to narrow the error type.
     *
     * @example
     *
     * ```ts
     * if (ServerParseError.is(error)) {
     *   // TypeScript now knows `error` is a ServerParseError object
     *   console.log(error.statusCode);
     * }
     * ```
     */ static is(error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBranded"])(error, "ServerParseError");
    }
    /**
    * The raw [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object provided by the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
    */ response;
    /**
    * The status code returned by the server in the response. This is provided
    * as a shortcut for `response.status`.
    */ statusCode;
    /**
    * The raw response body text.
    */ bodyText;
    constructor(originalParseError, options){
        super(originalParseError instanceof Error ? originalParseError.message : "Could not parse server response", {
            cause: originalParseError
        });
        this.name = "ServerParseError";
        this.response = options.response;
        this.statusCode = options.response.status;
        this.bodyText = options.bodyText;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"])(this);
        Object.setPrototypeOf(this, ServerParseError.prototype);
    }
} //# sourceMappingURL=ServerParseError.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAndCheckHttpResponse",
    ()=>parseAndCheckHttpResponse,
    "readMultipartBody",
    ()=>readMultipartBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedProtocolErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/CombinedProtocolErrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/ServerError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerParseError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/errors/ServerParseError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/isNonNullObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/invariant/index.development.js [app-ssr] (ecmascript) <locals>");
;
;
;
const { hasOwnProperty } = Object.prototype;
/**
 * This function detects an Apollo payload result before it is transformed
 * into a FetchResult via HttpLink; it cannot detect an ApolloPayloadResult
 * once it leaves the link chain.
 */ function isApolloPayloadResult(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$isNonNullObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonNullObject"])(value) && "payload" in value;
}
async function* consumeMultipartBody(response) {
    const decoder = new TextDecoder("utf-8");
    const contentType = response.headers?.get("content-type");
    // parse boundary value and ignore any subsequent name/value pairs after ;
    // https://www.rfc-editor.org/rfc/rfc9110.html#name-parameters
    // e.g. multipart/mixed;boundary="graphql";deferSpec=20220824
    // if no boundary is specified, default to -
    const match = contentType?.match(/*
      ;\s*boundary=                # Match the boundary parameter
      (?:                          # either
        '([^']*)'                  # a string starting with ' doesn't contain ', ends with '
        |                          # or
        "([^"]*)"                  # a string starting with " doesn't contain ", ends with "
        |                          # or
        ([^"'].*?)                 # a string that doesn't start with ' or ", parsed non-greedily
        )                          # end of the group
      \s*                          # optional whitespace
      (?:;|$)                        # match a semicolon or end of string
    */ /;\s*boundary=(?:'([^']+)'|"([^"]+)"|([^"'].+?))\s*(?:;|$)/i);
    const boundary = "\r\n--" + (match ? match[1] ?? match[2] ?? match[3] ?? "-" : "-");
    let buffer = "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(response.body && typeof response.body.getReader === "function", 62);
    const stream = response.body;
    const reader = stream.getReader();
    let done = false;
    let encounteredBoundary = false;
    let value;
    // check to see if we received the final boundary, which is a normal boundary followed by "--"
    // as described in https://www.rfc-editor.org/rfc/rfc2046#section-5.1.1
    const passedFinalBoundary = ()=>encounteredBoundary && buffer[0] == "-" && buffer[1] == "-";
    try {
        while(!done){
            ({ value, done } = await reader.read());
            const chunk = typeof value === "string" ? value : decoder.decode(value);
            const searchFrom = buffer.length - boundary.length + 1;
            buffer += chunk;
            let bi = buffer.indexOf(boundary, searchFrom);
            while(bi > -1 && !passedFinalBoundary()){
                encounteredBoundary = true;
                let message;
                [message, buffer] = [
                    buffer.slice(0, bi),
                    buffer.slice(bi + boundary.length)
                ];
                const i = message.indexOf("\r\n\r\n");
                const headers = parseHeaders(message.slice(0, i));
                const contentType = headers["content-type"];
                if (contentType && contentType.toLowerCase().indexOf("application/json") === -1) {
                    throw new Error("Unsupported patch content type: application/json is required.");
                }
                // nb: Technically you'd want to slice off the beginning "\r\n" but since
                // this is going to be `JSON.parse`d there is no need.
                const body = message.slice(i);
                if (body) {
                    yield body;
                }
                bi = buffer.indexOf(boundary);
            }
            if (passedFinalBoundary()) {
                return;
            }
        }
        throw new Error("premature end of multipart body");
    } finally{
        reader.cancel();
    }
}
async function readMultipartBody(response, nextValue) {
    for await (const body of consumeMultipartBody(response)){
        const result = parseJsonEncoding(response, body);
        if (Object.keys(result).length == 0) continue;
        if (isApolloPayloadResult(result)) {
            if (Object.keys(result).length === 1 && result.payload === null) {
                return;
            }
            let next = {
                ...result.payload
            };
            if ("errors" in result) {
                next.extensions = {
                    ...next.extensions,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PROTOCOL_ERRORS_SYMBOL"]]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedProtocolErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CombinedProtocolErrors"](result.errors ?? [])
                };
            }
            nextValue(next);
        } else {
            nextValue(result);
        }
    }
}
function parseHeaders(headerText) {
    const headersInit = {};
    headerText.split("\n").forEach((line)=>{
        const i = line.indexOf(":");
        if (i > -1) {
            // normalize headers to lowercase
            const name = line.slice(0, i).trim().toLowerCase();
            const value = line.slice(i + 1).trim();
            headersInit[name] = value;
        }
    });
    return headersInit;
}
function parseJsonEncoding(response, bodyText) {
    if (response.status >= 300) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServerError"](`Response not successful: Received status code ${response.status}`, {
            response,
            bodyText
        });
    }
    try {
        return JSON.parse(bodyText);
    } catch (err) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerParseError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServerParseError"](err, {
            response,
            bodyText
        });
    }
}
function parseGraphQLResponseJsonEncoding(response, bodyText) {
    try {
        return JSON.parse(bodyText);
    } catch (err) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerParseError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServerParseError"](err, {
            response,
            bodyText
        });
    }
}
function parseResponse(response, bodyText) {
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/graphql-response+json")) {
        return parseGraphQLResponseJsonEncoding(response, bodyText);
    }
    return parseJsonEncoding(response, bodyText);
}
function parseAndCheckHttpResponse(operations) {
    return (response)=>response.text().then((bodyText)=>{
            const result = parseResponse(response, bodyText);
            if (!Array.isArray(result) && !hasOwnProperty.call(result, "data") && !hasOwnProperty.call(result, "errors")) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServerError"](`Server response was malformed for query '${Array.isArray(operations) ? operations.map((op)=>op.operationName) : operations.operationName}'.`, {
                    response,
                    bodyText
                });
            }
            return result;
        });
} //# sourceMappingURL=parseAndCheckHttpResponse.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/rewriteURIForGET.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// For GET operations, returns the given URI rewritten with parameters, or a
// parse error.
__turbopack_context__.s([
    "rewriteURIForGET",
    ()=>rewriteURIForGET
]);
function rewriteURIForGET(chosenURI, body) {
    // Implement the standard HTTP GET serialization, plus 'extensions'. Note
    // the extra level of JSON serialization!
    const queryParams = [];
    const addQueryParam = (key, value)=>{
        queryParams.push(`${key}=${encodeURIComponent(value)}`);
    };
    if ("query" in body) {
        addQueryParam("query", body.query);
    }
    if (body.operationName) {
        addQueryParam("operationName", body.operationName);
    }
    if (body.variables) {
        let serializedVariables;
        try {
            serializedVariables = JSON.stringify(body.variables);
        } catch (parseError) {
            return {
                parseError
            };
        }
        addQueryParam("variables", serializedVariables);
    }
    if (body.extensions) {
        let serializedExtensions;
        try {
            serializedExtensions = JSON.stringify(body.extensions);
        } catch (parseError) {
            return {
                parseError
            };
        }
        addQueryParam("extensions", serializedExtensions);
    }
    // Reconstruct the URI with added query params.
    // XXX This assumes that the URI is well-formed and that it doesn't
    //     already contain any of these query params. We could instead use the
    //     URL API and take a polyfill (whatwg-url@6) for older browsers that
    //     don't support URLSearchParams. Note that some browsers (and
    //     versions of whatwg-url) support URL but not URLSearchParams!
    let fragment = "", preFragment = chosenURI;
    const fragmentStart = chosenURI.indexOf("#");
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    const queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
    const newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
    return {
        newURI
    };
} //# sourceMappingURL=rewriteURIForGET.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPrinter",
    ()=>defaultPrinter,
    "fallbackHttpConfig",
    ()=>fallbackHttpConfig,
    "selectHttpOptionsAndBody",
    ()=>selectHttpOptionsAndBody,
    "selectHttpOptionsAndBodyInternal",
    ()=>selectHttpOptionsAndBodyInternal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/print.js [app-ssr] (ecmascript)");
;
const defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: true,
    preserveHeaderCase: false
};
const defaultHeaders = {
    // headers are case insensitive (https://stackoverflow.com/a/5259004)
    accept: "application/graphql-response+json,application/json;q=0.9",
    // The content-type header describes the type of the body of the request, and
    // so it typically only is sent with requests that actually have bodies. One
    // could imagine that Apollo Client would remove this header when constructing
    // a GET request (which has no body), but we historically have not done that.
    // This means that browsers will preflight all Apollo Client requests (even
    // GET requests). Apollo Server's CSRF prevention feature (introduced in
    // AS3.7) takes advantage of this fact and does not block requests with this
    // header. If you want to drop this header from GET requests, then you should
    // probably replace it with a `apollo-require-preflight` header, or servers
    // with CSRF prevention enabled might block your GET request. See
    // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
    // for more details.
    "content-type": "application/json"
};
const defaultOptions = {
    method: "POST"
};
const fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions
};
const defaultPrinter = (ast, printer)=>printer(ast);
function selectHttpOptionsAndBody(operation, fallbackConfig, ...configs) {
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal(operation, defaultPrinter, ...configs);
}
function selectHttpOptionsAndBodyInternal(operation, printer, ...configs) {
    let options = {};
    let http = {};
    configs.forEach((config)=>{
        options = {
            ...options,
            ...config.options,
            headers: {
                ...options.headers,
                ...config.headers
            }
        };
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        options.headers.accept = (config.http?.accept || []).concat(options.headers.accept).join(",");
        http = {
            ...http,
            ...config.http
        };
    });
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
    //The body depends on the http options
    const { operationName, extensions, variables, query } = operation;
    const body = {
        operationName,
        variables
    };
    if (http.includeExtensions && Object.keys(extensions || {}).length) body.extensions = extensions;
    // not sending the query (i.e persisted queries)
    if (http.includeQuery) body.query = printer(query, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"]);
    return {
        options,
        body
    };
}
// Remove potential duplicate header names, preserving last (by insertion order).
// This is done to prevent unintentionally duplicating a header instead of
// overwriting it (See #8447 and #8449).
function removeDuplicateHeaders(headers, preserveHeaderCase) {
    // If we're not preserving the case, just remove duplicates w/ normalization.
    if (!preserveHeaderCase) {
        const normalizedHeaders = {};
        Object.keys(Object(headers)).forEach((name)=>{
            normalizedHeaders[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders;
    }
    // If we are preserving the case, remove duplicates w/ normalization,
    // preserving the original name.
    // This allows for non-http-spec-compliant servers that expect intentionally
    // capitalized header names (See #6741).
    const headerData = {};
    Object.keys(Object(headers)).forEach((name)=>{
        headerData[name.toLowerCase()] = {
            originalName: name,
            value: headers[name]
        };
    });
    const normalizedHeaders = {};
    Object.keys(headerData).forEach((name)=>{
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
    });
    return normalizedHeaders;
} //# sourceMappingURL=selectHttpOptionsAndBody.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/selectURI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectURI",
    ()=>selectURI
]);
const selectURI = (operation, fallbackURI)=>{
    const context = operation.getContext();
    const contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    } else if (typeof fallbackURI === "function") {
        return fallbackURI(operation);
    } else {
        return fallbackURI || "/graphql";
    }
}; //# sourceMappingURL=selectURI.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/BaseHttpLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseHttpLink",
    ()=>BaseHttpLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/rxjs@7.8.2/node_modules/rxjs/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$utils$2f$filterOperationVariables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/utils/filterOperationVariables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$operations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/graphql/operations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/environment/index.development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/compact.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$checkFetcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/checkFetcher.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$parseAndCheckHttpResponse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$rewriteURIForGET$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/rewriteURIForGET.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectURI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/selectURI.js [app-ssr] (ecmascript)");
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
;
;
const backupFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(()=>fetch);
function noop() {}
class BaseHttpLink extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    constructor(options = {}){
        let { uri = "/graphql", // use default global fetch if nothing passed in
        fetch: preferredFetch, print = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPrinter"], includeExtensions, preserveHeaderCase, useGETForQueries, includeUnusedVariables = false, ...requestOptions } = options;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__DEV__"]) {
            // Make sure at least one of preferredFetch, window.fetch, or backupFetch is
            // defined, so requests won't fail at runtime.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$checkFetcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkFetcher"])(preferredFetch || backupFetch);
        }
        const linkConfig = {
            http: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$compact$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compact"])({
                includeExtensions,
                preserveHeaderCase
            }),
            options: requestOptions.fetchOptions,
            credentials: requestOptions.credentials,
            headers: requestOptions.headers
        };
        super((operation)=>{
            let chosenURI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectURI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectURI"])(operation, uri);
            const context = operation.getContext();
            const http = {
                ...context.http
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$operations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSubscriptionOperation"])(operation.query)) {
                http.accept = [
                    "multipart/mixed;boundary=graphql;subscriptionSpec=1.0",
                    ...http.accept || []
                ];
            }
            const contextConfig = {
                http,
                options: context.fetchOptions,
                credentials: context.credentials,
                headers: context.headers
            };
            //uses fallback, link, and then context to build options
            const { options, body } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectHttpOptionsAndBodyInternal"])(operation, print, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackHttpConfig"], linkConfig, contextConfig);
            if (body.variables && !includeUnusedVariables) {
                body.variables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$utils$2f$filterOperationVariables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterOperationVariables"])(body.variables, operation.query);
            }
            let controller = new AbortController();
            let cleanupController = ()=>{
                controller = undefined;
            };
            if (options.signal) {
                const externalSignal = options.signal;
                // in an ideal world we could use `AbortSignal.any` here, but
                // React Native uses https://github.com/mysticatea/abort-controller as
                // a polyfill for `AbortController`, and it does not support `AbortSignal.any`.
                const listener = ()=>{
                    controller?.abort(externalSignal.reason);
                };
                externalSignal.addEventListener("abort", listener, {
                    once: true
                });
                cleanupController = ()=>{
                    controller?.signal.removeEventListener("abort", cleanupController);
                    controller = undefined;
                    // on cleanup, we need to stop listening to `options.signal` to avoid memory leaks
                    externalSignal.removeEventListener("abort", listener);
                    cleanupController = noop;
                };
                // react native also does not support the addEventListener `signal` option
                // so we have to simulate that ourself
                controller.signal.addEventListener("abort", cleanupController, {
                    once: true
                });
            }
            options.signal = controller.signal;
            if (useGETForQueries && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$operations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMutationOperation"])(operation.query)) {
                options.method = "GET";
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$rxjs$40$7$2e$8$2e$2$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]((observer)=>{
                if (options.method === "GET") {
                    const { newURI, parseError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$rewriteURIForGET$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rewriteURIForGET"])(chosenURI, body);
                    if (parseError) {
                        throw parseError;
                    }
                    chosenURI = newURI;
                } else {
                    options.body = JSON.stringify(body);
                }
                // Prefer linkOptions.fetch (preferredFetch) if provided, and otherwise
                // fall back to the *current* global window.fetch function (see issue
                // #7832), or (if all else fails) the backupFetch function we saved when
                // this module was first evaluated. This last option protects against the
                // removal of window.fetch, which is unlikely but not impossible.
                const currentFetch = preferredFetch || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maybe"])(()=>fetch) || backupFetch;
                const observerNext = observer.next.bind(observer);
                currentFetch(chosenURI, options).then((response)=>{
                    operation.setContext({
                        response
                    });
                    const ctype = response.headers?.get("content-type");
                    if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$parseAndCheckHttpResponse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMultipartBody"])(response, observerNext);
                    } else {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$parseAndCheckHttpResponse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAndCheckHttpResponse"])(operation)(response).then(observerNext);
                    }
                }).then(()=>{
                    cleanupController();
                    observer.complete();
                }).catch((err)=>{
                    cleanupController();
                    observer.error(err);
                });
                return ()=>{
                    // XXX support canceling this request
                    // https://developers.google.com/web/updates/2017/09/abortable-fetch
                    if (controller) controller.abort();
                };
            });
        });
    }
} //# sourceMappingURL=BaseHttpLink.js.map
}),
"[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/HttpLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpLink",
    ()=>HttpLink,
    "createHttpLink",
    ()=>createHttpLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$client$2d$awareness$2f$ClientAwarenessLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/client-awareness/ClientAwarenessLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$BaseHttpLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@apollo+client@4.1.2+ee1fec573558edfe/node_modules/@apollo/client/link/http/BaseHttpLink.js [app-ssr] (ecmascript)");
;
;
;
class HttpLink extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"] {
    constructor(options = {}){
        const { left, right, request } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApolloLink"].from([
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$client$2d$awareness$2f$ClientAwarenessLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientAwarenessLink"](options),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$apollo$2b$client$40$4$2e$1$2e$2$2b$ee1fec573558edfe$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$BaseHttpLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseHttpLink"](options)
        ]);
        super(request);
        Object.assign(this, {
            left,
            right
        });
    }
}
const createHttpLink = (options = {})=>new HttpLink(options); //# sourceMappingURL=HttpLink.js.map
}),
];

//# sourceMappingURL=7bcf4_%40apollo_client_94f11111._.js.map