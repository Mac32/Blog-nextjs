import React from 'react'
import dynamic from 'next/dynamic'

const H2 = dynamic(import('../components/elements/H2'))

export default function SectionSobreMi ({ informacion, fuenteImagen }) {
  return (
    <div className='
    m-4
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4'
    >
      <figure className='rounded-md p-3'>
        <img className='rounded-full' src={fuenteImagen} />
      </figure>
      <div className='mx-7 lg:col-span-3'>
        <H2 texto='Sobre Mi' />
        <p className='text-gray-800 align pt-4'>
          {informacion}
        </p>
      </div>
    </div>
  )
}
