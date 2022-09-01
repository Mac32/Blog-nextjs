import dynamic from 'next/dynamic'

const Avatar = dynamic(import('components/elements/Avatar'))
const H2 = dynamic(import('components/elements/H2'))

export default function SectionSobreMi ({ userTwitter, informacion }) {
  return (
    <div className='
    m-4
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4'
    >
      <figure className='rounded-md p-3'>
        <Avatar userTwitter={userTwitter} width={500} height={500} alt='Imagen de perfil' className='w-3/4 m-auto' />
      </figure>
      <div className='mx-7 lg:col-span-3'>
        <H2 texto='Sobre Mi' />
        <p className='text-gray-800 align pt-4'>
          {informacion}
        </p>
      </div>
    </div>
  )
}
