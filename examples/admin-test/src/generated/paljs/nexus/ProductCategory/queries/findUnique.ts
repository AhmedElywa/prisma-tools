import { queryField, nonNull } from 'nexus';

export const ProductCategoryFindUniqueQuery = queryField('findUniqueProductCategory', {
  type: 'ProductCategory',
  args: {
    where: nonNull('ProductCategoryWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.productCategory.findUnique({
      where,
      ...select,
    });
  },
});
