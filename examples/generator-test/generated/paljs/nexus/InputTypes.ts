import { enumType, inputObjectType, objectType } from 'nexus';

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],
});

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: ["id","email","name","password","role","createdAt","updatedAt"],
});

export const PostScalarFieldEnum = enumType({
  name: 'PostScalarFieldEnum',
  members: ["id","title","content","published","createdAt","updatedAt","authorId"],
});

export const CommentScalarFieldEnum = enumType({
  name: 'CommentScalarFieldEnum',
  members: ["id","content","createdAt","postId","authorId"],
});

export const ProfileScalarFieldEnum = enumType({
  name: 'ProfileScalarFieldEnum',
  members: ["id","bio","avatar","userId"],
});

export const TagScalarFieldEnum = enumType({
  name: 'TagScalarFieldEnum',
  members: ["id","name"],
});

export const AuditLogScalarFieldEnum = enumType({
  name: 'AuditLogScalarFieldEnum',
  members: ["id","action","entity","entityId","data","createdAt"],
});

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ["asc","desc"],
});

export const NullableJsonNullValueInput = enumType({
  name: 'NullableJsonNullValueInput',
  members: ["DbNull","JsonNull"],
});

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ["default","insensitive"],
});

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ["first","last"],
});

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ["DbNull","JsonNull","AnyNull"],
});

export const Role = enumType({
  name: 'Role',
  members: ["USER","ADMIN","MODERATOR"],
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
    t.field('name', { type: 'StringNullableFilter' });
    t.field('password', { type: 'StringFilter' });
    t.field('role', { type: 'EnumRoleFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
    t.field('profile', { type: 'ProfileNullableScalarRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
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
    t.field('name', { type: 'SortOrderInput' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' });
    t.field('profile', { type: 'ProfileOrderByWithRelationInput' });
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' });
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
    t.list.field('AND', { type: 'UserWhereInput' });
    t.list.field('OR', { type: 'UserWhereInput' });
    t.list.field('NOT', { type: 'UserWhereInput' });
    t.field('name', { type: 'StringNullableFilter' });
    t.field('password', { type: 'StringFilter' });
    t.field('role', { type: 'EnumRoleFilter' });
    t.field('posts', { type: 'PostListRelationFilter' });
    t.field('profile', { type: 'ProfileNullableScalarRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
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
    t.field('name', { type: 'SortOrderInput' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
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
    t.field('name', { type: 'StringNullableWithAggregatesFilter' });
    t.field('password', { type: 'StringWithAggregatesFilter' });
    t.field('role', { type: 'EnumRoleWithAggregatesFilter' });
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
    t.field('content', { type: 'StringNullableFilter' });
    t.field('published', { type: 'BoolFilter' });
    t.field('authorId', { type: 'IntFilter' });
    t.field('author', { type: 'UserScalarRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
    t.field('tags', { type: 'TagListRelationFilter' });
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
    t.field('content', { type: 'SortOrderInput' });
    t.field('published', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('author', { type: 'UserOrderByWithRelationInput' });
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' });
    t.field('tags', { type: 'TagOrderByRelationAggregateInput' });
  },
});

export const PostWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.list.field('AND', { type: 'PostWhereInput' });
    t.list.field('OR', { type: 'PostWhereInput' });
    t.list.field('NOT', { type: 'PostWhereInput' });
    t.field('title', { type: 'StringFilter' });
    t.field('content', { type: 'StringNullableFilter' });
    t.field('published', { type: 'BoolFilter' });
    t.field('authorId', { type: 'IntFilter' });
    t.field('author', { type: 'UserScalarRelationFilter' });
    t.field('comments', { type: 'CommentListRelationFilter' });
    t.field('tags', { type: 'TagListRelationFilter' });
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
    t.field('content', { type: 'SortOrderInput' });
    t.field('published', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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
    t.field('content', { type: 'StringNullableWithAggregatesFilter' });
    t.field('published', { type: 'BoolWithAggregatesFilter' });
    t.field('authorId', { type: 'IntWithAggregatesFilter' });
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
    t.field('postId', { type: 'IntFilter' });
    t.field('authorId', { type: 'IntFilter' });
    t.field('post', { type: 'PostScalarRelationFilter' });
    t.field('author', { type: 'UserScalarRelationFilter' });
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
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
    t.field('post', { type: 'PostOrderByWithRelationInput' });
    t.field('author', { type: 'UserOrderByWithRelationInput' });
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
    t.field('postId', { type: 'IntFilter' });
    t.field('authorId', { type: 'IntFilter' });
    t.field('post', { type: 'PostScalarRelationFilter' });
    t.field('author', { type: 'UserScalarRelationFilter' });
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
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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
    t.field('postId', { type: 'IntWithAggregatesFilter' });
    t.field('authorId', { type: 'IntWithAggregatesFilter' });
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
    t.field('userId', { type: 'IntWithAggregatesFilter' });
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
    t.list.field('AND', { type: 'TagWhereInput' });
    t.list.field('OR', { type: 'TagWhereInput' });
    t.list.field('NOT', { type: 'TagWhereInput' });
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
    t.field('entityId', { type: 'IntFilter' });
    t.field('data', { type: 'JsonNullableFilter' });
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
    t.field('data', { type: 'SortOrderInput' });
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
    t.field('entityId', { type: 'IntFilter' });
    t.field('data', { type: 'JsonNullableFilter' });
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
    t.field('data', { type: 'SortOrderInput' });
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
    t.field('entityId', { type: 'IntWithAggregatesFilter' });
    t.field('data', { type: 'JsonNullableWithAggregatesFilter' });
  },
});

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
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
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
  },
});

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
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
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
  },
});

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' });
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
  },
});

export const PostCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
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
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('authorId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
  },
});

export const PostUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneRequiredWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
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
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('authorId', { type: 'Int' });
  },
});

export const PostUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyMutationInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const CommentCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' });
    t.nonNull.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' });
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
    t.nonNull.field('postId', { type: 'Int' });
    t.nonNull.field('authorId', { type: 'Int' });
  },
});

export const CommentUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' });
    t.field('author', { type: 'UserUpdateOneRequiredWithoutCommentsNestedInput' });
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
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
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
    t.nonNull.field('postId', { type: 'Int' });
    t.nonNull.field('authorId', { type: 'Int' });
  },
});

export const CommentUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyMutationInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
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
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
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
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const TagCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
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
  },
});

export const TagUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
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
    t.nonNull.field('entityId', { type: 'Int' });
    t.field('data', { type: 'Json' });
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
    t.nonNull.field('entityId', { type: 'Int' });
    t.field('data', { type: 'Json' });
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
    t.field('entityId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('data', { type: 'Json' });
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
    t.field('entityId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('data', { type: 'Json' });
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
    t.nonNull.field('entityId', { type: 'Int' });
    t.field('data', { type: 'Json' });
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
    t.field('entityId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('data', { type: 'Json' });
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
    t.field('entityId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('data', { type: 'Json' });
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
    t.field('mode', { type: 'QueryMode' });
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
    t.field('mode', { type: 'QueryMode' });
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

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('email', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
  },
});

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
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
    t.field('name', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
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
    t.field('name', { type: 'SortOrder' });
    t.field('password', { type: 'SortOrder' });
    t.field('role', { type: 'SortOrder' });
  },
});

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
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
    t.field('mode', { type: 'QueryMode' });
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
    t.field('mode', { type: 'QueryMode' });
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

export const TagOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByRelationAggregateInput',
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
    t.field('content', { type: 'SortOrder' });
    t.field('published', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
  },
});

export const PostAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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
    t.field('content', { type: 'SortOrder' });
    t.field('published', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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
    t.field('content', { type: 'SortOrder' });
    t.field('published', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
  },
});

export const PostSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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

export const CommentCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('content', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
  },
});

export const CommentAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
  },
});

export const CommentSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('postId', { type: 'SortOrder' });
    t.field('authorId', { type: 'SortOrder' });
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

export const TagCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('name', { type: 'SortOrder' });
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

export const JsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' });
    t.list.field('path', { type: 'String' });
    t.field('mode', { type: 'QueryMode' });
    t.field('string_contains', { type: 'String' });
    t.field('string_starts_with', { type: 'String' });
    t.field('string_ends_with', { type: 'String' });
    t.field('array_starts_with', { type: 'Json' });
    t.field('array_ends_with', { type: 'Json' });
    t.field('array_contains', { type: 'Json' });
    t.field('lt', { type: 'Json' });
    t.field('lte', { type: 'Json' });
    t.field('gt', { type: 'Json' });
    t.field('gte', { type: 'Json' });
    t.field('not', { type: 'Json' });
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
    t.field('data', { type: 'SortOrder' });
  },
});

export const AuditLogAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
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
  },
});

export const AuditLogSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AuditLogSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' });
    t.field('entityId', { type: 'SortOrder' });
  },
});

export const JsonNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' });
    t.list.field('path', { type: 'String' });
    t.field('mode', { type: 'QueryMode' });
    t.field('string_contains', { type: 'String' });
    t.field('string_starts_with', { type: 'String' });
    t.field('string_ends_with', { type: 'String' });
    t.field('array_starts_with', { type: 'Json' });
    t.field('array_ends_with', { type: 'Json' });
    t.field('array_contains', { type: 'Json' });
    t.field('lt', { type: 'Json' });
    t.field('lte', { type: 'Json' });
    t.field('gt', { type: 'Json' });
    t.field('gte', { type: 'Json' });
    t.field('not', { type: 'Json' });
    t.field('_count', { type: 'NestedIntNullableFilter' });
    t.field('_min', { type: 'NestedJsonNullableFilter' });
    t.field('_max', { type: 'NestedJsonNullableFilter' });
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

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' });
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

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' });
  },
});

export const UserUpdateOneRequiredWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPostsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' });
    t.field('upsert', { type: 'UserUpsertWithoutPostsInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutPostsInput' });
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

export const UserUpdateOneRequiredWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCommentsInput' });
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutCommentsInput' });
    t.field('upsert', { type: 'UserUpsertWithoutCommentsInput' });
    t.field('connect', { type: 'UserWhereUniqueInput' });
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutCommentsInput' });
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

export const NestedJsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedJsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' });
    t.list.field('path', { type: 'String' });
    t.field('mode', { type: 'QueryMode' });
    t.field('string_contains', { type: 'String' });
    t.field('string_starts_with', { type: 'String' });
    t.field('string_ends_with', { type: 'String' });
    t.field('array_starts_with', { type: 'Json' });
    t.field('array_ends_with', { type: 'Json' });
    t.field('array_contains', { type: 'Json' });
    t.field('lt', { type: 'Json' });
    t.field('lte', { type: 'Json' });
    t.field('gt', { type: 'Json' });
    t.field('gte', { type: 'Json' });
    t.field('not', { type: 'Json' });
  },
});

export const PostCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
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
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
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
    t.field('skipDuplicates', { type: 'Boolean' });
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

export const CommentCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' });
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
    t.nonNull.field('postId', { type: 'Int' });
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
    t.field('skipDuplicates', { type: 'Boolean' });
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
    t.field('content', { type: 'StringNullableFilter' });
    t.field('published', { type: 'BoolFilter' });
    t.field('authorId', { type: 'IntFilter' });
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
    t.field('postId', { type: 'IntFilter' });
    t.field('authorId', { type: 'IntFilter' });
  },
});

export const UserCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
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
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
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

export const CommentCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutPostInput',
  definition(t) {
    t.nonNull.field('content', { type: 'String' });
    t.nonNull.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' });
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
    t.nonNull.field('authorId', { type: 'Int' });
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
    t.field('skipDuplicates', { type: 'Boolean' });
  },
});

export const TagCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
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
  },
});

export const PostCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' });
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
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('authorId', { type: 'Int' });
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' });
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

export const UserCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' });
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
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('profile', { type: 'ProfileUncheckedCreateNestedOneWithoutUserInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneRequiredWithoutPostsNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('profile', { type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput' });
  },
});

export const UserCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutProfileInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' });
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' });
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
    t.field('name', { type: 'String' });
    t.nonNull.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutAuthorInput' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' });
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
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('password', { type: 'StringFieldUpdateOperationsInput' });
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' });
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput' });
  },
});

export const PostCreateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutTagsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' });
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' });
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
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.nonNull.field('authorId', { type: 'Int' });
    t.field('comments', { type: 'CommentUncheckedCreateNestedManyWithoutPostInput' });
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

export const PostCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' });
    t.nonNull.field('title', { type: 'String' });
    t.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
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
    t.nonNull.field('postId', { type: 'Int' });
  },
});

export const PostUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutAuthorInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
  },
});

export const CommentUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutAuthorInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' });
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
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
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
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' });
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
    t.nonNull.field('authorId', { type: 'Int' });
  },
});

export const CommentUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutPostInput',
  definition(t) {
    t.field('content', { type: 'StringFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneRequiredWithoutCommentsNestedInput' });
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
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
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
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
  },
});

export const TagUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateWithoutPostsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' });
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
  },
});

export const PostUpdateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutTagsInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' });
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('author', { type: 'UserUpdateOneRequiredWithoutPostsNestedInput' });
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
    t.field('comments', { type: 'CommentUncheckedUpdateManyWithoutPostNestedInput' });
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
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' });
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' });
    t.field('authorId', { type: 'IntFieldUpdateOperationsInput' });
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
    t.nullable.field('name', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' });
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
    t.nullable.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
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
    t.field('createdAt', { type: 'DateTime' });
    t.field('postId', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
    t.nullable.field('_count', { type: 'CommentCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'CommentAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'CommentSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'CommentMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'CommentMaxAggregateOutputType' });
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
    t.field('userId', { type: 'Int' });
    t.nullable.field('_count', { type: 'ProfileCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'ProfileAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'ProfileSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'ProfileMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'ProfileMaxAggregateOutputType' });
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
    t.nullable.field('_count', { type: 'TagCountAggregateOutputType' });
    t.nullable.field('_avg', { type: 'TagAvgAggregateOutputType' });
    t.nullable.field('_sum', { type: 'TagSumAggregateOutputType' });
    t.nullable.field('_min', { type: 'TagMinAggregateOutputType' });
    t.nullable.field('_max', { type: 'TagMaxAggregateOutputType' });
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
    t.field('entityId', { type: 'Int' });
    t.nullable.field('data', { type: 'Json' });
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
    t.field('name', { type: 'Int' });
    t.field('password', { type: 'Int' });
    t.field('role', { type: 'Int' });
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
  },
});

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
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
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('password', { type: 'String' });
    t.nullable.field('role', { type: 'Role' });
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
    t.nullable.field('name', { type: 'String' });
    t.nullable.field('password', { type: 'String' });
    t.nullable.field('role', { type: 'Role' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
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
    t.field('content', { type: 'Int' });
    t.field('published', { type: 'Int' });
    t.field('createdAt', { type: 'Int' });
    t.field('updatedAt', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
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
    t.nullable.field('authorId', { type: 'Float' });
  },
});

export const PostSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('authorId', { type: 'Int' });
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
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('published', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
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
    t.nullable.field('content', { type: 'String' });
    t.nullable.field('published', { type: 'Boolean' });
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('authorId', { type: 'Int' });
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
    t.field('createdAt', { type: 'Int' });
    t.field('postId', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
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
    t.nullable.field('postId', { type: 'Float' });
    t.nullable.field('authorId', { type: 'Float' });
  },
});

export const CommentSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('postId', { type: 'Int' });
    t.nullable.field('authorId', { type: 'Int' });
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
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('postId', { type: 'Int' });
    t.nullable.field('authorId', { type: 'Int' });
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
    t.nullable.field('createdAt', { type: 'DateTime' });
    t.nullable.field('postId', { type: 'Int' });
    t.nullable.field('authorId', { type: 'Int' });
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
    t.nullable.field('userId', { type: 'Int' });
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
    t.field('data', { type: 'Int' });
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
    t.nullable.field('entityId', { type: 'Float' });
  },
});

export const AuditLogSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AuditLogSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' });
    t.nullable.field('entityId', { type: 'Int' });
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
    t.nullable.field('entityId', { type: 'Int' });
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
    t.nullable.field('entityId', { type: 'Int' });
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
    t.nullable.field('name', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
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
    t.nullable.field('name', { type: 'String' });
    t.field('password', { type: 'String' });
    t.field('role', { type: 'Role' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
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
    t.nullable.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('author', { type: 'User' });
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
    t.nullable.field('content', { type: 'String' });
    t.field('published', { type: 'Boolean' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('authorId', { type: 'Int' });
    t.field('author', { type: 'User' });
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
    t.field('createdAt', { type: 'DateTime' });
    t.field('postId', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
    t.field('post', { type: 'Post' });
    t.field('author', { type: 'User' });
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
    t.field('createdAt', { type: 'DateTime' });
    t.field('postId', { type: 'Int' });
    t.field('authorId', { type: 'Int' });
    t.field('post', { type: 'Post' });
    t.field('author', { type: 'User' });
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
    t.field('userId', { type: 'Int' });
    t.field('user', { type: 'User' });
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
    t.field('entityId', { type: 'Int' });
    t.nullable.field('data', { type: 'Json' });
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
    t.field('entityId', { type: 'Int' });
    t.nullable.field('data', { type: 'Json' });
    t.field('createdAt', { type: 'DateTime' });
  },
});
