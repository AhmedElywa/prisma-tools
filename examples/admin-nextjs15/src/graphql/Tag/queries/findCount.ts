import { queryField, nonNull, list } from 'nexus'

export const TagFindCountQuery = queryField('findManyTagCount', {
  type: nonNull('Int'),
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByWithRelationInput'),
    cursor: 'TagWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TagScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.count(args as any)
  },
})
