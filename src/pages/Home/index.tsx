import { Stack, Typography } from '@mui/material';
import LoginForm from '../../forms/LoginForm';

const Home = () => {
  //   if (Math.random() * 10 > 5) {
  //     throw new Error('Error message');
  //   }

  return (
    <Stack>
      <Typography variant="h1" component="h2">
        Home
      </Typography>

      <LoginForm></LoginForm>
    </Stack>
  );
};

export default Home;
