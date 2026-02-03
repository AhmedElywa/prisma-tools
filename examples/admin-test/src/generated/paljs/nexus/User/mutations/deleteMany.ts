import { mutationField, nonNull } from 'nexus';

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.deleteMany({ ...args } as any);
  },
});
