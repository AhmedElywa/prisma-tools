import { objectType } from 'nexus';

export const OrderItem = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OrderItem',
  definition(t) {
    t.int('id');
    t.int('quantity');
    t.float('price');
    t.float('total');
    t.field('order', { type: 'Order', resolve(root: any) { return root.order; } });
    t.int('orderId');
    t.field('product', { type: 'Product', resolve(root: any) { return root.product; } });
    t.int('productId');
  },
});
