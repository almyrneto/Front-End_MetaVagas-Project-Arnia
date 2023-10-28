import { useNavigate } from "react-router-dom"
import { LineHeader } from "../header/styled"
import Metavagas from "../../assets/icons/metavagas";
import { ContentImg, Container, CardName, CardShortName, ContentName, TextName, TextShortName, ButtonIcon } from "./styled";
import ArrowDownIcon from "../../assets/icons/arrowDown";
import { useState } from "react";
import { UserMenuModal } from "../modal/menuModal";
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const logout = () => {
        localStorage.removeIem('token');
        closeMenu();
        navigate('/login');
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
                    <ButtonIcon onClick={openMenu}>
                        <ArrowDownIcon />
                    </ButtonIcon>
                    <UserMenuModal
                        isOpen={isMenuOpen}
                        onRequestClose={closeMenu}
                        onLogout={logout}
                    />
                </ContentName>
            </Container>
            <LineHeader />
        </>
    )
}