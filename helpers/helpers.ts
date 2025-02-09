import { Page } from '@playwright/test';

/**
 * Conditionally handles the privacy dialog if it appears.
 * If the dialog is not found within the timeout, the function simply returns.
 *
 * @param page - The Playwright Page instance.
 * @param timeout - The time (in ms) to wait for the dialog. Defaults to 2000ms.
 */
export async function handlePrivacyDialog(page: Page, timeout = 2000): Promise<void> {
  const privacyDialog = page.locator('div[data-testid="uc-default-wall"]');

  try {
    await privacyDialog.waitFor({ state: 'visible', timeout });
    const acceptButton = privacyDialog.locator('button[data-testid="uc-accept-all-button"]');
    await acceptButton.click();
    await privacyDialog.waitFor({ state: 'hidden', timeout });
    console.log('Privacy dialog was handled.');
  } catch (error) {
    // If the dialog never appears, continue without failing.
    console.log('Privacy dialog did not appear, continuing test.');
  }
}

export function generateUniqueEmail(domain: string = 'test.com'): string {
  const timestamp = Date.now();
  return `testuser_${timestamp}@${domain}`;
}