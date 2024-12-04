import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const custom_axios = axios.create({ baseURL: '' });

interface CustomPromise<T> extends Promise<AxiosResponse<T>> {
  cancel?: () => void;
}

export const customAxiosInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): CustomPromise<T> => {
  const source = axios.CancelToken.source();
  const promise: CustomPromise<T> = custom_axios({
    ...config,
    ...options,
    cancelToken: source.token
  })
    .then((response: AxiosResponse<T>) => Promise.resolve(response))
    .catch((error: AxiosError) => Promise.reject(error));

  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export default customAxiosInstance;

export type ErrorType<Error> = AxiosError<Error>;
