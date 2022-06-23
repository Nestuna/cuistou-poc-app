import { useEffect , useState } from 'react'
import { Container } from '@mui/material'
import Navbar from '../components/navbar'


import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [user , setUser ] = useState(null)

  useEffect(() => {
    let user = window.sessionStorage.getItem('user')
    if(!user && router.pathname !== '/signup'){
      router.push('/signin')
    }
    else{
      setUser(JSON.parse(user)[0])
    }
  } , [])

  return (
    <>
      <Navbar/>
      <Container maxWidth="xl" sx={{ mt: '4em', p: '1em', display: 'flex', bgcolor: 'var(--background)', minHeight: '100vh' }}>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
