import { Cookies } from 'react-cookie'

const setToken = (token: string) => {
  const cookies = new Cookies()
  cookies.set('auth', token, { path: '/' })
}

const getToken = () => {
  const cookies = new Cookies()
  return cookies.get('auth')
}

const removeToken = () => {
  const cookies = new Cookies()
  cookies.remove('auth')
}

export { setToken, getToken, removeToken }
