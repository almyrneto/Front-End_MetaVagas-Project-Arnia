import styled from "styled-components"

export const Container = styled.div`
    width: 75rem;
    height: 15rem;
    background: #FFFFFF;
    z-index: 1;
    position: absolute;

    top: 51.5vh;
    left: 35vh;

    border-radius: 16px;
`

export const InputSearch = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;

    &::placeholder {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
        line-height: 30px;

        text-align: center;
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

export const ButtonSearch = styled.button`
    position: absolute;
    border: 0;
    background: transparent;
    left: 4rem;
    bottom: 8.3rem;
    width: 24px;
    height: 24px;
    cursor: pointer;
`