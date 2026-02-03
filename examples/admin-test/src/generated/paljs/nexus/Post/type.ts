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
    t.string('slug');
    t.nullable.string('content');
    t.nullable.string('excerpt');
    t.field('status', { type: 'Status' });
    t.boolean('featured');
    t.int('viewCount');
    t.nullable.float('readTime');
    t.nullable.field('publishedAt', { type: 'DateTime' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('author', { type: 'User', resolve(root: any) { return root.author; } });
    t.nullable.int('authorId');
    t.nullable.field('category', { type: 'Category', resolve(root: any) { return root.category; } });
    t.nullable.int('categoryId');
    t.list.field('comments', { type: 'Comment', resolve(root: any) { return root.comments; } });
    t.list.field('tags', { type: 'Tag', resolve(root: any) { return root.tags; } });
    t.list.field('likedBy', { type: 'User', resolve(root: any) { return root.likedBy; } });
  },
});
