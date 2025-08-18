import imageLogo from '@/../public/LogoComprimido.png'
import Image from 'next/image'

const Logo = ({ alt = 'Imagen', height = '100', width = '100' }) => {
  return (
    <Image
      className='rounded-full'
      src={imageLogo}
      blur='blur'
      height={height}
      width={width}
      alt={alt}
    />
  )
}

export default Logo
