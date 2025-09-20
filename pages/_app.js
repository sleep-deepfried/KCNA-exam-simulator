import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KCNA Exam Simulator</title>
        <meta name="description" content="Practice for your Kubernetes and Cloud Native Associate (KCNA) certification with comprehensive questions covering all essential topics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="KCNA, Kubernetes, Cloud Native, Certification, Exam, Practice, Simulator" />
        <meta name="author" content="KCNA Exam Simulator" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="KCNA Exam Simulator" />
        <meta property="og:description" content="Practice for your Kubernetes and Cloud Native Associate (KCNA) certification with comprehensive questions covering all essential topics." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KCNA Exam Simulator" />
        <meta name="twitter:description" content="Practice for your Kubernetes and Cloud Native Associate (KCNA) certification with comprehensive questions covering all essential topics." />
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
