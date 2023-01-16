import { config } from "../config"
import { Navbar } from "../components/Navbar"
import { motion } from "framer-motion"
import { useState } from "react"
import TransitionWrapper from "../components/TransitionWrapper"

export default function Lyrics() {
    return (
    <div className="bg-album-cover bg-right-top" style={{backgroundSize: '450%'}}>
        <TransitionWrapper>
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-right-top bg-album-cover" style={{backgroundColor: `${config.bgColor}`, backgroundSize: '450%'}}>
        <div className="flex-grow flex-col justify-center align-center w-full scroll-smooth overflow-y-scroll lg:w-1/2 md:w-1/3 h-[300%] lg:h-1/2 md:h-1/2 items-center">
            <div className="columns-1 text-center text-white">
            <h1 className="animate-pulse text-center text-3xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Shy Guy</h1>
                {config.shyGuy.map(line => (
                    (line === 'break' ?
                    <br></br> :
                    <p>{line}</p>)
                ))}
            <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Sooner or Later</h1>
            {config.soonerOrLater.map(line => (
                    (line === 'break' ?
                    <br></br> :
                    <p>{line}</p>)
                ))}
                <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Your Room</h1>
            {config.yourRoom.map(line => (
                    (line === 'break' ?
                    <br></br> :
                    <p>{line}</p>)
                ))}
                   <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Two Hearts</h1>
            {config.twoHearts.map(line => (
                    (line === 'break' ?
                    <br></br> :
                    <p>{line}</p>)
                ))}
                <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Say It Again</h1>
            {config.sayItAgain.map(line => (
                    (line === 'break' ?
                    <br></br> :
                    <p>{line}</p>)
                ))}
                <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Better in Writing</h1>
            {config.betterInWriting.map(line => (
                    (line === 'break' ?
                    <br></br> :
                    <p>{line}</p>)
                ))}
        </div>

        </div>
        <div>

        </div>
        <Navbar />
    </div>
    </TransitionWrapper>
    </div>
    )
}