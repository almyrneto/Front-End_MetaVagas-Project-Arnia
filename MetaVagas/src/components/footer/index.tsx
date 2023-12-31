import S from "./styled.ts"
import { ButtonLogin, ButtonRegister } from "../header/styled.ts"
import email from "../../assets/icons/email.svg"
import local from "../../assets/icons/local.png"
import phone from "../../assets/icons/telefone.svg"
import { useNavigate } from "react-router-dom"
import Metavagas from "../../assets/icons/metavagas.tsx"

type props = { className: "noShow" | "" }
export const Footer = ({ className }: props) => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <S.Foot>
            <div>
                <div className="logo">
                    <Metavagas />
                </div>
                <div className="contact">
                    <p><span>Contato e Endereço</span></p>
                    <div><img src={phone} alt="icon" /><p>4003-5442</p></div>
                    <div><img src={email} alt="icon" /><p>contato@arnia.com.br</p></div>
                    <div><img src={local} alt="icon" /><p>Av. do Contorno, 2905 Santo Efigênio,</p></div><p>Belo Horizonte - MG 30110 - 080</p>
                </div>
                <div className="register">
                    <div className={className}>
                        <ButtonLogin onClick={navigateLogin}>Entrar</ButtonLogin>
                        <ButtonRegister onClick={navigateRegister}>Cadastre-se gratuitamente</ButtonRegister>
                    </div>
                </div>
            </div>
        </S.Foot>)
}