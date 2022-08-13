import { useRemoteData, fetcher, DetailsOutput } from '../lib/data'

export type User = {
  id: number
  username: string
  about: string
  avatar: string
}

type ResponseBody = {
  data: { data: User }
}

export const ENDPOINT = '/about'

export function useProfile(): DetailsOutput<User> {
  const { content, error, mutate, isValidating } = useRemoteData<ResponseBody>(
    ENDPOINT,
    {
      fetcher,
      revalidateOnFocus: false,
    },
  )

  return {
    isReady: Boolean(content || error),
    isEmpty: !content,
    isValidating,
    details: content?.data.data,
    mutate,
  }
}
