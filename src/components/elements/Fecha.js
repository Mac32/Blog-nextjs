import FormatDate from '@/tools/FormatDate'

const Fecha = ({ fecha }) => {
  const time = FormatDate(fecha)

  return (
    <time dateTime={time} className='text-gray-600 text-sm'>{time}</time>
  )
}

export default Fecha
