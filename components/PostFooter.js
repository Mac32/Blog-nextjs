import React from 'react'
import dynamic from 'next/dynamic'
import PostCategory from './elements/PostCategory'

const ArticuloAutorPost = dynamic(import('./ArticuloAutorPost'))
const SectionTags = dynamic(import('../components/SectionTags'))
const H3 = dynamic(import('../components/elements/H3'))

export default function PostFooter ({ autor, tags, category }) {
  return (
    <div className='m-6 flex lg:justify-between lg:flex-row flex-col'>
      <ArticuloAutorPost autor={autor} subtitulo='Fundador del Blog' />
      <div>
        <div className='pb-3'>
          <H3>Categoria:</H3>
          <PostCategory category={category} />
        </div>
        <SectionTags tags={tags} />
      </div>
      
    </div>
  )
}
