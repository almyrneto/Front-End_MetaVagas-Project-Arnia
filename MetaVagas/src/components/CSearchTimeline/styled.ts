import styled from 'styled-components'

const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Container = styled.div`
    width: 100%;
    height: 288px;

    background: #1A1033;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 7rem;
    padding-left: 21.5rem;

    ${media1200to1919} {
        padding: 0;
        padding-top: 7rem;
        padding-left: 10rem;
    }
`

export const InputTitle = styled.p`
    width: 190px;
    height: 24px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;

    margin-bottom: 5px;
`

export const ContainerInputS = styled.div`

`

export const ContainerInputL = styled.div`
    padding-left: 2rem;
`

export const InputSearch = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 2px solid #D1D1D1;
    outline: none;
    
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08;
    color: #1A1033;

    padding-left: 3rem;

    &::placeholder {
        font-family: 'Poppins';
        font-size: 16px;
        line-height: 30.08px;
        font-style: italic;

        color: #A6A8AB;

    }
`

export const InputLocation = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 2px solid #D1D1D1;
    outline: none;
    
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08;
    color: #1A1033;

    padding-left: 3rem;

    &::placeholder {
        font-family: 'Poppins';
        font-size: 16px;
        line-height: 30.08px;
        font-style: italic;

        color: #A6A8AB;

    }
`

export const ButtonSearch = styled.button`
    width: 158px;
    height: 55px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1A1033;

    border-radius: 8px;
    gap: 8px;
    background: #FBB04D;
    cursor: pointer;

    margin-top: 1.7rem;
    margin-left: 2rem;
`

export const IconPin = styled.button`
    position: absolute;
    border: none;
    background: transparent;
    bottom: 39.8rem;
    top: 0;
    left: 52.5rem;

    ${media1200to1919} {
        left: 0;
        bottom: 0;

        bottom: 20rem;
        right: 4vh;
    }
`

export const IconSearch = styled.button`
    position: absolute;
    border: none;
    background: transparent;
    left: 22.5rem;
    bottom: 49.4rem;

    ${media1200to1919} {
        left: 0;
        bottom: 0;

        bottom: 72vh;
        left: 27vh;
    }
`