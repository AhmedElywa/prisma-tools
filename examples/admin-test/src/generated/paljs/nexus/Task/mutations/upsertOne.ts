import { mutationField, nonNull } from 'nexus';

export const TaskUpsertOneMutation = mutationField('upsertOneTask', {
  type: nonNull('Task'),
  args: {
    where: nonNull('TaskWhereUniqueInput'),
    create: nonNull('TaskCreateInput'),
    update: nonNull('TaskUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.task.upsert({
      ...args,
      ...select,
    });
  },
});
