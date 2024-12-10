import { useTournamentGetOneById } from '@/libs/api';
import { useParams } from 'react-router-dom';

export default function Tournament() {
  const { tournamentId = '' } = useParams<{ tournamentId: string }>();
  const { data: { data: { data: currentTournament } = {} } = {} } =
    useTournamentGetOneById(tournamentId, {
      query: { enabled: !!tournamentId }
    });
  return (
    <div>
      <h1>Welcome to {currentTournament?.name ?? 'not found'}</h1>
    </div>
  );
}
