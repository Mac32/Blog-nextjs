import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Post from '../../models/Post'
import dbConnect from '../../lib/mongoConect'
import PostContent from 'components/PostContent'
import 'components/PostContent/PostContent.module.css'
import SectionShare from 'components/SectionShare'
import FechaPost from 'components/FechaPost'
import LdJsonPost from 'components/LdJsonPost'
import OpenGraphProtocolForPost from 'components/OpenGraphProtocolForPost'
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
        <title>{`${post.title} - El blog de malbo`}</title>
        <script
          type='application/ld+json' dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {

                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                '@id': `https://elblogdemalbo.com/post/${post.postPath}`,
                headline: `${post.title}`,
                description: `${post.summary}`,
                image: [
                `${post.urlImage}`
                ]
              }
            )
          }}
        />
        <meta property='og:title' content={post.title} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://elblogdemalbo.com/post/${post.postPath}`} />
        <meta property='article:published_time' content={post.date} />
        <meta property='article:author' content={post.author} />
        <meta property='article:tag' content={post.tags} />
        <meta property='og:image' content={post.urlImage} />

      </Head>
      <div className='container mx-auto shadow-md m-6'>
        {
          post && post !== undefined
            ? <>
              <article className='prose prose-a:text-blue-600 prose-a:underline prose-p:text-gray-700 prose-h2:text-gray-700 prose-h3:text-gray-700 prose-strong:text-gray-700 prose-hr:mb-0 xl:prose-hr:mb-0 lg:prose-hr:mb-0 md:prose-hr:mb-0 prose-img:mx-auto sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto'>
                <div className='h-48 bg-center bg-cover rounded-t-md' style={{ backgroundImage: 'url(' + post.urlImage + ')' }}>
                  <img className='hidden' src={post.urlImage} alt={post.descriptionImage} />
                </div>
                <H2>{post.title}</H2>
                <FechaPost>{post.date}</FechaPost>
                <PostContent>{post.content}</PostContent>
              </article>
              <SectionShare url={`https://elblogdemalbo.com/post/${post.postPath}`} />
              <hr />
              <PostFooter autor={post.author} tags={post.tags} />

            </>
            : null
        }
      </div>
      <Comentarios postPath={post.postPath} postTitle={post.title} />
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
