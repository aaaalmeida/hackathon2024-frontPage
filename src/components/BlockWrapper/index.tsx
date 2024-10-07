import { ReactNode } from "react"

interface IBlockWrapper {
    children: ReactNode | ReactNode[]
}

export const BlockWrapper = ({ children }: IBlockWrapper) => {
    const renderChildrenContent = Array.isArray(children) ? children : [children]

    return (
        <section className='flex justify-center space-x-10 w-full'>
            {renderChildrenContent}
        </section>
    )
}