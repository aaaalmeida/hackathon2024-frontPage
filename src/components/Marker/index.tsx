import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IMarker {
    title: string
    icon: IconProp
}

export const Marker = ({
    title,
    icon
}: IMarker) => {
    return (
        <div className="flex items-center bg-gradient-to-r from-blue-600 to-gray-800 rounded-l-full pr-64 h-fit w-fit my-4">
            <div className="relative flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full">
                <FontAwesomeIcon size="2x" icon={icon} className="text-white w-6 h-6" />
                <div className="absolute inset-0 rounded-full border-2 border-white" />
            </div>
            <span className="ml-4 text-white font-semibold text-2xl">{title}</span>
        </div>
    )
}