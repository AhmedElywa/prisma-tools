import { objectType } from 'nexus';

// BatchPayload is used by deleteMany and updateMany mutations
export const BatchPayload = objectType({
  name: 'BatchPayload',
  definition(t) {
    t.nonNull.int('count');
  },
});
