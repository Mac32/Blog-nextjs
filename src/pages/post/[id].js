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
              "@type": "LiveBlogPosting",
              "@id": "http://techcrunch.com/2015/03/08/apple-watch-event-live-blog",
              "about": {
                "@type": "Event",
                "startDate": "2015-03-09T13:00:00-07:00",
                "name": "Apple Spring Forward Event"
              },
              "coverageStartTime": "2015-03-09T11:30:00-07:00",
              "coverageEndTime": "2015-03-09T16:00:00-07:00",
              "headline": "Apple Spring Forward Event Live Blog",
              "description": "Welcome to live coverage of the Apple Spring Forward …",
              "liveBlogUpdate": [
                {
                  "@type": "BlogPosting",
                  "headline": "Coming this April, HBO NOW will be available exclusively in the U.S. on Apple TV and the App Store.",
                  "datePublished": "2015-03-09T13:08:00-07:00",
                  "articleBody": "It's $14.99 a month.<br> And for a limited time, …"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "iPhone is growing at nearly twice the rate of the rest of the smartphone market.",
                  "datePublished": "2015-03-09T13:13:00-07:00",
                  "image": "http://images.apple.com/live/2015-mar-event/images/573cb_xlarge_2x.jpg"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "See the new flagship Apple Retail Store in West Lake, China.",
                  "datePublished": "2015-03-09T13:17:00-07:00",
                  "video": {
                    "@type": "VideoObject",
                    "thumbnail": "http://images.apple.com/live/2015-mar-event/images/908d2e_large_2x.jpg"
                  }
                }
              ]
            

              

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
