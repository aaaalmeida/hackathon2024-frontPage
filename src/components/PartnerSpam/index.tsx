interface IPartnerSpam {
    logo: string
    isLast?: boolean
}

export const PartnerSpam = ({ logo, isLast}: IPartnerSpam) => {
    return (
        <figure className={`rounded rounded-lg bg-white w-64 h-40 ${isLast ? 'col-span-1 col-start-2' : ''}`}>
            <img className="place-self-center max-h-full max-w-full" src={logo} />
        </figure>
    )
}