import { queryField, nonNull, list } from 'nexus'

export const CategoryFindManyQuery = queryField('findManyCategory', {
  type: nonNull(list(nonNull('Category'))),
  args: {
    where: 'CategoryWhereInput',
    orderBy: list('CategoryOrderByWithRelationInput'),
    cursor: 'CategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CategoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.category.findMany({
      ...args,
      ...select,
    })
  },
})
