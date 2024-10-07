import { SubTitle } from "../SubTitle"

interface IText {
    title?: string
    text: string
    list?: boolean
}

export const Text = ({ text, title, list }: IText) => {
    const toUnordenedList = text.split('\n').map((listItem, index) => {
        return (<li key={`list-item-${index}`}>{listItem}</li>)
    })

    return (
        <div className="flex-shrink text-white font-mono">
            {title && <SubTitle title={title} />}
            {list ? (<ul>{toUnordenedList}</ul>)
                : <p className="text-justify">{text}</p>}
        </div>
    )
}