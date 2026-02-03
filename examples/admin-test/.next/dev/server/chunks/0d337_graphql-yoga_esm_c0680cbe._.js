module.exports = [
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areGraphQLErrors",
    ()=>areGraphQLErrors,
    "getResponseInitByRespectingErrors",
    ()=>getResponseInitByRespectingErrors,
    "handleError",
    ()=>handleError,
    "isAbortError",
    ()=>isAbortError,
    "isGraphQLError",
    ()=>isGraphQLError,
    "isOriginalGraphQLError",
    ()=>isOriginalGraphQLError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/GraphQLError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
;
;
function isAggregateError(obj) {
    return obj != null && typeof obj === 'object' && 'errors' in obj;
}
function hasToString(obj) {
    return obj != null && typeof obj.toString === 'function';
}
function isGraphQLError(val) {
    return val instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"];
}
function isOriginalGraphQLError(val) {
    if (val instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"]) {
        if (val.originalError != null) {
            return isOriginalGraphQLError(val.originalError);
        }
        return true;
    }
    return false;
}
function isAbortError(error) {
    return typeof error === 'object' && error?.constructor?.name === 'DOMException' && (error.name === 'AbortError' || error.name === 'TimeoutError');
}
function handleError(error, maskedErrorsOpts, logger) {
    const errors = new Set();
    if (isAggregateError(error)) {
        for (const singleError of error.errors){
            const handledErrors = handleError(singleError, maskedErrorsOpts, logger);
            for (const handledError of handledErrors){
                errors.add(handledError);
            }
        }
    } else if (isAbortError(error)) {
        logger.debug('Request aborted');
    } else if (maskedErrorsOpts) {
        const maskedError = maskedErrorsOpts.maskError(error, maskedErrorsOpts.errorMessage, maskedErrorsOpts.isDev);
        if (maskedError !== error) {
            logger.error(error);
        }
        errors.add(isGraphQLError(maskedError) ? maskedError : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(maskedError.message, {
            originalError: maskedError
        }));
    } else if (isGraphQLError(error)) {
        errors.add(error);
    } else if (error instanceof Error) {
        errors.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(error.message, {
            originalError: error
        }));
    } else if (typeof error === 'string') {
        errors.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(error, {
            extensions: {
                code: 'INTERNAL_SERVER_ERROR',
                unexpected: true
            }
        }));
    } else if (hasToString(error)) {
        errors.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(error.toString(), {
            extensions: {
                code: 'INTERNAL_SERVER_ERROR',
                unexpected: true
            }
        }));
    } else {
        logger.error(error);
        errors.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Unexpected error.', {
            extensions: {
                unexpected: true
            }
        }));
    }
    return Array.from(errors);
}
function getResponseInitByRespectingErrors(result, headers = {}, isApplicationJson = false) {
    let status;
    let unexpectedErrorExists = false;
    if ('extensions' in result && result.extensions?.http) {
        if (result.extensions.http.headers) {
            Object.assign(headers, result.extensions.http.headers);
        }
        if (result.extensions.http.status) {
            status = result.extensions.http.status;
        }
    }
    if ('errors' in result && result.errors?.length) {
        for (const error of result.errors){
            if (error.extensions?.['http']) {
                if (error.extensions['http'].headers) {
                    Object.assign(headers, error.extensions['http'].headers);
                }
                if (isApplicationJson && error.extensions['http'].spec) {
                    continue;
                }
                if (error.extensions['http'].status && (!status || error.extensions['http'].status > status)) {
                    status = error.extensions['http'].status;
                }
            } else if (!isOriginalGraphQLError(error) || error.extensions?.['unexpected']) {
                unexpectedErrorExists = true;
            }
        }
    } else {
        status ||= 200;
    }
    if (!status) {
        if (unexpectedErrorExists && !('data' in result)) {
            status = 500;
        } else {
            status = 200;
        }
    }
    return {
        status,
        headers
    };
}
function areGraphQLErrors(obj) {
    return Array.isArray(obj) && obj.length > 0 && // if one item in the array is a GraphQLError, we're good
    obj.some(isGraphQLError);
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/allowed-headers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllowedRequestHeaders",
    ()=>useAllowedRequestHeaders,
    "useAllowedResponseHeaders",
    ()=>useAllowedResponseHeaders
]);
function useAllowedResponseHeaders(allowedHeaders) {
    return {
        onResponse ({ response }) {
            removeDisallowedHeaders(response.headers, allowedHeaders);
        }
    };
}
function useAllowedRequestHeaders(allowedHeaders) {
    return {
        onRequest ({ request }) {
            removeDisallowedHeaders(request.headers, allowedHeaders);
        }
    };
}
function removeDisallowedHeaders(headers, allowedHeaders) {
    for (const headerName of headers.keys()){
        if (!allowedHeaders.includes(headerName)) {
            headers.delete(headerName);
        }
    }
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleURLSearchParams",
    ()=>handleURLSearchParams,
    "isContentTypeMatch",
    ()=>isContentTypeMatch,
    "parseURLSearchParams",
    ()=>parseURLSearchParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/node-ponyfill.js [app-route] (ecmascript)");
;
function handleURLSearchParams(searchParams) {
    const operationName = searchParams.get('operationName') || undefined;
    const query = searchParams.get('query') || undefined;
    const variablesStr = searchParams.get('variables') || undefined;
    const extensionsStr = searchParams.get('extensions') || undefined;
    return {
        operationName,
        query,
        variables: variablesStr ? JSON.parse(variablesStr) : undefined,
        extensions: extensionsStr ? JSON.parse(extensionsStr) : undefined
    };
}
function parseURLSearchParams(requestBody) {
    const searchParams = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["URLSearchParams"](requestBody);
    return handleURLSearchParams(searchParams);
}
function isContentTypeMatch(request, expectedContentType) {
    let contentType = request.headers.get('content-type');
    // a list of content-types is not valid as per HTTP spec, but some clients dont care
    contentType = contentType?.split(',')[0] || null;
    return contentType === expectedContentType || !!contentType?.startsWith(`${expectedContentType};`);
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/get.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGETRequest",
    ()=>isGETRequest,
    "parseGETRequest",
    ()=>parseGETRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/node-ponyfill.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js [app-route] (ecmascript)");
;
;
function isGETRequest(request) {
    return request.method === 'GET';
}
function parseGETRequest(request) {
    const queryString = request.url.substring(request.url.indexOf('?') + 1);
    const searchParams = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["URLSearchParams"](queryString);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleURLSearchParams"])(searchParams);
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-form-url-encoded.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPOSTFormUrlEncodedRequest",
    ()=>isPOSTFormUrlEncodedRequest,
    "parsePOSTFormUrlEncodedRequest",
    ()=>parsePOSTFormUrlEncodedRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js [app-route] (ecmascript)");
;
function isPOSTFormUrlEncodedRequest(request) {
    return request.method === 'POST' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isContentTypeMatch"])(request, 'application/x-www-form-urlencoded');
}
function parsePOSTFormUrlEncodedRequest(request) {
    return request.text().then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseURLSearchParams"]);
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-graphql-string.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPOSTGraphQLStringRequest",
    ()=>isPOSTGraphQLStringRequest,
    "parsePOSTGraphQLStringRequest",
    ()=>parsePOSTGraphQLStringRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js [app-route] (ecmascript)");
;
function isPOSTGraphQLStringRequest(request) {
    return request.method === 'POST' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isContentTypeMatch"])(request, 'application/graphql');
}
function parsePOSTGraphQLStringRequest(request) {
    return request.text().then((query)=>({
            query
        }));
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-json.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPOSTJsonRequest",
    ()=>isPOSTJsonRequest,
    "parsePOSTJsonRequest",
    ()=>parsePOSTJsonRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/GraphQLError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js [app-route] (ecmascript)");
;
;
;
;
function isPOSTJsonRequest(request) {
    return request.method === 'POST' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isContentTypeMatch"])(request, 'application/json') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isContentTypeMatch"])(request, 'application/graphql+json'));
}
function parsePOSTJsonRequest(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>request.json(), (requestBody)=>{
        if (requestBody == null) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`POST body is expected to be object but received ${requestBody}`, {
                extensions: {
                    http: {
                        status: 400
                    },
                    code: 'BAD_REQUEST'
                }
            });
        }
        const requestBodyTypeof = typeof requestBody;
        if (requestBodyTypeof !== 'object') {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`POST body is expected to be object but received ${requestBodyTypeof}`, {
                extensions: {
                    http: {
                        status: 400
                    },
                    code: 'BAD_REQUEST'
                }
            });
        }
        return requestBody;
    }, (err)=>{
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"]) {
            throw err;
        }
        const extensions = {
            http: {
                spec: true,
                status: 400
            },
            code: 'BAD_REQUEST'
        };
        if (err instanceof Error) {
            extensions['originalError'] = {
                name: err.name,
                message: err.message
            };
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('POST body sent invalid JSON.', {
            extensions
        });
    });
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-multipart.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPOSTMultipartRequest",
    ()=>isPOSTMultipartRequest,
    "parsePOSTMultipartRequest",
    ()=>parsePOSTMultipartRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/utils.js [app-route] (ecmascript)");
;
;
;
function isPOSTMultipartRequest(request) {
    return request.method === 'POST' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isContentTypeMatch"])(request, 'multipart/form-data');
}
function parsePOSTMultipartRequest(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>request.formData(), (requestBody)=>{
        const operationsStr = requestBody.get('operations');
        if (!operationsStr) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Missing multipart form field "operations"');
        }
        if (typeof operationsStr !== 'string') {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Multipart form field "operations" must be a string');
        }
        let operations;
        try {
            operations = JSON.parse(operationsStr);
        } catch  {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Multipart form field "operations" must be a valid JSON string');
        }
        const mapStr = requestBody.get('map');
        if (mapStr != null) {
            if (typeof mapStr !== 'string') {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Multipart form field "map" must be a string');
            }
            let map;
            try {
                map = JSON.parse(mapStr);
            } catch  {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Multipart form field "map" must be a valid JSON string');
            }
            for(const fileIndex in map){
                const file = requestBody.get(fileIndex);
                const keys = map[fileIndex];
                for (const key of keys){
                    setObjectKeyPath(operations, key, file);
                }
            }
        }
        return operations;
    }, (e)=>{
        if (e instanceof Error && e.message.startsWith('File size limit exceeded: ')) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(e.message, {
                extensions: {
                    http: {
                        status: 413
                    }
                }
            });
        }
        throw e;
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setObjectKeyPath(object, keyPath, value) {
    const keys = keyPath.split('.');
    let current = object;
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        const isLastKey = i === keys.length - 1;
        if (isLastKey) {
            current[key] = value;
        } else {
            if (!(key in current)) {
                current[key] = {};
            }
            current = current[key];
        }
    }
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-check-graphql-query-params.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertInvalidParams",
    ()=>assertInvalidParams,
    "checkGraphQLQueryParams",
    ()=>checkGraphQLQueryParams,
    "isValidGraphQLParams",
    ()=>isValidGraphQLParams,
    "useCheckGraphQLQueryParams",
    ()=>useCheckGraphQLQueryParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
;
const expectedParameters = new Set([
    'query',
    'variables',
    'operationName',
    'extensions'
]);
function assertInvalidParams(params, extraParamNames) {
    if (params == null || typeof params !== 'object') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Invalid "params" in the request body', {
            extensions: {
                http: {
                    spec: true,
                    status: 400
                },
                code: 'BAD_REQUEST'
            }
        });
    }
    for(const paramKey in params){
        if (params[paramKey] == null) {
            continue;
        }
        if (!expectedParameters.has(paramKey)) {
            if (extraParamNames?.includes(paramKey)) {
                continue;
            }
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Unexpected parameter "${paramKey}" in the request body.`, {
                extensions: {
                    http: {
                        status: 400
                    },
                    code: 'BAD_REQUEST'
                }
            });
        }
    }
}
function checkGraphQLQueryParams(params, extraParamNames) {
    if (!isObject(params)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Expected params to be an object but given ${extendedTypeof(params)}.`, {
            extensions: {
                http: {
                    status: 400,
                    headers: {
                        Allow: 'GET, POST'
                    }
                },
                code: 'BAD_REQUEST'
            }
        });
    }
    assertInvalidParams(params, extraParamNames);
    if (params['query'] == null) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Must provide query string.', {
            extensions: {
                http: {
                    spec: true,
                    status: 400,
                    headers: {
                        Allow: 'GET, POST'
                    }
                },
                code: 'BAD_REQUEST'
            }
        });
    }
    const queryType = extendedTypeof(params['query']);
    if (queryType !== 'string') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Expected "query" param to be a string, but given ${queryType}.`, {
            extensions: {
                http: {
                    status: 400,
                    headers: {
                        Allow: 'GET, POST'
                    }
                },
                code: 'BAD_REQUEST'
            }
        });
    }
    const variablesParamType = extendedTypeof(params['variables']);
    if (![
        'object',
        'null',
        'undefined'
    ].includes(variablesParamType)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Expected "variables" param to be empty or an object, but given ${variablesParamType}.`, {
            extensions: {
                http: {
                    status: 400,
                    headers: {
                        Allow: 'GET, POST'
                    }
                },
                code: 'BAD_REQUEST'
            }
        });
    }
    const extensionsParamType = extendedTypeof(params['extensions']);
    if (![
        'object',
        'null',
        'undefined'
    ].includes(extensionsParamType)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Expected "extensions" param to be empty or an object, but given ${extensionsParamType}.`, {
            extensions: {
                http: {
                    status: 400,
                    headers: {
                        Allow: 'GET, POST'
                    }
                },
                code: 'BAD_REQUEST'
            }
        });
    }
    return params;
}
function isValidGraphQLParams(params) {
    try {
        checkGraphQLQueryParams(params);
        return true;
    } catch  {
        return false;
    }
}
function useCheckGraphQLQueryParams(extraParamNames) {
    return {
        onParams ({ params }) {
            checkGraphQLQueryParams(params, extraParamNames);
        }
    };
}
function extendedTypeof(val) {
    if (val === null) {
        return 'null';
    }
    if (Array.isArray(val)) {
        return 'array';
    }
    return typeof val;
}
function isObject(val) {
    return extendedTypeof(val) === 'object';
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-check-method-for-graphql.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidMethodForGraphQL",
    ()=>isValidMethodForGraphQL,
    "useCheckMethodForGraphQL",
    ()=>useCheckMethodForGraphQL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
;
function isValidMethodForGraphQL(method) {
    return method === 'GET' || method === 'POST';
}
function useCheckMethodForGraphQL() {
    return {
        onRequestParse ({ request }) {
            if (!isValidMethodForGraphQL(request.method)) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('GraphQL only supports GET and POST requests.', {
                    extensions: {
                        http: {
                            status: 405,
                            headers: {
                                Allow: 'GET, POST'
                            }
                        },
                        code: 'BAD_REQUEST'
                    }
                });
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-http-validation-error.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHTTPValidationError",
    ()=>useHTTPValidationError
]);
function useHTTPValidationError() {
    return {
        onValidate () {
            return ({ valid, result })=>{
                if (!valid) {
                    for (const error of result){
                        error.extensions ||= {};
                        error.extensions.code ||= 'GRAPHQL_VALIDATION_FAILED';
                        error.extensions.http ||= {};
                        error.extensions.http.spec = error.extensions.http.spec == null ? true : error.extensions.http.spec;
                        error.extensions.http.status ||= 400;
                    }
                }
            };
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-limit-batching.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLimitBatching",
    ()=>useLimitBatching
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
;
function useLimitBatching(limit) {
    return {
        onRequestParse () {
            return {
                onRequestParseDone ({ requestParserResult }) {
                    if (Array.isArray(requestParserResult)) {
                        if (!limit) {
                            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Batching is not supported.`, {
                                extensions: {
                                    http: {
                                        status: 400
                                    },
                                    code: 'BAD_REQUEST'
                                }
                            });
                        }
                        if (requestParserResult.length > limit) {
                            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(`Batching is limited to ${limit} operations per request.`, {
                                extensions: {
                                    http: {
                                        status: 413
                                    },
                                    code: 'BAD_REQUEST'
                                }
                            });
                        }
                    }
                }
            };
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-prevent-mutation-via-get.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertMutationViaGet",
    ()=>assertMutationViaGet,
    "usePreventMutationViaGET",
    ()=>usePreventMutationViaGET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$getOperationAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/getOperationAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/error/GraphQLError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
;
;
function assertMutationViaGet(method, document, operationName) {
    const operation = document ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$getOperationAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOperationAST"])(document, operationName) ?? undefined : undefined;
    if (!operation) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Could not determine what operation to execute.', {
            extensions: {
                code: 'OPERATION_RESOLUTION_FAILURE',
                http: {
                    status: 400
                }
            }
        });
    }
    if (operation.operation === 'mutation' && method === 'GET') {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])('Can only perform a mutation operation from a POST request.', {
            extensions: {
                http: {
                    status: 405,
                    headers: {
                        Allow: 'POST'
                    }
                },
                code: 'BAD_REQUEST'
            }
        });
    }
}
function usePreventMutationViaGET() {
    return {
        onParse () {
            // We should improve this by getting Yoga stuff from the hook params directly instead of the context
            return ({ result, context: { request, // the `params` might be missing in cases where the user provided
            // malformed context to getEnveloped (like `yoga.getEnveloped({})`)
            params: { operationName } = {} } })=>{
                // Run only if this is a Yoga request
                // the `request` might be missing when using graphql-ws for example
                // in which case throwing an error would abruptly close the socket
                if (!request) {
                    return;
                }
                if (result instanceof Error) {
                    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$error$2f$GraphQLError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLError"]) {
                        // @ts-expect-error - We are modifying the extensions on purpose
                        const extensions = result.extensions ||= {};
                        extensions['code'] ||= 'GRAPHQL_PARSE_FAILED';
                        const httpExtensions = extensions['http'] ||= {};
                        httpExtensions.spec ||= true;
                        httpExtensions.status ||= 400;
                    }
                } else {
                    assertMutationViaGet(request.method, result, operationName);
                }
            };
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/graphiql-html.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = "<!doctype html><html lang=en><head><meta charset=utf-8><title>__TITLE__</title><link rel=icon href=https://raw.githubusercontent.com/graphql-hive/graphql-yoga/refs/heads/main/website/src/app/favicon.ico><link crossorigin rel=stylesheet href=https://unpkg.com/@graphql-yoga/graphiql@4.4.3/dist/graphiql.css></head><body id=body class=no-focus-outline><noscript>You need to enable JavaScript to run this app.</noscript><div id=root>Loading __TITLE__...</div><script>function prepareBlob(r){const o=new Blob([r],{type:\"application/javascript\"});return URL.createObjectURL(o)}const workers={},workerUrls={editorWorkerService:\"https://unpkg.com/@graphql-yoga/graphiql@4.4.3/dist/monacoeditorwork/editor.worker.bundle.js\",json:\"https://unpkg.com/@graphql-yoga/graphiql@4.4.3/dist/monacoeditorwork/json.worker.bundle.js\",graphql:\"https://unpkg.com/@graphql-yoga/graphiql@4.4.3/dist/monacoeditorwork/graphql.worker..bundle.js\"};function prepareWorkers(){return Promise.all(Object.entries(workerUrls).map(async([r,o])=>{const e=await fetch(o),t=await e.text();workers[r]=prepareBlob(t)}))}self.MonacoEnvironment={globalAPI:!1,getWorkerUrl:function(r,o){return workers[o]}}</script><script src=https://unpkg.com/@graphql-yoga/graphiql@4.4.3/dist/yoga-graphiql.umd.js></script><script>prepareWorkers().finally(()=>{YogaGraphiQL.renderYogaGraphiQL(root,__OPTS__)})</script></body></html>";
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-graphiql.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderGraphiQL",
    ()=>renderGraphiQL,
    "shouldRenderGraphiQL",
    ()=>shouldRenderGraphiQL,
    "useGraphiQL",
    ()=>useGraphiQL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$graphiql$2d$html$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/graphiql-html.js [app-route] (ecmascript)");
;
;
function shouldRenderGraphiQL({ headers, method }) {
    return method === 'GET' && !!headers?.get('accept')?.includes('text/html');
}
const renderGraphiQL = (opts)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$graphiql$2d$html$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].replace('__TITLE__', opts?.title || 'Yoga GraphiQL').replace('__OPTS__', JSON.stringify(opts ?? {}));
function useGraphiQL(config) {
    const logger = config.logger ?? console;
    let graphiqlOptionsFactory;
    if (typeof config?.options === 'function') {
        graphiqlOptionsFactory = config?.options;
    } else if (typeof config?.options === 'object') {
        graphiqlOptionsFactory = ()=>config?.options;
    } else if (config?.options === false) {
        graphiqlOptionsFactory = ()=>false;
    } else {
        graphiqlOptionsFactory = ()=>({});
    }
    const renderer = config?.render ?? renderGraphiQL;
    let urlPattern;
    const getUrlPattern = ({ URLPattern })=>{
        urlPattern ||= new URLPattern({
            pathname: config.graphqlEndpoint
        });
        return urlPattern;
    };
    return {
        onRequest ({ request, serverContext, fetchAPI, endResponse, url }) {
            if (shouldRenderGraphiQL(request) && (request.url.endsWith(config.graphqlEndpoint) || request.url.endsWith(`${config.graphqlEndpoint}/`) || url.pathname === config.graphqlEndpoint || url.pathname === `${config.graphqlEndpoint}/` || getUrlPattern(fetchAPI).test(url))) {
                logger.debug(`Rendering GraphiQL`);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>graphiqlOptionsFactory(request, serverContext), (graphiqlOptions)=>{
                    if (graphiqlOptions) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>renderer({
                                ...graphiqlOptions === true ? {} : graphiqlOptions
                            }), (graphiqlBody)=>{
                            const response = new fetchAPI.Response(graphiqlBody, {
                                headers: {
                                    'Content-Type': 'text/html'
                                },
                                status: 200
                            });
                            endResponse(response);
                        });
                    }
                });
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-health-check.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHealthCheck",
    ()=>useHealthCheck
]);
function useHealthCheck({ id = Date.now().toString(), logger = console, endpoint = '/health' } = {}) {
    return {
        onRequest ({ endResponse, fetchAPI, request }) {
            if (request.url.endsWith(endpoint)) {
                logger.debug('Responding Health Check');
                const response = new fetchAPI.Response(null, {
                    status: 200,
                    headers: {
                        'x-yoga-id': id
                    }
                });
                endResponse(response);
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/utils/create-lru-cache.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_createLRUCache",
    ()=>_createLRUCache,
    "createLRUCache",
    ()=>createLRUCache
]);
/* eslint-disable @typescript-eslint/no-empty-object-type */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lru$2d$cache$40$10$2e$4$2e$3$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lru-cache@10.4.3/node_modules/lru-cache/dist/esm/index.js [app-route] (ecmascript)");
;
const createLRUCache = _createLRUCache;
const DEFAULT_MAX = 1024;
const DEFAULT_TTL = 3_600_000;
function _createLRUCache({ max = DEFAULT_MAX, ttl = DEFAULT_TTL } = {}) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lru$2d$cache$40$10$2e$4$2e$3$2f$node_modules$2f$lru$2d$cache$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LRUCache"]({
        max,
        ttl
    });
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-parser-and-validation-cache.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useParserAndValidationCache",
    ()=>useParserAndValidationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$utils$2f$create$2d$lru$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/utils/create-lru-cache.js [app-route] (ecmascript)");
;
function useParserAndValidationCache({ documentCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$utils$2f$create$2d$lru$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_createLRUCache"])(), errorCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$utils$2f$create$2d$lru$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_createLRUCache"])(), validationCache = true }) {
    const validationCacheByRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$utils$2f$create$2d$lru$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_createLRUCache"])();
    return {
        onParse ({ params, setParsedDocument }) {
            const strDocument = params.source.toString();
            const document = documentCache.get(strDocument);
            if (document) {
                setParsedDocument(document);
                return;
            }
            const parserError = errorCache.get(strDocument);
            if (parserError) {
                throw parserError;
            }
            return ({ result })=>{
                if (result != null) {
                    if (result instanceof Error) {
                        errorCache.set(strDocument, result);
                    } else {
                        documentCache.set(strDocument, result);
                    }
                }
            };
        },
        onValidate ({ params: { schema, documentAST, rules }, setResult }) {
            /** No schema no cache */ if (schema == null) {
                return;
            }
            if (validationCache !== false) {
                const rulesKey = rules?.map((rule)=>rule.name).join(',') || '';
                let validationCacheBySchema = validationCacheByRules.get(rulesKey);
                if (!validationCacheBySchema) {
                    validationCacheBySchema = new WeakMap();
                    validationCacheByRules.set(rulesKey, validationCacheBySchema);
                }
                let validationCacheByDocument = validationCacheBySchema.get(schema);
                if (!validationCacheByDocument) {
                    validationCacheByDocument = new WeakMap();
                    validationCacheBySchema.set(schema, validationCacheByDocument);
                }
                const cachedResult = validationCacheByDocument.get(documentAST);
                if (cachedResult) {
                    setResult(cachedResult);
                    return;
                }
                return ({ result })=>{
                    if (result != null) {
                        validationCacheByDocument?.set(documentAST, result);
                    }
                };
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-request-parser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequestParser",
    ()=>useRequestParser
]);
const DEFAULT_MATCHER = ()=>true;
function useRequestParser(options) {
    const matchFn = options.match || DEFAULT_MATCHER;
    return {
        onRequestParse ({ request, setRequestParser }) {
            if (matchFn(request)) {
                setRequestParser(options.parse);
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/accept.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaTypesForRequestInOrder",
    ()=>getMediaTypesForRequestInOrder,
    "isMatchingMediaType",
    ()=>isMatchingMediaType
]);
function getMediaTypesForRequestInOrder(request) {
    const accepts = (request.headers.get('accept') || '*/*').replace(/\s/g, '').toLowerCase().split(',');
    const mediaTypes = [];
    for (const accept of accepts){
        const [mediaType, ...params] = accept.split(';');
        if (mediaType === undefined) continue; // If true, malformed header.
        const charset = params?.find((param)=>param.includes('charset=')) || 'charset=utf-8'; // utf-8 is assumed when not specified;
        if (charset !== 'charset=utf-8') {
            continue;
        }
        mediaTypes.push(mediaType);
    }
    return mediaTypes.reverse();
}
function isMatchingMediaType(askedMediaType, processorMediaType) {
    const [askedPre, askedSuf] = askedMediaType.split('/');
    const [pre, suf] = processorMediaType.split('/');
    if ((pre === '*' || pre === askedPre) && (suf === '*' || suf === askedSuf)) {
        return true;
    }
    return false;
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsonStringifyResultWithoutInternals",
    ()=>jsonStringifyResultWithoutInternals,
    "omitInternalsFromResultErrors",
    ()=>omitInternalsFromResultErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)");
;
;
function jsonStringifyResultWithoutInternals(result) {
    if (Array.isArray(result)) {
        return `[${result.map((r)=>{
            const sanitizedResult = omitInternalsFromResultErrors(r);
            const stringifier = r.stringify || JSON.stringify;
            return stringifier(sanitizedResult);
        }).join(',')}]`;
    }
    const sanitizedResult = omitInternalsFromResultErrors(result);
    const stringifier = result.stringify || JSON.stringify;
    return stringifier(sanitizedResult);
}
function omitInternalsFromResultErrors(result) {
    if (result.errors?.length || result.extensions?.http) {
        const newResult = {
            ...result
        };
        newResult.errors &&= newResult.errors.map(omitInternalsFromError);
        if (newResult.extensions) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TS should check for unused vars instead
            const { http, ...extensions } = result.extensions;
            newResult.extensions = Object.keys(extensions).length ? extensions : undefined;
        }
        return newResult;
    }
    return result;
}
function omitInternalsFromError(err) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphQLError"])(err)) {
        const serializedError = 'toJSON' in err && typeof err.toJSON === 'function' ? err.toJSON() : Object(err);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TS should check for unused vars instead
        const { http, unexpected, ...extensions } = serializedError.extensions || {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(err.message, {
            nodes: err.nodes,
            source: err.source,
            positions: err.positions,
            path: err.path,
            originalError: omitInternalsFromError(err.originalError || undefined),
            extensions: Object.keys(extensions).length ? extensions : undefined,
            coordinate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaCoordinate"])(err)
        });
    }
    return err;
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/multipart.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processMultipartResult",
    ()=>processMultipartResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/stringify.js [app-route] (ecmascript)");
;
;
;
;
;
function processMultipartResult(result, fetchAPI) {
    const headersInit = {
        Connection: 'keep-alive',
        'Content-Type': 'multipart/mixed; boundary="-"',
        'Transfer-Encoding': 'chunked'
    };
    const responseInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getResponseInitByRespectingErrors"])(result, headersInit);
    let iterator;
    const textEncoder = new fetchAPI.TextEncoder();
    const readableStream = new fetchAPI.ReadableStream({
        start (controller) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                iterator = result[Symbol.asyncIterator]();
            } else {
                let finished = false;
                iterator = {
                    next: ()=>{
                        if (finished) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                                done: true,
                                value: null
                            });
                        }
                        finished = true;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                            done: false,
                            value: result
                        });
                    }
                };
            }
            controller.enqueue(textEncoder.encode('\r\n'));
            controller.enqueue(textEncoder.encode(`---`));
        },
        pull (controller) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>iterator.next(), ({ done, value })=>{
                if (value != null) {
                    controller.enqueue(textEncoder.encode('\r\n'));
                    controller.enqueue(textEncoder.encode('Content-Type: application/json; charset=utf-8'));
                    controller.enqueue(textEncoder.encode('\r\n'));
                    const chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyResultWithoutInternals"])(value);
                    const encodedChunk = textEncoder.encode(chunk);
                    controller.enqueue(textEncoder.encode('Content-Length: ' + encodedChunk.byteLength));
                    controller.enqueue(textEncoder.encode('\r\n'));
                    controller.enqueue(textEncoder.encode('\r\n'));
                    controller.enqueue(encodedChunk);
                    controller.enqueue(textEncoder.encode('\r\n'));
                    controller.enqueue(textEncoder.encode('---'));
                }
                if (done) {
                    controller.enqueue(textEncoder.encode('--\r\n'));
                    controller.close();
                }
            }, (err)=>{
                controller.error(err);
            });
        },
        cancel (e) {
            if (iterator.return) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>iterator.return?.(e), ()=>{});
            }
        }
    });
    return new fetchAPI.Response(readableStream, responseInit);
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/regular.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processRegularResult",
    ()=>processRegularResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$isAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/isAsyncIterable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/stringify.js [app-route] (ecmascript)");
;
;
;
function processRegularResult(executionResult, fetchAPI, acceptedHeader) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$isAsyncIterable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(executionResult)) {
        return new fetchAPI.Response(null, {
            status: 406,
            statusText: 'Not Acceptable',
            headers: {
                accept: 'application/json; charset=utf-8, application/graphql-response+json; charset=utf-8'
            }
        });
    }
    const headersInit = {
        'Content-Type': acceptedHeader + '; charset=utf-8'
    };
    const responseInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getResponseInitByRespectingErrors"])(executionResult, headersInit, // prefer 200 only if accepting application/json and all errors are exclusively GraphQL errors
    acceptedHeader === 'application/json' && !Array.isArray(executionResult) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["areGraphQLErrors"])(executionResult.errors) && executionResult.errors.some((err)=>!err.extensions?.['originalError'] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphQLError"])(err.extensions['originalError'])));
    const responseBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyResultWithoutInternals"])(executionResult);
    return new fetchAPI.Response(responseBody, responseInit);
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/sse.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSSEProcessor",
    ()=>getSSEProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/stringify.js [app-route] (ecmascript)");
;
;
;
;
;
function getSSEProcessor() {
    return function processSSEResult(result, fetchAPI) {
        let pingIntervalMs = 12_000;
        // for testing the pings, reduce the timeout
        if (globalThis.process?.env?.['NODE_ENV'] === 'test') {
            pingIntervalMs = 300;
        }
        const headersInit = {
            'Content-Type': 'text/event-stream',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache',
            'Content-Encoding': 'none'
        };
        const responseInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getResponseInitByRespectingErrors"])(result, headersInit, true);
        let iterator;
        let pingInterval;
        const textEncoder = new fetchAPI.TextEncoder();
        const readableStream = new fetchAPI.ReadableStream({
            start (controller) {
                // always start with a ping because some browsers dont accept a header flush
                // causing the fetch to stall until something is streamed through the response
                controller.enqueue(textEncoder.encode(':\n\n'));
                // ping client every 12 seconds to keep the connection alive
                pingInterval = setInterval(()=>{
                    if (!controller.desiredSize) {
                        clearInterval(pingInterval);
                        return;
                    }
                    controller.enqueue(textEncoder.encode(':\n\n'));
                }, pingIntervalMs);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                    iterator = result[Symbol.asyncIterator]();
                } else {
                    let finished = false;
                    iterator = {
                        next: ()=>{
                            if (finished) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                                    done: true,
                                    value: null
                                });
                            }
                            finished = true;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])({
                                done: false,
                                value: result
                            });
                        }
                    };
                }
            },
            pull (controller) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>iterator.next(), (result)=>{
                    if (result.value != null) {
                        controller.enqueue(textEncoder.encode(`event: next\n`));
                        const chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyResultWithoutInternals"])(result.value);
                        controller.enqueue(textEncoder.encode(`data: ${chunk}\n\n`));
                    }
                    if (result.done) {
                        controller.enqueue(textEncoder.encode(`event: complete\n`));
                        controller.enqueue(textEncoder.encode(`data:\n\n`));
                        clearInterval(pingInterval);
                        controller.close();
                    }
                }, (err)=>{
                    controller.error(err);
                });
            },
            cancel (e) {
                clearInterval(pingInterval);
                if (iterator.return) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>iterator.return?.(e), ()=>{});
                }
            }
        });
        return new fetchAPI.Response(readableStream, responseInit);
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-result-processor.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResultProcessors",
    ()=>useResultProcessors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$accept$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/accept.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/multipart.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$regular$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/regular.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$sse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/result-processor/sse.js [app-route] (ecmascript)");
;
;
;
;
;
const multipart = {
    mediaTypes: [
        'multipart/mixed'
    ],
    asyncIterables: true,
    processResult: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processMultipartResult"]
};
function getSSEProcessorConfig() {
    return {
        mediaTypes: [
            'text/event-stream'
        ],
        asyncIterables: true,
        processResult: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$sse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSSEProcessor"])()
    };
}
const regular = {
    mediaTypes: [
        'application/graphql-response+json',
        'application/json'
    ],
    asyncIterables: false,
    processResult: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$regular$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processRegularResult"]
};
function useResultProcessors() {
    const isSubscriptionRequestMap = new WeakMap();
    const sse = getSSEProcessorConfig();
    const defaultList = [
        sse,
        multipart,
        regular
    ];
    const subscriptionList = [
        sse,
        regular
    ];
    return {
        onSubscribe ({ args: { contextValue } }) {
            if (contextValue.request) {
                isSubscriptionRequestMap.set(contextValue.request, true);
            }
        },
        onResultProcess ({ request, result, acceptableMediaTypes, setResultProcessor }) {
            const isSubscriptionRequest = isSubscriptionRequestMap.get(request);
            const processorConfigList = isSubscriptionRequest ? subscriptionList : defaultList;
            const requestMediaTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$accept$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMediaTypesForRequestInOrder"])(request);
            const isAsyncIterableResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result);
            for (const resultProcessorConfig of processorConfigList){
                for (const requestMediaType of requestMediaTypes){
                    if (isAsyncIterableResult && !resultProcessorConfig.asyncIterables) {
                        continue;
                    }
                    for (const processorMediaType of resultProcessorConfig.mediaTypes){
                        acceptableMediaTypes.push(processorMediaType);
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$result$2d$processor$2f$accept$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isMatchingMediaType"])(processorMediaType, requestMediaType)) {
                            setResultProcessor(resultProcessorConfig.processResult, processorMediaType);
                        }
                    }
                }
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-schema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSchema",
    ()=>useSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
function isGraphQLSchema(schemaDef) {
    // @ts-expect-error - Symbol.toStringTag exists
    return schemaDef?.[Symbol.toStringTag] === 'GraphQLSchema';
}
const useSchema = (schemaDef)=>{
    if (schemaDef == null) {
        return {};
    }
    if (isGraphQLSchema(schemaDef)) {
        return {
            onPluginInit ({ setSchema }) {
                setSchema(schemaDef);
            }
        };
    }
    if ('then' in schemaDef) {
        let schema;
        return {
            onRequestParse () {
                return {
                    onRequestParseDone () {
                        if (!schema) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>schemaDef, (schemaDef)=>{
                                schema = schemaDef;
                            });
                        }
                    }
                };
            },
            onEnveloped ({ setSchema }) {
                if (schema == null) {
                    throw new Error(`You provide a promise of a schema but it hasn't been resolved yet. Make sure you use this plugin with GraphQL Yoga.`);
                }
                if (!isGraphQLSchema(schema)) {
                    throw new Error(`The resolved schema is not a valid GraphQLSchema instance.`);
                }
                setSchema(schema);
            }
        };
    }
    if (typeof schemaDef === 'function') {
        const schemaByRequest = new WeakMap();
        return {
            onRequestParse ({ request, serverContext }) {
                return {
                    onRequestParseDone () {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>schemaDef({
                                ...serverContext,
                                request
                            }), (schemaDef)=>{
                            if (!isGraphQLSchema(schemaDef)) {
                                throw new Error('The factory function did not return a valid GraphQLSchema.');
                            }
                            schemaByRequest.set(request, schemaDef);
                        });
                    }
                };
            },
            onEnveloped ({ setSchema, context }) {
                if (context?.request == null) {
                    throw new Error('Request object is not available in the context. Make sure you use this plugin with GraphQL Yoga.');
                }
                const schema = schemaByRequest.get(context.request);
                if (schema == null) {
                    throw new Error(`No schema found for this request. Make sure you use this plugin with GraphQL Yoga.`);
                }
                setSchema(schema);
            }
        };
    }
    throw new Error(`Invalid schema definition provided, expected a schema, promise or function.`);
};
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/landing-page-html.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = "<!doctype html><html lang=en><head><meta charset=utf-8><title>Welcome to GraphQL Yoga</title><link rel=icon href=https://raw.githubusercontent.com/graphql-hive/graphql-yoga/refs/heads/main/website/src/app/favicon.ico><style>body,html{padding:0;margin:0;height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#fff;background-color:#000}main>section.hero{display:flex;height:90vh;justify-content:center;align-items:center;flex-direction:column}.logo{display:flex;align-items:center}.buttons{margin-top:24px}h1{font-size:80px}h2{color:#888;max-width:50%;margin-top:0;text-align:center}a{color:#fff;text-decoration:none;margin-left:10px;margin-right:10px;font-weight:700;transition:color .3s ease;padding:4px;overflow:visible}a.graphiql:hover{color:rgba(255,0,255,.7)}a.docs:hover{color:rgba(28,200,238,.7)}a.tutorial:hover{color:rgba(125,85,245,.7)}svg{margin-right:24px}.not-what-your-looking-for{margin-top:5vh}.not-what-your-looking-for>*{margin-left:auto;margin-right:auto}.not-what-your-looking-for>p{text-align:center}.not-what-your-looking-for>h2{color:#464646}.not-what-your-looking-for>p{max-width:600px;line-height:1.3em}.not-what-your-looking-for>pre{max-width:300px}</style></head><body id=body><main><section class=hero><div class=logo><div><svg xmlns=http://www.w3.org/2000/svg viewBox=\"-0.41 0.445 472.812 499.811\" height=150><defs><linearGradient id=paint0_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint1_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint2_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint3_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint4_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><linearGradient id=paint5_linear_1677_11483 x1=16 y1=14 x2=87.2132 y2=44.5982 gradientUnits=userSpaceOnUse><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><filter id=filter0_f_1677_11483 x=23 y=-25 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter><filter id=filter1_f_1677_11483 x=-24 y=19 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter><linearGradient id=paint6_linear_1677_11483 x1=30 y1=28 x2=66.1645 y2=44.4363 gradientUnits=userSpaceOnUse gradientTransform=\"matrix(8.139854, 0, 0, 8.139854, -130.346407, -113.25101)\"><stop stop-color=#7433FF /><stop offset=1 stop-color=#FFA3FD /></linearGradient><filter id=filter2_f_1677_11483 x=-12 y=-44 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter><filter id=filter3_f_1677_11483 x=13 y=19 width=100 height=100 filterUnits=userSpaceOnUse color-interpolation-filters=sRGB><feFlood flood-opacity=0 result=BackgroundImageFix /><feBlend mode=normal in=SourceGraphic in2=BackgroundImageFix result=shape /><feGaussianBlur stdDeviation=12 result=effect1_foregroundBlur_1677_11483 /></filter></defs><mask id=mask0_1677_11483 style=mask-type:alpha maskUnits=userSpaceOnUse x=16 y=14 width=58 height=62><path d=\"M21 25.3501C21.7279 25.3501 22.4195 25.5056 23.0433 25.7853L42.1439 14.8C43.0439 14.3 44.1439 14 45.1439 14C46.2439 14 47.2439 14.3 48.1439 14.8L64.5439 24.3C63.3439 25.1 62.4439 26.3 61.8439 27.7L45.9438 18.5C45.6439 18.3 45.344 18.3 45.0441 18.3C44.7441 18.3 44.4439 18.4 44.1439 18.5L25.8225 29.0251C25.9382 29.4471 26 29.8914 26 30.3501C26 33.1115 23.7614 35.3501 21 35.3501C18.2386 35.3501 16 33.1115 16 30.3501C16 27.5887 18.2386 25.3501 21 25.3501Z\" fill=url(#paint3_linear_1677_11483) /><path d=\"M67.2438 35.0329C65.3487 34.3219 64 32.4934 64 30.35C64 27.5886 66.2386 25.35 69 25.35C71.7614 25.35 74 27.5886 74 30.35C74 32.1825 73.0142 33.7848 71.5439 34.6554V55.2C71.5439 57.4 70.3439 59.4 68.5439 60.5L52.1439 69.9C52.1439 68.4 51.6438 66.9 50.7438 65.8L66.3439 56.8C66.9439 56.5 67.2438 55.9 67.2438 55.2V35.0329Z\" fill=url(#paint4_linear_1677_11483) /><path d=\"M49.8439 69.1055C49.9458 69.5034 50 69.9204 50 70.3501C50 73.1115 47.7614 75.3501 45 75.3501C42.5102 75.3501 40.4454 73.5302 40.0633 71.1481L21.8439 60.6C19.9439 59.5 18.8439 57.5 18.8439 55.3V36.8C19.5439 37 20.3439 37.2 21.0439 37.2C21.7439 37.2 22.4439 37.1 23.0439 36.9V55.3C23.0439 56 23.4438 56.6 23.9438 56.9L41.3263 66.9583C42.2398 65.9694 43.5476 65.3501 45 65.3501C47.3291 65.3501 49.2862 66.9426 49.8419 69.0981L49.8436 69.0997L49.8439 69.1055Z\" fill=url(#paint5_linear_1677_11483) /></mask><mask id=mask1_1677_11483 style=mask-type:alpha maskUnits=userSpaceOnUse x=30 y=28 width=30 height=30><path fill-rule=evenodd clip-rule=evenodd d=\"M49.3945 32.3945C49.3945 34.7088 47.5796 38.5469 45 38.5469C42.4271 38.5469 40.6055 34.7112 40.6055 32.3945C40.6055 29.9714 42.5769 28 45 28C47.4231 28 49.3945 29.9714 49.3945 32.3945ZM35.332 49.0433V48.2148C35.332 42.8117 37.8535 41.0004 39.8796 39.545L39.8801 39.5447C40.3928 39.1767 40.8604 38.8404 41.2488 38.4742C42.3293 39.6642 43.626 40.3047 45 40.3047C46.3752 40.3047 47.6725 39.6642 48.7529 38.4754C49.1408 38.841 49.6078 39.1773 50.1199 39.5447L50.1204 39.545C52.1465 41.0004 54.668 42.8117 54.668 48.2148V49.0433L53.8406 49.092C49.9848 49.3185 46.8646 46.9002 45 43.5777C43.1159 46.935 39.9847 49.318 36.1594 49.092L35.332 49.0433ZM58.1463 51.0747L58.1463 51.0746C57.0179 50.891 50.0128 49.7507 45.0007 55.693C40.0116 49.7553 33.1965 50.8592 31.9095 51.0677L31.9095 51.0677C31.7906 51.087 31.7189 51.0986 31.7002 51.0963C31.7005 51.0969 31.7011 51.1045 31.7023 51.1187C31.726 51.4003 31.9682 54.2745 34.0566 56.2422L30 58H60L55.8956 56.2422C57.8537 54.4764 58.1396 52.2685 58.2508 51.4092V51.4091C58.2697 51.2628 58.2836 51.1556 58.2998 51.0963C58.2881 51.0977 58.2356 51.0892 58.1463 51.0747ZM40.4836 50.104C42.3956 49.3212 43.6746 48.1737 45 46.61C46.332 48.1841 47.6159 49.3259 49.5164 50.104C49.5356 50.1425 49.5557 50.1805 49.5756 50.2182C49.5793 50.2253 49.583 50.2323 49.5867 50.2393C48.0911 50.8127 46.4264 51.825 45.0047 53.1444C43.5906 51.8221 41.9673 50.8196 40.4256 50.2153C40.4455 50.1784 40.4648 50.1415 40.4836 50.104Z\" fill=black /></mask><path d=\"M 40.59 93.095 C 46.517 93.095 52.14 94.365 57.22 96.635 L 212.7 7.22 C 220.025 3.149 228.978 0.706 237.12 0.706 C 246.073 0.706 254.213 3.149 261.54 7.22 L 395.032 84.547 C 385.264 91.059 377.939 100.827 373.055 112.224 L 243.631 37.338 C 241.19 35.71 238.747 35.71 236.305 35.71 C 233.863 35.71 231.42 36.523 228.978 37.338 L 79.84 123.009 C 80.786 126.443 81.29 130.058 81.29 133.793 C 81.29 156.269 63.065 174.493 40.59 174.493 C 18.116 174.493 -0.109 156.269 -0.109 133.793 C -0.109 111.32 18.116 93.095 40.59 93.095 Z\" fill=url(#paint0_linear_1677_11483) /><path d=\"M 417.01 171.913 C 401.585 166.126 390.603 151.238 390.603 133.793 C 390.603 111.32 408.83 93.095 431.303 93.095 C 453.777 93.095 472.001 111.32 472.001 133.793 C 472.001 148.706 463.976 161.755 452.011 168.835 L 452.011 336.07 C 452.011 353.977 442.243 370.258 427.591 379.21 L 294.098 455.726 C 294.098 443.516 290.029 431.306 282.703 422.353 L 409.683 349.093 C 414.568 346.651 417.01 341.767 417.01 336.07 L 417.01 171.913 Z\" fill=url(#paint1_linear_1677_11483) /><path d=\"M 275.376 449.253 C 276.206 452.495 276.646 455.889 276.646 459.389 C 276.646 481.863 258.422 500.087 235.947 500.087 C 215.679 500.087 198.87 485.272 195.761 465.883 L 47.46 380.025 C 31.995 371.071 23.041 354.792 23.041 336.884 L 23.041 186.296 C 28.738 187.923 35.25 189.553 40.948 189.553 C 46.646 189.553 52.345 188.738 57.228 187.111 L 57.228 336.884 C 57.228 342.582 60.485 347.465 64.554 349.908 L 206.042 431.777 C 213.481 423.728 224.127 418.689 235.947 418.689 C 254.905 418.689 270.833 431.656 275.36 449.196 L 275.376 449.214 L 275.376 449.253 Z\" fill=url(#paint2_linear_1677_11483) /><g mask=url(#mask0_1677_11483) transform=\"matrix(8.139854, 0, 0, 8.139854, -130.346375, -113.251038)\"><g filter=url(#filter0_f_1677_11483)><circle cx=73 cy=25 r=26 fill=#ED2E7E /></g><g filter=url(#filter1_f_1677_11483)><circle cx=26 cy=69 r=26 fill=#1CC8EE /></g></g><path fill-rule=evenodd clip-rule=evenodd d=\"M 271.713 150.431 C 271.713 169.275 256.948 200.517 235.947 200.517 C 215.003 200.517 200.172 169.292 200.172 150.431 C 200.172 130.708 216.225 114.666 235.947 114.666 C 255.67 114.666 271.713 130.708 271.713 150.431 Z M 157.251 285.952 L 157.251 279.212 C 157.251 235.233 177.771 220.485 194.27 208.641 C 198.447 205.644 202.247 202.901 205.414 199.923 C 214.204 209.608 224.763 214.826 235.947 214.826 C 247.138 214.826 257.697 209.608 266.496 199.931 C 269.653 202.911 273.456 205.644 277.622 208.641 C 294.114 220.485 314.642 235.233 314.642 279.212 L 314.642 285.952 L 307.912 286.351 C 276.525 288.191 251.128 268.509 235.947 241.468 C 220.611 268.795 195.126 288.191 163.981 286.351 L 157.251 285.952 Z M 342.953 302.492 C 333.771 300.994 276.751 291.715 235.955 340.082 C 195.345 291.749 139.865 300.734 129.389 302.436 C 128.428 302.59 127.841 302.688 127.687 302.665 C 127.687 302.673 127.695 302.729 127.702 302.85 C 127.897 305.138 129.867 328.532 146.872 344.55 L 113.849 358.862 L 358.044 358.862 L 324.639 344.55 C 340.576 330.177 342.905 312.202 343.807 305.212 C 343.962 304.022 344.077 303.153 344.206 302.665 C 344.108 302.68 343.686 302.606 342.953 302.492 Z M 199.188 294.59 C 214.751 288.215 225.161 278.879 235.947 266.15 C 246.788 278.96 257.241 288.255 272.707 294.59 C 272.869 294.898 273.031 295.207 273.196 295.518 C 273.219 295.574 273.252 295.631 273.285 295.688 C 261.107 300.361 247.555 308.598 235.989 319.334 C 224.477 308.573 211.258 300.417 198.715 295.493 C 198.87 295.191 199.033 294.891 199.188 294.59 Z\" fill=url(#paint6_linear_1677_11483) /><g mask=url(#mask1_1677_11483) transform=\"matrix(8.139854, 0, 0, 8.139854, -130.346375, -113.251038)\"><g filter=url(#filter2_f_1677_11483)><circle cx=38 cy=6 r=26 fill=#ED2E7E /></g><g filter=url(#filter3_f_1677_11483)><circle cx=63 cy=69 r=26 fill=#1CC8EE /></g></g></svg></div><h1>GraphQL Yoga</h1><p>Version: 5.18.0</p></div><h2>The batteries-included cross-platform GraphQL Server.</h2><div class=buttons><a href=https://www.the-guild.dev/graphql/yoga-server/docs class=docs>Read the Docs</a> <a href=https://www.the-guild.dev/graphql/yoga-server/tutorial/basic class=tutorial>Start the Tutorial </a><a href=__GRAPHIQL_LINK__ class=graphiql>Visit GraphiQL</a></div></section><section class=not-what-your-looking-for><h2>Not the page you are looking for? 👀</h2><p>This page is shown be default whenever a 404 is hit.<br>You can disable this by behavior via the <code>landingPage</code> option.</p><pre>\n          <code>\nimport { createYoga } from 'graphql-yoga';\n\nconst yoga = createYoga({\n  landingPage: false\n})\n          </code>\n        </pre><p>If you expected this page to be the GraphQL route, you need to configure Yoga. Currently, the GraphQL route is configured to be on <code>__GRAPHIQL_LINK__</code>.</p><pre>\n          <code>\nimport { createYoga } from 'graphql-yoga';\n\nconst yoga = createYoga({\n  graphqlEndpoint: '__REQUEST_PATH__',\n})\n          </code>\n        </pre></section></main></body></html>";
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-unhandled-route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultRenderLandingPage",
    ()=>defaultRenderLandingPage,
    "useUnhandledRoute",
    ()=>useUnhandledRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$landing$2d$page$2d$html$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/landing-page-html.js [app-route] (ecmascript)");
;
;
const defaultRenderLandingPage = function defaultRenderLandingPage(opts) {
    return new opts.fetchAPI.Response(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$landing$2d$page$2d$html$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].replace(/__GRAPHIQL_LINK__/g, opts.graphqlEndpoint).replace(/__REQUEST_PATH__/g, opts.url.pathname), {
        status: 200,
        statusText: 'OK',
        headers: {
            'Content-Type': 'text/html'
        }
    });
};
function useUnhandledRoute(args) {
    let urlPattern;
    function getUrlPattern({ URLPattern }) {
        urlPattern ||= new URLPattern({
            pathname: args.graphqlEndpoint
        });
        return urlPattern;
    }
    const landingPageRenderer = args.landingPageRenderer || defaultRenderLandingPage;
    return {
        onRequest ({ request, fetchAPI, endResponse, url }) {
            if (!request.url.endsWith(args.graphqlEndpoint) && !request.url.endsWith(`${args.graphqlEndpoint}/`) && url.pathname !== args.graphqlEndpoint && url.pathname !== `${args.graphqlEndpoint}/` && !getUrlPattern(fetchAPI).test(url)) {
                if (args.showLandingPage === true && request.method === 'GET' && !!request.headers?.get('accept')?.includes('text/html')) {
                    const landingPage$ = landingPageRenderer({
                        request,
                        fetchAPI,
                        url,
                        graphqlEndpoint: args.graphqlEndpoint,
                        get urlPattern () {
                            return getUrlPattern(fetchAPI);
                        }
                    });
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"])(landingPage$)) {
                        return landingPage$.then(endResponse);
                    }
                    endResponse(landingPage$);
                    return;
                }
                endResponse(new fetchAPI.Response('', {
                    status: 404,
                    statusText: 'Not Found'
                }));
            }
        }
    };
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/process-request.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processRequest",
    ()=>processRequest,
    "processResult",
    ()=>processResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$getOperationAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/getOperationAST.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
;
;
function processResult({ request, result, fetchAPI, onResultProcessHooks, serverContext }) {
    let resultProcessor;
    const acceptableMediaTypes = [];
    let acceptedMediaType = '*/*';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(onResultProcessHooks, (onResultProcessHook)=>onResultProcessHook({
                request,
                acceptableMediaTypes,
                result,
                setResult (newResult) {
                    result = newResult;
                },
                resultProcessor,
                setResultProcessor (newResultProcessor, newAcceptedMimeType) {
                    resultProcessor = newResultProcessor;
                    acceptedMediaType = newAcceptedMimeType;
                },
                serverContext
            })), ()=>{
        // If no result processor found for this result, return an error
        if (!resultProcessor) {
            return new fetchAPI.Response(null, {
                status: 406,
                statusText: 'Not Acceptable',
                headers: {
                    accept: acceptableMediaTypes.join('; charset=utf-8, ')
                }
            });
        }
        return resultProcessor(result, fetchAPI, acceptedMediaType);
    });
}
function processRequest({ params, enveloped }) {
    // Parse GraphQLParams
    const document = enveloped.parse(params.query);
    // Validate parsed Document Node
    const errors = enveloped.validate(enveloped.schema, document);
    if (errors.length > 0) {
        return {
            errors
        };
    }
    // Build the context for the execution
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>enveloped.contextFactory(), (contextValue)=>{
        const executionArgs = {
            schema: enveloped.schema,
            document,
            contextValue,
            variableValues: params.variables,
            operationName: params.operationName
        };
        // Get the actual operation
        const operation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$getOperationAST$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOperationAST"])(document, params.operationName);
        // Choose the right executor
        const executeFn = operation?.operation === 'subscription' ? enveloped.subscribe : enveloped.execute;
        // Get the result to be processed
        return executeFn(executionArgs);
    });
}
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/utils/mask-error.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "maskError",
    ()=>maskError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+utils@10.11.0+2e36366335d68c76/node_modules/@graphql-tools/utils/esm/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)");
;
;
function serializeError(error) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphQLError"])(error)) {
        return error.toJSON();
    }
    if (error instanceof Error) {
        return {
            message: error.message,
            stack: error.stack,
            cause: error.cause
        };
    }
    return error;
}
const maskError = (error, message, isDev = globalThis.process?.env?.['NODE_ENV'] === 'development')=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOriginalGraphQLError"])(error)) {
        return error;
    }
    const errorExtensions = {
        code: 'INTERNAL_SERVER_ERROR',
        unexpected: true
    };
    const errorOptions = {
        extensions: errorExtensions
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGraphQLError"])(error)) {
        errorOptions.nodes = error.nodes;
        errorOptions.source = error.source;
        errorOptions.positions = error.positions;
        errorOptions.path = error.path;
        errorOptions.coordinate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaCoordinate"])(error);
        if (isDev && error.originalError) {
            errorExtensions['originalError'] = serializeError(error.originalError);
        }
        if (error.extensions?.['http']) {
            errorExtensions['http'] = error.extensions['http'];
        }
    } else if (isDev) {
        errorExtensions['originalError'] = serializeError(error);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$utils$40$10$2e$11$2e$0$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$utils$2f$esm$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGraphQLError"])(message, errorOptions);
};
}),
"[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/server.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YogaServer",
    ()=>YogaServer,
    "createYoga",
    ()=>createYoga
]);
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/language/parser.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$validation$2f$specifiedRules$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/validation/specifiedRules.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$validation$2f$validate$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/validation/validate.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/create.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/utils.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$plugins$2f$use$2d$engine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/plugins/use-engine.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$plugins$2f$use$2d$extend$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/plugins/use-extend-context.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$plugins$2f$use$2d$masked$2d$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+core@5.5.0/node_modules/@envelop/core/esm/plugins/use-masked-errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@envelop+instrumentation@1.0.0/node_modules/@envelop/instrumentation/esm/instrumentation.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$normalizedExecutor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-tools+executor@1.5.1+2e36366335d68c76/node_modules/@graphql-tools/executor/esm/execution/normalizedExecutor.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$yoga$2b$logger$40$2$2e$0$2e$1$2f$node_modules$2f40$graphql$2d$yoga$2f$logger$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@graphql-yoga+logger@2.0.1/node_modules/@graphql-yoga/logger/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+fetch@0.10.13/node_modules/@whatwg-node/fetch/dist/node-ponyfill.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+promise-helpers@1.3.2/node_modules/@whatwg-node/promise-helpers/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$createServerAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/createServerAdapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$plugins$2f$useCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@whatwg-node+server@0.10.18/node_modules/@whatwg-node/server/esm/plugins/useCors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$allowed$2d$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/allowed-headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$get$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/get.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$form$2d$url$2d$encoded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-form-url-encoded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$graphql$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-graphql-string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-json.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-parser/post-multipart.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$check$2d$graphql$2d$query$2d$params$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-check-graphql-query-params.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$check$2d$method$2d$for$2d$graphql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-check-method-for-graphql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$http$2d$validation$2d$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-http-validation-error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$limit$2d$batching$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-limit-batching.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$prevent$2d$mutation$2d$via$2d$get$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/request-validation/use-prevent-mutation-via-get.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$graphiql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-graphiql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$health$2d$check$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-health-check.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$parser$2d$and$2d$validation$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-parser-and-validation-cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$request$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-request-parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$result$2d$processor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-result-processor.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$unhandled$2d$route$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/plugins/use-unhandled-route.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$process$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/process-request.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$utils$2f$mask$2d$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/utils/mask-error.js [app-route] (ecmascript)");
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
class YogaServer {
    /**
     * Instance of envelop
     */ getEnveloped;
    logger;
    graphqlEndpoint;
    fetchAPI;
    plugins;
    instrumentation;
    onRequestParseHooks;
    onParamsHooks;
    onExecutionResultHooks;
    onResultProcessHooks;
    maskedErrorsOpts;
    id;
    version = '5.18.0';
    constructor(options){
        this.id = options?.id ?? 'yoga';
        this.fetchAPI = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$fetch$40$0$2e$10$2e$13$2f$node_modules$2f40$whatwg$2d$node$2f$fetch$2f$dist$2f$node$2d$ponyfill$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
        };
        if (options?.fetchAPI) {
            for(const key in options.fetchAPI){
                if (options.fetchAPI[key]) {
                    this.fetchAPI[key] = options.fetchAPI[key];
                }
            }
        }
        const logger = options?.logging == null ? true : options.logging;
        this.logger = typeof logger === 'boolean' ? logger === true ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$yoga$2b$logger$40$2$2e$0$2e$1$2f$node_modules$2f40$graphql$2d$yoga$2f$logger$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$yoga$2b$logger$40$2$2e$0$2e$1$2f$node_modules$2f40$graphql$2d$yoga$2f$logger$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])('silent') : typeof logger === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$yoga$2b$logger$40$2$2e$0$2e$1$2f$node_modules$2f40$graphql$2d$yoga$2f$logger$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLogger"])(logger) : logger;
        const maskErrorFn = typeof options?.maskedErrors === 'object' && options.maskedErrors.maskError || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$utils$2f$mask$2d$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maskError"];
        const maskedErrorSet = new WeakSet();
        this.maskedErrorsOpts = options?.maskedErrors === false ? null : {
            errorMessage: 'Unexpected error.',
            ...typeof options?.maskedErrors === 'object' ? options.maskedErrors : {},
            maskError: (error, message)=>{
                if (maskedErrorSet.has(error)) {
                    return error;
                }
                const newError = maskErrorFn(error, message, this.maskedErrorsOpts?.isDev);
                if (newError !== error) {
                    this.logger.error(error);
                }
                maskedErrorSet.add(newError);
                return newError;
            }
        };
        const maskedErrors = this.maskedErrorsOpts == null ? null : this.maskedErrorsOpts;
        let batchingLimit = 0;
        if (options?.batching) {
            if (typeof options.batching === 'boolean') {
                batchingLimit = 10;
            } else {
                batchingLimit = options.batching.limit ?? 10;
            }
        }
        this.graphqlEndpoint = options?.graphqlEndpoint || '/graphql';
        const graphqlEndpoint = this.graphqlEndpoint;
        this.plugins = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$plugins$2f$use$2d$engine$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useEngine"])({
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$language$2f$parser$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"],
                validate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$validation$2f$validate$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validate"],
                execute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$normalizedExecutor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizedExecutor"],
                subscribe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$graphql$2d$tools$2b$executor$40$1$2e$5$2e$1$2b$2e36366335d68c76$2f$node_modules$2f40$graphql$2d$tools$2f$executor$2f$esm$2f$execution$2f$normalizedExecutor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizedExecutor"],
                specifiedRules: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$validation$2f$specifiedRules$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["specifiedRules"]
            }),
            // Use the schema provided by the user
            !!options?.schema && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useSchema"])(options.schema),
            options?.allowedHeaders?.request != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$allowed$2d$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useAllowedRequestHeaders"])(options.allowedHeaders.request),
            options?.context != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$plugins$2f$use$2d$extend$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useExtendContext"])((initialContext)=>{
                if (options?.context) {
                    if (typeof options.context === 'function') {
                        return options.context(initialContext);
                    }
                    return options.context;
                }
                return {};
            }),
            // Middlewares before processing the incoming HTTP request
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$health$2d$check$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useHealthCheck"])({
                id: this.id,
                logger: this.logger,
                endpoint: options?.healthCheckEndpoint
            }),
            options?.cors !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$plugins$2f$useCors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCORS"])(options?.cors),
            options?.graphiql !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$graphiql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useGraphiQL"])({
                graphqlEndpoint,
                options: options?.graphiql,
                render: options?.renderGraphiQL,
                logger: this.logger
            }),
            // Middlewares before the GraphQL execution
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$request$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useRequestParser"])({
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$get$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isGETRequest"],
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$get$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseGETRequest"]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$request$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useRequestParser"])({
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPOSTJsonRequest"],
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePOSTJsonRequest"]
            }),
            options?.multipart !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$request$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useRequestParser"])({
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPOSTMultipartRequest"],
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$multipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePOSTMultipartRequest"]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$request$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useRequestParser"])({
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$graphql$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPOSTGraphQLStringRequest"],
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$graphql$2d$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePOSTGraphQLStringRequest"]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$request$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useRequestParser"])({
                match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$form$2d$url$2d$encoded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPOSTFormUrlEncodedRequest"],
                parse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$parser$2f$post$2d$form$2d$url$2d$encoded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePOSTFormUrlEncodedRequest"]
            }),
            // Middlewares after the GraphQL execution
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$result$2d$processor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useResultProcessors"])(),
            ...options?.plugins ?? [],
            options?.parserAndValidationCache !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$parser$2d$and$2d$validation$2d$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useParserAndValidationCache"])(!options?.parserAndValidationCache || options?.parserAndValidationCache === true ? {} : options?.parserAndValidationCache),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$limit$2d$batching$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useLimitBatching"])(batchingLimit),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$check$2d$graphql$2d$query$2d$params$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCheckGraphQLQueryParams"])(options?.extraParamNames),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$use$2d$unhandled$2d$route$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useUnhandledRoute"])({
                graphqlEndpoint,
                showLandingPage: options?.landingPage !== false,
                landingPageRenderer: typeof options?.landingPage === 'function' ? options.landingPage : undefined
            }),
            // We check the method after user-land plugins because the plugin might support more methods (like graphql-sse).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$check$2d$method$2d$for$2d$graphql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useCheckMethodForGraphQL"])(),
            // We make sure that the user doesn't send a mutation with GET
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$prevent$2d$mutation$2d$via$2d$get$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["usePreventMutationViaGET"])(),
            // Make sure we always throw AbortError instead of masking it!
            maskedErrors !== null && {
                onSubscribe () {
                    return {
                        onSubscribeError ({ error }) {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbortError"])(error)) {
                                throw error;
                            }
                        }
                    };
                }
            },
            maskedErrors !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$plugins$2f$use$2d$masked$2d$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useMaskedErrors"])(maskedErrors),
            options?.allowedHeaders?.response != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$allowed$2d$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useAllowedResponseHeaders"])(options.allowedHeaders.response),
            // We handle validation errors at the end
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$plugins$2f$request$2d$validation$2f$use$2d$http$2d$validation$2d$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["useHTTPValidationError"])()
        ];
        this.getEnveloped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["envelop"])({
            plugins: this.plugins
        });
        this.plugins = this.getEnveloped._plugins;
        this.onRequestParseHooks = [];
        this.onParamsHooks = [];
        this.onExecutionResultHooks = [];
        this.onResultProcessHooks = [];
        for (const plugin of this.plugins){
            if (plugin) {
                if (plugin.onYogaInit) {
                    plugin.onYogaInit({
                        yoga: this
                    });
                }
                if (plugin.onRequestParse) {
                    this.onRequestParseHooks.push(plugin.onRequestParse);
                }
                if (plugin.onParams) {
                    this.onParamsHooks.push(plugin.onParams);
                }
                if (plugin.onExecutionResult) {
                    this.onExecutionResultHooks.push(plugin.onExecutionResult);
                }
                if (plugin.onResultProcess) {
                    this.onResultProcessHooks.push(plugin.onResultProcess);
                }
                if (plugin.instrumentation) {
                    this.instrumentation = this.instrumentation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chain"])(this.instrumentation, plugin.instrumentation) : plugin.instrumentation;
                }
            }
        }
    }
    handleParams = ({ request, context, params })=>{
        const additionalContext = context['request'] === request ? {
            params
        } : {
            request,
            params
        };
        Object.assign(context, additionalContext);
        const enveloped = this.getEnveloped(context);
        this.logger.debug(`Processing GraphQL Parameters`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$process$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processRequest"])({
                    params,
                    enveloped
                }), (result)=>{
                this.logger.debug(`Processing GraphQL Parameters done.`);
                return result;
            }, (error)=>{
                const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleError"])(error, this.maskedErrorsOpts, this.logger);
                return {
                    errors
                };
            }), (result)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$core$40$5$2e$5$2e$0$2f$node_modules$2f40$envelop$2f$core$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncIterable"])(result)) {
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapAsyncIterator"])(result, (v)=>v, (error)=>{
                    if (error.name === 'AbortError') {
                        this.logger.debug(`Request aborted`);
                        throw error;
                    }
                    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleError"])(error, this.maskedErrorsOpts, this.logger);
                    return {
                        errors
                    };
                });
            }
            return result;
        });
    };
    getResultForParams = ({ params, request }, context)=>{
        let result;
        let paramsHandler = this.handleParams;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(this.onParamsHooks, (onParamsHook)=>onParamsHook({
                    params,
                    request,
                    setParams (newParams) {
                        params = newParams;
                    },
                    paramsHandler,
                    setParamsHandler (newHandler) {
                        paramsHandler = newHandler;
                    },
                    setResult (newResult) {
                        result = newResult;
                    },
                    fetchAPI: this.fetchAPI,
                    context
                })), ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>result || paramsHandler({
                    request,
                    params,
                    context: context
                }), (result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(this.onExecutionResultHooks, (onExecutionResult)=>onExecutionResult({
                            result,
                            setResult (newResult) {
                                result = newResult;
                            },
                            request,
                            context: context
                        })), ()=>result)));
    };
    parseRequest = (request, serverContext)=>{
        let url = new Proxy({}, {
            get: (_target, prop, _receiver)=>{
                url = new this.fetchAPI.URL(request.url, 'http://localhost');
                return Reflect.get(url, prop, url);
            }
        });
        let requestParser;
        const onRequestParseDoneList = [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsync"])(this.onRequestParseHooks, (onRequestParse)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>onRequestParse({
                        request,
                        url,
                        requestParser,
                        serverContext,
                        setRequestParser (parser) {
                            requestParser = parser;
                        }
                    }), (requestParseHookResult)=>requestParseHookResult?.onRequestParseDone), onRequestParseDoneList), ()=>{
            this.logger.debug(`Parsing request to extract GraphQL parameters`);
            if (!requestParser) {
                return {
                    response: new this.fetchAPI.Response(null, {
                        status: 415,
                        statusText: 'Unsupported Media Type'
                    })
                };
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>requestParser(request), (requestParserResult)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateAsyncVoid"])(onRequestParseDoneList, (onRequestParseDone)=>onRequestParseDone({
                            requestParserResult,
                            setRequestParserResult (newParams) {
                                requestParserResult = newParams;
                            }
                        })), ()=>({
                        requestParserResult
                    }));
            });
        });
    };
    handle = (request, serverContext)=>{
        const instrumented = this.instrumentation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumented"])({
            request
        });
        const parseRequest = this.instrumentation?.requestParse ? instrumented.asyncFn(this.instrumentation?.requestParse, this.parseRequest) : this.parseRequest;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unfakePromise"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fakePromise"])().then(()=>parseRequest(request, serverContext)).then(({ response, requestParserResult })=>{
            if (response) {
                return response;
            }
            const getResultForParams = this.instrumentation?.operation ? (payload, context)=>{
                const instrumented = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$envelop$2b$instrumentation$40$1$2e$0$2e$0$2f$node_modules$2f40$envelop$2f$instrumentation$2f$esm$2f$instrumentation$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInstrumented"])({
                    context,
                    request: payload.request
                });
                const tracedHandler = instrumented.asyncFn(this.instrumentation?.operation, this.getResultForParams);
                return tracedHandler(payload, context);
            } : this.getResultForParams;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$promise$2d$helpers$40$1$2e$3$2e$2$2f$node_modules$2f40$whatwg$2d$node$2f$promise$2d$helpers$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMaybePromise"])(()=>Array.isArray(requestParserResult) ? Promise.all(requestParserResult.map((params)=>getResultForParams({
                        params,
                        request
                    }, Object.create(serverContext)))) : getResultForParams({
                    params: requestParserResult,
                    request
                }, serverContext), (result)=>{
                const tracedProcessResult = this.instrumentation?.resultProcess ? instrumented.asyncFn(this.instrumentation.resultProcess, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$process$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processResult"]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$process$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processResult"];
                return tracedProcessResult({
                    request,
                    result,
                    fetchAPI: this.fetchAPI,
                    onResultProcessHooks: this.onResultProcessHooks,
                    serverContext
                });
            });
        }).catch((error)=>{
            const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleError"])(error, this.maskedErrorsOpts, this.logger);
            const result = {
                errors
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$process$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processResult"])({
                request,
                result,
                fetchAPI: this.fetchAPI,
                onResultProcessHooks: this.onResultProcessHooks,
                serverContext
            });
        }));
    };
}
function createYoga(options) {
    const server = new YogaServer(options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$whatwg$2d$node$2b$server$40$0$2e$10$2e$18$2f$node_modules$2f40$whatwg$2d$node$2f$server$2f$esm$2f$createServerAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerAdapter"])(server, {
        fetchAPI: server.fetchAPI,
        plugins: server['plugins'],
        disposeOnProcessTerminate: options.disposeOnProcessTerminate
    });
}
}),
];

//# sourceMappingURL=0d337_graphql-yoga_esm_c0680cbe._.js.map