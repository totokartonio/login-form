# Login Form SPA

A Single Page Application focused on UX and web accessibility.

## Links

- **Live demo:** [https://totokartonio.github.io/login-form/](https://totokartonio.github.io/login-form/)
- **Source code:** [https://github.com/totokartonio/login-form](https://github.com/totokartonio/login-form)

## Tech Stack

- **React 19** + TypeScript
- **Vite**
- **TanStack Router**
- **Bun**

**No UI component libraries** were used, as per assignment requirements.

### External Libraries

Two non-UI libraries were intentionally included:

- **[SVGR](https://react-svgr.com/)** — convenient SVG handling as React components
- **[TanStack Router](https://tanstack.com/router/latest)** — type-safe routing

## App Structure

The SPA has three pages:

1. **Login**: email/password sign-in with validation and error handling
2. **Profile**: simple authenticated user profile display
3. **Reset Password**: password recovery flow

## Architecture & Routing Decision

### Initial Approach

The app started with conditional rendering in `App.tsx`, managing page state with props. This quickly felt limiting, so routing made sense.

### Why TanStack Router?

I've considered three routing options:

- **Hash Routing**: simple, works on GH Pages, but legacy, less modern URLs (`/#/login`);
- **DIY History API**: clean URLs, but complex, has potential pitfalls, easy to get wrong;
- **External Router**: clean URLs, but external dependency and overengineering for a small project.

I decided to stick with TanStack Router for type safety, file-based routing, and maintainability.

### GitHub Pages Deployment Challenge

GitHub Pages is static hosting, so direct navigation to nested routes returns 404 without extra setup. Solved with [404s redirect trick](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing), a `404.html` file redirects all 404s to the main app, letting the router handle navigation.

Alternative considered: rewriting app to hash routing. Rejected in favor of non-hash URLs.

## UX & Accessibility

I used **[Evil Martians' HTML best practices for login forms](https://evilmartians.com/chronicles/html-best-practices-for-login-and-signup-forms)** by Andrey Sitnik as a guide.

Implemented:

- Correct input types: `type="email"`, `type="password"`
- `autocomplete` configured:
  - email: `autocomplete="username"`
  - password: `autocomplete="current-password"`
- Inputs are inside a `<form>` with a submit `<button>`
- `<label>` is connected to `<input>` via `htmlFor` / `id`
- Validation does **not** interrupt typing (validation on blur + submit)
- Invalid fields are exposed to assistive tech (`aria-invalid`) and linked to error text (`aria-describedby`)
- Visible `:focus-visible` styles for keyboard navigation
- Double submit prevention (`isLoading` guard + disabled state)
- Network latency and server errors are simulated and surfaced to the user

## Mocked Authentication

The app uses a mock auth layer to simulate real-world scenarios:

- **Network delay:** 800ms per request
- **Success flow:** returns mock token
- **Error handling:** realistic error messages

### Test Cases

No real credentials needed. The mock accepts any email/password, but special cases trigger errors:

#### Sign In

- Email: `error@test.com`: "Invalid email or password"
- Email: `inactive@test.com`: "Your account is inactive"
- Password: `wrong`: "Invalid email or password"

#### Reset Password

- Email: `error@test.com`: "Email not found"
- Email: `inactive@test.com`: "Your account is inactive"

For successful login, use any other combination (e.g., `user@example.com` / `password123`).

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- Node.js 20+

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Starts dev server at `http://localhost:5173`

### Production Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## License

Licensed under the MIT license.
