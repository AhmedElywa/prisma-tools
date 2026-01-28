import { AdminLayout } from '@/components/AdminLayout'
import { ApolloProviderWrapper } from '@/components/apollo-provider'

const models = [
  { id: 'User', name: 'Users' },
  { id: 'Post', name: 'Posts' },
  { id: 'Category', name: 'Categories' },
  { id: 'Tag', name: 'Tags' },
  { id: 'Profile', name: 'Profiles' },
  { id: 'Product', name: 'Products' },
];

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProviderWrapper>
      <AdminLayout models={models}>{children}</AdminLayout>
    </ApolloProviderWrapper>
  )
}
