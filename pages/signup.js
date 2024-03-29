import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'

export default function SignUp() {
  const [errorMessage, setErrorMessage] = React.useState('');
  const {register, handleSubmit} = useForm()
  const router = useRouter()


  const onSubmit = (data) =>
   {

    fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: {
                    firstname : data.firstName,
                    lastname : data.lastName,
                    email: data.email,
                    password : data.password
                }
            })
        }).then((res) => {
          if (res.status === 200) {
            router.push('/recipes')
          } else {
           setErrorMessage('Error on sign up. Please try again.')
          }
        })

  }

  return (
      <Container
        component='main'
        maxWidth='xs'
        style={{ boxShadow: '0 8px 20px #8fa8bf59', padding: '32px' }}
      >
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
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  autoComplete='given-name'
                  name='firstName'
                  fullWidth
                  id='firstName'
                  label='Firstname'
                  autoFocus
                  {...register("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Prenoms'
                  name='lastName'
                  autoComplete='family-name'
                  {...register("lastName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Votre mail'
                  name='email'
                  autoComplete='email'
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  {...register("password")}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              onSubmit={handleSubmit(onSubmit)}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              color='success'
            >
              Sign up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/signin' variant='body2'>
                  Already an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          { errorMessage }
        </Box>
      </Container>
  )
}
