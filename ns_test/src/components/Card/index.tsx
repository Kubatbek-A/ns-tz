import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'

import { User } from '../../collections/useProfile'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../../lib/token'

type Props = {
  user: User
}

const ProfileCard = ({ user }: Props) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user?.avatar}
        alt="user avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user?.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user?.about ? user?.about : 'No description'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleLogOut} color="error" size="small">
          Log out
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProfileCard
