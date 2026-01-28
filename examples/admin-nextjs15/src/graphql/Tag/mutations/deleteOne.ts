import { mutationField, nonNull } from 'nexus'

export const TagDeleteOneMutation = mutationField('deleteOneTag', {
  type: 'Tag',
  args: {
    where: nonNull('TagWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.tag.delete({
      where,
      ...select,
    })
  },
})
