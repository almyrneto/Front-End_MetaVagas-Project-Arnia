import { CSearchTimeline } from "../components/CSearchTimeline"
import { Footer } from "../components/footer"
import { HeaderTimeline } from "../components/headerTimeline"
import { VacanciesDisplay } from "../components/vacanciesDisplay"
import { useEffect, useState } from "react";
import { Tecnologies, Vacancies } from "../services/services-utils/types";
import { useLocation } from "react-router-dom";
import { GetAllVacanciesService } from "../services/vacancy";
import { GetAllTecnologiesService } from "../services/tecnology";


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

export const VacanciesPage = () => {

    const [searchFilters, setSearchFilters] = useState<searchFilter>({
        techsParam: [], vacancyType: [], workType: [], companySize: [], vacancyLevel: [], maxValue: 100000, minValue: 0, local : "", role : ""
    })
    const [error, setError] = useState("")
    const [allVacanciesFiltered, setAllVacanciesFiltered] = useState<Vacancies>()
    const [techs, setTechs] = useState<Tecnologies>()
    const location = useLocation()
    let locationMessage = ""


    if (location.state) {
        locationMessage = location.state.message
    }

    const getTecnologies = async () => {
        try {
            const allTechnologies = await GetAllTecnologiesService()
            return (allTechnologies)
        } catch (er) {
            if (er instanceof Error) {
                alert("não foi possível buscar tecnologias");
                setError(er?.message);
                return;
            }
            console.log(error)
            setError("Deu erro");
        }
    }

    const reduceTechArray = async (howManyTechsUNeed: number) => {
        const allTecnologies = await getTecnologies()
        setTimeout(() => {
            if (allTecnologies && allTecnologies.length !== howManyTechsUNeed) {
                let aux = [...allTecnologies]
                setTechs(aux.slice(aux.length - howManyTechsUNeed))
            }
            else if (allTecnologies) {
                setTechs(allTecnologies)
            }
        }, 1)
    }

    const getVacancies = async (
        page?: number,
        limit?: number,
        tech?: string,
        role?: string,
        wageMax?: number,
        wageMin?: number,
        type?: string,
        local?: string,
        description?: string
    ) => {
        try {
            const allVacanciesFiltered = await GetAllVacanciesService(page, limit, tech, role, wageMax, wageMin, type, local, description)
            setAllVacanciesFiltered(allVacanciesFiltered)
        } catch (er) {
            if (er instanceof Error) {
                alert("não foi possível buscar tecnologias");
                setError(er?.message);
                return;
            }
            console.log(error)
            setError("Deu erro");
        }
    }



    function updateSearch(shouldPush: boolean, whereToUpdate: searchParams, whatValue: string) {
        let aux = searchFilters;
        if (shouldPush) {
            switch (whereToUpdate) {
                case "techsParam":
                    if (!aux.techsParam.find((value) => value === whatValue)) {
                        aux.techsParam.push(whatValue as never);
                    }
                    break;
                case "vacancyType":
                    if (!aux.vacancyType.find((value) => value === whatValue)) {
                        aux.vacancyType.push(whatValue as never);
                    }
                    break;
                case "workType":
                    if (!aux.workType.find((value) => value === whatValue)) {
                        aux.workType.push(whatValue as never);
                    }
                    break;
                case "companySize":
                    if (!aux.companySize.find((value) => value === whatValue)) {
                        aux.companySize.push(whatValue as never);
                    }
                    break;
                case "vacancyLevel":
                    if (!aux.companySize.find((value) => value === whatValue)) {
                        aux.vacancyLevel.push(whatValue as never);
                    }
                    break;
                case "keyWord":
                    if (aux.role !== whatValue) {
                        aux.role = (whatValue as never);
                    }
                    break;
                case "local":
                    if (aux.local !== whatValue) {
                        aux.local = (whatValue as never);
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
        setSearchFilters(aux);
    }

    function getSliderValues(minValue: number, maxValue: number) {
        setSearchFilters({ ...searchFilters, minValue, maxValue })
    }

    const applyFilters = () => {
        getVacancies(1, 20, searchFilters.techsParam[0], searchFilters.role, searchFilters.maxValue, searchFilters.minValue, searchFilters.workType[0], searchFilters.local, "")
    }

    useEffect(() => {
        getVacancies()
        reduceTechArray(9)
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeaderTimeline />
            <CSearchTimeline handleMyValue={updateSearch} applyFilters={applyFilters} searchFilters={searchFilters}/>
            <VacanciesDisplay logged={false} updateSearch={updateSearch}
                searchFilters={searchFilters} applyFilters={applyFilters} techs={techs} getSliderValues={getSliderValues}
                setTechs={() => setTechs} setSearchFilters={setSearchFilters} locationMessage={locationMessage} allVacanciesFiltered={allVacanciesFiltered}
                reduceArray={reduceTechArray} />
            <Footer className={""} />
        </>
    )
}