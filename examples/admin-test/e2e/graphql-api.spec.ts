import { test, expect } from '@playwright/test';

test.describe('GraphQL API', () => {
  const graphqlEndpoint = '/api/graphql';

  async function graphqlRequest(request: any, query: string, variables?: Record<string, any>) {
    const response = await request.post(graphqlEndpoint, {
      data: { query, variables },
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  test.describe('User queries', () => {
    test('should fetch all users', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyUser {
            id
            email
            username
            firstName
            lastName
            role
            isActive
          }
        }
      `);

      expect(data.findManyUser).toBeDefined();
      expect(data.findManyUser.length).toBeGreaterThan(0);
      expect(data.findManyUser[0]).toHaveProperty('id');
      expect(data.findManyUser[0]).toHaveProperty('email');
      expect(data.findManyUser[0]).toHaveProperty('username');
    });

    test('should fetch single user by id', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniqueUser(where: { id: 1 }) {
            id
            email
            username
            role
            profile {
              bio
              location
            }
          }
        }
      `);

      expect(data.findUniqueUser).toBeDefined();
      expect(data.findUniqueUser.id).toBe(1);
      expect(data.findUniqueUser.email).toBe('admin@example.com');
    });

    test('should fetch user with related posts', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniqueUser(where: { id: 2 }) {
            id
            username
            posts {
              id
              title
              status
            }
          }
        }
      `);

      expect(data.findUniqueUser).toBeDefined();
      expect(data.findUniqueUser.username).toBe('johndoe');
      expect(Array.isArray(data.findUniqueUser.posts)).toBe(true);
    });
  });

  test.describe('Post queries', () => {
    test('should fetch all posts', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyPost {
            id
            title
            slug
            status
            featured
            viewCount
          }
        }
      `);

      expect(data.findManyPost).toBeDefined();
      expect(data.findManyPost.length).toBeGreaterThan(0);
    });

    test('should fetch post with author and category', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniquePost(where: { id: 1 }) {
            id
            title
            author {
              id
              username
            }
            category {
              id
              name
            }
            tags {
              id
              name
            }
          }
        }
      `);

      expect(data.findUniquePost).toBeDefined();
      expect(data.findUniquePost.author).toBeDefined();
      expect(data.findUniquePost.category).toBeDefined();
      expect(Array.isArray(data.findUniquePost.tags)).toBe(true);
    });

    test('should fetch post with comments and nested replies', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findUniquePost(where: { id: 1 }) {
            id
            title
            comments {
              id
              content
              approved
              author {
                username
              }
              replies {
                id
                content
              }
            }
          }
        }
      `);

      expect(data.findUniquePost).toBeDefined();
      expect(Array.isArray(data.findUniquePost.comments)).toBe(true);
    });
  });

  test.describe('Category queries with self-referential relations', () => {
    test('should fetch categories with parent/children hierarchy', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyCategory {
            id
            name
            slug
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

      expect(data.findManyCategory).toBeDefined();
      // Find parent category (Technology)
      const techCategory = data.findManyCategory.find((c: any) => c.name === 'Technology');
      expect(techCategory).toBeDefined();
      expect(techCategory.children.length).toBeGreaterThan(0);

      // Find child category (Web Development)
      const webDev = data.findManyCategory.find((c: any) => c.name === 'Web Development');
      expect(webDev).toBeDefined();
      expect(webDev.parent).toBeDefined();
      expect(webDev.parent.name).toBe('Technology');
    });
  });

  test.describe('Product queries', () => {
    test('should fetch products with brand relation', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyProduct {
            id
            name
            sku
            price
            quantity
            isActive
            brand {
              id
              name
            }
          }
        }
      `);

      expect(data.findManyProduct).toBeDefined();
      expect(data.findManyProduct.length).toBeGreaterThan(0);
      const productWithBrand = data.findManyProduct.find((p: any) => p.brand !== null);
      expect(productWithBrand).toBeDefined();
    });

    test('should fetch products with reviews', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyProduct {
            id
            name
            reviews {
              id
              rating
              title
              author {
                username
              }
            }
          }
        }
      `);

      expect(data.findManyProduct).toBeDefined();
      const productWithReviews = data.findManyProduct.find((p: any) => p.reviews && p.reviews.length > 0);
      expect(productWithReviews).toBeDefined();
    });
  });

  test.describe('Order queries', () => {
    test('should fetch orders with customer and items', async ({ request }) => {
      const { data } = await graphqlRequest(request, `
        query {
          findManyOrder {
            id
            orderNumber
            status
            subtotal
            total
            customer {
              id
              username
            }
            items {
              id
              quantity
              price
              product {
                id
                name
              }
            }
          }
        }
      `);

      expect(data.findManyOrder).toBeDefined();
      expect(data.findManyOrder.length).toBeGreaterThan(0);
      const orderWithItems = data.findManyOrder.find((o: any) => o.items && o.items.length > 0);
      expect(orderWithItems).toBeDefined();
      expect(orderWithItems.items[0].product).toBeDefined();
    });
  });

  test.describe('User mutations', () => {
    let createdUserId: number;

    test('should create a new user', async ({ request }) => {
      const timestamp = Date.now();
      const { data, errors } = await graphqlRequest(request, `
        mutation {
          createOneUser(data: {
            email: "test-${timestamp}@example.com"
            username: "testuser${timestamp}"
            password: "testpassword123"
            firstName: "Test"
            lastName: "User"
          }) {
            id
            email
            username
            firstName
            lastName
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.createOneUser).toBeDefined();
      expect(data.createOneUser.firstName).toBe('Test');
      expect(data.createOneUser.lastName).toBe('User');
      createdUserId = data.createOneUser.id;
    });

    test('should update an existing user', async ({ request }) => {
      // First create a user to update
      const timestamp = Date.now();
      const createResult = await graphqlRequest(request, `
        mutation {
          createOneUser(data: {
            email: "update-test-${timestamp}@example.com"
            username: "updatetest${timestamp}"
            password: "testpassword123"
          }) {
            id
          }
        }
      `);

      const userId = createResult.data.createOneUser.id;

      const { data, errors } = await graphqlRequest(request, `
        mutation {
          updateOneUser(
            where: { id: ${userId} }
            data: {
              firstName: { set: "Updated" }
              lastName: { set: "Name" }
            }
          ) {
            id
            firstName
            lastName
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.updateOneUser).toBeDefined();
      expect(data.updateOneUser.firstName).toBe('Updated');
      expect(data.updateOneUser.lastName).toBe('Name');
    });

    test('should delete a user', async ({ request }) => {
      // First create a user to delete
      const timestamp = Date.now();
      const createResult = await graphqlRequest(request, `
        mutation {
          createOneUser(data: {
            email: "delete-test-${timestamp}@example.com"
            username: "deletetest${timestamp}"
            password: "testpassword123"
          }) {
            id
          }
        }
      `);

      const userId = createResult.data.createOneUser.id;

      const { data, errors } = await graphqlRequest(request, `
        mutation {
          deleteOneUser(where: { id: ${userId} }) {
            id
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.deleteOneUser.id).toBe(userId);

      // Verify user is deleted
      const verifyResult = await graphqlRequest(request, `
        query {
          findUniqueUser(where: { id: ${userId} }) {
            id
          }
        }
      `);

      expect(verifyResult.data.findUniqueUser).toBeNull();
    });
  });

  test.describe('Post mutations', () => {
    test('should create a new post', async ({ request }) => {
      const timestamp = Date.now();
      const { data, errors } = await graphqlRequest(request, `
        mutation {
          createOnePost(data: {
            title: "Test Post ${timestamp}"
            slug: "test-post-${timestamp}"
            content: "This is test content"
            author: { connect: { id: 2 } }
            category: { connect: { id: 2 } }
          }) {
            id
            title
            slug
            content
            author {
              id
            }
            category {
              id
            }
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.createOnePost).toBeDefined();
      expect(data.createOnePost.author.id).toBe(2);
    });

    test('should update a post', async ({ request }) => {
      // First create a post
      const timestamp = Date.now();
      const createResult = await graphqlRequest(request, `
        mutation {
          createOnePost(data: {
            title: "Update Test ${timestamp}"
            slug: "update-test-${timestamp}"
          }) {
            id
          }
        }
      `);

      const postId = createResult.data.createOnePost.id;

      const { data, errors } = await graphqlRequest(request, `
        mutation {
          updateOnePost(
            where: { id: ${postId} }
            data: {
              title: { set: "Updated Title" }
              content: { set: "Updated content" }
            }
          ) {
            id
            title
            content
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.updateOnePost.title).toBe('Updated Title');
    });

    test('should delete a post', async ({ request }) => {
      // First create a post
      const timestamp = Date.now();
      const createResult = await graphqlRequest(request, `
        mutation {
          createOnePost(data: {
            title: "Delete Test ${timestamp}"
            slug: "delete-test-${timestamp}"
          }) {
            id
          }
        }
      `);

      const postId = createResult.data.createOnePost.id;

      const { data, errors } = await graphqlRequest(request, `
        mutation {
          deleteOnePost(where: { id: ${postId} }) {
            id
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.deleteOnePost.id).toBe(postId);
    });
  });

  test.describe('Category mutations', () => {
    test('should create a new category', async ({ request }) => {
      const timestamp = Date.now();
      const { data, errors } = await graphqlRequest(request, `
        mutation {
          createOneCategory(data: {
            name: "Test Category ${timestamp}"
            slug: "test-category-${timestamp}"
            description: "Test description"
          }) {
            id
            name
            slug
            description
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.createOneCategory).toBeDefined();
    });
  });

  test.describe('Product mutations', () => {
    test('should create a new product', async ({ request }) => {
      const timestamp = Date.now();
      const { data, errors } = await graphqlRequest(request, `
        mutation {
          createOneProduct(data: {
            name: "Test Product ${timestamp}"
            sku: "TEST-${timestamp}"
            price: 99.99
            description: "Test product description"
          }) {
            id
            name
            sku
            price
            description
          }
        }
      `);

      expect(errors).toBeUndefined();
      expect(data.createOneProduct).toBeDefined();
      expect(data.createOneProduct.price).toBe(99.99);
    });
  });
});
