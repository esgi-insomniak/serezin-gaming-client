import { ClientRoutes, useHandleRedirection } from '@/router';

export default function Home() {
  const { redirect } = useHandleRedirection();
  return (
    <div>
      <button onClick={() => redirect(ClientRoutes.LOGIN)}>Go to Login</button>
    </div>
  );
}
