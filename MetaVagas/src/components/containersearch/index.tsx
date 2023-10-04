import MapPin from "../../assets/icons/mapPin"
import Bloom from "../../assets/icons/search"
import { ButtonSearch, Container, ContentInputLocation, ContentInputSearch, IconPin, IconSearch, InputContainer, InputLocation, InputSearch, Title } from "./styled"


export const ContainerSearch = () => {

    return (
        <Container>
            <InputContainer>
                <ContentInputSearch>
                <Title>O que você procura?</Title>
                <IconSearch>
                    <Bloom/>
                </IconSearch>
                <InputSearch type="text" placeholder="Cargo, tecnologia ou palavra-chave"/>
                </ContentInputSearch>
                <ContentInputLocation>
                    <Title>
                        Onde?
                    </Title>
                    <IconPin>
                        <MapPin />
                    </IconPin>
                    <InputLocation type="text" placeholder="Localização"/>
                </ContentInputLocation>
                <ButtonSearch>
                    Buscar
                </ButtonSearch>
            </InputContainer>
        </Container>
    )
}