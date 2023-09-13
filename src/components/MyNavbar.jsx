import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/Logo.gif";
import DigitalClock from "./DigitalClock";
import "animate.css";

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
          backgroundImage: "linear-gradient(180deg, black 0%, transparent 90%)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
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
              window.history.pushState("home", "home", "/"); //{ pathname, search, hash }
            }}
          >
            <img
              src={logo}
              alt="Ali"
              className="logo animate__animated animate__flipInY animate__delay-1s"
            />
          </Navbar.Brand>
          <DigitalClock />
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center fw-bold space-left2">
              <NavLink
                to="/projects"
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
              </NavLink>
              <NavLink
                to="/certifications"
                className="text-white text-decoration-none mx-3 navlinks"
                onClick={(e) => {
                  let certifications =
                    document.getElementById("certifications");
                  e.preventDefault();
                  setTimeout(() => {
                    setExpanded(false);
                  }, 100);
                  certifications &&
                    certifications.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  window.history.pushState(
                    "certifications",
                    "certifications",
                    "/certifications"
                  );
                }}
              >
                Certifications
              </NavLink>
              <NavLink
                to="/contact"
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
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
