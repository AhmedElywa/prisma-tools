import { queryField, nonNull, list } from 'nexus';

export const BrandFindCountQuery = queryField('findCountBrand', {
  type: nonNull('Int'),
  args: {
    where: 'BrandWhereInput',
    orderBy: list('BrandOrderByWithRelationInput'),
    cursor: 'BrandWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'BrandScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.brand.count({ ...args } as any);
  },
});
