import React from 'react';
import dynamic from 'next/dynamic'

const Avatar = dynamic(import('./Avatar'))
const A = dynamic(import('./A'))
const H3 = dynamic(import('./H3'))
export default function ArticuloAutor({ autor, subtitulo = "" }) {
  const date_regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  return (
    <div className="flex flex-col">
    <H3>Autor</H3>
    <hr />
      <div className="flex flex-row flex-wrap py-6">

        <Avatar />
        <div className="ml-4 flex flex-col" >
          <p className="text-gray-800">{autor}</p>
          <A ruta="https://twitter.com/AlberthBompart" >@AlberthBompart</A>
          {/* Subtitulo*/}
          {
            ((date_regex.test(subtitulo))) ?
              (<em><time className="text-gray-700 " dateTime={subtitulo}>{subtitulo}</time></em>) :
              <em className="text-gray-700 ">{subtitulo}</em>}
        </div>
      </div>
    </div>
  )
}
