import styled from "styled-components"

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;
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
    


    ${media992to1199} {
        width: auto;
        
        
        
    }

    ${media1200to1919} {
        width: 100%;
        padding: 0;
        padding-right: 3.5rem;
        padding-left: 1rem;
    }

`

export const LineHeader = styled.div`
    content: "";
        position: absolute;
        left: 21.5rem;
        top: 90px;
        width: 63%;
        height: 1px;
        background: #08001A;

        ${media1200to1919} {
            width: 83%;
            left: 9rem;
    }
`

export const ContentImg = styled.div`
    padding-left: 20rem;
    cursor: pointer;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        padding: 0;
        padding-left: 8rem;
    }
`

export const ContentButton = styled.div`
    padding-right: 15rem;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        padding: 0;
        padding-right: 1.5rem;
    }
`

export const ButtonLogin = styled.button`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #FFFFFF;
    background: transparent;

    border-radius: 8px;
    border: 1px solid ;
    width: 127px;
    height: 56px;

    cursor: pointer;
`

export const ButtonRegister = styled.button`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #1A1033;
    background: #FBB04D;

    width: 302px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid;

    margin-left: 1rem;
    cursor: pointer;
`

// export const Line = styled.div`
//     width: 50%;
//     height: 5rem;
//     border: 1px solid #08001A;
// ;
//     background: #08001A;
// `