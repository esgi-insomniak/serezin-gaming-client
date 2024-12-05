# Best Practices

This project follows a set of best practices to ensure clean, maintainable, and scalable code. These rules are designed to enforce consistency and improve developer experience.

## 1. Separate Logic from UI

- **Guideline**: Keep business logic separate from the UI layer.
- **Implementation**: Use custom hooks (`useSomething`) to encapsulate logic and pass only the necessary data to components.

## 2. Avoid Hardcoded Strings

- **Guideline**: No hardcoded strings should be used in the codebase.
- **Implementation**: Define all strings as constants or enums in uppercase:
  ```ts
  const API_ENDPOINT = 'https://api.example.com';
  enum Status {
    SUCCESS = 'success',
    ERROR = 'error'
  }
  ```

## 3. Follow Consistent Naming Conventions

- **Camel Case**: Use camel case for variables, functions, and methods.

```ts
const userName = 'John Doe';
function fetchUserData() {}
```

- **Snake Case**: Use snake case for file and folder names.

```
user-profile.ts
user-data-manager.ts
```

## 4. Use Index Files for Folder Exports

- **Guideline**: Always include an `index.ts` file in folders to re-export contents.
- **Example**:

```
components/
  index.ts
  button.tsx
  input.tsx

```

```ts
// components/index.ts
export * from './button';
export * from './input';
```

## 5. Limit File Length

- **Guideline**: Files should not exceed 200 lines.
- **Rationale**: Keeping files small improves readability and maintainability.

## 6. Avoid Overusing `useEffect`

- **`No React.useEffect`**: Use `useEffect` directly instead of `React.useEffect`.
- **Reduce Dependency** on `useEffect`:

  - Avoid unnecessary renders caused by overly relying on `useEffect`.
  - Refactor logic into hooks or **memoized** values if possible.

  Example:

```tsx
// Avoid this
useEffect(() => {
  fetchData();
}, [dependency]);

// Prefer this
const { data } = useDataFetcher();
```

## 7. Avoid the **`any`** Type

- **`Guideline`**: Do not use the `any` type in **TypeScript**. Always use specific or generic types.
- **Example**:

```ts
// Avoid
const data: any = fetchSomeData();

// Use explicit types
interface User {
  id: number;
  name: string;
}
const data: User = fetchUserData();
```

By adhering to these best practices, the codebase remains consistent, easy to navigate, and scalable for future development.
