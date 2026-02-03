import { objectType, list } from 'nexus';

export const Order = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Order',
  definition(t) {
    t.int('id');
    t.string('orderNumber');
    t.field('status', { type: 'Status' });
    t.float('subtotal');
    t.float('tax');
    t.float('shipping');
    t.float('total');
    t.nullable.string('notes');
    t.nullable.string('shippingAddress');
    t.nullable.string('billingAddress');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('customer', { type: 'User', resolve(root: any) { return root.customer; } });
    t.nullable.int('customerId');
    t.list.field('items', { type: 'OrderItem', resolve(root: any) { return root.items; } });
  },
});
