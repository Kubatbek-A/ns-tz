import jwtDecode from 'jwt-decode'

import { getToken } from './token'

const isUserAuthenticated = () => {
  const token = getToken()
  if (!token) return false

  const decoded: any = jwtDecode(token)

  const currentTime = Date.now() / 1000
  if (decoded.exp > currentTime) {
    return true
  } else {
    console.warn('access token expired')
    return false
  }
}

export { isUserAuthenticated }
