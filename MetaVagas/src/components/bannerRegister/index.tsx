import { useState } from "react";
import EyeIcon from "../../assets/icons/eyeIcon";
import MailIcon from "../../assets/icons/mailIcon";
import TextLogin from "../../assets/icons/textLogin";
import UserIcon from "../../assets/icons/userIcon";
import {
    BackgroundLoader,
    Content,
    ContentIcon,
    ContentText,
    InputEmail,
    InputPass,
    StyledLink,
    TextParagraph,
    Title,
    TitleInput,
} from "../bannerLogin/styled";
import {
    CardEyeIcon,
    CardEyeConfirm,
    InputCard,
    InputTitle,
    TextRegister,
    SpanMessage,
    ButtonRegister,
} from "./styled";
import EyeIconConfirm from "../../assets/icons/eyeIconConfirm";
import { CreateUserService } from "../../services/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../utils/schemaRegister";
import { useNavigate } from "react-router-dom";
import Loader from "../loading/loader";

export type submit = {
    email: string;
    name: string;
    pass: string;
    confirmPass: string;
};

export const BannerRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        pass: "",
        confirmPass: "",
    });

    const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.pass,
        confirmPass: formData.confirmPass,
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<submit>({ resolver: yupResolver(schemaRegister) });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const navigate = useNavigate();

    const [removeLoader, setRemoveLoader] = useState(true)

    const handleCreateUser: SubmitHandler<submit> = async () => {
        setRemoveLoader(false)
        try {
            const isPasswordValid = ValidatePassword();
            if (isPasswordValid) {
                await CreateUserService(payload);
                setRemoveLoader(true)
                navigate("/login");
            }
        } catch (error) {
            setRemoveLoader(true)
            alert((error as any).message);
        }
    };

    const ValidatePassword = () => {
        if (formData.pass === formData.confirmPass) {
            return true;
        } else {
            return false;
        }
    };

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
                <form onSubmit={handleSubmit(handleCreateUser)}>
                    <TitleInput>Faça seu cadastro</TitleInput>
                    <>
                        <InputTitle>Seu e-mail*</InputTitle>
                        <InputEmail
                            {...register("email")}
                            type={"email"}
                            placeholder="ana@gmail.com"
                            onChange={handleInputChange}
                        />
                        <br></br>
                        <SpanMessage>{errors.email?.message}</SpanMessage>
                    </>
                    <>
                        <InputTitle>Seu nome*</InputTitle>
                        <InputEmail
                            {...register("name")}
                            type={"text"}
                            placeholder="Ana Ester"
                            onChange={handleInputChange}
                        />
                        <br></br>
                        <SpanMessage>{errors.name?.message}</SpanMessage>
                    </>
                    <>
                        <InputTitle>Senha*</InputTitle>
                        <InputPass
                            {...register("pass")}
                            type={showPassword ? "text" : "password"}
                            placeholder="************"
                            onChange={handleInputChange}
                        />
                        <CardEyeIcon type="button" onClick={togglePasswordVisibility}>
                            <EyeIcon />
                        </CardEyeIcon>
                        <br></br>
                        <SpanMessage>{errors.pass?.message}</SpanMessage>
                    </>
                    <>
                        <InputTitle>Confirmar senha*</InputTitle>
                        <InputPass
                            {...register("confirmPass")}
                            type={showPasswordConfirm ? "text" : "password"}
                            placeholder="************"
                            onChange={handleInputChange}
                        />
                        <CardEyeConfirm
                            type="button"
                            onClick={togglePasswordConfirmVisibility}
                        >
                            <EyeIconConfirm />
                        </CardEyeConfirm>
                    </>
                    <br></br>
                    <SpanMessage>{errors.confirmPass?.message}</SpanMessage>
                    <p></p>
                    <ButtonRegister type="submit">Cadastrar</ButtonRegister>
                </form>
                <TextRegister>
                    Ja é cadastrado?
                    <StyledLink to={"/login"}>Faça o login</StyledLink>
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
