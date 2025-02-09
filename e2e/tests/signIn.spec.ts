import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/signInPage';

test.describe('Sign In Page Tests', () => {
  let signInPage: SignInPage;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.navigateToSignIn();
  });

  test('should display the sign in page correctly', async () => {
    await signInPage.assertSignInPageIsDisplayed();
  });

  test('should sign in with valid credentials', async () => {
    await signInPage.signInWithValidCredentials();
    // ToDo: Add assertions for a successful sign in.
    // For example:
    // await expect(page).toHaveURL('https://your-app/dashboard');
    // await expect(page.locator('text=Welcome')).toBeVisible();
  });

  test('should see error message when signing in with invalid credentials', async () => {
    await signInPage.signInWithInvalidCredentials();
    await signInPage.assertInvalidCredentialsError();
  });

  test('should navigate to forgot password page', async () => {
    await signInPage.verifyForgotPasswordLinkVisible();
    await signInPage.navigateToForgetPasswordPage();
    await signInPage.assertNavigatedForgotPasswordPage();
  });

  test('should display Google sign in flow', async () => {
    await signInPage.verifyGoogleButton();
  });

  test('should display SSO sign in flow', async () => {
    await signInPage.verifySSOsignIn();
  });
});
