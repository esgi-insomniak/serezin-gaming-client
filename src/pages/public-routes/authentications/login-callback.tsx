import { useAuthenticationExchangeCode } from '@/libs/api';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/libs/enum.ts';
import { useIdentityStore } from '@/libs/stores';
import { ClientRoutes, getPath } from '@/router';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function LoginCallback() {
  const { mutate: exchangeCodeRequest } = useAuthenticationExchangeCode();
  const { setConnected, setIdentity, isConnected } = useIdentityStore();
  const [queryParams] = useSearchParams();
  const [, setCookie] = useCookies([COOKIE_ACCESS_TOKEN_KEY]);
  const hasExecuted = useRef(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const code = queryParams.get('code');
    if (isConnected || !code || hasExecuted.current) return;
    hasExecuted.current = true;

    setIsLoading(true); // Show loading indicator
    exchangeCodeRequest(
      { code },
      {
        onSuccess: (data) => {
          const { token, discord, riot } = data.data.data;

          // Set cookies and update identity
          setCookie(COOKIE_ACCESS_TOKEN_KEY, token.access_token, {
            secure: true,
            sameSite: 'strict'
          });
          setIdentity({ discord, riot });
          setConnected(true);

          // Clear the URL code parameter
          const currentUrl = new URL(window.location.href);
          currentUrl.searchParams.delete('code');
          window.history.replaceState({}, '', currentUrl);
        },
        onError: (error) => {
          console.error(
            'Error exchanging code:',
            error.response?.data || error.message
          );
        },
        onSettled: () => {
          setIsLoading(false); // Hide loading indicator
        }
      }
    );

    return () => {};
  }, [
    exchangeCodeRequest,
    isConnected,
    queryParams,
    setConnected,
    setCookie,
    setIdentity
  ]);

  if (isLoading) {
    return <div>Loading...</div>; // Replace with your own loading indicator
  }

  return isConnected ? (
    <Navigate to={getPath(ClientRoutes.HOME)} replace />
  ) : null;
}
