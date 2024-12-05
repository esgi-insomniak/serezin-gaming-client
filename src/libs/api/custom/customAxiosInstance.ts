import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const custom_axios = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

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
    cancelToken: source.token,
    withCredentials: true
  })
    .then((response: AxiosResponse<T>) => Promise.resolve(response))
    .catch((error: AxiosError) => Promise.reject(error));

  promise.cancel = () => {
    source.cancel('Operation canceled');
  };

  return promise;
};

export default customAxiosInstance;

export type ErrorType<Error> = AxiosError<Error>;
