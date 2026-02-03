import { queryField, list } from 'nexus';

export const TagAggregateQuery = queryField('aggregateTag', {
  type: 'AggregateTag',
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByWithRelationInput'),
    cursor: 'TagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.aggregate({ ...args } as any);
  },
});
