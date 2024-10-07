import {readFile} from 'fs/promises'

export const readTextFile = async (path: string) => {
    try {
        const content = readFile(path, 'utf8')
        console.log(content);
        
        return content
    } catch (error) {
        throw error
    }
}