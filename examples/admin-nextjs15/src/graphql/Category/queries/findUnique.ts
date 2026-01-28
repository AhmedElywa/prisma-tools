import { queryField, nonNull } from 'nexus'

export const CategoryFindUniqueQuery = queryField('findUniqueCategory', {
  type: 'Category',
  args: {
    where: nonNull('CategoryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.category.findUnique({
      where,
      ...select,
    })
  },
})
