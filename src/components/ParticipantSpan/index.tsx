import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleLine } from "@fortawesome/free-solid-svg-icons"

interface IParticipantSpan {
    teamName: string
}

export const ParticipantSpan = ({ teamName }: IParticipantSpan) => {
    return (
        <span className="grid p-4 border border-blue-600 animate-pulse rounded text-center justify-items-center">
            <FontAwesomeIcon icon={faPeopleLine} className="text-sky-500 w-10 h-10" />
            <p className="text-white">{teamName}</p>
        </span>
    )
}