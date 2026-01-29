'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Model {
  id: string;
  name: string;
}

interface AdminLayoutProps {
  children: React.ReactNode;
  models: Model[];
}

export function AdminLayout({ children, models }: AdminLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
        <div className="p-5 border-b border-gray-200">
          <Link href="/admin" className="text-lg font-semibold text-gray-900">
            Admin Panel
          </Link>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="mb-4">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span className="mr-2">←</span> Back to Home
            </Link>
          </div>
          <Link
            href="/admin/settings"
            className={`flex items-center px-3 py-2 mb-3 text-sm rounded-md transition-colors ${
              pathname === '/admin/settings'
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Table Settings
          </Link>
          <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 px-3 tracking-wider">Models</h3>
          <ul className="space-y-0.5">
            {models.map((model) => {
              const href = `/admin/${model.id.toLowerCase()}`;
              const isActive = pathname === href;
              return (
                <li key={model.id}>
                  <Link
                    href={href}
                    className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {model.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
