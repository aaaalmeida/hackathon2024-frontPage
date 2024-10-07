interface IText {
    title?: string
    text: string
}

export const Text = ({ text, title }: IText) => {
    return (
        <div className="flex-shrink text-white font-mono">
            {title && <h3 className="text-2xl mb-4">{title}</h3>}
            <p className="text-justify">{text}</p>
        </div>
    )
}