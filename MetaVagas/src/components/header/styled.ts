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
`

export const ContentButton = styled.div`
    padding-right: 15rem;
`

export const ButtonLogin = styled.button`
    color: #FFFFFF;
    background: transparent;
    border-radius: 8px;
    border: 1px solid ;
    width: 80px;
    height: 40px;
    
`

export const ButtonRegister = styled.button`
    background: #FBB04D;
    width: 230px;
    height: 44px;
    border-radius: 8px;
    border: 1px solid;

    color: #1A1033;
`

// export const Line = styled.div`
//     width: 50%;
//     height: 5rem;
//     border: 1px solid #08001A;
// ;
//     background: #08001A;
// `