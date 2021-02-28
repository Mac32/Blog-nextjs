import React from "react";
import dynamic from 'next/dynamic'

const ArticuloAutor = dynamic(import('../components/elements/ArticuloAutor'))
const SectionTags = dynamic(import('../components/SectionTags'))

export default function PostFooter({ autor, tags }) {
  return (
    <div className="m-6 flex lg:justify-between lg:flex-row flex-col">
      <ArticuloAutor autor={autor} subtitulo="Fundador del Blog" />
      <SectionTags tags={tags}/>
    </div>
  );
}
