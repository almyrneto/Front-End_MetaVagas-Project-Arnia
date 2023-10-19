import MapPin from "../../assets/icons/mapPin"
import Bloom from "../../assets/icons/search"
import { ButtonSearch, Container, ContainerInputL, ContainerInputS, IconPin, IconSearch, InputContainer, InputLocation, InputSearch, InputTitle } from "./styled"


export const CSearchTimeline = () => {

    return (
        <Container>
            <InputContainer>
                <ContainerInputS>
                    <InputTitle>O que você procura?</InputTitle>
                    <IconSearch>
                        <Bloom />
                    </IconSearch>
                    <InputSearch type="text" placeholder="Cargo, tecnologia ou palavra-chave"/>
                </ContainerInputS>
                <ContainerInputL>
                    <InputTitle>Onde?</InputTitle>
                    <IconPin>
                        <MapPin />
                    </IconPin>
                    <InputLocation type="text" placeholder="Localização" />
                </ContainerInputL>
                <ButtonSearch>Buscar vagas</ButtonSearch>
            </InputContainer>
        </Container>
    )
}