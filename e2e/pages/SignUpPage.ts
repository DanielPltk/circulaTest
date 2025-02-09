// pageObjects/signUpPage.ts
import { Page, expect } from '@playwright/test';
import { handlePrivacyDialog } from '../../helpers/helpers';

export class SignUpPage {
  readonly page: Page;
  readonly mainSignUpElement;
  readonly signUpForm;

  constructor(page: Page) {
    this.page = page;
    this.mainSignUpElement = page.locator('main[data-testid="signup"]');
    this.signUpForm = this.mainSignUpElement.locator('form[name="signup"]');
  }

  async waitForLoad() {
    // Verify that the sign-up page and form are visible.
    // ToDo: remove redundant validation after consultation
    await expect(this.mainSignUpElement).toBeVisible();
    await expect(this.signUpForm).toBeVisible();
    // In case the privacy dialog appears here, handle it.
    await handlePrivacyDialog(this.page);
  }

  async fillStepOne(email: string, password: string) {
    await this.signUpForm.locator('input[name="email"]').fill(email);
    await this.signUpForm.locator('input[name="password"]').fill(password);
    // Check the Terms and Conditions checkbox.
    await this.signUpForm.locator('input[name="acceptTos"]').check({ force: true });
    // Click the button to go to the next step.
    await this.signUpForm.locator('button[type="submit"]').click();
  }

  async fillStepTwo(firstname: string, lastname: string, phone: string) {
    await this.signUpForm.locator('input[name="firstname"]').fill(firstname);
    await this.signUpForm.locator('input[name="lastname"]').fill(lastname);
    await this.signUpForm.locator('input[name="phoneNumber"]').fill(phone);
    // Click the button to proceed.
    await this.signUpForm.locator('button[type="submit"]').click();
  }

  async fillStepThree() {
    // Fill in the organization name.
    await this.page.locator('input[name="organizationName"]').fill('testCompanyname');
    // Open the country dropdown and select "Sweden".
    await this.page.locator('input[name="country"]').click();
    await this.page.getByRole('option', { name: 'Sweden' }).click({ force: true });

    // The following interactions represent additional steps.
    // await this.page.locator('input[name="hdyhau"]').click();
    // await this.page.getByText('Event').click();
    // await this.page.getByRole('textbox', { name: 'At which event did you hear' }).fill('Lola');
    await this.page.getByRole('button', { name: 'Create an account' }).click();
  }
}
