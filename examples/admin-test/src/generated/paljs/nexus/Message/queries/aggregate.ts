import { queryField, list } from 'nexus';

export const MessageAggregateQuery = queryField('aggregateMessage', {
  type: 'AggregateMessage',
  args: {
    where: 'MessageWhereInput',
    orderBy: list('MessageOrderByWithRelationInput'),
    cursor: 'MessageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.message.aggregate({ ...args } as any);
  },
});
