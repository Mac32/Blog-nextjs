import React from "react";
import PostCard from "./PostCard.js";
import db from "../firestoreConfig/FirestoreConfig.js";

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
    const { items } = this.state;
    return (
      <article className="sectionProject">
        <div className="titulo">
          <h2>Publicaciones</h2>
          <hr />
        </div>
        <div class="columns is-desktop">
          {items && items !== undefined
            ? items.map((item, key) => (
                <div class="column is-3" key={key}>
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
