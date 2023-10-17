import { Link } from "react-router-dom";
import styled from "styled-components";

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;
const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Title = styled.p`
    width: 395px;
    height: 31px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 31.1px;

    color: #FFFFFF;

    margin-bottom: 1rem;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        width: auto;
    }
`

export const ContentText = styled.div`
    margin-top: 6.5rem;
    padding-left: 21.5rem;

    ${media992to1199} {
        padding: 0;
        padding-left: 10rem;
    }

    ${media1200to1919} {
        margin-top: 4rem;
        padding-left: 9rem;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 35rem;
    padding-top: 6rem;
    background: #1A1033;

    ${media992to1199} {
        width: 100%;
    }

    ${media1200to1919} {
        width: 100%;
    }
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

    ${media992to1199} {
        width: auto;
        font-size: 14px;
    }

    ${media1200to1919} {
        width: auto;
    }
`

export const ContentIcon = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const InputCard = styled.div`
    width: 517px;
    height: 480px;

    box-shadow: 0px 15px 35px 0px #D0D0D033;
    border-radius: 16px;
    background: #FFFFFF;
    margin-right: 22.3rem;
    margin-top: 2rem;

    ${media992to1199} {
        width: 400px;
        margin: 0;
        
    }

    ${media1200to1919} {
        width: 500px;
        margin: 0;
        margin-right: 5rem;
        margin-top: 1rem;
    }
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

    ${media992to1199} {
        width: 100%;
    }

    ${media1200to1919} {
        width: 100%;
    }

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

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        width: auto;
    }
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

    ${media992to1199} {
        width: 320px;
    }

    ${media1200to1919} {
        width: 420px;
    }
`

export const InputPass = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    background: #FFFFFF;
    margin-left: 2rem;
    padding-top: 5px;
    padding-left: 2rem;

    &::placeholder {
        width: 134px;
        height: 30px;

        font-family: 'Poppins';
        font-weight: 400;
        font-size: 16px;
        line-height: 30.08px;

        
    }

    ${media992to1199} {
        width: 320px;
    }

    ${media1200to1919} {
        width: 420px;
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

    ${media992to1199} {
        width: 320px;
    }

    ${media1200to1919} {
        width: 420px;
    }
`


export const TextRegister = styled.p`
    width: 500px;
    height: 30px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #1A1033;

    padding-left: 4.1rem;

    ${media992to1199} {
        width: auto;
        padding: 0;
    }

    ${media1200to1919} {
        width: auto;
        padding: 0;
        padding-left: 3rem;
    }
`


export const StyledLink = styled(Link)`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #1A1033;

    padding-left: 5px;

    ${media992to1199} {
        width: auto;
        padding: 0;
        padding-left: 3px;
    }

    ${media1200to1919} {
        width: auto;
    }
`

export const CardEyeIcon = styled.button`
    position: absolute;
    right: 26rem;
    bottom: 34.5rem;
    border: 0;
    background: transparent;

    cursor: pointer;

    ${media1200to1919} {
        left: 0;
        left: 73rem;
        top: 23.6rem;
    }
`