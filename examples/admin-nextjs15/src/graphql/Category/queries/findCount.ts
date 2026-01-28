import { queryField, nonNull, list } from 'nexus'

export const CategoryFindCountQuery = queryField('findManyCategoryCount', {
  type: nonNull('Int'),
  args: {
    where: 'CategoryWhereInput',
    orderBy: list('CategoryOrderByWithRelationInput'),
    cursor: 'CategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CategoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.category.count(args as any)
  },
})
