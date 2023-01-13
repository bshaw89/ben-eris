import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { config } from "../config"

export const Navbar = () => {
    
    return (
        <>
        <div className="flex flex-wrap w-full h-1/4 gap-5 justify-center items-end">
        <Link href='/'>
            <h1 className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:opacity-50" style={{color: `${config.textColor}`}}>{config.home}</h1>
        </Link>
        <Link href='/lyrics'>
            <h1 className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:opacity-50" style={{color: `${config.textColor}`}}>{config.lyrics}</h1>
        </Link>
        <Link href='/mailingList'>
            <h1 className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:opacity-50" style={{color: `${config.textColor}`}}>{config.mailingList}</h1>
        </Link>
        <Link href='/contact'>
            <h1 className="text-center text-xl font-bold mt-1 mb-1 opacity:50 hover:opacity-50" style={{color: `${config.textColor}`}}>{config.contact}</h1>
        </Link>
        </div>
        </>
    )
}