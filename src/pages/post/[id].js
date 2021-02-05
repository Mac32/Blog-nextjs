import React from "react";
import db from "../../firestoreConfig/FirestoreConfig.js";
import { useRouter } from "next/router";
import loadable from '@loadable/component'

const PostFooter = loadable(() => import('../../components/PostFooter'))
const H2 = loadable(() => import('../../components/elements/H2'))

const Post = () => {
  const [post, setPost] = React.useState([]);

  const backgroundImage = {
    color: 'blue',
    backgroundImage: 'url(' + post.urlImage + ')',
  };

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
  }, [id]);

  return (
    <div className="container mx-auto md:w-4/5 shadow-md m-6">
      <div>
        <div className="h-48 bg-center bg-cover rounded-t-md" style={backgroundImage}>
          <img className="hidden" src={post.urlImage} alt={post.descriptionImage} />
        </div>
        <H2 texto={post.titulo} />
        <div className="m-6 sm:m-9 text-gray-700" dangerouslySetInnerHTML={{ __html: post.contenido }}></div>
      </div>
      <hr />
      <PostFooter autor={post.autor} />
    </div>
  );
};

export default Post;