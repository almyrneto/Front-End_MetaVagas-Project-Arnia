import { useState } from "react"
import EyeIcon from "../../assets/icons/eyeIcon"
import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { ButtonLogin, CardEyeIcon, Content, ContentIcon, ContentText, InputEmail, InputPass, StyledLink, TextParagraph, Title, TitleInput } from "../bannerLogin/styled"
import { CardEyeConfirm, InputCard, InputTitle, TextRegister } from "./styled"
import EyeIconConfirm from "../../assets/icons/eyeIconConfirm"

export const BannerRegister = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    }

    return (
        <Content>
            <ContentText>
                <Title>CADASTRE-SE</Title>
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
                <TitleInput>Faça seu cadastro</TitleInput>
                <>
                    <InputTitle>Seu e-mail</InputTitle>
                    <InputEmail type="email" placeholder="ana@gmail.com" />
                </>
                <>
                    <InputTitle>Senha</InputTitle>
                    <InputPass type={showPassword ? 'text' : 'password'} placeholder="************"/>
                    <CardEyeIcon onClick={togglePasswordVisibility}>
                        <EyeIcon />
                    </CardEyeIcon>
                </>
                <>
                    <InputTitle>Confirmar senha</InputTitle>
                    <InputPass type={showPasswordConfirm ? 'text' : 'password'} placeholder="************"/>
                    <CardEyeConfirm onClick={togglePasswordConfirmVisibility}>
                        <EyeIconConfirm />
                    </CardEyeConfirm>
                </>
                <ButtonLogin>Cadastrar</ButtonLogin>
                <TextRegister>
                    Ja é cadastrado? 
                    <StyledLink to={"/login"}>
                        Faça o login
                    </StyledLink>
                </TextRegister>
            </InputCard>
        </Content>
    )
}