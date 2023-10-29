import { useNavigate } from "react-router-dom";
import { LineHeader } from "../header/styled";
import Metavagas from "../../assets/icons/metavagas";
import {
  ContentImg,
  Container,
  CardName,
  CardShortName,
  ContentName,
  TextName,
  TextShortName,
  ButtonIcon,
} from "./styled";
import ArrowDownIcon from "../../assets/icons/arrowDown";
import { useEffect, useState } from "react";
import { UserMenuModal } from "../modal/menuModal";
import { ProfileUserService } from "../../services/user";
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

  const [letters, setLetters] = useState<string | undefined>("");
  const [username, setUsername] = useState<string | undefined>("");

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    closeMenu();
    navigate("/login");
  };

  const handleRedirect = () => {
    const isAuthenticated = () => {
      const token = localStorage.getItem("token");
      return !!token;
    };

    if (isAuthenticated()) {
      navigate("/metavagasLoggedin"); // Redireciona para a pagina logada da pagina
    } else {
      navigate("/metavagas"); // Redireciona para a pagina deslogada da pagina
    }
  };

  const lettersUser = async () => {
    try {
      const loggedUser = await ProfileUserService();
      const name = loggedUser?.name.toUpperCase();
      const [firstName, lastName] = name?.split(" ");

      if (!firstName || !lastName) {
        return setLetters(firstName[0]);
      }

      setLetters(firstName[0] + lastName[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const usernameHeader = async () => {
    try {
      const loggedUser = await ProfileUserService();
      loggedUser ? setUsername(loggedUser?.name) : setUsername("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    lettersUser();
    usernameHeader();
  }, []);

  return (
    <>
      <Container>
        <ContentImg onClick={handleRedirect}>
          <Metavagas />
        </ContentImg>
        <ContentName>
          <CardShortName>
            <TextShortName>{letters}</TextShortName>
          </CardShortName>
          <CardName>
            <TextName>{username}</TextName>
          </CardName>
          <ButtonIcon onClick={toggleMenu}>
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
  );
};
