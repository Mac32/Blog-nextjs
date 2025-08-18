import React from 'react'

import PostCard from './PostCard'
import H2 from './elements/H2'

const SectionPost = ({ publicaciones }) => {
  return (
    <article className='
     container
     mx-auto
    md:px-10
    rounded-lg
    shadow-md mb-6'
    >
      <H2>Publicaciones</H2>
      <div className='
       grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        {
          publicaciones && publicaciones !== undefined
            ? publicaciones.map((publicacion, key) => (
              <div className='mt-6 ' key={key}>
                <PostCard publicacion={publicacion} />
              </div>
            ))
            : null
}
      </div>
    </article>
  )
}

export default SectionPost
