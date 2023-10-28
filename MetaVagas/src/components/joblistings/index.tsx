import { useNavigate } from "react-router-dom";
import MiniMap from "../../assets/icons/miniMap";
import PcIcon from "../../assets/icons/miniPc";
import { ButtonRegister, CardJobListings, ContainerJobListings, ContentCard, ContentIcon, ContentTechnology, DetailsPlus, Grid, Title, TitleCard } from "./styled"
import { useState, useEffect } from 'react';
import { Vacancies } from "../../services/services-utils/types";
import { GetAllVacanciesService } from "../../services/vacancy";

export const JobListings = () => {
    const navigate = useNavigate();
    const [vacancie, setVacancie] = useState<Vacancies | undefined>(undefined)

    const navigateRegister = () => {
        navigate('/register')
    }

    useEffect(() => {
        async function fetchData() {
            const data = await GetAllVacanciesService();
            console.log("Dados da API:", data);

            setVacancie(data);
        }

        fetchData();
    }, []);

    if (!vacancie) {
        return <p>Carregando...</p>
    }

    return (
        <ContainerJobListings>
            <Title>Vagas mais recentes</Title>
            <Grid>
                {vacancie.map((vacancie) => (
                    <CardJobListings key={vacancie.id}>
                        <TitleCard>
                            {vacancie.vacancyDescription}
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
                            Tecnologia: <b>{vacancie.tecnologies}</b>
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

