import { mutationField, nonNull } from 'nexus';

export const UserFollowUpdateManyMutation = mutationField('updateManyUserFollow', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('UserFollowUpdateManyMutationInput'),
    where: 'UserFollowWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userFollow.updateMany({ ...args } as any);
  },
});
