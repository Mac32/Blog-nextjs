import FormatDate from '@/tools/FormatDate'

const FechaPost = ({ children }) => {
  const time = FormatDate(children)
  return (
    <time dateTime={time} className='text-gray-600 block text-lg  italic text-center'>Publicado el {time}</time>
  )
}

export default FechaPost
