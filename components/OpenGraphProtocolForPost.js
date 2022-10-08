const OpenGraphProtocolForPost = ({ post }) => {
  return (
    <>
      <meta property='og:title' content='The Rock' />
      <meta property='og:type' content='video.movie' />
      <meta property='og:url' content={`https://elblogdemalbo.com/post/${post.postPath}`} />
      <meta property='article:published_time' content={post.date} />
      <meta property='article:author' content={post.author} />
      <meta property='article:tag' content={post.tags} />
      <meta property='og:image' content={post.urlImage} />
    </>
  )
}

export default OpenGraphProtocolForPost
