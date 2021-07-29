import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
import {useEffect} from 'react'

const ArticuloAutor = dynamic(import ('./ArticuloAutor'))
const H3 = dynamic (import ('./elements/H3'))
const P = dynamic (import ('./elements/P'))
const IconTag = dynamic (import('./elements/IconoEtiqueta'))

function PostCard(props) {

  useEffect(() => {

  }, [props]);

  const fechaFormateada = new Date(props.fecha).toLocaleDateString()
  return (
    <div className="rounded-md shadow-md max-w-sm m-auto  md:m-3 ">
      {/* Imagen */}
      <Link href={`/post/${props.id}`}>
        <figure className="rounded-t-md bg-center bg-cover cursor-pointer h-40" style={{ backgroundImage: 'url(' + props.imagen + ')', }}>
          <img className="hidden" src={props.imagen} alt="Placeholder image" />
        </figure>
      </Link>
      {/* Contenido */}
      <div className="m-6">
        {/*Título*/}
          <H3>
	    <Link href={`/post/${props.id}`}>
	       {props.titulo}
	     </Link>
         </H3>
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
