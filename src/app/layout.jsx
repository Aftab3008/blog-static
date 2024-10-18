import { cx } from '@/utils'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import siteMetadata from '@/utils/siteMetaData'

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: 'Blog App',
  description: 'Created by Aftab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, `font-mr bg-light `)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
//`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark `
//dark:bg-dark