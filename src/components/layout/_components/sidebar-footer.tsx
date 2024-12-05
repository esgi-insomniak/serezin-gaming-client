import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { ClientRoutes, useHandleRedirection } from '@/router';
import { UserFooter } from '@/components/layout/_components/user-footer.tsx';

export function LayoutSidebarFooter() {
  // FIXME: call useIdentityStore hook when RSO is approved

  const { redirect } = useHandleRedirection();
  const user = {
    name: 'John Doe',
    avatar: 'https://github.com/shadcn.png'
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserFooter user={user} />
        <div className={'w-full space-x-2 flex justify-center py-2'}>
          <span
            onClick={() => redirect(ClientRoutes.PRIVACY_POLICY)}
            className={'italic text-xs hover:text-blue-500 cursor-pointer'}>
            Privacy policy
          </span>
          <span
            onClick={() => redirect(ClientRoutes.TERMS_OF_SERVICE)}
            className={'italic text-xs hover:text-blue-500 cursor-pointer'}>
            Terms of service
          </span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
