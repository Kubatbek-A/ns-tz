import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  Method as AxiosMethod,
} from 'axios'

import { getToken } from './token'

type Payload = Record<string, unknown>

type Url = string

export type Method = Extract<AxiosMethod, 'get' | 'post'>

type RequesterConfig = Pick<AxiosRequestConfig, 'withCredentials'> & {
  baseURL: AxiosRequestConfig['baseURL']
}

class Requester {
  constructor({ ...config }: RequesterConfig) {
    this.root = axios.create(config)
  }

  post(url: Url, payload: Payload = {}, config: AxiosRequestConfig = {}) {
    return this.request('post', url, { ...config, data: this.data(payload) })
  }

  get(url: Url, payload: Payload = {}, config: AxiosRequestConfig = {}) {
    return this.request('get', url, {
      ...config,
      params: payload,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
  }

  request(method: Method, url: Url, config: AxiosRequestConfig) {
    return this.root.request({
      ...config,
      method,
      url,
    })
  }

  private root: AxiosInstance

  private data(payload: Payload = {}): Payload {
    return payload || {}
  }
}

export default Requester
