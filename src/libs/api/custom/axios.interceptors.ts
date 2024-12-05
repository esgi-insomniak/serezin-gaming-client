import { custom_axios } from '@/libs/api';

export function initAxiosInterceptors() {
  custom_axios.defaults.withCredentials = true;

  const isMock = import.meta.env.VITE_MOCKS === 'true';

  custom_axios.interceptors.request.use(
    (config) => {
      config.baseURL = isMock
        ? import.meta.env.VITE_API_MOCK_URL
        : import.meta.env.VITE_API_BASE_URL;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
