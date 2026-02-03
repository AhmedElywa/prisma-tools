import { mutationField, nonNull } from 'nexus';

export const UserFollowCreateOneMutation = mutationField('createOneUserFollow', {
  type: nonNull('UserFollow'),
  args: {
    data: nonNull('UserFollowCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.userFollow.create({
      data,
      ...select,
    });
  },
});
