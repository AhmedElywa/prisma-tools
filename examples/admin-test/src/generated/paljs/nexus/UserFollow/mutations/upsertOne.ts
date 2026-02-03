import { mutationField, nonNull } from 'nexus';

export const UserFollowUpsertOneMutation = mutationField('upsertOneUserFollow', {
  type: nonNull('UserFollow'),
  args: {
    where: nonNull('UserFollowWhereUniqueInput'),
    create: nonNull('UserFollowCreateInput'),
    update: nonNull('UserFollowUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userFollow.upsert({
      ...args,
      ...select,
    });
  },
});
