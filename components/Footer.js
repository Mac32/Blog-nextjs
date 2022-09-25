import Link from 'next/link'
import Logo from 'components/elements/Logo'
import ImagenLogo from 'public/image/LogoComprimido.png'

export default function Footer () {
  return (
    <div className='bg-gray-800 flex'>
      <div className='m-3'>
        <Logo
          className='rounded-full'
          alt='Imagen de el autor del blog'
          src={ImagenLogo}
          width={50}
          height={50}
          blur='blur'
        />
      </div>
      <div className='text-gray-300 my-auto'> Fundado por <strong>Alberth Bompart</strong></div>
    </div>
  )
}
