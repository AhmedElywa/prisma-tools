import { readFileSync } from 'fs';
import { join } from 'path';
import { ApolloServer, type GraphQLRequest } from '@apollo/server';
import type { ExecuteOperationOptions, VariableValues } from '@apollo/server/dist/esm/externalTypes/graphql';
import { getDMMF } from '@prisma/internals';
import type { DocumentNode, TypedQueryDocumentNode } from 'graphql';

const getDMMFBySchemaPath = async (schemaPath: string) => {
  const datamodel = readFileSync(schemaPath, 'utf-8');
  return getDMMF({ datamodel });
};
import { parseResolveInfo } from 'graphql-parse-resolve-info';
import gql from 'graphql-tag';
import { PrismaSelect } from '../../src';

// SDL inputs for the test schema (User, Post, Comment)
const sdlInputs = gql`
  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: IntFilter
    firstName: StringFilter
    lastName: StringFilter
    email: StringFilter
    password: StringFilter
    posts: PostListRelationFilter
  }

  input UserWhereUniqueInput {
    id: Int
    email: String
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    id: IntFilter
    published: BoolFilter
    title: StringFilter
    author: UserWhereInput
    authorId: IntNullableFilter
    comments: CommentListRelationFilter
  }

  input PostWhereUniqueInput {
    id: Int
  }

  input PostOrderByWithRelationInput {
    id: SortOrder
    published: SortOrder
    title: SortOrder
    author: UserOrderByWithRelationInput
    authorId: SortOrder
    comments: CommentOrderByRelationAggregateInput
  }

  input CommentWhereInput {
    AND: [CommentWhereInput!]
    OR: [CommentWhereInput!]
    NOT: [CommentWhereInput!]
    id: IntFilter
    contain: StringFilter
    post: PostWhereInput
    postId: IntFilter
  }

  input CommentWhereUniqueInput {
    id: Int
  }

  input CommentOrderByWithRelationInput {
    id: SortOrder
    contain: SortOrder
    post: PostOrderByWithRelationInput
    postId: SortOrder
  }

  input CommentOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    firstName: SortOrder
    lastName: SortOrder
    email: SortOrder
    password: SortOrder
    posts: PostOrderByRelationAggregateInput
  }

  input PostOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input IntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input PostListRelationFilter {
    every: PostWhereInput
    some: PostWhereInput
    none: PostWhereInput
  }

  input CommentListRelationFilter {
    every: CommentWhereInput
    some: CommentWhereInput
    none: CommentWhereInput
  }

  enum SortOrder {
    asc
    desc
  }

  enum PostScalarFieldEnum {
    id
    published
    title
    authorId
  }

  enum CommentScalarFieldEnum {
    id
    contain
    postId
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserCountAggregateOutputType {
    id: Int!
    firstName: Int!
    lastName: Int!
    email: Int!
    password: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType {
    id: Float
  }

  type UserSumAggregateOutputType {
    id: Int
  }

  type UserMinAggregateOutputType {
    id: Int
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type UserMaxAggregateOutputType {
    id: Int
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type UserCountOutputType {
    posts: Int!
  }

  type PostCountOutputType {
    comments: Int!
  }
`;

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    fullName: String
    email: String!
    password: String!
    posts(
      where: PostWhereInput
      orderBy: PostOrderByWithRelationInput
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: PostScalarFieldEnum
    ): [Post!]!
    _count: UserCountOutputType!
  }

  type Post {
    id: Int!
    published: Boolean!
    title: String!
    author: User
    authorId: Int
    comments(
      where: CommentWhereInput
      orderBy: CommentOrderByWithRelationInput
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: CommentScalarFieldEnum
    ): [Comment!]!
    _count: PostCountOutputType!
  }

  type Comment {
    id: Int!
    contain: String!
    post: Post!
    postId: Int!
  }

  type Account {
    id: Int!
    firstName: String!
    lastName: String!
    newFieldNotInSchema: String
  }

  type Query {
    user(where: UserWhereUniqueInput): User
    account: Account
    aggregateUser: AggregateUser
    getNestedValue(value: String!, type: String!): User
    userWithDefaultValues: User
    userWithExcludeValues: User
  }
`;

const resolvers = {
  Query: {
    user: (_, __, ctx, info) => {
      const parsedResolveInfoFragment = parseResolveInfo(info);
      const select = new PrismaSelect(info, { dmmf: [ctx.dmmf] }).value;
      ctx.log({ parsedResolveInfoFragment, select });
      return null;
    },
    getNestedValue: (_, { value, type }, ctx, info) => {
      const select = new PrismaSelect(info, { dmmf: [ctx.dmmf] }).valueOf(value, type);
      ctx.log({ select });
      return null;
    },
    account: (_, __, ctx, info) => {
      const select = new PrismaSelect(info, { dmmf: [ctx.dmmf] }).value;
      ctx.log({ select });
      return null;
    },
    aggregateUser: (_, __, ctx, info) => {
      const select = new PrismaSelect(info, { dmmf: [ctx.dmmf] }).value;
      ctx.log({ select });
      return null;
    },
    userWithDefaultValues: (_, __, ctx, info) => {
      const select = new PrismaSelect<'User', { User: { firstName: string; lastName: string } }>(info, {
        dmmf: [ctx.dmmf],
        defaultFields: { User: { firstName: true, lastName: true } },
      }).value;
      ctx.log({ select });
      return null;
    },
    userWithExcludeValues: (_, __, ctx, info) => {
      const select = new PrismaSelect<'User', { User: { email: string; password: string } }>(info, {
        dmmf: [ctx.dmmf],
        excludeFields: { User: ['email', 'password'] },
      }).value;
      ctx.log({ select });
      return null;
    },
  },
};

export const executeOperation = async <
  TData = Record<string, unknown>,
  TVariables extends VariableValues = VariableValues,
>(
  request: Omit<GraphQLRequest<TVariables>, 'query'> & {
    query?: string | DocumentNode | TypedQueryDocumentNode<TData, TVariables>;
  },
  options?: ExecuteOperationOptions<any>,
) => {
  const schemaPath = join(__dirname, '../schemas/prismaSelect.prisma');
  const dmmf = await getDMMFBySchemaPath(schemaPath);
  const server = new ApolloServer({ typeDefs: [typeDefs, sdlInputs], resolvers });
  let log: { parsedResolveInfoFragment: any; select: any } = { parsedResolveInfoFragment: undefined, select: {} };
  const result = await server.executeOperation(request, {
    contextValue: {
      dmmf,
      log: (o) => {
        log = o;
      },
    },
    ...options,
  });
  return { result, log };
};
