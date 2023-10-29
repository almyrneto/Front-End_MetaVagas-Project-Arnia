import styled from "styled-components";

const media768to1366 = `
    @media (min-width: 768px) and (max-width: 1366px)
`;

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;

const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const InputCard = styled.div`
    width: 517px;
    height: 700px;

    box-shadow: 0px 15px 35px 0px #D0D0D033;
    border-radius: 16px;
    background: #FFFFFF;
    margin-right: 22.3rem;
    margin-top: 2rem;

    ${media768to1366} {
       height: 745px;
    }

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

export const InputTitle = styled.p`
    width: 210px;
    height: 24px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #1A1033;

    padding: 2rem;
`

export const TextRegister = styled.p`
    width: 500px;
    height: 30px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #1A1033;

    padding-left: 8rem;
`

export const CardEyeIcon = styled.button`
    position: absolute;
    right: 26rem;
    bottom: 24.5rem;
    border: 0;
    background: transparent;

    cursor: pointer;

     ${media768to1366} {
       margin-top: 24.5vh;
       margin-left: 1.4vw;
    }

    ${media1200to1919} {
        left: 0;
        left: 73rem;
        top: 23.6rem;
    }
`

export const CardEyeConfirm = styled.button`
    position: absolute;
    right: 26rem;
    bottom: 16rem;
    border: 0;
    background: transparent;

    cursor: pointer;

     ${media768to1366} {
       margin-top: 28vh;
       margin-left: 1.2vw;
    }

    ${media1200to1919} {
        left: 0;
        left: 73.2rem;
        top: 31rem;
    }
`

export const SpanMessage = styled.span`
   margin-left: 2.5vw;
   color: red;
   font-family: 'Poppins';
   font-weight: 500;
   font-size: 13px;
`

export const ButtonRegister = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 20px;
    margin-left: 2.5vw;

    ${media992to1199} {
        width: 320px;
    }

    ${media1200to1919} {
        width: 420px;
    }
`

export const P = styled.p`
`