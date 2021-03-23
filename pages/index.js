import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello</title>
      </Head>
      <p>Hello, this is a test</p>
    </div>
  )
}
