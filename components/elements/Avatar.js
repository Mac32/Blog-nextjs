import Link from 'next/link'
import imgAvatar from 'public/image/avatar.jpg'
import Image from 'next/image'

export default function Avatar ({ className = '', alt = 'Imagen', width = 50, height = 50 }) {
  return (
    <Link href='/About'>
      <a className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ' aria-haspopup='true'>
        <Image
          className={'h-12 w-12 rounded-full ' + className}
          src={imgAvatar}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
    </Link>
  )
}
