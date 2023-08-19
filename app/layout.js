
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


// const google-site-verificationl="zUHOr9PriOvBWZMPsfz-uxclsnqbVyeIx12M9idR9SM"

export const metadata = {
 title: 'Sky Weather',
 description: 'Get Your Current Weather Update',
 google: "zUHOr9PriOvBWZMPsfz-uxclsnqbVyeIx12M9idR9SM",
 
 }



 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="google" content="zUHOr9PriOvBWZMPsfz-uxclsnqbVyeIx12M9idR9SM" />
      </Head>
      <body className={inter.className}>{children}
      
      </body>
    </html>
  )
}
