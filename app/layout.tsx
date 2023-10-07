import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Header from './components/Header';
import Container from '@mui/material/Container'
import Footer from './components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})
const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: "vaytieudung247",
  description: "Các khoản vay online tốt nhất 2023",
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
      <body className={roboto.className}>
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
