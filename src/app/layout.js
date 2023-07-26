import Head from 'next/head'
import './globals.css'
import { Unbounded } from 'next/font/google'

const font = Unbounded({ subsets: ['latin'], weight: ['400',"300","200","700","200","800"]})



export const metadata = {
  title: 'EIG',
  description: 'EIG Portfolio',
  icons: {
  icon: ['/favicon.ico?v=4']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
