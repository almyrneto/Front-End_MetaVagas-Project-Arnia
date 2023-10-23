import S from "./styled.ts"
import Checkbox from "./checkbox.tsx"
import { vacancies } from "../../assets/files/vacancies.ts"
import { technologies } from "../../assets/files/technologies.ts"
import { useState } from "react";

export const VacanciesDisplay = () => {
    const[checked, setChecked] = useState(false)
    return (
        <S.Container>
            <h1>VAGAS EM <span>REACT</span></h1>
            <p>{vacancies.length} Vagas em React</p>
            <S.Display>
                <div className="filters">
                    <div className="title"><h3>Filtre sua busca</h3><a>limpar</a></div>
                    <span>Tecnologia</span>
                    {technologies.map((tech) => {
                        return (
                            <Checkbox content={tech.techName} state={checked}/>
                        )
                    })}
                    <br /><span>Tipo de vaga</span><br />
                    <Checkbox content="remoto" state={false}/>
                    <Checkbox content="presencial" state={false}/>
                    <Checkbox content="híbrido" state={false}/>
                    <br /><span>Regime de trabalho</span><br />
                    <Checkbox content="clt" state={false}/>
                    <Checkbox content="pj" state={false}/>
                    <br /><span>Tamanho da empresa</span><br />
                    <Checkbox content="pequena" state={false} />
                    <Checkbox content="média" state={false}/>
                    <Checkbox content="grande" state={false}/>
                    <br /><span>Nível de experiência</span><br />
                    <Checkbox content="júnior" state={false}/>
                    <Checkbox content="pleno" state={false}/>
                    <Checkbox content="trainee" state={false}/>
                    <button>Filtrar</button>
                </div>
                <div className="vacancies">
                    {vacancies.map((vacancy) => {
                        return (
                            <div className="vacancy_box">
                                <h3>{vacancy.vacancyRole}</h3>
                                <h5>INFOJOBS * <span>{new Date().getDate().toString()} {new Date().toDateString().split(" ")[1]}</span></h5>
                                <div className="technologies">
                                {
                                    vacancy.technologies.map((tech) => {
                                        return (
                                            <div className="technology_in_this_vacancy">
                                                {
                                                    //passa a ser um array de technology
                                                    tech
                                                }
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                <p>
                                    {vacancy.vacancyDescription}
                                </p>
                            </div>
                        )
                    })
                    }
                </div>
            </S.Display>
        </S.Container>
    )
}