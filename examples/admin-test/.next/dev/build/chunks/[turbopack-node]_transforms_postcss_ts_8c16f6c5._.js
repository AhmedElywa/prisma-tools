module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/examples/admin-test/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/node_modules__bun_19755e4f._.js",
  "chunks/[root-of-the-server]__62d882d3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/examples/admin-test/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];