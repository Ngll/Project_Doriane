// tests/homepage.spec.js
const { test, expect } = require('@playwright/test');

test('Visit Doriane website and check title', async ({ page }) => {
  await page.goto('https://www.doriane.com/');

  // Accept cookies if the banner is shown
  const cookieButton = page.locator('button', { hasText: 'Accept' });
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }

  // Check if the main title or logo is visible
  await expect(page).toHaveTitle(/Doriane/);
  await expect(page.locator('header')).toBeVisible();

  // Example: Click on the "Solutions" link in the navigation
  await page.getByRole('link', { name:"Your project" }).click();
  await expect(page).toHaveURL(/your-project/);
});
