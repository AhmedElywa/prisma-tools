import { mutationField, nonNull } from 'nexus'

export const CategoryDeleteOneMutation = mutationField('deleteOneCategory', {
  type: 'Category',
  args: {
    where: nonNull('CategoryWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.category.delete({
      where,
      ...select,
    })
  },
})
