// pageObjects/signUpPage.ts
import { Page, expect } from '@playwright/test';
import { handlePrivacyDialog } from '../../helpers/helpers';

export class SignUpPage {
  readonly pageUrl: string = 'https://circula-qa-challenge.vercel.app/users/sign_up';

  constructor(public readonly page: Page) {}

  get locators() {
    const main = this.page.getByTestId('signup');
    const form = main.locator('form[name="signup"]');
    return {
      mainElement: main,
      form: form,
      // Step One locators
      emailInput: form.locator('input[name="email"]'),
      passwordInput: form.locator('input[name="password"]'),
      acceptTosCheckbox: form.locator('input[name="acceptTos"]'),
      formSubmitButton: form.locator('button[type="submit"]'),
      // Step Two locators 
      firstnameInput: form.locator('input[name="firstname"]'),
      lastnameInput: form.locator('input[name="lastname"]'),
      phoneInput: form.locator('input[name="phoneNumber"]'),
      // Step Three locators
      organizationNameInput: this.page.locator('input[name="organizationName"]'),
      countryInput: this.page.locator('input[name="country"]'),
      countryOptionSweden: this.page.getByRole('option', { name: 'Sweden' }),
      createAccountButton: this.page.getByRole('button', { name: 'Create an account' }),
    };
  }

  async waitForLoad() {
    await expect(this.locators.mainElement).toBeVisible();
    await expect(this.locators.form).toBeVisible();
    await handlePrivacyDialog(this.page);
  }

  async navigateToSignUp() {
    await this.page.goto(this.pageUrl);
    await handlePrivacyDialog(this.page);
  }

  async fillStepOne(email: string, password: string) {
    await this.locators.emailInput.fill(email);
    await this.locators.passwordInput.fill(password);
    await expect(this.locators.acceptTosCheckbox).toBeVisible();
    await this.locators.acceptTosCheckbox.check({ force: true });
    await this.locators.formSubmitButton.click();
  }

  async fillStepTwo(firstname: string, lastname: string, phone: string) {
    await this.locators.firstnameInput.fill(firstname);
    await this.locators.lastnameInput.fill(lastname);
    await this.locators.phoneInput.fill(phone);
    await this.locators.formSubmitButton.click();
  }

  async fillStepThreeBySelection() {
    await this.locators.organizationNameInput.fill('testCompanyname');
    await this.locators.countryInput.click();
  }

  async selectSwedenAsCountry(){
    await this.locators.countryOptionSweden.click({ force: true });
    await this.locators.createAccountButton.click();
  }

  async fillStepThreeByInput(country: string ) {
    await this.locators.organizationNameInput.fill('testCompanyname');
    await this.locators.countryInput.click();
    await this.locators.countryInput.fill(country);
    await this.locators.countryInput.press('Enter');
    await this.locators.createAccountButton.click();
  }
}
