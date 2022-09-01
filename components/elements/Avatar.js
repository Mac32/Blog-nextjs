import Link from 'next/link'
import Image from 'next/image'

export default function Avatar ({ userTwitter, userName, className = '', alt = 'Imagen', width = 50, height = 50 }) {
  if (userTwitter === '' || userTwitter === undefined) {
    userTwitter = 'xxx'
  }

  return (
    <Link href={`/about/${userName}`}>
      <a className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ' aria-haspopup='true'>
        <Image
          className={'h-12 w-12 rounded-full ' + className}
          src={`https://unavatar.io/twitter/${userTwitter}`}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
    </Link>
  )
}
