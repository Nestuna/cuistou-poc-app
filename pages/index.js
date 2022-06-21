import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box } from '@mui/system'

export default function Home() {
  return (
    <>
      <Box className={ styles.main } sx={{background: 'var(--background)'}}>
        <Head>
          <title>Cuistou</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Cuistou for you" />
        </Head>
      </Box>
    </>
  )
}