import { useNavigate } from 'react-router-dom'

import api from '../lib/api'
import { setToken } from '../lib/token'

export type LoginPayload = {
  username: string
  password: string
}

const ENDPOINT = '/login'

export function useLogin() {
  const navigate = useNavigate()

  return (data: LoginPayload) => {
    return api
      .post(ENDPOINT, data)
      .then(response => {
        setToken(response.data.token)
        navigate('/')
      })
      .catch(error => console.log(error))
  }
}
