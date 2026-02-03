import { mutationField, nonNull } from 'nexus';

export const CommentDeleteManyMutation = mutationField('deleteManyComment', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CommentWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.deleteMany({ ...args } as any);
  },
});
