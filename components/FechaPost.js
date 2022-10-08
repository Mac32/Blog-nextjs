import FormatDate from 'tools/FormatDate'
const FechaPost = ({ children }) => {
  return (
    <time dateTime={FormatDate(children)} className='text-gray-600 block text-lg  italic text-center'>Publicado el {FormatDate(children)}</time>
  )
}

export default FechaPost
