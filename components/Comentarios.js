import { DiscussionEmbed } from 'disqus-react'

const Comentarios = ({ postId, postTitle }) => {
  if (postId && postTitle) {
    const disqusShortname = 'codigofuente-1'
    const disqusConfig = {
      url: 'https://codigofuente.vercel.app/post/' + postId,
      identifier: postId, // Single post id
      title: postTitle, // Single post title
      languaje: 'es_ES'
    }

    return (
      <div className='mx-6 md:w-4/5 md:mx-auto'>
        {
          (postId && postTitle)
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
