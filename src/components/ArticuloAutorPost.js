import Avatar from '@/components/elements/Avatar'
import H3 from '@/components/elements/H3'

export default function ArticuloAutorPost ({ autor }) {
  return (
    <div>
      <H3>Autor</H3>
      <hr />
      <div className='flex flex-row flex-wrap py-6'>
        <Avatar userName={autor.userName} urlImage={autor.urlImage} />
        <div className='ml-4 flex self-center flex-col'>
          <p className='text-gray-800'>{`${autor.firstName} ${autor.lastName}`}</p>
        </div>
      </div>
    </div>
  )
}
