import styled from "styled-components";

const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 7.5rem;
    padding-left: 1.5rem;
    width: 100%;
    height: 4.5rem;
    background: #1A1033;

    position: fixed;

    z-index: 3;

    ${media1200to1919} {
        width: 100%;
        padding: 0;
        padding-right: 3.5rem;
        padding-left: 1rem;
    }

`

export const ContentImg = styled.div`
    padding-left: 20rem;
    cursor: pointer;

    ${media1200to1919} {
        padding: 0;
        padding-left: 9rem;
    }
`

export const ContentName = styled.div`
    display: flex;
    align-items: center;
    padding-right: 25rem;

    ${media1200to1919} {
        padding: 0;
        padding-right: 2rem;
    }
`
export const TextShortName = styled.div`
    width: 22px;
    height: 25px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #6950A1;

    margin-left: 1.2vh;

    ${media1200to1919} {
        margin: 0;
        margin-left: 1.9vh;
    }

`

export const CardShortName = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: none;
    background: #FBB04D;

    
`

export const CardName = styled.div`
    padding-left: 1rem;
`

export const TextName = styled.p`
    width: 140px;
    height: 25px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #FFFFFF;
    cursor: default;
`

export const CardIcon = styled.div`
    
`