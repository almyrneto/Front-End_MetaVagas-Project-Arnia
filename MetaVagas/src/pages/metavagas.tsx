import '../assets/style/global'
import { Banner } from '../components/banner'
import { ContainerSearch } from '../components/containersearch'
import { Header } from "../components/header"


export const MetaVagas = () => {
    return (
        <div>
            <div>
                <Header />
                <Banner />
            </div>
            <ContainerSearch />
        </div>
        
    )
}