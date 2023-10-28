import { useNavigate } from "react-router-dom"; //Alterações -> Link
import MailIcon from "../../assets/icons/mailIcon";
import TextLogin from "../../assets/icons/textLogin";
import UserIcon from "../../assets/icons/userIcon";
import {
  Title,
  ContentText,
  Content,
  TextParagraph,
  ContentIcon,
  InputCard,
  TitleInput,
  InputTitle,
  InputEmail,
  InputPass,
  ButtonLogin,
  TextRegister,
  StyledLink,
  CardEyeIcon,
  BackgroundLoader,
} from "./styled";
import { useState } from "react";
import EyeIcon from "../../assets/icons/eyeIcon";
import { LoginService } from "../../services/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../utils/schemaLogin";
import { SpanMessage } from "../bannerRegister/styled";
import Loader from "../loading/loader";

type submitLogin = {
  email: string;
  password: string;
};

export const BannerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const [removeLoader, setRemoveLoader] = useState(true)

  const login: SubmitHandler<submitLogin> = async () => {
    setRemoveLoader(false)
    try {
      const Response = await LoginService({ email, password });
      localStorage.setItem("token2", Response!.token);
      
      setRemoveLoader(true)
      navigate("/timeline");

    } catch (error) {
      setRemoveLoader(true)
      alert((error as any).message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<submitLogin>({ resolver: yupResolver(schemaLogin) });

  return (
    <Content>
      <ContentText>
        <Title>FAÇA SEU LOGIN</Title>
        <TextLogin />
        <ContentIcon>
          <UserIcon />
          <TextParagraph>
            Com um único cadastro você consegue encontrar sua vaga
          </TextParagraph>
        </ContentIcon>
        <ContentIcon>
          <MailIcon />
          <TextParagraph>
            Receba alertas sobre as vagas que você procura
          </TextParagraph>
        </ContentIcon>
      </ContentText>
      <InputCard>
        <TitleInput>Faça seu Login</TitleInput>
        <form onSubmit={handleSubmit(login)}>
          <>
            <InputTitle>Seu e-mail*</InputTitle>
            <InputEmail
              {...register("email")}
              value={email}
              type={"email"}
              placeholder="ana@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </>
          <br></br>
          <SpanMessage>{errors.email?.message}</SpanMessage>
          <>
            <InputTitle>Senha*</InputTitle>
            <InputPass
              {...register("password")}
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="************"
              onChange={(event) => setPassword(event.target.value)}
            />
            <CardEyeIcon type="button" onClick={togglePasswordVisibility}>
              <EyeIcon />
            </CardEyeIcon>
          </>
          <br></br>
          <SpanMessage>{errors.password?.message}</SpanMessage>
          <p></p>
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </form>
        <TextRegister>
          Não é cadastrado?
          <StyledLink to={"/register"}>Cadastre-se gratuitamente</StyledLink>
        </TextRegister>
      </InputCard>
      {!removeLoader && (
      <BackgroundLoader>
        <Loader />
      </BackgroundLoader>
    )}
    </Content>
  );
};
