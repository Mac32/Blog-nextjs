import React from 'react'
import dynamic from 'next/dynamic'

const PostCard = dynamic(import('./PostCard'))
const H2 = dynamic(import('./elements/H2'))

const SectionPost = ({ datos }) => {
  return (
    <article className='
     container
     mx-auto
    md:px-10
    rounded-lg
    shadow-md mb-6'
    >
      <H2 texto='Publicaciones' />
      <div className='
       flex flex-col md:flex-row '
      >
        {
          datos && datos !== undefined
            ? datos.map((publicacion, key) => (
              <div className='mt-6 ' key={key}>
                <PostCard
                  id={publicacion.id}
                  titulo={publicacion.titulo}
                  resumen={publicacion.resumen}
                  imagen={publicacion.imagen}
                  autor={publicacion.autor}
                  fecha={publicacion.fecha}
                  tags={publicacion.tags}
                />
              </div>
            ))
            : null
}
      </div>
    </article>
  )
}

export default SectionPost
