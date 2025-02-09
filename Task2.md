# Task 2
# Authentication and Account Flow Functionality Checklist

This checklist covers the tests for the Sign In, Sign Up, and Integrated Sign Up/Log In flows, including accessibility and keyboard navigation.

## Sign In Page Tests

### UI Display & Element Visibility
- [ ] Verify that the sign‑in page loads with the correct URL.
- [ ] Ensure that the username (or email) input is visible.
- [ ] Ensure that the password input is visible.
- [ ] Ensure that the standard sign‑in button is visible.

### Valid Sign In Flow
- [ ] Test that a user with valid credentials can successfully sign in.
- [ ] Verify that after signing in, the user is redirected to the dashboard (or another expected page) and that a welcome message or similar element is visible.

### Invalid Sign In Flow
- [ ] Test that signing in with invalid credentials fails.
- [ ] Verify that an error message ("Either your Username/e-mail or your password is wrong. Please double-check.") appears.

### Forgot Password Functionality
- [ ] Verify that the "Forgot password?" link is visible.
- [ ] Click the link and ensure that navigation occurs to the forgot password page.
- [ ] Verify that the base URL is correct (ignoring any query parameters).

### Alternative Sign In Options

#### Google Sign In
- [ ] Verify that the "Sign in with Google" option is visible (using stable attributes such as role and aria-labelledby).
- [ ] Click the button and assert that the URL changes to one indicating the Google authentication flow.

#### SSO Sign In
- [ ] Verify that the "Sign in with SSO" link is visible.
- [ ] Click the link and assert that the SSO flow is initiated (for example, by checking that the URL matches `/users/sso`).

### Accessibility & Focus
- [ ] Verify that upon page load, focus is set to the username/email input field.
- [ ] Confirm that all interactive elements (inputs, buttons, links) are accessible via keyboard navigation.

---

## Sign Up Page Tests

### UI Display & Element Visibility
- [ ] Verify that the sign‑up page loads with the expected URL.
- [ ] Ensure that the main container (e.g., `<main data-testid="signup">`) and sign‑up form are visible.

### Step 1: Credentials & Terms Acceptance
- [ ] Fill in the email field with a unique email using the unique email generator.
- [ ] Fill in the password field.
- [ ] Check the “Accept Terms of Service” checkbox.
- [ ] Click the “Next” or “Submit” button to proceed to step 2.

### Step 2: Personal Information
- [ ] Fill in the first name, last name, and phone number fields.
- [ ] Click the button to proceed to step 3.

### Step 3: Company Information & Country Selection

#### Option A – Dropdown Selection
- [ ] Fill in the organization name.
- [ ] Click the country input to open the dropdown.
- [ ] Select “Sweden” from the list.

#### Option B – Direct Input
- [ ] Fill in the organization name.
- [ ] Click the country input, type “Sweden”, and press Enter.

- [ ] Click the “Create an account” button to finish the sign‑up process.
- [ ] Verify that a confirmation message is visible.

### Form Validation & Error Messages
- [ ] Test scenarios with missing required fields or invalid data to verify that appropriate error messages are displayed.

### Accessibility & Focus
- [ ] Verify that focus is set on the first input field when the page loads.
- [ ] Confirm that all form fields and interactive elements are accessible via keyboard.
- [ ] Ensure that ARIA attributes are properly implemented on inputs, labels, and dynamic components.

---

## Integrated Sign Up & Log In Test

### End-to-End Account Creation & Authentication

#### Sign Up Flow
- [ ] Generate a unique email using the unique email generator.
- [ ] Complete the sign‑up flow (Steps 1, 2, and 3) with the generated email and with company information set to “Sweden.”
- [ ] Verify that a confirmation (or account creation success message) is shown.

#### Sign Out (If Necessary)
- [ ] If the sign‑up flow logs the user in automatically, sign out to prepare for a fresh sign‑in test.

#### Sign In Flow
- [ ] Navigate to the sign‑in page.
- [ ] Use the same unique email and password from the sign‑up flow.
- [ ] Submit the sign‑in form and verify that the user is successfully logged in (e.g., redirected to the dashboard and a welcome message is displayed).

### Accessibility & Focus in Integrated Flow
- [ ] After signing up and, if applicable, signing out, verify that when the sign‑in page loads, focus is correctly set on the username field.
- [ ] Confirm that all interactive elements in the integrated flow are accessible via keyboard.

---

# Task 2  
# Purpose Field Character Limit Functionality Checklist

This checklist covers the essential tests required to meet the acceptance criteria for the purpose field character limit functionality.

## 1. Character Counter Visibility (500+ Characters)
- [ ] Below 500 Characters: Verify that no character counter is displayed.
- [ ] At/Above 500 Characters: Verify that once 500 characters are reached, a character counter appears.
- [ ] At/Above 500 Characters: Confirm that the counter updates in real time as additional characters are entered.

## 2. Character Limit, Error State, and Color Changes (1000 Characters)
- [ ] At 1000 Characters: Verify that the field remains editable.
- [ ] At 1000 Characters: Ensure that the field does not display an error state.
- [ ] At 1000 Characters: Confirm that the CTA button remains active and is displayed in its enabled color.
- [ ] Exceeding 1000 Characters: Verify that when the character count exceeds 1000 (e.g., 1001 characters):
  - [ ] An error message is displayed.
  - [ ] The field transitions to an error state with appropriate visual indicators.
  - [ ] The CTA button becomes disabled and changes to a disabled color.
- [ ] Correcting the Input: Verify that once the text is reduced back to 1000 characters or fewer:
  - [ ] The error message is removed.
  - [ ] The field returns to its normal editing style.
  - [ ] The CTA button is re-enabled and its color reverts to the active state.

## 3. Suggestions Behavior (After 100 Characters)
- [ ] Below 100 Characters: Verify that suggestions are displayed as per the existing behavior.
- [ ] Above 100 Characters: Verify that once the text surpasses 100 characters, suggestions are no longer displayed.

---

*This document serves as a combined test checklist for the authentication flows and the purpose field character limit functionality.*
