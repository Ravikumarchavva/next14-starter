import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/navbar/Navbar'
import Footer from '@/Components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Team collab',
  description: 'Next.js app',
  name:"viewport",
  content:"width=device-width, initial-scale=1.0"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar/>
          {children}
          <div className='footer'>
          <Footer/>
          </div>
      </body>
    </html>
  )
}