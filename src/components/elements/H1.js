import React, { Fragment } from 'react'
import Bar from './Bar'

export default function H1 ({ children }) {
  return (
    <>
      <h1 className='
    text-2xl
     mt-9
     mb-0
     md:mb-0
     lg:mb-0
    font-extrabold
     text-gray-700
     md:text-4xl
     xl:text-5xl
     text-center'
      >
        {children}
      </h1>
      <Bar />
    </>
  )
}
