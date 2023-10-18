import { useNavigate } from "react-router-dom"
import { Container, ContentImg, LineHeader } from "../header/styled"
import Metavagas from "../../assets/icons/metavagas";
import { CardName, CardShortName, ContentName, TextName, TextShortName } from "./styled";
import ArrowDownIcon from "../../assets/icons/arrowDown";


export const HeaderTimeline = () => {

    const navigate = useNavigate();

    const navigateHomePage = () => {
        navigate('/')
    }
    
    return (
        <>
            <Container>
                <ContentImg onClick={navigateHomePage}>
                    <Metavagas />
                </ContentImg>
                <ContentName>
                    <CardShortName>
                        <TextShortName>AF</TextShortName>
                    </CardShortName>
                    <CardName>
                        <TextName>Almyr Freiman</TextName>
                    </CardName>
                        <ArrowDownIcon />
                </ContentName>
            </Container>
            <LineHeader />
        </>    
    )
}