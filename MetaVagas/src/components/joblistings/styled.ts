import styled from "styled-components"


export const Title = styled.p`
    width: 702px;
    height: 48px;

    font-family: 'Poppins';
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -2%;
`

export const ContainerJobListings = styled.div`
    margin-top: 12rem;
    padding-left: 23rem;

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(340px, 1.2fr) 2fr;
    grid-gap: 1rem;
`

export const CardJobListings = styled.div`
    width: 570px;
    height: 191px;

    background: #FFFFFF;
    border: 1px solid #ECF1F4;
    border-radius: 16px;
    box-shadow: 0px 15px 35px 0px #D0D0D033;

`

export const TitleCard = styled.div`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 24.57px;
    color: #1A1033;
    padding: 2rem;
`