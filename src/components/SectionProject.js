import React from 'react'
import dynamic from 'next/dynamic'

const CardProject = dynamic(import('./CardProject'))
const H2 = dynamic(import('./elements/H2'))

export default function SectionProject () {
  return (
    <article>
      {/* titulo de la seccion */}
      <div className='titulo'>
        <H2 texto='Proyectos' />
        <hr />
      </div>
      {/* Proyectos */}
      <div className='flex flex-col md:flex-row'>
        <CardProject
          imagen='https://i.ibb.co/HLcMRNc/Blog-min.jpg' titulo='Blog personal'
          descripcion='Proyecto personal construido con nextjs y tailwindcss'
          ruta='https://codigofuente.vercel.app'
        />
      </div>
    </article>
  )
}
