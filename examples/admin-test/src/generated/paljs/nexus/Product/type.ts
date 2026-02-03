import { objectType, list } from 'nexus';

export const Product = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Product',
  definition(t) {
    t.int('id');
    t.string('name');
    t.string('sku');
    t.nullable.string('description');
    t.float('price');
    t.nullable.float('comparePrice');
    t.nullable.float('costPrice');
    t.int('quantity');
    t.nullable.float('weight');
    t.boolean('isActive');
    t.boolean('isFeatured');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('brand', { type: 'Brand', resolve(root: any) { return root.brand; } });
    t.nullable.int('brandId');
    t.list.field('orderItems', { type: 'OrderItem', resolve(root: any) { return root.orderItems; } });
    t.list.field('reviews', { type: 'Review', resolve(root: any) { return root.reviews; } });
    t.list.field('productCategories', { type: 'ProductCategory', resolve(root: any) { return root.productCategories; } });
  },
});
