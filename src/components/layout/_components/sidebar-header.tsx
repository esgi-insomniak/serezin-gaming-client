import {
  DropdownMenu,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import { SidebarHeader, SidebarMenuButton } from '@/components/ui/sidebar';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronsUpDown, Crown } from 'lucide-react';

export function LayoutSidebarHeader() {
  return (
    <SidebarHeader>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Crown className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">Tournoi</span>
              <span className="">Edition 2025</span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width]"
          align="start">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="p-2">
              <div className="flex items-center gap-2">
                <div className="aspect-square size-8 bg-sidebar-primary rounded-lg" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Tournoi</span>
                  <span className="">Edition 202{5 + (index - 1)}</span>
                </div>
              </div>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}
