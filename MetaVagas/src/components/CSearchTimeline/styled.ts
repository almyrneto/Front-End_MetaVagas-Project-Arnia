import styled from 'styled-components'

type TextActive = {
    active?: boolean
}

const media1200to1919 = `
    @media (min-width: 1200px) and (max-width: 1919px)
`;

export const Container = styled.div`
    width: 100%;
    height: 350px;

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

export const ContainerButton = styled.div`
    margin-left: 21.5rem;
    margin-top: 1vh;
`

export const ButtonVacancie = styled.button<TextActive>`
    width: 88px;
    height: 35px;

    border-radius: 8px;
    border: 1px solid ${({ active }) => active ? "#FFFFFF" : "#B2A1D9"};
    gap: 8px;
    color: ${({ active }) => active ? "#FFFFFF" : "#B2A1D9"};
    background: ${({ active }) => active ? "#FBB04D" : "transparent"};

    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    text-align: center;

    margin-right: 1rem;
`

export const ContainerText = styled.div`
    margin-top: 3rem;
    margin-left: 21.5rem;
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    width: 660px;
    height: 30px;

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 30.08px;
    color: #FFFFFF;
`

export const TextItalic = styled.span`
    font-family: 'Poppins';
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
    line-height: 24px;
    margin-left: 5px;
    margin-right: 5px;

`

export const ButtonSave = styled.button`
    display: flex;
    align-items: center;
    width: 159px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background: #6950A1;
    
    color: #FFFFFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    cursor: pointer;
    padding-left: 10px;
`