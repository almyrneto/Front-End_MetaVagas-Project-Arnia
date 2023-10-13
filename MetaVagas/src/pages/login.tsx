import { BannerLogin } from "../components/bannerLogin";
import { Header } from "../components/header";
import { TutorialContent } from "../components/tutorialContent";



export const Login = () => {
    return (
        <>
           <Header />
           <BannerLogin />
           <TutorialContent />
        </>
    )
}

export default Login;