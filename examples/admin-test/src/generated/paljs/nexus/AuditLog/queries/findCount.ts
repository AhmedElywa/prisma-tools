import { queryField, nonNull, list } from 'nexus';

export const AuditLogFindCountQuery = queryField('findCountAuditLog', {
  type: nonNull('Int'),
  args: {
    where: 'AuditLogWhereInput',
    orderBy: list('AuditLogOrderByWithRelationInput'),
    cursor: 'AuditLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: 'AuditLogScalarFieldEnum',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.auditLog.count({ ...args } as any);
  },
});
