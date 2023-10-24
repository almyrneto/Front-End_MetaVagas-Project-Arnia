import { useState } from "react";
import "../assets/style/global";
import { ContainerDad } from "../assets/style/global";
import { Banner } from "../components/banner";
import { ContainerSearch } from "../components/containersearch";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { JobListings } from "../components/joblistings";
import { SearchFilters } from "../components/searchFilters";

export const MetaVagas = () => {
  const [footer] = useState<"" | "noShow">(""); //Alterações -> setFooter
  return (
    <>
      <ContainerDad>
        <Header />
        <Banner />
        <ContainerSearch />
      </ContainerDad>
      <JobListings />
      <SearchFilters />
      <Footer className={footer} />
    </>
  );
};

export default MetaVagas;
