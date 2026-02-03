import { objectType, list } from 'nexus';

export const Brand = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Brand',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('slug');
    t.nullable.string('logo');
    t.nullable.string('description');
    t.nullable.string('website');
    t.boolean('isActive');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.list.field('products', { type: 'Product', resolve(root: any) { return root.products; } });
  },
});
