import { useNavigate } from 'react-router-dom';
import { ClientRoutes, getPath } from '@/router';

export function useHandleRedirection() {
  const navigate = useNavigate();

  function redirect(
    route: ClientRoutes,
    options: {
      params?: Record<string, string>;
      queryParams?: Record<string, string | number | boolean>;
      replace?: boolean;
    } = {}
  ) {
    const path = getPath(route, options);

    navigate(path, { replace: options.replace });
  }

  return { redirect };
}
