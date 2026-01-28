# Build System Migration Guide

## Overview

The @paljs/admin package has been modernized with a new build system that replaces the legacy Babel-based setup with tsup, a modern TypeScript bundler powered by esbuild.

## Key Changes

### 1. Build Tool: tsup
- **Old**: Babel with manual TypeScript compilation
- **New**: tsup with integrated TypeScript support
- **Benefits**: 
  - 5-10x faster build times
  - Zero-config setup
  - Built-in tree-shaking
  - Automatic format detection

### 2. Module Formats
- **ESM-first approach** with CommonJS fallback
- Proper `exports` field in package.json
- File extensions: `.js` for ESM, `.cjs` for CommonJS

### 3. TypeScript Configuration
- **Target**: ES2020 (dropped ES5 support)
- **JSX**: Using React 19's automatic runtime
- **Strict mode** enabled with additional checks

### 4. Tailwind CSS 4 Integration
- **CSS Variables** for theming
- **Prefix**: All classes prefixed with `paljs-` to avoid conflicts
- **Dark mode** support with CSS custom properties
- Ships raw Tailwind classes (consumers compile CSS)

## Build Commands

```bash
# Build the library
pnpm build

# Development mode with hot reload
pnpm dev

# Run tests
pnpm test

# Type checking
pnpm typecheck

# Clean build artifacts
pnpm clean
```

## Publishing

The package is published from the `dist` directory, which contains:
- Compiled JavaScript files (ESM and CJS)
- TypeScript declaration files
- Optimized CSS file
- Modified package.json with correct paths
- README and LICENSE files

## Consumer Integration

### 1. Installation
```bash
npm install @paljs/admin
```

### 2. CSS Setup
Consumers need to include the Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './node_modules/@paljs/admin/dist/**/*.{js,jsx,ts,tsx}',
    // ... your other content paths
  ],
  // ... rest of your config
}
```

### 3. Theme Customization
Override CSS variables to customize the theme:

```css
:root {
  --paljs-primary: #your-color;
  --paljs-primary-hover: #your-hover-color;
  /* ... other variables */
}
```

### 4. Using Components
```tsx
import { PrismaTable, cn } from '@paljs/admin'
import '@paljs/admin/style.css'

// Use cn utility for class names
<div className={cn('paljs-bg-primary', 'paljs-text-white')}>
  Content
</div>
```

## Development Workflow

1. **Make changes** in the `src` directory
2. **Run tests** with `pnpm test`
3. **Build** with `pnpm build`
4. **Test locally** with `pnpm link` or relative imports
5. **Publish** from the `dist` directory

## Migration Checklist

- [ ] Update import paths if needed
- [ ] Update Tailwind configuration
- [ ] Add CSS variable overrides for theming
- [ ] Update build scripts in consuming projects
- [ ] Test with both ESM and CJS imports