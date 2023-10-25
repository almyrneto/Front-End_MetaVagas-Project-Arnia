import { useState } from "react"
import EyeIcon from "../../assets/icons/eyeIcon"
import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { ButtonLogin, Content, ContentIcon, ContentText, InputEmail, InputPass, StyledLink, TextParagraph, Title, TitleInput } from "../bannerLogin/styled"
import { CardEyeIcon, CardEyeConfirm, InputCard, InputTitle, TextRegister } from "./styled"
import EyeIconConfirm from "../../assets/icons/eyeIconConfirm"
import { CreateUserService } from "../../services/auth"
import { useForm } from "react-hook-form"

type submit = {
    email: string;
    name: string;
    pass: string;
    confirmPass: string;
}

export const BannerRegister = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        pass: '',
        confirmPass: '',
    });

    const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.pass,
    }

    const [formErrors, setFormErrors] = useState({})

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    }

    const { register, handleSubmit } = useForm<submit>()

    const createUser = async () => {
        try {
            const isPasswordValid = ValidatePassword()
            if (isPasswordValid) {
                await CreateUserService(payload)
            }
        } catch (error) {
            alert((error as any).message)
        }
    }

    const ValidatePassword = () => {
        if (formData.pass === formData.confirmPass) {
            return true
        } else {
            return false
        }
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

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
                <form onSubmit={handleSubmit(createUser)}>
                    <TitleInput>Faça seu cadastro</TitleInput>
                    <>
                        <InputTitle>Seu e-mail</InputTitle>
                        <InputEmail {...register("email")} type="email" placeholder="ana@gmail.com" onChange={handleInputChange} />
                    </>
                    <>
                        <InputTitle>Seu nome</InputTitle>
                        <InputEmail {...register("name")} type="text" placeholder="Ana Ester" onChange={handleInputChange} />
                    </>
                    <>
                        <InputTitle>Senha</InputTitle>
                        <InputPass {...register("pass")} type={showPassword ? 'text' : 'password'} placeholder="************" onChange={handleInputChange} />
                        <CardEyeIcon type="button" onClick={togglePasswordVisibility}>
                            <EyeIcon />
                        </CardEyeIcon>
                    </>
                    <>
                        <InputTitle>Confirmar senha</InputTitle>
                        <InputPass {...register("confirmPass")} type={showPasswordConfirm ? 'text' : 'password'} placeholder="************" onChange={handleInputChange} />
                        <CardEyeConfirm type="button" onClick={togglePasswordConfirmVisibility}>
                            <EyeIconConfirm />
                        </CardEyeConfirm>
                    </>
                    <ButtonLogin type="submit">Cadastrar</ButtonLogin>
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