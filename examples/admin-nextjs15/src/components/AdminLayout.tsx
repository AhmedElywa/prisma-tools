"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	LayoutDashboard,
	Settings,
	Menu,
	Search,
	Bell,
	Moon,
	Sun,
	LogOut,
	UserCircle,
	Database,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface AdminLayoutProps {
	children: React.ReactNode;
	models: Array<{ id: string; name: string }>;
}

export function AdminLayout({ children, models }: AdminLayoutProps) {
	const pathname = usePathname();
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="flex h-screen bg-background">
			{/* Sidebar */}
			<div
				className={cn(
					"relative flex flex-col bg-card border-r transition-all duration-300",
					sidebarCollapsed ? "w-16" : "w-64",
				)}
			>
				{/* Logo/Header */}
				<div className="flex items-center justify-between p-4 border-b">
					{!sidebarCollapsed && (
						<h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Admin Panel
						</h2>
					)}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
						className="hidden md:flex"
					>
						<Menu className="h-5 w-5" />
					</Button>
				</div>

				{/* Navigation */}
				<nav className="flex-1 p-3 space-y-1">
					<Link
						href="/admin"
						className={cn(
							"flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
							"hover:bg-accent hover:text-accent-foreground",
							pathname === "/admin" && "bg-accent text-accent-foreground",
						)}
					>
						<LayoutDashboard className="h-5 w-5 shrink-0" />
						{!sidebarCollapsed && <span>Dashboard</span>}
					</Link>

					{!sidebarCollapsed && (
						<div className="pt-4 pb-2">
							<h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
								Models
							</h3>
						</div>
					)}

					{models.map((model) => {
						const href = `/admin/models/${model.id}`;
						return (
							<Link
								key={model.id}
								href={href}
								className={cn(
									"flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
									"hover:bg-accent hover:text-accent-foreground",
									pathname === href && "bg-accent text-accent-foreground",
								)}
							>
								<Database className="h-5 w-5 shrink-0" />
								{!sidebarCollapsed && <span>{model.name}</span>}
							</Link>
						);
					})}

					<div className="pt-4">
						<Link
							href="/admin/settings"
							className={cn(
								"flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
								"hover:bg-accent hover:text-accent-foreground",
								pathname === "/admin/settings" &&
									"bg-accent text-accent-foreground",
							)}
						>
							<Settings className="h-5 w-5 shrink-0" />
							{!sidebarCollapsed && <span>Settings</span>}
						</Link>
					</div>
				</nav>

				{/* Theme Toggle */}
				<div className="p-3 border-t">
					<Button
						variant="ghost"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className={cn(
							"w-full justify-start",
							sidebarCollapsed && "justify-center px-2",
						)}
					>
						{mounted ? (
							theme === "dark" ? (
								<Sun className="h-5 w-5 shrink-0" />
							) : (
								<Moon className="h-5 w-5 shrink-0" />
							)
						) : (
							<div className="h-5 w-5 shrink-0" />
						)}
						{!sidebarCollapsed && mounted && (
							<span className="ml-3">
								{theme === "dark" ? "Light Mode" : "Dark Mode"}
							</span>
						)}
					</Button>
				</div>
			</div>

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Top Header */}
				<header className="h-16 bg-card border-b flex items-center justify-between px-6">
					<div className="flex items-center gap-4">
						<h1 className="text-lg font-semibold">
							{pathname === "/admin" && "Dashboard"}
							{
								models.find((m) => pathname === `/admin/models/${m.id}`)
									?.name
							}
							{pathname === "/admin/settings" && "Settings"}
						</h1>
					</div>

					<div className="flex items-center gap-4">
						{/* Mobile Menu */}
						<Sheet>
							<SheetTrigger asChild className="md:hidden">
								<Button variant="ghost" size="icon">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="w-64 p-0">
								<MobileNav
									models={models}
									pathname={pathname}
									theme={theme}
									setTheme={setTheme}
									mounted={mounted}
								/>
							</SheetContent>
						</Sheet>

						{/* Search */}
						<div className="relative hidden sm:block">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search..."
								className="pl-9 w-64"
							/>
						</div>

						{/* Notifications */}
						<Button variant="ghost" size="icon" className="relative">
							<Bell className="h-5 w-5" />
							<Badge
								className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center"
								variant="destructive"
							>
								3
							</Badge>
						</Button>

						{/* User Menu */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon" className="rounded-full">
									<Avatar className="h-8 w-8">
										<AvatarImage src="/avatar.jpg" alt="User" />
										<AvatarFallback>AD</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<UserCircle className="mr-2 h-4 w-4" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="text-destructive">
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-1 overflow-auto bg-muted/30">
					<div className="p-6">{children}</div>
				</main>
			</div>
		</div>
	);
}

// Mobile Navigation Component
function MobileNav({
	models,
	pathname,
	theme,
	setTheme,
	mounted,
}: {
	models: Array<{
		id: string;
		name: string;
		[key: string]: any;
	}>;
	pathname: string;
	theme: string | undefined;
	setTheme: (theme: string) => void;
	mounted: boolean;
}) {
	return (
		<div className="flex flex-col h-full">
			{/* Logo/Header */}
			<div className="p-4 border-b">
				<h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
					Admin Panel
				</h2>
			</div>

			{/* Navigation */}
			<nav className="flex-1 p-3 space-y-1">
				<Link
					href="/admin"
					className={cn(
						"flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
						"hover:bg-accent hover:text-accent-foreground",
						pathname === "/admin" && "bg-accent text-accent-foreground",
					)}
				>
					<LayoutDashboard className="h-5 w-5" />
					<span>Dashboard</span>
				</Link>

				<div className="pt-4 pb-2">
					<h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
						Models
					</h3>
				</div>

				{models.map((model) => {
					const href = `/admin/models/${model.id}`;
					return (
						<Link
							key={model.id}
							href={href}
							className={cn(
								"flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
								"hover:bg-accent hover:text-accent-foreground",
								pathname === href && "bg-accent text-accent-foreground",
							)}
						>
							<Database className="h-5 w-5" />
							<span>{model.name}</span>
						</Link>
					);
				})}

				<div className="pt-4">
					<Link
						href="/admin/settings"
						className={cn(
							"flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
							"hover:bg-accent hover:text-accent-foreground",
							pathname === "/admin/settings" &&
								"bg-accent text-accent-foreground",
						)}
					>
						<Settings className="h-5 w-5" />
						<span>Settings</span>
					</Link>
				</div>
			</nav>

			{/* Theme Toggle */}
			<div className="p-3 border-t">
				<Button
					variant="ghost"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="w-full justify-start"
				>
					{mounted ? (
						theme === "dark" ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)
					) : (
						<div className="h-5 w-5" />
					)}
					{mounted && (
						<span className="ml-3">
							{theme === "dark" ? "Light Mode" : "Dark Mode"}
						</span>
					)}
				</Button>
			</div>
		</div>
	);
}
