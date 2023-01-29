import '../styles/globals.css'
import Layout from '../components/layout'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import Head from "next/head"

export default function MyApp({ Component, pageProps, router }) {

  const url = `https://localhost:3000${router.route}`


  return (
    <AnimatePresence
    mode="wait"
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="og:url" content={config.siteURL} />
        <meta name="og:image" content={`url(/og-ben-eris-final.png)`} />
        <meta name="og:type" content="website" />
      </Head>
      {<Component {...pageProps} key={url} layoutId={url} />}
    </AnimatePresence>
  )
}
