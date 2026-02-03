import { queryField, list } from 'nexus';

export const ProductCategoryAggregateQuery = queryField('aggregateProductCategory', {
  type: 'AggregateProductCategory',
  args: {
    where: 'ProductCategoryWhereInput',
    orderBy: list('ProductCategoryOrderByWithRelationInput'),
    cursor: 'ProductCategoryWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.productCategory.aggregate({ ...args } as any);
  },
});
