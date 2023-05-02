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
      <h2 className=" text-white display-3 my-5 p-2 border border-2 bg-black w-auto text-center" style={{"font-family" : "Audiowide, sans-serif"}}>
        Certifications
      </h2>
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
