import { mutationField, nonNull } from 'nexus';

export const TagDeleteManyMutation = mutationField('deleteManyTag', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TagWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.deleteMany({ ...args } as any);
  },
});
