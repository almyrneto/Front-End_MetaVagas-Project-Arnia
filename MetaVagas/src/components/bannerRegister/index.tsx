import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { ButtonLogin, Content, ContentIcon, ContentText, InputCard, InputEmail, InputPass, StyledLink, TextParagraph, Title, TitleInput } from "../bannerLogin/styled"
import { InputTitle, TextRegister } from "./styled"

export const BannerRegister = () => {

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
                    <InputPass type="password" placeholder="************"/>
                </>
                <>
                    <InputTitle>Confirmar senha</InputTitle>
                    <InputPass type="password" placeholder="************"/>
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