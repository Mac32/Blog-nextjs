import Head from 'next/head'
// import db from '../firestoreConfig/FirestoreConfig'
// import { collection, getDocs } from 'firebase/firestore/lite'
import dynamic from 'next/dynamic'
import dbConnect from '../lib/mongoConect'
import Post from '../models/Post'

const Section = dynamic(import('../components/Section'))
const Hero = dynamic(import('../components/Hero'))

export default function App ({ datosPublicaciones }) {
  return (
    <>
      <Head>
        <meta name='google-site-verification' content={process.env.GOOGLE_SITE_VERIFICATION} />
        <meta name='description' content='Blog de desarrollo web donde encontraras articulos sobre tecnologias como HTML, CSS, JavaScript, frameworks y mas sobre el mundo de la tecnoligia' />
        <title>Blog - Código Fuente</title>
        <link rel='icon' href='/logo.ico' />
        <script
          type='application/ld+json' dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {

                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                '@id': 'https://codigofuente.vercel.app',
                headline: 'CodigoFuente - Blog de desarrollo y Programacion',
                description: 'Blog sobre desarrollo tanto de web como nativo, con explicaciones simples y faciles de entender',
                image: [
                  'https://i.ibb.co/FJh5fnW/Logo-completo-min.png'
                ]
              }
            )
          }}
        />
      </Head>

      <Hero />
      <Section datosPublicaciones={datosPublicaciones} />

    </>
  )
}

export async function getStaticProps () {
  await dbConnect()
  const result = await Post.find({})

  const datosPublicaciones = result.map((doc) => {
    const post = doc.toObject()
    post._id = post._id.toString()
    post.date = JSON.stringify(post.date)
    return post
  })

  return {
    props: {
      datosPublicaciones
    },
    revalidate: 10
  }
}

/* export async function getStaticProps () {
  const datosPublicaciones = []

  await getDocs(collection(db, 'fl_content')).then(
    (publicaciones) => {
      publicaciones.docs.map((doc) => {
        if (doc.data()._fl_meta_.schema === 'publicacion' && doc.data()._fl_meta_.status === 'publish') {
          datosPublicaciones.push({
            id: doc.id,
            titulo: doc.data().titulo,
            resumen: doc.data().resumen,
            imagen: doc.data().urlImage,
            autor: doc.data().autor,
            fecha: doc.data().fecha,
            tags: doc.data().tags
          })
        }
      })
    })

  return {
    props: {
      datosPublicaciones
    },
    revalidate: 1
  }
} */
