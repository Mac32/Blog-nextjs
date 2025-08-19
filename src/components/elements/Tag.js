import IconoEtiqueta from './IconoEtiqueta'
import A from './A'

export default function Tag ({ children, ruta = '/' }) {
  return (
    <A ruta={ruta}>
      <span className='p-2 py-5 m-1 flex badge badge-outline badge-info '><IconoEtiqueta />{children}</span>
    </A>
  )
}
