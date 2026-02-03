import { objectType, list } from 'nexus';

export const Task = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Task',
  definition(t) {
    t.int('id');
    t.string('title');
    t.nullable.string('description');
    t.field('status', { type: 'Status' });
    t.field('priority', { type: 'Priority' });
    t.nullable.field('dueDate', { type: 'DateTime' });
    t.nullable.field('completedAt', { type: 'DateTime' });
    t.nullable.float('estimatedHours');
    t.nullable.float('actualHours');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.nullable.field('project', { type: 'Project', resolve(root: any) { return root.project; } });
    t.nullable.int('projectId');
    t.nullable.field('parent', { type: 'Task', resolve(root: any) { return root.parent; } });
    t.nullable.int('parentId');
    t.list.field('subtasks', { type: 'Task', resolve(root: any) { return root.subtasks; } });
  },
});
