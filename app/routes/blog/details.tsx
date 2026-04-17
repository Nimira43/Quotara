import ReactMarkdown from 'react-markdown'
import type { Route } from './+types/details'
import type { PostMeta } from '~/types'
import { Link } from 'react-router'

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params
  const url = new URL('/posts-meta.json', request.url)
  const res = await fetch(url.href)

  if (!res.ok) throw new Error('Failed to fetch data.')
  
  const index = await res.json()
  const postMeta = index.find((post: PostMeta) => post.slug === slug)

  if (!postMeta) throw new Response('Not Found', { status: 404 })
  
  const markdown = await import(`../../posts/${slug}.md?raw`)

  return {
    postMeta,
    markdown: markdown.default
  }
}

type BlogPostDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta,
    markdown: string
  }
}
    
const BlogPostDetailsPage = (
  { loaderData }: BlogPostDetailsPageProps
) => {
  const { postMeta, markdown } = loaderData
  return (  
    <div className='max-w-3xl mx-auto px-6 py-12 bg-teal-50 border border-orange-400 shadow-md'>
      <p className='text-sm text-orange-400 font-semibold uppercase mb-6'>
        {new Date(postMeta.date).toLocaleDateString()}
      </p>
      <div className='prose max-w-none mb-12'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
      <Link
        to='/blog'
        className='inline-block uppercase text-white bg-teal-700 hover:bg-orange-400 transitioning px-6 py-2 rounded'
      >
        Back to Blog
      </Link>
    </div>
  )
}
 
export default BlogPostDetailsPage