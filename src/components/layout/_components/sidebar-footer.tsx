import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { ClientRoutes, getPath } from '@/router';
import { Link } from 'react-router-dom';
import { UserFooter } from '@/components/layout/_components/user-footer.tsx';

export function LayoutSidebarFooter() {
  // FIXME: call useIdentityStore hook when RSO is approved
  const user = {
    name: 'John Doe',
    avatar: 'https://github.com/shadcn.png'
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserFooter user={user} />
        <div className={'w-full space-x-2 flex justify-center py-2'}>
          <Link
            to={getPath(ClientRoutes.PRIVACY_POLICY)}
            className={'italic text-xs hover:text-blue-500'}>
            Privacy policy
          </Link>
          <Link
            to={getPath(ClientRoutes.TERMS_OF_SERVICE)}
            className={'italic text-xs hover:text-blue-500'}>
            Terms of service
          </Link>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
