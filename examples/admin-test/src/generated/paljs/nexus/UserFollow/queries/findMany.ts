import { queryField, nonNull, list } from 'nexus';

export const UserFollowFindManyQuery = queryField('findManyUserFollow', {
  type: nonNull(list(nonNull('UserFollow'))),
  args: {
    where: 'UserFollowWhereInput',
    orderBy: list('UserFollowOrderByWithRelationInput'),
    cursor: 'UserFollowWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'UserFollowScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userFollow.findMany({
      ...args,
      ...select,
    });
  },
});
