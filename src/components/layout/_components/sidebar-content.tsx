import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar.tsx';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';
import { SingleSidebarGroupType } from '../utils';
import { useHandleRedirection } from '@/router';

export function LayoutSidebarContent({
  items
}: {
  items: SingleSidebarGroupType[];
}) {
  const { redirect } = useHandleRedirection();
  return (
    <SidebarMenu>
      {items
        .filter((item) => item.visible !== false)
        .map((item: SingleSidebarGroupType) => {
          const LucideIcon = lazy(dynamicIconImports[item.icon]);
          return (
            <SidebarMenuItem
              key={item.title}
              onClick={() => redirect(item.url)}
              className="cursor-pointer">
              <SidebarMenuButton asChild>
                <span>
                  <Suspense
                    fallback={
                      <div className="animate-pulse bg-foreground/50" />
                    }>
                    <LucideIcon className="size-6" />
                  </Suspense>
                  <span>{item.title}</span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
    </SidebarMenu>
  );
}
