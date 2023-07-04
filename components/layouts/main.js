import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../pc-loader'

const PC = dynamic(() => import('../pc'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=2" />
        <meta name="description" content="Mridul's homepage" />
        <meta name="author" content="Mridul Sharma" />
        <meta name="author" content="mridul" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Mridul Sharma" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mriiidullll" />
        <meta name="twitter:creator" content="@mriiidullll" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Mridul Sharma" />
        <meta name="og:title" content="Mridul Sharma" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Mridul Sharma - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <PC />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
