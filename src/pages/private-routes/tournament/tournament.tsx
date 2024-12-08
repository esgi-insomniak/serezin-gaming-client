import { useParams } from 'react-router-dom';
import { useTournamentFindOne } from '@/libs/api';

export default function Tournament() {
  const { tournamentId = '' } = useParams<{ tournamentId: string }>();
  const { data: { data: { data: currentTournament } = {} } = {} } =
    useTournamentFindOne(tournamentId, { query: { enabled: !!tournamentId } });
  return (
    <div>
      <h1>Welcome to {currentTournament?.name ?? 'not found'}</h1>
    </div>
  );
}
