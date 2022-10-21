import ProjectCards from "../components/ProjectCards";
import { data } from "../helpers/data";

const Projects = () => {
  return (
    <div className="projects d-flex justify-content-center align-items-center flex-wrap">
      {data.map((projectcards) => {
        return <ProjectCards key={projectcards.id} {...projectcards} />;
      })}
    </div>
  );
};

export default Projects;
