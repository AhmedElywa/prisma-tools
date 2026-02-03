import { mutationField, nonNull } from 'nexus';

export const SettingUpdateManyMutation = mutationField('updateManySetting', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('SettingUpdateManyMutationInput'),
    where: 'SettingWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.setting.updateMany({ ...args } as any);
  },
});
