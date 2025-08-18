import H1 from '@/components/elements/H1'
import P from '@/components/elements/P'
import Image from 'next/image'
import Perfil from '@/../public/image/avatar.jpg'

export default function AboutTheBlog() {
  return (
    <main className='container mx-auto mb-10'>
      <article className='text-justify mt-6 lg:shadow-md'>

        <div className='prose prose-a:text-blue-600 prose-a:underline prose-p:text-gray-700 prose-h2:text-gray-700 prose-h3:text-gray-700 prose-strong:text-gray-700 prose-hr:mb-0 xl:prose-hr:mb-0 lg:prose-hr:mb-0 md:prose-hr:mb-0 prose-img:mx-auto sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto'>
          <H1>Sobre el Blog</H1>

          <Image
            className='object-cover mx-auto lg:mt-6'
            src={Perfil}
            height={250}
            width={250}
            alt='Imagen del fundador del blog Alberth Bompart'
          />
          <div className='pb-10'>
            <P>Cuando decidí crear este blog, inicialmente tenía la intensión de aprender la tecnologí­a con que lo materialicé (React y NextJS), tenía la intensión de que fuera un blog sobre tecnologí­a, programación y cosas relacionadas con el mundo tech, pero a medida que iba avanzando en su creación me pareció que sería genial que lo usara además de los temas anteriormente mencionados también para publicar cosas de mi interés que fueran distintos al mundo tech (Los cuales son muy variados, como podrán notar a medida que lean el blog) ya sea  literatura, música, ajedrez, idiomas, entre otras cosas.
            </P>
            <P>De la misma forma, en un principio la intensión era que fuera solo de mi uso exclusivo, pero posteriormente dije: Por qué no hacer una interfaz que permita a otros escritores (seleccionados por mí) publicar en el blog, y así agregué esa funcionalidad al blog. Sin más que agregar, agradezco su visita y espero disfrutes el contenido publicado aquí, ya que es hecho con todo el cariño para compartir el conocimiento.</P>
          </div>
        </div>
      </article>

    </main>
  )
}
