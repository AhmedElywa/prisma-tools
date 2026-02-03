import { queryField, list } from 'nexus';

export const OrderFindFirstQuery = queryField('findFirstOrder', {
  type: 'Order',
  args: {
    where: 'OrderWhereInput',
    orderBy: list('OrderOrderByWithRelationInput'),
    cursor: 'OrderWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'OrderScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.findFirst({
      ...args,
      ...select,
    });
  },
});
