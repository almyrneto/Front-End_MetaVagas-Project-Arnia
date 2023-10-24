import S from "./styled.ts"
import Checkbox from "./checkbox.tsx"
import { vacancies, vacancy } from "../../assets/files/vacancies.ts"
import { technologies } from "../../assets/files/technologies.ts"
import { useEffect, useState } from "react";
import coin from "../../assets/icons/money-dollar-circle-line.svg"
import MapPinLine from "../../assets/icons/map-pin-line-orange.tsx";
import ComputerIcon from "../../assets/icons/computer-line.tsx";

type searchFilter = {
    techsParam: [],
    vacancyType: string[],
    workType: string[],
    companySize: string[],
    vacancyLevel: [],
}

type searchParams = "techsParam" | "vacancyType" | "workType" | "companySize" | "vacancyLevel"

export const VacanciesDisplay = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [searchFilters, setSearchFilters] = useState<searchFilter>({
        techsParam: [], vacancyType: [], workType: [], companySize: [], vacancyLevel: []
    })
    const [techs, setTechs] = useState(technologies)
    const [vacanciesType, setVacanciesType] = useState(['remoto', 'presencial', 'híbrido'])
    const [workType, setWorkType] = useState(['clt', 'pj'])
    const [companySize, setCompanySize] = useState(['pequena', 'média', 'grande'])
    const [vacancyLevel, setVacancyLevel] = useState(['junior', 'pleno', 'senior'])

    function updateSearch(shouldPush: boolean, whereToUpdate: searchParams, whatValue: string) {
        let aux = searchFilters;
        if (shouldPush) {
            switch (whereToUpdate) {
                case "techsParam":
                    if(!aux.techsParam.find((value) => value === whatValue)){
                        aux.techsParam.push(whatValue as never);
                    }
                    break;
                case "vacancyType":
                    if(!aux.vacancyType.find((value) => value === whatValue)){
                        aux.vacancyType.push(whatValue as never);
                    }
                    break;
                case "workType":
                    if(!aux.workType.find((value) => value === whatValue)){
                        aux.workType.push(whatValue as never);
                    }
                    break;
                case "companySize":
                    if(!aux.companySize.find((value) => value === whatValue)){
                        aux.companySize.push(whatValue as never);
                    }
                    break;
                case "vacancyLevel":
                    if(!aux.companySize.find((value) => value === whatValue)){
                        aux.vacancyLevel.push(whatValue as never);
                    }
                    break;
            }
        }
        else {
            whereToUpdate === "techsParam" ? aux.techsParam.splice(aux.techsParam.indexOf(whatValue as never), 1) :
                whereToUpdate === "vacancyType" ? aux.vacancyType.splice(aux.vacancyType.indexOf(whatValue as never), 1) :
                    whereToUpdate === "workType" ? aux.workType.splice(aux.workType.indexOf(whatValue as never), 1) :
                        whereToUpdate === "companySize" ? aux.companySize.splice(aux.companySize.indexOf(whatValue as never), 1) :
                            aux.vacancyLevel.splice(aux.vacancyLevel.indexOf(whatValue as never), 1);
        }
        //alert(JSON.stringify(aux))
        setSearchFilters(aux);
    }

    useEffect(() => {
        setChecked(false)
        setTechs(technologies)
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
            techsParam: [], vacancyType: [], workType: [], companySize: [], vacancyLevel: []
        })
    }

    return (
        <S.Container>
            <h1>VAGAS EM <span>REACT</span></h1>
            <p>{vacancies.length} Vagas em React</p>
            <S.Display>
                <div className="filters">
                    <div className="title"><h3>Filtre sua busca</h3><a onClick={() => { offSwitch(); }}>limpar</a></div>
                    <span>Tecnologia</span>
                    {techs.map((tech) => {
                        return (
                            <Checkbox content={tech.techName} state={checked} key={tech.id} stateType="techsParam" handleMyValue={updateSearch} />
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
                    <br /><span>Nível de experiência</span><br />
                    {vacancyLevel.map((level, index) => {
                        return (
                            <Checkbox content={level} state={checked} key={index} stateType="vacancyLevel" handleMyValue={updateSearch} />
                        )
                    })}
                    <button onClick={() => alert(JSON.stringify(searchFilters))}>Filtrar</button>
                </div>
                <div className="vacancies">
                    <>{vacancies.map((vacancy) => {
                        return (
                            <><div className="vacancy_box">
                                <div className="jobTitle">
                                    <h3>{vacancy.vacancyRole}</h3>
                                    <h4>INFOJOBS * <span>{new Date().getDate().toString()} {new Date().toDateString().split(" ")[1]}</span></h4>
                                </div>
                                <h5>{vacancy.companyId}</h5>
                                <div className="technologies">
                                    {
                                        vacancy.technologies.map((tech) => {
                                            return (
                                                <>
                                                    <div className="technology_in_this_vacancy">
                                                        {
                                                            //passa a ser um array de technology
                                                            tech
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