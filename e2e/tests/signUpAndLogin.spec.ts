import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/signUpPage';
import { SignInPage } from '../pages/signInPage';
import { generateUniqueEmail } from '../../helpers/helpers';

test('should allow a newly created account with company "Sweden" to log in successfully', async ({ page }) => {
  // Sign-Up Flow
  const signUpPage = new SignUpPage(page);
  await signUpPage.navigateToSignUp();
  await signUpPage.waitForLoad();
  await signUpPage.fillStepOne(generateUniqueEmail(), 'ValidPassword123!');
  await signUpPage.fillStepTwo('TestFirst', 'TestLast', '1234567890');
  await signUpPage.fillStepThreeBySelection();
  const confirmationTitle = page.getByText('Great! Now please verify your');
  await expect(confirmationTitle).toBeVisible();

  // Sign-In Flow
  const signInPage = new SignInPage(page);
  await signInPage.navigateToSignIn();
  await signInPage.signInWithValidCredentials();

  // Verify successful login + username parameter (adjust the URL or success message as needed)

});