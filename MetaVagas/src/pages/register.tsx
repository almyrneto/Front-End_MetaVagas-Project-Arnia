import { BannerRegister } from "../components/bannerRegister"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { TutorialContent } from "../components/tutorialContent"

export const Register = () => {

    return (
        <>
            <Header />
            <BannerRegister />
            <TutorialContent />
            <Footer className={""} />
        </>
    )
}