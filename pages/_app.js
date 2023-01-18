import '../styles/globals.css'
import Layout from '../components/layout'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'

export default function MyApp({ Component, pageProps, router }) {

  const url = `https://localhost:3000${router.route}`


  return (
    <AnimateSharedLayout type="crossfade">
    <AnimatePresence
    mode="wait"
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
    >
      {<Component {...pageProps} key={url} layoutId={url} />}
    </AnimatePresence>
    </AnimateSharedLayout>
  )
}
