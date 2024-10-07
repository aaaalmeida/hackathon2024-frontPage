import { ReactNode } from "react"

interface IMainBody {
    children?: ReactNode
}

export const MainBody = ({ children }: IMainBody) => {
    return (
        <main className="bg-zinc-900 px-24 py-6 h-full w-full">
            {children}
        </main>
    )
}