import { CSearchTimeline } from "../components/CSearchTimeline"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { VacanciesDisplay } from "../components/vacanciesDisplay"



export const VacanciesPage = () => {

    return (
        <>
            <Header />
            <CSearchTimeline />
            <VacanciesDisplay logged={false} />
            <Footer className={""} />
        </>
    )
}