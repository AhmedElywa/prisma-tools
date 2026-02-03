import { queryField, list } from 'nexus';

export const ProjectAggregateQuery = queryField('aggregateProject', {
  type: 'AggregateProject',
  args: {
    where: 'ProjectWhereInput',
    orderBy: list('ProjectOrderByWithRelationInput'),
    cursor: 'ProjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.project.aggregate({ ...args } as any);
  },
});
