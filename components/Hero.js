import React, { useEffect } from 'react'
import Link from 'next/link'

export default function Hero () {
  useEffect(() => {
  // TODO agregar funciones de animaciones
  })

  return (
    <div className='relative bg-gray-800 overflow-hidden bg-center h-96 bg-cover bg-[url("https://i.ibb.co/3B77SjV/laptop-2838917-1920.jpg")]'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32'>
          {/* Crea bloque superior */}
          <div className='relative pt-6 px-4 sm:px-6 lg:px-8' />
          {/* Comienzo de hero */}
          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-center text-gray-400 sm:text-5xl md:text-7xl'>
                <span className='px-3 text-indigo-100 border-2 xl:inline'>El Blog de Malbo</span>
              </h1>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
