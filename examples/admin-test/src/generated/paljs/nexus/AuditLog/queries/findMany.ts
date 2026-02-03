import { queryField, nonNull, list } from 'nexus';

export const AuditLogFindManyQuery = queryField('findManyAuditLog', {
  type: nonNull(list(nonNull('AuditLog'))),
  args: {
    where: 'AuditLogWhereInput',
    orderBy: list('AuditLogOrderByWithRelationInput'),
    cursor: 'AuditLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'AuditLogScalarFieldEnum',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.auditLog.findMany({
      ...args,
      ...select,
    });
  },
});
