import styled from "styled-components";

const Foot = styled.div`
display : flex;
width : 100%;
height : 364px;
background: #1A1033;
justify-content : center;
>div{
    text-align : left;
    font-family : Poppins;
    width : 80%;
    border-top : 1px solid #FBB04D;
    padding-bottom : 1%;
    display : flex;
    flex-wrap : wrap-reverse;
    justify-content : space-between;
    color : white;
    .logo{
        width : 189px;
    }
    .contact{
        width : 335px;
        >div{
            display : flex;
            align-items : center;
            gap : 2px;
        }
    }
    .register{
        width : 480px;
        align-items : start;
    }
    div{
        padding-top: 5%;
    }
    h1{
        margin-top : -10px;
        font-size : 32px;
        text-align : center;
    }
    p{
        font-size : 16px;
    }
    span{
        color : #FBB04D;
    }
}
`

export default {
    Foot
}