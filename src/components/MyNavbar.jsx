import { useEffect, useState } from "react";
import { Anchor } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo/Logo.gif";
import DigitalClock from "./DigitalClock";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <Navbar
        className="navbar-fixed-top"
        sticky="top"
        variant="dark"
        expanded={expanded}
        expand="sm"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Container>
          <Navbar.Brand
            as={Anchor}
            href="/"
            onClick={(e) => {
              let home = document.getElementById("home");
              e.preventDefault();
              setTimeout(() => {
                setExpanded(false);
              }, 100);
              home &&
                home.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              window.history.pushState("home", "home", "/");
            }}
          >
            <img src={logo} alt="Ali" className="logo" />
          </Navbar.Brand>
          <DigitalClock />
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <a
                href="/projects"
                className="text-white text-decoration-none navlinks"
                onClick={(e) => {
                  let projects = document.getElementById("projects");
                  e.preventDefault();
                  setTimeout(() => {
                    setExpanded(false);
                  }, 100);
                  projects &&
                    projects.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  window.history.pushState("projects", "projects", "/projects");
                }}
              >
                Projects
              </a>
              <a
                href="/about"
                className="text-white text-decoration-none mx-3 navlinks"
                onClick={(e) => {
                  let about = document.getElementById("about");
                  e.preventDefault();
                  setTimeout(() => {
                    setExpanded(false);
                  }, 100);
                  about &&
                    about.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  window.history.pushState("about", "about", "/about");
                }}
              >
                About
              </a>
              <a
                href="/"
                className="text-white text-decoration-none navlinks"
                onClick={(e) => {
                  let contact = document.getElementById("contact");
                  e.preventDefault();
                  setTimeout(() => {
                    setExpanded(false);
                  }, 100);
                  contact &&
                    contact.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  window.history.pushState("contact", "contact", "/contact");
                }}
              >
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
