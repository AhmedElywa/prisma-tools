'use client';

import PrismaTable from '@/components/PrismaTable';
import { use } from 'react';

// Map URL model names to actual model names
const modelNameMap: Record<string, string> = {
  user: 'User',
  profile: 'Profile',
  userfollow: 'UserFollow',
  post: 'Post',
  comment: 'Comment',
  category: 'Category',
  tag: 'Tag',
  product: 'Product',
  brand: 'Brand',
  productcategory: 'ProductCategory',
  order: 'Order',
  orderitem: 'OrderItem',
  review: 'Review',
  message: 'Message',
  group: 'Group',
  project: 'Project',
  task: 'Task',
  setting: 'Setting',
  auditlog: 'AuditLog',
};

interface Props {
  params: Promise<{ model: string }>;
}

export default function ModelPage({ params }: Props) {
  const resolvedParams = use(params);
  const modelName = modelNameMap[resolvedParams.model.toLowerCase()] || resolvedParams.model;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{modelName}</h1>
      <PrismaTable model={modelName} />
    </div>
  );
}
