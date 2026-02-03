import { queryField, nonNull, list } from 'nexus';

export const TaskFindManyQuery = queryField('findManyTask', {
  type: nonNull(list(nonNull('Task'))),
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'TaskScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.task.findMany({
      ...args,
      ...select,
    });
  },
});
