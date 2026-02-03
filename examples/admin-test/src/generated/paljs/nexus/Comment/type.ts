import { objectType, list } from 'nexus';

export const Comment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Comment',
  definition(t) {
    t.int('id');
    t.string('content');
    t.boolean('approved');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('author', { type: 'User', resolve(root: any) { return root.author; } });
    t.nullable.int('authorId');
    t.field('post', { type: 'Post', resolve(root: any) { return root.post; } });
    t.int('postId');
    t.nullable.field('parent', { type: 'Comment', resolve(root: any) { return root.parent; } });
    t.nullable.int('parentId');
    t.list.field('replies', { type: 'Comment', resolve(root: any) { return root.replies; } });
  },
});
