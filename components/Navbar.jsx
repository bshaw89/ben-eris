import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { config } from "../config"

export const Navbar = () => {
    
    return (
        <>
        <div className="flex flex-wrap w-full h-1/4 gap-5 justify-center items-end">
        <Link href='/'>
            <h1 className="hover:animate-spin text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.home}</h1>
        </Link>
        <Link href='/lyrics'>
            <h1 className="hover:animate-spin text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.lyrics}</h1>
        </Link>
        <Link href='/mailingList'>
            <h1 className="hover:animate-spin text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.mailingList}</h1>
        </Link>
        <Link href='/contact'>
            <h1 className="hover:animate-spin text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:text-warlock-400/90 hover:text-shadow-lg hover:shadow-warlock-400 text-white">{config.contact}</h1>
        </Link>
        </div>
        </>
    )
}