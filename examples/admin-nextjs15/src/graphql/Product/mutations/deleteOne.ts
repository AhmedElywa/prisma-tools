import { mutationField, nonNull } from 'nexus'

export const ProductDeleteOneMutation = mutationField('deleteOneProduct', {
  type: 'Product',
  args: {
    where: nonNull('ProductWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.product.delete({
      where,
      ...select,
    })
  },
})
