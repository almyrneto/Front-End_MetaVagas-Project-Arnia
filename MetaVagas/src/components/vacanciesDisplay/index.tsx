import S from "./styled.ts"
import Checkbox from "./checkbox.tsx"
import { useEffect, useState } from "react";
import coin from "../../assets/icons/money-dollar-circle-line.svg"
import MapPinLine from "../../assets/icons/map-pin-line-orange.tsx";
import ComputerIcon from "../../assets/icons/computer-line.tsx";
import MinimumDistanceSlider from "./slider.tsx";
import BarChartComponent from "./barChart.tsx";
import { Tecnologies, Vacancies } from "../../services/services-utils/types.ts";


type searchFilter = {
    techsParam: string[],
    vacancyType: string[],
    workType: string[],
    companySize: string[],
    vacancyLevel: [],
    role: string,
    local : string,
    maxValue: number,
    minValue: number,
}

type searchParams = "techsParam" | "vacancyType" | "workType" | "companySize" | "vacancyLevel" | "local" | "keyWord"

type props = {
    logged: boolean,
    updateSearch: (shouldPush: boolean, whereToUpdate: searchParams, whatValue: string) => void,
    applyFilters: () => void,
    searchFilters: searchFilter,
    allVacanciesFiltered: Vacancies | undefined,
    setSearchFilters: (searchFilters : searchFilter) => void,
    techs : Tecnologies | undefined,
    getSliderValues : (minValue: number, maxValue: number) => void,
    setTechs : (whatTechs : string[]) => void,
    locationMessage : string,
    reduceArray : (size : number) => void
}
export const VacanciesDisplay = ({ logged, setSearchFilters, searchFilters, applyFilters, updateSearch,
     allVacanciesFiltered, techs, getSliderValues, setTechs, locationMessage, reduceArray }: props) => {
    const [checked, setChecked] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [vacanciesType, setVacanciesType] = useState(['remoto', 'presencial', 'híbrido'])
    const [workType, setWorkType] = useState(['clt', 'pj'])
    const [companySize, setCompanySize] = useState(['pequena', 'média', 'grande'])
    const [vacancyLevel, setVacancyLevel] = useState(['junior', 'pleno', 'senior'])

    useEffect(() => {
        setIsLogged(logged)
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setChecked(false)
        //setTechs(technologies)
        setVacanciesType(['remoto', 'presencial', 'híbrido'])
        setCompanySize(['pequena', 'média', 'grande'])
        setVacancyLevel(['junior', 'pleno', 'senior'])
        setWorkType(['clt', 'pj'])
    }, [techs])
    function offSwitch() {
        setTechs([])
        setVacanciesType([])
        setWorkType([])
        setCompanySize([])
        setVacancyLevel([])
        setSearchFilters({
            techsParam: [], vacancyType: [], workType: [], companySize: [], vacancyLevel: [], minValue: 0, maxValue: 100000, role : "", local : ""
        })
        setTimeout(() => {
            reduceArray(9)
        }, 1);
    }

    return (
        <S.Container>
            <h1>VAGAS EM <span>REACT</span></h1>
            <p>{allVacanciesFiltered?.vacancies.length} Vagas em React</p>
            <S.Display checked logged={isLogged}>
                <div className="filters">
                    <div className="title"><h3>Filtre sua busca</h3><a onClick={() => { offSwitch(); }}>limpar</a></div>
                    <span>Tecnologia</span>
                    {techs && techs.map((tech) => {
                        let techState = checked
                        locationMessage === tech.tecName.toLowerCase().trim() ? techState = true : techState = false
                        return (
                            <Checkbox content={tech.tecName} state={techState} key={tech.id} stateType="techsParam" handleMyValue={updateSearch} />
                        )
                    })}
                    <br /><span>Tipo de vaga</span><br />
                    {vacanciesType.map((vacancyType, index) => {
                        return (
                            <Checkbox content={vacancyType} state={checked} key={index} stateType="vacancyType" handleMyValue={updateSearch} />
                        )
                    })}
                    <br /><span>Regime de trabalho</span><br />
                    {workType.map((type, index) => {
                        return (
                            <Checkbox content={type} state={checked} key={index} stateType="workType" handleMyValue={updateSearch} />
                        )
                    })}
                    <br /><span>Tamanho da empresa</span><br />
                    {companySize.map((size, index) => {
                        return (
                            <Checkbox content={size} state={checked} key={index} stateType="companySize" handleMyValue={updateSearch} />
                        )
                    })}
                    <MinimumDistanceSlider getSliderValues={getSliderValues} ></MinimumDistanceSlider>
                    <br /><span>Nível de experiência</span><br />
                    {vacancyLevel.map((level, index) => {
                        return (
                            <Checkbox content={level} state={checked} key={index} stateType="vacancyLevel" handleMyValue={updateSearch} />
                        )
                    })}
                    <button onClick={() => { console.log(JSON.stringify(searchFilters)); applyFilters() }}>Filtrar</button>
                </div>
                <div className="vacancies">
                    <div className="grafic_box">
                        <h3>Tecnologias mais procuradas em <span>Brasil</span></h3>
                        <BarChartComponent />
                    </div>
                    <div className="grafic_box">
                        <h3>Cidades que mais procuram por <span>React</span></h3>
                        <BarChartComponent />
                    </div>
                    <>{allVacanciesFiltered?.vacancies.map((vacancy) => {
                        return (
                            <><div className="vacancy_box">
                                <div className="jobTitle">
                                    <h3>{vacancy.vacancyRole}</h3>
                                    <h4>INFOJOBS * <span>{new Date().getDate().toString()} {new Date().toDateString().split(" ")[1]}</span></h4>
                                </div>
                                <h5>{vacancy.companyId}</h5>
                                <div className="technologies">
                                    {
                                        vacancy.tecnologies.map((tech) => {
                                            return (
                                                <>
                                                    <div className="technology_in_this_vacancy">
                                                        {
                                                            //passa a ser um array de technology
                                                            tech.tecName
                                                        }
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="vacancyInfo">
                                    <img src={coin} alt="icon" /><p>faixa salarial: <span>{vacancy.wage}</span></p>
                                    <MapPinLine color="#FBB04D" size={16} /><p>Localização: <span>{vacancy.location}</span></p>
                                    <ComputerIcon color="#FBB04D" size={16} /><p>tipo de vaga: <span>{vacancy.vacancyType}</span></p>
                                </div>
                                <p>
                                    {vacancy.vacancyDescription}
                                </p>
                            </div></>
                        )
                    })
                    }</>
                </div>
            </S.Display>
        </S.Container>
    )
}