import { queryField, nonNull, list } from 'nexus';

export const ProductFindCountQuery = queryField('findCountProduct', {
  type: nonNull('Int'),
  args: {
    where: 'ProductWhereInput',
    orderBy: list('ProductOrderByWithRelationInput'),
    cursor: 'ProductWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'ProductScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.product.count({ ...args } as any);
  },
});
