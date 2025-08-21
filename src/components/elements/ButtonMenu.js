import React from 'react'
import Link from 'next/link'

export default function ButtonMenu ({ children, ruta }) {
  return (
    <Link
      className='
    btn btn-outlixne btn-info rounded mx-1 text-white' href={ruta}
    >

      {children}
    </Link>
  )
}
