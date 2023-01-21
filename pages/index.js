import Avatar from "../components/Avatar"
import IconBar from "../components/IconBar"
import { config } from "../config"
import Head from "next/head"
import { Navbar } from "../components/Navbar"
import TransitionWrapper from "../components/TransitionWrapper"
import { AnimatePresence, easeInOut, motion } from "framer-motion"

export default function Home() {
  
  return (
    <div className="bg-album-cover bg-right" style={{backgroundSize: '250%'}}>
      <div className="bg-black bg-opacity-50">
        {/* <div className="bg-black opacity-50"> */}

    <TransitionWrapper>
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-auto bg-album-cover bg-right" style={{backgroundColor: `${config.bgColor}`, backgroundSize: '250%'}}>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href={(process.env.NEXT_PUBLIC_CLOUDIMG_TOKEN) ? `https://${process.env.NEXT_PUBLIC_CLOUDIMG_TOKEN}.cloudimg.io/${config.avatar}?radius=500` : `${config.avatar}`} />
      </Head>
      <div className="flex flex-col justify-center align-center w-full lg:w-1/2 md:w-1/3 h-[80%] lg:h-1/2 md:h-1/2 items-center">
        <div className="hover:animate-pulse w-full h-1/4 flex flex-col justify-start items-center">
          <h1 className="text-center text-shadow-lg shadow-red-400 text-6xl font-bold mt-1 mb-1 text-white">{config.firstName}</h1>
          <h1 className="text-center text-shadow-lg shadow-red-400 text-6xl font-bold mt-1 mb-1 text-white">{config.lastName}</h1>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          <Avatar />

        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          {/* <motion.div
          animate={{
            scale: [1, 1.001, 1.002, 1.003, 1.004, 1.005, 1.006, 1.007, 1.008, 1.009, 1.01, 1.01, 1.009, 1.008, 1.007, 1.006, 1.005, 1.004, 1.003, 1.002, 1.001, 1],
          }}
          transition={{default: {repeat: Infinity, ease: "linear", duration: 2}}}
          > */}
          <h1 className="animate-pulse text-[${config.textColor}] text-shadow-lg shadow-white text-center text-xl font-normal mt-1" style={{color: `${config.textColor}`}}>{config.description}</h1>
          {/* </motion.div> */}
          <div className="w-full h-1/4 mt-5 lg:mt-3 md:mt-3">
            <IconBar />
          </div>
        </div>
          
      </div>
    </div>
    </TransitionWrapper>
    </div>
    </div>
  )
}