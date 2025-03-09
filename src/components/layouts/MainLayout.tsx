import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/organisms/AppSidebar';
import { Separator } from '@/components/ui/separator';
import DynamicBreadcrumb from '../molecules/DynamicBreadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="cursor-pointer" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <DynamicBreadcrumb />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
