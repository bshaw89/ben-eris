import React, { ReactNode } from 'react'
// import { NextSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './Navbar'

const props = {
    children: ReactNode,
    title: 'string',
    description: 'string'
}

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    initial: { opacity: 0},
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    key: 22
}

const TransitionWrapper = ({ children, title, description }) => (
    // <div>
    <motion.main
            initial="hidden"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.75 }}
        >
            {children}
        </motion.main>
    // </div>
)

export default TransitionWrapper