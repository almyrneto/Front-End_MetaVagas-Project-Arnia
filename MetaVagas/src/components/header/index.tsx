import Metavagas from "../../assets/icons/metavagas"
import { ButtonLogin, ButtonRegister, Container, ContentButton, ContentImg,  } from "./styled"
import { useNavigate } from "react-router-dom"



export const Header = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateHomePage = () => {
        navigate('/')
    }

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <>
            <Container>
                <ContentImg onClick={navigateHomePage}>
                    <Metavagas />
                </ContentImg>
                <ContentButton>
                    <ButtonLogin onClick={navigateLogin}>
                        Entrar
                    </ButtonLogin>
                    <ButtonRegister onClick={navigateRegister}>
                        cadastra-se gratuitamente
                    </ButtonRegister>
                </ContentButton>
            </Container>
            {/* <Line /> */}
        </>    
    )
}