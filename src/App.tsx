import { useEffect, useState } from "react"
import ReactPlayer from 'react-player/youtube'
import { faShareAlt, faCity, faCalendarDays, faPencil, faHandshake } from "@fortawesome/free-solid-svg-icons"
import { Marker } from "./components/Marker"
import { MainBody } from "./components/MainBody"
import { Text } from "./components/Text"
import { BlockWrapper } from "./components/BlockWrapper"
import { Image } from "./components/Image"
import { AwardSpam } from "./components/AwardSpam"
import { IAward } from "./components/AwardSpam/IAward"
import { Link } from "./components/Link"
import { SubTitle } from "./components/SubTitle"
import { ParticipantSpan } from "./components/ParticipantSpan"
import React from "react"
import { PartnerSpam } from "./components/PartnerSpam"

const App = () => {
  const [TPresentation, setTPresentation] = useState('')
  const [TIntroduction, setTIntroduction] = useState('')
  const [TActivity, setTActivity] = useState('')
  const [TParticipation, setTParticipation] = useState('')
  const [awardText1, setAwardText1] = useState('')
  const [awardText2, setAwardText2] = useState('')

  const [awardInfo, setAwardInfo] = useState<IAward>({ first: '', second: '', third: '' })

  useEffect(() => {
    const fetchText = async () => {
      try {
        const presentation = await fetch("/paragraphs/presentation.txt")
        setTPresentation(await presentation.text())

        const introduction = await fetch("/paragraphs/introduction.txt")
        setTIntroduction(await introduction.text())

        const activity = await fetch("/paragraphs/activities.txt")
        setTActivity(await activity.text())

        const participation = await fetch("/paragraphs/participation.txt")
        setTParticipation(await participation.text())

        const awardText1 = await fetch("/paragraphs/award1.txt")
        setAwardText1(await awardText1.text())

        const awardText2 = await fetch("/paragraphs/award2.txt")
        setAwardText2(await awardText2.text())
      } catch (error) {
        console.error("Could not load file:", error)
      }
    }

    const fetchJSON = async () => {
      try {
        const firstAward = await fetch("src/components/AwardSpam/awardInfo.json")
        setAwardInfo(await firstAward.json())
      } catch (error) {
        console.log(error)
      }
    }

    fetchText()
    fetchJSON()
  }, [])

  return (
    <React.Fragment>
      <MainBody>
        <Marker title="Apresentação" icon={faShareAlt} />
        <BlockWrapper>
          <Text text={TPresentation} />
          <ReactPlayer controls url='https://www.youtube.com/watch?v=i8sCrAUzvAk&t=1s' />
        </BlockWrapper>

        <Marker title="O Hackathon" icon={faCity} />
        <BlockWrapper>
          <Image url='./images/evento20232.png' />
          <Text text={TIntroduction} />
        </BlockWrapper>

        <Marker title="Cronograma" icon={faCalendarDays} />
        <BlockWrapper>
          <Text title="Atividades" list text={TActivity} />
        </BlockWrapper>

        <Marker title="Equipes Inscritas" icon={faPencil} />
        <BlockWrapper>
          <div className="inline-block space-y-6">
            <Text title="Por que participar?" text={TParticipation} />
            <Text title="Premiação" text={awardText1} />
            <div className="flex justify-between space-x-2">
              <AwardSpam text={awardInfo.first} isFirst />
              <AwardSpam text={awardInfo.second} />
              <AwardSpam text={awardInfo.third} />
            </div>
            <Text text={awardText2} />
            <Link text="Clique aqui e veja todos os detalhes do edital." url="https://iftm.edu.br/editais/projetos-de-ensino-pesquisa-e-extensao/eventos-propi/20240806/edital-n-10-2024-edital-de-chamada-publica-do-evento-hackathon-iftm-2024/" />
            <SubTitle title="Equipes Inscritas" />
            <div className="grid grid-cols-4 gap-2">
              <ParticipantSpan teamName="FirstTech" />
              <ParticipantSpan teamName="IDK-ENS" />
              <ParticipantSpan teamName="Synapse" />
              <ParticipantSpan teamName="IAbracadabra" />
              <ParticipantSpan teamName="OtimizaUAI" />
              <ParticipantSpan teamName="Cyber Capybaras" />
              <ParticipantSpan teamName="HackaTroopers" />
              <ParticipantSpan teamName="IAware" />
              <ParticipantSpan teamName="Mineirinhos Tech" />
              <ParticipantSpan teamName="5 caras numa moto" />
              <ParticipantSpan teamName="Uai Tech" />
              <ParticipantSpan teamName="CapiMagos" />
            </div>
          </ div>
          <Image url="./images/Participantes1.png" />
        </BlockWrapper>

        <Marker title="Parceiros" icon={faHandshake} />
        <BlockWrapper>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <PartnerSpam logo="./public/logos/fapemig.png"/>
              <PartnerSpam logo="./public/logos/rrinova.png"/>
              <PartnerSpam logo="./public/logos/uberhub.png"/>
              <PartnerSpam logo="./public/logos/zebuvalley.png"/>
              <PartnerSpam logo="./public/logos/granto.png"/>
              <PartnerSpam logo="./public/logos/criativa.png"/>
              <PartnerSpam isLast logo="./public/logos/sults.png"/>
            </div>
            <Text title="Seja você também um parceiro." text="Confira o edital de patrocinio e entre em contato conoso." />
            <Link text="Clique aqui para ver o edital." url="https://iftm.edu.br/editais/projetos-de-ensino-pesquisa-e-extensao/eventos-propi/20240715/edital-n-09-2024-edital-de-chamada-publica-para-captacao-de-patrocinio-de-empresas-publicos-e-ou-privadas-para-o-evento-hackathon/" />
          </div>
        </BlockWrapper>
      </MainBody>
    </ React.Fragment>
  )
}

export default App