import dynamic from 'next/dynamic'
const Avatar = dynamic(import('../components/elements/Avatar'))
const H3 = dynamic(import('./elements/H3'))

export default function ArticuloAutorPost ({ autor, subtitulo }) {
  return (
    <div>
      <H3>Autor</H3>
      <hr />
      <div className='flex flex-row flex-wrap py-6'>
        <Avatar />
        <div className='ml-4 flex flex-col'>
          <p className='text-gray-800'>{autor}</p>
        </div>
      </div>
    </div>
  )
}
