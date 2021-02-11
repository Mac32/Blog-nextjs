import {DiscussionEmbed} from "disqus-react"

const Comentarios = ({ postId, postTitle }) => {
  const disqusShortname = "codigosfuente"
  const disqusConfig = {
    url: "https://codigosfuente.vercel.app/post",
    identifier: postId, // Single post id
    title: postTitle // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default Comentarios;
