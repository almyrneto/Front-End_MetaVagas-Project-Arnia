import styled from "styled-components";

type props = {
    selected : boolean;
}
const Container = styled.div`
display : flex;
flex-wrap : wrap;
gap : 8px;
align-items: baseline;
justify-content : space-between;
width : 100%;
padding: 5% 10%;
min-height : 783px;
background: #1A1033;
font-family: Poppins;

div{
    display : flex;
    jusify-content : space-between;

    .registerCard{
        flex-direction : column;
        background : white;
        width : 270px;
        height : 138px;
        padding : 10px;
        border-radius: 8px;
        .characterIcon{
            width : 63px;
            height : 63px;
            border-radius : 50%;
            margin-top : -38px;
            background : #6950A1;
            display:flex;
            justify-content : center;
            align-items : center;
            img{
                height : 24px;
                width : 24px;        
                border-radius: 12px;
            }
        }
    }
}
h1{
    color : #FBB04D;
    font-size : 32px;
    margin-right : 10%;
}
.between{
    justify-content : space-between;
}
.full_width{
    width : 100%;
    align-self : flex-start;
}
.card_selection{
    flex-direction : column;
}
p{
    font-size : 16px;
    color : #1A1033;
}
>.card{
    display : flex;
    align-items : center;
    justify-content : space-between;
    border-radius: 8px;
    background : white;
    width: 290px;
    padding : 0px 20px;
    height : 94px;
    span{
        font-size : 12px;
        color : #8C8CA1;
    }
    a{
        text-decoration : none;
    }
    cursor : pointer;
}
`
const FilterCard = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    margin-top : 5%;
    padding : 3%;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* Tons de cinza/Cinza 300 */
    color: ${({selected}:props) => selected ?  '#FBB04D' : 'white'};
    border: none;
    border-bottom: ${({selected}:props) => selected ?  '3px solid #FBB04D' : '1px solid white'};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    width: 256px;
    height: 36px;
    cursor: pointer;
`

export default{
    Container,
    FilterCard
}