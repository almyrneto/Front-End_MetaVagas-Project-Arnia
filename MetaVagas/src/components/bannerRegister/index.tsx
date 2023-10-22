import { useState } from "react"
import EyeIcon from "../../assets/icons/eyeIcon"
import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { ButtonLogin, Content, ContentIcon, ContentText, InputEmail, InputPass, StyledLink, TextParagraph, Title, TitleInput } from "../bannerLogin/styled"
import { CardEyeIcon, CardEyeConfirm, InputCard, InputTitle, TextRegister } from "./styled"
import EyeIconConfirm from "../../assets/icons/eyeIconConfirm"
// import { CreateUserService } from "../../services/auth"

export const BannerRegister = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    // const [formData, setFormData] = useState({
    //     email: '',
    //     name: '',
    //     pass: '',
    //     confirmPass: '',
    // });

    // const [formErrors, setFormErrors] = useState({})

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const register = async () => {
    //     try {
    //         const Response = await CreateUserService({name, email, password})
    //         localStorage.setItem("token2", Response!.token);
    //     } catch (error) {
    //         alert((error as any).message)
    //     }
    // }

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
                <form>
                    <TitleInput>Faça seu cadastro</TitleInput>
                    <>
                        <InputTitle>Seu e-mail</InputTitle>
                        <InputEmail type="email" placeholder="ana@gmail.com" />
                    </>
                    <>
                        <InputTitle>Seu nome</InputTitle>
                        <InputEmail type="text" placeholder="Ana Ester" />
                    </>
                    <>
                        <InputTitle>Senha</InputTitle>
                        <InputPass type={showPassword ? 'text' : 'password'} placeholder="************" />
                        <CardEyeIcon onClick={togglePasswordVisibility}>
                            <EyeIcon />
                        </CardEyeIcon>
                    </>
                    <>
                        <InputTitle>Confirmar senha</InputTitle>
                        <InputPass type={showPasswordConfirm ? 'text' : 'password'} placeholder="************" />
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
                </form>
            </InputCard>
        </Content>
    )
}