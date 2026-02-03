import { queryField, nonNull, list } from 'nexus';

export const SettingFindCountQuery = queryField('findCountSetting', {
  type: nonNull('Int'),
  args: {
    where: 'SettingWhereInput',
    orderBy: list('SettingOrderByWithRelationInput'),
    cursor: 'SettingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'SettingScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.setting.count({ ...args } as any);
  },
});
