import React from 'react'
import Link from 'next/link'

export default function Footer () {
  const year = new Date().getFullYear()

  return (
    <div className='bg-gray-800 flex'>
      <Link href='/'>
        <img
          src='https://i.ibb.co/FJh5fnW/Logo-completo-min.png'
          width='112'
          height='28'
        />
      </Link>
      <div className='text-gray-300 my-auto'> Copyright© {year} Alberth Bompart </div>
    </div>
  )
}
