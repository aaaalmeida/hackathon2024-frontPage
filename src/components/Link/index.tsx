interface ILink {
    url: string
    text: string
}

export const Link = ({ url, text }: ILink) => {
    return (
        <a href={url} target="_blank" className="text-blue-500 hover:text-white no-underline hover:underline">{text}</a>
    )
}