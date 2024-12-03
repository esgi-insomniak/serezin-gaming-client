import { ClientRoutes, getPath, RouteOptions } from "@/router";
import { useNavigate } from "react-router-dom";

export function useHandleRedirection() {
  const navigate = useNavigate();
  function redirect(path: ClientRoutes, params?: RouteOptions) {
    navigate(getPath(path), { state: params });
  }
  return { redirect };
}
