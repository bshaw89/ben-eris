import Avatar from "../components/Avatar"
import IconBar from "../components/IconBar"
import { config } from "../config"
import Head from "next/head"
import { Navbar } from "../components/Navbar"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-auto bg-album-cover bg-right" style={{backgroundColor: `${config.bgColor}`, backgroundSize: '250%'}}>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href={(process.env.NEXT_PUBLIC_CLOUDIMG_TOKEN) ? `https://${process.env.NEXT_PUBLIC_CLOUDIMG_TOKEN}.cloudimg.io/${config.avatar}?radius=500` : `${config.avatar}`} />
      </Head>
      <div className="flex flex-col justify-center align-center w-full lg:w-1/2 md:w-1/3 h-[80%] lg:h-1/2 md:h-1/2 items-center">
        <div className="w-full h-1/4 flex flex-col justify-start items-center">
          <h1 className="text-center text-6xl font-bold mt-1 mb-1" style={{color: `${config.textColor}`}}>{config.firstName}</h1>
          <h1 className="text-center text-6xl font-bold mt-1 mb-1" style={{color: `${config.textColor}`}}>{config.lastName}</h1>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          <Avatar />

        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center">
          <h1 className="text-[${config.textColor}] text-center text-xl font-normal mt-1" style={{color: `${config.textColor}`}}>{config.description}</h1>
          <div className="w-full h-1/4 mt-5 lg:mt-3 md:mt-3">
            <IconBar />
          </div>
        </div>
          
      </div>
        <Navbar />
      
    </div>
  )
}