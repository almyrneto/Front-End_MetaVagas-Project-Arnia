import Bloom from "../../assets/icons/search"
import { ButtonSearch, Container, ContentInputSearch, InputSearch, Title } from "./styled"


export const ContainerSearch = () => {

    return (
        <Container>
            <ContentInputSearch>
                <Title>O que você procura?</Title>
                <ButtonSearch>
                    <Bloom/>
                </ButtonSearch>
                <InputSearch type="text" placeholder="Cargo, tecnologia ou palavra-chave"/>
            </ContentInputSearch>
        </Container>
    )
}