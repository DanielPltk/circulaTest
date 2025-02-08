import { test, expect } from '@playwright/test';
import { handlePrivacyDialog } from '../helpers/helpers';

function generateUniqueEmail(domain: string = 'test.com'): string {
  const timestamp = Date.now(); // Get the current timestamp
  return `testuser_${timestamp}@${domain}`;
}

test('Users can create an account with “Sweden” as a country where the company is registered', async ({ page }) => {
  const uniqueEmail = generateUniqueEmail();
  // 1. Navigate to the sign-in page.
  await page.goto('https://circula-qa-challenge.vercel.app/users/sign_in');

  // Handle the privacy dialog if it appears.
  await handlePrivacyDialog(page);

  // 2. Locate the sign-up link.
  const signUpLink = page.locator('a[href="/users/sign_up"]');
  await expect(signUpLink).toBeVisible();

  // 3. Click the sign-up link and wait for the URL to change.
  await signUpLink.click();

  // 4. Verify the URL is now the sign-up page.
  await expect(page).toHaveURL('https://circula-qa-challenge.vercel.app/users/sign_up');


  // 5. Locate and verify the main sign-up element.
  const mainSignUpElement = page.locator('main[data-testid="signup"]');
  await expect(mainSignUpElement).toBeVisible();

  // 6. Locate and verify the sign-up form within the main element.
  const signUpForm = mainSignUpElement.locator('form[name="signup"]');
  await expect(signUpForm).toBeVisible();

  
  // Handle the privacy dialog if it appears.
  await handlePrivacyDialog(page);

  // Filling out sign-up form 1st step:
  
  await signUpForm.locator('input[name="email"]').fill(uniqueEmail); //handle email generation to avoid error-already exists
  await signUpForm.locator('input[name="password"]').fill('Circula25!');

  // Terms and Conditions check box.
  await signUpForm.locator('input[name="acceptTos"]').check({ force: true });

  // Next step CTA button
  await signUpForm.locator('button[type="submit"]').click();
  


  // Filling out sign-up form 2st step:

  await signUpForm.locator('input[name="firstname"]').fill('testfirstname');
  await signUpForm.locator('input[name="lastname"]').fill('testlastname');
  await signUpForm.locator('input[name="phoneNumber"]').fill('555555555');

  await signUpForm.locator('button[type="submit"]').click();

  await page.locator('input[name="organizationName"]').fill('testCompanyname');

  await page.locator('input[name="country"]').click();



  await page.getByRole('option', { name: 'Sweden' }).click({force: true});

  

  await page.locator('input[name="hdyhau"]').click();
  await page.getByText('Event').click();
  await page.getByRole('textbox', { name: 'At which event did you hear' }).fill('Lola');
  await page.getByRole('button', { name: 'Create an account' }).click();
  // error email exists
  const confirmationTitle = await page.getByText('Great! Now please verify your')
  await expect(confirmationTitle).toBeVisible();
});
