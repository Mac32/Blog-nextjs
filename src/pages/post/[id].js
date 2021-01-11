import React from "react";
import db from "../../firestoreConfig/FirestoreConfig.js";
//Importacion necesaria para capturar los datos del enlace dinamico
import { useRouter } from "next/router";
import PostFooter from "../../components/PostFooter.js";

const Post = () => {
  const [post, setPost] = React.useState([]);

  //Implementacion de useRouter para poder capturar la variable id y poder usarla
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    //Variable para establecer en que colleccion debe buscar y el documento a encontrar establecido de forma dinamica
    const docRef = db.collection("fl_content").doc(id);

    //Se obtiene el documento
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setPost(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div>
        <hr />
        <div>
          <h2 className="title is-2 is-center">{post.titulo} </h2>
          <hr />
        </div>
        <figure className="image is-3by1">
          <img src={post.urlImage} alt={post.descriptionImage} />
        </figure>
        <div
          className="content is-medium contenido"
          dangerouslySetInnerHTML={{ __html: post.contenido }}
        ></div>
      </div>
      <PostFooter autor={post.autor} />
    </div>
  );
};

export default Post;
