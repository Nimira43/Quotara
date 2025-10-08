import type { Route } from './+types/index' 

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