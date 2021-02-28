import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'

const ArticuloAutor = dynamic(import ('./elements/ArticuloAutor'))
const H3 = dynamic (import ('./elements/H3'))
const P = dynamic (import ('./elements/P'))

function PostCard(props) {
  const fechaFormateada = new Date(props.fecha).toLocaleDateString()
  return (
    <div className="rounded-md shadow-md">
      {/* Imagen */}
      <Link href={`/post/${props.id}`}>
        <figure className="rounded-t-md bg-center bg-cover cursor-pointer h-40" style={{ backgroundImage: 'url(' + props.imagen + ')', }}>
          <img className="hidden" src={props.imagen} alt="Placeholder image" />
        </figure>
      </Link>
      {/* Contenido */}
      <div className="m-6">
        {/*Título*/}
        <Link href={`/post/${props.id}`}>
          <H3>{props.titulo}</H3>
        </Link>
        <hr />
        {/* Resumen */}
        <P>
          {props.resumen}
        </P>
        {/* Autor */}
        <ArticuloAutor autor={props.autor} subtitulo={fechaFormateada} />
      </div>
    </div>
  );
}

export default PostCard;
