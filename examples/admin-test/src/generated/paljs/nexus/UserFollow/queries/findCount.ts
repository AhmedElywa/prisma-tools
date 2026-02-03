import { queryField, nonNull, list } from 'nexus';

export const UserFollowFindCountQuery = queryField('findCountUserFollow', {
  type: nonNull('Int'),
  args: {
    where: 'UserFollowWhereInput',
    orderBy: list('UserFollowOrderByWithRelationInput'),
    cursor: 'UserFollowWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'UserFollowScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userFollow.count({ ...args } as any);
  },
});
