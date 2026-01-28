import { objectType, list } from 'nexus'

export const Product = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Product',
  definition(t) {
    t.int('id')
    t.string('name')
    t.nullable.string('description')
    t.list.string('images')
    t.list.string('tags')
    t.list.json('features')
    t.list.int('sizes')
    t.list.float('ratings')
    t.boolean('available')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
