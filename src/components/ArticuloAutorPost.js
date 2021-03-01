import dynamic from 'next/dynamic'

const H3 = dynamic(import('./elements/H3'))
const ArticuloAutor = dynamic(import('./ArticuloAutor'))

export default function ArticuloAutorPost({autor, subtitulo}) {
  return (
    <div>
      <H3>Autor</H3>
      <hr />
      <ArticuloAutor autor={autor} subtitulo="Fundador del Blog"/>
    </div >
  )
}