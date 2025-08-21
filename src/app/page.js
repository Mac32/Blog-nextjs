import dbConnect from '@/lib/mongoConect'
import Post from '@/models/Post'

import Section from '@/components/Section'
import PanelCategory from '@/components/PanelCategory'
import Header from '@/components/Header'

// Metadata (exportada aparte pero en el mismo archivo físico)
const metadata = {
  title: 'Blog - El blog de Malbo',
  description: 'Blog de desarrollo web donde encontraras articulos sobre tecnologias como HTML, CSS, JavaScript, frameworks y mas sobre el mundo de la tecnologia',
  icons: {
    icon: '/logo.ico',
  },
  openGraph: {
    title: 'El blog de malbo - Blog de desarrollo y Programacion',
    description: 'Blog sobre desarrollo tanto de web como nativo, con explicaciones simples y faciles de entender',
    images: [
      {
        url: 'https://i.ibb.co/BPTrBYz/Logo-Comprimido.png',
        width: 800,
        height: 600,
      },
    ],
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': 'https://elblogdemalbo.com',
    headline: 'El blog de malbo - Blog de desarrollo y Programacion',
    description: 'Blog sobre desarrollo tanto de web como nativo, con explicaciones simples y faciles de entender',
    image: [
      'https://i.ibb.co/BPTrBYz/Logo-Comprimido.png'
    ]
  }
}

// Función para obtener los posts (ahora dentro del mismo archivo)
async function getPublicaciones() {
  let result
  try {
    await dbConnect()
    result = await Post.find({ visibility: 'Public' }).select({
      visibility: 1,
      title: 1,
      postPath: 1,
      author: 1,
      date: 1,
      category: 1,
      summary: 1,
      urlImage: 1,
      imageDescription: 1
    }).populate('author', 'userName firstName lastName userTwitter urlImage').exec()
  } catch (error) {
    console.log('A ocurrido un error', error)
    return []
  }

  return result.map((doc) => {
    const post = doc.toObject()
    post._id = post._id.toString()
    post.author._id = post.author._id.toString()
    post.date = post.date
    return post
  }).reverse()
}

// Componente principal de la página
export default async function HomePage() {
  const publicaciones = await getPublicaciones()

  return (
    <>
    <Header />
      <div className='flex flex-col-reverse md:flex-row'>
        <PanelCategory />
        <Section title='Publicaciones' publicaciones={publicaciones} />
      </div>
    </>
  )
}