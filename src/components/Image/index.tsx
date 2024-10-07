interface IImage {
    url: string
}

export const Image = ({ url }: IImage) => {
    return (
        <img className="w-1/2 object-contain" src={url} />
    )
}