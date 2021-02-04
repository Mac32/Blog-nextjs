import React from 'react';
import loadable from '@loadable/component'

const H2 = loadable(() => import('../components/elements/H2'))

export default function SectionSobreMi({ informacion, fuenteImagen }) {
  return (
    <div className="
    m-4 
    grid 
    grid-cols-1 
    sm:grid-cols-2
    lg:grid-cols-4">
      <figure>
        <img className="rounded-full" src={fuenteImagen} />
      </figure>
      <div className="mx-7 lg:col-span-3">
        <H2 texto="Sobre Mi" />
        <p className="text-gray-800 align pt-4">
          {informacion}
        </p>
      </div>
    </div>
  );
}