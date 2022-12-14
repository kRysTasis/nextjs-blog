import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

console.log('test1')

// export async function getServerSideProps() {
//     const allPostsData = getSortedPostsData()
//     console.log('test2')
//     console.log('allPostsData', allPostsData)
//     return {
//         props: {
//             allPostsData
//         }
//     }
// }

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    console.log('test2')
    console.log('allPostsData', allPostsData)
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            this page!
          </Link>
        </h1>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                    {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}
