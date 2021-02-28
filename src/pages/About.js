import React, { useEffect, useState } from "react"
import db from "../firestoreConfig/FirestoreConfig.js"
import Head from 'next/head'
import dynamic from "next/dynamic"

const SectionSkills = dynamic(import('../components/SectionSkills'))
const SectionSobreMi = dynamic(import('../components/SectionSobreMi'))
const SectionProject = dynamic(import('../components/SectionProject'))

export default function About({sobreMi}) {
  return (
    <>
    <Head>
    	<meta name="description" content="Alberth Bompart desarrollador web front end y programador. Aqui esta un poco de informacion sobre el y las tecnologias que domina" />
    </Head>
    {
    <div>
	<SectionSobreMi fuenteImagen={sobreMi.imagen} informacion={sobreMi.informacion} />
      
      <SectionSkills />
      <SectionProject />
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
