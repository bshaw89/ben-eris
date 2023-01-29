import { config } from "../config"
import { Navbar } from "../components/Navbar"
// import { MailingForm } from "../components/MailingForm"
import MailchimpFormContainer from "../components/MailingForm"
import TransitionWrapper from "../components/TransitionWrapper"
import { useState } from "react"

export default function MailingList({ configData }) {



    return (
        <div className="bg-album-cover bg-center" style={{background: `${configData.backgroundImage}`, backgroundPosition: "center", backgroundSize: '250%'}}>
        <div className="bg-black bg-opacity-50">

        <TransitionWrapper>
        <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-auto bg-album-cover bg-center" style={{background: `${configData.backgroundImage}`, backgroundPosition: "center", backgroundColor: `${configData.bgColor}`, backgroundSize: '250%'}}>
        <div className="flex flex-row justify-center align-center w-full lg:w-1/2 md:w-1/3 h-[300%] lg:h-1/2 md:h-1/2 items-center landscape:items-start landscape:h-full">
            <MailchimpFormContainer />
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