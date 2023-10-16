import { Link, useNavigate } from "react-router-dom"
import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { Title, ContentText, Content, TextParagraph, ContentIcon, InputCard, TitleInput, InputTitle, InputEmail, InputPass, ButtonLogin, TextRegister, StyledLink, CardEyeIcon } from "./styled"
import { useState } from "react"
import EyeIcon from "../../assets/icons/eyeIcon"


export const BannerLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('12345678')
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate()

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
                <>
                    <InputTitle>Seu e-mail</InputTitle>
                    <InputEmail value={email} type="email" placeholder="ana@gmail.com" onChange={event => setEmail(event.target.value)} />
                </>
                <>
                    <InputTitle>Senha</InputTitle>
                    <InputPass value={password} type={showPassword ? 'text' : 'password'} placeholder="************" onChange={event => setPassword(event.target.value)} />
                    <CardEyeIcon onClick={togglePasswordVisibility}>
                        <EyeIcon />
                    </CardEyeIcon>
                </>
                <ButtonLogin
                    onClick={async () => {
                        try {
                            await postLogin(email, password)
                            navigate('/timeline')
                        } catch (error) {
                            alert((error as any).message)
                        }
                    }}
                >
                    Entrar
                </ButtonLogin>
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