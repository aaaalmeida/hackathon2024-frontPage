import { ReactNode } from "react"

interface IMainBody {
    children?: ReactNode
}

export const MainBody = ({ children }: IMainBody) => {
    return (
        <main className="bg-zinc-900 px-24 h-screen w-screen">
            {children}
        </main>
    )
}