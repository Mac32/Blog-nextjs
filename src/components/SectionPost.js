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
        <div>
          <h2 className="title is-2 is-center">Publicaciones</h2>
          <hr />
        </div>
        <div className="columns is-desktop">
          {items && items !== undefined
            ? items.map((item, key) => (
                <div className="column is-3" key={key}>
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
