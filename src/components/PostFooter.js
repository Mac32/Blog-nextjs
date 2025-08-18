import React from 'react'
import PostCategory from '@/components/elements/PostCategory'

import ArticuloAutorPost from '@/components/ArticuloAutorPost'
import SectionTags from '@/components/SectionTags'
import H3 from '@/components/elements/H3'

export default function PostFooter({ autor, tags, category }) {
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
