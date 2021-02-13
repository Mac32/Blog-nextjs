import {DiscussionEmbed} from "disqus-react"

const Comentarios = ({ postId, postTitle }) => {
  if(postId && postTitle){
  const disqusShortname = "codigosfuente"
  const disqusConfig = {
    url: "https://codigofuente.vercel.app/post/"+postId,
    identifier: postId, // Single post id
    title: postTitle // Single post title
  }

    console.log(disqusConfig.url)
  return (
    <div>
      {
	(postId && postTitle) ?
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />: <p>Hola</p>
	  }
    </div>
  )
  }else{
  	return ("Cargando...")
  }
}
export default Comentarios;
