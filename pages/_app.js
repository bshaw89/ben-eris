import '../styles/globals.css'
import Layout from '../components/layout'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {

  const key=1

  return (
    <AnimatePresence
    mode="wait"
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={key} />
    </AnimatePresence>
  )
}
