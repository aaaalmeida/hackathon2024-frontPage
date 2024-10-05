import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ITitleHeader {
    title: string
    icon: IconProp
}

export const TitleHeader = ({
    title,
    icon
}: ITitleHeader) => {
    return (
        <span className="flex bg-blue-200 w-96 h-14">
            <FontAwesomeIcon size="2x" icon={icon} className="self-center" />
            <p className="self-center">{title}</p>
        </span>
    )
}