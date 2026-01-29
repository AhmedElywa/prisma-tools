import Link from 'next/link';

const models = [
  { name: 'User', description: 'User accounts and authentication', icon: '👤' },
  { name: 'Profile', description: 'User profile information', icon: '📋' },
  { name: 'Post', description: 'Blog posts and articles', icon: '📝' },
  { name: 'Comment', description: 'Post comments', icon: '💬' },
  { name: 'Category', description: 'Content categories', icon: '📂' },
  { name: 'Tag', description: 'Content tags', icon: '🏷️' },
  { name: 'Product', description: 'E-commerce products', icon: '📦' },
  { name: 'Brand', description: 'Product brands', icon: '🏢' },
  { name: 'Order', description: 'Customer orders', icon: '🛒' },
  { name: 'Review', description: 'Product reviews', icon: '⭐' },
  { name: 'Message', description: 'User messages', icon: '✉️' },
  { name: 'Group', description: 'User groups', icon: '👥' },
  { name: 'Project', description: 'Projects', icon: '📊' },
  { name: 'Task', description: 'Project tasks', icon: '✅' },
  { name: 'Setting', description: 'System settings', icon: '⚙️' },
  { name: 'AuditLog', description: 'Audit logs', icon: '📜' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            PalJS Admin Test
          </h1>
          <p className="mt-2 text-gray-600">
            Full-stack admin panel with Playwright E2E tests
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="flex gap-4">
            <a
              href="/api/graphql"
              target="_blank"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              GraphQL Playground
            </a>
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Models</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {models.map((model) => (
            <Link
              key={model.name}
              href={`/admin/${model.name.toLowerCase()}`}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-blue-400 transition-all"
            >
              <div className="flex-shrink-0 text-2xl">{model.icon}</div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{model.name}</p>
                <p className="truncate text-sm text-gray-500">{model.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Test Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{models.length}</div>
              <div className="text-sm text-gray-600">Models</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Enums</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <div className="text-sm text-gray-600">Relation Types</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <div className="text-sm text-gray-600">CRUD Operations</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
