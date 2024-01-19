import { FaPlay } from "react-icons/fa"
import { GoPlus } from "react-icons/go"
import HeroItemCaraousel from "./HeroItemCaraousel"

export default function HeroItemButton() {
    return <div className="flex justify-between items-center">
        <div className="flex gap-4 flex-wrap">
            <button className="text-base md:text-xl font-bold py-3 px-10 md:px-20 rounded-md flex gap-4 items-center bg-white bg-opacity-30">
                <FaPlay />
                Watch now
            </button>
            <button className="text-lg md:text-3xl font-normal py-3 px-6 rounded-md bg-white bg-opacity-30"><GoPlus /></button>
        </div>
        <HeroItemCaraousel />
    </div>
}