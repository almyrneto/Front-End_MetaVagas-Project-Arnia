import S from "./styled.ts";
import { useState, useEffect } from "react";
import { vacancies } from "../../assets/files/vacancies.ts";
import characterIcon from "../../assets/icons/user-add-line.svg";
import ComputerIcon from "../../assets/icons/computer-line.tsx";
import goRight from "../../assets/icons/arrow-right-line.svg";
import RolesIcon from "../../assets/icons/roles.tsx";
import MapPinLine from "../../assets/icons/map-pin-line-orange.tsx";
import { useNavigate } from "react-router-dom";

let techs: string[] = [];
type props = "tech" | "local" | "role";

const findTechnologies = (filter: props) => {
  techs = [];
  if (filter === "tech") {
    for (let i = 0; i < vacancies.length; i++) {
      techs = techs.concat(vacancies[i].technologies);
    }
    techs = [...new Set(techs)];
  } else if (filter === "local") {
    for (let i = 0; i < vacancies.length; i++) {
      techs = techs.concat(vacancies[i].location);
    }
    techs = [...new Set(techs)];
  } else {
    for (let i = 0; i < vacancies.length; i++) {
      techs = techs.concat(vacancies[i].vacancyRole);
    }
    techs = [...new Set(techs)];
  }
  return techs;
};

export const SearchFilters = () => {
  const [filter1, setFilter1] = useState(true);
  const [filter2, setFilter2] = useState(false);
  const [filter3, setFilter3] = useState(false);
  const [technologies, setTechnologies] = useState(techs);

  const navigate = useNavigate();

  const navigateToVacancies = (searchForThis: string) => {
    navigate("/vacancies", {
      state: { message: searchForThis.toLowerCase().trim() },
    });
  };

  useEffect(() => {
    findTechnologies("tech");
    setFilter1(true);
    setFilter2(false);
    setFilter3(false);
    setTechnologies(techs);
  }, []);
  useEffect(() => {
    setTechnologies(techs);
  }, [techs]);

  return (
    <>
      <S.Container>
        <div className="full_width between">
          <div className="card_selection">
            <h1>Vagas de emprego em todo o Brasil</h1>
            <div>
              <S.FilterCard
                selected={filter1}
                onClick={() => {
                  findTechnologies("tech");
                  setFilter1(true);
                  setFilter2(false);
                  setFilter3(false);
                }}>
                <ComputerIcon color={filter1 ? "#FBB04D" : "white"} size={24} />
                Tecnologias
              </S.FilterCard>
              <S.FilterCard
                selected={filter2}
                onClick={() => {
                  findTechnologies("local");
                  setFilter1(false);
                  setFilter2(true);
                  setFilter3(false);
                }}>
                <MapPinLine color={filter2 ? "#FBB04D" : "white"} size={24} />
                Cidades
              </S.FilterCard>
              <S.FilterCard
                selected={filter3}
                onClick={() => {
                  findTechnologies("role");
                  setFilter1(false);
                  setFilter2(false);
                  setFilter3(true);
                }}>
                <RolesIcon color={filter3 ? "#FBB04D" : "white"} />
                Cargos
              </S.FilterCard>
            </div>
          </div>
          <div className="registerCard">
            <div className="characterIcon">
              <img src={characterIcon} alt="icon" />
            </div>
            <p>
              Faça seu cadastro gratuito e encontre vagas de acordo com o seu
              perfil.
            </p>
          </div>
        </div>
        {technologies.map((tech) => {
          return (
            <div className="card" onClick={() => navigateToVacancies(tech)}>
              <p>
                <span>vagas</span>
                <br />
                {tech}
              </p>
              <img src={goRight} alt="icon" />
            </div>
          );
        })}
      </S.Container>
    </>
  );
};
