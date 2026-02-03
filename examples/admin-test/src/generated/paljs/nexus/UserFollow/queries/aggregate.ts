import { queryField, list } from 'nexus';

export const UserFollowAggregateQuery = queryField('aggregateUserFollow', {
  type: 'AggregateUserFollow',
  args: {
    where: 'UserFollowWhereInput',
    orderBy: list('UserFollowOrderByWithRelationInput'),
    cursor: 'UserFollowWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userFollow.aggregate({ ...args } as any);
  },
});
