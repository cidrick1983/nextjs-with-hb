import Pageviews from '@/app/components/Pageviews'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { Suspense } from 'react'

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
          <p className='mb-6 text-sm font-light uppercase leading-snug tracking-wide'>
            {frontmatter.author}
          </p>
          <Suspense fallback={<div>Loading view count...</div>}>
            <Pageviews slug={slug} />
          </Suspense>
        </header>
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default Page
