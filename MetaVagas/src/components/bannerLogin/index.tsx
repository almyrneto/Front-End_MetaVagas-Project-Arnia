import MailIcon from "../../assets/icons/mailIcon"
import TextLogin from "../../assets/icons/textLogin"
import UserIcon from "../../assets/icons/userIcon"
import { Title, ContentText, Content, TextParagraph, ContentIcon, InputCard, TitleInput, InputTitle, InputEmail, InputPass } from "./styled"


export const BannerLogin = () => {

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
                    <InputEmail type="email" placeholder="ana@gmail.com" />
                </>
                <>
                    <InputTitle>Senha</InputTitle>
                    <InputPass type="password" placeholder="************"/>
                </>
            </InputCard>
        </Content>
    )
}