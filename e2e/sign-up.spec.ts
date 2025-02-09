import { test, expect } from '@playwright/test';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { generateUniqueEmail } from '../helpers/helpers';

test('Users can create an account with “Sweden” as a country', async ({ page }) => {
  const uniqueEmail = generateUniqueEmail();
  const signInPage = new SignInPage(page);
  await signInPage.navigate();
  await signInPage.clickSignUpLink();
  await expect(page).toHaveURL('https://circula-qa-challenge.vercel.app/users/sign_up');

  const signUpPage = new SignUpPage(page);
  await signUpPage.waitForLoad();

  await signUpPage.fillStepOne(uniqueEmail, 'Circula25!');
  await signUpPage.fillStepTwo('testfirstname', 'testlastname', '555555555');
  await signUpPage.fillStepThree(); // Defaults to Sweden

  //ToDo
  // const confirmationTitle = page.getByText('Great! Now please verify your');
  // await expect(confirmationTitle).toBeVisible();
});
