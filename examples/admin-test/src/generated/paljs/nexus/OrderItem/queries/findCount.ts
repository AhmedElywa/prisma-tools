import { queryField, nonNull, list } from 'nexus';

export const OrderItemFindCountQuery = queryField('findCountOrderItem', {
  type: nonNull('Int'),
  args: {
    where: 'OrderItemWhereInput',
    orderBy: list('OrderItemOrderByWithRelationInput'),
    cursor: 'OrderItemWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'OrderItemScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.orderItem.count({ ...args } as any);
  },
});
