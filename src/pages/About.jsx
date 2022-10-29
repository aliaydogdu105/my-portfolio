import React from "react";
import AboutText from "../components/AboutText";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center flex-column">
      <AboutText />
      <Skills />
      <Certifications />
    </div>
  );
};

export default About;
