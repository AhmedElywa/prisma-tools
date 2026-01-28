import { objectType, list } from 'nexus'

export const Post = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.nullable.string('content')
    t.boolean('published')
    t.nullable.json('metadata')
    t.nullable.int('authorId')
    t.nullable.int('categoryId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('author', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
      },
      resolve(root: any) {
        return root.author
      },
    })
    t.nullable.field('category', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
      },
      resolve(root: any) {
        return root.category
      },
    })
    t.list.field('tags', {
      type: 'Tag',
      args: {
        where: 'TagWhereInput',
        orderBy: list('TagOrderByWithRelationInput'),
        cursor: 'TagWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('TagScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.tags
      },
    })
    t.field('_count', {
      type: 'PostCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
