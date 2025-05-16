# 🎭 Playwright Automation Project

This repository contains end-to-end test scripts written using [Playwright](https://playwright.dev/) with **JavaScript**.

## 📁 Project Structure

Project_Doriane/
├── tests/ # Playwright test scripts
├── playwright.config.js # Playwright configuration
├── package.json # Project dependencies and scripts
├── .gitignore
├── README.md 


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ngll/Project_Doriane.git
cd Project_Doriane

**Install Dependencies**
npm install

**Install Playwright Browsers**
If the repo doesn’t already include the browsers, run:
npx playwright install

**Run Your First Test**
npx playwright test


**Or run a specific test:**
npx playwright test ./tests/multi-pages.spec.js --headed

**Open Playwright Test Report**
npx playwright show-report


**Run Tests in Specific Browsers**
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit




