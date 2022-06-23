import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'

export default function SignIn() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = React.useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: data.get('email'),
          password: data.get('password'),
        }
      })
    }).then(async (res) => {
      let data = await res.json()
      if (res.status === 200) {
        window.sessionStorage.setItem('user' , JSON.stringify(data.user))
        router.push('/recipes')
      } else {
       setErrorMessage('Password is incorrect or user does\'nt exist !')
      }
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="success"
          >
            Connect
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"No account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      <Typography sx={{ color: 'red' }}>
        { errorMessage }
      </Typography>
      </Box>
    </Container>
  );
}