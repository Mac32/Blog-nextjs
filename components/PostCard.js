import React, { useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ArticuloAutor = dynamic(import('./ArticuloAutor'))
const H3 = dynamic(import('./elements/H3'))
const P = dynamic(import('./elements/P'))

function PostCard (props) {
  useEffect(() => {

  }, [props])

  return (
    <div className='rounded-md shadow-md max-w-sm m-auto  md:m-3 '>
      <Link href={`/post/${props.postPath}`}>
        <a>
          <figure className='rounded-t-md bg-center bg-cover cursor-pointer h-40' style={{ backgroundImage: 'url(' + props.imagen + ')' }}>
            <img className='hidden' src={props.imagen} alt='Placeholder image' />
          </figure>
        </a>
      </Link>
      <div className='m-6'>
        <H3>
          <Link href={`/post/${props.postPath}`}>
            <a>
              {props.titulo}
            </a>
          </Link>
        </H3>
        <hr />
        <P>
          <Link href={`/post/${props.postPath}`}>
            <a>
              {props.resumen}
            </a>
          </Link>
        </P>
        <Link href='/About'>
          <a>
            <ArticuloAutor autor={props.autor} subtitulo={props.fecha} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
