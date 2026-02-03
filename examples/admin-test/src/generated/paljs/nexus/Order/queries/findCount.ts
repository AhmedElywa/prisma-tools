import { queryField, nonNull, list } from 'nexus';

export const OrderFindCountQuery = queryField('findCountOrder', {
  type: nonNull('Int'),
  args: {
    where: 'OrderWhereInput',
    orderBy: list('OrderOrderByWithRelationInput'),
    cursor: 'OrderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'OrderScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.order.count({ ...args } as any);
  },
});
