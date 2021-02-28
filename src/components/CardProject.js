import dynamic from 'next/dynamic'
import Link from 'next/link'

const H3 = dynamic(import('./elements/H3'))
const P = dynamic(import('./elements/P'))

export default function CardProject({ imagen, titulo, descripcion, ruta}) {
  return (
    <>
      <div className="grid grid-cols-2 rounded-md shadow-md">
        <a href={ruta}>
          <figure>
            <img className="h-40 rounded-l-md cursor-pointer" src={imagen} alt="Pagina de inicio de blog codigofuente.vercel.app" />
          </figure>
        </a>
        <div className="m-6">
          <a href={ruta} target="_blank">
            <H3>{titulo}</H3>
          </a>
          <hr />
          <P>{descripcion}</P>
        </div>
      </div>
    </>
  );
}
