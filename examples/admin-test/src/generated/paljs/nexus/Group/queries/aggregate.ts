import { queryField, list } from 'nexus';

export const GroupAggregateQuery = queryField('aggregateGroup', {
  type: 'AggregateGroup',
  args: {
    where: 'GroupWhereInput',
    orderBy: list('GroupOrderByWithRelationInput'),
    cursor: 'GroupWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.aggregate({ ...args } as any);
  },
});
