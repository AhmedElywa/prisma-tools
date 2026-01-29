export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
      <p className="text-gray-600">
        Select a model from the sidebar to view and manage data.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Users</h3>
          <p className="text-gray-500 text-sm mt-1">Manage user accounts</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Posts</h3>
          <p className="text-gray-500 text-sm mt-1">Manage blog posts</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Products</h3>
          <p className="text-gray-500 text-sm mt-1">Manage products</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Orders</h3>
          <p className="text-gray-500 text-sm mt-1">Manage customer orders</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Categories</h3>
          <p className="text-gray-500 text-sm mt-1">Manage content categories</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Settings</h3>
          <p className="text-gray-500 text-sm mt-1">System configuration</p>
        </div>
      </div>
    </div>
  );
}
