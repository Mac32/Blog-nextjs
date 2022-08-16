import React from 'react'
import Link from 'next/link'
export default function Avatar () {
  return (
    <Link href='/About'>
      <a className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' aria-haspopup='true'>
        <img className='h-12 w-12  rounded-full' src='https://i.ibb.co/0rmH7Kv/Perfil.png' alt='foto de perfil' />
      </a>
    </Link>
  )
}
