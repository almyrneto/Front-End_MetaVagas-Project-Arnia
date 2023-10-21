import { Link, useNavigate } from "react-router-dom"
import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { Title, ContentText, Content, TextParagraph, ContentIcon, InputCard, TitleInput, InputTitle, InputEmail, InputPass, ButtonLogin, TextRegister, StyledLink, CardEyeIcon } from "./styled"
import { useState } from "react"
import EyeIcon from "../../assets/icons/eyeIcon"
import { LoginService } from "../../services/auth"
import { useForm } from "react-hook-form"

type submit = {
    email: string;
    password: string;
};

export const BannerLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate()

    const login = async () => {
        try {
            const Response = await LoginService({ email, password })
            localStorage.setItem("token2", Response!.token);

            navigate('/timeline')
        } catch (error) {
            alert((error as any).message)
        }
    }

    const { register, handleSubmit } = useForm<submit>();

    return (
        <Content>
            <ContentText>
                <Title>FAÇA SEU LOGIN</Title>
                <TextLogin />
                <ContentIcon>
                    <UserIcon />
                    <TextParagraph>Com um único cadastro você consegue encontrar sua vaga</TextParagraph>
                </ContentIcon>
                <ContentIcon>
                    <MailIcon />
                    <TextParagraph>Receba alertas sobre as vagas que você procura</TextParagraph>
                </ContentIcon>
            </ContentText>
            <InputCard>
                <TitleInput>Faça seu Login</TitleInput>
                <form onSubmit={handleSubmit(login)}>
                    <>
                        <InputTitle>Seu e-mail</InputTitle>
                        <InputEmail {...register("email")} value={email} type="email" placeholder="ana@gmail.com" required={true} minLength={10} onChange={event => setEmail(event.target.value)} />
                    </>
                    <>
                        <InputTitle>Senha</InputTitle>
                        <InputPass {...register("password")} value={password} type={showPassword ? 'text' : 'password'} required={true} minLength={6} placeholder="************" onChange={event => setPassword(event.target.value)} />
                        <CardEyeIcon onClick={togglePasswordVisibility}>
                            <EyeIcon />
                        </CardEyeIcon>
                    </>
                    <ButtonLogin type="submit">
                        Entrar
                    </ButtonLogin>
                </form>
                <TextRegister>
                    Não é cadastrado?
                    <StyledLink to={"/register"}>
                        Cadastre-se gratuitamente
                    </StyledLink>
                </TextRegister>
            </InputCard>
        </Content>
    )
}