import { mutationField, nonNull } from 'nexus';

export const UserFollowDeleteManyMutation = mutationField('deleteManyUserFollow', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserFollowWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userFollow.deleteMany({ ...args } as any);
  },
});
