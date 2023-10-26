import styled from "styled-components"

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;
const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Title = styled.p`
    width: 702px;
    height: 48px;

    font-family: 'Poppins';
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -2%;

    margin-bottom: 3rem;
`

export const ContainerJobListings = styled.div`
    margin-top: 12rem;
    margin-bottom: 10rem;
    padding-left: 23rem;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        margin: 0;
        padding: 0;
        margin-top: 13rem;
        padding-left: 9rem;
    }

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(340px, 1.3fr) 2fr;
    grid-gap: 1rem;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        display: grid;
        grid-template-columns: minmax(340px, 1.3fr) 1.4fr;
        grid-gap: 1rem;
    }
`

export const CardJobListings = styled.div`
    width: 570px;
    height: 191px;

    background: #FFFFFF;
    border: 2px solid #ECF1F4;
    border-radius: 16px;
    box-shadow: 0px 15px 35px 0px #D0D0D033;

`

export const TitleCard = styled.div`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #1A1033;
    padding: 2rem;
`

export const ContentCard = styled.p`
    display: flex;
    width: 300px;
    height: 20px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    color: #4A4A68;

    padding-left: 2rem;
`

export const ContentTechnology = styled.p`
    display: flex;
    width: 230px;
    height: 20px;
    
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    color: #4A4A68;

    margin-top: 1rem;
    padding-left: 2rem;
`
export const ButtonRegister = styled.button`
    
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #1A1033;
    background: #FBB04D;
    border: none;

    width: 357px;
    height: 56px;
    border-radius: 8px;
    
    margin-top: 2rem;
    margin-left: 25rem;
    cursor: pointer;
`

export const ContentIcon = styled.div`
    padding-right: 8px;
`

export const DetailsPlus = styled.p`
    width: 200px;
    height: 20px;

    font-family: 'Poppins';
    font-weight: 700;
    font-size: 14px;
    line-height: 19.6px;

    color: #5D5FEF;

    padding-top: 1rem;
    padding-left: 2rem;

    cursor: pointer;
`