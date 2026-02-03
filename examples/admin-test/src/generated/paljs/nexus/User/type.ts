import { objectType, list } from 'nexus';

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id');
    t.string('email');
    t.string('username');
    t.nullable.string('firstName');
    t.nullable.string('lastName');
    t.field('role', { type: 'Role' });
    t.boolean('isActive');
    t.float('balance');
    t.nullable.string('metadata');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('profile', { type: 'Profile', resolve(root: any) { return root.profile; } });
    t.list.field('posts', { type: 'Post', resolve(root: any) { return root.posts; } });
    t.list.field('comments', { type: 'Comment', resolve(root: any) { return root.comments; } });
    t.list.field('orders', { type: 'Order', resolve(root: any) { return root.orders; } });
    t.list.field('reviews', { type: 'Review', resolve(root: any) { return root.reviews; } });
    t.list.field('sentMessages', { type: 'Message', resolve(root: any) { return root.sentMessages; } });
    t.list.field('receivedMessages', { type: 'Message', resolve(root: any) { return root.receivedMessages; } });
    t.list.field('followedBy', { type: 'UserFollow', resolve(root: any) { return root.followedBy; } });
    t.list.field('following', { type: 'UserFollow', resolve(root: any) { return root.following; } });
    t.list.field('likedPosts', { type: 'Post', resolve(root: any) { return root.likedPosts; } });
    t.list.field('groups', { type: 'Group', resolve(root: any) { return root.groups; } });
  },
});
