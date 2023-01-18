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
        <h1 className="text-center text-xl font-bold mt-1 mb-1" style={{color: `${config.emailColor}`}}>{config.emailFirst}</h1>
        <h1 className="text-center text-xl font-bold mt-1 mb-1" style={{color: `${config.textColor}`}}>{config.emailAt}</h1>
        <h1 className="text-center text-xl font-bold mt-1 mb-1" style={{color: `${config.emailColor}`}}>{config.emailSecond}</h1>
        </div>
        <div>

        </div>
        <Navbar />
    </div>
    </TransitionWrapper>
    </div>
    </div>
    )
}