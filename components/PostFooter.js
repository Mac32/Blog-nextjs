import React from 'react'
import dynamic from 'next/dynamic'

const ArticuloAutorPost = dynamic(import('./ArticuloAutorPost'))
const SectionTags = dynamic(import('../components/SectionTags'))

export default function PostFooter ({ autor, tags }) {
  return (
    <div className='m-6 flex lg:justify-between lg:flex-row flex-col'>
      <ArticuloAutorPost autor={autor} subtitulo='Fundador del Blog' />
      <SectionTags tags={tags} />
    </div>
  )
}
