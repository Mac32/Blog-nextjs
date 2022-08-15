import { useState, useEffect } from 'react'
// import db from '../../firestoreConfig/FirestoreConfig'
// import { collection, getDocs, getDoc, doc } from 'firebase/firestore/lite'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Post from '../../models/Post'
import dbConnect from '../../lib/mongoConect'

const PostFooter = dynamic(import('../../components/PostFooter'))
const H2 = dynamic(import('../../components/elements/H2'))
const Comentarios = dynamic(import('../../components/Comentarios'))

const Publication = ({ res }) => {
  const [post, setPost] = useState([])

  useEffect(() => {
    setPost(res)
  }, [res])

  return (
    <>
      <Head>

        <meta name='description' content={post.title} />
        <title>{post.title}</title>
        <script
          type='application/ld+json' dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {

                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                '@id': `https://codigofuente.vercel.app/post/${post.id}`,
                headline: `${post.title}`,
                description: `${post.title}`,
                image: [
                `${post.urlImage}`
                ]
              }
            )
          }}
        />

      </Head>
      <div className='container mx-auto md:w-4/5 shadow-md m-6'>
        {
          post && post !== undefined
            ? <>
              <div>
                <div className='h-48 bg-center bg-cover rounded-t-md' style={{ backgroundImage: 'url(' + post.urlImage + ')' }}>
                  <img className='hidden' src={post.urlImage} alt={post.descriptionImage} />
                </div>
                <H2 texto={post.title} />
                <div className='m-6 sm:m-9 text-gray-700' dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <hr />
              <PostFooter autor={post.author} tags={post.tags} />
              </>
            : null
        }
      </div>
      <Comentarios postId={post._id} postTitle={post.title} />
    </>
  )
}

export async function getStaticPaths () {
  try {
    await dbConnect()
  } catch (error) {
    console.log(error)
  }

  const resp = await Post.find({})
  const paths = resp.map(post => (
    {
      params: {
        id: post._id.toString()
      }
    }
  ))

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params

  console.log('Identificador; ' + id)

  try {
    await dbConnect()
  } catch (error) {
    console.log(error)
  }

  const respuesta = await Post.findById(id)
  const res = await respuesta.toObject()
  res._id = res._id.toString()
  res.date = JSON.stringify(res.date)
  return {
    props: {
      res
    },
    revalidate: 10
  }
}

export default Publication
