import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy, faMedal } from "@fortawesome/free-solid-svg-icons"

interface IAward {
    text: string
    isFirst?: boolean
}

export const AwardSpam = ({ text, isFirst }: IAward) => {
    return (
        <span className="bg-gray-800 grid justify-items-center border border-sky-900 rounded p-4">
            <FontAwesomeIcon size="2x" icon={isFirst ? faTrophy : faMedal} className="text-sky-500 w-8 h-8 my-2" />
            <p className="text-center text-white">{text}</p>
        </span>
    )
}