interface IPartnerSpam {
    logo: string
    isLast?: boolean
}

export const PartnerSpam = ({ logo, isLast}: IPartnerSpam) => {
    return (
        <figure className={`rounded rounded-lg bg-white w-48 ${isLast ? 'col-span-1 col-start-2' : ''}`}>
            <img src={logo} />
        </figure>
    )
}