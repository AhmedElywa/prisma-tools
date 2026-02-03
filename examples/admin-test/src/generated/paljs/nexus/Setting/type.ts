import { objectType } from 'nexus';

export const Setting = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Setting',
  definition(t) {
    t.int('id');
    t.string('key');
    t.string('value');
    t.string('type');
    t.string('group');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
  },
});
