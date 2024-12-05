import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar.tsx';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';
import { SingleSidebarGroupType } from '../utils';

export function LayoutSidebarContent({
  items
}: {
  items: SingleSidebarGroupType[];
}) {
  return (
    <SidebarMenu>
      {items.map((item: SingleSidebarGroupType) => {
        const LucideIcon = lazy(dynamicIconImports[item.icon]);
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <Suspense
                  fallback={
                    <div
                      style={{ background: '#ddd', width: 24, height: 24 }}
                    />
                  }>
                  <LucideIcon className="size-6" />
                </Suspense>
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
