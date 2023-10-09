import MiniMap from "../../assets/icons/miniMap";
import PcIcon from "../../assets/icons/miniPc";
import { ButtonRegister, CardJobListings, ContainerJobListings, ContentCard, ContentIcon, ContentTechnology, DetailsPlus, Grid, Title, TitleCard } from "./styled"


export const JobListings =() => {
  return (
    <ContainerJobListings>
            <Title>Vagas mais recentes</Title>
            <Grid>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor de Sistemas Pleno
                    </TitleCard>
                    <ContentCard>
                        <ContentIcon>
                            <MiniMap />
                        </ContentIcon>
                        Localização: Betim - MG
                    </ContentCard>
                    <ContentTechnology>
                        <ContentIcon>
                            <PcIcon />
                        </ContentIcon>
                        Tecnologia: <b> Python</b>
                    </ContentTechnology>
                    <DetailsPlus>
                        Ver mais detalhes 
                    </DetailsPlus>
                </CardJobListings>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor Full Stack Pleno
                    </TitleCard>
                    <ContentCard>
                        <ContentIcon>
                            <MiniMap />
                        </ContentIcon>
                        Localização: Contagem - MG
                    </ContentCard>
                    <ContentTechnology>
                        <ContentIcon>
                            <PcIcon />
                        </ContentIcon>
                        Tecnologia: <b> PHP</b>
                    </ContentTechnology>
                    <DetailsPlus>
                        Ver mais detalhes 
                    </DetailsPlus>
                </CardJobListings>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor de Sistemas Pleno
                    </TitleCard>
                    <ContentCard>
                        <ContentIcon>
                            <MiniMap />
                        </ContentIcon>
                        Localização: São Paulo - SP
                    </ContentCard>
                    <ContentTechnology>
                        <ContentIcon>
                            <PcIcon />
                        </ContentIcon>
                        Tecnologia: <b> JavaScript</b>
                    </ContentTechnology>
                    <DetailsPlus>
                        Ver mais detalhes 
                    </DetailsPlus>
                </CardJobListings>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor de Sistemas Pleno
                    </TitleCard>
                    <ContentCard>
                        <ContentIcon>
                            <MiniMap />
                        </ContentIcon>
                        Localização: Montes Claros - MG
                    </ContentCard>
                    <ContentTechnology>
                        <ContentIcon>
                            <PcIcon />
                        </ContentIcon>
                        Tecnologia: <b> NodeJs</b>
                    </ContentTechnology>
                    <DetailsPlus>
                        Ver mais detalhes 
                    </DetailsPlus>
                </CardJobListings>
            </Grid>
            <ButtonRegister>
                Cadastre-se para ver mais vagas
            </ButtonRegister>
        </ContainerJobListings>
);
}

export default JobListings();