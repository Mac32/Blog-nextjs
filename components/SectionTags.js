import dynamic from 'next/dynamic'

const Tag = dynamic(import('./elements/Tag'))
const H3 = dynamic(import('./elements/H3'))

export default function SectionTags ({ tags }) {
  return (
    <>
      <div className='flex flex-col'>
        <H3>Tags</H3>
        <hr />
        <div className='mt-1 lg:max-w-sm flex flex-row flex-wrap'>
          {
            (tags && tags !== undefined)
              ? (tags.map((tag, key) => (
                <Tag key={key}>{tag}</Tag>
                )))
              : null
          }
        </div>
      </div>
    </>
  )
}
