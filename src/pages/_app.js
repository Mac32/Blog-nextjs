import '../styles/globals.sass';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'


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
