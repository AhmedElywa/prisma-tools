import type { NextConfig } from 'next';
import path from 'path';

const configDir = import.meta.dirname ?? path.dirname(new URL(import.meta.url).pathname);

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Transpile workspace packages
  transpilePackages: ['@paljs/admin', '@paljs/nexus', '@paljs/plugins'],

  // Disable TypeScript errors during builds (we run it separately)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Force single graphql instance to avoid "Cannot use X from another module or realm" errors
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      graphql$: path.resolve(configDir, 'node_modules/graphql/index.js'),
    };
    return config;
  },

  // Same fix for Turbopack
  turbopack: {
    resolveAlias: {
      graphql: './node_modules/graphql',
    },
  },
};

export default nextConfig;
