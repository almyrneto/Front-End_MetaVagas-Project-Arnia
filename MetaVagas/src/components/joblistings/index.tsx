// import { Grid } from "../../assets/style/global"
import { CardJobListings, ContainerJobListings, Grid, Title, TitleCard } from "./styled"


export const JobListings = () => {

    return (
        <ContainerJobListings>
            <Title>Vagas mais recentes</Title>
            <Grid>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor de Sistemas Pleno
                    </TitleCard>
                </CardJobListings>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor Full Stack Pleno
                    </TitleCard>
                </CardJobListings>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor de Sistemas Pleno
                    </TitleCard>
                </CardJobListings>
                <CardJobListings>
                    <TitleCard>
                        Desenvolvedor de Sistemas Pleno
                    </TitleCard>
                </CardJobListings>
            </Grid>
            
        </ContainerJobListings>
    )
}