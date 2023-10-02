import Metavagas from "../../assets/icons/metavagas"
import { ButtonLogin, ButtonRegister, Container, ContentButton, ContentImg,  } from "./styled"



export const Header = () => {

    return (
        <>
            <Container>
                <ContentImg>
                    <Metavagas />
                </ContentImg>
                <ContentButton>
                    <ButtonLogin>
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