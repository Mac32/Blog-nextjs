import React from "react";
import dynamic from 'next/dynamic'
import db from "../firestoreConfig/FirestoreConfig";

const PostCard = dynamic (import('./PostCard'));
const H2 = dynamic (import('./elements/H2'))

class SectionPost extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    db.collection("fl_content")
      .get()
      .then(
        (snapShots) => {
          this.setState({
            items: snapShots.docs.map((doc) => {
                return { id: doc.id, data: doc.data() };
            }),
          });
        },
        (error) => {
          console.log("error");
        }
      );
  }


  render() {
    //Filtrado de elementos
    const filtredData = this.state.items.filter(item => item.data._fl_meta_.schema == "publicacion");

    return (
      <article className="
      container 
      mx-auto 
      md:px-10 
      rounded-lg 
      shadow-md mb-6">
          <H2 texto="Publicaciones" />
        <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        2xl:grid-cols-5 
        gap-4">
          {filtredData && filtredData !== undefined ? filtredData.map((item, key) => (
                <div className="mt-6" key={key}>
                  <PostCard
                    id={item.data.id}
                    titulo={item.data.titulo}
                    resumen={item.data.resumen}
                    imagen={item.data.urlImage}
                    autor={item.data.autor}
                    fecha={item.data.fecha}
                  />
                </div>
              ))
            : null}
        </div>
      </article>
    );
  }
}

export default SectionPost;
