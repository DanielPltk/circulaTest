import { test, expect } from '@playwright/test';
import { handlePrivacyDialog } from '../helpers/helpers';

test('Users can create an account with “Sweden” as registered company country', async ({ page }) => {
  // 1. Navigate to the sign-in page.
  await page.goto('https://circula-qa-challenge.vercel.app/users/sign_in');

  // Handle the privacy dialog if it appears.
  const privacyDialog = page.locator('div[data-testid="uc-default-wall"]');
  await privacyDialog.waitFor({ state: 'visible'});
  const acceptButton = privacyDialog.locator('button[data-testid="uc-accept-all-button"]');
  await acceptButton.click();

  // 2. Locate the sign-up link.
  const signUpLink = page.locator('a[href="/users/sign_up"]');
  await expect(signUpLink).toBeVisible();
  await signUpLink.click();
  await expect(page).toHaveURL('https://circula-qa-challenge.vercel.app/users/sign_up');

    // Handle the privacy dialog if it appears.
  const privacyDialog1 = page.locator('div[data-testid="uc-default-wall"]');
  await privacyDialog1.waitFor({ state: 'visible'});
  const acceptButton1 = privacyDialog.locator('button[data-testid="uc-accept-all-button"]');
  await acceptButton1.click();
      // Filling out sign-up form 1st step:
  
  await page.locator('input[name="email"]').fill('testuser@test.com');
  await page.locator('input[name="password"]').fill('Circula25!');

  const checkbox = page.locator('input[type="checkbox"][name="acceptToS"]');

  // Check if the checkbox is visible
//   await expect(checkbox).toBeVisible();

  // Click the checkbox
  await checkbox.click({force:true});

  // Verify if the checkbox is checked
  await expect(checkbox).toBeChecked();


//   const checkbox = await page.getByText('I agree to the Terms and');
  
//   await page.locator('xpath=/html/body/div[1]/div/div/main/div/form/div[3]/div[2]/div/label/input').click({force:true});
//   await page.locator(':has-text("I agree to the")').click()

  //   const checkbox = page.locator('label').filter({ hasText: 'I agree to the Terms and' });
//   await checkbox.click()
  await page.getByRole('button', { name: 'Try for free' })
//   await page.locator('button[type="submit"]').click();

  await page.locator('input[name="firstname"]').fill('testfirstname');
  await page.locator('input[name="lastname"]').fill('testlastname');
  await page.locator('input[name="phoneNumber"]').fill('555555555');
  
});
