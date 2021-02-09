import React from "react"

export default function TecnologiaIcono({fuente, titulo}) {
  return (
    <div className="flex shadow m-1 rounded-md">
      <figure className="w-1/3  bg-gray-100 rounded-l-md" >
        <img src={fuente} />
      </figure>
      <div className="my-auto px-4">
  <h4 className="text-gray-800 text-lg">{titulo}</h4>
        <hr />
      </div>
    </div>
  );
}
