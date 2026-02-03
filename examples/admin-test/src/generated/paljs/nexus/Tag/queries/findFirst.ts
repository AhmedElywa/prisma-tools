import { queryField, list } from 'nexus';

export const TagFindFirstQuery = queryField('findFirstTag', {
  type: 'Tag',
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByWithRelationInput'),
    cursor: 'TagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'TagScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.findFirst({
      ...args,
      ...select,
    });
  },
});
