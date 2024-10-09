interface IImage {
    url: string
    rounded?: boolean
    size?: number
    tailwind?: string
}

export const Image = ({ url, rounded, size, tailwind }: IImage) => {
    return (
        <img className={`object-contain ${size ? 'w-' + size + ' h-' + size : 'w-1/2'} ${rounded ? 'rounded-full' : ''} ${tailwind}`} src={url} />
    )
}