import '../styles/globals.css';
import loadable from '@loadable/component'

const Header = loadable (() => import('../components/Header'))
const Footer = loadable (() => import('../components/Footer'))

function MyApp({ Component, pageProps }) {
  return (
    <div className="has-navbar-fixed-top">
      <Header />
      <hr />
      <hr />
      <Component {...pageProps} />
      <hr />
      <hr />
      <Footer />
    </div>
  )
}

export default MyApp;
