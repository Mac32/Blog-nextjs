import PostCard from '@/components/PostCard'
import H2 from '@/components/elements/H2'

const SectionPost = ({ publicaciones, title= 'Publicaciones' }) => {
  return (
    <div className='flex md:px-10 justify-center w-full'>

      <article className='
     container
     mx-auto
     md:px-10
     rounded-lg
     mb-6'
      >
          <H2>{title}</H2>
        <div className='divider divider-info'>
        </div>

        <div className='flex'>

          <div className='flex justify-center flex-wrap w-full'
          >
            {
              publicaciones && publicaciones !== undefined
                ? publicaciones.map((publicacion, key) => (
                  <div className='mt-6 lg:w-1/2' key={key}>
                    <PostCard publicacion={publicacion} />
                  </div>
                ))
                : null
            }
          </div>
        </div>
      </article>
    </div>
  )
}

export default SectionPost
