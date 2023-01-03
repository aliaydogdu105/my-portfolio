import React from "react";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import { certificate } from "../helpers/certificate";

const About = () => {
  return (
    <div
      className="about d-flex justify-content-center align-items-center flex-column"
      id="about"
    >
      <h1 className="text-white text-decoration-underline py-5">
        Certifications
      </h1>
      <div
        className="projects d-flex justify-content-center align-items-center flex-wrap "
        style={{ gap: "90px" }}
      >
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
