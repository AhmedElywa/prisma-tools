import { queryField, nonNull, list } from 'nexus';

export const TaskFindCountQuery = queryField('findCountTask', {
  type: nonNull('Int'),
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'TaskScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.task.count({ ...args } as any);
  },
});
