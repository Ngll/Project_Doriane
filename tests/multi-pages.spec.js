import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Navigate to home page
  await page.goto('https://www.doriane.com/');

  //Hover under Software menu and click on Bloomeo Agro Testing
  await page.getByRole('button', { name: 'Software' }).hover();
  await page.getByRole('link', { name: 'Bloomeo Agro Testing' }).click();

  //Verify navigation is correct for "Bloomeo Agro Testing" page
  await expect(page).toHaveURL(/.*agronomy-testing-software/);

  //Click on Accept All cookies
  await page.getByRole('button', { name: 'Accept all cookies' }).click();

  //click on Read more success stories
  await page.getByRole('link', { name: 'Read more success stories' }).click();
  await page.getByLabel('Email Form', { exact: true }).getByText('Agronomy Testing').click();
  await page.getByRole('link', { name: 'Your project' }).click();

  //Hover and click on Resources
  await page.getByRole('button', { name: 'Resources' }).hover();
  await page.getByRole('link', { name: 'Webinars & events' }).hover();
  await page.getByRole('link', { name: 'Webinars & events' }).click();

  //Fill form for Demo
  await page.locator('header').getByRole('link', { name: 'Book a demo' }).hover();
  await page.locator('header').getByRole('link', { name: 'Book a demo' }).click();
  await page.locator('input[name="Name_First"]').click();
  await page.locator('input[name="Name_First"]').fill('test');
  await page.locator('input[name="Name_First"]').press('Tab');
  await page.locator('input[name="Name_Last"]').fill('test');
  await page.locator('input[name="Name_Last"]').press('Tab');
  await page.locator('input[name="SingleLine"]').fill('test');
  await page.locator('input[name="SingleLine"]').press('Tab');
  await page.locator('input[name="SingleLine1"]').fill('test');
  await page.locator('input[name="SingleLine1"]').press('Tab');
  await page.locator('#international_PhoneNumber_countrycode').press('Tab');
  await page.locator('input[name="Email"]').fill('test@best.com');
  await page.locator('input[name="Email"]').press('Tab');
  await page.locator('textarea[name="MultiLine"]').press('Tab');
  await page.getByRole('checkbox', { name: 'I agree that my personal data' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();

  //verify email sent confirmation message
  await page.getByText('Please check the email we').click();
  await page.getByText('⚠️ We need to confirm your').click();
  await page.getByText('⚠️ We need to confirm your').click();
  await expect(page.locator('label')).toContainText('Please check the email we have just sent you.');
});