import { objectType, list } from 'nexus';

export const Group = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Group',
  definition(t) {
    t.int('id');
    t.string('name');
    t.nullable.string('description');
    t.boolean('isPrivate');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.list.field('members', { type: 'User', resolve(root: any) { return root.members; } });
  },
});
