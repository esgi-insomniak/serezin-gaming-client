/**
 * Generated by orval 🍺
 * Do not edit manually.
 */
import type { TournamentDto } from './tournamentDto';
import type { TournamentOKResponseDtoMeta } from './tournamentOKResponseDtoMeta';

export interface TournamentOKResponseDto {
  data: TournamentDto;
  message: string;
  meta: TournamentOKResponseDtoMeta;
  statusCode: number;
}