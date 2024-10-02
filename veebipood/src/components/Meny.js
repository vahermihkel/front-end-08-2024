import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Meny() {
  const { t, i18n } = useTranslation();

  const changeLangEt = () => {
    i18n.changeLanguage("et");
    // localStorage-st võtmiseks ---> localStorage.getItem("VÕTI")
    // localStorage-sse pannes ---> localStorage.setItem("VÕTI", "UUS_VÄÄRTUS");
    localStorage.setItem("keel", "et");
  }

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/tooted">Veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("nav.haldama")}</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">Ostukorvi</Nav.Link>
            <Nav.Link as={Link} to="/shops">Meie poed</Nav.Link>
          </Nav>
          <Nav>
            <button onClick={changeLangEt}>EST</button>
            <button onClick={changeLangEn}>ENG</button>
            <Nav.Link as={Link} to="/logi-sisse">Login</Nav.Link>
            <Nav.Link as={Link} to="/registreeru">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Meny;