import { Component } from "react";
import SecFiveStyle from "./SecFiveStyled";
import { Container } from "react-bootstrap";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class SecFive extends Component {
  render() {
    return (
      <SecFiveStyle className="App-About">
        <Container>
          <div className="About-Content">
            <div className="About-Head">
              <img src={Logo} alt="logo"></img>
              <h2>أكاديمية أجاد</h2>
            </div>
            <p>
              اكاديمية اجاد علامة تجارية ملك شركة اجاد المحدودة. مسجلة في سجل
              المملكة المتحدة لمقدمي خدمات التعليم برقم 10088684
            </p>
            <p>شركة مسجلة في انجلترا وويلز برقم 13063025 .</p>
            <div className="About-Foot">
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="Icon"
                ></FontAwesomeIcon>
                <span>لديك أي استفسار؟</span>
              </span>
              <span>00966550087807</span>
            </div>
          </div>
        </Container>
      </SecFiveStyle>
    );
  }
}

export default SecFive;
