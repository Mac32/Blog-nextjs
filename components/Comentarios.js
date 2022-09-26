import { DiscussionEmbed } from 'disqus-react'

const Comentarios = ({ postPath, postTitle }) => {
  if (postPath && postTitle) {
    const disqusShortname = 'elblogdemalbo-com'
    const disqusConfig = {
      url: 'https://elblogdemalbo.com/post/' + postPath,
      identifier: postPath, // Single post id
      title: postTitle, // Single post title
      languaje: 'es_ES'
    }

    return (
      <div className='mx-6 md:w-4/5 md:mx-auto'>
        {
          (postPath && postTitle)
            ? <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            : null
        }
      </div>
    )
  } else {
    return ('Cargando...')
  }
}

export default Comentarios
