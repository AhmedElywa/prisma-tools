import { mutationField, nonNull } from 'nexus';

export const BrandCreateOneMutation = mutationField('createOneBrand', {
  type: nonNull('Brand'),
  args: {
    data: nonNull('BrandCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.brand.create({
      data,
      ...select,
    });
  },
});
