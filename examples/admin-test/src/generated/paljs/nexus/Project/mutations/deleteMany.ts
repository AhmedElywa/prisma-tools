import { mutationField, nonNull } from 'nexus';

export const ProjectDeleteManyMutation = mutationField('deleteManyProject', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProjectWhereInput',
    limit: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.project.deleteMany({ ...args } as any);
  },
});
