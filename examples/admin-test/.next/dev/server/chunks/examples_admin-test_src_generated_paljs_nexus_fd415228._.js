module.exports = [
"[project]/examples/admin-test/src/generated/paljs/nexus/User/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'User',
    definition (t) {
        t.int('id');
        t.string('email');
        t.string('username');
        t.nullable.string('firstName');
        t.nullable.string('lastName');
        t.field('role', {
            type: 'Role'
        });
        t.boolean('isActive');
        t.float('balance');
        t.nullable.string('metadata');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('profile', {
            type: 'Profile',
            resolve (root) {
                return root.profile;
            }
        });
        t.list.field('posts', {
            type: 'Post',
            resolve (root) {
                return root.posts;
            }
        });
        t.list.field('comments', {
            type: 'Comment',
            resolve (root) {
                return root.comments;
            }
        });
        t.list.field('orders', {
            type: 'Order',
            resolve (root) {
                return root.orders;
            }
        });
        t.list.field('reviews', {
            type: 'Review',
            resolve (root) {
                return root.reviews;
            }
        });
        t.list.field('sentMessages', {
            type: 'Message',
            resolve (root) {
                return root.sentMessages;
            }
        });
        t.list.field('receivedMessages', {
            type: 'Message',
            resolve (root) {
                return root.receivedMessages;
            }
        });
        t.list.field('followedBy', {
            type: 'UserFollow',
            resolve (root) {
                return root.followedBy;
            }
        });
        t.list.field('following', {
            type: 'UserFollow',
            resolve (root) {
                return root.following;
            }
        });
        t.list.field('likedPosts', {
            type: 'Post',
            resolve (root) {
                return root.likedPosts;
            }
        });
        t.list.field('groups', {
            type: 'Group',
            resolve (root) {
                return root.groups;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFindUniqueQuery",
    ()=>UserFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueUser', {
    type: 'User',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.user.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFindFirstQuery",
    ()=>UserFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstUser', {
    type: 'User',
    args: {
        where: 'UserWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserOrderByWithRelationInput'),
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.user.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFindManyQuery",
    ()=>UserFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('User'))),
    args: {
        where: 'UserWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserOrderByWithRelationInput'),
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.user.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFindCountQuery",
    ()=>UserFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'UserWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserOrderByWithRelationInput'),
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.user.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserAggregateQuery",
    ()=>UserAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateUser', {
    type: 'AggregateUser',
    args: {
        where: 'UserWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserOrderByWithRelationInput'),
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.user.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserCreateOneMutation",
    ()=>UserCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('User'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.user.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserUpdateOneMutation",
    ()=>UserUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('User'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.user.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDeleteOneMutation",
    ()=>UserDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneUser', {
    type: 'User',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.user.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserUpsertOneMutation",
    ()=>UserUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('User'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.user.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserUpdateManyMutation",
    ()=>UserUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserUpdateManyMutationInput'),
        where: 'UserWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.user.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDeleteManyMutation",
    ()=>UserDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyUser', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'UserWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.user.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserAggregateQuery"],
    "UserFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindCountQuery"],
    "UserFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindFirstQuery"],
    "UserFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindManyQuery"],
    "UserFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserCreateOneMutation"],
    "UserDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDeleteManyMutation"],
    "UserDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDeleteOneMutation"],
    "UserUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserUpdateManyMutation"],
    "UserUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserUpdateOneMutation"],
    "UserUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/User/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["User"],
    "UserAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserAggregateQuery"],
    "UserCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserCreateOneMutation"],
    "UserDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDeleteManyMutation"],
    "UserDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserDeleteOneMutation"],
    "UserFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindCountQuery"],
    "UserFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindFirstQuery"],
    "UserFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindManyQuery"],
    "UserFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFindUniqueQuery"],
    "UserUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserUpdateManyMutation"],
    "UserUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserUpdateOneMutation"],
    "UserUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Profile",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Profile',
    definition (t) {
        t.int('id');
        t.nullable.string('bio');
        t.nullable.string('avatar');
        t.nullable.string('website');
        t.nullable.string('location');
        t.nullable.field('birthDate', {
            type: 'DateTime'
        });
        t.nullable.string('phone');
        t.field('user', {
            type: 'User',
            resolve (root) {
                return root.user;
            }
        });
        t.int('userId');
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileFindUniqueQuery",
    ()=>ProfileFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueProfile', {
    type: 'Profile',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.profile.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileFindFirstQuery",
    ()=>ProfileFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProfileFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstProfile', {
    type: 'Profile',
    args: {
        where: 'ProfileWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProfileOrderByWithRelationInput'),
        cursor: 'ProfileWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProfileScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.profile.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileFindManyQuery",
    ()=>ProfileFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProfileFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Profile'))),
    args: {
        where: 'ProfileWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProfileOrderByWithRelationInput'),
        cursor: 'ProfileWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProfileScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.profile.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileFindCountQuery",
    ()=>ProfileFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProfileFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'ProfileWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProfileOrderByWithRelationInput'),
        cursor: 'ProfileWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProfileScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.profile.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileAggregateQuery",
    ()=>ProfileAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProfileAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateProfile', {
    type: 'AggregateProfile',
    args: {
        where: 'ProfileWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProfileOrderByWithRelationInput'),
        cursor: 'ProfileWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.profile.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileCreateOneMutation",
    ()=>ProfileCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Profile'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.profile.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileUpdateOneMutation",
    ()=>ProfileUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Profile'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.profile.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileDeleteOneMutation",
    ()=>ProfileDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneProfile', {
    type: 'Profile',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.profile.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileUpsertOneMutation",
    ()=>ProfileUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Profile'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.profile.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileUpdateManyMutation",
    ()=>ProfileUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProfileUpdateManyMutationInput'),
        where: 'ProfileWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.profile.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileDeleteManyMutation",
    ()=>ProfileDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProfileDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyProfile', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'ProfileWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.profile.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileAggregateQuery"],
    "ProfileFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindCountQuery"],
    "ProfileFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindFirstQuery"],
    "ProfileFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindManyQuery"],
    "ProfileFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileCreateOneMutation"],
    "ProfileDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileDeleteManyMutation"],
    "ProfileDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileDeleteOneMutation"],
    "ProfileUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileUpdateManyMutation"],
    "ProfileUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileUpdateOneMutation"],
    "ProfileUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Profile/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Profile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Profile"],
    "ProfileAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileAggregateQuery"],
    "ProfileCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileCreateOneMutation"],
    "ProfileDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileDeleteManyMutation"],
    "ProfileDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileDeleteOneMutation"],
    "ProfileFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindCountQuery"],
    "ProfileFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindFirstQuery"],
    "ProfileFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindManyQuery"],
    "ProfileFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileFindUniqueQuery"],
    "ProfileUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileUpdateManyMutation"],
    "ProfileUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileUpdateOneMutation"],
    "ProfileUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProfileUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollow",
    ()=>UserFollow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const UserFollow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'UserFollow',
    definition (t) {
        t.int('id');
        t.field('follower', {
            type: 'User',
            resolve (root) {
                return root.follower;
            }
        });
        t.int('followerId');
        t.field('following', {
            type: 'User',
            resolve (root) {
                return root.following;
            }
        });
        t.int('followingId');
        t.field('createdAt', {
            type: 'DateTime'
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowFindUniqueQuery",
    ()=>UserFollowFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueUserFollow', {
    type: 'UserFollow',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.userFollow.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowFindFirstQuery",
    ()=>UserFollowFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFollowFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstUserFollow', {
    type: 'UserFollow',
    args: {
        where: 'UserFollowWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserFollowOrderByWithRelationInput'),
        cursor: 'UserFollowWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserFollowScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.userFollow.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowFindManyQuery",
    ()=>UserFollowFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFollowFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollow'))),
    args: {
        where: 'UserFollowWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserFollowOrderByWithRelationInput'),
        cursor: 'UserFollowWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserFollowScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.userFollow.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowFindCountQuery",
    ()=>UserFollowFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFollowFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'UserFollowWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserFollowOrderByWithRelationInput'),
        cursor: 'UserFollowWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserFollowScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.userFollow.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowAggregateQuery",
    ()=>UserFollowAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const UserFollowAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateUserFollow', {
    type: 'AggregateUserFollow',
    args: {
        where: 'UserFollowWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('UserFollowOrderByWithRelationInput'),
        cursor: 'UserFollowWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.userFollow.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowCreateOneMutation",
    ()=>UserFollowCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollow'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.userFollow.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowUpdateOneMutation",
    ()=>UserFollowUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollow'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.userFollow.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowDeleteOneMutation",
    ()=>UserFollowDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneUserFollow', {
    type: 'UserFollow',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.userFollow.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowUpsertOneMutation",
    ()=>UserFollowUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollow'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.userFollow.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowUpdateManyMutation",
    ()=>UserFollowUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('UserFollowUpdateManyMutationInput'),
        where: 'UserFollowWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.userFollow.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowDeleteManyMutation",
    ()=>UserFollowDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const UserFollowDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyUserFollow', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'UserFollowWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.userFollow.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowAggregateQuery"],
    "UserFollowFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindCountQuery"],
    "UserFollowFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindFirstQuery"],
    "UserFollowFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindManyQuery"],
    "UserFollowFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollowCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowCreateOneMutation"],
    "UserFollowDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowDeleteManyMutation"],
    "UserFollowDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowDeleteOneMutation"],
    "UserFollowUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowUpdateManyMutation"],
    "UserFollowUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowUpdateOneMutation"],
    "UserFollowUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserFollow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollow"],
    "UserFollowAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowAggregateQuery"],
    "UserFollowCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowCreateOneMutation"],
    "UserFollowDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowDeleteManyMutation"],
    "UserFollowDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowDeleteOneMutation"],
    "UserFollowFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindCountQuery"],
    "UserFollowFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindFirstQuery"],
    "UserFollowFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindManyQuery"],
    "UserFollowFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowFindUniqueQuery"],
    "UserFollowUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowUpdateManyMutation"],
    "UserFollowUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowUpdateOneMutation"],
    "UserFollowUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UserFollowUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Post",
    ()=>Post
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Post',
    definition (t) {
        t.int('id');
        t.string('title');
        t.string('slug');
        t.nullable.string('content');
        t.nullable.string('excerpt');
        t.field('status', {
            type: 'Status'
        });
        t.boolean('featured');
        t.int('viewCount');
        t.nullable.float('readTime');
        t.nullable.field('publishedAt', {
            type: 'DateTime'
        });
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('author', {
            type: 'User',
            resolve (root) {
                return root.author;
            }
        });
        t.nullable.int('authorId');
        t.nullable.field('category', {
            type: 'Category',
            resolve (root) {
                return root.category;
            }
        });
        t.nullable.int('categoryId');
        t.list.field('comments', {
            type: 'Comment',
            resolve (root) {
                return root.comments;
            }
        });
        t.list.field('tags', {
            type: 'Tag',
            resolve (root) {
                return root.tags;
            }
        });
        t.list.field('likedBy', {
            type: 'User',
            resolve (root) {
                return root.likedBy;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostFindUniqueQuery",
    ()=>PostFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniquePost', {
    type: 'Post',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.post.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostFindFirstQuery",
    ()=>PostFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const PostFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstPost', {
    type: 'Post',
    args: {
        where: 'PostWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('PostOrderByWithRelationInput'),
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.post.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostFindManyQuery",
    ()=>PostFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const PostFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyPost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Post'))),
    args: {
        where: 'PostWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('PostOrderByWithRelationInput'),
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.post.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostFindCountQuery",
    ()=>PostFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const PostFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountPost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'PostWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('PostOrderByWithRelationInput'),
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.post.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostAggregateQuery",
    ()=>PostAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const PostAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregatePost', {
    type: 'AggregatePost',
    args: {
        where: 'PostWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('PostOrderByWithRelationInput'),
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.post.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostCreateOneMutation",
    ()=>PostCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOnePost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Post'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.post.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostUpdateOneMutation",
    ()=>PostUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOnePost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Post'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.post.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostDeleteOneMutation",
    ()=>PostDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOnePost', {
    type: 'Post',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.post.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostUpsertOneMutation",
    ()=>PostUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOnePost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Post'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.post.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostUpdateManyMutation",
    ()=>PostUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyPost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('PostUpdateManyMutationInput'),
        where: 'PostWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.post.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostDeleteManyMutation",
    ()=>PostDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const PostDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyPost', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'PostWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.post.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostAggregateQuery"],
    "PostFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindCountQuery"],
    "PostFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindFirstQuery"],
    "PostFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindManyQuery"],
    "PostFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostCreateOneMutation"],
    "PostDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostDeleteManyMutation"],
    "PostDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostDeleteOneMutation"],
    "PostUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostUpdateManyMutation"],
    "PostUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostUpdateOneMutation"],
    "PostUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Post/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Post",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Post"],
    "PostAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostAggregateQuery"],
    "PostCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostCreateOneMutation"],
    "PostDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostDeleteManyMutation"],
    "PostDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostDeleteOneMutation"],
    "PostFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindCountQuery"],
    "PostFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindFirstQuery"],
    "PostFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindManyQuery"],
    "PostFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostFindUniqueQuery"],
    "PostUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostUpdateManyMutation"],
    "PostUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostUpdateOneMutation"],
    "PostUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Comment",
    ()=>Comment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Comment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Comment',
    definition (t) {
        t.int('id');
        t.string('content');
        t.boolean('approved');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('author', {
            type: 'User',
            resolve (root) {
                return root.author;
            }
        });
        t.nullable.int('authorId');
        t.field('post', {
            type: 'Post',
            resolve (root) {
                return root.post;
            }
        });
        t.int('postId');
        t.nullable.field('parent', {
            type: 'Comment',
            resolve (root) {
                return root.parent;
            }
        });
        t.nullable.int('parentId');
        t.list.field('replies', {
            type: 'Comment',
            resolve (root) {
                return root.replies;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentFindUniqueQuery",
    ()=>CommentFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueComment', {
    type: 'Comment',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.comment.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentFindFirstQuery",
    ()=>CommentFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CommentFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstComment', {
    type: 'Comment',
    args: {
        where: 'CommentWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CommentOrderByWithRelationInput'),
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.comment.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentFindManyQuery",
    ()=>CommentFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CommentFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Comment'))),
    args: {
        where: 'CommentWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CommentOrderByWithRelationInput'),
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.comment.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentFindCountQuery",
    ()=>CommentFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CommentFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'CommentWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CommentOrderByWithRelationInput'),
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.comment.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentAggregateQuery",
    ()=>CommentAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CommentAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateComment', {
    type: 'AggregateComment',
    args: {
        where: 'CommentWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CommentOrderByWithRelationInput'),
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.comment.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentCreateOneMutation",
    ()=>CommentCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Comment'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.comment.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentUpdateOneMutation",
    ()=>CommentUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Comment'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.comment.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentDeleteOneMutation",
    ()=>CommentDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneComment', {
    type: 'Comment',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.comment.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentUpsertOneMutation",
    ()=>CommentUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Comment'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.comment.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentUpdateManyMutation",
    ()=>CommentUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CommentUpdateManyMutationInput'),
        where: 'CommentWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.comment.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentDeleteManyMutation",
    ()=>CommentDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CommentDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyComment', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'CommentWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.comment.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentAggregateQuery"],
    "CommentFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindCountQuery"],
    "CommentFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindFirstQuery"],
    "CommentFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindManyQuery"],
    "CommentFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentCreateOneMutation"],
    "CommentDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentDeleteManyMutation"],
    "CommentDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentDeleteOneMutation"],
    "CommentUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentUpdateManyMutation"],
    "CommentUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentUpdateOneMutation"],
    "CommentUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Comment/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Comment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Comment"],
    "CommentAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentAggregateQuery"],
    "CommentCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentCreateOneMutation"],
    "CommentDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentDeleteManyMutation"],
    "CommentDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentDeleteOneMutation"],
    "CommentFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindCountQuery"],
    "CommentFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindFirstQuery"],
    "CommentFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindManyQuery"],
    "CommentFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentFindUniqueQuery"],
    "CommentUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentUpdateManyMutation"],
    "CommentUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentUpdateOneMutation"],
    "CommentUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CommentUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>Category
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Category',
    definition (t) {
        t.int('id');
        t.string('name');
        t.string('slug');
        t.nullable.string('description');
        t.nullable.string('color');
        t.int('order');
        t.boolean('isActive');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.list.field('posts', {
            type: 'Post',
            resolve (root) {
                return root.posts;
            }
        });
        t.nullable.field('parent', {
            type: 'Category',
            resolve (root) {
                return root.parent;
            }
        });
        t.nullable.int('parentId');
        t.list.field('children', {
            type: 'Category',
            resolve (root) {
                return root.children;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFindUniqueQuery",
    ()=>CategoryFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueCategory', {
    type: 'Category',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.category.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFindFirstQuery",
    ()=>CategoryFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CategoryFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstCategory', {
    type: 'Category',
    args: {
        where: 'CategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CategoryOrderByWithRelationInput'),
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.category.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFindManyQuery",
    ()=>CategoryFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CategoryFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Category'))),
    args: {
        where: 'CategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CategoryOrderByWithRelationInput'),
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.category.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFindCountQuery",
    ()=>CategoryFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CategoryFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'CategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CategoryOrderByWithRelationInput'),
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.category.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryAggregateQuery",
    ()=>CategoryAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const CategoryAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateCategory', {
    type: 'AggregateCategory',
    args: {
        where: 'CategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('CategoryOrderByWithRelationInput'),
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.category.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCreateOneMutation",
    ()=>CategoryCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Category'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.category.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryUpdateOneMutation",
    ()=>CategoryUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Category'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.category.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryDeleteOneMutation",
    ()=>CategoryDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneCategory', {
    type: 'Category',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.category.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryUpsertOneMutation",
    ()=>CategoryUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Category'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.category.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryUpdateManyMutation",
    ()=>CategoryUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('CategoryUpdateManyMutationInput'),
        where: 'CategoryWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.category.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryDeleteManyMutation",
    ()=>CategoryDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const CategoryDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'CategoryWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.category.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryAggregateQuery"],
    "CategoryFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindCountQuery"],
    "CategoryFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindFirstQuery"],
    "CategoryFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindManyQuery"],
    "CategoryFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryCreateOneMutation"],
    "CategoryDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryDeleteManyMutation"],
    "CategoryDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryDeleteOneMutation"],
    "CategoryUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryUpdateManyMutation"],
    "CategoryUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryUpdateOneMutation"],
    "CategoryUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Category/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Category",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Category"],
    "CategoryAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryAggregateQuery"],
    "CategoryCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryCreateOneMutation"],
    "CategoryDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryDeleteManyMutation"],
    "CategoryDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryDeleteOneMutation"],
    "CategoryFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindCountQuery"],
    "CategoryFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindFirstQuery"],
    "CategoryFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindManyQuery"],
    "CategoryFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryFindUniqueQuery"],
    "CategoryUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryUpdateManyMutation"],
    "CategoryUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryUpdateOneMutation"],
    "CategoryUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CategoryUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Tag',
    definition (t) {
        t.int('id');
        t.string('name');
        t.string('slug');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.list.field('posts', {
            type: 'Post',
            resolve (root) {
                return root.posts;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagFindUniqueQuery",
    ()=>TagFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueTag', {
    type: 'Tag',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.tag.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagFindFirstQuery",
    ()=>TagFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TagFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstTag', {
    type: 'Tag',
    args: {
        where: 'TagWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TagOrderByWithRelationInput'),
        cursor: 'TagWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TagScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.tag.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagFindManyQuery",
    ()=>TagFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TagFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Tag'))),
    args: {
        where: 'TagWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TagOrderByWithRelationInput'),
        cursor: 'TagWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TagScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.tag.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagFindCountQuery",
    ()=>TagFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TagFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'TagWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TagOrderByWithRelationInput'),
        cursor: 'TagWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TagScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.tag.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagAggregateQuery",
    ()=>TagAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TagAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateTag', {
    type: 'AggregateTag',
    args: {
        where: 'TagWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TagOrderByWithRelationInput'),
        cursor: 'TagWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.tag.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagCreateOneMutation",
    ()=>TagCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Tag'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.tag.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagUpdateOneMutation",
    ()=>TagUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Tag'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.tag.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagDeleteOneMutation",
    ()=>TagDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneTag', {
    type: 'Tag',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.tag.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagUpsertOneMutation",
    ()=>TagUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Tag'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.tag.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagUpdateManyMutation",
    ()=>TagUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TagUpdateManyMutationInput'),
        where: 'TagWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.tag.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagDeleteManyMutation",
    ()=>TagDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TagDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyTag', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'TagWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.tag.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagAggregateQuery"],
    "TagFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindCountQuery"],
    "TagFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindFirstQuery"],
    "TagFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindManyQuery"],
    "TagFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TagCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagCreateOneMutation"],
    "TagDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagDeleteManyMutation"],
    "TagDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagDeleteOneMutation"],
    "TagUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagUpdateManyMutation"],
    "TagUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagUpdateOneMutation"],
    "TagUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Tag/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tag"],
    "TagAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagAggregateQuery"],
    "TagCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagCreateOneMutation"],
    "TagDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagDeleteManyMutation"],
    "TagDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagDeleteOneMutation"],
    "TagFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindCountQuery"],
    "TagFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindFirstQuery"],
    "TagFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindManyQuery"],
    "TagFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagFindUniqueQuery"],
    "TagUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagUpdateManyMutation"],
    "TagUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagUpdateOneMutation"],
    "TagUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TagUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Product",
    ()=>Product
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Product',
    definition (t) {
        t.int('id');
        t.string('name');
        t.string('sku');
        t.nullable.string('description');
        t.float('price');
        t.nullable.float('comparePrice');
        t.nullable.float('costPrice');
        t.int('quantity');
        t.nullable.float('weight');
        t.boolean('isActive');
        t.boolean('isFeatured');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('brand', {
            type: 'Brand',
            resolve (root) {
                return root.brand;
            }
        });
        t.nullable.int('brandId');
        t.list.field('orderItems', {
            type: 'OrderItem',
            resolve (root) {
                return root.orderItems;
            }
        });
        t.list.field('reviews', {
            type: 'Review',
            resolve (root) {
                return root.reviews;
            }
        });
        t.list.field('productCategories', {
            type: 'ProductCategory',
            resolve (root) {
                return root.productCategories;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFindUniqueQuery",
    ()=>ProductFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueProduct', {
    type: 'Product',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.product.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFindFirstQuery",
    ()=>ProductFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstProduct', {
    type: 'Product',
    args: {
        where: 'ProductWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductOrderByWithRelationInput'),
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.product.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFindManyQuery",
    ()=>ProductFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Product'))),
    args: {
        where: 'ProductWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductOrderByWithRelationInput'),
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.product.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFindCountQuery",
    ()=>ProductFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'ProductWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductOrderByWithRelationInput'),
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.product.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductAggregateQuery",
    ()=>ProductAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateProduct', {
    type: 'AggregateProduct',
    args: {
        where: 'ProductWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductOrderByWithRelationInput'),
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.product.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCreateOneMutation",
    ()=>ProductCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Product'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.product.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductUpdateOneMutation",
    ()=>ProductUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Product'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.product.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDeleteOneMutation",
    ()=>ProductDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneProduct', {
    type: 'Product',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.product.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductUpsertOneMutation",
    ()=>ProductUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Product'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.product.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductUpdateManyMutation",
    ()=>ProductUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductUpdateManyMutationInput'),
        where: 'ProductWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.product.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDeleteManyMutation",
    ()=>ProductDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyProduct', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'ProductWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.product.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductAggregateQuery"],
    "ProductFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindCountQuery"],
    "ProductFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindFirstQuery"],
    "ProductFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindManyQuery"],
    "ProductFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCreateOneMutation"],
    "ProductDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductDeleteManyMutation"],
    "ProductDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductDeleteOneMutation"],
    "ProductUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductUpdateManyMutation"],
    "ProductUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductUpdateOneMutation"],
    "ProductUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Product/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Product",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Product"],
    "ProductAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductAggregateQuery"],
    "ProductCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCreateOneMutation"],
    "ProductDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductDeleteManyMutation"],
    "ProductDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductDeleteOneMutation"],
    "ProductFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindCountQuery"],
    "ProductFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindFirstQuery"],
    "ProductFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindManyQuery"],
    "ProductFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductFindUniqueQuery"],
    "ProductUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductUpdateManyMutation"],
    "ProductUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductUpdateOneMutation"],
    "ProductUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brand",
    ()=>Brand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Brand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Brand',
    definition (t) {
        t.int('id');
        t.string('name');
        t.string('slug');
        t.nullable.string('logo');
        t.nullable.string('description');
        t.nullable.string('website');
        t.boolean('isActive');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.list.field('products', {
            type: 'Product',
            resolve (root) {
                return root.products;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandFindUniqueQuery",
    ()=>BrandFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueBrand', {
    type: 'Brand',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.brand.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandFindFirstQuery",
    ()=>BrandFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const BrandFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstBrand', {
    type: 'Brand',
    args: {
        where: 'BrandWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('BrandOrderByWithRelationInput'),
        cursor: 'BrandWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'BrandScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.brand.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandFindManyQuery",
    ()=>BrandFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const BrandFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Brand'))),
    args: {
        where: 'BrandWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('BrandOrderByWithRelationInput'),
        cursor: 'BrandWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'BrandScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.brand.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandFindCountQuery",
    ()=>BrandFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const BrandFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'BrandWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('BrandOrderByWithRelationInput'),
        cursor: 'BrandWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'BrandScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.brand.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandAggregateQuery",
    ()=>BrandAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const BrandAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateBrand', {
    type: 'AggregateBrand',
    args: {
        where: 'BrandWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('BrandOrderByWithRelationInput'),
        cursor: 'BrandWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.brand.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandCreateOneMutation",
    ()=>BrandCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Brand'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.brand.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandUpdateOneMutation",
    ()=>BrandUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Brand'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.brand.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandDeleteOneMutation",
    ()=>BrandDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneBrand', {
    type: 'Brand',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.brand.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandUpsertOneMutation",
    ()=>BrandUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Brand'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.brand.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandUpdateManyMutation",
    ()=>BrandUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BrandUpdateManyMutationInput'),
        where: 'BrandWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.brand.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandDeleteManyMutation",
    ()=>BrandDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const BrandDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyBrand', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'BrandWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.brand.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandAggregateQuery"],
    "BrandFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindCountQuery"],
    "BrandFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindFirstQuery"],
    "BrandFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindManyQuery"],
    "BrandFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandCreateOneMutation"],
    "BrandDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandDeleteManyMutation"],
    "BrandDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandDeleteOneMutation"],
    "BrandUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandUpdateManyMutation"],
    "BrandUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandUpdateOneMutation"],
    "BrandUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Brand/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Brand"],
    "BrandAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandAggregateQuery"],
    "BrandCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandCreateOneMutation"],
    "BrandDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandDeleteManyMutation"],
    "BrandDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandDeleteOneMutation"],
    "BrandFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindCountQuery"],
    "BrandFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindFirstQuery"],
    "BrandFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindManyQuery"],
    "BrandFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandFindUniqueQuery"],
    "BrandUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandUpdateManyMutation"],
    "BrandUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandUpdateOneMutation"],
    "BrandUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BrandUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategory",
    ()=>ProductCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const ProductCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'ProductCategory',
    definition (t) {
        t.int('id');
        t.string('name');
        t.string('slug');
        t.int('order');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.nullable.field('parent', {
            type: 'ProductCategory',
            resolve (root) {
                return root.parent;
            }
        });
        t.nullable.int('parentId');
        t.list.field('children', {
            type: 'ProductCategory',
            resolve (root) {
                return root.children;
            }
        });
        t.list.field('products', {
            type: 'Product',
            resolve (root) {
                return root.products;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryFindUniqueQuery",
    ()=>ProductCategoryFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueProductCategory', {
    type: 'ProductCategory',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.productCategory.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryFindFirstQuery",
    ()=>ProductCategoryFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductCategoryFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstProductCategory', {
    type: 'ProductCategory',
    args: {
        where: 'ProductCategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductCategoryOrderByWithRelationInput'),
        cursor: 'ProductCategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductCategoryScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.productCategory.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryFindManyQuery",
    ()=>ProductCategoryFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductCategoryFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategory'))),
    args: {
        where: 'ProductCategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductCategoryOrderByWithRelationInput'),
        cursor: 'ProductCategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductCategoryScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.productCategory.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryFindCountQuery",
    ()=>ProductCategoryFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductCategoryFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'ProductCategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductCategoryOrderByWithRelationInput'),
        cursor: 'ProductCategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductCategoryScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.productCategory.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryAggregateQuery",
    ()=>ProductCategoryAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProductCategoryAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateProductCategory', {
    type: 'AggregateProductCategory',
    args: {
        where: 'ProductCategoryWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProductCategoryOrderByWithRelationInput'),
        cursor: 'ProductCategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.productCategory.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryCreateOneMutation",
    ()=>ProductCategoryCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategory'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.productCategory.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryUpdateOneMutation",
    ()=>ProductCategoryUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategory'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.productCategory.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryDeleteOneMutation",
    ()=>ProductCategoryDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneProductCategory', {
    type: 'ProductCategory',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.productCategory.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryUpsertOneMutation",
    ()=>ProductCategoryUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategory'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.productCategory.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryUpdateManyMutation",
    ()=>ProductCategoryUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProductCategoryUpdateManyMutationInput'),
        where: 'ProductCategoryWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.productCategory.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryDeleteManyMutation",
    ()=>ProductCategoryDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProductCategoryDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyProductCategory', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'ProductCategoryWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.productCategory.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryAggregateQuery"],
    "ProductCategoryFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindCountQuery"],
    "ProductCategoryFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindFirstQuery"],
    "ProductCategoryFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindManyQuery"],
    "ProductCategoryFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategoryCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryCreateOneMutation"],
    "ProductCategoryDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryDeleteManyMutation"],
    "ProductCategoryDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryDeleteOneMutation"],
    "ProductCategoryUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryUpdateManyMutation"],
    "ProductCategoryUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryUpdateOneMutation"],
    "ProductCategoryUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategory"],
    "ProductCategoryAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryAggregateQuery"],
    "ProductCategoryCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryCreateOneMutation"],
    "ProductCategoryDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryDeleteManyMutation"],
    "ProductCategoryDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryDeleteOneMutation"],
    "ProductCategoryFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindCountQuery"],
    "ProductCategoryFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindFirstQuery"],
    "ProductCategoryFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindManyQuery"],
    "ProductCategoryFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryFindUniqueQuery"],
    "ProductCategoryUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryUpdateManyMutation"],
    "ProductCategoryUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryUpdateOneMutation"],
    "ProductCategoryUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductCategoryUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Order",
    ()=>Order
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Order',
    definition (t) {
        t.int('id');
        t.string('orderNumber');
        t.field('status', {
            type: 'Status'
        });
        t.float('subtotal');
        t.float('tax');
        t.float('shipping');
        t.float('total');
        t.nullable.string('notes');
        t.nullable.string('shippingAddress');
        t.nullable.string('billingAddress');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('customer', {
            type: 'User',
            resolve (root) {
                return root.customer;
            }
        });
        t.nullable.int('customerId');
        t.list.field('items', {
            type: 'OrderItem',
            resolve (root) {
                return root.items;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFindUniqueQuery",
    ()=>OrderFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueOrder', {
    type: 'Order',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.order.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFindFirstQuery",
    ()=>OrderFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstOrder', {
    type: 'Order',
    args: {
        where: 'OrderWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderOrderByWithRelationInput'),
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.order.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFindManyQuery",
    ()=>OrderFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Order'))),
    args: {
        where: 'OrderWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderOrderByWithRelationInput'),
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.order.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFindCountQuery",
    ()=>OrderFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'OrderWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderOrderByWithRelationInput'),
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.order.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderAggregateQuery",
    ()=>OrderAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateOrder', {
    type: 'AggregateOrder',
    args: {
        where: 'OrderWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderOrderByWithRelationInput'),
        cursor: 'OrderWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.order.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderCreateOneMutation",
    ()=>OrderCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Order'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.order.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderUpdateOneMutation",
    ()=>OrderUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Order'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.order.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderDeleteOneMutation",
    ()=>OrderDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneOrder', {
    type: 'Order',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.order.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderUpsertOneMutation",
    ()=>OrderUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Order'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.order.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderUpdateManyMutation",
    ()=>OrderUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderUpdateManyMutationInput'),
        where: 'OrderWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.order.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderDeleteManyMutation",
    ()=>OrderDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyOrder', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'OrderWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.order.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderAggregateQuery"],
    "OrderFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindCountQuery"],
    "OrderFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindFirstQuery"],
    "OrderFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindManyQuery"],
    "OrderFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderCreateOneMutation"],
    "OrderDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderDeleteManyMutation"],
    "OrderDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderDeleteOneMutation"],
    "OrderUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderUpdateManyMutation"],
    "OrderUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderUpdateOneMutation"],
    "OrderUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Order/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Order",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Order"],
    "OrderAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderAggregateQuery"],
    "OrderCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderCreateOneMutation"],
    "OrderDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderDeleteManyMutation"],
    "OrderDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderDeleteOneMutation"],
    "OrderFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindCountQuery"],
    "OrderFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindFirstQuery"],
    "OrderFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindManyQuery"],
    "OrderFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderFindUniqueQuery"],
    "OrderUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderUpdateManyMutation"],
    "OrderUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderUpdateOneMutation"],
    "OrderUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItem",
    ()=>OrderItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const OrderItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'OrderItem',
    definition (t) {
        t.int('id');
        t.int('quantity');
        t.float('price');
        t.float('total');
        t.field('order', {
            type: 'Order',
            resolve (root) {
                return root.order;
            }
        });
        t.int('orderId');
        t.field('product', {
            type: 'Product',
            resolve (root) {
                return root.product;
            }
        });
        t.int('productId');
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemFindUniqueQuery",
    ()=>OrderItemFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueOrderItem', {
    type: 'OrderItem',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.orderItem.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemFindFirstQuery",
    ()=>OrderItemFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderItemFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstOrderItem', {
    type: 'OrderItem',
    args: {
        where: 'OrderItemWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderItemOrderByWithRelationInput'),
        cursor: 'OrderItemWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderItemScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.orderItem.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemFindManyQuery",
    ()=>OrderItemFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderItemFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItem'))),
    args: {
        where: 'OrderItemWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderItemOrderByWithRelationInput'),
        cursor: 'OrderItemWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderItemScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.orderItem.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemFindCountQuery",
    ()=>OrderItemFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderItemFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'OrderItemWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderItemOrderByWithRelationInput'),
        cursor: 'OrderItemWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OrderItemScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.orderItem.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemAggregateQuery",
    ()=>OrderItemAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const OrderItemAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateOrderItem', {
    type: 'AggregateOrderItem',
    args: {
        where: 'OrderItemWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('OrderItemOrderByWithRelationInput'),
        cursor: 'OrderItemWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.orderItem.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemCreateOneMutation",
    ()=>OrderItemCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItem'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.orderItem.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemUpdateOneMutation",
    ()=>OrderItemUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItem'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.orderItem.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemDeleteOneMutation",
    ()=>OrderItemDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneOrderItem', {
    type: 'OrderItem',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.orderItem.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemUpsertOneMutation",
    ()=>OrderItemUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItem'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.orderItem.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemUpdateManyMutation",
    ()=>OrderItemUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('OrderItemUpdateManyMutationInput'),
        where: 'OrderItemWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.orderItem.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemDeleteManyMutation",
    ()=>OrderItemDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const OrderItemDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyOrderItem', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'OrderItemWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.orderItem.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemAggregateQuery"],
    "OrderItemFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindCountQuery"],
    "OrderItemFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindFirstQuery"],
    "OrderItemFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindManyQuery"],
    "OrderItemFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItemCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemCreateOneMutation"],
    "OrderItemDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemDeleteManyMutation"],
    "OrderItemDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemDeleteOneMutation"],
    "OrderItemUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemUpdateManyMutation"],
    "OrderItemUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemUpdateOneMutation"],
    "OrderItemUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItem"],
    "OrderItemAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemAggregateQuery"],
    "OrderItemCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemCreateOneMutation"],
    "OrderItemDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemDeleteManyMutation"],
    "OrderItemDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemDeleteOneMutation"],
    "OrderItemFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindCountQuery"],
    "OrderItemFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindFirstQuery"],
    "OrderItemFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindManyQuery"],
    "OrderItemFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemFindUniqueQuery"],
    "OrderItemUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemUpdateManyMutation"],
    "OrderItemUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemUpdateOneMutation"],
    "OrderItemUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OrderItemUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Review",
    ()=>Review
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Review = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Review',
    definition (t) {
        t.int('id');
        t.int('rating');
        t.nullable.string('title');
        t.nullable.string('content');
        t.boolean('approved');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('author', {
            type: 'User',
            resolve (root) {
                return root.author;
            }
        });
        t.nullable.int('authorId');
        t.field('product', {
            type: 'Product',
            resolve (root) {
                return root.product;
            }
        });
        t.int('productId');
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewFindUniqueQuery",
    ()=>ReviewFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueReview', {
    type: 'Review',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.review.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewFindFirstQuery",
    ()=>ReviewFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ReviewFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstReview', {
    type: 'Review',
    args: {
        where: 'ReviewWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ReviewOrderByWithRelationInput'),
        cursor: 'ReviewWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ReviewScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.review.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewFindManyQuery",
    ()=>ReviewFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ReviewFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Review'))),
    args: {
        where: 'ReviewWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ReviewOrderByWithRelationInput'),
        cursor: 'ReviewWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ReviewScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.review.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewFindCountQuery",
    ()=>ReviewFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ReviewFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'ReviewWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ReviewOrderByWithRelationInput'),
        cursor: 'ReviewWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ReviewScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.review.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewAggregateQuery",
    ()=>ReviewAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ReviewAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateReview', {
    type: 'AggregateReview',
    args: {
        where: 'ReviewWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ReviewOrderByWithRelationInput'),
        cursor: 'ReviewWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.review.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewCreateOneMutation",
    ()=>ReviewCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Review'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.review.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewUpdateOneMutation",
    ()=>ReviewUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Review'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.review.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewDeleteOneMutation",
    ()=>ReviewDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneReview', {
    type: 'Review',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.review.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewUpsertOneMutation",
    ()=>ReviewUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Review'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.review.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewUpdateManyMutation",
    ()=>ReviewUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ReviewUpdateManyMutationInput'),
        where: 'ReviewWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.review.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewDeleteManyMutation",
    ()=>ReviewDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ReviewDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyReview', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'ReviewWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.review.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewAggregateQuery"],
    "ReviewFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindCountQuery"],
    "ReviewFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindFirstQuery"],
    "ReviewFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindManyQuery"],
    "ReviewFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewCreateOneMutation"],
    "ReviewDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewDeleteManyMutation"],
    "ReviewDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewDeleteOneMutation"],
    "ReviewUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewUpdateManyMutation"],
    "ReviewUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewUpdateOneMutation"],
    "ReviewUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Review/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Review",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Review"],
    "ReviewAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewAggregateQuery"],
    "ReviewCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewCreateOneMutation"],
    "ReviewDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewDeleteManyMutation"],
    "ReviewDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewDeleteOneMutation"],
    "ReviewFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindCountQuery"],
    "ReviewFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindFirstQuery"],
    "ReviewFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindManyQuery"],
    "ReviewFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewFindUniqueQuery"],
    "ReviewUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewUpdateManyMutation"],
    "ReviewUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewUpdateOneMutation"],
    "ReviewUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReviewUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Message",
    ()=>Message
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Message',
    definition (t) {
        t.int('id');
        t.nullable.string('subject');
        t.string('content');
        t.boolean('read');
        t.field('priority', {
            type: 'Priority'
        });
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.nullable.field('sender', {
            type: 'User',
            resolve (root) {
                return root.sender;
            }
        });
        t.nullable.int('senderId');
        t.nullable.field('receiver', {
            type: 'User',
            resolve (root) {
                return root.receiver;
            }
        });
        t.nullable.int('receiverId');
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageFindUniqueQuery",
    ()=>MessageFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueMessage', {
    type: 'Message',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.message.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageFindFirstQuery",
    ()=>MessageFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const MessageFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstMessage', {
    type: 'Message',
    args: {
        where: 'MessageWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('MessageOrderByWithRelationInput'),
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MessageScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.message.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageFindManyQuery",
    ()=>MessageFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const MessageFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Message'))),
    args: {
        where: 'MessageWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('MessageOrderByWithRelationInput'),
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MessageScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.message.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageFindCountQuery",
    ()=>MessageFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const MessageFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'MessageWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('MessageOrderByWithRelationInput'),
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MessageScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.message.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageAggregateQuery",
    ()=>MessageAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const MessageAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateMessage', {
    type: 'AggregateMessage',
    args: {
        where: 'MessageWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('MessageOrderByWithRelationInput'),
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.message.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCreateOneMutation",
    ()=>MessageCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Message'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.message.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageUpdateOneMutation",
    ()=>MessageUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Message'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.message.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageDeleteOneMutation",
    ()=>MessageDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneMessage', {
    type: 'Message',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.message.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageUpsertOneMutation",
    ()=>MessageUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Message'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.message.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageUpdateManyMutation",
    ()=>MessageUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('MessageUpdateManyMutationInput'),
        where: 'MessageWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.message.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageDeleteManyMutation",
    ()=>MessageDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const MessageDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyMessage', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'MessageWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.message.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageAggregateQuery"],
    "MessageFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindCountQuery"],
    "MessageFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindFirstQuery"],
    "MessageFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindManyQuery"],
    "MessageFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageCreateOneMutation"],
    "MessageDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageDeleteManyMutation"],
    "MessageDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageDeleteOneMutation"],
    "MessageUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageUpdateManyMutation"],
    "MessageUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageUpdateOneMutation"],
    "MessageUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Message/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Message",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Message"],
    "MessageAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageAggregateQuery"],
    "MessageCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageCreateOneMutation"],
    "MessageDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageDeleteManyMutation"],
    "MessageDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageDeleteOneMutation"],
    "MessageFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindCountQuery"],
    "MessageFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindFirstQuery"],
    "MessageFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindManyQuery"],
    "MessageFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageFindUniqueQuery"],
    "MessageUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageUpdateManyMutation"],
    "MessageUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageUpdateOneMutation"],
    "MessageUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MessageUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>Group
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Group',
    definition (t) {
        t.int('id');
        t.string('name');
        t.nullable.string('description');
        t.boolean('isPrivate');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.list.field('members', {
            type: 'User',
            resolve (root) {
                return root.members;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupFindUniqueQuery",
    ()=>GroupFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueGroup', {
    type: 'Group',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.group.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupFindFirstQuery",
    ()=>GroupFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const GroupFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstGroup', {
    type: 'Group',
    args: {
        where: 'GroupWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('GroupOrderByWithRelationInput'),
        cursor: 'GroupWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'GroupScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.group.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupFindManyQuery",
    ()=>GroupFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const GroupFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Group'))),
    args: {
        where: 'GroupWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('GroupOrderByWithRelationInput'),
        cursor: 'GroupWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'GroupScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.group.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupFindCountQuery",
    ()=>GroupFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const GroupFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'GroupWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('GroupOrderByWithRelationInput'),
        cursor: 'GroupWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'GroupScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.group.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupAggregateQuery",
    ()=>GroupAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const GroupAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateGroup', {
    type: 'AggregateGroup',
    args: {
        where: 'GroupWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('GroupOrderByWithRelationInput'),
        cursor: 'GroupWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.group.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupCreateOneMutation",
    ()=>GroupCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Group'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.group.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupUpdateOneMutation",
    ()=>GroupUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Group'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.group.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupDeleteOneMutation",
    ()=>GroupDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneGroup', {
    type: 'Group',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.group.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupUpsertOneMutation",
    ()=>GroupUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Group'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.group.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupUpdateManyMutation",
    ()=>GroupUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('GroupUpdateManyMutationInput'),
        where: 'GroupWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.group.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupDeleteManyMutation",
    ()=>GroupDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const GroupDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyGroup', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'GroupWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.group.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupAggregateQuery"],
    "GroupFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindCountQuery"],
    "GroupFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindFirstQuery"],
    "GroupFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindManyQuery"],
    "GroupFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupCreateOneMutation"],
    "GroupDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupDeleteManyMutation"],
    "GroupDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupDeleteOneMutation"],
    "GroupUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupUpdateManyMutation"],
    "GroupUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupUpdateOneMutation"],
    "GroupUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Group/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Group"],
    "GroupAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupAggregateQuery"],
    "GroupCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupCreateOneMutation"],
    "GroupDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupDeleteManyMutation"],
    "GroupDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupDeleteOneMutation"],
    "GroupFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindCountQuery"],
    "GroupFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindFirstQuery"],
    "GroupFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindManyQuery"],
    "GroupFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupFindUniqueQuery"],
    "GroupUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupUpdateManyMutation"],
    "GroupUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupUpdateOneMutation"],
    "GroupUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GroupUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Project",
    ()=>Project
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Project',
    definition (t) {
        t.int('id');
        t.string('name');
        t.nullable.string('description');
        t.nullable.field('startDate', {
            type: 'DateTime'
        });
        t.nullable.field('endDate', {
            type: 'DateTime'
        });
        t.nullable.float('budget');
        t.boolean('isActive');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.list.field('tasks', {
            type: 'Task',
            resolve (root) {
                return root.tasks;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectFindUniqueQuery",
    ()=>ProjectFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueProject', {
    type: 'Project',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.project.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectFindFirstQuery",
    ()=>ProjectFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProjectFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstProject', {
    type: 'Project',
    args: {
        where: 'ProjectWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProjectOrderByWithRelationInput'),
        cursor: 'ProjectWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProjectScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.project.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectFindManyQuery",
    ()=>ProjectFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProjectFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Project'))),
    args: {
        where: 'ProjectWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProjectOrderByWithRelationInput'),
        cursor: 'ProjectWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProjectScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.project.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectFindCountQuery",
    ()=>ProjectFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProjectFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'ProjectWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProjectOrderByWithRelationInput'),
        cursor: 'ProjectWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProjectScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.project.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectAggregateQuery",
    ()=>ProjectAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const ProjectAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateProject', {
    type: 'AggregateProject',
    args: {
        where: 'ProjectWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('ProjectOrderByWithRelationInput'),
        cursor: 'ProjectWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.project.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCreateOneMutation",
    ()=>ProjectCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Project'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.project.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectUpdateOneMutation",
    ()=>ProjectUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Project'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.project.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDeleteOneMutation",
    ()=>ProjectDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneProject', {
    type: 'Project',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.project.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectUpsertOneMutation",
    ()=>ProjectUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Project'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.project.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectUpdateManyMutation",
    ()=>ProjectUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('ProjectUpdateManyMutationInput'),
        where: 'ProjectWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.project.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDeleteManyMutation",
    ()=>ProjectDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const ProjectDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyProject', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'ProjectWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.project.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectAggregateQuery"],
    "ProjectFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindCountQuery"],
    "ProjectFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindFirstQuery"],
    "ProjectFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindManyQuery"],
    "ProjectFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectCreateOneMutation"],
    "ProjectDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectDeleteManyMutation"],
    "ProjectDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectDeleteOneMutation"],
    "ProjectUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectUpdateManyMutation"],
    "ProjectUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectUpdateOneMutation"],
    "ProjectUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Project/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Project",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Project"],
    "ProjectAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectAggregateQuery"],
    "ProjectCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectCreateOneMutation"],
    "ProjectDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectDeleteManyMutation"],
    "ProjectDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectDeleteOneMutation"],
    "ProjectFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindCountQuery"],
    "ProjectFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindFirstQuery"],
    "ProjectFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindManyQuery"],
    "ProjectFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectFindUniqueQuery"],
    "ProjectUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectUpdateManyMutation"],
    "ProjectUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectUpdateOneMutation"],
    "ProjectUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProjectUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Task",
    ()=>Task
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Task = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Task',
    definition (t) {
        t.int('id');
        t.string('title');
        t.nullable.string('description');
        t.field('status', {
            type: 'Status'
        });
        t.field('priority', {
            type: 'Priority'
        });
        t.nullable.field('dueDate', {
            type: 'DateTime'
        });
        t.nullable.field('completedAt', {
            type: 'DateTime'
        });
        t.nullable.float('estimatedHours');
        t.nullable.float('actualHours');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
        t.nullable.field('project', {
            type: 'Project',
            resolve (root) {
                return root.project;
            }
        });
        t.nullable.int('projectId');
        t.nullable.field('parent', {
            type: 'Task',
            resolve (root) {
                return root.parent;
            }
        });
        t.nullable.int('parentId');
        t.list.field('subtasks', {
            type: 'Task',
            resolve (root) {
                return root.subtasks;
            }
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskFindUniqueQuery",
    ()=>TaskFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueTask', {
    type: 'Task',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.task.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskFindFirstQuery",
    ()=>TaskFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TaskFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstTask', {
    type: 'Task',
    args: {
        where: 'TaskWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TaskOrderByWithRelationInput'),
        cursor: 'TaskWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TaskScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.task.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskFindManyQuery",
    ()=>TaskFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TaskFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Task'))),
    args: {
        where: 'TaskWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TaskOrderByWithRelationInput'),
        cursor: 'TaskWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TaskScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.task.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskFindCountQuery",
    ()=>TaskFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TaskFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'TaskWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TaskOrderByWithRelationInput'),
        cursor: 'TaskWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TaskScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.task.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskAggregateQuery",
    ()=>TaskAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const TaskAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateTask', {
    type: 'AggregateTask',
    args: {
        where: 'TaskWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('TaskOrderByWithRelationInput'),
        cursor: 'TaskWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.task.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskCreateOneMutation",
    ()=>TaskCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Task'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.task.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskUpdateOneMutation",
    ()=>TaskUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Task'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.task.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskDeleteOneMutation",
    ()=>TaskDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneTask', {
    type: 'Task',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.task.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskUpsertOneMutation",
    ()=>TaskUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Task'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.task.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskUpdateManyMutation",
    ()=>TaskUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManyTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('TaskUpdateManyMutationInput'),
        where: 'TaskWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.task.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/deleteMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskDeleteManyMutation",
    ()=>TaskDeleteManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const TaskDeleteManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteManyTask', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        where: 'TaskWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.task.deleteMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/deleteMany.ts [app-route] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskAggregateQuery"],
    "TaskFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindCountQuery"],
    "TaskFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindFirstQuery"],
    "TaskFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindManyQuery"],
    "TaskFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskCreateOneMutation"],
    "TaskDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskDeleteManyMutation"],
    "TaskDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskDeleteOneMutation"],
    "TaskUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskUpdateManyMutation"],
    "TaskUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskUpdateOneMutation"],
    "TaskUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/updateMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$deleteMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/deleteMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Task/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Task",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Task"],
    "TaskAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskAggregateQuery"],
    "TaskCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskCreateOneMutation"],
    "TaskDeleteManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskDeleteManyMutation"],
    "TaskDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskDeleteOneMutation"],
    "TaskFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindCountQuery"],
    "TaskFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindFirstQuery"],
    "TaskFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindManyQuery"],
    "TaskFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskFindUniqueQuery"],
    "TaskUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskUpdateManyMutation"],
    "TaskUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskUpdateOneMutation"],
    "TaskUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TaskUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Setting",
    ()=>Setting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const Setting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'Setting',
    definition (t) {
        t.int('id');
        t.string('key');
        t.string('value');
        t.string('type');
        t.string('group');
        t.field('createdAt', {
            type: 'DateTime'
        });
        t.field('updatedAt', {
            type: 'DateTime'
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingFindUniqueQuery",
    ()=>SettingFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const SettingFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueSetting', {
    type: 'Setting',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.setting.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingFindFirstQuery",
    ()=>SettingFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const SettingFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstSetting', {
    type: 'Setting',
    args: {
        where: 'SettingWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('SettingOrderByWithRelationInput'),
        cursor: 'SettingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SettingScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.setting.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingFindManyQuery",
    ()=>SettingFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const SettingFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManySetting', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Setting'))),
    args: {
        where: 'SettingWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('SettingOrderByWithRelationInput'),
        cursor: 'SettingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SettingScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.setting.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingFindCountQuery",
    ()=>SettingFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const SettingFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountSetting', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'SettingWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('SettingOrderByWithRelationInput'),
        cursor: 'SettingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SettingScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.setting.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingAggregateQuery",
    ()=>SettingAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const SettingAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateSetting', {
    type: 'AggregateSetting',
    args: {
        where: 'SettingWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('SettingOrderByWithRelationInput'),
        cursor: 'SettingWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.setting.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/createOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingCreateOneMutation",
    ()=>SettingCreateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const SettingCreateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('createOneSetting', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Setting'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingCreateInput')
    },
    resolve (_parent, { data }, { prisma, select }) {
        return prisma.setting.create({
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/updateOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingUpdateOneMutation",
    ()=>SettingUpdateOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const SettingUpdateOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateOneSetting', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Setting'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingUpdateInput'),
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingWhereUniqueInput')
    },
    resolve (_parent, { data, where }, { prisma, select }) {
        return prisma.setting.update({
            where,
            data,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/deleteOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingDeleteOneMutation",
    ()=>SettingDeleteOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const SettingDeleteOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('deleteOneSetting', {
    type: 'Setting',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingWhereUniqueInput')
    },
    resolve: async (_parent, { where }, { prisma, select })=>{
        return prisma.setting.delete({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/upsertOne.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingUpsertOneMutation",
    ()=>SettingUpsertOneMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const SettingUpsertOneMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('upsertOneSetting', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Setting'),
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingWhereUniqueInput'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingCreateInput'),
        update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingUpdateInput')
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.setting.upsert({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/updateMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingUpdateManyMutation",
    ()=>SettingUpdateManyMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/mutationField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const SettingUpdateManyMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$mutationField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mutationField"])('updateManySetting', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('BatchPayload'),
    args: {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('SettingUpdateManyMutationInput'),
        where: 'SettingWhereInput',
        limit: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.setting.updateMany({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/updateMany.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/index.ts [app-route] (ecmascript) <locals>");
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingAggregateQuery"],
    "SettingFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindCountQuery"],
    "SettingFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindFirstQuery"],
    "SettingFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindManyQuery"],
    "SettingFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingCreateOneMutation"],
    "SettingDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingDeleteOneMutation"],
    "SettingUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingUpdateManyMutation"],
    "SettingUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingUpdateOneMutation"],
    "SettingUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$createOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/createOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$updateOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/updateOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$deleteOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/deleteOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$upsertOne$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/upsertOne.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$updateMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/updateMany.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/Setting/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Setting",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Setting"],
    "SettingAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingAggregateQuery"],
    "SettingCreateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingCreateOneMutation"],
    "SettingDeleteOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingDeleteOneMutation"],
    "SettingFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindCountQuery"],
    "SettingFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindFirstQuery"],
    "SettingFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindManyQuery"],
    "SettingFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingFindUniqueQuery"],
    "SettingUpdateManyMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingUpdateManyMutation"],
    "SettingUpdateOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingUpdateOneMutation"],
    "SettingUpsertOneMutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SettingUpsertOneMutation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/queries/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$mutations$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/mutations/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/type.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLog",
    ()=>AuditLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/objectType.js [app-route] (ecmascript)");
;
const AuditLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$objectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectType"])({
    nonNullDefaults: {
        output: true,
        input: false
    },
    name: 'AuditLog',
    definition (t) {
        t.int('id');
        t.string('action');
        t.string('entity');
        t.string('entityId');
        t.nullable.string('oldValue');
        t.nullable.string('newValue');
        t.nullable.string('ipAddress');
        t.nullable.string('userAgent');
        t.field('createdAt', {
            type: 'DateTime'
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findUnique.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLogFindUniqueQuery",
    ()=>AuditLogFindUniqueQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
;
const AuditLogFindUniqueQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findUniqueAuditLog', {
    type: 'AuditLog',
    args: {
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('AuditLogWhereUniqueInput')
    },
    resolve (_parent, { where }, { prisma, select }) {
        return prisma.auditLog.findUnique({
            where,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findFirst.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLogFindFirstQuery",
    ()=>AuditLogFindFirstQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const AuditLogFindFirstQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findFirstAuditLog', {
    type: 'AuditLog',
    args: {
        where: 'AuditLogWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('AuditLogOrderByWithRelationInput'),
        cursor: 'AuditLogWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AuditLogScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.auditLog.findFirst({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findMany.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLogFindManyQuery",
    ()=>AuditLogFindManyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const AuditLogFindManyQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findManyAuditLog', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('AuditLog'))),
    args: {
        where: 'AuditLogWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('AuditLogOrderByWithRelationInput'),
        cursor: 'AuditLogWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AuditLogScalarFieldEnum'
    },
    resolve (_parent, args, { prisma, select }) {
        return prisma.auditLog.findMany({
            ...args,
            ...select
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findCount.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLogFindCountQuery",
    ()=>AuditLogFindCountQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/nonNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const AuditLogFindCountQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('findCountAuditLog', {
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$nonNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nonNull"])('Int'),
    args: {
        where: 'AuditLogWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('AuditLogOrderByWithRelationInput'),
        cursor: 'AuditLogWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AuditLogScalarFieldEnum'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.auditLog.count({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/aggregate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLogAggregateQuery",
    ()=>AuditLogAggregateQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/queryField.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/nexus@1.3.0+2e36366335d68c76/node_modules/nexus/dist-esm/definitions/list.js [app-route] (ecmascript)");
;
const AuditLogAggregateQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$queryField$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryField"])('aggregateAuditLog', {
    type: 'AggregateAuditLog',
    args: {
        where: 'AuditLogWhereInput',
        orderBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$nexus$40$1$2e$3$2e$0$2b$2e36366335d68c76$2f$node_modules$2f$nexus$2f$dist$2d$esm$2f$definitions$2f$list$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["list"])('AuditLogOrderByWithRelationInput'),
        cursor: 'AuditLogWhereUniqueInput',
        take: 'Int',
        skip: 'Int'
    },
    resolve (_parent, args, { prisma }) {
        return prisma.auditLog.aggregate({
            ...args
        });
    }
});
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/aggregate.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/index.ts [app-route] (ecmascript) <locals>");
;
;
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLogAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogAggregateQuery"],
    "AuditLogFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindCountQuery"],
    "AuditLogFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindFirstQuery"],
    "AuditLogFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindManyQuery"],
    "AuditLogFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findUnique$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findUnique.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findFirst$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findFirst.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findMany$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findMany.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$findCount$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/findCount.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$aggregate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/aggregate.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuditLog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLog"],
    "AuditLogAggregateQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogAggregateQuery"],
    "AuditLogFindCountQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindCountQuery"],
    "AuditLogFindFirstQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindFirstQuery"],
    "AuditLogFindManyQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindManyQuery"],
    "AuditLogFindUniqueQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AuditLogFindUniqueQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$type$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/type.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$queries$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/queries/index.ts [app-route] (ecmascript)");
}),
"[project]/examples/admin-test/src/generated/paljs/nexus/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$User$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/User/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Profile$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Profile/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$UserFollow$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/UserFollow/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Post$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Post/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Comment$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Comment/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Category$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Category/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Tag$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Tag/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Product$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Product/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Brand$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Brand/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$ProductCategory$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/ProductCategory/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Order$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Order/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$OrderItem$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/OrderItem/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Review$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Review/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Message$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Message/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Group$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Group/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Project$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Project/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Task$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Task/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$Setting$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/Setting/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$AuditLog$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/AuditLog/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$admin$2d$test$2f$src$2f$generated$2f$paljs$2f$nexus$2f$InputTypes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/admin-test/src/generated/paljs/nexus/InputTypes.ts [app-route] (ecmascript)");
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
];

//# sourceMappingURL=examples_admin-test_src_generated_paljs_nexus_fd415228._.js.map