module.exports = [
"[project]/examples/admin-test/src/generated/prisma/query_compiler_fast_bg.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var h = Object.defineProperty;
var T = Object.getOwnPropertyDescriptor;
var M = Object.getOwnPropertyNames;
var j = Object.prototype.hasOwnProperty;
var D = (e, t)=>{
    for(var n in t)h(e, n, {
        get: t[n],
        enumerable: !0
    });
}, O = (e, t, n, _)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let r of M(t))!j.call(e, r) && r !== n && h(e, r, {
        get: ()=>t[r],
        enumerable: !(_ = T(t, r)) || _.enumerable
    });
    return e;
};
var B = (e)=>O(h({}, "__esModule", {
        value: !0
    }), e);
var xe = {};
D(xe, {
    QueryCompiler: ()=>F,
    __wbg_Error_e83987f665cf5504: ()=>q,
    __wbg_Number_bb48ca12f395cd08: ()=>C,
    __wbg_String_8f0eb39a4a4c2f66: ()=>k,
    __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68: ()=>W,
    __wbg___wbindgen_debug_string_df47ffb5e35e6763: ()=>V,
    __wbg___wbindgen_in_bb933bd9e1b3bc0f: ()=>z,
    __wbg___wbindgen_is_object_c818261d21f283a4: ()=>L,
    __wbg___wbindgen_is_string_fbb76cb2940daafd: ()=>P,
    __wbg___wbindgen_is_undefined_2d472862bd29a478: ()=>Q,
    __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147: ()=>Y,
    __wbg___wbindgen_number_get_a20bf9b85341449d: ()=>G,
    __wbg___wbindgen_string_get_e4f06c90489ad01b: ()=>J,
    __wbg___wbindgen_throw_b855445ff6a94295: ()=>X,
    __wbg_entries_e171b586f8f6bdbf: ()=>H,
    __wbg_getTime_14776bfb48a1bff9: ()=>K,
    __wbg_get_7bed016f185add81: ()=>Z,
    __wbg_get_with_ref_key_1dc361bd10053bfe: ()=>v,
    __wbg_instanceof_ArrayBuffer_70beb1189ca63b38: ()=>ee,
    __wbg_instanceof_Uint8Array_20c8e73002f7af98: ()=>te,
    __wbg_isSafeInteger_d216eda7911dde36: ()=>ne,
    __wbg_length_69bca3cb64fc8748: ()=>re,
    __wbg_length_cdd215e10d9dd507: ()=>_e,
    __wbg_new_0_f9740686d739025c: ()=>oe,
    __wbg_new_1acc0b6eea89d040: ()=>ce,
    __wbg_new_5a79be3ab53b8aa5: ()=>ie,
    __wbg_new_68651c719dcda04e: ()=>se,
    __wbg_new_e17d9f43105b08be: ()=>ue,
    __wbg_prototypesetcall_2a6620b6922694b2: ()=>fe,
    __wbg_set_3f1d0b984ed272ed: ()=>be,
    __wbg_set_907fb406c34a251d: ()=>de,
    __wbg_set_c213c871859d6500: ()=>ae,
    __wbg_set_message_82ae475bb413aa5c: ()=>ge,
    __wbg_set_wasm: ()=>N,
    __wbindgen_cast_2241b6af4c4b2941: ()=>le,
    __wbindgen_cast_4625c577ab2ec9ee: ()=>we,
    __wbindgen_cast_9ae0607507abb057: ()=>pe,
    __wbindgen_cast_d6cd19b81560fd6e: ()=>ye,
    __wbindgen_init_externref_table: ()=>me
});
module.exports = B(xe);
var A = ()=>{};
A.prototype = A;
let o;
function N(e) {
    o = e;
}
let p = null;
function a() {
    return (p === null || p.byteLength === 0) && (p = new Uint8Array(o.memory.buffer)), p;
}
let y = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});
y.decode();
const U = 2146435072;
let S = 0;
function R(e, t) {
    return S += t, S >= U && (y = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }), y.decode(), S = t), y.decode(a().subarray(e, e + t));
}
function m(e, t) {
    return e = e >>> 0, R(e, t);
}
let f = 0;
const g = new TextEncoder;
"encodeInto" in g || (g.encodeInto = function(e, t) {
    const n = g.encode(e);
    return t.set(n), {
        read: e.length,
        written: n.length
    };
});
function l(e, t, n) {
    if (n === void 0) {
        const i = g.encode(e), d = t(i.length, 1) >>> 0;
        return a().subarray(d, d + i.length).set(i), f = i.length, d;
    }
    let _ = e.length, r = t(_, 1) >>> 0;
    const s = a();
    let c = 0;
    for(; c < _; c++){
        const i = e.charCodeAt(c);
        if (i > 127) break;
        s[r + c] = i;
    }
    if (c !== _) {
        c !== 0 && (e = e.slice(c)), r = n(r, _, _ = c + e.length * 3, 1) >>> 0;
        const i = a().subarray(r + c, r + _), d = g.encodeInto(e, i);
        c += d.written, r = n(r, _, c, 1) >>> 0;
    }
    return f = c, r;
}
let b = null;
function u() {
    return (b === null || b.buffer.detached === !0 || b.buffer.detached === void 0 && b.buffer !== o.memory.buffer) && (b = new DataView(o.memory.buffer)), b;
}
function x(e) {
    return e == null;
}
function I(e) {
    const t = typeof e;
    if (t == "number" || t == "boolean" || e == null) return `${e}`;
    if (t == "string") return `"${e}"`;
    if (t == "symbol") {
        const r = e.description;
        return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (t == "function") {
        const r = e.name;
        return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(e)) {
        const r = e.length;
        let s = "[";
        r > 0 && (s += I(e[0]));
        for(let c = 1; c < r; c++)s += ", " + I(e[c]);
        return s += "]", s;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let _;
    if (n && n.length > 1) _ = n[1];
    else return toString.call(e);
    if (_ == "Object") try {
        return "Object(" + JSON.stringify(e) + ")";
    } catch  {
        return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function $(e, t) {
    return e = e >>> 0, a().subarray(e / 1, e / 1 + t);
}
function w(e) {
    const t = o.__wbindgen_externrefs.get(e);
    return o.__externref_table_dealloc(e), t;
}
const E = typeof FinalizationRegistry > "u" ? {
    register: ()=>{},
    unregister: ()=>{}
} : new FinalizationRegistry((e)=>o.__wbg_querycompiler_free(e >>> 0, 1));
class F {
    __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, E.unregister(this), t;
    }
    free() {
        const t = this.__destroy_into_raw();
        o.__wbg_querycompiler_free(t, 0);
    }
    compileBatch(t) {
        const n = l(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f, r = o.querycompiler_compileBatch(this.__wbg_ptr, n, _);
        if (r[2]) throw w(r[1]);
        return w(r[0]);
    }
    constructor(t){
        const n = o.querycompiler_new(t);
        if (n[2]) throw w(n[1]);
        return this.__wbg_ptr = n[0] >>> 0, E.register(this, this.__wbg_ptr, this), this;
    }
    compile(t) {
        const n = l(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = f, r = o.querycompiler_compile(this.__wbg_ptr, n, _);
        if (r[2]) throw w(r[1]);
        return w(r[0]);
    }
}
Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
function q(e, t) {
    return Error(m(e, t));
}
function C(e) {
    return Number(e);
}
function k(e, t) {
    const n = String(t), _ = l(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f;
    u().setInt32(e + 4 * 1, r, !0), u().setInt32(e + 4 * 0, _, !0);
}
function W(e) {
    const t = e, n = typeof t == "boolean" ? t : void 0;
    return x(n) ? 16777215 : n ? 1 : 0;
}
function V(e, t) {
    const n = I(t), _ = l(n, o.__wbindgen_malloc, o.__wbindgen_realloc), r = f;
    u().setInt32(e + 4 * 1, r, !0), u().setInt32(e + 4 * 0, _, !0);
}
function z(e, t) {
    return e in t;
}
function L(e) {
    const t = e;
    return typeof t == "object" && t !== null;
}
function P(e) {
    return typeof e == "string";
}
function Q(e) {
    return e === void 0;
}
function Y(e, t) {
    return e == t;
}
function G(e, t) {
    const n = t, _ = typeof n == "number" ? n : void 0;
    u().setFloat64(e + 8 * 1, x(_) ? 0 : _, !0), u().setInt32(e + 4 * 0, !x(_), !0);
}
function J(e, t) {
    const n = t, _ = typeof n == "string" ? n : void 0;
    var r = x(_) ? 0 : l(_, o.__wbindgen_malloc, o.__wbindgen_realloc), s = f;
    u().setInt32(e + 4 * 1, s, !0), u().setInt32(e + 4 * 0, r, !0);
}
function X(e, t) {
    throw new Error(m(e, t));
}
function H(e) {
    return Object.entries(e);
}
function K(e) {
    return e.getTime();
}
function Z(e, t) {
    return e[t >>> 0];
}
function v(e, t) {
    return e[t];
}
function ee(e) {
    let t;
    try {
        t = e instanceof ArrayBuffer;
    } catch  {
        t = !1;
    }
    return t;
}
function te(e) {
    let t;
    try {
        t = e instanceof Uint8Array;
    } catch  {
        t = !1;
    }
    return t;
}
function ne(e) {
    return Number.isSafeInteger(e);
}
function re(e) {
    return e.length;
}
function _e(e) {
    return e.length;
}
function oe() {
    return new Date;
}
function ce() {
    return new Object;
}
function ie(e) {
    return new Uint8Array(e);
}
function se() {
    return new Map;
}
function ue() {
    return new Array;
}
function fe(e, t, n) {
    Uint8Array.prototype.set.call($(e, t), n);
}
function be(e, t, n) {
    e[t] = n;
}
function de(e, t, n) {
    return e.set(t, n);
}
function ae(e, t, n) {
    e[t >>> 0] = n;
}
function ge(e, t) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.PRISMA_WASM_PANIC_REGISTRY.set_message(m(e, t));
}
function le(e, t) {
    return m(e, t);
}
function we(e) {
    return BigInt.asUintN(64, e);
}
function pe(e) {
    return e;
}
function ye(e) {
    return e;
}
function me() {
    const e = o.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
0 && (module.exports = {
    QueryCompiler,
    __wbg_Error_e83987f665cf5504,
    __wbg_Number_bb48ca12f395cd08,
    __wbg_String_8f0eb39a4a4c2f66,
    __wbg___wbindgen_boolean_get_6d5a1ee65bab5f68,
    __wbg___wbindgen_debug_string_df47ffb5e35e6763,
    __wbg___wbindgen_in_bb933bd9e1b3bc0f,
    __wbg___wbindgen_is_object_c818261d21f283a4,
    __wbg___wbindgen_is_string_fbb76cb2940daafd,
    __wbg___wbindgen_is_undefined_2d472862bd29a478,
    __wbg___wbindgen_jsval_loose_eq_b664b38a2f582147,
    __wbg___wbindgen_number_get_a20bf9b85341449d,
    __wbg___wbindgen_string_get_e4f06c90489ad01b,
    __wbg___wbindgen_throw_b855445ff6a94295,
    __wbg_entries_e171b586f8f6bdbf,
    __wbg_getTime_14776bfb48a1bff9,
    __wbg_get_7bed016f185add81,
    __wbg_get_with_ref_key_1dc361bd10053bfe,
    __wbg_instanceof_ArrayBuffer_70beb1189ca63b38,
    __wbg_instanceof_Uint8Array_20c8e73002f7af98,
    __wbg_isSafeInteger_d216eda7911dde36,
    __wbg_length_69bca3cb64fc8748,
    __wbg_length_cdd215e10d9dd507,
    __wbg_new_0_f9740686d739025c,
    __wbg_new_1acc0b6eea89d040,
    __wbg_new_5a79be3ab53b8aa5,
    __wbg_new_68651c719dcda04e,
    __wbg_new_e17d9f43105b08be,
    __wbg_prototypesetcall_2a6620b6922694b2,
    __wbg_set_3f1d0b984ed272ed,
    __wbg_set_907fb406c34a251d,
    __wbg_set_c213c871859d6500,
    __wbg_set_message_82ae475bb413aa5c,
    __wbg_set_wasm,
    __wbindgen_cast_2241b6af4c4b2941,
    __wbindgen_cast_4625c577ab2ec9ee,
    __wbindgen_cast_9ae0607507abb057,
    __wbindgen_cast_d6cd19b81560fd6e,
    __wbindgen_init_externref_table
});
}),
"[project]/examples/admin-test/src/generated/prisma/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */ // biome-ignore-all lint: generated file
Object.defineProperty(exports, "__esModule", {
    value: true
});
const { PrismaClientKnownRequestError, PrismaClientUnknownRequestError, PrismaClientRustPanicError, PrismaClientInitializationError, PrismaClientValidationError, getPrismaClient, sqltag, empty, join, raw, skip, Decimal, Debug, DbNull, JsonNull, AnyNull, NullTypes, makeStrictEnum, Extensions, warnOnce, defineDmmfProperty, Public, getRuntime, createParam } = __turbopack_context__.r("[project]/examples/admin-test/src/generated/prisma/runtime/client.js [app-route] (ecmascript)");
const Prisma = {};
exports.Prisma = Prisma;
exports.$Enums = {};
/**
 * Prisma Client JS version: 7.3.0
 * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
 */ Prisma.prismaVersion = {
    client: "7.3.0",
    engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;
/**
 * Re-export of sql-template-tag
 */ Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;
/**
* Extensions
*/ Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;
/**
 * Shorthand utilities for JSON filtering
 */ Prisma.DbNull = DbNull;
Prisma.JsonNull = JsonNull;
Prisma.AnyNull = AnyNull;
Prisma.NullTypes = NullTypes;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
/**
 * Enums
 */ exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    Serializable: 'Serializable'
});
exports.Prisma.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    balance: 'balance',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.ProfileScalarFieldEnum = {
    id: 'id',
    bio: 'bio',
    avatar: 'avatar',
    website: 'website',
    location: 'location',
    birthDate: 'birthDate',
    phone: 'phone',
    userId: 'userId'
};
exports.Prisma.UserFollowScalarFieldEnum = {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
};
exports.Prisma.PostScalarFieldEnum = {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    excerpt: 'excerpt',
    status: 'status',
    featured: 'featured',
    viewCount: 'viewCount',
    readTime: 'readTime',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    categoryId: 'categoryId'
};
exports.Prisma.CommentScalarFieldEnum = {
    id: 'id',
    content: 'content',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    postId: 'postId',
    parentId: 'parentId'
};
exports.Prisma.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    color: 'color',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId'
};
exports.Prisma.TagScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
};
exports.Prisma.ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    sku: 'sku',
    description: 'description',
    price: 'price',
    comparePrice: 'comparePrice',
    costPrice: 'costPrice',
    quantity: 'quantity',
    weight: 'weight',
    isActive: 'isActive',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    brandId: 'brandId'
};
exports.Prisma.BrandScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logo: 'logo',
    description: 'description',
    website: 'website',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.ProductCategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    order: 'order',
    createdAt: 'createdAt',
    parentId: 'parentId'
};
exports.Prisma.OrderScalarFieldEnum = {
    id: 'id',
    orderNumber: 'orderNumber',
    status: 'status',
    subtotal: 'subtotal',
    tax: 'tax',
    shipping: 'shipping',
    total: 'total',
    notes: 'notes',
    shippingAddress: 'shippingAddress',
    billingAddress: 'billingAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerId: 'customerId'
};
exports.Prisma.OrderItemScalarFieldEnum = {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    total: 'total',
    orderId: 'orderId',
    productId: 'productId'
};
exports.Prisma.ReviewScalarFieldEnum = {
    id: 'id',
    rating: 'rating',
    title: 'title',
    content: 'content',
    approved: 'approved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    productId: 'productId'
};
exports.Prisma.MessageScalarFieldEnum = {
    id: 'id',
    subject: 'subject',
    content: 'content',
    read: 'read',
    priority: 'priority',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId'
};
exports.Prisma.GroupScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.ProjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    budget: 'budget',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.TaskScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    completedAt: 'completedAt',
    estimatedHours: 'estimatedHours',
    actualHours: 'actualHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    parentId: 'parentId'
};
exports.Prisma.SettingScalarFieldEnum = {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type',
    group: 'group',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Prisma.AuditLogScalarFieldEnum = {
    id: 'id',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.Prisma.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.Role = exports.$Enums.Role = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
    GUEST: 'GUEST'
};
exports.Status = exports.$Enums.Status = {
    DRAFT: 'DRAFT',
    PENDING: 'PENDING',
    PUBLISHED: 'PUBLISHED',
    ARCHIVED: 'ARCHIVED'
};
exports.Priority = exports.$Enums.Priority = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    URGENT: 'URGENT'
};
exports.Prisma.ModelName = {
    User: 'User',
    Profile: 'Profile',
    UserFollow: 'UserFollow',
    Post: 'Post',
    Comment: 'Comment',
    Category: 'Category',
    Tag: 'Tag',
    Product: 'Product',
    Brand: 'Brand',
    ProductCategory: 'ProductCategory',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Review: 'Review',
    Message: 'Message',
    Group: 'Group',
    Project: 'Project',
    Task: 'Task',
    Setting: 'Setting',
    AuditLog: 'AuditLog'
};
/**
 * Create the Client
 */ const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "sqlite",
    "inlineSchema": "// Comprehensive test schema with SQLite\n// Tests all relation types, field types, and edge cases\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ngenerator paljs {\n  provider = \"paljs-generator\"\n  output   = \"../src/generated/paljs\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\n// ============================================\n// ENUMS\n// ============================================\n\nenum Role {\n  USER\n  ADMIN\n  MODERATOR\n  GUEST\n}\n\nenum Status {\n  DRAFT\n  PENDING\n  PUBLISHED\n  ARCHIVED\n}\n\nenum Priority {\n  LOW\n  MEDIUM\n  HIGH\n  URGENT\n}\n\n// ============================================\n// USER & AUTH MODELS (1:1, 1:N relations)\n// ============================================\n\nmodel User {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  username  String   @unique\n  firstName String?\n  lastName  String?\n  password  String\n  role      Role     @default(USER)\n  isActive  Boolean  @default(true)\n  balance   Float    @default(0)\n  metadata  String? // JSON stored as string in SQLite\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // 1:1 relation\n  profile Profile?\n\n  // 1:N relations\n  posts            Post[]\n  comments         Comment[]\n  orders           Order[]\n  reviews          Review[]\n  sentMessages     Message[] @relation(\"SentMessages\")\n  receivedMessages Message[] @relation(\"ReceivedMessages\")\n\n  // N:M through explicit join table\n  followedBy UserFollow[] @relation(\"Following\")\n  following  UserFollow[] @relation(\"FollowedBy\")\n\n  // N:M through implicit join table\n  likedPosts Post[]  @relation(\"UserLikedPosts\")\n  groups     Group[] @relation(\"GroupMembers\")\n}\n\nmodel Profile {\n  id        Int       @id @default(autoincrement())\n  bio       String?\n  avatar    String?\n  website   String?\n  location  String?\n  birthDate DateTime?\n  phone     String?\n\n  // 1:1 relation\n  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId Int  @unique\n}\n\n// Self-referential N:M relation (User follows User)\nmodel UserFollow {\n  id          Int      @id @default(autoincrement())\n  follower    User     @relation(\"Following\", fields: [followerId], references: [id], onDelete: Cascade)\n  followerId  Int\n  following   User     @relation(\"FollowedBy\", fields: [followingId], references: [id], onDelete: Cascade)\n  followingId Int\n  createdAt   DateTime @default(now())\n\n  @@unique([followerId, followingId])\n}\n\n// ============================================\n// CONTENT MODELS (1:N, N:M, self-referential)\n// ============================================\n\nmodel Post {\n  id          Int       @id @default(autoincrement())\n  title       String\n  slug        String    @unique\n  content     String?\n  excerpt     String?\n  status      Status    @default(DRAFT)\n  featured    Boolean   @default(false)\n  viewCount   Int       @default(0)\n  readTime    Float? // minutes\n  publishedAt DateTime?\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  // 1:N relations\n  author     User?     @relation(fields: [authorId], references: [id], onDelete: SetNull)\n  authorId   Int?\n  category   Category? @relation(fields: [categoryId], references: [id], onDelete: SetNull)\n  categoryId Int?\n\n  comments Comment[]\n\n  // N:M relations\n  tags    Tag[]  @relation(\"PostTags\")\n  likedBy User[] @relation(\"UserLikedPosts\")\n}\n\nmodel Comment {\n  id        Int      @id @default(autoincrement())\n  content   String\n  approved  Boolean  @default(false)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  author   User? @relation(fields: [authorId], references: [id], onDelete: SetNull)\n  authorId Int?\n  post     Post  @relation(fields: [postId], references: [id], onDelete: Cascade)\n  postId   Int\n\n  // Self-referential relation (comment replies)\n  parent   Comment?  @relation(\"CommentReplies\", fields: [parentId], references: [id], onDelete: Cascade)\n  parentId Int?\n  replies  Comment[] @relation(\"CommentReplies\")\n}\n\nmodel Category {\n  id          Int      @id @default(autoincrement())\n  name        String   @unique\n  slug        String   @unique\n  description String?\n  color       String?  @default(\"#000000\")\n  order       Int      @default(0)\n  isActive    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  // 1:N relation\n  posts Post[]\n\n  // Self-referential relation (category tree)\n  parent   Category?  @relation(\"CategoryTree\", fields: [parentId], references: [id], onDelete: SetNull)\n  parentId Int?\n  children Category[] @relation(\"CategoryTree\")\n}\n\nmodel Tag {\n  id        Int      @id @default(autoincrement())\n  name      String   @unique\n  slug      String   @unique\n  createdAt DateTime @default(now())\n\n  // N:M relation\n  posts Post[] @relation(\"PostTags\")\n}\n\n// ============================================\n// E-COMMERCE MODELS\n// ============================================\n\nmodel Product {\n  id           Int      @id @default(autoincrement())\n  name         String\n  sku          String   @unique\n  description  String?\n  price        Float\n  comparePrice Float?\n  costPrice    Float?\n  quantity     Int      @default(0)\n  weight       Float?\n  isActive     Boolean  @default(true)\n  isFeatured   Boolean  @default(false)\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  // Relations\n  brand   Brand? @relation(fields: [brandId], references: [id], onDelete: SetNull)\n  brandId Int?\n\n  orderItems        OrderItem[]\n  reviews           Review[]\n  productCategories ProductCategory[]\n}\n\nmodel Brand {\n  id          Int      @id @default(autoincrement())\n  name        String   @unique\n  slug        String   @unique\n  logo        String?\n  description String?\n  website     String?\n  isActive    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  products Product[]\n}\n\nmodel ProductCategory {\n  id        Int      @id @default(autoincrement())\n  name      String\n  slug      String   @unique\n  order     Int      @default(0)\n  createdAt DateTime @default(now())\n\n  // Self-referential\n  parent   ProductCategory?  @relation(\"ProductCategoryTree\", fields: [parentId], references: [id], onDelete: SetNull)\n  parentId Int?\n  children ProductCategory[] @relation(\"ProductCategoryTree\")\n\n  // N:M with Product through this explicit join\n  products Product[]\n}\n\nmodel Order {\n  id              Int      @id @default(autoincrement())\n  orderNumber     String   @unique\n  status          Status   @default(PENDING)\n  subtotal        Float\n  tax             Float    @default(0)\n  shipping        Float    @default(0)\n  total           Float\n  notes           String?\n  shippingAddress String?\n  billingAddress  String?\n  createdAt       DateTime @default(now())\n  updatedAt       DateTime @updatedAt\n\n  // Relations\n  customer   User? @relation(fields: [customerId], references: [id], onDelete: SetNull)\n  customerId Int?\n\n  items OrderItem[]\n}\n\nmodel OrderItem {\n  id       Int   @id @default(autoincrement())\n  quantity Int\n  price    Float\n  total    Float\n\n  // Relations\n  order     Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)\n  orderId   Int\n  product   Product @relation(fields: [productId], references: [id], onDelete: Restrict)\n  productId Int\n\n  @@unique([orderId, productId])\n}\n\nmodel Review {\n  id        Int      @id @default(autoincrement())\n  rating    Int // 1-5\n  title     String?\n  content   String?\n  approved  Boolean  @default(false)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Relations\n  author    User?   @relation(fields: [authorId], references: [id], onDelete: SetNull)\n  authorId  Int?\n  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n  productId Int\n\n  @@unique([authorId, productId])\n}\n\n// ============================================\n// MESSAGING & COLLABORATION\n// ============================================\n\nmodel Message {\n  id        Int      @id @default(autoincrement())\n  subject   String?\n  content   String\n  read      Boolean  @default(false)\n  priority  Priority @default(MEDIUM)\n  createdAt DateTime @default(now())\n\n  // Relations\n  sender     User? @relation(\"SentMessages\", fields: [senderId], references: [id], onDelete: SetNull)\n  senderId   Int?\n  receiver   User? @relation(\"ReceivedMessages\", fields: [receiverId], references: [id], onDelete: SetNull)\n  receiverId Int?\n}\n\nmodel Group {\n  id          Int      @id @default(autoincrement())\n  name        String   @unique\n  description String?\n  isPrivate   Boolean  @default(false)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  // N:M relation\n  members User[] @relation(\"GroupMembers\")\n}\n\n// ============================================\n// TASK MANAGEMENT\n// ============================================\n\nmodel Project {\n  id          Int       @id @default(autoincrement())\n  name        String\n  description String?\n  startDate   DateTime?\n  endDate     DateTime?\n  budget      Float?\n  isActive    Boolean   @default(true)\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  tasks Task[]\n}\n\nmodel Task {\n  id             Int       @id @default(autoincrement())\n  title          String\n  description    String?\n  status         Status    @default(DRAFT)\n  priority       Priority  @default(MEDIUM)\n  dueDate        DateTime?\n  completedAt    DateTime?\n  estimatedHours Float?\n  actualHours    Float?\n  createdAt      DateTime  @default(now())\n  updatedAt      DateTime  @updatedAt\n\n  // Relations\n  project   Project? @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  projectId Int?\n\n  // Self-referential (subtasks)\n  parent   Task?  @relation(\"TaskSubtasks\", fields: [parentId], references: [id], onDelete: Cascade)\n  parentId Int?\n  subtasks Task[] @relation(\"TaskSubtasks\")\n}\n\n// ============================================\n// SETTINGS & CONFIGURATION\n// ============================================\n\nmodel Setting {\n  id        Int      @id @default(autoincrement())\n  key       String   @unique\n  value     String\n  type      String   @default(\"string\") // string, number, boolean, json\n  group     String   @default(\"general\")\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel AuditLog {\n  id        Int      @id @default(autoincrement())\n  action    String\n  entity    String\n  entityId  String\n  oldValue  String?\n  newValue  String?\n  ipAddress String?\n  userAgent String?\n  createdAt DateTime @default(now())\n}\n"
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"balance\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"profile\",\"kind\":\"object\",\"type\":\"Profile\",\"relationName\":\"ProfileToUser\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToUser\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"CommentToUser\"},{\"name\":\"orders\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToUser\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"ReviewToUser\"},{\"name\":\"sentMessages\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"SentMessages\"},{\"name\":\"receivedMessages\",\"kind\":\"object\",\"type\":\"Message\",\"relationName\":\"ReceivedMessages\"},{\"name\":\"followedBy\",\"kind\":\"object\",\"type\":\"UserFollow\",\"relationName\":\"Following\"},{\"name\":\"following\",\"kind\":\"object\",\"type\":\"UserFollow\",\"relationName\":\"FollowedBy\"},{\"name\":\"likedPosts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"UserLikedPosts\"},{\"name\":\"groups\",\"kind\":\"object\",\"type\":\"Group\",\"relationName\":\"GroupMembers\"}],\"dbName\":null},\"Profile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"bio\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatar\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"website\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProfileToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null},\"UserFollow\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"follower\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"Following\"},{\"name\":\"followerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"following\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FollowedBy\"},{\"name\":\"followingId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Post\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"excerpt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"featured\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"viewCount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"readTime\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PostToUser\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"category\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryToPost\"},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"CommentToPost\"},{\"name\":\"tags\",\"kind\":\"object\",\"type\":\"Tag\",\"relationName\":\"PostTags\"},{\"name\":\"likedBy\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserLikedPosts\"}],\"dbName\":null},\"Comment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"approved\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CommentToUser\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"post\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"CommentToPost\"},{\"name\":\"postId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"CommentReplies\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"replies\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"CommentReplies\"}],\"dbName\":null},\"Category\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"color\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"CategoryToPost\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryTree\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"children\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryTree\"}],\"dbName\":null},\"Tag\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostTags\"}],\"dbName\":null},\"Product\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sku\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"comparePrice\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"costPrice\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"weight\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"brand\",\"kind\":\"object\",\"type\":\"Brand\",\"relationName\":\"BrandToProduct\"},{\"name\":\"brandId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"orderItems\",\"kind\":\"object\",\"type\":\"OrderItem\",\"relationName\":\"OrderItemToProduct\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"ProductToReview\"},{\"name\":\"productCategories\",\"kind\":\"object\",\"type\":\"ProductCategory\",\"relationName\":\"ProductToProductCategory\"}],\"dbName\":null},\"Brand\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"logo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"website\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"products\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"BrandToProduct\"}],\"dbName\":null},\"ProductCategory\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"ProductCategory\",\"relationName\":\"ProductCategoryTree\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"children\",\"kind\":\"object\",\"type\":\"ProductCategory\",\"relationName\":\"ProductCategoryTree\"},{\"name\":\"products\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"ProductToProductCategory\"}],\"dbName\":null},\"Order\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"orderNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"subtotal\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"tax\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"shipping\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"total\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"shippingAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"billingAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"OrderToUser\"},{\"name\":\"customerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"items\",\"kind\":\"object\",\"type\":\"OrderItem\",\"relationName\":\"OrderToOrderItem\"}],\"dbName\":null},\"OrderItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"total\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToOrderItem\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"product\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"OrderItemToProduct\"},{\"name\":\"productId\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null},\"Review\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"approved\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ReviewToUser\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"product\",\"kind\":\"object\",\"type\":\"Product\",\"relationName\":\"ProductToReview\"},{\"name\":\"productId\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null},\"Message\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"subject\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"read\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"priority\",\"kind\":\"enum\",\"type\":\"Priority\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"sender\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SentMessages\"},{\"name\":\"senderId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"receiver\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ReceivedMessages\"},{\"name\":\"receiverId\",\"kind\":\"scalar\",\"type\":\"Int\"}],\"dbName\":null},\"Group\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isPrivate\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"members\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"GroupMembers\"}],\"dbName\":null},\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"budget\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"tasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"ProjectToTask\"}],\"dbName\":null},\"Task\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"priority\",\"kind\":\"enum\",\"type\":\"Priority\"},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"estimatedHours\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"actualHours\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToTask\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"TaskSubtasks\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"subtasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"TaskSubtasks\"}],\"dbName\":null},\"Setting\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"key\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"value\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"group\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"AuditLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"action\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"entity\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"entityId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"oldValue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"newValue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.compilerWasm = {
    getRuntime: async ()=>__turbopack_context__.r("[project]/examples/admin-test/src/generated/prisma/query_compiler_fast_bg.js [app-route] (ecmascript)"),
    getQueryCompilerWasmModule: async ()=>{
        const { Buffer } = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
        const { wasm } = __turbopack_context__.r("[project]/examples/admin-test/src/generated/prisma/query_compiler_fast_bg.wasm-base64.js [app-route] (ecmascript)");
        const queryCompilerWasmFileBytes = Buffer.from(wasm, 'base64');
        return new WebAssembly.Module(queryCompilerWasmFileBytes);
    },
    importName: './query_compiler_fast_bg.js'
};
const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
}),
];

//# sourceMappingURL=examples_admin-test_src_generated_prisma_dc6c40b9._.js.map