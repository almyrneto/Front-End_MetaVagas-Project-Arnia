import styled from "styled-components";

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;
const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35rem;
    padding-top: 6rem;
    background: #1A1033;
`

export const ContentText = styled.div`
    margin-top: 6.5rem;
    

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        width: 100%;
        margin: 0;
        margin-top: 5rem;
        margin-left: 9rem;
    }
`

export const ContentImg = styled.div`
    margin-left: 4.5rem;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        margin: 0;
        margin-right: 5rem;
    }
`


export const Img = styled.img`
    width: 715px;
    height: 497.61px;
`