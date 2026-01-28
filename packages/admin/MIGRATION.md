# Migration Guide: @paljs/admin v8 to v9

This guide helps you migrate from @paljs/admin v8.x to v9.x.

## Breaking Changes

### 1. React Version Update

- **React 18 → React 19**: The package now supports both React 18 and 19
- Update your React dependencies if needed:
  ```json
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
  ```

### 2. Table Library Migration (react-table → @tanstack/react-table)

The table implementation has migrated from react-table v7 to @tanstack/react-table v8.

#### Column Definition Changes

**Before (react-table):**
```typescript
{
  Header: 'Name',
  accessor: 'name',
  disableFilters: true,
  disableSortBy: true,
  Cell: ({ value }) => <span>{value}</span>,
  minWidth: 100
}
```

**After (@tanstack/react-table):**
```typescript
{
  header: 'Name',
  accessorKey: 'name',
  enableColumnFilter: false,  // Note: inverted logic
  enableSorting: false,       // Note: inverted logic
  cell: ({ getValue }) => <span>{getValue()}</span>,
  minSize: 100
}
```

#### Custom Column Functions

If you're using custom columns via `tableColumns` prop:

**Before:**
```typescript
tableColumns={(field, model) => ({
  Header: field.name,
  Cell: ({ value }) => <CustomCell value={value} />
})}
```

**After:**
```typescript
tableColumns={(field, model) => ({
  header: field.name,
  cell: ({ getValue }) => <CustomCell value={getValue()} />
})}
```

### 3. Drag & Drop Migration (react-beautiful-dnd → @dnd-kit)

If you're using the Settings component with drag & drop functionality, the underlying library has changed. The API is handled internally, but if you have custom drag & drop implementations, you'll need to migrate to @dnd-kit.

### 4. Callback Signatures (Backward Compatible)

The callback signatures have been updated, but the old signatures are still supported for backward compatibility.

#### New Signatures (Recommended)
```typescript
onSaveCreate={(data) => {
  // data is the form data object
  console.log('Creating:', data);
}}

onSaveUpdate={(data) => {
  // data is the form data object
  console.log('Updating:', data);
}}
```

#### Legacy Signatures (Still Supported)
```typescript
onSaveCreate={({ model, setCreateModal, refetchTable }) => {
  // Old signature still works
  refetchTable();
  setCreateModal(false);
}}
```

### 5. Type System Changes

The package now uses stricter TypeScript types:

- `any` types have been replaced with specific types
- `value: any` → `value: FieldValue`
- `data: any` → `data: PrismaRecord`

If you get type errors, you may need to:
1. Add type assertions: `getValue() as string`
2. Update your custom components to use the new types
3. Import the new types: `import { PrismaRecord, FieldValue } from '@paljs/admin'`

### 6. Tailwind CSS Update

- Tailwind CSS updated from v3 to v4
- The build process now uses @tailwindcss/cli
- If you're importing the admin styles, the import remains the same:
  ```typescript
  import '@paljs/admin/dist/index.css'
  ```

## Step-by-Step Migration

1. **Update Dependencies**
   ```bash
   pnpm add @paljs/admin@^9.0.0
   ```

2. **Update Custom Columns** (if any)
   - Change property names as shown above
   - Update cell renderers to use `getValue()`
   - Invert boolean logic for filters and sorting

3. **Update Callbacks** (optional)
   - You can keep using the old signatures or migrate to the new ones
   - New signatures are simpler and more direct

4. **Fix Type Errors**
   - Add type imports where needed
   - Use type assertions for values from `getValue()`
   - Update custom components to use new types

5. **Test Your Application**
   - Test table filtering and sorting
   - Test CRUD operations
   - Test drag & drop in Settings (if used)

## Common Issues

### "pagesPath not exist" Error
This has been fixed. Make sure you're using the latest version.

### Type Errors with getValue()
```typescript
// Add type assertion
const value = getValue() as string;
```

### Custom Column Context
Context is now passed as a parameter instead of using React hooks:
```typescript
// Before
const MyCell = () => {
  const { push } = useContext(TableContext);
  // ...
}

// After - context is passed to the columns function
tableColumns={(field, model) => ({
  cell: ({ getValue, row }) => {
    // Use context from closure
  }
})}
```

## Need Help?

If you encounter issues not covered in this guide, please:
1. Check the [CHANGELOG](./CHANGELOG.md) for additional details
2. Open an issue on GitHub with a minimal reproduction