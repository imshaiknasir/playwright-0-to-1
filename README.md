# Playwright-0-to-1

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/imshaiknasir/playwright-0-to-1?quickstart=1)

## Overview

**playwright-0-to-1** is a starter template for Playwright automation. It lets you quickly set up browser testing and automation in a dev container, with ready-to-use scripts and examples.

**What does this project offer?**
- One-click Codespaces setup for instant development.
- A pre-configured, flexible Playwright environment.
- Example tests and scripts to get started fast.
- A simplified workflow for browser automation and testing.

---

## Dev Container Configuration (`.devcontainer/devcontainer.json`)

The development environment is defined by the `.devcontainer/devcontainer.json` file, which ensures a consistent and ready-to-code setup for anyone who opens this project in GitHub Codespaces.

- **Base Image**: Uses a minimal and flexible `mcr.microsoft.com/devcontainers/base:ubuntu` image.
- **Node.js Feature**: Installs the latest Long-Term Support (LTS) version of Node.js using a dev container "feature", making `npm` and `npx` available.
- **Automated Setup**: The `postCreateCommand` automatically runs `npm install` to fetch project dependencies (like Playwright) defined in `package.json`, and then runs `npx playwright install --with-deps` to download the necessary browser binaries and dependencies.
- **VS Code Extensions**: Pre-installs useful extensions for a better developer experience, including GitHub Copilot, the official Playwright extension, and Prettier.

### Current Configuration

```json
{
  "name": "Playwright Dev Container",
  "image": "mcr.microsoft.com/devcontainers/base:ubuntu",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "lts"
    }
  },
  "postCreateCommand": "npm install && npx playwright install --with-deps",
  "customizations": {
    "vscode": {
      "extensions": [
        "GitHub.copilot",
        "ms-playwright.playwright",
        "esbenp.prettier-vscode"
      ]
    }
  }
}```

### Customization

You can customize the dev container by modifying the `.devcontainer/devcontainer.json` file. For example, you can change the Node.js version, add more VS Code extensions, or run additional setup commands in the `postCreateCommand`.

## Getting Started

To get started with Playwright in this dev container:

1.  Click the "Open in GitHub Codespaces" badge at the top of this README.
2.  Wait for the Codespace to build. The `postCreateCommand` will handle the installation for you.
3.  Once VS Code loads, open a new terminal (`Ctrl+` \` ``).
4.  Run the example tests with `npm test`.
5.  Start building your own tests and automation scripts!

Happy Testing!