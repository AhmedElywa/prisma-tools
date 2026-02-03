import { queryField, list } from 'nexus';

export const TaskFindFirstQuery = queryField('findFirstTask', {
  type: 'Task',
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'TaskScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.task.findFirst({
      ...args,
      ...select,
    });
  },
});
