import { objectType } from 'nexus';

export const AuditLog = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AuditLog',
  definition(t) {
    t.int('id');
    t.string('action');
    t.string('entity');
    t.string('entityId');
    t.nullable.string('oldValue');
    t.nullable.string('newValue');
    t.nullable.string('ipAddress');
    t.nullable.string('userAgent');
    t.field('createdAt', { type: 'DateTime' });
  },
});
