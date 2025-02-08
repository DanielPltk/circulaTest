// import { Page, expect } from '@playwright/test';

// /** Handles the privacy dialog if it appears.
//  * @param page - The Playwright Page instance.
//  * @param timeout - How long to wait for the dialog to appear (in ms). Defaults to 5000ms.
//  */
// export async function handlePrivacyDialog(page: Page, timeout = 5000): Promise<void> {
//   // The dialog container is identified by data-testid="uc-default-wall"
//   const privacyDialog = page.locator('div[data-testid="uc-default-wall"]');

//   // Check if the privacy dialog is visible within the specified timeout.
//   if (await privacyDialog.isVisible({ timeout }).catch(() => false)) {
//     // Locate the "Accept All" button within the dialog.
//     const acceptButton = privacyDialog.locator('button[data-testid="uc-accept-all-button"]');
//     await acceptButton.click();
//     // Wait for the dialog to disappear to ensure further actions are not blocked.
//     await expect(privacyDialog).toBeHidden({ timeout });
//   }
// }

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
    // Wait briefly for the dialog to appear.
    await privacyDialog.waitFor({ state: 'visible', timeout });
    // If the dialog appears, click the "Accept All" button.
    const acceptButton = privacyDialog.locator('button[data-testid="uc-accept-all-button"]');
    await acceptButton.click();
    // Wait for the dialog to be hidden.
    await privacyDialog.waitFor({ state: 'hidden', timeout });
    console.log('Privacy dialog was handled.');
  } catch (error) {
    // If the dialog never appears, continue without failing.
    console.log('Privacy dialog did not appear, continuing test.');
  }
}
