import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const ContainerDad = styled.div`
    position: relative;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`