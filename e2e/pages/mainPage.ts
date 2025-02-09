import { Page, expect, Locator } from '@playwright/test';
import { handlePrivacyDialog, generateUniqueEmail } from '../../helpers/helpers';

export class BasePage {

  constructor(public readonly page: Page) {}

  get locators() {
    return {
      signUpLink: this.page.locator('a[href="/users/sign_up"]'),
    };
  }

}
