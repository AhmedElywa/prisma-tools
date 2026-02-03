import { queryField, list } from 'nexus';

export const UserAggregateQuery = queryField('aggregateUser', {
  type: 'AggregateUser',
  args: {
    where: 'UserWhereInput',
    orderBy: list('UserOrderByWithRelationInput'),
    cursor: 'UserWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.aggregate({ ...args } as any);
  },
});
