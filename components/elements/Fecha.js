const Fecha = ({ fecha = '' }) => {
  const date = new Date(fecha.toString().substring(1, 11)).toISOString().substring(0, 10).split('-').reverse().join('/')

  return (
    <time dateTime={date} className='text-gray-600 text-sm'>{date}</time>
  )
}

export default Fecha
