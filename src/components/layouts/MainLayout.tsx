import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/organisms/AppSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="px-4">
        <SidebarTrigger className="cursor-pointer" />
        {children}
      </main>
    </SidebarProvider>
  );
}
