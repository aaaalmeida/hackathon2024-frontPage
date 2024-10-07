import ReactPlayer from 'react-player/youtube'
import { faShareAlt, faCity } from "@fortawesome/free-solid-svg-icons"
import { Marker } from "./components/Marker"
import { MainBody } from "./components/MainBody"
import { Text } from "./components/Text"
import { useEffect, useState } from "react"
import { BlockWrapper } from "./components/BlockWrapper"

const App = () => {
  const [TPresentation, setTPresentation] = useState<string>('yhtrde')

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await fetch("/paragraphs/PresentationText.txt")
        const text = await response.text()
        setTPresentation(text)
      } catch (error) {
        console.error("Could not load file:", error)
      }
    }

    fetchText()
  }, [])

  return (
    <>
      <MainBody>
        <Marker title="Apresentação" icon={faShareAlt} />
        <BlockWrapper>
          <Text text={TPresentation} />
          <ReactPlayer url='https://www.youtube.com/watch?v=i8sCrAUzvAk&t=1s' />
        </BlockWrapper>

        <Marker title="O Hackathon" icon={faCity} />
      </MainBody>
    </>
  )
}

export default App