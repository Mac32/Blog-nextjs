import React from 'react'
import Link from 'next/link'

export default function ButtonMenu ({ children, ruta }) {
  return (
    <Link href={ruta}>

      <a className='
    cursor-pointer
    text-gray-300
    font-bold
    block text-center
    px-3
    py-2
    rounded-md
    text-xl
    hover:bg-gray-700'
      >
        {children}
      </a>
    </Link>
  )
}
