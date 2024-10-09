import { ITags } from "./ITags"

export interface IMentor {
    image: string
    tags: ITags | ITags[]
    name: string
    company: string
    text: string
}
