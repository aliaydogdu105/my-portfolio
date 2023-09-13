import ProjectCards from "../components/ProjectCards";
import { data } from "../helpers/data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="about d-flex justify-content-center align-items-center flex-column"
      id="projects"
    >
      <motion.h2
        className=" text-white display-3 mb-5 p-2 border border-2 bg-black w-auto text-center"
        style={{ "font-family": "Audiowide, sans-serif" }}
        initial={{
          scale: 0.9,
        }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: "0.9",
          delay: "0.3",
        }}
      >
        Projects
      </motion.h2>
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
