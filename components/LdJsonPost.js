const LdJsonPost = ({ post }) => {
  return (
    <script
      type='application/ld+json' dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          {

            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `https://elblogdemalbo.com/post/${post.postPath}`,
            headline: `${post.title}`,
            description: `${post.title}`,
            image: [
                `${post.urlImage}`
            ]
          }
        )
      }}
    />
  )
}

export default LdJsonPost
