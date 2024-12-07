import { Button } from '@/components/ui/button.tsx';
import { useToaster } from '@/libs/providers';

export default function Home() {
  const toast = useToaster();

  return (
    <div>
      <Button onClick={() => toast?.success('test')}>Show Toast</Button>
    </div>
  );
}
