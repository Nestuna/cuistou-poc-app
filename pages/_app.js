import { Container } from '@mui/material'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="xl" sx={{ mt: '4em', p: '1em', display: 'flex', bgcolor: 'var(--background)', minHeight: '100vh' }}>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
