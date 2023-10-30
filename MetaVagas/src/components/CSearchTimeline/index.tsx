import { useState } from "react"
import MapPin from "../../assets/icons/mapPin"
import Bloom from "../../assets/icons/search"
import { ButtonSave, ButtonSearch, ButtonVacancie, Container, ContainerButton, ContainerInputL, ContainerInputS, ContainerText, IconPin, IconSearch, InputContainer, InputLocation, InputSearch, InputTitle, Text, TextItalic } from "./styled"
import IconBookMark from "../../assets/icons/BookMark"

type searchFilter = {
    techsParam: string[],
    vacancyType: string[],
    workType: string[],
    companySize: string[],
    vacancyLevel: [],
    role : string,
    local : string,
    maxValue: number,
    minValue: number,
}
type searchParams = "techsParam" | "vacancyType" | "workType" | "companySize" | "vacancyLevel" | "local" | "keyWord"
type props = { 
    handleMyValue : (shouldPush: boolean, whereToUpdate: searchParams, whatValue: string) => void,
    searchFilters: searchFilter,
    applyFilters: () => void,
 }

export const CSearchTimeline = ({handleMyValue, applyFilters} : props) => {
    const [isActive, setIsActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    //const [searchResult, setSearchResult] = useState<Vacancies | null>(null);
    
    const handleClick = () => {
        handleMyValue(true, "keyWord", searchTerm);
        handleMyValue(true, "local", location);
        
        setTimeout(() => {
            applyFilters()
        }, 100);

    }
    //const handleSearch = async () => {
       // try {
        //    const locationString = location ? 'true' : 'false';
       //     const results = await GetAllVacanciesService(undefined, undefined, undefined, undefined, undefined, undefined, undefined, locationString, searchTerm);

        //    if (results instanceof Array) {
        //        setSearchResult(results);
        //    } else {
        //        setSearchResult({ vacancies: [], page: 0, pageSize: 0, quantity: 0 });
        //    }
        //} catch (error) {
        //    console.error("Erro na busca de vagas:", error)
        //    setSearchResult({ vacancies: [], page: 0, pageSize: 0, quantity: 0 });
       // }
   // }

    return (
        <Container>
            <InputContainer>
                <ContainerInputS>
                    <InputTitle>O que você procura?</InputTitle>
                    <IconSearch>
                        <Bloom />
                    </IconSearch>
                    <InputSearch type="text" placeholder="Cargo, tecnologia ou palavra-chave" onChange={(e) => setSearchTerm(e.target.value)} />
                </ContainerInputS>
                <ContainerInputL>
                    <InputTitle>Onde?</InputTitle>
                    <IconPin>
                        <MapPin />
                    </IconPin>
                    <InputLocation type="text" placeholder="Localização" onChange={(e) => setLocation(e.target.value)} />
                </ContainerInputL>
                <ButtonSearch onClick={handleClick}>
                    Buscar vagas
                </ButtonSearch>
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
            <ContainerText>
                <Text>
                    Salve essa busca,
                    <TextItalic>
                        te avisaremos por e-mail
                    </TextItalic>
                    quando encontrarmos mais vagas
                </Text>
                <ButtonSave>
                    <IconBookMark />
                    Salvar busca
                </ButtonSave>
            </ContainerText>
        </Container>
    )
}