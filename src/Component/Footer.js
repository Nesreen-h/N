import { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <FooterStyle className="App-Footer">
        <Container>
          جميع الحقوق محفوظة لشركة اجاد للتطوير المحدودة 2021 ©
        </Container>
      </FooterStyle>
    );
  }
}

export default Footer;
