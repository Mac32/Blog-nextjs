import React from "react";
import db from "../../firestoreConfig/FirestoreConfig";
import dynamic from 'next/dynamic'
import Head from 'next/head'

const PostFooter = dynamic(import('../../components/PostFooter'))
const H2 = dynamic(import('../../components/elements/H2'))
const Comentarios = dynamic(import('../../components/Comentarios'))

const Post = ({ res }) => {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    setPost(res)
  }, [res]);

  return (
    <>
      <Head>

        <meta name="description" content={post.resumen} />
        <title>{post.titulo}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {

              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "@id": "http://techcrunch.com/2015/03/08/apple-watch-event-live-blog",
              "coverageStartTime": "2015-03-09T11:30:00-07:00",
              "coverageEndTime": "2015-03-09T16:00:00-07:00",
              "headline": "Apple Spring Forward Event Live Blog",
              "description": "Welcome to live coverage of the Apple Spring Forward …",
              "location": "Perú"
            }
          )
        }}/>


      </Head>
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
              <PostFooter autor={post.autor} tags={post.tags} />
            </>
            : null
        }
      </div>
      <Comentarios postId={post.identificador} postTitle={post.titulo} />
    </>
  );
};

export async function getStaticPaths() {

  let paths = []

  await db.collection("fl_content")
    .get()
    .then(
      (publicaciones) => {
        publicaciones.docs.map((doc) => {
          if (doc.data()._fl_meta_.schema === "publicacion") {
            paths.push({
              params: {
                id: doc.id,
              }
            })
          }
        })
      })
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  //Se obtiene el documento
  const res = await db.collection("fl_content").doc(id).get().then(doc => {
    const datos = doc.data()
    return ({
      identificador: id,
      urlImage: datos.urlImage,
      descriptionImage: datos.descriptionImage,
      resumen: datos.resumen,
      titulo: datos.titulo,
      contenido: datos.contenido,
      autor: datos.autor,
      tags: datos.tags,
    })
  });

  return {
    props: {
      res,
    },
    revalidate: 1,
  }
}

export default Post;
