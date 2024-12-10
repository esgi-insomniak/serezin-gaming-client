/**
 * Generated by orval 🍺
 * Do not edit manually.
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';
import type {
  AuthenticateUserOkDto,
  AuthenticationLoginParams,
  ForbiddenResponseDto,
  InternalServerErrorResponseDto
} from '../../models';
import { customAxiosInstance } from '../../custom/customAxiosInstance';
import type { ErrorType } from '../../custom/customAxiosInstance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const authenticationLogin = (
  params: AuthenticationLoginParams,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<void>(
    { url: `/authentication/login`, method: 'GET', params, signal },
    options
  );
};

export const getAuthenticationLoginQueryKey = (
  params: AuthenticationLoginParams
) => {
  return [`/authentication/login`, ...(params ? [params] : [])] as const;
};

export const getAuthenticationLoginQueryOptions = <
  TData = Awaited<ReturnType<typeof authenticationLogin>>,
  TError = ErrorType<unknown>
>(
  params: AuthenticationLoginParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof authenticationLogin>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customAxiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAuthenticationLoginQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof authenticationLogin>>
  > = ({ signal }) => authenticationLogin(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof authenticationLogin>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type AuthenticationLoginQueryResult = NonNullable<
  Awaited<ReturnType<typeof authenticationLogin>>
>;
export type AuthenticationLoginQueryError = ErrorType<unknown>;

export function useAuthenticationLogin<
  TData = Awaited<ReturnType<typeof authenticationLogin>>,
  TError = ErrorType<unknown>
>(
  params: AuthenticationLoginParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof authenticationLogin>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof authenticationLogin>>,
          TError,
          TData
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customAxiosInstance>;
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useAuthenticationLogin<
  TData = Awaited<ReturnType<typeof authenticationLogin>>,
  TError = ErrorType<unknown>
>(
  params: AuthenticationLoginParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof authenticationLogin>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof authenticationLogin>>,
          TError,
          TData
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customAxiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useAuthenticationLogin<
  TData = Awaited<ReturnType<typeof authenticationLogin>>,
  TError = ErrorType<unknown>
>(
  params: AuthenticationLoginParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof authenticationLogin>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customAxiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useAuthenticationLogin<
  TData = Awaited<ReturnType<typeof authenticationLogin>>,
  TError = ErrorType<unknown>
>(
  params: AuthenticationLoginParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof authenticationLogin>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customAxiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getAuthenticationLoginQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const authenticationGetMe = (
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<AuthenticateUserOkDto>(
    { url: `/authentication/me`, method: 'GET', signal },
    options
  );
};

export const getAuthenticationGetMeQueryKey = () => {
  return [`/authentication/me`] as const;
};

export const getAuthenticationGetMeQueryOptions = <
  TData = Awaited<ReturnType<typeof authenticationGetMe>>,
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authenticationGetMe>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAuthenticationGetMeQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof authenticationGetMe>>
  > = ({ signal }) => authenticationGetMe(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof authenticationGetMe>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> };
};

export type AuthenticationGetMeQueryResult = NonNullable<
  Awaited<ReturnType<typeof authenticationGetMe>>
>;
export type AuthenticationGetMeQueryError = ErrorType<
  ForbiddenResponseDto | InternalServerErrorResponseDto
>;

export function useAuthenticationGetMe<
  TData = Awaited<ReturnType<typeof authenticationGetMe>>,
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authenticationGetMe>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof authenticationGetMe>>,
        TError,
        TData
      >,
      'initialData'
    >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData>;
};
export function useAuthenticationGetMe<
  TData = Awaited<ReturnType<typeof authenticationGetMe>>,
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authenticationGetMe>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof authenticationGetMe>>,
        TError,
        TData
      >,
      'initialData'
    >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useAuthenticationGetMe<
  TData = Awaited<ReturnType<typeof authenticationGetMe>>,
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authenticationGetMe>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useAuthenticationGetMe<
  TData = Awaited<ReturnType<typeof authenticationGetMe>>,
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authenticationGetMe>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getAuthenticationGetMeQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const authenticationRevokeToken = (
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<void>(
    { url: `/authentication/revoke-token`, method: 'DELETE' },
    options
  );
};

export const getAuthenticationRevokeTokenMutationOptions = <
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authenticationRevokeToken>>,
    TError,
    void,
    TContext
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof authenticationRevokeToken>>,
  TError,
  void,
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof authenticationRevokeToken>>,
    void
  > = () => {
    return authenticationRevokeToken(requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AuthenticationRevokeTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof authenticationRevokeToken>>
>;

export type AuthenticationRevokeTokenMutationError = ErrorType<
  ForbiddenResponseDto | InternalServerErrorResponseDto
>;

export const useAuthenticationRevokeToken = <
  TError = ErrorType<ForbiddenResponseDto | InternalServerErrorResponseDto>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authenticationRevokeToken>>,
    TError,
    void,
    TContext
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof authenticationRevokeToken>>,
  TError,
  void,
  TContext
> => {
  const mutationOptions = getAuthenticationRevokeTokenMutationOptions(options);

  return useMutation(mutationOptions);
};
