import { AdminLayout } from '@/components/AdminLayout';
import { ApolloProviderWrapper } from '@/components/ApolloProvider';

const models = [
  { id: 'User', name: 'Users' },
  { id: 'Profile', name: 'Profiles' },
  { id: 'Post', name: 'Posts' },
  { id: 'Comment', name: 'Comments' },
  { id: 'Category', name: 'Categories' },
  { id: 'Tag', name: 'Tags' },
  { id: 'Product', name: 'Products' },
  { id: 'Brand', name: 'Brands' },
  { id: 'Order', name: 'Orders' },
  { id: 'OrderItem', name: 'Order Items' },
  { id: 'Review', name: 'Reviews' },
  { id: 'Message', name: 'Messages' },
  { id: 'Group', name: 'Groups' },
  { id: 'Project', name: 'Projects' },
  { id: 'Task', name: 'Tasks' },
  { id: 'Setting', name: 'Settings' },
  { id: 'AuditLog', name: 'Audit Logs' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProviderWrapper>
      <AdminLayout models={models}>{children}</AdminLayout>
    </ApolloProviderWrapper>
  );
}
