import { enumType, inputObjectType, objectType } from 'nexus';

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: ["Serializable"],
});

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: ["id","email","username","firstName","lastName","password","role","isActive","balance","metadata","createdAt","updatedAt"],
});

export const ProfileScalarFieldEnum = enumType({
  name: 'ProfileScalarFieldEnum',
  members: ["id","bio","avatar","website","location","birthDate","phone","userId"],
});

export const UserFollowScalarFieldEnum = enumType({
  name: 'UserFollowScalarFieldEnum',
  members: ["id","followerId","followingId","createdAt"],
});

export const PostScalarFieldEnum = enumType({
  name: 'PostScalarFieldEnum',
  members: ["id","title","slug","content","excerpt","status","featured","viewCount","readTime","publishedAt","createdAt","updatedAt","authorId","categoryId"],
});

export const CommentScalarFieldEnum = enumType({
  name: 'CommentScalarFieldEnum',
  members: ["id","content","approved","createdAt","updatedAt","authorId","postId","parentId"],
});

export const CategoryScalarFieldEnum = enumType({
  name: 'CategoryScalarFieldEnum',
  members: ["id","name","slug","description","color","order","isActive","createdAt","updatedAt","parentId"],
});

export const TagScalarFieldEnum = enumType({
  name: 'TagScalarFieldEnum',
  members: ["id","name","slug","createdAt"],
});

export const ProductScalarFieldEnum = enumType({
  name: 'ProductScalarFieldEnum',
  members: ["id","name","sku","description","price","comparePrice","costPrice","quantity","weight","isActive","isFeatured","createdAt","updatedAt","brandId"],
});

export const BrandScalarFieldEnum = enumType({
  name: 'BrandScalarFieldEnum',
  members: ["id","name","slug","logo","description","website","isActive","createdAt","updatedAt"],
});

export const ProductCategoryScalarFieldEnum = enumType({
  name: 'ProductCategoryScalarFieldEnum',
  members: ["id","name","slug","order","createdAt","parentId"],
});

export const OrderScalarFieldEnum = enumType({
  name: 'OrderScalarFieldEnum',
  members: ["id","orderNumber","status","subtotal","tax","shipping","total","notes","shippingAddress","billingAddress","createdAt","updatedAt","customerId"],
});

export const OrderItemScalarFieldEnum = enumType({
  name: 'OrderItemScalarFieldEnum',
  members: ["id","quantity","price","total","orderId","productId"],
});

export const ReviewScalarFieldEnum = enumType({
  name: 'ReviewScalarFieldEnum',
  members: ["id","rating","title","content","approved","createdAt","updatedAt","authorId","productId"],
});

export const MessageScalarFieldEnum = enumType({
  name: 'MessageScalarFieldEnum',
  members: ["id","subject","content","read","priority","createdAt","senderId","receiverId"],
});

export const GroupScalarFieldEnum = enumType({
  name: 'GroupScalarFieldEnum',
  members: ["id","name","description","isPrivate","createdAt","updatedAt"],
});

export const ProjectScalarFieldEnum = enumType({
  name: 'ProjectScalarFieldEnum',
  members: ["id","name","description","startDate","endDate","budget","isActive","createdAt","updatedAt"],
});

export const TaskScalarFieldEnum = enumType({
  name: 'TaskScalarFieldEnum',
  members: ["id","title","description","status","priority","dueDate","completedAt","estimatedHours","actualHours","createdAt","updatedAt","projectId","parentId"],
});

export const SettingScalarFieldEnum = enumType({
  name: 'SettingScalarFieldEnum',
  members: ["id","key","value","type","group","createdAt","updatedAt"],
});

export const AuditLogScalarFieldEnum = enumType({
  name: 'AuditLogScalarFieldEnum',
  members: ["id","action","entity","entityId","oldValue","newValue","ipAddress","userAgent","createdAt"],
});

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ["asc","desc"],
});

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ["first","last"],
});

export const Role = enumType({
  name: 'Role',
  members: ["USER","ADMIN","MODERATOR","GUEST"],
});

export const Status = enumType({
  name: 'Status',
  members: ["DRAFT","PENDING","PUBLISHED","ARCHIVED"],
});

export const Priority = enumType({
  name: 'Priority',
  members: ["LOW","MEDIUM","HIGH","URGENT"],
});

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' });
    t.list.field('OR', { type: 'UserWhereInput' });
    t.list.field('NOT', { type: 'UserWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('email', { type: 'StringFilter' });
    t.field('username', { type: 'StringFilter' });
    t.field('firstName', { type: 'StringNullableFilter' });
    t.field('lastName', { type: 'StringNullableFilter' });
    t.field('password', { type: 'StringFilter' });
    t.field('role', { type: 'EnumRoleFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('balance', { type: 'FloatFilter' });
    t.field('metadata', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('profile', { type: 'ProfileNullableScalarRelationFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
    t.field('orders', { type: 'OrderListRelationFilter' });
    t.field('reviews', { type: 'ReviewListRelationFilter' });
    t.field('sentMessages', { type: 'MessageListRelationFilter' });
    t.field('receivedMessages', { type: 'MessageListRelationFilter' });
    t.field('followedBy', { type: 'UserFollowListRelationFilter' });
    t.field('following', { type: 'UserFollowListRelationFilter' });
    t.field('likedPosts', { type: 'PostListRelationFilter' });
    t.field('groups', { type: 'GroupListRelationFilter' });
  },
});

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('firstName', { type: 'SortOrderInput' });
    t.field('lastName', { type: 'SortOrderInput' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
    t.field('metadata', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('profile', { type: 'ProfileOrderByWithRelationInput' });
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' });
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' });
    t.field('orders', { type: 'OrderOrderByRelationAggregateInput' });
    t.field('reviews', { type: 'ReviewOrderByRelationAggregateInput' });
    t.field('sentMessages', { type: 'MessageOrderByRelationAggregateInput' });
    t.field('receivedMessages', { type: 'MessageOrderByRelationAggregateInput' });
    t.field('followedBy', { type: 'UserFollowOrderByRelationAggregateInput' });
    t.field('following', { type: 'UserFollowOrderByRelationAggregateInput' });
    t.field('likedPosts', { type: 'PostOrderByRelationAggregateInput' });
    t.field('groups', { type: 'GroupOrderByRelationAggregateInput' });
  },
});

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('email', { type: 'String' });
    t.field('username', { type: 'String' });
    t.list.field('AND', { type: 'UserWhereInput' });
    t.list.field('OR', { type: 'UserWhereInput' });
    t.list.field('NOT', { type: 'UserWhereInput' });
    t.field('firstName', { type: 'StringNullableFilter' });
    t.field('lastName', { type: 'StringNullableFilter' });
    t.field('password', { type: 'StringFilter' });
    t.field('role', { type: 'EnumRoleFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('balance', { type: 'FloatFilter' });
    t.field('metadata', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('profile', { type: 'ProfileNullableScalarRelationFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
    t.field('orders', { type: 'OrderListRelationFilter' });
    t.field('reviews', { type: 'ReviewListRelationFilter' });
    t.field('sentMessages', { type: 'MessageListRelationFilter' });
    t.field('receivedMessages', { type: 'MessageListRelationFilter' });
    t.field('followedBy', { type: 'UserFollowListRelationFilter' });
    t.field('following', { type: 'UserFollowListRelationFilter' });
    t.field('likedPosts', { type: 'PostListRelationFilter' });
    t.field('groups', { type: 'GroupListRelationFilter' });
  },
});

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('firstName', { type: 'SortOrderInput' });
    t.field('lastName', { type: 'SortOrderInput' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
    t.field('metadata', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('_count', { type: 'UserCountOrderByAggregateInput' });
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' });
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' });
    t.field('_min', { type: 'UserMinOrderByAggregateInput' });
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' });
  },
});

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('email', { type: 'StringWithAggregatesFilter' });
    t.field('username', { type: 'StringWithAggregatesFilter' });
    t.field('firstName', { type: 'StringNullableWithAggregatesFilter' });
    t.field('lastName', { type: 'StringNullableWithAggregatesFilter' });
    t.field('password', { type: 'StringWithAggregatesFilter' });
    t.field('role', { type: 'EnumRoleWithAggregatesFilter' });
    t.field('isActive', { type: 'BoolWithAggregatesFilter' });
    t.field('balance', { type: 'FloatWithAggregatesFilter' });
    t.field('metadata', { type: 'StringNullableWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const ProfileWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProfileWhereInput' });
    t.list.field('OR', { type: 'ProfileWhereInput' });
    t.list.field('NOT', { type: 'ProfileWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('bio', { type: 'StringNullableFilter' });
    t.field('avatar', { type: 'StringNullableFilter' });
    t.field('website', { type: 'StringNullableFilter' });
    t.field('location', { type: 'StringNullableFilter' });
    t.field('birthDate', { type: 'DateTimeNullableFilter' });
    t.field('phone', { type: 'StringNullableFilter' });
    t.field('userId', { type: 'IntFilter' });
    t.field('user', { type: 'UserScalarRelationFilter' });
  },
});

export const ProfileOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('bio', { type: 'SortOrderInput' });
    t.field('avatar', { type: 'SortOrderInput' });
    t.field('website', { type: 'SortOrderInput' });
    t.field('location', { type: 'SortOrderInput' });
    t.field('birthDate', { type: 'SortOrderInput' });
    t.field('phone', { type: 'SortOrderInput' });
    t.field('userId', { type: 'SortOrder' });
    t.field('user', { type: 'UserOrderByWithRelationInput' });
  },
});

export const ProfileWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('userId', { type: 'Int' });
    t.list.field('AND', { type: 'ProfileWhereInput' });
    t.list.field('OR', { type: 'ProfileWhereInput' });
    t.list.field('NOT', { type: 'ProfileWhereInput' });
    t.field('bio', { type: 'StringNullableFilter' });
    t.field('avatar', { type: 'StringNullableFilter' });
    t.field('website', { type: 'StringNullableFilter' });
    t.field('location', { type: 'StringNullableFilter' });
    t.field('birthDate', { type: 'DateTimeNullableFilter' });
    t.field('phone', { type: 'StringNullableFilter' });
    t.field('user', { type: 'UserScalarRelationFilter' });
  },
});

export const ProfileOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('bio', { type: 'SortOrderInput' });
    t.field('avatar', { type: 'SortOrderInput' });
    t.field('website', { type: 'SortOrderInput' });
    t.field('location', { type: 'SortOrderInput' });
    t.field('birthDate', { type: 'SortOrderInput' });
    t.field('phone', { type: 'SortOrderInput' });
    t.field('userId', { type: 'SortOrder' });
    t.field('_count', { type: 'ProfileCountOrderByAggregateInput' });
    t.field('_avg', { type: 'ProfileAvgOrderByAggregateInput' });
    t.field('_max', { type: 'ProfileMaxOrderByAggregateInput' });
    t.field('_min', { type: 'ProfileMinOrderByAggregateInput' });
    t.field('_sum', { type: 'ProfileSumOrderByAggregateInput' });
  },
});

export const ProfileScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProfileScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'ProfileScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'ProfileScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('bio', { type: 'StringNullableWithAggregatesFilter' });
    t.field('avatar', { type: 'StringNullableWithAggregatesFilter' });
    t.field('website', { type: 'StringNullableWithAggregatesFilter' });
    t.field('location', { type: 'StringNullableWithAggregatesFilter' });
    t.field('birthDate', { type: 'DateTimeNullableWithAggregatesFilter' });
    t.field('phone', { type: 'StringNullableWithAggregatesFilter' });
    t.field('userId', { type: 'IntWithAggregatesFilter' });
  },
});

export const UserFollowWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserFollowWhereInput' });
    t.list.field('OR', { type: 'UserFollowWhereInput' });
    t.list.field('NOT', { type: 'UserFollowWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('followerId', { type: 'IntFilter' });
    t.field('followingId', { type: 'IntFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('follower', { type: 'UserScalarRelationFilter' });
    t.field('following', { type: 'UserScalarRelationFilter' });
  },
});

export const UserFollowOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('follower', { type: 'UserOrderByWithRelationInput' });
    t.field('following', { type: 'UserOrderByWithRelationInput' });
  },
});

export const UserFollowWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('followerId_followingId', { type: 'UserFollowFollowerIdFollowingIdCompoundUniqueInput' });
    t.list.field('AND', { type: 'UserFollowWhereInput' });
    t.list.field('OR', { type: 'UserFollowWhereInput' });
    t.list.field('NOT', { type: 'UserFollowWhereInput' });
    t.field('followerId', { type: 'IntFilter' });
    t.field('followingId', { type: 'IntFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('follower', { type: 'UserScalarRelationFilter' });
    t.field('following', { type: 'UserScalarRelationFilter' });
  },
});

export const UserFollowOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('_count', { type: 'UserFollowCountOrderByAggregateInput' });
    t.field('_avg', { type: 'UserFollowAvgOrderByAggregateInput' });
    t.field('_max', { type: 'UserFollowMaxOrderByAggregateInput' });
    t.field('_min', { type: 'UserFollowMinOrderByAggregateInput' });
    t.field('_sum', { type: 'UserFollowSumOrderByAggregateInput' });
  },
});

export const UserFollowScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserFollowScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'UserFollowScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'UserFollowScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('followerId', { type: 'IntWithAggregatesFilter' });
    t.field('followingId', { type: 'IntWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const PostWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostWhereInput' });
    t.list.field('OR', { type: 'PostWhereInput' });
    t.list.field('NOT', { type: 'PostWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('title', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('excerpt', { type: 'StringNullableFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('featured', { type: 'BoolFilter' });
    t.field('viewCount', { type: 'IntFilter' });
    t.field('readTime', { type: 'FloatNullableFilter' });
    t.field('publishedAt', { type: 'DateTimeNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('categoryId', { type: 'IntNullableFilter' });
    t.field('author', { type: 'UserNullableScalarRelationFilter' });
    t.field('category', { type: 'CategoryNullableScalarRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
    t.field('tags', { type: 'TagListRelationFilter' });
    t.field('likedBy', { type: 'UserListRelationFilter' });
  },
});

export const PostOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrderInput' });
    t.field('excerpt', { type: 'SortOrderInput' });
    t.field('status', { type: 'SortOrder' });
    t.field('featured', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrderInput' });
    t.field('publishedAt', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrderInput' });
    t.field('categoryId', { type: 'SortOrderInput' });
    t.field('author', { type: 'UserOrderByWithRelationInput' });
    t.field('category', { type: 'CategoryOrderByWithRelationInput' });
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' });
    t.field('tags', { type: 'TagOrderByRelationAggregateInput' });
    t.field('likedBy', { type: 'UserOrderByRelationAggregateInput' });
  },
});

export const PostWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('slug', { type: 'String' });
    t.list.field('AND', { type: 'PostWhereInput' });
    t.list.field('OR', { type: 'PostWhereInput' });
    t.list.field('NOT', { type: 'PostWhereInput' });
    t.field('title', { type: 'StringFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('excerpt', { type: 'StringNullableFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('featured', { type: 'BoolFilter' });
    t.field('viewCount', { type: 'IntFilter' });
    t.field('readTime', { type: 'FloatNullableFilter' });
    t.field('publishedAt', { type: 'DateTimeNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('categoryId', { type: 'IntNullableFilter' });
    t.field('author', { type: 'UserNullableScalarRelationFilter' });
    t.field('category', { type: 'CategoryNullableScalarRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
    t.field('tags', { type: 'TagListRelationFilter' });
    t.field('likedBy', { type: 'UserListRelationFilter' });
  },
});

export const PostOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrderInput' });
    t.field('excerpt', { type: 'SortOrderInput' });
    t.field('status', { type: 'SortOrder' });
    t.field('featured', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrderInput' });
    t.field('publishedAt', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrderInput' });
    t.field('categoryId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'PostCountOrderByAggregateInput' });
    t.field('_avg', { type: 'PostAvgOrderByAggregateInput' });
    t.field('_max', { type: 'PostMaxOrderByAggregateInput' });
    t.field('_min', { type: 'PostMinOrderByAggregateInput' });
    t.field('_sum', { type: 'PostSumOrderByAggregateInput' });
  },
});

export const PostScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'PostScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'PostScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('title', { type: 'StringWithAggregatesFilter' });
    t.field('slug', { type: 'StringWithAggregatesFilter' });
    t.field('content', { type: 'StringNullableWithAggregatesFilter' });
    t.field('excerpt', { type: 'StringNullableWithAggregatesFilter' });
    t.field('status', { type: 'EnumStatusWithAggregatesFilter' });
    t.field('featured', { type: 'BoolWithAggregatesFilter' });
    t.field('viewCount', { type: 'IntWithAggregatesFilter' });
    t.field('readTime', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('publishedAt', { type: 'DateTimeNullableWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('authorId', { type: 'IntNullableWithAggregatesFilter' });
    t.field('categoryId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const CommentWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentWhereInput' });
    t.list.field('OR', { type: 'CommentWhereInput' });
    t.list.field('NOT', { type: 'CommentWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('content', { type: 'StringFilter' });
    t.field('approved', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('postId', { type: 'IntFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('author', { type: 'UserNullableScalarRelationFilter' });
    t.field('post', { type: 'PostScalarRelationFilter' });
    t.field('parent', { type: 'CommentNullableScalarRelationFilter' });
    t.field('replies', { type: 'CommentListRelationFilter' });
  },
});

export const CommentOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrderInput' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('author', { type: 'UserOrderByWithRelationInput' });
    t.field('post', { type: 'PostOrderByWithRelationInput' });
    t.field('parent', { type: 'CommentOrderByWithRelationInput' });
    t.field('replies', { type: 'CommentOrderByRelationAggregateInput' });
  },
});

export const CommentWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'CommentWhereInput' });
    t.list.field('OR', { type: 'CommentWhereInput' });
    t.list.field('NOT', { type: 'CommentWhereInput' });
    t.field('content', { type: 'StringFilter' });
    t.field('approved', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('postId', { type: 'IntFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('author', { type: 'UserNullableScalarRelationFilter' });
    t.field('post', { type: 'PostScalarRelationFilter' });
    t.field('parent', { type: 'CommentNullableScalarRelationFilter' });
    t.field('replies', { type: 'CommentListRelationFilter' });
  },
});

export const CommentOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrderInput' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'CommentCountOrderByAggregateInput' });
    t.field('_avg', { type: 'CommentAvgOrderByAggregateInput' });
    t.field('_max', { type: 'CommentMaxOrderByAggregateInput' });
    t.field('_min', { type: 'CommentMinOrderByAggregateInput' });
    t.field('_sum', { type: 'CommentSumOrderByAggregateInput' });
  },
});

export const CommentScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'CommentScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'CommentScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('content', { type: 'StringWithAggregatesFilter' });
    t.field('approved', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('authorId', { type: 'IntNullableWithAggregatesFilter' });
    t.field('postId', { type: 'IntWithAggregatesFilter' });
    t.field('parentId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const CategoryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryWhereInput' });
    t.list.field('OR', { type: 'CategoryWhereInput' });
    t.list.field('NOT', { type: 'CategoryWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('color', { type: 'StringNullableFilter' });
    t.field('order', { type: 'IntFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
    t.field('parent', { type: 'CategoryNullableScalarRelationFilter' });
    t.field('children', { type: 'CategoryListRelationFilter' });
  },
});

export const CategoryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('color', { type: 'SortOrderInput' });
    t.field('order', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' });
    t.field('parent', { type: 'CategoryOrderByWithRelationInput' });
    t.field('children', { type: 'CategoryOrderByRelationAggregateInput' });
  },
});

export const CategoryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.list.field('AND', { type: 'CategoryWhereInput' });
    t.list.field('OR', { type: 'CategoryWhereInput' });
    t.list.field('NOT', { type: 'CategoryWhereInput' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('color', { type: 'StringNullableFilter' });
    t.field('order', { type: 'IntFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
    t.field('parent', { type: 'CategoryNullableScalarRelationFilter' });
    t.field('children', { type: 'CategoryListRelationFilter' });
  },
});

export const CategoryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('color', { type: 'SortOrderInput' });
    t.field('order', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'CategoryCountOrderByAggregateInput' });
    t.field('_avg', { type: 'CategoryAvgOrderByAggregateInput' });
    t.field('_max', { type: 'CategoryMaxOrderByAggregateInput' });
    t.field('_min', { type: 'CategoryMinOrderByAggregateInput' });
    t.field('_sum', { type: 'CategorySumOrderByAggregateInput' });
  },
});

export const CategoryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'CategoryScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'CategoryScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('slug', { type: 'StringWithAggregatesFilter' });
    t.field('description', { type: 'StringNullableWithAggregatesFilter' });
    t.field('color', { type: 'StringNullableWithAggregatesFilter' });
    t.field('order', { type: 'IntWithAggregatesFilter' });
    t.field('isActive', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('parentId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const TagWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TagWhereInput' });
    t.list.field('OR', { type: 'TagWhereInput' });
    t.list.field('NOT', { type: 'TagWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
  },
});

export const TagOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' });
  },
});

export const TagWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.list.field('AND', { type: 'TagWhereInput' });
    t.list.field('OR', { type: 'TagWhereInput' });
    t.list.field('NOT', { type: 'TagWhereInput' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
  },
});

export const TagOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('_count', { type: 'TagCountOrderByAggregateInput' });
    t.field('_avg', { type: 'TagAvgOrderByAggregateInput' });
    t.field('_max', { type: 'TagMaxOrderByAggregateInput' });
    t.field('_min', { type: 'TagMinOrderByAggregateInput' });
    t.field('_sum', { type: 'TagSumOrderByAggregateInput' });
  },
});

export const TagScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'TagScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'TagScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'TagScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('slug', { type: 'StringWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const ProductWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductWhereInput' });
    t.list.field('OR', { type: 'ProductWhereInput' });
    t.list.field('NOT', { type: 'ProductWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('sku', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('price', { type: 'FloatFilter' });
    t.field('comparePrice', { type: 'FloatNullableFilter' });
    t.field('costPrice', { type: 'FloatNullableFilter' });
    t.field('quantity', { type: 'IntFilter' });
    t.field('weight', { type: 'FloatNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('isFeatured', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('brandId', { type: 'IntNullableFilter' });
    t.field('brand', { type: 'BrandNullableScalarRelationFilter' });
    t.field('orderItems', { type: 'OrderItemListRelationFilter' });
    t.field('reviews', { type: 'ReviewListRelationFilter' });
    t.field('productCategories', { type: 'ProductCategoryListRelationFilter' });
  },
});

export const ProductOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('sku', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrderInput' });
    t.field('costPrice', { type: 'SortOrderInput' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrderInput' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('isFeatured', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrderInput' });
    t.field('brand', { type: 'BrandOrderByWithRelationInput' });
    t.field('orderItems', { type: 'OrderItemOrderByRelationAggregateInput' });
    t.field('reviews', { type: 'ReviewOrderByRelationAggregateInput' });
    t.field('productCategories', { type: 'ProductCategoryOrderByRelationAggregateInput' });
  },
});

export const ProductWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('sku', { type: 'String' });
    t.list.field('AND', { type: 'ProductWhereInput' });
    t.list.field('OR', { type: 'ProductWhereInput' });
    t.list.field('NOT', { type: 'ProductWhereInput' });
    t.field('name', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('price', { type: 'FloatFilter' });
    t.field('comparePrice', { type: 'FloatNullableFilter' });
    t.field('costPrice', { type: 'FloatNullableFilter' });
    t.field('quantity', { type: 'IntFilter' });
    t.field('weight', { type: 'FloatNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('isFeatured', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('brandId', { type: 'IntNullableFilter' });
    t.field('brand', { type: 'BrandNullableScalarRelationFilter' });
    t.field('orderItems', { type: 'OrderItemListRelationFilter' });
    t.field('reviews', { type: 'ReviewListRelationFilter' });
    t.field('productCategories', { type: 'ProductCategoryListRelationFilter' });
  },
});

export const ProductOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('sku', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrderInput' });
    t.field('costPrice', { type: 'SortOrderInput' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrderInput' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('isFeatured', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'ProductCountOrderByAggregateInput' });
    t.field('_avg', { type: 'ProductAvgOrderByAggregateInput' });
    t.field('_max', { type: 'ProductMaxOrderByAggregateInput' });
    t.field('_min', { type: 'ProductMinOrderByAggregateInput' });
    t.field('_sum', { type: 'ProductSumOrderByAggregateInput' });
  },
});

export const ProductScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'ProductScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'ProductScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('sku', { type: 'StringWithAggregatesFilter' });
    t.field('description', { type: 'StringNullableWithAggregatesFilter' });
    t.field('price', { type: 'FloatWithAggregatesFilter' });
    t.field('comparePrice', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('costPrice', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('quantity', { type: 'IntWithAggregatesFilter' });
    t.field('weight', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('isActive', { type: 'BoolWithAggregatesFilter' });
    t.field('isFeatured', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('brandId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const BrandWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'BrandWhereInput' });
    t.list.field('OR', { type: 'BrandWhereInput' });
    t.list.field('NOT', { type: 'BrandWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('logo', { type: 'StringNullableFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('website', { type: 'StringNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('products', { type: 'ProductListRelationFilter' });
  },
});

export const BrandOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('logo', { type: 'SortOrderInput' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('website', { type: 'SortOrderInput' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('products', { type: 'ProductOrderByRelationAggregateInput' });
  },
});

export const BrandWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.list.field('AND', { type: 'BrandWhereInput' });
    t.list.field('OR', { type: 'BrandWhereInput' });
    t.list.field('NOT', { type: 'BrandWhereInput' });
    t.field('logo', { type: 'StringNullableFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('website', { type: 'StringNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('products', { type: 'ProductListRelationFilter' });
  },
});

export const BrandOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('logo', { type: 'SortOrderInput' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('website', { type: 'SortOrderInput' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('_count', { type: 'BrandCountOrderByAggregateInput' });
    t.field('_avg', { type: 'BrandAvgOrderByAggregateInput' });
    t.field('_max', { type: 'BrandMaxOrderByAggregateInput' });
    t.field('_min', { type: 'BrandMinOrderByAggregateInput' });
    t.field('_sum', { type: 'BrandSumOrderByAggregateInput' });
  },
});

export const BrandScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'BrandScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'BrandScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'BrandScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('slug', { type: 'StringWithAggregatesFilter' });
    t.field('logo', { type: 'StringNullableWithAggregatesFilter' });
    t.field('description', { type: 'StringNullableWithAggregatesFilter' });
    t.field('website', { type: 'StringNullableWithAggregatesFilter' });
    t.field('isActive', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const ProductCategoryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductCategoryWhereInput' });
    t.list.field('OR', { type: 'ProductCategoryWhereInput' });
    t.list.field('NOT', { type: 'ProductCategoryWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('order', { type: 'IntFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('parent', { type: 'ProductCategoryNullableScalarRelationFilter' });
    t.field('children', { type: 'ProductCategoryListRelationFilter' });
    t.field('products', { type: 'ProductListRelationFilter' });
  },
});

export const ProductCategoryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('parent', { type: 'ProductCategoryOrderByWithRelationInput' });
    t.field('children', { type: 'ProductCategoryOrderByRelationAggregateInput' });
    t.field('products', { type: 'ProductOrderByRelationAggregateInput' });
  },
});

export const ProductCategoryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('slug', { type: 'String' });
    t.list.field('AND', { type: 'ProductCategoryWhereInput' });
    t.list.field('OR', { type: 'ProductCategoryWhereInput' });
    t.list.field('NOT', { type: 'ProductCategoryWhereInput' });
    t.field('name', { type: 'StringFilter' });
    t.field('order', { type: 'IntFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('parent', { type: 'ProductCategoryNullableScalarRelationFilter' });
    t.field('children', { type: 'ProductCategoryListRelationFilter' });
    t.field('products', { type: 'ProductListRelationFilter' });
  },
});

export const ProductCategoryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'ProductCategoryCountOrderByAggregateInput' });
    t.field('_avg', { type: 'ProductCategoryAvgOrderByAggregateInput' });
    t.field('_max', { type: 'ProductCategoryMaxOrderByAggregateInput' });
    t.field('_min', { type: 'ProductCategoryMinOrderByAggregateInput' });
    t.field('_sum', { type: 'ProductCategorySumOrderByAggregateInput' });
  },
});

export const ProductCategoryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductCategoryScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'ProductCategoryScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'ProductCategoryScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('slug', { type: 'StringWithAggregatesFilter' });
    t.field('order', { type: 'IntWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('parentId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const OrderWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderWhereInput' });
    t.list.field('OR', { type: 'OrderWhereInput' });
    t.list.field('NOT', { type: 'OrderWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('orderNumber', { type: 'StringFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('subtotal', { type: 'FloatFilter' });
    t.field('tax', { type: 'FloatFilter' });
    t.field('shipping', { type: 'FloatFilter' });
    t.field('total', { type: 'FloatFilter' });
    t.field('notes', { type: 'StringNullableFilter' });
    t.field('shippingAddress', { type: 'StringNullableFilter' });
    t.field('billingAddress', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('customerId', { type: 'IntNullableFilter' });
    t.field('customer', { type: 'UserNullableScalarRelationFilter' });
    t.field('items', { type: 'OrderItemListRelationFilter' });
  },
});

export const OrderOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('orderNumber', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('notes', { type: 'SortOrderInput' });
    t.field('shippingAddress', { type: 'SortOrderInput' });
    t.field('billingAddress', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrderInput' });
    t.field('customer', { type: 'UserOrderByWithRelationInput' });
    t.field('items', { type: 'OrderItemOrderByRelationAggregateInput' });
  },
});

export const OrderWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('orderNumber', { type: 'String' });
    t.list.field('AND', { type: 'OrderWhereInput' });
    t.list.field('OR', { type: 'OrderWhereInput' });
    t.list.field('NOT', { type: 'OrderWhereInput' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('subtotal', { type: 'FloatFilter' });
    t.field('tax', { type: 'FloatFilter' });
    t.field('shipping', { type: 'FloatFilter' });
    t.field('total', { type: 'FloatFilter' });
    t.field('notes', { type: 'StringNullableFilter' });
    t.field('shippingAddress', { type: 'StringNullableFilter' });
    t.field('billingAddress', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('customerId', { type: 'IntNullableFilter' });
    t.field('customer', { type: 'UserNullableScalarRelationFilter' });
    t.field('items', { type: 'OrderItemListRelationFilter' });
  },
});

export const OrderOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('orderNumber', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('notes', { type: 'SortOrderInput' });
    t.field('shippingAddress', { type: 'SortOrderInput' });
    t.field('billingAddress', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'OrderCountOrderByAggregateInput' });
    t.field('_avg', { type: 'OrderAvgOrderByAggregateInput' });
    t.field('_max', { type: 'OrderMaxOrderByAggregateInput' });
    t.field('_min', { type: 'OrderMinOrderByAggregateInput' });
    t.field('_sum', { type: 'OrderSumOrderByAggregateInput' });
  },
});

export const OrderScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'OrderScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'OrderScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('orderNumber', { type: 'StringWithAggregatesFilter' });
    t.field('status', { type: 'EnumStatusWithAggregatesFilter' });
    t.field('subtotal', { type: 'FloatWithAggregatesFilter' });
    t.field('tax', { type: 'FloatWithAggregatesFilter' });
    t.field('shipping', { type: 'FloatWithAggregatesFilter' });
    t.field('total', { type: 'FloatWithAggregatesFilter' });
    t.field('notes', { type: 'StringNullableWithAggregatesFilter' });
    t.field('shippingAddress', { type: 'StringNullableWithAggregatesFilter' });
    t.field('billingAddress', { type: 'StringNullableWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('customerId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const OrderItemWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderItemWhereInput' });
    t.list.field('OR', { type: 'OrderItemWhereInput' });
    t.list.field('NOT', { type: 'OrderItemWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('quantity', { type: 'IntFilter' });
    t.field('price', { type: 'FloatFilter' });
    t.field('total', { type: 'FloatFilter' });
    t.field('orderId', { type: 'IntFilter' });
    t.field('productId', { type: 'IntFilter' });
    t.field('order', { type: 'OrderScalarRelationFilter' });
    t.field('product', { type: 'ProductScalarRelationFilter' });
  },
});

export const OrderItemOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
    t.field('order', { type: 'OrderOrderByWithRelationInput' });
    t.field('product', { type: 'ProductOrderByWithRelationInput' });
  },
});

export const OrderItemWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('orderId_productId', { type: 'OrderItemOrderIdProductIdCompoundUniqueInput' });
    t.list.field('AND', { type: 'OrderItemWhereInput' });
    t.list.field('OR', { type: 'OrderItemWhereInput' });
    t.list.field('NOT', { type: 'OrderItemWhereInput' });
    t.field('quantity', { type: 'IntFilter' });
    t.field('price', { type: 'FloatFilter' });
    t.field('total', { type: 'FloatFilter' });
    t.field('orderId', { type: 'IntFilter' });
    t.field('productId', { type: 'IntFilter' });
    t.field('order', { type: 'OrderScalarRelationFilter' });
    t.field('product', { type: 'ProductScalarRelationFilter' });
  },
});

export const OrderItemOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
    t.field('_count', { type: 'OrderItemCountOrderByAggregateInput' });
    t.field('_avg', { type: 'OrderItemAvgOrderByAggregateInput' });
    t.field('_max', { type: 'OrderItemMaxOrderByAggregateInput' });
    t.field('_min', { type: 'OrderItemMinOrderByAggregateInput' });
    t.field('_sum', { type: 'OrderItemSumOrderByAggregateInput' });
  },
});

export const OrderItemScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderItemScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'OrderItemScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'OrderItemScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('quantity', { type: 'IntWithAggregatesFilter' });
    t.field('price', { type: 'FloatWithAggregatesFilter' });
    t.field('total', { type: 'FloatWithAggregatesFilter' });
    t.field('orderId', { type: 'IntWithAggregatesFilter' });
    t.field('productId', { type: 'IntWithAggregatesFilter' });
  },
});

export const ReviewWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ReviewWhereInput' });
    t.list.field('OR', { type: 'ReviewWhereInput' });
    t.list.field('NOT', { type: 'ReviewWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('rating', { type: 'IntFilter' });
    t.field('title', { type: 'StringNullableFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('approved', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('productId', { type: 'IntFilter' });
    t.field('author', { type: 'UserNullableScalarRelationFilter' });
    t.field('product', { type: 'ProductScalarRelationFilter' });
  },
});

export const ReviewOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrderInput' });
    t.field('content', { type: 'SortOrderInput' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrderInput' });
    t.field('productId', { type: 'SortOrder' });
    t.field('author', { type: 'UserOrderByWithRelationInput' });
    t.field('product', { type: 'ProductOrderByWithRelationInput' });
  },
});

export const ReviewWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('authorId_productId', { type: 'ReviewAuthorIdProductIdCompoundUniqueInput' });
    t.list.field('AND', { type: 'ReviewWhereInput' });
    t.list.field('OR', { type: 'ReviewWhereInput' });
    t.list.field('NOT', { type: 'ReviewWhereInput' });
    t.field('rating', { type: 'IntFilter' });
    t.field('title', { type: 'StringNullableFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('approved', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('productId', { type: 'IntFilter' });
    t.field('author', { type: 'UserNullableScalarRelationFilter' });
    t.field('product', { type: 'ProductScalarRelationFilter' });
  },
});

export const ReviewOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrderInput' });
    t.field('content', { type: 'SortOrderInput' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrderInput' });
    t.field('productId', { type: 'SortOrder' });
    t.field('_count', { type: 'ReviewCountOrderByAggregateInput' });
    t.field('_avg', { type: 'ReviewAvgOrderByAggregateInput' });
    t.field('_max', { type: 'ReviewMaxOrderByAggregateInput' });
    t.field('_min', { type: 'ReviewMinOrderByAggregateInput' });
    t.field('_sum', { type: 'ReviewSumOrderByAggregateInput' });
  },
});

export const ReviewScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ReviewScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'ReviewScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'ReviewScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('rating', { type: 'IntWithAggregatesFilter' });
    t.field('title', { type: 'StringNullableWithAggregatesFilter' });
    t.field('content', { type: 'StringNullableWithAggregatesFilter' });
    t.field('approved', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('authorId', { type: 'IntNullableWithAggregatesFilter' });
    t.field('productId', { type: 'IntWithAggregatesFilter' });
  },
});

export const MessageWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageWhereInput' });
    t.list.field('OR', { type: 'MessageWhereInput' });
    t.list.field('NOT', { type: 'MessageWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('subject', { type: 'StringNullableFilter' });
    t.field('content', { type: 'StringFilter' });
    t.field('read', { type: 'BoolFilter' });
    t.field('priority', { type: 'EnumPriorityFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('senderId', { type: 'IntNullableFilter' });
    t.field('receiverId', { type: 'IntNullableFilter' });
    t.field('sender', { type: 'UserNullableScalarRelationFilter' });
    t.field('receiver', { type: 'UserNullableScalarRelationFilter' });
  },
});

export const MessageOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subject', { type: 'SortOrderInput' });
    t.field('content', { type: 'SortOrder' });
    t.field('read', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrderInput' });
    t.field('receiverId', { type: 'SortOrderInput' });
    t.field('sender', { type: 'UserOrderByWithRelationInput' });
    t.field('receiver', { type: 'UserOrderByWithRelationInput' });
  },
});

export const MessageWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'MessageWhereInput' });
    t.list.field('OR', { type: 'MessageWhereInput' });
    t.list.field('NOT', { type: 'MessageWhereInput' });
    t.field('subject', { type: 'StringNullableFilter' });
    t.field('content', { type: 'StringFilter' });
    t.field('read', { type: 'BoolFilter' });
    t.field('priority', { type: 'EnumPriorityFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('senderId', { type: 'IntNullableFilter' });
    t.field('receiverId', { type: 'IntNullableFilter' });
    t.field('sender', { type: 'UserNullableScalarRelationFilter' });
    t.field('receiver', { type: 'UserNullableScalarRelationFilter' });
  },
});

export const MessageOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subject', { type: 'SortOrderInput' });
    t.field('content', { type: 'SortOrder' });
    t.field('read', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrderInput' });
    t.field('receiverId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'MessageCountOrderByAggregateInput' });
    t.field('_avg', { type: 'MessageAvgOrderByAggregateInput' });
    t.field('_max', { type: 'MessageMaxOrderByAggregateInput' });
    t.field('_min', { type: 'MessageMinOrderByAggregateInput' });
    t.field('_sum', { type: 'MessageSumOrderByAggregateInput' });
  },
});

export const MessageScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'MessageScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'MessageScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('subject', { type: 'StringNullableWithAggregatesFilter' });
    t.field('content', { type: 'StringWithAggregatesFilter' });
    t.field('read', { type: 'BoolWithAggregatesFilter' });
    t.field('priority', { type: 'EnumPriorityWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('senderId', { type: 'IntNullableWithAggregatesFilter' });
    t.field('receiverId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const GroupWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'GroupWhereInput' });
    t.list.field('OR', { type: 'GroupWhereInput' });
    t.list.field('NOT', { type: 'GroupWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('isPrivate', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('members', { type: 'UserListRelationFilter' });
  },
});

export const GroupOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('isPrivate', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('members', { type: 'UserOrderByRelationAggregateInput' });
  },
});

export const GroupWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.list.field('AND', { type: 'GroupWhereInput' });
    t.list.field('OR', { type: 'GroupWhereInput' });
    t.list.field('NOT', { type: 'GroupWhereInput' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('isPrivate', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('members', { type: 'UserListRelationFilter' });
  },
});

export const GroupOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('isPrivate', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('_count', { type: 'GroupCountOrderByAggregateInput' });
    t.field('_avg', { type: 'GroupAvgOrderByAggregateInput' });
    t.field('_max', { type: 'GroupMaxOrderByAggregateInput' });
    t.field('_min', { type: 'GroupMinOrderByAggregateInput' });
    t.field('_sum', { type: 'GroupSumOrderByAggregateInput' });
  },
});

export const GroupScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'GroupScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'GroupScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'GroupScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('description', { type: 'StringNullableWithAggregatesFilter' });
    t.field('isPrivate', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const ProjectWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProjectWhereInput' });
    t.list.field('OR', { type: 'ProjectWhereInput' });
    t.list.field('NOT', { type: 'ProjectWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('startDate', { type: 'DateTimeNullableFilter' });
    t.field('endDate', { type: 'DateTimeNullableFilter' });
    t.field('budget', { type: 'FloatNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('tasks', { type: 'TaskListRelationFilter' });
  },
});

export const ProjectOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('startDate', { type: 'SortOrderInput' });
    t.field('endDate', { type: 'SortOrderInput' });
    t.field('budget', { type: 'SortOrderInput' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('tasks', { type: 'TaskOrderByRelationAggregateInput' });
  },
});

export const ProjectWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'ProjectWhereInput' });
    t.list.field('OR', { type: 'ProjectWhereInput' });
    t.list.field('NOT', { type: 'ProjectWhereInput' });
    t.field('name', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('startDate', { type: 'DateTimeNullableFilter' });
    t.field('endDate', { type: 'DateTimeNullableFilter' });
    t.field('budget', { type: 'FloatNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('tasks', { type: 'TaskListRelationFilter' });
  },
});

export const ProjectOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('startDate', { type: 'SortOrderInput' });
    t.field('endDate', { type: 'SortOrderInput' });
    t.field('budget', { type: 'SortOrderInput' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('_count', { type: 'ProjectCountOrderByAggregateInput' });
    t.field('_avg', { type: 'ProjectAvgOrderByAggregateInput' });
    t.field('_max', { type: 'ProjectMaxOrderByAggregateInput' });
    t.field('_min', { type: 'ProjectMinOrderByAggregateInput' });
    t.field('_sum', { type: 'ProjectSumOrderByAggregateInput' });
  },
});

export const ProjectScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProjectScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'ProjectScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'ProjectScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('name', { type: 'StringWithAggregatesFilter' });
    t.field('description', { type: 'StringNullableWithAggregatesFilter' });
    t.field('startDate', { type: 'DateTimeNullableWithAggregatesFilter' });
    t.field('endDate', { type: 'DateTimeNullableWithAggregatesFilter' });
    t.field('budget', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('isActive', { type: 'BoolWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const TaskWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TaskWhereInput' });
    t.list.field('OR', { type: 'TaskWhereInput' });
    t.list.field('NOT', { type: 'TaskWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('title', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('priority', { type: 'EnumPriorityFilter' });
    t.field('dueDate', { type: 'DateTimeNullableFilter' });
    t.field('completedAt', { type: 'DateTimeNullableFilter' });
    t.field('estimatedHours', { type: 'FloatNullableFilter' });
    t.field('actualHours', { type: 'FloatNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('projectId', { type: 'IntNullableFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('project', { type: 'ProjectNullableScalarRelationFilter' });
    t.field('parent', { type: 'TaskNullableScalarRelationFilter' });
    t.field('subtasks', { type: 'TaskListRelationFilter' });
  },
});

export const TaskOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('status', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('dueDate', { type: 'SortOrderInput' });
    t.field('completedAt', { type: 'SortOrderInput' });
    t.field('estimatedHours', { type: 'SortOrderInput' });
    t.field('actualHours', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrderInput' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('project', { type: 'ProjectOrderByWithRelationInput' });
    t.field('parent', { type: 'TaskOrderByWithRelationInput' });
    t.field('subtasks', { type: 'TaskOrderByRelationAggregateInput' });
  },
});

export const TaskWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'TaskWhereInput' });
    t.list.field('OR', { type: 'TaskWhereInput' });
    t.list.field('NOT', { type: 'TaskWhereInput' });
    t.field('title', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('priority', { type: 'EnumPriorityFilter' });
    t.field('dueDate', { type: 'DateTimeNullableFilter' });
    t.field('completedAt', { type: 'DateTimeNullableFilter' });
    t.field('estimatedHours', { type: 'FloatNullableFilter' });
    t.field('actualHours', { type: 'FloatNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('projectId', { type: 'IntNullableFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
    t.field('project', { type: 'ProjectNullableScalarRelationFilter' });
    t.field('parent', { type: 'TaskNullableScalarRelationFilter' });
    t.field('subtasks', { type: 'TaskListRelationFilter' });
  },
});

export const TaskOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrderInput' });
    t.field('status', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('dueDate', { type: 'SortOrderInput' });
    t.field('completedAt', { type: 'SortOrderInput' });
    t.field('estimatedHours', { type: 'SortOrderInput' });
    t.field('actualHours', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrderInput' });
    t.field('parentId', { type: 'SortOrderInput' });
    t.field('_count', { type: 'TaskCountOrderByAggregateInput' });
    t.field('_avg', { type: 'TaskAvgOrderByAggregateInput' });
    t.field('_max', { type: 'TaskMaxOrderByAggregateInput' });
    t.field('_min', { type: 'TaskMinOrderByAggregateInput' });
    t.field('_sum', { type: 'TaskSumOrderByAggregateInput' });
  },
});

export const TaskScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'TaskScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'TaskScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'TaskScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('title', { type: 'StringWithAggregatesFilter' });
    t.field('description', { type: 'StringNullableWithAggregatesFilter' });
    t.field('status', { type: 'EnumStatusWithAggregatesFilter' });
    t.field('priority', { type: 'EnumPriorityWithAggregatesFilter' });
    t.field('dueDate', { type: 'DateTimeNullableWithAggregatesFilter' });
    t.field('completedAt', { type: 'DateTimeNullableWithAggregatesFilter' });
    t.field('estimatedHours', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('actualHours', { type: 'FloatNullableWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('projectId', { type: 'IntNullableWithAggregatesFilter' });
    t.field('parentId', { type: 'IntNullableWithAggregatesFilter' });
  },
});

export const SettingWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'SettingWhereInput' });
    t.list.field('OR', { type: 'SettingWhereInput' });
    t.list.field('NOT', { type: 'SettingWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('key', { type: 'StringFilter' });
    t.field('value', { type: 'StringFilter' });
    t.field('type', { type: 'StringFilter' });
    t.field('group', { type: 'StringFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
  },
});

export const SettingOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('key', { type: 'SortOrder' });
    t.field('value', { type: 'SortOrder' });
    t.field('type', { type: 'SortOrder' });
    t.field('group', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const SettingWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('key', { type: 'String' });
    t.list.field('AND', { type: 'SettingWhereInput' });
    t.list.field('OR', { type: 'SettingWhereInput' });
    t.list.field('NOT', { type: 'SettingWhereInput' });
    t.field('value', { type: 'StringFilter' });
    t.field('type', { type: 'StringFilter' });
    t.field('group', { type: 'StringFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
  },
});

export const SettingOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('key', { type: 'SortOrder' });
    t.field('value', { type: 'SortOrder' });
    t.field('type', { type: 'SortOrder' });
    t.field('group', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('_count', { type: 'SettingCountOrderByAggregateInput' });
    t.field('_avg', { type: 'SettingAvgOrderByAggregateInput' });
    t.field('_max', { type: 'SettingMaxOrderByAggregateInput' });
    t.field('_min', { type: 'SettingMinOrderByAggregateInput' });
    t.field('_sum', { type: 'SettingSumOrderByAggregateInput' });
  },
});

export const SettingScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'SettingScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'SettingScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'SettingScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('key', { type: 'StringWithAggregatesFilter' });
    t.field('value', { type: 'StringWithAggregatesFilter' });
    t.field('type', { type: 'StringWithAggregatesFilter' });
    t.field('group', { type: 'StringWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const AuditLogWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'AuditLogWhereInput' });
    t.list.field('OR', { type: 'AuditLogWhereInput' });
    t.list.field('NOT', { type: 'AuditLogWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('action', { type: 'StringFilter' });
    t.field('entity', { type: 'StringFilter' });
    t.field('entityId', { type: 'StringFilter' });
    t.field('oldValue', { type: 'StringNullableFilter' });
    t.field('newValue', { type: 'StringNullableFilter' });
    t.field('ipAddress', { type: 'StringNullableFilter' });
    t.field('userAgent', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
  },
});

export const AuditLogOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('action', { type: 'SortOrder' });
    t.field('entity', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
    t.field('oldValue', { type: 'SortOrderInput' });
    t.field('newValue', { type: 'SortOrderInput' });
    t.field('ipAddress', { type: 'SortOrderInput' });
    t.field('userAgent', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const AuditLogWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'AuditLogWhereInput' });
    t.list.field('OR', { type: 'AuditLogWhereInput' });
    t.list.field('NOT', { type: 'AuditLogWhereInput' });
    t.field('action', { type: 'StringFilter' });
    t.field('entity', { type: 'StringFilter' });
    t.field('entityId', { type: 'StringFilter' });
    t.field('oldValue', { type: 'StringNullableFilter' });
    t.field('newValue', { type: 'StringNullableFilter' });
    t.field('ipAddress', { type: 'StringNullableFilter' });
    t.field('userAgent', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
  },
});

export const AuditLogOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('action', { type: 'SortOrder' });
    t.field('entity', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
    t.field('oldValue', { type: 'SortOrderInput' });
    t.field('newValue', { type: 'SortOrderInput' });
    t.field('ipAddress', { type: 'SortOrderInput' });
    t.field('userAgent', { type: 'SortOrderInput' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('_count', { type: 'AuditLogCountOrderByAggregateInput' });
    t.field('_avg', { type: 'AuditLogAvgOrderByAggregateInput' });
    t.field('_max', { type: 'AuditLogMaxOrderByAggregateInput' });
    t.field('_min', { type: 'AuditLogMinOrderByAggregateInput' });
    t.field('_sum', { type: 'AuditLogSumOrderByAggregateInput' });
  },
});

export const AuditLogScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'AuditLogScalarWhereWithAggregatesInput' });
    t.list.field('OR', { type: 'AuditLogScalarWhereWithAggregatesInput' });
    t.list.field('NOT', { type: 'AuditLogScalarWhereWithAggregatesInput' });
    t.field('id', { type: 'IntWithAggregatesFilter' });
    t.field('action', { type: 'StringWithAggregatesFilter' });
    t.field('entity', { type: 'StringWithAggregatesFilter' });
    t.field('entityId', { type: 'StringWithAggregatesFilter' });
    t.field('oldValue', { type: 'StringNullableWithAggregatesFilter' });
    t.field('newValue', { type: 'StringNullableWithAggregatesFilter' });
    t.field('ipAddress', { type: 'StringNullableWithAggregatesFilter' });
    t.field('userAgent', { type: 'StringNullableWithAggregatesFilter' });
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' });
  },
});

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProfileCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateInput',
  definition(t) {
    t.field('bio', { type: 'String' });
    t.field('avatar', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('location', { type: 'String' });
    t.field('birthDate', { type: 'DateTime' });
    t.field('phone', { type: 'String' });
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutProfileInput' });
  },
});

export const ProfileUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('bio', { type: 'String' });
    t.field('avatar', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('location', { type: 'String' });
    t.field('birthDate', { type: 'DateTime' });
    t.field('phone', { type: 'String' });
    t.nonNull.field('userId', { type: 'Int' });
  },
});

export const ProfileUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateInput',
  definition(t) {
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('birthDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('user', { type: 'UserUpdateOneRequiredWithoutProfileNestedInput' });
  },
});

export const ProfileUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('birthDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const ProfileCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('bio', { type: 'String' });
    t.field('avatar', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('location', { type: 'String' });
    t.field('birthDate', { type: 'DateTime' });
    t.field('phone', { type: 'String' });
    t.nonNull.field('userId', { type: 'Int' });
  },
});

export const ProfileUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateManyMutationInput',
  definition(t) {
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('birthDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' });
  },
});

export const ProfileUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('birthDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const UserFollowCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' });
    t.nonNull.field('follower', { type: 'UserCreateNestedOneWithoutFollowedByInput' });
    t.nonNull.field('following', { type: 'UserCreateNestedOneWithoutFollowingInput' });
  },
});

export const UserFollowUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('followerId', { type: 'Int' });
    t.nonNull.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UserFollowUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('follower', { type: 'UserUpdateOneRequiredWithoutFollowedByNestedInput' });
    t.field('following', { type: 'UserUpdateOneRequiredWithoutFollowingNestedInput' });
  },
});

export const UserFollowUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followerId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followingId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserFollowCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('followerId', { type: 'Int' });
    t.nonNull.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UserFollowUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserFollowUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followerId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followingId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const PostCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('categoryId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserUncheckedCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' });
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUncheckedUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('categoryId', { type: 'Int' });
  },
});

export const PostUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyMutationInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const PostUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const CommentCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' });
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' });
    t.field('parent', { type: 'CommentCreateNestedOneWithoutRepliesInput' });
    t.field('replies', { type: 'CommentCreateNestedManyWithoutParentInput' });
  },
});

export const CommentUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('postId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('replies', { type: 'CommentUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CommentUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutCommentsNestedInput' });
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' });
    t.field('parent', { type: 'CommentUpdateOneWithoutRepliesNestedInput' });
    t.field('replies', { type: 'CommentUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('replies', { type: 'CommentUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('postId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
  },
});

export const CommentUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyMutationInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const CommentUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const CategoryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutCategoryInput' });
    t.field('parent', { type: 'CategoryCreateNestedOneWithoutChildrenInput' });
    t.field('children', { type: 'CategoryCreateNestedManyWithoutParentInput' });
  },
});

export const CategoryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutCategoryInput' });
    t.field('children', { type: 'CategoryUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CategoryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutCategoryNestedInput' });
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenNestedInput' });
    t.field('children', { type: 'CategoryUpdateManyWithoutParentNestedInput' });
  },
});

export const CategoryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutCategoryNestedInput' });
    t.field('children', { type: 'CategoryUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CategoryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
  },
});

export const CategoryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const CategoryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const TagCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutTagsInput' });
  },
});

export const TagUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutTagsInput' });
  },
});

export const TagUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutTagsNestedInput' });
  },
});

export const TagUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutTagsNestedInput' });
  },
});

export const TagCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const TagUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TagUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProductCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brand', { type: 'BrandCreateNestedOneWithoutProductsInput' });
    t.field('orderItems', { type: 'OrderItemCreateNestedManyWithoutProductInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brandId', { type: 'Int' });
    t.field('orderItems', { type: 'OrderItemUncheckedCreateNestedManyWithoutProductInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brand', { type: 'BrandUpdateOneWithoutProductsNestedInput' });
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUpdateManyWithoutProductsNestedInput' });
  },
});

export const ProductUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brandId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('orderItems', { type: 'OrderItemUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput' });
  },
});

export const ProductCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brandId', { type: 'Int' });
  },
});

export const ProductUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProductUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brandId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const BrandCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('logo', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('products', { type: 'ProductCreateNestedManyWithoutBrandInput' });
  },
});

export const BrandUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('logo', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('products', { type: 'ProductUncheckedCreateNestedManyWithoutBrandInput' });
  },
});

export const BrandUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('products', { type: 'ProductUpdateManyWithoutBrandNestedInput' });
  },
});

export const BrandUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('products', { type: 'ProductUncheckedUpdateManyWithoutBrandNestedInput' });
  },
});

export const BrandCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('logo', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const BrandUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const BrandUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProductCategoryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parent', { type: 'ProductCategoryCreateNestedOneWithoutChildrenInput' });
    t.field('children', { type: 'ProductCategoryCreateNestedManyWithoutParentInput' });
    t.field('products', { type: 'ProductCreateNestedManyWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('children', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutParentInput' });
    t.field('products', { type: 'ProductUncheckedCreateNestedManyWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parent', { type: 'ProductCategoryUpdateOneWithoutChildrenNestedInput' });
    t.field('children', { type: 'ProductCategoryUpdateManyWithoutParentNestedInput' });
    t.field('products', { type: 'ProductUpdateManyWithoutProductCategoriesNestedInput' });
  },
});

export const ProductCategoryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('children', { type: 'ProductCategoryUncheckedUpdateManyWithoutParentNestedInput' });
    t.field('products', { type: 'ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput' });
  },
});

export const ProductCategoryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
  },
});

export const ProductCategoryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProductCategoryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const OrderCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateInput',
  definition(t) {
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('customer', { type: 'UserCreateNestedOneWithoutOrdersInput' });
    t.field('items', { type: 'OrderItemCreateNestedManyWithoutOrderInput' });
  },
});

export const OrderUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('customerId', { type: 'Int' });
    t.field('items', { type: 'OrderItemUncheckedCreateNestedManyWithoutOrderInput' });
  },
});

export const OrderUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateInput',
  definition(t) {
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('customer', { type: 'UserUpdateOneWithoutOrdersNestedInput' });
    t.field('items', { type: 'OrderItemUpdateManyWithoutOrderNestedInput' });
  },
});

export const OrderUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('customerId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('items', { type: 'OrderItemUncheckedUpdateManyWithoutOrderNestedInput' });
  },
});

export const OrderCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('customerId', { type: 'Int' });
  },
});

export const OrderUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateManyMutationInput',
  definition(t) {
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const OrderUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('customerId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const OrderItemCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateInput',
  definition(t) {
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('order', { type: 'OrderCreateNestedOneWithoutItemsInput' });
    t.nonNull.field('product', { type: 'ProductCreateNestedOneWithoutOrderItemsInput' });
  },
});

export const OrderItemUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('orderId', { type: 'Int' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const OrderItemUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutItemsNestedInput' });
    t.field('product', { type: 'ProductUpdateOneRequiredWithoutOrderItemsNestedInput' });
  },
});

export const OrderItemUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const OrderItemCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('orderId', { type: 'Int' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const OrderItemUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateManyMutationInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
  },
});

export const OrderItemUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const ReviewCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateInput',
  definition(t) {
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutReviewsInput' });
    t.nonNull.field('product', { type: 'ProductCreateNestedOneWithoutReviewsInput' });
  },
});

export const ReviewUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const ReviewUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateInput',
  definition(t) {
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutReviewsNestedInput' });
    t.field('product', { type: 'ProductUpdateOneRequiredWithoutReviewsNestedInput' });
  },
});

export const ReviewUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const ReviewCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const ReviewUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyMutationInput',
  definition(t) {
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ReviewUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const MessageCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateInput',
  definition(t) {
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('sender', { type: 'UserCreateNestedOneWithoutSentMessagesInput' });
    t.field('receiver', { type: 'UserCreateNestedOneWithoutReceivedMessagesInput' });
  },
});

export const MessageUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('senderId', { type: 'Int' });
    t.field('receiverId', { type: 'Int' });
  },
});

export const MessageUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateInput',
  definition(t) {
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('sender', { type: 'UserUpdateOneWithoutSentMessagesNestedInput' });
    t.field('receiver', { type: 'UserUpdateOneWithoutReceivedMessagesNestedInput' });
  },
});

export const MessageUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('senderId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('receiverId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const MessageCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('senderId', { type: 'Int' });
    t.field('receiverId', { type: 'Int' });
  },
});

export const MessageUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyMutationInput',
  definition(t) {
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const MessageUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('senderId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('receiverId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const GroupCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('members', { type: 'UserCreateNestedManyWithoutGroupsInput' });
  },
});

export const GroupUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('members', { type: 'UserUncheckedCreateNestedManyWithoutGroupsInput' });
  },
});

export const GroupUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('members', { type: 'UserUpdateManyWithoutGroupsNestedInput' });
  },
});

export const GroupUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('members', { type: 'UserUncheckedUpdateManyWithoutGroupsNestedInput' });
  },
});

export const GroupCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const GroupUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const GroupUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProjectCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('startDate', { type: 'DateTime' });
    t.field('endDate', { type: 'DateTime' });
    t.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('tasks', { type: 'TaskCreateNestedManyWithoutProjectInput' });
  },
});

export const ProjectUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('startDate', { type: 'DateTime' });
    t.field('endDate', { type: 'DateTime' });
    t.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('tasks', { type: 'TaskUncheckedCreateNestedManyWithoutProjectInput' });
  },
});

export const ProjectUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('budget', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('tasks', { type: 'TaskUpdateManyWithoutProjectNestedInput' });
  },
});

export const ProjectUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('budget', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('tasks', { type: 'TaskUncheckedUpdateManyWithoutProjectNestedInput' });
  },
});

export const ProjectCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('startDate', { type: 'DateTime' });
    t.field('endDate', { type: 'DateTime' });
    t.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProjectUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('budget', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProjectUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('budget', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TaskCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('project', { type: 'ProjectCreateNestedOneWithoutTasksInput' });
    t.field('parent', { type: 'TaskCreateNestedOneWithoutSubtasksInput' });
    t.field('subtasks', { type: 'TaskCreateNestedManyWithoutParentInput' });
  },
});

export const TaskUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('projectId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('subtasks', { type: 'TaskUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const TaskUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('project', { type: 'ProjectUpdateOneWithoutTasksNestedInput' });
    t.field('parent', { type: 'TaskUpdateOneWithoutSubtasksNestedInput' });
    t.field('subtasks', { type: 'TaskUpdateManyWithoutParentNestedInput' });
  },
});

export const TaskUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('projectId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('subtasks', { type: 'TaskUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const TaskCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('projectId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
  },
});

export const TaskUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyMutationInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TaskUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('projectId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const SettingCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingCreateInput',
  definition(t) {
    t.nonNull.field('key', { type: 'String' });
    t.nonNull.field('value', { type: 'String' });
    t.field('type', { type: 'String' });
    t.field('group', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const SettingUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('key', { type: 'String' });
    t.nonNull.field('value', { type: 'String' });
    t.field('type', { type: 'String' });
    t.field('group', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const SettingUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingUpdateInput',
  definition(t) {
    t.field('key', { type: 'StringFieldUpdateOperationsInput' });
    t.field('value', { type: 'StringFieldUpdateOperationsInput' });
    t.field('type', { type: 'StringFieldUpdateOperationsInput' });
    t.field('group', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const SettingUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('key', { type: 'StringFieldUpdateOperationsInput' });
    t.field('value', { type: 'StringFieldUpdateOperationsInput' });
    t.field('type', { type: 'StringFieldUpdateOperationsInput' });
    t.field('group', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const SettingCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('key', { type: 'String' });
    t.nonNull.field('value', { type: 'String' });
    t.field('type', { type: 'String' });
    t.field('group', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const SettingUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingUpdateManyMutationInput',
  definition(t) {
    t.field('key', { type: 'StringFieldUpdateOperationsInput' });
    t.field('value', { type: 'StringFieldUpdateOperationsInput' });
    t.field('type', { type: 'StringFieldUpdateOperationsInput' });
    t.field('group', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const SettingUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('key', { type: 'StringFieldUpdateOperationsInput' });
    t.field('value', { type: 'StringFieldUpdateOperationsInput' });
    t.field('type', { type: 'StringFieldUpdateOperationsInput' });
    t.field('group', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const AuditLogCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogCreateInput',
  definition(t) {
    t.nonNull.field('action', { type: 'String' });
    t.nonNull.field('entity', { type: 'String' });
    t.nonNull.field('entityId', { type: 'String' });
    t.field('oldValue', { type: 'String' });
    t.field('newValue', { type: 'String' });
    t.field('ipAddress', { type: 'String' });
    t.field('userAgent', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const AuditLogUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('action', { type: 'String' });
    t.nonNull.field('entity', { type: 'String' });
    t.nonNull.field('entityId', { type: 'String' });
    t.field('oldValue', { type: 'String' });
    t.field('newValue', { type: 'String' });
    t.field('ipAddress', { type: 'String' });
    t.field('userAgent', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const AuditLogUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogUpdateInput',
  definition(t) {
    t.field('action', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entity', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entityId', { type: 'StringFieldUpdateOperationsInput' });
    t.field('oldValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('newValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('ipAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('userAgent', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const AuditLogUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('action', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entity', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entityId', { type: 'StringFieldUpdateOperationsInput' });
    t.field('oldValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('newValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('ipAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('userAgent', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const AuditLogCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('action', { type: 'String' });
    t.nonNull.field('entity', { type: 'String' });
    t.nonNull.field('entityId', { type: 'String' });
    t.field('oldValue', { type: 'String' });
    t.field('newValue', { type: 'String' });
    t.field('ipAddress', { type: 'String' });
    t.field('userAgent', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const AuditLogUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogUpdateManyMutationInput',
  definition(t) {
    t.field('action', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entity', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entityId', { type: 'StringFieldUpdateOperationsInput' });
    t.field('oldValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('newValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('ipAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('userAgent', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const AuditLogUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('action', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entity', { type: 'StringFieldUpdateOperationsInput' });
    t.field('entityId', { type: 'StringFieldUpdateOperationsInput' });
    t.field('oldValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('newValue', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('ipAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('userAgent', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntFilter' });
  },
});

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringFilter' });
  },
});

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableFilter' });
  },
});

export const EnumRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRoleFilter',
  definition(t) {
    t.field('equals', { type: 'Role' });
    t.list.field('in', { type: 'Role' });
    t.list.field('notIn', { type: 'Role' });
    t.field('not', { type: 'NestedEnumRoleFilter' });
  },
});

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolFilter' });
  },
});

export const FloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatFilter' });
  },
});

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeFilter' });
  },
});

export const ProfileNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProfileWhereInput' });
    t.field('isNot', { type: 'ProfileWhereInput' });
  },
});

export const PostListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostListRelationFilter',
  definition(t) {
    t.field('every', { type: 'PostWhereInput' });
    t.field('some', { type: 'PostWhereInput' });
    t.field('none', { type: 'PostWhereInput' });
  },
});

export const CommentListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CommentWhereInput' });
    t.field('some', { type: 'CommentWhereInput' });
    t.field('none', { type: 'CommentWhereInput' });
  },
});

export const OrderListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderListRelationFilter',
  definition(t) {
    t.field('every', { type: 'OrderWhereInput' });
    t.field('some', { type: 'OrderWhereInput' });
    t.field('none', { type: 'OrderWhereInput' });
  },
});

export const ReviewListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ReviewWhereInput' });
    t.field('some', { type: 'ReviewWhereInput' });
    t.field('none', { type: 'ReviewWhereInput' });
  },
});

export const MessageListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageListRelationFilter',
  definition(t) {
    t.field('every', { type: 'MessageWhereInput' });
    t.field('some', { type: 'MessageWhereInput' });
    t.field('none', { type: 'MessageWhereInput' });
  },
});

export const UserFollowListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserFollowWhereInput' });
    t.field('some', { type: 'UserFollowWhereInput' });
    t.field('none', { type: 'UserFollowWhereInput' });
  },
});

export const GroupListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupListRelationFilter',
  definition(t) {
    t.field('every', { type: 'GroupWhereInput' });
    t.field('some', { type: 'GroupWhereInput' });
    t.field('none', { type: 'GroupWhereInput' });
  },
});

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' });
    t.field('nulls', { type: 'NullsOrder' });
  },
});

export const PostOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const CommentOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const OrderOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const ReviewOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const MessageOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const UserFollowOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const GroupOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('firstName', { type: 'SortOrder' });
    t.field('lastName', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
    t.field('metadata', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
  },
});

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('firstName', { type: 'SortOrder' });
    t.field('lastName', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
    t.field('metadata', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('username', { type: 'SortOrder' });
    t.field('firstName', { type: 'SortOrder' });
    t.field('lastName', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
    t.field('metadata', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('balance', { type: 'SortOrder' });
  },
});

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedFloatFilter' });
    t.field('_sum', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedIntFilter' });
    t.field('_max', { type: 'NestedIntFilter' });
  },
});

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedStringFilter' });
    t.field('_max', { type: 'NestedStringFilter' });
  },
});

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedStringNullableFilter' });
    t.field('_max', { type: 'NestedStringNullableFilter' });
  },
});

export const EnumRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Role' });
    t.list.field('in', { type: 'Role' });
    t.list.field('notIn', { type: 'Role' });
    t.field('not', { type: 'NestedEnumRoleWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumRoleFilter' });
    t.field('_max', { type: 'NestedEnumRoleFilter' });
  },
});

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedBoolFilter' });
    t.field('_max', { type: 'NestedBoolFilter' });
  },
});

export const FloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedFloatFilter' });
    t.field('_sum', { type: 'NestedFloatFilter' });
    t.field('_min', { type: 'NestedFloatFilter' });
    t.field('_max', { type: 'NestedFloatFilter' });
  },
});

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedDateTimeFilter' });
    t.field('_max', { type: 'NestedDateTimeFilter' });
  },
});

export const DateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const UserScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' });
    t.field('isNot', { type: 'UserWhereInput' });
  },
});

export const ProfileCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('bio', { type: 'SortOrder' });
    t.field('avatar', { type: 'SortOrder' });
    t.field('website', { type: 'SortOrder' });
    t.field('location', { type: 'SortOrder' });
    t.field('birthDate', { type: 'SortOrder' });
    t.field('phone', { type: 'SortOrder' });
    t.field('userId', { type: 'SortOrder' });
  },
});

export const ProfileAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('userId', { type: 'SortOrder' });
  },
});

export const ProfileMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('bio', { type: 'SortOrder' });
    t.field('avatar', { type: 'SortOrder' });
    t.field('website', { type: 'SortOrder' });
    t.field('location', { type: 'SortOrder' });
    t.field('birthDate', { type: 'SortOrder' });
    t.field('phone', { type: 'SortOrder' });
    t.field('userId', { type: 'SortOrder' });
  },
});

export const ProfileMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('bio', { type: 'SortOrder' });
    t.field('avatar', { type: 'SortOrder' });
    t.field('website', { type: 'SortOrder' });
    t.field('location', { type: 'SortOrder' });
    t.field('birthDate', { type: 'SortOrder' });
    t.field('phone', { type: 'SortOrder' });
    t.field('userId', { type: 'SortOrder' });
  },
});

export const ProfileSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('userId', { type: 'SortOrder' });
  },
});

export const DateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedDateTimeNullableFilter' });
    t.field('_max', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const UserFollowFollowerIdFollowingIdCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowFollowerIdFollowingIdCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('followerId', { type: 'Int' });
    t.nonNull.field('followingId', { type: 'Int' });
  },
});

export const UserFollowCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const UserFollowAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
  },
});

export const UserFollowMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const UserFollowMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const UserFollowSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('followerId', { type: 'SortOrder' });
    t.field('followingId', { type: 'SortOrder' });
  },
});

export const EnumStatusFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumStatusFilter',
  definition(t) {
    t.field('equals', { type: 'Status' });
    t.list.field('in', { type: 'Status' });
    t.list.field('notIn', { type: 'Status' });
    t.field('not', { type: 'NestedEnumStatusFilter' });
  },
});

export const FloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatNullableFilter' });
  },
});

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableFilter' });
  },
});

export const UserNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' });
    t.field('isNot', { type: 'UserWhereInput' });
  },
});

export const CategoryNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'CategoryWhereInput' });
    t.field('isNot', { type: 'CategoryWhereInput' });
  },
});

export const TagListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagListRelationFilter',
  definition(t) {
    t.field('every', { type: 'TagWhereInput' });
    t.field('some', { type: 'TagWhereInput' });
    t.field('none', { type: 'TagWhereInput' });
  },
});

export const UserListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserWhereInput' });
    t.field('some', { type: 'UserWhereInput' });
    t.field('none', { type: 'UserWhereInput' });
  },
});

export const TagOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const UserOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const PostCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('excerpt', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('featured', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrder' });
    t.field('publishedAt', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('categoryId', { type: 'SortOrder' });
  },
});

export const PostAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('categoryId', { type: 'SortOrder' });
  },
});

export const PostMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('excerpt', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('featured', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrder' });
    t.field('publishedAt', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('categoryId', { type: 'SortOrder' });
  },
});

export const PostMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('excerpt', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('featured', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrder' });
    t.field('publishedAt', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('categoryId', { type: 'SortOrder' });
  },
});

export const PostSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('viewCount', { type: 'SortOrder' });
    t.field('readTime', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('categoryId', { type: 'SortOrder' });
  },
});

export const EnumStatusWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumStatusWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Status' });
    t.list.field('in', { type: 'Status' });
    t.list.field('notIn', { type: 'Status' });
    t.field('not', { type: 'NestedEnumStatusWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumStatusFilter' });
    t.field('_max', { type: 'NestedEnumStatusFilter' });
  },
});

export const FloatNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedFloatNullableFilter' });
    t.field('_sum', { type: 'NestedFloatNullableFilter' });
    t.field('_min', { type: 'NestedFloatNullableFilter' });
    t.field('_max', { type: 'NestedFloatNullableFilter' });
  },
});

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedFloatNullableFilter' });
    t.field('_sum', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedIntNullableFilter' });
    t.field('_max', { type: 'NestedIntNullableFilter' });
  },
});

export const PostScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'PostWhereInput' });
    t.field('isNot', { type: 'PostWhereInput' });
  },
});

export const CommentNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'CommentWhereInput' });
    t.field('isNot', { type: 'CommentWhereInput' });
  },
});

export const CommentCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CommentAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CommentMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CommentMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CommentSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CategoryListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CategoryWhereInput' });
    t.field('some', { type: 'CategoryWhereInput' });
    t.field('none', { type: 'CategoryWhereInput' });
  },
});

export const CategoryOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const CategoryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('color', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CategoryAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CategoryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('color', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CategoryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('color', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const CategorySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategorySumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const TagCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const TagAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const TagMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const TagMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const TagSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const BrandNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'BrandWhereInput' });
    t.field('isNot', { type: 'BrandWhereInput' });
  },
});

export const OrderItemListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemListRelationFilter',
  definition(t) {
    t.field('every', { type: 'OrderItemWhereInput' });
    t.field('some', { type: 'OrderItemWhereInput' });
    t.field('none', { type: 'OrderItemWhereInput' });
  },
});

export const ProductCategoryListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ProductCategoryWhereInput' });
    t.field('some', { type: 'ProductCategoryWhereInput' });
    t.field('none', { type: 'ProductCategoryWhereInput' });
  },
});

export const OrderItemOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const ProductCategoryOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const ProductCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('sku', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrder' });
    t.field('costPrice', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('isFeatured', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrder' });
  },
});

export const ProductAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrder' });
    t.field('costPrice', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrder' });
  },
});

export const ProductMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('sku', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrder' });
    t.field('costPrice', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('isFeatured', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrder' });
  },
});

export const ProductMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('sku', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrder' });
    t.field('costPrice', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('isFeatured', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrder' });
  },
});

export const ProductSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('comparePrice', { type: 'SortOrder' });
    t.field('costPrice', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('weight', { type: 'SortOrder' });
    t.field('brandId', { type: 'SortOrder' });
  },
});

export const ProductListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ProductWhereInput' });
    t.field('some', { type: 'ProductWhereInput' });
    t.field('none', { type: 'ProductWhereInput' });
  },
});

export const ProductOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const BrandCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('logo', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('website', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const BrandAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const BrandMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('logo', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('website', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const BrandMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('logo', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('website', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const BrandSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const ProductCategoryNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProductCategoryWhereInput' });
    t.field('isNot', { type: 'ProductCategoryWhereInput' });
  },
});

export const ProductCategoryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const ProductCategoryAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const ProductCategoryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const ProductCategoryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('slug', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const ProductCategorySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategorySumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('order', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const OrderCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('orderNumber', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('notes', { type: 'SortOrder' });
    t.field('shippingAddress', { type: 'SortOrder' });
    t.field('billingAddress', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrder' });
  },
});

export const OrderAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrder' });
  },
});

export const OrderMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('orderNumber', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('notes', { type: 'SortOrder' });
    t.field('shippingAddress', { type: 'SortOrder' });
    t.field('billingAddress', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrder' });
  },
});

export const OrderMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('orderNumber', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('notes', { type: 'SortOrder' });
    t.field('shippingAddress', { type: 'SortOrder' });
    t.field('billingAddress', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrder' });
  },
});

export const OrderSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subtotal', { type: 'SortOrder' });
    t.field('tax', { type: 'SortOrder' });
    t.field('shipping', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('customerId', { type: 'SortOrder' });
  },
});

export const OrderScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'OrderWhereInput' });
    t.field('isNot', { type: 'OrderWhereInput' });
  },
});

export const ProductScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProductWhereInput' });
    t.field('isNot', { type: 'ProductWhereInput' });
  },
});

export const OrderItemOrderIdProductIdCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemOrderIdProductIdCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('orderId', { type: 'Int' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const OrderItemCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const OrderItemAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const OrderItemMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const OrderItemMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const OrderItemSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('quantity', { type: 'SortOrder' });
    t.field('price', { type: 'SortOrder' });
    t.field('total', { type: 'SortOrder' });
    t.field('orderId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const ReviewAuthorIdProductIdCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewAuthorIdProductIdCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('authorId', { type: 'Int' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const ReviewCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const ReviewAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const ReviewMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const ReviewMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('approved', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const ReviewSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('rating', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('productId', { type: 'SortOrder' });
  },
});

export const EnumPriorityFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumPriorityFilter',
  definition(t) {
    t.field('equals', { type: 'Priority' });
    t.list.field('in', { type: 'Priority' });
    t.list.field('notIn', { type: 'Priority' });
    t.field('not', { type: 'NestedEnumPriorityFilter' });
  },
});

export const MessageCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subject', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('read', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrder' });
    t.field('receiverId', { type: 'SortOrder' });
  },
});

export const MessageAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrder' });
    t.field('receiverId', { type: 'SortOrder' });
  },
});

export const MessageMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subject', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('read', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrder' });
    t.field('receiverId', { type: 'SortOrder' });
  },
});

export const MessageMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('subject', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('read', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrder' });
    t.field('receiverId', { type: 'SortOrder' });
  },
});

export const MessageSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('senderId', { type: 'SortOrder' });
    t.field('receiverId', { type: 'SortOrder' });
  },
});

export const EnumPriorityWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumPriorityWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Priority' });
    t.list.field('in', { type: 'Priority' });
    t.list.field('notIn', { type: 'Priority' });
    t.field('not', { type: 'NestedEnumPriorityWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumPriorityFilter' });
    t.field('_max', { type: 'NestedEnumPriorityFilter' });
  },
});

export const GroupCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('isPrivate', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const GroupAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const GroupMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('isPrivate', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const GroupMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('isPrivate', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const GroupSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const TaskListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskListRelationFilter',
  definition(t) {
    t.field('every', { type: 'TaskWhereInput' });
    t.field('some', { type: 'TaskWhereInput' });
    t.field('none', { type: 'TaskWhereInput' });
  },
});

export const TaskOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' });
  },
});

export const ProjectCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('startDate', { type: 'SortOrder' });
    t.field('endDate', { type: 'SortOrder' });
    t.field('budget', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const ProjectAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('budget', { type: 'SortOrder' });
  },
});

export const ProjectMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('startDate', { type: 'SortOrder' });
    t.field('endDate', { type: 'SortOrder' });
    t.field('budget', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const ProjectMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('startDate', { type: 'SortOrder' });
    t.field('endDate', { type: 'SortOrder' });
    t.field('budget', { type: 'SortOrder' });
    t.field('isActive', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const ProjectSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('budget', { type: 'SortOrder' });
  },
});

export const ProjectNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProjectWhereInput' });
    t.field('isNot', { type: 'ProjectWhereInput' });
  },
});

export const TaskNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'TaskWhereInput' });
    t.field('isNot', { type: 'TaskWhereInput' });
  },
});

export const TaskCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('dueDate', { type: 'SortOrder' });
    t.field('completedAt', { type: 'SortOrder' });
    t.field('estimatedHours', { type: 'SortOrder' });
    t.field('actualHours', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const TaskAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('estimatedHours', { type: 'SortOrder' });
    t.field('actualHours', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const TaskMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('dueDate', { type: 'SortOrder' });
    t.field('completedAt', { type: 'SortOrder' });
    t.field('estimatedHours', { type: 'SortOrder' });
    t.field('actualHours', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const TaskMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('title', { type: 'SortOrder' });
    t.field('description', { type: 'SortOrder' });
    t.field('status', { type: 'SortOrder' });
    t.field('priority', { type: 'SortOrder' });
    t.field('dueDate', { type: 'SortOrder' });
    t.field('completedAt', { type: 'SortOrder' });
    t.field('estimatedHours', { type: 'SortOrder' });
    t.field('actualHours', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const TaskSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('estimatedHours', { type: 'SortOrder' });
    t.field('actualHours', { type: 'SortOrder' });
    t.field('projectId', { type: 'SortOrder' });
    t.field('parentId', { type: 'SortOrder' });
  },
});

export const SettingCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('key', { type: 'SortOrder' });
    t.field('value', { type: 'SortOrder' });
    t.field('type', { type: 'SortOrder' });
    t.field('group', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const SettingAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const SettingMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('key', { type: 'SortOrder' });
    t.field('value', { type: 'SortOrder' });
    t.field('type', { type: 'SortOrder' });
    t.field('group', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const SettingMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('key', { type: 'SortOrder' });
    t.field('value', { type: 'SortOrder' });
    t.field('type', { type: 'SortOrder' });
    t.field('group', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
    t.field('updatedAt', { type: 'SortOrder' });
  },
});

export const SettingSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SettingSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const AuditLogCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('action', { type: 'SortOrder' });
    t.field('entity', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
    t.field('oldValue', { type: 'SortOrder' });
    t.field('newValue', { type: 'SortOrder' });
    t.field('ipAddress', { type: 'SortOrder' });
    t.field('userAgent', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const AuditLogAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const AuditLogMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('action', { type: 'SortOrder' });
    t.field('entity', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
    t.field('oldValue', { type: 'SortOrder' });
    t.field('newValue', { type: 'SortOrder' });
    t.field('ipAddress', { type: 'SortOrder' });
    t.field('userAgent', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const AuditLogMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('action', { type: 'SortOrder' });
    t.field('entity', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
    t.field('oldValue', { type: 'SortOrder' });
    t.field('newValue', { type: 'SortOrder' });
    t.field('ipAddress', { type: 'SortOrder' });
    t.field('userAgent', { type: 'SortOrder' });
    t.field('createdAt', { type: 'SortOrder' });
  },
});

export const AuditLogSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
  },
});

export const ProfileCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' });
    t.field('connectOrCreate', { type: 'ProfileCreateOrConnectWithoutUserInput' });
    t.field('connect', { type: 'ProfileWhereUniqueInput' });
  },
});

export const PostCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutAuthorInput' });
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const CommentCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutAuthorInput' });
    t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const OrderCreateNestedManyWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateNestedManyWithoutCustomerInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutCustomerInput' });
    t.list.field('connectOrCreate', { type: 'OrderCreateOrConnectWithoutCustomerInput' });
    t.field('createMany', { type: 'OrderCreateManyCustomerInputEnvelope' });
    t.list.field('connect', { type: 'OrderWhereUniqueInput' });
  },
});

export const ReviewCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutAuthorInput' });
    t.field('createMany', { type: 'ReviewCreateManyAuthorInputEnvelope' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
  },
});

export const MessageCreateNestedManyWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateNestedManyWithoutSenderInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutSenderInput' });
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
  },
});

export const MessageCreateNestedManyWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateNestedManyWithoutReceiverInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutReceiverInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutReceiverInput' });
    t.field('createMany', { type: 'MessageCreateManyReceiverInputEnvelope' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
  },
});

export const UserFollowCreateNestedManyWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateNestedManyWithoutFollowerInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowerInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowerInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowerInputEnvelope' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
  },
});

export const UserFollowCreateNestedManyWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateNestedManyWithoutFollowingInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowingInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowingInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowingInputEnvelope' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
  },
});

export const PostCreateNestedManyWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutLikedByInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutLikedByInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutLikedByInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const GroupCreateNestedManyWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateNestedManyWithoutMembersInput',
  definition(t) {
    t.list.field('create', { type: 'GroupCreateWithoutMembersInput' });
    t.list.field('connectOrCreate', { type: 'GroupCreateOrConnectWithoutMembersInput' });
    t.list.field('connect', { type: 'GroupWhereUniqueInput' });
  },
});

export const ProfileUncheckedCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' });
    t.field('connectOrCreate', { type: 'ProfileCreateOrConnectWithoutUserInput' });
    t.field('connect', { type: 'ProfileWhereUniqueInput' });
  },
});

export const PostUncheckedCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutAuthorInput' });
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const CommentUncheckedCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutAuthorInput' });
    t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const OrderUncheckedCreateNestedManyWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateNestedManyWithoutCustomerInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutCustomerInput' });
    t.list.field('connectOrCreate', { type: 'OrderCreateOrConnectWithoutCustomerInput' });
    t.field('createMany', { type: 'OrderCreateManyCustomerInputEnvelope' });
    t.list.field('connect', { type: 'OrderWhereUniqueInput' });
  },
});

export const ReviewUncheckedCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutAuthorInput' });
    t.field('createMany', { type: 'ReviewCreateManyAuthorInputEnvelope' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
  },
});

export const MessageUncheckedCreateNestedManyWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutSenderInput' });
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
  },
});

export const MessageUncheckedCreateNestedManyWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateNestedManyWithoutReceiverInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutReceiverInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutReceiverInput' });
    t.field('createMany', { type: 'MessageCreateManyReceiverInputEnvelope' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
  },
});

export const UserFollowUncheckedCreateNestedManyWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowerInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowerInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowerInputEnvelope' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
  },
});

export const UserFollowUncheckedCreateNestedManyWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowingInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowingInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowingInputEnvelope' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
  },
});

export const PostUncheckedCreateNestedManyWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutLikedByInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutLikedByInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutLikedByInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const GroupUncheckedCreateNestedManyWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedCreateNestedManyWithoutMembersInput',
  definition(t) {
    t.list.field('create', { type: 'GroupCreateWithoutMembersInput' });
    t.list.field('connectOrCreate', { type: 'GroupCreateOrConnectWithoutMembersInput' });
    t.list.field('connect', { type: 'GroupWhereUniqueInput' });
  },
});

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' });
  },
});

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' });
  },
});

export const EnumRoleFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRoleFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Role' });
  },
});

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' });
  },
});

export const FloatFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Float' });
    t.field('increment', { type: 'Float' });
    t.field('decrement', { type: 'Float' });
    t.field('multiply', { type: 'Float' });
    t.field('divide', { type: 'Float' });
  },
});

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' });
  },
});

export const ProfileUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' });
    t.field('connectOrCreate', { type: 'ProfileCreateOrConnectWithoutUserInput' });
    t.field('upsert', { type: 'ProfileUpsertWithoutUserInput' });
    t.field('disconnect', { type: 'ProfileWhereInput' });
    t.field('delete', { type: 'ProfileWhereInput' });
    t.field('connect', { type: 'ProfileWhereUniqueInput' });
    t.field('update', { type: 'ProfileUpdateToOneWithWhereWithoutUserInput' });
  },
});

export const PostUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutAuthorInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutAuthorInput' });
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutAuthorInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutAuthorInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const CommentUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutAuthorInput' });
    t.list.field('upsert', { type: 'CommentUpsertWithWhereUniqueWithoutAuthorInput' });
    t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' });
    t.list.field('set', { type: 'CommentWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' });
    t.list.field('delete', { type: 'CommentWhereUniqueInput' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
    t.list.field('update', { type: 'CommentUpdateWithWhereUniqueWithoutAuthorInput' });
    t.list.field('updateMany', { type: 'CommentUpdateManyWithWhereWithoutAuthorInput' });
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' });
  },
});

export const OrderUpdateManyWithoutCustomerNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateManyWithoutCustomerNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutCustomerInput' });
    t.list.field('connectOrCreate', { type: 'OrderCreateOrConnectWithoutCustomerInput' });
    t.list.field('upsert', { type: 'OrderUpsertWithWhereUniqueWithoutCustomerInput' });
    t.field('createMany', { type: 'OrderCreateManyCustomerInputEnvelope' });
    t.list.field('set', { type: 'OrderWhereUniqueInput' });
    t.list.field('disconnect', { type: 'OrderWhereUniqueInput' });
    t.list.field('delete', { type: 'OrderWhereUniqueInput' });
    t.list.field('connect', { type: 'OrderWhereUniqueInput' });
    t.list.field('update', { type: 'OrderUpdateWithWhereUniqueWithoutCustomerInput' });
    t.list.field('updateMany', { type: 'OrderUpdateManyWithWhereWithoutCustomerInput' });
    t.list.field('deleteMany', { type: 'OrderScalarWhereInput' });
  },
});

export const ReviewUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutAuthorInput' });
    t.list.field('upsert', { type: 'ReviewUpsertWithWhereUniqueWithoutAuthorInput' });
    t.field('createMany', { type: 'ReviewCreateManyAuthorInputEnvelope' });
    t.list.field('set', { type: 'ReviewWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('update', { type: 'ReviewUpdateWithWhereUniqueWithoutAuthorInput' });
    t.list.field('updateMany', { type: 'ReviewUpdateManyWithWhereWithoutAuthorInput' });
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' });
  },
});

export const MessageUpdateManyWithoutSenderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithoutSenderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutSenderInput' });
    t.list.field('upsert', { type: 'MessageUpsertWithWhereUniqueWithoutSenderInput' });
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' });
    t.list.field('set', { type: 'MessageWhereUniqueInput' });
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' });
    t.list.field('delete', { type: 'MessageWhereUniqueInput' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
    t.list.field('update', { type: 'MessageUpdateWithWhereUniqueWithoutSenderInput' });
    t.list.field('updateMany', { type: 'MessageUpdateManyWithWhereWithoutSenderInput' });
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' });
  },
});

export const MessageUpdateManyWithoutReceiverNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithoutReceiverNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutReceiverInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutReceiverInput' });
    t.list.field('upsert', { type: 'MessageUpsertWithWhereUniqueWithoutReceiverInput' });
    t.field('createMany', { type: 'MessageCreateManyReceiverInputEnvelope' });
    t.list.field('set', { type: 'MessageWhereUniqueInput' });
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' });
    t.list.field('delete', { type: 'MessageWhereUniqueInput' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
    t.list.field('update', { type: 'MessageUpdateWithWhereUniqueWithoutReceiverInput' });
    t.list.field('updateMany', { type: 'MessageUpdateManyWithWhereWithoutReceiverInput' });
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' });
  },
});

export const UserFollowUpdateManyWithoutFollowerNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateManyWithoutFollowerNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowerInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowerInput' });
    t.list.field('upsert', { type: 'UserFollowUpsertWithWhereUniqueWithoutFollowerInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowerInputEnvelope' });
    t.list.field('set', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('delete', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('update', { type: 'UserFollowUpdateWithWhereUniqueWithoutFollowerInput' });
    t.list.field('updateMany', { type: 'UserFollowUpdateManyWithWhereWithoutFollowerInput' });
    t.list.field('deleteMany', { type: 'UserFollowScalarWhereInput' });
  },
});

export const UserFollowUpdateManyWithoutFollowingNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateManyWithoutFollowingNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowingInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowingInput' });
    t.list.field('upsert', { type: 'UserFollowUpsertWithWhereUniqueWithoutFollowingInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowingInputEnvelope' });
    t.list.field('set', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('delete', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('update', { type: 'UserFollowUpdateWithWhereUniqueWithoutFollowingInput' });
    t.list.field('updateMany', { type: 'UserFollowUpdateManyWithWhereWithoutFollowingInput' });
    t.list.field('deleteMany', { type: 'UserFollowScalarWhereInput' });
  },
});

export const PostUpdateManyWithoutLikedByNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutLikedByNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutLikedByInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutLikedByInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutLikedByInput' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutLikedByInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutLikedByInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const GroupUpdateManyWithoutMembersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateManyWithoutMembersNestedInput',
  definition(t) {
    t.list.field('create', { type: 'GroupCreateWithoutMembersInput' });
    t.list.field('connectOrCreate', { type: 'GroupCreateOrConnectWithoutMembersInput' });
    t.list.field('upsert', { type: 'GroupUpsertWithWhereUniqueWithoutMembersInput' });
    t.list.field('set', { type: 'GroupWhereUniqueInput' });
    t.list.field('disconnect', { type: 'GroupWhereUniqueInput' });
    t.list.field('delete', { type: 'GroupWhereUniqueInput' });
    t.list.field('connect', { type: 'GroupWhereUniqueInput' });
    t.list.field('update', { type: 'GroupUpdateWithWhereUniqueWithoutMembersInput' });
    t.list.field('updateMany', { type: 'GroupUpdateManyWithWhereWithoutMembersInput' });
    t.list.field('deleteMany', { type: 'GroupScalarWhereInput' });
  },
});

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' });
    t.field('increment', { type: 'Int' });
    t.field('decrement', { type: 'Int' });
    t.field('multiply', { type: 'Int' });
    t.field('divide', { type: 'Int' });
  },
});

export const ProfileUncheckedUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' });
    t.field('connectOrCreate', { type: 'ProfileCreateOrConnectWithoutUserInput' });
    t.field('upsert', { type: 'ProfileUpsertWithoutUserInput' });
    t.field('disconnect', { type: 'ProfileWhereInput' });
    t.field('delete', { type: 'ProfileWhereInput' });
    t.field('connect', { type: 'ProfileWhereUniqueInput' });
    t.field('update', { type: 'ProfileUpdateToOneWithWhereWithoutUserInput' });
  },
});

export const PostUncheckedUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutAuthorInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutAuthorInput' });
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutAuthorInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutAuthorInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const CommentUncheckedUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutAuthorInput' });
    t.list.field('upsert', { type: 'CommentUpsertWithWhereUniqueWithoutAuthorInput' });
    t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' });
    t.list.field('set', { type: 'CommentWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' });
    t.list.field('delete', { type: 'CommentWhereUniqueInput' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
    t.list.field('update', { type: 'CommentUpdateWithWhereUniqueWithoutAuthorInput' });
    t.list.field('updateMany', { type: 'CommentUpdateManyWithWhereWithoutAuthorInput' });
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' });
  },
});

export const OrderUncheckedUpdateManyWithoutCustomerNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutCustomerInput' });
    t.list.field('connectOrCreate', { type: 'OrderCreateOrConnectWithoutCustomerInput' });
    t.list.field('upsert', { type: 'OrderUpsertWithWhereUniqueWithoutCustomerInput' });
    t.field('createMany', { type: 'OrderCreateManyCustomerInputEnvelope' });
    t.list.field('set', { type: 'OrderWhereUniqueInput' });
    t.list.field('disconnect', { type: 'OrderWhereUniqueInput' });
    t.list.field('delete', { type: 'OrderWhereUniqueInput' });
    t.list.field('connect', { type: 'OrderWhereUniqueInput' });
    t.list.field('update', { type: 'OrderUpdateWithWhereUniqueWithoutCustomerInput' });
    t.list.field('updateMany', { type: 'OrderUpdateManyWithWhereWithoutCustomerInput' });
    t.list.field('deleteMany', { type: 'OrderScalarWhereInput' });
  },
});

export const ReviewUncheckedUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutAuthorInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutAuthorInput' });
    t.list.field('upsert', { type: 'ReviewUpsertWithWhereUniqueWithoutAuthorInput' });
    t.field('createMany', { type: 'ReviewCreateManyAuthorInputEnvelope' });
    t.list.field('set', { type: 'ReviewWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('update', { type: 'ReviewUpdateWithWhereUniqueWithoutAuthorInput' });
    t.list.field('updateMany', { type: 'ReviewUpdateManyWithWhereWithoutAuthorInput' });
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' });
  },
});

export const MessageUncheckedUpdateManyWithoutSenderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutSenderInput' });
    t.list.field('upsert', { type: 'MessageUpsertWithWhereUniqueWithoutSenderInput' });
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' });
    t.list.field('set', { type: 'MessageWhereUniqueInput' });
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' });
    t.list.field('delete', { type: 'MessageWhereUniqueInput' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
    t.list.field('update', { type: 'MessageUpdateWithWhereUniqueWithoutSenderInput' });
    t.list.field('updateMany', { type: 'MessageUpdateManyWithWhereWithoutSenderInput' });
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' });
  },
});

export const MessageUncheckedUpdateManyWithoutReceiverNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutReceiverInput' });
    t.list.field('connectOrCreate', { type: 'MessageCreateOrConnectWithoutReceiverInput' });
    t.list.field('upsert', { type: 'MessageUpsertWithWhereUniqueWithoutReceiverInput' });
    t.field('createMany', { type: 'MessageCreateManyReceiverInputEnvelope' });
    t.list.field('set', { type: 'MessageWhereUniqueInput' });
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' });
    t.list.field('delete', { type: 'MessageWhereUniqueInput' });
    t.list.field('connect', { type: 'MessageWhereUniqueInput' });
    t.list.field('update', { type: 'MessageUpdateWithWhereUniqueWithoutReceiverInput' });
    t.list.field('updateMany', { type: 'MessageUpdateManyWithWhereWithoutReceiverInput' });
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' });
  },
});

export const UserFollowUncheckedUpdateManyWithoutFollowerNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowerInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowerInput' });
    t.list.field('upsert', { type: 'UserFollowUpsertWithWhereUniqueWithoutFollowerInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowerInputEnvelope' });
    t.list.field('set', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('delete', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('update', { type: 'UserFollowUpdateWithWhereUniqueWithoutFollowerInput' });
    t.list.field('updateMany', { type: 'UserFollowUpdateManyWithWhereWithoutFollowerInput' });
    t.list.field('deleteMany', { type: 'UserFollowScalarWhereInput' });
  },
});

export const UserFollowUncheckedUpdateManyWithoutFollowingNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserFollowCreateWithoutFollowingInput' });
    t.list.field('connectOrCreate', { type: 'UserFollowCreateOrConnectWithoutFollowingInput' });
    t.list.field('upsert', { type: 'UserFollowUpsertWithWhereUniqueWithoutFollowingInput' });
    t.field('createMany', { type: 'UserFollowCreateManyFollowingInputEnvelope' });
    t.list.field('set', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('delete', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('connect', { type: 'UserFollowWhereUniqueInput' });
    t.list.field('update', { type: 'UserFollowUpdateWithWhereUniqueWithoutFollowingInput' });
    t.list.field('updateMany', { type: 'UserFollowUpdateManyWithWhereWithoutFollowingInput' });
    t.list.field('deleteMany', { type: 'UserFollowScalarWhereInput' });
  },
});

export const PostUncheckedUpdateManyWithoutLikedByNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutLikedByNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutLikedByInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutLikedByInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutLikedByInput' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutLikedByInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutLikedByInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const GroupUncheckedUpdateManyWithoutMembersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateManyWithoutMembersNestedInput',
  definition(t) {
    t.list.field('create', { type: 'GroupCreateWithoutMembersInput' });
    t.list.field('connectOrCreate', { type: 'GroupCreateOrConnectWithoutMembersInput' });
    t.list.field('upsert', { type: 'GroupUpsertWithWhereUniqueWithoutMembersInput' });
    t.list.field('set', { type: 'GroupWhereUniqueInput' });
    t.list.field('disconnect', { type: 'GroupWhereUniqueInput' });
    t.list.field('delete', { type: 'GroupWhereUniqueInput' });
    t.list.field('connect', { type: 'GroupWhereUniqueInput' });
    t.list.field('update', { type: 'GroupUpdateWithWhereUniqueWithoutMembersInput' });
    t.list.field('updateMany', { type: 'GroupUpdateManyWithWhereWithoutMembersInput' });
    t.list.field('deleteMany', { type: 'GroupScalarWhereInput' });
  },
});

export const UserCreateNestedOneWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutProfileInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutProfileInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutProfileInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' });
  },
});

export const UserUpdateOneRequiredWithoutProfileNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutProfileNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutProfileInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutProfileInput' });
    t.field('upsert', { type: 'UserUpsertWithoutProfileInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutProfileInput' });
  },
});

export const UserCreateNestedOneWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutFollowedByInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutFollowedByInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutFollowedByInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const UserCreateNestedOneWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutFollowingInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutFollowingInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutFollowingInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const UserUpdateOneRequiredWithoutFollowedByNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutFollowedByNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutFollowedByInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutFollowedByInput' });
    t.field('upsert', { type: 'UserUpsertWithoutFollowedByInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutFollowedByInput' });
  },
});

export const UserUpdateOneRequiredWithoutFollowingNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutFollowingNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutFollowingInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutFollowingInput' });
    t.field('upsert', { type: 'UserUpsertWithoutFollowingInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutFollowingInput' });
  },
});

export const UserCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPostsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const CategoryCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutPostsInput' });
    t.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutPostsInput' });
    t.field('connect', { type: 'CategoryWhereUniqueInput' });
  },
});

export const CommentCreateNestedManyWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutPostInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutPostInput' });
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const TagCreateNestedManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateNestedManyWithoutPostsInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' });
    t.list.field('connectOrCreate', { type: 'TagCreateOrConnectWithoutPostsInput' });
    t.list.field('connect', { type: 'TagWhereUniqueInput' });
  },
});

export const UserCreateNestedManyWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedManyWithoutLikedPostsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutLikedPostsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutLikedPostsInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const CommentUncheckedCreateNestedManyWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateNestedManyWithoutPostInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutPostInput' });
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const TagUncheckedCreateNestedManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedCreateNestedManyWithoutPostsInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' });
    t.list.field('connectOrCreate', { type: 'TagCreateOrConnectWithoutPostsInput' });
    t.list.field('connect', { type: 'TagWhereUniqueInput' });
  },
});

export const UserUncheckedCreateNestedManyWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateNestedManyWithoutLikedPostsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutLikedPostsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutLikedPostsInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const EnumStatusFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumStatusFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Status' });
  },
});

export const NullableFloatFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableFloatFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Float' });
    t.field('increment', { type: 'Float' });
    t.field('decrement', { type: 'Float' });
    t.field('multiply', { type: 'Float' });
    t.field('divide', { type: 'Float' });
  },
});

export const UserUpdateOneWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPostsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' });
    t.field('upsert', { type: 'UserUpsertWithoutPostsInput' });
    t.field('disconnect', { type: 'UserWhereInput' });
    t.field('delete', { type: 'UserWhereInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutPostsInput' });
  },
});

export const CategoryUpdateOneWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateOneWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutPostsInput' });
    t.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutPostsInput' });
    t.field('upsert', { type: 'CategoryUpsertWithoutPostsInput' });
    t.field('disconnect', { type: 'CategoryWhereInput' });
    t.field('delete', { type: 'CategoryWhereInput' });
    t.field('connect', { type: 'CategoryWhereUniqueInput' });
    t.field('update', { type: 'CategoryUpdateToOneWithWhereWithoutPostsInput' });
  },
});

export const CommentUpdateManyWithoutPostNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutPostNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutPostInput' });
    t.list.field('upsert', { type: 'CommentUpsertWithWhereUniqueWithoutPostInput' });
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' });
    t.list.field('set', { type: 'CommentWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' });
    t.list.field('delete', { type: 'CommentWhereUniqueInput' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
    t.list.field('update', { type: 'CommentUpdateWithWhereUniqueWithoutPostInput' });
    t.list.field('updateMany', { type: 'CommentUpdateManyWithWhereWithoutPostInput' });
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' });
  },
});

export const TagUpdateManyWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyWithoutPostsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' });
    t.list.field('connectOrCreate', { type: 'TagCreateOrConnectWithoutPostsInput' });
    t.list.field('upsert', { type: 'TagUpsertWithWhereUniqueWithoutPostsInput' });
    t.list.field('set', { type: 'TagWhereUniqueInput' });
    t.list.field('disconnect', { type: 'TagWhereUniqueInput' });
    t.list.field('delete', { type: 'TagWhereUniqueInput' });
    t.list.field('connect', { type: 'TagWhereUniqueInput' });
    t.list.field('update', { type: 'TagUpdateWithWhereUniqueWithoutPostsInput' });
    t.list.field('updateMany', { type: 'TagUpdateManyWithWhereWithoutPostsInput' });
    t.list.field('deleteMany', { type: 'TagScalarWhereInput' });
  },
});

export const UserUpdateManyWithoutLikedPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithoutLikedPostsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutLikedPostsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutLikedPostsInput' });
    t.list.field('upsert', { type: 'UserUpsertWithWhereUniqueWithoutLikedPostsInput' });
    t.list.field('set', { type: 'UserWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' });
    t.list.field('delete', { type: 'UserWhereUniqueInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
    t.list.field('update', { type: 'UserUpdateWithWhereUniqueWithoutLikedPostsInput' });
    t.list.field('updateMany', { type: 'UserUpdateManyWithWhereWithoutLikedPostsInput' });
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' });
  },
});

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' });
    t.field('increment', { type: 'Int' });
    t.field('decrement', { type: 'Int' });
    t.field('multiply', { type: 'Int' });
    t.field('divide', { type: 'Int' });
  },
});

export const CommentUncheckedUpdateManyWithoutPostNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutPostInput' });
    t.list.field('upsert', { type: 'CommentUpsertWithWhereUniqueWithoutPostInput' });
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' });
    t.list.field('set', { type: 'CommentWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' });
    t.list.field('delete', { type: 'CommentWhereUniqueInput' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
    t.list.field('update', { type: 'CommentUpdateWithWhereUniqueWithoutPostInput' });
    t.list.field('updateMany', { type: 'CommentUpdateManyWithWhereWithoutPostInput' });
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' });
  },
});

export const TagUncheckedUpdateManyWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateManyWithoutPostsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' });
    t.list.field('connectOrCreate', { type: 'TagCreateOrConnectWithoutPostsInput' });
    t.list.field('upsert', { type: 'TagUpsertWithWhereUniqueWithoutPostsInput' });
    t.list.field('set', { type: 'TagWhereUniqueInput' });
    t.list.field('disconnect', { type: 'TagWhereUniqueInput' });
    t.list.field('delete', { type: 'TagWhereUniqueInput' });
    t.list.field('connect', { type: 'TagWhereUniqueInput' });
    t.list.field('update', { type: 'TagUpdateWithWhereUniqueWithoutPostsInput' });
    t.list.field('updateMany', { type: 'TagUpdateManyWithWhereWithoutPostsInput' });
    t.list.field('deleteMany', { type: 'TagScalarWhereInput' });
  },
});

export const UserUncheckedUpdateManyWithoutLikedPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutLikedPostsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutLikedPostsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutLikedPostsInput' });
    t.list.field('upsert', { type: 'UserUpsertWithWhereUniqueWithoutLikedPostsInput' });
    t.list.field('set', { type: 'UserWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' });
    t.list.field('delete', { type: 'UserWhereUniqueInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
    t.list.field('update', { type: 'UserUpdateWithWhereUniqueWithoutLikedPostsInput' });
    t.list.field('updateMany', { type: 'UserUpdateManyWithWhereWithoutLikedPostsInput' });
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' });
  },
});

export const UserCreateNestedOneWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutCommentsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCommentsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutCommentsInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const PostCreateNestedOneWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedOneWithoutCommentsInput',
  definition(t) {
    t.field('create', { type: 'PostCreateWithoutCommentsInput' });
    t.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutCommentsInput' });
    t.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const CommentCreateNestedOneWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedOneWithoutRepliesInput',
  definition(t) {
    t.field('create', { type: 'CommentCreateWithoutRepliesInput' });
    t.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutRepliesInput' });
    t.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const CommentCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'CommentCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const CommentUncheckedCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'CommentCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
  },
});

export const UserUpdateOneWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCommentsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutCommentsInput' });
    t.field('upsert', { type: 'UserUpsertWithoutCommentsInput' });
    t.field('disconnect', { type: 'UserWhereInput' });
    t.field('delete', { type: 'UserWhereInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutCommentsInput' });
  },
});

export const PostUpdateOneRequiredWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateOneRequiredWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'PostCreateWithoutCommentsInput' });
    t.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutCommentsInput' });
    t.field('upsert', { type: 'PostUpsertWithoutCommentsInput' });
    t.field('connect', { type: 'PostWhereUniqueInput' });
    t.field('update', { type: 'PostUpdateToOneWithWhereWithoutCommentsInput' });
  },
});

export const CommentUpdateOneWithoutRepliesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateOneWithoutRepliesNestedInput',
  definition(t) {
    t.field('create', { type: 'CommentCreateWithoutRepliesInput' });
    t.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutRepliesInput' });
    t.field('upsert', { type: 'CommentUpsertWithoutRepliesInput' });
    t.field('disconnect', { type: 'CommentWhereInput' });
    t.field('delete', { type: 'CommentWhereInput' });
    t.field('connect', { type: 'CommentWhereUniqueInput' });
    t.field('update', { type: 'CommentUpdateToOneWithWhereWithoutRepliesInput' });
  },
});

export const CommentUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'CommentUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'CommentCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'CommentWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' });
    t.list.field('delete', { type: 'CommentWhereUniqueInput' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
    t.list.field('update', { type: 'CommentUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'CommentUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' });
  },
});

export const CommentUncheckedUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CommentCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'CommentUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'CommentCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'CommentWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' });
    t.list.field('delete', { type: 'CommentWhereUniqueInput' });
    t.list.field('connect', { type: 'CommentWhereUniqueInput' });
    t.list.field('update', { type: 'CommentUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'CommentUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' });
  },
});

export const PostCreateNestedManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutCategoryInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutCategoryInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutCategoryInput' });
    t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const CategoryCreateNestedOneWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateNestedOneWithoutChildrenInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutChildrenInput' });
    t.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutChildrenInput' });
    t.field('connect', { type: 'CategoryWhereUniqueInput' });
  },
});

export const CategoryCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'CategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'CategoryCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'CategoryWhereUniqueInput' });
  },
});

export const PostUncheckedCreateNestedManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutCategoryInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutCategoryInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutCategoryInput' });
    t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const CategoryUncheckedCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'CategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'CategoryCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'CategoryWhereUniqueInput' });
  },
});

export const PostUpdateManyWithoutCategoryNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutCategoryNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutCategoryInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutCategoryInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutCategoryInput' });
    t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutCategoryInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutCategoryInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const CategoryUpdateOneWithoutChildrenNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateOneWithoutChildrenNestedInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutChildrenInput' });
    t.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutChildrenInput' });
    t.field('upsert', { type: 'CategoryUpsertWithoutChildrenInput' });
    t.field('disconnect', { type: 'CategoryWhereInput' });
    t.field('delete', { type: 'CategoryWhereInput' });
    t.field('connect', { type: 'CategoryWhereUniqueInput' });
    t.field('update', { type: 'CategoryUpdateToOneWithWhereWithoutChildrenInput' });
  },
});

export const CategoryUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'CategoryUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'CategoryCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'CategoryWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CategoryWhereUniqueInput' });
    t.list.field('delete', { type: 'CategoryWhereUniqueInput' });
    t.list.field('connect', { type: 'CategoryWhereUniqueInput' });
    t.list.field('update', { type: 'CategoryUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'CategoryUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'CategoryScalarWhereInput' });
  },
});

export const PostUncheckedUpdateManyWithoutCategoryNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutCategoryNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutCategoryInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutCategoryInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutCategoryInput' });
    t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutCategoryInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutCategoryInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const CategoryUncheckedUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'CategoryCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'CategoryUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'CategoryCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'CategoryWhereUniqueInput' });
    t.list.field('disconnect', { type: 'CategoryWhereUniqueInput' });
    t.list.field('delete', { type: 'CategoryWhereUniqueInput' });
    t.list.field('connect', { type: 'CategoryWhereUniqueInput' });
    t.list.field('update', { type: 'CategoryUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'CategoryUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'CategoryScalarWhereInput' });
  },
});

export const PostCreateNestedManyWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutTagsInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutTagsInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const PostUncheckedCreateNestedManyWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutTagsInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutTagsInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
  },
});

export const PostUpdateManyWithoutTagsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutTagsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutTagsInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutTagsInput' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutTagsInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutTagsInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const PostUncheckedUpdateManyWithoutTagsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutTagsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' });
    t.list.field('connectOrCreate', { type: 'PostCreateOrConnectWithoutTagsInput' });
    t.list.field('upsert', { type: 'PostUpsertWithWhereUniqueWithoutTagsInput' });
    t.list.field('set', { type: 'PostWhereUniqueInput' });
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' });
    t.list.field('delete', { type: 'PostWhereUniqueInput' });
    t.list.field('connect', { type: 'PostWhereUniqueInput' });
    t.list.field('update', { type: 'PostUpdateWithWhereUniqueWithoutTagsInput' });
    t.list.field('updateMany', { type: 'PostUpdateManyWithWhereWithoutTagsInput' });
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' });
  },
});

export const BrandCreateNestedOneWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandCreateNestedOneWithoutProductsInput',
  definition(t) {
    t.field('create', { type: 'BrandCreateWithoutProductsInput' });
    t.field('connectOrCreate', { type: 'BrandCreateOrConnectWithoutProductsInput' });
    t.field('connect', { type: 'BrandWhereUniqueInput' });
  },
});

export const OrderItemCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutProductInput' });
    t.field('createMany', { type: 'OrderItemCreateManyProductInputEnvelope' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
  },
});

export const ReviewCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutProductInput' });
    t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
  },
});

export const ProductCategoryCreateNestedManyWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateNestedManyWithoutProductsInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutProductsInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutProductsInput' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
  },
});

export const OrderItemUncheckedCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutProductInput' });
    t.field('createMany', { type: 'OrderItemCreateManyProductInputEnvelope' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
  },
});

export const ReviewUncheckedCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutProductInput' });
    t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
  },
});

export const ProductCategoryUncheckedCreateNestedManyWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedCreateNestedManyWithoutProductsInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutProductsInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutProductsInput' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
  },
});

export const BrandUpdateOneWithoutProductsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUpdateOneWithoutProductsNestedInput',
  definition(t) {
    t.field('create', { type: 'BrandCreateWithoutProductsInput' });
    t.field('connectOrCreate', { type: 'BrandCreateOrConnectWithoutProductsInput' });
    t.field('upsert', { type: 'BrandUpsertWithoutProductsInput' });
    t.field('disconnect', { type: 'BrandWhereInput' });
    t.field('delete', { type: 'BrandWhereInput' });
    t.field('connect', { type: 'BrandWhereUniqueInput' });
    t.field('update', { type: 'BrandUpdateToOneWithWhereWithoutProductsInput' });
  },
});

export const OrderItemUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutProductInput' });
    t.list.field('upsert', { type: 'OrderItemUpsertWithWhereUniqueWithoutProductInput' });
    t.field('createMany', { type: 'OrderItemCreateManyProductInputEnvelope' });
    t.list.field('set', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('disconnect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('delete', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('update', { type: 'OrderItemUpdateWithWhereUniqueWithoutProductInput' });
    t.list.field('updateMany', { type: 'OrderItemUpdateManyWithWhereWithoutProductInput' });
    t.list.field('deleteMany', { type: 'OrderItemScalarWhereInput' });
  },
});

export const ReviewUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutProductInput' });
    t.list.field('upsert', { type: 'ReviewUpsertWithWhereUniqueWithoutProductInput' });
    t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' });
    t.list.field('set', { type: 'ReviewWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('update', { type: 'ReviewUpdateWithWhereUniqueWithoutProductInput' });
    t.list.field('updateMany', { type: 'ReviewUpdateManyWithWhereWithoutProductInput' });
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' });
  },
});

export const ProductCategoryUpdateManyWithoutProductsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateManyWithoutProductsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutProductsInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutProductsInput' });
    t.list.field('upsert', { type: 'ProductCategoryUpsertWithWhereUniqueWithoutProductsInput' });
    t.list.field('set', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('update', { type: 'ProductCategoryUpdateWithWhereUniqueWithoutProductsInput' });
    t.list.field('updateMany', { type: 'ProductCategoryUpdateManyWithWhereWithoutProductsInput' });
    t.list.field('deleteMany', { type: 'ProductCategoryScalarWhereInput' });
  },
});

export const OrderItemUncheckedUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutProductInput' });
    t.list.field('upsert', { type: 'OrderItemUpsertWithWhereUniqueWithoutProductInput' });
    t.field('createMany', { type: 'OrderItemCreateManyProductInputEnvelope' });
    t.list.field('set', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('disconnect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('delete', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('update', { type: 'OrderItemUpdateWithWhereUniqueWithoutProductInput' });
    t.list.field('updateMany', { type: 'OrderItemUpdateManyWithWhereWithoutProductInput' });
    t.list.field('deleteMany', { type: 'OrderItemScalarWhereInput' });
  },
});

export const ReviewUncheckedUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutProductInput' });
    t.list.field('connectOrCreate', { type: 'ReviewCreateOrConnectWithoutProductInput' });
    t.list.field('upsert', { type: 'ReviewUpsertWithWhereUniqueWithoutProductInput' });
    t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' });
    t.list.field('set', { type: 'ReviewWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' });
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' });
    t.list.field('update', { type: 'ReviewUpdateWithWhereUniqueWithoutProductInput' });
    t.list.field('updateMany', { type: 'ReviewUpdateManyWithWhereWithoutProductInput' });
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' });
  },
});

export const ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutProductsInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutProductsInput' });
    t.list.field('upsert', { type: 'ProductCategoryUpsertWithWhereUniqueWithoutProductsInput' });
    t.list.field('set', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('update', { type: 'ProductCategoryUpdateWithWhereUniqueWithoutProductsInput' });
    t.list.field('updateMany', { type: 'ProductCategoryUpdateManyWithWhereWithoutProductsInput' });
    t.list.field('deleteMany', { type: 'ProductCategoryScalarWhereInput' });
  },
});

export const ProductCreateNestedManyWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateNestedManyWithoutBrandInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutBrandInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutBrandInput' });
    t.field('createMany', { type: 'ProductCreateManyBrandInputEnvelope' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
  },
});

export const ProductUncheckedCreateNestedManyWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateNestedManyWithoutBrandInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutBrandInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutBrandInput' });
    t.field('createMany', { type: 'ProductCreateManyBrandInputEnvelope' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
  },
});

export const ProductUpdateManyWithoutBrandNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyWithoutBrandNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutBrandInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutBrandInput' });
    t.list.field('upsert', { type: 'ProductUpsertWithWhereUniqueWithoutBrandInput' });
    t.field('createMany', { type: 'ProductCreateManyBrandInputEnvelope' });
    t.list.field('set', { type: 'ProductWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
    t.list.field('update', { type: 'ProductUpdateWithWhereUniqueWithoutBrandInput' });
    t.list.field('updateMany', { type: 'ProductUpdateManyWithWhereWithoutBrandInput' });
    t.list.field('deleteMany', { type: 'ProductScalarWhereInput' });
  },
});

export const ProductUncheckedUpdateManyWithoutBrandNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyWithoutBrandNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutBrandInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutBrandInput' });
    t.list.field('upsert', { type: 'ProductUpsertWithWhereUniqueWithoutBrandInput' });
    t.field('createMany', { type: 'ProductCreateManyBrandInputEnvelope' });
    t.list.field('set', { type: 'ProductWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
    t.list.field('update', { type: 'ProductUpdateWithWhereUniqueWithoutBrandInput' });
    t.list.field('updateMany', { type: 'ProductUpdateManyWithWhereWithoutBrandInput' });
    t.list.field('deleteMany', { type: 'ProductScalarWhereInput' });
  },
});

export const ProductCategoryCreateNestedOneWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateNestedOneWithoutChildrenInput',
  definition(t) {
    t.field('create', { type: 'ProductCategoryCreateWithoutChildrenInput' });
    t.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutChildrenInput' });
    t.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
  },
});

export const ProductCategoryCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'ProductCategoryCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
  },
});

export const ProductCreateNestedManyWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateNestedManyWithoutProductCategoriesInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutProductCategoriesInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutProductCategoriesInput' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
  },
});

export const ProductCategoryUncheckedCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'ProductCategoryCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
  },
});

export const ProductUncheckedCreateNestedManyWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateNestedManyWithoutProductCategoriesInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutProductCategoriesInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutProductCategoriesInput' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
  },
});

export const ProductCategoryUpdateOneWithoutChildrenNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateOneWithoutChildrenNestedInput',
  definition(t) {
    t.field('create', { type: 'ProductCategoryCreateWithoutChildrenInput' });
    t.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutChildrenInput' });
    t.field('upsert', { type: 'ProductCategoryUpsertWithoutChildrenInput' });
    t.field('disconnect', { type: 'ProductCategoryWhereInput' });
    t.field('delete', { type: 'ProductCategoryWhereInput' });
    t.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
    t.field('update', { type: 'ProductCategoryUpdateToOneWithWhereWithoutChildrenInput' });
  },
});

export const ProductCategoryUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'ProductCategoryUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'ProductCategoryCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('update', { type: 'ProductCategoryUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'ProductCategoryUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'ProductCategoryScalarWhereInput' });
  },
});

export const ProductUpdateManyWithoutProductCategoriesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyWithoutProductCategoriesNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutProductCategoriesInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutProductCategoriesInput' });
    t.list.field('upsert', { type: 'ProductUpsertWithWhereUniqueWithoutProductCategoriesInput' });
    t.list.field('set', { type: 'ProductWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
    t.list.field('update', { type: 'ProductUpdateWithWhereUniqueWithoutProductCategoriesInput' });
    t.list.field('updateMany', { type: 'ProductUpdateManyWithWhereWithoutProductCategoriesInput' });
    t.list.field('deleteMany', { type: 'ProductScalarWhereInput' });
  },
});

export const ProductCategoryUncheckedUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCategoryCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'ProductCategoryCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'ProductCategoryUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'ProductCategoryCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductCategoryWhereUniqueInput' });
    t.list.field('update', { type: 'ProductCategoryUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'ProductCategoryUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'ProductCategoryScalarWhereInput' });
  },
});

export const ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProductCreateWithoutProductCategoriesInput' });
    t.list.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutProductCategoriesInput' });
    t.list.field('upsert', { type: 'ProductUpsertWithWhereUniqueWithoutProductCategoriesInput' });
    t.list.field('set', { type: 'ProductWhereUniqueInput' });
    t.list.field('disconnect', { type: 'ProductWhereUniqueInput' });
    t.list.field('delete', { type: 'ProductWhereUniqueInput' });
    t.list.field('connect', { type: 'ProductWhereUniqueInput' });
    t.list.field('update', { type: 'ProductUpdateWithWhereUniqueWithoutProductCategoriesInput' });
    t.list.field('updateMany', { type: 'ProductUpdateManyWithWhereWithoutProductCategoriesInput' });
    t.list.field('deleteMany', { type: 'ProductScalarWhereInput' });
  },
});

export const UserCreateNestedOneWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutOrdersInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutOrdersInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const OrderItemCreateNestedManyWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateNestedManyWithoutOrderInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutOrderInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutOrderInput' });
    t.field('createMany', { type: 'OrderItemCreateManyOrderInputEnvelope' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
  },
});

export const OrderItemUncheckedCreateNestedManyWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedCreateNestedManyWithoutOrderInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutOrderInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutOrderInput' });
    t.field('createMany', { type: 'OrderItemCreateManyOrderInputEnvelope' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
  },
});

export const UserUpdateOneWithoutOrdersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutOrdersNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutOrdersInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutOrdersInput' });
    t.field('upsert', { type: 'UserUpsertWithoutOrdersInput' });
    t.field('disconnect', { type: 'UserWhereInput' });
    t.field('delete', { type: 'UserWhereInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutOrdersInput' });
  },
});

export const OrderItemUpdateManyWithoutOrderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateManyWithoutOrderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutOrderInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutOrderInput' });
    t.list.field('upsert', { type: 'OrderItemUpsertWithWhereUniqueWithoutOrderInput' });
    t.field('createMany', { type: 'OrderItemCreateManyOrderInputEnvelope' });
    t.list.field('set', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('disconnect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('delete', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('update', { type: 'OrderItemUpdateWithWhereUniqueWithoutOrderInput' });
    t.list.field('updateMany', { type: 'OrderItemUpdateManyWithWhereWithoutOrderInput' });
    t.list.field('deleteMany', { type: 'OrderItemScalarWhereInput' });
  },
});

export const OrderItemUncheckedUpdateManyWithoutOrderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateManyWithoutOrderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderItemCreateWithoutOrderInput' });
    t.list.field('connectOrCreate', { type: 'OrderItemCreateOrConnectWithoutOrderInput' });
    t.list.field('upsert', { type: 'OrderItemUpsertWithWhereUniqueWithoutOrderInput' });
    t.field('createMany', { type: 'OrderItemCreateManyOrderInputEnvelope' });
    t.list.field('set', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('disconnect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('delete', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('connect', { type: 'OrderItemWhereUniqueInput' });
    t.list.field('update', { type: 'OrderItemUpdateWithWhereUniqueWithoutOrderInput' });
    t.list.field('updateMany', { type: 'OrderItemUpdateManyWithWhereWithoutOrderInput' });
    t.list.field('deleteMany', { type: 'OrderItemScalarWhereInput' });
  },
});

export const OrderCreateNestedOneWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateNestedOneWithoutItemsInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutItemsInput' });
    t.field('connectOrCreate', { type: 'OrderCreateOrConnectWithoutItemsInput' });
    t.field('connect', { type: 'OrderWhereUniqueInput' });
  },
});

export const ProductCreateNestedOneWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateNestedOneWithoutOrderItemsInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutOrderItemsInput' });
    t.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutOrderItemsInput' });
    t.field('connect', { type: 'ProductWhereUniqueInput' });
  },
});

export const OrderUpdateOneRequiredWithoutItemsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateOneRequiredWithoutItemsNestedInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutItemsInput' });
    t.field('connectOrCreate', { type: 'OrderCreateOrConnectWithoutItemsInput' });
    t.field('upsert', { type: 'OrderUpsertWithoutItemsInput' });
    t.field('connect', { type: 'OrderWhereUniqueInput' });
    t.field('update', { type: 'OrderUpdateToOneWithWhereWithoutItemsInput' });
  },
});

export const ProductUpdateOneRequiredWithoutOrderItemsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateOneRequiredWithoutOrderItemsNestedInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutOrderItemsInput' });
    t.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutOrderItemsInput' });
    t.field('upsert', { type: 'ProductUpsertWithoutOrderItemsInput' });
    t.field('connect', { type: 'ProductWhereUniqueInput' });
    t.field('update', { type: 'ProductUpdateToOneWithWhereWithoutOrderItemsInput' });
  },
});

export const UserCreateNestedOneWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReviewsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutReviewsInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const ProductCreateNestedOneWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateNestedOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutReviewsInput' });
    t.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutReviewsInput' });
    t.field('connect', { type: 'ProductWhereUniqueInput' });
  },
});

export const UserUpdateOneWithoutReviewsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutReviewsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReviewsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutReviewsInput' });
    t.field('upsert', { type: 'UserUpsertWithoutReviewsInput' });
    t.field('disconnect', { type: 'UserWhereInput' });
    t.field('delete', { type: 'UserWhereInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutReviewsInput' });
  },
});

export const ProductUpdateOneRequiredWithoutReviewsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateOneRequiredWithoutReviewsNestedInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutReviewsInput' });
    t.field('connectOrCreate', { type: 'ProductCreateOrConnectWithoutReviewsInput' });
    t.field('upsert', { type: 'ProductUpsertWithoutReviewsInput' });
    t.field('connect', { type: 'ProductWhereUniqueInput' });
    t.field('update', { type: 'ProductUpdateToOneWithWhereWithoutReviewsInput' });
  },
});

export const UserCreateNestedOneWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutSentMessagesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutSentMessagesInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutSentMessagesInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const UserCreateNestedOneWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutReceivedMessagesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReceivedMessagesInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutReceivedMessagesInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const EnumPriorityFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumPriorityFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Priority' });
  },
});

export const UserUpdateOneWithoutSentMessagesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutSentMessagesNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutSentMessagesInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutSentMessagesInput' });
    t.field('upsert', { type: 'UserUpsertWithoutSentMessagesInput' });
    t.field('disconnect', { type: 'UserWhereInput' });
    t.field('delete', { type: 'UserWhereInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutSentMessagesInput' });
  },
});

export const UserUpdateOneWithoutReceivedMessagesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutReceivedMessagesNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReceivedMessagesInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutReceivedMessagesInput' });
    t.field('upsert', { type: 'UserUpsertWithoutReceivedMessagesInput' });
    t.field('disconnect', { type: 'UserWhereInput' });
    t.field('delete', { type: 'UserWhereInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutReceivedMessagesInput' });
  },
});

export const UserCreateNestedManyWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedManyWithoutGroupsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutGroupsInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const UserUncheckedCreateNestedManyWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateNestedManyWithoutGroupsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutGroupsInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
  },
});

export const UserUpdateManyWithoutGroupsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithoutGroupsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutGroupsInput' });
    t.list.field('upsert', { type: 'UserUpsertWithWhereUniqueWithoutGroupsInput' });
    t.list.field('set', { type: 'UserWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' });
    t.list.field('delete', { type: 'UserWhereUniqueInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
    t.list.field('update', { type: 'UserUpdateWithWhereUniqueWithoutGroupsInput' });
    t.list.field('updateMany', { type: 'UserUpdateManyWithWhereWithoutGroupsInput' });
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' });
  },
});

export const UserUncheckedUpdateManyWithoutGroupsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutGroupsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' });
    t.list.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutGroupsInput' });
    t.list.field('upsert', { type: 'UserUpsertWithWhereUniqueWithoutGroupsInput' });
    t.list.field('set', { type: 'UserWhereUniqueInput' });
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' });
    t.list.field('delete', { type: 'UserWhereUniqueInput' });
    t.list.field('connect', { type: 'UserWhereUniqueInput' });
    t.list.field('update', { type: 'UserUpdateWithWhereUniqueWithoutGroupsInput' });
    t.list.field('updateMany', { type: 'UserUpdateManyWithWhereWithoutGroupsInput' });
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' });
  },
});

export const TaskCreateNestedManyWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateNestedManyWithoutProjectInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutProjectInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutProjectInput' });
    t.field('createMany', { type: 'TaskCreateManyProjectInputEnvelope' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
  },
});

export const TaskUncheckedCreateNestedManyWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateNestedManyWithoutProjectInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutProjectInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutProjectInput' });
    t.field('createMany', { type: 'TaskCreateManyProjectInputEnvelope' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
  },
});

export const TaskUpdateManyWithoutProjectNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyWithoutProjectNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutProjectInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutProjectInput' });
    t.list.field('upsert', { type: 'TaskUpsertWithWhereUniqueWithoutProjectInput' });
    t.field('createMany', { type: 'TaskCreateManyProjectInputEnvelope' });
    t.list.field('set', { type: 'TaskWhereUniqueInput' });
    t.list.field('disconnect', { type: 'TaskWhereUniqueInput' });
    t.list.field('delete', { type: 'TaskWhereUniqueInput' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
    t.list.field('update', { type: 'TaskUpdateWithWhereUniqueWithoutProjectInput' });
    t.list.field('updateMany', { type: 'TaskUpdateManyWithWhereWithoutProjectInput' });
    t.list.field('deleteMany', { type: 'TaskScalarWhereInput' });
  },
});

export const TaskUncheckedUpdateManyWithoutProjectNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyWithoutProjectNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutProjectInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutProjectInput' });
    t.list.field('upsert', { type: 'TaskUpsertWithWhereUniqueWithoutProjectInput' });
    t.field('createMany', { type: 'TaskCreateManyProjectInputEnvelope' });
    t.list.field('set', { type: 'TaskWhereUniqueInput' });
    t.list.field('disconnect', { type: 'TaskWhereUniqueInput' });
    t.list.field('delete', { type: 'TaskWhereUniqueInput' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
    t.list.field('update', { type: 'TaskUpdateWithWhereUniqueWithoutProjectInput' });
    t.list.field('updateMany', { type: 'TaskUpdateManyWithWhereWithoutProjectInput' });
    t.list.field('deleteMany', { type: 'TaskScalarWhereInput' });
  },
});

export const ProjectCreateNestedOneWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectCreateNestedOneWithoutTasksInput',
  definition(t) {
    t.field('create', { type: 'ProjectCreateWithoutTasksInput' });
    t.field('connectOrCreate', { type: 'ProjectCreateOrConnectWithoutTasksInput' });
    t.field('connect', { type: 'ProjectWhereUniqueInput' });
  },
});

export const TaskCreateNestedOneWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateNestedOneWithoutSubtasksInput',
  definition(t) {
    t.field('create', { type: 'TaskCreateWithoutSubtasksInput' });
    t.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutSubtasksInput' });
    t.field('connect', { type: 'TaskWhereUniqueInput' });
  },
});

export const TaskCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'TaskCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
  },
});

export const TaskUncheckedCreateNestedManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateNestedManyWithoutParentInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutParentInput' });
    t.field('createMany', { type: 'TaskCreateManyParentInputEnvelope' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
  },
});

export const ProjectUpdateOneWithoutTasksNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUpdateOneWithoutTasksNestedInput',
  definition(t) {
    t.field('create', { type: 'ProjectCreateWithoutTasksInput' });
    t.field('connectOrCreate', { type: 'ProjectCreateOrConnectWithoutTasksInput' });
    t.field('upsert', { type: 'ProjectUpsertWithoutTasksInput' });
    t.field('disconnect', { type: 'ProjectWhereInput' });
    t.field('delete', { type: 'ProjectWhereInput' });
    t.field('connect', { type: 'ProjectWhereUniqueInput' });
    t.field('update', { type: 'ProjectUpdateToOneWithWhereWithoutTasksInput' });
  },
});

export const TaskUpdateOneWithoutSubtasksNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateOneWithoutSubtasksNestedInput',
  definition(t) {
    t.field('create', { type: 'TaskCreateWithoutSubtasksInput' });
    t.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutSubtasksInput' });
    t.field('upsert', { type: 'TaskUpsertWithoutSubtasksInput' });
    t.field('disconnect', { type: 'TaskWhereInput' });
    t.field('delete', { type: 'TaskWhereInput' });
    t.field('connect', { type: 'TaskWhereUniqueInput' });
    t.field('update', { type: 'TaskUpdateToOneWithWhereWithoutSubtasksInput' });
  },
});

export const TaskUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'TaskUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'TaskCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'TaskWhereUniqueInput' });
    t.list.field('disconnect', { type: 'TaskWhereUniqueInput' });
    t.list.field('delete', { type: 'TaskWhereUniqueInput' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
    t.list.field('update', { type: 'TaskUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'TaskUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'TaskScalarWhereInput' });
  },
});

export const TaskUncheckedUpdateManyWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyWithoutParentNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutParentInput' });
    t.list.field('connectOrCreate', { type: 'TaskCreateOrConnectWithoutParentInput' });
    t.list.field('upsert', { type: 'TaskUpsertWithWhereUniqueWithoutParentInput' });
    t.field('createMany', { type: 'TaskCreateManyParentInputEnvelope' });
    t.list.field('set', { type: 'TaskWhereUniqueInput' });
    t.list.field('disconnect', { type: 'TaskWhereUniqueInput' });
    t.list.field('delete', { type: 'TaskWhereUniqueInput' });
    t.list.field('connect', { type: 'TaskWhereUniqueInput' });
    t.list.field('update', { type: 'TaskUpdateWithWhereUniqueWithoutParentInput' });
    t.list.field('updateMany', { type: 'TaskUpdateManyWithWhereWithoutParentInput' });
    t.list.field('deleteMany', { type: 'TaskScalarWhereInput' });
  },
});

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntFilter' });
  },
});

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringFilter' });
  },
});

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableFilter' });
  },
});

export const NestedEnumRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumRoleFilter',
  definition(t) {
    t.field('equals', { type: 'Role' });
    t.list.field('in', { type: 'Role' });
    t.list.field('notIn', { type: 'Role' });
    t.field('not', { type: 'NestedEnumRoleFilter' });
  },
});

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolFilter' });
  },
});

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatFilter' });
  },
});

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeFilter' });
  },
});

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedFloatFilter' });
    t.field('_sum', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedIntFilter' });
    t.field('_max', { type: 'NestedIntFilter' });
  },
});

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedStringFilter' });
    t.field('_max', { type: 'NestedStringFilter' });
  },
});

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' });
    t.list.field('in', { type: 'String' });
    t.list.field('notIn', { type: 'String' });
    t.field('lt', { type: 'String' });
    t.field('lte', { type: 'String' });
    t.field('gt', { type: 'String' });
    t.field('gte', { type: 'String' });
    t.field('contains', { type: 'String' });
    t.field('startsWith', { type: 'String' });
    t.field('endsWith', { type: 'String' });
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedStringNullableFilter' });
    t.field('_max', { type: 'NestedStringNullableFilter' });
  },
});

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableFilter' });
  },
});

export const NestedEnumRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Role' });
    t.list.field('in', { type: 'Role' });
    t.list.field('notIn', { type: 'Role' });
    t.field('not', { type: 'NestedEnumRoleWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumRoleFilter' });
    t.field('_max', { type: 'NestedEnumRoleFilter' });
  },
});

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' });
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedBoolFilter' });
    t.field('_max', { type: 'NestedBoolFilter' });
  },
});

export const NestedFloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_avg', { type: 'NestedFloatFilter' });
    t.field('_sum', { type: 'NestedFloatFilter' });
    t.field('_min', { type: 'NestedFloatFilter' });
    t.field('_max', { type: 'NestedFloatFilter' });
  },
});

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedDateTimeFilter' });
    t.field('_max', { type: 'NestedDateTimeFilter' });
  },
});

export const NestedDateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const NestedDateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' });
    t.list.field('in', { type: 'DateTime' });
    t.list.field('notIn', { type: 'DateTime' });
    t.field('lt', { type: 'DateTime' });
    t.field('lte', { type: 'DateTime' });
    t.field('gt', { type: 'DateTime' });
    t.field('gte', { type: 'DateTime' });
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedDateTimeNullableFilter' });
    t.field('_max', { type: 'NestedDateTimeNullableFilter' });
  },
});

export const NestedEnumStatusFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumStatusFilter',
  definition(t) {
    t.field('equals', { type: 'Status' });
    t.list.field('in', { type: 'Status' });
    t.list.field('notIn', { type: 'Status' });
    t.field('not', { type: 'NestedEnumStatusFilter' });
  },
});

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatNullableFilter' });
  },
});

export const NestedEnumStatusWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumStatusWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Status' });
    t.list.field('in', { type: 'Status' });
    t.list.field('notIn', { type: 'Status' });
    t.field('not', { type: 'NestedEnumStatusWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumStatusFilter' });
    t.field('_max', { type: 'NestedEnumStatusFilter' });
  },
});

export const NestedFloatNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' });
    t.list.field('in', { type: 'Float' });
    t.list.field('notIn', { type: 'Float' });
    t.field('lt', { type: 'Float' });
    t.field('lte', { type: 'Float' });
    t.field('gt', { type: 'Float' });
    t.field('gte', { type: 'Float' });
    t.field('not', { type: 'NestedFloatNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedFloatNullableFilter' });
    t.field('_sum', { type: 'NestedFloatNullableFilter' });
    t.field('_min', { type: 'NestedFloatNullableFilter' });
    t.field('_max', { type: 'NestedFloatNullableFilter' });
  },
});

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' });
    t.list.field('in', { type: 'Int' });
    t.list.field('notIn', { type: 'Int' });
    t.field('lt', { type: 'Int' });
    t.field('lte', { type: 'Int' });
    t.field('gt', { type: 'Int' });
    t.field('gte', { type: 'Int' });
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_avg', { type: 'NestedFloatNullableFilter' });
    t.field('_sum', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedIntNullableFilter' });
    t.field('_max', { type: 'NestedIntNullableFilter' });
  },
});

export const NestedEnumPriorityFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumPriorityFilter',
  definition(t) {
    t.field('equals', { type: 'Priority' });
    t.list.field('in', { type: 'Priority' });
    t.list.field('notIn', { type: 'Priority' });
    t.field('not', { type: 'NestedEnumPriorityFilter' });
  },
});

export const NestedEnumPriorityWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumPriorityWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Priority' });
    t.list.field('in', { type: 'Priority' });
    t.list.field('notIn', { type: 'Priority' });
    t.field('not', { type: 'NestedEnumPriorityWithAggregatesFilter' });
    t.field('_count', { type: 'NestedIntFilter' });
    t.field('_min', { type: 'NestedEnumPriorityFilter' });
    t.field('_max', { type: 'NestedEnumPriorityFilter' });
  },
});

export const ProfileCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateWithoutUserInput',
  definition(t) {
    t.field('bio', { type: 'String' });
    t.field('avatar', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('location', { type: 'String' });
    t.field('birthDate', { type: 'DateTime' });
    t.field('phone', { type: 'String' });
  },
});

export const ProfileUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('bio', { type: 'String' });
    t.field('avatar', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('location', { type: 'String' });
    t.field('birthDate', { type: 'DateTime' });
    t.field('phone', { type: 'String' });
  },
});

export const ProfileCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProfileWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProfileCreateWithoutUserInput' });
  },
});

export const PostCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('categoryId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserUncheckedCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutAuthorInput' });
  },
});

export const PostCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyAuthorInput' });
  },
});

export const CommentCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' });
    t.field('parent', { type: 'CommentCreateNestedOneWithoutRepliesInput' });
    t.field('replies', { type: 'CommentCreateNestedManyWithoutParentInput' });
  },
});

export const CommentUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('postId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('replies', { type: 'CommentUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CommentCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutAuthorInput' });
  },
});

export const CommentCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyAuthorInput' });
  },
});

export const OrderCreateWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateWithoutCustomerInput',
  definition(t) {
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('items', { type: 'OrderItemCreateNestedManyWithoutOrderInput' });
  },
});

export const OrderUncheckedCreateWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateWithoutCustomerInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('items', { type: 'OrderItemUncheckedCreateNestedManyWithoutOrderInput' });
  },
});

export const OrderCreateOrConnectWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateOrConnectWithoutCustomerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' });
    t.nonNull.field('create', { type: 'OrderCreateWithoutCustomerInput' });
  },
});

export const OrderCreateManyCustomerInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateManyCustomerInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'OrderCreateManyCustomerInput' });
  },
});

export const ReviewCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('product', { type: 'ProductCreateNestedOneWithoutReviewsInput' });
  },
});

export const ReviewUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const ReviewCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ReviewCreateWithoutAuthorInput' });
  },
});

export const ReviewCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ReviewCreateManyAuthorInput' });
  },
});

export const MessageCreateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateWithoutSenderInput',
  definition(t) {
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('receiver', { type: 'UserCreateNestedOneWithoutReceivedMessagesInput' });
  },
});

export const MessageUncheckedCreateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('receiverId', { type: 'Int' });
  },
});

export const MessageCreateOrConnectWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateOrConnectWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' });
    t.nonNull.field('create', { type: 'MessageCreateWithoutSenderInput' });
  },
});

export const MessageCreateManySenderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManySenderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'MessageCreateManySenderInput' });
  },
});

export const MessageCreateWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateWithoutReceiverInput',
  definition(t) {
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('sender', { type: 'UserCreateNestedOneWithoutSentMessagesInput' });
  },
});

export const MessageUncheckedCreateWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateWithoutReceiverInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('senderId', { type: 'Int' });
  },
});

export const MessageCreateOrConnectWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateOrConnectWithoutReceiverInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' });
    t.nonNull.field('create', { type: 'MessageCreateWithoutReceiverInput' });
  },
});

export const MessageCreateManyReceiverInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyReceiverInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'MessageCreateManyReceiverInput' });
  },
});

export const UserFollowCreateWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateWithoutFollowerInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' });
    t.nonNull.field('following', { type: 'UserCreateNestedOneWithoutFollowingInput' });
  },
});

export const UserFollowUncheckedCreateWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedCreateWithoutFollowerInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UserFollowCreateOrConnectWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateOrConnectWithoutFollowerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserFollowCreateWithoutFollowerInput' });
  },
});

export const UserFollowCreateManyFollowerInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateManyFollowerInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'UserFollowCreateManyFollowerInput' });
  },
});

export const UserFollowCreateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateWithoutFollowingInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' });
    t.nonNull.field('follower', { type: 'UserCreateNestedOneWithoutFollowedByInput' });
  },
});

export const UserFollowUncheckedCreateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedCreateWithoutFollowingInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('followerId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UserFollowCreateOrConnectWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateOrConnectWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserFollowCreateWithoutFollowingInput' });
  },
});

export const UserFollowCreateManyFollowingInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateManyFollowingInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'UserFollowCreateManyFollowingInput' });
  },
});

export const PostCreateWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutLikedByInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
  },
});

export const PostUncheckedCreateWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutLikedByInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('categoryId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
  },
});

export const PostCreateOrConnectWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutLikedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutLikedByInput' });
  },
});

export const GroupCreateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateWithoutMembersInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const GroupUncheckedCreateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedCreateWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const GroupCreateOrConnectWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateOrConnectWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'GroupWhereUniqueInput' });
    t.nonNull.field('create', { type: 'GroupCreateWithoutMembersInput' });
  },
});

export const ProfileUpsertWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpsertWithoutUserInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProfileUpdateWithoutUserInput' });
    t.nonNull.field('create', { type: 'ProfileCreateWithoutUserInput' });
    t.field('where', { type: 'ProfileWhereInput' });
  },
});

export const ProfileUpdateToOneWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateToOneWithWhereWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'ProfileWhereInput' });
    t.nonNull.field('data', { type: 'ProfileUpdateWithoutUserInput' });
  },
});

export const ProfileUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateWithoutUserInput',
  definition(t) {
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('birthDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' });
  },
});

export const ProfileUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('location', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('birthDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' });
  },
});

export const PostUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('update', { type: 'PostUpdateWithoutAuthorInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutAuthorInput' });
  },
});

export const PostUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('data', { type: 'PostUpdateWithoutAuthorInput' });
  },
});

export const PostUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' });
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' });
  },
});

export const PostScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereInput' });
    t.list.field('OR', { type: 'PostScalarWhereInput' });
    t.list.field('NOT', { type: 'PostScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('title', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('excerpt', { type: 'StringNullableFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('featured', { type: 'BoolFilter' });
    t.field('viewCount', { type: 'IntFilter' });
    t.field('readTime', { type: 'FloatNullableFilter' });
    t.field('publishedAt', { type: 'DateTimeNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('categoryId', { type: 'IntNullableFilter' });
  },
});

export const CommentUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('update', { type: 'CommentUpdateWithoutAuthorInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutAuthorInput' });
  },
});

export const CommentUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('data', { type: 'CommentUpdateWithoutAuthorInput' });
  },
});

export const CommentUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' });
    t.nonNull.field('data', { type: 'CommentUpdateManyMutationInput' });
  },
});

export const CommentScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentScalarWhereInput' });
    t.list.field('OR', { type: 'CommentScalarWhereInput' });
    t.list.field('NOT', { type: 'CommentScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('content', { type: 'StringFilter' });
    t.field('approved', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('postId', { type: 'IntFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
  },
});

export const OrderUpsertWithWhereUniqueWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpsertWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' });
    t.nonNull.field('update', { type: 'OrderUpdateWithoutCustomerInput' });
    t.nonNull.field('create', { type: 'OrderCreateWithoutCustomerInput' });
  },
});

export const OrderUpdateWithWhereUniqueWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' });
    t.nonNull.field('data', { type: 'OrderUpdateWithoutCustomerInput' });
  },
});

export const OrderUpdateManyWithWhereWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateManyWithWhereWithoutCustomerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderScalarWhereInput' });
    t.nonNull.field('data', { type: 'OrderUpdateManyMutationInput' });
  },
});

export const OrderScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderScalarWhereInput' });
    t.list.field('OR', { type: 'OrderScalarWhereInput' });
    t.list.field('NOT', { type: 'OrderScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('orderNumber', { type: 'StringFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('subtotal', { type: 'FloatFilter' });
    t.field('tax', { type: 'FloatFilter' });
    t.field('shipping', { type: 'FloatFilter' });
    t.field('total', { type: 'FloatFilter' });
    t.field('notes', { type: 'StringNullableFilter' });
    t.field('shippingAddress', { type: 'StringNullableFilter' });
    t.field('billingAddress', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('customerId', { type: 'IntNullableFilter' });
  },
});

export const ReviewUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' });
    t.nonNull.field('update', { type: 'ReviewUpdateWithoutAuthorInput' });
    t.nonNull.field('create', { type: 'ReviewCreateWithoutAuthorInput' });
  },
});

export const ReviewUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' });
    t.nonNull.field('data', { type: 'ReviewUpdateWithoutAuthorInput' });
  },
});

export const ReviewUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewScalarWhereInput' });
    t.nonNull.field('data', { type: 'ReviewUpdateManyMutationInput' });
  },
});

export const ReviewScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ReviewScalarWhereInput' });
    t.list.field('OR', { type: 'ReviewScalarWhereInput' });
    t.list.field('NOT', { type: 'ReviewScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('rating', { type: 'IntFilter' });
    t.field('title', { type: 'StringNullableFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('approved', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('authorId', { type: 'IntNullableFilter' });
    t.field('productId', { type: 'IntFilter' });
  },
});

export const MessageUpsertWithWhereUniqueWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' });
    t.nonNull.field('update', { type: 'MessageUpdateWithoutSenderInput' });
    t.nonNull.field('create', { type: 'MessageCreateWithoutSenderInput' });
  },
});

export const MessageUpdateWithWhereUniqueWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' });
    t.nonNull.field('data', { type: 'MessageUpdateWithoutSenderInput' });
  },
});

export const MessageUpdateManyWithWhereWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithWhereWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageScalarWhereInput' });
    t.nonNull.field('data', { type: 'MessageUpdateManyMutationInput' });
  },
});

export const MessageScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageScalarWhereInput' });
    t.list.field('OR', { type: 'MessageScalarWhereInput' });
    t.list.field('NOT', { type: 'MessageScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('subject', { type: 'StringNullableFilter' });
    t.field('content', { type: 'StringFilter' });
    t.field('read', { type: 'BoolFilter' });
    t.field('priority', { type: 'EnumPriorityFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('senderId', { type: 'IntNullableFilter' });
    t.field('receiverId', { type: 'IntNullableFilter' });
  },
});

export const MessageUpsertWithWhereUniqueWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpsertWithWhereUniqueWithoutReceiverInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' });
    t.nonNull.field('update', { type: 'MessageUpdateWithoutReceiverInput' });
    t.nonNull.field('create', { type: 'MessageCreateWithoutReceiverInput' });
  },
});

export const MessageUpdateWithWhereUniqueWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithWhereUniqueWithoutReceiverInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' });
    t.nonNull.field('data', { type: 'MessageUpdateWithoutReceiverInput' });
  },
});

export const MessageUpdateManyWithWhereWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithWhereWithoutReceiverInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageScalarWhereInput' });
    t.nonNull.field('data', { type: 'MessageUpdateManyMutationInput' });
  },
});

export const UserFollowUpsertWithWhereUniqueWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpsertWithWhereUniqueWithoutFollowerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowWhereUniqueInput' });
    t.nonNull.field('update', { type: 'UserFollowUpdateWithoutFollowerInput' });
    t.nonNull.field('create', { type: 'UserFollowCreateWithoutFollowerInput' });
  },
});

export const UserFollowUpdateWithWhereUniqueWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateWithWhereUniqueWithoutFollowerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowWhereUniqueInput' });
    t.nonNull.field('data', { type: 'UserFollowUpdateWithoutFollowerInput' });
  },
});

export const UserFollowUpdateManyWithWhereWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateManyWithWhereWithoutFollowerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowScalarWhereInput' });
    t.nonNull.field('data', { type: 'UserFollowUpdateManyMutationInput' });
  },
});

export const UserFollowScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserFollowScalarWhereInput' });
    t.list.field('OR', { type: 'UserFollowScalarWhereInput' });
    t.list.field('NOT', { type: 'UserFollowScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('followerId', { type: 'IntFilter' });
    t.field('followingId', { type: 'IntFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
  },
});

export const UserFollowUpsertWithWhereUniqueWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpsertWithWhereUniqueWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowWhereUniqueInput' });
    t.nonNull.field('update', { type: 'UserFollowUpdateWithoutFollowingInput' });
    t.nonNull.field('create', { type: 'UserFollowCreateWithoutFollowingInput' });
  },
});

export const UserFollowUpdateWithWhereUniqueWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateWithWhereUniqueWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowWhereUniqueInput' });
    t.nonNull.field('data', { type: 'UserFollowUpdateWithoutFollowingInput' });
  },
});

export const UserFollowUpdateManyWithWhereWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateManyWithWhereWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserFollowScalarWhereInput' });
    t.nonNull.field('data', { type: 'UserFollowUpdateManyMutationInput' });
  },
});

export const PostUpsertWithWhereUniqueWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutLikedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('update', { type: 'PostUpdateWithoutLikedByInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutLikedByInput' });
  },
});

export const PostUpdateWithWhereUniqueWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutLikedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('data', { type: 'PostUpdateWithoutLikedByInput' });
  },
});

export const PostUpdateManyWithWhereWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutLikedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' });
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' });
  },
});

export const GroupUpsertWithWhereUniqueWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpsertWithWhereUniqueWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'GroupWhereUniqueInput' });
    t.nonNull.field('update', { type: 'GroupUpdateWithoutMembersInput' });
    t.nonNull.field('create', { type: 'GroupCreateWithoutMembersInput' });
  },
});

export const GroupUpdateWithWhereUniqueWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateWithWhereUniqueWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'GroupWhereUniqueInput' });
    t.nonNull.field('data', { type: 'GroupUpdateWithoutMembersInput' });
  },
});

export const GroupUpdateManyWithWhereWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateManyWithWhereWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'GroupScalarWhereInput' });
    t.nonNull.field('data', { type: 'GroupUpdateManyMutationInput' });
  },
});

export const GroupScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'GroupScalarWhereInput' });
    t.list.field('OR', { type: 'GroupScalarWhereInput' });
    t.list.field('NOT', { type: 'GroupScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('isPrivate', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
  },
});

export const UserCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutProfileInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutProfileInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutProfileInput' });
  },
});

export const UserUpsertWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutProfileInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutProfileInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutProfileInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutProfileInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutProfileInput' });
  },
});

export const UserUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutProfileInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserCreateWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutFollowedByInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutFollowedByInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutFollowedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutFollowedByInput' });
  },
});

export const UserCreateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutFollowingInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutFollowingInput' });
  },
});

export const UserUpsertWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutFollowedByInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutFollowedByInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutFollowedByInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutFollowedByInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutFollowedByInput' });
  },
});

export const UserUpdateWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutFollowedByInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutFollowedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutFollowedByInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUpsertWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutFollowingInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutFollowingInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutFollowingInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutFollowingInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutFollowingInput' });
  },
});

export const UserUpdateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutFollowingInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutFollowingInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutPostsInput' });
  },
});

export const CategoryCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parent', { type: 'CategoryCreateNestedOneWithoutChildrenInput' });
    t.field('children', { type: 'CategoryCreateNestedManyWithoutParentInput' });
  },
});

export const CategoryUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('children', { type: 'CategoryUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CategoryCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CategoryCreateWithoutPostsInput' });
  },
});

export const CommentCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutPostInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' });
    t.field('parent', { type: 'CommentCreateNestedOneWithoutRepliesInput' });
    t.field('replies', { type: 'CommentCreateNestedManyWithoutParentInput' });
  },
});

export const CommentUncheckedCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('replies', { type: 'CommentUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CommentCreateOrConnectWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutPostInput' });
  },
});

export const CommentCreateManyPostInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyPostInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyPostInput' });
  },
});

export const TagCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const TagUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const TagCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagWhereUniqueInput' });
    t.nonNull.field('create', { type: 'TagCreateWithoutPostsInput' });
  },
});

export const UserCreateWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutLikedPostsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutLikedPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutLikedPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutLikedPostsInput' });
  },
});

export const UserUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutPostsInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutPostsInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutPostsInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutPostsInput' });
  },
});

export const UserUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutPostsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const CategoryUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'CategoryUpdateWithoutPostsInput' });
    t.nonNull.field('create', { type: 'CategoryCreateWithoutPostsInput' });
    t.field('where', { type: 'CategoryWhereInput' });
  },
});

export const CategoryUpdateToOneWithWhereWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateToOneWithWhereWithoutPostsInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereInput' });
    t.nonNull.field('data', { type: 'CategoryUpdateWithoutPostsInput' });
  },
});

export const CategoryUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithoutPostsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenNestedInput' });
    t.field('children', { type: 'CategoryUpdateManyWithoutParentNestedInput' });
  },
});

export const CategoryUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('children', { type: 'CategoryUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUpsertWithWhereUniqueWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('update', { type: 'CommentUpdateWithoutPostInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutPostInput' });
  },
});

export const CommentUpdateWithWhereUniqueWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('data', { type: 'CommentUpdateWithoutPostInput' });
  },
});

export const CommentUpdateManyWithWhereWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' });
    t.nonNull.field('data', { type: 'CommentUpdateManyMutationInput' });
  },
});

export const TagUpsertWithWhereUniqueWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpsertWithWhereUniqueWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagWhereUniqueInput' });
    t.nonNull.field('update', { type: 'TagUpdateWithoutPostsInput' });
    t.nonNull.field('create', { type: 'TagCreateWithoutPostsInput' });
  },
});

export const TagUpdateWithWhereUniqueWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateWithWhereUniqueWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagWhereUniqueInput' });
    t.nonNull.field('data', { type: 'TagUpdateWithoutPostsInput' });
  },
});

export const TagUpdateManyWithWhereWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyWithWhereWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagScalarWhereInput' });
    t.nonNull.field('data', { type: 'TagUpdateManyMutationInput' });
  },
});

export const TagScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TagScalarWhereInput' });
    t.list.field('OR', { type: 'TagScalarWhereInput' });
    t.list.field('NOT', { type: 'TagScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
  },
});

export const UserUpsertWithWhereUniqueWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithWhereUniqueWithoutLikedPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('update', { type: 'UserUpdateWithoutLikedPostsInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutLikedPostsInput' });
  },
});

export const UserUpdateWithWhereUniqueWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithWhereUniqueWithoutLikedPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutLikedPostsInput' });
  },
});

export const UserUpdateManyWithWhereWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithWhereWithoutLikedPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserScalarWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateManyMutationInput' });
  },
});

export const UserScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereInput' });
    t.list.field('OR', { type: 'UserScalarWhereInput' });
    t.list.field('NOT', { type: 'UserScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('email', { type: 'StringFilter' });
    t.field('username', { type: 'StringFilter' });
    t.field('firstName', { type: 'StringNullableFilter' });
    t.field('lastName', { type: 'StringNullableFilter' });
    t.field('password', { type: 'StringFilter' });
    t.field('role', { type: 'EnumRoleFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('balance', { type: 'FloatFilter' });
    t.field('metadata', { type: 'StringNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
  },
});

export const UserCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutCommentsInput' });
  },
});

export const PostCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostUncheckedCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('categoryId', { type: 'Int' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserUncheckedCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostCreateOrConnectWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutCommentsInput' });
  },
});

export const CommentCreateWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutRepliesInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' });
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' });
    t.field('parent', { type: 'CommentCreateNestedOneWithoutRepliesInput' });
  },
});

export const CommentUncheckedCreateWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutRepliesInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('postId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
  },
});

export const CommentCreateOrConnectWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutRepliesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutRepliesInput' });
  },
});

export const CommentCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutParentInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' });
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' });
    t.field('replies', { type: 'CommentCreateNestedManyWithoutParentInput' });
  },
});

export const CommentUncheckedCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('postId', { type: 'Int' });
    t.field('replies', { type: 'CommentUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CommentCreateOrConnectWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutParentInput' });
  },
});

export const CommentCreateManyParentInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyParentInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyParentInput' });
  },
});

export const UserUpsertWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutCommentsInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutCommentsInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutCommentsInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutCommentsInput' });
  },
});

export const UserUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutCommentsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const PostUpsertWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'PostUpdateWithoutCommentsInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutCommentsInput' });
    t.field('where', { type: 'PostWhereInput' });
  },
});

export const PostUpdateToOneWithWhereWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateToOneWithWhereWithoutCommentsInput',
  definition(t) {
    t.field('where', { type: 'PostWhereInput' });
    t.nonNull.field('data', { type: 'PostUpdateWithoutCommentsInput' });
  },
});

export const PostUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutCommentsInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' });
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUncheckedUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const CommentUpsertWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithoutRepliesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'CommentUpdateWithoutRepliesInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutRepliesInput' });
    t.field('where', { type: 'CommentWhereInput' });
  },
});

export const CommentUpdateToOneWithWhereWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateToOneWithWhereWithoutRepliesInput',
  definition(t) {
    t.field('where', { type: 'CommentWhereInput' });
    t.nonNull.field('data', { type: 'CommentUpdateWithoutRepliesInput' });
  },
});

export const CommentUpdateWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutRepliesInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutCommentsNestedInput' });
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' });
    t.field('parent', { type: 'CommentUpdateOneWithoutRepliesNestedInput' });
  },
});

export const CommentUncheckedUpdateWithoutRepliesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutRepliesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const CommentUpsertWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('update', { type: 'CommentUpdateWithoutParentInput' });
    t.nonNull.field('create', { type: 'CommentCreateWithoutParentInput' });
  },
});

export const CommentUpdateWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' });
    t.nonNull.field('data', { type: 'CommentUpdateWithoutParentInput' });
  },
});

export const CommentUpdateManyWithWhereWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' });
    t.nonNull.field('data', { type: 'CommentUpdateManyMutationInput' });
  },
});

export const PostCreateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostUncheckedCreateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
    t.field('likedBy', { type: 'UserUncheckedCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostCreateOrConnectWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutCategoryInput' });
  },
});

export const PostCreateManyCategoryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyCategoryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyCategoryInput' });
  },
});

export const CategoryCreateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateWithoutChildrenInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutCategoryInput' });
    t.field('parent', { type: 'CategoryCreateNestedOneWithoutChildrenInput' });
  },
});

export const CategoryUncheckedCreateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateWithoutChildrenInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutCategoryInput' });
  },
});

export const CategoryCreateOrConnectWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateOrConnectWithoutChildrenInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CategoryCreateWithoutChildrenInput' });
  },
});

export const CategoryCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateWithoutParentInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutCategoryInput' });
    t.field('children', { type: 'CategoryCreateNestedManyWithoutParentInput' });
  },
});

export const CategoryUncheckedCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutCategoryInput' });
    t.field('children', { type: 'CategoryUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const CategoryCreateOrConnectWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateOrConnectWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'CategoryCreateWithoutParentInput' });
  },
});

export const CategoryCreateManyParentInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateManyParentInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CategoryCreateManyParentInput' });
  },
});

export const PostUpsertWithWhereUniqueWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('update', { type: 'PostUpdateWithoutCategoryInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutCategoryInput' });
  },
});

export const PostUpdateWithWhereUniqueWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('data', { type: 'PostUpdateWithoutCategoryInput' });
  },
});

export const PostUpdateManyWithWhereWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' });
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' });
  },
});

export const CategoryUpsertWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpsertWithoutChildrenInput',
  definition(t) {
    t.nonNull.field('update', { type: 'CategoryUpdateWithoutChildrenInput' });
    t.nonNull.field('create', { type: 'CategoryCreateWithoutChildrenInput' });
    t.field('where', { type: 'CategoryWhereInput' });
  },
});

export const CategoryUpdateToOneWithWhereWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateToOneWithWhereWithoutChildrenInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereInput' });
    t.nonNull.field('data', { type: 'CategoryUpdateWithoutChildrenInput' });
  },
});

export const CategoryUpdateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithoutChildrenInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutCategoryNestedInput' });
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenNestedInput' });
  },
});

export const CategoryUncheckedUpdateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateWithoutChildrenInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutCategoryNestedInput' });
  },
});

export const CategoryUpsertWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpsertWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' });
    t.nonNull.field('update', { type: 'CategoryUpdateWithoutParentInput' });
    t.nonNull.field('create', { type: 'CategoryCreateWithoutParentInput' });
  },
});

export const CategoryUpdateWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' });
    t.nonNull.field('data', { type: 'CategoryUpdateWithoutParentInput' });
  },
});

export const CategoryUpdateManyWithWhereWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyWithWhereWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryScalarWhereInput' });
    t.nonNull.field('data', { type: 'CategoryUpdateManyMutationInput' });
  },
});

export const CategoryScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryScalarWhereInput' });
    t.list.field('OR', { type: 'CategoryScalarWhereInput' });
    t.list.field('NOT', { type: 'CategoryScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('color', { type: 'StringNullableFilter' });
    t.field('order', { type: 'IntFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
  },
});

export const PostCreateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutTagsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('likedBy', { type: 'UserCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostUncheckedCreateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutTagsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('categoryId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('likedBy', { type: 'UserUncheckedCreateNestedManyWithoutLikedPostsInput' });
  },
});

export const PostCreateOrConnectWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutTagsInput' });
  },
});

export const PostUpsertWithWhereUniqueWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('update', { type: 'PostUpdateWithoutTagsInput' });
    t.nonNull.field('create', { type: 'PostCreateWithoutTagsInput' });
  },
});

export const PostUpdateWithWhereUniqueWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' });
    t.nonNull.field('data', { type: 'PostUpdateWithoutTagsInput' });
  },
});

export const PostUpdateManyWithWhereWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' });
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' });
  },
});

export const BrandCreateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandCreateWithoutProductsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('logo', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const BrandUncheckedCreateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUncheckedCreateWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('logo', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const BrandCreateOrConnectWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandCreateOrConnectWithoutProductsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'BrandWhereUniqueInput' });
    t.nonNull.field('create', { type: 'BrandCreateWithoutProductsInput' });
  },
});

export const OrderItemCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateWithoutProductInput',
  definition(t) {
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('order', { type: 'OrderCreateNestedOneWithoutItemsInput' });
  },
});

export const OrderItemUncheckedCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedCreateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('orderId', { type: 'Int' });
  },
});

export const OrderItemCreateOrConnectWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateOrConnectWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemWhereUniqueInput' });
    t.nonNull.field('create', { type: 'OrderItemCreateWithoutProductInput' });
  },
});

export const OrderItemCreateManyProductInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateManyProductInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'OrderItemCreateManyProductInput' });
  },
});

export const ReviewCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateWithoutProductInput',
  definition(t) {
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'UserCreateNestedOneWithoutReviewsInput' });
  },
});

export const ReviewUncheckedCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
  },
});

export const ReviewCreateOrConnectWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateOrConnectWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ReviewCreateWithoutProductInput' });
  },
});

export const ReviewCreateManyProductInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyProductInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ReviewCreateManyProductInput' });
  },
});

export const ProductCategoryCreateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateWithoutProductsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parent', { type: 'ProductCategoryCreateNestedOneWithoutChildrenInput' });
    t.field('children', { type: 'ProductCategoryCreateNestedManyWithoutParentInput' });
  },
});

export const ProductCategoryUncheckedCreateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedCreateWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('children', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const ProductCategoryCreateOrConnectWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateOrConnectWithoutProductsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCategoryCreateWithoutProductsInput' });
  },
});

export const BrandUpsertWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUpsertWithoutProductsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'BrandUpdateWithoutProductsInput' });
    t.nonNull.field('create', { type: 'BrandCreateWithoutProductsInput' });
    t.field('where', { type: 'BrandWhereInput' });
  },
});

export const BrandUpdateToOneWithWhereWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUpdateToOneWithWhereWithoutProductsInput',
  definition(t) {
    t.field('where', { type: 'BrandWhereInput' });
    t.nonNull.field('data', { type: 'BrandUpdateWithoutProductsInput' });
  },
});

export const BrandUpdateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUpdateWithoutProductsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const BrandUncheckedUpdateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BrandUncheckedUpdateWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('website', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const OrderItemUpsertWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpsertWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemWhereUniqueInput' });
    t.nonNull.field('update', { type: 'OrderItemUpdateWithoutProductInput' });
    t.nonNull.field('create', { type: 'OrderItemCreateWithoutProductInput' });
  },
});

export const OrderItemUpdateWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemWhereUniqueInput' });
    t.nonNull.field('data', { type: 'OrderItemUpdateWithoutProductInput' });
  },
});

export const OrderItemUpdateManyWithWhereWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateManyWithWhereWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemScalarWhereInput' });
    t.nonNull.field('data', { type: 'OrderItemUpdateManyMutationInput' });
  },
});

export const OrderItemScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderItemScalarWhereInput' });
    t.list.field('OR', { type: 'OrderItemScalarWhereInput' });
    t.list.field('NOT', { type: 'OrderItemScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('quantity', { type: 'IntFilter' });
    t.field('price', { type: 'FloatFilter' });
    t.field('total', { type: 'FloatFilter' });
    t.field('orderId', { type: 'IntFilter' });
    t.field('productId', { type: 'IntFilter' });
  },
});

export const ReviewUpsertWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpsertWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' });
    t.nonNull.field('update', { type: 'ReviewUpdateWithoutProductInput' });
    t.nonNull.field('create', { type: 'ReviewCreateWithoutProductInput' });
  },
});

export const ReviewUpdateWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' });
    t.nonNull.field('data', { type: 'ReviewUpdateWithoutProductInput' });
  },
});

export const ReviewUpdateManyWithWhereWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithWhereWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewScalarWhereInput' });
    t.nonNull.field('data', { type: 'ReviewUpdateManyMutationInput' });
  },
});

export const ProductCategoryUpsertWithWhereUniqueWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpsertWithWhereUniqueWithoutProductsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('update', { type: 'ProductCategoryUpdateWithoutProductsInput' });
    t.nonNull.field('create', { type: 'ProductCategoryCreateWithoutProductsInput' });
  },
});

export const ProductCategoryUpdateWithWhereUniqueWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateWithWhereUniqueWithoutProductsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('data', { type: 'ProductCategoryUpdateWithoutProductsInput' });
  },
});

export const ProductCategoryUpdateManyWithWhereWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateManyWithWhereWithoutProductsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryScalarWhereInput' });
    t.nonNull.field('data', { type: 'ProductCategoryUpdateManyMutationInput' });
  },
});

export const ProductCategoryScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductCategoryScalarWhereInput' });
    t.list.field('OR', { type: 'ProductCategoryScalarWhereInput' });
    t.list.field('NOT', { type: 'ProductCategoryScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('slug', { type: 'StringFilter' });
    t.field('order', { type: 'IntFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
  },
});

export const ProductCreateWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateWithoutBrandInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('orderItems', { type: 'OrderItemCreateNestedManyWithoutProductInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductUncheckedCreateWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateWithoutBrandInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('orderItems', { type: 'OrderItemUncheckedCreateNestedManyWithoutProductInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductCreateOrConnectWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateOrConnectWithoutBrandInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutBrandInput' });
  },
});

export const ProductCreateManyBrandInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateManyBrandInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ProductCreateManyBrandInput' });
  },
});

export const ProductUpsertWithWhereUniqueWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpsertWithWhereUniqueWithoutBrandInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('update', { type: 'ProductUpdateWithoutBrandInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutBrandInput' });
  },
});

export const ProductUpdateWithWhereUniqueWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithWhereUniqueWithoutBrandInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('data', { type: 'ProductUpdateWithoutBrandInput' });
  },
});

export const ProductUpdateManyWithWhereWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyWithWhereWithoutBrandInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductScalarWhereInput' });
    t.nonNull.field('data', { type: 'ProductUpdateManyMutationInput' });
  },
});

export const ProductScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductScalarWhereInput' });
    t.list.field('OR', { type: 'ProductScalarWhereInput' });
    t.list.field('NOT', { type: 'ProductScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('name', { type: 'StringFilter' });
    t.field('sku', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('price', { type: 'FloatFilter' });
    t.field('comparePrice', { type: 'FloatNullableFilter' });
    t.field('costPrice', { type: 'FloatNullableFilter' });
    t.field('quantity', { type: 'IntFilter' });
    t.field('weight', { type: 'FloatNullableFilter' });
    t.field('isActive', { type: 'BoolFilter' });
    t.field('isFeatured', { type: 'BoolFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('brandId', { type: 'IntNullableFilter' });
  },
});

export const ProductCategoryCreateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateWithoutChildrenInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parent', { type: 'ProductCategoryCreateNestedOneWithoutChildrenInput' });
    t.field('products', { type: 'ProductCreateNestedManyWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryUncheckedCreateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedCreateWithoutChildrenInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('products', { type: 'ProductUncheckedCreateNestedManyWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryCreateOrConnectWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateOrConnectWithoutChildrenInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCategoryCreateWithoutChildrenInput' });
  },
});

export const ProductCategoryCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateWithoutParentInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('children', { type: 'ProductCategoryCreateNestedManyWithoutParentInput' });
    t.field('products', { type: 'ProductCreateNestedManyWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryUncheckedCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedCreateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('children', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutParentInput' });
    t.field('products', { type: 'ProductUncheckedCreateNestedManyWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryCreateOrConnectWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateOrConnectWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCategoryCreateWithoutParentInput' });
  },
});

export const ProductCategoryCreateManyParentInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateManyParentInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ProductCategoryCreateManyParentInput' });
  },
});

export const ProductCreateWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateWithoutProductCategoriesInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brand', { type: 'BrandCreateNestedOneWithoutProductsInput' });
    t.field('orderItems', { type: 'OrderItemCreateNestedManyWithoutProductInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutProductInput' });
  },
});

export const ProductUncheckedCreateWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateWithoutProductCategoriesInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brandId', { type: 'Int' });
    t.field('orderItems', { type: 'OrderItemUncheckedCreateNestedManyWithoutProductInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutProductInput' });
  },
});

export const ProductCreateOrConnectWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateOrConnectWithoutProductCategoriesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutProductCategoriesInput' });
  },
});

export const ProductCategoryUpsertWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpsertWithoutChildrenInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProductCategoryUpdateWithoutChildrenInput' });
    t.nonNull.field('create', { type: 'ProductCategoryCreateWithoutChildrenInput' });
    t.field('where', { type: 'ProductCategoryWhereInput' });
  },
});

export const ProductCategoryUpdateToOneWithWhereWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateToOneWithWhereWithoutChildrenInput',
  definition(t) {
    t.field('where', { type: 'ProductCategoryWhereInput' });
    t.nonNull.field('data', { type: 'ProductCategoryUpdateWithoutChildrenInput' });
  },
});

export const ProductCategoryUpdateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateWithoutChildrenInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parent', { type: 'ProductCategoryUpdateOneWithoutChildrenNestedInput' });
    t.field('products', { type: 'ProductUpdateManyWithoutProductCategoriesNestedInput' });
  },
});

export const ProductCategoryUncheckedUpdateWithoutChildrenInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateWithoutChildrenInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('products', { type: 'ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput' });
  },
});

export const ProductCategoryUpsertWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpsertWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('update', { type: 'ProductCategoryUpdateWithoutParentInput' });
    t.nonNull.field('create', { type: 'ProductCategoryCreateWithoutParentInput' });
  },
});

export const ProductCategoryUpdateWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryWhereUniqueInput' });
    t.nonNull.field('data', { type: 'ProductCategoryUpdateWithoutParentInput' });
  },
});

export const ProductCategoryUpdateManyWithWhereWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateManyWithWhereWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductCategoryScalarWhereInput' });
    t.nonNull.field('data', { type: 'ProductCategoryUpdateManyMutationInput' });
  },
});

export const ProductUpsertWithWhereUniqueWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpsertWithWhereUniqueWithoutProductCategoriesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('update', { type: 'ProductUpdateWithoutProductCategoriesInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutProductCategoriesInput' });
  },
});

export const ProductUpdateWithWhereUniqueWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithWhereUniqueWithoutProductCategoriesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('data', { type: 'ProductUpdateWithoutProductCategoriesInput' });
  },
});

export const ProductUpdateManyWithWhereWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyWithWhereWithoutProductCategoriesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductScalarWhereInput' });
    t.nonNull.field('data', { type: 'ProductUpdateManyMutationInput' });
  },
});

export const UserCreateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutOrdersInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutOrdersInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutOrdersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutOrdersInput' });
  },
});

export const OrderItemCreateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateWithoutOrderInput',
  definition(t) {
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('product', { type: 'ProductCreateNestedOneWithoutOrderItemsInput' });
  },
});

export const OrderItemUncheckedCreateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedCreateWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const OrderItemCreateOrConnectWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateOrConnectWithoutOrderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemWhereUniqueInput' });
    t.nonNull.field('create', { type: 'OrderItemCreateWithoutOrderInput' });
  },
});

export const OrderItemCreateManyOrderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateManyOrderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'OrderItemCreateManyOrderInput' });
  },
});

export const UserUpsertWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutOrdersInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutOrdersInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutOrdersInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutOrdersInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutOrdersInput' });
  },
});

export const UserUpdateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutOrdersInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutOrdersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const OrderItemUpsertWithWhereUniqueWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpsertWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemWhereUniqueInput' });
    t.nonNull.field('update', { type: 'OrderItemUpdateWithoutOrderInput' });
    t.nonNull.field('create', { type: 'OrderItemCreateWithoutOrderInput' });
  },
});

export const OrderItemUpdateWithWhereUniqueWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemWhereUniqueInput' });
    t.nonNull.field('data', { type: 'OrderItemUpdateWithoutOrderInput' });
  },
});

export const OrderItemUpdateManyWithWhereWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateManyWithWhereWithoutOrderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderItemScalarWhereInput' });
    t.nonNull.field('data', { type: 'OrderItemUpdateManyMutationInput' });
  },
});

export const OrderCreateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateWithoutItemsInput',
  definition(t) {
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('customer', { type: 'UserCreateNestedOneWithoutOrdersInput' });
  },
});

export const OrderUncheckedCreateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('customerId', { type: 'Int' });
  },
});

export const OrderCreateOrConnectWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateOrConnectWithoutItemsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' });
    t.nonNull.field('create', { type: 'OrderCreateWithoutItemsInput' });
  },
});

export const ProductCreateWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateWithoutOrderItemsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brand', { type: 'BrandCreateNestedOneWithoutProductsInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductUncheckedCreateWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateWithoutOrderItemsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brandId', { type: 'Int' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductCreateOrConnectWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateOrConnectWithoutOrderItemsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutOrderItemsInput' });
  },
});

export const OrderUpsertWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpsertWithoutItemsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'OrderUpdateWithoutItemsInput' });
    t.nonNull.field('create', { type: 'OrderCreateWithoutItemsInput' });
    t.field('where', { type: 'OrderWhereInput' });
  },
});

export const OrderUpdateToOneWithWhereWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateToOneWithWhereWithoutItemsInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereInput' });
    t.nonNull.field('data', { type: 'OrderUpdateWithoutItemsInput' });
  },
});

export const OrderUpdateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithoutItemsInput',
  definition(t) {
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('customer', { type: 'UserUpdateOneWithoutOrdersNestedInput' });
  },
});

export const OrderUncheckedUpdateWithoutItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateWithoutItemsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('customerId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const ProductUpsertWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpsertWithoutOrderItemsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProductUpdateWithoutOrderItemsInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutOrderItemsInput' });
    t.field('where', { type: 'ProductWhereInput' });
  },
});

export const ProductUpdateToOneWithWhereWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateToOneWithWhereWithoutOrderItemsInput',
  definition(t) {
    t.field('where', { type: 'ProductWhereInput' });
    t.nonNull.field('data', { type: 'ProductUpdateWithoutOrderItemsInput' });
  },
});

export const ProductUpdateWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithoutOrderItemsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brand', { type: 'BrandUpdateOneWithoutProductsNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUpdateManyWithoutProductsNestedInput' });
  },
});

export const ProductUncheckedUpdateWithoutOrderItemsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateWithoutOrderItemsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brandId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput' });
  },
});

export const UserCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutReviewsInput' });
  },
});

export const ProductCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brand', { type: 'BrandCreateNestedOneWithoutProductsInput' });
    t.field('orderItems', { type: 'OrderItemCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductUncheckedCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('brandId', { type: 'Int' });
    t.field('orderItems', { type: 'OrderItemUncheckedCreateNestedManyWithoutProductInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedCreateNestedManyWithoutProductsInput' });
  },
});

export const ProductCreateOrConnectWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateOrConnectWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutReviewsInput' });
  },
});

export const UserUpsertWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutReviewsInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutReviewsInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutReviewsInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutReviewsInput' });
  },
});

export const UserUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutReviewsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const ProductUpsertWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpsertWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProductUpdateWithoutReviewsInput' });
    t.nonNull.field('create', { type: 'ProductCreateWithoutReviewsInput' });
    t.field('where', { type: 'ProductWhereInput' });
  },
});

export const ProductUpdateToOneWithWhereWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateToOneWithWhereWithoutReviewsInput',
  definition(t) {
    t.field('where', { type: 'ProductWhereInput' });
    t.nonNull.field('data', { type: 'ProductUpdateWithoutReviewsInput' });
  },
});

export const ProductUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithoutReviewsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brand', { type: 'BrandUpdateOneWithoutProductsNestedInput' });
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUpdateManyWithoutProductsNestedInput' });
  },
});

export const ProductUncheckedUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brandId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('orderItems', { type: 'OrderItemUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput' });
  },
});

export const UserCreateWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutSentMessagesInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutSentMessagesInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutSentMessagesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutSentMessagesInput' });
  },
});

export const UserCreateWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutReceivedMessagesInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupCreateNestedManyWithoutMembersInput' });
  },
});

export const UserUncheckedCreateWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutReceivedMessagesInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
    t.field('groups', { type: 'GroupUncheckedCreateNestedManyWithoutMembersInput' });
  },
});

export const UserCreateOrConnectWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutReceivedMessagesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutReceivedMessagesInput' });
  },
});

export const UserUpsertWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutSentMessagesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutSentMessagesInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutSentMessagesInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutSentMessagesInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutSentMessagesInput' });
  },
});

export const UserUpdateWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutSentMessagesInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutSentMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutSentMessagesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUpsertWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutReceivedMessagesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutReceivedMessagesInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutReceivedMessagesInput' });
    t.field('where', { type: 'UserWhereInput' });
  },
});

export const UserUpdateToOneWithWhereWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutReceivedMessagesInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutReceivedMessagesInput' });
  },
});

export const UserUpdateWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutReceivedMessagesInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutReceivedMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutReceivedMessagesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserCreateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostCreateNestedManyWithoutLikedByInput' });
  },
});

export const UserUncheckedCreateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutGroupsInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('email', { type: 'String' });
    t.nonNull.field('username', { type: 'String' });
    t.field('firstName', { type: 'String' });
    t.field('lastName', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('orders', { type: 'OrderUncheckedCreateNestedManyWithoutCustomerInput' });
    t.field('reviews', { type: 'ReviewUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('sentMessages', { type: 'MessageUncheckedCreateNestedManyWithoutSenderInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedCreateNestedManyWithoutReceiverInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowerInput' });
    t.field('following', { type: 'UserFollowUncheckedCreateNestedManyWithoutFollowingInput' });
    t.field('likedPosts', { type: 'PostUncheckedCreateNestedManyWithoutLikedByInput' });
  },
});

export const UserCreateOrConnectWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutGroupsInput' });
  },
});

export const UserUpsertWithWhereUniqueWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithWhereUniqueWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('update', { type: 'UserUpdateWithoutGroupsInput' });
    t.nonNull.field('create', { type: 'UserCreateWithoutGroupsInput' });
  },
});

export const UserUpdateWithWhereUniqueWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithWhereUniqueWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' });
    t.nonNull.field('data', { type: 'UserUpdateWithoutGroupsInput' });
  },
});

export const UserUpdateManyWithWhereWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithWhereWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserScalarWhereInput' });
    t.nonNull.field('data', { type: 'UserUpdateManyMutationInput' });
  },
});

export const TaskCreateWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateWithoutProjectInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parent', { type: 'TaskCreateNestedOneWithoutSubtasksInput' });
    t.field('subtasks', { type: 'TaskCreateNestedManyWithoutParentInput' });
  },
});

export const TaskUncheckedCreateWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateWithoutProjectInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
    t.field('subtasks', { type: 'TaskUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const TaskCreateOrConnectWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateOrConnectWithoutProjectInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('create', { type: 'TaskCreateWithoutProjectInput' });
  },
});

export const TaskCreateManyProjectInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyProjectInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'TaskCreateManyProjectInput' });
  },
});

export const TaskUpsertWithWhereUniqueWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpsertWithWhereUniqueWithoutProjectInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('update', { type: 'TaskUpdateWithoutProjectInput' });
    t.nonNull.field('create', { type: 'TaskCreateWithoutProjectInput' });
  },
});

export const TaskUpdateWithWhereUniqueWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithWhereUniqueWithoutProjectInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('data', { type: 'TaskUpdateWithoutProjectInput' });
  },
});

export const TaskUpdateManyWithWhereWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyWithWhereWithoutProjectInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskScalarWhereInput' });
    t.nonNull.field('data', { type: 'TaskUpdateManyMutationInput' });
  },
});

export const TaskScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TaskScalarWhereInput' });
    t.list.field('OR', { type: 'TaskScalarWhereInput' });
    t.list.field('NOT', { type: 'TaskScalarWhereInput' });
    t.field('id', { type: 'IntFilter' });
    t.field('title', { type: 'StringFilter' });
    t.field('description', { type: 'StringNullableFilter' });
    t.field('status', { type: 'EnumStatusFilter' });
    t.field('priority', { type: 'EnumPriorityFilter' });
    t.field('dueDate', { type: 'DateTimeNullableFilter' });
    t.field('completedAt', { type: 'DateTimeNullableFilter' });
    t.field('estimatedHours', { type: 'FloatNullableFilter' });
    t.field('actualHours', { type: 'FloatNullableFilter' });
    t.field('createdAt', { type: 'DateTimeFilter' });
    t.field('updatedAt', { type: 'DateTimeFilter' });
    t.field('projectId', { type: 'IntNullableFilter' });
    t.field('parentId', { type: 'IntNullableFilter' });
  },
});

export const ProjectCreateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectCreateWithoutTasksInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('startDate', { type: 'DateTime' });
    t.field('endDate', { type: 'DateTime' });
    t.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProjectUncheckedCreateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUncheckedCreateWithoutTasksInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('startDate', { type: 'DateTime' });
    t.field('endDate', { type: 'DateTime' });
    t.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProjectCreateOrConnectWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectCreateOrConnectWithoutTasksInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProjectWhereUniqueInput' });
    t.nonNull.field('create', { type: 'ProjectCreateWithoutTasksInput' });
  },
});

export const TaskCreateWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateWithoutSubtasksInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('project', { type: 'ProjectCreateNestedOneWithoutTasksInput' });
    t.field('parent', { type: 'TaskCreateNestedOneWithoutSubtasksInput' });
  },
});

export const TaskUncheckedCreateWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateWithoutSubtasksInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('projectId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
  },
});

export const TaskCreateOrConnectWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateOrConnectWithoutSubtasksInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('create', { type: 'TaskCreateWithoutSubtasksInput' });
  },
});

export const TaskCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateWithoutParentInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('project', { type: 'ProjectCreateNestedOneWithoutTasksInput' });
    t.field('subtasks', { type: 'TaskCreateNestedManyWithoutParentInput' });
  },
});

export const TaskUncheckedCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('projectId', { type: 'Int' });
    t.field('subtasks', { type: 'TaskUncheckedCreateNestedManyWithoutParentInput' });
  },
});

export const TaskCreateOrConnectWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateOrConnectWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('create', { type: 'TaskCreateWithoutParentInput' });
  },
});

export const TaskCreateManyParentInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyParentInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'TaskCreateManyParentInput' });
  },
});

export const ProjectUpsertWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUpsertWithoutTasksInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProjectUpdateWithoutTasksInput' });
    t.nonNull.field('create', { type: 'ProjectCreateWithoutTasksInput' });
    t.field('where', { type: 'ProjectWhereInput' });
  },
});

export const ProjectUpdateToOneWithWhereWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUpdateToOneWithWhereWithoutTasksInput',
  definition(t) {
    t.field('where', { type: 'ProjectWhereInput' });
    t.nonNull.field('data', { type: 'ProjectUpdateWithoutTasksInput' });
  },
});

export const ProjectUpdateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUpdateWithoutTasksInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('budget', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProjectUncheckedUpdateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProjectUncheckedUpdateWithoutTasksInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('startDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('endDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('budget', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TaskUpsertWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpsertWithoutSubtasksInput',
  definition(t) {
    t.nonNull.field('update', { type: 'TaskUpdateWithoutSubtasksInput' });
    t.nonNull.field('create', { type: 'TaskCreateWithoutSubtasksInput' });
    t.field('where', { type: 'TaskWhereInput' });
  },
});

export const TaskUpdateToOneWithWhereWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateToOneWithWhereWithoutSubtasksInput',
  definition(t) {
    t.field('where', { type: 'TaskWhereInput' });
    t.nonNull.field('data', { type: 'TaskUpdateWithoutSubtasksInput' });
  },
});

export const TaskUpdateWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithoutSubtasksInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('project', { type: 'ProjectUpdateOneWithoutTasksNestedInput' });
    t.field('parent', { type: 'TaskUpdateOneWithoutSubtasksNestedInput' });
  },
});

export const TaskUncheckedUpdateWithoutSubtasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateWithoutSubtasksInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('projectId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const TaskUpsertWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpsertWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('update', { type: 'TaskUpdateWithoutParentInput' });
    t.nonNull.field('create', { type: 'TaskCreateWithoutParentInput' });
  },
});

export const TaskUpdateWithWhereUniqueWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' });
    t.nonNull.field('data', { type: 'TaskUpdateWithoutParentInput' });
  },
});

export const TaskUpdateManyWithWhereWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyWithWhereWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskScalarWhereInput' });
    t.nonNull.field('data', { type: 'TaskUpdateManyMutationInput' });
  },
});

export const PostCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('categoryId', { type: 'Int' });
  },
});

export const CommentCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('postId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
  },
});

export const OrderCreateManyCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateManyCustomerInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.nonNull.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.field('notes', { type: 'String' });
    t.field('shippingAddress', { type: 'String' });
    t.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const ReviewCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const MessageCreateManySenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManySenderInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('receiverId', { type: 'Int' });
  },
});

export const MessageCreateManyReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyReceiverInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'String' });
    t.nonNull.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('senderId', { type: 'Int' });
  },
});

export const UserFollowCreateManyFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateManyFollowerInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UserFollowCreateManyFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowCreateManyFollowingInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('followerId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const PostUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutAuthorInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUncheckedUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const CommentUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutAuthorInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' });
    t.field('parent', { type: 'CommentUpdateOneWithoutRepliesNestedInput' });
    t.field('replies', { type: 'CommentUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('replies', { type: 'CommentUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const OrderUpdateWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithoutCustomerInput',
  definition(t) {
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('items', { type: 'OrderItemUpdateManyWithoutOrderNestedInput' });
  },
});

export const OrderUncheckedUpdateWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateWithoutCustomerInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('items', { type: 'OrderItemUncheckedUpdateManyWithoutOrderNestedInput' });
  },
});

export const OrderUncheckedUpdateManyWithoutCustomerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateManyWithoutCustomerInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('orderNumber', { type: 'StringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('subtotal', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('tax', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('shipping', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('notes', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('shippingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('billingAddress', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ReviewUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithoutAuthorInput',
  definition(t) {
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('product', { type: 'ProductUpdateOneRequiredWithoutReviewsNestedInput' });
  },
});

export const ReviewUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const ReviewUncheckedUpdateManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const MessageUpdateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithoutSenderInput',
  definition(t) {
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('receiver', { type: 'UserUpdateOneWithoutReceivedMessagesNestedInput' });
  },
});

export const MessageUncheckedUpdateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('receiverId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const MessageUncheckedUpdateManyWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('receiverId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const MessageUpdateWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithoutReceiverInput',
  definition(t) {
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('sender', { type: 'UserUpdateOneWithoutSentMessagesNestedInput' });
  },
});

export const MessageUncheckedUpdateWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateWithoutReceiverInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('senderId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const MessageUncheckedUpdateManyWithoutReceiverInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutReceiverInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('subject', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('read', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('senderId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const UserFollowUpdateWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateWithoutFollowerInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('following', { type: 'UserUpdateOneRequiredWithoutFollowingNestedInput' });
  },
});

export const UserFollowUncheckedUpdateWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateWithoutFollowerInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followingId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserFollowUncheckedUpdateManyWithoutFollowerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateManyWithoutFollowerInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followingId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserFollowUpdateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUpdateWithoutFollowingInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('follower', { type: 'UserUpdateOneRequiredWithoutFollowedByNestedInput' });
  },
});

export const UserFollowUncheckedUpdateWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateWithoutFollowingInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followerId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserFollowUncheckedUpdateManyWithoutFollowingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserFollowUncheckedUpdateManyWithoutFollowingInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('followerId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const PostUpdateWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutLikedByInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' });
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
  },
});

export const PostUncheckedUpdateWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutLikedByInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
  },
});

export const PostUncheckedUpdateManyWithoutLikedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutLikedByInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const GroupUpdateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateWithoutMembersInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const GroupUncheckedUpdateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const GroupUncheckedUpdateManyWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateManyWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('isPrivate', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const CommentCreateManyPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyPostInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
  },
});

export const CommentUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutPostInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutCommentsNestedInput' });
    t.field('parent', { type: 'CommentUpdateOneWithoutRepliesNestedInput' });
    t.field('replies', { type: 'CommentUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('replies', { type: 'CommentUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateManyWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const TagUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateWithoutPostsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TagUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TagUncheckedUpdateManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateManyWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const UserUpdateWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutLikedPostsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('groups', { type: 'GroupUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutLikedPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('groups', { type: 'GroupUncheckedUpdateManyWithoutMembersNestedInput' });
  },
});

export const UserUncheckedUpdateManyWithoutLikedPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutLikedPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const CommentCreateManyParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.nonNull.field('postId', { type: 'Int' });
  },
});

export const CommentUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutParentInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutCommentsNestedInput' });
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' });
    t.field('replies', { type: 'CommentUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('replies', { type: 'CommentUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CommentUncheckedUpdateManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const PostCreateManyCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyCategoryInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Float' });
    t.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
  },
});

export const CategoryCreateManyParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateManyParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const PostUpdateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutCategoryInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
    t.field('likedBy', { type: 'UserUncheckedUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const CategoryUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithoutParentInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutCategoryNestedInput' });
    t.field('children', { type: 'CategoryUpdateManyWithoutParentNestedInput' });
  },
});

export const CategoryUncheckedUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutCategoryNestedInput' });
    t.field('children', { type: 'CategoryUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const CategoryUncheckedUpdateManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateManyWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('color', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const PostUpdateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutTagsInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' });
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('likedBy', { type: 'UserUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutTagsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('likedBy', { type: 'UserUncheckedUpdateManyWithoutLikedPostsNestedInput' });
  },
});

export const PostUncheckedUpdateManyWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutTagsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('excerpt', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('featured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('viewCount', { type: 'IntFieldUpdateOperationsInput' });
    t.field('readTime', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('publishedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const OrderItemCreateManyProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateManyProductInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('orderId', { type: 'Int' });
  },
});

export const ReviewCreateManyProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyProductInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('rating', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
  },
});

export const OrderItemUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateWithoutProductInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutItemsNestedInput' });
  },
});

export const OrderItemUncheckedUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const OrderItemUncheckedUpdateManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateManyWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const ReviewUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithoutProductInput',
  definition(t) {
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneWithoutReviewsNestedInput' });
  },
});

export const ReviewUncheckedUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const ReviewUncheckedUpdateManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const ProductCategoryUpdateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateWithoutProductsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parent', { type: 'ProductCategoryUpdateOneWithoutChildrenNestedInput' });
    t.field('children', { type: 'ProductCategoryUpdateManyWithoutParentNestedInput' });
  },
});

export const ProductCategoryUncheckedUpdateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('children', { type: 'ProductCategoryUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const ProductCategoryUncheckedUpdateManyWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateManyWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const ProductCreateManyBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateManyBrandInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('sku', { type: 'String' });
    t.field('description', { type: 'String' });
    t.nonNull.field('price', { type: 'Float' });
    t.field('comparePrice', { type: 'Float' });
    t.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProductUpdateWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithoutBrandInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUpdateManyWithoutProductsNestedInput' });
  },
});

export const ProductUncheckedUpdateWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateWithoutBrandInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('orderItems', { type: 'OrderItemUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('productCategories', { type: 'ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput' });
  },
});

export const ProductUncheckedUpdateManyWithoutBrandInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyWithoutBrandInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProductCategoryCreateManyParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryCreateManyParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('name', { type: 'String' });
    t.nonNull.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const ProductCategoryUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUpdateWithoutParentInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('children', { type: 'ProductCategoryUpdateManyWithoutParentNestedInput' });
    t.field('products', { type: 'ProductUpdateManyWithoutProductCategoriesNestedInput' });
  },
});

export const ProductCategoryUncheckedUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('children', { type: 'ProductCategoryUncheckedUpdateManyWithoutParentNestedInput' });
    t.field('products', { type: 'ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput' });
  },
});

export const ProductCategoryUncheckedUpdateManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCategoryUncheckedUpdateManyWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('slug', { type: 'StringFieldUpdateOperationsInput' });
    t.field('order', { type: 'IntFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const ProductUpdateWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithoutProductCategoriesInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brand', { type: 'BrandUpdateOneWithoutProductsNestedInput' });
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutProductNestedInput' });
  },
});

export const ProductUncheckedUpdateWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateWithoutProductCategoriesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brandId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('orderItems', { type: 'OrderItemUncheckedUpdateManyWithoutProductNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutProductNestedInput' });
  },
});

export const ProductUncheckedUpdateManyWithoutProductCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyWithoutProductCategoriesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
    t.field('sku', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('comparePrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('costPrice', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('weight', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('isFeatured', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('brandId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const OrderItemCreateManyOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemCreateManyOrderInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('quantity', { type: 'Int' });
    t.nonNull.field('price', { type: 'Float' });
    t.nonNull.field('total', { type: 'Float' });
    t.nonNull.field('productId', { type: 'Int' });
  },
});

export const OrderItemUpdateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUpdateWithoutOrderInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('product', { type: 'ProductUpdateOneRequiredWithoutOrderItemsNestedInput' });
  },
});

export const OrderItemUncheckedUpdateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const OrderItemUncheckedUpdateManyWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderItemUncheckedUpdateManyWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' });
    t.field('price', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('total', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const UserUpdateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutGroupsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUpdateManyWithoutLikedByNestedInput' });
  },
});

export const UserUncheckedUpdateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutGroupsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('orders', { type: 'OrderUncheckedUpdateManyWithoutCustomerNestedInput' });
    t.field('reviews', { type: 'ReviewUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('sentMessages', { type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput' });
    t.field('receivedMessages', { type: 'MessageUncheckedUpdateManyWithoutReceiverNestedInput' });
    t.field('followedBy', { type: 'UserFollowUncheckedUpdateManyWithoutFollowerNestedInput' });
    t.field('following', { type: 'UserFollowUncheckedUpdateManyWithoutFollowingNestedInput' });
    t.field('likedPosts', { type: 'PostUncheckedUpdateManyWithoutLikedByNestedInput' });
  },
});

export const UserUncheckedUpdateManyWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutGroupsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('username', { type: 'StringFieldUpdateOperationsInput' });
    t.field('firstName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('lastName', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('isActive', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('balance', { type: 'FloatFieldUpdateOperationsInput' });
    t.field('metadata', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
  },
});

export const TaskCreateManyProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyProjectInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('parentId', { type: 'Int' });
  },
});

export const TaskUpdateWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithoutProjectInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parent', { type: 'TaskUpdateOneWithoutSubtasksNestedInput' });
    t.field('subtasks', { type: 'TaskUpdateManyWithoutParentNestedInput' });
  },
});

export const TaskUncheckedUpdateWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateWithoutProjectInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('subtasks', { type: 'TaskUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const TaskUncheckedUpdateManyWithoutProjectInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyWithoutProjectInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('parentId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const TaskCreateManyParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyParentInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.field('dueDate', { type: 'DateTime' });
    t.field('completedAt', { type: 'DateTime' });
    t.field('estimatedHours', { type: 'Float' });
    t.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('projectId', { type: 'Int' });
  },
});

export const TaskUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithoutParentInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('project', { type: 'ProjectUpdateOneWithoutTasksNestedInput' });
    t.field('subtasks', { type: 'TaskUpdateManyWithoutParentNestedInput' });
  },
});

export const TaskUncheckedUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('projectId', { type: 'NullableIntFieldUpdateOperationsInput' });
    t.field('subtasks', { type: 'TaskUncheckedUpdateManyWithoutParentNestedInput' });
  },
});

export const TaskUncheckedUpdateManyWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' });
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('status', { type: 'EnumStatusFieldUpdateOperationsInput' });
    t.field('priority', { type: 'EnumPriorityFieldUpdateOperationsInput' });
    t.field('dueDate', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('completedAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' });
    t.field('estimatedHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('actualHours', { type: 'NullableFloatFieldUpdateOperationsInput' });
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' });
    t.field('projectId', { type: 'NullableIntFieldUpdateOperationsInput' });
  },
});

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' });
  },
});

export const UserGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('email', { type: 'String' });
    t.field('username', { type: 'String' });
    t.nullable.field('firstName', { type: 'String' });
    t.nullable.field('lastName', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.nullable.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' });
  },
});

export const AggregateProfile = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProfile',
  definition(t) {
    t.nullable.field('_count', { type: 'ProfileCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProfileAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProfileSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProfileMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProfileMaxAggregateOutputType' });
  },
});

export const ProfileGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nullable.field('bio', { type: 'String' });
    t.nullable.field('avatar', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('location', { type: 'String' });
    t.nullable.field('birthDate', { type: 'DateTime' });
    t.nullable.field('phone', { type: 'String' });
    t.field('userId', { type: 'Int' });
    t.nullable.field('_count', { type: 'ProfileCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProfileAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProfileSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProfileMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProfileMaxAggregateOutputType' });
  },
});

export const AggregateUserFollow = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUserFollow',
  definition(t) {
    t.nullable.field('_count', { type: 'UserFollowCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'UserFollowAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'UserFollowSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserFollowMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserFollowMaxAggregateOutputType' });
  },
});

export const UserFollowGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFollowGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('followerId', { type: 'Int' });
    t.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'UserFollowCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'UserFollowAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'UserFollowSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserFollowMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserFollowMaxAggregateOutputType' });
  },
});

export const AggregatePost = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregatePost',
  definition(t) {
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'PostAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'PostSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' });
  },
});

export const PostGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('categoryId', { type: 'Int' });
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'PostAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'PostSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' });
  },
});

export const AggregateComment = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateComment',
  definition(t) {
    t.nullable.field('_count', { type: 'CommentCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CommentAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CommentSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CommentMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CommentMaxAggregateOutputType' });
  },
});

export const CommentGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.field('postId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('_count', { type: 'CommentCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CommentAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CommentSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CommentMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CommentMaxAggregateOutputType' });
  },
});

export const AggregateCategory = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCategory',
  definition(t) {
    t.nullable.field('_count', { type: 'CategoryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CategoryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CategorySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CategoryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CategoryMaxAggregateOutputType' });
  },
});

export const CategoryGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('_count', { type: 'CategoryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CategoryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CategorySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CategoryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CategoryMaxAggregateOutputType' });
  },
});

export const AggregateTag = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateTag',
  definition(t) {
    t.nullable.field('_count', { type: 'TagCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'TagAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'TagSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'TagMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'TagMaxAggregateOutputType' });
  },
});

export const TagGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'TagCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'TagAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'TagSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'TagMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'TagMaxAggregateOutputType' });
  },
});

export const AggregateProduct = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProduct',
  definition(t) {
    t.nullable.field('_count', { type: 'ProductCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProductAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProductSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProductMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProductMaxAggregateOutputType' });
  },
});

export const ProductGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('sku', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.nullable.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('brandId', { type: 'Int' });
    t.nullable.field('_count', { type: 'ProductCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProductAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProductSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProductMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProductMaxAggregateOutputType' });
  },
});

export const AggregateBrand = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateBrand',
  definition(t) {
    t.nullable.field('_count', { type: 'BrandCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'BrandAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'BrandSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'BrandMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'BrandMaxAggregateOutputType' });
  },
});

export const BrandGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('logo', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'BrandCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'BrandAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'BrandSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'BrandMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'BrandMaxAggregateOutputType' });
  },
});

export const AggregateProductCategory = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProductCategory',
  definition(t) {
    t.nullable.field('_count', { type: 'ProductCategoryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProductCategoryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProductCategorySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProductCategoryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProductCategoryMaxAggregateOutputType' });
  },
});

export const ProductCategoryGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategoryGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('_count', { type: 'ProductCategoryCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProductCategoryAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProductCategorySumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProductCategoryMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProductCategoryMaxAggregateOutputType' });
  },
});

export const AggregateOrder = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateOrder',
  definition(t) {
    t.nullable.field('_count', { type: 'OrderCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'OrderAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'OrderSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'OrderMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'OrderMaxAggregateOutputType' });
  },
});

export const OrderGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.field('total', { type: 'Float' });
    t.nullable.field('notes', { type: 'String' });
    t.nullable.field('shippingAddress', { type: 'String' });
    t.nullable.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('customerId', { type: 'Int' });
    t.nullable.field('_count', { type: 'OrderCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'OrderAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'OrderSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'OrderMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'OrderMaxAggregateOutputType' });
  },
});

export const AggregateOrderItem = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateOrderItem',
  definition(t) {
    t.nullable.field('_count', { type: 'OrderItemCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'OrderItemAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'OrderItemSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'OrderItemMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'OrderItemMaxAggregateOutputType' });
  },
});

export const OrderItemGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderItemGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('quantity', { type: 'Int' });
    t.field('price', { type: 'Float' });
    t.field('total', { type: 'Float' });
    t.field('orderId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.nullable.field('_count', { type: 'OrderItemCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'OrderItemAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'OrderItemSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'OrderItemMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'OrderItemMaxAggregateOutputType' });
  },
});

export const AggregateReview = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateReview',
  definition(t) {
    t.nullable.field('_count', { type: 'ReviewCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ReviewAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ReviewSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ReviewMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ReviewMaxAggregateOutputType' });
  },
});

export const ReviewGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('rating', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.nullable.field('_count', { type: 'ReviewCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ReviewAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ReviewSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ReviewMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ReviewMaxAggregateOutputType' });
  },
});

export const AggregateMessage = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateMessage',
  definition(t) {
    t.nullable.field('_count', { type: 'MessageCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'MessageAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'MessageSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'MessageMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'MessageMaxAggregateOutputType' });
  },
});

export const MessageGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nullable.field('subject', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('senderId', { type: 'Int' });
    t.nullable.field('receiverId', { type: 'Int' });
    t.nullable.field('_count', { type: 'MessageCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'MessageAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'MessageSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'MessageMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'MessageMaxAggregateOutputType' });
  },
});

export const AggregateGroup = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateGroup',
  definition(t) {
    t.nullable.field('_count', { type: 'GroupCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'GroupAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'GroupSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'GroupMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'GroupMaxAggregateOutputType' });
  },
});

export const GroupGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'GroupCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'GroupAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'GroupSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'GroupMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'GroupMaxAggregateOutputType' });
  },
});

export const AggregateProject = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProject',
  definition(t) {
    t.nullable.field('_count', { type: 'ProjectCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProjectAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProjectSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProjectMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProjectMaxAggregateOutputType' });
  },
});

export const ProjectGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('startDate', { type: 'DateTime' });
    t.nullable.field('endDate', { type: 'DateTime' });
    t.nullable.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'ProjectCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProjectAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProjectSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProjectMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProjectMaxAggregateOutputType' });
  },
});

export const AggregateTask = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateTask',
  definition(t) {
    t.nullable.field('_count', { type: 'TaskCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'TaskAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'TaskSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'TaskMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'TaskMaxAggregateOutputType' });
  },
});

export const TaskGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.nullable.field('dueDate', { type: 'DateTime' });
    t.nullable.field('completedAt', { type: 'DateTime' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('projectId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('_count', { type: 'TaskCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'TaskAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'TaskSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'TaskMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'TaskMaxAggregateOutputType' });
  },
});

export const AggregateSetting = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateSetting',
  definition(t) {
    t.nullable.field('_count', { type: 'SettingCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'SettingAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'SettingSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'SettingMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'SettingMaxAggregateOutputType' });
  },
});

export const SettingGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SettingGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('key', { type: 'String' });
    t.field('value', { type: 'String' });
    t.field('type', { type: 'String' });
    t.field('group', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'SettingCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'SettingAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'SettingSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'SettingMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'SettingMaxAggregateOutputType' });
  },
});

export const AggregateAuditLog = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateAuditLog',
  definition(t) {
    t.nullable.field('_count', { type: 'AuditLogCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'AuditLogAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'AuditLogSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'AuditLogMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'AuditLogMaxAggregateOutputType' });
  },
});

export const AuditLogGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('action', { type: 'String' });
    t.field('entity', { type: 'String' });
    t.field('entityId', { type: 'String' });
    t.nullable.field('oldValue', { type: 'String' });
    t.nullable.field('newValue', { type: 'String' });
    t.nullable.field('ipAddress', { type: 'String' });
    t.nullable.field('userAgent', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'AuditLogCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'AuditLogAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'AuditLogSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'AuditLogMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'AuditLogMaxAggregateOutputType' });
  },
});

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' });
    t.field('comments', { type: 'Int' });
    t.field('orders', { type: 'Int' });
    t.field('reviews', { type: 'Int' });
    t.field('sentMessages', { type: 'Int' });
    t.field('receivedMessages', { type: 'Int' });
    t.field('followedBy', { type: 'Int' });
    t.field('following', { type: 'Int' });
    t.field('likedPosts', { type: 'Int' });
    t.field('groups', { type: 'Int' });
  },
});

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('email', { type: 'Int' });
    t.field('username', { type: 'Int' });
    t.field('firstName', { type: 'Int' });
    t.field('lastName', { type: 'Int' });
    t.field('password', { type: 'Int' });
    t.field('role', { type: 'Int' });
    t.field('isActive', { type: 'Int' });
    t.field('balance', { type: 'Int' });
    t.field('metadata', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('balance', { type: 'Float' });
  },
});

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('balance', { type: 'Float' });
  },
});

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('email', { type: 'String' });
    t.nullable.field('username', { type: 'String' });
    t.nullable.field('firstName', { type: 'String' });
    t.nullable.field('lastName', { type: 'String' });
    t.nullable.field('password', { type: 'String' });
    t.nullable.field('role', { type: 'Role' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('balance', { type: 'Float' });
    t.nullable.field('metadata', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('email', { type: 'String' });
    t.nullable.field('username', { type: 'String' });
    t.nullable.field('firstName', { type: 'String' });
    t.nullable.field('lastName', { type: 'String' });
    t.nullable.field('password', { type: 'String' });
    t.nullable.field('role', { type: 'Role' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('balance', { type: 'Float' });
    t.nullable.field('metadata', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProfileCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('bio', { type: 'Int' });
    t.field('avatar', { type: 'Int' });
    t.field('website', { type: 'Int' });
    t.field('location', { type: 'Int' });
    t.field('birthDate', { type: 'Int' });
    t.field('phone', { type: 'Int' });
    t.field('userId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const ProfileAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('userId', { type: 'Float' });
  },
});

export const ProfileSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('userId', { type: 'Int' });
  },
});

export const ProfileMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('bio', { type: 'String' });
    t.nullable.field('avatar', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('location', { type: 'String' });
    t.nullable.field('birthDate', { type: 'DateTime' });
    t.nullable.field('phone', { type: 'String' });
    t.nullable.field('userId', { type: 'Int' });
  },
});

export const ProfileMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('bio', { type: 'String' });
    t.nullable.field('avatar', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('location', { type: 'String' });
    t.nullable.field('birthDate', { type: 'DateTime' });
    t.nullable.field('phone', { type: 'String' });
    t.nullable.field('userId', { type: 'Int' });
  },
});

export const UserFollowCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFollowCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('followerId', { type: 'Int' });
    t.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const UserFollowAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFollowAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('followerId', { type: 'Float' });
    t.nullable.field('followingId', { type: 'Float' });
  },
});

export const UserFollowSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFollowSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('followerId', { type: 'Int' });
    t.nullable.field('followingId', { type: 'Int' });
  },
});

export const UserFollowMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFollowMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('followerId', { type: 'Int' });
    t.nullable.field('followingId', { type: 'Int' });
    t.nullable.field('createdAt', { type: 'DateTime' });
  },
});

export const UserFollowMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserFollowMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('followerId', { type: 'Int' });
    t.nullable.field('followingId', { type: 'Int' });
    t.nullable.field('createdAt', { type: 'DateTime' });
  },
});

export const PostCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountOutputType',
  definition(t) {
    t.field('comments', { type: 'Int' });
    t.field('tags', { type: 'Int' });
    t.field('likedBy', { type: 'Int' });
  },
});

export const PostCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'Int' });
    t.field('slug', { type: 'Int' });
    t.field('content', { type: 'Int' });
    t.field('excerpt', { type: 'Int' });
    t.field('status', { type: 'Int' });
    t.field('featured', { type: 'Int' });
    t.field('viewCount', { type: 'Int' });
    t.field('readTime', { type: 'Int' });
    t.field('publishedAt', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
    t.field('categoryId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const PostAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('viewCount', { type: 'Float' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('authorId', { type: 'Float' });
    t.nullable.field('categoryId', { type: 'Float' });
  },
});

export const PostSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('viewCount', { type: 'Int' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('categoryId', { type: 'Int' });
  },
});

export const PostMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('excerpt', { type: 'String' });
    t.nullable.field('status', { type: 'Status' });
    t.nullable.field('featured', { type: 'Boolean' });
    t.nullable.field('viewCount', { type: 'Int' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('publishedAt', { type: 'DateTime' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('categoryId', { type: 'Int' });
  },
});

export const PostMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('excerpt', { type: 'String' });
    t.nullable.field('status', { type: 'Status' });
    t.nullable.field('featured', { type: 'Boolean' });
    t.nullable.field('viewCount', { type: 'Int' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('publishedAt', { type: 'DateTime' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('categoryId', { type: 'Int' });
  },
});

export const CommentCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentCountOutputType',
  definition(t) {
    t.field('replies', { type: 'Int' });
  },
});

export const CommentCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('content', { type: 'Int' });
    t.field('approved', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
    t.field('postId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CommentAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('authorId', { type: 'Float' });
    t.nullable.field('postId', { type: 'Float' });
    t.nullable.field('parentId', { type: 'Float' });
  },
});

export const CommentSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('postId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const CommentMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('approved', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('postId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const CommentMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('approved', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('postId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const CategoryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' });
    t.field('children', { type: 'Int' });
  },
});

export const CategoryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('slug', { type: 'Int' });
    t.field('description', { type: 'Int' });
    t.field('color', { type: 'Int' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const CategoryAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('order', { type: 'Float' });
    t.nullable.field('parentId', { type: 'Float' });
  },
});

export const CategorySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategorySumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('order', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const CategoryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('color', { type: 'String' });
    t.nullable.field('order', { type: 'Int' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const CategoryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('color', { type: 'String' });
    t.nullable.field('order', { type: 'Int' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const TagCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' });
  },
});

export const TagCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('slug', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const TagAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
  },
});

export const TagSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
  },
});

export const TagMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
  },
});

export const TagMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
  },
});

export const ProductCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCountOutputType',
  definition(t) {
    t.field('orderItems', { type: 'Int' });
    t.field('reviews', { type: 'Int' });
    t.field('productCategories', { type: 'Int' });
  },
});

export const ProductCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('sku', { type: 'Int' });
    t.field('description', { type: 'Int' });
    t.field('price', { type: 'Int' });
    t.field('comparePrice', { type: 'Int' });
    t.field('costPrice', { type: 'Int' });
    t.field('quantity', { type: 'Int' });
    t.field('weight', { type: 'Int' });
    t.field('isActive', { type: 'Int' });
    t.field('isFeatured', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('brandId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const ProductAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.nullable.field('quantity', { type: 'Float' });
    t.nullable.field('weight', { type: 'Float' });
    t.nullable.field('brandId', { type: 'Float' });
  },
});

export const ProductSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.nullable.field('quantity', { type: 'Int' });
    t.nullable.field('weight', { type: 'Float' });
    t.nullable.field('brandId', { type: 'Int' });
  },
});

export const ProductMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('sku', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.nullable.field('quantity', { type: 'Int' });
    t.nullable.field('weight', { type: 'Float' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('isFeatured', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('brandId', { type: 'Int' });
  },
});

export const ProductMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('sku', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.nullable.field('quantity', { type: 'Int' });
    t.nullable.field('weight', { type: 'Float' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('isFeatured', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('brandId', { type: 'Int' });
  },
});

export const BrandCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandCountOutputType',
  definition(t) {
    t.field('products', { type: 'Int' });
  },
});

export const BrandCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('slug', { type: 'Int' });
    t.field('logo', { type: 'Int' });
    t.field('description', { type: 'Int' });
    t.field('website', { type: 'Int' });
    t.field('isActive', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const BrandAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
  },
});

export const BrandSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
  },
});

export const BrandMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('logo', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const BrandMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'BrandMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('logo', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProductCategoryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategoryCountOutputType',
  definition(t) {
    t.field('children', { type: 'Int' });
    t.field('products', { type: 'Int' });
  },
});

export const ProductCategoryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategoryCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('slug', { type: 'Int' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const ProductCategoryAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategoryAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('order', { type: 'Float' });
    t.nullable.field('parentId', { type: 'Float' });
  },
});

export const ProductCategorySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategorySumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('order', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const ProductCategoryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategoryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('order', { type: 'Int' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const ProductCategoryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCategoryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('slug', { type: 'String' });
    t.nullable.field('order', { type: 'Int' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const OrderCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderCountOutputType',
  definition(t) {
    t.field('items', { type: 'Int' });
  },
});

export const OrderCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('orderNumber', { type: 'Int' });
    t.field('status', { type: 'Int' });
    t.field('subtotal', { type: 'Int' });
    t.field('tax', { type: 'Int' });
    t.field('shipping', { type: 'Int' });
    t.field('total', { type: 'Int' });
    t.field('notes', { type: 'Int' });
    t.field('shippingAddress', { type: 'Int' });
    t.field('billingAddress', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('customerId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const OrderAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('subtotal', { type: 'Float' });
    t.nullable.field('tax', { type: 'Float' });
    t.nullable.field('shipping', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('customerId', { type: 'Float' });
  },
});

export const OrderSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('subtotal', { type: 'Float' });
    t.nullable.field('tax', { type: 'Float' });
    t.nullable.field('shipping', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('customerId', { type: 'Int' });
  },
});

export const OrderMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('orderNumber', { type: 'String' });
    t.nullable.field('status', { type: 'Status' });
    t.nullable.field('subtotal', { type: 'Float' });
    t.nullable.field('tax', { type: 'Float' });
    t.nullable.field('shipping', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('notes', { type: 'String' });
    t.nullable.field('shippingAddress', { type: 'String' });
    t.nullable.field('billingAddress', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('customerId', { type: 'Int' });
  },
});

export const OrderMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('orderNumber', { type: 'String' });
    t.nullable.field('status', { type: 'Status' });
    t.nullable.field('subtotal', { type: 'Float' });
    t.nullable.field('tax', { type: 'Float' });
    t.nullable.field('shipping', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('notes', { type: 'String' });
    t.nullable.field('shippingAddress', { type: 'String' });
    t.nullable.field('billingAddress', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('customerId', { type: 'Int' });
  },
});

export const OrderItemCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderItemCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('quantity', { type: 'Int' });
    t.field('price', { type: 'Int' });
    t.field('total', { type: 'Int' });
    t.field('orderId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const OrderItemAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderItemAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('quantity', { type: 'Float' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('orderId', { type: 'Float' });
    t.nullable.field('productId', { type: 'Float' });
  },
});

export const OrderItemSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderItemSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('quantity', { type: 'Int' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('orderId', { type: 'Int' });
    t.nullable.field('productId', { type: 'Int' });
  },
});

export const OrderItemMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderItemMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('quantity', { type: 'Int' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('orderId', { type: 'Int' });
    t.nullable.field('productId', { type: 'Int' });
  },
});

export const OrderItemMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderItemMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('quantity', { type: 'Int' });
    t.nullable.field('price', { type: 'Float' });
    t.nullable.field('total', { type: 'Float' });
    t.nullable.field('orderId', { type: 'Int' });
    t.nullable.field('productId', { type: 'Int' });
  },
});

export const ReviewCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('rating', { type: 'Int' });
    t.field('title', { type: 'Int' });
    t.field('content', { type: 'Int' });
    t.field('approved', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const ReviewAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('rating', { type: 'Float' });
    t.nullable.field('authorId', { type: 'Float' });
    t.nullable.field('productId', { type: 'Float' });
  },
});

export const ReviewSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('rating', { type: 'Int' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('productId', { type: 'Int' });
  },
});

export const ReviewMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('rating', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('approved', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('productId', { type: 'Int' });
  },
});

export const ReviewMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('rating', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('approved', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('productId', { type: 'Int' });
  },
});

export const MessageCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('subject', { type: 'Int' });
    t.field('content', { type: 'Int' });
    t.field('read', { type: 'Int' });
    t.field('priority', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('senderId', { type: 'Int' });
    t.field('receiverId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const MessageAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('senderId', { type: 'Float' });
    t.nullable.field('receiverId', { type: 'Float' });
  },
});

export const MessageSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('senderId', { type: 'Int' });
    t.nullable.field('receiverId', { type: 'Int' });
  },
});

export const MessageMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('subject', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('read', { type: 'Boolean' });
    t.nullable.field('priority', { type: 'Priority' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('senderId', { type: 'Int' });
    t.nullable.field('receiverId', { type: 'Int' });
  },
});

export const MessageMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('subject', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('read', { type: 'Boolean' });
    t.nullable.field('priority', { type: 'Priority' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('senderId', { type: 'Int' });
    t.nullable.field('receiverId', { type: 'Int' });
  },
});

export const GroupCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupCountOutputType',
  definition(t) {
    t.field('members', { type: 'Int' });
  },
});

export const GroupCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('description', { type: 'Int' });
    t.field('isPrivate', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const GroupAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
  },
});

export const GroupSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
  },
});

export const GroupMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('isPrivate', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const GroupMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('isPrivate', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProjectCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectCountOutputType',
  definition(t) {
    t.field('tasks', { type: 'Int' });
  },
});

export const ProjectCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'Int' });
    t.field('description', { type: 'Int' });
    t.field('startDate', { type: 'Int' });
    t.field('endDate', { type: 'Int' });
    t.field('budget', { type: 'Int' });
    t.field('isActive', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const ProjectAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('budget', { type: 'Float' });
  },
});

export const ProjectSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('budget', { type: 'Float' });
  },
});

export const ProjectMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('startDate', { type: 'DateTime' });
    t.nullable.field('endDate', { type: 'DateTime' });
    t.nullable.field('budget', { type: 'Float' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const ProjectMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProjectMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('startDate', { type: 'DateTime' });
    t.nullable.field('endDate', { type: 'DateTime' });
    t.nullable.field('budget', { type: 'Float' });
    t.nullable.field('isActive', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const TaskCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskCountOutputType',
  definition(t) {
    t.field('subtasks', { type: 'Int' });
  },
});

export const TaskCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'Int' });
    t.field('description', { type: 'Int' });
    t.field('status', { type: 'Int' });
    t.field('priority', { type: 'Int' });
    t.field('dueDate', { type: 'Int' });
    t.field('completedAt', { type: 'Int' });
    t.field('estimatedHours', { type: 'Int' });
    t.field('actualHours', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('projectId', { type: 'Int' });
    t.field('parentId', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const TaskAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.nullable.field('projectId', { type: 'Float' });
    t.nullable.field('parentId', { type: 'Float' });
  },
});

export const TaskSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.nullable.field('projectId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const TaskMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('status', { type: 'Status' });
    t.nullable.field('priority', { type: 'Priority' });
    t.nullable.field('dueDate', { type: 'DateTime' });
    t.nullable.field('completedAt', { type: 'DateTime' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('projectId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const TaskMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('status', { type: 'Status' });
    t.nullable.field('priority', { type: 'Priority' });
    t.nullable.field('dueDate', { type: 'DateTime' });
    t.nullable.field('completedAt', { type: 'DateTime' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('projectId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
  },
});

export const SettingCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SettingCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('key', { type: 'Int' });
    t.field('value', { type: 'Int' });
    t.field('type', { type: 'Int' });
    t.field('group', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const SettingAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SettingAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
  },
});

export const SettingSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SettingSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
  },
});

export const SettingMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SettingMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('key', { type: 'String' });
    t.nullable.field('value', { type: 'String' });
    t.nullable.field('type', { type: 'String' });
    t.nullable.field('group', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const SettingMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SettingMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('key', { type: 'String' });
    t.nullable.field('value', { type: 'String' });
    t.nullable.field('type', { type: 'String' });
    t.nullable.field('group', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
  },
});

export const AuditLogCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('action', { type: 'Int' });
    t.field('entity', { type: 'Int' });
    t.field('entityId', { type: 'Int' });
    t.field('oldValue', { type: 'Int' });
    t.field('newValue', { type: 'Int' });
    t.field('ipAddress', { type: 'Int' });
    t.field('userAgent', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('_all', { type: 'Int' });
  },
});

export const AuditLogAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' });
  },
});

export const AuditLogSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
  },
});

export const AuditLogMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('action', { type: 'String' });
    t.nullable.field('entity', { type: 'String' });
    t.nullable.field('entityId', { type: 'String' });
    t.nullable.field('oldValue', { type: 'String' });
    t.nullable.field('newValue', { type: 'String' });
    t.nullable.field('ipAddress', { type: 'String' });
    t.nullable.field('userAgent', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
  },
});

export const AuditLogMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('action', { type: 'String' });
    t.nullable.field('entity', { type: 'String' });
    t.nullable.field('entityId', { type: 'String' });
    t.nullable.field('oldValue', { type: 'String' });
    t.nullable.field('newValue', { type: 'String' });
    t.nullable.field('ipAddress', { type: 'String' });
    t.nullable.field('userAgent', { type: 'String' });
    t.nullable.field('createdAt', { type: 'DateTime' });
  },
});

export const CreateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyUserAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('email', { type: 'String' });
    t.field('username', { type: 'String' });
    t.nullable.field('firstName', { type: 'String' });
    t.nullable.field('lastName', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.nullable.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UpdateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyUserAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('email', { type: 'String' });
    t.field('username', { type: 'String' });
    t.nullable.field('firstName', { type: 'String' });
    t.nullable.field('lastName', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('isActive', { type: 'Boolean' });
    t.field('balance', { type: 'Float' });
    t.nullable.field('metadata', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const CreateManyProfileAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyProfileAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nullable.field('bio', { type: 'String' });
    t.nullable.field('avatar', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('location', { type: 'String' });
    t.nullable.field('birthDate', { type: 'DateTime' });
    t.nullable.field('phone', { type: 'String' });
    t.field('userId', { type: 'Int' });
    t.field('user', { type: 'User' });
  },
});

export const UpdateManyProfileAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyProfileAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nullable.field('bio', { type: 'String' });
    t.nullable.field('avatar', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.nullable.field('location', { type: 'String' });
    t.nullable.field('birthDate', { type: 'DateTime' });
    t.nullable.field('phone', { type: 'String' });
    t.field('userId', { type: 'Int' });
    t.field('user', { type: 'User' });
  },
});

export const CreateManyUserFollowAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyUserFollowAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('followerId', { type: 'Int' });
    t.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('follower', { type: 'User' });
    t.field('following', { type: 'User' });
  },
});

export const UpdateManyUserFollowAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyUserFollowAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('followerId', { type: 'Int' });
    t.field('followingId', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('follower', { type: 'User' });
    t.field('following', { type: 'User' });
  },
});

export const CreateManyPostAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyPostAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('categoryId', { type: 'Int' });
    t.nullable.field('author', { type: 'User' });
    t.nullable.field('category', { type: 'Category' });
  },
});

export const UpdateManyPostAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyPostAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('excerpt', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('featured', { type: 'Boolean' });
    t.field('viewCount', { type: 'Int' });
    t.nullable.field('readTime', { type: 'Float' });
    t.nullable.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.nullable.field('categoryId', { type: 'Int' });
    t.nullable.field('author', { type: 'User' });
    t.nullable.field('category', { type: 'Category' });
  },
});

export const CreateManyCommentAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyCommentAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.field('postId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('author', { type: 'User' });
    t.field('post', { type: 'Post' });
    t.nullable.field('parent', { type: 'Comment' });
  },
});

export const UpdateManyCommentAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyCommentAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.field('postId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('author', { type: 'User' });
    t.field('post', { type: 'Post' });
    t.nullable.field('parent', { type: 'Comment' });
  },
});

export const CreateManyCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('parent', { type: 'Category' });
  },
});

export const UpdateManyCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('color', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('parent', { type: 'Category' });
  },
});

export const CreateManyTagAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyTagAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UpdateManyTagAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyTagAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const CreateManyProductAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyProductAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('sku', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.nullable.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('brandId', { type: 'Int' });
    t.nullable.field('brand', { type: 'Brand' });
  },
});

export const UpdateManyProductAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyProductAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('sku', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('price', { type: 'Float' });
    t.nullable.field('comparePrice', { type: 'Float' });
    t.nullable.field('costPrice', { type: 'Float' });
    t.field('quantity', { type: 'Int' });
    t.nullable.field('weight', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('isFeatured', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('brandId', { type: 'Int' });
    t.nullable.field('brand', { type: 'Brand' });
  },
});

export const CreateManyBrandAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyBrandAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('logo', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UpdateManyBrandAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyBrandAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.nullable.field('logo', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('website', { type: 'String' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const CreateManyProductCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyProductCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('parent', { type: 'ProductCategory' });
  },
});

export const UpdateManyProductCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyProductCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('slug', { type: 'String' });
    t.field('order', { type: 'Int' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('parent', { type: 'ProductCategory' });
  },
});

export const CreateManyOrderAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyOrderAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.field('total', { type: 'Float' });
    t.nullable.field('notes', { type: 'String' });
    t.nullable.field('shippingAddress', { type: 'String' });
    t.nullable.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('customerId', { type: 'Int' });
    t.nullable.field('customer', { type: 'User' });
  },
});

export const UpdateManyOrderAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyOrderAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('orderNumber', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('subtotal', { type: 'Float' });
    t.field('tax', { type: 'Float' });
    t.field('shipping', { type: 'Float' });
    t.field('total', { type: 'Float' });
    t.nullable.field('notes', { type: 'String' });
    t.nullable.field('shippingAddress', { type: 'String' });
    t.nullable.field('billingAddress', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('customerId', { type: 'Int' });
    t.nullable.field('customer', { type: 'User' });
  },
});

export const CreateManyOrderItemAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyOrderItemAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('quantity', { type: 'Int' });
    t.field('price', { type: 'Float' });
    t.field('total', { type: 'Float' });
    t.field('orderId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.field('order', { type: 'Order' });
    t.field('product', { type: 'Product' });
  },
});

export const UpdateManyOrderItemAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyOrderItemAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('quantity', { type: 'Int' });
    t.field('price', { type: 'Float' });
    t.field('total', { type: 'Float' });
    t.field('orderId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.field('order', { type: 'Order' });
    t.field('product', { type: 'Product' });
  },
});

export const CreateManyReviewAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyReviewAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('rating', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.nullable.field('author', { type: 'User' });
    t.field('product', { type: 'Product' });
  },
});

export const UpdateManyReviewAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyReviewAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('rating', { type: 'Int' });
    t.nullable.field('title', { type: 'String' });
    t.nullable.field('content', { type: 'String' });
    t.field('approved', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
    t.field('productId', { type: 'Int' });
    t.nullable.field('author', { type: 'User' });
    t.field('product', { type: 'Product' });
  },
});

export const CreateManyMessageAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyMessageAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nullable.field('subject', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('senderId', { type: 'Int' });
    t.nullable.field('receiverId', { type: 'Int' });
    t.nullable.field('sender', { type: 'User' });
    t.nullable.field('receiver', { type: 'User' });
  },
});

export const UpdateManyMessageAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyMessageAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nullable.field('subject', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('read', { type: 'Boolean' });
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('senderId', { type: 'Int' });
    t.nullable.field('receiverId', { type: 'Int' });
    t.nullable.field('sender', { type: 'User' });
    t.nullable.field('receiver', { type: 'User' });
  },
});

export const CreateManyGroupAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyGroupAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UpdateManyGroupAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyGroupAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('isPrivate', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const CreateManyProjectAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyProjectAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('startDate', { type: 'DateTime' });
    t.nullable.field('endDate', { type: 'DateTime' });
    t.nullable.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UpdateManyProjectAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyProjectAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.nullable.field('startDate', { type: 'DateTime' });
    t.nullable.field('endDate', { type: 'DateTime' });
    t.nullable.field('budget', { type: 'Float' });
    t.field('isActive', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const CreateManyTaskAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyTaskAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.nullable.field('dueDate', { type: 'DateTime' });
    t.nullable.field('completedAt', { type: 'DateTime' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('projectId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('project', { type: 'Project' });
    t.nullable.field('parent', { type: 'Task' });
  },
});

export const UpdateManyTaskAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyTaskAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('title', { type: 'String' });
    t.nullable.field('description', { type: 'String' });
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.nullable.field('dueDate', { type: 'DateTime' });
    t.nullable.field('completedAt', { type: 'DateTime' });
    t.nullable.field('estimatedHours', { type: 'Float' });
    t.nullable.field('actualHours', { type: 'Float' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('projectId', { type: 'Int' });
    t.nullable.field('parentId', { type: 'Int' });
    t.nullable.field('project', { type: 'Project' });
    t.nullable.field('parent', { type: 'Task' });
  },
});

export const CreateManySettingAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManySettingAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('key', { type: 'String' });
    t.field('value', { type: 'String' });
    t.field('type', { type: 'String' });
    t.field('group', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const UpdateManySettingAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManySettingAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('key', { type: 'String' });
    t.field('value', { type: 'String' });
    t.field('type', { type: 'String' });
    t.field('group', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});

export const CreateManyAuditLogAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyAuditLogAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('action', { type: 'String' });
    t.field('entity', { type: 'String' });
    t.field('entityId', { type: 'String' });
    t.nullable.field('oldValue', { type: 'String' });
    t.nullable.field('newValue', { type: 'String' });
    t.nullable.field('ipAddress', { type: 'String' });
    t.nullable.field('userAgent', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});

export const UpdateManyAuditLogAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyAuditLogAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.field('action', { type: 'String' });
    t.field('entity', { type: 'String' });
    t.field('entityId', { type: 'String' });
    t.nullable.field('oldValue', { type: 'String' });
    t.nullable.field('newValue', { type: 'String' });
    t.nullable.field('ipAddress', { type: 'String' });
    t.nullable.field('userAgent', { type: 'String' });
    t.field('createdAt', { type: 'DateTime' });
  },
});
