# Task 3

## 1. Field Presence
- [ ] Verify that an input field for the **Old Password** is present.
- [ ] Verify that an input field for the **New Password** is present.

## 2. New Password Requirements
- **Minimum Length:**
  - [ ] Verify that the new password must be at least 8 characters long.
- **Numerical Character Requirement:**
  - [ ] Verify that the new password contains at least one numerical character.
- **Letter Requirement:**
  - [ ] Verify that the new password contains at least one letter.

## 3. CTA (Call to Action) Button Behavior
- [ ] Verify that the CTA button is **disabled** until:
  - The **Old Password** field is filled.
  - The **New Password** field meets all the specified criteria.
- [ ] Verify that once both conditions are met, the CTA button becomes **active**.

## 4. Validation Process Upon CTA Click
- **Old Password Validation:**
  - [ ] Verify that when the CTA is clicked, the old password is validated.
- **Error Handling:**
  - [ ] If the old password is incorrect:
    - [ ] Confirm that an error message is displayed as per the design.
- **Success Flow:**
  - [ ] If the password change is successful:
    - [ ] Confirm that a success message is shown.
    - [ ] Verify that the user is navigated to the settings page.