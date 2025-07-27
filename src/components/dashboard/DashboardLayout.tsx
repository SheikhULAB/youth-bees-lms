import { useState } from "react";
import { Bell, Settings, User, Menu, LogOut, Edit, MessageSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card } from "../ui/card";
import { Separator } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Badge } from "../ui/badge";

interface DashboardLayoutProps {
  title: string;
  subtitle: string;
  userType: "student" | "teacher" | "partner";
  children: React.ReactNode;
  badges?: Array<{ icon: React.ReactNode; text: string }>;
}

const DashboardLayout = ({ title, subtitle, userType, children, badges }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const notifications = [
    { id: 1, type: "info", message: "New session request received", time: "2 mins ago" },
    { id: 2, type: "success", message: "Payment processed successfully", time: "1 hour ago" },
    { id: 3, type: "warning", message: "Session starting in 30 minutes", time: "2 hours ago" },
  ];

  const SidebarContent = () => (
    <div className="p-4 space-y-6">
      {/* Notifications */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center">
          <Bell className="h-4 w-4 mr-2" />
          Notifications
        </h3>
        <div className="space-y-2">
          {notifications.map((notification) => (
            <Card key={notification.id} className="p-3">
              <div className="space-y-1">
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Settings */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </h3>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <User className="h-4 w-4 mr-2" />
            Profile Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-2" />
            Notification Preferences
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Account Settings
          </Button>
        </div>
      </div>

      <Separator />

      {/* Account Information */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center">
          <User className="h-4 w-4 mr-2" />
          Account Info
        </h3>
        <Card className="p-3">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground capitalize">{userType}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
            <p className="text-xs text-muted-foreground">Member since: Jan 2024</p>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{title}</h1>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {badges && (
              <div className="flex items-center space-x-2">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {badge.icon}
                    {badge.text}
                  </Badge>
                ))}
              </div>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;