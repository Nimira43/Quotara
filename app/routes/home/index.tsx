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
      
    </section>
  )
}