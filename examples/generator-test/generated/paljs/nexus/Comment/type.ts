import { objectType } from 'nexus';

export const Comment = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Comment',
  definition(t) {
    t.int('id');
    t.string('content');
    t.field('createdAt', { type: 'DateTime' });
    t.field('post', { type: 'Post', resolve(root: any) { return root.post; } });
    t.int('postId');
    t.field('author', { type: 'User', resolve(root: any) { return root.author; } });
    t.int('authorId');
  },
});
