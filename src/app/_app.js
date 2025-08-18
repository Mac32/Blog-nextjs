import Head from 'next/head'
import '../styles/globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <div className='has-navbar-fixed-top'>
        <Head>
          <title>Blog - El blog de Malbo</title>
          <link rel='icon' href='/logo.ico' />
        </Head>
        <Header />
        <Component {...pageProps} />
        <hr />
        <hr />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
