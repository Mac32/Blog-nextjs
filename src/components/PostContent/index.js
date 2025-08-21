import { Remark } from 'react-remark'

const PostContent = ({ children }) => {
  return (
    <div className='mx-1 p-2 text-justify text-gray-800 text-base'>
      <Remark>{children}</Remark>
    </div>
  )
}

export default PostContent
