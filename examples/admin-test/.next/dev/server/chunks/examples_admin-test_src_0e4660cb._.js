module.exports = [
"[project]/examples/admin-test/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/prisma/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$adapter$2d$libsql$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@prisma+adapter-libsql@7.3.0/node_modules/@prisma/adapter-libsql/dist/index-node.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$adapter$2d$libsql$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$adapter$2d$libsql$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const dbPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'prisma', 'dev.db');
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$prisma$2b$adapter$2d$libsql$40$7$2e$3$2e$0$2f$node_modules$2f40$prisma$2f$adapter$2d$libsql$2f$dist$2f$index$2d$node$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaLibSql"]({
    url: `file:${dbPath}`
});
const prisma = new __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaClient"]({
    adapter
});
const __TURBOPACK__default__export__ = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/examples/admin-test/src/graphql/admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminEnum",
    ()=>AdminEnum,
    "AdminField",
    ()=>AdminField,
    "AdminKindEnum",
    ()=>AdminKindEnum,
    "AdminModel",
    ()=>AdminModel,
    "AdminMutation",
    ()=>AdminMutation,
    "AdminQuery",
    ()=>AdminQuery,
    "AdminSchema",
    ()=>AdminSchema,
    "UpdateFieldInput",
    ()=>UpdateFieldInput,
    "UpdateModelInput",
    ()=>UpdateModelInput
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/core/Low.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/node.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/adapters/node/JSONFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
;
;
;
;
;
const schemaPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'src', 'generated', 'paljs', 'admin', 'schema.json');
function getDb() {
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$adapters$2f$node$2f$JSONFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONFileSync"](schemaPath);
    const defaultData = {
        models: [],
        enums: []
    };
    const db = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lowdb$40$7$2e$0$2e$1$2f$node_modules$2f$lowdb$2f$lib$2f$core$2f$Low$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LowSync"](adapter, defaultData);
    db.read();
    if (!db.data) {
        db.data = defaultData;
    }
    if (!db.data.models) {
        db.data.models = [];
    }
    if (!db.data.enums) {
        db.data.enums = [];
    }
    return db;
}
const AdminEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true
    },
    name: 'AdminEnum',
    definition (t) {
        t.string('name');
        t.list.string('fields');
    }
});
const AdminSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true
    },
    name: 'AdminSchema',
    definition (t) {
        t.list.field('models', {
            type: 'AdminModel'
        });
        t.list.field('enums', {
            type: 'AdminEnum'
        });
    }
});
const AdminModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true
    },
    name: 'AdminModel',
    definition (t) {
        t.string('id');
        t.string('name');
        t.string('idField');
        t.list.string('displayFields');
        t.boolean('create');
        t.boolean('update');
        t.boolean('delete');
        t.list.field('fields', {
            type: 'AdminField'
        });
    }
});
const AdminField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true
    },
    name: 'AdminField',
    definition (t) {
        t.string('id');
        t.string('name');
        t.string('title');
        t.string('type');
        t.boolean('list');
        t.boolean('required');
        t.boolean('isId');
        t.boolean('unique');
        t.boolean('create');
        t.boolean('update');
        t.boolean('read');
        t.boolean('filter');
        t.boolean('sort');
        t.boolean('editor');
        t.boolean('upload');
        t.nullable.boolean('relationField');
        t.int('order');
        t.field('kind', {
            type: 'AdminKindEnum'
        });
    }
});
const AdminKindEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumType"])({
    name: 'AdminKindEnum',
    members: [
        'object',
        'enum',
        'scalar'
    ]
});
const UpdateModelInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inputObjectType"])({
    nonNullDefaults: {
        input: false
    },
    name: 'UpdateModelInput',
    definition (t) {
        t.string('name');
        t.string('idField');
        t.list.string('displayFields');
        t.boolean('create');
        t.boolean('update');
        t.boolean('delete');
        t.list.field('fields', {
            type: 'UpdateFieldInput'
        });
    }
});
const UpdateFieldInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inputObjectType"])({
    nonNullDefaults: {
        input: false
    },
    name: 'UpdateFieldInput',
    definition (t) {
        t.string('id');
        t.string('name');
        t.string('title');
        t.string('type');
        t.boolean('list');
        t.boolean('required');
        t.boolean('isId');
        t.boolean('unique');
        t.boolean('create');
        t.boolean('update');
        t.boolean('read');
        t.boolean('filter');
        t.boolean('sort');
        t.boolean('editor');
        t.boolean('upload');
        t.nullable.boolean('relationField');
        t.int('order');
        t.field('kind', {
            type: 'AdminKindEnum'
        });
    }
});
const AdminQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"])({
    type: 'Query',
    definition (t) {
        t.field('getSchema', {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('AdminSchema'),
            resolve () {
                if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(schemaPath)) {
                    return {
                        models: [],
                        enums: []
                    };
                }
                const db = getDb();
                return {
                    models: db.data?.models || [],
                    enums: db.data?.enums || []
                };
            }
        });
    }
});
const AdminMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"])({
    type: 'Mutation',
    definition (t) {
        t.field('updateField', {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('AdminField'),
            args: {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"])()),
                modelId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"])()),
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UpdateFieldInput')
            },
            resolve (_, { id, modelId, data }) {
                const db = getDb();
                const model = db.data.models?.find((m)=>m.id === modelId);
                if (!model) {
                    throw new Error(`Model with id ${modelId} not found`);
                }
                const field = model.fields?.find((f)=>f.id === id);
                if (!field) {
                    throw new Error(`Field with id ${id} not found in model ${modelId}`);
                }
                Object.assign(field, data);
                db.write();
                return field;
            }
        });
        t.field('updateModel', {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('AdminModel'),
            args: {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"])()),
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UpdateModelInput')
            },
            resolve (_, { id, data }) {
                const db = getDb();
                const model = db.data.models?.find((m)=>m.id === id);
                if (!model) {
                    throw new Error(`Model with id ${id} not found`);
                }
                Object.assign(model, data);
                db.write();
                return model;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/app/api/graphql/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql-yoga@5.18.0+2e36366335d68c76/node_modules/graphql-yoga/esm/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/makeSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nexus$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nexus/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$graphql$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/graphql/admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$dmmf$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/dmmf/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
// Create schema with paljs plugin for PrismaSelect
// paljs() provides BatchPayload + scalars (DateTime, Json, BigInt, Decimal, Bytes)
const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchema"])({
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
        __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$graphql$2f$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
    ],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nexus$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["paljs"])({
            prismaSelectOptions: {
                dmmf: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$dmmf$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dmmf"]
                ]
            },
            includeAdmin: true
        })
    ],
    outputs: {
        typegen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'src', 'generated', 'nexus-typegen.ts'),
        schema: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'src', 'generated', 'schema.graphql')
    }
});
// Create Yoga instance
const yoga = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$2d$yoga$40$5$2e$18$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createYoga"])({
    schema,
    graphqlEndpoint: '/api/graphql',
    context: ()=>({
            prisma: __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
        }),
    fetchAPI: {
        Response
    }
});
const GET = yoga;
const POST = yoga;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=examples_admin-test_src_0e4660cb._.js.map