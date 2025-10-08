import type { Route } from './+types/index' 

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Quotara | Home' },
    { name: 'description', content: 'Welcome to Quotara.' },
  ]
}

export default function Home() {
  const now = new Date().toISOString()
  
  if (typeof window === 'undefined') {
    console.log('Server render at: ', now)
  } else {
    console.log('Client hydration at: ', now)
  }
  
  return (
    <section>
      <h2 className='text-3xl text-main logo'>Quotara</h2>
    </section>
  )
}