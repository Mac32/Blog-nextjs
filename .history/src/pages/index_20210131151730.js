import Head from "next/head";
import Home from "./Home.js";

export default function App() {
  return (
    <div>
      <Head>
        <title>Blog - Código Fuente</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Home />
    </div>
  );
}
