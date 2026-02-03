import { queryField, nonNull } from 'nexus';

export const UserFollowFindUniqueQuery = queryField('findUniqueUserFollow', {
  type: 'UserFollow',
  args: {
    where: nonNull('UserFollowWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.userFollow.findUnique({
      where,
      ...select,
    });
  },
});
