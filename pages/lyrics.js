import { config } from "../config"
import { Navbar } from "../components/Navbar"
import { motion } from "framer-motion"
import { useState } from "react"
import TransitionWrapper from "../components/TransitionWrapper"

export default function Lyrics({ configData }) {
    return (
    <div className="bg-album-cover bg-right-top" style={{background: `${configData.backgroundImage}`, backgroundPosition: "right top", backgroundSize: '450%'}}>
        <div className="bg-black bg-opacity-50">
        <TransitionWrapper>
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-right-top bg-album-cover" style={{background: `${configData.backgroundImage}`, backgroundPosition: "right top", backgroundColor: `${configData.bgColor}`, backgroundSize: '450%'}}>
        <div className="flex-grow flex-col justify-center align-center w-full scroll-smooth overflow-y-scroll lg:w-1/2 md:w-1/3 h-[300%] lg:h-1/2 md:h-1/2 items-center">
            <div className="h-5/6 overflow-y-scroll scroll-smooth text-center text-white outline-2 border-warlock-400/20 rounded-b-lg rounded-t-lg">
                
            <h1 className="animate-pulse text-center text-3xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Shy Guy</h1>
                {configData.shyGuy.map(line => (
                    (line === 'break' ?
                    <br key={line}></br> :
                    <p key={line}>{line}</p>)
                ))}
                {/* <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.8 }}
                > */}
            <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Sooner or Later</h1>
            {/* </motion.div> */}
            {configData.soonerOrLater.map(line => (
                    (line === 'break' ?
                    <br key={line}></br> :
                    <p key={line}>{line}</p>)
                ))}
                <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Your Room</h1>
            {configData.yourRoom.map(line => (
                    (line === 'break' ?
                    <br key={line}></br> :
                    <p key={line}>{line}</p>)
                ))}
                   <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Two Hearts</h1>
            {configData.twoHearts.map(line => (
                    (line === 'break' ?
                    <br key={line}></br> :
                    <p key={line}>{line}</p>)
                ))}
                <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Say It Again</h1>
            {configData.sayItAgain.map(line => (
                    (line === 'break' ?
                    <br key={line}></br> :
                    <p key={line}>{line}</p>)
                ))}
                <h1 className="animate-pulse text-center text-2xl font-bold mt-1 mb-1 text-warlock-400/90 text-shadow-lg shadow-warlock-400">Better in Writing</h1>
            {configData.betterInWriting.map(line => (
                    (line === 'break' ?
                    <br key={line}></br> :
                    <p key={line}>{line}</p>)
                ))}
                
        </div>

        </div>
        <div>

        </div>
    </div>
    </TransitionWrapper>
    </div>
    </div>
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