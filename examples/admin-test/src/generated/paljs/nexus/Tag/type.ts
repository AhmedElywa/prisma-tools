import { objectType, list } from 'nexus';

export const Tag = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Tag',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('slug');
    t.field('createdAt', { type: 'DateTime' });
    t.list.field('posts', { type: 'Post', resolve(root: any) { return root.posts; } });
  },
});
