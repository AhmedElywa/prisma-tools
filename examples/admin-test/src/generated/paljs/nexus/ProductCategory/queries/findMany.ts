import { queryField, nonNull, list } from 'nexus';

export const ProductCategoryFindManyQuery = queryField('findManyProductCategory', {
  type: nonNull(list(nonNull('ProductCategory'))),
  args: {
    where: 'ProductCategoryWhereInput',
    orderBy: list('ProductCategoryOrderByWithRelationInput'),
    cursor: 'ProductCategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProductCategoryScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productCategory.findMany({
      ...args,
      ...select,
    });
  },
});
