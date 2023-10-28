import "../assets/style/global";
import { ContainerDad } from "../assets/style/global";
import { Banner } from "../components/banner";
import { ContainerSearch } from "../components/containersearch";
import { Footer } from "../components/footer";
import { HeaderTimeline } from "../components/headerTimeline";
import { JobListings } from "../components/joblistings";
import { SearchFilters } from "../components/searchFilters";

export const MetaVagasLoggedIn = () => {
    return (
        <>
            <ContainerDad>
                <HeaderTimeline />
                <Banner />
                <ContainerSearch />
            </ContainerDad>
            <JobListings />
            <SearchFilters />
            <Footer className="noShow" />
        </>
    )
}
