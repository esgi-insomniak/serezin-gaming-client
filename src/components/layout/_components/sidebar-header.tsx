import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { SidebarHeader, SidebarMenuButton } from '@/components/ui/sidebar';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Archive, ChevronsUpDown, Crown } from 'lucide-react';
import { TournamentDto, useTournamentFindAll } from '@/libs/api';
import { useCallback, useState } from 'react';
import { ClientRoutes, useHandleRedirection } from '@/router';
import { Separator } from '@/components/ui/separator.tsx';

export function LayoutSidebarHeader() {
  const { data: { data: { data: allTournaments = [] } = {} } = {} } =
    useTournamentFindAll();

  const { redirect } = useHandleRedirection();

  const [currentTournament, setCurrentTournament] =
    useState<TournamentDto | null>(null);

  const handleTournamentChange = useCallback(
    (tournament: TournamentDto) => {
      setCurrentTournament(tournament);
      redirect(ClientRoutes.HOME, { params: { tournamentId: tournament.id } });
    },
    [redirect]
  );

  const Icon = currentTournament?.isArchived ? Archive : Crown;

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
              <span className="font-semibold">
                {currentTournament?.name ?? 'Selectionner un tournoi'}
              </span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width]"
          align="start">
          <div className="flex flex-col gap-1 p-2">
            {allTournaments.map((tournament) => (
              <DropdownMenuItem
                key={tournament.id}
                onSelect={() => handleTournamentChange(tournament)}>
                <Icon className="size-4" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="">{tournament.name}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
          <Separator className="my-2" />
          <div className="p-2">
            <DropdownMenuItem onSelect={() => setCurrentTournament(null)}>
              <Crown className="size-4" />
              Selectionner un tournoi
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}
