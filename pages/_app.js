import Head from 'next/head'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

const Header = dynamic(import('../components/Header'))
const Footer = dynamic(import('../components/Footer'))

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
