import IconoEtiqueta from './IconoEtiqueta'
import A from './A'

export default function Tag ({ children, ruta = '/' }) {
  return (
    <A ruta={ruta}>
      <span className='p-1 bg-blue-200 m-1 rounded-md flex text-gray-700 '><IconoEtiqueta />{children}</span>
    </A>
  )
}
