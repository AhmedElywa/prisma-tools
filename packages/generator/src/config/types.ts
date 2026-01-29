import type { DMMF } from '@prisma/generator-helper';

/**
 * Admin generation configuration
 */
export interface AdminConfig {
  /** Enable admin generation */
  enabled: boolean;
  /** Output directory for admin files (relative to generator output) */
  output?: string;
  /** Next.js router type */
  routerType?: 'app' | 'pages';
  /** Models to include (undefined = all models) */
  models?: string[];
  /** Custom page template */
  pageContent?: string;
}

/**
 * GraphQL generation configuration
 */
export interface GraphQLConfig {
  /** Enable Nexus server-side GraphQL generation */
  nexus?: boolean;
  /** Output directory for Nexus files (relative to generator output) */
  nexusOutput?: string;
  /** Enable client-side .graphql files generation */
  client?: boolean;
  /** Output directory for client .graphql files (relative to generator output) */
  clientOutput?: string;
}

/**
 * Per-model configuration
 */
export interface ModelConfig {
  /** Exclude this model entirely from generation */
  exclude?: boolean;
  /** Fields to exclude for this model */
  excludeFields?: string[];
  /** Queries/mutations to exclude for this model */
  excludeQueriesAndMutations?: string[];
  /** Disable all queries for this model */
  disableQueries?: boolean;
  /** Disable all mutations for this model */
  disableMutations?: boolean;
  /** Enable queries (can be used with mutations: false for read-only) */
  queries?: boolean;
  /** Enable mutations (can be used with queries: true for write-only) */
  mutations?: boolean;
  /** Admin-specific config for this model */
  admin?: {
    /** Hide from admin UI */
    hide?: boolean;
    /** Field to use as display name */
    displayField?: string;
    /** Fields to show in list view */
    listFields?: string[];
  };
}

/**
 * PalJS Generator Configuration
 */
export interface PaljsConfig {
  // ============================================
  // GRAPHQL GENERATION
  // ============================================

  /**
   * Enable GraphQL generation
   * Can be boolean (true = Nexus only) or config object for fine-grained control
   * @default false
   */
  generateGraphQL?: boolean | GraphQLConfig;

  /**
   * Output directory for Nexus files (relative to generator output)
   * @default './nexus'
   * @deprecated Use generateGraphQL.nexusOutput instead
   */
  nexusOutput?: string;

  // ============================================
  // TYPE GENERATION
  // ============================================

  /**
   * Generate typed helpers for PrismaSelect
   * @default true
   */
  generateTypes?: boolean;

  /**
   * Generate JavaScript instead of TypeScript
   * @default false
   */
  javaScript?: boolean;

  // ============================================
  // ADMIN GENERATION
  // ============================================

  /**
   * Generate admin UI pages and schema
   * Can be boolean (true = defaults) or config object
   * @default false
   */
  generateAdmin?: boolean | AdminConfig;

  // ============================================
  // PRISMA CLIENT
  // ============================================

  /**
   * Name of the Prisma client instance in your code
   * @default 'prisma'
   */
  prismaName?: string;

  // ============================================
  // GLOBAL EXCLUSIONS
  // ============================================

  /**
   * Fields to exclude from all models
   */
  excludeFields?: string[];

  /**
   * Fields to exclude from input types only
   */
  excludeInputFields?: string[];

  /**
   * Queries/mutations to disable globally
   */
  excludeQueriesAndMutations?: string[];

  /**
   * Disable all queries globally
   * @default false
   */
  disableQueries?: boolean;

  /**
   * Disable all mutations globally
   * @default false
   */
  disableMutations?: boolean;

  // ============================================
  // PER-MODEL CONFIGURATION
  // ============================================

  /**
   * Per-model configuration
   */
  models?: Record<string, ModelConfig>;

  // ============================================
  // ADVANCED OPTIONS
  // ============================================

  /**
   * Filter input fields with custom logic
   */
  filterInputs?: (input: DMMF.InputType) => DMMF.SchemaArg[];

  /**
   * Don't use Prisma's FieldUpdateOperationsInput
   * @default false
   */
  doNotUseFieldUpdateOperationsInput?: boolean;

  /**
   * Path to admin settings JSON file
   */
  adminSettingsPath?: string;
}

/**
 * Resolved GraphQL configuration
 */
export interface ResolvedGraphQLConfig {
  /** Enable Nexus server-side GraphQL generation */
  nexus: boolean;
  /** Output directory for Nexus files */
  nexusOutput: string;
  /** Enable client-side .graphql files generation */
  client: boolean;
  /** Output directory for client .graphql files */
  clientOutput: string;
}

/**
 * Resolved configuration with all defaults applied
 */
export interface ResolvedConfig
  extends Required<Omit<PaljsConfig, 'generateAdmin' | 'generateGraphQL' | 'filterInputs' | 'models' | 'nexusOutput'>> {
  generateAdmin: AdminConfig | false;
  generateGraphQL: ResolvedGraphQLConfig | false;
  filterInputs?: (input: DMMF.InputType) => DMMF.SchemaArg[];
  models: Record<string, ModelConfig>;
}
