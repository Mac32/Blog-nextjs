import dynamic from 'next/dynamic'

const IconoEtiqueta = dynamic(import('./IconoEtiqueta'))
const A = dynamic(import('./A'))

export default function Tag ({ children, ruta = '/', key }) {
  return (
    <A ruta={ruta}>
      <span key={key} className='p-1 bg-blue-200 m-1 rounded-md flex text-gray-700 '><IconoEtiqueta />{children}</span>
    </A>
  )
}
