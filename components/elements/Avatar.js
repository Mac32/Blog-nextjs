import Link from 'next/link'
import Image from 'next/image'

export default function Avatar ({ urlImage, userName, className = '', alt = 'Imagen', width = '50', height = '50' }) {
  if (urlImage === '' || urlImage === undefined) {
    urlImage = 'https://unavatar.io/twitter/xxx'
  }

  return (
    <Link className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ' aria-haspopup='true' href={`/about/${userName}`}>
      <Image
        className={'h-12 w-12 rounded-full ' + className}
        src={urlImage}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  )
}
