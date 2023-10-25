import { useState } from "react"
import MapPin from "../../assets/icons/mapPin"
import Bloom from "../../assets/icons/search"
import { ButtonSearch, ButtonVacancie, Container, ContainerButton, ContainerInputL, ContainerInputS, IconPin, IconSearch, InputContainer, InputLocation, InputSearch, InputTitle } from "./styled"


export const CSearchTimeline = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Container>
            <InputContainer>
                <ContainerInputS>
                    <InputTitle>O que você procura?</InputTitle>
                    <IconSearch>
                        <Bloom />
                    </IconSearch>
                    <InputSearch type="text" placeholder="Cargo, tecnologia ou palavra-chave" />
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
            <ContainerButton>
                <ButtonVacancie active={isActive} onClick={() => setIsActive(!isActive)}>
                    java
                </ButtonVacancie>
                <ButtonVacancie active={isActive} onClick={() => setIsActive(!isActive)}>
                    PHP
                </ButtonVacancie>
                <ButtonVacancie active={isActive} onClick={() => setIsActive(!isActive)}>
                    Python
                </ButtonVacancie>
                <ButtonVacancie active={isActive} onClick={() => setIsActive(!isActive)}>
                    React
                </ButtonVacancie>
            </ContainerButton>
        </Container>
    )
}