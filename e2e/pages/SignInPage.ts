// pageObjects/signInPage.ts
import { Page, expect } from '@playwright/test';
import { handlePrivacyDialog } from '../../helpers/helpers';

export class SignInPage {
  readonly page: Page;
  readonly signUpLink;

  constructor(page: Page) {
    this.page = page;
    // Define the locator for the sign-up link.
    this.signUpLink = page.locator('a[href="/users/sign_up"]');
  }

  async navigate() {
    await this.page.goto('https://circula-qa-challenge.vercel.app/users/sign_in');
    // Handle the privacy dialog on the sign-in page.
    await handlePrivacyDialog(this.page);
  }

  async clickSignUpLink() {
    await expect(this.signUpLink).toBeVisible();
    await this.signUpLink.click();
  }

  async getErrorAlertText(): Promise<string> {
    const alert = this.page.getByText('Either your Username/e-mail');
    await expect(alert).toBeVisible();
    const text = await alert.textContent();
    return text ?? ''; 
  }
}
