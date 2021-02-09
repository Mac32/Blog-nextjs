import Head from "next/head";
import db from "../firestoreConfig/FirestoreConfig"
import dynamic from "next/dynamic"

const Section = dynamic(import('../components/Section'))

export default function App({datosPublicaciones}) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="faPHg-GaQx67jTHLz60EFWUQoeoHdXJOaeGYR6q2Dm8" />
        <title>Blog - Código Fuente</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
    <Section datosPublicaciones={datosPublicaciones} />
  
    </>
  );
}


export async function getStaticProps(){
  
  let datosPublicaciones = []

    await db.collection("fl_content")
      .get()
      .then(
        (publicaciones) => {
            publicaciones.docs.map((doc) => {
	      if(doc.data()._fl_meta_.schema === "publicacion"){
		datosPublicaciones.push({
		  id: doc.id,
		  titulo: doc.data().titulo,
		  resumen: doc.data().resumen,
		  imagen: doc.data().urlImage,
		  autor: doc.data().autor,
		  fecha: doc.data().fecha,
		})
	      }
	      

            })
        })

  return{
    props: {
    	datosPublicaciones,
    }
  }
}
