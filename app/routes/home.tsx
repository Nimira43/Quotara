import type { Route } from './+types/home' 

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Quotara' },
    { name: 'description', content: 'Website using React Router, Tailwind and TypeScript.' },
  ];
}

export default function Home() {
  return (
    <>
      Quotara
    </>
  )
}
