import { queryField, nonNull, list } from 'nexus';

export const OrderItemFindManyQuery = queryField('findManyOrderItem', {
  type: nonNull(list(nonNull('OrderItem'))),
  args: {
    where: 'OrderItemWhereInput',
    orderBy: list('OrderItemOrderByWithRelationInput'),
    cursor: 'OrderItemWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'OrderItemScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderItem.findMany({
      ...args,
      ...select,
    });
  },
});
