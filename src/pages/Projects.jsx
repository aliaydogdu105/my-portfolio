import ProjectCards from "../components/ProjectCards";
import { data } from "../helpers/data";

const Projects = () => {
  return (
    <div
      className="about d-flex justify-content-center align-items-center flex-column"
      id="projects"
    >
      <h1 className=" text-white text-decoration-underline pb-5">Projects</h1>
      <div
        className="projects d-flex justify-content-center align-items-center flex-wrap "
        style={{ gap: "90px" }}
      >
        {data.map((projectcards) => {
          return <ProjectCards key={projectcards.id} {...projectcards} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
