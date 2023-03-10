import '../styles/globals.css'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import Head from "next/head"
import { config } from '../config'

export default function MyApp({ Component, pageProps, router }) {

  const url = `https://www.benerismusic.com/${router.route}`


  return (
    <AnimatePresence
    mode="wait"
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Head>
        <title>Ben Eris | Music</title>
        <meta name="description" content="An official resource for Ben Eris music, lyrics, news, and contact." />
        <meta name="og:url" content="url" />
        <meta name="og:image" content="https://i.imgur.com/uWPm4O6.png" />
        <meta name="og:type" content="website" />
      </Head>
      {<Component {...pageProps} key={url} layoutId={url} />}
    </AnimatePresence>
  )
}
