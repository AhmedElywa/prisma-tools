import { mutationField, nonNull } from 'nexus';

export const GroupUpdateManyMutation = mutationField('updateManyGroup', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('GroupUpdateManyMutationInput'),
    where: 'GroupWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.updateMany({ ...args } as any);
  },
});
