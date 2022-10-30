import React from "react";
import AboutText from "../components/AboutText";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import { certificate } from "../helpers/certificate";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center flex-column">
      <AboutText />
      <Skills />
      <div className="projects d-flex justify-content-center align-items-center flex-wrap">
        {certificate.map((certificateData) => {
          return (
            <Certifications key={certificateData.id} {...certificateData} />
          );
        })}
      </div>
    </div>
  );
};

export default About;
