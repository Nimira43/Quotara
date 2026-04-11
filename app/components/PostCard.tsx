import { Link } from 'react-router'
import type { PostMeta } from '~/types'

const PostCard = ({
  post
}: {
  post: PostMeta
}) => {
  return (  
    <article className='p-6 rounded-md shadow-md border border-orange-400 mb-4 bg-teal-50'>
      <h3 className='text-2xl font-medium text-teal-700'>
        {post.title}
      </h3>
      <p className='text-sm text-orange-400 mb-2'>
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className='text-gray-700 mb-4'>
        {post.excerpt}
      </p>
      <Link
        to={`/blog/${post.slug}`}
        className='text-teal-700 text-sm font-medium uppercase hover:text-orange-400 transitioning'
      >
        Read More
      </Link>
    </article>
  )
}
 
export default PostCard