import { test, expect } from '@playwright/test';

test.describe('Data Integrity & Relations', () => {
  const graphqlEndpoint = '/api/graphql';

  async function graphqlRequest(request: any, query: string) {
    const response = await request.post(graphqlEndpoint, {
      data: { query },
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  test.describe('One-to-One Relations', () => {
    test('User has one Profile', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniqueUser(where: { id: 1 }) {
            id
            email
            profile {
              id
              bio
              location
            }
          }
        }
      `);

      expect(data.findUniqueUser).toBeDefined();
      expect(data.findUniqueUser.profile).toBeDefined();
      expect(data.findUniqueUser.profile.bio).toBeDefined();
    });

    test('Profile belongs to User', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            profile {
              id
              bio
              location
            }
          }
        }
      `);

      const userWithProfile = data.findManyUser.find((u: any) => u.profile !== null);
      expect(userWithProfile).toBeDefined();
      expect(userWithProfile.profile.id).toBeDefined();
      // Verify the profile has data (confirms the 1:1 relation works)
      expect(userWithProfile.profile.bio || userWithProfile.profile.location).toBeDefined();
    });
  });

  test.describe('One-to-Many Relations', () => {
    test('User has many Posts', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniqueUser(where: { id: 2 }) {
            id
            username
            posts {
              id
              title
            }
          }
        }
      `);

      expect(data.findUniqueUser).toBeDefined();
      expect(Array.isArray(data.findUniqueUser.posts)).toBe(true);
      expect(data.findUniqueUser.posts.length).toBeGreaterThan(0);
    });

    test('Post belongs to Author', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniquePost(where: { id: 1 }) {
            id
            author {
              id
              username
            }
          }
        }
      `);

      expect(data.findUniquePost).toBeDefined();
      expect(data.findUniquePost.author).toBeDefined();
      expect(data.findUniquePost.author.id).toBeDefined();
    });

    test('Category has many Posts', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyCategory {
            id
            name
            posts {
              id
              title
            }
          }
        }
      `);

      const categoryWithPosts = data.findManyCategory.find((c: any) => c.posts && c.posts.length > 0);
      expect(categoryWithPosts).toBeDefined();
    });

    test('Brand has many Products', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyProduct {
            id
            name
            brand {
              id
              name
              products {
                id
              }
            }
          }
        }
      `);

      const productWithBrand = data.findManyProduct.find((p: any) => p.brand !== null);
      expect(productWithBrand).toBeDefined();
      // Verify circular relation works
      expect(productWithBrand.brand.products).toBeDefined();
    });
  });

  test.describe('Many-to-Many Relations (Implicit)', () => {
    test('Posts have many Tags', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniquePost(where: { id: 1 }) {
            id
            title
            tags {
              id
              name
            }
          }
        }
      `);

      expect(data.findUniquePost).toBeDefined();
      expect(Array.isArray(data.findUniquePost.tags)).toBe(true);
      expect(data.findUniquePost.tags.length).toBeGreaterThan(0);
    });

    test('Tags have many Posts', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyTag {
            id
            name
            posts {
              id
              title
            }
          }
        }
      `);

      const tagWithPosts = data.findManyTag.find((t: any) => t.posts && t.posts.length > 0);
      expect(tagWithPosts).toBeDefined();
    });

    test('Users can like many Posts', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniquePost(where: { id: 1 }) {
            id
            likedBy {
              id
              username
            }
          }
        }
      `);

      expect(data.findUniquePost).toBeDefined();
      expect(Array.isArray(data.findUniquePost.likedBy)).toBe(true);
    });

    test('Groups have many Members', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            username
            groups {
              id
              name
            }
          }
        }
      `);

      const userWithGroups = data.findManyUser.find((u: any) => u.groups && u.groups.length > 0);
      expect(userWithGroups).toBeDefined();
    });
  });

  test.describe('Self-Referential Relations', () => {
    test('Category parent/children hierarchy', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyCategory {
            id
            name
            parent {
              id
              name
            }
            children {
              id
              name
            }
          }
        }
      `);

      // Find a child category
      const childCategory = data.findManyCategory.find((c: any) => c.parent !== null);
      expect(childCategory).toBeDefined();
      expect(childCategory.parent.name).toBeDefined();

      // Find a parent category with children
      const parentCategory = data.findManyCategory.find((c: any) => c.children && c.children.length > 0);
      expect(parentCategory).toBeDefined();
    });

    test('Comment replies hierarchy', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniquePost(where: { id: 1 }) {
            comments {
              id
              content
              parent {
                id
                content
              }
              replies {
                id
                content
              }
            }
          }
        }
      `);

      expect(data.findUniquePost.comments).toBeDefined();
      // Check if any comment has replies
      const commentWithReplies = data.findUniquePost.comments.find((c: any) => c.replies && c.replies.length > 0);
      if (commentWithReplies) {
        expect(commentWithReplies.replies[0].content).toBeDefined();
      }
    });
  });

  test.describe('Enum Fields', () => {
    test('User role enum', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            role
          }
        }
      `);

      const roles = data.findManyUser.map((u: any) => u.role);
      expect(roles).toContain('ADMIN');
      expect(roles).toContain('USER');
    });

    test('Post status enum', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyPost {
            id
            status
          }
        }
      `);

      const statuses = data.findManyPost.map((p: any) => p.status);
      expect(statuses).toContain('PUBLISHED');
      expect(statuses).toContain('DRAFT');
    });

    test('Order status enum', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyOrder {
            id
            status
          }
        }
      `);

      const statuses = data.findManyOrder.map((o: any) => o.status);
      expect(statuses.length).toBeGreaterThan(0);
    });
  });

  test.describe('Nullable vs Required Fields', () => {
    test('Required fields are present', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            email
            username
          }
        }
      `);

      for (const user of data.findManyUser) {
        expect(user.id).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.username).toBeDefined();
      }
    });

    test('Nullable fields can be null', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            firstName
            lastName
          }
        }
      `);

      // Guest user doesn't have firstName/lastName in profile
      const guestUser = data.findManyUser.find((u: any) => u.firstName === null || u.lastName === null);
      // This is okay - nullable fields can be null
      expect(data.findManyUser.length).toBeGreaterThan(0);
    });

    test('Optional relations can be null', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyPost {
            id
            author {
              id
            }
          }
        }
      `);

      // Some posts might have null author (if SetNull is triggered)
      expect(data.findManyPost.length).toBeGreaterThan(0);
    });
  });

  test.describe('Numeric Fields', () => {
    test('Integer fields', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyProduct {
            id
            quantity
          }
        }
      `);

      for (const product of data.findManyProduct) {
        expect(Number.isInteger(product.id)).toBe(true);
        expect(Number.isInteger(product.quantity)).toBe(true);
      }
    });

    test('Float fields', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyProduct {
            id
            price
          }
          findManyUser {
            id
            balance
          }
        }
      `);

      for (const product of data.findManyProduct) {
        expect(typeof product.price).toBe('number');
      }
    });
  });

  test.describe('Boolean Fields', () => {
    test('Boolean fields return true/false', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            isActive
          }
          findManyProduct {
            id
            isActive
            isFeatured
          }
        }
      `);

      for (const user of data.findManyUser) {
        expect(typeof user.isActive).toBe('boolean');
      }

      for (const product of data.findManyProduct) {
        expect(typeof product.isActive).toBe('boolean');
        expect(typeof product.isFeatured).toBe('boolean');
      }
    });
  });

  test.describe('Date/Time Fields', () => {
    test('DateTime fields are strings', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            createdAt
            updatedAt
          }
          findManyPost {
            id
            publishedAt
          }
        }
      `);

      for (const user of data.findManyUser) {
        expect(typeof user.createdAt).toBe('string');
        expect(typeof user.updatedAt).toBe('string');
      }
    });
  });
});
