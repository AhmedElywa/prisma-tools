import { objectType, list } from 'nexus';

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('email');
    t.nullable.string('name');
    t.field('role', { type: 'Role' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.list.field('posts', { type: 'Post', resolve(root: any) { return root.posts; } });
    t.nullable.field('profile', { type: 'Profile', resolve(root: any) { return root.profile; } });
    t.list.field('comments', { type: 'Comment', resolve(root: any) { return root.comments; } });
  },
});
