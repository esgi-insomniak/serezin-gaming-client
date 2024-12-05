# Git Hooks with Husky, Commitlint, and Prettier

This project uses **Husky**, **Commitlint**, and **Prettier** to enforce code and commit message standards, ensuring a clean and maintainable codebase.

## Why Use This Setup?

### **Why Husky?**

Husky makes it easy to manage Git hooks directly in your project. By automating tasks like linting, formatting, and commit message validation, it ensures consistency and improves developer productivity.

### **Why Commitlint?**

Commitlint enforces the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commit messages. This provides:

- **Readable Commit History**: Clear descriptions of what changed and why.
- **Automation-Friendly**: Enables tools for changelog generation and semantic versioning.
- **Improved Collaboration**: Helps developers, testers, and project managers stay aligned.

### **Why Prettier in Pre-Commit?**

Prettier automatically formats your code to maintain a consistent style across the project. Running it during the pre-commit stage ensures that:

- Only formatted code gets committed.
- Developers spend less time on style debates and focus on functionality.
- The repository maintains a clean, uniform code style.

## Installation

### 1. Install Husky

Install Husky to manage Git hooks:

```bash
npm i --save-dev husky
npx husky init
```

### 2. Install Commitlint

Install Commitlint to validate commit messages:

```bash
npm i --save-dev @commitlint/{config-conventional,cli}
```

### 3. Install Commitizen

Install Commitizen to create standardized commit messages interactively:

```bash
npm i --save-dev cz-conventional-changelog commitizen
```

### 4. Configure Commitizen

Add the following configuration to your `package.json`:

```json
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

### 5. Set Up Husky Hooks

#### Add Commitlint Hook

Set up a commit message hook to validate Conventional Commits:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

#### Add Pre-commit Hook

Set up a pre-commit hook to format code using Prettier:

```bash
npx husky add .husky/pre-commit 'prettier $(git diff --cached --name-only --diff-filter=ACMR | sed "s| |\\\\ |g") --write --ignore-unknown && git update-index --again'
```

### Pre-commit Formatting

The pre-commit hook formats staged files using Prettier, ensuring that code meets style guidelines before being committed. It operates on all staged files matching the following criteria:

- `Changed files only (git diff --cached)`.
- `Files included in Add (A), Copy (C), Modify (M), and Rename (R) operations`.

### Commit Message Validation

Commit messages must adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. Husky runs Commitlint to validate commit messages automatically.

### Example Commit Message

```
feat(module): add support for new feature

Implemented a new feature that improves the module functionality. This change also updates dependencies.
```

### Commit Types Allowed

- `feat: Introduces a new feature`.
- `fix: Fixes a bug`.
- `chore: Maintains project settings or dependencies`.
- `docs: Updates documentation`.
- `style: Refactors code style without affecting functionality`.
- `refactor: Improves code without changing behavior`.
- `test: Adds or updates tests`.

By using this setup, you ensure clean commits, consistent code style, and improved collaboration across your project. Tools like Husky, Commitlint, and Prettier make maintaining a high-quality codebase effortless.
