import { queryField, list } from 'nexus';

export const BrandAggregateQuery = queryField('aggregateBrand', {
  type: 'AggregateBrand',
  args: {
    where: 'BrandWhereInput',
    orderBy: list('BrandOrderByWithRelationInput'),
    cursor: 'BrandWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.brand.aggregate({ ...args } as any);
  },
});
