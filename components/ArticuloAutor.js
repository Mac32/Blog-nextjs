import dynamic from 'next/dynamic'
import Link from 'next/link'
import Fecha from '../components/elements/Fecha'

const Avatar = dynamic(import('./elements/Avatar'))

export default function ArticuloAutor ({ userName, autor, fecha }) {
  const { firstName, lastName } = autor
  return (
    <div className='flex flex-row flex-wrap py-6'>
      <Avatar userTwitter={autor.userTwitter} userName={userName} />
      <div className='ml-4 flex flex-col'>
        <Link href={`/about/${userName}`}>
          <a className='text-gray-800'>{`${firstName} ${lastName}`}</a>
        </Link>
        <Fecha fecha={fecha} />
      </div>
    </div>
  )
}
