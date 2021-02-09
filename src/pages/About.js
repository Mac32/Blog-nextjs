import React, { useEffect, useState } from "react"
import db from "../firestoreConfig/FirestoreConfig.js"

import dynamic from "next/dynamic"

const SectionSkills = dynamic(import('../components/SectionSkills'))
const SectionSobreMi = dynamic(import('../components/SectionSobreMi'))

export default function About({sobreMi}) {
  return (
    <>
    {
    <div>
	<SectionSobreMi fuenteImagen={sobreMi.imagen} informacion={sobreMi.informacion} />
      
	<SectionSkills />
    </div>
    }
    </>
  );
}

export async function getStaticProps() {
	const sobreMi = await db.collection("fl_content")
      .doc("p04tDANF8rsUm2xFSaLn")
      .get().then(
	(doc) => {
		return { imagen: doc.data().imagen, informacion: doc.data().informacion };
	}
      );

  return {
    props: {
    	sobreMi,
    },
    revalidate: 1,
  }

}
