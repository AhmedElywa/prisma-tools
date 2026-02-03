import { mutationField, nonNull } from 'nexus';

export const ProductCategoryUpdateOneMutation = mutationField('updateOneProductCategory', {
  type: nonNull('ProductCategory'),
  args: {
    data: nonNull('ProductCategoryUpdateInput'),
    where: nonNull('ProductCategoryWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.productCategory.update({
      where,
      data,
      ...select,
    });
  },
});
