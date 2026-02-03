import { mutationField, nonNull } from 'nexus';

export const TaskUpdateOneMutation = mutationField('updateOneTask', {
  type: nonNull('Task'),
  args: {
    data: nonNull('TaskUpdateInput'),
    where: nonNull('TaskWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.task.update({
      where,
      data,
      ...select,
    });
  },
});
