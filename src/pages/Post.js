import React from "react";
import db from "../../FirestoreConfig";
import { useParams } from "react-router-dom";
import PostFooter from "../../components/PostFooter";

const Post = () => {
  const [post, setPost] = React.useState([]);

  const { id } = useParams();

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
        <br />
        <br />
        <h2 className="title is-1 is-center titulo">{post.titulo} </h2>
        <br />
        <figure class="image is-3by1">
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
