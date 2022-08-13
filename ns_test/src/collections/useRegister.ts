import { useNavigate } from 'react-router-dom'

import api from '../lib/api'

export type RegisterWithPayload = {
  username: string
  password: string
}

const ENDPOINT = '/register'

export function useRegister() {
  const navigate = useNavigate()

  return (data: RegisterWithPayload) => {
    return api
      .post(ENDPOINT, data)
      .then(() => navigate('/login'))
      .catch(error => console.log(error))
  }
}
