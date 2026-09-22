### Playwright Basics – POM Automation Framework

This project is a **Playwright test automation framework built with TypeScript**, designed to demonstrate the fundamentals of UI test automation using the **Page Object Model (POM)** design pattern.

The framework focuses on creating maintainable, reusable, and scalable automated tests by separating **test logic, page interactions, test data, and configuration**.

### Key Features

* **Playwright with TypeScript** for browser automation
* **Page Object Model (POM)** for reusable page actions and locators
* **Custom Fixtures** for managing reusable page objects and test setup
* **Data-driven testing** using external test data
* **Reusable locators and methods** to reduce code duplication
* **Assertions** to validate expected application behaviour
* **Multiple browser support** including Chromium, Firefox, and WebKit
* **Playwright HTML reports** for analysing test execution results
* Structured project organisation following automation best practices

### Project Structure

```text
playwright-project/
│
├── fixtures/
│   └── CustomFixtures.ts
│
├── Pages/
│   ├── HomePage.ts
│   └── LoginPage.ts
│
├── testdata/
│   └── TestData.ts
│
├── tests/
│   ├── login.spec.ts
│   └── Profile.spec.ts
│
├── utils/
│   └── BasePage.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

### Objective

The objective of this project is to build a solid foundation in **Playwright automation and framework design**, while applying industry-relevant practices such as POM, reusable components, custom fixtures, data-driven testing, assertions, and structured test organisation.

**Tech Stack:**
`Playwright | TypeScript | Node.js | POM | Custom Fixtures | Git/GitHub`
