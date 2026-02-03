import { queryField, list } from 'nexus';

export const OrderItemAggregateQuery = queryField('aggregateOrderItem', {
  type: 'AggregateOrderItem',
  args: {
    where: 'OrderItemWhereInput',
    orderBy: list('OrderItemOrderByWithRelationInput'),
    cursor: 'OrderItemWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.orderItem.aggregate({ ...args } as any);
  },
});
