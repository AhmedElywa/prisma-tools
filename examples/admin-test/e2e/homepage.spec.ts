import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage with all model cards', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Admin Test - PalJS/);

    // Check header
    await expect(page.locator('h1')).toContainText('PalJS Admin Test');

    // Check quick links
    await expect(page.locator('a[href="/api/graphql"]')).toBeVisible();
    await expect(page.locator('a[href="/admin"]')).toBeVisible();

    // Check all model cards are displayed
    const models = [
      'User', 'Profile', 'Post', 'Comment', 'Category', 'Tag',
      'Product', 'Brand', 'Order', 'Review', 'Message', 'Group',
      'Project', 'Task', 'Setting', 'AuditLog'
    ];

    for (const model of models) {
      await expect(page.locator(`text=${model}`).first()).toBeVisible();
    }
  });

  test('should show correct test coverage stats', async ({ page }) => {
    await page.goto('/');

    // Check stats display
    await expect(page.locator('text=16')).toBeVisible(); // 16 Models
    await expect(page.locator('text=3')).toBeVisible();  // 3 Enums
    await expect(page.locator('text=5')).toBeVisible();  // 5 Relation Types
    await expect(page.locator('text=4')).toBeVisible();  // 4 CRUD Operations
  });

  test('should navigate to GraphQL playground', async ({ page }) => {
    await page.goto('/');

    const graphqlLink = page.locator('a[href="/api/graphql"]');
    await expect(graphqlLink).toBeVisible();
    await expect(graphqlLink).toContainText('GraphQL Playground');
  });

  test('should navigate to Admin Dashboard', async ({ page }) => {
    await page.goto('/');

    const adminLink = page.locator('a[href="/admin"]');
    await expect(adminLink).toBeVisible();
    await expect(adminLink).toContainText('Admin Dashboard');
  });

  test('model cards should have correct links', async ({ page }) => {
    await page.goto('/');

    // Check a few model card links
    await expect(page.locator('a[href="/admin/user"]')).toBeVisible();
    await expect(page.locator('a[href="/admin/post"]')).toBeVisible();
    await expect(page.locator('a[href="/admin/product"]')).toBeVisible();
    await expect(page.locator('a[href="/admin/order"]')).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Header should still be visible
    await expect(page.locator('h1')).toContainText('PalJS Admin Test');

    // Model cards should be in single column
    const cards = page.locator('.grid > a');
    await expect(cards.first()).toBeVisible();
  });
});
