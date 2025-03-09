import {
  Home,
  CreditCard,
  List,
  Banknote,
  Calendar,
  Bell,
  Target,
  BarChart,
  User,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { TeamSwitcher } from '@/components/molecules/AccountSwitcher';
import { NavUser } from '../molecules/NavUser';

// Menu items.
const data = {
  user: {
    name: 'Bayu Setiawan',
    email: 'warnaf@example.com',
    avatar: '',
  },
  accounts: [
    {
      name: 'Bayu Setiawan',
      plan: 'Pria',
    },
    {
      name: 'Annisa Rizky Fajar',
      plan: 'Wanita',
    },
  ],
  routes: [
    {
      title: 'Dashboard',
      url: '/',
      icon: Home,
    },
    {
      title: 'Transaction',
      url: '/transaction',
      icon: CreditCard,
    },
    {
      title: 'Category',
      url: '/category',
      icon: List,
    },
    {
      title: 'Bank Account/Balance',
      url: '/bank-account',
      icon: Banknote,
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: Calendar,
    },
    {
      title: 'Upcoming Payment',
      url: '/upcoming-payment',
      icon: Bell,
    },
    {
      title: 'Goals',
      url: '/goals',
      icon: Target,
    },
    {
      title: 'Analytics',
      url: '/analytics',
      icon: BarChart,
    },
    {
      title: 'Account',
      url: '/account',
      icon: User,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher teams={data.accounts} />
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.routes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
