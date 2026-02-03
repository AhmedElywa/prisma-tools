import { mutationField, nonNull } from 'nexus';

export const SettingUpsertOneMutation = mutationField('upsertOneSetting', {
  type: nonNull('Setting'),
  args: {
    where: nonNull('SettingWhereUniqueInput'),
    create: nonNull('SettingCreateInput'),
    update: nonNull('SettingUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.setting.upsert({
      ...args,
      ...select,
    });
  },
});
