import { queryField, list } from 'nexus'

export const CategoryFindFirstQuery = queryField('findFirstCategory', {
  type: 'Category',
  args: {
    where: 'CategoryWhereInput',
    orderBy: list('CategoryOrderByWithRelationInput'),
    cursor: 'CategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CategoryScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.category.findFirst({
      ...args,
      ...select,
    })
  },
})
