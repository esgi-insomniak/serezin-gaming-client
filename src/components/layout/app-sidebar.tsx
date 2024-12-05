import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { ClientRoutes, getPath } from '@/router';
import { LayoutSidebarHeader } from '@/components/layout/_components/sidebar-header.tsx';
import { LayoutSidebarFooter } from '@/components/layout/_components/sidebar-footer.tsx';
import { LayoutSidebarContent } from '@/components/layout/_components/sidebar-content.tsx';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export function AppSidebar() {
  const items: {
    title: string;
    icon: keyof typeof dynamicIconImports;
    url: string;
  }[] = [
    {
      title: 'Dashboard',
      icon: 'house',
      url: getPath(ClientRoutes.HOME)
    }
  ];
  return (
    <Sidebar>
      <LayoutSidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <LayoutSidebarContent items={items} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <LayoutSidebarFooter />
    </Sidebar>
  );
}
