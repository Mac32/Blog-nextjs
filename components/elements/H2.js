import React, { Fragment } from 'react'

export default function H2 ({ children }) {
  return (
    <>
      <h2 className='
    text-2xl
     mt-9
     mb-2
    font-extrabold
     text-gray-700
     md:text-4xl
     xl:text-5xl
     text-center'
      >
        {children}
      </h2>
      <hr />
    </>
  )
}
