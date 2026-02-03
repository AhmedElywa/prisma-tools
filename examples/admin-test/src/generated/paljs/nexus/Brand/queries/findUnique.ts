import { queryField, nonNull } from 'nexus';

export const BrandFindUniqueQuery = queryField('findUniqueBrand', {
  type: 'Brand',
  args: {
    where: nonNull('BrandWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.brand.findUnique({
      where,
      ...select,
    });
  },
});
