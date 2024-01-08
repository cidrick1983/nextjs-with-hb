import { wait } from '@/lib/posts'

async function Pageviews({ slug }) {
  //   const views = await getPageview(slug)
  await wait(1000)
  return <div>Views: 100</div>
}

export default Pageviews
