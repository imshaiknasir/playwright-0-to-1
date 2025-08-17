# Playwright-0-to-1

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/imshaiknasir/playwright-0-to-1?quickstart=1)

## Overview

**playwright-0-to-1** is a starter template for Playwright automation. It lets you quickly set up browser testing and automation in a dev container, with ready-to-use scripts and examples.

**What does this project offer?**
- One-click Codespaces setup for instant development
- Pre-configured Playwright environment
- Example tests and scripts to get started fast
- Simplifies browser automation and testing workflows

---

## Dev Container Configuration (`.devcontainer/devcontainer.json`)

- Uses a Microsoft Ubuntu base image for the development environment.
- Installs Node.js dependencies and Playwright (with Chromium and required dependencies) automatically after container creation.
- Pre-installs useful VS Code extensions: GitHub Copilot, Playwright Test Runner, and Prettier.
- Ensures a ready-to-use setup for browser testing and automation.

### Sample Configuration

```json
{
  "name": "Playwright Dev Container",
  "image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18",
  "features": {
    "node": "lts",
    "playwright": {
      "version": "latest",
      "browser": "chromium",
      "installDependencies": true
    }
  },
  "extensions": [
    "github.copilot",
    "ms-playwright.playwright",
    "esbenp.prettier-vscode"
  ],
  "postCreateCommand": "npm install"
}
```

### Customization

You can customize the dev container configuration by modifying the `.devcontainer/devcontainer.json` file. For example, you can change the Node.js version, add more VS Code extensions, or run additional setup commands.

## Getting Started

To get started with Playwright in this dev container:

1. Launch the Codespace using the button above.
2. Open a terminal in VS Code.
3. Run the example tests with `npm test`.
4. Start building your own tests and automation scripts!

Just click the button above to launch a Codespace and start testing your web applications with Playwright!

Happy Testing!
