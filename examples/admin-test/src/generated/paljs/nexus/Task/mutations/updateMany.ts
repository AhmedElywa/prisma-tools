import { mutationField, nonNull } from 'nexus';

export const TaskUpdateManyMutation = mutationField('updateManyTask', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('TaskUpdateManyMutationInput'),
    where: 'TaskWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.task.updateMany({ ...args } as any);
  },
});
