import { queryField, nonNull, list } from 'nexus';

export const TagFindCountQuery = queryField('findCountTag', {
  type: nonNull('Int'),
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByWithRelationInput'),
    cursor: 'TagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'TagScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.count({ ...args } as any);
  },
});
