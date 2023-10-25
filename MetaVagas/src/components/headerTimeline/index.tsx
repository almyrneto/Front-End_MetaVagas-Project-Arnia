import { useNavigate } from "react-router-dom"
import { LineHeader } from "../header/styled"
import Metavagas from "../../assets/icons/metavagas";
import { ContentImg, Container, CardName, CardShortName, ContentName, TextName, TextShortName } from "./styled";
import ArrowDownIcon from "../../assets/icons/arrowDown";
// import { useEffect, useState } from "react";
// import { User } from "../../services/services-utils/types";
// import { GetOneUserService } from "../../services/user";


export const HeaderTimeline = () => {

    // const [data, setData] = useState<User>()
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const getUser = async () => {
    //         setLoading(true)
    //         try {
    //             await GetOneUserService()
    //             setData(data)
    //             setLoading(false)
    //         } catch (error) {
    //             alert('ocorreu um erro no servidor')
    //             setLoading(false)
    //         }
    //     }
    //     getUser()
    // }, [])

    // if (loading) {
    //     return <p>carregando</p>
    // }
    // if (!data) {
    //     return <p>ocorreu um erro, tente mais tarde!</p>
    // }

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