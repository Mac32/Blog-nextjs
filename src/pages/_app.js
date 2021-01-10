import '../styles/globals.sass';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </div>
  )
}

export default MyApp;
