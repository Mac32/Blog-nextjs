import Head from "next/head";
import db from "../firestoreConfig/FirestoreConfig"
import dynamic from "next/dynamic"

const Section = dynamic(import('../components/Section'))
const Hero = dynamic(import('../components/Hero'))

export default function App({datosPublicaciones}) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="faPHg-GaQx67jTHLz60EFWUQoeoHdXJOaeGYR6q2Dm8" />
	<meta name="description" content="Blog de desarrollo web con informacion precisa y detallada por programador web en los diferentes lenguajes y tecnologias disponibles (Javascript, Java, HTML CSS, ReacJS, Next)"/>
        <title>Blog - Código Fuente</title>
        <link rel="icon" href="/logo.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {

              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "@id": "https://codigofuente.vercel.app/About",
              "headline": "Blog de desarrollo y Pramacion",
              "description": "Blog sobre desarrollo tanto de web como nativo, con explicaciones simples y faciles de entender",
              "image": [
                "https://i.ibb.co/FJh5fnW/Logo-completo-min.png"
              ]
            }
          )
        }}/>
      </Head>

    <Hero />
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
	      if(doc.data()._fl_meta_.schema === "publicacion" && doc.data()._fl_meta_.status === "publish"){
		datosPublicaciones.push({
		  id: doc.id,
		  titulo: doc.data().titulo,
		  resumen: doc.data().resumen,
		  imagen: doc.data().urlImage,
		  autor: doc.data().autor,
		  fecha: doc.data().fecha,
      tags: doc.data().tags,
		})
	      }
	      

            })
        })

  return{
    props: {
    	datosPublicaciones,
    },
    revalidate: 1,
  }
}
