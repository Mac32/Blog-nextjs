import React, { useEffect, useState } from "react"
import db from "../firestoreConfig/FirestoreConfig.js"
import SectionSkills from "../components/SectionSkills.js"

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
		<div className="container is-fluid">


			{
				(datos && datos.length !== 0) ?

					(
						<div className="columns is-fluid">
							<div className="column is-one-quarter">
								<figure className="image image is-4by5">
									<img src={datos[0].data.imagen} />
								</figure>
							</div>

							<div className="column ">

								<h4 className="title is-4">Sobre mi</h4>
								<div className="content">
									<p className="is-medium">
									{datos[0].data.informacion}
									</p>
								</div>

							</div>

							<SectionSkills tecnologias={datos[0].data.tecnologias}/>

						</div>
					)
					: null

			}


		</div>
	);
}