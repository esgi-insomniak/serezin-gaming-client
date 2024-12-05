import { useTournamentFindAll } from '@/libs/api';
import { ClientRoutes, useHandleRedirection } from '@/router';

export default function Home() {
  const { redirect } = useHandleRedirection();
  const { data: { data: { data: allTournaments = [] } = {} } = {} } =
    useTournamentFindAll();

  return (
    <div>
      {allTournaments.map((tournament) => (
        <div key={tournament.id}>
          {tournament.id} {tournament.isArchived.toString()}
        </div>
      ))}
      <button onClick={() => redirect(ClientRoutes.LOGIN)}>Go to Login</button>
    </div>
  );
}
