import { Link } from 'react-router-dom'

import { useRegister } from '../collections/useRegister'

import Form from '../components/Form'

const Register = () => {
  const register = useRegister()

  return (
    <Form
      api={register}
      title="Register"
      link={<Link to="/login">{'Already have an account? Sign in'}</Link>}
    />
  )
}

export default Register
