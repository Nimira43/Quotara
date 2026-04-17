import { Link } from 'react-router'
import type { PostMeta } from '~/types'

type LatestPostsProps = {
  posts: PostMeta[]
  limit?: number
}

const LatestPosts = ({
  posts,
  limit = 3
}: LatestPostsProps) => {
  const sorted = [...posts].sort((a: PostMeta, b: PostMeta) => {
    return (
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  })

  const latest = sorted.slice(0, limit) 

  return (  
    <section className='max-w-6xl mx-auto px-6 py-12'>
      <h2 className='text-3xl font-semibold mb-6 text-center'>
        Latest Posts
      </h2>
      <div className='grid gap-6 sm::grid-cols-2 lg:grid-cols-3'> 
        {latest.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}                   
            className='block p-4 bg-teal-50 border border-orange-400 rounded-md shadow-md cursor-pointer'
          >
            <h3 className='text-lg font-medium text-teal-700 mb-1 text-center'>
              {post.title}
            </h3>
            <p className='text-sm text-gray-700'>
              {post.excerpt}
            </p>
            <span className='block mt-3 text-xs text-orange-400 font-medium uppercase'>
              { new Date(post.date).toLocaleDateString()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
 
export default LatestPosts