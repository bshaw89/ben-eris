import { config } from "../config"
import { Navbar } from "../components/Navbar"
import TransitionWrapper from "../components/TransitionWrapper"
import Image from "next/image"

export default function Contact({ configData }) {
    return (
        <div className="" style={{background: `${configData.backgroundImage}`, backgroundSize: '250%'}}>
    <div className="bg-black bg-opacity-50" style={{background: `${configData.backgroundImage}`, backgroundSize: '250%'}}>
        <TransitionWrapper>
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-auto" style={{background: `${configData.backgroundImage}`, backgroundSize: '250%'}}>
        <div className="flex flex-row justify-center align-center w-full h-[300%] items-center">
        <Image src="/static/images/ben-eris-contact-card.png" alt="The email address of Ben Eris." width={500} height={500}></Image>
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