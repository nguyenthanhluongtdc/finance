import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import getData from './utils/GetData'
import Header from './components/Header';
import Container from '@mui/material/Container'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "vaytieudung247",
  description: "C?c kho?n vay online t?t nh?t 2023",
  openGraph: {},
  // ...
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mb-3 sm:mb-4 md:mb-9'>
          <Header />
        </div>
        <Container>
          {children}
        </Container>

        <Footer/>
      </body>
    </html>
  )
}
