import React, { useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ArticuloAutor = dynamic(import('./ArticuloAutor'))
const H3 = dynamic(import('./elements/H3'))
const P = dynamic(import('./elements/P'))

function PostCard ({ publicacion }) {
  useEffect(() => {

  }, [publicacion])

  return (
    <div className='rounded-md shadow-md max-w-sm m-auto  md:m-3 '>
      <Link href={`/post/${publicacion.postPath}`}>
        <a area-label={publicacion.imageDescription}>
          <figure className='rounded-t-md bg-center bg-cover cursor-pointer h-40' style={{ backgroundImage: 'url(' + publicacion.urlImage + ')' }}>
            <img className='hidden' src={publicacion.urlImage} alt='Placeholder image' />
          </figure>
        </a>
      </Link>
      <div className='m-6'>
        <H3>
          <Link href={`/post/${publicacion.postPath}`}>
            <a>
              {publicacion.title}
            </a>
          </Link>
        </H3>
        <hr />
        <P>
          <Link href={`/post/${publicacion.postPath}`}>
            <a>
              {publicacion.summary.substring(0, 220) + '...'}
            </a>
          </Link>
        </P>
        <ArticuloAutor userName={publicacion.author.userName} autor={publicacion.author} fecha={publicacion.date} />
      </div>
    </div>
  )
}

export default PostCard
