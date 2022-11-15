import { Component } from "react";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import Logo from '../images/logo.png';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <HeaderStyle className="App-Header">
        <Navbar bg="light" expand="lg" className="Header-Nav">
          <Container className="Nav-Container">
            <Navbar.Brand>
              <NavLink to="/" className="Nav-Brand">
              <h1>
                أكاديمية
                <span>أجاد</span>
              </h1>
              <img src={Logo} alt="logo" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="Nav-Links">
              <Nav className="ms-auto">
                <Nav.Link>
                  <NavLink to="/" className="Link">الرئيسية</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/SecFour" className="Link">تواصل</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/SecOne" className="Link">الدبلومات</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/SecFive" className="Link">المنتدى</NavLink>
                </Nav.Link>
                <Nav.Link>
                <NavLink to="/SecFive2" className="Link">المدونة</NavLink>
                </Nav.Link>
                <NavDropdown title="التسويق بالعمولة" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="Link">دخول المسوق</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="Link">
                    قدم طلب انضمام
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="Link">
                    دخول خاص
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="Link">
                    الشروط والأحكام
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                <NavLink to="/SecFive3" className="Link">التسجيل</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HeaderStyle>
    );
  }
}

export default Header;
