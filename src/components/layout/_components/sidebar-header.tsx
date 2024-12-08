import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { SidebarHeader, SidebarMenuButton } from '@/components/ui/sidebar';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Archive, ChevronsUpDown, Crown } from 'lucide-react';
import {
  TournamentDto,
  useTournamentFindAll,
  useTournamentFindOne
} from '@/libs/api';
import { useCallback } from 'react';
import { ClientRoutes, useHandleRedirection } from '@/router';
import { Separator } from '@/components/ui/separator.tsx';
import { useParams } from 'react-router-dom';

export function LayoutSidebarHeader() {
  const { redirect } = useHandleRedirection();
  const { tournamentId = '' } = useParams<{ tournamentId: string }>();

  const { data: { data: { data: allTournaments = [] } = {} } = {} } =
    useTournamentFindAll();

  const { data: { data: { data: currentTournament } = {} } = {} } =
    useTournamentFindOne(tournamentId, { query: { enabled: !!tournamentId } });

  const handleTournamentChange = useCallback(
    (tournament: TournamentDto) => {
      redirect(ClientRoutes.TOURNAMENT_DETAILS, {
        params: { tournamentId: tournament.id },
        replace: false
      });
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
            <DropdownMenuItem onSelect={() => redirect(ClientRoutes.HOME)}>
              <Crown className="size-4" />
              Selectionner un tournoi
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarHeader>
  );
}
