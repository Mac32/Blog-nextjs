import FormatDate from 'tools/FormatDate'

const Fecha = ({ fecha = '' }) => {
  const date = FormatDate(fecha)

  return (
    <time dateTime={date} className='text-gray-600 text-sm'>{date}</time>
  )
}

export default Fecha
