import Head from "next/head";
import Home from "./Home.js";

export default function App() {
  return (
    <div>
      <Head>
      <meta name="google-site-verification" content="faPHg-GaQx67jTHLz60EFWUQoeoHdXJOaeGYR6q2Dm8" />
        <title>Blog - Código Fuente</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Home />
    </div>
  );
}
