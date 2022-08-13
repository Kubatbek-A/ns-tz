import { Link } from 'react-router-dom'

import { useLogin } from '../collections/useLogin'

import Form from '../components/Form'

export default function SignIn() {
  const login = useLogin()

  return (
    <Form
      api={login}
      title="Login"
      link={<Link to="/register">{"Don't have an account? Sign Up"}</Link>}
    />
  )
}
