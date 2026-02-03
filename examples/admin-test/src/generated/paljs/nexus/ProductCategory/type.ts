import { objectType, list } from 'nexus';

export const ProductCategory = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ProductCategory',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('slug');
    t.int('order');
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('parent', { type: 'ProductCategory', resolve(root: any) { return root.parent; } });
    t.nullable.int('parentId');
    t.list.field('children', { type: 'ProductCategory', resolve(root: any) { return root.children; } });
    t.list.field('products', { type: 'Product', resolve(root: any) { return root.products; } });
  },
});
