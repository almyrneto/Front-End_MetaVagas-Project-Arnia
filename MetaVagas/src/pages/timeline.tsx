import { CSearchTimeline } from "../components/CSearchTimeline"
import { Footer } from "../components/footer"
import { HeaderTimeline } from "../components/headerTimeline"
import { VacanciesDisplay } from "../components/vacanciesDisplay"



export const Timeline = () => {

    return (
        <>
            <HeaderTimeline />
            <CSearchTimeline />
            <VacanciesDisplay />
            <Footer className={"noShow"} />
        </>
    )
}