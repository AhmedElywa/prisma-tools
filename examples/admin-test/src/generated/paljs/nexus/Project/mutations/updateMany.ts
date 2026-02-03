import { mutationField, nonNull } from 'nexus';

export const ProjectUpdateManyMutation = mutationField('updateManyProject', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ProjectUpdateManyMutationInput'),
    where: 'ProjectWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.project.updateMany({ ...args } as any);
  },
});
