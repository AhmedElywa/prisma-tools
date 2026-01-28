import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Activity, BarChart3, Users, FileText, Tag, Package, User, Layers } from "lucide-react"
import Link from "next/link"

// Icon mapping for models
const iconMap: Record<string, any> = {
  User: Users,
  Post: FileText,
  Category: Layers,
  Tag: Tag,
  Profile: User,
  Product: Package,
  Default: Database
}

// Color mapping for models
const colorMap: Record<string, string> = {
  User: 'from-blue-500 to-blue-600',
  Post: 'from-green-500 to-green-600',
  Profile: 'from-purple-500 to-purple-600',
  Category: 'from-orange-500 to-orange-600',
  Tag: 'from-pink-500 to-pink-600',
  Product: 'from-yellow-500 to-yellow-600',
}

const models = [
  { id: 'User', name: 'Users', count: 0 },
  { id: 'Post', name: 'Posts', count: 0 },
  { id: 'Category', name: 'Categories', count: 0 },
  { id: 'Tag', name: 'Tags', count: 0 },
  { id: 'Profile', name: 'Profiles', count: 0 },
  { id: 'Product', name: 'Products', count: 0 },
];

export default async function AdminDashboard() {
  const stats = [
    { label: 'Total Models', value: models.length.toString(), icon: Database },
    { label: 'Active Records', value: '0', icon: Activity },
    { label: 'API Status', value: 'Online', icon: BarChart3 },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your admin panel. Manage your data using GraphQL-powered interface.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Models Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Data Models</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => {
            const Icon = iconMap[model.id] || iconMap.Default
            const color = colorMap[model.id] || 'from-gray-500 to-gray-600'
            
            return (
              <Card key={model.id} className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/admin/models/${model.id}`}>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                  <CardTitle className="mt-4">{model.name}</CardTitle>
                  <CardDescription>Manage {model.name.toLowerCase()} records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold">{model.count}</span>
                    <span className="text-sm text-muted-foreground">Total records</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="font-medium">GraphQL API</p>
                <p className="text-sm text-muted-foreground">Access your data through GraphQL endpoint at /api/graphql</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="font-medium">PalJS Admin</p>
                <p className="text-sm text-muted-foreground">Using @paljs/admin components with Apollo Client</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="font-medium">Nexus Schema</p>
                <p className="text-sm text-muted-foreground">Type-safe GraphQL schema generated from Prisma models</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
              <div>
                <p className="font-medium">CRUD Operations</p>
                <p className="text-sm text-muted-foreground">Full Create, Read, Update, Delete functionality for all models</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
