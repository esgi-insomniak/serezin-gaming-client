/**
 * Generated by orval 🍺
 * Do not edit manually.
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type {
  TournamentArrayResponseDto,
  TournamentResponseDto
} from '../../models';

export const getTournamentFindAllResponseMock = (
  overrideResponse: Partial<TournamentArrayResponseDto> = {}
): TournamentArrayResponseDto => ({
  data: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1
  ).map(() => ({
    id: faker.string.alpha(20),
    isArchived: faker.datatype.boolean(),
    members: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1
    ).map(() => faker.string.alpha(20)),
    owner: faker.string.alpha(20)
  })),
  message: faker.string.alpha(20),
  meta: {
    currentPage: faker.number.int({ min: undefined, max: undefined }),
    haveNextPage: faker.datatype.boolean(),
    havePreviousPage: faker.datatype.boolean(),
    itemsPerPage: faker.number.int({ min: undefined, max: undefined }),
    totalItems: faker.number.int({ min: undefined, max: undefined }),
    totalPages: faker.number.int({ min: undefined, max: undefined })
  },
  statusCode: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse
});

export const getTournamentCreateResponseMock = (
  overrideResponse: Partial<TournamentResponseDto> = {}
): TournamentResponseDto => ({
  data: {
    id: faker.string.alpha(20),
    isArchived: faker.datatype.boolean(),
    members: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1
    ).map(() => faker.string.alpha(20)),
    owner: faker.string.alpha(20)
  },
  message: faker.string.alpha(20),
  meta: {},
  statusCode: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse
});

export const getTournamentFindOneResponseMock = (
  overrideResponse: Partial<TournamentResponseDto> = {}
): TournamentResponseDto => ({
  data: {
    id: faker.string.alpha(20),
    isArchived: faker.datatype.boolean(),
    members: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1
    ).map(() => faker.string.alpha(20)),
    owner: faker.string.alpha(20)
  },
  message: faker.string.alpha(20),
  meta: {},
  statusCode: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse
});

export const getTournamentFindAllMockHandler = (
  overrideResponse?:
    | TournamentArrayResponseDto
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<TournamentArrayResponseDto> | TournamentArrayResponseDto)
) => {
  return http.get('https://mock.serezin-gaming.fr/tournament', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getTournamentFindAllResponseMock()
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  });
};

export const getTournamentCreateMockHandler = (
  overrideResponse?:
    | TournamentResponseDto
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) => Promise<TournamentResponseDto> | TournamentResponseDto)
) => {
  return http.post(
    'https://mock.serezin-gaming.fr/tournament',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getTournamentCreateResponseMock()
        ),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getTournamentFindOneMockHandler = (
  overrideResponse?:
    | TournamentResponseDto
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0]
      ) => Promise<TournamentResponseDto> | TournamentResponseDto)
) => {
  return http.get(
    'https://mock.serezin-gaming.fr/tournament/:id',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getTournamentFindOneResponseMock()
        ),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};

export const getTournamentRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0]
      ) => Promise<void> | void)
) => {
  return http.delete(
    'https://mock.serezin-gaming.fr/tournament/:id',
    async (info) => {
      await delay(1000);
      if (typeof overrideResponse === 'function') {
        await overrideResponse(info);
      }
      return new HttpResponse(null, { status: 204 });
    }
  );
};
export const getTournamentMock = () => [
  getTournamentFindAllMockHandler(),
  getTournamentCreateMockHandler(),
  getTournamentFindOneMockHandler(),
  getTournamentRemoveMockHandler()
];
