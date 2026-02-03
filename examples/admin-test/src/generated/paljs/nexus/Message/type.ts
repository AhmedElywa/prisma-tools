import { objectType } from 'nexus';

export const Message = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Message',
  definition(t) {
    t.int('id');
    t.nullable.string('subject');
    t.string('content');
    t.boolean('read');
    t.field('priority', { type: 'Priority' });
    t.field('createdAt', { type: 'DateTime' });
    t.nullable.field('sender', { type: 'User', resolve(root: any) { return root.sender; } });
    t.nullable.int('senderId');
    t.nullable.field('receiver', { type: 'User', resolve(root: any) { return root.receiver; } });
    t.nullable.int('receiverId');
  },
});
