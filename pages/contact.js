import { config } from "../config"
import { Navbar } from "../components/Navbar"
import TransitionWrapper from "../components/TransitionWrapper"

export default function Contact() {
    return (
        <div className="bg-album-cover" style={{backgroundSize: '250%'}}>
    <div className="bg-black bg-opacity-50" style={{backgroundSize: '250%'}}>
        <TransitionWrapper>
    <div className="flex flex-col justify-center items-center w-screen h-screen p-6 bg-auto bg-album-cover" style={{ backgroundSize: '250%'}}>
        <div className="flex flex-row justify-center align-center w-full lg:w-1/2 md:w-1/3 h-[300%] lg:h-1/2 md:h-1/2 items-center">
        <Image src="/contact-card.png"></Image>
        </div>
        <div>

        </div>
    </div>
    </TransitionWrapper>
    </div>
    </div>
    )
}