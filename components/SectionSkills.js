import React from 'react'
import dynamic from 'next/dynamic'

const TecnologiaIcono = dynamic(import('./TecnologiaIcono'))
const H2 = dynamic(import('./elements/H2'))

export default function SectionSkills () {
  const tecnologiasLinks = {
    html: 'https://i.ibb.co/2cwbMw1/html-original-wordmark-logo-icon-146478.png',
    css: 'https://i.ibb.co/9pN706X/css-original-wordmark-logo-icon-146576.png',
    java: 'https://i.ibb.co/jTBgCQt/java-original-wordmark-logo-icon-146459.png',
    javascript: 'https://i.ibb.co/mDxdHrs/javascript-icon-130900-min.png',
    react: 'https://i.ibb.co/4K9q6P4/react-original-wordmark-logo-icon-146375.png',
    mysql: 'https://i.ibb.co/y8m06pW/mysql-original-wordmark-logo-icon-146417.png',
    git: 'https://i.ibb.co/m5NcHX7/git-original-wordmark-logo-icon-146510.png'
  }
  return (
    <article>
      <br />
      <div>
        <H2 texto='Habilidades' />

      </div>
      <div className='
      grid
      grid-cols-1
      sm:mx-4
      sm:grid-cols-2
      md:grid-cols-3
      md:mx-4
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-5
      gap-3
      mx-1'
      >
        <TecnologiaIcono fuente={tecnologiasLinks.html} titulo='HTML' />
        <TecnologiaIcono fuente={tecnologiasLinks.css} titulo='CSS' />
        <TecnologiaIcono fuente={tecnologiasLinks.javascript} titulo='JAVASCRIPT' />
        <TecnologiaIcono fuente={tecnologiasLinks.react} titulo='REACT' />
        <TecnologiaIcono fuente={tecnologiasLinks.java} titulo='JAVA' />
        <TecnologiaIcono fuente={tecnologiasLinks.mysql} titulo='MYSQL' />
        <TecnologiaIcono fuente={tecnologiasLinks.git} titulo='GIT' />

      </div>

    </article>
  )
}
