module.exports = [
"[project]/packages/plugins/dist/select.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrismaSelect = void 0;
const graphql_parse_resolve_info_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-parse-resolve-info@4.14.1+2e36366335d68c76/node_modules/graphql-parse-resolve-info/index.js [app-route] (ecmascript)");
/**
 * Convert `info` to select object accepted by `prisma client`.
 * @param info - GraphQLResolveInfo.
 * @example
 * // Graphql query
 * {
 *    findManyUser{
 *      id
 *      posts(where: { title: { contains: "a" } }, first: 10) {
 *        id
 *        comments{
 *          id
 *        }
 *      }
 *    }
 * }
 * // convert to
 * {
 *  select: {
 *    id: true,
 *    posts: {
 *      select: { id: true, comments: { select: { id: true } } },
 *      where: { title: { contains: "a" } },
 *      first: 10
 *    }
 *  }
 * }
 *
 * // Use
 *
 * const select = new PrismaSelect(info);
 *
 * prisma.user.findMany({
 *  ...args,
 *  ...select.value,
 * })
 *
 **/ class PrismaSelect {
    constructor(info, options){
        this.info = info;
        this.options = options;
        this.availableArgs = [
            'where',
            'orderBy',
            'skip',
            'cursor',
            'take',
            'distinct'
        ];
        this.allowedProps = [
            '_count'
        ];
        this.isAggregate = false;
    }
    get value() {
        const returnType = this.info.returnType.toString().replace(/]/g, '').replace(/\[/g, '').replace(/!/g, '');
        this.isAggregate = returnType.includes('Aggregate');
        return this.valueWithFilter(returnType);
    }
    get dataModel() {
        var _a, _b;
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.dmmf) {
            const models = [];
            (_b = this.options) === null || _b === void 0 ? void 0 : _b.dmmf.forEach((doc)=>{
                models.push(...doc.datamodel.models);
            });
            return models;
        }
        return [];
    }
    get defaultFields() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.defaultFields;
    }
    get excludeFields() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.excludeFields;
    }
    get fields() {
        return (0, graphql_parse_resolve_info_1.parseResolveInfo)(this.info);
    }
    static getModelMap(docs, name) {
        const value = docs === null || docs === void 0 ? void 0 : docs.match(/@PrismaSelect.map\(\[(.*?)]\)/);
        if (value && name) {
            const asArray = value[1].replace(/ /g, '').split(',').filter((v)=>v);
            return asArray.includes(name);
        }
        return false;
    }
    model(name) {
        return this.dataModel.find((item)=>item.name === name || PrismaSelect.getModelMap(item.documentation, name));
    }
    field(name, model) {
        return model === null || model === void 0 ? void 0 : model.fields.find((item)=>item.name === name);
    }
    static isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    static mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();
        if (PrismaSelect.isObject(target) && PrismaSelect.isObject(source)) {
            for(const key in source){
                if (PrismaSelect.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, {
                        [key]: {}
                    });
                    PrismaSelect.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, {
                        [key]: source[key]
                    });
                }
            }
        }
        return PrismaSelect.mergeDeep(target, ...sources);
    }
    /**
     * Get nested value from a select object.
     * @param field - name of field in a select object.
     * @param filterBy - Model name as you have in schema.prisma file.
     * @param mergeObject
     * @example
     * // Graphql query
     * {
     *    findManyUser{
     *      id
     *      posts{
     *        id
     *        comments{
     *          id
     *        }
     *      }
     *    }
     * }
     *
     * // when you need to get more nested fields add `.`
     * PrismaSelect.valueOf('posts.comments', 'Comment');
     * // return
     * { select: { id: true } }
     *
     * PrismaSelect.valueOf('posts', 'Post');
     *
     * // return
     * { select: { id: true, comments: { select: { id: true } } } }
     *
     **/ valueOf(field, filterBy, mergeObject = {}) {
        const splitItem = field.split('.');
        let newValue = this.getSelect(this.fields);
        for (const field of splitItem){
            if (this.isAggregate && Object.prototype.hasOwnProperty.call(newValue, field)) {
                newValue = newValue[field];
            } else if (!this.isAggregate && Object.prototype.hasOwnProperty.call(newValue, 'select') && Object.prototype.hasOwnProperty.call(newValue.select, field)) {
                newValue = newValue.select[field];
            } else {
                return {};
            }
        }
        return filterBy ? PrismaSelect.mergeDeep(this.filterBy(filterBy, newValue), mergeObject) : newValue;
    }
    /**
     * Work with this method if your GraphQL type name not like Schema model name.
     * @param modelName - Model name as you have in schema.prisma file.
     * @example
     * // normal call
     * const select = new PrismaSelect(info).value
     *
     * // With filter will filter select object with provided schema model name
     * const select = new PrismaSelect(info).valueWithFilter('User');
     *
     **/ valueWithFilter(modelName) {
        return this.filterBy(modelName, this.getSelect(this.fields));
    }
    filterBy(modelName, selectObject) {
        const model = this.model(modelName);
        if (model && typeof selectObject === 'object') {
            let defaultFields = {};
            if (this.defaultFields && this.defaultFields[modelName]) {
                const modelFields = this.defaultFields[modelName];
                defaultFields = typeof modelFields === 'function' ? modelFields(selectObject.select) : modelFields;
            }
            const filteredObject = {
                ...selectObject,
                select: {
                    ...defaultFields
                }
            };
            for(const key in selectObject.select){
                if (this.excludeFields && this.excludeFields[modelName]) {
                    const modelFields = this.excludeFields[modelName];
                    const excludeFields = typeof modelFields === 'function' ? modelFields(selectObject.select) : modelFields;
                    if (excludeFields.includes(key)) continue;
                }
                if (this.allowedProps.includes(key)) {
                    filteredObject.select[key] = selectObject.select[key];
                    continue;
                }
                const field = this.field(key, model);
                if (field) {
                    if (field.kind !== 'object') {
                        filteredObject.select[key] = true;
                        continue;
                    }
                    const subModelFilter = this.filterBy(field.type, selectObject.select[key]);
                    if (subModelFilter === true) {
                        filteredObject.select[key] = true;
                        continue;
                    }
                    if (Object.keys(subModelFilter.select).length > 0) {
                        filteredObject.select[key] = subModelFilter;
                    }
                }
            }
            return filteredObject;
        } else {
            return selectObject;
        }
    }
    getArgs(args) {
        const filteredArgs = {};
        if (args) {
            this.availableArgs.forEach((key)=>{
                if (args[key]) {
                    filteredArgs[key] = args[key];
                }
            });
        }
        return filteredArgs;
    }
    getSelect(fields, parent = true) {
        const selectObject = this.isAggregate ? {} : {
            select: {},
            ...parent ? {} : this.getArgs(fields === null || fields === void 0 ? void 0 : fields.args)
        };
        if (fields) {
            Object.keys(fields.fieldsByTypeName).forEach((type)=>{
                const fieldsByTypeName = fields.fieldsByTypeName[type];
                Object.keys(fieldsByTypeName).forEach((key)=>{
                    const fieldName = fieldsByTypeName[key].name;
                    if (Object.keys(fieldsByTypeName[key].fieldsByTypeName).length === 0) {
                        if (this.isAggregate) {
                            selectObject[fieldName] = true;
                        } else {
                            selectObject.select[fieldName] = true;
                        }
                    } else {
                        if (this.isAggregate) {
                            selectObject[fieldName] = this.getSelect(fieldsByTypeName[key], false);
                        } else {
                            selectObject.select[fieldName] = this.getSelect(fieldsByTypeName[key], false);
                        }
                    }
                });
            });
        }
        return selectObject;
    }
}
exports.PrismaSelect = PrismaSelect; //# sourceMappingURL=select.js.map
}),
"[project]/packages/plugins/dist/sdlInputs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateGraphQlSDLFile = void 0;
const fs_1 = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const generateGraphQlSDLFile = (schema, path = 'schema.graphql')=>{
    (0, fs_1.writeFileSync)(path, (0, graphql_1.printSchema)(schema));
};
exports.generateGraphQlSDLFile = generateGraphQlSDLFile; //# sourceMappingURL=sdlInputs.js.map
}),
"[project]/packages/plugins/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
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
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/packages/plugins/dist/select.js [app-route] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/packages/plugins/dist/sdlInputs.js [app-route] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/packages/nexus/dist/admin.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adminNexusSchemaSettings = adminNexusSchemaSettings;
const fs_1 = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const path_1 = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const lowdb_1 = __turbopack_context__.r("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/index.js [app-route] (ecmascript)");
const node_1 = __turbopack_context__.r("[project]/node_modules/.bun/lowdb@7.0.1/node_modules/lowdb/lib/node.js [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
function adminNexusSchemaSettings(path = 'adminSettings.json') {
    if ((0, fs_1.existsSync)((0, path_1.join)(process.cwd(), path)) || (0, fs_1.existsSync)(path)) {
        const adapter = new node_1.JSONFileSync(path);
        const defaultData = {
            models: [],
            enums: []
        };
        const db = new lowdb_1.LowSync(adapter, defaultData);
        // Read the data
        db.read();
        // Ensure data has models and enums arrays
        if (!db.data) {
            db.data = defaultData;
        }
        if (!db.data.models) {
            db.data.models = [];
        }
        if (!db.data.enums) {
            db.data.enums = [];
        }
        const nexusSchemaInputs = [
            (0, nexus_1.extendType)({
                type: 'Query',
                definition (t) {
                    t.field('getSchema', {
                        type: (0, nexus_1.nonNull)('Schema'),
                        resolve () {
                            var _a, _b;
                            // Read fresh data
                            db.read();
                            // Ensure we always return data with models and enums arrays
                            return {
                                models: ((_a = db.data) === null || _a === void 0 ? void 0 : _a.models) || [],
                                enums: ((_b = db.data) === null || _b === void 0 ? void 0 : _b.enums) || []
                            };
                        }
                    });
                }
            }),
            (0, nexus_1.extendType)({
                type: 'Mutation',
                definition (t) {
                    t.field('updateField', {
                        type: (0, nexus_1.nonNull)('Field'),
                        args: {
                            id: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                            modelId: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                            data: (0, nexus_1.nonNull)('UpdateFieldInput')
                        },
                        resolve (_, { id, modelId, data }) {
                            var _a, _b;
                            // Read current data
                            db.read();
                            // Find the model
                            const model = (_a = db.data.models) === null || _a === void 0 ? void 0 : _a.find((m)=>m.id === modelId);
                            if (!model) {
                                throw new Error(`Model with id ${modelId} not found`);
                            }
                            // Find the field
                            const field = (_b = model.fields) === null || _b === void 0 ? void 0 : _b.find((f)=>f.id === id);
                            if (!field) {
                                throw new Error(`Field with id ${id} not found in model ${modelId}`);
                            }
                            // Update the field
                            Object.assign(field, data);
                            // Write the changes
                            db.write();
                            return field;
                        }
                    });
                    t.field('updateModel', {
                        type: (0, nexus_1.nonNull)('Model'),
                        args: {
                            id: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                            data: (0, nexus_1.nonNull)('UpdateModelInput')
                        },
                        resolve (_, { id, data }) {
                            var _a;
                            // Read current data
                            db.read();
                            // Find the model
                            const model = (_a = db.data.models) === null || _a === void 0 ? void 0 : _a.find((m)=>m.id === id);
                            if (!model) {
                                throw new Error(`Model with id ${id} not found`);
                            }
                            // Update the model
                            Object.assign(model, data);
                            // Write the changes
                            db.write();
                            return model;
                        }
                    });
                }
            }),
            (0, nexus_1.objectType)({
                nonNullDefaults: {
                    output: true
                },
                name: 'Enum',
                definition (t) {
                    t.string('name');
                    t.list.string('fields');
                }
            }),
            (0, nexus_1.objectType)({
                nonNullDefaults: {
                    output: true
                },
                name: 'Schema',
                definition (t) {
                    t.list.field('models', {
                        type: 'Model'
                    });
                    t.list.field('enums', {
                        type: 'Enum'
                    });
                }
            }),
            (0, nexus_1.objectType)({
                nonNullDefaults: {
                    output: true
                },
                name: 'Model',
                definition (t) {
                    t.string('id');
                    t.string('name');
                    t.string('idField');
                    t.list.string('displayFields');
                    t.boolean('create');
                    t.boolean('update');
                    t.boolean('delete');
                    t.list.field('fields', {
                        type: 'Field'
                    });
                }
            }),
            (0, nexus_1.objectType)({
                nonNullDefaults: {
                    output: true
                },
                name: 'Field',
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
                        type: 'KindEnum'
                    });
                }
            }),
            (0, nexus_1.enumType)({
                name: 'KindEnum',
                members: [
                    'object',
                    'enum',
                    'scalar'
                ]
            }),
            (0, nexus_1.inputObjectType)({
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
            }),
            (0, nexus_1.inputObjectType)({
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
                        type: 'KindEnum'
                    });
                }
            })
        ];
        return nexusSchemaInputs;
    }
    return [];
} //# sourceMappingURL=admin.js.map
}),
"[project]/packages/nexus/dist/scalars/BigInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BigInt = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const graphql_scalars_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/index.js [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
exports.BigInt = (0, nexus_1.asNexusMethod)(new graphql_1.GraphQLScalarType({
    ...graphql_scalars_1.BigIntResolver,
    description: `The \`BigInt\` scalar type represents non-fractional signed whole numeric values.
@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt`
}), 'bigint'); //# sourceMappingURL=BigInt.js.map
}),
"[project]/packages/nexus/dist/scalars/Bytes.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Bytes = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const graphql_scalars_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/index.js [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
exports.Bytes = (0, nexus_1.asNexusMethod)(new graphql_1.GraphQLScalarType({
    ...graphql_scalars_1.ByteResolver,
    // Override the default 'Byte' name with one that matches what Nexus Prisma expects.
    name: 'Bytes'
}), 'bytes'); //# sourceMappingURL=Bytes.js.map
}),
"[project]/packages/nexus/dist/scalars/DateTime.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateTime = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const graphql_scalars_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/index.js [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
exports.DateTime = (0, nexus_1.asNexusMethod)(new graphql_1.GraphQLScalarType(graphql_scalars_1.DateTimeResolver), 'dateTime'); //# sourceMappingURL=DateTime.js.map
}),
"[project]/packages/nexus/dist/scalars/Decimal.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
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
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Decimal = void 0;
const DecimalJs = __importStar(__turbopack_context__.r("[project]/node_modules/.bun/decimal.js@10.6.0/node_modules/decimal.js/decimal.js [app-route] (ecmascript)"));
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
exports.Decimal = (0, nexus_1.asNexusMethod)(/**
 * Copied from prisma-graphql-type-decimal.
 *
 * @see https://github.com/unlight/prisma-graphql-type-decimal
 */ new graphql_1.GraphQLScalarType({
    name: 'Decimal',
    description: 'An arbitrary-precision Decimal type',
    /**
     * Value sent to the client
     */ serialize (value) {
        return value.toString();
    },
    /**
     * Value from the client
     */ parseValue (value) {
        return new DecimalJs.Decimal(value);
    },
    parseLiteral (ast) {
        if (ast.kind === graphql_1.Kind.INT || ast.kind === graphql_1.Kind.FLOAT || ast.kind === graphql_1.Kind.STRING) {
            return new DecimalJs.Decimal(ast.value);
        }
        return null;
    }
}), 'decimal'); //# sourceMappingURL=Decimal.js.map
}),
"[project]/packages/nexus/dist/scalars/Json.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Json = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const graphql_scalars_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/index.js [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
exports.Json = (0, nexus_1.asNexusMethod)(new graphql_1.GraphQLScalarType({
    ...graphql_scalars_1.JSONResolver,
    // Override the default 'JsonObject' name with one that matches what Nexus Prisma expects.
    name: 'Json'
}), 'json'); //# sourceMappingURL=Json.js.map
}),
"[project]/packages/nexus/dist/defaultScalar.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getScalars = void 0;
const BigInt_1 = __turbopack_context__.r("[project]/packages/nexus/dist/scalars/BigInt.js [app-route] (ecmascript)");
const Bytes_1 = __turbopack_context__.r("[project]/packages/nexus/dist/scalars/Bytes.js [app-route] (ecmascript)");
const DateTime_1 = __turbopack_context__.r("[project]/packages/nexus/dist/scalars/DateTime.js [app-route] (ecmascript)");
const Decimal_1 = __turbopack_context__.r("[project]/packages/nexus/dist/scalars/Decimal.js [app-route] (ecmascript)");
const Json_1 = __turbopack_context__.r("[project]/packages/nexus/dist/scalars/Json.js [app-route] (ecmascript)");
const defaultScalar = {
    BigInt: BigInt_1.BigInt,
    Bytes: Bytes_1.Bytes,
    DateTime: DateTime_1.DateTime,
    Decimal: Decimal_1.Decimal,
    Json: Json_1.Json
};
const getScalars = (excludeScalar)=>{
    return Object.keys(defaultScalar).filter((scalar)=>!excludeScalar || !excludeScalar.includes(scalar)).map((scalar)=>defaultScalar[scalar]);
};
exports.getScalars = getScalars; //# sourceMappingURL=defaultScalar.js.map
}),
"[project]/packages/nexus/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.paljs = void 0;
const plugins_1 = __turbopack_context__.r("[project]/packages/plugins/dist/index.js [app-route] (ecmascript)");
const nexus_1 = __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)");
const admin_1 = __turbopack_context__.r("[project]/packages/nexus/dist/admin.js [app-route] (ecmascript)");
const defaultScalar_1 = __turbopack_context__.r("[project]/packages/nexus/dist/defaultScalar.js [app-route] (ecmascript)");
const paljs = (settings)=>(0, nexus_1.plugin)({
        name: 'paljs',
        description: 'paljs plugin to add Prisma select to your resolver and prisma admin queries and mutations and all models input types',
        onInstall (builder) {
            const nexusSchemaInputs = [
                (0, nexus_1.objectType)({
                    name: 'BatchPayload',
                    definition (t) {
                        t.nonNull.int('count');
                    }
                }),
                ...(0, defaultScalar_1.getScalars)(settings === null || settings === void 0 ? void 0 : settings.excludeScalar)
            ];
            if (settings === null || settings === void 0 ? void 0 : settings.includeAdmin) {
                nexusSchemaInputs.push(...(0, admin_1.adminNexusSchemaSettings)(settings === null || settings === void 0 ? void 0 : settings.adminSchemaPath));
            }
            for (const type of nexusSchemaInputs){
                builder.addType(type);
            }
        },
        onCreateFieldResolver () {
            return async (root, args, ctx, info, next)=>{
                ctx.select = new plugins_1.PrismaSelect(info, {
                    ...settings === null || settings === void 0 ? void 0 : settings.prismaSelectOptions
                }).value;
                return await next(root, args, ctx, info);
            };
        }
    });
exports.paljs = paljs; //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=packages_7fd25de4._.js.map