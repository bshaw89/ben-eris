import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { config } from "../config"
import { motion } from 'framer-motion';

export const Navbar = () => {
    
    return (
        <>
        <div className="fixed bottom-2 flex flex-wrap w-full gap-5 justify-center items-end mb-4 landscape:mb-6">
        <Link href='/'>
            <motion.button
            whileHover={{scale: 1.1, rotate: 360, transition: { duration: 0.8, type: "spring", stiffness: 50, mass: 2 } }}
            whileTap={{ scale: 0.9 }}
            className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.home}
            </motion.button>
        </Link>
        <Link href='/lyrics'>
            <motion.button
            whileHover={{scale: 1.1, rotate: 360, transition: { duration: 0.8, type: "spring", stiffness: 50, mass: 2 } }}
            whileTap={{ scale: 0.9, rotate: 360, transition: { duration: 0.8, type: "spring", stiffness: 50, mass: 2 } }}
            className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.lyrics}
            </motion.button>
        </Link>
        <Link href='/mailingList'>
            <motion.button
            whileHover={{scale: 1.1, rotate: 360, transition: { duration: 0.8, type: "spring", stiffness: 35, mass: 2 } }}
            whileTap={{ scale: 0.9 }}
             className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.mailingList}
             </motion.button>
        </Link>
        <Link href='/contact'>
            <motion.button
            whileHover={{scale: 1.1, rotate: 360, transition: { duration: 0.8, type: "spring", stiffness: 40, mass: 2 } }}
            whileTap={{ scale: 0.9 }}
            className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.contact}
            </motion.button>
        </Link>
        </div>
        </>
    )
}