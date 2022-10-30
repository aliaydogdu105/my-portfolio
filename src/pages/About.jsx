import React from "react";
import AboutText from "../components/AboutText";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import { certificate } from "../helpers/certificate";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center flex-column">
      <h1>Certifications</h1>
      <div className="projects d-flex justify-content-center align-items-center flex-wrap">
        {certificate.map((certificateData) => {
          return (
            <Certifications key={certificateData.id} {...certificateData} />
          );
        })}
      </div>
      <AboutText />
      <Skills />
    </div>
  );
};

export default About;
