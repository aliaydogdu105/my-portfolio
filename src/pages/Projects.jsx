import ProjectCards from "../components/ProjectCards";
import { data } from "../helpers/data";

const Projects = () => {
  return (
    <div
      className="about d-flex justify-content-center align-items-center flex-column"
      id="projects"
    >
      <h2 className=" text-white display-3 mb-5 p-2 border border-2 bg-black w-auto text-center" style={{"font-family" : "Audiowide, sans-serif"}}>Projects</h2>
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
