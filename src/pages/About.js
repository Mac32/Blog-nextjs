import React, {useEffect, useState} from "react"
import db from "../firestoreConfig/FirestoreConfig.js"


export default function About () {
  const [datos, setDatos] = useState([])

    useEffect(() => {
    	db.collection("fl_content")
	.get()
	.then(
	  (docs) => {
	    setDatos(docs.docs.map((doc) => {
	    	return {id: doc.id, data: doc.data() };
	    }));
	  }
	)
    });

  const filterData = datos.filter(doc => doc.data._fl_meta_.schema == "sobreMi");
    
    return (
      <div className="columns container is-fluid">

      <div className="column is-one-quarter">

      <figure className="image image is-4by5">

      <img src={filterData.[0].data.imagen}/>

      </figure>

      </div>

      <div className="column ">

      <h4 className="title is-4">Sobre mi</h4>
	<div className="content">
	  <p className="is-medium">
            {filterData.data.informacion}
	  </p>
	</div>
      </div>

      </div>
    );
}
