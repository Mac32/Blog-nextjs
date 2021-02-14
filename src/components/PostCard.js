import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'

const ArticuloAutor = dynamic(import ('./elements/ArticuloAutor'))

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
          <h3 className="text-2xl text-gray-800 cursor-pointer">{props.titulo}</h3>
        </Link>
        <hr />
        {/* Resumen */}
        <div className="my-3 text-gray-700">
          {props.resumen}
        </div>
        {/* Autor */}
        <ArticuloAutor autor={props.autor} subtitulo={fechaFormateada} />
      </div>
    </div>
  );
}

export default PostCard;
