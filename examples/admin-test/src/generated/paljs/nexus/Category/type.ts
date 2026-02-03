import { objectType, list } from 'nexus';

export const Category = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Category',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('slug');
    t.nullable.string('description');
    t.nullable.string('color');
    t.int('order');
    t.boolean('isActive');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.list.field('posts', { type: 'Post', resolve(root: any) { return root.posts; } });
    t.nullable.field('parent', { type: 'Category', resolve(root: any) { return root.parent; } });
    t.nullable.int('parentId');
    t.list.field('children', { type: 'Category', resolve(root: any) { return root.children; } });
  },
});
