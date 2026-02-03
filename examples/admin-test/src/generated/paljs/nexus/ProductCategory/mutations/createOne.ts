import { mutationField, nonNull } from 'nexus';

export const ProductCategoryCreateOneMutation = mutationField('createOneProductCategory', {
  type: nonNull('ProductCategory'),
  args: {
    data: nonNull('ProductCategoryCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.productCategory.create({
      data,
      ...select,
    });
  },
});
