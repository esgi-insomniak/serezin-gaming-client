import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar.tsx';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';

export function LayoutSidebarContent({
  items
}: {
  items: {
    title: string;
    icon: keyof typeof dynamicIconImports;
    url: string;
  }[];
}) {
  return (
    <SidebarMenu>
      {items.map((item) => {
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
