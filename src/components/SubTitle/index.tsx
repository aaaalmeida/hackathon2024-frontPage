interface ITitle {
    title: string
}

export const SubTitle = ({title}: ITitle) => {
    return (
        <h3 className="font-bold text-white font-mono text-2xl mb-4">{title}</h3>
    )
} 