import { mutationField, nonNull } from 'nexus';

export const TaskDeleteManyMutation = mutationField('deleteManyTask', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TaskWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.task.deleteMany({ ...args } as any);
  },
});
