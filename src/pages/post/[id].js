import React from "react";
import db from "../../firestoreConfig/FirestoreConfig";
import dynamic from 'next/dynamic'
import Head from 'next/head'

const PostFooter = dynamic(import('../../components/PostFooter'))
const H2 = dynamic(import('../../components/elements/H2'))

const Post = ({ res }) => {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    setPost(res)
  }, [res]);

  return (
    <>
    <Head>

    <meta name="description" content={post.resumen}/>

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
      <PostFooter autor={post.autor} /> 
      </>
      : null
}

<div id="disqus_thread"></div>
  <script dangerouslySetInnerHTML={{__html: ` /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
  
    var disqus_config = function () {
    this.page.url = "https://codigofuente.vercel.app/post";  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier =identificador; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://codigosfuente.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();`}} />
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

    </div>

  </>
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
