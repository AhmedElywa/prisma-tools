import { queryField, nonNull } from 'nexus'

export const TagFindUniqueQuery = queryField('findUniqueTag', {
  type: 'Tag',
  args: {
    where: nonNull('TagWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.tag.findUnique({
      where,
      ...select,
    })
  },
})
