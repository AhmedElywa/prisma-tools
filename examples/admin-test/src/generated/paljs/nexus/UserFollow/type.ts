import { objectType } from 'nexus';

export const UserFollow = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'UserFollow',
  definition(t) {
    t.int('id');
    t.field('follower', { type: 'User', resolve(root: any) { return root.follower; } });
    t.int('followerId');
    t.field('following', { type: 'User', resolve(root: any) { return root.following; } });
    t.int('followingId');
    t.field('createdAt', { type: 'DateTime' });
  },
});
