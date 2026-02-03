import { queryField, nonNull, list } from 'nexus';

export const SettingFindManyQuery = queryField('findManySetting', {
  type: nonNull(list(nonNull('Setting'))),
  args: {
    where: 'SettingWhereInput',
    orderBy: list('SettingOrderByWithRelationInput'),
    cursor: 'SettingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'SettingScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.setting.findMany({
      ...args,
      ...select,
    });
  },
});
