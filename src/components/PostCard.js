import React from "react";
import Link from "next/link";
import loadable from '@loadable/component'

const ArticuloAutor = loadable (() => import ('./elements/ArticuloAutor'))

function PostCard(props) {
  const fechaFormateada = new Date(props.fecha).toLocaleDateString()
  return (
    <div className="rounded-md shadow-md">
      {/* Imagen */}
      <Link href={`/post/${props.id}`}>
        <figure >
          <img className="rounded-t-md" src={props.imagen} alt="Placeholder image" />
        </figure>
      </Link>
      {/* Contenido */}
      <div className="m-6">
        {/*Título*/}
        <Link href={`/post/${props.id}`}>
          <h3 className="text-2xl text-gray-800">{props.titulo}</h3>
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
