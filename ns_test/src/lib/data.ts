import useSWR, {
  Key,
  SWRConfiguration,
  KeyedMutator,
  useSWRConfig,
  Cache,
} from 'swr'

import api from '../lib/api'

type Options = SWRConfiguration
type ExtendedCache = Cache & { clear: () => void }

export function useCache() {
  const { cache } = useSWRConfig()

  return { cache } as { cache: ExtendedCache }
}

export function fetcher(path: string) {
  return api.get(path)
}

export function useRemoteData<T>(key: Key, options?: Options) {
  const { data, isValidating, error, mutate } = useSWR<T>(key, {
    fetcher,
    errorRetryCount: 1,
    ...options,
  })

  return {
    content: data || null,
    isValidating,
    error,
    mutate,
  }
}

type CommonOutput = {
  isReady: boolean
  isEmpty: boolean
  isValidating: boolean
  mutate: KeyedMutator<any>
}

export type DetailsOutput<T> = CommonOutput & {
  details: T | void
}
