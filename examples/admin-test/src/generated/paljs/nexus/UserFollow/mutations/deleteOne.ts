import { mutationField, nonNull } from 'nexus';

export const UserFollowDeleteOneMutation = mutationField('deleteOneUserFollow', {
  type: 'UserFollow',
  args: {
    where: nonNull('UserFollowWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.userFollow.delete({
      where,
      ...select,
    });
  },
});
