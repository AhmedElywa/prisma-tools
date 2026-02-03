import { mutationField, nonNull } from 'nexus';

export const UserUpdateManyMutation = mutationField('updateManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('UserUpdateManyMutationInput'),
    where: 'UserWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.updateMany({ ...args } as any);
  },
});
