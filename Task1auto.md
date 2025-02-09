## Project Structure

### helpers/
Contains helper functions (e.g., handling privacy dialogs, generating unique emails).

### pages/
Contains the Page Object Model classes (e.g., SignInPage, SignUpPage) that encapsulate UI interactions and assertions.

### tests/
Contains test specification files that use the page objects to run automated end-to-end tests.

### Tasks/
Contains task 2 files from the given assignment

### package.json
Lists project dependencies and scripts to be used.


## Folder Structure
```
.
├── Tasks
│   └── Task2
├── e2e
│   ├── pages
│   └── tests
├── helpers
│   └── helpers.ts
├── node_modules
│   ├── @playwright
│   ├── @types
│   ├── fsevents
│   ├── playwright
│   ├── playwright-core
│   └── undici-types
├── package-lock.json
├── package.json
├── playwright-report
│   └── index.html
├── playwright.config.ts
└── test-results
```

## Installation
1. Clone the repository: ```git clone https://github.com/your-username/your-repo.git```

2. Install dependencies with ```npm install```

## Running the Tests

Running with Playwright's test runner: ```npx playwright test```
Or use the scripts in the ```package.json``` file for custem run settings