/**
 * Comprehensive PrismaSelect Tests
 *
 * Tests all PrismaSelect options and functionality using real GraphQL infrastructure.
 * This uses the existing test server which provides real GraphQL ResolveInfo.
 */

import gql from 'graphql-tag';
import { PrismaSelect } from '../src';
import { executeOperation } from './server';

describe('PrismaSelect Options', () => {
  describe('defaultFields option', () => {
    const defaultFieldsQuery = gql`
      query userWithDefaultValues {
        userWithDefaultValues {
          id
        }
      }
    `;

    test('adds default fields as object', async () => {
      const { log } = await executeOperation({ query: defaultFieldsQuery });
      // The resolver uses defaultFields: { User: { firstName: true, lastName: true } }
      expect(log.select).toBeDefined();
      expect(log.select.select.id).toBe(true);
      expect(log.select.select.firstName).toBe(true);
      expect(log.select.select.lastName).toBe(true);
    });
  });

  describe('excludeFields option', () => {
    const excludeFieldsQuery = gql`
      query userWithExcludeValues {
        userWithExcludeValues {
          id
          email
          password
          firstName
          lastName
        }
      }
    `;

    test('excludes fields as array', async () => {
      const { log } = await executeOperation({ query: excludeFieldsQuery });
      // The resolver uses excludeFields: { User: ['email', 'password'] }
      expect(log.select).toBeDefined();
      expect(log.select.select.id).toBe(true);
      expect(log.select.select.firstName).toBe(true);
      expect(log.select.select.lastName).toBe(true);
      // email and password should be excluded even though queried
      expect(log.select.select.email).toBeUndefined();
      expect(log.select.select.password).toBeUndefined();
    });
  });

  describe('dmmf option', () => {
    const userQuery = gql`
      query user {
        user(where: { id: 1 }) {
          id
          email
          firstName
          posts {
            id
            title
          }
        }
      }
    `;

    test('validates fields against dmmf', async () => {
      const { log } = await executeOperation({ query: userQuery });
      // Should have valid fields from the schema
      expect(log.select.select.id).toBe(true);
      expect(log.select.select.email).toBe(true);
      expect(log.select.select.firstName).toBe(true);
    });

    test('filters invalid fields not in schema', async () => {
      // Account has newFieldNotInSchema which is not in the Prisma schema
      const accountQuery = gql`
        query account {
          account {
            id
            firstName
            newFieldNotInSchema
          }
        }
      `;
      const { log } = await executeOperation({ query: accountQuery });
      // newFieldNotInSchema should be filtered out
      expect(log.select.select.id).toBe(true);
      expect(log.select.select.firstName).toBe(true);
      // newFieldNotInSchema is not in Prisma schema, should be filtered
      expect(log.select.select.newFieldNotInSchema).toBeUndefined();
    });
  });
});

describe('PrismaSelect Methods', () => {
  describe('valueOf', () => {
    const valueOfQuery = gql`
      query getNestedValue($type: String!, $value: String!) {
        getNestedValue(type: $type, value: $value) {
          id
          posts {
            id
            comments {
              id
              contain
            }
          }
        }
      }
    `;

    test('gets value from nested path', async () => {
      const { log } = await executeOperation({
        query: valueOfQuery,
        variables: { value: 'posts', type: 'Post' },
      });
      // Should return the select for posts
      expect(log.select).toBeDefined();
      expect(log.select.select).toBeDefined();
    });

    test('gets value from deeply nested path', async () => {
      const { log } = await executeOperation({
        query: valueOfQuery,
        variables: { value: 'posts.comments', type: 'Comment' },
      });
      // Should return the select for comments
      expect(log.select).toBeDefined();
    });

    test('returns empty object for non-existent path', async () => {
      const { log } = await executeOperation({
        query: valueOfQuery,
        variables: { value: 'post', type: 'Post' },
      });
      // 'post' (singular) doesn't exist, should return empty
      expect(log.select).toEqual({});
    });
  });

  describe('mergeDeep', () => {
    test('merges objects deeply', () => {
      const target = {
        select: {
          id: true,
          posts: {
            select: {
              id: true,
            },
          },
        },
      };
      const source = {
        select: {
          email: true,
          posts: {
            select: {
              title: true,
            },
          },
        },
      };

      const result = PrismaSelect.mergeDeep(target, source);

      expect(result.select.id).toBe(true);
      expect(result.select.email).toBe(true);
      expect(result.select.posts.select.id).toBe(true);
      expect(result.select.posts.select.title).toBe(true);
    });

    test('handles empty objects', () => {
      const result = PrismaSelect.mergeDeep({}, { select: { id: true } });
      expect(result).toEqual({ select: { id: true } });
    });

    test('handles nested arrays', () => {
      const target = { arr: [1, 2] };
      const source = { arr: [3, 4] };
      const result = PrismaSelect.mergeDeep(target, source);
      // Arrays should be replaced, not merged
      expect(result.arr).toEqual([3, 4]);
    });
  });
});

describe('PrismaSelect Relations', () => {
  const nestedQuery = gql`
    query user {
      user(where: { id: 1 }) {
        id
        posts {
          id
          title
          comments {
            id
            contain
          }
        }
      }
    }
  `;

  test('handles nested relations', async () => {
    const { log } = await executeOperation({ query: nestedQuery });

    expect(log.select.select.id).toBe(true);
    expect(log.select.select.posts).toBeDefined();
    expect(log.select.select.posts.select.id).toBe(true);
    expect(log.select.select.posts.select.title).toBe(true);
    expect(log.select.select.posts.select.comments).toBeDefined();
  });

  test('preserves relation arguments', async () => {
    const queryWithArgs = gql`
      query user {
        user(where: { id: 1 }) {
          id
          posts(where: { title: { contains: "test" } }, take: 10, skip: 5) {
            id
            title
          }
        }
      }
    `;

    const { log } = await executeOperation({ query: queryWithArgs });

    // Should have the args on the posts relation
    expect(log.select.select.posts).toBeDefined();
    expect(log.select.select.posts.where).toBeDefined();
    expect(log.select.select.posts.take).toBe(10);
    expect(log.select.select.posts.skip).toBe(5);
  });
});

describe('PrismaSelect Aggregations', () => {
  const aggregateQuery = gql`
    query aggregateUser {
      aggregateUser {
        _avg {
          id
        }
        _count {
          email
        }
        _max {
          id
        }
        _sum {
          id
        }
      }
    }
  `;

  test('handles aggregate queries', async () => {
    const { log } = await executeOperation({ query: aggregateQuery });

    expect(log.select).toBeDefined();
    expect(log.select._avg).toBeDefined();
    expect(log.select._count).toBeDefined();
    expect(log.select._max).toBeDefined();
    expect(log.select._sum).toBeDefined();
  });
});

describe('PrismaSelect Field Aliasing', () => {
  test('handles field aliases', async () => {
    const aliasQuery = gql`
      query user {
        user(where: { id: 1 }) {
          id
          name: firstName
          fullName
        }
      }
    `;

    const { log } = await executeOperation({ query: aliasQuery });

    // Should use the actual field name, not the alias
    expect(log.select.select.id).toBe(true);
    expect(log.select.select.firstName).toBe(true);
    // fullName is a computed field, not stored
  });
});

describe('PrismaSelect with parseResolveInfo', () => {
  test('returns parsedResolveInfoFragment', async () => {
    const query = gql`
      query user {
        user(where: { id: 1 }) {
          id
          email
        }
      }
    `;

    const { log } = await executeOperation({ query });

    // The test server also returns the parsed resolve info
    expect(log.parsedResolveInfoFragment).toBeDefined();
    expect(log.parsedResolveInfoFragment.name).toBe('user');
  });
});
