interface ITitleHeader {
    title: string
    img: string
}

export const TitleHeader = ({
    title,
    img
}: ITitleHeader) => {
    return (
        <span>
            
            <p>{title}</p>
        </span>
    )
}