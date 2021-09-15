import Head from 'next/head'
import { Content } from './layout/content';
import { Faq } from './layout/faq';
import { Feature } from './layout/feature';
import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { Nav } from './layout/navbar';
import { Statistic } from './layout/statistic';

export default function Home() {
  return (
    <div className="flex flex-col justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Header/>
        <Content/>
        {/* <Feature/> */}
        <Statistic/>
        <Faq/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
