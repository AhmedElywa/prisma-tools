import { queryField, nonNull } from 'nexus';

export const TaskFindUniqueQuery = queryField('findUniqueTask', {
  type: 'Task',
  args: {
    where: nonNull('TaskWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.task.findUnique({
      where,
      ...select,
    });
  },
});
