import { objectType, list } from 'nexus'

export const Tag = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Tag',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: list('PostOrderByWithRelationInput'),
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('PostScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.posts
      },
    })
    t.field('_count', {
      type: 'TagCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
