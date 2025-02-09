// pageObjects/signInPage.ts
import { Page, expect } from '@playwright/test';
import { handlePrivacyDialog, generateUniqueEmail } from '../../helpers/helpers';

export class SignInPage {
  readonly pageUrl: string = 'https://circula-qa-challenge.vercel.app/users/sign_in';
  readonly forgotPasswordUrlRegex: RegExp = /^https:\/\/circula-qa-challenge\.vercel\.app\/users\/password\/new/;


  constructor(public readonly page: Page) {}

  get locators() {
    return {
      signUpLink: this.page.locator('a[href="/users/sign_up"]'),
      submitBtn: this.page.locator('button[type="submit"]'),
      usernameInput: this.page.locator('input[name="username"]'),
      passwordInput: this.page.locator('input[name="password"]'),
      errorAlert: this.page.getByText('Either your Username/e-mail'),
      forgotPasswordLink: this.page.getByRole('link', { name: 'Forgot password?' }),
      googleButton: this.page.getByTitle('Sign in with Google Button'),
      ssoLink: this.page.getByRole('link', { name: 'Sign in with SSO' }),
    };
  }

  async navigateToSignIn() {
    await this.page.goto(this.pageUrl);
    await handlePrivacyDialog(this.page);
  }

  async assertSignInPageIsDisplayed() {
    await expect(this.page).toHaveURL(this.pageUrl);
    await expect(this.locators.usernameInput).toBeVisible();
    await expect(this.locators.passwordInput).toBeVisible();
    await expect(this.locators.submitBtn).toBeVisible();
    await expect(this.locators.signUpLink).toBeVisible();
  }

  async clickSignUpLink() {
    await expect(this.locators.signUpLink).toBeVisible();
    await this.locators.signUpLink.click();
  }

  async getErrorAlertText() {
    await expect(this.locators.errorAlert).toBeVisible();
    const text = await this.locators.errorAlert.textContent();
    return text ?? '';
  }

  async clickSubmit() {
    await this.locators.submitBtn.click();
  }

  async signInWithValidCredentials() {
    const uniqueEmail = generateUniqueEmail();
    await this.locators.usernameInput.fill(uniqueEmail);
    await this.locators.passwordInput.fill('ValidPassword123!');
    await this.clickSubmit();
  }

  async signInWithInvalidCredentials() {
    await this.locators.usernameInput.fill('invalid@gmail.com');
    await this.locators.passwordInput.fill('WrongPassword!');
    await this.clickSubmit();
  }
  async assertInvalidCredentialsError() {
    const errorText = await this.getErrorAlertText();
    await expect(errorText).toContain(
      'Either your Username/e-mail or your password is wrong. Please double-check.'
    );
  }

  async assertNavigatedForgotPasswordPage() {
    await expect(this.page).toHaveURL(this.forgotPasswordUrlRegex);
  }
  async verifyForgotPasswordLinkVisible(){
    
    await expect(this.locators.forgotPasswordLink).toBeVisible();
  }

  async navigateToForgetPasswordPage(){
    await this.locators.forgotPasswordLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyGoogleButton() {
    await expect(this.locators.googleButton).toBeVisible();
    await expect(this.locators.googleButton).toHaveText('Sign in with Google');
  }

  async verifySSOsignIn(){
    await expect(this.locators.ssoLink).toBeVisible();
  }
}
