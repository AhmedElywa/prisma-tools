import { objectType } from 'nexus';

export const Review = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Review',
  definition(t) {
    t.int('id');
    t.int('rating');
    t.nullable.string('title');
    t.nullable.string('content');
    t.boolean('approved');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('author', { type: 'User', resolve(root: any) { return root.author; } });
    t.nullable.int('authorId');
    t.field('product', { type: 'Product', resolve(root: any) { return root.product; } });
    t.int('productId');
  },
});
