import React from "react";
import db from "../../firestoreConfig/FirestoreConfig.js";
import { useRouter } from "next/router";
import loadable from '@loadable/component'

const PostFooter = loadable(() => import('../../components/PostFooter'))
const H2 = loadable(() => import('../../components/elements/H2'))

const Post = ({ res }) => {
  const [post, setPost] = React.useState([]);


  React.useEffect(() => {
    setPost(res)
  }, [res]);

  return (
    <div className="container mx-auto md:w-4/5 shadow-md m-6">
{
    post && post !== undefined ?
      <>
      <div>
        <div className="h-48 bg-center bg-cover rounded-t-md" style={{ backgroundImage: 'url(' + post.urlImage + ')', }}>
          <img className="hidden" src={post.urlImage} alt={post.descriptionImage} />
        </div>
        <H2 texto={post.titulo} />
        <div className="m-6 sm:m-9 text-gray-700" dangerouslySetInnerHTML={{ __html: post.contenido }}></div>
      </div>
      <hr />
      <PostFooter autor={post.autor} /> 
      </>
      : null
}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const docRef = db.collection("fl_content").doc(id);
  //Se obtiene el documento
  const res = await docRef.get().then(doc => {
    const datos = doc.data()
    return ({
      urlImage: datos.urlImage,
      descriptionImage: datos.descriptionImage,
      titulo: datos.titulo,
      contenido: datos.contenido,
      autor: datos.autor,
    })
  });

  return {
    props: {
      res,
    },
  }
}

export default Post;
