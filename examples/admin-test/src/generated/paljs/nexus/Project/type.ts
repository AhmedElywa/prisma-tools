import { objectType, list } from 'nexus';

export const Project = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Project',
  definition(t) {
    t.int('id');
    t.string('name');
    t.nullable.string('description');
    t.nullable.field('startDate', { type: 'DateTime' });
    t.nullable.field('endDate', { type: 'DateTime' });
    t.nullable.float('budget');
    t.boolean('isActive');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.list.field('tasks', { type: 'Task', resolve(root: any) { return root.tasks; } });
  },
});
