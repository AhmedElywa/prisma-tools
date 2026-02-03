import { mutationField, nonNull } from 'nexus';

export const BrandDeleteOneMutation = mutationField('deleteOneBrand', {
  type: 'Brand',
  args: {
    where: nonNull('BrandWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.brand.delete({
      where,
      ...select,
    });
  },
});
