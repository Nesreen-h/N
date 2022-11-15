import styled from "styled-components";
import Bc2 from "../images/bc2.png";

const SecFiveStyle = styled.section`
  padding: calc(60px + 90px) 0 60px 0;
  background-image: url(${Bc2});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(29,61,198,.2);
    z-index: 1;
  }

  .About-Content {
    color: #fff;
    position: relative;
    z-index: 2;
  }

  .About-Content > p {
    margin-bottom: 30px;
  }

  .About-Content .About-Head {
    display: flex;
    align-items: center;
  }
  .About-Content .About-Head img {
    width: 100px;
  }

  .About-Content .About-Foot span {
    margin-left: 20px;
  }

  .About-Content .About-Foot span .Icon {
    margin-left: 10px;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    .About-Content {
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    .About-Content .About-Head {
      justify-content: center;
    }
  }





`

export default SecFiveStyle;