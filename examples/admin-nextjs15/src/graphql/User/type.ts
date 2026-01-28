import { objectType, list } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.nullable.string('name')
    t.nullable.json('settings')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
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
    t.nullable.field('profile', {
      type: 'Profile',
      args: {
        where: 'ProfileWhereInput',
      },
      resolve(root: any) {
        return root.profile
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
