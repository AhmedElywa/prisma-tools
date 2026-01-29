# PalJS Admin Next.js 15 Example

This example demonstrates how to use `@paljs/admin` with Next.js 15, TypeScript, Tailwind CSS 4, GraphQL Yoga, and Nexus.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** with @theme directive
- **shadcn/ui** for modern UI components
- **GraphQL Yoga** for GraphQL server
- **Nexus** for schema generation
- **@paljs/admin** for admin UI components
- **@paljs/generator** for code generation (via `prisma generate`)
- **Prisma** for database ORM
- **Dark Mode** support with next-themes

## Project Structure

```
examples/admin-nextjs15/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin panel pages
│   │   │   ├── [model]/       # Dynamic model pages
│   │   │   └── settings/      # Settings page
│   │   └── api/
│   │       └── graphql/       # GraphQL API endpoint
│   ├── components/            # React components
│   ├── graphql/               # GraphQL configuration
│   │   └── generated/         # Generated code from PalJS
│   └── prisma/                # Prisma schema and migrations
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── pal.config.js              # PalJS configuration
```

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or update the datasource in `prisma/schema.prisma`)
- pnpm package manager

## UI Components and Styling

This example uses modern UI libraries for a polished admin interface:

- **shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS
- **Lucide Icons**: Beautiful and consistent icon library
- **Tailwind CSS 4**: Next-generation utility-first CSS with @theme directive
- **Dark Mode**: Automatic dark mode support with system preference detection

### Available shadcn Components

All common UI components are pre-installed:
- Button, Card, Badge, Separator, Skeleton
- Navigation Menu, Sheet (mobile drawer), Dropdown Menu
- Form components: Input, Label, Select, Switch
- Feedback: Alert, Toast, Dialog
- Data display: Table, Tabs, Avatar
- Navigation: Breadcrumb

## Setup Instructions

1. **Install dependencies**

   From the root of the monorepo:
   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   Copy the example env file and update with your database credentials:
   ```bash
   cd examples/admin-nextjs15
   cp .env.example .env
   # Edit .env with your database URL
   ```

3. **Set up the database**

   ```bash
   # Push the schema to your database
   pnpm db:push

   # Seed the database with sample data
   pnpm db:seed
   ```

4. **Generate GraphQL code**

   ```bash
   # Generate Prisma Client and PalJS code
   pnpm generate
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open the application**

   - Main page: http://localhost:3000
   - Admin panel: http://localhost:3000/admin
   - GraphQL Playground: http://localhost:3000/api/graphql

## How It Works

### 1. Code Generation

The `pal generate` command (aliased as `pnpm generate`) generates:
- Nexus type definitions for all Prisma models
- CRUD queries and mutations
- Input types for filtering, sorting, and pagination
- Admin-specific queries with relation handling

### 2. Admin Components

The admin panel uses `@paljs/admin` components:
- **PrismaTable**: Displays data in a table with sorting, filtering, and pagination
- **Form Components**: Auto-generated forms based on Prisma schema
- **Settings**: Configure field visibility and editability

### 3. GraphQL API

GraphQL Yoga serves the API at `/api/graphql` with:
- Full CRUD operations for all models
- Relation handling
- Filtering and sorting capabilities
- Pagination support

## Development Workflow

1. **Modify Prisma Schema**
   
   Edit `prisma/schema.prisma` to add or modify models

2. **Update Database**
   
   ```bash
   pnpm db:push
   ```

3. **Regenerate Code**
   
   ```bash
   pnpm generate
   ```

4. **Restart Dev Server**
   
   The changes will be reflected in the admin panel automatically

## Customization

### PalJS Configuration

Edit `pal.config.js` to:
- Exclude models from generation
- Exclude specific fields (like passwords)
- Exclude specific queries or mutations
- Configure admin settings

### Styling

The project uses Tailwind CSS 4. Modify `tailwind.config.ts` to customize the design system.

### Admin Layout

Customize the admin layout by editing:
- `src/components/AdminLayout.tsx` - Sidebar and navigation
- `src/app/admin/layout.tsx` - Admin area layout wrapper

## Testing the Admin Panel

1. **View Models**: Click on any model in the sidebar to view its data
2. **Create Records**: Use the "Create New" button on model pages
3. **Edit Records**: Click edit on any record
4. **Delete Records**: Click delete with confirmation
5. **Configure Settings**: Visit the Settings page to configure field visibility

## Common Issues

### "Cannot find module" errors

Run `pnpm install` from the monorepo root to ensure all workspace dependencies are linked.

### GraphQL schema not found

Run `pnpm generate` to generate the GraphQL schema and types.

### Database connection errors

Ensure your DATABASE_URL in `.env` is correct and the database is running.

## Next Steps

- Add authentication and authorization
- Implement custom business logic in resolvers
- Add custom admin pages for specific workflows
- Configure production deployment
- Add E2E tests with Playwright or Cypress

## Resources

- [PalJS Documentation](https://paljs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [GraphQL Yoga Documentation](https://the-guild.dev/graphql/yoga-server)
- [Nexus Documentation](https://nexusjs.org)