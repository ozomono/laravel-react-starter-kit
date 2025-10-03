import type { AxiosResponse } from 'axios';

export function unwrapData<T>(promise: Promise<AxiosResponse<{ data: T }>>): Promise<T> {
  return promise.then(res => res.data.data);
}

export function unwrapRoot<T>(promise: Promise<AxiosResponse<T>>): Promise<T> {
  return promise.then((res) => res.data)
}