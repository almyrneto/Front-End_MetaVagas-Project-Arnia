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
                <TextCard>Crie sua conta em segundos e desfrute de todos os benefícios. Comece agora mesmo!</TextCard>
            </CardTuto>
            <CardTuto>
                <NumberCard>02</NumberCard>
                <TitleCard>Busque pela sua vaga</TitleCard>
                <TextCard>Encontre sua vaga em poucos minutos!</TextCard>
            </CardTuto>
            <CardTuto>
                <NumberCard>03</NumberCard>
                <TitleCard>Receba Sugestões</TitleCard>
                <TextCard>Encontre a vaga ideal para você. Use nossa busca eficiente para descobrir oportunidades!</TextCard>
            </CardTuto>
        </ContentCard>

    )
}