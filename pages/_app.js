import '../styles/globals.css'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import Head from "next/head"
import { config } from '../config'

export default function MyApp({ Component, pageProps, router, configData }) {

  const url = `https://localhost:3000${router.route}`


  return (
    <AnimatePresence
    mode="wait"
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Head>
        <title>{configData.title}</title>
        <meta name="description" content={configData.description} />
        <meta name="og:url" content={configData.siteURL} />
        <meta name="og:image" content={`url(/ben-eris-og-final.png)`} />
        <meta name="og:type" content="website" />
      </Head>
      {<Component {...pageProps} key={url} layoutId={url} />}
    </AnimatePresence>
  )
}

export async function getStaticProps() {
  

  const configData = config;

  return {
    props: {
      configData
    }
  }

}
