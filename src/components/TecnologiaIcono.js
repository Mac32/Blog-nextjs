import React from "react"

export default function TecnologiaIcono(props) {
  return(
    <div className="column is-narrow ">
	<figure className="image is-128x128" >
	  <img src={props.fuente} />
	  <h4 className="title has-text-centered is-5">{props.titulo}</h4>
	</figure>
    </div>
  );
}
