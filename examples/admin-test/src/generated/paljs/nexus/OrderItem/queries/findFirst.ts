import { queryField, list } from 'nexus';

export const OrderItemFindFirstQuery = queryField('findFirstOrderItem', {
  type: 'OrderItem',
  args: {
    where: 'OrderItemWhereInput',
    orderBy: list('OrderItemOrderByWithRelationInput'),
    cursor: 'OrderItemWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'OrderItemScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.orderItem.findFirst({
      ...args,
      ...select,
    });
  },
});
