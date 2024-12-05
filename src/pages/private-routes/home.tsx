import { ClientRoutes, useHandleRedirection } from '@/router';
import { useToaster } from '@/libs/providers';
import { Button } from '@/components/ui/button.tsx';

export default function Home() {
  const { redirect } = useHandleRedirection();
  const toast = useToaster();
  return (
    <div>
      <Button onClick={() => redirect(ClientRoutes.LOGIN)}>Go to Login</Button>
      <Button onClick={() => toast?.success('test')}>Show Toast</Button>
    </div>
  );
}
