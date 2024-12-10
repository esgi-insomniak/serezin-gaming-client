import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../ui/breadcrumb';
import { useBreadcrumbStore } from '@/libs/stores';

function Breadcrumbs() {
  const location = useLocation();
  const { getBreadcrumbs } = useBreadcrumbStore();

  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.path}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
