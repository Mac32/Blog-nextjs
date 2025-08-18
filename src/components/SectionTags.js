import Tag from '@/components/elements/Tag'
import H3 from '@/components/elements/H3'

export default function SectionTags({ tags }) {
  return (
    <div className='flex flex-col'>
      <H3>Tags</H3>
      <hr />
      <div className='mt-1 lg:max-w-sm flex py-3 flex-row flex-wrap'>
        {tags?.map((tag, index) => (
          <Tag key={tag.id || tag._id || index}>{tag.name || tag}</Tag>
        ))}
      </div>
    </div>
  )
}