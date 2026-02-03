import { queryField, list } from 'nexus';

export const TaskAggregateQuery = queryField('aggregateTask', {
  type: 'AggregateTask',
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.task.aggregate({ ...args } as any);
  },
});
