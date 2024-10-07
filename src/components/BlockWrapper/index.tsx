import { ReactNode } from "react"

interface IBlockWrapper {
    children: ReactNode | ReactNode[]
}

export const BlockWrapper = ({children}: IBlockWrapper) => {
    const renderChildrenContent = Array.isArray(children) ? children : [children]

    return (
        <div className="flex justify-center space-x-4 px-10 w-full">
            {renderChildrenContent}
        </div>
    )
}