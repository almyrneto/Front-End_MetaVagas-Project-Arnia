import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.p`
    width: 395px;
    height: 31px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 31.1px;

    color: #FFFFFF;

    margin-bottom: 1rem;
`

export const ContentText = styled.div`
    margin-top: 6.5rem;
    padding-left: 21.5rem;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 35rem;
    padding-top: 6rem;
    background: #1A1033;
`

export const TextParagraph = styled.p`
    width: 485px;
    height: 30px;

    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 30.08px;

    color: #FFFFFF;

    margin-left: 1rem;
`

export const ContentIcon = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const InputCard = styled.div`
    width: 517px;
    height: 490px;

    box-shadow: 0px 15px 35px 0px #D0D0D033;
    border-radius: 16px;
    background: #FFFFFF;
    margin-right: 22.3rem;
    margin-top: 2rem;
`

export const TitleInput = styled.p`
    width: 453px;
    height: 36px;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -2%;
    color: #6950A1;

    padding: 2rem;

`

export const InputTitle = styled.p`
    width: 160px;
    height: 24px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #1A1033;

    padding: 2rem;
`

export const InputEmail = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    background: #FFFFFF;
    margin-left: 2rem;
    padding-left: 2rem;

    &::placeholder {
        width: 134px;
        height: 30px;

        font-family: 'Poppins';
        font-weight: 400;
        font-size: 16px;
        line-height: 30.08px;

        
    }

`

export const InputPass = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    background: #FFFFFF;
    margin-left: 2rem;
    padding-left: 2rem;

    &::placeholder {
        width: 134px;
        height: 30px;

        font-family: 'Poppins';
        font-weight: 400;
        font-size: 16px;
        line-height: 30.08px;

        
    }
`

export const ButtonLogin = styled.button`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    background: #FBB04D;
    border: none;
    cursor: pointer;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #1A1033;

    margin: 2rem;
`

export const Register = styled

export const TextRegister = styled.p`
    width: 500px;
    height: 30px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #1A1033;

    padding-left: 4.1rem;
`


export const StyledLink = styled(Link)`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #1A1033;
`