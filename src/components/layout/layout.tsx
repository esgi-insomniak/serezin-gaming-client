import { AppSidebar } from '@/components/layout/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { useAuthenticationGetMe } from '@/libs/api';
import { useIdentityStore } from '@/libs/stores';
import Cookies from 'js-cookie';
import { memo, PropsWithChildren, Suspense, useEffect } from 'react';
import { Skeleton } from '@/components/layout/_components/skeleton.tsx';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/libs/enum.ts';

export const MemoizedLayout = memo(function Layout({
  children
}: PropsWithChildren) {
  const { setIdentity, resetIdentity, setConnected } = useIdentityStore();
  const { isSuccess, isFetched, data } = useAuthenticationGetMe({
    request: {
      headers: {
        Authorization: 'Bearer ' + Cookies.get(COOKIE_ACCESS_TOKEN_KEY)
      }
    }
  });

  useEffect(() => {
    if (!isFetched) return;
    if (!isSuccess) return resetIdentity();
    setIdentity(data.data.data);
    setConnected(true);
  }, [isSuccess, data, setIdentity, setConnected, resetIdentity, isFetched]);

  // FIXME: store path in zustand render breadcrumb dynamically
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className={'h-dvh'}>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Tournoi Edition 2025</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <Suspense fallback={<Skeleton />}>
          <div className="p-5 h-full">{children}</div>
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
});
