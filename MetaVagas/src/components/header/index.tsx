import Metavagas from "../../assets/icons/metavagas"
import { ButtonLogin, ButtonRegister, Container, ContentButton, ContentImg,  } from "./styled"
import { useNavigate } from "react-router-dom"



export const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login')
    }

    const navigateHomePage = () => {
        navigate('/')
    }
    return (
        <>
            <Container>
                <ContentImg onClick={navigateHomePage}>
                    <Metavagas />
                </ContentImg>
                <ContentButton>
                    <ButtonLogin onClick={handleButtonClick}>
                        Entrar
                    </ButtonLogin>
                    <ButtonRegister>
                        cadastra-se gratuitamente
                    </ButtonRegister>
                </ContentButton>
            </Container>
            {/* <Line /> */}
        </>    
    )
}