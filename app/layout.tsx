import {  Big_Shoulders_Display, Big_Shoulders_Inline_Text, Big_Shoulders_Stencil_Text  } from 'next/font/google'
import './globals.css'

const bg_text = Big_Shoulders_Display({ subsets: ['latin'] , variable: '--font-sdisplay',})
const bg_stencil = Big_Shoulders_Stencil_Text({subsets: ['latin'], weight: ["400","700",],variable: '--font-sstencil',})
const bg_inline = Big_Shoulders_Inline_Text({subsets: ['latin'], weight: ["400","700",],variable: '--font-sinline',})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bg_inline.variable} ${bg_text.variable} ${bg_stencil.variable}`}>
      <body >{children}</body>
    </html>
  )
}
