import { mutationField, nonNull } from 'nexus';

export const TaskDeleteOneMutation = mutationField('deleteOneTask', {
  type: 'Task',
  args: {
    where: nonNull('TaskWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.task.delete({
      where,
      ...select,
    });
  },
});
