import React from "react";
import dynamic from 'next/dynamic'

const ArticuloAutor = dynamic(import ('../components/elements/ArticuloAutor'))

export default function PostFooter({autor}) {
  return (
    <div className="ml-9 ">
      <ArticuloAutor autor={autor} subtitulo="Fundador del Blog"/>
    </div>
  );
}
