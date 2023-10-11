import S from "./styled.ts"
import { ButtonLogin, ButtonRegister } from "../header/styled.ts"
import email from "../../assets/icons/email.svg"
import local from "../../assets/icons/local.png"
import phone from "../../assets/icons/telefone.svg"

export const Footer = () => {
    return(
    <S.Foot>
        <div>
            <div className="logo">
                <h1>META<span>VAGAS</span></h1>
            </div>
            <div className="contact">
                <p><span>Contato e Endereço</span></p>
                <div><img src={phone} alt="icon"/><p>4003-5442</p></div>
                <div><img src={email} alt="icon"/><p>contato@arnia.com.br</p></div>
                <div><img src={local} alt="icon"/><p>Av. do Contorno, 2905 Santo Efigênio,</p></div><p>Belo Horizonte - MG 30110 - 080</p>
            </div>
            <div className="register">
                <ButtonLogin>Entrar</ButtonLogin>
                <ButtonRegister>Cadastre-se gratuitamente</ButtonRegister>
            </div>
        </div>
    </S.Foot>)
}