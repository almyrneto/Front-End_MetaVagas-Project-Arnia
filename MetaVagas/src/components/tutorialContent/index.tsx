import HandIcon from "../../assets/icons/hand"
import { CardTuto, ContentCard, NumberCard, TextCard, Title, TitleCard } from "./styled"

export const TutorialContent = () => {

    return (
        <ContentCard>
            <Title>
                Cadastrar na Meta Vagas é simples <HandIcon />
            </Title>
            <CardTuto>
                <NumberCard>01</NumberCard>
                <TitleCard>Crie sua conta</TitleCard>
                <TextCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TextCard>
            </CardTuto>
            <CardTuto>
                <NumberCard>02</NumberCard>
                <TitleCard>Busque pela sua vaga</TitleCard>
                <TextCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TextCard>
            </CardTuto>
            <CardTuto>
                <NumberCard>03</NumberCard>
                <TitleCard>Receba Sugestões</TitleCard>
                <TextCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TextCard>
            </CardTuto>
        </ContentCard>

    )
}