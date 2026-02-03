import { mutationField, nonNull } from 'nexus';

export const BrandUpdateOneMutation = mutationField('updateOneBrand', {
  type: nonNull('Brand'),
  args: {
    data: nonNull('BrandUpdateInput'),
    where: nonNull('BrandWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.brand.update({
      where,
      data,
      ...select,
    });
  },
});
