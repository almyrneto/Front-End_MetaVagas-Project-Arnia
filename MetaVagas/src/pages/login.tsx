import { BannerLogin } from "../components/bannerLogin";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { TutorialContentLogin } from "../components/tutorialContent/indexLogin";

export const Login = () => {
  return (
    <>
      <Header />
      <BannerLogin />
      <TutorialContentLogin />
      <Footer className={""} />
    </>
  );
};

export default Login;
