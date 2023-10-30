import styled from "styled-components";

const Container = styled.div`
  padding: 115px 135px 135px 135px;
  text-align: left;

  h1 {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 32px;
    color: #1a1033;

    span {
      font-weight: 600;
    }
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 18px;
    color: #4a4a68;
  }
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 1400px;

  .filters {
    /* general */
    padding: 20px;
    width: 270px;
    height: 1115px;
    border-radius: 16px;
    border: 1px;

    /*Branco*/
    background: linear-gradient(0deg, #ffffff, #ffffff);
    /* linear-gradient: linear-gradient(0deg, #ECF1F4, #ECF1F4); */

    /*Tons de cinza*/
    box-shadow: 0px 15px 35px 0px #d0d0d033;
    span {
      //styleName: text 16px medium;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
    }
    .title {
      display: flex;
      align-items: end;
      gap: 5px;
      margin-bottom: 24px;
    }
    h3 {
      font-family: Poppins;
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
    }
    a {
      /*styleName: small 14px bold;*/
      font-family: Poppins;
      text-decoration-line: underline;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      color: #6950a1;
      cursor: pointer;
    }

    > button {
      background: #fbb04d;
      width: 222px;
      height: 40px;
      margin-top: 24px;
      left: 159px;
      padding: 11px, 24px, 10px, 24px;
      border-radius: 8px;
      gap: 8px;

      //styleName: text 16px medium;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: center;

      cursor: pointer;
    }
  }

  .vacancies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 900px;

    .grafic_box {
      text-align: left;
      min-width: 380px;
      width: 49%;
      height: 269px;
      border-radius: 16px;
      background: linear-gradient(0deg, #ecf1f4, #ecf1f4),
        linear-gradient(0deg, #f3f3f3, #f3f3f3);
      border: 1px solid #ecf1f4;
      padding: 24px 16px 16px 16px;
      margin-bottom: 20px;
      filter: blur(${({ logged }: props) => (logged ? 0 : `0.2rem`)});

      h3 {
        //styleName: small 14px regular;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #000000;
        margin-bottom: 16px;
        span {
          color: #6950a1;
        }
      }

      div {
        width: 366px;
        height: 177px;
        border-radius: 4px, 4px, 0px, 0px;
      }
    }

    .vacancy_box {
      width: 100%;
      height: 301px;
      border-radius: 16px;
      border: 1px solid #ecf1f4;
      padding: 24px;
      margin-bottom: 30px;
      background: linear-gradient(0deg, #ffffff, #ffffff),
        linear-gradient(0deg, #ecf1f4, #ecf1f4);

      > h3 {
        /*styleName: subtitle 18px medium;*/
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0px;
        text-align: left;

        /*Preto*/
        color: #4a4a68;
      }
      .jobTitle {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        > h4 {
          /*styleName: small 14px bold;*/
          font-family: Poppins;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: right;

          > span {
            /*styleName: small 14px regular;*/
            font-weight: 400;
            /*Cinza*/
            color: #8c8ca1;
          }
        }
      }
      h5 {
        //styleName: small 14px regular;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #4a4a68;
        margin-bottom: 10px;
        filter: blur(${({ logged }: props) => (logged ? 0 : `0.2rem`)});
      }

      > p {
        /*styleName: small 14px regular;*/
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;
        text-align: left;
        /*Preto*/
        color: #4a4a68;
      }

      .technologies {
        display: flex;
        gap: 5px;
        margin-bottom: 20px;
      }

      .technology_in_this_vacancy {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 60px;
        padding: 0px 5px 0px 5px;
        height: 30px;
        padding: 11px, 24px, 10px, 24px;
        border-radius: 8px;
        border: 1px solid #6950a1;
        gap: 8px;
        /*styleName: small 14px regular;*/
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        /*Cinza*/
        color: #6950a1;
      }
      > .vacancyInfo {
        display: flex;
        align-items: center;
        filter: blur(${({ logged }: props) => (logged ? 0 : `0.2rem`)});
        p {
          //styleName: small 14px bold;
          font-family: Poppins;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: left;
          margin: 30px 30px 30px 2px;
          span {
            //styleName: small 14px regular;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0px;
            text-align: left;
          }
        }
      }
    }
  }
`;

const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type props = { checked: boolean; logged?: boolean };
const CheckboxContainer = styled.div`
  width: 120px;
  height: 35px;
  margin: 0px 4px;
  border-radius: 5px;

  background-color: ${({ checked }: props) => (checked ? "#fff" : "#fff")};

  display: flex;
  justify-content: left;
  align-items: center;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })``;
const Text = styled.label`
  color: #212121;
  //styleName: small 14px regular;
  font-family: Poppins;
  font-size: 14px;
  font-weight: ${({ checked }: props) => (checked ? 700 : 400)};
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 5px;
  //background: #212121;
`;

export default {
  Container,
  Display,
  StyledCheckbox,
  CheckboxContainer,
  HiddenCheckbox,
  Text,
};
