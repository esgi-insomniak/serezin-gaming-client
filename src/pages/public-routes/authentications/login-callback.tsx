import { useAuthenticationExchangeCode } from '@/libs/api/endpoints/authentication/authentication';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/libs/enum';
import { useIdentityStore } from '@/libs/stores';
import { ClientRoutes, useHandleRedirection } from '@/router';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function LoginCallback() {
  const { mutate: exchangeCodeRequest } = useAuthenticationExchangeCode();
  const { setConnected, isConnected } = useIdentityStore();
  const { redirect } = useHandleRedirection();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    if (isConnected) return;
    exchangeCodeRequest(
      {
        code: queryParams.get('code') as string
      },
      {
        onSuccess: (data) => {
          setConnected(true);
          localStorage.setItem(
            COOKIE_ACCESS_TOKEN_KEY,
            data.data.data.access_token
          );
          redirect(ClientRoutes.HOME);
        }
      }
    );
  }, [isConnected, setConnected, exchangeCodeRequest, queryParams, redirect]);

  return <></>;
}
