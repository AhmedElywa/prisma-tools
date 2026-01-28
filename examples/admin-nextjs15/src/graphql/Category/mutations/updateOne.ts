import { mutationField, nonNull } from 'nexus'

export const CategoryUpdateOneMutation = mutationField('updateOneCategory', {
  type: nonNull('Category'),
  args: {
    data: nonNull('CategoryUpdateInput'),
    where: nonNull('CategoryWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.category.update({
      where,
      data,
      ...select,
    })
  },
})
