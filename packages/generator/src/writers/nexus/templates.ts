/**
 * Nexus CRUD templates
 * These templates generate Nexus query and mutation field definitions
 */

export const queryTemplates = {
  findUnique: `
import { queryField, nonNull } from 'nexus';

export const #{Model}FindUniqueQuery = queryField('findUnique#{Model}', {
  type: '#{ModelName}',
  #{args}
  resolve(_parent, { where }, { #{prisma}, select }) {
    return #{prisma}.#{model}.findUnique({
      where,
      ...select,
    });
  },
});
`,

  findFirst: `
import { queryField, list } from 'nexus';

export const #{Model}FindFirstQuery = queryField('findFirst#{Model}', {
  type: '#{ModelName}',
  #{args}
  resolve(_parent, args, { #{prisma}, select }) {
    return #{prisma}.#{model}.findFirst({
      ...args,
      ...select,
    });
  },
});
`,

  findMany: `
import { queryField, nonNull, list } from 'nexus';

export const #{Model}FindManyQuery = queryField('findMany#{Model}', {
  type: nonNull(list(nonNull('#{ModelName}'))),
  #{args}
  resolve(_parent, args, { #{prisma}, select }) {
    return #{prisma}.#{model}.findMany({
      ...args,
      ...select,
    });
  },
});
`,

  findCount: `
import { queryField, nonNull, list } from 'nexus';

export const #{Model}FindCountQuery = queryField('findCount#{Model}', {
  type: nonNull('Int'),
  #{args}
  resolve(_parent, args, { #{prisma} }) {
    return #{prisma}.#{model}.count({ ...args } as any);
  },
});
`,

  aggregate: `
import { queryField, list } from 'nexus';

export const #{Model}AggregateQuery = queryField('aggregate#{Model}', {
  type: 'Aggregate#{ModelName}',
  #{args}
  resolve(_parent, args, { #{prisma} }) {
    return #{prisma}.#{model}.aggregate({ ...args } as any);
  },
});
`,
};

export const mutationTemplates = {
  createOne: `
import { mutationField, nonNull } from 'nexus';

export const #{Model}CreateOneMutation = mutationField('createOne#{Model}', {
  type: nonNull('#{ModelName}'),
  #{args}
  resolve(_parent, { data }, { #{prisma}, select }) {
    return #{prisma}.#{model}.create({
      data,
      ...select,
    });
  },
});
`,

  updateOne: `
import { mutationField, nonNull } from 'nexus';

export const #{Model}UpdateOneMutation = mutationField('updateOne#{Model}', {
  type: nonNull('#{ModelName}'),
  #{args}
  resolve(_parent, { data, where }, { #{prisma}, select }) {
    return #{prisma}.#{model}.update({
      where,
      data,
      ...select,
    });
  },
});
`,

  deleteOne: `
import { mutationField, nonNull } from 'nexus';

export const #{Model}DeleteOneMutation = mutationField('deleteOne#{Model}', {
  type: '#{ModelName}',
  #{args}
  resolve: async (_parent, { where }, { #{prisma}, select }) => {
    return #{prisma}.#{model}.delete({
      where,
      ...select,
    });
  },
});
`,

  upsertOne: `
import { mutationField, nonNull } from 'nexus';

export const #{Model}UpsertOneMutation = mutationField('upsertOne#{Model}', {
  type: nonNull('#{ModelName}'),
  #{args}
  resolve(_parent, args, { #{prisma}, select }) {
    return #{prisma}.#{model}.upsert({
      ...args,
      ...select,
    });
  },
});
`,

  updateMany: `
import { mutationField, nonNull } from 'nexus';

export const #{Model}UpdateManyMutation = mutationField('updateMany#{Model}', {
  type: nonNull('BatchPayload'),
  #{args}
  resolve(_parent, args, { #{prisma} }) {
    return #{prisma}.#{model}.updateMany({ ...args } as any);
  },
});
`,

  deleteMany: `
import { mutationField, nonNull } from 'nexus';

export const #{Model}DeleteManyMutation = mutationField('deleteMany#{Model}', {
  type: nonNull('BatchPayload'),
  #{args}
  resolve(_parent, args, { #{prisma} }) {
    return #{prisma}.#{model}.deleteMany({ ...args } as any);
  },
});
`,
};

export type QueryType = keyof typeof queryTemplates;
export type MutationType = keyof typeof mutationTemplates;
export type OperationType = QueryType | MutationType;

export const allQueries: QueryType[] = ['findUnique', 'findFirst', 'findMany', 'findCount', 'aggregate'];
export const allMutations: MutationType[] = [
  'createOne',
  'updateOne',
  'deleteOne',
  'upsertOne',
  'updateMany',
  'deleteMany',
];
