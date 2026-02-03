import { objectType, list } from 'nexus';

export const Post = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Post',
  definition(t) {
    t.int('id');
    t.string('title');
    t.nullable.string('content');
    t.boolean('published');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('author', { type: 'User', resolve(root: any) { return root.author; } });
    t.int('authorId');
    t.list.field('comments', { type: 'Comment', resolve(root: any) { return root.comments; } });
    t.list.field('tags', { type: 'Tag', resolve(root: any) { return root.tags; } });
  },
});
