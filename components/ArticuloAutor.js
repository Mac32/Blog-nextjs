import dynamic from 'next/dynamic'
import Fecha from '../components/elements/Fecha'

const Avatar = dynamic(import('./elements/Avatar'))
export default function ArticuloAutor ({ autor, subtitulo = '' }) {
  return (
    <div className='flex flex-row flex-wrap py-6'>
      <Avatar />
      <div className='ml-4 flex flex-col'>
        <p className='text-gray-800'>{autor}</p>
        <Fecha fecha={subtitulo} />
      </div>
    </div>
  )
}
