import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'id',
    'email',
    'name',
    'password',
    'settings',
    'createdAt',
    'updatedAt',
  ],
})

export const PostScalarFieldEnum = enumType({
  name: 'PostScalarFieldEnum',
  members: [
    'id',
    'title',
    'content',
    'published',
    'metadata',
    'authorId',
    'categoryId',
    'createdAt',
    'updatedAt',
  ],
})

export const ProfileScalarFieldEnum = enumType({
  name: 'ProfileScalarFieldEnum',
  members: ['id', 'bio', 'avatar', 'userId'],
})

export const CategoryScalarFieldEnum = enumType({
  name: 'CategoryScalarFieldEnum',
  members: ['id', 'name'],
})

export const TagScalarFieldEnum = enumType({
  name: 'TagScalarFieldEnum',
  members: ['id', 'name'],
})

export const ProductScalarFieldEnum = enumType({
  name: 'ProductScalarFieldEnum',
  members: [
    'id',
    'name',
    'description',
    'images',
    'tags',
    'features',
    'sizes',
    'ratings',
    'available',
    'createdAt',
    'updatedAt',
  ],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const NullableJsonNullValueInput = enumType({
  name: 'NullableJsonNullValueInput',
  members: ['DbNull', 'JsonNull'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const JsonNullValueFilter = enumType({
  name: 'JsonNullValueFilter',
  members: ['DbNull', 'JsonNull', 'AnyNull'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('name', { type: 'StringNullableFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('settings', { type: 'JsonNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('posts', { type: 'PostListRelationFilter' })
    t.field('profile', { type: 'ProfileNullableScalarRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrderInput' })
    t.field('password', { type: 'SortOrder' })
    t.field('settings', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' })
    t.field('profile', { type: 'ProfileOrderByWithRelationInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('name', { type: 'StringNullableFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('settings', { type: 'JsonNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('posts', { type: 'PostListRelationFilter' })
    t.field('profile', { type: 'ProfileNullableScalarRelationFilter' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrderInput' })
    t.field('password', { type: 'SortOrder' })
    t.field('settings', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringNullableWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('settings', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const PostWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostWhereInput' })
    t.list.field('OR', { type: 'PostWhereInput' })
    t.list.field('NOT', { type: 'PostWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('content', { type: 'StringNullableFilter' })
    t.field('published', { type: 'BoolFilter' })
    t.field('metadata', { type: 'JsonNullableFilter' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('categoryId', { type: 'IntNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('author', { type: 'UserNullableScalarRelationFilter' })
    t.field('category', { type: 'CategoryNullableScalarRelationFilter' })
    t.field('tags', { type: 'TagListRelationFilter' })
  },
})

export const PostOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('content', { type: 'SortOrderInput' })
    t.field('published', { type: 'SortOrder' })
    t.field('metadata', { type: 'SortOrderInput' })
    t.field('authorId', { type: 'SortOrderInput' })
    t.field('categoryId', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('author', { type: 'UserOrderByWithRelationInput' })
    t.field('category', { type: 'CategoryOrderByWithRelationInput' })
    t.field('tags', { type: 'TagOrderByRelationAggregateInput' })
  },
})

export const PostWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'PostWhereInput' })
    t.list.field('OR', { type: 'PostWhereInput' })
    t.list.field('NOT', { type: 'PostWhereInput' })
    t.field('title', { type: 'StringFilter' })
    t.field('content', { type: 'StringNullableFilter' })
    t.field('published', { type: 'BoolFilter' })
    t.field('metadata', { type: 'JsonNullableFilter' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('categoryId', { type: 'IntNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('author', { type: 'UserNullableScalarRelationFilter' })
    t.field('category', { type: 'CategoryNullableScalarRelationFilter' })
    t.field('tags', { type: 'TagListRelationFilter' })
  },
})

export const PostOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('content', { type: 'SortOrderInput' })
    t.field('published', { type: 'SortOrder' })
    t.field('metadata', { type: 'SortOrderInput' })
    t.field('authorId', { type: 'SortOrderInput' })
    t.field('categoryId', { type: 'SortOrderInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'PostCountOrderByAggregateInput' })
    t.field('_avg', { type: 'PostAvgOrderByAggregateInput' })
    t.field('_max', { type: 'PostMaxOrderByAggregateInput' })
    t.field('_min', { type: 'PostMinOrderByAggregateInput' })
    t.field('_sum', { type: 'PostSumOrderByAggregateInput' })
  },
})

export const PostScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'PostScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('content', { type: 'StringNullableWithAggregatesFilter' })
    t.field('published', { type: 'BoolWithAggregatesFilter' })
    t.field('metadata', { type: 'JsonNullableWithAggregatesFilter' })
    t.field('authorId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('categoryId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const ProfileWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProfileWhereInput' })
    t.list.field('OR', { type: 'ProfileWhereInput' })
    t.list.field('NOT', { type: 'ProfileWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('bio', { type: 'StringNullableFilter' })
    t.field('avatar', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
  },
})

export const ProfileOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrderInput' })
    t.field('avatar', { type: 'SortOrderInput' })
    t.field('userId', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
  },
})

export const ProfileWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.list.field('AND', { type: 'ProfileWhereInput' })
    t.list.field('OR', { type: 'ProfileWhereInput' })
    t.list.field('NOT', { type: 'ProfileWhereInput' })
    t.field('bio', { type: 'StringNullableFilter' })
    t.field('avatar', { type: 'StringNullableFilter' })
    t.field('user', { type: 'UserScalarRelationFilter' })
  },
})

export const ProfileOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrderInput' })
    t.field('avatar', { type: 'SortOrderInput' })
    t.field('userId', { type: 'SortOrder' })
    t.field('_count', { type: 'ProfileCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ProfileAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ProfileMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProfileMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ProfileSumOrderByAggregateInput' })
  },
})

export const ProfileScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProfileScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ProfileScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ProfileScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('bio', { type: 'StringNullableWithAggregatesFilter' })
    t.field('avatar', { type: 'StringNullableWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
  },
})

export const CategoryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryWhereInput' })
    t.list.field('OR', { type: 'CategoryWhereInput' })
    t.list.field('NOT', { type: 'CategoryWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('posts', { type: 'PostListRelationFilter' })
  },
})

export const CategoryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' })
  },
})

export const CategoryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.list.field('AND', { type: 'CategoryWhereInput' })
    t.list.field('OR', { type: 'CategoryWhereInput' })
    t.list.field('NOT', { type: 'CategoryWhereInput' })
    t.field('posts', { type: 'PostListRelationFilter' })
  },
})

export const CategoryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('_count', { type: 'CategoryCountOrderByAggregateInput' })
    t.field('_avg', { type: 'CategoryAvgOrderByAggregateInput' })
    t.field('_max', { type: 'CategoryMaxOrderByAggregateInput' })
    t.field('_min', { type: 'CategoryMinOrderByAggregateInput' })
    t.field('_sum', { type: 'CategorySumOrderByAggregateInput' })
  },
})

export const CategoryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'CategoryScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'CategoryScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
  },
})

export const TagWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TagWhereInput' })
    t.list.field('OR', { type: 'TagWhereInput' })
    t.list.field('NOT', { type: 'TagWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('posts', { type: 'PostListRelationFilter' })
  },
})

export const TagOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' })
  },
})

export const TagWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.list.field('AND', { type: 'TagWhereInput' })
    t.list.field('OR', { type: 'TagWhereInput' })
    t.list.field('NOT', { type: 'TagWhereInput' })
    t.field('posts', { type: 'PostListRelationFilter' })
  },
})

export const TagOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('_count', { type: 'TagCountOrderByAggregateInput' })
    t.field('_avg', { type: 'TagAvgOrderByAggregateInput' })
    t.field('_max', { type: 'TagMaxOrderByAggregateInput' })
    t.field('_min', { type: 'TagMinOrderByAggregateInput' })
    t.field('_sum', { type: 'TagSumOrderByAggregateInput' })
  },
})

export const TagScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'TagScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'TagScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'TagScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
  },
})

export const ProductWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductWhereInput' })
    t.list.field('OR', { type: 'ProductWhereInput' })
    t.list.field('NOT', { type: 'ProductWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('images', { type: 'StringNullableListFilter' })
    t.field('tags', { type: 'StringNullableListFilter' })
    t.field('features', { type: 'JsonNullableListFilter' })
    t.field('sizes', { type: 'IntNullableListFilter' })
    t.field('ratings', { type: 'FloatNullableListFilter' })
    t.field('available', { type: 'BoolFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const ProductOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrderInput' })
    t.field('images', { type: 'SortOrder' })
    t.field('tags', { type: 'SortOrder' })
    t.field('features', { type: 'SortOrder' })
    t.field('sizes', { type: 'SortOrder' })
    t.field('ratings', { type: 'SortOrder' })
    t.field('available', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ProductWhereInput' })
    t.list.field('OR', { type: 'ProductWhereInput' })
    t.list.field('NOT', { type: 'ProductWhereInput' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('images', { type: 'StringNullableListFilter' })
    t.field('tags', { type: 'StringNullableListFilter' })
    t.field('features', { type: 'JsonNullableListFilter' })
    t.field('sizes', { type: 'IntNullableListFilter' })
    t.field('ratings', { type: 'FloatNullableListFilter' })
    t.field('available', { type: 'BoolFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const ProductOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrderInput' })
    t.field('images', { type: 'SortOrder' })
    t.field('tags', { type: 'SortOrder' })
    t.field('features', { type: 'SortOrder' })
    t.field('sizes', { type: 'SortOrder' })
    t.field('ratings', { type: 'SortOrder' })
    t.field('available', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'ProductCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ProductAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ProductMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProductMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ProductSumOrderByAggregateInput' })
  },
})

export const ProductScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ProductScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ProductScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('description', { type: 'StringNullableWithAggregatesFilter' })
    t.field('images', { type: 'StringNullableListFilter' })
    t.field('tags', { type: 'StringNullableListFilter' })
    t.field('features', { type: 'JsonNullableListFilter' })
    t.field('sizes', { type: 'IntNullableListFilter' })
    t.field('ratings', { type: 'FloatNullableListFilter' })
    t.field('available', { type: 'BoolWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' })
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' })
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' })
  },
})

export const PostUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'Int' })
    t.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' })
  },
})

export const PostUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' })
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' })
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' })
  },
})

export const PostCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'Int' })
    t.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyMutationInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProfileCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateInput',
  definition(t) {
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutProfileInput' })
  },
})

export const ProfileUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const ProfileUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateInput',
  definition(t) {
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutProfileNestedInput' })
  },
})

export const ProfileUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProfileCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const ProfileUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateManyMutationInput',
  definition(t) {
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const ProfileUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const CategoryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutCategoryInput' })
  },
})

export const CategoryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutCategoryInput',
    })
  },
})

export const CategoryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutCategoryNestedInput' })
  },
})

export const CategoryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutCategoryNestedInput',
    })
  },
})

export const CategoryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const CategoryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const CategoryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TagCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutTagsInput' })
  },
})

export const TagUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('posts', { type: 'PostUncheckedCreateNestedManyWithoutTagsInput' })
  },
})

export const TagUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutTagsNestedInput' })
  },
})

export const TagUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUncheckedUpdateManyWithoutTagsNestedInput' })
  },
})

export const TagCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const TagUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TagUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ProductCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProductUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProductCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProductUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.list.field('images', { type: 'String' })
    t.list.field('tags', { type: 'String' })
    t.list.field('features', { type: 'Json' })
    t.list.field('sizes', { type: 'Int' })
    t.list.field('ratings', { type: 'Float' })
    t.field('available', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const JsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('array_contains', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const PostListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostListRelationFilter',
  definition(t) {
    t.field('every', { type: 'PostWhereInput' })
    t.field('some', { type: 'PostWhereInput' })
    t.field('none', { type: 'PostWhereInput' })
  },
})

export const ProfileNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProfileWhereInput' })
    t.field('isNot', { type: 'ProfileWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const PostOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('settings', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const JsonNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('array_contains', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedJsonNullableFilter' })
    t.field('_max', { type: 'NestedJsonNullableFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const UserNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const CategoryNullableScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryNullableScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'CategoryWhereInput' })
    t.field('isNot', { type: 'CategoryWhereInput' })
  },
})

export const TagListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagListRelationFilter',
  definition(t) {
    t.field('every', { type: 'TagWhereInput' })
    t.field('some', { type: 'TagWhereInput' })
    t.field('none', { type: 'TagWhereInput' })
  },
})

export const TagOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const PostCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('content', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('metadata', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
  },
})

export const PostMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('content', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('content', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('categoryId', { type: 'SortOrder' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const UserScalarRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const ProfileCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const ProfileAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const ProfileMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const ProfileMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const ProfileSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const CategoryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const CategoryAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const CategoryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const CategoryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const CategorySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategorySumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const TagCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const TagAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const TagMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const TagMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const TagSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const StringNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'String' })
    t.field('has', { type: 'String' })
    t.list.field('hasEvery', { type: 'String' })
    t.list.field('hasSome', { type: 'String' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const JsonNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'JsonNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Json' })
    t.field('has', { type: 'Json' })
    t.list.field('hasEvery', { type: 'Json' })
    t.list.field('hasSome', { type: 'Json' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const IntNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Int' })
    t.field('has', { type: 'Int' })
    t.list.field('hasEvery', { type: 'Int' })
    t.list.field('hasSome', { type: 'Int' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const FloatNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Float' })
    t.field('has', { type: 'Float' })
    t.list.field('hasEvery', { type: 'Float' })
    t.list.field('hasSome', { type: 'Float' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const ProductCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('images', { type: 'SortOrder' })
    t.field('tags', { type: 'SortOrder' })
    t.field('features', { type: 'SortOrder' })
    t.field('sizes', { type: 'SortOrder' })
    t.field('ratings', { type: 'SortOrder' })
    t.field('available', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('sizes', { type: 'SortOrder' })
    t.field('ratings', { type: 'SortOrder' })
  },
})

export const ProductMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('available', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('available', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProductSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('sizes', { type: 'SortOrder' })
    t.field('ratings', { type: 'SortOrder' })
  },
})

export const PostCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const ProfileCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
  },
})

export const PostUncheckedCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const ProfileUncheckedCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const PostUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const ProfileUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('upsert', { type: 'ProfileUpsertWithoutUserInput' })
    t.field('disconnect', { type: 'ProfileWhereInput' })
    t.field('delete', { type: 'ProfileWhereInput' })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
    t.field('update', { type: 'ProfileUpdateToOneWithWhereWithoutUserInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const PostUncheckedUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const ProfileUncheckedUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'ProfileCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('upsert', { type: 'ProfileUpsertWithoutUserInput' })
    t.field('disconnect', { type: 'ProfileWhereInput' })
    t.field('delete', { type: 'ProfileWhereInput' })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
    t.field('update', { type: 'ProfileUpdateToOneWithWhereWithoutUserInput' })
  },
})

export const UserCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CategoryCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutPostsInput' })
    t.field('connectOrCreate', {
      type: 'CategoryCreateOrConnectWithoutPostsInput',
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput' })
  },
})

export const TagCreateNestedManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateNestedManyWithoutPostsInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' })
    t.list.field('connectOrCreate', {
      type: 'TagCreateOrConnectWithoutPostsInput',
    })
    t.list.field('connect', { type: 'TagWhereUniqueInput' })
  },
})

export const TagUncheckedCreateNestedManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedCreateNestedManyWithoutPostsInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' })
    t.list.field('connectOrCreate', {
      type: 'TagCreateOrConnectWithoutPostsInput',
    })
    t.list.field('connect', { type: 'TagWhereUniqueInput' })
  },
})

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  },
})

export const UserUpdateOneWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('upsert', { type: 'UserUpsertWithoutPostsInput' })
    t.field('disconnect', { type: 'UserWhereInput' })
    t.field('delete', { type: 'UserWhereInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutPostsInput' })
  },
})

export const CategoryUpdateOneWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateOneWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutPostsInput' })
    t.field('connectOrCreate', {
      type: 'CategoryCreateOrConnectWithoutPostsInput',
    })
    t.field('upsert', { type: 'CategoryUpsertWithoutPostsInput' })
    t.field('disconnect', { type: 'CategoryWhereInput' })
    t.field('delete', { type: 'CategoryWhereInput' })
    t.field('connect', { type: 'CategoryWhereUniqueInput' })
    t.field('update', { type: 'CategoryUpdateToOneWithWhereWithoutPostsInput' })
  },
})

export const TagUpdateManyWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyWithoutPostsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' })
    t.list.field('connectOrCreate', {
      type: 'TagCreateOrConnectWithoutPostsInput',
    })
    t.list.field('upsert', {
      type: 'TagUpsertWithWhereUniqueWithoutPostsInput',
    })
    t.list.field('set', { type: 'TagWhereUniqueInput' })
    t.list.field('disconnect', { type: 'TagWhereUniqueInput' })
    t.list.field('delete', { type: 'TagWhereUniqueInput' })
    t.list.field('connect', { type: 'TagWhereUniqueInput' })
    t.list.field('update', {
      type: 'TagUpdateWithWhereUniqueWithoutPostsInput',
    })
    t.list.field('updateMany', {
      type: 'TagUpdateManyWithWhereWithoutPostsInput',
    })
    t.list.field('deleteMany', { type: 'TagScalarWhereInput' })
  },
})

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const TagUncheckedUpdateManyWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateManyWithoutPostsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TagCreateWithoutPostsInput' })
    t.list.field('connectOrCreate', {
      type: 'TagCreateOrConnectWithoutPostsInput',
    })
    t.list.field('upsert', {
      type: 'TagUpsertWithWhereUniqueWithoutPostsInput',
    })
    t.list.field('set', { type: 'TagWhereUniqueInput' })
    t.list.field('disconnect', { type: 'TagWhereUniqueInput' })
    t.list.field('delete', { type: 'TagWhereUniqueInput' })
    t.list.field('connect', { type: 'TagWhereUniqueInput' })
    t.list.field('update', {
      type: 'TagUpdateWithWhereUniqueWithoutPostsInput',
    })
    t.list.field('updateMany', {
      type: 'TagUpdateManyWithWhereWithoutPostsInput',
    })
    t.list.field('deleteMany', { type: 'TagScalarWhereInput' })
  },
})

export const UserCreateNestedOneWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutProfileInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutProfileInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutProfileInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserUpdateOneRequiredWithoutProfileNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutProfileNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutProfileInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutProfileInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutProfileInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutProfileInput' })
  },
})

export const PostCreateNestedManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutCategoryInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutCategoryInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutCategoryInput',
    })
    t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const PostUncheckedCreateNestedManyWithoutCategoryInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'PostUncheckedCreateNestedManyWithoutCategoryInput',
    definition(t) {
      t.list.field('create', { type: 'PostCreateWithoutCategoryInput' })
      t.list.field('connectOrCreate', {
        type: 'PostCreateOrConnectWithoutCategoryInput',
      })
      t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' })
      t.list.field('connect', { type: 'PostWhereUniqueInput' })
    },
  })

export const PostUpdateManyWithoutCategoryNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutCategoryNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutCategoryInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutCategoryInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutCategoryInput',
    })
    t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutCategoryInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutCategoryInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const PostUncheckedUpdateManyWithoutCategoryNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'PostUncheckedUpdateManyWithoutCategoryNestedInput',
    definition(t) {
      t.list.field('create', { type: 'PostCreateWithoutCategoryInput' })
      t.list.field('connectOrCreate', {
        type: 'PostCreateOrConnectWithoutCategoryInput',
      })
      t.list.field('upsert', {
        type: 'PostUpsertWithWhereUniqueWithoutCategoryInput',
      })
      t.field('createMany', { type: 'PostCreateManyCategoryInputEnvelope' })
      t.list.field('set', { type: 'PostWhereUniqueInput' })
      t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
      t.list.field('delete', { type: 'PostWhereUniqueInput' })
      t.list.field('connect', { type: 'PostWhereUniqueInput' })
      t.list.field('update', {
        type: 'PostUpdateWithWhereUniqueWithoutCategoryInput',
      })
      t.list.field('updateMany', {
        type: 'PostUpdateManyWithWhereWithoutCategoryInput',
      })
      t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
    },
  })

export const PostCreateNestedManyWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutTagsInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutTagsInput',
    })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const PostUncheckedCreateNestedManyWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutTagsInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutTagsInput',
    })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const PostUpdateManyWithoutTagsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutTagsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutTagsInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutTagsInput',
    })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutTagsInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutTagsInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const PostUncheckedUpdateManyWithoutTagsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutTagsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutTagsInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutTagsInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutTagsInput',
    })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutTagsInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutTagsInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const ProductCreateimagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateimagesInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const ProductCreatetagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreatetagsInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const ProductCreatefeaturesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreatefeaturesInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Json' })
  },
})

export const ProductCreatesizesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreatesizesInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Int' })
  },
})

export const ProductCreateratingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateratingsInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Float' })
  },
})

export const ProductUpdateimagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateimagesInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const ProductUpdatetagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdatetagsInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const ProductUpdatefeaturesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdatefeaturesInput',
  definition(t) {
    t.list.field('set', { type: 'Json' })
    t.list.field('push', { type: 'Json' })
  },
})

export const ProductUpdatesizesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdatesizesInput',
  definition(t) {
    t.list.field('set', { type: 'Int' })
    t.list.field('push', { type: 'Int' })
  },
})

export const ProductUpdateratingsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateratingsInput',
  definition(t) {
    t.list.field('set', { type: 'Float' })
    t.list.field('push', { type: 'Float' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedJsonNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedJsonNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Json' })
    t.list.field('path', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('string_contains', { type: 'String' })
    t.field('string_starts_with', { type: 'String' })
    t.field('string_ends_with', { type: 'String' })
    t.field('array_starts_with', { type: 'Json' })
    t.field('array_ends_with', { type: 'Json' })
    t.field('array_contains', { type: 'Json' })
    t.field('lt', { type: 'Json' })
    t.field('lte', { type: 'Json' })
    t.field('gt', { type: 'Json' })
    t.field('gte', { type: 'Json' })
    t.field('not', { type: 'Json' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableFilter' })
  },
})

export const PostCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' })
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' })
  },
})

export const PostUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' })
  },
})

export const PostCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', { type: 'PostCreateWithoutAuthorInput' })
  },
})

export const PostCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyAuthorInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ProfileCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateWithoutUserInput',
  definition(t) {
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
  },
})

export const ProfileUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
  },
})

export const ProfileCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProfileWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ProfileCreateWithoutUserInput' })
  },
})

export const PostUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('update', { type: 'PostUpdateWithoutAuthorInput' })
    t.nonNull.field('create', { type: 'PostCreateWithoutAuthorInput' })
  },
})

export const PostUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('data', { type: 'PostUpdateWithoutAuthorInput' })
  },
})

export const PostUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' })
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' })
  },
})

export const PostScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereInput' })
    t.list.field('OR', { type: 'PostScalarWhereInput' })
    t.list.field('NOT', { type: 'PostScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('content', { type: 'StringNullableFilter' })
    t.field('published', { type: 'BoolFilter' })
    t.field('metadata', { type: 'JsonNullableFilter' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('categoryId', { type: 'IntNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const ProfileUpsertWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpsertWithoutUserInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProfileUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'ProfileCreateWithoutUserInput' })
    t.field('where', { type: 'ProfileWhereInput' })
  },
})

export const ProfileUpdateToOneWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateToOneWithWhereWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'ProfileWhereInput' })
    t.nonNull.field('data', { type: 'ProfileUpdateWithoutUserInput' })
  },
})

export const ProfileUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateWithoutUserInput',
  definition(t) {
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const ProfileUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UserCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutPostsInput' })
  },
})

export const CategoryCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
  },
})

export const CategoryUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const CategoryCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' })
    t.nonNull.field('create', { type: 'CategoryCreateWithoutPostsInput' })
  },
})

export const TagCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateWithoutPostsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
  },
})

export const TagUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const TagCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagWhereUniqueInput' })
    t.nonNull.field('create', { type: 'TagCreateWithoutPostsInput' })
  },
})

export const UserUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutPostsInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutPostsInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutPostsInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutPostsInput' })
  },
})

export const UserUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutPostsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
  },
})

export const CategoryUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'CategoryUpdateWithoutPostsInput' })
    t.nonNull.field('create', { type: 'CategoryCreateWithoutPostsInput' })
    t.field('where', { type: 'CategoryWhereInput' })
  },
})

export const CategoryUpdateToOneWithWhereWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateToOneWithWhereWithoutPostsInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereInput' })
    t.nonNull.field('data', { type: 'CategoryUpdateWithoutPostsInput' })
  },
})

export const CategoryUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithoutPostsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const CategoryUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TagUpsertWithWhereUniqueWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpsertWithWhereUniqueWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagWhereUniqueInput' })
    t.nonNull.field('update', { type: 'TagUpdateWithoutPostsInput' })
    t.nonNull.field('create', { type: 'TagCreateWithoutPostsInput' })
  },
})

export const TagUpdateWithWhereUniqueWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateWithWhereUniqueWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagWhereUniqueInput' })
    t.nonNull.field('data', { type: 'TagUpdateWithoutPostsInput' })
  },
})

export const TagUpdateManyWithWhereWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateManyWithWhereWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TagScalarWhereInput' })
    t.nonNull.field('data', { type: 'TagUpdateManyMutationInput' })
  },
})

export const TagScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TagScalarWhereInput' })
    t.list.field('OR', { type: 'TagScalarWhereInput' })
    t.list.field('NOT', { type: 'TagScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
  },
})

export const UserCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutProfileInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
  },
})

export const UserUncheckedCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
  },
})

export const UserCreateOrConnectWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutProfileInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutProfileInput' })
  },
})

export const UserUpsertWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutProfileInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutProfileInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutProfileInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutProfileInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutProfileInput' })
  },
})

export const UserUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutProfileInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
  },
})

export const PostCreateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' })
    t.field('tags', { type: 'TagCreateNestedManyWithoutPostsInput' })
  },
})

export const PostUncheckedCreateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('tags', { type: 'TagUncheckedCreateNestedManyWithoutPostsInput' })
  },
})

export const PostCreateOrConnectWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', { type: 'PostCreateWithoutCategoryInput' })
  },
})

export const PostCreateManyCategoryInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyCategoryInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyCategoryInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const PostUpsertWithWhereUniqueWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('update', { type: 'PostUpdateWithoutCategoryInput' })
    t.nonNull.field('create', { type: 'PostCreateWithoutCategoryInput' })
  },
})

export const PostUpdateWithWhereUniqueWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('data', { type: 'PostUpdateWithoutCategoryInput' })
  },
})

export const PostUpdateManyWithWhereWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutCategoryInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' })
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' })
  },
})

export const PostCreateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutTagsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' })
    t.field('category', { type: 'CategoryCreateNestedOneWithoutPostsInput' })
  },
})

export const PostUncheckedCreateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutTagsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'Int' })
    t.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCreateOrConnectWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', { type: 'PostCreateWithoutTagsInput' })
  },
})

export const PostUpsertWithWhereUniqueWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('update', { type: 'PostUpdateWithoutTagsInput' })
    t.nonNull.field('create', { type: 'PostCreateWithoutTagsInput' })
  },
})

export const PostUpdateWithWhereUniqueWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('data', { type: 'PostUpdateWithoutTagsInput' })
  },
})

export const PostUpdateManyWithWhereWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutTagsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' })
    t.nonNull.field('data', { type: 'PostUpdateManyMutationInput' })
  },
})

export const PostCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutAuthorInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' })
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const TagUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUpdateWithoutPostsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TagUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TagUncheckedUpdateManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TagUncheckedUpdateManyWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const PostCreateManyCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyCategoryInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutCategoryInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' })
    t.field('tags', { type: 'TagUpdateManyWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('tags', { type: 'TagUncheckedUpdateManyWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateManyWithoutCategoryInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutCategoryInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUpdateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutTagsInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' })
    t.field('category', { type: 'CategoryUpdateOneWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutTagsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateManyWithoutTagsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutTagsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('content', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('metadata', { type: 'Json' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('categoryId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const UserGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.field('password', { type: 'String' })
    t.nullable.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const AggregatePost = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregatePost',
  definition(t) {
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'PostAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'PostSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' })
  },
})

export const PostGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.nullable.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.nullable.field('metadata', { type: 'Json' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'PostAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'PostSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' })
  },
})

export const AggregateProfile = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProfile',
  definition(t) {
    t.nullable.field('_count', { type: 'ProfileCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ProfileAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProfileSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProfileMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProfileMaxAggregateOutputType' })
  },
})

export const ProfileGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.nullable.field('_count', { type: 'ProfileCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ProfileAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProfileSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProfileMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProfileMaxAggregateOutputType' })
  },
})

export const AggregateCategory = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCategory',
  definition(t) {
    t.nullable.field('_count', { type: 'CategoryCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'CategoryAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'CategorySumAggregateOutputType' })
    t.nullable.field('_min', { type: 'CategoryMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'CategoryMaxAggregateOutputType' })
  },
})

export const CategoryGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.nullable.field('_count', { type: 'CategoryCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'CategoryAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'CategorySumAggregateOutputType' })
    t.nullable.field('_min', { type: 'CategoryMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'CategoryMaxAggregateOutputType' })
  },
})

export const AggregateTag = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateTag',
  definition(t) {
    t.nullable.field('_count', { type: 'TagCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'TagAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'TagSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'TagMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'TagMaxAggregateOutputType' })
  },
})

export const TagGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.nullable.field('_count', { type: 'TagCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'TagAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'TagSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'TagMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'TagMaxAggregateOutputType' })
  },
})

export const AggregateProduct = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProduct',
  definition(t) {
    t.nullable.field('_count', { type: 'ProductCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ProductAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProductSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProductMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProductMaxAggregateOutputType' })
  },
})

export const ProductGroupByOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductGroupByOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('images', { type: 'String' })
    t.nullable.field('tags', { type: 'String' })
    t.nullable.field('features', { type: 'Json' })
    t.nullable.field('sizes', { type: 'Int' })
    t.nullable.field('ratings', { type: 'Float' })
    t.field('available', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', { type: 'ProductCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ProductAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProductSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProductMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProductMaxAggregateOutputType' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('settings', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountOutputType',
  definition(t) {
    t.field('tags', { type: 'Int' })
  },
})

export const PostCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('content', { type: 'Int' })
    t.field('published', { type: 'Int' })
    t.field('metadata', { type: 'Int' })
    t.field('authorId', { type: 'Int' })
    t.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const PostAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('authorId', { type: 'Float' })
    t.nullable.field('categoryId', { type: 'Float' })
  },
})

export const PostSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('categoryId', { type: 'Int' })
  },
})

export const PostMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('content', { type: 'String' })
    t.nullable.field('published', { type: 'Boolean' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('categoryId', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('content', { type: 'String' })
    t.nullable.field('published', { type: 'Boolean' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('categoryId', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProfileCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('bio', { type: 'Int' })
    t.field('avatar', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProfileAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
  },
})

export const ProfileSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const ProfileMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const ProfileMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const CategoryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' })
  },
})

export const CategoryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const CategoryAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const CategorySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategorySumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const CategoryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
  },
})

export const CategoryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
  },
})

export const TagCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' })
  },
})

export const TagCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const TagAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const TagSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const TagMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
  },
})

export const TagMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TagMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
  },
})

export const ProductCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('images', { type: 'Int' })
    t.field('tags', { type: 'Int' })
    t.field('features', { type: 'Int' })
    t.field('sizes', { type: 'Int' })
    t.field('ratings', { type: 'Int' })
    t.field('available', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProductAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('sizes', { type: 'Float' })
    t.nullable.field('ratings', { type: 'Float' })
  },
})

export const ProductSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('sizes', { type: 'Int' })
    t.nullable.field('ratings', { type: 'Float' })
  },
})

export const ProductMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('available', { type: 'Boolean' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProductMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('available', { type: 'Boolean' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CreateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyUserAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.field('password', { type: 'String' })
    t.nullable.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UpdateManyUserAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyUserAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.field('password', { type: 'String' })
    t.nullable.field('settings', { type: 'Json' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CreateManyPostAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyPostAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.nullable.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.nullable.field('metadata', { type: 'Json' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('author', { type: 'User' })
    t.nullable.field('category', { type: 'Category' })
  },
})

export const UpdateManyPostAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyPostAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'String' })
    t.nullable.field('content', { type: 'String' })
    t.field('published', { type: 'Boolean' })
    t.nullable.field('metadata', { type: 'Json' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('categoryId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('author', { type: 'User' })
    t.nullable.field('category', { type: 'Category' })
  },
})

export const CreateManyProfileAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyProfileAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('user', { type: 'User' })
  },
})

export const UpdateManyProfileAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyProfileAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.field('userId', { type: 'Int' })
    t.field('user', { type: 'User' })
  },
})

export const CreateManyCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
  },
})

export const UpdateManyCategoryAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyCategoryAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
  },
})

export const CreateManyTagAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyTagAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
  },
})

export const UpdateManyTagAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyTagAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
  },
})

export const CreateManyProductAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CreateManyProductAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('images', { type: 'String' })
    t.nullable.field('tags', { type: 'String' })
    t.nullable.field('features', { type: 'Json' })
    t.nullable.field('sizes', { type: 'Int' })
    t.nullable.field('ratings', { type: 'Float' })
    t.field('available', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const UpdateManyProductAndReturnOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UpdateManyProductAndReturnOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('images', { type: 'String' })
    t.nullable.field('tags', { type: 'String' })
    t.nullable.field('features', { type: 'Json' })
    t.nullable.field('sizes', { type: 'Int' })
    t.nullable.field('ratings', { type: 'Float' })
    t.field('available', { type: 'Boolean' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
