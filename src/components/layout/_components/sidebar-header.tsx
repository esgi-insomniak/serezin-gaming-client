import {
  DropdownMenu,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu';
import { SidebarHeader, SidebarMenuButton } from '@/components/ui/sidebar';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Archive, ChevronsUpDown, Crown } from 'lucide-react';
import { useTournamentFindAll } from '@/libs/api';

export function LayoutSidebarHeader() {
  const { data: { data: { data: allTournaments = [] } = {} } = {} } =
    useTournamentFindAll();
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
          <div className="flex flex-col gap-1 p-2">
            {allTournaments.map((tournament) => (
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {tournament.isArchived ? (
                    <Archive className="size-4" />
                  ) : (
                    <Crown className="size-4" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="">{tournament.id}</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}
