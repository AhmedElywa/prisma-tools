import { queryField, list } from 'nexus';

export const SettingAggregateQuery = queryField('aggregateSetting', {
  type: 'AggregateSetting',
  args: {
    where: 'SettingWhereInput',
    orderBy: list('SettingOrderByWithRelationInput'),
    cursor: 'SettingWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.setting.aggregate({ ...args } as any);
  },
});
