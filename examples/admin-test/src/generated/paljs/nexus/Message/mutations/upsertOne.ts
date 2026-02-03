import { mutationField, nonNull } from 'nexus';

export const MessageUpsertOneMutation = mutationField('upsertOneMessage', {
  type: nonNull('Message'),
  args: {
    where: nonNull('MessageWhereUniqueInput'),
    create: nonNull('MessageCreateInput'),
    update: nonNull('MessageUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.message.upsert({
      ...args,
      ...select,
    });
  },
});
