import { queryField, list } from 'nexus';

export const AuditLogAggregateQuery = queryField('aggregateAuditLog', {
  type: 'AggregateAuditLog',
  args: {
    where: 'AuditLogWhereInput',
    orderBy: list('AuditLogOrderByWithRelationInput'),
    cursor: 'AuditLogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.auditLog.aggregate({ ...args } as any);
  },
});
