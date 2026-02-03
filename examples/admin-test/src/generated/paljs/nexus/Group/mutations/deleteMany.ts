import { mutationField, nonNull } from 'nexus';

export const GroupDeleteManyMutation = mutationField('deleteManyGroup', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'GroupWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.deleteMany({ ...args } as any);
  },
});
