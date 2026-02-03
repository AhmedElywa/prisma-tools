import { queryField, list } from 'nexus';

export const UserFollowFindFirstQuery = queryField('findFirstUserFollow', {
  type: 'UserFollow',
  args: {
    where: 'UserFollowWhereInput',
    orderBy: list('UserFollowOrderByWithRelationInput'),
    cursor: 'UserFollowWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'UserFollowScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userFollow.findFirst({
      ...args,
      ...select,
    });
  },
});
