import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { blogPosts } from '../lib/data'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          My blog
        </h1>
      </main>
      <div>
        {blogPosts.map(post => (
          <div key={post.slug}>
            <div>
              <Link href={`blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </div>
            <div>{String(post.date)}</div>
            <div>{post.content}</div>
            <br></br>
          </div>
        )
        )}
      </div>

    </div>
  )
}

export default Home
