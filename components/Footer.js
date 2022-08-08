import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <div className='bg-gray-800 flex'>
      <Link href='/'>
        <Image
          className='m-5'
          alt='Imagen de el autor del blog'
          src='https://i.ibb.co/FJh5fnW/Logo-completo-min.png'
          width={112}
          height={112}
          blur='blur'
        />
      </Link>
      <div className='text-gray-300 my-auto'> Copyright© {year} Alberth Bompart </div>
    </div>
  )
}
