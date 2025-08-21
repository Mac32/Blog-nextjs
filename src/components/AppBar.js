'use client'

import Link from 'next/link'
import Logo from '@/components/elements/Logo'
import ImagenLogo from '@/../public/image/LogoComprimido.png'
import ButtonMenu from './elements/ButtonMenu'

export default function AppBar() {

  return (
    <>
      <div className="navbar fixed top-0 backdrop-blur-sm shadow-sm z-20">
        <div className="flex space-x-4">
          <Link href='/'>
            <Logo
              className='rounded-full'
              src={ImagenLogo}
              alt='Logo de la pagina'
              width={45}
              height={45}
            />
          </Link>
          <div>
            <ButtonMenu ruta='/'>Inicio</ButtonMenu>
            <ButtonMenu ruta='/categorys'>Categorías</ButtonMenu>
            <ButtonMenu ruta='/aboutTheBlog'>Sobre el Blog</ButtonMenu>
          </div>
        </div>
      </div>

    </>
  )
}
