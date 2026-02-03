module.exports = [
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/messages.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messages",
    ()=>messages
]);
const messages = {
    /* istanbul ignore next */ removedDeclarativeWrapping: (location, used)=>`\
[declarativeWrappingPlugin]: The ${used.join(' / ')} object prop${used.length > 1 ? 's' : ''} used in the ${location} has been
moved to a plugin, as improved chaining APIs and the list() / nonNull() helpers functions are preferred.

On Fields: 

t.string('someField', { nullable: false })   ->    t.nonNull.string('someField')

On args: 

stringArg({ required: true })    ->    nonNull(stringArg())

If you would like to incrementally migrate, or prefer the existing API, it is now supported via the declarativeWrappingPlugin. 
Add this to your plugins array in your makeSchema config:

makeSchema({
  plugins: [declarativeWrappingPlugin(), ...]
})
`,
    removedDeclarativeWrappingShort: (location, used)=>`\
[declarativeWrappingPlugin]: Additional warning for ${used.join(' / ')} at ${location}. Add the declarativeWrappingPlugin() to the plugins array to disable this message.
`,
    /* istanbul ignore next */ removedFunctionShorthand: (typeName, fieldName)=>`Since v0.18.0, Nexus no longer supports resolver shorthands like:\n\n    t.string("${fieldName}", () => ...).\n\nInstead please write:\n\n    t.string("${fieldName}", { resolve: () => ... })\n\n.`
}; //# sourceMappingURL=messages.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputDefinitionBlock",
    ()=>InputDefinitionBlock,
    "OutputDefinitionBlock",
    ()=>OutputDefinitionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/messages.js [app-route] (ecmascript)");
;
class OutputDefinitionBlock {
    constructor(typeBuilder, wrapping){
        this.typeBuilder = typeBuilder;
        this.wrapping = wrapping;
        this.typeName = typeBuilder.typeName;
        this.typeBuilder.addDynamicOutputMembers(this, this.wrapping);
    }
    /**
     * [API Docs](https://nxs.li/docs/api/list) | [GraphQL 2018
     * Spec](https://spec.graphql.org/June2018/#sec-Type-System.List)
     *
     * Chain this property to wrap the right-hand-side type (the field type, another list, nonNull, etc.) with a
     * List type.
     *
     * Chains are read backwards, right to left, like function composition. In other words the thing on the left
     * wraps the thing on the right.
     *
     * This is a shorthand equivalent to:
     *
     * `t.field('...', { type: list('...') })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.list.nonNull.string('aliases')
     *     },
     *   })
     *
     *   // GraphQL SDL
     *   // -----------
     *   //
     *   // type User {
     *   //   aliases: [String!]
     *   // }
     */ get list() {
        return this._wrapClass('List');
    }
    /**
     * [API Docs](https://nxs.li/docs/api/nonNull) | [Nullability
     * Guide](https://nexusjs.org/docs/guides/nullability) | [GraphQL 2018
     * Spec](https://spec.graphql.org/June2018/#sec-Type-System.Non-Null)
     *
     * Chain this property to wrap the right-hand-side type (the field type or a list) with a Non-Null type.
     *
     * In Nexus output types are nullable by default so this is useful to configure a field differently. Note if
     * you find yourself using this most of the time then what you probably what is to change the
     * nonNullDefaults configuration either globally in your makeSchema config or at the type definition level
     * in one of your type configs to be false for outputs.
     *
     * Chains are read backwards, right to left, like function composition. In other words the thing on the left
     * wraps the thing on the right.
     *
     * This is a shorthand equivalent to:
     *
     * `t.field('...', { type: nonNull('...') })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.nonNull.list.string('aliases')
     *     },
     *   })
     *
     *   // GraphQL SDL
     *   // -----------
     *   //
     *   // type User {
     *   //   aliases: [String]!
     *   // }
     */ get nonNull() {
        return this._wrapClass('NonNull');
    }
    /**
     * [API Docs](https://nxs.li/docs/api/null) | [Nullability
     * Guide](https://nexusjs.org/docs/guides/nullability) | [GraphQL 2018
     * Spec](https://spec.graphql.org/June2018/#sec-Type-System.Non-Null)
     *
     * Chain this property to *unwrap* the right-hand-side type (the field type or a list) of a Non-Null type.
     *
     * In Nexus output types are nullable by default so this is only useful when you have changed your
     * nonNullDefaults configuration either globally in your makeSchema config or at the type definition level
     * in one of your type configs to be false for outputs.
     *
     * Chains are read backwards, right to left, like function composition. In other words the thing on the left
     * wraps the thing on the right.
     *
     * This is a shorthand equivalent to:
     *
     * `t.field('...', { type: nullable('...') })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     nonNullDefaults: {
     *       outputs: true,
     *     },
     *     definition(t) {
     *       t.id('id')
     *       t.nullable.string('bio')
     *     },
     *   })
     *
     *   // GraphQL SDL
     *   // -----------
     *   //
     *   // type User {
     *   //   id: ID!
     *   //   bio: String
     *   // }
     */ get nullable() {
        return this._wrapClass('Null');
    }
    /**
     * [GraphQL 2018 spec](https://spec.graphql.org/June2018/#sec-Boolean)
     *
     * Define a field whose type is Boolean.
     *
     * Boolean types are [scalars](https://spec.graphql.org/June2018/#sec-Scalars) representing true or false.
     * They are represented in JavaScript using the [boolean primitive
     * type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean).
     *
     * This is a shorthand equivalent to:
     *
     * `t.field('...', { type: boolean() })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.boolean('active')
     *     },
     *   })
     *
     * @param name The name of this field. Must conform to the regex pattern: [_A-Za-z][_0-9A-Za-z]*
     * @param config The configuration for things like the field's type, its description, its arguments, its
     *     resolver, and more. See jsdoc on each field within for details.
     *
     * This parameter is optional if no resolver is required. No resolver is required if the [source
     *     typing](https://nxs.li/guides/backing-types):
     *
     * 1. Has a field whose name matches this one 2. And whose type is compatible 3. And is a scalar
     *
     * ...in which case the default resolver will be available whose behaviour is to simply return that field
     *     from the received source type.
     */ boolean(name, ...config) {
        this.addScalarField(name, 'Boolean', config);
    }
    /**
     * [GraphQL 2018 spec](https://spec.graphql.org/June2018/#sec-String)
     *
     * Define a field whose type is String.
     *
     * String types are [scalars](https://spec.graphql.org/June2018/#sec-Scalars) representing UTF-8 (aka.
     * unicode) character sequences. It is most often used to represent free-form human-readable text. They are
     * represented in JavaScript using the [string primitive
     * type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
     *
     * This is a shorthand, equivalent to:
     *
     * `t.field('...', { type: string() })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.string('bio')
     *     },
     *   })
     *
     * @param name The name of this field. Must conform to the regex pattern: [_A-Za-z][_0-9A-Za-z]*
     * @param config The configuration for things like the field's type, its description, its arguments, its
     *     resolver, and more. See jsdoc on each field within for details.
     *
     * This parameter is optional if no resolver is required. No resolver is required if the [source
     *     typing](https://nxs.li/guides/backing-types):
     *
     * 1. Has a field whose name matches this one 2. And whose type is compatible 3. And is a scalar
     *
     * ...in which case the default resolver will be available whose behaviour is to simply return that field
     *     from the received source type.
     */ string(name, ...config) {
        this.addScalarField(name, 'String', config);
    }
    /**
     * [GraphQL 2018 spec](https://spec.graphql.org/June2018/#sec-ID)
     *
     * Define a field whose type is ID.
     *
     * ID types are [scalars](https://spec.graphql.org/June2018/#sec-Scalars) representing unique identifiers
     * often used to refetch an object or as the key for a cache. It is serialized in the same way as the
     * [String](https://spec.graphql.org/June2018/#sec-String) type but unlike String not intended to be
     * human-readable. They are represented in JavaScript using the [string primitive
     * type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).
     *
     * This is a shorthand, equivalent to:
     *
     * `t.field('...', { type: id() })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.id('id')
     *     },
     *   })
     *
     * @param name The name of this field. Must conform to the regex pattern: [_A-Za-z][_0-9A-Za-z]*
     * @param config The configuration for things like the field's type, its description, its arguments, its
     *     resolver, and more. See jsdoc on each field within for details.
     *
     * This parameter is optional if no resolver is required. No resolver is required if the [source
     *     typing](https://nxs.li/guides/backing-types):
     *
     * 1. Has a field whose name matches this one 2. And whose type is compatible 3. And is a scalar
     *
     * ...in which case the default resolver will be available whose behaviour is to simply return that field
     *     from the received source type.
     */ id(name, ...config) {
        this.addScalarField(name, 'ID', config);
    }
    /**
     * [GraphQL 2018 spec](https://spec.graphql.org/June2018/#sec-Int)
     *
     * Define a field whose type is Int.
     *
     * Int types are [scalars](https://spec.graphql.org/June2018/#sec-Scalars) representing a signed 32-bit
     * numeric non-fractional value. They are represented in JavaScript using the [number primitive
     * type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).
     *
     * This is a shorthand equivalent to:
     *
     * `t.field('...', { type: int() })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.int('age')
     *     },
     *   })
     *
     * @param name The name of this field. Must conform to the regex pattern: [_A-Za-z][_0-9A-Za-z]*
     * @param config The configuration for things like the field's type, its description, its arguments, its
     *     resolver, and more. See jsdoc on each field within for details.
     *
     * This parameter is optional if no resolver is required. No resolver is required if the [source
     *     typing](https://nxs.li/guides/backing-types):
     *
     * 1. Has a field whose name matches this one 2. And whose type is compatible 3. And is a scalar
     *
     * ...in which case the default resolver will be available whose behaviour is to simply return that field
     *     from the received source type.
     */ int(name, ...config) {
        this.addScalarField(name, 'Int', config);
    }
    /**
     * [GraphQL 2018 spec](https://spec.graphql.org/June2018/#sec-Float)
     *
     * Define a field whose type is Float.
     *
     * Float types are [scalars](https://spec.graphql.org/June2018/#sec-Scalars) representing signed
     * double‐precision fractional values as specified by IEEE 754. They are represented in JavaScript using
     * the [number primitive
     * type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).
     *
     * This is a shorthand, equivalent to:
     *
     * `t.field('...', { type: float() })`
     *
     * @example
     *   objectType({
     *     name: 'User',
     *     definition(t) {
     *       t.float('height')
     *     },
     *   })
     *
     * @param name The name of this field. Must conform to the regex pattern: [_A-Za-z][_0-9A-Za-z]*
     * @param config The configuration for things like the field's type, its description, its arguments, its
     *     resolver, and more. See jsdoc on each field within for details.
     *
     * This parameter is optional if no resolver is required. No resolver is required if the [source
     *     typing](https://nxs.li/guides/backing-types):
     *
     * 1. Has a field whose name matches this one 2. And whose type is compatible 3. And is a scalar
     *
     * ...in which case the default resolver will be available whose behaviour is to simply return that field
     *     from the received source type.
     */ float(name, ...config) {
        this.addScalarField(name, 'Float', config);
    }
    field(...args) {
        const config = args.length === 2 ? Object.assign({
            name: args[0]
        }, args[1]) : args[0];
        this.typeBuilder.addField(Object.assign(Object.assign({}, config), {
            configFor: 'outputField',
            wrapping: this.wrapping,
            parentType: this.typeName
        }));
    }
    _wrapClass(kind) {
        var _a;
        const previousWrapping = (_a = this.wrapping) === null || _a === void 0 ? void 0 : _a[0];
        if ((kind === 'NonNull' || kind === 'Null') && (previousWrapping === 'NonNull' || previousWrapping === 'Null')) {
            return new OutputDefinitionBlock(this.typeBuilder, this.wrapping || []);
        }
        return new OutputDefinitionBlock(this.typeBuilder, [
            kind
        ].concat(this.wrapping || []));
    }
    addScalarField(fieldName, typeName, opts) {
        let fieldConfig = {
            type: typeName
        };
        /* istanbul ignore if */ if (typeof opts[0] === 'function') {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messages"].removedFunctionShorthand(typeName, fieldName));
        } else {
            fieldConfig = Object.assign(Object.assign({}, fieldConfig), opts[0]);
        }
        this.field(fieldName, fieldConfig);
    }
}
class InputDefinitionBlock {
    constructor(typeBuilder, wrapping){
        this.typeBuilder = typeBuilder;
        this.wrapping = wrapping;
        this.typeName = typeBuilder.typeName;
        this.typeBuilder.addDynamicInputFields(this, this.wrapping);
    }
    get list() {
        return this._wrapClass('List');
    }
    get nonNull() {
        return this._wrapClass('NonNull');
    }
    get nullable() {
        return this._wrapClass('Null');
    }
    string(fieldName, config) {
        this.field(fieldName, Object.assign(Object.assign({}, config), {
            type: 'String'
        }));
    }
    int(fieldName, config) {
        this.field(fieldName, Object.assign(Object.assign({}, config), {
            type: 'Int'
        }));
    }
    boolean(fieldName, opts) {
        this.field(fieldName, Object.assign(Object.assign({}, opts), {
            type: 'Boolean'
        }));
    }
    id(fieldName, config) {
        this.field(fieldName, Object.assign(Object.assign({}, config), {
            type: 'ID'
        }));
    }
    float(fieldName, config) {
        this.field(fieldName, Object.assign(Object.assign({}, config), {
            type: 'Float'
        }));
    }
    field(...args) {
        const config = args.length === 2 ? Object.assign({
            name: args[0]
        }, args[1]) : args[0];
        this.typeBuilder.addField(Object.assign(Object.assign({}, config), {
            wrapping: this.wrapping,
            parentType: this.typeName,
            configFor: 'inputField'
        }));
    }
    _wrapClass(kind) {
        var _a;
        const previousWrapping = (_a = this.wrapping) === null || _a === void 0 ? void 0 : _a[0];
        if ((kind === 'NonNull' || kind === 'Null') && (previousWrapping === 'NonNull' || previousWrapping === 'Null')) {
            return new InputDefinitionBlock(this.typeBuilder, this.wrapping || []);
        }
        return new InputDefinitionBlock(this.typeBuilder, [
            kind
        ].concat(this.wrapping || []));
    }
} //# sourceMappingURL=definitionBlocks.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusTypes",
    ()=>NexusTypes,
    "NexusWrappedSymbol",
    ()=>NexusWrappedSymbol,
    "withNexusSymbol",
    ()=>withNexusSymbol
]);
var NexusTypes;
(function(NexusTypes) {
    NexusTypes["Arg"] = "Arg";
    NexusTypes["DynamicInput"] = "DynamicInput";
    NexusTypes["DynamicOutputMethod"] = "DynamicOutputMethod";
    NexusTypes["DynamicOutputProperty"] = "DynamicOutputProperty";
    NexusTypes["Enum"] = "Enum";
    NexusTypes["ExtendInputObject"] = "ExtendInputObject";
    NexusTypes["ExtendObject"] = "ExtendObject";
    NexusTypes["InputField"] = "InputField";
    NexusTypes["InputObject"] = "InputObject";
    NexusTypes["Interface"] = "Interface";
    NexusTypes["List"] = "List";
    NexusTypes["NonNull"] = "NonNull";
    NexusTypes["Null"] = "Null";
    NexusTypes["Object"] = "Object";
    NexusTypes["OutputField"] = "OutputField";
    NexusTypes["Plugin"] = "Plugin";
    NexusTypes["PrintedGenTyping"] = "PrintedGenTyping";
    NexusTypes["PrintedGenTypingImport"] = "PrintedGenTypingImport";
    NexusTypes["Scalar"] = "Scalar";
    NexusTypes["Union"] = "Union";
})(NexusTypes || (NexusTypes = {}));
const NexusWrappedSymbol = Symbol.for('@nexus/wrapped');
function withNexusSymbol(obj, nexusType) {
    obj.prototype[NexusWrappedSymbol] = nexusType;
} //# sourceMappingURL=_types.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterfaceDefinitionBlock",
    ()=>InterfaceDefinitionBlock,
    "NexusInterfaceTypeDef",
    ()=>NexusInterfaceTypeDef,
    "interfaceType",
    ()=>interfaceType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
class InterfaceDefinitionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutputDefinitionBlock"] {
    constructor(typeBuilder){
        super(typeBuilder);
        this.typeBuilder = typeBuilder;
    }
    /** @param interfaceName */ implements(...interfaceName) {
        this.typeBuilder.addInterfaces(interfaceName);
    }
    /** Modifies a field added via an interface */ modify(field, modifications) {
        this.typeBuilder.addModification(Object.assign(Object.assign({}, modifications), {
            field
        }));
    }
}
class NexusInterfaceTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusInterfaceTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Interface);
function interfaceType(config) {
    return new NexusInterfaceTypeDef(config.name, config);
} //# sourceMappingURL=interfaceType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusObjectTypeDef",
    ()=>NexusObjectTypeDef,
    "ObjectDefinitionBlock",
    ()=>ObjectDefinitionBlock,
    "objectType",
    ()=>objectType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
class ObjectDefinitionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutputDefinitionBlock"] {
    constructor(typeBuilder){
        super(typeBuilder);
        this.typeBuilder = typeBuilder;
    }
    /** @param interfaceName */ implements(...interfaceName) {
        this.typeBuilder.addInterfaces(interfaceName);
    }
    /** Modifies a field added via an interface */ modify(field, modifications) {
        this.typeBuilder.addModification(Object.assign(Object.assign({}, modifications), {
            field
        }));
    }
}
class NexusObjectTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusObjectTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Object);
function objectType(config) {
    return new NexusObjectTypeDef(config.name, config);
} //# sourceMappingURL=objectType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusUnionTypeDef",
    ()=>NexusUnionTypeDef,
    "UnionDefinitionBlock",
    ()=>UnionDefinitionBlock,
    "unionType",
    ()=>unionType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
class UnionDefinitionBlock {
    constructor(typeBuilder){
        this.typeBuilder = typeBuilder;
    }
    /**
     * All ObjectType names that should be part of the union, either as string names or as references to the
     * `objectType()` return value
     */ members(...unionMembers) {
        this.typeBuilder.addUnionMembers(unionMembers);
    }
}
class NexusUnionTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusUnionTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Union);
function unionType(config) {
    return new NexusUnionTypeDef(config.name, config);
} //# sourceMappingURL=unionType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/blocks.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)"); //# sourceMappingURL=blocks.js.map
;
;
;
;
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/blocks.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InputDefinitionBlock"],
    "InterfaceDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterfaceDefinitionBlock"],
    "ObjectDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObjectDefinitionBlock"],
    "OutputDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutputDefinitionBlock"],
    "UnionDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnionDefinitionBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$blocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/blocks.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decorateType",
    ()=>decorateType
]);
function decorateType(type, config) {
    var _a;
    type.extensions = Object.assign(Object.assign({}, type.extensions), {
        nexus: Object.assign(Object.assign({}, Object((_a = type.extensions) === null || _a === void 0 ? void 0 : _a.nexus)), config)
    });
    return type;
} //# sourceMappingURL=decorateType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NEXUS_BUILD",
    ()=>NEXUS_BUILD,
    "NEXUS_TYPE",
    ()=>NEXUS_TYPE,
    "isNexusMeta",
    ()=>isNexusMeta,
    "isNexusMetaBuild",
    ()=>isNexusMetaBuild,
    "isNexusMetaType",
    ()=>isNexusMetaType,
    "isNexusMetaTypeFn",
    ()=>isNexusMetaTypeFn,
    "isNexusMetaTypeProp",
    ()=>isNexusMetaTypeProp,
    "resolveNexusMetaType",
    ()=>resolveNexusMetaType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
;
;
const NEXUS_TYPE = Symbol.for('@nexus/meta/NEXUS_TYPE');
const NEXUS_BUILD = Symbol.for('@nexus/meta/NEXUS_BUILD');
function isNexusMetaBuild(obj) {
    return Boolean(obj && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].get(obj, NEXUS_BUILD) === 'function');
}
function isNexusMetaType(obj) {
    return isNexusMetaTypeProp(obj) || isNexusMetaTypeFn(obj);
}
function isNexusMetaTypeProp(obj) {
    return Boolean(obj && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].has(obj, NEXUS_TYPE) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusStruct"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].get(obj, NEXUS_TYPE)));
}
function isNexusMetaTypeFn(obj) {
    return Boolean(obj && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].has(obj, NEXUS_TYPE) && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].get(obj, NEXUS_TYPE) === 'function');
}
function isNexusMeta(obj) {
    return isNexusMetaBuild(obj) || isNexusMetaType(obj) || isNexusMetaTypeFn(obj);
}
function resolveNexusMetaType(obj) {
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].get(obj, NEXUS_TYPE);
    if (typeof value === 'function') {
        value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"].set(obj, NEXUS_TYPE, value.call(obj));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusObjectTypeDef"])(value) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInterfaceTypeDef"])(value)) {
        throw new Error(`Expected property of NEXUS_TYPE to be an object or interface type`);
    }
    return value;
} //# sourceMappingURL=nexusMeta.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"nexus","version":"1.3.0","description":"Scalable, strongly typed GraphQL schema development","keywords":["graphql","schema","types","typescript"],"homepage":"https://nexusjs.org","repository":{"type":"git","url":"git://github.com/graphql-nexus/nexus.git"},"license":"MIT","author":{"name":"Tim Griesser","url":"https://github.com/tgriesser"},"files":["src","dist","dist-esm","LICENSE.md","README.md","yarn.lock"],"main":"dist","module":"dist-esm","types":"dist/index.d.ts","scripts":{"build":"yarn -s clean && tsc -p tsconfig.cjs.json && tsc -p tsconfig.esm.json","clean":"rm -rf dist*","deploy-site":"yarn && yarn build","dev":"tsc -p tsconfig.cjs.json -w","dev:examples":"yarn -s link-examples && yarn dev","dev:test":"jest --watch","examples":"yarn link-examples && yarn gulp run-examples","format":"prettier --write 'src/**/*.ts' 'tests/**/*.ts' 'examples/*/src/**.ts'","format:ci":"prettier --check 'src/**/*.ts' 'tests/**/*.ts' 'examples/*/src/**.ts'","link-examples":"yarn && yarn gulp link-examples","lint":"tslint -p tsconfig.json","prepublish":"yarn clean && yarn build","postpublish":"yarn upgrade-deps || echo 'Oops...'","release:pr":"dripip pr","release:preview":"dripip preview","release:stable":"dripip stable","test":"yarn test:types && jest --testTimeout 10000","test:ci":"yarn test:types && jest --maxWorkers 2 --coverage --testTimeout 10000","test:debug":"node --inspect-brk $(yarn bin)/jest -i --watch","test:types":"tsc -p tsconfig.spec.types.json","ts-ast-reader":"cd examples/ts-ast-reader && yarn start","unlink-examples":"yarn && yarn gulp unlink-examples","upgrade-deps":"yarn && yarn gulp upgrade-deps"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{ts,js,graphql,json,css,md}":["prettier --write","git add"],"*package.json":["sort-package-json","git add"]},"dependencies":{"iterall":"^1.3.0","tslib":"^2.0.3"},"devDependencies":{"@types/graphql-iso-date":"^3.4.0","@types/graphql-relay":"^0.4.11","@types/jest":"^26.0.15","@types/node":"^10.12.2","@types/prettier":"^1.18.3","@typescript-eslint/eslint-plugin":"2.7.0","dripip":"^0.10.0","eslint":"^6.6.0","get-port":"^5.1.1","graphql":"^16.3.0","graphql-relay":"^0.10.0","graphql-scalars":"^1.14.1","gulp":"4.0.2","husky":"^1.1.2","jest":"^26.6.3","jest-watch-typeahead":"^0.6.1","lint-staged":"^7.3.0","prettier":"^2.5.1","sort-package-json":"^1.22.1","ts-jest":"^26.4.4","ts-morph":"^13.0.3","ts-node":"^9.0.0","tsd":"^0.13.1","tslint":"^5.11.0","tslint-config-prettier":"^1.15.0","typescript":"^4.5.5"},"peerDependencies":{"graphql":"15.x || 16.x"}});}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintedGenTyping",
    ()=>PrintedGenTyping,
    "PrintedGenTypingImport",
    ()=>PrintedGenTypingImport,
    "UNKNOWN_TYPE_SCALAR",
    ()=>UNKNOWN_TYPE_SCALAR,
    "Unreachable",
    ()=>Unreachable,
    "assertAbsolutePath",
    ()=>assertAbsolutePath,
    "assertNoMissingTypes",
    ()=>assertNoMissingTypes,
    "casesHandled",
    ()=>casesHandled,
    "consoleWarn",
    ()=>consoleWarn,
    "dump",
    ()=>dump,
    "eachObj",
    ()=>eachObj,
    "firstDefined",
    ()=>firstDefined,
    "formatPathForModuleImport",
    ()=>formatPathForModuleImport,
    "getArgNamedType",
    ()=>getArgNamedType,
    "getNexusNamedType",
    ()=>getNexusNamedType,
    "getOwnPackage",
    ()=>getOwnPackage,
    "graphql15InterfaceConfig",
    ()=>graphql15InterfaceConfig,
    "graphql15InterfaceType",
    ()=>graphql15InterfaceType,
    "groupTypes",
    ()=>groupTypes,
    "invariantGuard",
    ()=>invariantGuard,
    "isArray",
    ()=>isArray,
    "isInterfaceField",
    ()=>isInterfaceField,
    "isObject",
    ()=>isObject,
    "isProductionStage",
    ()=>isProductionStage,
    "isPromiseLike",
    ()=>isPromiseLike,
    "isUnknownType",
    ()=>isUnknownType,
    "log",
    ()=>log,
    "mapObj",
    ()=>mapObj,
    "mapValues",
    ()=>mapValues,
    "objValues",
    ()=>objValues,
    "ownProp",
    ()=>ownProp,
    "pathToArray",
    ()=>pathToArray,
    "printedGenTyping",
    ()=>printedGenTyping,
    "printedGenTypingImport",
    ()=>printedGenTypingImport,
    "raiseProgrammerError",
    ()=>raiseProgrammerError,
    "relativePathTo",
    ()=>relativePathTo,
    "resolveImportPath",
    ()=>resolveImportPath,
    "result",
    ()=>result,
    "runAbstractTypeRuntimeChecks",
    ()=>runAbstractTypeRuntimeChecks,
    "suggestionList",
    ()=>suggestionList,
    "typeScriptFileExtension",
    ()=>typeScriptFileExtension,
    "unpack",
    ()=>unpack,
    "venn",
    ()=>venn
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/scalars.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const isInterfaceField = (type, fieldName)=>{
    return type.getInterfaces().some((i)=>Boolean(i.getFields()[fieldName]));
};
function suggestionList(input = '', options = []) {
    var optionsByDistance = Object.create(null);
    var oLength = options.length;
    var inputThreshold = input.length / 2;
    for(var i = 0; i < oLength; i++){
        var distance = lexicalDistance(input, options[i]);
        var threshold = Math.max(inputThreshold, options[i].length / 2, 1);
        if (distance <= threshold) {
            optionsByDistance[options[i]] = distance;
        }
    }
    return Object.keys(optionsByDistance).sort(function(a, b) {
        return optionsByDistance[a] - optionsByDistance[b];
    });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number of edits needed to transform
 * string A into string B. An edit can be an insertion, deletion, or substitution of a single character, or a
 * swap of two adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes as a single edit which helps
 * identify mis-cased values with an edit distance of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 */ function lexicalDistance(aStr, bStr) {
    if (aStr === bStr) {
        return 0;
    }
    let i;
    let j;
    const d = [];
    const a = aStr.toLowerCase();
    const b = bStr.toLowerCase();
    const aLength = a.length;
    const bLength = b.length; // Any case change counts as a single edit
    if (a === b) {
        return 1;
    }
    for(i = 0; i <= aLength; i++){
        d[i] = [
            i
        ];
    }
    for(j = 1; j <= bLength; j++){
        d[0][j] = j;
    }
    for(i = 1; i <= aLength; i++){
        for(j = 1; j <= bLength; j++){
            var cost = a[i - 1] === b[j - 1] ? 0 : 1;
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
            }
        }
    }
    return d[aLength][bLength];
}
function objValues(obj) {
    return Object.keys(obj).reduce((result, key)=>{
        result.push(obj[key]);
        return result;
    }, []);
}
function mapObj(obj, mapper) {
    return Object.keys(obj).map((key, index)=>mapper(obj[key], key, index));
}
function mapValues(obj, mapper) {
    const result = {};
    Object.keys(obj).forEach((key, index)=>result[key] = mapper(obj[key], key, index));
    return result;
}
function eachObj(obj, iter) {
    Object.keys(obj).forEach((name, i)=>iter(obj[name], name, i));
}
const isObject = (obj)=>obj !== null && typeof obj === 'object';
const assertAbsolutePath = (pathName, property)=>{
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](pathName)) {
        throw new Error(`Expected path for "${property}" to be an absolute path, saw "${pathName}"`);
    }
    return pathName;
};
function groupTypes(schema) {
    const groupedTypes = {
        input: [],
        interface: [],
        object: [],
        union: [],
        enum: [],
        scalar: Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["specifiedScalarTypes"])
    };
    const schemaTypeMap = schema.getTypeMap();
    Object.keys(schemaTypeMap).sort().forEach((typeName)=>{
        if (typeName.startsWith('__')) {
            return;
        }
        const type = schema.getType(typeName);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(type)) {
            groupedTypes.object.push(type);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInputObjectType"])(type)) {
            groupedTypes.input.push(type);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isScalarType"])(type) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSpecifiedScalarType"])(type) && !isUnknownType(type)) {
            groupedTypes.scalar.push(type);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUnionType"])(type)) {
            groupedTypes.union.push(type);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type)) {
            groupedTypes.interface.push(type);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumType"])(type)) {
            groupedTypes.enum.push(type);
        }
    });
    return groupedTypes;
}
function isUnknownType(type) {
    return type.name === UNKNOWN_TYPE_SCALAR.name;
}
function firstDefined(...args) {
    for(let i = 0; i < args.length; i++){
        const arg = args[i];
        if (typeof arg !== 'undefined') {
            return arg;
        }
    }
    /* istanbul ignore next */ throw new Error('At least one of the values should be defined');
}
function isPromiseLike(value) {
    return Boolean(value && typeof value.then === 'function');
}
const typeScriptFileExtension = /(\.d)?\.ts$/;
function makeRelativePathExplicitlyRelative(path) {
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](path)) return path;
    if (path.startsWith('./')) return path;
    return `./${path}`;
}
function nixifyPathSlashes(path) {
    return path.replace(/\\+/g, '/');
}
function formatPathForModuleImport(path) {
    return nixifyPathSlashes(makeRelativePathExplicitlyRelative(path).replace(typeScriptFileExtension, ''));
}
function relativePathTo(absolutePath, fromPath) {
    const filename = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["basename"](absolutePath);
    const relative = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["relative"](__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["dirname"](fromPath), __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["dirname"](absolutePath));
    return formatPathForModuleImport(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"](relative, filename));
}
class PrintedGenTypingImport {
    constructor(config){
        this.config = config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(PrintedGenTypingImport, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].PrintedGenTypingImport);
function printedGenTypingImport(config) {
    return new PrintedGenTypingImport(config);
}
class PrintedGenTyping {
    constructor(config){
        this.config = config;
    }
    get imports() {
        return this.config.imports || [];
    }
    toString() {
        let str = ``;
        if (this.config.description) {
            const descriptionLines = this.config.description.split('\n').map((s)=>s.trim()).filter((s)=>s).map((s)=>` * ${s}`).join('\n');
            str = `/**\n${descriptionLines}\n */\n`;
        }
        const field = `${this.config.name}${this.config.optional ? '?' : ''}`;
        str += `${field}: ${this.config.type}`;
        return str;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(PrintedGenTyping, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].PrintedGenTyping);
function printedGenTyping(config) {
    return new PrintedGenTyping(config);
}
function assertNoMissingTypes(schema, missingTypes) {
    const missingTypesNames = Object.keys(missingTypes);
    const schemaTypeMap = schema.getTypeMap();
    const schemaTypeNames = Object.keys(schemaTypeMap).filter((typeName)=>!isUnknownType(schemaTypeMap[typeName]));
    if (missingTypesNames.length > 0) {
        const errors = missingTypesNames.map((typeName)=>{
            const { fromObject } = missingTypes[typeName];
            if (fromObject) {
                return `- Looks like you forgot to import ${typeName} in the root "types" passed to Nexus makeSchema`;
            }
            const suggestions = suggestionList(typeName, schemaTypeNames);
            let suggestionsString = '';
            if (suggestions.length > 0) {
                suggestionsString = ` or mean ${suggestions.join(', ')}`;
            }
            return `- Missing type ${typeName}, did you forget to import a type to the root query${suggestionsString}?`;
        }).join('\n');
        throw new Error('\n' + errors);
    }
}
function runAbstractTypeRuntimeChecks(schema, features) {
    if (features.abstractTypeRuntimeChecks === false) {
        return;
    }
    const abstractTypes = Object.values(schema.getTypeMap()).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbstractType"]);
    abstractTypes.forEach((type)=>{
        const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type) ? 'Interface' : 'Union';
        const resolveTypeImplemented = type.resolveType !== undefined;
        const typesWithoutIsTypeOf = schema.getPossibleTypes(type).filter((type)=>type.isTypeOf === undefined);
        // if no resolveType implemented but resolveType strategy enabled and isTypeOf strategy disabled
        if (resolveTypeImplemented === false && features.abstractTypeStrategies.resolveType === true && features.abstractTypeStrategies.isTypeOf === false) {
            const messagePrefix = `You have a faulty implementation for your ${kind.toLowerCase()} type "${type.name}".`;
            const message = `${messagePrefix} It is missing a \`resolveType\` implementation.`;
            raiseProgrammerError(new Error(message));
        }
        // if some isTypeOf implementations are missing but isTypeOf strategy enabled
        if (typesWithoutIsTypeOf.length > 0 && features.abstractTypeStrategies.isTypeOf === true && features.abstractTypeStrategies.resolveType === false) {
            const messageBadTypes = typesWithoutIsTypeOf.map((t)=>`"${t.name}"`).join(', ');
            const messagePrefix = `You have a faulty implementation for your ${kind.toLowerCase()} type "${type.name}".`;
            const messageSuffix = `are missing an \`isTypeOf\` implementation: ${messageBadTypes}`;
            let message;
            if (kind === 'Union') {
                message = `${messagePrefix} Some members of union type "${type.name}" ${messageSuffix}`;
            } else if (kind === 'Interface') {
                message = `${messagePrefix} Some objects implementing the interface type "${type.name}" ${messageSuffix}`;
            } else {
                casesHandled(kind);
            }
            raiseProgrammerError(new Error(message));
        }
        // if some isTypeOf or resolveType implementations are missing but isTypeOf and resolveType strategy enabled
        if ((resolveTypeImplemented === false || typesWithoutIsTypeOf.length > 0) && features.abstractTypeStrategies.isTypeOf === true && features.abstractTypeStrategies.resolveType === true) {
            const messageBadTypes = typesWithoutIsTypeOf.map((t)=>`"${t.name}"`).join(', ');
            const messagePrefix = `You have a faulty implementation for your ${kind.toLowerCase()} type "${type.name}". Either implement its \`resolveType\` or implement \`isTypeOf\` on each object`;
            const messageSuffix = `These objects are missing an \`isTypeOf\` implementation: ${messageBadTypes}`;
            let message;
            if (kind === 'Union') {
                message = `${messagePrefix} in the union. ${messageSuffix}`;
            } else if (kind === 'Interface') {
                message = `${messagePrefix} that implements this interface. ${messageSuffix}`;
            } else {
                casesHandled(kind);
            }
            raiseProgrammerError(new Error(message));
        }
    });
}
function consoleWarn(msg) {
    console.warn(msg);
}
function log(msg) {
    console.log(`Nexus Schema: ${msg}`);
}
function venn(xs, ys) {
    const lefts = new Set(xs);
    const boths = new Set();
    const rights = new Set(ys);
    lefts.forEach((l)=>{
        if (rights.has(l)) {
            boths.add(l);
            lefts.delete(l);
            rights.delete(l);
        }
    });
    return [
        lefts,
        boths,
        rights
    ];
}
const UNKNOWN_TYPE_SCALAR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decorateType"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLScalarType"]({
    name: 'NEXUS__UNKNOWN__TYPE',
    description: `
    This scalar should never make it into production. It is used as a placeholder for situations
    where GraphQL Nexus encounters a missing type. We don't want to error immediately, otherwise
    the TypeScript definitions will not be updated.
  `,
    parseValue (value) {
        throw new Error('Error: NEXUS__UNKNOWN__TYPE is not a valid scalar.');
    },
    parseLiteral (value) {
        throw new Error('Error: NEXUS__UNKNOWN__TYPE is not a valid scalar.');
    },
    serialize (value) {
        throw new Error('Error: NEXUS__UNKNOWN__TYPE is not a valid scalar.');
    }
}), {
    sourceType: 'never'
});
function pathToArray(infoPath) {
    const flattened = [];
    let curr = infoPath;
    while(curr){
        flattened.push(curr.key);
        curr = curr.prev;
    }
    return flattened.reverse();
}
function getOwnPackage() {
    return __turbopack_context__.r("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/package.json (json)");
}
function casesHandled(x) {
    throw new Error(`A case was not handled for value: "${x}"`);
}
function dump(x) {
    console.log(__turbopack_context__.r("[externals]/util [external] (util, cjs)").inspect(x, {
        depth: null
    }));
}
function isNodeModule(path) {
    // Avoid treating absolute windows paths as Node packages e.g. D:/a/b/c
    return !__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](path) && /^([A-z0-9@])/.test(path);
}
function resolveImportPath(rootType, typeName, outputPath) {
    const rootTypePath = rootType.module;
    if (typeof rootTypePath !== 'string' || !__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](rootTypePath) && !isNodeModule(rootTypePath)) {
        throw new Error(`Expected an absolute path or Node package for the root typing path of the type "${typeName}", saw "${rootTypePath}"`);
    }
    if (isNodeModule(rootTypePath)) {
        try {
            (()=>{
                const e = new Error("Cannot find module as expression is too dynamic");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch (e) {
            throw new Error(`Module "${rootTypePath}" for the type "${typeName}" does not exist`);
        }
    } else if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"](rootTypePath)) {
        throw new Error(`Root typing path "${rootTypePath}" for the type "${typeName}" does not exist`);
    }
    if (isNodeModule(rootTypePath)) {
        return rootTypePath;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](rootTypePath)) {
        return relativePathTo(rootTypePath, outputPath);
    }
    return rootTypePath;
}
function getArgNamedType(argDef) {
    let finalValue = argDef;
    if (typeof finalValue === 'string') {
        return finalValue;
    }
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"])(finalValue) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(finalValue) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusArgDef"])(finalValue)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusArgDef"])(finalValue)) {
            finalValue = finalValue.value.type;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"])(finalValue)) {
            finalValue = finalValue.ofNexusType;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(finalValue)) {
            finalValue = finalValue.ofType;
        }
    }
    return finalValue;
}
function getNexusNamedType(type) {
    if (typeof type === 'string') {
        return type;
    }
    let namedType = type;
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"])(namedType) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(namedType) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaType"])(namedType)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"])(namedType)) {
            namedType = namedType.ofNexusType;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(namedType)) {
            namedType = namedType.ofType;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaType"])(namedType)) {
            namedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveNexusMetaType"])(namedType);
        }
    }
    return namedType;
}
function invariantGuard(val) {
    /* istanbul ignore next */ if (Boolean(val) === false) {
        throw new Error('Nexus Error: This should never happen, ' + 'please check your code or if you think this is a bug open a GitHub issue https://github.com/graphql-nexus/schema/issues/new.');
    }
}
function isProductionStage() {
    return ("TURBOPACK compile-time value", "development") === 'production' || ("TURBOPACK compile-time value", "development") === 'prod';
}
function raiseProgrammerError(error) {
    if (isProductionStage()) {
        throw error;
    } else {
        console.error(error);
    }
}
class Unreachable extends Error {
    /* istanbul ignore next */ constructor(val){
        super(`Unreachable case or branch, unexpected ${val}`);
    }
}
function graphql15InterfaceConfig(config) {
    return Object.assign(Object.assign({}, config), {
        interfaces: []
    });
}
function graphql15InterfaceType(type) {
    if (typeof type.getInterfaces !== 'function') {
        type.getInterfaces = ()=>[];
    }
    return type;
}
function unpack(val) {
    if (val instanceof Function) {
        return val();
    }
    return val;
}
function isArray(arg) {
    return Array.isArray(arg);
}
const ownProp = {
    has (obj, key) {
        return Boolean(Object.getOwnPropertyDescriptor(obj, key));
    },
    set (obj, key, value) {
        Object.defineProperty(obj, key, {
            value
        });
        return value;
    },
    get (obj, key) {
        var _a;
        return (_a = Object.getOwnPropertyDescriptor(obj, key)) === null || _a === void 0 ? void 0 : _a.value;
    }
};
function result(val) {
    if (val instanceof Function) {
        return val();
    }
    return val;
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusArgDef",
    ()=>NexusArgDef,
    "arg",
    ()=>arg,
    "booleanArg",
    ()=>booleanArg,
    "floatArg",
    ()=>floatArg,
    "idArg",
    ()=>idArg,
    "intArg",
    ()=>intArg,
    "stringArg",
    ()=>stringArg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
class NexusArgDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusArgDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Arg);
function arg(config) {
    if (!config.type) {
        throw new Error('You must provide a "type" for the arg()');
    }
    return new NexusArgDef(typeof config.type === 'string' ? config.type : config.type.name, config);
}
function stringArg(config) {
    return arg(Object.assign({
        type: 'String'
    }, config));
}
function intArg(config) {
    return arg(Object.assign({
        type: 'Int'
    }, config));
}
function floatArg(config) {
    return arg(Object.assign({
        type: 'Float'
    }, config));
}
function idArg(config) {
    return arg(Object.assign({
        type: 'ID'
    }, config));
}
function booleanArg(config) {
    return arg(Object.assign({
        type: 'Boolean'
    }, config));
} //# sourceMappingURL=args.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusListDef",
    ()=>NexusListDef,
    "list",
    ()=>list
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
;
class NexusListDef {
    constructor(ofNexusType){
        this.ofNexusType = ofNexusType;
        // @ts-ignore
        // Required field for TS to differentiate NonNull from Null from List
        this._isNexusListDef = true;
        /* istanbul ignore if */ if (typeof ofNexusType !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusStruct"])(ofNexusType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMeta"])(ofNexusType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isType"])(ofNexusType)) {
            throw new Error('Cannot wrap unknown types in list(). Saw ' + ofNexusType);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusListDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].List);
function list(type) {
    return new NexusListDef(type);
} //# sourceMappingURL=list.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusNonNullDef",
    ()=>NexusNonNullDef,
    "nonNull",
    ()=>nonNull
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
;
class NexusNonNullDef {
    constructor(ofNexusType){
        this.ofNexusType = ofNexusType;
        // @ts-ignore
        // Required field for TS to differentiate NonNull from Null from List
        this._isNexusNonNullDef = true;
        if (typeof ofNexusType !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusStruct"])(ofNexusType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMeta"])(ofNexusType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isType"])(ofNexusType)) {
            throw new Error('Cannot wrap unknown types in a nonNull(). Saw ' + ofNexusType);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusNonNullDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].NonNull);
function nonNull(type) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNonNullTypeDef"])(type) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type)) {
        /*
          Ran into an issue around the generated return type for `nonNull()`,
          which produces:
          
          ```ts
          NexusNonNullDef<any> | (TypeName & GraphQLNonNull<any>)
          ```
          
          This is problematic when you reach a decent amount of types, where you'll
          hit a `union type that is too complex to represent` error. Removing the
          right hand side of the clause resolves the issue, and the fact that it's a
          `GraphQLNonNull` type is irrelevant, so we can just cast it to
          `NexusNonNullDef<any>` here
        */ return type;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNullTypeDef"])(type)) {
        return new NexusNonNullDef(type.ofNexusType);
    }
    return new NexusNonNullDef(type);
} //# sourceMappingURL=nonNull.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusNullDef",
    ()=>NexusNullDef,
    "nullable",
    ()=>nullable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
;
class NexusNullDef {
    constructor(ofNexusType){
        this.ofNexusType = ofNexusType;
        // @ts-ignore
        // Required field for TS to differentiate NonNull from Null from List
        this._isNexusNullDef = true;
        if (typeof ofNexusType !== 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusStruct"])(ofNexusType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMeta"])(ofNexusType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isType"])(ofNexusType)) {
            throw new Error('Cannot wrap unknown types in nullable(). Saw ' + ofNexusType);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusNullDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Null);
function nullable(type) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNonNullTypeDef"])(type)) {
        return new NexusNullDef(type.ofNexusType);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNullTypeDef"])(type)) {
        return type;
    }
    return new NexusNullDef(type);
} //# sourceMappingURL=nullable.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyNexusWrapping",
    ()=>applyNexusWrapping,
    "finalizeWrapping",
    ()=>finalizeWrapping,
    "isNexusArgDef",
    ()=>isNexusArgDef,
    "isNexusDynamicInputMethod",
    ()=>isNexusDynamicInputMethod,
    "isNexusDynamicOutputMethod",
    ()=>isNexusDynamicOutputMethod,
    "isNexusDynamicOutputProperty",
    ()=>isNexusDynamicOutputProperty,
    "isNexusEnumTypeDef",
    ()=>isNexusEnumTypeDef,
    "isNexusExtendInputTypeDef",
    ()=>isNexusExtendInputTypeDef,
    "isNexusExtendTypeDef",
    ()=>isNexusExtendTypeDef,
    "isNexusInputObjectTypeDef",
    ()=>isNexusInputObjectTypeDef,
    "isNexusInterfaceTypeDef",
    ()=>isNexusInterfaceTypeDef,
    "isNexusListTypeDef",
    ()=>isNexusListTypeDef,
    "isNexusNamedInputTypeDef",
    ()=>isNexusNamedInputTypeDef,
    "isNexusNamedOuputTypeDef",
    ()=>isNexusNamedOuputTypeDef,
    "isNexusNamedTypeDef",
    ()=>isNexusNamedTypeDef,
    "isNexusNonNullTypeDef",
    ()=>isNexusNonNullTypeDef,
    "isNexusNullTypeDef",
    ()=>isNexusNullTypeDef,
    "isNexusObjectTypeDef",
    ()=>isNexusObjectTypeDef,
    "isNexusPlugin",
    ()=>isNexusPlugin,
    "isNexusPrintedGenTyping",
    ()=>isNexusPrintedGenTyping,
    "isNexusPrintedGenTypingImport",
    ()=>isNexusPrintedGenTypingImport,
    "isNexusScalarTypeDef",
    ()=>isNexusScalarTypeDef,
    "isNexusStruct",
    ()=>isNexusStruct,
    "isNexusTypeDef",
    ()=>isNexusTypeDef,
    "isNexusUnionTypeDef",
    ()=>isNexusUnionTypeDef,
    "isNexusWrappingType",
    ()=>isNexusWrappingType,
    "normalizeArgWrapping",
    ()=>normalizeArgWrapping,
    "rewrapAsGraphQLType",
    ()=>rewrapAsGraphQLType,
    "unwrapGraphQLDef",
    ()=>unwrapGraphQLDef,
    "unwrapNexusDef",
    ()=>unwrapNexusDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const NamedTypeDefs = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Enum,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Object,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Scalar,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Union,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Interface,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].InputObject
]);
const isNexusTypeDef = (obj)=>{
    console.warn(`isNexusTypeDef is deprecated, use isNexusStruct`);
    return isNexusStruct(obj);
};
function isNexusStruct(obj) {
    return obj && Boolean(obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]]);
}
function isNexusNamedTypeDef(obj) {
    return isNexusStruct(obj) && NamedTypeDefs.has(obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]]) && 'name' in obj;
}
function isNexusListTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].List;
}
function isNexusNonNullTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].NonNull;
}
function isNexusNullTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Null;
}
function isNexusWrappingType(obj) {
    return isNexusListTypeDef(obj) || isNexusNullTypeDef(obj) || isNexusNonNullTypeDef(obj);
}
function isNexusExtendInputTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].ExtendInputObject;
}
function isNexusExtendTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].ExtendObject;
}
function isNexusEnumTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Enum;
}
function isNexusInputObjectTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].InputObject;
}
function isNexusObjectTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Object;
}
function isNexusScalarTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Scalar;
}
function isNexusUnionTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Union;
}
function isNexusInterfaceTypeDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Interface;
}
function isNexusArgDef(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Arg;
}
function isNexusNamedOuputTypeDef(obj) {
    return isNexusNamedTypeDef(obj) && !isNexusInputObjectTypeDef(obj);
}
function isNexusNamedInputTypeDef(obj) {
    return isNexusNamedTypeDef(obj) && !isNexusObjectTypeDef(obj) && !isNexusInterfaceTypeDef(obj);
}
function isNexusDynamicOutputProperty(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].DynamicOutputProperty;
}
function isNexusDynamicOutputMethod(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].DynamicOutputMethod;
}
function isNexusDynamicInputMethod(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].DynamicInput;
}
function isNexusPrintedGenTyping(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].PrintedGenTyping;
}
function isNexusPrintedGenTypingImport(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].PrintedGenTypingImport;
}
function isNexusPlugin(obj) {
    return isNexusStruct(obj) && obj[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"]] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Plugin;
}
function unwrapGraphQLDef(typeDef) {
    const wrapping = [];
    let namedType = typeDef;
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(namedType)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isListType"])(namedType)) {
            wrapping.unshift('List');
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(namedType)) {
            wrapping.unshift('NonNull');
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unreachable"](namedType);
        }
        namedType = namedType.ofType;
    }
    return {
        namedType,
        wrapping
    };
}
function unwrapNexusDef(typeDef) {
    const wrapping = [];
    let namedType = typeDef;
    while(isNexusWrappingType(namedType) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(namedType) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaType"])(namedType)){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaType"])(namedType)) {
            namedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveNexusMetaType"])(namedType);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(namedType)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isListType"])(namedType)) {
                wrapping.unshift('List');
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(namedType)) {
                wrapping.unshift('NonNull');
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unreachable"](namedType);
            }
            namedType = namedType.ofType;
        } else {
            if (isNexusNonNullTypeDef(namedType)) {
                wrapping.unshift('NonNull');
            }
            if (isNexusNullTypeDef(namedType)) {
                wrapping.unshift('Null');
            }
            if (isNexusListTypeDef(namedType)) {
                wrapping.unshift('List');
            }
            namedType = namedType.ofNexusType;
        }
    }
    return {
        namedType,
        wrapping
    };
}
function rewrapAsGraphQLType(baseType, wrapping) {
    let finalType = baseType;
    wrapping.forEach((wrap)=>{
        if (wrap === 'List') {
            finalType = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLList"](finalType);
        } else if (wrap === 'NonNull') {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(finalType)) {
                finalType = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLNonNull"](finalType);
            }
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unreachable"](wrap);
        }
    });
    return finalType;
}
function normalizeArgWrapping(argVal) {
    if (isNexusArgDef(argVal)) {
        return argVal;
    }
    if (isNexusWrappingType(argVal)) {
        let { namedType, wrapping } = unwrapNexusDef(argVal);
        if (isNexusArgDef(namedType)) {
            const config = namedType.value;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"])(Object.assign(Object.assign({}, config), {
                type: applyNexusWrapping(config.type, wrapping)
            }));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"])({
            type: applyNexusWrapping(namedType, wrapping)
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"])({
        type: argVal
    });
}
function applyNexusWrapping(toWrap, wrapping) {
    let finalType = toWrap;
    wrapping.forEach((wrap)=>{
        if (wrap === 'List') {
            finalType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])(finalType);
        } else if (wrap === 'NonNull') {
            finalType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])(finalType);
        } else if (wrap === 'Null') {
            finalType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])(finalType);
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unreachable"](wrap);
        }
    });
    return finalType;
}
function finalizeWrapping(nonNullDefault, typeWrapping, chainWrapping) {
    let finalChain = [];
    const allWrapping = typeWrapping.concat(chainWrapping !== null && chainWrapping !== void 0 ? chainWrapping : []);
    // Ensure the first item is wrapped, if we're not guarding
    if (nonNullDefault && (!allWrapping[0] || allWrapping[0] === 'List')) {
        allWrapping.unshift('NonNull');
    }
    for(let i = 0; i < allWrapping.length; i++){
        const current = allWrapping[i];
        const next = allWrapping[i + 1];
        if (current === 'Null') {
            continue;
        } else if (current === 'NonNull') {
            finalChain.push('NonNull');
        } else if (current === 'List') {
            finalChain.push('List');
            if (nonNullDefault && (next === 'List' || !next)) {
                finalChain.push('NonNull');
            }
        }
    }
    return finalChain;
} //# sourceMappingURL=wrapping.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/extensions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusFieldExtension",
    ()=>NexusFieldExtension,
    "NexusInputObjectTypeExtension",
    ()=>NexusInputObjectTypeExtension,
    "NexusInterfaceTypeExtension",
    ()=>NexusInterfaceTypeExtension,
    "NexusObjectTypeExtension",
    ()=>NexusObjectTypeExtension,
    "NexusSchemaExtension",
    ()=>NexusSchemaExtension,
    "hasNexusExtension",
    ()=>hasNexusExtension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/execute.mjs [app-route] (ecmascript)");
;
;
function hasNexusExtension(val) {
    return Boolean(val);
}
class NexusFieldExtension {
    constructor(config){
        const { resolve } = config, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(config, [
            "resolve"
        ]);
        this.config = rest;
        this.hasDefinedResolver = Boolean(resolve && resolve !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultFieldResolver"]);
    }
    /** Called when there are modifications on the interface fields */ modify(modifications) {
        return new NexusFieldExtension(Object.assign(Object.assign({}, this.config), modifications));
    }
}
class NexusInputObjectTypeExtension {
    constructor(config){
        const { definition } = config, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(config, [
            "definition"
        ]);
        this.config = rest;
    }
}
class NexusObjectTypeExtension {
    constructor(config){
        const { definition } = config, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(config, [
            "definition"
        ]);
        this.config = rest;
    }
}
class NexusInterfaceTypeExtension {
    constructor(config){
        const { definition } = config, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(config, [
            "definition"
        ]);
        this.config = rest;
    }
}
class NexusSchemaExtension {
    constructor(config){
        this.config = config;
    }
} //# sourceMappingURL=extensions.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusPlugin",
    ()=>NexusPlugin,
    "completeValue",
    ()=>completeValue,
    "composeMiddlewareFns",
    ()=>composeMiddlewareFns,
    "createPlugin",
    ()=>createPlugin,
    "plugin",
    ()=>plugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
function completeValue(valOrPromise, onSuccess, onError) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromiseLike"])(valOrPromise)) {
        return valOrPromise.then(onSuccess, onError);
    }
    // No need to handle onError, this should just be a try/catch inside the `onSuccess` block
    const result = onSuccess(valOrPromise);
    // If the result of the synchronous call is a promise, we want to unwrap it, for
    // the return value types consistency
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromiseLike"])(result)) {
        return result.then((o)=>o);
    }
    return result;
}
function composeMiddlewareFns(middlewareFns, resolver) {
    let lastResolver = resolver;
    for (const middleware of middlewareFns.reverse()){
        const currentNext = middleware;
        const previousNext = lastResolver;
        lastResolver = (root, args, ctx, info)=>{
            return currentNext(root, args, ctx, info, previousNext);
        };
    }
    return lastResolver;
}
class NexusPlugin {
    constructor(config){
        this.config = config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusPlugin, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Plugin);
function plugin(config) {
    validatePluginConfig(config);
    return new NexusPlugin(config);
}
plugin.completeValue = completeValue;
const createPlugin = plugin;
/** Validate that the configuration given by a plugin is valid. */ function validatePluginConfig(pluginConfig) {
    const validRequiredProps = [
        'name'
    ];
    const optionalPropFns = [
        'onInstall',
        'onCreateFieldResolver',
        'onCreateFieldSubscribe',
        'onBeforeBuild',
        'onMissingType',
        'onAfterBuild',
        'onObjectDefinition',
        'onAddOutputField',
        'onAddInputField',
        'onAddArg',
        'onInputObjectDefinition'
    ];
    const validOptionalProps = [
        'description',
        'fieldDefTypes',
        'inputFieldDefTypes',
        'objectTypeDefTypes',
        'inputObjectTypeDefTypes',
        'argTypeDefTypes',
        ...optionalPropFns
    ];
    const validProps = [
        ...validRequiredProps,
        ...validOptionalProps
    ];
    const givenProps = Object.keys(pluginConfig);
    const printProps = (props)=>{
        return [
            ...props
        ].join(', ');
    };
    const [missingRequiredProps, , ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["venn"])(validRequiredProps, givenProps);
    if (missingRequiredProps.size > 0) {
        throw new Error(`Plugin "${pluginConfig.name}" is missing required properties: ${printProps(missingRequiredProps)}`);
    }
    const nameType = typeof pluginConfig.name;
    if (nameType !== 'string') {
        throw new Error(`Plugin "${pluginConfig.name}" is giving an invalid value for property name: expected "string" type, got ${nameType} type`);
    }
    if (pluginConfig.name === '') {
        throw new Error(`Plugin "${pluginConfig.name}" is giving an invalid value for property name: empty string`);
    }
    const [, , invalidGivenProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["venn"])(validProps, givenProps);
    if (invalidGivenProps.size > 0) {
        console.error(new Error(`Plugin "${pluginConfig.name}" is giving unexpected properties: ${printProps(invalidGivenProps)}`));
    }
    optionalPropFns.forEach((fnName)=>{
        const fnType = typeof pluginConfig[fnName];
        if (fnType !== 'function' && fnType !== 'undefined') {
            console.error(new Error(`Plugin "${pluginConfig.name}" is giving an invalid value for ${fnName} hook: expected "function" type, got ${fnType} type`));
        }
    });
} //# sourceMappingURL=plugin.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicMethod.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicInputMethodDef",
    ()=>DynamicInputMethodDef,
    "DynamicOutputMethodDef",
    ()=>DynamicOutputMethodDef,
    "dynamicInputMethod",
    ()=>dynamicInputMethod,
    "dynamicOutputMethod",
    ()=>dynamicOutputMethod
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
class DynamicInputMethodDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(DynamicInputMethodDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].DynamicInput);
class DynamicOutputMethodDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(DynamicOutputMethodDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].DynamicOutputMethod);
function dynamicOutputMethod(config) {
    return new DynamicOutputMethodDef(config.name, config);
}
function dynamicInputMethod(config) {
    return new DynamicInputMethodDef(config.name, config);
} //# sourceMappingURL=dynamicMethod.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/connectionPlugin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackwardOnlyStrictArgs",
    ()=>BackwardOnlyStrictArgs,
    "BackwardPaginateArgs",
    ()=>BackwardPaginateArgs,
    "ForwardOnlyStrictArgs",
    ()=>ForwardOnlyStrictArgs,
    "ForwardPaginateArgs",
    ()=>ForwardPaginateArgs,
    "connectionPlugin",
    ()=>connectionPlugin,
    "makeResolveFn",
    ()=>makeResolveFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/execute.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicMethod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
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
const ForwardPaginateArgs = {
    first: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intArg"])({
        description: 'Returns the first n elements from the list.'
    })),
    after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"])({
        description: 'Returns the elements in the list that come after the specified cursor'
    }))
};
const ForwardOnlyStrictArgs = Object.assign(Object.assign({}, ForwardPaginateArgs), {
    first: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intArg"])({
        description: 'Returns the first n elements from the list.'
    }))
});
const BackwardPaginateArgs = {
    last: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intArg"])({
        description: 'Returns the last n elements from the list.'
    })),
    before: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"])({
        description: 'Returns the elements in the list that come before the specified cursor'
    }))
};
const BackwardOnlyStrictArgs = Object.assign(Object.assign({}, BackwardPaginateArgs), {
    last: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intArg"])({
        description: 'Returns the last n elements from the list.'
    }))
});
function base64Encode(str) {
    return Buffer.from(str, 'utf8').toString('base64');
}
function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('utf8');
}
const connectionPlugin = (connectionPluginConfig)=>{
    var _a;
    const pluginConfig = Object.assign({}, connectionPluginConfig);
    // Define the plugin with the appropriate configuration.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"])({
        name: 'ConnectionPlugin',
        fieldDefTypes: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTypingImport"])({
                module: (_a = connectionPluginConfig === null || connectionPluginConfig === void 0 ? void 0 : connectionPluginConfig.nexusSchemaImportId) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOwnPackage"])().name,
                bindings: [
                    'core',
                    'connectionPluginCore'
                ]
            })
        ],
        // Defines the field added to the definition block:
        // t.connectionField('users', {
        //   type: User
        // })
        onInstall (b) {
            let dynamicConfig = [];
            const { additionalArgs = {}, extendConnection: pluginExtendConnection, extendEdge: pluginExtendEdge, includeNodesField = false, nexusFieldName = 'connectionField' } = pluginConfig;
            // If to add fields to every connection, we require the resolver be defined on the
            // field definition, unless fromResolve: true is passed in the config
            if (pluginExtendConnection) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(pluginExtendConnection, (val, key)=>{
                    dynamicConfig.push(`${key}${val.requireResolver === false ? '?:' : ':'} connectionPluginCore.ConnectionFieldResolver<TypeName, FieldName, "${key}">`);
                });
            }
            if (pluginExtendEdge) {
                const edgeFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(pluginExtendEdge, (val, key)=>`${key}${val.requireResolver === false ? '?:' : ':'} connectionPluginCore.EdgeFieldResolver<TypeName, FieldName, "${key}">`);
                dynamicConfig.push(`edgeFields: { ${edgeFields.join(', ')} }`);
            }
            let printedDynamicConfig = '';
            if (dynamicConfig.length > 0) {
                printedDynamicConfig = ` & { ${dynamicConfig.join(', ')} }`;
            }
            // Add the t.connectionField (or something else if we've changed the name)
            b.addType((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicOutputMethod"])({
                name: nexusFieldName,
                typeDescription: `
            Adds a Relay-style connection to the type, with numerous options for configuration

            @see https://nexusjs.org/docs/plugins/connection
          `,
                typeDefinition: `<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>${printedDynamicConfig}
    ): void`,
                factory ({ typeName: parentTypeName, typeDef: t, args: factoryArgs, stage, builder, wrapping }) {
                    var _a, _b;
                    const [fieldName, fieldConfig] = factoryArgs;
                    const targetType = fieldConfig.type;
                    /* istanbul ignore if */ if (wrapping === null || wrapping === void 0 ? void 0 : wrapping.includes('List')) {
                        throw new Error(`Cannot chain .list with connectionField (on ${parentTypeName}.${fieldName})`);
                    }
                    const { targetTypeName, connectionName, edgeName } = getTypeNames(fieldName, parentTypeName, fieldConfig, pluginConfig);
                    if (stage === 'build') {
                        assertCorrectConfig(parentTypeName, fieldName, pluginConfig, fieldConfig);
                    }
                    // Add the "Connection" type to the schema if it doesn't exist already
                    if (!b.hasType(connectionName)) {
                        b.addType((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
                            name: connectionName,
                            definition (t2) {
                                t2.list.field('edges', {
                                    type: edgeName,
                                    description: `https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types`
                                });
                                t2.nonNull.field('pageInfo', {
                                    type: 'PageInfo',
                                    description: `https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo`
                                });
                                if (includeNodesField) {
                                    t2.list.field('nodes', {
                                        type: targetType,
                                        description: `Flattened list of ${targetTypeName} type`
                                    });
                                }
                                if (pluginExtendConnection) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(pluginExtendConnection, (extensionFieldConfig, extensionFieldName)=>{
                                        t2.field(extensionFieldName, extensionFieldConfig);
                                    });
                                }
                                provideSourceAndArgs(t2, ()=>{
                                    if (fieldConfig.extendConnection instanceof Function) {
                                        fieldConfig.extendConnection(t2);
                                    }
                                });
                            },
                            nonNullDefaults: (_a = fieldConfig.nonNullDefaults) !== null && _a !== void 0 ? _a : pluginConfig.nonNullDefaults
                        }));
                    }
                    // Add the "Edge" type to the schema if it doesn't exist already
                    if (!b.hasType(edgeName)) {
                        b.addType((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
                            name: edgeName,
                            definition (t2) {
                                t2.field('cursor', {
                                    type: cursorType !== null && cursorType !== void 0 ? cursorType : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('String'),
                                    description: 'https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor'
                                });
                                t2.field('node', {
                                    type: targetType,
                                    description: 'https://facebook.github.io/relay/graphql/connections.htm#sec-Node'
                                });
                                if (pluginExtendEdge) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(pluginExtendEdge, (val, key)=>{
                                        t2.field(key, val);
                                    });
                                }
                                provideArgs(t2, ()=>{
                                    if (fieldConfig.extendEdge instanceof Function) {
                                        fieldConfig.extendEdge(t2);
                                    }
                                });
                            },
                            nonNullDefaults: (_b = fieldConfig.nonNullDefaults) !== null && _b !== void 0 ? _b : pluginConfig.nonNullDefaults
                        }));
                    }
                    // Add the "PageInfo" type to the schema if it doesn't exist already
                    if (!b.hasType('PageInfo')) {
                        b.addType((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
                            name: 'PageInfo',
                            description: 'PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo',
                            definition (t2) {
                                t2.nonNull.field('hasNextPage', {
                                    type: 'Boolean',
                                    description: `Used to indicate whether more edges exist following the set defined by the clients arguments.`
                                });
                                t2.nonNull.field('hasPreviousPage', {
                                    type: 'Boolean',
                                    description: `Used to indicate whether more edges exist prior to the set defined by the clients arguments.`
                                });
                                t2.nullable.field('startCursor', {
                                    type: 'String',
                                    description: `The cursor corresponding to the first nodes in edges. Null if the connection is empty.`
                                });
                                t2.nullable.field('endCursor', {
                                    type: 'String',
                                    description: `The cursor corresponding to the last nodes in edges. Null if the connection is empty.`
                                });
                            }
                        }));
                    }
                    const { disableBackwardPagination, disableForwardPagination, validateArgs = defaultValidateArgs, strictArgs = true, cursorType } = Object.assign(Object.assign({}, pluginConfig), fieldConfig);
                    let specArgs = {};
                    if (disableForwardPagination !== true && disableBackwardPagination !== true) {
                        specArgs = Object.assign(Object.assign({}, ForwardPaginateArgs), BackwardPaginateArgs);
                    } else if (disableForwardPagination !== true) {
                        specArgs = strictArgs ? Object.assign({}, ForwardOnlyStrictArgs) : Object.assign({}, ForwardPaginateArgs);
                    } else if (disableBackwardPagination !== true) {
                        specArgs = strictArgs ? Object.assign({}, BackwardOnlyStrictArgs) : Object.assign({}, BackwardPaginateArgs);
                    }
                    // If we have additional args,
                    let fieldAdditionalArgs = {};
                    if (fieldConfig.additionalArgs) {
                        if (additionalArgs && fieldConfig.inheritAdditionalArgs) {
                            fieldAdditionalArgs = Object.assign(Object.assign({}, additionalArgs), fieldConfig.additionalArgs);
                        } else {
                            fieldAdditionalArgs = Object.assign({}, fieldConfig.additionalArgs);
                        }
                    } else if (additionalArgs) {
                        fieldAdditionalArgs = Object.assign({}, additionalArgs);
                    }
                    const fieldArgs = Object.assign(Object.assign({}, fieldAdditionalArgs), specArgs);
                    let resolveFn;
                    if (fieldConfig.resolve) {
                        if (includeNodesField) {
                            resolveFn = (root, args, ctx, info)=>{
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(fieldConfig.resolve(root, args, ctx, info), (val)=>{
                                    if (val && val.nodes === undefined) {
                                        return withArgs(args, Object.assign({
                                            get nodes () {
                                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(val.edges, (edges)=>edges.map((edge)=>edge.node));
                                            }
                                        }, val));
                                    }
                                    return withArgs(args, Object.assign({}, val));
                                });
                            };
                        } else {
                            resolveFn = fieldConfig.resolve;
                        }
                    } else {
                        resolveFn = makeResolveFn(pluginConfig, fieldConfig);
                    }
                    let wrappedConnectionName = connectionName;
                    if (wrapping) {
                        if (typeof fieldConfig.nullable === 'boolean') {
                            throw new Error('[connectionPlugin]: You cannot chain .null/.nonNull and also set the nullable in the connectionField definition.');
                        }
                        wrappedConnectionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyNexusWrapping"])(connectionName, wrapping);
                    } else {
                        if (fieldConfig.nullable === true) {
                            wrappedConnectionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])(wrappedConnectionName);
                        } else if (fieldConfig.nullable === false) {
                            wrappedConnectionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])(wrappedConnectionName);
                        }
                    }
                    // Add the field to the type.
                    t.field(fieldName, Object.assign(Object.assign({}, nonConnectionFieldProps(fieldConfig)), {
                        args: fieldArgs,
                        type: wrappedConnectionName,
                        resolve (root, args, ctx, info) {
                            // TODO(2.0): Maybe switch the arguments around here to be consistent w/ resolver (breaking change)?
                            validateArgs(args, info, root, ctx);
                            return resolveFn(root, args, ctx, info);
                        }
                    }));
                }
            }));
        }
    });
};
// Extract all of the non-connection related field config we may want to apply for plugin purposes
function nonConnectionFieldProps(fieldConfig) {
    const { additionalArgs, cursorFromNode, disableBackwardPagination, disableForwardPagination, extendConnection, extendEdge, inheritAdditionalArgs, nodes, pageInfoFromNodes, resolve, type, validateArgs, strictArgs, nullable } = fieldConfig, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(fieldConfig, [
        "additionalArgs",
        "cursorFromNode",
        "disableBackwardPagination",
        "disableForwardPagination",
        "extendConnection",
        "extendEdge",
        "inheritAdditionalArgs",
        "nodes",
        "pageInfoFromNodes",
        "resolve",
        "type",
        "validateArgs",
        "strictArgs",
        "nullable"
    ]);
    return rest;
}
function makeResolveFn(pluginConfig, fieldConfig) {
    const mergedConfig = Object.assign(Object.assign({}, pluginConfig), fieldConfig);
    return (root, args, ctx, info)=>{
        const { nodes: nodesResolve } = fieldConfig;
        const { decodeCursor = base64Decode, encodeCursor = base64Encode } = pluginConfig;
        const { pageInfoFromNodes = defaultPageInfoFromNodes, cursorFromNode = defaultCursorFromNode } = mergedConfig;
        if (!nodesResolve) {
            return null;
        }
        const formattedArgs = Object.assign({}, args);
        if (args.before) {
            formattedArgs.before = decodeCursor(args.before).replace(CURSOR_PREFIX, '');
        }
        if (args.after) {
            formattedArgs.after = decodeCursor(args.after).replace(CURSOR_PREFIX, '');
        }
        if (args.last && !args.before && cursorFromNode === defaultCursorFromNode) {
            throw new Error(`Cannot paginate backward without a "before" cursor by default.`);
        }
        // Local variable to cache the execution of fetching the nodes,
        // which is needed for all fields.
        let cachedNodes;
        let cachedEdges;
        let hasPromise = false;
        // Get all the nodes, before any pagination slicing
        const resolveAllNodes = ()=>{
            var _a;
            if (cachedNodes !== undefined) {
                return cachedNodes;
            }
            cachedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])((_a = nodesResolve(root, formattedArgs, ctx, info)) !== null && _a !== void 0 ? _a : null, (allNodes)=>{
                return allNodes ? Array.from(allNodes) : allNodes;
            });
            return cachedNodes;
        };
        const resolveEdgesAndNodes = ()=>{
            if (cachedEdges !== undefined) {
                return cachedEdges;
            }
            cachedEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(resolveAllNodes(), (allNodes)=>{
                if (!allNodes) {
                    const arrPath = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"])(info.path));
                    console.warn(`You resolved null/undefined from nodes() at path ${arrPath}, this is likely an error. Return an empty array to suppress this warning.`);
                    return {
                        edges: [],
                        nodes: []
                    };
                }
                const resolvedEdgeList = [];
                const resolvedNodeList = [];
                iterateNodes(allNodes, args, (maybeNode, i)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromiseLike"])(maybeNode)) {
                        hasPromise = true;
                        resolvedNodeList.push(maybeNode);
                        resolvedEdgeList.push(maybeNode.then((node)=>{
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(cursorFromNode(maybeNode, formattedArgs, ctx, info, {
                                index: i,
                                nodes: allNodes
                            }), (rawCursor)=>wrapEdge(pluginConfig, fieldConfig, formattedArgs, {
                                    cursor: encodeCursor(rawCursor),
                                    node
                                }));
                        }));
                    } else {
                        resolvedNodeList.push(maybeNode);
                        resolvedEdgeList.push(wrapEdge(pluginConfig, fieldConfig, formattedArgs, {
                            node: maybeNode,
                            cursor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(cursorFromNode(maybeNode, formattedArgs, ctx, info, {
                                index: i,
                                nodes: allNodes
                            }), (rawCursor)=>encodeCursor(rawCursor))
                        }));
                    }
                });
                if (hasPromise) {
                    return Promise.all([
                        Promise.all(resolvedEdgeList),
                        Promise.all(resolvedNodeList)
                    ]).then(([edges, nodes])=>({
                            edges,
                            nodes
                        }));
                }
                return {
                    nodes: resolvedNodeList,
                    // todo find type-safe way of doing this
                    edges: resolvedEdgeList
                };
            });
            return cachedEdges;
        };
        const resolvePageInfo = ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(resolveAllNodes(), (allNodes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(resolveEdgesAndNodes(), ({ edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(allNodes ? pageInfoFromNodes(allNodes, args, ctx, info) : {
                        hasNextPage: false,
                        hasPreviousPage: false
                    }, (basePageInfo)=>{
                        var _a, _b, _c;
                        return Object.assign(Object.assign({}, basePageInfo), {
                            startCursor: ((_a = edges === null || edges === void 0 ? void 0 : edges[0]) === null || _a === void 0 ? void 0 : _a.cursor) ? edges[0].cursor : null,
                            endCursor: (_c = (_b = edges === null || edges === void 0 ? void 0 : edges[edges.length - 1]) === null || _b === void 0 ? void 0 : _b.cursor) !== null && _c !== void 0 ? _c : null
                        });
                    })));
        };
        const connectionResult = withSource(root, formattedArgs, {
            get nodes () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(resolveEdgesAndNodes(), (o)=>o.nodes);
            },
            get edges () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"])(resolveEdgesAndNodes(), (o)=>o.edges);
            },
            get pageInfo () {
                return resolvePageInfo();
            }
        });
        if (pluginConfig.extendConnection) {
            Object.keys(pluginConfig.extendConnection).forEach((connectionField)=>{
                var _a;
                const resolve = (_a = fieldConfig[connectionField]) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultFieldResolver"];
                Object.defineProperty(connectionResult, connectionField, {
                    value: (args, ctx, info)=>{
                        return resolve(root, Object.assign(Object.assign({}, formattedArgs), args), ctx, info);
                    }
                });
            });
        }
        return connectionResult;
    };
}
function wrapEdge(pluginConfig, fieldConfig, formattedArgs, edgeParentType) {
    const edge = withArgs(formattedArgs, edgeParentType);
    if (pluginConfig.extendEdge) {
        Object.keys(pluginConfig.extendEdge).forEach((edgeField)=>{
            var _a, _b;
            const resolve = (_b = (_a = fieldConfig.edgeFields) === null || _a === void 0 ? void 0 : _a[edgeField]) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultFieldResolver"];
            Object.defineProperty(edge, edgeField, {
                value: (args, ctx, info)=>{
                    return resolve(edge, Object.assign(Object.assign({}, formattedArgs), args), ctx, info);
                }
            });
        });
    }
    return edge;
}
/**
 * Adds __connectionArgs to the object representing the Connection type, so it can be accessed by other fields
 * in the top level
 *
 * @param args
 * @param connectionParentType
 */ function withArgs(args, connectionParentType) {
    Object.defineProperty(connectionParentType, '__connectionArgs', {
        value: args,
        enumerable: false
    });
    return connectionParentType;
}
/**
 * Adds __connectionSource to the object representing the Connection type, so it can be accessed by other
 * fields in the top level
 *
 * @param args
 * @param connectionParentType
 */ function withSource(source, args, connectionParentType) {
    Object.defineProperty(connectionParentType, '__connectionSource', {
        value: source,
        enumerable: false
    });
    return withArgs(args, connectionParentType);
}
/** Takes __connectionArgs from the source object and merges with the args provided by the */ function mergeArgs(obj, fieldArgs) {
    return Object.assign(Object.assign({}, obj.__connectionArgs), fieldArgs);
}
/**
 * Takes a "builder", and a function which takes a builder, and ensures that all fields defined within that
 * function invocation are provided the __connectionArgs defined by the connection
 */ function provideArgs(block, fn) {
    const fieldDef = block.field;
    block.field = function(...args) {
        let config = args.length === 2 ? Object.assign({
            name: args[0]
        }, args[1]) : args[0];
        const { resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultFieldResolver"] } = config;
        fieldDef.call(this, Object.assign(Object.assign({}, config), {
            resolve (root, args, ctx, info) {
                return resolve(root, mergeArgs(root, args), ctx, info);
            }
        }));
    };
    fn();
    block.field = fieldDef;
}
function provideSourceAndArgs(block, fn) {
    const fieldDef = block.field;
    block.field = function(...args) {
        let config = args.length === 2 ? Object.assign({
            name: args[0]
        }, args[1]) : args[0];
        const { resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultFieldResolver"] } = config;
        fieldDef.call(this, Object.assign(Object.assign({}, config), {
            resolve (root, args, ctx, info) {
                return resolve(root.__connectionSource, mergeArgs(root, args), ctx, info);
            }
        }));
    };
    fn();
    block.field = fieldDef;
}
function iterateNodes(nodes, args, cb) {
    // If we want the first N of an array of nodes, it's pretty straightforward.
    if (typeof args.first === 'number') {
        const len = Math.min(args.first, nodes.length);
        for(let i = 0; i < len; i++){
            cb(nodes[i], i);
        }
    } else if (typeof args.last === 'number') {
        const len = Math.min(args.last, nodes.length);
        for(let i = 0; i < len; i++){
            cb(nodes[i], i);
        }
    } else {
        // Only happens if we have a custom validateArgs that ignores first/last
        for(let i = 0; i < nodes.length; i++){
            cb(nodes[i], i);
        }
    }
}
function defaultPageInfoFromNodes(nodes, args) {
    return {
        hasNextPage: defaultHasNextPage(nodes, args),
        hasPreviousPage: defaultHasPreviousPage(nodes, args)
    };
}
function defaultHasNextPage(nodes, args) {
    // If we're paginating forward, and we don't have an "after", we'll assume that we don't have
    // a previous page, otherwise we will assume we have one, unless the after cursor === "0".
    if (typeof args.first === 'number') {
        return nodes.length > args.first;
    }
    // If we're paginating backward, and there are as many results as we asked for, then we'll assume
    // that we have a previous page
    if (typeof args.last === 'number') {
        if (args.before && args.before !== '0') {
            return true;
        }
        return false;
    }
    /* istanbul ignore next */ throw new Error('Unreachable');
}
/** A sensible default for determining "previous page". */ function defaultHasPreviousPage(nodes, args) {
    // If we're paginating forward, and we don't have an "after", we'll assume that we don't have
    // a previous page, otherwise we will assume we have one, unless the after cursor === "0".
    if (typeof args.first === 'number') {
        if (args.after && args.after !== '0') {
            return true;
        }
        return false;
    }
    // If we're paginating backward, and there are as many results as we asked for, then we'll assume
    // that we have a previous page
    if (typeof args.last === 'number') {
        return nodes.length >= args.last;
    }
    /* istanbul ignore next */ throw new Error('Unreachable');
}
const CURSOR_PREFIX = 'cursor:';
// Assumes we're only paginating in one direction.
function defaultCursorFromNode(node, args, ctx, info, { index, nodes }) {
    let cursorIndex = index;
    // If we're paginating forward, assume we're incrementing from the offset provided via "after",
    // e.g. [0...20] (first: 5, after: "cursor:5") -> [cursor:6, cursor:7, cursor:8, cursor:9, cursor: 10]
    if (typeof args.first === 'number') {
        if (args.after) {
            const offset = parseInt(args.after, 10);
            cursorIndex = offset + index + 1;
        }
    }
    // If we're paginating backward, assume we're working backward from the assumed length
    // e.g. [0...20] (last: 5, before: "cursor:20") -> [cursor:15, cursor:16, cursor:17, cursor:18, cursor:19]
    if (typeof args.last === 'number') {
        if (args.before) {
            const offset = parseInt(args.before, 10);
            const len = Math.min(nodes.length, args.last);
            cursorIndex = offset - len + index;
        } else {
            /* istanbul ignore next */ throw new Error('Unreachable');
        }
    }
    return `${CURSOR_PREFIX}${cursorIndex}`;
}
const getTypeNames = (fieldName, parentTypeName, fieldConfig, pluginConfig)=>{
    const targetTypeName = typeof fieldConfig.type === 'string' ? fieldConfig.type : fieldConfig.type.name;
    // If we have changed the config specific to this field, on either the connection,
    // edge, or page info, then we need a custom type for the connection & edge.
    let connectionName;
    if (fieldConfig.getConnectionName) {
        connectionName = fieldConfig.getConnectionName(fieldName, parentTypeName);
    } else if (pluginConfig.getConnectionName) {
        connectionName = pluginConfig.getConnectionName(fieldName, parentTypeName);
    } else if (isConnectionFieldExtended(fieldConfig)) {
        connectionName = `${parentTypeName}${upperFirst(fieldName)}_Connection`;
    } else {
        connectionName = `${pluginConfig.typePrefix || ''}${targetTypeName}Connection`;
    }
    // If we have modified the "edge" at all, then we need
    let edgeName;
    if (fieldConfig.getEdgeName) {
        edgeName = fieldConfig.getEdgeName(fieldName, parentTypeName);
    } else if (pluginConfig.getEdgeName) {
        edgeName = pluginConfig.getEdgeName(fieldName, parentTypeName);
    } else if (isEdgeFieldExtended(fieldConfig)) {
        edgeName = `${parentTypeName}${upperFirst(fieldName)}_Edge`;
    } else {
        edgeName = `${pluginConfig.typePrefix || ''}${targetTypeName}Edge`;
    }
    return {
        edgeName,
        targetTypeName,
        connectionName
    };
};
const isConnectionFieldExtended = (fieldConfig)=>{
    if (fieldConfig.extendConnection || isEdgeFieldExtended(fieldConfig)) {
        return true;
    }
    return false;
};
const isEdgeFieldExtended = (fieldConfig)=>{
    if (fieldConfig.extendEdge || fieldConfig.cursorType) {
        return true;
    }
    return false;
};
const upperFirst = (fieldName)=>{
    return fieldName.slice(0, 1).toUpperCase().concat(fieldName.slice(1));
};
// Add some sanity checking beyond the normal type checks.
const assertCorrectConfig = (typeName, fieldName, pluginConfig, fieldConfig)=>{
    if (typeof fieldConfig.nodes !== 'function' && typeof fieldConfig.resolve !== 'function') {
        console.error(new Error(`Nexus Connection Plugin: Missing nodes or resolve property for ${typeName}.${fieldName}`));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(pluginConfig.extendConnection || {}, (val, key)=>{
        if (typeof fieldConfig[key] !== 'function' && val.requireResolver !== false) {
            console.error(new Error(`Nexus Connection Plugin: Missing ${key} resolver property for ${typeName}.${fieldName}. Set requireResolver to "false" on the field config if you do not need a resolver.`));
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(pluginConfig.extendEdge || {}, (val, key)=>{
        var _a;
        if (typeof ((_a = fieldConfig.edgeFields) === null || _a === void 0 ? void 0 : _a[key]) !== 'function' && val.requireResolver !== false) {
            console.error(new Error(`Nexus Connection Plugin: Missing edgeFields.${key} resolver property for ${typeName}.${fieldName}. Set requireResolver to "false" on the edge field config if you do not need a resolver.`));
        }
    });
};
function defaultValidateArgs(args = {}, info) {
    if (!(args.first || args.first === 0) && !(args.last || args.last === 0)) {
        throw new Error(`The ${info.parentType}.${info.fieldName} connection field requires a "first" or "last" argument`);
    }
    if (args.first && args.last) {
        throw new Error(`The ${info.parentType}.${info.fieldName} connection field requires a "first" or "last" argument, not both`);
    }
    if (args.first && args.before) {
        throw new Error(`The ${info.parentType}.${info.fieldName} connection field does not allow a "before" argument with "first"`);
    }
    if (args.last && args.after) {
        throw new Error(`The ${info.parentType}.${info.fieldName} connection field does not allow a "last" argument with "after"`);
    }
}
// Provided for use if you create a custom implementation and want to call the original.
connectionPlugin.defaultCursorFromNode = defaultCursorFromNode;
connectionPlugin.defaultValidateArgs = defaultValidateArgs;
connectionPlugin.defaultHasPreviousPage = defaultHasPreviousPage;
connectionPlugin.defaultHasNextPage = defaultHasNextPage;
connectionPlugin.base64Encode = base64Encode;
connectionPlugin.base64Decode = base64Decode;
connectionPlugin.CURSOR_PREFIX = CURSOR_PREFIX; //# sourceMappingURL=connectionPlugin.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/fieldAuthorizePlugin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultFormatError",
    ()=>defaultFormatError,
    "fieldAuthorizePlugin",
    ()=>fieldAuthorizePlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
const FieldauthorizeResolverImport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTypingImport"])({
    module: 'nexus/dist/plugins/fieldAuthorizePlugin',
    bindings: [
        'FieldAuthorizeResolver'
    ]
});
const fieldDefTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"])({
    optional: true,
    name: 'authorize',
    description: `
    Authorization for an individual field. Returning "true"
    or "Promise<true>" means the field can be accessed.
    Returning "false" or "Promise<false>" will respond
    with a "Not Authorized" error for the field. 
    Returning or throwing an error will also prevent the 
    resolver from executing.
  `,
    type: 'FieldAuthorizeResolver<TypeName, FieldName>',
    imports: [
        FieldauthorizeResolverImport
    ]
});
const defaultFormatError = ({ error })=>{
    const err = new Error('Not authorized');
    err.originalError = error;
    return err;
};
const fieldAuthorizePlugin = (authConfig = {})=>{
    const { formatError = defaultFormatError } = authConfig;
    const ensureError = (root, args, ctx, info)=>(error)=>{
            const finalErr = formatError({
                error,
                root,
                args,
                ctx,
                info
            });
            if (finalErr instanceof Error) {
                throw finalErr;
            }
            console.error(`Non-Error value ${finalErr} returned from custom formatError in authorize plugin`);
            throw new Error('Not authorized');
        };
    let hasWarned = false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"])({
        name: 'NexusAuthorize',
        description: 'The authorize plugin provides field-level authorization for a schema.',
        fieldDefTypes: fieldDefTypes,
        onCreateFieldResolver (config) {
            var _a, _b, _c;
            const authorize = (_b = (_a = config.fieldConfig.extensions) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.config.authorize;
            // If the field doesn't have an authorize field, don't worry about wrapping the resolver
            if (authorize == null) {
                return;
            }
            // If it does have this field, but it's not a function, it's wrong - let's provide a warning
            if (typeof authorize !== 'function') {
                console.error(new Error(`The authorize property provided to ${config.fieldConfig.name} with type ${config.fieldConfig.type} should be a function, saw ${typeof authorize}`));
                return;
            }
            // If they have it, but didn't explicitly specify a plugins array, warn them.
            if (!((_c = config.schemaConfig.plugins) === null || _c === void 0 ? void 0 : _c.find((p)=>p.config.name === 'NexusAuthorize'))) {
                if (!hasWarned) {
                    console.warn('The GraphQL Nexus "authorize" feature has been moved to a plugin, add [fieldAuthorizePlugin()] to your makeSchema plugin config to remove this warning.');
                    hasWarned = true;
                }
            }
            // The authorize wrapping resolver.
            return function(root, args, ctx, info, next) {
                let toComplete;
                try {
                    toComplete = authorize(root, args, ctx, info);
                } catch (e) {
                    toComplete = Promise.reject(e);
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"].completeValue(toComplete, (authResult)=>{
                    if (authResult === true) {
                        return next(root, args, ctx, info);
                    }
                    const finalFormatError = ensureError(root, args, ctx, info);
                    if (authResult instanceof Error) {
                        finalFormatError(authResult);
                    }
                    if (authResult === false) {
                        finalFormatError(new Error('Not authorized'));
                    }
                    const { fieldName, parentType: { name: parentTypeName } } = info;
                    finalFormatError(new Error(`Nexus authorize for ${parentTypeName}.${fieldName} Expected a boolean or Error, saw ${authResult}`));
                }, (err)=>{
                    ensureError(root, args, ctx, info)(err);
                });
            };
        }
    });
}; //# sourceMappingURL=fieldAuthorizePlugin.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/nullabilityGuardPlugin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nullabilityGuardPlugin",
    ()=>nullabilityGuardPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$iterall$40$1$2e$3$2e$0$2f$node_modules$2f$iterall$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/iterall@1.3.0/node_modules/iterall/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
;
;
const fieldDefTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"])({
    name: 'skipNullGuard',
    optional: true,
    type: 'boolean',
    description: `
    The nullability guard can be helpful, but is also a potentially expensive operation for lists.
    We need to iterate the entire list to check for null items to guard against. Set this to true
    to skip the null guard on a specific field if you know there's no potential for unsafe types.
  `
});
const nullabilityGuardPlugin = (pluginConfig)=>{
    const { shouldGuard = ("TURBOPACK compile-time value", "development") === 'production', fallbackValues = {}, onGuarded = (obj)=>{
        console.warn(`Nullability guard called for ${obj.info.parentType.name}.${obj.info.fieldName}`);
    } } = pluginConfig;
    const finalPluginConfig = {
        shouldGuard,
        onGuarded,
        fallbackValues
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"])({
        name: 'NullabilityGuard',
        description: 'If we have a nullable field, we want to guard against this being an issue in production.',
        fieldDefTypes,
        onCreateFieldResolver (config) {
            var _a, _b;
            if ((_b = (_a = config.fieldConfig.extensions) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.config.skipNullGuard) {
                return;
            }
            const { type } = config.fieldConfig;
            const { outerNonNull, hasListNonNull } = nonNullInfo(type);
            if (outerNonNull || hasListNonNull) {
                return (root, args, ctx, info, next)=>{
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"].completeValue(next(root, args, ctx, info), nonNullGuard(ctx, info, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type) ? type.ofType : type, config, finalPluginConfig, outerNonNull));
                };
            }
        },
        onAfterBuild (schema) {
            Object.keys(schema.getTypeMap()).forEach((typeName)=>{
                const type = schema.getType(typeName);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isScalarType"])(type)) {
                    if (fallbackValues[type.name]) {
                        return;
                    }
                    console.error(`No nullability guard was provided for Scalar ${type.name}. ` + `Provide one in the nullabilityGuard config to remove this warning.`);
                }
            });
            if (pluginConfig.fallbackValues) {
                Object.keys(pluginConfig.fallbackValues).forEach((name)=>{
                    const type = schema.getType(name);
                    if (!type) {
                        return console.error(`Unknown type ${name} provided in nullabilityGuard fallbackValues config.`);
                    }
                });
            }
        }
    });
};
const isNullish = (val)=>val === null || val === undefined || val !== val;
const nonNullGuard = (ctx, info, type, config, pluginConfig, outerNonNull)=>{
    const { onGuarded, fallbackValues, shouldGuard } = pluginConfig;
    const guardResult = (fallback)=>{
        onGuarded({
            ctx,
            info,
            type,
            fallback
        });
        return shouldGuard ? fallback : null;
    };
    return (val)=>{
        // If it's a list type, return [] if the value is null,
        // otherwise recurse into resolving the individual type.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isListType"])(type)) {
            if (isNullish(val)) {
                return outerNonNull ? guardResult([]) : null;
            }
            let hasPromise = false;
            const listMembers = [];
            const listCompleter = nonNullGuard(ctx, info, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type.ofType) ? type.ofType.ofType : type.ofType, config, pluginConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type.ofType));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$iterall$40$1$2e$3$2e$0$2f$node_modules$2f$iterall$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forEach"])(val, (item)=>{
                if (!hasPromise && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromiseLike"])(item)) {
                    hasPromise = true;
                }
                listMembers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"].completeValue(item, listCompleter));
            });
            return hasPromise ? Promise.all(listMembers) : listMembers;
        }
        if (!isNullish(val) || outerNonNull === false) {
            return val;
        }
        const typeName = type.name;
        const fallbackFn = fallbackValues[typeName];
        const fallbackValue = typeof fallbackFn === 'function' ? fallbackFn({
            type,
            info,
            ctx
        }) : null;
        if (!isNullish(fallbackValue)) {
            return guardResult(fallbackValue);
        }
        // If it's an object, just return an empty object and let the scalar fallbacks take care of the rest
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(type)) {
            return guardResult({});
        }
        // If it's an enum, return the first member
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumType"])(type)) {
            return guardResult(type.getValues()[0].value);
        }
        // If It's a union or interface, return the first type
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUnionType"])(type) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type)) {
            const possibleTypes = info.schema.getPossibleTypes(type);
            return guardResult({
                __typename: possibleTypes[0].name
            });
        }
        // Otherwise, fail?
        return val;
    };
};
const nonNullInfo = (type)=>{
    let outerNonNull = false;
    let hasListNonNull = false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type)) {
        outerNonNull = true;
        type = type.ofType;
    }
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(type)){
        type = type.ofType;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type)) {
            hasListNonNull = true;
        }
    }
    return {
        outerNonNull,
        hasListNonNull
    };
}; //# sourceMappingURL=nullabilityGuardPlugin.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/queryComplexityPlugin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryComplexityPlugin",
    ()=>queryComplexityPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
const QueryComplexityImport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTypingImport"])({
    module: 'nexus/dist/plugins/queryComplexityPlugin',
    bindings: [
        'QueryComplexity'
    ]
});
const fieldDefTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"])({
    optional: true,
    name: 'complexity',
    description: `
    The complexity for an individual field. Return a number
    or a function that returns a number to specify the
    complexity for this field.
  `,
    type: 'QueryComplexity<TypeName, FieldName>',
    imports: [
        QueryComplexityImport
    ]
});
const queryComplexityPlugin = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"])({
        name: 'query-complexity',
        description: `
      The query complexity plugin allows defining field-level complexity values that
      works with the graphql-query-complexity library.
    `,
        fieldDefTypes,
        onCreateFieldResolver (config) {
            var _a, _b, _c, _d;
            // Look for complexity property defined in the nexus config
            const complexity = (_b = (_a = config.fieldConfig.extensions) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.config.complexity;
            // Skip if field doesn't have complexity property
            if (complexity == null) {
                return;
            }
            // If the complexity is not a number or a function that returns a number, provide a warning
            if (typeof complexity !== 'number' && typeof complexity !== 'function') {
                const parentName = config.parentTypeConfig.name;
                const fieldName = (_d = (_c = config.fieldConfig.extensions) === null || _c === void 0 ? void 0 : _c.nexus) === null || _d === void 0 ? void 0 : _d.config.name;
                console.error(new Error(`The complexity property provided to ${parentName}.${fieldName} should be a number or a function that returns a number, saw ${typeof complexity}`));
                return;
            }
            // Mutate the field config's extensions property with new complexity field.
            // graphql-query-complexity will look for this property to estimate complexity
            config.fieldConfig.extensions = Object.assign(Object.assign({}, config.fieldConfig.extensions), {
                complexity
            });
            return undefined;
        }
    });
}; //# sourceMappingURL=queryComplexityPlugin.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/declarativeWrappingPlugin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "declarativeWrappingPlugin",
    ()=>declarativeWrappingPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/messages.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const DeclarativeWrapping = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"])({
        name: 'nullable',
        type: 'boolean',
        optional: true,
        description: `\
Whether the type can be null
@default (depends on whether nullability is configured in type or schema)
@see declarativeWrappingPlugin
`
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"])({
        name: 'list',
        type: 'true | boolean[]',
        optional: true,
        description: `\
Whether the type is list of values, or just a single value.

If list is true, we assume the type is a list. If list is an array,
we'll assume that it's a list with the depth. The boolean indicates whether
the type is required (non-null), where true = nonNull, false = nullable.

@see declarativeWrappingPlugin
`
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"])({
        name: 'required',
        type: 'boolean',
        optional: true,
        description: `\
Whether the type should be non null, \`required: true\` = \`nullable: false\`
@default (depends on whether nullability is configured in type or schema)

@see declarativeWrappingPlugin
`
    })
];
const declarativeWrappingPlugin = (config = {})=>{
    let hasWarned = false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"])({
        name: 'declarativeWrapping',
        fieldDefTypes: config.disable ? undefined : DeclarativeWrapping,
        argTypeDefTypes: config.disable ? undefined : DeclarativeWrapping,
        inputFieldDefTypes: config.disable ? undefined : DeclarativeWrapping,
        description: 'Provides a declarative nullable/list API, available by default pre-0.19',
        onAddOutputField (field) {
            return Object.assign(Object.assign({}, field), {
                type: maybeWrapType(field, config)
            });
        },
        onAddInputField (field) {
            return Object.assign(Object.assign({}, field), {
                type: maybeWrapType(field, config)
            });
        },
        onAddArg (arg) {
            return Object.assign(Object.assign({}, arg), {
                type: maybeWrapType(arg, config)
            });
        }
    });
    //TURBOPACK unreachable
    ;
    function maybeWrapType(field, config) {
        if (field.list == null && field.nullable == null && field.required == null) {
            return field.type;
        }
        const used = [];
        if (field.list != null) {
            used.push('list');
        }
        if (field.nullable != null) {
            used.push('nullable');
        }
        if (field.required != null) {
            used.push('required');
        }
        if (config.disable || config.shouldWarn) {
            const d = field;
            let location = d.configFor === 'arg' ? `'${d.parentType}.${d.fieldName}' field's '${d.argName}' argument` : `'${d.parentType}.${d.type}' field`;
            if (config.disable) {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messages"].removedDeclarativeWrapping(location, used));
            } else {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                else {
                    console.warn(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messages"].removedDeclarativeWrapping(location, used));
                }
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"])(field.type) && (field.list != null || field.nullable != null || field.required != null)) {
            let errorStr = field.configFor === 'arg' ? `the arg '${field.argName}' of the field '${field.parentType}.${field.fieldName}'.` : `the field '${field.parentType}.${field.name}'.`;
            let usedProp = field.list != null ? 'list' : field.nullable != null ? 'nullable' : 'required';
            throw new Error(`[declarativeWrappingPlugin] It looks like you used \`${usedProp}\` and wrapped the type of ` + errorStr + ' You should only do one or the other');
        }
        let type = field.type;
        if (field.list === true) {
            if (field.nullable === false || field.required === true) {
                type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])(type);
            }
            type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])(type);
        } else if (Array.isArray(field.list)) {
            for (const isNonNull of field.list){
                if (isNonNull === true) {
                    type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])(type));
                } else {
                    type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])(type));
                }
            }
        }
        /* istanbul ignore if */ if (field.required != null && field.nullable != null) {
            let errorSuffix = field.configFor === 'arg' ? ` on ${field.parentType}.${field.fieldName} arg ${field.argName}` : ` on ${field.parentType}.${field.name}`;
            throw new Error(`Cannot set both required & nullable wrapping modifiers on ${errorSuffix}`);
        }
        if (field.nullable === true || field.required === false) {
            type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"])(type);
        } else if (field.nullable === false || field.required === true) {
            type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])(type);
        }
        return type;
    }
}; //# sourceMappingURL=declarativeWrappingPlugin.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$connectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/connectionPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/fieldAuthorizePlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$nullabilityGuardPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/nullabilityGuardPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$queryComplexityPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/queryComplexityPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$declarativeWrappingPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/declarativeWrappingPlugin.js [app-route] (ecmascript)"); //# sourceMappingURL=index.js.map
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
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusEnumTypeDef",
    ()=>NexusEnumTypeDef,
    "enumType",
    ()=>enumType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
class NexusEnumTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
    /**
     * Wraps the current enum as an argument, useful if you're defining the enumType inline for an individual field.
     *
     * @example
     *   args: {
     *     sort: enumType(config).asArg({ default: 'someValue' })
     *   }
     */ asArg(cfg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"])(Object.assign(Object.assign({}, cfg), {
            type: this
        }));
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusEnumTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Enum);
function enumType(config) {
    return new NexusEnumTypeDef(config.name, config);
} //# sourceMappingURL=enumType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusInputObjectTypeDef",
    ()=>NexusInputObjectTypeDef,
    "inputObjectType",
    ()=>inputObjectType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
class NexusInputObjectTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
    /**
     * Shorthand for wrapping the current InputObject in an "arg", useful if you need to add a description.
     *
     * @example
     *   inputObject(config).asArg({
     *     description: 'Define sort the current field',
     *   })
     */ asArg(cfg) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"])(Object.assign(Object.assign({}, cfg), {
            type: this
        }));
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusInputObjectTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].InputObject);
function inputObjectType(config) {
    return new NexusInputObjectTypeDef(config.name, config);
} //# sourceMappingURL=inputObjectType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/scalarType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusScalarTypeDef",
    ()=>NexusScalarTypeDef,
    "asNexusMethod",
    ()=>asNexusMethod,
    "scalarType",
    ()=>scalarType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
;
class NexusScalarTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusScalarTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].Scalar);
function scalarType(options) {
    return new NexusScalarTypeDef(options.name, options);
}
function asNexusMethod(namedType, methodName, sourceType) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decorateType"])(namedType, {
        asNexusMethod: methodName,
        sourceType
    });
} //# sourceMappingURL=scalarType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/rebuildType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rebuildArgs",
    ()=>rebuildArgs,
    "rebuildEnumType",
    ()=>rebuildEnumType,
    "rebuildInputDefinition",
    ()=>rebuildInputDefinition,
    "rebuildInputObjectType",
    ()=>rebuildInputObjectType,
    "rebuildInterfaceType",
    ()=>rebuildInterfaceType,
    "rebuildNamedType",
    ()=>rebuildNamedType,
    "rebuildObjectType",
    ()=>rebuildObjectType,
    "rebuildOutputDefinition",
    ()=>rebuildOutputDefinition,
    "rebuildScalarType",
    ()=>rebuildScalarType,
    "rebuildUnionType",
    ()=>rebuildUnionType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/execute.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/scalarType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
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
function rebuildNamedType(type, config) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(type)) {
        return rebuildObjectType(type, config);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInputObjectType"])(type)) {
        return rebuildInputObjectType(type, config);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type)) {
        return rebuildInterfaceType(type, config);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUnionType"])(type)) {
        return rebuildUnionType(type, config);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isScalarType"])(type)) {
        return rebuildScalarType(type, config);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumType"])(type)) {
        return rebuildEnumType(type, config);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unreachable"](type);
}
function rebuildInputObjectType(type, config) {
    const { name, fields, description, extensions } = type.toConfig();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inputObjectType"])({
        name,
        description,
        definition: (t)=>{
            rebuildInputDefinition(name, t, fields, config);
        },
        extensions,
        nonNullDefaults: {
            output: false,
            input: false
        }
    });
}
function rebuildUnionType(type, config) {
    const { name, types, description, resolveType, extensions } = type.toConfig();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unionType"])({
        name,
        description,
        // @ts-ignore - todo, see why this is the case
        resolveType: resolveType !== null && resolveType !== void 0 ? resolveType : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultTypeResolver"],
        definition (t) {
            t.members(...types.map((o)=>{
                var _a;
                (_a = config.captureLeafType) === null || _a === void 0 ? void 0 : _a.call(config, o);
                return o.name;
            }));
        },
        extensions
    });
}
function rebuildScalarType(type, config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scalarType"])(Object.assign(Object.assign({}, type.toConfig()), {
        sourceType: config.sourceType,
        asNexusMethod: config.asNexusMethod
    }));
}
function rebuildEnumType(type, { sourceType, asNexusMethod }) {
    const _a = type.toConfig(), { name, values } = _a, config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "name",
        "values"
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumType"])(Object.assign(Object.assign({
        name
    }, config), {
        members: Object.entries(values).map(([valueName, config])=>{
            return Object.assign({
                name: valueName,
                deprecation: config.deprecationReason
            }, config);
        }),
        sourceType,
        asNexusMethod
    }));
}
function rebuildInterfaceType(type, config) {
    const { name, fields, description, interfaces, extensions, resolveType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["graphql15InterfaceConfig"])(type.toConfig());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interfaceType"])({
        name,
        description,
        // @ts-ignore - todo, see why this is the case
        resolveType: resolveType !== null && resolveType !== void 0 ? resolveType : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultTypeResolver"],
        definition: (t)=>{
            rebuildOutputDefinition(name, t, fields, interfaces, config);
        },
        nonNullDefaults: {
            output: false,
            input: false
        },
        extensions,
        sourceType: config.sourceType,
        asNexusMethod: config.asNexusMethod
    });
}
function rebuildObjectType(type, config) {
    const { name, fields, interfaces, description, extensions } = type.toConfig();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
        name,
        description,
        definition: (t)=>{
            rebuildOutputDefinition(name, t, fields, interfaces, config);
        },
        nonNullDefaults: {
            output: false,
            input: false
        },
        extensions,
        sourceType: config.sourceType,
        asNexusMethod: config.asNexusMethod
    });
}
function rebuildOutputDefinition(typeName, t, fields, interfaces, config) {
    var _a, _b, _c, _d;
    t.implements(...interfaces.map((i)=>{
        var _a;
        (_a = config.captureLeafType) === null || _a === void 0 ? void 0 : _a.call(config, i);
        return i.name;
    }));
    for (const [fieldName, fieldConfig] of Object.entries(fields)){
        if (((_a = config.skipFields) === null || _a === void 0 ? void 0 : _a[typeName]) && ((_b = config.skipFields) === null || _b === void 0 ? void 0 : _b[typeName].includes(fieldName))) {
            continue;
        }
        const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"])(fieldConfig.type);
        (_c = config.captureLeafType) === null || _c === void 0 ? void 0 : _c.call(config, namedType);
        t.field(fieldName, {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyNexusWrapping"])(namedType.name, wrapping),
            description: fieldConfig.description,
            deprecation: fieldConfig.deprecationReason,
            extensions: fieldConfig.extensions,
            args: rebuildArgs(typeName, fieldName, (_d = fieldConfig.args) !== null && _d !== void 0 ? _d : {}, config),
            resolve: fieldConfig.resolve
        });
    }
}
function rebuildInputDefinition(typeName, t, fields, config) {
    var _a, _b, _c;
    for (const [fieldName, fieldConfig] of Object.entries(fields)){
        if (((_a = config.skipFields) === null || _a === void 0 ? void 0 : _a[typeName]) && ((_b = config.skipFields) === null || _b === void 0 ? void 0 : _b[typeName].includes(fieldName))) {
            continue;
        }
        const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"])(fieldConfig.type);
        (_c = config.captureLeafType) === null || _c === void 0 ? void 0 : _c.call(config, namedType);
        t.field(fieldName, {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyNexusWrapping"])(namedType.name, wrapping),
            description: fieldConfig.description,
            default: fieldConfig.defaultValue,
            extensions: fieldConfig.extensions
        });
    }
}
function rebuildArgs(typeName, fieldName, argMap, config) {
    var _a, _b, _c;
    if (!argMap) {
        return null;
    }
    const rebuiltArgs = {};
    for (const [argName, argConfig] of Object.entries(argMap)){
        if ((_b = (_a = config.skipArgs) === null || _a === void 0 ? void 0 : _a[typeName]) === null || _b === void 0 ? void 0 : _b[fieldName]) {
            continue;
        }
        const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"])(argConfig.type);
        (_c = config.captureLeafType) === null || _c === void 0 ? void 0 : _c.call(config, namedType);
        rebuiltArgs[argName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"])({
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyNexusWrapping"])(namedType.name, wrapping),
            default: argConfig.defaultValue,
            description: argConfig.description,
            extensions: argConfig.extensions
        });
    }
    return rebuiltArgs;
} //# sourceMappingURL=rebuildType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/builder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SchemaBuilder",
    ()=>SchemaBuilder,
    "makeSchemaInternal",
    ()=>makeSchemaInternal,
    "setConfigDefaults",
    ()=>setConfigDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/execution/execute.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/scalars.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/extensions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/messages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$declarativeWrappingPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/declarativeWrappingPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/fieldAuthorizePlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/rebuildType.js [app-route] (ecmascript)");
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
const SCALARS = {
    String: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLString"],
    Int: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLInt"],
    Float: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLFloat"],
    ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLID"],
    Boolean: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLBoolean"]
};
class SchemaBuilder {
    constructor(config){
        /** All objects containing a NEXUS_BUILD / NEXUS_TYPE symbol */ this.nexusMetaObjects = new Set();
        /** Used to check for circular references. */ this.buildingTypes = new Set();
        /** The "final type" map contains all types as they are built. */ this.finalTypeMap = {};
        /**
         * The "defined type" map keeps track of all of the types that were defined directly as `GraphQL*Type`
         * objects, so we don't accidentally overwrite any.
         */ this.definedTypeMap = {};
        /**
         * The "pending type" map keeps track of all types that were defined w/ GraphQL Nexus and haven't been
         * processed into concrete types yet.
         */ this.pendingTypeMap = {};
        /** All "extensions" to types (adding fields on types from many locations) */ this.typeExtendMap = {};
        /** All "extensions" to input types (adding fields on types from many locations) */ this.inputTypeExtendMap = {};
        /**
         * When we encounter "named" types from graphql-js, we keep them separate from Nexus definitions. This way
         * we can have Nexus definitions take precedence without worrying about conflicts, particularly when we're
         * looking to override behavior from inherited types.
         */ this.graphqlNamedTypeMap = {};
        /**
         * If we're merging against a remote schema, the types from the schema are kept here, for fallbacks /
         * merging when we're building the actual Schema
         */ this.graphqlMergeSchemaMap = {};
        this.dynamicInputFields = {};
        this.dynamicOutputFields = {};
        this.dynamicOutputProperties = {};
        this.plugins = [];
        /** All types that need to be traversed for children types */ this.typesToWalk = [];
        /** Root type mapping information annotated on the type definitions */ this.sourceTypings = {};
        /** Array of missing types */ this.missingTypes = {};
        /** Created just before types are walked, this keeps track of all of the resolvers */ this.onMissingTypeFns = [];
        /** Executed just before types are walked */ this.onBeforeBuildFns = [];
        /** Executed as the field resolvers are included on the field */ this.onCreateResolverFns = [];
        /** Executed as the field "subscribe" fields are included on the schema */ this.onCreateSubscribeFns = [];
        /** Executed after the schema is constructed, for any final verification */ this.onAfterBuildFns = [];
        /** Executed after the object is defined, allowing us to add additional fields to the object */ this.onObjectDefinitionFns = [];
        /** Executed after the object is defined, allowing us to add additional fields to the object */ this.onInputObjectDefinitionFns = [];
        /** Called immediately after the field is defined, allows for using metadata to define the shape of the field. */ this.onAddArgFns = [];
        /** Called immediately after the field is defined, allows for using metadata to define the shape of the field. */ this.onAddOutputFieldFns = [];
        /** Called immediately after the field is defined, allows for using metadata to define the shape of the field. */ this.onAddInputFieldFns = [];
        this.setConfigOption = (key, value)=>{
            this.config = Object.assign(Object.assign({}, this.config), {
                [key]: value
            });
        };
        this.hasConfigOption = (key)=>{
            return this.config.hasOwnProperty(key);
        };
        this.getConfigOption = (key)=>{
            return this.config[key];
        };
        this.hasType = (typeName)=>{
            return Boolean(this.pendingTypeMap[typeName] || this.finalTypeMap[typeName] || this.graphqlNamedTypeMap[typeName] || this.graphqlMergeSchemaMap[typeName]);
        };
        /**
         * Add type takes a Nexus type, or a GraphQL type and pulls it into an internal "type registry". It also
         * does an initial pass on any types that are referenced on the "types" field and pulls those in too, so
         * you can define types anonymously, without exporting them.
         */ this.addType = (typeDef)=>{
            var _a, _b, _c;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicInputMethod"])(typeDef)) {
                this.dynamicInputFields[typeDef.name] = typeDef;
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicOutputMethod"])(typeDef)) {
                this.dynamicOutputFields[typeDef.name] = typeDef;
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicOutputProperty"])(typeDef)) {
                this.dynamicOutputProperties[typeDef.name] = typeDef;
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMeta"])(typeDef)) {
                this.addToNexusMeta(typeDef);
                return;
            }
            // Don't worry about internal types.
            if ((_a = typeDef.name) === null || _a === void 0 ? void 0 : _a.startsWith('__')) {
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusExtendTypeDef"])(typeDef)) {
                const typeExtensions = this.typeExtendMap[typeDef.name] = this.typeExtendMap[typeDef.name] || [];
                typeExtensions.push(typeDef.value);
                this.typesToWalk.push({
                    type: 'object',
                    value: typeDef.value
                });
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusExtendInputTypeDef"])(typeDef)) {
                const typeExtensions = this.inputTypeExtendMap[typeDef.name] = this.inputTypeExtendMap[typeDef.name] || [];
                typeExtensions.push(typeDef.value);
                this.typesToWalk.push({
                    type: 'input',
                    value: typeDef.value
                });
                return;
            }
            // Check the "defined" type map for existing Nexus types. We are able to conflict with external types,
            // as we assume that locally defined types take precedence.
            const existingType = this.pendingTypeMap[typeDef.name];
            // If we already have a "Nexus" type, but it's not the same, trigger mark as an error,
            // otherwise early exit
            if (existingType) {
                if (existingType !== typeDef) {
                    throw extendError(typeDef.name);
                }
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedTypeDef"])(typeDef)) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedOuputTypeDef"])(typeDef) && typeDef.value.asNexusMethod) {
                    this.dynamicOutputFields[typeDef.value.asNexusMethod] = typeDef.name;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedInputTypeDef"])(typeDef) && typeDef.value.asNexusMethod) {
                    this.dynamicInputFields[typeDef.value.asNexusMethod] = typeDef.name;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusScalarTypeDef"])(typeDef) && typeDef.value.sourceType) {
                    this.sourceTypings[typeDef.name] = typeDef.value.sourceType;
                }
            }
            // If it's a concrete GraphQL type, we handle it directly by convering the
            // type to a Nexus structure, and capturing all of the referenced types
            // while we're reconstructing.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNamedType"])(typeDef)) {
                // If we've already captured the named type, we can skip it
                if (this.graphqlNamedTypeMap[typeDef.name]) {
                    return;
                }
                // If we've used decorateType to wrap, then we can grab the types off
                if ((_b = typeDef.extensions) === null || _b === void 0 ? void 0 : _b.nexus) {
                    const { asNexusMethod, sourceType } = Object(typeDef.extensions.nexus);
                    if (asNexusMethod) {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInputType"])(typeDef)) {
                            this.dynamicInputFields[asNexusMethod] = typeDef.name;
                        }
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOutputType"])(typeDef)) {
                            this.dynamicOutputFields[asNexusMethod] = typeDef.name;
                        }
                    }
                    if (sourceType) {
                        this.sourceTypings[typeDef.name] = sourceType;
                    }
                }
                this.graphqlNamedTypeMap[typeDef.name] = this.handleNativeType(typeDef, {
                    captureLeafType: (t)=>{
                        if (!this.graphqlNamedTypeMap[t.name] && t.name !== typeDef.name) {
                            this.addType(t);
                        }
                    }
                });
                if ((_c = typeDef.extensions) === null || _c === void 0 ? void 0 : _c.nexus) {
                    this.addType(this.graphqlNamedTypeMap[typeDef.name]);
                }
                return;
            }
            this.pendingTypeMap[typeDef.name] = typeDef;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInputObjectTypeDef"])(typeDef)) {
                this.typesToWalk.push({
                    type: 'input',
                    value: typeDef.value
                });
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusObjectTypeDef"])(typeDef)) {
                this.typesToWalk.push({
                    type: 'object',
                    value: typeDef.value
                });
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInterfaceTypeDef"])(typeDef)) {
                this.typesToWalk.push({
                    type: 'interface',
                    value: typeDef.value
                });
            }
        };
        this.config = setConfigDefaults(config);
        /** This array of plugin is used to keep retro-compatibility w/ older versions of nexus */ this.plugins = this.config.plugins.length > 0 ? this.config.plugins : [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePlugin"])()
        ];
        if (!this.plugins.find((f)=>f.config.name === 'declarativeWrapping')) {
            this.plugins.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$declarativeWrappingPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["declarativeWrappingPlugin"])({
                disable: true
            }));
        }
        this.builderLens = Object.freeze({
            hasType: this.hasType,
            addType: this.addType,
            setConfigOption: this.setConfigOption,
            hasConfigOption: this.hasConfigOption,
            getConfigOption: this.getConfigOption
        });
        if (config.mergeSchema) {
            this.graphqlMergeSchemaMap = this.handleMergeSchema(config.mergeSchema);
        }
    }
    get schemaExtension() {
        /* istanbul ignore next */ if (!this._schemaExtension) {
            throw new Error('Cannot reference schemaExtension before it is created');
        }
        return this._schemaExtension;
    }
    addTypes(types) {
        var _a, _b;
        if (!types) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSchema"])(types)) {
            if (((_a = this.config.mergeSchema) === null || _a === void 0 ? void 0 : _a.schema) === types) {
                return;
            } else if (!this.config.mergeSchema) {
                if (Object.keys(this.graphqlMergeSchemaMap).length) {
                    console.error(new Error(`It looks like you're trying to merge multiple GraphQL schemas.\n Please open a GitHub ticket with more info about your use case.`));
                }
                this.graphqlMergeSchemaMap = this.handleMergeSchema({
                    schema: types
                });
            } else {
                this.addTypes(types.getTypeMap());
            }
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPlugin"])(types)) {
            if (!((_b = this.plugins) === null || _b === void 0 ? void 0 : _b.includes(types))) {
                throw new Error(`Nexus plugin ${types.config.name} was seen in the "types" config, but should instead be provided to the "plugins" array.`);
            }
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedTypeDef"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusExtendTypeDef"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusExtendInputTypeDef"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNamedType"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicInputMethod"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicOutputMethod"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicOutputProperty"])(types) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMeta"])(types)) {
            this.addType(types);
        } else if (Array.isArray(types)) {
            types.forEach((typeDef)=>this.addTypes(typeDef));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(types)) {
            Object.keys(types).forEach((key)=>this.addTypes(types[key]));
        }
    }
    addToNexusMeta(type) {
        if (this.nexusMetaObjects.has(type)) {
            return;
        }
        this.nexusMetaObjects.add(type);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaBuild"])(type)) {
            const types = type[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXUS_BUILD"]]();
            this.addTypes(types);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaType"])(type)) {
            this.addType((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveNexusMetaType"])(type));
        }
    }
    walkTypes() {
        let obj;
        while(obj = this.typesToWalk.shift()){
            switch(obj.type){
                case 'input':
                    this.walkInputType(obj.value);
                    break;
                case 'interface':
                    this.walkInterfaceType(obj.value);
                    break;
                case 'object':
                    this.walkOutputType(obj.value);
                    break;
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["casesHandled"])(obj);
            }
        }
    }
    beforeWalkTypes() {
        this.plugins.forEach((obj, i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPlugin"])(obj)) {
                throw new Error(`Expected a plugin in plugins[${i}], saw ${obj}`);
            }
            const { config: pluginConfig } = obj;
            if (pluginConfig.onInstall) {
                // TODO(tim): remove anys/warning at 1.0
                const installResult = pluginConfig.onInstall(this.builderLens);
                if (Array.isArray(installResult === null || installResult === void 0 ? void 0 : installResult.types)) {
                    throw new Error(`Nexus no longer supports a return value from onInstall, you should instead use the hasType/addType api (seen in plugin ${pluginConfig.name}). `);
                }
            }
            if (pluginConfig.onCreateFieldResolver) {
                this.onCreateResolverFns.push(pluginConfig.onCreateFieldResolver);
            }
            if (pluginConfig.onCreateFieldSubscribe) {
                this.onCreateSubscribeFns.push(pluginConfig.onCreateFieldSubscribe);
            }
            if (pluginConfig.onBeforeBuild) {
                this.onBeforeBuildFns.push(pluginConfig.onBeforeBuild);
            }
            if (pluginConfig.onMissingType) {
                this.onMissingTypeFns.push(pluginConfig.onMissingType);
            }
            if (pluginConfig.onAfterBuild) {
                this.onAfterBuildFns.push(pluginConfig.onAfterBuild);
            }
            if (pluginConfig.onObjectDefinition) {
                this.onObjectDefinitionFns.push(pluginConfig.onObjectDefinition);
            }
            if (pluginConfig.onAddOutputField) {
                this.onAddOutputFieldFns.push(pluginConfig.onAddOutputField);
            }
            if (pluginConfig.onAddInputField) {
                this.onAddInputFieldFns.push(pluginConfig.onAddInputField);
            }
            if (pluginConfig.onAddArg) {
                this.onAddArgFns.push(pluginConfig.onAddArg);
            }
            if (pluginConfig.onInputObjectDefinition) {
                this.onInputObjectDefinitionFns.push(pluginConfig.onInputObjectDefinition);
            }
        });
    }
    beforeBuildTypes() {
        this.onBeforeBuildFns.forEach((fn)=>{
            fn(this.builderLens);
            if (this.typesToWalk.length > 0) {
                this.walkTypes();
            }
        });
    }
    checkForInterfaceCircularDependencies() {
        const interfaces = {};
        Object.keys(this.pendingTypeMap).map((key)=>this.pendingTypeMap[key]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInterfaceTypeDef"]).forEach((type)=>{
            interfaces[type.name] = type.value;
        });
        const alreadyChecked = {};
        const walkType = (obj, path, visited)=>{
            if (alreadyChecked[obj.name]) {
                return;
            }
            if (visited[obj.name]) {
                if (obj.name === path[path.length - 1]) {
                    throw new Error(`GraphQL Nexus: Interface ${obj.name} can't implement itself`);
                } else {
                    throw new Error(`GraphQL Nexus: Interface circular dependency detected ${[
                        ...path.slice(path.lastIndexOf(obj.name)),
                        obj.name
                    ].join(' -> ')}`);
                }
            }
            const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterfaceDefinitionBlock"]({
                typeName: obj.name,
                addInterfaces: (i)=>i.forEach((config)=>{
                        const name = typeof config === 'string' ? config : config.value.name;
                        walkType(interfaces[name], [
                            ...path,
                            obj.name
                        ], Object.assign(Object.assign({}, visited), {
                            [obj.name]: true
                        }));
                    }),
                addModification: ()=>{},
                addField: ()=>{},
                addDynamicOutputMembers: (block, wrapping)=>this.addDynamicOutputMembers(block, 'walk', wrapping),
                warn: ()=>{}
            });
            obj.definition(definitionBlock);
            alreadyChecked[obj.name] = true;
        };
        Object.keys(interfaces).forEach((name)=>{
            walkType(interfaces[name], [], {});
        });
    }
    buildNexusTypes() {
        var _a;
        // If Query isn't defined, set it to null so it falls through to "missingType"
        if (!this.pendingTypeMap.Query && !((_a = this.config.schemaRoots) === null || _a === void 0 ? void 0 : _a.query) && !this.typeExtendMap.Query) {
            this.pendingTypeMap.Query = null;
        }
        Object.keys(this.pendingTypeMap).forEach((key)=>{
            if (this.typesToWalk.length > 0) {
                this.walkTypes();
            }
            // If we've already constructed the type by this point,
            // via circular dependency resolution don't worry about building it.
            if (this.finalTypeMap[key]) {
                return;
            }
            if (this.definedTypeMap[key]) {
                throw extendError(key);
            }
            this.finalTypeMap[key] = this.getOrBuildType(key);
            this.buildingTypes.clear();
        });
        Object.keys(this.typeExtendMap).forEach((key)=>{
            // If we haven't defined the type, assume it's an object type
            if (this.typeExtendMap[key] !== null && !this.hasType(key)) {
                this.buildObjectType({
                    name: key,
                    definition () {}
                });
            }
        });
        Object.keys(this.inputTypeExtendMap).forEach((key)=>{
            // If we haven't defined the type, assume it's an input object type
            if (this.inputTypeExtendMap[key] !== null && !this.hasType(key)) {
                this.buildInputObjectType({
                    name: key,
                    definition () {}
                });
            }
        });
    }
    createSchemaExtension() {
        this._schemaExtension = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusSchemaExtension"](Object.assign(Object.assign({}, this.config), {
            dynamicFields: {
                dynamicInputFields: this.dynamicInputFields,
                dynamicOutputFields: this.dynamicOutputFields,
                dynamicOutputProperties: this.dynamicOutputProperties
            },
            sourceTypings: this.sourceTypings
        }));
    }
    getFinalTypeMap() {
        this.beforeWalkTypes();
        this.createSchemaExtension();
        this.walkTypes();
        this.beforeBuildTypes();
        this.checkForInterfaceCircularDependencies();
        this.buildNexusTypes();
        return {
            finalConfig: this.config,
            typeMap: this.finalTypeMap,
            schemaExtension: this.schemaExtension,
            missingTypes: this.missingTypes,
            onAfterBuildFns: this.onAfterBuildFns
        };
    }
    shouldMerge(typeName) {
        if (!this.config.mergeSchema) {
            return false;
        }
        const { mergeTypes = [
            'Query',
            'Mutation'
        ] } = this.config.mergeSchema;
        return Boolean(mergeTypes === true || mergeTypes.includes(typeName));
    }
    buildInputObjectType(config) {
        const fields = [];
        const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InputDefinitionBlock"]({
            typeName: config.name,
            addField: (field)=>fields.push(this.addInputField(field)),
            addDynamicInputFields: (block, wrapping)=>this.addDynamicInputFields(block, wrapping),
            warn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consoleWarn"]
        });
        const externalNamedType = this.graphqlMergeSchemaMap[config.name];
        if (this.shouldMerge(config.name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInputObjectTypeDef"])(externalNamedType)) {
            externalNamedType.value.definition(definitionBlock);
        }
        config.definition(definitionBlock);
        this.onInputObjectDefinitionFns.forEach((fn)=>{
            fn(definitionBlock, config);
        });
        const extensions = this.inputTypeExtendMap[config.name];
        if (extensions) {
            extensions.forEach((extension)=>{
                extension.definition(definitionBlock);
            });
        }
        this.inputTypeExtendMap[config.name] = null;
        const inputObjectTypeConfig = {
            name: config.name,
            fields: ()=>this.buildInputObjectFields(fields, inputObjectTypeConfig),
            description: config.description,
            extensions: Object.assign(Object.assign({}, config.extensions), {
                nexus: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusInputObjectTypeExtension"](config)
            })
        };
        return this.finalize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLInputObjectType"](inputObjectTypeConfig));
    }
    buildObjectType(config) {
        const fields = [];
        const interfaces = [];
        const modifications = {};
        const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObjectDefinitionBlock"]({
            typeName: config.name,
            addField: (fieldDef)=>fields.push(this.addOutputField(fieldDef)),
            addInterfaces: (interfaceDefs)=>interfaces.push(...interfaceDefs),
            addModification: (modification)=>modifications[modification.field] = modification,
            addDynamicOutputMembers: (block, wrapping)=>this.addDynamicOutputMembers(block, 'build', wrapping),
            warn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consoleWarn"]
        });
        const externalNamedType = this.graphqlMergeSchemaMap[config.name];
        if (this.shouldMerge(config.name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusObjectTypeDef"])(externalNamedType)) {
            externalNamedType.value.definition(definitionBlock);
        }
        config.definition(definitionBlock);
        this.onObjectDefinitionFns.forEach((fn)=>{
            fn(definitionBlock, config);
        });
        const extensions = this.typeExtendMap[config.name];
        if (extensions) {
            extensions.forEach((extension)=>{
                extension.definition(definitionBlock);
            });
        }
        this.typeExtendMap[config.name] = null;
        if (config.sourceType) {
            this.sourceTypings[config.name] = config.sourceType;
        }
        const objectTypeConfig = {
            name: config.name,
            interfaces: ()=>this.buildInterfaceList(interfaces),
            description: config.description,
            fields: ()=>this.buildOutputFields(fields, objectTypeConfig, this.buildInterfaceFields(objectTypeConfig, interfaces, modifications)),
            isTypeOf: config.isTypeOf,
            extensions: Object.assign(Object.assign({}, config.extensions), {
                nexus: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusObjectTypeExtension"](config)
            })
        };
        return this.finalize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLObjectType"](objectTypeConfig));
    }
    buildInterfaceType(config) {
        const { name, description } = config;
        let resolveType = config.resolveType;
        const fields = [];
        const interfaces = [];
        const modifications = {};
        const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterfaceDefinitionBlock"]({
            typeName: config.name,
            addField: (field)=>fields.push(this.addOutputField(field)),
            addInterfaces: (interfaceDefs)=>interfaces.push(...interfaceDefs),
            addModification: (modification)=>modifications[modification.field] = modification,
            addDynamicOutputMembers: (block, wrapping)=>this.addDynamicOutputMembers(block, 'build', wrapping),
            warn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consoleWarn"]
        });
        const externalNamedType = this.graphqlMergeSchemaMap[config.name];
        if (this.shouldMerge(config.name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInterfaceTypeDef"])(externalNamedType)) {
            externalNamedType.value.definition(definitionBlock);
        }
        config.definition(definitionBlock);
        if (config.sourceType) {
            this.sourceTypings[config.name] = config.sourceType;
        }
        const interfaceTypeConfig = {
            name,
            interfaces: ()=>this.buildInterfaceList(interfaces),
            resolveType,
            description,
            fields: ()=>this.buildOutputFields(fields, interfaceTypeConfig, this.buildInterfaceFields(interfaceTypeConfig, interfaces, modifications)),
            extensions: Object.assign(Object.assign({}, config.extensions), {
                nexus: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusInterfaceTypeExtension"](config)
            })
        };
        return this.finalize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLInterfaceType"](interfaceTypeConfig));
    }
    addOutputField(field) {
        this.onAddOutputFieldFns.forEach((fn)=>{
            const result = fn(field);
            if (result) {
                field = result;
            }
        });
        return field;
    }
    addInputField(field) {
        this.onAddInputFieldFns.forEach((fn)=>{
            const result = fn(field);
            if (result) {
                field = result;
            }
        });
        return field;
    }
    buildEnumType(config) {
        var _a, _b;
        const { members } = config;
        const values = {};
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"])(members)) {
            members.forEach((m)=>{
                var _a, _b;
                if (typeof m === 'string') {
                    values[m] = {
                        value: m
                    };
                } else {
                    values[m.name] = {
                        value: typeof m.value === 'undefined' ? m.name : m.value,
                        deprecationReason: m.deprecation,
                        description: m.description,
                        extensions: Object.assign(Object.assign({}, m.extensions), {
                            nexus: (_b = (_a = m.extensions) === null || _a === void 0 ? void 0 : _a.nexus) !== null && _b !== void 0 ? _b : {}
                        })
                    };
                }
            });
        } else {
            Object.keys(members)// members can potentially be a TypeScript enum.
            // The compiled version of this enum will be the members object,
            // numeric enums members also get a reverse mapping from enum values to enum names.
            // In these cases we have to ensure we don't include these reverse mapping keys.
            // See: https://www.typescriptlang.org/docs/handbook/enums.html
            .filter((key)=>isNaN(+key)).forEach((key)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(key);
                values[key] = {
                    value: members[key]
                };
            });
        }
        if (!Object.keys(values).length) {
            throw new Error(`GraphQL Nexus: Enum ${config.name} must have at least one member`);
        }
        if (config.sourceType) {
            this.sourceTypings[config.name] = config.sourceType;
        }
        return this.finalize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLEnumType"]({
            name: config.name,
            values: values,
            description: config.description,
            extensions: Object.assign(Object.assign({}, config.extensions), {
                nexus: (_b = (_a = config.extensions) === null || _a === void 0 ? void 0 : _a.nexus) !== null && _b !== void 0 ? _b : {}
            })
        }));
    }
    buildUnionType(config) {
        var _a, _b;
        let members;
        let resolveType = config.resolveType;
        config.definition(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnionDefinitionBlock"]({
            typeName: config.name,
            addUnionMembers: (unionMembers)=>members = unionMembers
        }));
        if (config.sourceType) {
            this.sourceTypings[config.name] = config.sourceType;
        }
        return this.finalize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLUnionType"]({
            name: config.name,
            resolveType,
            description: config.description,
            types: ()=>this.buildUnionMembers(config.name, members),
            extensions: Object.assign(Object.assign({}, config.extensions), {
                nexus: (_b = (_a = config.extensions) === null || _a === void 0 ? void 0 : _a.nexus) !== null && _b !== void 0 ? _b : {}
            })
        }));
    }
    buildScalarType(config) {
        var _a, _b;
        if (config.sourceType) {
            this.sourceTypings[config.name] = config.sourceType;
        }
        return this.finalize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLScalarType"](Object.assign(Object.assign({}, config), {
            extensions: Object.assign(Object.assign({}, config.extensions), {
                nexus: (_b = (_a = config.extensions) === null || _a === void 0 ? void 0 : _a.nexus) !== null && _b !== void 0 ? _b : {}
            })
        })));
    }
    finalize(type) {
        this.finalTypeMap[type.name] = type;
        return type;
    }
    missingType(typeName, fromObject = false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invariantGuard"])(typeName);
        if (this.onMissingTypeFns.length) {
            for(let i = 0; i < this.onMissingTypeFns.length; i++){
                const fn = this.onMissingTypeFns[i];
                const replacementType = fn(typeName, this.builderLens);
                if (replacementType && replacementType.name) {
                    this.addType(replacementType);
                    return this.getOrBuildType(replacementType);
                }
            }
        }
        if (typeName === 'Query') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLObjectType"]({
                name: 'Query',
                fields: {
                    ok: {
                        type: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLBoolean"]),
                        resolve: ()=>true
                    }
                }
            });
        }
        if (!this.missingTypes[typeName]) {
            this.missingTypes[typeName] = {
                fromObject
            };
        }
        this.addType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNKNOWN_TYPE_SCALAR"]);
        return this.getOrBuildType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNKNOWN_TYPE_SCALAR"]);
    }
    buildUnionMembers(unionName, members) {
        const unionMembers = [];
        /* istanbul ignore next */ if (!members) {
            throw new Error(`Missing Union members for ${unionName}.` + `Make sure to call the t.members(...) method in the union blocks`);
        }
        members.forEach((member)=>{
            unionMembers.push(this.getObjectType(member));
        });
        /* istanbul ignore next */ if (!unionMembers.length) {
            throw new Error(`GraphQL Nexus: Union ${unionName} must have at least one member type`);
        }
        return unionMembers;
    }
    buildInterfaceList(interfaces) {
        const list = [];
        interfaces.forEach((i)=>{
            const type = this.getInterface(i);
            list.push(type, ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["graphql15InterfaceType"])(type).getInterfaces());
        });
        return Array.from(new Set(list));
    }
    buildInterfaceFields(forTypeConfig, interfaces, modifications) {
        const interfaceFieldsMap = {};
        interfaces.forEach((i)=>{
            const config = this.getInterface(i).toConfig();
            Object.keys(config.fields).forEach((field)=>{
                var _a, _b, _c, _d, _e;
                const interfaceField = config.fields[field];
                interfaceFieldsMap[field] = interfaceField;
                if (modifications[field]) {
                    // TODO(tim): Refactor this whole mess
                    const _f = modifications[field], { type, field: _field, args, extensions } = _f, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(_f, [
                        "type",
                        "field",
                        "args",
                        "extensions"
                    ]);
                    const extensionConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasNexusExtension"])(extensions === null || extensions === void 0 ? void 0 : extensions.nexus) ? (_b = (_a = extensions === null || extensions === void 0 ? void 0 : extensions.nexus) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {} : {};
                    interfaceFieldsMap[field] = Object.assign(Object.assign(Object.assign({}, interfaceFieldsMap[field]), rest), {
                        extensions: Object.assign(Object.assign(Object.assign({}, interfaceField.extensions), extensions), {
                            nexus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasNexusExtension"])((_c = interfaceField.extensions) === null || _c === void 0 ? void 0 : _c.nexus) ? (_e = (_d = interfaceField.extensions) === null || _d === void 0 ? void 0 : _d.nexus) === null || _e === void 0 ? void 0 : _e.modify(extensionConfig) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusFieldExtension"](extensionConfig)
                        })
                    });
                    if (typeof type !== 'undefined') {
                        let interfaceReplacement;
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"])(type)) {
                            const { wrapping, namedType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapNexusDef"])(type);
                            interfaceReplacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rewrapAsGraphQLType"])(this.getOrBuildType(namedType), wrapping);
                        } else {
                            const { wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"])(config.fields[field].type);
                            interfaceReplacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rewrapAsGraphQLType"])(this.getOutputType(type), wrapping);
                        }
                        interfaceFieldsMap[field].type = interfaceReplacement;
                    }
                    if (typeof args !== 'undefined') {
                        interfaceFieldsMap[field].args = Object.assign(Object.assign({}, this.buildArgs(args !== null && args !== void 0 ? args : {}, forTypeConfig, field)), interfaceFieldsMap[field].args);
                    }
                }
            });
        });
        return interfaceFieldsMap;
    }
    buildOutputFields(fields, typeConfig, intoObject) {
        fields.forEach((field)=>{
            intoObject[field.name] = this.buildOutputField(field, typeConfig);
        });
        return intoObject;
    }
    buildInputObjectFields(fields, typeConfig) {
        const fieldMap = {};
        fields.forEach((field)=>{
            fieldMap[field.name] = this.buildInputObjectField(field, typeConfig);
        });
        return fieldMap;
    }
    getNonNullDefault(nonNullDefaultConfig, kind) {
        var _a, _b;
        const { nonNullDefaults = {} } = nonNullDefaultConfig !== null && nonNullDefaultConfig !== void 0 ? nonNullDefaultConfig : {};
        return (_b = (_a = nonNullDefaults[kind]) !== null && _a !== void 0 ? _a : this.config.nonNullDefaults[kind]) !== null && _b !== void 0 ? _b : false;
    }
    buildOutputField(fieldConfig, typeConfig) {
        var _a, _b;
        if (!fieldConfig.type) {
            /* istanbul ignore next */ throw new Error(`Missing required "type" field for ${typeConfig.name}.${fieldConfig.name}`);
        }
        const fieldExtension = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusFieldExtension"](fieldConfig);
        const nonNullDefault = this.getNonNullDefault((_b = (_a = typeConfig.extensions) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.config, 'output');
        const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapNexusDef"])(fieldConfig.type);
        const finalWrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalizeWrapping"])(nonNullDefault, wrapping, fieldConfig.wrapping);
        const builderFieldConfig = {
            name: fieldConfig.name,
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rewrapAsGraphQLType"])(this.getOutputType(namedType), finalWrap),
            args: this.buildArgs(fieldConfig.args || {}, typeConfig, fieldConfig.name),
            description: fieldConfig.description,
            deprecationReason: fieldConfig.deprecation,
            extensions: Object.assign(Object.assign({}, fieldConfig.extensions), {
                nexus: fieldExtension
            })
        };
        return Object.assign({
            resolve: this.makeFinalResolver({
                builder: this.builderLens,
                fieldConfig: builderFieldConfig,
                parentTypeConfig: typeConfig,
                schemaConfig: this.config,
                schemaExtension: this.schemaExtension
            }, fieldConfig.resolve),
            subscribe: fieldConfig.subscribe
        }, builderFieldConfig);
    }
    makeFinalResolver(info, resolver) {
        const resolveFn = resolver || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$execution$2f$execute$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultFieldResolver"];
        if (this.onCreateResolverFns.length) {
            const toCompose = this.onCreateResolverFns.map((fn)=>fn(info)).filter((f)=>f);
            if (toCompose.length) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["composeMiddlewareFns"])(toCompose, resolveFn);
            }
        }
        return resolveFn;
    }
    buildInputObjectField(fieldConfig, typeConfig) {
        var _a, _b, _c, _d;
        const nonNullDefault = this.getNonNullDefault((_b = (_a = typeConfig.extensions) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.config, 'input');
        const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapNexusDef"])(fieldConfig.type);
        const finalWrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalizeWrapping"])(nonNullDefault, wrapping, fieldConfig.wrapping);
        return {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rewrapAsGraphQLType"])(this.getInputType(namedType), finalWrap),
            defaultValue: fieldConfig.default,
            description: fieldConfig.description,
            extensions: Object.assign(Object.assign({}, fieldConfig.extensions), {
                nexus: (_d = (_c = fieldConfig.extensions) === null || _c === void 0 ? void 0 : _c.nexus) !== null && _d !== void 0 ? _d : {}
            })
        };
    }
    buildArgs(args, typeConfig, fieldName) {
        var _a, _b, _c, _d;
        const allArgs = {};
        for (const [argName, arg] of Object.entries(args)){
            const nonNullDefault = this.getNonNullDefault((_b = (_a = typeConfig.extensions) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.config, 'input');
            let finalArgDef = Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeArgWrapping"])(arg).value), {
                fieldName,
                argName,
                parentType: typeConfig.name,
                configFor: 'arg'
            });
            for (const onArgDef of this.onAddArgFns){
                const result = onArgDef(finalArgDef);
                if (result != null) {
                    finalArgDef = result;
                }
            }
            const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapNexusDef"])(finalArgDef.type);
            const finalWrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalizeWrapping"])(nonNullDefault, wrapping);
            allArgs[argName] = {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rewrapAsGraphQLType"])(this.getInputType(namedType), finalWrap),
                description: finalArgDef.description,
                defaultValue: finalArgDef.default,
                extensions: Object.assign(Object.assign({}, finalArgDef.extensions), {
                    nexus: (_d = (_c = finalArgDef.extensions) === null || _c === void 0 ? void 0 : _c.nexus) !== null && _d !== void 0 ? _d : {}
                })
            };
        }
        return allArgs;
    }
    getInterface(name) {
        const type = this.getOrBuildType(name);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type)) {
            /* istanbul ignore next */ throw new Error(`Expected ${name} to be an interfaceType, saw ${type.constructor.name}(${type.name})`);
        }
        return type;
    }
    getInputType(possibleInputType) {
        const nexusNamedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNexusNamedType"])(possibleInputType);
        const graphqlType = this.getOrBuildType(nexusNamedType);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInputObjectType"])(graphqlType) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLeafType"])(graphqlType)) {
            /* istanbul ignore next */ throw new Error(`Expected ${nexusNamedType} to be a possible input type, saw ${graphqlType.constructor.name}(${graphqlType.name})`);
        }
        return graphqlType;
    }
    getOutputType(possibleOutputType) {
        const graphqlType = this.getOrBuildType(possibleOutputType);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOutputType"])(graphqlType)) {
            /* istanbul ignore next */ throw new Error(`Expected ${possibleOutputType} to be a valid output type, saw ${graphqlType.constructor.name}`);
        }
        return graphqlType;
    }
    getObjectType(name) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedTypeDef"])(name)) {
            return this.getObjectType(name.name);
        }
        const type = this.getOrBuildType(name);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(type)) {
            /* istanbul ignore next */ throw new Error(`Expected ${name} to be a objectType, saw ${type.constructor.name}`);
        }
        return type;
    }
    getOrBuildType(type, fromObject = false) {
        var _a, _b;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invariantGuard"])(type);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNamedType"])(type)) {
            return type;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedTypeDef"])(type)) {
            return this.getOrBuildType(type.name, true);
        }
        if (SCALARS[type]) {
            return SCALARS[type];
        }
        if (this.finalTypeMap[type]) {
            return this.finalTypeMap[type];
        }
        if (this.buildingTypes.has(type)) {
            /* istanbul ignore next */ throw new Error(`GraphQL Nexus: Circular dependency detected, while building types ${Array.from(this.buildingTypes)}`);
        }
        const pendingType = (_b = (_a = this.pendingTypeMap[type]) !== null && _a !== void 0 ? _a : this.graphqlNamedTypeMap[type]) !== null && _b !== void 0 ? _b : this.graphqlMergeSchemaMap[type];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedTypeDef"])(pendingType)) {
            this.buildingTypes.add(pendingType.name);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusObjectTypeDef"])(pendingType)) {
                return this.buildObjectType(pendingType.value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInterfaceTypeDef"])(pendingType)) {
                return this.buildInterfaceType(pendingType.value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusEnumTypeDef"])(pendingType)) {
                return this.buildEnumType(pendingType.value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusScalarTypeDef"])(pendingType)) {
                return this.buildScalarType(pendingType.value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInputObjectTypeDef"])(pendingType)) {
                return this.buildInputObjectType(pendingType.value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusUnionTypeDef"])(pendingType)) {
                return this.buildUnionType(pendingType.value);
            } else {
                console.warn('Unknown kind of type def to build. It will be ignored. The type def was: %j', type);
            }
        }
        return this.missingType(type, fromObject);
    }
    walkInputType(obj) {
        const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InputDefinitionBlock"]({
            typeName: obj.name,
            addField: (f)=>this.maybeTraverseInputFieldType(f),
            addDynamicInputFields: (block, wrapping)=>this.addDynamicInputFields(block, wrapping),
            warn: ()=>{}
        });
        obj.definition(definitionBlock);
        return obj;
    }
    addDynamicInputFields(block, wrapping) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(this.dynamicInputFields, (val, methodName)=>{
            if (typeof val === 'string') {
                return this.addDynamicField(methodName, val, block);
            }
            // @ts-ignore
            block[methodName] = (...args)=>{
                return val.value.factory({
                    args,
                    typeDef: block,
                    builder: this.builderLens,
                    typeName: block.typeName,
                    wrapping
                });
            };
        });
    }
    addDynamicOutputMembers(block, stage, wrapping) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(this.dynamicOutputFields, (val, methodName)=>{
            if (typeof val === 'string') {
                return this.addDynamicField(methodName, val, block);
            }
            // @ts-ignore
            block[methodName] = (...args)=>{
                return val.value.factory({
                    args,
                    typeDef: block,
                    builder: this.builderLens,
                    typeName: block.typeName,
                    stage,
                    wrapping
                });
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(this.dynamicOutputProperties, (val, propertyName)=>{
            Object.defineProperty(block, propertyName, {
                get () {
                    return val.value.factory({
                        typeDef: block,
                        builder: this.builderLens,
                        typeName: block.typeName,
                        stage
                    });
                },
                enumerable: true
            });
        });
    }
    addDynamicField(methodName, typeName, block) {
        // @ts-ignore
        block[methodName] = (fieldName, opts)=>{
            let fieldConfig = {
                type: typeName
            };
            /* istanbul ignore if */ if (typeof opts === 'function') {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$messages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["messages"].removedFunctionShorthand(block.typeName, fieldName));
            } else {
                fieldConfig = Object.assign(Object.assign({}, fieldConfig), opts);
            }
            // @ts-ignore
            block.field(fieldName, fieldConfig);
        };
    }
    walkOutputType(obj) {
        const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObjectDefinitionBlock"]({
            typeName: obj.name,
            addInterfaces: (i)=>{
                i.forEach((j)=>{
                    if (typeof j !== 'string') {
                        this.addType(j);
                    }
                });
            },
            addField: (f)=>this.maybeTraverseOutputFieldType(f),
            addDynamicOutputMembers: (block, wrapping)=>this.addDynamicOutputMembers(block, 'walk', wrapping),
            addModification: (o)=>this.maybeTraverseModification(o),
            warn: ()=>{}
        });
        obj.definition(definitionBlock);
        return obj;
    }
    walkInterfaceType(obj) {
        const definitionBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterfaceDefinitionBlock"]({
            typeName: obj.name,
            addModification: (o)=>this.maybeTraverseModification(o),
            addInterfaces: (i)=>{
                i.forEach((j)=>{
                    if (typeof j !== 'string') {
                        this.addType(j);
                    }
                });
            },
            addField: (f)=>this.maybeTraverseOutputFieldType(f),
            addDynamicOutputMembers: (block, wrapping)=>this.addDynamicOutputMembers(block, 'walk', wrapping),
            warn: ()=>{}
        });
        obj.definition(definitionBlock);
        return obj;
    }
    maybeTraverseModification(mod) {
        const { type, args } = mod;
        if (type) {
            const namedFieldType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNexusNamedType"])(mod.type);
            if (typeof namedFieldType !== 'string') {
                this.addType(namedFieldType);
            }
        }
        if (args) {
            this.traverseArgs(args);
        }
    }
    maybeTraverseOutputFieldType(type) {
        const { args, type: fieldType } = type;
        const namedFieldType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNexusNamedType"])(fieldType);
        if (typeof namedFieldType !== 'string') {
            this.addType(namedFieldType);
        }
        if (args) {
            this.traverseArgs(args);
        }
    }
    traverseArgs(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(args, (val)=>{
            const namedArgType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArgNamedType"])(val);
            if (typeof namedArgType !== 'string') {
                this.addType(namedArgType);
            }
        });
    }
    maybeTraverseInputFieldType(type) {
        const { type: fieldType } = type;
        const namedFieldType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNexusNamedType"])(fieldType);
        if (typeof namedFieldType !== 'string') {
            this.addType(namedFieldType);
        }
    }
    /**
     * Given a "mergeSchema", gathers all of the types and constructs them into a map of types that we keep as a
     * "merge schema"
     *
     * @param config
     */ handleMergeSchema(config) {
        var _a;
        const { types } = config.schema.toConfig();
        const mergedTypes = {};
        // We don't need to worry about capturing any types while walking,
        // because we have the entire schema
        for (const type of types){
            if (type.name.startsWith('__')) {
                continue;
            }
            if ((_a = config.skipTypes) === null || _a === void 0 ? void 0 : _a.includes(type.name)) {
                continue;
            }
            mergedTypes[type.name] = this.handleNativeType(type, config);
        }
        return mergedTypes;
    }
    handleNativeType(type, config) {
        var _a;
        var _b, _c;
        while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isWrappingType"])(type)){
            type = type.ofType;
        }
        (_a = (_b = this.pendingTypeMap)[_c = type.name]) !== null && _a !== void 0 ? _a : _b[_c] = null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildNamedType"])(type, config);
    }
}
function extendError(name) {
    return new Error(`${name} was already defined and imported as a type, check the docs for extending types`);
}
function makeSchemaInternal(config) {
    const builder = new SchemaBuilder(config);
    builder.addTypes(config.types);
    if (config.schemaRoots) {
        builder.addTypes(config.schemaRoots);
    }
    const { finalConfig, typeMap, missingTypes, schemaExtension, onAfterBuildFns } = builder.getFinalTypeMap();
    function getRootType(rootType, defaultType) {
        var _a, _b;
        const rootTypeVal = (_b = (_a = config.schemaRoots) === null || _a === void 0 ? void 0 : _a[rootType]) !== null && _b !== void 0 ? _b : defaultType;
        let returnVal = null;
        if (typeof rootTypeVal === 'string') {
            returnVal = typeMap[rootTypeVal];
        } else if (rootTypeVal) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusObjectTypeDef"])(rootTypeVal)) {
                returnVal = typeMap[rootTypeVal.name];
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(rootTypeVal)) {
                returnVal = typeMap[rootTypeVal.name];
            }
        }
        if (returnVal && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(returnVal)) {
            throw new Error(`Expected ${rootType} to be a objectType, saw ${returnVal.constructor.name}`);
        }
        return returnVal;
    }
    const schema = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLSchema"]({
        query: getRootType('query', 'Query'),
        mutation: getRootType('mutation', 'Mutation'),
        subscription: getRootType('subscription', 'Subscription'),
        types: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objValues"])(typeMap),
        extensions: Object.assign(Object.assign({}, config.extensions), {
            nexus: schemaExtension
        })
    });
    onAfterBuildFns.forEach((fn)=>fn(schema));
    return {
        schema,
        missingTypes,
        finalConfig
    };
}
function setConfigDefaults(config) {
    var _a, _b, _c, _d, _e;
    const defaults = {
        features: {
            abstractTypeRuntimeChecks: true,
            abstractTypeStrategies: {
                isTypeOf: false,
                resolveType: true,
                __typename: false
            }
        },
        nonNullDefaults: {
            input: false,
            output: false
        },
        plugins: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePlugin"])()
        ]
    };
    if (!config.features) {
        config.features = defaults.features;
    } else {
        // abstractTypeStrategies
        if (!config.features.abstractTypeStrategies) {
            config.features.abstractTypeStrategies = defaults.features.abstractTypeStrategies;
        } else {
            config.features.abstractTypeStrategies.__typename = (_a = config.features.abstractTypeStrategies.__typename) !== null && _a !== void 0 ? _a : false;
            config.features.abstractTypeStrategies.isTypeOf = (_b = config.features.abstractTypeStrategies.isTypeOf) !== null && _b !== void 0 ? _b : false;
            config.features.abstractTypeStrategies.resolveType = (_c = config.features.abstractTypeStrategies.resolveType) !== null && _c !== void 0 ? _c : false;
        }
        // abstractTypeRuntimeChecks
        if (config.features.abstractTypeStrategies.__typename === true) {
            // Discriminant Model Field strategy cannot be used with runtime checks because at runtime
            // we cannot know if a resolver for a field whose type is an abstract type includes __typename
            // in the returned model data.
            config.features.abstractTypeRuntimeChecks = false;
        }
        if (config.features.abstractTypeRuntimeChecks === undefined) {
            config.features.abstractTypeRuntimeChecks = defaults.features.abstractTypeRuntimeChecks;
        }
    }
    config.plugins = (_d = config.plugins) !== null && _d !== void 0 ? _d : [];
    config.nonNullDefaults = Object.assign(Object.assign({}, defaults.nonNullDefaults), (_e = config.nonNullDefaults) !== null && _e !== void 0 ? _e : {});
    return config;
} //# sourceMappingURL=builder.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/lang.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDL_HEADER",
    ()=>SDL_HEADER,
    "TYPEGEN_CONFIG_WARNING",
    ()=>TYPEGEN_CONFIG_WARNING,
    "TYPEGEN_HEADER",
    ()=>TYPEGEN_HEADER
]);
const SDL_HEADER = `### This file was generated by Nexus Schema
### Do not make changes to this file directly
`;
const TYPEGEN_HEADER = `/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */
`;
const TYPEGEN_CONFIG_WARNING = `/**
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */
`; //# sourceMappingURL=lang.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenAutoConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCALAR_TYPES",
    ()=>SCALAR_TYPES,
    "typegenAutoConfig",
    ()=>typegenAutoConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/lang.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
;
;
;
const SCALAR_TYPES = {
    Int: 'number',
    String: 'string',
    ID: 'string',
    Float: 'number',
    Boolean: 'boolean'
};
function typegenAutoConfig(options, contextType) {
    return (schema, outputPath)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const { headers, skipTypes = [
                'Query',
                'Mutation',
                'Subscription'
            ], mapping: _sourceTypeMap, debug } = options;
            const typeMap = schema.getTypeMap();
            const typesToIgnore = new Set();
            const typesToIgnoreRegex = [];
            const allImportsMap = {};
            const importsMap = {};
            const sourceTypeMap = Object.assign(Object.assign({}, SCALAR_TYPES), _sourceTypeMap);
            const forceImports = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objValues"])(sourceTypeMap).concat(typeof contextType === 'string' ? contextType || '' : '').map((t)=>{
                const match = t.match(/^(\w+)\./);
                return match ? match[1] : null;
            }).filter((f)=>f));
            skipTypes.forEach((skip)=>{
                if (typeof skip === 'string') {
                    typesToIgnore.add(skip);
                } else if (skip instanceof RegExp) {
                    typesToIgnoreRegex.push(skip);
                } else {
                    throw new Error('Invalid type for options.skipTypes, expected string or RegExp');
                }
            });
            const typeSources = yield Promise.all(options.modules.map((source)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                    // Keeping all of this in here so if we don't have any sources
                    // e.g. in the Playground, it doesn't break things.
                    // Yeah, this doesn't exist in Node 6, but since this is a new
                    // lib and Node 6 is close to EOL so if you really need it, open a PR :)
                    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
                    const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
                    const readFile = util.promisify(fs.readFile);
                    const { module: pathOrModule, glob = true, onlyTypes, alias, typeMatch } = source;
                    if (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](pathOrModule) && __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["extname"](pathOrModule) !== '.ts') {
                        return console.warn(`Nexus Schema Typegen: Expected module ${pathOrModule} to be an absolute path to a TypeScript module, skipping.`);
                    }
                    let resolvedPath;
                    let fileContents;
                    try {
                        resolvedPath = (()=>{
                            const e = new Error("Cannot find module as expression is too dynamic");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })();
                        if (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["extname"](resolvedPath) !== '.ts') {
                            resolvedPath = findTypingForFile(resolvedPath, pathOrModule);
                        }
                        fileContents = yield readFile(resolvedPath, 'utf-8');
                    } catch (e) {
                        if (e instanceof Error && e.message.indexOf('Cannot find module') !== -1) {
                            console.error(`GraphQL Nexus: Unable to find file or module ${pathOrModule}, skipping`);
                        } else {
                            console.error(e.message);
                        }
                        return null;
                    }
                    const importPath = (__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](pathOrModule) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relativePathTo"])(resolvedPath, outputPath) : pathOrModule).replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeScriptFileExtension"], '');
                    if (allImportsMap[alias] && allImportsMap[alias] !== importPath) {
                        return console.warn(`Nexus Schema Typegen: Cannot have multiple type sources ${importsMap[alias]} and ${pathOrModule} with the same alias ${alias}, skipping`);
                    }
                    allImportsMap[alias] = importPath;
                    if (forceImports.has(alias)) {
                        importsMap[alias] = [
                            importPath,
                            glob
                        ];
                        forceImports.delete(alias);
                    }
                    return {
                        alias,
                        glob,
                        importPath,
                        fileContents,
                        onlyTypes,
                        typeMatch: typeMatch || defaultTypeMatcher
                    };
                })));
            const builtinScalars = new Set(Object.keys(SCALAR_TYPES));
            Object.keys(typeMap).forEach((typeName)=>{
                if (typeName.startsWith('__')) {
                    return;
                }
                if (typesToIgnore.has(typeName)) {
                    return;
                }
                if (typesToIgnoreRegex.some((r)=>r.test(typeName))) {
                    return;
                }
                if (sourceTypeMap[typeName]) {
                    return;
                }
                if (builtinScalars.has(typeName)) {
                    return;
                }
                const type = schema.getType(typeName);
                // For now we'll say that if it's output type it can be backed
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isOutputType"])(type)) {
                    for(let i = 0; i < typeSources.length; i++){
                        const typeSource = typeSources[i];
                        if (!typeSource) {
                            continue;
                        }
                        // If we've specified an array of "onlyTypes" to match ensure the
                        // `typeName` falls within that list.
                        if (typeSource.onlyTypes) {
                            if (!typeSource.onlyTypes.some((t)=>{
                                return t instanceof RegExp ? t.test(typeName) : t === typeName;
                            })) {
                                continue;
                            }
                        }
                        const { fileContents, importPath, glob, alias, typeMatch } = typeSource;
                        const typeRegex = typeMatch(type, defaultTypeMatcher(type)[0]);
                        const matched = firstMatch(fileContents, Array.isArray(typeRegex) ? typeRegex : [
                            typeRegex
                        ]);
                        if (matched) {
                            if (debug) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["log"])(`Matched type - ${typeName} in "${importPath}" - ${alias}.${matched[1]}`);
                            }
                            importsMap[alias] = [
                                importPath,
                                glob
                            ];
                            sourceTypeMap[typeName] = `${alias}.${matched[1]}`;
                        } else {
                            if (debug) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["log"])(`No match for ${typeName} in "${importPath}" using ${typeRegex}`);
                            }
                        }
                    }
                }
            });
            if (forceImports.size > 0) {
                console.error(`Missing required typegen import: ${Array.from(forceImports)}`);
            }
            const imports = [];
            Object.keys(importsMap).sort().forEach((alias)=>{
                const [importPath, glob] = importsMap[alias];
                const safeImportPath = importPath.replace(/\\+/g, '/');
                imports.push(`import type ${glob ? '* as ' : ''}${alias} from "${safeImportPath}"`);
            });
            const typegenInfo = {
                headers: headers || [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TYPEGEN_HEADER"]
                ],
                sourceTypeMap,
                imports,
                contextTypeImport: contextType,
                nexusSchemaImportId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOwnPackage"])().name
            };
            return typegenInfo;
        });
}
function findTypingForFile(absolutePath, pathOrModule) {
    // First try to find the "d.ts" adjacent to the file
    try {
        const typeDefPath = absolutePath.replace(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["extname"](absolutePath), '.d.ts');
        (()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        return typeDefPath;
    } catch (e) {
        console.error(e);
    }
    // TODO: need to figure out cases where it's a node module
    // and "typings" is set in the package.json
    throw new Error(`Unable to find typings associated with ${pathOrModule}, skipping`);
}
const firstMatch = (fileContents, typeRegex)=>{
    for(let i = 0; i < typeRegex.length; i++){
        const regex = typeRegex[i];
        const match = regex.exec(fileContents);
        if (match) {
            return match;
        }
    }
    return null;
};
const defaultTypeMatcher = (type)=>{
    return [
        new RegExp(`(?:interface|type|class|enum)\\s+(${type.name})\\W`, 'g')
    ];
}; //# sourceMappingURL=typegenAutoConfig.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenFormatPrettier.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "typegenFormatPrettier",
    ()=>typegenFormatPrettier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function typegenFormatPrettier(prettierConfig) {
    return function formatTypegen(content, type) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            let prettier;
            /* istanbul ignore next */ try {
                prettier = __turbopack_context__.r("[externals]/prettier [external] (prettier, cjs, [project]/node_modules/.bun/prettier@2.8.8/node_modules/prettier)");
            } catch (_a) {
                console.warn('It looks like you provided a `prettierConfig` option to GraphQL Nexus, but you do not have prettier ' + 'installed as a dependency in your project. Please add it as a peerDependency of nexus to use this feature. ' + 'Skipping formatting.');
                return content;
            }
            let prettierConfigResolved;
            if (typeof prettierConfig === 'string') {
                /* istanbul ignore if */ if (!__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](prettierConfig)) {
                    console.error(new Error(`Expected prettierrc path to be absolute, saw ${prettierConfig}. Skipping formatting.`));
                    return content;
                }
                prettierConfigResolved = yield prettier.resolveConfig('ignore_this', {
                    config: prettierConfig
                }); // non-null assert b/c config file is explicitly passed
            } else {
                prettierConfigResolved = prettierConfig;
            }
            return prettier.format(content, Object.assign(Object.assign({}, prettierConfigResolved), {
                parser: type === 'types' ? 'typescript' : 'graphql'
            }));
        });
    };
} //# sourceMappingURL=typegenFormatPrettier.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenPrinter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypegenPrinter",
    ()=>TypegenPrinter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/scalars.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/lang.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/extensions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
const SpecifiedScalars = {
    ID: 'string',
    String: 'string',
    Float: 'number',
    Int: 'number',
    Boolean: 'boolean'
};
class TypegenPrinter {
    constructor(schema, typegenInfo){
        this.schema = schema;
        this.typegenInfo = typegenInfo;
        this.printObj = (space, source)=>(val, key)=>{
                return [
                    `${space}${key}: { // ${source}`
                ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(val, (v2, k2)=>{
                    return `${space}  ${k2}${v2[0]} ${v2[1]}`;
                })).concat(`${space}}`).join('\n');
            };
        this.groupedTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupTypes"])(schema);
        this.printImports = {};
        this.hasDiscriminatedTypes = false;
    }
    print() {
        const body = [
            this.printCommon(),
            this.printPlugins()
        ].join('\n\n');
        return [
            this.printHeaders(),
            body
        ].join('\n\n');
    }
    printConfigured() {
        if (this.typegenInfo.globalsPath) {
            const plugins = this.printPlugins();
            const globalTypes = [
                this.printHeadersGlobal(),
                this.printDynamicImport(true),
                plugins
            ].join('\n\n');
            // Reset printImports for the imports needed in the types
            this.printImports = {};
            const common = this.printCommon();
            const tsTypes = [
                this.printHeadersCommon(),
                common
            ].join('\n\n');
            return {
                tsTypes,
                globalTypes
            };
        }
        return {
            tsTypes: this.print(),
            globalTypes: null
        };
    }
    printCommon() {
        return [
            this.printInputTypeMap(),
            this.printEnumTypeMap(),
            this.printScalarTypeMap(),
            this.printObjectTypeMap(),
            this.printInterfaceTypeMap(),
            this.printUnionTypeMap(),
            this.printRootTypeDef(),
            this.printAllTypesMap(),
            this.printFieldTypesMap(),
            this.printFieldTypeNamesMap(),
            this.printArgTypeMap(),
            this.printAbstractTypeMembers(),
            this.printInheritedFieldMap(),
            this.printTypeNames('object', 'NexusGenObjectNames', 'NexusGenObjects'),
            this.printTypeNames('input', 'NexusGenInputNames', 'NexusGenInputs'),
            this.printTypeNames('enum', 'NexusGenEnumNames', 'NexusGenEnums'),
            this.printTypeNames('interface', 'NexusGenInterfaceNames', 'NexusGenInterfaces'),
            this.printTypeNames('scalar', 'NexusGenScalarNames', 'NexusGenScalars'),
            this.printTypeNames('union', 'NexusGenUnionNames', 'NexusGenUnions'),
            this.printIsTypeOfObjectTypeNames('NexusGenObjectsUsingAbstractStrategyIsTypeOf'),
            this.printResolveTypeAbstractTypes('NexusGenAbstractsUsingStrategyResolveType'),
            this.printFeaturesConfig('NexusGenFeaturesConfig'),
            this.printGenTypeMap()
        ].join('\n\n');
    }
    printHeaders() {
        return [
            this.printHeadersCommon(),
            this.printHeadersGlobal()
        ].join('\n');
    }
    printHeadersCommon() {
        return [
            this.typegenInfo.headers.join('\n'),
            this.typegenInfo.imports.join('\n'),
            this.printDynamicImport()
        ].join('\n');
    }
    printHeadersGlobal() {
        var _a, _b;
        const headers = [
            this.printDynamicInputFieldDefinitions(),
            this.printDynamicOutputFieldDefinitions(),
            this.printDynamicOutputPropertyDefinitions(),
            GLOBAL_DECLARATION
        ];
        if (this.typegenInfo.globalsPath) {
            headers.unshift(`import type { NexusGenTypes } from '${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relativePathTo"])(this.typegenInfo.typegenPath, (_a = this.typegenInfo.globalsPath) !== null && _a !== void 0 ? _a : '')}'`);
            headers.unshift(...(_b = this.typegenInfo.globalsHeaders) !== null && _b !== void 0 ? _b : []);
            headers.unshift(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TYPEGEN_HEADER"]);
        }
        return headers.join('\n');
    }
    printGenTypeMap() {
        return [
            `export interface NexusGenTypes {`
        ].concat([
            `  context: ${this.printContext()};`,
            `  inputTypes: NexusGenInputs;`,
            `  rootTypes: NexusGenRootTypes;`,
            `  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;`,
            `  argTypes: NexusGenArgTypes;`,
            `  fieldTypes: NexusGenFieldTypes;`,
            `  fieldTypeNames: NexusGenFieldTypeNames;`,
            `  allTypes: NexusGenAllTypes;`,
            `  typeInterfaces: NexusGenTypeInterfaces;`,
            `  objectNames: NexusGenObjectNames;`,
            `  inputNames: NexusGenInputNames;`,
            `  enumNames: NexusGenEnumNames;`,
            `  interfaceNames: NexusGenInterfaceNames;`,
            `  scalarNames: NexusGenScalarNames;`,
            `  unionNames: NexusGenUnionNames;`,
            `  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];`,
            `  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];`,
            `  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']`,
            `  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];`,
            `  abstractTypeMembers: NexusGenAbstractTypeMembers;`,
            `  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;`,
            `  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;`,
            `  features: NexusGenFeaturesConfig;`
        ]).concat('}').join('\n');
    }
    printDynamicImport(forGlobal = false) {
        var _a;
        const { sourceTypings } = this.schema.extensions.nexus.config;
        const { contextTypeImport } = this.typegenInfo;
        const imports = [];
        const importMap = {};
        const outputPath = this.typegenInfo.typegenPath;
        const nexusSchemaImportId = (_a = this.typegenInfo.nexusSchemaImportId) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOwnPackage"])().name;
        if (!this.printImports[nexusSchemaImportId]) {
            this.maybeAddCoreImport(forGlobal);
        }
        if (!forGlobal) {
            if (contextTypeImport) {
                const importPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveImportPath"])(contextTypeImport, 'context', outputPath);
                importMap[importPath] = importMap[importPath] || new Set();
                importMap[importPath].add(contextTypeImport.alias ? `${contextTypeImport.export} as ${contextTypeImport.alias}` : contextTypeImport.export);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(sourceTypings, (rootType, typeName)=>{
                if (typeof rootType !== 'string') {
                    const importPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveImportPath"])(rootType, typeName, outputPath);
                    importMap[importPath] = importMap[importPath] || new Set();
                    importMap[importPath].add(rootType.alias ? `${rootType.export} as ${rootType.alias}` : rootType.export);
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(importMap, (val, key)=>{
                imports.push(`import type { ${Array.from(val).join(', ')} } from ${JSON.stringify(key)}`);
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(this.printImports, (val, key)=>{
            const { default: def } = val, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(val, [
                "default"
            ]);
            const idents = [];
            if (def) {
                idents.push(def);
            }
            let bindings = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(rest, (alias, binding)=>{
                bindings.push(alias !== true ? `${binding} as ${alias}` : `${binding}`);
            });
            if (bindings.length) {
                idents.push(`{ ${bindings.join(', ')} }`);
            }
            imports.push(`import type ${idents.join(', ')} from ${JSON.stringify(key)}`);
        });
        return imports.join('\n');
    }
    maybeAddCoreImport(forGlobal = false) {
        var _a;
        const nexusSchemaImportId = (_a = this.typegenInfo.nexusSchemaImportId) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOwnPackage"])().name;
        const { dynamicFields: { dynamicInputFields, dynamicOutputFields } } = this.schema.extensions.nexus.config;
        let shouldAdd = false;
        const hasDynamicFields = [
            dynamicInputFields,
            dynamicOutputFields
        ].some((o)=>Object.keys(o).length > 0);
        if (!this.typegenInfo.globalsPath) {
            shouldAdd = hasDynamicFields || this.hasDiscriminatedTypes;
        } else {
            shouldAdd = forGlobal ? hasDynamicFields : this.hasDiscriminatedTypes;
        }
        if (shouldAdd) {
            this.printImports[nexusSchemaImportId] = {
                core: true
            };
        }
    }
    printDynamicInputFieldDefinitions() {
        const { dynamicInputFields } = this.schema.extensions.nexus.config.dynamicFields;
        // If there is nothing custom... exit
        if (!Object.keys(dynamicInputFields).length) {
            return [];
        }
        return [
            `declare global {`,
            `  interface NexusGenCustomInputMethods<TypeName extends string> {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(dynamicInputFields, (val, key)=>{
            if (typeof val === 'string') {
                const baseType = this.schema.getType(val);
                return this.prependDoc(`    ${key}<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // ${JSON.stringify(val)};`, baseType === null || baseType === void 0 ? void 0 : baseType.description);
            }
            return this.prependDoc(`    ${key}${val.value.typeDefinition || `(...args: any): void`}`, val.value.typeDescription);
        })).concat([
            `  }`,
            `}`
        ]).join('\n');
    }
    printDynamicOutputFieldDefinitions() {
        const { dynamicOutputFields } = this.schema.extensions.nexus.config.dynamicFields;
        // If there is nothing custom... exit
        if (!Object.keys(dynamicOutputFields).length) {
            return [];
        }
        return [
            `declare global {`,
            `  interface NexusGenCustomOutputMethods<TypeName extends string> {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(dynamicOutputFields, (val, key)=>{
            if (typeof val === 'string') {
                const baseType = this.schema.getType(val);
                return this.prependDoc(`    ${key}<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // ${JSON.stringify(val)};`, baseType === null || baseType === void 0 ? void 0 : baseType.description);
            }
            return this.prependDoc(`    ${key}${val.value.typeDefinition || `(...args: any): void`}`, val.value.typeDescription);
        })).concat([
            `  }`,
            `}`
        ]).join('\n');
    }
    prependDoc(typeDef, typeDescription) {
        let outStr = '';
        if (typeDescription) {
            let parts = typeDescription.split('\n').map((f)=>f.trimLeft());
            if (parts[0] === '') {
                parts = parts.slice(1);
            }
            if (parts[parts.length - 1] === '') {
                parts = parts.slice(0, -1);
            }
            outStr = [
                '    /**',
                ...parts.map((p)=>`     *${p ? ` ${p}` : ''}`),
                '     */'
            ].join('\n') + '\n';
        }
        return `${outStr}${typeDef}`;
    }
    printDynamicOutputPropertyDefinitions() {
        const { dynamicOutputProperties } = this.schema.extensions.nexus.config.dynamicFields;
        // If there is nothing custom... exit
        if (!Object.keys(dynamicOutputProperties).length) {
            return [];
        }
        return [
            `declare global {`,
            `  interface NexusGenCustomOutputProperties<TypeName extends string> {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(dynamicOutputProperties, (val, key)=>{
            return this.prependDoc(`    ${key}${val.value.typeDefinition || `: any`}`, val.value.typeDescription);
        })).concat([
            `  }`,
            `}`
        ]).join('\n');
    }
    printInheritedFieldMap() {
        const hasInterfaces = [];
        const withInterfaces = hasInterfaces.concat(this.groupedTypes.object, this.groupedTypes.interface.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["graphql15InterfaceType"])).map((o)=>{
            if (o.getInterfaces().length) {
                return [
                    o.name,
                    o.getInterfaces().map((i)=>i.name)
                ];
            }
            return null;
        }).filter((f)=>f);
        return [
            'export interface NexusGenTypeInterfaces {'
        ].concat(withInterfaces.map(([name, interfaces])=>{
            return `  ${name}: ${interfaces.map((i)=>JSON.stringify(i)).join(' | ')}`;
        })).concat('}').join('\n');
    }
    printContext() {
        var _a, _b;
        return ((_a = this.typegenInfo.contextTypeImport) === null || _a === void 0 ? void 0 : _a.alias) || ((_b = this.typegenInfo.contextTypeImport) === null || _b === void 0 ? void 0 : _b.export) || 'any';
    }
    printAbstractTypeMembers() {
        return this.printTypeInterface('NexusGenAbstractTypeMembers', this.buildAbstractTypeMembers());
    }
    buildAbstractTypeMembers() {
        const sourceMap = {};
        const abstractTypes = [];
        abstractTypes.concat(this.groupedTypes.union).concat(this.groupedTypes.interface).forEach((type)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type)) {
                const possibleNames = this.schema.getPossibleTypes(type).map((t)=>t.name);
                if (possibleNames.length > 0) {
                    sourceMap[type.name] = possibleNames.map((val)=>JSON.stringify(val)).join(' | ');
                }
            } else {
                sourceMap[type.name] = type.getTypes().map((t)=>JSON.stringify(t.name)).join(' | ');
            }
        });
        return sourceMap;
    }
    printTypeNames(name, exportName, source) {
        const obj = this.groupedTypes[name];
        const typeDef = obj.length === 0 ? 'never' : `keyof ${source}`;
        return `export type ${exportName} = ${typeDef};`;
    }
    printIsTypeOfObjectTypeNames(exportName) {
        const objectTypes = this.groupedTypes.object.filter((o)=>o.isTypeOf !== undefined);
        const typeDef = objectTypes.length === 0 ? 'never' : objectTypes.map((o)=>JSON.stringify(o.name)).sort().join(' | ');
        return `export type ${exportName} = ${typeDef};`;
    }
    printResolveTypeAbstractTypes(exportName) {
        const abstractTypes = [
            ...this.groupedTypes.interface,
            ...this.groupedTypes.union
        ].filter((o)=>o.resolveType !== undefined);
        const typeDef = abstractTypes.length === 0 ? 'never' : abstractTypes.map((o)=>JSON.stringify(o.name)).sort().join(' | ');
        return `export type ${exportName} = ${typeDef};`;
    }
    printFeaturesConfig(exportName) {
        var _a, _b;
        const abstractTypes = (_b = (_a = this.schema.extensions.nexus.config.features) === null || _a === void 0 ? void 0 : _a.abstractTypeStrategies) !== null && _b !== void 0 ? _b : {};
        const unionProps = renderObject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapValues"])(abstractTypes, (val)=>val !== null && val !== void 0 ? val : false));
        return [
            `export type ${exportName} = {`
        ].concat(`  abstractTypeStrategies: ${unionProps}`).concat('}').join('\n');
    }
    buildEnumTypeMap() {
        const enumMap = {};
        this.groupedTypes.enum.forEach((e)=>{
            const sourceType = this.resolveSourceType(e.name);
            if (sourceType) {
                enumMap[e.name] = sourceType;
            } else {
                const values = e.getValues().map((val)=>JSON.stringify(val.value));
                enumMap[e.name] = values.join(' | ');
            }
        });
        return enumMap;
    }
    buildInputTypeMap() {
        const inputObjMap = {};
        this.groupedTypes.input.forEach((input)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(input.getFields(), (field)=>{
                inputObjMap[input.name] = inputObjMap[input.name] || {};
                inputObjMap[input.name][field.name] = this.normalizeArg(field);
            });
        });
        return inputObjMap;
    }
    buildScalarTypeMap() {
        const scalarMap = {};
        this.groupedTypes.scalar.forEach((e)=>{
            var _a;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSpecifiedScalarType"])(e)) {
                scalarMap[e.name] = (_a = this.resolveSourceType(e.name)) !== null && _a !== void 0 ? _a : SpecifiedScalars[e.name];
                return;
            }
            const sourceType = this.resolveSourceType(e.name);
            if (sourceType) {
                scalarMap[e.name] = sourceType;
            } else {
                scalarMap[e.name] = 'any';
            }
        });
        return scalarMap;
    }
    printInputTypeMap() {
        const inputTypeMap = this.buildInputTypeMap();
        if (this.typegenInfo.declareInputs) {
            const declaredInputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(inputTypeMap, (fields, inputName)=>this.printNamedObj(inputName, fields));
            return [
                ...declaredInputs,
                this.printNamedMap('NexusGenInputs', inputTypeMap)
            ].join('\n\n');
        }
        return this.printTypeFieldInterface('NexusGenInputs', inputTypeMap, 'input type');
    }
    printEnumTypeMap() {
        const enumTypeMap = this.buildEnumTypeMap();
        if (this.typegenInfo.declareInputs) {
            return [
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(enumTypeMap, (val, name)=>`export type ${name} = ${val}`),
                this.printNamedMap('NexusGenEnums', enumTypeMap)
            ].join('\n\n');
        }
        return this.printTypeInterface('NexusGenEnums', enumTypeMap);
    }
    printScalarTypeMap() {
        return this.printTypeInterface('NexusGenScalars', this.buildScalarTypeMap());
    }
    shouldDiscriminateType(abstractType, objectType) {
        var _a, _b;
        if (!((_b = (_a = this.schema.extensions.nexus.config.features) === null || _a === void 0 ? void 0 : _a.abstractTypeStrategies) === null || _b === void 0 ? void 0 : _b.__typename)) {
            return false;
        }
        if (abstractType.resolveType !== undefined) {
            return 'optional';
        }
        if (objectType.isTypeOf !== undefined) {
            return 'optional';
        }
        return 'required';
    }
    maybeDiscriminate(abstractType, objectType) {
        const requiredOrOptional = this.shouldDiscriminateType(abstractType, objectType);
        if (requiredOrOptional === false) {
            return `NexusGenRootTypes['${objectType.name}']`;
        }
        this.hasDiscriminatedTypes = true;
        return `core.Discriminate<'${objectType.name}', '${requiredOrOptional}'>`;
    }
    buildRootTypeMap(hasFields) {
        const rootTypeMap = {};
        hasFields.forEach((type)=>{
            const rootTyping = this.resolveSourceType(type.name);
            if (rootTyping) {
                rootTypeMap[type.name] = rootTyping;
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUnionType"])(type)) {
                rootTypeMap[type.name] = type.getTypes().map((t)=>this.maybeDiscriminate(type, t)).join(' | ');
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type)) {
                const possibleRoots = this.schema.getPossibleTypes(type).map((t)=>this.maybeDiscriminate(type, t));
                if (possibleRoots.length > 0) {
                    rootTypeMap[type.name] = possibleRoots.join(' | ');
                } else {
                    rootTypeMap[type.name] = 'any';
                }
            } else if (type.name === 'Query' || type.name === 'Mutation') {
                rootTypeMap[type.name] = '{}';
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(type.getFields(), (field)=>{
                    const obj = rootTypeMap[type.name] = rootTypeMap[type.name] || {};
                    if (!this.hasResolver(field, type)) {
                        if (typeof obj !== 'string') {
                            obj[field.name] = [
                                this.argSeparator(field.type, false),
                                this.printOutputType(field.type)
                            ];
                        }
                    }
                });
            }
        });
        return rootTypeMap;
    }
    resolveSourceType(typeName) {
        const rootTyping = this.schema.extensions.nexus.config.sourceTypings[typeName];
        if (rootTyping) {
            return typeof rootTyping === 'string' ? rootTyping : rootTyping.export;
        }
        return this.typegenInfo.sourceTypeMap[typeName];
    }
    hasResolver(field, // Used in test mocking
    _type) {
        if (field.extensions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$extensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasNexusExtension"])(field.extensions.nexus)) {
            return field.extensions.nexus.hasDefinedResolver;
        }
        return Boolean(field.resolve);
    }
    printObjectTypeMap() {
        return this.printRootTypeFieldInterface('NexusGenObjects', this.buildRootTypeMap(this.groupedTypes.object));
    }
    printInterfaceTypeMap() {
        return this.printRootTypeFieldInterface('NexusGenInterfaces', this.buildRootTypeMap(this.groupedTypes.interface));
    }
    printUnionTypeMap() {
        return this.printRootTypeFieldInterface('NexusGenUnions', this.buildRootTypeMap(this.groupedTypes.union));
    }
    printRootTypeDef() {
        const toJoin = [];
        if (this.groupedTypes.interface.length) {
            toJoin.push('NexusGenInterfaces');
        }
        if (this.groupedTypes.object.length) {
            toJoin.push('NexusGenObjects');
        }
        if (this.groupedTypes.union.length) {
            toJoin.push('NexusGenUnions');
        }
        return `export type NexusGenRootTypes = ${toJoin.join(' & ')}`;
    }
    printAllTypesMap() {
        const toJoin = [
            'NexusGenRootTypes'
        ];
        if (this.groupedTypes.scalar.length) {
            toJoin.push('NexusGenScalars');
        }
        if (this.groupedTypes.enum.length) {
            toJoin.push('NexusGenEnums');
        }
        return `export type NexusGenAllTypes = ${toJoin.join(' & ')}`;
    }
    buildArgTypeMap() {
        const argTypeMap = {};
        const hasFields = [];
        hasFields.concat(this.groupedTypes.object).concat(this.groupedTypes.interface).forEach((type)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(type.getFields(), (field)=>{
                if (field.args.length > 0) {
                    argTypeMap[type.name] = argTypeMap[type.name] || {};
                    argTypeMap[type.name][field.name] = field.args.reduce((obj, arg)=>{
                        obj[arg.name] = this.normalizeArg(arg);
                        return obj;
                    }, {});
                }
            });
        });
        return argTypeMap;
    }
    printArgTypeMap() {
        const argTypeMap = this.buildArgTypeMap();
        if (this.typegenInfo.declareInputs) {
            const declaredArgs = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(argTypeMap, (fields, typeName)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(fields, (args, fieldName)=>{
                    declaredArgs.push(this.printNamedObj(this.getArgsName(typeName, fieldName), args));
                });
            });
            return [
                ...declaredArgs,
                this.printArgTypeFieldInterface(argTypeMap)
            ].join('\n\n');
        }
        return this.printArgTypeFieldInterface(argTypeMap);
    }
    getArgsName(typeName, fieldName) {
        return `${typeName}${fieldName.slice(0, 1).toUpperCase().concat(fieldName.slice(1))}Args`;
    }
    printNamedObj(name, obj) {
        return [
            `export interface ${name} {`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(obj, (val, key)=>`  ${key}${val[0]} ${val[1]}`),
            `}`
        ].join('\n');
    }
    printNamedMap(name, obj) {
        return [
            `export interface ${name} {`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(obj, (val, key)=>`  ${key}: ${key}`),
            `}`
        ].join('\n');
    }
    buildReturnTypeMap() {
        const returnTypeMap = {};
        const hasFields = [];
        hasFields.concat(this.groupedTypes.object).concat(this.groupedTypes.interface).forEach((type)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(type.getFields(), (field)=>{
                returnTypeMap[type.name] = returnTypeMap[type.name] || {};
                returnTypeMap[type.name][field.name] = [
                    ':',
                    this.printOutputType(field.type)
                ];
            });
        });
        return returnTypeMap;
    }
    buildReturnTypeNamesMap() {
        const returnTypeMap = {};
        const hasFields = [];
        hasFields.concat(this.groupedTypes.object).concat(this.groupedTypes.interface).forEach((type)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(type.getFields(), (field)=>{
                returnTypeMap[type.name] = returnTypeMap[type.name] || {};
                returnTypeMap[type.name][field.name] = [
                    ':',
                    `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNamedType"])(field.type).name}'`
                ];
            });
        });
        return returnTypeMap;
    }
    printOutputType(type) {
        const returnType = this.typeToArr(type);
        function combine(item) {
            if (item.length === 1) {
                if (Array.isArray(item[0])) {
                    const toPrint = combine(item[0]);
                    return toPrint.indexOf('null') === -1 ? `${toPrint}[]` : `Array<${toPrint}>`;
                }
                return item[0];
            }
            if (Array.isArray(item[1])) {
                const toPrint = combine(item[1]);
                return toPrint.indexOf('null') === -1 ? `${toPrint}[] | null` : `Array<${toPrint}> | null`;
            }
            return `${item[1]} | null`;
        }
        return `${combine(returnType)}; // ${type}`;
    }
    typeToArr(type) {
        const typing = [];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type)) {
            type = type.ofType;
        } else {
            typing.push(null);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isListType"])(type)) {
            typing.push(this.typeToArr(type.ofType));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isScalarType"])(type)) {
            typing.push(this.printScalar(type));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumType"])(type)) {
            if (this.typegenInfo.declareInputs) {
                typing.push(type.name);
            } else {
                typing.push(`NexusGenEnums['${type.name}']`);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(type) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceType"])(type) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUnionType"])(type)) {
            typing.push(`NexusGenRootTypes['${type.name}']`);
        }
        return typing;
    }
    printFieldTypesMap() {
        return this.printTypeFieldInterface('NexusGenFieldTypes', this.buildReturnTypeMap(), 'field return type');
    }
    printFieldTypeNamesMap() {
        return this.printTypeFieldInterface('NexusGenFieldTypeNames', this.buildReturnTypeNamesMap(), 'field return type name');
    }
    normalizeArg(arg) {
        return [
            this.argSeparator(arg.type, Boolean(arg.defaultValue)),
            this.argTypeRepresentation(arg.type)
        ];
    }
    argSeparator(type, hasDefaultValue) {
        if (hasDefaultValue || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(type)) {
            return ':';
        }
        return '?:';
    }
    argTypeRepresentation(arg) {
        const argType = this.argTypeArr(arg);
        function combine(item) {
            if (item.length === 1) {
                if (Array.isArray(item[0])) {
                    const toPrint = combine(item[0]);
                    return toPrint.indexOf('null') === -1 ? `${toPrint}[]` : `Array<${toPrint}>`;
                }
                return item[0];
            }
            if (Array.isArray(item[1])) {
                const toPrint = combine(item[1]);
                return toPrint.indexOf('null') === -1 ? `${toPrint}[] | null` : `Array<${toPrint}> | null`;
            }
            return `${item[1]} | null`;
        }
        return `${combine(argType)}; // ${arg}`;
    }
    argTypeArr(arg) {
        const typing = [];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNonNullType"])(arg)) {
            arg = arg.ofType;
        } else {
            typing.push(null);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isListType"])(arg)) {
            typing.push(this.argTypeArr(arg.ofType));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isScalarType"])(arg)) {
            typing.push(this.printScalar(arg));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEnumType"])(arg)) {
            if (this.typegenInfo.declareInputs) {
                typing.push(arg.name);
            } else {
                typing.push(`NexusGenEnums['${arg.name}']`);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInputObjectType"])(arg)) {
            if (this.typegenInfo.declareInputs) {
                typing.push(arg.name);
            } else {
                typing.push(`NexusGenInputs['${arg.name}']`);
            }
        }
        return typing;
    }
    printTypeInterface(interfaceName, typeMapping) {
        return [
            `export interface ${interfaceName} {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(typeMapping, (val, key)=>`  ${key}: ${val}`)).concat('}').join('\n');
    }
    printRootTypeFieldInterface(interfaceName, typeMapping) {
        return [
            `export interface ${interfaceName} {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(typeMapping, (val, key)=>{
            if (typeof val === 'string') {
                return `  ${key}: ${val};`;
            }
            if (Object.keys(val).length === 0) {
                return `  ${key}: {};`;
            }
            return this.printObj('  ', 'root type')(val, key);
        })).concat('}').join('\n');
    }
    printTypeFieldInterface(interfaceName, typeMapping, source) {
        return [
            `export interface ${interfaceName} {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(typeMapping, this.printObj('  ', source))).concat('}').join('\n');
    }
    printArgTypeFieldInterface(typeMapping) {
        return [
            `export interface NexusGenArgTypes {`
        ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(typeMapping, (val, typeName)=>{
            if (this.typegenInfo.declareInputs) {
                return [
                    `  ${typeName}: {`
                ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(val, (_, fieldName)=>`    ${fieldName}: ${this.getArgsName(typeName, fieldName)}`)).concat('  }').join('\n');
            }
            return [
                `  ${typeName}: {`
            ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(val, this.printObj('    ', 'args'))).concat('  }').join('\n');
        })).concat('}').join('\n');
    }
    printScalar(type) {
        var _a;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSpecifiedScalarType"])(type)) {
            return (_a = this.resolveSourceType(type.name)) !== null && _a !== void 0 ? _a : SpecifiedScalars[type.name];
        }
        return `NexusGenScalars['${type.name}']`;
    }
    printPlugins() {
        const pluginFieldExt = [
            `  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {`
        ];
        const pluginInputFieldExt = [
            `  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {`
        ];
        const pluginArgExt = [
            `  interface NexusGenPluginArgConfig {`
        ];
        const pluginSchemaExt = [
            `  interface NexusGenPluginSchemaConfig {`
        ];
        const pluginTypeExt = [
            `  interface NexusGenPluginTypeConfig<TypeName extends string> {`
        ];
        const pluginInputTypeExt = [
            `  interface NexusGenPluginInputTypeConfig<TypeName extends string> {`
        ];
        const printInlineDefs = [];
        const plugins = this.schema.extensions.nexus.config.plugins || [];
        plugins.forEach((plugin)=>{
            if (plugin.config.fieldDefTypes) {
                pluginFieldExt.push(padLeft(this.printType(plugin.config.fieldDefTypes), '    '));
            }
            if (plugin.config.inputFieldDefTypes) {
                pluginInputFieldExt.push(padLeft(this.printType(plugin.config.inputFieldDefTypes), '    '));
            }
            if (plugin.config.objectTypeDefTypes) {
                pluginTypeExt.push(padLeft(this.printType(plugin.config.objectTypeDefTypes), '    '));
            }
            if (plugin.config.inputObjectTypeDefTypes) {
                pluginInputTypeExt.push(padLeft(this.printType(plugin.config.inputObjectTypeDefTypes), '    '));
            }
            if (plugin.config.argTypeDefTypes) {
                pluginArgExt.push(padLeft(this.printType(plugin.config.argTypeDefTypes), '    '));
            }
        });
        return [
            printInlineDefs.join('\n'),
            [
                'declare global {',
                [
                    pluginTypeExt.concat('  }').join('\n'),
                    pluginInputTypeExt.concat('  }').join('\n'),
                    pluginFieldExt.concat('  }').join('\n'),
                    pluginInputFieldExt.concat('  }').join('\n'),
                    pluginSchemaExt.concat('  }').join('\n'),
                    pluginArgExt.concat('  }').join('\n')
                ].join('\n'),
                '}'
            ].join('\n')
        ].join('\n');
    }
    printType(strLike) {
        if (Array.isArray(strLike)) {
            return strLike.map((s)=>this.printType(s)).join('\n');
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPrintedGenTyping"])(strLike)) {
            strLike.imports.forEach((i)=>{
                this.addImport(i);
            });
            return strLike.toString();
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPrintedGenTypingImport"])(strLike)) {
            this.addImport(strLike);
            return '';
        }
        return strLike;
    }
    addImport(i) {
        /* istanbul ignore if */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPrintedGenTypingImport"])(i)) {
            console.warn(`Expected printedGenTypingImport, saw ${i}`);
            return;
        }
        this.printImports[i.config.module] = this.printImports[i.config.module] || {};
        if (i.config.default) {
            this.printImports[i.config.module].default = i.config.default;
        }
        if (i.config.bindings) {
            i.config.bindings.forEach((binding)=>{
                if (typeof binding === 'string') {
                    this.printImports[i.config.module][binding] = true;
                } else {
                    this.printImports[i.config.module][binding[0]] = binding[1];
                }
            });
        }
    }
}
function padLeft(str, padding) {
    return str.split('\n').map((s)=>`${padding}${s}`).join('\n');
}
const GLOBAL_DECLARATION = `
declare global {
  interface NexusGen extends NexusGenTypes {}
}`;
function renderObject(object) {
    return [
        '{',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"])(object, (val, key)=>{
            return `    ${key}: ${val}`;
        }).join('\n'),
        '  }'
    ].join('\n');
} //# sourceMappingURL=typegenPrinter.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenMetadata.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypegenMetadata",
    ()=>TypegenMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$lexicographicSortSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/lexicographicSortSchema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$printSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/printSchema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/lang.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenAutoConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenAutoConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenFormatPrettier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenFormatPrettier.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenPrinter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenPrinter.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class TypegenMetadata {
    constructor(config){
        this.config = config;
    }
    /** Generates the artifacts of the build based on what we know about the schema and how it was defined. */ generateArtifacts(schema) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const sortedSchema = this.sortSchema(schema);
            const { typegen } = this.config.outputs;
            if (this.config.outputs.schema || typegen) {
                const { schemaTypes, tsTypes, globalTypes } = yield this.generateArtifactContents(sortedSchema, typegen);
                if (this.config.outputs.schema) {
                    yield this.writeFile('schema', schemaTypes, this.config.outputs.schema);
                }
                if (typegen) {
                    if (typeof typegen === 'string') {
                        yield this.writeFile('types', tsTypes, typegen);
                    } else {
                        yield this.writeFile('types', tsTypes, typegen.outputPath);
                        if (typeof typegen.globalsPath === 'string') {
                            yield this.writeFile('types', globalTypes !== null && globalTypes !== void 0 ? globalTypes : '', typegen.globalsPath);
                        }
                    }
                }
            }
        });
    }
    generateArtifactContents(schema, typegen) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const result = {
                schemaTypes: this.generateSchemaFile(schema),
                tsTypes: '',
                globalTypes: null
            };
            if (!typegen) {
                return result;
            }
            if (typeof typegen === 'string') {
                result.tsTypes = yield this.generateTypesFile(schema, typegen);
            } else {
                const generateResult = yield this.generateConfiguredTypes(schema, typegen);
                result.tsTypes = generateResult.tsTypes;
                result.globalTypes = generateResult.globalTypes;
            }
            return result;
        });
    }
    sortSchema(schema) {
        let sortedSchema = schema;
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$lexicographicSortSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lexicographicSortSchema"] !== 'undefined') {
            sortedSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$lexicographicSortSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lexicographicSortSchema"])(schema);
        }
        return sortedSchema;
    }
    writeFile(type, output, filePath) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            if (typeof filePath !== 'string' || !__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"](filePath)) {
                return Promise.reject(new Error(`Expected an absolute path to output the Nexus ${type}, saw ${filePath}`));
            }
            const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
            const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
            const [readFile, writeFile, removeFile, mkdir] = [
                util.promisify(fs.readFile),
                util.promisify(fs.writeFile),
                util.promisify(fs.unlink),
                util.promisify(fs.mkdir)
            ];
            let formatTypegen = null;
            if (typeof this.config.formatTypegen === 'function') {
                formatTypegen = this.config.formatTypegen;
            } else if (this.config.prettierConfig) {
                formatTypegen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenFormatPrettier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typegenFormatPrettier"])(this.config.prettierConfig);
            }
            const content = typeof formatTypegen === 'function' ? yield formatTypegen(output, type) : output;
            const [toSave, existing] = yield Promise.all([
                content,
                readFile(filePath, 'utf8').catch(()=>'')
            ]);
            if (toSave !== existing) {
                const dirPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["dirname"](filePath);
                try {
                    yield mkdir(dirPath, {
                        recursive: true
                    });
                } catch (e) {
                    if (e.code !== 'EEXIST') {
                        throw e;
                    }
                }
                // VSCode reacts to file changes better if a file is first deleted,
                // apparently. See issue motivating this logic here:
                // https://github.com/graphql-nexus/schema/issues/247.
                try {
                    yield removeFile(filePath);
                } catch (e) {
                    /* istanbul ignore next */ if (e.code !== 'ENOENT' && e.code !== 'ENOTDIR') {
                        throw e;
                    }
                }
                return writeFile(filePath, toSave);
            }
        });
    }
    /** Generates the schema, adding any directives as necessary */ generateSchemaFile(schema) {
        let printedSchema = this.config.customPrintSchemaFn ? this.config.customPrintSchemaFn(schema) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$printSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printSchema"])(schema);
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SDL_HEADER"],
            printedSchema
        ].join('\n\n');
    }
    /** Generates the type definitions */ generateTypesFile(schema, typegenPath) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const typegenInfo = yield this.getTypegenInfo(schema, typegenPath);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenPrinter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenPrinter"](schema, Object.assign(Object.assign({
                declareInputs: false
            }, typegenInfo), {
                typegenPath
            })).print();
        });
    }
    /** Generates the type definitions */ generateConfiguredTypes(schema, typegen) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            const { outputPath: typegenPath, globalsPath, globalsHeaders, declareInputs = false } = typegen;
            const typegenInfo = yield this.getTypegenInfo(schema, typegenPath);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenPrinter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenPrinter"](schema, Object.assign(Object.assign({}, typegenInfo), {
                typegenPath,
                globalsPath,
                globalsHeaders,
                declareInputs
            })).printConfigured();
        });
    }
    getTypegenInfo(schema, typegenPath) {
        var _a;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
            if ('typegenConfig' in this.config) {
                throw new Error('Error: typegenConfig was removed from the API. Please open an issue if you were using it.');
            }
            if (this.config.sourceTypes) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenAutoConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typegenAutoConfig"])(this.config.sourceTypes, this.config.contextType)(schema, typegenPath || ((_a = this.config.outputs.typegen) === null || _a === void 0 ? void 0 : _a.outputPath) || '');
            }
            return {
                nexusSchemaImportId: this.config.nexusSchemaImportId,
                headers: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$lang$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TYPEGEN_HEADER"]
                ],
                imports: [],
                contextTypeImport: this.config.contextType,
                sourceTypeMap: {}
            };
        });
    }
} //# sourceMappingURL=typegenMetadata.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenUtils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveTypegenConfig",
    ()=>resolveTypegenConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
;
function resolveTypegenConfig(config) {
    const { outputs, shouldGenerateArtifacts = Boolean(!("TURBOPACK compile-time value", "development") || ("TURBOPACK compile-time value", "development") !== 'production') } = config, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__rest"])(config, [
        "outputs",
        "shouldGenerateArtifacts"
    ]);
    const defaultSDLFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"](process.cwd(), 'schema.graphql');
    let typegenFilePath = null;
    let sdlFilePath = null;
    if (outputs === undefined) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProductionStage"])()) {
            sdlFilePath = defaultSDLFilePath;
        }
    } else if (outputs === true) {
        sdlFilePath = defaultSDLFilePath;
    } else if (typeof outputs === 'object') {
        if (outputs.schema === true) {
            sdlFilePath = defaultSDLFilePath;
        } else if (typeof outputs.schema === 'string') {
            sdlFilePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertAbsolutePath"])(outputs.schema, 'outputs.schema');
        } else if (outputs.schema === undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProductionStage"])()) {}
        // handle typegen configuration
        if (typeof outputs.typegen === 'string') {
            typegenFilePath = {
                outputPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertAbsolutePath"])(outputs.typegen, 'outputs.typegen')
            };
        } else if (typeof outputs.typegen === 'object') {
            typegenFilePath = Object.assign(Object.assign({}, outputs.typegen), {
                outputPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertAbsolutePath"])(outputs.typegen.outputPath, 'outputs.typegen.outputPath')
            });
            if (outputs.typegen.globalsPath) {
                typegenFilePath.globalsPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertAbsolutePath"])(outputs.typegen.globalsPath, 'outputs.typegen.globalsPath');
            }
        }
    } else if (outputs !== false) {
        console.warn(`You should specify a configuration value for outputs in Nexus' makeSchema. ` + `Provide one to remove this warning.`);
    }
    return Object.assign(Object.assign({}, rest), {
        nexusSchemaImportId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOwnPackage"])().name,
        outputs: {
            typegen: shouldGenerateArtifacts ? typegenFilePath : null,
            schema: shouldGenerateArtifacts ? sdlFilePath : null
        }
    });
} //# sourceMappingURL=typegenUtils.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/makeSchema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSchema",
    ()=>generateSchema,
    "makeSchema",
    ()=>makeSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenUtils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
;
;
;
;
;
function makeSchema(config) {
    const { schema, missingTypes, finalConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchemaInternal"])(config);
    const typegenConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTypegenConfig"])(finalConfig);
    const sdl = typegenConfig.outputs.schema;
    const typegen = typegenConfig.outputs.typegen;
    if (sdl || typegen) {
        // Generating in the next tick allows us to use the schema
        // in the optional thunk for the typegen config
        const typegenPromise = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenMetadata"](typegenConfig).generateArtifacts(schema);
        if (config.shouldExitAfterGenerateArtifacts) {
            let typegenPath = '(not enabled)';
            if (typegenConfig.outputs.typegen) {
                typegenPath = typegenConfig.outputs.typegen.outputPath;
                if (typegenConfig.outputs.typegen.globalsPath) {
                    typegenPath += ` / ${typegenConfig.outputs.typegen.globalsPath}`;
                }
            }
            typegenPromise.then(()=>{
                console.log(`Generated Artifacts:
          TypeScript Types  ==> ${typegenPath}
          GraphQL Schema    ==> ${typegenConfig.outputs.schema || '(not enabled)'}`);
                process.exit(0);
            }).catch((e)=>{
                console.error(e);
                process.exit(1);
            });
        } else {
            typegenPromise.catch((e)=>{
                console.error(e);
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNoMissingTypes"])(schema, missingTypes);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runAbstractTypeRuntimeChecks"])(schema, finalConfig.features);
    return schema;
}
function generateSchema(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        const { schema, missingTypes, finalConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchemaInternal"])(config);
        const typegenConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTypegenConfig"])(finalConfig);
        yield new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenMetadata"](typegenConfig).generateArtifacts(schema);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNoMissingTypes"])(schema, missingTypes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runAbstractTypeRuntimeChecks"])(schema, finalConfig.features);
        return schema;
    });
}
/**
 * Mainly useful for testing, generates the schema and returns the artifacts that would have been otherwise
 * written to the filesystem.
 */ generateSchema.withArtifacts = (config, typegen = null)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
        const { schema, missingTypes, finalConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchemaInternal"])(config);
        const typegenConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTypegenConfig"])(finalConfig);
        const { schemaTypes, tsTypes, globalTypes } = yield new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenMetadata"](typegenConfig).generateArtifactContents(schema, typegen);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNoMissingTypes"])(schema, missingTypes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runAbstractTypeRuntimeChecks"])(schema, finalConfig.features);
        return {
            schema,
            schemaTypes,
            tsTypes,
            globalTypes
        };
    }); //# sourceMappingURL=makeSchema.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendInputType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusExtendInputTypeDef",
    ()=>NexusExtendInputTypeDef,
    "extendInputType",
    ()=>extendInputType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
class NexusExtendInputTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusExtendInputTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].ExtendInputObject);
function extendInputType(config) {
    return new NexusExtendInputTypeDef(config.type, Object.assign(Object.assign({}, config), {
        name: config.type
    }));
} //# sourceMappingURL=extendInputType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NexusExtendTypeDef",
    ()=>NexusExtendTypeDef,
    "extendType",
    ()=>extendType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/assertValidName.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
;
class NexusExtendTypeDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$assertValidName$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertValidName"])(name);
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(NexusExtendTypeDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].ExtendObject);
function extendType(config) {
    return new NexusExtendTypeDef(config.type, Object.assign(Object.assign({}, config), {
        name: config.type
    }));
} //# sourceMappingURL=extendType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mutationField",
    ()=>mutationField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
;
function mutationField(...args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"])({
        type: 'Mutation',
        definition (t) {
            if (typeof args[0] === 'function') {
                return args[0](t);
            }
            const [fieldName, config] = args;
            const finalConfig = typeof config === 'function' ? config() : config;
            t.field(fieldName, finalConfig);
        }
    });
} //# sourceMappingURL=mutationField.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mutationType",
    ()=>mutationType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
function mutationType(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])(Object.assign(Object.assign({}, config), {
        name: 'Mutation'
    }));
} //# sourceMappingURL=mutationType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryField",
    ()=>queryField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
;
function queryField(...args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"])({
        type: 'Query',
        definition (t) {
            if (typeof args[0] === 'function') {
                return args[0](t);
            }
            const [fieldName, config] = args;
            const finalConfig = typeof config === 'function' ? config() : config;
            t.field(fieldName, finalConfig);
        }
    });
} //# sourceMappingURL=queryField.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryType",
    ()=>queryType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
function queryType(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])(Object.assign(Object.assign({}, config), {
        name: 'Query'
    }));
} //# sourceMappingURL=queryType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionField.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscriptionField",
    ()=>subscriptionField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
;
function subscriptionField(...args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"])({
        type: 'Subscription',
        definition (t) {
            if (typeof args[0] === 'function') {
                return args[0](t);
            }
            const [fieldName, config] = args;
            const finalConfig = typeof config === 'function' ? config() : config;
            t.field(fieldName, finalConfig);
        }
    });
} //# sourceMappingURL=subscriptionField.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscriptionType",
    ()=>subscriptionType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
function subscriptionType(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])(Object.assign(Object.assign({}, config), {
        name: 'Subscription'
    }));
} //# sourceMappingURL=subscriptionType.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/sdlConverter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDLConverter",
    ()=>SDLConverter,
    "convertSDL",
    ()=>convertSDL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$buildASTSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/utilities/buildASTSchema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/definition.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/type/scalars.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
;
;
;
function convertSDL(sdl, commonjs = false, json = JSON) {
    try {
        return new SDLConverter(sdl, commonjs, json).print();
    } catch (e) {
        return `Error Parsing SDL into Schema: ${e.stack}`;
    }
}
class SDLConverter {
    constructor(sdl, commonjs = false, json = JSON){
        this.commonjs = commonjs;
        this.json = json;
        this.usedImports = new Set();
        this.exports = new Set();
        this.export = commonjs === null || commonjs ? 'const ' : 'export const ';
        this.schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$utilities$2f$buildASTSchema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSchema"])(sdl);
        this.groupedTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupTypes"])(this.schema);
    }
    print() {
        const body = [
            this.printObjectTypes(),
            this.printInterfaceTypes(),
            this.printInputObjectTypes(),
            this.printUnionTypes(),
            this.printEnumTypes(),
            this.printScalarTypes(),
            this.printExports()
        ];
        return [
            this.printUsedImports()
        ].concat(body).filter((f)=>f).join('\n\n');
    }
    printUsedImports() {
        if (this.commonjs) {
            return `const { ${Array.from(this.usedImports).join(', ')} } = require('nexus');`;
        }
        return `import { ${Array.from(this.usedImports).join(', ')} } from 'nexus';`;
    }
    printObjectTypes() {
        if (this.groupedTypes.object.length > 0) {
            this.usedImports.add('objectType');
            return this.groupedTypes.object.map((t)=>this.printObjectType(t)).join('\n');
        }
        return '';
    }
    printObjectType(type) {
        const implementing = type.getInterfaces().map((i)=>i.name);
        const implementsInterfaces = implementing.length > 0 ? `    t.implements(${implementing.join(', ')})` : '';
        this.exports.add(type.name);
        return this.printBlock([
            `${this.export}${type.name} = objectType({`,
            `  name: "${type.name}",`,
            this.maybeDescription(type),
            `  definition(t) {`,
            implementsInterfaces,
            this.printObjectFields(type),
            `  }`,
            `})`
        ]);
    }
    printObjectFields(type) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objValues"])(type.getFields()).map((field)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObjectType"])(type) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceField"])(type, field.name)) {
                return;
            }
            return this.printField('output', field);
        }).filter((f)=>f).join('\n');
    }
    printInputObjectFields(type) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objValues"])(type.getFields()).map((field)=>this.printField('input', field)).filter((f)=>f).join('\n');
    }
    printField(source, field) {
        const { namedType, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"])(field.type);
        let prefix = 't.';
        let typeString = undefined;
        [
            ...wrapping
        ].reverse().forEach((w)=>{
            if (w === 'List') {
                prefix += `list.`;
            } else {
                prefix += `nonNull.`;
            }
        });
        return `    ${prefix}${this.printFieldMethod(source, field, namedType, typeString)}`;
    }
    printFieldMethod(source, field, type, typeString) {
        const objectMeta = {};
        let str = '';
        if (isCommonScalar(type) && !typeString) {
            str += `${type.name.toLowerCase()}("${field.name}"`;
        } else {
            objectMeta.type = typeString !== null && typeString !== void 0 ? typeString : type;
            str += `field("${field.name}"`;
        }
        if ('deprecationReason' in field && field.deprecationReason) {
            objectMeta.deprecation = field.deprecationReason;
        }
        if (field.description) {
            objectMeta.description = field.description;
        }
        if (source === 'output') {
            const outputField = field;
            if (outputField.args.length) {
                objectMeta.args = outputField.args;
            }
        } else {
            const inputField = field;
            if (inputField.defaultValue !== undefined) {
                objectMeta.default = inputField.defaultValue;
            }
        }
        const metaKeys = Object.keys(objectMeta);
        if (metaKeys.length > 0) {
            if (metaKeys.length === 1 && !objectMeta.args) {
                const key = metaKeys[0];
                str += `, { ${key}: ${this.printMeta(objectMeta[key], key)} }`;
            } else {
                str += `, {\n`;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"])(objectMeta, (val, key)=>{
                    str += `      ${key}: ${this.printMeta(val, key)},\n`;
                });
                str += `    }`;
            }
        }
        return `${str})`;
    }
    printMeta(val, key) {
        if (key === 'type') {
            return val;
        }
        if (key === 'args') {
            let str = `{\n`;
            val.forEach((arg)=>{
                str += `        ${arg.name}: ${this.printArg(arg)},\n`;
            });
            str += `      }`;
            return str;
        }
        return this.json.stringify(val);
    }
    printArg(arg) {
        const description = arg.description;
        const defaultValue = arg.defaultValue;
        const { namedType: type, wrapping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"])(arg.type);
        const isArg = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSpecifiedScalarType"])(type);
        let str = '';
        if (isArg) {
            this.usedImports.add('arg');
            str += `arg(`;
        } else {
            this.usedImports.add(`${type.toString().toLowerCase()}Arg`);
            str += `${type.toString().toLowerCase()}Arg(`;
        }
        const metaToAdd = [];
        let wrappedType = type.name;
        if (isArg) {
            metaToAdd.push(`type: ${this.addWrapping(wrappedType, wrapping)}`);
        }
        if (description) {
            metaToAdd.push(`description: ${JSON.stringify(description)}`);
        }
        if (defaultValue) {
            metaToAdd.push(`default: ${JSON.stringify(defaultValue)}`);
        }
        str += metaToAdd.length > 1 ? `{\n          ${metaToAdd.join(',\n          ')}\n        })` : metaToAdd.length ? `{ ${metaToAdd[0]} })` : ')';
        return isArg ? str : this.addWrapping(str, wrapping);
    }
    addWrapping(toWrap, wrapping) {
        let wrappedVal = toWrap;
        wrapping.forEach((w)=>{
            if (w === 'NonNull') {
                this.usedImports.add('nonNull');
                wrappedVal = `nonNull(${wrappedVal})`;
            } else if (w === 'List') {
                this.usedImports.add('list');
                wrappedVal = `list(${wrappedVal})`;
            }
        });
        return wrappedVal;
    }
    printInterfaceTypes() {
        if (this.groupedTypes.interface.length) {
            this.usedImports.add('interfaceType');
            return this.groupedTypes.interface.map((t)=>this.printInterfaceType(t)).join('\n');
        }
        return '';
    }
    printInterfaceType(type) {
        const implementing = // @ts-ignore
        typeof type.getInterfaces === 'function' ? type.getInterfaces().map((i)=>i.name) : [];
        const implementsInterfaces = implementing.length > 0 ? `    t.implements(${implementing.join(', ')})` : '';
        this.exports.add(type.name);
        return this.printBlock([
            `${this.export}${type.name} = interfaceType({`,
            `  name: "${type.name}",`,
            this.maybeDescription(type),
            `  definition(t) {`,
            implementsInterfaces,
            this.printObjectFields(type),
            `  }`,
            `});`
        ]);
    }
    printEnumTypes() {
        if (this.groupedTypes.enum.length) {
            this.usedImports.add('enumType');
            return this.groupedTypes.enum.map((t)=>this.printEnumType(t)).join('\n');
        }
        return '';
    }
    printEnumType(type) {
        const members = type.getValues().map((val)=>{
            const { description, name, deprecationReason, value } = val;
            if (!description && !deprecationReason && name === value) {
                return val.name;
            }
            return {
                description,
                name,
                deprecation: deprecationReason,
                value
            };
        });
        this.exports.add(type.name);
        return this.printBlock([
            `${this.export}${type.name} = enumType({`,
            `  name: "${type.name}",`,
            this.maybeDescription(type),
            `  members: ${this.json.stringify(members)},`,
            `});`
        ]);
    }
    printInputObjectTypes() {
        if (this.groupedTypes.input.length) {
            this.usedImports.add('inputObjectType');
            return this.groupedTypes.input.map((t)=>this.printInputObjectType(t)).join('\n');
        }
        return '';
    }
    printInputObjectType(type) {
        this.exports.add(type.name);
        return this.printBlock([
            `${this.export}${type.name} = inputObjectType({`,
            `  name: "${type.name}",`,
            this.maybeDescription(type),
            `  definition(t) {`,
            this.printInputObjectFields(type),
            `  }`,
            `});`
        ]);
    }
    printUnionTypes() {
        if (this.groupedTypes.union.length) {
            this.usedImports.add('unionType');
            return this.groupedTypes.union.map((t)=>this.printUnionType(t)).join('\n');
        }
        return '';
    }
    printUnionType(type) {
        this.exports.add(type.name);
        return this.printBlock([
            `${this.export}${type.name} = unionType({`,
            `  name: "${type.name}",`,
            this.maybeDescription(type),
            `  definition(t) {`,
            `    t.members(${type.getTypes().join(', ')})`,
            `  }`,
            `});`
        ]);
    }
    printScalarTypes() {
        if (this.groupedTypes.scalar.length) {
            this.usedImports.add('scalarType');
            return this.groupedTypes.scalar.filter((s)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSpecifiedScalarType"])(s)).map((t)=>this.printScalarType(t)).join('\n');
        }
        return '';
    }
    printScalarType(type) {
        this.exports.add(type.name);
        return this.printBlock([
            `${this.export}${type.name} = scalarType({`,
            `  name: "${type.name}",`,
            this.maybeDescription(type),
            this.maybeAsNexusType(type),
            `  serialize() { /* Todo */ },`,
            `  parseValue() { /* Todo */ },`,
            `  parseLiteral() { /* Todo */ }`,
            `});`
        ]);
    }
    printExports() {
        if (!this.commonjs || this.exports.size === 0) {
            return '';
        }
        const exports = Array.from(this.exports);
        return this.printBlock(exports.map((exp)=>`exports.${exp} = ${exp};`));
    }
    maybeAsNexusType(type) {
        if (isCommonScalar(type)) {
            return `  asNexusMethod: "${type.name.toLowerCase()}",`;
        }
        return null;
    }
    maybeDescription(type) {
        if (type.description) {
            return `  description: ${this.json.stringify(type.description)},`;
        }
        return null;
    }
    printBlock(block) {
        return block.filter((t)=>t !== null && t !== '').join('\n');
    }
}
function isCommonScalar(field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$definition$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isScalarType"])(field)) {
        return field.name === 'UUID' || field.name === 'Date' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$graphql$40$16$2e$12$2e$0$2f$node_modules$2f$graphql$2f$type$2f$scalars$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSpecifiedScalarType"])(field);
    }
    return false;
} //# sourceMappingURL=sdlConverter.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenTypeHelpers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=typegenTypeHelpers.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/core.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// The "core" is used as a namespace to re-export everything,
// For anyone who wants to use the internals
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/makeSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/scalarType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicMethod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/rebuildType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/sdlConverter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenAutoConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenAutoConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenFormatPrettier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenFormatPrettier.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenPrinter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenPrinter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenTypeHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenTypeHelpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenUtils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)"); //# sourceMappingURL=core.js.map
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
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectionPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$connectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectionPlugin"],
    "connectionPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$connectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    "declarativeWrappingPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$declarativeWrappingPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["declarativeWrappingPlugin"],
    "fieldAuthorizePlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePlugin"],
    "fieldAuthorizePluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    "nullabilityGuardPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$nullabilityGuardPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullabilityGuardPlugin"],
    "nullabilityGuardPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$nullabilityGuardPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    "queryComplexityPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$queryComplexityPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryComplexityPlugin"],
    "queryComplexityPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$queryComplexityPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$connectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/connectionPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$fieldAuthorizePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/fieldAuthorizePlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$nullabilityGuardPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/nullabilityGuardPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$queryComplexityPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/queryComplexityPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$declarativeWrappingPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/declarativeWrappingPlugin.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicInputMethodDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DynamicInputMethodDef"],
    "DynamicOutputMethodDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DynamicOutputMethodDef"],
    "InputDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InputDefinitionBlock"],
    "InterfaceDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InterfaceDefinitionBlock"],
    "NEXUS_BUILD",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXUS_BUILD"],
    "NEXUS_TYPE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXUS_TYPE"],
    "NexusArgDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusArgDef"],
    "NexusEnumTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusEnumTypeDef"],
    "NexusExtendInputTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusExtendInputTypeDef"],
    "NexusExtendTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusExtendTypeDef"],
    "NexusInputObjectTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusInputObjectTypeDef"],
    "NexusInterfaceTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusInterfaceTypeDef"],
    "NexusListDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusListDef"],
    "NexusNonNullDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusNonNullDef"],
    "NexusNullDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusNullDef"],
    "NexusObjectTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusObjectTypeDef"],
    "NexusPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusPlugin"],
    "NexusScalarTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusScalarTypeDef"],
    "NexusTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"],
    "NexusUnionTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusUnionTypeDef"],
    "NexusWrappedSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusWrappedSymbol"],
    "ObjectDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ObjectDefinitionBlock"],
    "OutputDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OutputDefinitionBlock"],
    "PrintedGenTyping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrintedGenTyping"],
    "PrintedGenTypingImport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrintedGenTypingImport"],
    "SCALAR_TYPES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenAutoConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SCALAR_TYPES"],
    "SDLConverter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SDLConverter"],
    "SchemaBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SchemaBuilder"],
    "TypegenMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenMetadata"],
    "TypegenPrinter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenPrinter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypegenPrinter"],
    "UNKNOWN_TYPE_SCALAR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNKNOWN_TYPE_SCALAR"],
    "UnionDefinitionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnionDefinitionBlock"],
    "Unreachable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unreachable"],
    "applyNexusWrapping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyNexusWrapping"],
    "arg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"],
    "asNexusMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["asNexusMethod"],
    "assertAbsolutePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertAbsolutePath"],
    "assertNoMissingTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assertNoMissingTypes"],
    "booleanArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["booleanArg"],
    "casesHandled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["casesHandled"],
    "completeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["completeValue"],
    "composeMiddlewareFns",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["composeMiddlewareFns"],
    "connectionPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectionPlugin"],
    "connectionPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectionPluginCore"],
    "consoleWarn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consoleWarn"],
    "convertSDL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertSDL"],
    "createPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPlugin"],
    "declarativeWrappingPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["declarativeWrappingPlugin"],
    "decorateType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decorateType"],
    "dump",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dump"],
    "dynamicInputMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicInputMethod"],
    "dynamicOutputMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicOutputMethod"],
    "eachObj",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eachObj"],
    "enumType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumType"],
    "extendInputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendInputType"],
    "extendType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"],
    "fieldAuthorizePlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePlugin"],
    "fieldAuthorizePluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePluginCore"],
    "finalizeWrapping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalizeWrapping"],
    "firstDefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["firstDefined"],
    "floatArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["floatArg"],
    "formatPathForModuleImport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPathForModuleImport"],
    "generateSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSchema"],
    "getArgNamedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getArgNamedType"],
    "getNexusNamedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNexusNamedType"],
    "getOwnPackage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOwnPackage"],
    "graphql15InterfaceConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["graphql15InterfaceConfig"],
    "graphql15InterfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["graphql15InterfaceType"],
    "groupTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupTypes"],
    "idArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["idArg"],
    "inputObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inputObjectType"],
    "intArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intArg"],
    "interfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interfaceType"],
    "invariantGuard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invariantGuard"],
    "isArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArray"],
    "isInterfaceField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInterfaceField"],
    "isNexusArgDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusArgDef"],
    "isNexusDynamicInputMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicInputMethod"],
    "isNexusDynamicOutputMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicOutputMethod"],
    "isNexusDynamicOutputProperty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusDynamicOutputProperty"],
    "isNexusEnumTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusEnumTypeDef"],
    "isNexusExtendInputTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusExtendInputTypeDef"],
    "isNexusExtendTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusExtendTypeDef"],
    "isNexusInputObjectTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInputObjectTypeDef"],
    "isNexusInterfaceTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusInterfaceTypeDef"],
    "isNexusListTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusListTypeDef"],
    "isNexusMeta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMeta"],
    "isNexusMetaBuild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaBuild"],
    "isNexusMetaType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaType"],
    "isNexusMetaTypeFn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaTypeFn"],
    "isNexusMetaTypeProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusMetaTypeProp"],
    "isNexusNamedInputTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedInputTypeDef"],
    "isNexusNamedOuputTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedOuputTypeDef"],
    "isNexusNamedTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNamedTypeDef"],
    "isNexusNonNullTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNonNullTypeDef"],
    "isNexusNullTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusNullTypeDef"],
    "isNexusObjectTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusObjectTypeDef"],
    "isNexusPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPlugin"],
    "isNexusPrintedGenTyping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPrintedGenTyping"],
    "isNexusPrintedGenTypingImport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusPrintedGenTypingImport"],
    "isNexusScalarTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusScalarTypeDef"],
    "isNexusStruct",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusStruct"],
    "isNexusTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusTypeDef"],
    "isNexusUnionTypeDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusUnionTypeDef"],
    "isNexusWrappingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNexusWrappingType"],
    "isObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"],
    "isProductionStage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProductionStage"],
    "isPromiseLike",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromiseLike"],
    "isUnknownType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUnknownType"],
    "list",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"],
    "log",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["log"],
    "makeSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchema"],
    "makeSchemaInternal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchemaInternal"],
    "mapObj",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapObj"],
    "mapValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapValues"],
    "mutationField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"],
    "mutationType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationType"],
    "nonNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"],
    "normalizeArgWrapping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeArgWrapping"],
    "nullabilityGuardPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullabilityGuardPlugin"],
    "nullabilityGuardPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullabilityGuardPluginCore"],
    "nullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"],
    "objValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objValues"],
    "objectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"],
    "ownProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ownProp"],
    "pathToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathToArray"],
    "plugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"],
    "printedGenTyping",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTyping"],
    "printedGenTypingImport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printedGenTypingImport"],
    "queryComplexityPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryComplexityPlugin"],
    "queryComplexityPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryComplexityPluginCore"],
    "queryField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"],
    "queryType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryType"],
    "raiseProgrammerError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["raiseProgrammerError"],
    "rebuildArgs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildArgs"],
    "rebuildEnumType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildEnumType"],
    "rebuildInputDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildInputDefinition"],
    "rebuildInputObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildInputObjectType"],
    "rebuildInterfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildInterfaceType"],
    "rebuildNamedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildNamedType"],
    "rebuildObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildObjectType"],
    "rebuildOutputDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildOutputDefinition"],
    "rebuildScalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildScalarType"],
    "rebuildUnionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rebuildUnionType"],
    "relativePathTo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relativePathTo"],
    "resolveImportPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveImportPath"],
    "resolveNexusMetaType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveNexusMetaType"],
    "resolveTypegenConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveTypegenConfig"],
    "result",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["result"],
    "rewrapAsGraphQLType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rewrapAsGraphQLType"],
    "runAbstractTypeRuntimeChecks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runAbstractTypeRuntimeChecks"],
    "scalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scalarType"],
    "setConfigDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setConfigDefaults"],
    "stringArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"],
    "subscriptionField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptionField"],
    "subscriptionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptionType"],
    "suggestionList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["suggestionList"],
    "typeScriptFileExtension",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typeScriptFileExtension"],
    "typegenAutoConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenAutoConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typegenAutoConfig"],
    "typegenFormatPrettier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenFormatPrettier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["typegenFormatPrettier"],
    "unionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unionType"],
    "unpack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unpack"],
    "unwrapGraphQLDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapGraphQLDef"],
    "unwrapNexusDef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unwrapNexusDef"],
    "venn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["venn"],
    "withNexusSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$builder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/builder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/makeSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$definitionBlocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/definitionBlocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/scalarType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nexusMeta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nexusMeta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$wrapping$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/wrapping.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicMethod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$rebuildType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/rebuildType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/sdlConverter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenAutoConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenAutoConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenFormatPrettier$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenFormatPrettier.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenPrinter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenPrinter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenTypeHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenTypeHelpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenUtils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicProperty.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicOutputPropertyDef",
    ()=>DynamicOutputPropertyDef,
    "dynamicOutputProperty",
    ()=>dynamicOutputProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/_types.js [app-route] (ecmascript)");
;
class DynamicOutputPropertyDef {
    constructor(name, config){
        this.name = name;
        this.config = config;
    }
    get value() {
        return this.config;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNexusSymbol"])(DynamicOutputPropertyDef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$_types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NexusTypes"].DynamicOutputProperty);
function dynamicOutputProperty(config) {
    return new DynamicOutputPropertyDef(config.name, config);
} //# sourceMappingURL=dynamicProperty.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$blocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/blocks.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$blocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/blocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/core.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/core.js [app-route] (ecmascript)");
// All of the Public API definitions
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/makeSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/scalarType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicMethod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicProperty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/sdlConverter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$typegenTypeHelpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/typegenTypeHelpers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
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
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["arg"],
    "asNexusMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["asNexusMethod"],
    "blocks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$blocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    "booleanArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["booleanArg"],
    "connectionPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectionPlugin"],
    "connectionPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectionPluginCore"],
    "convertSDL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertSDL"],
    "core",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    "createPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPlugin"],
    "declarativeWrappingPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["declarativeWrappingPlugin"],
    "decorateType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decorateType"],
    "dynamicInputMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicInputMethod"],
    "dynamicOutputMethod",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicOutputMethod"],
    "dynamicOutputProperty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamicOutputProperty"],
    "enumType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enumType"],
    "extendInputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendInputType"],
    "extendType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendType"],
    "fieldAuthorizePlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePlugin"],
    "fieldAuthorizePluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAuthorizePluginCore"],
    "floatArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["floatArg"],
    "groupTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupTypes"],
    "idArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["idArg"],
    "inputObjectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inputObjectType"],
    "intArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["intArg"],
    "interfaceType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["interfaceType"],
    "list",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"],
    "makeSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeSchema"],
    "mutationField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"],
    "mutationType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationType"],
    "nonNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"],
    "nullabilityGuardPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullabilityGuardPlugin"],
    "nullabilityGuardPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullabilityGuardPluginCore"],
    "nullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nullable"],
    "objectType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"],
    "plugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["plugin"],
    "queryComplexityPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryComplexityPlugin"],
    "queryComplexityPluginCore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryComplexityPluginCore"],
    "queryField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"],
    "queryType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryType"],
    "scalarType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scalarType"],
    "stringArg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringArg"],
    "subscriptionField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptionField"],
    "subscriptionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscriptionType"],
    "unionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unionType"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$blocks$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/blocks.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$makeSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/makeSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$args$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/args.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$decorateType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/decorateType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$enumType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/enumType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$extendType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/extendType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$inputObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/inputObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$interfaceType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/interfaceType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$scalarType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/scalarType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$subscriptionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/subscriptionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$unionType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/unionType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicMethod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicMethod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$dynamicProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/dynamicProperty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$plugins$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/plugins/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$sdlConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/sdlConverter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/utils.js [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=f7ea9_nexus_8526f244._.js.map