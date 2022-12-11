import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/Logo.gif";
import DigitalClock from "./DigitalClock";

function MyNavbar() {
  return (
    <>
      <Navbar
        className="navbar-fixed-top"
        sticky="top"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="sm"
        style={{
          borderBottom: "solid 2px black",
        }}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="Ali" className="logo" />
          </Navbar.Brand>
          <DigitalClock />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link eventKey="1" as={NavLink} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link eventKey="2" as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey="3" as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
