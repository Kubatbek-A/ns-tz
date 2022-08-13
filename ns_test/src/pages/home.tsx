import { useProfile, User } from '../collections/useProfile'

import ProfileCard from '../components/Card'

const Home = () => {
  const { details: user } = useProfile()

  return (
    <div>
      <h1>Home</h1>

      <ProfileCard user={user as User} />
    </div>
  )
}

export default Home
