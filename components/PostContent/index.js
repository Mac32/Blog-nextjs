import 'components/PostContent/PostContent.module.css'
import { Remark } from 'react-remark'

const PostContent = ({ children }) => {
  return (
    <div className='p-2 text-justify text-gray-800 text-base'>
      <Remark>{children}</Remark>
    </div>
  )
}

export default PostContent
