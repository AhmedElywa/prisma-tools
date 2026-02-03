import { queryField, nonNull, list } from 'nexus';

export const OrderFindManyQuery = queryField('findManyOrder', {
  type: nonNull(list(nonNull('Order'))),
  args: {
    where: 'OrderWhereInput',
    orderBy: list('OrderOrderByWithRelationInput'),
    cursor: 'OrderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'OrderScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.findMany({
      ...args,
      ...select,
    });
  },
});
