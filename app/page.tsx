import type { Metadata } from 'next'
import Head from './component/head'
 
export const metadata: Metadata = {
  title: 'Mochamad Fikri | <Editor> | <Designer>',
  description: '...',
}
export default function Home() {
  return (
    <div className="">
      <Head />
    </div>
  )
}
