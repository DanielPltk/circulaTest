import { test } from '@playwright/test';
import { SignInPage } from '../pages/signInPage';
import { SignUpPage } from '../pages/signUpPage';
import { generateUniqueEmail } from '../../helpers/helpers';

test.describe('Sign Up tests', () => {
  let signUpPage: SignUpPage;
  let signInPage; SignInPage;

  test.beforeEach( async ({ page }) => {
    const uniqueEmail = generateUniqueEmail();
    signInPage = new SignInPage(page);
    await signInPage.navigateToSignIn();
    await signInPage.clickSignUpLink();
    signUpPage = new SignUpPage(page);
    await signUpPage.waitForLoad();
    await signUpPage.fillStepOne(uniqueEmail, 'Circula25!');
    await signUpPage.fillStepTwo('testfirstname', 'testlastname', '555555555');
  });

  test('should create an account by selecting country “Sweden”', async ({ page }) => {
    await signUpPage.fillStepThreeBySelection(); 
    await signUpPage.selectSwedenAsCountry();
    await page.pause();
  
    //ToDo
    // const confirmationTitle = page.getByText('Great! Now please verify your');
    // await expect(confirmationTitle).toBeVisible();
  });
  
  test('should create an account by typing country “Sweden”', async ({ page }) => {
    await signUpPage.fillStepThreeByInput('Sweden');
    await page.pause();
  
    //ToDo
    // const confirmationTitle = page.getByText('Great! Now please verify your');
    // await expect(confirmationTitle).toBeVisible();
  });
});


