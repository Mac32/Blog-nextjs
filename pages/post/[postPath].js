import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Post from '../../models/Post'
import dbConnect from '../../lib/mongoConect'
import { Remark } from 'react-remark'

const PostFooter = dynamic(import('../../components/PostFooter'))
const H2 = dynamic(import('../../components/elements/H2'))
const Comentarios = dynamic(import('../../components/Comentarios'))

const Publication = ({ res }) => {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPost(res)
    setLoading(false)
  }, [res])

  if (loading) return <p>Cargarndo...</p>

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
                <H2>{post.title}</H2>
                <div className='p-2 md:p-6'>
                  <Remark>{post.content}</Remark>
                </div>
              </div>
              <hr />
              <PostFooter autor={post.author} tags={post.tags} />

            </>
            : null
        }
      </div>
      <Comentarios postId={post.postPath} postTitle={post.title} />
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
        postPath: post.toObject().postPath
      }
    }
  ))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { postPath } = params
  try {
    await dbConnect()
  } catch (error) {
    console.log(error)
  }

  const respuesta = await Post.findOne({ postPath }).populate('author', 'userName firstName lastName userTwitter').exec()
  const res = await respuesta.toObject()
  res._id = res._id.toString()
  res.author._id = res.author._id.toString()
  res.date = JSON.stringify(res.date)

  return {
    props: {
      res
    },
    revalidate: 10
  }
}

export default Publication
