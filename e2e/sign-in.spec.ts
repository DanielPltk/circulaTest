import { test, expect } from '@playwright/test';
import { SignInPage } from './pages/SignInPage';
import { generateUniqueEmail } from '../helpers/helpers';

test.describe('Sign In Page Tests', () => {

  test('should display the sign in page correctly', async ({ page }) => {
    const signInPage = new SignInPage(page);
    await signInPage.navigate();

    await expect(page).toHaveURL('https://circula-qa-challenge.vercel.app/users/sign_in');
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();

    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should sign in with valid credentials', async ({ page }) => {
    const uniqueEmail = generateUniqueEmail();
    const signInPage = new SignInPage(page);
    await signInPage.navigate();

    // Fill in valid credentials.
    await page.locator('input[name="username"]').fill(uniqueEmail);
    await page.locator('input[name="password"]').fill('ValidPassword123!');

    // Click the sign in button.
    await page.locator('button[type="submit"]').click();

    // ToDo: Wait for navigation or dashboard element to appear after sign in. 
    // await expect(page).toHaveURL('signed in Url or Prameters check');
    // await expect(page.locator('text=sign In success message')).toBeVisible();
  });

  test('should not sign in with invalid credentials and see error msg', async ({ page }) => {
    const signInPage = new SignInPage(page);
    await signInPage.navigate();

    // Fill in invalid credentials.
    await page.locator('input[name="username"]').fill('invalid@gmail.com');
    await page.locator('input[name="password"]').fill('WrongPassword!');

    // Click the sign in button.
    await page.locator('button[type="submit"]').click();

    // Verify that an error message appears.
    const errorText = await signInPage.getErrorAlertText();
    await expect(errorText).toContain('Either your Username/e-mail or your password is wrong. Please double-check.');
  });

});
