import React from 'react'
import Link from 'next/link'

export default function ButtonMenu({ texto, ruta }) {
  return (
<Link href={ruta}>

    <a className="
    cursor-pointer
    text-gray-300
    block text-center 
    px-3 
    py-2 
    rounded-md 
    text-base 
    font-medium 
    hover:bg-gray-700">
      {texto}
    </a>
    </Link>
  )
}