import styled from "styled-components"

const media992to1199 = `
    @media (min-width: 992px) and (max-width: 1199px)
`;
const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Container = styled.div`
    width: 75rem;
    height: 15rem;
    background: #FFFFFF;
    z-index: 1;
    position: absolute;

    top: 38.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    border-radius: 16px;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        width: 85%;
        margin-left: 8rem;
        
    }
`

export const InputSearch = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    padding-left: 3rem;

    &::placeholder {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
        line-height: 30px;

        
    }
    
    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        width: 425px;
    }
`

export const Title = styled.p`
    width: 100%;
    height: 24px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #1A1033;

    margin-bottom: 10px;
`

export const ContentInputSearch = styled.div`
    padding: 2rem;
`

export const IconSearch = styled.button`
    position: absolute;
    border: 0;
    background: transparent;
    left: 4rem;
    bottom: 8.4rem;
    width: 24px;
    height: 24px;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        left: 0;
        left: 4.3rem;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const InputLocation = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    padding-left: 3rem;

    &::placeholder {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
        line-height: 30px;

        text-align: left;
        
    }

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        width: 420px;
    }
`

export const ContentInputLocation = styled.div`
    
`

export const ButtonSearch = styled.div`
    width: 158px;
    height: 55px;
    border-radius: 8px;
    background: #FBB04D;
    cursor: pointer;

    margin-top: 2rem;
    padding: 1rem 0 0 3.2rem;

    color: #1A1033;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`

export const IconPin = styled.div`
    position: absolute;
    border: 0;
    background: transparent;
    top: 5rem;
    right: 38rem;

    ${media992to1199} {
        width: auto;
    }

    ${media1200to1919} {
        right: 0;
        right: 36rem;
    }
`

export const RecentSearch = styled.div`
    display: flex;
    align-items: center;
`
export const TitleRecentSearch = styled.div`
    width: 13rem;
    height: 20px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #1A1033;

    padding-left: 3.2rem;
    margin-right: 1rem;
`

export const MiniCard = styled.button`
    width: 52px;
    height: 32px;

    margin-left: 1rem;

    border-radius: 8px;
    border: 1px solid #B2A1D9;
    color: #B2A1D9;
    background: transparent;
`