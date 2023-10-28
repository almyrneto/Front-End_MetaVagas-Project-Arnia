import { BannerRegister } from "../components/bannerRegister";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { TutorialContentRegister } from "../components/tutorialContent";

export const Register = () => {
  return (
    <>
      <Header />
      <BannerRegister />
      <TutorialContentRegister />
      <Footer className={""} />
    </>
  );
};
