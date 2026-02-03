import { mutationField, nonNull } from 'nexus';

export const BrandUpsertOneMutation = mutationField('upsertOneBrand', {
  type: nonNull('Brand'),
  args: {
    where: nonNull('BrandWhereUniqueInput'),
    create: nonNull('BrandCreateInput'),
    update: nonNull('BrandUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.brand.upsert({
      ...args,
      ...select,
    });
  },
});
