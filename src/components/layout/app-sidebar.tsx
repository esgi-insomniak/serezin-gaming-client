import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { LayoutSidebarHeader } from '@/components/layout/_components/sidebar-header.tsx';
import { LayoutSidebarFooter } from '@/components/layout/_components/sidebar-footer.tsx';
import { LayoutSidebarContent } from '@/components/layout/_components/sidebar-content.tsx';
import { useSidebarGroup } from '@/components/layout/utils';

export function AppSidebar() {
  const { sidebarGroup } = useSidebarGroup();
  return (
    <Sidebar>
      <LayoutSidebarHeader />
      <SidebarContent>
        {Object.keys(sidebarGroup).map((category) => {
          const items = sidebarGroup[category];
          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>{category}</SidebarGroupLabel>
              <SidebarGroupContent>
                <LayoutSidebarContent items={items} />
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <LayoutSidebarFooter />
    </Sidebar>
  );
}
