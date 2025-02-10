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
