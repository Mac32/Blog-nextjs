import imageLogo from 'public/image/LogoComprimido.png'
import Image from 'next/image'

const Logo = ({alt='Imagen',className='rounded-full', height=100, width=100}) => {

  return (
    <Image
      className= {className}
    src={imageLogo}
      blur='blur'
      height={height}
      width={width}
      alt={alt}
    />
  )
}

export default Logo
