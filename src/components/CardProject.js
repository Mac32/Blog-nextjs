import dynamic from 'next/dynamic'

const H3 = dynamic(import('./elements/H3'))
const P = dynamic(import('./elements/P'))

export default function CardProject({ imagen, titulo, descripcion, ruta}) {
  return (
    <>
      <div className="
      flex 
      max-w-sm 
      m-auto 
      md:m-3 
      mt-3 
      flex-col 
      md:flex-row 
      rounded-md 
      shadow-md">
        <a href={ruta} target="_blank">
          <figure>
            <img className="md:h-40 md:rounded-l-md cursor-pointer" src={imagen} alt="Pagina de inicio de blog codigofuente.vercel.app" />
          </figure>
        </a>
        {/* Contenido */}
        <div className="m-4 md:m-3">
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
