import '../assets/style/global'
import { ContainerDad } from '../assets/style/global'
import { Banner } from '../components/banner'
import { ContainerSearch } from '../components/containersearch'
import { Header } from "../components/header"


export const MetaVagas = () => {
    return (
        <ContainerDad>
                <Header />
                <Banner />
                <ContainerSearch />
        </ContainerDad>
        
    )
}