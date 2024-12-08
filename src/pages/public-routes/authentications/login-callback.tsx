import { useAuthenticationExchangeCode } from '@/libs/api';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/libs/enum.ts';
import { useIdentityStore } from '@/libs/stores';
import { ClientRoutes, getPath } from '@/router';
import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

export default function LoginCallback() {
  const { mutate: exchangeCodeRequest } = useAuthenticationExchangeCode();
  const { setConnected, setIdentity, isConnected } = useIdentityStore();
  const [queryParams] = useSearchParams();
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    if (isConnected) return;
    exchangeCodeRequest(
      { code: queryParams.get('code') as string },
      {
        onSettled: (data) => {
          if (!data) return;
          document.cookie = `${COOKIE_ACCESS_TOKEN_KEY}=${data?.data.data.token.type} ${data?.data.data.token.access_token}`;
          setIdentity({
            discord: data.data.data.discord,
            riot: data.data.data.riot
          });
          setConnected(true);
          setIsSettled(true);
        },
        onError: console.error
      }
    );
  }, [
    exchangeCodeRequest,
    isConnected,
    queryParams,
    setConnected,
    setIdentity
  ]);

  return isSettled ? (
    <Navigate to={getPath(ClientRoutes.HOME)} replace />
  ) : null;
}
