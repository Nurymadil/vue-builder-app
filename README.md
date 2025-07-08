# Vue Builder App

## Overview
Vue Builder App is a work in progress form-builder project using Vue 3 + Vite. The goal is to provide a drag-and-drop interface for composing forms and previewing a JSON schema that represents the resulting form structure.

## Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```
   PrimeVue and PrimeIcons are already listed as dependencies, so no additional installation steps are required.
2. Start the development server:
   ```bash
   pnpm dev
   ```

Visit the local address printed in the terminal to view the app.
## Tailwind CSS
Tailwind is set up using PostCSS. Customize `tailwind.config.js` or add styles in `src/assets/main.css`.


## Planned Features

- **Drag-and-drop form creation.** Build forms by dragging form elements onto the canvas.
- **JSON schema preview.** Live preview of the generated JSON schema for the form definition.
- **Component library integration.** Build inputs, selects and other form controls from reusable components.

These features are under active development and may change.

## PrimeVue Integration

This project uses [PrimeVue](https://primevue.org/) for UI components. PrimeVue
and PrimeIcons are installed as dependencies. Global configuration is applied in
`src/main.ts`.

Example components are imported in the builder modules:

```vue
<script setup lang="ts">
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
</script>

<template>
  <Button label="Open" @click="visible = true" />
  <Dialog v-model:visible="visible" header="PrimeVue Dialog">Content</Dialog>
</template>
```

## Development

Formatting and linting are enforced with Prettier and ESLint. Before committing changes run:

```bash
pnpm lint
pnpm format
```

This will automatically fix ESLint issues and apply the repository's Prettier configuration.

## Contributing

Contributions are welcome! To propose a change:

1. Fork the repository and create a new branch for your feature or fix.
2. Make sure `pnpm lint` and `pnpm format` pass.
3. Open a pull request explaining your changes.

Please keep pull requests focused and add tests if applicable.

## Testing

Run the unit test suite with:

```bash
pnpm install
pnpm test
```

The tests are powered by [Vitest](https://vitest.dev/).
