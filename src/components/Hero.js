import React, {useEffect} from 'react'
import Link from 'next/link'

export default function Hero() {

useEffect(() => {
  //TODO agregar funciones de animaciones
//gsap.to(".mover", {duration: 2, x: 300});
})

return(
<div className="relative bg-gray-800 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      {/*Agrega linea diagonal*/}
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      {/*Crea bloque superior*/}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      </div>

	{/*Comienzo de hero*/}
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-6xl">
            <span className=" block xl:inline">Alberth Bompart</span>
	    <hr className="my-4 border border-gray-900"/>
            <span className="block text-indigo-600 xl:inline">Codigo Fuente</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
	    Blog personal donde conseguiras informacion sobre desarrollo de software y tecnologias informáticas.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
	      <Link href="/About" >
		<a href="" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Sobre mi
		</a>
	      </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#publicaciones" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Ver publicaciones
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.ibb.co/gtf1bJ7/coding-1853305-1280-min.jpg" alt="Computadora mostrando en pantalla de codigo css" />
  </div>
</div>)
}
