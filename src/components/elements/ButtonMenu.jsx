import React from 'react';

export default function ButtonMenu({ nombre }) {
  return (

    <a className="
    cursor-pointer
    text-gray-300
    block text-center 
    px-3 
    py-2 
    rounded-md 
    text-base 
    font-medium 
    hover:bg-gray-700">
      {nombre}
    </a>
  )
}