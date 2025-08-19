import React from 'react'
import Link from 'next/link'

export default function ButtonMenu ({ children, ruta }) {
  return (
    <Link
      className='
    btn btn-ghost btn-info rounded mx-1 text-base-content text-white' href={ruta}
    >

      {children}
    </Link>
  )
}
