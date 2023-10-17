import styled from "styled-components";

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;
const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const ContentCard = styled.div`
    display: flex;

    padding-top: 15rem;
    padding-left: 21rem;

    ${media992to1199} {
        width: auto;
        padding: 0;
        padding-top: 10rem;
        
    }

    ${media1200to1919} {
        width: auto;
        padding: 0;
        padding-top: 12rem;
        padding-left: 9rem;
    }
`

export const Title = styled.h1`
    width: 248px;
    height: 144px;

    font-family: 'Poppins';
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -2%;
    color: #1A1033;
    
`

export const CardTuto = styled.div`
    width: 270px;
    height: 244px;

    border-radius: 16px;
    background: #6950A1;

    margin-left: 3.2rem;

    ${media992to1199} {
        width: auto;
        margin-left: 1px;
    }

    ${media1200to1919} {
        width: auto;
        margin-left: 2.5rem;
    }
`

export const NumberCard = styled.p`
    width: 18px;
    height: 25px;
    
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #FFFFFF;

    padding: 1rem;
    margin-left: 1rem;
`

export const TitleCard = styled.p`
    width: 250px;
    height: 25px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #FBB04D;

    padding-top: 1rem;
    padding-left: 2rem;
`

export const TextCard = styled.p`
    width: 250px;
    height: 93px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #FFFFFF;

    padding: 2rem;
`