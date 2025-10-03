import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import {
    Briefcase,
    Calculator,
    FileText,
    HelpCircle,
    Home,
    MessageSquare,
    Monitor,
    User,
    Wand2
} from 'lucide-react';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    {
      title: "Main",
      items: [
        { title: "Главная", icon: Home, href: "/" },
      ]
    },
    {
      title: "Interview",
      items: [
        { title: "Interview Copilot", icon: Monitor, href: "/dashboard" },
        { title: "Mock Interview", icon: MessageSquare, href: "/mock-interview" },
      ]
    },
    {
      title: "Tools",
      items: [
        { title: "AI Resume Builder", icon: FileText, href: "/dashboard" },
        { title: "AI Material Generator", icon: Wand2, href: "/dashboard" },
        { title: "AI Job Hunter", icon: Briefcase, href: "/dashboard" },
        { title: "AI Salary Calculator", icon: Calculator, href: "/dashboard" },
      ]
    },
    {
      title: "Resources",
      items: [
        { title: "Preparation Hub", icon: User, href: "/dashboard" },
        { title: "Question Bank", icon: HelpCircle, href: "/bank" },
      ]
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r border-gray-200">
          <SidebarContent className="bg-white">
            <div className="p-4">
              <h1 className="text-xl font-bold text-orange-600">
                InterviewAI
              </h1>
            </div>

            {navItems.map((section, idx) => (
              <SidebarGroup key={idx}>
                <SidebarGroupLabel className="text-xs uppercase text-gray-600">
                  {section.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild tooltip={item.title}>
                          <Link 
                            to={item.href} 
                            className={`flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors ${
                              location.pathname === item.href ? 'bg-orange-50 text-orange-600' : ''
                            }`}
                          >
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold">
                  JD
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">John Doe</span>
                  <span className="text-xs text-gray-500">john@example.com</span>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 md:px-6">
              <div className="flex h-16 items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="h-6 w-6 text-gray-900" />
                  <h1 className="text-xl font-bold text-orange-600">
                    InterviewAI
                  </h1>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
