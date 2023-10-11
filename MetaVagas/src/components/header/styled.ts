import styled from "styled-components"

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

    z-index: 1;
`
export const ContentImg = styled.div`
    padding-left: 20rem;
    cursor: pointer;
`

export const ContentButton = styled.div`
    padding-right: 15rem;
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