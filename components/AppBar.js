import dynamic from 'next/dynamic'
import Link from 'next/link'
import Logo from 'components/elements/Logo'
import ImagenLogo from 'public/image/LogoComprimido.png'

const ButtonMenu = dynamic(import('./elements/ButtonMenu'))
const Avatar = dynamic(import('./elements/Avatar'))

export default function AppBar () {
  const eventoMenu = () => {
    document.querySelector('#menuMobil').classList.toggle('hidden')
    document.querySelector('#iconoX').classList.toggle('hidden')
    document.querySelector('#iconoBurger').classList.toggle('hidden')
  }

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <button aria-label='Boton de menu' onClick={eventoMenu} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>

              {/* Iconos del boton de menu */}
              <svg id='iconoBurger' className=' h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>

              <svg id='iconoX' className=' hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* Menu para pantallas grandes */}
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <Link href='/'>

              <div className='flex-shrink-0 flex items-center'>
                <Logo
                  className='rounded-full'
                  src={ImagenLogo}
                  alt='Logo de la pagina'
                  width={45}
                  height={45}
                />
              </div>
            </Link>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>

                <ButtonMenu ruta='/'>Inicio</ButtonMenu>
                <ButtonMenu ruta='/aboutTheBlog'>Sobre el Blog</ButtonMenu>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Menu para pantallas pequeñas */}
      <div id='menuMobil' className='hidden sm:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1'>

          <ButtonMenu ruta='/'>Inicio</ButtonMenu>

        </div>
      </div>
    </nav>
  )
}
