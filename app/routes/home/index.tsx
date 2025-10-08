import type { Route } from './+types/index' 

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Quotara | Home' },
    { name: 'description', content: 'Welcome to Quotara.' },
  ]
}

export default function Home() {
  
  return (
    <section>
      <h2 className='text-3xl font-medium text-grey-dark mb-2'>Home</h2>
    </section>
  )
}