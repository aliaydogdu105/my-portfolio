import React from "react";
import ProjectCards from "../components/ProjectCards";
import { data } from "../helpers/data";

const Projects = () => {
  return (
    <div className="projects d-flex justify-content-center flex-wrap vh-100">
      {data.map((projectcards) => {
        return <ProjectCards key={projectcards.id} {...projectcards} />;
      })}
    </div>
  );
};

export default Projects;
