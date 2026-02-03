import { mutationField, nonNull } from 'nexus';

export const ProductCategoryDeleteOneMutation = mutationField('deleteOneProductCategory', {
  type: 'ProductCategory',
  args: {
    where: nonNull('ProductCategoryWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.productCategory.delete({
      where,
      ...select,
    });
  },
});
