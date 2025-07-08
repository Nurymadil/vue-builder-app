# Vue Builder App

## Overview
Vue Builder App is a work in progress form-builder project using Vue 3 + Vite. The goal is to provide a drag-and-drop interface for composing forms and previewing a JSON schema that represents the resulting form structure.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

Visit the local address printed in the terminal to view the app.

## Planned Features

- **Drag-and-drop form creation.** Build forms by dragging form elements onto the canvas.
- **JSON schema preview.** Live preview of the generated JSON schema for the form definition.
- **Component library integration.** Build inputs, selects and other form controls from reusable components.

These features are under active development and may change.

## Development

Formatting and linting are enforced with Prettier and ESLint. Before committing changes run:

```bash
npm run lint
npm run format
```

This will automatically fix ESLint issues and apply the repository's Prettier configuration.

## Contributing

Contributions are welcome! To propose a change:

1. Fork the repository and create a new branch for your feature or fix.
2. Make sure `npm run lint` and `npm run format` pass.
3. Open a pull request explaining your changes.

Please keep pull requests focused and add tests if applicable.

## Testing

Run the unit test suite with:

```bash
npm install
npm test
```

The tests are powered by [Vitest](https://vitest.dev/).
