const FormatDate = (date = new Date()) => {
  return new Date(date.toString().substring(1, 11)).toISOString().substring(0, 10).split('-').reverse().join('/')
}

export default FormatDate
