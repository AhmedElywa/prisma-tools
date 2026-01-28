'use client';

import { useQuery, gql } from '@apollo/client';
import { ApolloProviderWrapper } from '@/components/apollo-provider';

const TEST_QUERY = gql`
  query FindManyUser {
    findManyUser {
      id
      email
      name
    }
    findManyUserCount
  }
`;

function TestContent() {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">GraphQL Test Page</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default function TestGraphQLPage() {
  return (
    <ApolloProviderWrapper>
      <TestContent />
    </ApolloProviderWrapper>
  );
}