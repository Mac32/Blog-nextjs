import Head from 'next/head'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header'))
const Footer = dynamic(import('../components/Footer'))

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="has-navbar-fixed-top">
    <Head>

    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>*/}
    <title>Blog - Código Fuente</title>
    <link rel="icon" href="/logo.ico" />
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

export default MyApp;
