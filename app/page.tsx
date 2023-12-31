import type { Metadata } from 'next'
import Head from './component/head'
import Company from './component/company'
import Review from './component/review'
import Positive from './component/positive'
import SecTwo from './component/secTwo'
import Movie from './component/movie'
import Foot from './component/foot'
export const metadata: Metadata = {
  title: 'Mochamad Fikri | <Editor> | <Designer>',
  description: '...',
}
export default function Home() {
  return (
    <div className="flex flex-col w-full  overflow-hidden">
      <Head />
      <SecTwo />
      <Movie />
      <Positive />
      <Review />
      <Foot />
      
    </div>
  )
}
