import { getAllPosts, getPostBySlug } from '@/lib/posts'

//for static generation of slug segments
export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({ slug: post.slug }))
}

async function Page({ params }) {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)
  return (
    <section className='py-24'>
      <div className='container'>
        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='text-sm font-light uppercase leading-snug tracking-wide'>
            {frontmatter.author}
          </p>
        </header>
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default Page
