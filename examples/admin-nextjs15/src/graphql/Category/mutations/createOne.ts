import { mutationField, nonNull } from 'nexus'

export const CategoryCreateOneMutation = mutationField('createOneCategory', {
  type: nonNull('Category'),
  args: {
    data: nonNull('CategoryCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.category.create({
      data,
      ...select,
    })
  },
})
