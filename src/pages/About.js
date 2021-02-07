import React, { useEffect, useState } from "react"
import db from "../firestoreConfig/FirestoreConfig.js"

import dynamic from "next/dynamic"

const SectionSkills = dynamic(import('../components/SectionSkills'))
const SectionSobreMi = dynamic(import('../components/SectionSobreMi'))

export default function About() {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    db.collection("fl_content")
      .where("_fl_meta_.schema", "==", "sobreMi")
      .get().then(
	(snapShots) => {
	  setDatos(
	    snapShots.docs.map(
	      (doc) => {
		return { id: doc.id, data: doc.data() };
	      }
	    )
	  );
	}
      );
  });
  return (
    <div>
    {
      (datos && datos.length !== 0) ?
      (
	<SectionSobreMi fuenteImagen={datos[0].data.imagen} informacion={datos[0].data.informacion} />
      )
      : null

    }
    {
      (datos && datos.length !== 0) ?
	(<SectionSkills tecnologias={datos[0].data.tecnologias} />)
	: null
    }
    </div>
  );
}
