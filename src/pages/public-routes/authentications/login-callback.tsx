import { useIdentityStore } from '@/libs/stores';
import { Navigate, useSearchParams } from 'react-router-dom';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/libs/enum.ts';
import { useEffect, useState } from 'react';
import { useAuthenticationExchangeCode } from '@/libs/api';
import { ClientRoutes, getPath } from '@/router';

export default function LoginCallback() {
  const { mutate: exchangeCodeRequest } = useAuthenticationExchangeCode();
  const { setConnected, isConnected } = useIdentityStore();
  const [queryParams] = useSearchParams();
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    if (isConnected) return;
    exchangeCodeRequest(
      { code: queryParams.get('code') as string },
      {
        onSettled: (data) => {
          document.cookie = `${COOKIE_ACCESS_TOKEN_KEY}=${data?.data.data.access_token}`;
          setConnected(true);
          setIsSettled(true);
        },
        onError: console.error
      }
    );
  }, [exchangeCodeRequest, isConnected, queryParams, setConnected]);

  return isSettled ? (
    <Navigate to={getPath(ClientRoutes.HOME)} replace />
  ) : null;
}
