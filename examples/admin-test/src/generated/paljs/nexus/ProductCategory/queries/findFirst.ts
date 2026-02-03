import { queryField, list } from 'nexus';

export const ProductCategoryFindFirstQuery = queryField('findFirstProductCategory', {
  type: 'ProductCategory',
  args: {
    where: 'ProductCategoryWhereInput',
    orderBy: list('ProductCategoryOrderByWithRelationInput'),
    cursor: 'ProductCategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProductCategoryScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productCategory.findFirst({
      ...args,
      ...select,
    });
  },
});
