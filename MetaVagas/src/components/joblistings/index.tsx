import { useNavigate } from "react-router-dom";
import MiniMap from "../../assets/icons/miniMap";
import PcIcon from "../../assets/icons/miniPc";
import { ButtonRegister, CardJobListings, ContainerJobListings, ContentCard, ContentIcon, ContentTechnology, DetailsPlus, Grid, Title, TitleCard } from "./styled"
import { useState, useEffect } from 'react';
import { Vacancies } from "../../services/services-utils/types";
import { GetAllVacanciesService } from "../../services/vacancy";

export const JobListings = () => {
    const navigate = useNavigate();
    const [vacancieArray, setVacancie] = useState<Vacancies | undefined>(undefined)

    const navigateRegister = () => {
        navigate('/register')
    }

    useEffect(() => {
        async function fetchData() {
            const data = await GetAllVacanciesService();

            setVacancie(data);
        }

        fetchData();
    }, []);

    if (!vacancieArray) {
        return <p>Carregando...</p>
    }
    { console.log(vacancieArray); }

    return (
        <ContainerJobListings>
            <Title>Vagas mais recentes</Title>
            <Grid>
                {vacancieArray.vacancies.map((vacancie) => (
                    <CardJobListings key={vacancie.id}>
                        <TitleCard>
                            {vacancie.vacancyRole}
                        </TitleCard>
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
                           Tecnologia: <b>{/*vacancie.tecnologies[0]*/}</b>
                        </ContentTechnology>
                        <DetailsPlus>
                            Ver mais detalhes
                        </DetailsPlus>
                    </CardJobListings>
                ))}
            </Grid>
            <ButtonRegister onClick={navigateRegister}>
                Cadastre-se para ver mais vagas
            </ButtonRegister>
        </ContainerJobListings>
    );
}

