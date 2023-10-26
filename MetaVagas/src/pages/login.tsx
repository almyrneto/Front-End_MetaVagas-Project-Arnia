import { BannerLogin } from "../components/bannerLogin";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { TutorialContent } from "../components/tutorialContent";



export const Login = () => {
    return (
        <>
            <Header />
            <BannerLogin />
            <TutorialContent />
            <Footer className={""} />
        </>
    )
}

export default Login;