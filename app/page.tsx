import type { Metadata } from 'next'
import Head from './component/head'
import Company from './component/company'
import Review from './component/review'
import Positive from './component/positive'
export const metadata: Metadata = {
  title: 'Mochamad Fikri | <Editor> | <Designer>',
  description: '...',
}
export default function Home() {
  return (
    <div className="max-w-full">
      <Positive />
      
    </div>
  )
}
