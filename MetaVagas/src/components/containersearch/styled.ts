import styled from "styled-components"

export const Container = styled.div`
    width: 90%;
    max-width: 75rem;
    height: 15rem;
    background: #FFFFFF;
    z-index: 1;
    position: absolute;

    top: 38.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; /* Isso centralizará vertical e horizontalmente */

    border-radius: 16px;
`

export const InputSearch = styled.input`
    width: 450px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #D1D1D1;
    text-align: center;

    &::placeholder {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
        line-height: 30px;

        padding-right: 3.5rem;
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
    cursor: pointer;
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
    text-align: center;

    &::placeholder {
        font-family: 'Poppins';
        font-weight: 400;
        font-style: italic;
        font-size: 16px;
        line-height: 30px;

        text-align: left;
        padding-left: 3rem;
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
`