import Link from "next/link"

export default function PostCategory({category}){
  return (
    <div className='badge badge-info py-5 text-white'>
      <Link href={`/category/${category}`}>
          {category}
      </Link>
        </div>
  )
}