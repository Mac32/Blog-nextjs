export default function A ({ children, ruta }) {
  return (
    <a href={ruta} target='_blank' className='cursor-pointer text-blue-700' rel='noreferrer'>{children}</a>
  )
}
