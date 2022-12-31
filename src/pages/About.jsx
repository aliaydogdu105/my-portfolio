import React from "react";
// import AboutText from "../components/AboutText";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import { certificate } from "../helpers/certificate";

const About = () => {
  return (
    <div
      className="about d-flex justify-content-center align-items-center flex-column"
      id="about"
    >
      {/* <AboutText /> */}
      <h1 className="text-white mb-4">Certifications</h1>
      <div className="projects d-flex justify-content-center align-items-center flex-wrap">
        {certificate.map((certificateData) => {
          return (
            <Certifications key={certificateData.id} {...certificateData} />
          );
        })}
      </div>
      <Skills />
    </div>
  );
};

export default About;
