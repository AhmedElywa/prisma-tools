import { mutationField, nonNull } from 'nexus';

export const MessageDeleteManyMutation = mutationField('deleteManyMessage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'MessageWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.message.deleteMany({ ...args } as any);
  },
});
