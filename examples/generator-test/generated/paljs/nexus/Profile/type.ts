import { objectType } from 'nexus';

export const Profile = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Profile',
  definition(t) {
    t.int('id');
    t.nullable.string('bio');
    t.nullable.string('avatar');
    t.field('user', { type: 'User', resolve(root: any) { return root.user; } });
    t.int('userId');
  },
});
