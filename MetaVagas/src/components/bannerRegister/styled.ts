import styled from "styled-components";

const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

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

export const CardEyeConfirm = styled.button`
    position: absolute;
    right: 26rem;
    bottom: 27.2rem;
    border: 0;
    background: transparent;

    cursor: pointer;

    ${media1200to1919} {
        left: 0;
        left: 73.2rem;
        top: 31rem;
    }
`