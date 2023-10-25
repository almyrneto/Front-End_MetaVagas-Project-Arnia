import { CSearchTimeline } from "../components/CSearchTimeline"
import { HeaderTimeline } from "../components/headerTimeline"
import { VacanciesDisplay } from "../components/vacanciesDisplay"



export const Timeline = () => {

    return (
        <>
            <HeaderTimeline />
            <CSearchTimeline />
            <VacanciesDisplay />
        </>
    )
}