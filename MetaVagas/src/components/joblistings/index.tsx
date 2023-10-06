import { ButtonRegister, CardJobListings, ContainerJobListings, ContentCard, ContentTechnology, Grid, Title, TitleCard } from "./styled"

const jobListingsData = [
  {
    title: 'Desenvolvedor de Sistemas Pleno',
    location: 'Localização: Betim - MG',
    technology: 'Tecnologia: Python',
  },
  {
    title: 'Desenvolvedor Full Stack Pleno',
    location: 'Localização: Contagem - MG',
    technology: 'Tecnologia: PHP',
  },
  {
    title: 'Desenvolvedor de Sistemas Pleno',
    location: 'Localização: São Paulo - SP',
    technology: 'Tecnologia: JavaScript',
  },
  {
    title: 'Desenvolvedor de Sistemas Pleno',
    location: 'Localização: Montes Claros - MG',
    technology: 'Tecnologia: NodeJs',
  },
];

export const JobListings =() => {
  return (
    <ContainerJobListings>
        <Title>Vagas mais recentes</Title>
        <Grid>
        {jobListingsData.map((job, index) => (
            <CardJobListings key={index}>
                <TitleCard>{job.title}</TitleCard>
                {job.location && <ContentCard>{job.location}</ContentCard>}
                <ContentTechnology>{job.technology}</ContentTechnology>
            </CardJobListings>
            ))}
        </Grid>
        <ButtonRegister>
            Cadastre-se para ver mais vagas
        </ButtonRegister>
    </ContainerJobListings>
  );
}

export default JobListings();