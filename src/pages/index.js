import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Animation from '../components/animation'


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김예찬 웹사이트</title>
        <meta name="description" content="포트폴리오"/>
        <link rel="icon" href="/favcon.ico"/>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>
    </Layout>
  )
}
