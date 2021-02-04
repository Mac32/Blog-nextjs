import React from "react";
import Link from "next/link";

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
        <div className="flex flex-row flex-wrap py-6">
          <Link href="/">
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/N3d97xK/foto-perfil-min.jpg" alt="" />
            </button>
          </Link>
          <div className="ml-4" >
            <p className="text-gray-800">{props.autor}</p>
            {/* Fecha */}
            <em><time className="text-gray-700 " dateTime={fechaFormateada}>{fechaFormateada}</time></em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
