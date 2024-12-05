# Issues

This project uses GitHub Issues to track bugs, feature requests, and improvements. The following guidelines help ensure that issues are clearly documented and actionable.

## Creating an Issue

When creating an issue, make sure to include the following details:

### 1. **Bug Report**

Use the following template when reporting a bug:

- **Title**: Describe the problem succinctly (e.g., "Fix broken button on homepage").
- **Description**: Provide a clear and detailed explanation of the issue.
- **Steps to Reproduce**: Include the steps necessary to replicate the bug.
- **Expected Behavior**: What you expected to happen.
- **Actual Behavior**: What actually happens.
- **Environment**:
  - Browser/Node version
  - Operating system
  - Relevant configurations or setup
- **Screenshots** (if applicable): Add visuals to clarify the issue.

#### Example:

```markdown
**Title**: Dropdown not working in Safari

**Description**: The dropdown menu fails to open on Safari 16.0.

**Steps to Reproduce**:

1. Open the homepage in Safari 16.0.
2. Click on the dropdown menu.

**Expected Behavior**: The dropdown should display a list of options.

**Actual Behavior**: Nothing happens when the dropdown is clicked.

**Environment**:

- Browser: Safari 16.0
- OS: macOS Ventura 13.0

**Screenshots**:
[Add a screenshot here]
```

## 2. Feature Request

Use the following template when suggesting a new feature:

- `Title: Start with "Feature Request: ..." (e.g., "Feature Request: Add dark mode support").`
- `Description: Provide a detailed explanation of the requested feature.`
- `Use Case: Explain why this feature is necessary or beneficial.`
- `Proposed Solution: (Optional) Suggest how the feature could be implemented.`
- `Additional Context: Include links, screenshots, or other relevant materials.`

```markdown
**Title**: Feature Request: Add dark mode support

**Description**: Adding dark mode support to improve the user experience for users in low-light environments.

**Use Case**: Users often work at night or in dark environments. A dark mode would reduce eye strain and make the interface more comfortable to use.

**Proposed Solution**: Implement a dark theme with a toggle button in the header.

**Additional Context**:

- [Reference Design](link-to-design)
```

## Issue Labels

To keep issues organized, apply relevant labels:

- `Type: bug, feature, enhancement, refactor`
- `Priority: low, medium, high`
- `Status: open, in progress, review, done`

By following these guidelines, we ensure that issues are clear, actionable, and easy to resolve.
