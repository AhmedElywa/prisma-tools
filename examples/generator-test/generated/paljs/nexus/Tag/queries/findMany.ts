import { queryField, nonNull, list } from 'nexus';

export const TagFindManyQuery = queryField('findManyTag', {
  type: nonNull(list(nonNull('Tag'))),
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByWithRelationInput'),
    cursor: 'TagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'TagScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.findMany({
      ...args,
      ...select,
    });
  },
});
