import Community from '@/sections/community'
import Features from '@/sections/features'
import Header from '@/sections/header'
import Faq from '@/sections/faq'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" sizes='any'> </link>
    </Head>
      <Header />
      <Features />
      <Community />
      <Faq />
      <Footer />
    </>
  )
}
