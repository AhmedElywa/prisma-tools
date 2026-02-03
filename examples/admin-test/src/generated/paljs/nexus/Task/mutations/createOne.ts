import { mutationField, nonNull } from 'nexus';

export const TaskCreateOneMutation = mutationField('createOneTask', {
  type: nonNull('Task'),
  args: {
    data: nonNull('TaskCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.task.create({
      data,
      ...select,
    });
  },
});
