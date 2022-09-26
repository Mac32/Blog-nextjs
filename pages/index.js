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
        <meta name='description' content='Blog de desarrollo web donde encontraras articulos sobre tecnologias como HTML, CSS, JavaScript, frameworks y mas sobre el mundo de la tecnoligia' />
        <title>Blog - El blog de Malbo</title>
        <link rel='icon' href='/logo.ico' />
        <script
          type='application/ld+json' dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                '@id': 'https://elblogdemalbo.com',
                headline: 'El blog de malbo - Blog de desarrollo y Programacion',
                description: 'Blog sobre desarrollo tanto de web como nativo, con explicaciones simples y faciles de entender',
                image: [
                  'https://i.ibb.co/BPTrBYz/Logo-Comprimido.png'
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
  let result
  try {
    await dbConnect()
    result = await Post.find({ visibility: 'Public' }).select({
      visibility: 1,
      title: 1,
      postPath: 1,
      author: 1,
      date: 1,
      summary: 1,
      urlImage: 1,
      imageDescription: 1
    }).populate('author', 'userName firstName lastName userTwitter').exec()
  } catch (error) {
    console.log('A ocurrido un error', error)
  }
  const publicaciones = result.map((doc) => {
    const post = doc.toObject()
    post._id = post._id.toString()
    post.author._id = post.author._id.toString()
    post.date = JSON.stringify(post.date)
    return post
  }).reverse()

  return {
    props: {
      publicaciones
    },
    revalidate: 10
  }
}
