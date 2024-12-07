/**
 * Generated by orval 🍺
 * Do not edit manually.
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { AuthenticationExchangeCodeResponseDto } from '../../models';

export const getAuthenticationExchangeCodeResponseMock = (
  overrideResponse: Partial<AuthenticationExchangeCodeResponseDto> = {}
): AuthenticationExchangeCodeResponseDto => ({
  data: {
    access_token: faker.string.alpha(20),
    expires_in: faker.number.int({ min: undefined, max: undefined }),
    refresh_token: faker.string.alpha(20),
    scope: faker.string.alpha(20),
    token_type: faker.string.alpha(20)
  },
  message: faker.string.alpha(20),
  meta: {},
  statusCode: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse
});

export const getAuthenticationExchangeCodeMockHandler = (
  overrideResponse?:
    | AuthenticationExchangeCodeResponseDto
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0]
      ) =>
        | Promise<AuthenticationExchangeCodeResponseDto>
        | AuthenticationExchangeCodeResponseDto)
) => {
  return http.post(
    'https://mock.serezin-gaming.fr/authentication/exchange-code/:code',
    async (info) => {
      await delay(1000);

      return new HttpResponse(
        JSON.stringify(
          overrideResponse !== undefined
            ? typeof overrideResponse === 'function'
              ? await overrideResponse(info)
              : overrideResponse
            : getAuthenticationExchangeCodeResponseMock()
        ),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  );
};
export const getAuthenticationMock = () => [
  getAuthenticationExchangeCodeMockHandler()
];
