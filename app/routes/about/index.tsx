const AboutPage = () => {
  return (
    <div className='px-6 py-16 max-w-4xl mx-auto space-y-20'>

      <section className='text-center space-y-6'>
        <h1 className='text-4xl font-medium text-teal-700'>
          About Quotara
        </h1>
        <p className='text-teal-700 text-lg leading-relaxed border border-orange-400 px-6 py-6 rounded-md shadow-md bg-teal-50'>
          Quotara exists to give students and independent developers a dedicated place to showcase their work. It's designed as a supportive environment where early projects, experiments, and polished builds can live together, helping creators grow their confidence and visibility within the wider tech community.
        </p>
      </section>

      <section className='text-center space-y-6'>
        <h2 className='text-2xl font-medium text-teal-700'>
          Why We Built Quotara
        </h2>
        <p className='text-teal-700 leading-relaxed border border-orange-400 px-6 py-6 rounded-md shadow-md bg-teal-50'>
          Our mission is to empower developers at every stage by providing a simple, welcoming space to publish their work. Whether you're building your first app or refining a complex system, Quotara encourages exploration, collaboration, and the freedom to learn through making.
        </p>
      </section>

      <section className='text-center space-y-6'>
        <h2 className='text-2xl font-medium text-teal-700'>
          Tools & Technologies We Support
        </h2>
        <p className='text-teal-700 leading-relaxed border border-orange-400 px-6 py-6 rounded-md shadow-md bg-teal-50'>
          Quotara embraces a wide range of modern technologies, from frameworks like Next.js, Vue, and Laravel to tools such as Prisma, Docker, Appwrite, MongoDB, and PostgreSQL. We want creators to feel free to experiment with whatever stack inspires them, without limitations or expectations.
        </p>
      </section>
    </div>
  )
}

export default AboutPage

