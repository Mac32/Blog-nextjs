import Head from 'next/head'
import dynamic from 'next/dynamic'
import Usuario from 'models/Usuario'
import dbConnect from 'lib/mongoConect'
import { useEffect, useState } from 'react'

const SectionSobreMi = dynamic(import('components/SectionSobreMi'))

export default function About ({ user }) {
  const [usuario, setUsuario] = useState({})
  useEffect(() => {
    setUsuario(user)
  }, [user])
  return (
    <>
      <Head>
        <meta name='description' content='Alberth Bompart desarrollador web front end y programador. Aqui esta un poco de informacion sobre el y las tecnologias que domina' />
        <script
          type='application/ld+json' dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {

                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                '@id': `elblogdemalbo.com/about/${usuario.userTwitter}`,
                headline: `El blog de malbo - ${usuario.firstName} ${usuario.lastName}`,
                description: `${usuario.description}`,
                image: [
                `https://unavatar.io/twitter/${usuario.userTwitter}`
                ]
              }
            )
          }}
        />
      </Head>
      <div>
        <SectionSobreMi userTwitter={usuario.userTwitter} informacion={usuario.description} />
      </div>
    </>
  )
}
export async function getStaticPaths () {
  let paths
  try {
    await dbConnect()
    const usuarios = await Usuario.find({}).select('userName')
    paths = usuarios.map(usuario => {
      return {
        params: {
          userName: usuario.toObject().userName
        }
      }
    })
  } catch (error) {
    console.log('Error en getStaticPaths', error)
  }
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  let usuario
  const { userName } = params
  try {
    await dbConnect()
    const respuesta = await Usuario.findOne({ userName }).select('userName firstName lastName description userInstagram userTwitter userLinkedIn')
    usuario = respuesta.toObject()
    usuario._id = usuario._id.toString()
  } catch (error) {
    console.log('Error en getStaticPaths', error)
  }

  return {
    props: {
      user: usuario
    },
    revalidate: 10
  }
}
