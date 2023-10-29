import { useNavigate } from "react-router-dom";
import MiniMap from "../../assets/icons/miniMap";
import PcIcon from "../../assets/icons/miniPc";
import {
  ButtonRegister,
  CardJobListings,
  ContainerJobListings,
  ContentCard,
  ContentIcon,
  ContentTechnology,
  DetailsPlus,
  Grid,
  Title,
  TitleCard,
} from "./styled";
import { useState, useEffect } from "react";
import { Vacancies } from "../../services/services-utils/types";
import { GetPublicVacanciesService } from "../../services/vacancy";
import IconArrowRight from "../../assets/icons/arrowRight";

export const JobListings = () => {
  const navigate = useNavigate();
  const [vacancieArray, setVacancie] = useState<Vacancies | undefined>(
    undefined
  );

  const navigateRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    async function fetchData() {
      const data = await GetPublicVacanciesService();

      setVacancie(data);
    }

    fetchData();
  }, []);

  if (!vacancieArray) {
    return <p>Carregando...</p>;
  }
  {
    console.log(vacancieArray);
  }

  const handleRedirect = () => {
    const isAuthenticated = () => {
      const token = localStorage.getItem("token");
      return !!token;
    }

    if (isAuthenticated()) {
      navigate("/timeline");
    } else {
      navigate("/vacancies")
    }


  }


  return (
    <ContainerJobListings>
      <Title>Vagas mais recentes</Title>
      <Grid>
        {vacancieArray.vacancies.map((vacancie) => (
          <CardJobListings key={vacancie.id}>
            <TitleCard>{vacancie.vacancyRole}</TitleCard>
            <ContentCard>
              <ContentIcon>
                <MiniMap />
              </ContentIcon>
              Localização: {vacancie.location}
            </ContentCard>

            <ContentTechnology>
              <ContentIcon>
                <PcIcon />
              </ContentIcon>
              Tecnologia:
            </ContentTechnology>
            <DetailsPlus onClick={handleRedirect}>
              Ver mais detalhes
              <IconArrowRight />
            </DetailsPlus>
          </CardJobListings>
        ))}
      </Grid>
      <ButtonRegister onClick={navigateRegister}>
        Cadastre-se para ver mais vagas
      </ButtonRegister>
    </ContainerJobListings>
  );
};
