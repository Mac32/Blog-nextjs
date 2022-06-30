import React, { Fragment } from 'react'

export default function H2 ({ texto }) {
  return (
    <>
      <h2 className='
    text-2xl
     my-4
    font-extrabold
     text-gray-700
     md:text-3xl
     xl:text-4xl
     text-center'
      >
        {texto}
      </h2>
      <hr />
    </>
  )
}