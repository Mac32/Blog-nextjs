'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import PostCategory from './elements/PostCategory'

import ArticuloAutor from './ArticuloAutor'
import H3 from './elements/H3'
import P from './elements/P'

function PostCard ({ publicacion }) {
  useEffect(() => {
  }, [publicacion])
  return (
    <div className='rounded-md shadow-md max-w-sm m-auto md:m-3 '>
      <Link href={`/post/${publicacion.postPath}`}>
        <figure className='rounded-t-md bg-center bg-cover cursor-pointer h-40' style={{ backgroundImage: 'url(' + publicacion.urlImage + ')' }}>
          <img className='hidden' src={publicacion.urlImage} alt='Placeholder image' />
        </figure>
      </Link>
      <div className='m-6'>
        <H3>
          <Link href={`/post/${publicacion.postPath}`}>
            {publicacion.title}
          </Link>
        </H3>
        <hr />
        <P>
          <Link href={`/post/${publicacion.postPath}`}>
            {publicacion.summary.substring(0, 220) + '...'}
          </Link>
        </P>
        <P><span className='font-semibold'>Categoría:</span></P>
        <PostCategory category={publicacion.category}/>
        <ArticuloAutor userName={publicacion.author.userName} autor={publicacion.author} fecha={publicacion.date} />
      </div>
    </div>
  )
}

export default PostCard
