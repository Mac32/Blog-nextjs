import Head from 'next/head'
import dynamic from 'next/dynamic'
import dbConnect from 'lib/mongoConect'
import Post from 'models/Post'

const Section = dynamic(import('../components/Section'))
const Hero = dynamic(import('../components/Hero'))

export default function App ({ publicaciones }) {
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
      <Section publicaciones={publicaciones} />

    </>
  )
}

export async function getStaticProps () {
  await dbConnect()
  const result = await Post.find({}).select({
    visibility: 1,
    title: 1,
    postPath: 1,
    author: 1,
    date: 1,
    summary: 1,
    urlImage: 1,
    imageDescription: 1
  }).populate('author', 'userName firstName lastName userTwitter').exec()

  const publicaciones = result.map((doc) => {
    const post = doc.toObject()
    post._id = post._id.toString()
    post.author._id = post.author._id.toString()
    post.date = JSON.stringify(post.date)
    return post
  })

  return {
    props: {
      publicaciones
    },
    revalidate: 10
  }
}
