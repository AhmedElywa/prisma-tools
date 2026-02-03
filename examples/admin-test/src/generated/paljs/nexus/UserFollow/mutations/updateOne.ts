import { mutationField, nonNull } from 'nexus';

export const UserFollowUpdateOneMutation = mutationField('updateOneUserFollow', {
  type: nonNull('UserFollow'),
  args: {
    data: nonNull('UserFollowUpdateInput'),
    where: nonNull('UserFollowWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.userFollow.update({
      where,
      data,
      ...select,
    });
  },
});
